(window.webpackJsonp=window.webpackJsonp||[]).push([["auth_social"],{"386d":function(e,t,r){"use strict";var o=r("cb7c"),n=r("83a1"),i=r("5f1b");r("214f")("search",1,(function(e,t,r,c){return[function(r){var o=e(this),n=void 0==r?void 0:r[t];return void 0!==n?n.call(r,o):new RegExp(r)[t](String(o))},function(e){var t=c(r,e,this);if(t.done)return t.value;var a=o(e),s=String(this),u=a.lastIndex;n(u,0)||(a.lastIndex=0);var l=i(a,s);return n(a.lastIndex,u)||(a.lastIndex=u),null===l?-1:l.index}]}))},7067:function(e,t,r){"use strict";r("e17f");var o=r("2241"),n=(r("e7e5"),r("d399")),i=r("a026"),c=r("3ce7"),a=/micromessenger/.test(navigator.userAgent.toLowerCase());t.a=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||r&&!t)n.a.fail("缺少分享参数");else{var s={domainUri:location.origin,itemUri:"",source:"h5"};c.a.marketingActivities({query:{activityId:e},data:s}).then((function(e){var c=-1!==e.url.indexOf("?")?"&":"?",s=r?"".concat(t).concat(c,"ticket=").concat(e.ticket):e.url;a?window.location.href=s:o.a.confirm({message:"去微信完成活动",confirmButtonText:"复制链接",title:""}).then((function(){try{i.default.prototype.$copyText(s).then((function(){n.a.success("复制成功")}),(function(){n.a.fail("请更换浏览器复制")}))}catch(e){n.a.fail("请更换浏览器复制")}})).catch((function(){}))})).catch((function(e){n.a.fail(e.message)}))}}},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},8820:function(e,t,r){"use strict";r.r(t),r("4917");var o=r("3ce7"),n={data:function(){return{code:"",popupShow:!1,closeOnClickOverlay:!1,btnDisable:!0,isErrorCode:!1,errorText:"",courseId:"",courseTitle:""}},watch:{code:function(e,t){var r=e.length-t.length;if(Math.abs(r)>8){var o=this.spliceCode(e);this.code=o||e,this.isErrorCode=!1,this.btnDisable=!1,this.errorText=""}}},methods:{spliceCode:function(e){var t=/[a-z0-9A-Z]{8}/;return!!e.match(t)&&e.match(t)[0]},checkCodeChange:function(e){if(e.length>7)return/^[a-z0-9A-Z]{8}$/.test(e)?(this.isErrorCode=!1,this.btnDisable=!1,void(this.errorText="")):(this.isErrorCode=!0,void(this.errorText="8位数字、英文字母组成"));this.isErrorCode=!1,this.btnDisable=!0,this.errorText=""},codeCovert:function(e){var t=this;o.a.couponCheck({query:{code:e}}).then((function(r){if(!1===r.success||r.error)return t.isErrorCode=!0,void(t.errorText=r.error.message);o.a.exchangeCoupon({query:{code:e}}).then((function(e){t.courseId=e.products[0].course.id,t.courseTitle=e.products[0].course.displayedTitle,t.popupShow=!0})).catch((function(e){t.isErrorCode=!0,t.errorText=e.message}))}))},toStudy:function(){var e=this.courseId;if(e){var t=encodeURIComponent("/my/orders");this.$router.push({path:"/course/".concat(e,"?backUrl=").concat(t)})}}}},i=r("a6c2"),c=Object(i.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"coupon-covert-container"},[r("h2",{staticClass:"title"},[e._v(e._s(e.$t("title.coupon")))]),r("van-field",{class:[{"error-code":e.isErrorCode},"e-input","coupon-input"],attrs:{placeholder:e.$t("placeholder.voucherCode"),clearable:""},on:{input:function(t){return e.checkCodeChange(e.code)}},model:{value:e.code,callback:function(t){e.code="string"==typeof t?t.trim():t},expression:"code"}}),e.isErrorCode?r("span",{staticClass:"error-code text-14"},[e._v(e._s(e.errorText))]):e._e(),r("van-button",{staticClass:"covert-submit",attrs:{disabled:e.btnDisable||e.isErrorCode,type:"info"},on:{click:function(t){return e.codeCovert(e.code)}}},[e._v(e._s(e.$t("btn.confirm")))]),r("van-popup",{staticClass:"coupon-covert-popup",attrs:{"close-on-click-overlay":e.closeOnClickOverlay},model:{value:e.popupShow,callback:function(t){e.popupShow=t},expression:"popupShow"}},[r("div",{staticClass:"modal-content"},[e._v("\n      兑换成功\n      "),r("div",[e._v("恭喜您获得"+e._s(e.courseTitle)+"课程")])]),r("div",{staticClass:"color-primary mt10 text-15",on:{click:e.toStudy}},[e._v("去学习")])])],1)}),[],!1,null,null,null);t.default=c.exports},a262:function(e,t,r){"use strict";var o=r("7067");t.a={methods:{activityHandle:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(o.a)(e,t,r)}}}},d863:function(e,t,r){"use strict";r("8e6e"),r("ac6a"),r("456d"),r("a481");var o=r("bd86"),n=r("7067"),i=r("3ce7"),c=r("faa5"),a=r("2f62");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a={data:function(){return{redirect:""}},computed:u({},Object(a.e)({user:function(e){return e.user}})),created:function(){this.redirect=decodeURIComponent(this.$route.fullPath)},methods:u(u({},Object(a.d)([c.w])),{},{afterLogin:function(){var e=this;this.checkMobileBind().then((function(t){var r=t.is_bind_mobile,o=t.mobile_bind_mode;e[c.w]({is_bind_mobile:r,mobile_bind_mode:o}),r||"closed"===o?setTimeout(e.jumpAction,1e3):e.$router.replace({name:"binding",query:{redirect:e.$route.query.redirect}})})).catch((function(){setTimeout(e.jumpAction,1e3)}))},jumpAction:function(){var e=this.$route.query.redirect?decodeURIComponent(this.$route.query.redirect):"/",t=this.$route.query.skipUrl?decodeURIComponent(this.$route.query.skipUrl):"",r=this.$route.query.callbackType,o=this.$route.query.activityId,i=decodeURIComponent(this.$route.query.callback);if(r)switch(r){case"marketing":Object(n.a)(o,i)}else t?this.$router.replace({path:e,query:{backUrl:t}}):this.$router.replace({path:e})},checkMobileBind:function(){return i.a.mobileBindCheck({query:{userId:this.user.id}})}})}},e289:function(e,t,r){"use strict";r.r(t),r("8e6e"),r("ac6a"),r("456d");var o=r("bd86"),n=(r("386d"),r("4917"),r("e7e5"),r("d399")),i=(r("a481"),r("96cf"),r("3b8d")),c=r("a262"),a=r("d863"),s=r("faa5"),u=r("3ce7"),l=r("2f62");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={name:"SocialWx",mixins:[c.a,a.a],created:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$store.state.token){t.next=9;break}if(1!=localStorage.getItem("first_direct")){t.next=5;break}return e.$router.replace({path:e.$route.query.redirect||"/"}),t.abrupt("return");case 5:return n.a.loading({message:"请稍后"}),e.afterLogin(),localStorage.setItem("first_direct",1),t.abrupt("return");case 9:if(r=localStorage.getItem("socialBinded_wx")?JSON.parse(localStorage.getItem("socialBinded_wx")):e.socialBinded.wx,e.setSocialStatus({key:"wx",status:r}),o=location.search.match(/\?code.*&/g)){t.next=16;break}return localStorage.setItem("first_direct",0),e.wxLogin(),t.abrupt("return");case 16:return n.a.loading({message:"正在登录"}),o=o[0].slice(6,-1),t.next=20,u.a.login({params:{code:o,type:"weixinmob"}}).then((function(t){e.userLogin(t),n.a.clear(),n.a.success({duration:2e3,message:"登录成功"});var r=e.socialBinded.wx?-2:-7;e.$route.query.callbackType&&(r+=1),localStorage.setItem("socialBinded_wx",!0),e.$router.go(r)})).catch((function(t){if(4030115===t.code)return n.a.fail({duration:2e3,message:t.message}),void e.redirectLogin();localStorage.setItem("socialBinded_wx",!1),window.location.href="/login/bind/weixinmob?os=h5&_target_path="+encodeURIComponent(location.pathname+location.hash)}));case 20:case"end":return t.stop()}}),t)})))()},computed:p({},Object(l.e)(["socialBinded"])),methods:p(p({},Object(l.d)({setSocialStatus:s.z,userLogin:s.H})),{},{wxLogin:function(){n.a.loading({message:"请稍后"});var e=encodeURIComponent(location.origin+location.pathname+location.hash);window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+this.$route.query.weixinmob_key+"&redirect_uri="+e+"&response_type=code&scope=snsapi_base&state=123&connect_redirect=1#wechat_redirect"},redirectLogin:function(){var e=this;setTimeout((function(){e.$router.replace({name:"login",query:{forbidWxLogin:!0}})}),2e3)}})},h=r("a6c2"),b=Object(h.a)(f,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null);t.default=b.exports}}]);