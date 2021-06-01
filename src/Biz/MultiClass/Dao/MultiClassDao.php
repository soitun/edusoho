<?php

namespace Biz\MultiClass\Dao;

use Codeages\Biz\Framework\Dao\GeneralDaoInterface;

interface MultiClassDao extends GeneralDaoInterface
{
    public function findMultiClassByTitleLike($title);

    public function findByProductIds(array $productIds);

    public function findByProductId($productId);

    public function getByTitle($title);

    public function getByCourseId($courseId);

    public function searchMultiClassJoinCourse($conditions, $orderBys, $start, $limit);
}
