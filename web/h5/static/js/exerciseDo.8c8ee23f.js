(window.webpackJsonp=window.webpackJsonp||[]).push([["exerciseDo"],{"057e":function(e,t,i){"use strict";i("8e6e"),i("ac6a"),i("456d");var s=i("bd86"),r=i("2f62");function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}var a={name:"GuidePage",data:function(){return{isFristVisited:!1}},computed:function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){Object(s.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},Object(r.e)({user:function(e){return e.user}})),created:function(){this.setVisited()},methods:{setVisited:function(){var e="".concat(this.user.id,"-task-visited");localStorage.getItem(e),localStorage.getItem(e)||(this.isFristVisited=!0,localStorage.setItem(e,!0))}}},c=i("0c7c"),o=Object(c.a)(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.isFristVisited,expression:"isFristVisited"}],staticClass:"guide",on:{click:function(t){e.isFristVisited=!1}}},[i("div",{staticClass:"guide__text"},[e._v("左右切换滑动")]),e._m(0)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"guide__gesture"},[t("img",{attrs:{src:"static/images/leftslide.png"}}),t("img",{attrs:{src:"static/images/rightslide.png"}})])}],!1,null,null,null);t.a=o.exports},"391c":function(e,t,i){"use strict";i("e17f");var s=i("2241");i("456d"),i("ac6a"),t.a={methods:{canDoing:function(e,t){return new Promise((function(i,r){if(e&&"doing"===e.status){var n="exercise-".concat(t,"-").concat(e.id),a=JSON.parse(localStorage.getItem(n));a=a?Object.keys(a).forEach((function(e){a[e]=a[e].filter((function(e){return""!==e}))})):{},s.a.confirm({title:"提示",cancelButtonText:"放弃做题",confirmButtonText:"继续做题",message:"您有未完成的练习，是否继续？"}).then((function(){i()})).catch((function(){r({answer:a})}))}}))}}}},ea75:function(e,t,i){"use strict";i.r(t),i("8e6e"),i("a481"),i("456d"),i("c5f6"),i("ac6a"),i("e7e5");var s=i("d399"),r=(i("e17f"),i("2241")),n=i("bd86"),a=i("3ce7"),c=i("faa5"),o=i("2f62"),u=i("057e"),l=i("f5cc"),d=i("391c"),f=i("8ae7"),h=i("c8a5"),m=i("7c97");function p(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function g(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(Object(i),!0).forEach((function(t){Object(n.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var v="",w={name:"ExerciseDo",components:{itemBank:l.a,guidePage:u.a,OutFocusMask:m.a},mixins:[d.a,f.a,h.a],data:function(){return{info:[],answer:{},lastAnswer:null,cardSeq:0,exercise:null,cardShow:!1,localanswerName:null,localtimeName:null,lastUsedTime:null,usedTime:null,isHandExercise:!1,slideIndex:0,saveInterval:null}},computed:g({},Object(o.e)({isLoading:function(e){return e.isLoading},user:function(e){return e.user}})),watch:{answer:{handler:"saveAnswer",deep:!0}},mounted:function(){this.getData(),this.initReport(),this.saveAnswerInterval()},beforeRouteEnter:function(e,t,i){v="/"===t.fullPath?"/":"",i()},beforeRouteLeave:function(e,t,i){0==this.info.length||this.isHandExercise||"doing"!=this.exercise.status||this.submitpaper(),i()},beforeDestroy:function(){this.saveInterval&&clearInterval(this.saveInterval),this.clearTime(),r.a.close()},methods:g(g(g({},Object(o.d)({setNavbarTitle:c.v})),Object(o.c)("course",["handExercisedo","saveAnswerdo"])),{},{getData:function(){var e=this,t=this.$route.query.exerciseId,i=this.$route.query.targetId;a.a.getExerciseInfo({query:{exerciseId:t},data:{targetId:i,targetType:"task"}}).then((function(t){e.afterGetData(t)})).catch((function(t){var i=s.a.fail(t.message);"4036706"==t.code&&setTimeout((function(){e.toIntro(),i.clear()}),2e3)}))},initReport:function(){this.initReportData(this.$route.query.courseId,this.$route.query.targetId,"exercise")},afterGetData:function(e){this.setNavbarTitle(e.paperName),this.exercise=e,this.isDoing()||(this.getLocalData(),this.formatData(e),this.interruption(),this.saveTime())},isDoing:function(){return"doing"!=this.exercise.status&&(this.showResult(),!0)},interruption:function(){var e=this;this.$route.params.KeepDoing||this.canDoing(this.exercise,this.user.id).then((function(){})).catch((function(t){var i=t.answer;e.submitExercise(i)}))},formatData:function(e){var t=this;e.items.forEach((function(e){if("material"!=e.type){var i=t.sixType(e.type,e,t.lastAnswer);t.$set(t.answer,e.id,i.answer),t.info.push(i.item)}if("material"==e.type){var s=Object.assign({},e,{subs:""});e.subs.forEach((function(i,r){i.parentTitle=s,i.parentType=e.type,i.materialIndex=r+1;var n=t.sixType(i.type,i,t.lastAnswer);t.$set(t.answer,i.id,n.answer),t.info.push(n.item)}))}}))},formatStatus:function(e,t){var i=0;return("single_choice"==e||"choice"==e||"uncertain_choice"==e||"determine"==e)&&this.answer[t].length>0||"essay"==e&&""!=this.answer[t][0]?i=1:"fill"==e?i=Number(this.answer[t].some((function(e){return""!=e}))):i},slideToNumber:function(e){var t=Number(e);this.cardSeq=t,this.cardShow=!1},getLocalData:function(){this.localanswerName="exercise-".concat(this.user.id,"-").concat(this.exercise.id),this.localuseTime="exercise-".concat(this.user.id,"-").concat(this.exercise.id,"-usedTime"),this.lastAnswer=JSON.parse(localStorage.getItem(this.localanswerName))},saveAnswer:function(e){localStorage.setItem(this.localanswerName,JSON.stringify(e))},saveTime:function(){var e=this,t=localStorage.getItem(this.localuseTime)||0;this.usedTime=setInterval((function(){localStorage.setItem(e.localuseTime,++t)}),1e3)},clearTime:function(){clearInterval(this.usedTime),this.usedTime=null},submitpaper:function(){var e=this,t=0,i=this.$t("courseLearning.sureSubmit"),s=JSON.parse(JSON.stringify(this.answer));Object.keys(s).forEach((function(e){s[e]=s[e].filter((function(e){return""!==e})),0===s[e].length&&t++})),t>0&&(i=this.$t("courseLearning.notSureSubmit",{number:t})),r.a.confirm({title:this.$t("courseLearning.submit2"),cancelButtonText:this.$t("courseLearning.submitNow"),confirmButtonText:this.$t("courseLearning.check"),message:i}).then((function(){return e.cardShow=!0,!1})).catch((function(){e.clearTime(),e.submitExercise(s).then((function(e){return!0})).catch((function(){return!1}))}))},submitExercise:function(e){var t=this;e||(e=JSON.parse(JSON.stringify(this.answer)),Object.keys(e).forEach((function(t){e[t]=e[t].filter((function(e){return""!==e}))})));var i={answer:e,exerciseId:this.$route.query.exerciseId,userId:this.user.id,exerciseResultId:this.exercise.id};return new Promise((function(e,r){t.handExercisedo(i).then((function(i){t.isHandExercise=!0,e(),t.reprtData({eventName:"finish"}),t.showResult()})).catch((function(i){var n=s.a.fail(i.message);"4036705"==i.code?setTimeout((function(){t.isHandExercise=!0,n.clear(),e(),t.showResult()}),2e3):r(i)}))}))},saveAnswerInterval:function(){var e=this;this.saveInterval=setInterval((function(){a.a.saveExerciseAnswerDo({hideLoading:!0,data:{data:JSON.parse(JSON.stringify(e.answer))},query:{resultId:e.exercise.id}})}),5e3)},showResult:function(){this.$router.replace({name:"exerciseResult",query:{exerciseId:this.$route.query.exerciseId,exerciseResultId:this.exercise.id,taskId:this.$route.query.targetId,backUrl:v,courseId:this.$route.query.courseId}})},toIntro:function(){this.$router.replace({name:"exerciseIntro",query:{courseId:this.$route.query.courseId,taskId:this.$route.query.targetId,backUrl:v}})}})},b=i("0c7c"),y=Object(b.a)(w,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"paper-swiper"},[i("out-focus-mask",{attrs:{type:e.outFocusMaskType,isShow:e.isShowOutFocusMask,reportType:e.reportType},on:{outFocusMask:e.outFocusMask}}),e.isLoading?i("e-loading"):e._e(),e.info.length>0?i("item-bank",{attrs:{current:e.cardSeq,info:e.info,answer:e.answer,"show-score":!1,"slide-index":e.slideIndex,all:e.info.length},on:{"update:current":function(t){e.cardSeq=t},"update:answer":function(t){e.answer=t},"update:slideIndex":function(t){e.slideIndex=t},"update:slide-index":function(t){e.slideIndex=t}}}):e._e(),i("guide-page"),i("div",{staticClass:"paper-footer"},[i("div",[i("span",{on:{click:function(t){e.cardShow=!0}}},[i("i",{staticClass:"iconfont icon-Questioncard"}),e._v("\n        "+e._s(e.$t("courseLearning.questionCard"))+"\n      ")])]),i("div",[i("span",{on:{click:e.submitpaper}},[i("i",{staticClass:"iconfont icon-submit"}),e._v("\n        "+e._s(e.$t("courseLearning.submit2"))+"\n      ")])])]),i("van-popup",{attrs:{position:"bottom"},model:{value:e.cardShow,callback:function(t){e.cardShow=t},expression:"cardShow"}},[e.info.length>0?i("div",{staticClass:"card"},[i("div",{staticClass:"card-title"},[i("div",[i("span",{staticClass:"card-finish"},[e._v(e._s(e.$t("courseLearning.completed")))]),i("span",{staticClass:"card-nofinish"},[e._v(e._s(e.$t("courseLearning.notCompleted")))])]),i("i",{staticClass:"iconfont icon-no",on:{click:function(t){e.cardShow=!1}}})]),i("div",{staticClass:"card-list"},[i("div",{staticClass:"card-homework-item"},[i("div",{staticClass:"card-item-list"},e._l(e.info,(function(t){return i("div",{key:t.id,class:["list-cicle",1==e.formatStatus(t.type,t.id)?"cicle-active":""],on:{click:function(i){return e.slideToNumber(t.seq)}}},[e._v("\n              "+e._s(t.seq)+"\n            ")])})),0)])])]):e._e()])],1)}),[],!1,null,null,null);t.default=y.exports}}]);