<?php

namespace Codeages\Biz\ItemBank\Item\Wrapper;

use Biz\CloudFile\Service\CloudFileService;
use Biz\File\Service\UploadFileService;
use Codeages\Biz\Framework\Context\Biz;
use Codeages\Biz\Framework\Util\ArrayToolkit;
use Codeages\Biz\ItemBank\Item\Service\AttachmentService;
use Topxia\Service\Common\ServiceKernel;

class AttachmentWrapper
{
    protected $biz;

    public function __construct(Biz $biz)
    {
        $this->biz = $biz;
    }

    public function wrap($item)
    {
        if (empty($item)) {
            return [];
        }

        $item['attachments'] = $this->getAttachmentService()->findAttachmentsByTargetIdAndTargetType($item['id'], 'item');
        if (empty($item['questions'])) {
            return $item;
        }

        $attachments = $this->getAttachmentService()->findAttachmentsByTargetIdsAndTargetType(
            ArrayToolkit::column($item['questions'], 'id'),
            'question'
        );
        $sortAttachments = ArrayToolkit::group($attachments, 'module');
        foreach ($sortAttachments as $sortAttachment) {
            $attachments = ArrayToolkit::sort($attachments, 'seq', SORT_ASC);
        }
        $attachments = ArrayToolkit::group($attachments, 'target_id');
        foreach ($item['questions'] as &$question) {
            $question['attachments'] = empty($attachments[$question['id']]) ? [] : $attachments[$question['id']];
            foreach ($question['attachments'] as &$attachment) {
                if($attachment['file_type'] == 'video') {
                    $attachment['cloudFile'] = $this->getCloudFileService()->reconvert($attachment['golbal_id'], [
                        'directives' => [],
                    ]);
                }
            }
        }

        return $item;
    }

    /**
     * @return AttachmentService
     */
    protected function getAttachmentService()
    {
        return $this->biz->service('ItemBank:Item:AttachmentService');
    }

    /**
     * @return CloudFileService
     */
    protected function getCloudFileService()
    {
        return $this->biz->service('CloudFile:CloudFileService');
    }
}
