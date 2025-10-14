import Vue from 'vue';
import { Toast } from 'vant';
import store from '@/store';
import * as types from '@/store/mutation-types';
import Router from 'vue-router';
import find from './find';
import learning from './learning';
import my from './my';
import Api from '@/api';
import initShare from '@/utils/weiixn-share-sdk';
import {initTaskWatermark, destroyWatermark} from '@/utils/watermark';

/* eslint-disable no-new */
Vue.use(Router);
// 路由懒加载 实现代码分离
const routes = [
  {
    path: '/',
    meta: {
      title: '',
    },
    component: () =>
      import(/* webpackChunkName: "home" */ '@/containers/home.vue'),
    children: [
      ...find,
      ...learning,
      ...my,
      {
        path: '/prelogin',
        name: 'prelogin',
        meta: {
          i18n: true,
          title: 'title.me',
        },
        component: () =>
          import(
            /* webpackChunkName: "loginPrelogin" */ '@/containers/login/prelogin.vue'
          ),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '',
    },
    component: () =>
      import(/* webpackChunkName: "login" */ '@/containers/login/index.vue'),
  },
  {
    path: '/fastlogin',
    name: 'fastlogin',
    meta: {
      i18n: true,
      title: 'title.login',
    },
    component: () =>
      import(
        /* webpackChunkName: "fastlogin" */ '@/containers/login/fastlogin.vue'
      ),
  },
  {
    path: '/login/qrcode',
    name: 'login_qrcode',
    meta: {
      title: '',
    },
    component: () =>
      import(
        /* webpackChunkName: "login" */ '@/containers/login/face/index.vue'
      ),
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      title: '',
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ '@/containers/register/index.vue'
      ),
  },
  {
    path: '/binding',
    name: 'binding',
    meta: {
      title: '',
    },
    component: () =>
      import(
        /* webpackChunkName: "binding" */ '@/containers/binding/index.vue'
      ),
  },
  {
    path: '/protocol',
    name: 'protocol',
    meta: {
      title: '',
    },
    component: () =>
      import(
        /* webpackChunkName: "protocol" */ '@/containers/register/protocol/index.vue'
      ),
  },
  {
    path: '/editInformation',
    name: 'edit_information',
    meta: {
      i18n: true,
      title: 'title.editInformation',
    },
    component: () =>
      import(
        '@/containers/my/setting/editInformation.vue'
      ),
  },
  {
    path: '/setting',
    name: 'setting',
    meta: {
      i18n: true,
      title: 'title.setting',
    },
    component: () =>
      import(
        '@/containers/my/setting/index.vue'
        ),
  },
  {
    path: '/setting/changePassword',
    name: 'changePassword',
    meta: {
      i18n: true,
      title: 'title.changePassword',
    },
    component: () =>
      import(
        '@/containers/my/setting/changePassword.vue'
        ),
  },
  {
    path: '/setting/nickname',
    name: 'setting_nickname',
    meta: {
      i18n: true,
      title: 'title.nicknameSetting',
    },
    component: () =>
      import(
        /* webpackChunkName: "nickname" */ '@/containers/my/setting/nickname.vue'
      ),
  },
  {
    path: '/setting/lang',
    name: 'settingLang',
    meta: {
      i18n: true,
      title: 'title.switchLanguage',
    },
    component: () => import(/* webpackChunkName: "lang" */ '@/containers/my/setting/lang.vue')
  },
  {
    path: '/course/explore',
    name: 'more_course',
    meta: {
      i18n: true,
      title: 'more.allCourses',
    },
    component: () =>
      import(
        /* webpackChunkName: "more" */ '@/containers/more/course/index.vue'
      ),
  },
  {
    path: '/classroom/explore',
    name: 'more_class',
    meta: {
      i18n: true,
      title: 'more.allClasses',
    },
    component: () =>
      import(
        /* webpackChunkName: "more" */ '@/containers/more/classroom/index.vue'
      ),
  },
  {
    path: '/itembank/explore',
    name: 'more_itembank',
    meta: {
      i18n: true,
      title: 'more.allQuestionBank',
    },
    component: () =>
      import(
        /* webpackChunkName: "more" */ '@/containers/more/itembank/index.vue'
      ),
  },
  {
    path: '/all/explore',
    name: 'all_explore',
    redirect: {
      name: 'more_course',
    },
  },
  {
    path: '/course/explore/vip',
    name: 'vip_course',
    meta: {
      i18n: true,
      title: 'title.membersCourse',
    },
    component: () =>
      import(
        /* webpackChunkName: "more" */ '@/containers/vip/more/course-list.vue'
      ),
  },
  {
    path: '/classroom/explore/vip',
    name: 'vip_classroom',
    meta: {
      i18n: true,
      title: 'title.membersClass',
    },
    component: () =>
      import(
        /* webpackChunkName: "more" */ '@/containers/vip/more/classroom-list.vue'
      ),
  },
  {
    path: '/course/:id',
    name: 'course',
    meta: {
      i18n: true,
      title: 'courseLearning.title'
    },
    component: () =>
      import(/* webpackChunkName: "course" */ '@/containers/course/index.vue'),
    beforeEnter: (to, from, next) => {
      if (from.name) {
        to.meta.fromRoute = from.name;
      }
      next();
    }
  },
  {
    path: '/course/try',
    name: 'course_try',
    component: () =>
      import(/* webpackChunkName: "courseTry" */ '@/containers/course/try.vue'),
  },
  {
    path: '/course/web',
    name: 'course_web',
    component: () =>
      import(
        /* webpackChunkName: "webView" */ '@/containers/course/detail/web-view.vue'
      ),
  },
  {
    path: '/course/audioview',
    name: 'course_audioview',
    component: () =>
      import(
        /* webpackChunkName: "audioDoc" */ '@/containers/course/detail/audio-doc.vue'
      ),
  },
  {
    path: '/live',
    name: 'live',
    component: () =>
      import(
        /* webpackChunkName: "live" */ '@/containers/course/detail/live-view.vue'
      ),
  },
  {
    path: '/testpaper',
    name: 'testpaperIntro',
    meta: {
      i18n: true,
      title: 'title.testDescription',
    },
    beforeEnter: (to, from, next) => {
      // ...
      const testId = to.query.testId;
      const targetId = to.query.targetId;
      Api.testpaperIntro({
        params: {
          targetId: targetId,
          targetType: 'task',
        },
        query: {
          testId: testId,
        },
      })
        .then(res => {
          to.meta.title = res.task.title
          next();
        })
        .catch(err => {
          Toast.fail(err.message);
          next();
        });
    },
    component: () =>
      import(
        /* webpackChunkName: "testpaperIntro" */ '@/containers/course/lessonTask/exam/testpaperIntro.vue'
      )
  },
  {
    path: '/testpaperDo',
    name: 'testpaperDo',
    component: () =>
      import(
        /* webpackChunkName: "testpaperDo" */ '@/containers/course/lessonTask/exam/testpaperDo.vue'
      ),
  },
  {
    path: '/testpaperResult',
    name: 'testpaperResult',
    component: () =>
      import(
        /* webpackChunkName: "testpaperResult" */ '@/containers/course/lessonTask/exam/testpaperResult.vue'
      ),
  },
  {
    path: '/testpaperAnalysis',
    name: 'testpaperAnalysis',
    component: () =>
      import(
        /* webpackChunkName: "testpaperAnalysis" */ '@/containers/course/lessonTask/exam/testpaperAnalysis.vue'
      ),
  },
  {
    path: '/homeworkDo',
    name: 'homeworkDo',
    component: () =>
      import(
        /* webpackChunkName: "homeworkDo" */ '@/containers/course/lessonTask/homework/homeworkDo.vue'
      ),
  },
  {
    path: '/homeworkResult',
    name: 'homeworkResult',
    component: () =>
      import(
        /* webpackChunkName: "homeworkResult" */ '@/containers/course/lessonTask/homework/homeworkResult.vue'
      ),
  },
  {
    path: '/homeworkAnalysis',
    name: 'homeworkAnalysis',
    component: () =>
      import(
        /* webpackChunkName: "homeworkAnalysis" */ '@/containers/course/lessonTask/homework/homeworkAnalysis.vue'
      ),
  },
  {
    path: '/homeworkIntro',
    name: 'homeworkIntro',
    meta: {
      i18n: true,
      title: 'title.jobDescription',
    },
    component: () =>
      import(
        /* webpackChunkName: "homeworkIntro" */ '@/containers/course/lessonTask/homework/homeworkIntro.vue'
      ),
  },
  {
    path: '/exerciseDo',
    name: 'exerciseDo',
    component: () =>
      import(
        /* webpackChunkName: "exerciseDo" */ '@/containers/course/lessonTask/exercise/exerciseDo.vue'
      ),
  },
  {
    path: '/exerciseResult',
    name: 'exerciseResult',
    component: () =>
      import(
        /* webpackChunkName: "exerciseResult" */ '@/containers/course/lessonTask/exercise/exerciseResult.vue'
      ),
  },
  {
    path: '/exerciseAnalysis',
    name: 'exerciseAnalysis',
    component: () =>
      import(
        /* webpackChunkName: "exerciseAnalysis" */ '@/containers/course/lessonTask/exercise/exerciseAnalysis.vue'
      ),
  },
  {
    path: '/exerciseIntro',
    name: 'exerciseIntro',
    meta: {
      i18n: true,
      title: 'title.exerciseInstructions'
    },
    component: () =>
      import(
        /* webpackChunkName: "exerciseIntro" */ '@/containers/course/lessonTask/exercise/exerciseIntro.vue'
      ),
  },
  {
    path: '/classroom/:id',
    name: 'classroom',
    meta: {
      i18n: true,
      title: 'title.classDetails'
    },
    component: () =>
      import(
        /* webpackChunkName: "classroom" */ '@/containers/classroom/index.vue'
      ),
  },
  {
    path: '/comment/:id',
    name: 'comment',
    meta: {
      i18n: true,
      title: 'title.studentEvaluation'
    },
    component: () =>
      import(
        /* webpackChunkName: "comment" */ '@/containers/comment/index.vue'
      ),
  },
  {
    path: '/order/:id',
    name: 'order',
    meta: {
      i18n: true,
      title: 'title.confirmOrder'
    },
    component: () =>
      import(/* webpackChunkName: "order" */ '@/containers/order/index.vue'),
  },
  {
    path: '/pay',
    name: 'pay',
    meta: {
      i18n: true,
      title: 'title.orderPayment'
    },
    component: () =>
      import(/* webpackChunkName: "pay" */ '@/containers/pay/index.vue'),
  },
  {
    path: '/weixin_pay',
    name: 'wxpay',
    meta: {
      i18n: true,
      title: 'title.wechatPayment'
    },
    component: () =>
      import(/* webpackChunkName: "wxpay" */ '@/containers/wxpay/index.vue'),
  },
  {
    path: '/marketing/weixin_pay',
    name: 'marketingWxpay',
    meta: {
      i18n: true,
      title: 'title.confirmPayment',
      hideTitle: true
    },
    component: () =>
      import(/* webpackChunkName: "marketingWxpay" */ '@/containers/marketing-wxpay/index.vue'),
  },
  {
    path: '/pay_success',
    name: 'paySuccess',
    meta: {
      i18n: true,
      title: 'title.paymentSuccessful'
    },
    component: () =>
      import(/* webpackChunkName: "pay" */ '@/containers/pay/success.vue'),
  },
  {
    path: '/pay_center',
    name: 'pay_center',
    meta: {
      i18n: true,
      title: 'title.paymentSuccessfulTransferPage'
    },
    component: () =>
      import(/* webpackChunkName: "pay" */ '@/containers/pay/center.vue'),
  },
  {
    path: '/pay_collectInfo',
    name: 'pay_collectInfo',
    meta: {
      i18n: true,
      title: 'title.informationFilling'
    },
    component: () =>
      import(/* webpackChunkName: "pay" */ '@/containers/pay/collectInfo.vue'),
  },
  {
    path: '/preview',
    name: 'preview',
    meta: {
      i18n: true,
      title: 'title.preview'
    },
    component: () =>
      import(
        /* webpackChunkName: "preview" */ '@/containers/preview/index.vue'
      ),
  },
  {
    path: '/sts',
    name: 'sts',
    meta: {
      i18n: true,
      title: 'title.faceRecognitionLogin'
    },
    component: () =>
      import(
        /* webpackChunkName: "login" */ '@/containers/login/face/index.vue'
      ),
  },
  {
    path: '/face_verification',
    name: 'verification',
    meta: {
      i18n: true,
      title: 'title.faceAuthentication'
    },
    component: () =>
      import(
        /* webpackChunkName: "verification" */ '@/containers/login/face/verification.vue'
      ),
  },
  {
    path: '/coupon/:token/receive',
    name: 'coupon_receive',
    meta: {
      i18n: true,
      title: 'title.couponCollection',
      hideTitle: true
    },
    component: () =>
      import(
        /* webpackChunkName: "coupon_receive" */ '@/containers/coupon/index.vue'
      ),
  },
  {
    path: '/vip',
    name: 'vip',
    meta: {
      i18n: true,
      bgColor: '#FFE9CC',
      title: 'vip.title',
    },
    component: () => import(/* webpackChunkName: "vip" */ '@/containers/vip/index.vue'),
  },
  {
    path: '/vip/:id/desc',
    name: 'vipDesc',
    meta: {
      i18n: true,
      title: 'vip.exclusiveIntroduction',
    },
    component: () => import(/* webpackChunkName: "vipDesc" */ '@/containers/vip/desc/index.vue'),
  },
  {
    path: '/setting/password/reset',
    name: 'password_reset',
    meta: {
      title: '',
    },
    component: () =>
      import(
        /* webpackChunkName: "password_reset" */ '@/containers/password-reset/index.vue'
      ),
  },
  {
    path: '/share/redirect', // 分享路由，微营销暂时不使用
    name: 'share_redirect',
    meta: {
      title: '',
    },
    component: () =>
      import(
        /* webpackChunkName: "share_redirect" */ '@/containers/share-redirect/index.vue'
      ),
  },
  {
    path: '/auth/social',
    name: 'auth_social',
    meta: {
      title: '',
    },
    component: () =>
      import(
        /* webpackChunkName: "auth_social" */ '@/containers/login/social/index.vue'
      ),
  },
  {
    path: '/coupon/covert',
    name: 'couponCovert',
    meta: {
      i18n: true,
      title: 'title.coupon'
    },
    component: () => import(/* webpackChunkName: "auth_social" */ '@/containers/coupon/covert/index.vue')
  },
  {
    path: '/search',
    name: 'search',
    meta: {
      i18n: true,
      title: 'search.title',
    },
    component: () =>
      import(/* webpackChunkName: "search" */ '@/containers/search/index.vue'),
  },
  {
    path: '/moneycard',
    name: 'study_card',
    meta: {
      i18n: true,
      title: 'title.learningCardRecharge'
    },
    component: () =>
      import(
        /* webpackChunkName: "study_card" */ '@/containers/study-card/index.vue'
      ),
    redirect: '/moneycard/fixed_receive',
    children: [
      {
        path: '/moneycard/fixed_receive',
        name: 'fixed_receive',
        meta: {
          hideTitle: true,
          i18n: true,
          title: 'title.learningCardRecharge',
          color: 'white',
        },
        component: () =>
          import(
            /* webpackChunkName: "fixed_receive" */ '@/containers/study-card/components/input-code'
          ),
      },
      {
        path: '/moneycard/:token/receive',
        name: 'receive',
        meta: {
          hideTitle: true,
          i18n: true,
          title: 'title.learningCardRecharge',
          color: 'white',
        },
        component: () =>
          import(
            /* webpackChunkName: "receive" */ '@/containers/study-card/components/valid-card'
          ),
      },
      {
        path: '/moneycard/receive/:password',
        name: 'receive',
        meta: {
          hideTitle: true,
          i18n: true,
          title: 'title.learningCardRecharge',
          color: 'white',
        },
        component: () =>
          import(
            /* webpackChunkName: "receive" */ '@/containers/study-card/components/valid-card'
          ),
      },
    ],
  },
  {
    path: '/my/history/learning',
    name: 'history-learn',
    meta: {
      i18n: true,
      title: 'title.historyLearning',
      hideTitle: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "history-learning" */ '@/containers/webview/learning/historyLearn/index.vue'
      ),
  },
  {
    path: '/live-timetable',
    name: 'live-timetable',
    meta: {
      i18n: true,
      title: 'title.liveSchedule',
      hideTitle: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "live" */ '@/containers/webview/live-timetable/index.vue'
      ),
  },
  {
    path: '/more/live',
    name: 'moreLive',
    meta: {
      i18n: true,
      title: 'title.liveToday',
      hideTitle: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "live" */ '@/containers/webview/live-timetable/more/index.vue'
      ),
  },
  {
    path: '/course/explore/new',
    name: 'more_course_new',
    meta: {
      i18n: true,
      title: 'title.allCourses',
      hideTitle: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "more" */ '@/containers/webview/course/more.vue'
      ),
  },
  {
    path: '/classroom/explore/new',
    name: 'more_class_new',
    meta: {
      i18n: true,
      title: 'title.allClasses',
      hideTitle: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "more" */ '@/containers/webview/classroom/more.vue'
      ),
  },
  {
    path: '/itemBank/explore/new',
    name: 'more_item-Bank',
    meta: {
      i18n: true,
      title: 'title.allQuestionBank',
      hideTitle: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "more" */ '@/containers/webview/itemBank/more.vue'
      ),
  },
  {
    path: '/openCourse/explore/new',
    name: 'more_openCourse',
    meta: {
      i18n: true,
      title: 'title.freeLiveClass',
      hideTitle: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "more" */ '@/containers/webview/openCourse/more.vue'
      ),
  },
  {
    path: '/goods/:id/course' /* 不要采用此路由，入口统一为/goods/:id/show */,
    name: 'goods_course',
    meta: {
      i18n: true,
      title: 'title.productPage'
    },
    component: () =>
      import(
        /* webpackChunkName: "old-goods" */ '@/containers/goods/course.vue'
      ),
  },
  {
    path: '/goods/closed',
    name: 'goods_closed',
    meta: {
      i18n: true
    },
    component: () =>
      import(
        /* webpackChunkName: "goods-closed" */ '@/containers/goods/closed.vue'
      ),
  },
  {
    path: '/goods/:id/classroom' /* 不要采用此路由，入口统一为/goods/:id/show */,
    name: 'goods_classroom',
    meta: {
      i18n: true,
      title: 'title.productPage'
    },
    component: () =>
      import(
        /* webpackChunkName: "old-goods" */ '@/containers/goods/classroom.vue'
      ),
  },
  {
    path: '/goods/itemBank' /* 不要采用此路由，入口统一为/goods/:id/show */,
    name: 'goods_itemBank',
    meta: {
      i18n: true,
      title: ''
    },
    beforeEnter: (to, from, next) => {
      to.meta.title = to.query.bindType === 'course' ? '课程题库' : '班级题库'
      next();
    },
    component: () =>
      import(
        /* webpackChunkName: "old-goods" */ '@/containers/goods/item-bank.vue'
        ),
  },
  {
    path: '/goods/:id/show' /* 商品的扩展必然不能通过入口来实现，入口只有一个，内部分为商品常态数据以及商品额外数据，借助插槽或者插件分开取舍 */,
    name: 'goods_show',
    meta: {
      i18n: true,
      title: 'goods.title',
    },
    component: () =>
      import(/* webpackChunkName: "goods" */ '@/containers/goods/goods.vue'),
  },
  {
    path: '/goods/qr',
    name: 'goods_qr',
    meta: {
      i18n: true,
      title: 'title.groupFreeLearningCourse'
    },
    component: () =>
      import(/* webpackChunkName: "goods" */ '@/containers/goods/qr.vue'),
  },
  {
    path: '/empty',
    name: 'empty',
    meta: {
      i18n: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "empty" */ '@/containers/empty/index.vue'
      ),
  },
  {
    path: '/goods/reviews',
    name: 'goods_reviews',
    meta: {
      i18n: true,
      title: 'title.score'
    },
    component: () =>
      import(/* webpackChunkName: "goods" */ '@/containers/goods/reviews.vue'),
  },
  {
    path: '/my/certificate',
    name: 'my_certificate',
    meta: {
      i18n: true,
      title: 'certificate.title',
    },
    component: () => import(/* webpackChunkName: "certificate" */ '@/containers/certificate/my-certificate/index.vue')
  },
  {
    path: '/certificate_records/:id',
    name: 'certificate_records',
    meta: {
      title: '高级产品经理证书',
    },
    component: () =>
      import(
        /* webpackChunkName: "certificate" */ '@/containers/certificate/my-certificate/certificate-detail/index.vue'
      ),
  },
  {
    path: '/certificate/list/:id',
    name: 'certificate_list',
    meta: {
      i18n: true,
      title: 'title.certificateAvailable'
    },
    component: () =>
      import(
        /* webpackChunkName: "certificate" */ '@/containers/certificate/certificate/certificate-list.vue'
      ),
  },
  {
    path: '/certificate/detail/:id',
    name: 'certificate_detail',
    meta: {
      title: '高级产品经理证书',
    },
    component: () =>
      import(
        /* webpackChunkName: "certificate" */ '@/containers/certificate/certificate/certificate-detail.vue'
      ),
  },
  {
    path: '/webview/certificate/detail/:id',
    name: 'webview_certificate_detail',
    meta: {
      hideTitle: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "certificate" */ '@/containers/webview/certificate/certificate-detail.vue'
      ),
  },
  {
    path: '/brushExercise',
    name: 'brush_exercise',
    meta: {
      i18n: true,
      title: 'title.brushQuestions'
    },
    component: () =>
      import(
        /* webpackChunkName: "brush" */ '@/containers/brush-exercise/index.vue'
      ),
  },
  {
    path: '/brushDo',
    name: 'brush_do',
    meta: {
      i18n: true,
      title: 'title.brushQuestions'
    },
    component: () =>
      import(
        /* webpackChunkName: "brush" */ '@/containers/brush-exercise/lessonTask/do.vue'
      ),
  },
  {
    path: '/brushIntro',
    name: 'brush_Intro',
    meta: {
      i18n: true,
      title: 'title.exerciseInstructions'
    },
    beforeEnter: (to, from, next) => {
      Api.myStudyBanks().then(res => {
        const itemIotro = res.data.filter(item => {
          return item.exerciseId == to.query.exerciseId
        })
        to.meta.title = itemIotro[0].itemBankExercise.title
        next();
      }).catch(err => {
        Toast.fail(err.message);
        next();
      })
      // ...
      next()
    },
    component: () =>
      import(
        /* webpackChunkName: "exerciseInfo" */ '@/containers/brush-exercise/lessonTask/exerciseInfo.vue'
      ),
  },
  {
    path: '/brushReport/:answerRecordId',
    name: 'brush_report',
    meta: {
      i18n: true,
      title: 'title.viewParsed'
    },
    component: () =>
      import(
        /* webpackChunkName: "brush" */ '@/containers/brush-exercise/lessonTask/report.vue'
      ),
  },
  {
    path: '/brushResult/:answerRecordId',
    name: 'brush_result',
    meta: {
      i18n: true,
      title: 'title.answerResult'
    },
    component: () =>
      import(
        /* webpackChunkName: "brush" */ '@/containers/brush-exercise/lessonTask/result.vue'
      ),
  },
  {
    path: '/brushReview/:answerRecordId',
    name: 'brush_review',
    meta: {
      i18n: true,
      title: 'title.answerMarking'
    },
    component: () =>
      import(
        /* webpackChunkName: "brush" */ '@/containers/brush-exercise/lessonTask/review.vue'
      ),
  },
  {
    path: '/item_bank_exercise/:id',
    name: 'item_bank_exercise',
    meta: {
      i18n: true,
      title: 'title.questionBankDetails'
    },
    component: () =>
      import(
        /* webpackChunkName: "brush-exercise" */ '@/containers/brush-exercise/index.vue'
      ),
  },
  {
    path: '/my/wrong-quesition-book',
    name: 'myWrongQuestionBook',
    meta: {
      i18n: true,
      title: 'wrongQuestion.title',
    },
    component: () =>
      import(
        /* webpackChunkName: "wrong-question-book" */ '@/containers/wrong-question-book/my/index.vue'
      ),
  },
  {
    path: '/my/contract',
    name: 'myContract',
    meta: {
      i18n: true,
      title: 'title.myContract',
    },
    component: () =>
      import(
        /* webpackChunkName: "my-contract" */ '@/containers/my/contract/index.vue'
      ),
  },
  {
    path: '/my/contract/:id',
    name: 'myContractDetail',
    meta: {
      i18n: true,
      title: 'title.viewContract',
    },
    component: () =>
      import(
        /* webpackChunkName: "my-contract" */ '@/containers/my/contract/detail.vue'
      ),
  },
  {
    path: '/my/wrong-quesition-book/exercise',
    name: 'myWrongQuestionBookExercise',
    component: () =>
      import(
        /* webpackChunkName: "wrong-question-book" */ '@/containers/wrong-question-book/my/exercise.vue'
      ),
  },
  {
    path: '/my/wrong-quesition-book/detail/:type/:id',
    name: 'myWrongQuestionBookDetail',
    component: () =>
      import(
        /* webpackChunkName: "wrong-question-book" */ '@/containers/wrong-question-book/detail/index.vue'
      ),
  },
  {
    path: '/wrong-exercises/do',
    name: 'WrongExercisesDo',
    meta: {
      i18n: true,
      title: 'wrongQuestion.exercise',
    },
    component: () =>
      import(
        /* webpackChunkName: "wrong-question-book" */ '@/containers/wrong-question-book/wrong-exercises/do.vue'
      ),
  },
  {
    path: '/wrong-exercises/Intro',
    name: 'WrongExercisesIntro',
    meta: {
      i18n: true,
      title: 'wrongQuestion.exercise',
    },
    component: () =>
      import(
        /* webpackChunkName: "wrong-question-book" */ '@/containers/wrong-question-book/wrong-exercises/exerciseInfro.vue'
      ),
  },
  {
    path: '/wrong-exercises/result',
    name: 'WrongExercisesResult',
    meta: {
      i18n: true,
      title: 'wrongQuestion.exercise',
    },
    component: () =>
      import(
        /* webpackChunkName: "wrong-question-book" */ '@/containers/wrong-question-book/wrong-exercises/result.vue'
      ),
  },
  {
    path: '/wrong-exercises/analysis',
    name: 'WrongExercisesAnalysis',
    meta: {
      i18n: true,
      title: 'wrongQuestion.parsing',
    },
    component: () =>
      import(
        /* webpackChunkName: "wrong-question-book" */ '@/containers/wrong-question-book/wrong-exercises/analysis.vue'
      ),
  },
  {
    path: '/sign_contract/:id/:goodsKey',
    name: 'signContract',
    meta: {
      i18n: true,
      title: 'contract.signContract',
    },
    component: () =>
      import(
        /* webpackChunkName: "signContract" */ '@/containers/contract/SignContract.vue'
      ),
  },
  {
    path: '/contract_detail/:id/:goodsKey',
    name: 'contractDetail',
    meta: {
      i18n: true,
      title: 'contract.contractDetail',
    },
    component: () =>
      import(
        /* webpackChunkName: "signContract" */ '@/containers/contract/ContractDetail.vue'
      ),
  },
];

// 页面刷新，store数据会被清掉，需对token、user重新赋值
const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
if (token) {
  store.commit(types.USER_LOGIN, { token, user: JSON.parse(user) });

  if (!user) {
    store.dispatch('getUserInfo')
  }
}

const router = new Router({
  routes,
});

const isWeixinBrowser = /micromessenger/.test(
  navigator.userAgent.toLowerCase(),
);

// 校验是否有绑定手机号
const mobileBindCheck = (to, from, next) => {
  return new Promise((resolve, reject) => {
    const mobileBindSkip = window.localStorage.getItem('mobile_bind_skip');

    if (mobileBindSkip === '1' || store.state.mobile_bind.is_bind_mobile) {
      resolve()
      return;
    }

    let user = window.localStorage.getItem('user');
    user = user ? JSON.parse(user) : user;

    if (!user || !user.id) {
      resolve()
      return;
    }

    Api.mobileBindCheck({
      query: { userId: user.id },
    }).then(({ is_bind_mobile, mobile_bind_mode }) => {
      store.commit(types.SET_MOBILE_BIND, { is_bind_mobile, mobile_bind_mode });

      if (is_bind_mobile) {
        resolve();
        return;
      }

      if (mobile_bind_mode !== 'closed') {
        next({ name: 'binding', query: to.query || from.query });
        return;
      }

      resolve()
    }).catch(() => {
      resolve()
    })
  })
};

// 检查微信公众号开关配置
const setWeChatSwitch = () => {
  new Promise((resolve, reject) => {
    if (!Object.keys(store.state.wechatSwitch).length && isWeixinBrowser) {
      return store
        .dispatch('getGlobalSettings', {
          type: 'wechat',
          key: 'wechatSettings',
        })
        .then(res => {
          if (res.enabled) {
            return store
              .dispatch('setWeChatSwitch', true)
              .then(() => resolve());
          }
          return resolve(res);
        })
        .catch(err => {
          console.log(err.message);
          return reject(err);
        });
    }
    return resolve();
  });
};

router.beforeEach(async (to, from, next) => {
  const shouldUpdateMetaTitle = [
    'binding',
    'password_reset',
    'register',
    'login',
    'protocol',
    'find',
  ].includes(to.name);

  if (['prelogin', 'register'].includes(to.name) && store.state.token) {
    next(to.query.redirect || '/');

    return;
  }

  // 未登录用户 信息设置页 跳转到首页
  if (['settings', 'couponCovert'].includes(to.name) && !store.state.token) {
    next('/');

    return;
  }

  if (to.name !== 'binding' && store.state.mobile_bind.mobile_bind_mode !== 'closed') {
    await mobileBindCheck(to, from, next);
  }

  if (store.state.token) {
    setWeChatSwitch();
  }

  if (shouldUpdateMetaTitle) {
    to.meta.title = store.state.settings.name;
  }

  const { h5Enabled, enabled } = store.state.vipSettings
  if (to.name === 'vip' && h5Enabled && enabled && !store.state.vipSwitch) {
    await store.dispatch('setVipSwitch', true)
  }

  initShare({
    title: store.state.settings.name,
    desc: store.state.settings.slogan,
    imgUrl: store.state.settings.logo,
    link: window.location.href.split('#')[0] + '#' + to.path
  });

  if ([
    'course',
    'course_web',
    'testpaperDo',
    'testpaperAnalysis',
    'exerciseDo',
    'exerciseAnalysis',
    'homeworkDo',
    'homeworkAnalysis',
  ].includes(to.name)) {
    initTaskWatermark();
  } else {
    destroyWatermark();
  }

  if ([
    'course',
    'course_web',
    'exerciseDo',
    'exerciseAnalysis',
    'homeworkDo',
    'homeworkAnalysis',
    'testpaperDo',
    'testpaperAnalysis',
    'item_bank_exercise',
    'brush_report',
    'brush_do',
  ].includes(from.name)) {
    if (window.aiAgentSdk) {
      window.aiAgentSdk.shutdown();
    }
  }
  next();
});

export default router;
