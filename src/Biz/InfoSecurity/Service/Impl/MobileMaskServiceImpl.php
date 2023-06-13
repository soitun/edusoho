<?php

namespace Biz\InfoSecurity\Service\Impl;

use Biz\BaseService;
use Biz\InfoSecurity\Dao\MobileAccessLogDao;
use Biz\InfoSecurity\Service\MobileMaskService;
use Biz\System\Service\SettingService;
use Biz\Util\Phpsec\Crypt\AES;
use Biz\Util\Phpsec\Crypt\Base;
use Ramsey\Uuid\Uuid;

class MobileMaskServiceImpl extends BaseService implements MobileMaskService
{
    protected $crypt;

    public function maskMobile($mobile)
    {
        return substr_replace($mobile, '****', 3, 4);
    }

    public function encryptMobile($mobile)
    {
        $plain = "{$mobile}|{$this->getRequest()->getPathInfo()}";

        return base64_encode($this->getCrypt()->encrypt($plain));
    }

    public function decryptMobile($encryptedMobile)
    {
        $plain = $this->getCrypt()->decrypt(base64_decode($encryptedMobile));
        if (empty($plain)) {
            $mobile = $source = '';
        } else {
            list($mobile, $source) = explode('|', $plain);
        }
        $this->createMobileAccessLog($mobile, $source);

        return $mobile;
    }

    protected function createMobileAccessLog($mobile, $source)
    {
        $request = $this->getRequest();
        $log = [
            'userId' => $this->getCurrentUser()->getId(),
            'mobile' => $mobile,
            'source' => $source,
            'referer' => $request->headers->get('Referer'),
            'userAgent' => $request->headers->get('User-Agent'),
            'ip' => $request->getClientIp(),
        ];
        $this->getMobileAccessLogDao()->create($log);
    }

    protected function getCrypt()
    {
        if (empty($this->crypt)) {
            $this->crypt = new AES(Base::MODE_ECB);
            $this->crypt->setKey($this->getEncryptKey());
        }

        return $this->crypt;
    }

    protected function getEncryptKey()
    {
        $mobileEncryptKey = $this->getSettingService()->get('mobile_encrypt_key');
        if (empty($mobileEncryptKey)) {
            $mobileEncryptKey = Uuid::uuid4()->getHex();
            $this->getSettingService()->set('mobile_encrypt_key', $mobileEncryptKey);
        }

        return md5($this->getCurrentUser()->uuid.$mobileEncryptKey);
    }

    protected function getRequest()
    {
        global $kernel;

        return $kernel->getContainer()->get('request_stack')->getMasterRequest();
    }

    /**
     * @return SettingService
     */
    protected function getSettingService()
    {
        return $this->createService('System:SettingService');
    }

    /**
     * @return MobileAccessLogDao
     */
    protected function getMobileAccessLogDao()
    {
        return $this->createDao('InfoSecurity:MobileAccessLogDao');
    }
}
