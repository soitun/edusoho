<?php
namespace Topxia\WebBundle\Controller;

use Topxia\Common\ArrayToolkit;
use Symfony\Component\HttpFoundation\Request;
use Topxia\Common\Paginator;

class CourseHomeworkManageController extends BaseController
{
    public function createHomeworkAction(Request $request, $courseId, $lessonId)
	{
		$course = $this->getCourseService()->tryManageCourse($courseId);
		$lesson = $this->getCourseService()->getCourseLesson($course['id'], $lessonId);
		$user = $this->getCurrentUser();

        if(!$user->isTeacher()) {
            return $this->createMessageResponse('error', '您不是老师，不能查看此页面！');
        }

		if (empty($course)) {
			throw $this->createNotFoundException("课程(#{$courseId})不存在！");
		}

		if (empty($lesson)) {
			throw $this->createNotFoundException("课时(#{$lessonId})不存在！");
		}

		if ($request->getMethod() == 'POST') {

        	$fields = $request->request->all();
        	$homework = $this->getHomeworkService()->createHomework($courseId,$lessonId,$fields);

	        if($homework){
	            return $this->createJsonResponse(array("status" =>"success",'courseId'=>$courseId));
	        } else {
	            return $this->createJsonResponse(array("status" =>"failed")); 
	        }
		}

		return $this->render('TopxiaWebBundle:CourseHomeworkManage:homework-modal.html.twig', array(
            'course' => $course,
            'lesson' => $lesson,
        ));
	}

	public function editHomeworkAction(Request $request,$courseId,$lessonId,$homeworkId)
	{
		$course = $this->getCourseService()->tryManageCourse($courseId);
		$lesson = $this->getCourseService()->getCourseLesson($course['id'], $lessonId);
		$user = $this->getCurrentUser();

        if(!$user->isTeacher()) {
            return $this->createMessageResponse('error', '您不是老师，不能查看此页面！');
        }

		if (empty($course)) {
			throw $this->createNotFoundException("课程(#{$courseId})不存在！");
		}

		if (empty($lesson)) {
			throw $this->createNotFoundException("课时(#{$lessonId})不存在！");
		}

		$homework = $this->getHomeworkService()->getHomework($homeworkId);

		if (empty($homework)) {
			throw $this->createNotFoundException("作业(#{$homeworkId})不存在！");
		}

		$homeworkItems = $this->getHomeworkService()->findHomeworkItemsByHomeworkId($homeworkId);
		$questions = $this->getQuestionService()->findQuestionsByIds(ArrayToolkit::column($homeworkItems, 'questionId'));
        
		if ($request->getMethod() == 'POST') {
			
			$fields = $request->request->all();
			$homework = $this->getHomeworkService()->updateHomework($homeworkId, $fields);

	        if($homework){
	            return $this->createJsonResponse(array("status" =>"success",'courseId'=>$courseId));
	        } else {
	            return $this->createJsonResponse(array("status" =>"failed")); 
	        }
		}

		return $this->render('TopxiaWebBundle:CourseHomeworkManage:homework-modal.html.twig', array(
            'course' => $course,
            'lesson' => $lesson,
            'homework' => $homework,
            'homeworkItems' => $homeworkItems,
            'questions' => $questions,
        ));
	}

	public function removeHomeworkAction(Request $request,$courseId,$lessonId,$homeworkId)
	{
		$result = $this->getHomeworkService()->removeHomework($homeworkId);

        if($result){
            return $this->createJsonResponse(array("status" =>"success"));
        } else {
            return $this->createJsonResponse(array("status" =>"failed")); 
	    }

	}

	public function homeworkItemsAction(Request $request,$courseId,$homeworkId)
	{
        $course = $this->getCourseService()->tryManageCourse($courseId);

        $homework = $this->getHomeworkService()->getHomework($homeworkId);
        if(empty($homework)){
            throw $this->createNotFoundException('作业不存在');
        }

        if ($request->getMethod() == 'POST') {
            $data = $request->request->all();
            var_dump($data);exit();
            if (empty($data['questionId']) or empty($data['scores'])) {
                return $this->createMessageResponse('error', '试卷题目不能为空！');
            }
            if (count($data['questionId']) != count($data['scores'])) {
                return $this->createMessageResponse('error', '试卷题目数据不正确');
            }

            $data['questionId'] = array_values($data['questionId']);
            $data['scores'] = array_values($data['scores']);

            $items = array();
            foreach ($data['questionId'] as $index => $questionId) {
                $items[] = array('questionId' => $questionId, 'score' => $data['scores'][$index]);
            }

            $this->getTestpaperService()->updateTestpaperItems($testpaper['id'], $items);

            $this->setFlashMessage('success', '试卷题目保存成功！');
            return $this->redirect($this->generateUrl('course_manage_testpaper',array( 'courseId' => $courseId)));
        }

        $items = $this->getHomeworkService()->getHomeworkItems($homework['id']);
        $questions = $this->getQuestionService()->findQuestionsByIds(ArrayToolkit::column($items, 'questionId'));

        $targets = $this->get('topxia.target_helper')->getTargets(ArrayToolkit::column($questions, 'target'));

        $subItems = array();
        foreach ($items as $key => $item) {
            if ($item['parentId'] > 0) {
                $subItems[$item['parentId']][] = $item;
                unset($items[$key]);
            }
        }


        return $this->render('TopxiaWebBundle:CourseHomeworkManage:homework-items.html.twig', array(
            'course' => $course,
            'homework' => $homework,
            'items' => ArrayToolkit::group($items, 'questionType'),
            'subItems' => $subItems,
            'questions' => $questions,
            'targets' => $targets,
        ));
	}

	public function homeworkItemPickerAction(Request $request,$courseId)
	{
		$course = $this->getCourseService()->tryManageCourse($courseId);

        $conditions = $request->query->all();

        if (empty($conditions['target'])) {
            $conditions['targetPrefix'] = "course-{$course['id']}";
        }

        $conditions['parentId'] = 0;
        $conditions['excludeIds'] = empty($conditions['excludeIds']) ? array() : explode(',', $conditions['excludeIds']);

        if (!empty($conditions['keyword'])) {
            $conditions['stem'] = $conditions['keyword'];
        }


        $replace = empty($conditions['replace']) ? '' : $conditions['replace'];

        $paginator = new Paginator(
            $request,
            $this->getQuestionService()->searchQuestionsCount($conditions),
            7
        );

        $questions = $this->getQuestionService()->searchQuestions(
                $conditions, 
                array('createdTime' ,'DESC'), 
                $paginator->getOffsetCount(),
                $paginator->getPerPageCount()
        );

        $targets = $this->get('topxia.target_helper')->getTargets(ArrayToolkit::column($questions, 'target'));

        return $this->render('TopxiaWebBundle:CourseHomeworkManage:homework-items-picker.html.twig', array(
            'course' => $course,
            'questions' => $questions,
            'replace' => $replace,
            'paginator' => $paginator,
            'targetChoices' => $this->getQuestionRanges($course, true),
            'targets' => $targets,
            'conditions' => $conditions,
        ));
	}

	public function homeworkItemPickedAction(Request $request,$courseId)
	{
		$course = $this->getCourseService()->tryManageCourse($courseId);

        $question = $this->getQuestionService()->getQuestion($request->query->get('questionId'));
        if (empty($question)) {
            throw $this->createNotFoundException();
        }

        $subQuestions = array();

        $targets = $this->get('topxia.target_helper')->getTargets(array($question['target']));

        return $this->render('TopxiaWebBundle:CourseHomeworkManage:homework-item-picked.html.twig', array(
            'course'    => $course,
            'question' => $question,
            'subQuestions' => $subQuestions,
            'targets' => $targets,
            'type' => $question['type']
        ));
	}

    public function showHomeworkAction(Request $request, $courseId, $lessonId, $homeworkId)
    {
        $course = $this->getCourseService()->getCourse($courseId);
        $homework = $this->getHomeworkService()->getHomework($homeworkId);
        $homeworkItems = $this->getHomeworkService()->findHomeworkItemsByHomeworkId($homeworkId);
        $questionIds = ArrayToolkit::column($homeworkItems,'questionId');
        $questions = $this->getQuestionService()->findQuestionsByIds($questionIds);

        $types = ArrayToolkit::column($questions,'type');
        $types = array_unique($types);
        $types = $this->sortType($types);

        $result = $this->getclassifyQuestionsAndCount($questions);

        return $this->render('TopxiaWebBundle:CourseHomeworkManage:homework-show.html.twig',array(
            'course' => $course,
            'homework' => $homework,
            'items' => $homeworkItems,
            'questions' => $result['newQuetsions'],
            'typeQuestionsNum' => $result['typeQuestionsNum'],
            'types' => $types,
        ));
    }

    public function urgeAction (Request $request, $homeworkId, $userId)
    {
        $homework = $this->getHomeworkService()->getHomework($homeworkId);
        if (empty($homework)) {
            throw $this->createServiceException('作业不存在或者已被删除！');
        }

        $course = $this->getCourseService()->getCourse($homework['courseId']);
        $lesson = $this->getCourseService()->getCourseLesson($course['id'], $homework['lessonId']);
        $student = $this->getUserService()->getUser($userId);
        $teacher = $this->getCurrentUser();

        if (empty($teacher)) {
            throw $this->createServiceException('用户不存在或者尚未登录，请先登录');
        }

        if (empty($student)) {
            throw $this->createServiceException('学生不存在或者已删除，请查验后再发送！');
        }

        if (empty($course)) {
            throw $this->createServiceException('课程不存在或已被删除！');
        }

        if (empty($lesson)) {
            throw $this->createServiceException('课时不存在或者已被删除！');
        }

        $message = $this->getUrgeMessageBody($course, $lesson);
        $this->getMessageService()->sendMessage($teacher['id'], $student['id'], $message);

        return $this->createJsonResponse(true);
    }

    public function homeworkListAction(Request $request, $courseId, $lessonId)
    {
        $status = $request->query->get('status', 'unchecked');

        $course = $this->getCourseService()->tryManageCourse($courseId);
        $lesson = $this->getCourseService()->getCourseLesson($course['id'], $lessonId);
        if (empty($lesson)) {
            throw $this->createNotFoundException("课时(#{$lessonId})不存在！");
        }

        $homework = $this->getHomeworkService()->getHomeworkByCourseIdAndLessonId($course['id'], $lesson['id']);

        $conditions = array('courseId' => $homework['courseId'], 'role' => 'student');
        $paginator = new Paginator(
            $this->get('request'),
            $this->getCourseService()->searchMemberCount($conditions)
            , 25
        );

        $students = $this->getCourseService()->searchMembers(
            $conditions, 
            array('createdTime', 'DESC'), 
            $paginator->getOffsetCount(),
            $paginator->getPerPageCount());

        $studentUserIds = ArrayToolkit::column($students, 'userId');
        $users = $this->getUserService()->findUsersByIds($studentUserIds);
        $homeworkResults = ArrayToolkit::index($this->getHomeworkService()->findHomeworkResultsByCourseIdAndLessonId($course['id'], $lesson['id']), 'userId');

        if (!empty($homeworkResults)) {
            $students = $this->getHomeworkStudents($status, $students, $homeworkResults);
        } else {
            if ($status != 'uncommitted') {
                $students = array();
            }
        }

        $committedCount = $this->getHomeworkService()->searchHomeworkResultsCount(array(
            'commitStatus' => 'committed',
            'courseId' => $course['id'],
            'lessonId' => $lesson['id']
        ));
        $uncommitCount = $this->getCourseService()->searchMemberCount($conditions) - $committedCount;
        $reviewingCount = $this->getHomeworkService()->searchHomeworkResultsCount(array(
            'status' => 'reviewing',
            'courseId' => $course['id'],
            'lessonId' => $lesson['id']
        ));
        $finishedCount = $this->getHomeworkService()->searchHomeworkResultsCount(array(
            'status' => 'finished',
            'courseId' => $course['id'],
            'lessonId' => $lesson['id']
        ));

        return $this->render('TopxiaWebBundle:CourseHomeworkManage:homework-list.html.twig', array(
            'course' => $course,
            'lesson' => $lesson,
            'status' => $status,
            'homework' => empty($homework) ? array() : $homework,
            'students' => $students,
            'users' => $users,
            'homeworkResults' => $homeworkResults,
            'paginator' => $paginator,
            'uncommitCount' => $uncommitCount,
            'reviewingCount' => $reviewingCount,
            'finishedCount' => $finishedCount
        ));
    }

    public function teachingListAction(Request $request)
    {   
        $status = $request->query->get('status', 'unchecked');

        $currentUser = $this->getCurrentUser();
        if (empty($currentUser)) {
            throw $this->createServiceException('用户不存在或者尚未登录，请先登录');
        }
        $homeworks = ArrayToolkit::index($this->getHomeworkService()->findHomeworksByCreatedUserId($currentUser['id']), 'courseId');

        $homeworkCourseIds = ArrayToolkit::column($homeworks, 'courseId');
        $homeworkLessonIds = ArrayToolkit::column($homeworks, 'lessonId');
        $homeworkIds = ArrayToolkit::column($homeworks, 'id');

        $courses = $this->getCourseService()->findCoursesByIds($homeworkCourseIds);
        $lessons = $this->getCourseService()->findLessonsByIds($homeworkLessonIds);

        $conditions = array('courseIds' => $homeworkCourseIds, 'role' => 'student');
        $paginator = new Paginator(
            $this->get('request'),
            $this->getCourseService()->searchMemberCount($conditions)
            , 25
        );

        $students = $this->getCourseService()->searchMembers(
            $conditions,
            array('createdTime', 'DESC'),
            $paginator->getOffsetCount(),
            $paginator->getPerPageCount()
        );
        $studentUserIds = ArrayToolkit::column($students, 'userId');
        $users = $this->getUserService()->findUsersByIds($studentUserIds);
        $homeworkResults = ArrayToolkit::index($this->getHomeworkService()->findHomeworkResultsByHomeworkIds(ArrayToolkit::column($homeworks, 'id')), 'homeworkId');

        $committedCount = $this->getHomeworkService()->searchHomeworkResultsCount(array(
            'commitStatus' => 'committed',
            'checkTeacherId' => $currentUser['id']
        ));
        $uncommitCount = $this->getCourseService()->searchMemberCount($conditions) - $committedCount;
        $reviewingCount = $this->getHomeworkService()->searchHomeworkResultsCount(array(
            'status' => 'reviewing',
            'checkTeacherId' => $currentUser['id']
        ));
        $finishedCount = $this->getHomeworkService()->searchHomeworkResultsCount(array(
            'status' => 'finished',
            'checkTeacherId' => $currentUser['id']
        ));

        if (!empty($homeworkResults)) {
            $students = $this->getHomeworkStudents($status, $students, $homeworkResults);
        } else {
            if ($status != 'uncommitted') {
                $students = array();
            }
        }

        return $this->render('TopxiaWebBundle:CourseHomeworkManage:teaching-list.html.twig', array(
            'status' => $status,
            'homeworks' => empty($homeworks) ? array() : $homeworks,
            'students' => $students,
            'users' => $users,
            'homeworkResults' => $homeworkResults,
            'paginator' => $paginator,
            'courses' => $courses,
            'lessons' => $lessons,
            'uncommitCount' => $uncommitCount,
            'reviewingCount' => $reviewingCount,
            'finishedCount' => $finishedCount
        ));
    }

    public function listAction(Request $request)
    {   
        $status = $request->query->get('status', 'finished');
        $currentUser = $this->getCurrentUser();

        $conditions = array(
            'status' => $status,
            'userId' => $currentUser['id']
        );
        $paginator = new Paginator(
            $this->get('request'),
            $this->getHomeworkService()->searchHomeworkResultsCount($conditions), 
            25
        );
        $homeworkResults = $this->getHomeworkService()->searchHomeworkResults(
            $conditions, 
            array('usedTime', 'DESC'), 
            $paginator->getOffsetCount(),
            $paginator->getPerPageCount()
        );

        $homeworkCourseIds = ArrayToolkit::column($homeworkResults, 'courseId');
        $homeworkLessonIds = ArrayToolkit::column($homeworkResults, 'lessonId');
        $courses = $this->getCourseService()->findCoursesByIds($homeworkCourseIds);
        $lessons = $this->getCourseService()->findLessonsByIds($homeworkLessonIds);

        return $this->render('TopxiaWebBundle:CourseHomeworkManage:list.html.twig',array(
            'status' => $status,
            'homeworkResults' => $homeworkResults,
            'courses' => $courses,
            'lessons' => $lessons,
            'paginator' => $paginator
        ));
    }

    private function getHomeworkStudents($status, $students, $homeworkResults)
    {
        if ($status == 'uncommitted') {
            foreach ($students as &$student) {
                foreach ($homeworkResults as $item) {
                    if ($item['status'] != 'doing' && $item['userId'] == $student['userId'] && $item['courseId'] == $student['courseId']) {
                        $student = null;
                    }
                }
            }
        } 

        if ($status == 'unchecked') {
            foreach ($students as &$student) {
                $key = false;
                foreach ($homeworkResults as $item) {
                    if ($item['status'] == 'reviewing' && $item['userId'] == $student['userId'] && $item['courseId'] == $student['courseId']) {
                        $key = true;
                    }
                }

                if ($key == true) {
                    continue;
                }
                $student = null;
            }
        }

        if ($status == 'finished') {
            foreach ($students as &$student) {
                $key = false;
                foreach ($homeworkResults as $item) {
                    if ($item['status'] == 'finished' && $item['userId'] == $student['userId'] && $item['courseId'] == $student['courseId']) {
                        $key = true;
                    }
                }

                if ($key == true) {
                    continue;
                }
                $student = null;
            }
        }
        return array_filter($students);
    }

    private function getQuestionRanges($course, $includeCourse = false)
    {
        $lessons = $this->getCourseService()->getCourseLessons($course['id']);
        $ranges = array();

        if ($includeCourse == true) {
            $ranges["course-{$course['id']}"] = '本课程';
        }

        foreach ($lessons as  $lesson) {
            $ranges["course-{$lesson['courseId']}/lesson-{$lesson['id']}"] = "课时{$lesson['number']}： {$lesson['title']}";
        }

        return $ranges;
    }

    private function getUrgeMessageBody($course, $lesson)
    {   
        $urgeMessageBody = '你的作业还没提交<a href="'. $this->generateUrl('course_learn', array('id' =>$course['id'])) .'#lesson/'.$lesson['id'].'">（'.$course['title'].'第'.$lesson['number'].'课）</a>，请及时完成并提交。';

        return $urgeMessageBody;
    }
    
    private function getHomeworkService()
    {
        return $this->getServiceKernel()->createService('Course.HomeworkService');
    }

    private function getCourseService()
    {
        return $this->getServiceKernel()->createService('Course.CourseService');
    }

    private function getQuestionService()
    {
        return $this->getServiceKernel()->createService('Question.QuestionService');
    }

    private function getMessageService()
    {
        return $this->getServiceKernel()->createService('User.MessageService');
    }
    
}