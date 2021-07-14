(window.webpackJsonp=window.webpackJsonp||[]).push([[398],{108:function(t,e,r){t.exports=r(335)},1286:function(t,e,r){"use strict";r.r(e);var n=r(129),a=r.n(n),o=r(108),i=r.n(o),s=r(79),c=r.n(s),u=r(72),l=r.n(u),f=r(80),d=r.n(f),v=r(46),p=r.n(v),m=r(23),_=r.n(m),h=r(34),b=r.n(h),g=r(39),k=r.n(g),w=r(61),y=r.n(w),x=r(1298),S=r(493),T=r(1306);function P(t,e){var r=p()(t);if(d.a){var n=d()(t);e&&(n=n.filter((function(e){return l()(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(Object(r),!0).forEach((function(e){k()(t,e,r[e])})):c.a?i()(t,c()(r)):P(Object(r)).forEach((function(e){a()(t,e,l()(r,e))}))}return t}var C=[{title:"用户名",dataIndex:"nickname",width:"25%",scopedSlots:{customRender:"nickname"}},{title:"是否推荐",width:"25%",scopedSlots:{customRender:"promoteInfo"}},{title:"最近登录",width:"25%",scopedSlots:{customRender:"loginInfo"}},{title:"操作",width:"25%",scopedSlots:{customRender:"action"}}],j={name:"Teachers",components:{userInfoTable:T.a,AsideLayout:x.a},data:function(){return{visible:!1,user:{},columns:C,pageData:[],loading:!1,pagination:{},keyWord:"",setNumId:0,modalVisible:!1,form:this.$form.createForm(this,{name:"set_number"})}},created:function(){this.fetchTeacher()},methods:{handleTableChange:function(t){var e=O({},this.pagination);e.current=t.current,this.pagination=e;var r={limit:t.pageSize,offset:(t.current-1)*t.pageSize};this.fetchTeacher(r)},fetchTeacher:function(t){var e=this;return b()(_.a.mark((function r(){var n,a,o,i;return _.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.loading=!0,r.next=3,S.p.search(O({limit:20,nickname:e.keyWord},t));case 3:n=r.sent,a=n.data,o=n.paging,(i=O({},e.pagination)).total=o.total,i.pageSize=Number(o.limit),y.a.forEach(a,(function(t){t.isPromoted=1==t.promoted})),e.loading=!1,e.pageData=a,e.pagination=!(o.total<Number(o.limit))&&i;case 13:case"end":return r.stop()}}),r)})))()},onSearch:function(t){var e=this;return b()(_.a.mark((function r(){return _.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.keyWord=t,e.pagination.current=1,e.fetchTeacher();case 3:case"end":return r.stop()}}),r)})))()},edit:function(t){var e=this;return b()(_.a.mark((function r(){return _.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,S.r.get(t);case 2:e.user=r.sent,e.visible=!0;case 4:case"end":return r.stop()}}),r)})))()},close:function(){this.visible=!1},clickSetNumberModal:function(t){this.setNumId=t,this.modalVisible=!0},handleOk:function(t){var e=this;this.form.validateFields(function(){var t=b()(_.a.mark((function t(r,n){var a;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=6;break}return t.next=3,S.p.promotion(e.setNumId,n);case 3:a=t.sent,a.success&&(y.a.forEach(e.pageData,(function(t){if(t.id==e.setNumId)return t.promotedSeq=n.number,!1})),e.handleCancel());case 6:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}())},handleCancel:function(){this.modalVisible=!1,this.form.resetFields()},changePromoted:function(t,e){var r=this;return b()(_.a.mark((function n(){var a;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a={},!t){n.next=7;break}return n.next=4,S.p.promotion(e);case 4:return a=n.sent,r.changePromotedCallBack(a,e,t),n.abrupt("return");case 7:r.$confirm({content:"真的要取消该教师推荐吗？",okText:"确认",cancelText:"取消",onOk:function(){var n=b()(_.a.mark((function n(){return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,S.p.cancelPromotion(e);case 2:a=n.sent,r.changePromotedCallBack(a,e,t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()});case 8:case"end":return n.stop()}}),n)})))()},changePromotedCallBack:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;t.success&&y.a.forEach(this.pageData,(function(t){if(t.id==e)return t.isPromoted=r,!1}))},validateRange:function(t,e,r){!1===y.a.inRange(e,0,10001)&&r("请输入0-10000的整数"),r()}}},I=(r(1362),r(31)),D=Object(I.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside-layout",{staticClass:"teacher-manage-container",attrs:{breadcrumbs:[{name:"教师管理"}]}},[r("div",{staticClass:"clearfix cd-mb24"},[r("a-input-search",{staticStyle:{width:"224px"},attrs:{placeholder:"请输入用户名搜索",allowClear:!0},on:{search:t.onSearch}})],1),t._v(" "),r("a-table",{attrs:{columns:t.columns,"data-source":t.pageData,"row-key":function(t){return t.id},pagination:t.pagination,"row-class-name":function(t){return"teacher-manage-row"},loading:t.loading},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"nickname",fn:function(e,n){return r("a",{on:{click:function(e){return t.edit(n.id)}}},[t._v(t._s(e))])}},{key:"promoteInfo",fn:function(e){return r("div",{},[r("a-checkbox",{attrs:{checked:e.isPromoted},on:{change:function(r){return t.changePromoted(r.target.checked,e.id)}}}),t._v(" "),e.isPromoted?r("span",{staticClass:"color-gray text-sm"},[t._v(t._s(e.promotedSeq))]):t._e(),t._v(" "),e.isPromoted?r("a",{staticClass:"set-number",attrs:{href:"javascript:;"},on:{click:function(r){return t.clickSetNumberModal(e.id)}}},[t._v("序号设置")]):t._e()],1)}},{key:"loginInfo",fn:function(e){return r("div",{},[r("div",[t._v(t._s(t.$dateFormat(e.loginTime,"YYYY-MM-DD HH:mm")))]),t._v(" "),r("div",{staticClass:"color-gray text-sm"},[t._v(t._s(e.loginIp))])])}},{key:"action",fn:function(e){return r("a",{on:{click:function(r){return t.edit(e.id)}}},[t._v("查看")])}}])}),t._v(" "),r("a-modal",{attrs:{title:"教师详细信息",visible:t.visible},on:{cancel:t.close}},[r("userInfoTable",{attrs:{user:t.user}}),t._v(" "),r("template",{slot:"footer"},[r("a-button",{key:"back",on:{click:t.close}},[t._v(" 关闭 ")])],1)],2),t._v(" "),r("a-modal",{attrs:{title:"设置推荐教师",okText:"确认",cancelText:"取消",visible:t.modalVisible},on:{ok:t.handleOk,cancel:t.handleCancel}},[r("a-form",{attrs:{form:t.form,"label-col":{span:3},"wrapper-col":{span:21}}},[r("a-form-item",{attrs:{label:"序号",extra:"请输入0-10000的整数"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["number",{rules:[{required:!0,message:"请输入序号"},{type:"integer",message:"请输入整数"},{validator:t.validateRange,message:"请输入0-10000的整数"}]}],expression:"['number', { rules: [\n            { required: true, message: '请输入序号' },\n            { type: 'integer', message: '请输入整数' },\n            { validator: validateRange, message: '请输入0-10000的整数' },\n          ]}]"}],staticStyle:{width:"100%"}})],1)],1)],1)],1)}),[],!1,null,"48ef295f",null);e.default=D.exports},1296:function(t,e,r){},1298:function(t,e,r){"use strict";var n={name:"AsideLayout",props:{breadcrumbs:{type:Array,required:!0},headerTitle:{type:String,default:""},headerTip:{type:String,default:""}}},a=(r(1299),r(31)),o=Object(a.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"aside-layout"},[r("div",{staticClass:"aside-layout-header"},[r("a-breadcrumb",{staticClass:"pull-left aside-layout-header__breadcrumb",attrs:{separator:"/"}},t._l(t.breadcrumbs,(function(e,n){return r("a-breadcrumb-item",{key:n},[e.href?[r("a",{attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.name))])]:e.pathName?[r("a",{attrs:{href:"javascript:;"},on:{click:function(r){return t.$router.push({name:e.pathName})}}},[t._v(t._s(e.name))])]:[t._v("\n          "+t._s(e.name)+"\n        ")]],2)})),1),t._v(" "),t.headerTip?r("a-popover",{attrs:{placement:"bottomLeft"}},[r("template",{slot:"content"},[r("div",{staticClass:"aside-header-tip",domProps:{innerHTML:t._s(t.headerTip)}})]),t._v(" "),r("span",{staticClass:"aside-header-title-icon"},[r("a-icon",{attrs:{theme:"filled",type:"question-circle"}}),r("span",{staticClass:"icon-circle"},[t._v(t._s(t.headerTitle))])],1)],2):t._e()],1),t._v(" "),r("div",{staticClass:"aside-layout-main"},[t._t("default")],2)])}),[],!1,null,null,null);e.a=o.exports},1299:function(t,e,r){"use strict";var n=r(1296);r.n(n).a},1306:function(t,e,r){"use strict";var n={props:{user:{type:Object,default:{}}},computed:{getUserRoles:function(){return _.join(this.user.user.roles," ")}},methods:{toPersonalHomepage:function(t){window.open("/user/"+t+"/about","_blank")},formatTimeIp:function(t,e){var r="";return r+=0!=t?this.$dateFormat(t,"YYYY-MM-DD HH:mm"):" -- ",""!=e&&(r+=" / "+e+" 本机IP"),r},formatStr:function(t){return void 0===t||""==t||null==t?"暂无":t},formatGender:function(){return{male:"男性",female:"女性",secret:"秘密"}[this.user.profile.gender]}}},a=r(31),o=Object(a.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"table table-striped table-condenseda table-bordered"},[r("tbody",[r("tr",[r("th",{attrs:{width:"30%"}},[t._v("用户名")]),t._v(" "),r("td",{attrs:{width:"70%"}},[r("a",{staticClass:"pull-right",attrs:{href:"javascript:;"},on:{click:function(e){return t.toPersonalHomepage(t.user.user.id)}}},[t._v("个人主页")]),t._v("\n        "+t._s(t.user.user.nickname)+"\n      ")])]),t._v(" "),r("tr",[r("th",[t._v("Email")]),t._v(" "),r("td",[t._v(t._s(t.user.profile.email||"- -"))])]),t._v(" "),r("tr",[r("th",[t._v("用户组")]),t._v(" "),r("td",[t._v(t._s(t.getUserRoles))])]),t._v(" "),r("tr",[r("th",[t._v("注册时间/IP")]),t._v(" "),r("td",[t._v(t._s(t.formatTimeIp(t.user.user.createdTime,t.user.user.createdIp)))])]),t._v(" "),r("tr",[r("th",[t._v("最近登录时间/IP")]),t._v(" "),r("td",[t._v(t._s(t.formatTimeIp(t.user.user.loginTime,t.user.user.loginIp)))])]),t._v(" "),r("tr",[r("th",[t._v("姓名")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.truename)))])]),t._v(" "),r("tr",[r("th",[t._v("性别")]),t._v(" "),r("td",[t._v(t._s(t.formatGender()))])]),t._v(" "),r("tr",[r("th",[t._v("身份证号")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.idcard)))])]),t._v(" "),r("tr",[r("th",[t._v("手机号码")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.mobile)))])]),t._v(" "),r("tr",[r("th",[t._v("公司")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.company)))])]),t._v(" "),r("tr",[r("th",[t._v("职业")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.job)))])]),t._v(" "),r("tr",[r("th",[t._v("头衔")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.user.title)))])]),t._v(" "),r("tr",[r("th",[t._v("个人签名")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.signature)))])]),t._v(" "),r("tr",[r("th",[t._v("自我介绍")]),t._v(" "),r("td",{domProps:{innerHTML:t._s(t.user.profile.about||"暂无")}})]),t._v(" "),r("tr",[r("th",[t._v("个人网站")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.site)))])]),t._v(" "),r("tr",[r("th",[t._v("微博")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.weibo)))])]),t._v(" "),r("tr",[r("th",[t._v("微信")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.weixin)))])]),t._v(" "),r("tr",[r("th",[t._v("QQ")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.qq)))])])])])}),[],!1,null,null,null);e.a=o.exports},1330:function(t,e,r){},1362:function(t,e,r){"use strict";var n=r(1330);r.n(n).a},210:function(t,e,r){r(211);var n=r(49).Object;t.exports=function(t,e){return n.getOwnPropertyDescriptor(t,e)}},211:function(t,e,r){var n=r(134),a=r(180).f;r(334)("getOwnPropertyDescriptor",(function(){return function(t,e){return a(n(t),e)}}))},334:function(t,e,r){var n=r(74),a=r(49),o=r(309);t.exports=function(t,e){var r=(a.Object||{})[t]||Object[t],i={};i[t]=e(r),n(n.S+n.F*o((function(){r(1)})),"Object",i)}},335:function(t,e,r){r(336);var n=r(49).Object;t.exports=function(t,e){return n.defineProperties(t,e)}},336:function(t,e,r){var n=r(74);n(n.S+n.F*!r(140),"Object",{defineProperties:r(377)})},337:function(t,e,r){r(338),t.exports=r(49).Object.getOwnPropertyDescriptors},338:function(t,e,r){var n=r(74),a=r(339),o=r(134),i=r(180),s=r(379);n(n.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,r,n=o(t),c=i.f,u=a(n),l={},f=0;u.length>f;)void 0!==(r=c(n,e=u[f++]))&&s(l,e,r);return l}})},339:function(t,e,r){var n=r(356),a=r(341),o=r(133),i=r(102).Reflect;t.exports=i&&i.ownKeys||function(t){var e=n.f(o(t)),r=a.f;return r?e.concat(r(t)):e}},340:function(t,e,r){r(378),t.exports=r(49).Object.getOwnPropertySymbols},39:function(t,e,r){var n=r(129);t.exports=function(t,e,r){return e in t?n(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},46:function(t,e,r){t.exports=r(580)},580:function(t,e,r){r(581),t.exports=r(49).Object.keys},581:function(t,e,r){var n=r(354),a=r(355);r(334)("keys",(function(){return function(t){return a(n(t))}}))},72:function(t,e,r){t.exports=r(210)},79:function(t,e,r){t.exports=r(337)},80:function(t,e,r){t.exports=r(340)}}]);