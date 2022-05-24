<?php

namespace MarketingMallBundle\Common\GoodsContentBuilder;

use AppBundle\Common\ArrayToolkit;
use Biz\Classroom\Service\ClassroomService;
use Biz\Course\CourseException;
use Biz\Course\Service\CourseService;
use Biz\Course\Service\CourseSetService;
use Biz\Task\Service\TaskService;
use Biz\Task\Strategy\CourseStrategy;

class CourseInfoBuilder extends AbstractBuilder
{
    const COURSE_ALLOWED_KEY = ['courseIds', 'title', 'subtitle', 'cover', 'summary', 'courseCatalogue', 'teacherList'];

    const TASKS_ALLOWED_KEY = ['title', 'type', 'number', 'counts', 'children', 'isPublish', 'activityType'];

    public function build($id)
    {
        $course = $this->getCourseService()->getCourse($id);

        if (empty($course)) {
            $this->createNewException(CourseException::NOTFOUND_COURSE);
        }

        return $this->buildCourseData($course);
    }

    protected function buildCourseData($course)
    {
        $childrenCourseIds = [];
        $teachers = [];
        $courseSet = $this->getCourseSetService()->findCourseSetsByCourseIds([$course['id']])[1];
        if (0 == $course['parentId']) {
            $childrenCourseIds = ArrayToolkit::column($this->getCourseService()->findCoursesByParentIdAndLocked($course['id'], 1), 'id');
        }
        $teacherIds = ArrayToolkit::column($this->getCourseService()->findTeachersByCourseId($course['id']), 'id');
        foreach ($teacherIds as $teacherId) {
            $teachers[] = $this->getTeacherInfoBuilder()->build($teacherId);
        }
        $courseCatalogue = $this->buildCourseCatalogue($this->getCourseService()->findCourseItems($course['id']));

        return [
            'courseIds' => array_merge([$course['id']], $childrenCourseIds),
            'title' => $course['courseSetTitle'],
            'subtitle' => $courseSet['subtitle'],
            'cover' => $this->transformCover($courseSet['cover']),
            'summary' => $courseSet['summary'],
            'courseCatalogue' => $courseCatalogue,
            'teacherList' => $teachers,
        ];
    }

    protected function buildCourseCatalogue($courseItems)
    {
        return $this->convertToTree($courseItems);
        $courseCatalogue = [];
        $chapterItems = [];
        $unitItems = [];
        $chapterIndex = -1;
        $unitIndex = -1;
        foreach ($courseItems as &$courseItem) {
            if ('chapter' == $courseItem['type']) {
                ++$chapterIndex;
                $unitIndex = -1;
                $courseItem['isPublish'] = 'published' == $courseItem['status'] ? 1 : 0;
                $courseItem = ArrayToolkit::parts($courseItem, self::TASKS_ALLOWED_KEY);
                $chapterItems[] = [$chapterIndex => $courseItem];
            }
            if ('unit' == $courseItem['type']) {
                ++$unitIndex;
                $courseItem['isPublish'] = 'published' == $courseItem['status'] ? 1 : 0;
                $courseItem = ArrayToolkit::parts($courseItem, self::TASKS_ALLOWED_KEY);
                $unitItems[$chapterIndex][] = [$unitIndex => $courseItem];
            }
            if (!empty($courseItem['tasks'])) {
                foreach ($courseItem['tasks'] as $key => &$tasks) {
                    $tasks['type'] = 0 == $key ? 'lesson' : 'tasks';
                    $tasks['activityType'] = $tasks['activity']['mediaType'];
                    $tasks['isPublish'] = 'published' == $tasks['status'] ? 1 : 0;
                    $tasks = ArrayToolkit::parts($tasks, self::TASKS_ALLOWED_KEY);
                    if (-1 == $unitIndex) {
                        $courseCatalogue[] = $tasks;
                    } else {
                        $unitItems[$chapterIndex][$unitIndex]['children'][] = $tasks;
                    }
                }
            }
        }
        foreach ($chapterItems as $key => &$chapter) {
            $tasksNum = 0;
            $lessonNum = 0;
            if (!empty($unitItems[$key])) {
                $chapter['children'] = $unitItems[$key];
                foreach ($chapter['children'] as $unit) {
                    if (!empty($unit['children'])) {
                        $groupedTasks = ArrayToolkit::group($unit['children'], 'type');
                        $tasksNum = empty($groupedTasks['tasks']) ? $tasksNum + 0 : $tasksNum + count($groupedTasks['tasks']);
                        $lessonNum = empty($groupedTasks['lesson']) ? $lessonNum + 0 : $lessonNum + count($groupedTasks['lesson']);
                    }
                }
            }
            $chapter['counts']['unitNum'] = count($chapter['children']);
            $chapter['counts']['tasksNum'] = $tasksNum;
            $chapter['counts']['lessonNum'] = $lessonNum;
            $chapter = ArrayToolkit::parts($chapter, self::TASKS_ALLOWED_KEY);
        }

        return array_merge($courseCatalogue, $chapterItems);
    }

    protected function convertToTree($items)
    {
        global $kernel;
        return $kernel->getContainer()->get('api.util.item_helper')->convertToTree($items);
    }

    /**
     * @param $course
     *
     * @return CourseStrategy
     */
    protected function createCourseStrategy($course)
    {
        return $this->biz->offsetGet('course.strategy_context')->createStrategy($course['courseType']);
    }

    /**
     * @return TeacherInfoBuilder
     */
    protected function getTeacherInfoBuilder()
    {
        return new TeacherInfoBuilder($this->biz);
    }

    /**
     * @return CourseService
     */
    protected function getCourseService()
    {
        return $this->biz->service('Course:CourseService');
    }

    /**
     * @return TaskService
     */
    protected function getTaskService()
    {
        return $this->biz->service('Task:TaskService');
    }

    /**
     * @return CourseSetService
     */
    protected function getCourseSetService()
    {
        return $this->biz->service('Course:CourseSetService');
    }

    /**
     * @return ClassroomService
     */
    protected function getClassroomService()
    {
        return $this->biz->service('Classroom:ClassroomService');
    }
}
