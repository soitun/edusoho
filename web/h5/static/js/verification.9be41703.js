(window.webpackJsonp=window.webpackJsonp||[]).push([["verification"],{7067:function(e,t,i){"use strict";i("e17f");var a=i("2241"),o=(i("e7e5"),i("d399")),s=i("a026"),n=i("3ce7"),r=/micromessenger/.test(navigator.userAgent.toLowerCase());t.a=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||i&&!t)o.a.fail("缺少分享参数");else{var c={domainUri:location.origin,itemUri:"",source:"h5"};n.a.marketingActivities({query:{activityId:e},data:c}).then((function(e){var n=-1!==e.url.indexOf("?")?"&":"?",c=i?"".concat(t).concat(n,"ticket=").concat(e.ticket):e.url;r?window.location.href=c:a.a.confirm({message:"去微信完成活动",confirmButtonText:"复制链接",title:""}).then((function(){try{s.default.prototype.$copyText(c).then((function(){o.a.success("复制成功")}),(function(){o.a.fail("请更换浏览器复制")}))}catch(e){o.a.fail("请更换浏览器复制")}})).catch((function(){}))})).catch((function(e){o.a.fail(e.message)}))}}},9477:function(e,t,i){"use strict";i.r(t),i("7f7f"),i("4917"),i("e7e5");var a=i("d399"),o=i("a262"),s=i("d863"),n=i("bc3a"),r=i.n(n),c=i("3ce7"),u=i("faa5"),d={mixins:[o.a,s.a],data:function(){return{regular:!1,tipShow:!0,failTextShow:!1,imgAddress:"",btnText:"立即开启摄像头",uploadParams:{},requestStartT:"",requestEndT:"",verifiedText:"认证",errorShow:!1,scanCode:this.$route.query.loginToken||""}},mounted:function(){var e=this;1==this.$route.query.faceRegistered&&(this.verifiedText="设置");var t={type:this.$route.query.type,loginField:this.$route.query.loginField,loginToken:this.scanCode};c.a.getSessions({data:t}).then((function(t){e.regular=!0;var i=t.upload.form;e.uploadParams={sessionId:t.id,uploadUrl:i.action,uploadKey:i.params.key,uploadToken:i.params.token}})).catch((function(t){e.errorShow=!0,setTimeout(e.feedbackAction,3e3)}))},methods:{polling:function(){var e=this,t=this;c.a.faceSession({query:{sessionId:this.uploadParams.sessionId},params:{loginToken:this.scanCode}}).then((function(i){if("processing"===i.status){if(e.requestStartT?e.requestEndT=new Date:e.requestStartT=new Date,(e.requestEndT?e.requestEndT-e.requestStartT:0)>58e3)return void t.recognitionFail();setTimeout((function(){t.polling()}),2e3)}else if("successed"===i.status){if(a.a.success({duration:2e3,message:"人脸识别成功"}),e.scanCode)return void setTimeout(e.feedbackAction,3e3);if(i.login){var o={avatar:{large:i.login.largeAvatar,medium:i.login.mediumAvatar,small:i.login.smallAvatar}},s=Object.assign(i.login.user,o);e.$store.commit(u.E,{token:i.login.token,user:s})}e.afterLogin()}else if(1===i.lastFailed){if(a.a.fail({duration:2e3,message:"人脸识别".concat(e.verifiedText,"失败，多次不通过")}),e.scanCode)return void setTimeout(e.feedbackAction,3e3);e.failTextShow=!0,e.tipShow=!1,setTimeout((function(){e.$router.push({name:"login",query:{redirect:e.$route.query.redirect||""}})}),3e3)}else e.recognitionFail()})).catch((function(t){5==t.code&&(e.errorShow=!0,setTimeout(e.feedbackAction,3e3))}))},isWeixin:function(){return"micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i)},feedbackAction:function(){this.isWeixin()?WeixinJSBridge.call("closeWindow"):this.$router.back(-1)},recognitionFail:function(){a.a.fail({duration:2e3,message:"人脸识别".concat(this.verifiedText,"失败")}),this.scanCode?setTimeout(this.feedbackAction,3e3):(this.tipShow=!0,this.btnText="重新".concat(this.verifiedText))},openCamera:function(e){var t=this,i=e.target.files[0],a=new FileReader;a.readAsDataURL(i),a.onloadend=function(e){t.imgAddress=e.target.result,t.tipShow=!1};var o=this.uploadParams.uploadUrl,s=new FormData;s.append("file",i,i.name),s.append("token",this.uploadParams.uploadToken),s.append("key",this.uploadParams.uploadKey),r.a.post(o,s,{headers:{"Content-Type":"multipart/form-data"},interceptor:"end"}).then((function(e){var i={query:{sessionId:t.uploadParams.sessionId},params:{loginToken:t.scanCode},data:{response_body:JSON.stringify(e.data),response_code:e.status}};c.a.finishUploadResult(i).then((function(e){e.success&&(t.tipShow=!1,t.polling())})).catch((function(e){5==e.code&&(t.errorShow=!0,setTimeout(t.feedbackAction,3e3))}))})).catch((function(e){}))}}},l=i("a6c2"),f=Object(l.a)(d,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"login-face-verification"},[e.errorShow?e._e():i("div",{directives:[{name:"show",rawName:"v-show",value:e.regular,expression:"regular"}]},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.tipShow,expression:"tipShow"}],staticClass:"verification-tips"},[i("div",[e._v("即将进行人脸识别"+e._s(e.verifiedText))]),i("div",{staticClass:"mt5"},[e._v("请将面部正对摄像头")])]),e.failTextShow?e._e():i("div",{directives:[{name:"show",rawName:"v-show",value:!e.tipShow,expression:"!tipShow"}]},[i("img",{staticClass:"img-content",attrs:{src:e.imgAddress,alt:"人脸照片"}}),i("div",[e._v(e._s(e.verifiedText)+"中，请稍候...")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.failTextShow,expression:"failTextShow"}]},[e._v("\n      人脸识别多次"+e._s(e.verifiedText)+"不通过\n      "),i("div",{staticClass:"mt5"},[e._v("请改用其它方式"+e._s(e.verifiedText)+"或联系管理员")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.tipShow,expression:"tipShow"}]},[i("label",{staticClass:"btn-open-camera",attrs:{for:"cameraItem"}},[e._v(e._s(e.btnText))]),i("input",{staticClass:"hide",attrs:{id:"cameraItem",type:"file",accept:"image/*",capture:"user"},on:{change:e.openCamera}})])]),e.errorShow?i("div",[e._v("\n    此链接已失效\n    "),i("div",{staticClass:"mt5"},[e._v("请确认后再操作")])]):e._e()])}),[],!1,null,null,null);t.default=f.exports},a262:function(e,t,i){"use strict";var a=i("7067");t.a={methods:{activityHandle:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(a.a)(e,t,i)}}}},d863:function(e,t,i){"use strict";i("a481");var a=i("7067");t.a={data:function(){return{redirect:""}},created:function(){this.redirect=decodeURIComponent(this.$route.fullPath)},methods:{afterLogin:function(){var e=this,t=this.$route.query.redirect?decodeURIComponent(this.$route.query.redirect):"/",i=this.$route.query.skipUrl?decodeURIComponent(this.$route.query.skipUrl):"",o=this.$route.query.callbackType,s=this.$route.query.activityId,n=decodeURIComponent(this.$route.query.callback);setTimeout((function(){if(o)switch(o){case"marketing":Object(a.a)(s,n)}else i?e.$router.replace({path:t,query:{backUrl:i}}):e.$router.replace({path:t})}),2e3)}}}}}]);