<?php

namespace MarketingMallBundle\Controller\AdminV2;

use AppBundle\Common\SmsToolkit;
use AppBundle\Controller\AdminV2\BaseController;
use Biz\CloudPlatform\CloudAPIFactory;
use Firebase\JWT\JWT;
use MarketingMallBundle\Client\MarketingMallApi;
use Symfony\Component\HttpFoundation\Request;

class MallController extends BaseController
{
    public function indexAction(Request $request)
    {
        $user = $this->getUser();
        if (empty($user['verifiedMobile'])) {
            return $this->redirectToRoute('admin_v2_mall_mobile_bind');
        }
        $mallSettings = $this->getSettingService()->get('marketing_mall', []);
        if (empty($mallSettings)) {
            $mallSettings = $this->initSchool();
        }

        $authorization = JWT::encode(['exp' => time() + 1000 * 3600 * 24, 'userInfo' => $this->getUserInfo(), 'access_key' => $mallSettings['access_key'], 'header' => 'MARKETING_MALL'], $mallSettings['secret_key']);
        $mallUrl = $this->getSchema() . $this->container->getParameter('marketing_mall_url') . '/console-pc/';

        $url = $mallUrl . '?token=' . $authorization . '&code=' . $mallSettings['access_key'] . '&url=' . $this->getSchema() . $_SERVER['HTTP_HOST'];

        $options = [
            'overview' => [
                'isSmsConfigured' => $this->isSmsConfigured(),
                'hasSmsPermission' => $this->getCurrentUser()->hasPermission('admin_v2_edu_cloud_sms_setting'),
                'smsUrl' => $this->generateUrl('admin_v2_edu_cloud_sms_setting'),
                'isWechatMobileConfigured' => $this->isWechatMobileConfigured(),
                'hasWechatMobilePermission' => $this->getCurrentUser()->hasPermission('admin_v2_setting_wechat_auth'),
                'wechatMobileUrl' => $this->generateUrl('admin_v2_setting_wechat_auth'),
            ],
            'dealSetting' => [
                'isWechatMobileConfigured' => $this->isWechatMobileConfigured(),
                'hasWechatMobilePermission' => $this->getCurrentUser()->hasPermission('admin_v2_setting_wechat_auth'),
                'wechatMobileUrl' => $this->generateUrl('admin_v2_setting_wechat_auth'),
            ],
        ];

        return $this->render('MarketingMallBundle:admin-v2/mall:index.html.twig', [
            'url' => $url,
            'options' => $options,
        ]);
    }

    private function isSmsConfigured(): bool
    {
        $smsSetting = $this->setting('cloud_sms', []);
        if (empty($smsSetting['sms_enabled'])) {
            return false;
        }
        //todo 通知记录并缓存
        try {
            $smsInfo = CloudAPIFactory::create('root')->get('/me/sms_account');

            return $smsInfo['usedSmsSign']['name'] && 'success' == $smsInfo['usedSmsSign']['status'];
        } catch (\Exception $e) {
            return false;
        }
    }

    private function isWechatMobileConfigured(): bool
    {
        $wechatSetting = $this->setting('payment', []);
        if (empty($wechatSetting['wxpay_enabled'])) {
            return false;
        }
        if (empty($wechatSetting['wxpay_appid']) || empty($wechatSetting['wxpay_secret']) || empty($wechatSetting['wxpay_mp_secret'])) {
            return false;
        }

        return true;
    }

    public function mobileBindAction(Request $request)
    {
        $scenario = 'sms_bind';

        if ('1' != $this->setting('cloud_sms.sms_enabled') || 'on' != $this->setting("cloud_sms.{$scenario}")) {
            return $this->render('settings/edu-cloud-error.html.twig', []);
        }
        if ($request->isMethod('POST')) {
            list($result, $sessionField) = SmsToolkit::smsCheck($request, $scenario);

            if ($result) {
                $this->getUserService()->changeMobile($this->getCurrentUser()->getId(), $sessionField['to']);

                return $this->createJsonResponse(['message' => 'user.settings.security.mobile_bind.success']);
            } else {
                return $this->createJsonResponse(['message' => 'user.settings.security.mobile_bind.fail'], 403);
            }
        }

        return $this->render('MarketingMallBundle:admin-v2/mall:mobile.html.twig', ['targetUrl' => $this->generateUrl('admin_v2_marketing_mall')]);
    }

    public function introduceAction(Request $request)
    {
        return $this->render('MarketingMallBundle:admin-v2/mall:introduce.html.twig', []);
    }

    protected function initSchool()
    {
        $storages = $this->getSettingService()->get('storage', []);

        $client = new MarketingMallApi($storages);
        $authorization = JWT::encode(['exp' => time() + 1000 * 3600 * 24, 'userInfo' => $this->getUserInfo(), 'access_key' => $storages['cloud_access_key'], 'header' => 'MARKETING_MALL'], $storages['cloud_secret_key']);
        $result = $client->init([
            'token' => $authorization,
            'url' => $this->getSchema() . $_SERVER['HTTP_HOST'],
            'code' => $storages['cloud_access_key'],
        ]);
        $setting = [
            'access_key' => $result['accessKey'],
            'secret_key' => $result['secretKey'],
            'code' => $result['code'],
        ];
        $this->getSettingService()->set('marketing_mall', $setting);
        $this->dispatchEvent('marketing_mall.init', []);

        return $setting;
    }

    private function getUserInfo()
    {
        $user = $this->getUserService()->getUserAndProfile($this->getCurrentUser()->getId());

        return [
            'nickname' => $user['nickname'],
            'truename' => $user['truename'],
            'avatar' => $this->getWebExtension()->getFurl($user['smallAvatar'], 'avatar.png'),
            'mobile' => $user['verifiedMobile'],
            'email' => $user['email'],
        ];
    }

    protected function getSchema()
    {
        $https = empty($_SERVER['HTTPS']) ? '' : $_SERVER['HTTPS'];
        if (!empty($https) && 'off' !== strtolower($https)) {
            return 'https://';
        }

        return 'http://';
    }

    protected function getSettingService()
    {
        return $this->getBiz()->service('System:SettingService');
    }
}