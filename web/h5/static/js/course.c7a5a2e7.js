(window.webpackJsonp=window.webpackJsonp||[]).push([["course"],{fd4a:function(e,t,s){"use strict";s.r(t),s("8e6e"),s("ac6a"),s("456d"),s("e7e5");var i=s("d399"),r=s("bd86"),n=(s("e17f"),s("2241")),a=(s("96cf"),s("3b8d")),o=(s("c5f6"),s("d0b2")),c=s("b127"),l=s("202a"),u=s("410d"),d=s("2f62"),h=s("0d25");function p(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function f(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?p(Object(s),!0).forEach((function(t){Object(r.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var m={components:{service:u.a},data:function(){return{items:[],isFree:!1}},watch:{selectedPlanId:{immediate:!0,handler:function(e){var t=this;this.items=this.details.courses.map((function(e,s){return t.$set(e,"active",!1),e.id===t.details.id&&(e.active=!0),e}))}},learnExpiryHtml:{immediate:!0,handler:function(e){var t=this.details.learningExpiryDate,s=t.expiryStartDate.slice(0,10),i=t.expiryEndDate.slice(0,10);this.$emit("getLearnExpiry",{val:e,startDateStr:s,endDateStr:i})}}},computed:f(f(f({},Object(d.e)("course",{details:function(e){return e.details},selectedPlanId:function(e){return e.selectedPlanId},joinStatus:function(e){return e.joinStatus}})),Object(d.e)(["courseSettings","vipSwitch"])),{},{learnExpiryHtml:function(){var e=this.details.member,t=this.details.learningExpiryDate,s=t.expiryMode,i=t.expiryStartDate.slice(0,10),r=t.expiryEndDate.slice(0,10);if(e)return"forever"==s?"永久有效":0!=e.deadline?e.deadline.slice(0,10)+"之前可学习":"永久有效";switch(s){case"forever":return"永久有效";case"end_date":return r+"之前可学习";case"days":return t.expiryDays+"天内可学习";case"date":return'<div class = "mt5">开课日期：'+i+"&nbsp;&nbsp;&nbsp;截止日期："+r+"</div>"}return""},buyExpiryTime:function(){var e=new Date(this.details.buyExpiryTime);return Object(h.formatFullTime)(e)},showStudent:function(){return!this.courseSettings||Number(this.courseSettings.show_student_num_enabled)},defaultPlan:function(){return 1===this.items.length&&!this.items[0].title},isDiscount:function(){if(!this.details.courseSet)return!1;var e=this.details.courseSet.discount;if(""!==e){var t=Number(e);return 10!==t&&(0===t||t)}return""}}),methods:f(f({},Object(d.c)("course",["getCourseLessons"])),{},{handleClick:function(e,t){this.$router.push({path:"/course/".concat(e.id)})},filterPrice:function(){var e=this.details;return Number(e.isFree)||"0.00"===e.price?(this.isFree=!0,"免费"):(this.isFree=!1,"¥".concat(e.price))},toCertificate:function(e){this.$router.push({path:"/certificate/list/".concat(e)})}})},v=s("a6c2"),b=Object(v.a)(m,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("e-panel",{attrs:{title:e.details.courseSet.title,type:e.details.hasCertificate}},[s("div",{staticClass:"course-detail__plan-price"},[s("span",{class:{isFree:e.isFree}},[e._v(e._s(e.filterPrice())+"\n        "),e.isDiscount?s("span",{staticClass:"original-price ml10"},[e._v("原价：￥"+e._s(e.details.originPrice))]):e._e()]),e.showStudent?s("span",{staticClass:"plan-price__student-num"},[e._v(e._s(e.details.studentNum)+"人在学")]):e._e()])]),e.defaultPlan?e._e():s("ul",{staticClass:"course-detail__plan"},[e._l(e.items,(function(t,i){return[t.title?s("li",{key:i,class:{active:t.active},on:{click:function(s){return e.handleClick(t,i)}}},[e._v("\n        "+e._s(t.title)+"\n      ")]):e._e()]}))],2),s("div",{staticClass:"course-detail__validity"},[e.details.vipLevel&&e.vipSwitch?s("div",{staticClass:"mb15"},[s("span",{staticClass:"mr20"},[e._v("会员免费")]),s("img",{staticClass:"vipIcon",attrs:{src:e.details.vipLevel.icon}}),s("router-link",{staticClass:"color-primary",attrs:{to:{path:"/vip",query:{id:e.details.vipLevel.id}}}},[e._v("\n        "+e._s(e.details.vipLevel.name)+"免费学")])],1):e._e(),e.details.services.length?s("service",{attrs:{services:e.details.services}}):e._e(),s("div",[s("span",{staticClass:"mr20"},[e._v("学习有效期")]),s("span",{staticClass:"dark",domProps:{innerHTML:e._s(e.learnExpiryHtml)}})]),0!=e.details.buyExpiryTime?s("div",{staticClass:"mt5"},[s("span",{staticClass:"mr20"},[e._v("购买截止日期")]),s("span",{staticClass:"validity orange"},[e._v(e._s(e.buyExpiryTime))])]):e._e()],1),e.details.hasCertificate?s("div",{staticClass:"course-detail__certificate",on:{click:function(t){return e.toCertificate(e.selectedPlanId)}}},[e._m(0),s("i",{staticClass:"van-icon van-icon-arrow pull-right"})]):e._e()],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("span",[t("span",{staticClass:"certificate-icon"},[this._v("证")]),this._v("证书")])}],!1,null,null,null).exports,y={name:"Teacher",props:["teacherInfo"]},g=Object(v.a)(y,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("e-panel",{attrs:{title:"教师介绍"}},[e._l(e.teacherInfo,(function(t){return[s("div",{staticClass:"teacher-content"},[s("img",{staticClass:"avatar-img",attrs:{src:t.avatar.large}}),s("div",{staticClass:"teacher-cell"},[s("span",{staticClass:"dark font-family-PFM"},[e._v(e._s(t.nickname))]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"item.title"}],staticClass:"text-content"},[e._v(e._s(t.title))])])])]}))],2)}),[],!1,null,null,null).exports,k=(s("6b54"),{name:"SwiperDirectory",props:{item:{type:Array,default:function(){return[]}},slideIndex:{type:Number,default:0},hasChapter:{type:Boolean,default:!0}},data:function(){return{current:this.slideIndex||0}},watch:{slideIndex:function(e,t){e!=t&&(this.current=e||0)}},methods:{changeChapter:function(e){this.current=e,this.$emit("changeChapter",e)},handleChapter:function(e){this.$refs.chapterSwipe.swipeTo(e)}}}),w=Object(v.a)(k,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"swiper-directory"},[s("van-swipe",{ref:"chapterSwipe",attrs:{"show-indicators":!1,loop:!1,touchable:!0,width:265,"initial-swipe":e.slideIndex},on:{change:e.changeChapter}},e._l(e.item,(function(t,i){return s("van-swipe-item",{key:i},[0==t.isExist?s("div",{staticClass:"chapter nochapter",class:"swiper-directory-active",on:{click:function(t){return e.handleChapter(i)}}},[s("i",{staticClass:"iconfont icon-wuzhangjieliang"}),e._v("\n        无章节\n      ")]):e._e(),1==t.isExist?s("div",{staticClass:"chapter haschapter",class:[e.current===i?"swiper-directory-active":""],on:{click:function(t){return e.handleChapter(i)}}},[s("p",{staticClass:"chapter-title text-overflow"},[e._v("第"+e._s(t.number)+e._s(e.hasChapter?"章":"节")+"："+e._s(t.title))]),s("p",{staticClass:"chapter-des text-overflow"},[e._v(e._s(e.hasChapter?"节("+t.unitNum+")":"")+" 课时("+e._s(t.lessonNum)+") 学习任务("+e._s(t.tasksNum)+")")])]):e._e()])})),1)],1)}),[],!1,null,null,null).exports,C={name:"UtilDirectory",props:{util:{type:Object,default:function(){}}}},x=Object(v.a)(C,(function(){var e=this.$createElement,t=this._self._c||e;return 1==this.util.isExist?t("div",{staticClass:"util-directory text-overflow"},[this._v("\n  第"+this._s(this.util.number)+"节："+this._s(this.util.title)+"\n")]):this._e()}),[],!1,null,null,null).exports,O=s("d863"),_=s("2164"),j=s("faa5");function I(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function S(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?I(Object(s),!0).forEach((function(t){Object(r.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):I(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var T={name:"LessonDirectory",mixins:[O.a,_.a],props:{lesson:{type:Array,default:function(){return[]}},errorMsg:{type:String,default:""},taskId:{type:Number,default:-1},taskNumber:{type:Number,default:-1},unitNum:{type:Number,default:-1}},data:function(){return{currentTask:""}},watch:{taskId:{handler:"getTaskId",immediate:!0}},computed:S(S({},Object(d.e)("course",{details:function(e){return e.details},joinStatus:function(e){return e.joinStatus},selectedPlanId:function(e){return e.selectedPlanId}})),{},{hasLesson:function(){return this.lesson.length>0},isNoData:function(){return 0===this.taskNumber&&0===this.unitNum}}),mounted:function(){if(Object.keys(this.$route.query).length){var e=this.$route.query,t=e.sourceType,s=e.taskId;this.setSourceType({sourceType:t,taskId:s})}},methods:S(S({},Object(d.d)("course",{setSourceType:j.x})),{},{getTaskId:function(){this.currentTask=this.taskId},doubleLine:function(e){if(e.type)return"live"===e.type},showTask:function(e,t){var s=!0;return null==e.mode&&0==t&&(s=!1),"lesson"==e.mode&&(s=!1),s},lessonCellClick:function(e,t,s){if(this.$store.commit(j.y,""),this.errorMsg)this.$emit("showDialog");else if(e.lock)Object(i.a)("需要解锁上一个任务");else if("create"!==e.status&&"published"===e.status){var r={id:e.id};this.$store.commit("course/".concat(j.h),{nextTask:r}),!this.details.allowAnonymousPreview&&this.$router.push({name:"login",query:{redirect:this.redirect}}),this.joinStatus&&this.showTypeDetail(e)}else Object(i.a)("敬请期待")},showTypeDetail:function(e){if("published"===e.status)switch(e.type){case"video":"self"===e.mediaSource?this.setSourceType({sourceType:"video",taskId:e.id}):Object(i.a)("暂不支持此类型");break;case"audio":this.setSourceType({sourceType:"audio",taskId:e.id});break;case"text":case"ppt":case"doc":this.$router.push({name:"course_web",query:{courseId:this.selectedPlanId,taskId:e.id,type:e.type}});break;case"live":var t=new Date,s=new Date(1e3*e.endTime),r=(new Date(1e3*e.startTime),!1);if(t>s){if("videoGenerated"==e.activity.replayStatus)return void("self"===e.mediaSource?this.setSourceType({sourceType:"video",taskId:e.id}):Object(i.a)("暂不支持此类型"));if("ungenerated"==e.activity.replayStatus)return void Object(i.a)("暂无回放");r=!0}this.$router.push({name:"live",query:{courseId:this.selectedPlanId,taskId:e.id,type:e.type,title:e.title,replay:r}});break;case"testpaper":var n=e.activity.testpaperInfo.testpaperId;this.$router.push({name:"testpaperIntro",query:{testId:n,targetId:e.id}});break;case"homework":this.$router.push({name:"homeworkIntro",query:{courseId:this.$route.params.id,taskId:e.id}});break;case"exercise":this.$router.push({name:"exerciseIntro",query:{courseId:this.$route.params.id,taskId:e.id}});break;default:this.setSourceType({sourceType:"img",taskId:e.id}),this.copyPcUrl(e.courseUrl)}else Object(i.a)("敬请期待")},iconfont:function(e){switch(e.type){case"audio":return"icon-yinpin";case"doc":return"icon-wendang";case"exercise":return"icon-lianxi";case"flash":return"icon-flash";case"homework":return"icon-zuoye";case"live":return"icon-zhibo";case"ppt":return"icon-ppt";case"discuss":return"icon-taolun";case"testpaper":return"icon-kaoshi";case"text":return"icon-tuwen";case"video":return"icon-shipin";case"download":return"icon-xiazai";default:return""}},studyStatus:function(e){if(e.lock)return"icon-suo";if(null==e.result)return"icon-weixuexi";switch(e.result.status){case"finish":return"icon-yiwanchengliang";case"start":return"icon-weiwancheng";default:return""}},liveClass:function(e){if("published"!=e.status||"live"!=e.type)return"nopublished";var t=(new Date).getTime();return new Date(1e3*e.startTime),t>new Date(1e3*e.endTime)?"ungenerated"===e.activity.replayStatus?"end":"back":"play"}})},D=Object(v.a)(T,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._l(e.lesson,(function(t,i){return e.hasLesson?s("div",{key:i,staticClass:"lesson-directory"},[s("div",{staticClass:"lesson-title",class:{"zb-ks":e.doubleLine(t.tasks[t.index])},attrs:{id:t.tasks[t.index].id},on:{click:function(s){return e.lessonCellClick(t.tasks[t.index],i,t.index)}}},[s("div",{staticClass:"lesson-title-r"},[s("div",{staticClass:"lesson-title-des"},[e.doubleLine(t.tasks[t.index])?e._e():s("div",{staticClass:"bl l22"},[s("span",{staticClass:"text-overflow ks",class:{lessonactive:e.currentTask==t.tasks[t.index].id}},[s("i",{staticClass:"iconfont",class:e.iconfont(t.tasks[t.index])}),e._v("\n              "+e._s(Number(t.tasks[t.index].isOptional)?"选修 ":"课时")+e._s(Number(t.tasks[t.index].isOptional)?" ":t.tasks[t.index].number+":"+t.title)+"\n            ")])]),e.doubleLine(t.tasks[t.index])?s("div",{staticClass:"bl"},[s("div",{staticClass:"block-inline"},[s("span",{staticClass:"bl text-overflow ks",class:{lessonactive:e.currentTask==t.tasks[t.index].id}},[s("i",{staticClass:"iconfont",class:e.iconfont(t.tasks[t.index])}),e._v("\n                "+e._s(Number(t.tasks[t.index].isOptional)?"选修 ":"课时")+e._s(Number(t.tasks[t.index].isOptional)?" ":t.tasks[t.index].number+":"+t.title)+"\n              ")]),s("span",{staticClass:"bl zbtime"},[s("span",{class:[e.liveClass(t.tasks[t.index])]},[e._v(e._s(e._f("filterTaskTime")(t.tasks[t.index])))])])])]):e._e()])]),s("div",{staticClass:"lesson-title-l"},["live"!=t.tasks[t.index].type?s("span",[e._v(e._s(e._f("filterTaskTime")(t.tasks[t.index])))]):e._e(),s("i",{staticClass:"iconfont",class:e.studyStatus(t.tasks[t.index])})])]),t.tasks.length>1?s("div",{staticClass:"lesson-items"},e._l(t.tasks,(function(t,r){return e.showTask(t,r)?s("div",{key:r,staticClass:"litem",attrs:{id:t.id},on:{click:function(s){return e.lessonCellClick(t,i,r)}}},[s("div",{staticClass:"litem-r text-overflow",class:{lessonactive:e.currentTask==Number(t.id)}},[s("i",{staticClass:"iconfont",class:e.iconfont(t)}),e._v("\n          "+e._s(Number(t.isOptional)?"选修 ":"课时")+e._s(Number(t.isOptional)?" ":t.number+":"+t.title)+"\n        ")]),s("div",{staticClass:"litem-l clearfix"},[s("span",{class:[e.liveClass(t),"text-overflow"]},[e._v(e._s(e._f("filterTaskTime")(t)))]),s("i",{staticClass:"iconfont",class:e.studyStatus(t)})])]):e._e()})),0):e._e()]):e._e()})),e.isNoData?s("div",{staticClass:"noneItem"},[s("img",{staticClass:"notask",attrs:{src:"static/images/none.png"}}),s("p",[e._v("暂时还没有课时哦...")])]):e._e()],2)}),[],!1,null,null,null).exports,P=s("3ce7");function E(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function N(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?E(Object(s),!0).forEach((function(t){Object(r.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):E(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var L={name:"AfterjoinDirectory",components:{swiperDirectory:w,utilDirectory:x,lessonDirectory:D},data:function(){return{scroll:"",item:[],level:3,chapterNum:0,unitNum:0,lessonNum:0,currentChapter:0,currentUnit:0,currentLesson:0,slideIndex:0,taskId:null,nodata:!1,allTask:{},allTaskId:[]}},computed:N(N({},Object(d.e)("course",{nextStudy:function(e){return e.nextStudy},selectedPlanId:function(e){return e.selectedPlanId},OptimizationCourseLessons:function(e){return e.OptimizationCourseLessons},details:function(e){return e.details},taskStatus:function(e){return e.taskStatus}})),{},{hasChapter:function(){return this.chapterNum>0}}),watch:{nextStudy:{handler:"getNextStudy",immediate:!0},selectedPlanId:{handler:"processItem",immediate:!0,deep:!0},taskStatus:{handler:"changeTaskStatus",immediate:!1}},methods:{getNextStudy:function(){if(this.nextStudy.nextTask){this.taskId=Number(this.nextStudy.nextTask.id);var e=this.allTask[this.taskId];if(!e)return;this.hasChapter?this.slideIndex=e.chapterIndex:this.slideIndex=e.unitIndex}},processItem:function(e){var t=this.OptimizationCourseLessons;this.resetData(),t.length?(this.nodata=!1,this.setItems(t),this.mapChild(this.item),this.startScroll(),this.$store.commit("course/".concat(j.l),this.allTask)):this.nodata=!0},resetData:function(){this.chapterNum=0,this.unitNum=0,this.lessonNum=0},setItems:function(e){this.level=1===e.length&&0==e[0].isExist?2:3,1===e.length?this.item=2===this.level?e[0].children:e:e.length>1&&(this.item=e)},mapChild:function(e){var t=this;e.map((function(s,i){"chapter"===s.type?t.formatChapter(s,e,i):"unit"===s.type?t.formatUnit(s,e,i):"lesson"===s.type?t.formatLesson(s,e,i):t.formatTask(s,e,i)}))},startScroll:function(){var e=this;this.$nextTick((function(){if(e.taskId){var t=document.getElementById("progress-bar"),s=document.getElementById("swiper-directory"),i=document.getElementById(e.taskId),r=t?t.offsetHeight:0,n=s?s.offsetHeight:0,a=(i?i.offsetTop:0)-r-44-n;a<document.documentElement.clientWidth||window.scrollTo({top:a})}}))},formatChapter:function(e,t,s){this.currentChapter=s,e.chapterNum=0,e.unitNum=0,e.lessonNum=0,e.tasksNum=0,e.isExist&&(this.chapterNum+=1,this.computedNum(1,"chapterNum")),Array.isArray(e.children)&&e.children.length>0&&this.mapChild(e.children)},formatUnit:function(e,t,s){this.currentUnit=s,e.unitNum=0,e.lessonNum=0,e.tasksNum=0,e.isExist&&(this.unitNum+=1,this.computedNum(1,"unitNum")),Array.isArray(e.children)&&e.children.length>0&&(this.computedNum(e.children.length,"lessonNum"),this.mapChild(e.children))},formatLesson:function(e,t,s){this.currentLesson=s,e.isExist&&(this.lessonNum+=1),e.tasks&&(this.computedNum(e.tasks.length-1,"tasksNum"),this.mapChild(e.tasks))},formatTask:function(e,t,s){Number(e.id)===this.taskId&&(this.slideIndex=3==this.level?this.currentChapter:this.currentUnit),this.getLessonIndex(e,s),e.chapterIndex=this.currentChapter,e.unitIndex=this.currentUnit,e.LessonIndex=this.currentLesson,e.level=this.level,e.taskIndex=s,this.allTask[e.id]=N({},e),this.allTaskId.push(e.id)},getLessonIndex:function(e,t){e.mode?"lesson"===e.mode&&this.getMainTask(e,t):this.getMainTask(e,0)},getMainTask:function(e,t){3===this.level?this.$set(this.item[this.currentChapter].children[this.currentUnit].children[this.currentLesson],"index",t):this.$set(this.item[this.currentUnit].children[this.currentLesson],"index",t)},computedNum:function(e,t){var s=3===this.level?this.currentChapter:this.currentUnit,i=this.item[s][t]+e;this.$set(this.item[s],t,i)},changeChapter:function(e){this.slideIndex=e},changeTaskStatus:function(e){if(e){"finish"===e&&this.changeLockStatus();var t=this.allTask[this.taskId],s={};if(2===t.level){var i=this.item[t.unitIndex].children[t.LessonIndex].tasks[t.taskIndex];i.result?i.result.status=e:(s.status=e,i.result=s)}else{var r=this.item[t.chapterIndex].children[t.unitIndex].children[t.LessonIndex].tasks[t.taskIndex];r.result?r.result.status=e:(s.status=e,r.result=s)}}},changeLockStatus:function(){if("lockMode"===this.details.learnMode){var e=this.allTaskId.indexOf(this.taskId.toString());if(e<this.allTaskId.length-1){var t=this.allTaskId[e+1],s=this.allTask[t];2===s.level?this.item[s.unitIndex].children[s.LessonIndex].tasks[s.taskIndex].lock=!1:this.item[s.chapterIndex].children[s.unitIndex].children[s.LessonIndex].tasks[s.taskIndex].lock=!1}}}}},$=Object(v.a)(L,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"afterjoin-directory"},[e.lessonNum>0?s("div",[e.chapterNum>0||e.unitNum>0?s("swiper-directory",{attrs:{id:"swiper-directory",item:e.item,"slide-index":e.slideIndex,"has-chapter":e.hasChapter},on:{changeChapter:e.changeChapter}}):e._e(),e.item.length>0?s("div",{attrs:{id:"lesson-directory"}},[e.chapterNum>0?e._l(e.item[e.slideIndex].children,(function(t,i){return s("div",{key:i,staticClass:"pd-bo"},[s("util-directory",{attrs:{util:t}}),s("lesson-directory",e._g(e._b({attrs:{lesson:t.children,"task-id":e.taskId,"task-number":e.item[e.slideIndex].lessonNum,"unit-num":e.item[e.slideIndex].unitNum}},"lesson-directory",e.$attrs,!1),e.$listeners))],1)})):s("div",{staticClass:"pd-bo"},[s("lesson-directory",e._g(e._b({attrs:{lesson:e.item[e.slideIndex].children,"task-id":e.taskId,"task-number":e.item[e.slideIndex].lessonNum,"unit-num":e.item[e.slideIndex].unitNum}},"lesson-directory",e.$attrs,!1),e.$listeners))],1)],2):e._e()],1):e._e(),e.nodata&&0==e.lessonNum?s("div",{staticClass:"noneItem"},[s("img",{staticClass:"nodata",attrs:{src:"static/images/none.png"}}),s("p",[e._v("暂时还没有课程哦...")])]):e._e()])}),[],!1,null,null,null).exports,F=s("2095"),A=s("4928");function M(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function J(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?M(Object(s),!0).forEach((function(t){Object(r.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):M(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var q={inheritAttrs:!0,props:{details:{type:Object,value:function(){}}},data:function(){return{headBottom:0,active:1,scrollFlag:!1,tabs:["课程介绍","课程目录","学员评价"],tabFixed:!1,errorMsg:"",offsetTop:"",offsetHeight:"",isFixed:!1,courseSettings:{},isShowForm:!1,paramsList:{action:"buy_after",targetType:"course",targetId:this.details.id}}},mixins:[F.a],computed:J(J(J({},Object(d.e)("course",{selectedPlanId:function(e){return e.selectedPlanId},currentJoin:function(e){return e.currentJoin}})),Object(d.e)(["user"])),{},{progress:function(){return Number(this.details.publishedTaskNum)?parseInt(this.details.progress.percent)+"%":"0%"},summary:function(){return this.details.summary||this.details.courseSet.summary},isClassCourse:function(){return Number(this.details.parentId)}}),watch:{selectedPlanId:function(e,t){this.active=1},currentJoin:{handler:function(e,t){var s=this;e&&(i.a.loading({duration:0,message:"加载中...",forbidClick:!0}),this.getInfoCollectionEvent(this.paramsList).then((function(e){if(Object.keys(e).length)return s.userInfoCollect=e,void s.getInfoCollectionForm(e.id).then((function(e){s.isShowForm=!0,i.a.clear()}));i.a.clear()})))},immediate:!0},$route:function(e,t){this.resetFrom()}},mounted:function(){window.addEventListener("scroll",this.handleScroll),this.$nextTick((function(){var e=document.getElementById("course-detail__head").offsetHeight;this.offsetTop=e+46,this.offsetHeight=44}))},created:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.showDialog(),t.next=3,P.a.getSettings({query:{type:"course"}}).catch((function(e){}));case 3:e.courseSettings=t.sent;case 4:case"end":return t.stop()}}),t)})))()},components:{Directory:c.a,DetailHead:l.a,DetailPlan:b,Teacher:g,reviewList:o.a,afterjoinDirectory:$,infoCollection:A.a},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:J(J({},Object(d.d)("course",{setCurrentJoin:j.q})),{},{showDialog:function(){var e=this;if(this.details.member){var t="";if(this.details.member.access&&(t=this.details.member.access.code),t&&"success"!==t){this.errorMsg=this.getErrorMsg(t);var s="",r=function(){};if("course.expired"===t||"member.expired"===t&&!this.isClassCourse){s="课程已到期，无法继续学习，是否退出";var n={id:this.details.id};r=function(){P.a.deleteCourse({query:n}).then((function(e){e.success?window.location.reload():i.a.fail("退出课程失败，请稍后重试")}))},this.callConfirm(s,r)}else"vip.member_expired"===t?(s="会员已到期，请及时续费会员",r=function(){e.$router.push({path:"/vip"})},this.callConfirm(s,r)):i.a.fail(this.errorMsg)}}},getErrorMsg:function(e){switch(e){case"course.not_found":return"当前课程不存在";case"course.unpublished":return"当前课程未发布";case"course.expired":return"当前课程已过期";case"course.not_arrive":return"当前课程还不能学习";case"user.not_login":return"用户未登录";case"user.locked":return"用户被锁定";case"member.not_found":return"用户未加入课程";case"member.expired":return"课程已过期";case"vip.vip_closed":return"网校已关闭会员功能";case"vip.not_login":return"用户未登录";case"vip.not_member":return"当前用户并不是vip";case"vip.member_expired":return"用户会员服务已过期";case"vip.level_not_exist":return"用户会员等级或课程会员不存在";case"vip.level_low":return"用户会员等级过低";default:return"异常错误"}},callConfirm:function(e,t){n.a.confirm({message:e,title:""}).then((function(){t()})).catch((function(){}))},handleScroll:function(){var e=document.getElementById("swiper-directory"),t=document.documentElement.scrollHeight,s=document.documentElement.clientHeight;(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>this.offsetTop&&t-this.offsetTop>s?(this.tabFixed=!0,e&&e.classList.add("swiper-directory-fix")):(this.tabFixed=!1,e&&e.classList.remove("swiper-directory-fix"))},onCancelForm:function(){this.setCurrentJoin(!1),this.isShowForm=!1}})},H=Object(v.a)(q,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"join-after"},[s("detail-head",{attrs:{"course-set":e.details.courseSet}}),s("van-tabs",{ref:"tabs",class:e.tabFixed?"isFixed":"",attrs:{id:"tabs"},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},e._l(e.tabs,(function(e){return s("van-tab",{key:e,attrs:{title:e}})})),1),s("div",{staticClass:"join-after__content"},[s("div",{directives:[{name:"show",rawName:"v-show",value:1==e.active,expression:"active == 1"}]},[s("div",{class:["progress-bar",e.tabFixed?"progress-bar-fix":""],attrs:{id:"progress-bar"}},[s("div",{staticClass:"progress-bar__content"},[s("div",{staticClass:"progress-bar__rate",style:{width:e.progress}})]),s("div",{staticClass:"progress-bar__text"},[e._v(e._s(e.progress))])]),s("afterjoin-directory",{attrs:{"error-msg":e.errorMsg},on:{showDialog:e.showDialog}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:0==e.active,expression:"active == 0"}]},[s("detail-plan",{on:{switchPlan:e.showDialog}}),s("div",{staticClass:"segmentation"}),s("e-panel",{attrs:{title:"课程介绍"}},[s("div",{domProps:{innerHTML:e._s(e.summary)}})]),s("div",{staticClass:"segmentation"}),s("teacher",{staticClass:"teacher",attrs:{"teacher-info":e.details.teachers}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:2==e.active,expression:"active == 2"}]},[s("review-list",{ref:"review",attrs:{"target-id":e.details.courseSet.id,reviews:1==e.courseSettings.show_review?e.details.reviews:[],title:"学员评价","defaul-value":"暂无评价",type:"course"}})],1)]),s("van-action-sheet",{staticClass:"minHeight50",attrs:{title:e.userInfoCollectForm.formTitle,"close-on-click-overlay":!1,"safe-area-inset-bottom":!0},on:{cancel:e.onCancelForm},model:{value:e.isShowForm,callback:function(t){e.isShowForm=t},expression:"isShowForm"}},[s("info-collection",{attrs:{userInfoCollectForm:e.userInfoCollectForm,formRule:e.userInfoCollectForm.items},on:{submitForm:e.onCancelForm}})],1)],1)}),[],!1,null,null,null).exports,U=s("86ee"),z=s("49a2"),B=s("8b9d"),R=s("a262");function G(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function W(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?G(Object(s),!0).forEach((function(t){Object(r.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):G(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var Y={name:"JoinBefore",components:{Teacher:g,Directory:c.a,DetailHead:l.a,DetailPlan:b,moreMask:U.a,reviewList:o.a,onsale:z.a,infoCollection:A.a},mixins:[O.a,B.a,R.a,F.a],data:function(){return{tabs:["课程介绍","课程目录","学员评价"],loadMoreAbout:!1,active:0,tabsClass:"",learnExpiry:"永久有效",startDateStr:"",endDateStr:"",tops:{aboutTop:0,courseTop:0,reviewTop:0},isEmpty:!0,unreceivedCoupons:[],miniCoupons:[],marketingActivities:{seckill:{}},courseSettings:{},isShowForm:!1,paramsList:{}}},watch:{$route:function(e,t){this.resetFrom()}},created:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.a.getSettings({query:{type:"course"}}).catch((function(e){}));case 2:e.courseSettings=t.sent;case 3:case"end":return t.stop()}}),t)})))()},computed:W(W(W({},Object(d.e)(["couponSwitch","user"])),Object(d.e)("course",{details:function(e){return e.details}})),{},{summary:function(){return this.details.summary||this.details.courseSet.summary},isClassCourse:function(){return Number(this.details.parentId)},accessToJoin:function(){return"success"===this.details.access.code||"user.not_login"===this.details.access.code},vipAccessToJoin:function(){var e=!1;return!(!this.details.vipLevel||!this.user.vip)&&(this.details.vipLevel.seq<=this.user.vip.seq&&(e=!(new Date(this.user.vip.deadline).getTime()<(new Date).getTime())),e)},showOnsale:function(){return!this.isClassCourse&&0!==Number(this.details.price)&&!!(this.unreceivedCoupons.length||Object.keys(this.marketingActivities).length&&!this.onlySeckill)},onlySeckill:function(){return 1===Object.keys(this.marketingActivities).length&&this.marketingActivities.seckill},seckillStatus:function(){var e=this.marketingActivities.seckill;return Object(h.dateTimeDown)(new Date(e.endTime).getTime())},showSeckill:function(){var e=this.marketingActivities.seckill;return!this.isClassCourse&&0!==Number(this.details.price)&&e&&"ongoing"==e.status&&!this.isEmpty}}),mounted:function(){var e=this;!this.isClassCourse&&this.couponSwitch&&(P.a.searchCoupon({params:{targetId:this.details.courseSet.id,targetType:"course"}}).then((function(t){e.unreceivedCoupons=t.data,e.miniCoupons=e.unreceivedCoupons.length>3?e.unreceivedCoupons.slice(0,4):e.unreceivedCoupons})).catch((function(e){})),P.a.coursesActivities({query:{id:this.details.id}}).then((function(t){e.marketingActivities=t,e.isEmpty=!t.seckill||!+t.seckill.productRemaind})).catch((function(e){}))),window.addEventListener("touchmove",this.handleScroll),window.addEventListener("scroll",this.handleScroll),setTimeout((function(){window.scrollTo(0,0)}),100)},destroyed:function(){window.removeEventListener("touchmove",this.handleScroll),window.removeEventListener("scroll",this.handleScroll)},methods:W(W({},Object(d.c)("course",["joinCourse","getAfterCourse"])),{},{onTabClick:function(e,t){var s=this.$refs[this.transIndex2Tab(e)];window.scrollTo(0,s.$el.offsetTop-44)},transIndex2Tab:function(e){return["about","directory","review"][e]},handleScroll:function(){var e=this;if(!this.scrollFlag){this.scrollFlag=!0;var t=this.$refs,s=["about","directory","review"].reverse();setTimeout((function(){Object.keys(t).forEach((function(s){t[s]&&(e.tops["".concat(s,"Top")]=t[s].$el.getBoundingClientRect().top)})),e.scrollFlag=!1,e.tabsClass=e.tops.aboutTop-44<=0?"van-tabs--fixed":"";for(var i=0;i<s.length;i++)if(e.tops["".concat(s[i],"Top")]-44<=0)return void(e.active=s.length-i-1)}),400)}},activeCurrentTab:function(e){var t=this.tops;return(e+=44)<t.teacherTop?0:e>=t.directoryTop?2:1},handleJoin:function(){var e=this.vipAccessToJoin;if(this.accessToJoin||e)if(this.$store.state.token){var t=this.details.learningExpiryDate.expiryEndDate,s=new Date(t).getTime(),i=(new Date).getTime(),r=i<s;if(r=0==t||i<s,Number(this.details.buyable)&&r||e){if(+this.details.price&&!e)return void this.getOrder();this.collectUseInfoEvent()}}else this.$router.push({name:"login",query:{redirect:this.redirect}});else this.$toast("禁止加入")},joinFreeCourse:function(){var e=this;this.joinCourse({id:this.details.id}).then((function(t){i.a.clear(),0!==Object.keys(t).length||e.getOrder()})).catch((function(e){}))},getAfCourse:function(e){this.getAfterCourse({courseId:e}).then((function(){})).catch((function(e){i.a.fail(e.message)}))},getLearnExpiry:function(e){this.learnExpiry=e.val,this.startDateStr=e.startDateStr,this.endDateStr=e.endDateStr},switchPlan:function(){var e=this;this.marketingActivities={},P.a.coursesActivities({query:{id:this.details.id}}).then((function(t){e.marketingActivities=t})).catch((function(e){}))},getOrder:function(){var e=this.details.learningExpiryDate.expiryMode,t="".concat(this.startDateStr," 至 ").concat(this.endDateStr),s="date"===e?t:this.learnExpiry;this.$router.push({name:"order",params:{id:this.details.id},query:{expiryScope:s,targetType:"course"}})},sellOut:function(){this.isEmpty=!0},getParamsList:function(){this.paramsList={action:"buy_before",targetType:"course",targetId:this.details.id}},collectUseInfoEvent:function(){var e=this;this.hasUserInfoCollectForm?this.isShowForm=!0:(i.a.loading({duration:0,message:"加载中...",forbidClick:!0}),this.getParamsList(),this.getInfoCollectionEvent(this.paramsList).then((function(t){if(Object.keys(t).length)return e.userInfoCollect=t,void e.getInfoCollectionForm(t.id).then((function(t){e.isShowForm=!0,i.a.clear()}));e.joinFreeCourse()})))}})},K=Object(v.a)(Y,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:e.isClassCourse?"":"join-before"},[s("detail-head",{attrs:{price:e.details.price,"course-set":e.details.courseSet,"seckill-activities":e.marketingActivities.seckill},on:{goodsEmpty:e.sellOut}}),s("detail-plan",{on:{getLearnExpiry:e.getLearnExpiry,switchPlan:e.switchPlan}}),s("div",{staticClass:"segmentation"}),e.showOnsale?[s("onsale",{attrs:{"unreceived-coupons":e.unreceivedCoupons,"mini-coupons":e.miniCoupons,activities:e.marketingActivities}}),s("div",{staticClass:"segmentation"})]:e._e(),s("van-tabs",{class:e.tabsClass,on:{click:e.onTabClick},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},e._l(e.tabs,(function(e){return s("van-tab",{key:e,attrs:{title:e}})})),1),s("e-panel",{ref:"about",staticClass:"about",attrs:{title:"课程介绍"}},[s("more-mask",{attrs:{disabled:e.loadMoreAbout},on:{maskLoadMore:function(t){e.loadMoreAbout=!0}}},[s("div",{domProps:{innerHTML:e._s(e.summary)}})])],1),s("div",{staticClass:"segmentation"}),s("teacher",{staticClass:"teacher",attrs:{"teacher-info":e.details.teachers,title:"教师介绍"}}),s("div",{staticClass:"segmentation"}),s("directory",{ref:"directory"}),s("div",{staticClass:"segmentation"}),s("review-list",{ref:"review",attrs:{"target-id":e.details.courseSet.id,reviews:1==e.courseSettings.show_review?e.details.reviews:[],title:"学员评价",type:"course","defaul-value":"暂无评价"}}),s("van-action-sheet",{staticClass:"minHeight50",attrs:{title:e.userInfoCollectForm.formTitle,"close-on-click-overlay":!1,"safe-area-inset-bottom":!0},model:{value:e.isShowForm,callback:function(t){e.isShowForm=t},expression:"isShowForm"}},[s("info-collection",{attrs:{userInfoCollectForm:e.userInfoCollectForm,formRule:e.userInfoCollectForm.items},on:{submitForm:e.joinFreeCourse}})],1),e.isClassCourse||e.marketingActivities.seckill&&(!e.marketingActivities.seckill||!e.isEmpty&&"已到期"!==e.seckillStatus)&&0!=e.details.price?e._e():s("e-footer",{attrs:{disabled:!e.accessToJoin},nativeOn:{click:function(t){return e.handleJoin(t)}}},[e._v("\n    "+e._s(e._f("filterJoinStatus")(e.details.access.code,"course",e.vipAccessToJoin)))]),e.showSeckill&&"已到期"!==e.seckillStatus?s("div",[s("e-footer",{attrs:{disabled:!e.accessToJoin,half:"true"},nativeOn:{click:function(t){return e.handleJoin(t)}}},[e._v(e._s(e._f("filterJoinStatus")(e.details.access.code,"course",e.vipAccessToJoin)))]),s("e-footer",{attrs:{half:"true"},nativeOn:{click:function(t){return e.activityHandle(e.marketingActivities.seckill.id)}}},[e._v("去秒杀")])],1):e._e()],2)}),[],!1,null,null,null).exports;function Q(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function V(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(s),!0).forEach((function(t){Object(r.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):Q(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var X={components:{},inject:["reload"],data:function(){return{currentComp:""}},computed:V(V({},Object(d.e)("course",{selectedPlanIndex:function(e){return e.selectedPlanIndex},joinStatus:function(e){return e.joinStatus},details:function(e){return e.details},selectedPlanId:function(e){return e.selectedPlanId}})),Object(d.e)({isLoading:function(e){return e.isLoading}})),watch:{joinStatus:{handler:"joinStatusChange"},$route:function(e,t){this.getData()}},created:function(){this.getData()},methods:V(V(V({},Object(d.c)("course",["getCourseLessons"])),Object(d.d)("course",{setSourceType:j.x})),{},{getData:function(){var e=this;this.getCourseLessons({courseId:this.$route.params.id}).then((function(t){e.joinStatusChange(t.member)}))},joinStatusChange:function(e){this.currentComp="",this.currentComp=e?H:K},getJoinAfter:function(){this.getJoinAfterDetail({courseId:this.$route.params.id}).then((function(e){})).catch((function(e){i.a.fail(e.message)}))}}),beforeRouteLeave:function(e,t,s){this.setSourceType({sourceType:"img",taskId:0}),s()}},Z=Object(v.a)(X,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"course-detail"},[this.isLoading?t("e-loading"):this._e(),t(this.currentComp,{tag:"component",attrs:{details:this.details}})],1)}),[],!1,null,null,null);t.default=Z.exports}}]);