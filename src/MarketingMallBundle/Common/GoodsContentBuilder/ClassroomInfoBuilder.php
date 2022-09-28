<?php

namespace MarketingMallBundle\Common\GoodsContentBuilder;

use AppBundle\Common\ArrayToolkit;
use Biz\Classroom\ClassroomException;
use Biz\Classroom\Service\ClassroomService;

class ClassroomInfoBuilder extends AbstractBuilder
{
    const CLASSROOM_ALLOWED_KEY = ['classroomId', 'classroomCatalogue', 'cover', 'title', 'subtitle', 'about', 'price'];

//    public function build($id)
//    {
//        $classroom = $this->getClassroomService()->getClassroom($id);
//        if (empty($classroom)) {
//            $this->createNewException(ClassroomException::NOTFOUND_CLASSROOM);
//        }
//
//        return $this->buildClassroomData($classroom);
//    }

    public function build($ids)
    {
        $classroom = $this->getClassroomService()->findClassroomsByIds($ids);
        return $classroom;
//        if (empty($classroom)) {
//            $this->createNewException(ClassroomException::NOTFOUND_CLASSROOM);
//        }
//
//        return $this->buildClassroomData($classroom);
    }

    protected function buildClassroomData($classroom)
    {
        $courseIds = ArrayToolkit::column($this->getClassroomService()->findCoursesByClassroomId($classroom['id']), 'id');
        $classroom['classroomId'] = $classroom['id'];
        $classroom['cover'] = $this->transformCover(['small' => $classroom['smallPicture'], 'middle' => $classroom['middlePicture']], 'classroom.png');
        $classroom['classroomCatalogue'] = [];
        foreach ($courseIds as $courseId) {
            $course = $this->getCourseDetailBuilder()->build($courseId);
            unset($course['courseIds']);
            $course['courseId'] = $courseId;
            $classroom['classroomCatalogue'][] = $course;
        }

        $classroom = ArrayToolkit::parts($classroom, self::CLASSROOM_ALLOWED_KEY);
        $classroom['about'] = $this->transformImages($classroom['about']);

        return $classroom;
    }

    /**
     * @return CourseInfoBuilder
     */
    protected function getCourseDetailBuilder()
    {
        return new CourseInfoBuilder($this->biz);
    }

    /**
     * @return ClassroomService
     */
    private function getClassroomService()
    {
        return $this->biz->service('Classroom:ClassroomService');
    }
}
