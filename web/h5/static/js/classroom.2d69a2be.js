(window.webpackJsonp=window.webpackJsonp||[]).push([["classroom"],{8807:function(e,t,s){"use strict";s("a481"),s("ac6a"),s("456d"),s("7f7f"),s("c5f6");var i=s("db72"),a=s("2f62"),r={props:{type:{type:String,default:"price"},course:{type:Object,default:{}},order:{type:Object,default:{}}},data:function(){return{isFree:0==this.course.price}},computed:Object(i.a)({},Object(a.d)(["courseSettings"]),{rate:function(){return parseInt(this.course.publishedTaskNum)?parseInt(this.course.progress.percent):0},showStudent:function(){return!this.courseSettings||Number(this.courseSettings.show_student_num_enabled)}}),filters:{numFilter:function(e){return e?parseFloat(e).toFixed(2):""}},methods:{goToPay:function(){this.$router.push({path:"/pay",query:{id:this.order.id,source:"order",sn:this.order.sn,targetId:this.order.targetId,targetType:this.order.targetType}})}}},n=s("2877"),c={components:{switchBox:Object(n.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"e-course-switch-box"},["price"===e.type?s("div",{staticClass:"switch-box"},[s("span",{staticClass:"switch-box__price"},[e.isFree?s("p",{staticClass:"free"},[e._v("免费")]):e._e(),e.isFree?e._e():s("p",{staticClass:"price"},[e._v("¥ "+e._s(e.course.price))])]),s("span",{staticClass:"switch-box__state"},[e.showStudent?s("p",[e._v(e._s(e.course.studentNum)+"人在学")]):e._e()])]):e._e(),"order"===e.type?s("div",{staticClass:"switch-box"},[s("span",{staticClass:"switch-box__price"},[e.isFree?s("p",{staticClass:"free"},[e._v("免费")]):e._e(),e.isFree?e._e():s("p",{staticClass:"price"},[e._v("¥ "+e._s(e.order.pay_amount/100))])]),s("span",{staticClass:"switch-box__state"},["created"!==e.order.status&&"paying"!==e.order.status?s("p",{class:e.order.status},[e._v("\n        "+e._s(e._f("filterOrderStatus")(e.order.status))+"\n      ")]):e._e(),"created"===e.order.status||"paying"===e.order.status?s("span",{staticClass:"order-pay",on:{click:e.goToPay}},[e._v(e._s(e._f("filterOrderStatus")(e.order.status)))]):e._e()])]):e._e(),"confirmOrder"===e.type?s("div",{staticClass:"switch-box"},[s("span",{staticClass:"switch-box__price"},[s("p",{staticClass:"price"},[e._v("¥ "+e._s(e._f("numFilter")(e.order.totalPrice)))])])]):e._e(),"rank"===e.type?s("div",{staticClass:"rank-box"},[s("div",{staticClass:"progress round-conner"},[s("div",{staticClass:"curRate round-conner",style:{width:e.rate+"%"}})]),s("span",[e._v(e._s(this.rate)+"%")])]):e._e()])}),[],!1,null,null,null).exports},props:{course:{type:Object,default:function(){return{}}},order:{type:Object,default:function(){return{}}},type:{type:String,default:"price"},feedback:{type:Boolean,default:!0},typeList:{type:String,default:"course_list"},duration:{type:Number,default:0}},data:function(){return{pathName:this.$route.name}},computed:{imgSrc:function(){if("classroom_list"===this.typeList)return this.course.cover.middle;var e=this.course.courseSet;return e?e.cover.middle:this.order.cover.middle},title:function(){return"classroom_list"===this.typeList?this.course.title:this.course.courseSetTitle||(this.course.courseSet?this.course.courseSet.title:"")||this.order.title},teachPlan:function(){return!!this.course.title&&this.course.title},imgClass:function(){return"vip"===this.typeList?"e-vip__img":"e-course__img"},vipDuration:function(){return"month"===this.order.unitType?"".concat(this.duration,"个月"):"year"===this.order.unitType?"".concat(this.duration,"年"):"".concat(this.duration,"天")}},watch:{course:{handler:function(e){var t=e.courseSet;if("miniprogramSetting"===this.pathName&&t)for(var s=Object.keys(t.cover),i=0;i<s.length;i++)t.cover[s[i]]=t.cover[s[i]].replace(/^(\/\/)|(http:\/\/)/,"https://")},immediate:!0}},methods:{onClick:function(e){if(this.feedback&&"vip"!==this.typeList){var t="order"===this.type,s=this.course.id||this.order.targetId;"SPAN"!==e.target.tagName&&(t?location.href=this.order.targetUrl:this.$router.push({path:"course_list"===this.typeList?"/course/".concat(s):"/classroom/".concat(s)}))}}}},o=Object(n.a)(c,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"e-course"},[s("div",{staticClass:"clearfix",on:{click:e.onClick}},[s("div",{staticClass:"e-course__left pull-left"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgSrc,expression:"imgSrc"}],class:e.imgClass})]),s("div",{staticClass:"e-course__right pull-left"},["confirmOrder"===e.type?s("div",{staticClass:"e-course__title course-confirm-title"},[e._v("\n        "+e._s(e.title)),"vip"===e.typeList?s("span",{staticClass:"grey-medium"},[e._v(" x "+e._s(e.vipDuration))]):e._e()]):s("div",[s("div",{staticClass:"e-course__title text-overflow"},[e._v(e._s(e.title))]),"classroom_list"===e.typeList?s("div",{staticClass:"e-course__count"},[e._v("\n          共 "+e._s(e.course.courseNum)+" 门课程\n        ")]):e._e(),"course_list"===e.typeList?s("div",{staticClass:"e-course__project text-overflow"},[e.teachPlan?s("span",[e._v(e._s(e.teachPlan))]):e._e()]):e._e()]),s("switchBox",{attrs:{type:e.type,course:e.course,order:e.order,"student-num":e.course.studentNum,"published-task-num":e.course.publishedTaskNum}})],1)])])}),[],!1,null,null,null);t.a=o.exports},"8ab6":function(e,t,s){"use strict";s.r(t),s("ac6a"),s("456d"),s("e7e5");var i=s("d399"),a=s("db72"),r=(s("e17f"),s("2241")),n={name:"Teacher",props:["teacherInfo","title","defaulValue"]},c=s("2877"),o=Object(c.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("e-panel",{attrs:{title:e.title,"defaul-value":e.defaulValue}},[e._l(e.teacherInfo,(function(t){return e.teacherInfo.length?[s("div",{staticClass:"teacher-content"},[s("img",{staticClass:"avatar-img",attrs:{src:t.avatar&&t.avatar.large}}),s("div",{staticClass:"teacher-cell"},[s("span",{staticClass:"dark font-family-PFM"},[e._v(e._s(t.nickname))]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"item.title"}],staticClass:"text-content"},[e._v(e._s(t.title))])])])]:e._e()}))],2)}),[],!1,null,null,null).exports,l=s("fd23"),u=s("bced"),d=s("3ce7"),p=s("4328"),h=s.n(p),v=s("2f62"),m={components:{countDown:l.a,tagLink:u.a},props:{cover:{type:String,default:""},price:{type:String,default:""},classroomId:{type:String,default:0},seckillActivities:{type:Object,default:null}},data:function(){return{counting:!0,isEmpty:!1,tagData:{earnings:0,isShow:!1,link:"",className:"course-tag",minDirectRewardRatio:0},bindAgencyRelation:{}}},computed:Object(a.a)({},Object(v.d)(["DrpSwitch"])),created:function(){this.showTagLink()},methods:{expire:function(){this.counting=!1},sellOut:function(){this.isEmpty=!0,this.$emit("goodsEmpty")},showTagLink:function(){this.DrpSwitch?(this.initTagData(),this.getAgencyBindRelation()):this.tagData.isShow=!1},getAgencyBindRelation:function(){var e=this;d.a.getAgencyBindRelation().then((function(t){t.agencyId?(e.bindAgencyRelation=t,e.tagData.isShow=!0):e.tagData.isShow=!1}))},initTagData:function(){var e=this;d.a.getDrpSetting().then((function(t){e.drpSetting=t,e.tagData.minDirectRewardRatio=t.minDirectRewardRatio;var s={type:"classroom",id:e.classroomId,merchant_id:e.drpSetting.merchantId};e.tagData.link=e.drpSetting.distributor_template_url+"?"+h.a.stringify(s);var i=e.drpSetting.minDirectRewardRatio/100*e.price;e.tagData.earnings=(Math.floor(100*i)/100).toFixed(2)}))}}},f=Object(c.a)(m,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"course-detail__head pos-rl"},[s("div",{staticClass:"course-detail__head--img"},[s("img",{attrs:{src:e.cover,alt:""}})]),e.seckillActivities&&e.counting&&!e.isEmpty&&"ongoing"===e.seckillActivities.status?s("countDown",{attrs:{activity:e.seckillActivities},on:{timesUp:e.expire,sellOut:e.sellOut}}):e._e(),s("tagLink",{attrs:{"tag-data":e.tagData}})],1)}),[],!1,null,null,null).exports,g=s("d0b2"),_=s("8807"),b=s("86ee"),y={name:"CourseSetList",components:{course:_.a,moreMask:b.a},props:{courseSets:{default:null},title:{default:""},defaulValue:{default:""},disableMask:{type:Boolean,default:!1},feedback:{type:Boolean,default:!0}},data:function(){return{maxShowNum:5}},computed:{partCourseSets:function(){return this.courseSets.slice(0,5)}},methods:{loadMore:function(){this.$emit("update:disableMask",!0)}}},C=Object(c.a)(y,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("e-panel",{attrs:{title:e.title,"need-flex":!1,"defaul-value":e.defaulValue}},[e.courseSets.length?[!e.disableMask&&e.courseSets.length>5?s("moreMask",{attrs:{"force-show":!0},on:{maskLoadMore:e.loadMore}},[e._l(e.partCourseSets,(function(t){return[s("course",{staticStyle:{"padding-left":"0","padding-right":"0"},attrs:{feedback:e.feedback,course:t}})]}))],2):[e._l(e.courseSets,(function(t){return[s("course",{staticStyle:{"padding-left":"0","padding-right":"0"},attrs:{feedback:e.feedback,course:t}})]}))]]:e._e()],2)}),[],!1,null,null,null).exports,w=(s("c5f6"),s("410d")),k=s("0d25"),S={components:{service:w.a},filters:{filterPrice:function(e){return 0===Number(e)?"免费":"¥".concat(e)}},props:{details:{default:{}},joinStatus:{default:!1}},watch:{learnExpiryHtml:{immediate:!0,handler:function(e){this.$emit("getLearnExpiry",{val:e})}}},computed:Object(a.a)({},Object(v.d)(["vipSwitch"]),{learnExpiryHtml:function(){var e=this.joinStatus,t=this.details.expiryValue,s=this.details.expiryMode;if(e)return"forever"==s?"永久有效":0!=e.deadline?e.deadline.slice(0,10)+"之前可学习":"永久有效";switch(s){case"forever":return"永久有效";case"date":var i=new Date(1e3*t);return Object(k.formatFullTime)(i).slice(0,10)+"之前可学习";case"days":return t+"天内可学习"}}})},x=Object(c.a)(S,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"classroom-plan"},[s("e-panel",{attrs:{title:e.details.title}},[s("div",{staticClass:"course-detail__plan-price"},[s("span",{class:{isFree:0===Number(e.details.price)}},[e._v(e._s(e._f("filterPrice")(e.details.price)))]),s("span",{staticClass:"plan-price__student-num"},[e._v(e._s(e.details.studentNum)+"人在学")])])]),s("div",{staticClass:"course-detail__validity"},[e.details.vipLevel&&e.vipSwitch?s("div",{staticClass:"mb15"},[s("span",{staticClass:"mr20"},[e._v("会员免费")]),s("img",{staticClass:"vipIcon",attrs:{src:e.details.vipLevel.icon}}),s("router-link",{staticClass:"color-primary",attrs:{to:{path:"/vip",query:{id:e.details.vipLevel.id}}}},[e._v(e._s(e.details.vipLevel.name)+"免费学")])],1):e._e(),e.details.service.length?s("service",{attrs:{services:e.details.service}}):e._e(),s("div",[s("span",[e._v("学习有效期：")]),s("span",{domProps:{innerHTML:e._s(e.learnExpiryHtml)}})])],1)],1)}),[],!1,null,null,null).exports,T=s("b127"),L={components:{directory:T.a,detailHead:f,detailPlan:x,teacher:o,courseSetList:C,reviewList:g.a,moreMask:b.a},props:["details","planDetails"],data:function(){return{headBottom:0,active:1,scrollFlag:!1,tabs:["班级介绍","班级课程","学员评价"],tabsClass:"",errorMsg:""}},mounted:function(){window.addEventListener("touchmove",this.handleScroll),this.showDialog()},destroyed:function(){window.removeEventListener("touchmove",this.handleScroll)},methods:{showDialog:function(){var e=this,t="",s="",a=function(){};if(this.details.member&&(this.details.member.access&&(t=this.details.member.access.code),t&&"success"!==t))if(this.errorMsg=this.getErrorMsg(t),"classroom.expired"===t||"member.expired"===t){s="班级已到期，无法继续学习，是否退出";var r={id:this.details.classId};a=function(){d.a.deleteClassroom({query:r}).then((function(e){e.success?window.location.reload():i.a.fail("退出班级失败，请稍后重试")}))},this.callConfirm(s,a)}else"vip.member_expired"===t?(s="会员已到期，请及时续费会员",a=function(){e.$router.push({path:"/vip"})},this.callConfirm(s,a)):i.a.fail(this.getErrorMsg(t))},handleScroll:function(){var e=this;if(!this.scrollFlag){this.scrollFlag=!0;var t=this.$refs;setTimeout((function(){e.headBottom=t.head.$el.getBoundingClientRect().bottom,e.scrollFlag=!1,e.tabsClass=e.headBottom<=0?"van-tabs--fixed":""}),400)}},getErrorMsg:function(e){switch(e){case"classroom.not_found":return"当前班级不存在";case"classroom.unpublished":return"当前班级未发布";case"classroom.expired":return"当前班级已过期";case"user.not_login":return"用户未登录";case"user.locked":return"用户被锁定";case"member.not_found":return"用户未加入班级";case"member.auditor":return"用户是旁听生";case"member.expired":return"班级已过期";case"vip.vip_closed":return"网校已关闭会员功能";case"vip.not_login":return"用户未登录";case"vip.not_member":return"当前用户并不是vip";case"vip.member_expired":return"用户会员服务已过期";case"vip.level_not_exist":return"用户会员等级或班级会员不存在";case"vip.level_low":return"用户会员等级过低";default:return"异常错误"}},callConfirm:function(e,t){r.a.confirm({message:e,title:""}).then((function(){t()})).catch((function(){}))}}},O=Object(c.a)(L,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"course-detail classroom-detail"},[s("div",{staticClass:"join-after"},[s("detail-head",{ref:"head",attrs:{cover:e.details.cover,price:e.planDetails.price,"classroom-id":e.details.classId}}),s("van-tabs",{class:e.tabsClass,model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},e._l(e.tabs,(function(e){return s("van-tab",{key:e,attrs:{title:e}})})),1),0==e.active?s("div",{staticStyle:{"margin-top":"44px"}},[s("detail-plan",{attrs:{details:e.planDetails,"join-status":e.details.joinStatus}}),s("div",{staticClass:"segmentation"}),s("e-panel",{ref:"about",staticClass:"about",attrs:{title:"班级介绍"}},[s("div",{domProps:{innerHTML:e._s(e.details.summary)}})]),s("div",{staticClass:"segmentation"}),s("teacher",{staticClass:"teacher",attrs:{"teacher-info":e.details.teachers,title:"教师介绍"}}),s("div",{staticClass:"segmentation"}),s("teacher",{staticClass:"teacher",attrs:{"teacher-info":e.details.headTeacher?[e.details.headTeacher]:[],title:"班主任","defaul-value":"尚未设置班主任"}})],1):e._e(),1==e.active?s("div",{staticStyle:{"margin-top":"44px"}},[s("course-set-list",{ref:"course",attrs:{feedback:!e.errorMsg,"course-sets":e.details.courses,"disable-mask":!0,title:"班级课程","defaul-value":"暂无课程"},nativeOn:{click:function(t){return e.showDialog(t)}}})],1):e._e(),2==e.active?s("div",{staticStyle:{"margin-top":"44px"}},[s("review-list",{ref:"review",attrs:{"target-id":e.details.classId,reviews:e.details.reviews,title:"学员评价","defaul-value":"暂无评价",type:"classroom"}})],1):e._e()],1)])}),[],!1,null,null,null).exports,j=s("49a2"),D=s("d863"),E=s("8b9d"),M=s("a262"),A={components:{directory:T.a,detailHead:f,detailPlan:x,teacher:o,courseSetList:C,reviewList:g.a,moreMask:b.a,onsale:j.a},mixins:[D.a,E.a,M.a],props:["details","planDetails"],data:function(){return{tops:{aboutTop:0,courseTop:0,reviewTop:0},active:0,scrollFlag:!1,tabs:["班级介绍","班级课程","学员评价"],tabsClass:"",loadMoreAbout:!1,disableMask:!1,learnExpiry:"永久有效",unreceivedCoupons:[],miniCoupons:[],marketingActivities:{seckill:{}},isEmpty:!0}},computed:Object(a.a)({},Object(v.d)(["couponSwitch","user"]),{accessToJoin:function(){return"success"===this.details.access.code||"user.not_login"===this.details.access.code},vipAccessToJoin:function(){var e=!1;return!(!this.details.vipLevel||!this.user.vip)&&(this.details.vipLevel.seq<=this.user.vip.seq&&(e=!(new Date(this.user.vip.deadline).getTime()<(new Date).getTime())),e)},showOnsale:function(){return 0!==Number(this.planDetails.price)&&!!(this.unreceivedCoupons.length||Object.keys(this.marketingActivities).length&&!this.onlySeckill)},onlySeckill:function(){return 1===Object.keys(this.marketingActivities).length&&this.marketingActivities.seckill},seckillStatus:function(){var e=this.marketingActivities.seckill;return Object(k.dateTimeDown)(new Date(e.endTime).getTime())},showSeckill:function(){var e=this.marketingActivities.seckill;return 0!==Number(this.planDetails.price)&&e&&"ongoing"===e.status&&!this.isEmpty}}),mounted:function(){var e=this;this.couponSwitch&&d.a.searchCoupon({params:{targetId:this.details.classId,targetType:"classroom"}}).then((function(t){e.unreceivedCoupons=t.data,e.miniCoupons=e.unreceivedCoupons.length>3?e.unreceivedCoupons.slice(0,4):e.unreceivedCoupons})).catch((function(e){})),d.a.classroomsActivities({query:{id:this.details.classId}}).then((function(t){e.marketingActivities=t,e.isEmpty=!t.seckill||!+t.seckill.productRemaind})).catch((function(e){})),window.addEventListener("touchmove",this.handleScroll),window.addEventListener("scroll",this.handleScroll),setTimeout((function(){window.scrollTo(0,0)}),100)},destroyed:function(){window.removeEventListener("touchmove",this.handleScroll),window.removeEventListener("scroll",this.handleScroll)},methods:{onTabClick:function(e,t){var s=this.$refs[this.transIndex2Tab(e)];window.scrollTo(0,s.$el.offsetTop-44)},transIndex2Tab:function(e){return["about","course","review"][e]},handleScroll:function(){var e=this;if(!this.scrollFlag){this.scrollFlag=!0;var t=this.$refs,s=["about","course","review"].reverse();setTimeout((function(){Object.keys(t).forEach((function(s){e.tops["".concat(s,"Top")]=t[s].$el.getBoundingClientRect().top})),e.scrollFlag=!1,e.tabsClass=e.tops.aboutTop-44<=0?"van-tabs--fixed":"";for(var i=0;i<s.length;i++)if(e.tops["".concat(s[i],"Top")]-44<=0)return void(e.active=s.length-i-1)}),400)}},handleJoin:function(){var e=this,t=this.vipAccessToJoin;if(this.accessToJoin||t){var s=this.details,i=this.planDetails,a=1===Number(s.buyable)||0==+i.price||t;this.$store.state.token?a&&(!+i.price||t?d.a.joinClass({query:{classroomId:s.classId}}).then((function(t){e.details.joinStatus=t})).catch((function(e){})):this.$router.push({name:"order",params:{id:s.classId},query:{expiryScope:this.learnExpiry,targetType:"classroom"}})):this.$router.push({name:"login",query:{redirect:this.redirect}})}},getLearnExpiry:function(e){var t=e.val;this.learnExpiry=t},sellOut:function(){this.isEmpty=!0}}},I=Object(c.a)(A,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"course-detail classroom-detail"},[s("div",{staticClass:"join-before"},[s("detail-head",{attrs:{cover:e.details.cover,price:e.planDetails.price,"classroom-id":e.details.classId,"seckill-activities":e.marketingActivities.seckill},on:{goodsEmpty:e.sellOut}}),s("detail-plan",{attrs:{details:e.planDetails,"join-status":e.details.joinStatus},on:{getLearnExpiry:e.getLearnExpiry}}),s("div",{staticClass:"segmentation"}),e.showOnsale?[s("onsale",{attrs:{"unreceived-coupons":e.unreceivedCoupons,"mini-coupons":e.miniCoupons,activities:e.marketingActivities}}),s("div",{staticClass:"segmentation"})]:e._e(),s("van-tabs",{class:e.tabsClass,on:{click:e.onTabClick},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},e._l(e.tabs,(function(e){return s("van-tab",{key:e,attrs:{title:e}})})),1),s("e-panel",{ref:"about",staticClass:"about",attrs:{title:"班级介绍"}},[s("more-mask",{attrs:{disabled:e.loadMoreAbout},on:{maskLoadMore:function(t){e.loadMoreAbout=!0}}},[s("div",{domProps:{innerHTML:e._s(e.details.summary)}})])],1),s("div",{staticClass:"segmentation"}),s("teacher",{staticClass:"teacher",attrs:{"teacher-info":e.details.teachers,title:"教师介绍"}}),s("div",{staticClass:"segmentation"}),s("teacher",{staticClass:"teacher",attrs:{"teacher-info":e.details.headTeacher?[e.details.headTeacher]:[],title:"班主任","defaul-value":"尚未设置班主任"}}),s("div",{staticClass:"segmentation"}),s("course-set-list",{ref:"course",attrs:{"course-sets":e.details.courses,"disable-mask":e.disableMask,title:"班级课程","defaul-value":"暂无课程"},on:{"update:disableMask":function(t){e.disableMask=t},"update:disable-mask":function(t){e.disableMask=t}}}),s("div",{staticClass:"segmentation"}),s("review-list",{ref:"review",attrs:{"target-id":e.details.classId,reviews:e.details.reviews,title:"学员评价",type:"classroom","defaul-value":"暂无评价"}}),!e.marketingActivities.seckill||e.marketingActivities.seckill&&(e.isEmpty||"已到期"===e.seckillStatus)||0==e.planDetails.price?s("e-footer",{attrs:{disabled:!e.accessToJoin},nativeOn:{click:function(t){return e.handleJoin(t)}}},[e._v("\n      "+e._s(e._f("filterJoinStatus")(e.details.access.code,"classroom",e.vipAccessToJoin)))]):e._e(),e.showSeckill&&"已到期"!==e.seckillStatus?s("div",[s("e-footer",{attrs:{disabled:!e.accessToJoin,half:"true"},nativeOn:{click:function(t){return e.handleJoin(t)}}},[e._v(e._s(e._f("filterJoinStatus")(e.details.access.code,"classroom",e.vipAccessToJoin)))]),s("e-footer",{attrs:{half:"true"},nativeOn:{click:function(t){return e.activityHandle(e.marketingActivities.seckill.id)}}},[e._v("去秒杀")])],1):e._e()],2)])}),[],!1,null,null,null).exports,$={components:{},data:function(){return{details:{isEmpty:!0,summary:"",joinStatus:!1,courses:[],teachers:[],assistants:[],headTeacher:{},access:{code:"加载中"},cover:"",reviews:[],classId:0,vipLevel:null},planDetails:{title:"",service:[],price:"0",studentNum:0,expiryMode:"forever",expiryValue:"0",vipLevel:null},currentComp:""}},computed:Object(a.a)({},Object(v.d)({isLoading:function(e){return e.isLoading}})),watch:{"details.joinStatus":{handler:function(e){this.getComponent(e)}}},created:function(){var e=this,t=this.$route.params.id;d.a.getClassroomDetail({query:{classroomId:t}}).then((function(t){e.getComponent(t.member),e.getDetails(t)})).catch((function(e){i.a.fail(e.message)}))},methods:{getDetails:function(e){var t=0===Object.keys(e).length,s=e.about,i=!t&&e.member,a=e.courses,r=e.teachers,n=e.assistants,c=e.buyable,o=e.vipLevel,l=e.headTeacher,u=e.access,d=e.reviews,p=e.expiryMode,h=e.member,v=e.expiryValue,m=e.title,f=e.price,g=e.studentNum,_=e.service,b=e.cover.large,y=e.id,C={title:m,service:_,price:f,studentNum:g,expiryMode:p,expiryValue:v,vipLevel:o};this.planDetails=C,this.details={summary:s,joinStatus:i,isEmpty:t,courses:a,classId:y,buyable:c,vipLevel:o,teachers:r,assistants:n,headTeacher:l,access:u,cover:b,reviews:d,member:h}},getComponent:function(e){this.currentComp=e?O:I}}},N=Object(c.a)($,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"course-detail"},[this.isLoading?t("e-loading"):this._e(),t(this.currentComp,{tag:"component",attrs:{details:this.details,"plan-details":this.planDetails}})],1)}),[],!1,null,null,null);t.default=N.exports}}]);