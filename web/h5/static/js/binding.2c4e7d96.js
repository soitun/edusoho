(window.webpackJsonp=window.webpackJsonp||[]).push([["binding"],{"3e19":function(e,t,r){"use strict";r.r(t),r("8e6e"),r("ac6a"),r("456d"),r("e7e5");var n=r("d399"),a=r("bd86"),o=(r("7f7f"),r("a262")),i=r("d863"),s=r("f13d"),c=r("2f62"),d=(r("8e6c"),r("7185"));function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={binding:"绑定手机",register:"注册账号"},h={binding:"绑定",register:"注册"},g={binding:"请输入密码",register:"请设置密码（5-20位字符）"},m={components:{EDrag:s.a},mixins:[o.a,i.a],data:function(){return{registerInfo:{mobile:"",dragCaptchaToken:void 0,encrypt_password:"",smsCode:"",smsToken:"",type:"register"},dragEnable:!1,dragKey:0,errorMessage:{mobile:"",encrypt_password:""},validated:{mobile:!1,encrypt_password:!1},count:{showCount:!1,num:120,codeBtnDisable:!1},pathName:this.$route.name,registerType:l,btnType:h,placeHolder:g}},computed:f(f({},Object(c.d)({isLoading:function(e){return e.isLoading}})),{},{btnDisable:function(){return!(this.registerInfo.mobile&&this.registerInfo.encrypt_password&&this.registerInfo.smsCode)}}),methods:f(f({},Object(c.b)(["addUser","setMobile","sendSmsCenter","userLogin"])),{},{validateMobileOrPsw:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mobile",t=this.registerInfo[e],r=d.a[e];if(0==t.length)return this.errorMessage[e]="",!1;this.errorMessage[e]=r.validator(t)?"":r.message},validatedChecker:function(){var e=this.registerInfo.mobile,t=d.a.mobile;this.validated.mobile=t.validator(e)},handleSmsSuccess:function(e){this.registerInfo.dragCaptchaToken=e,this.handleSendSms()},handleSubmit:function(){var e=this,t=Object.assign({},this.registerInfo),r=t.encrypt_password,a=t.mobile,o=window.XXTEA.encryptToBase64(r,window.location.host);t.encrypt_password=o,"binding"!==this.pathName?this.addUser(t).then((function(t){n.a.success({duration:2e3,message:"注册成功"}),e.afterLogin()})).then((function(){e.userLogin({password:r,username:a})})).catch((function(e){n.a.fail(e.message)})):this.setMobile({query:{mobile:a},data:{password:r,smsCode:t.smsCode,smsToken:t.smsToken}}).then((function(t){n.a.success({duration:2e3,message:"绑定成功"}),e.afterLogin()})).catch((function(e){n.a.fail(e.message)}))},clickSmsBtn:function(){this.dragEnable?this.$refs.dragComponent.dragToEnd?this.$refs.dragComponent.initDragCaptcha():Object(n.a)("请先完成拼图验证"):this.handleSendSms()},handleSendSms:function(){var e=this;this.sendSmsCenter(this.registerInfo).then((function(t){e.registerInfo.smsToken=t.smsToken,e.countDown(),e.dragEnable=!1})).catch((function(t){switch(t.code){case 4030301:case 4030302:e.dragKey++,e.registerInfo.dragCaptchaToken="",e.registerInfo.smsToken="",n.a.fail(t.message);break;case 4030303:e.dragEnable?n.a.fail(t.message):e.dragEnable=!0;break;default:n.a.fail(t.message)}}))},countDown:function(){var e=this;this.count.showCount=!0,this.count.codeBtnDisable=!0,this.count.num=120;var t=setInterval((function(){if(e.count.num<=0)return e.count.codeBtnDisable=!1,e.count.showCount=!1,void clearInterval(t);e.count.num--}),1e3)}})},p=r("a6c2"),b=Object(p.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register"},[e.isLoading?r("e-loading"):e._e(),r("span",{staticClass:"register-title"},[e._v(e._s(e.registerType[e.pathName]))]),r("van-field",{attrs:{border:!1,"error-message":e.errorMessage.mobile,placeholder:"请输入手机号","max-length":"11"},on:{blur:function(t){return e.validateMobileOrPsw("mobile")},keyup:function(t){return e.validatedChecker()}},model:{value:e.registerInfo.mobile,callback:function(t){e.$set(e.registerInfo,"mobile",t)},expression:"registerInfo.mobile"}}),r("van-field",{attrs:{border:!1,"error-message":e.errorMessage.encrypt_password,placeholder:e.placeHolder[e.pathName],type:"password","max-length":"20"},on:{blur:function(t){return e.validateMobileOrPsw("encrypt_password")}},model:{value:e.registerInfo.encrypt_password,callback:function(t){e.$set(e.registerInfo,"encrypt_password",t)},expression:"registerInfo.encrypt_password"}}),e.dragEnable?r("e-drag",{key:e.dragKey,ref:"dragComponent",on:{success:e.handleSmsSuccess}}):e._e(),r("van-field",{attrs:{border:!1,type:"text",center:"",clearable:"","max-length":"6",placeholder:"请输入验证码"},model:{value:e.registerInfo.smsCode,callback:function(t){e.$set(e.registerInfo,"smsCode",t)},expression:"registerInfo.smsCode"}},[r("van-button",{attrs:{slot:"button",disabled:e.count.codeBtnDisable||!e.validated.mobile,size:"small",type:"primary"},on:{click:e.clickSmsBtn},slot:"button"},[e._v("\n      发送验证码\n      "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.count.showCount,expression:"count.showCount"}]},[e._v("("+e._s(e.count.num)+")")])])],1),r("van-button",{staticClass:"primary-btn mb20",attrs:{disabled:e.btnDisable,type:"default"},on:{click:e.handleSubmit}},[e._v(e._s(e.btnType[e.pathName]))])],1)}),[],!1,null,null,null);t.default=b.exports},7067:function(e,t,r){"use strict";r("e17f");var n=r("2241"),a=(r("e7e5"),r("d399")),o=r("a026"),i=r("3ce7"),s=/micromessenger/.test(navigator.userAgent.toLowerCase());t.a=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||r&&!t)a.a.fail("缺少分享参数");else{var c={domainUri:location.origin,itemUri:"",source:"h5"};i.a.marketingActivities({query:{activityId:e},data:c}).then((function(e){var i=-1!==e.url.indexOf("?")?"&":"?",c=r?"".concat(t).concat(i,"ticket=").concat(e.ticket):e.url;s?window.location.href=c:n.a.confirm({message:"去微信完成活动",confirmButtonText:"复制链接",title:""}).then((function(){try{o.a.prototype.$copyText(c).then((function(){a.a.success("复制成功")}),(function(){a.a.fail("请更换浏览器复制")}))}catch(e){a.a.fail("请更换浏览器复制")}})).catch((function(){}))})).catch((function(e){a.a.fail(e.message)}))}}},"8e6c":function(e,t,r){"use strict";r("6b54"),r("28a5"),function(e){var t,r;void 0===e.btoa&&(e.btoa=(t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),function(e){var r,n,a,o,i,s,c;for(n=a=0,o=e.length,s=(o-=i=o%3)/3<<2,i>0&&(s+=4),r=new Array(s);n<o;)c=e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<8|e.charCodeAt(n++),r[a++]=t[c>>18]+t[c>>12&63]+t[c>>6&63]+t[63&c];return 1==i?(c=e.charCodeAt(n++),r[a++]="".concat(t[c>>2]+t[(3&c)<<4],"==")):2==i&&(c=e.charCodeAt(n++)<<8|e.charCodeAt(n++),r[a++]="".concat(t[c>>10]+t[c>>4&63]+t[(15&c)<<2],"=")),r.join("")})),void 0===e.atob&&(e.atob=(r=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1],function(e){var t,n,a,o,i,s,c,d,u,f;if((c=e.length)%4!=0)return"";if(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(e))return"";for(u=c,(d="="==e.charAt(c-2)?1:"="==e.charAt(c-1)?2:0)>0&&(u-=4),u=3*(u>>2)+d,f=new Array(u),i=s=0;i<c&&-1!=(t=r[e.charCodeAt(i++)])&&-1!=(n=r[e.charCodeAt(i++)])&&(f[s++]=String.fromCharCode(t<<2|(48&n)>>4),-1!=(a=r[e.charCodeAt(i++)]))&&(f[s++]=String.fromCharCode((15&n)<<4|(60&a)>>2),-1!=(o=r[e.charCodeAt(i++)]));)f[s++]=String.fromCharCode((3&a)<<6|o);return f.join("")}));var n=2654435769;function a(e,t){var r=e.length,n=r<<2;if(t){var a=e[r-1];if(a<(n-=4)-3||a>n)return null;n=a}for(var o=0;o<r;o++)e[o]=String.fromCharCode(255&e[o],e[o]>>>8&255,e[o]>>>16&255,e[o]>>>24&255);var i=e.join("");return t?i.substring(0,n):i}function o(e,t){var r,n=e.length,a=n>>2;0!=(3&n)&&++a,t?(r=new Array(a+1))[a]=n:r=new Array(a);for(var o=0;o<n;++o)r[o>>2]|=e.charCodeAt(o)<<((3&o)<<3);return r}function i(e){return 4294967295&e}function s(e,t,r,n,a,o){return(r>>>5^t<<2)+(t>>>3^r<<4)^(e^t)+(o[3&n^a]^r)}function c(e){return e.length<4&&(e.length=4),e}function d(e){if(/^[\x00-\x7f]*$/.test(e))return e;for(var t=[],r=e.length,n=0,a=0;n<r;++n,++a){var o=e.charCodeAt(n);if(o<128)t[a]=e.charAt(n);else if(o<2048)t[a]=String.fromCharCode(192|o>>6,128|63&o);else{if(!(o<55296||o>57343)){if(n+1<r){var i=e.charCodeAt(n+1);if(o<56320&&i>=56320&&i<=57343){var s=65536+((1023&o)<<10|1023&i);t[a]=String.fromCharCode(240|s>>18&63,128|s>>12&63,128|s>>6&63,128|63&s),++n;continue}}throw new Error("Malformed string")}t[a]=String.fromCharCode(224|o>>12,128|o>>6&63,128|63&o)}}return t.join("")}function u(e,t){return(void 0===t||null===t||t<0)&&(t=e.length),0===t?"":/^[\x00-\x7f]*$/.test(e)||!/^[\x00-\xff]*$/.test(e)?t===e.length?e:e.substr(0,t):t<65535?function(e,t){for(var r=new Array(t),n=0,a=0,o=e.length;n<t&&a<o;n++){var i=e.charCodeAt(a++);switch(i>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:r[n]=i;break;case 12:case 13:if(!(a<o))throw new Error("Unfinished UTF-8 octet sequence");r[n]=(31&i)<<6|63&e.charCodeAt(a++);break;case 14:if(!(a+1<o))throw new Error("Unfinished UTF-8 octet sequence");r[n]=(15&i)<<12|(63&e.charCodeAt(a++))<<6|63&e.charCodeAt(a++);break;case 15:if(!(a+2<o))throw new Error("Unfinished UTF-8 octet sequence");var s=((7&i)<<18|(63&e.charCodeAt(a++))<<12|(63&e.charCodeAt(a++))<<6|63&e.charCodeAt(a++))-65536;if(!(s>=0&&s<=1048575))throw new Error("Character outside valid Unicode range: 0x".concat(s.toString(16)));r[n++]=s>>10&1023|55296,r[n]=1023&s|56320;break;default:throw new Error("Bad UTF-8 encoding 0x".concat(i.toString(16)))}}return n<t&&(r.length=n),String.fromCharCode.apply(String,r)}(e,t):function(e,t){for(var r=[],n=new Array(32768),a=0,o=0,i=e.length;a<t&&o<i;a++){var s=e.charCodeAt(o++);switch(s>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:n[a]=s;break;case 12:case 13:if(!(o<i))throw new Error("Unfinished UTF-8 octet sequence");n[a]=(31&s)<<6|63&e.charCodeAt(o++);break;case 14:if(!(o+1<i))throw new Error("Unfinished UTF-8 octet sequence");n[a]=(15&s)<<12|(63&e.charCodeAt(o++))<<6|63&e.charCodeAt(o++);break;case 15:if(!(o+2<i))throw new Error("Unfinished UTF-8 octet sequence");var c=((7&s)<<18|(63&e.charCodeAt(o++))<<12|(63&e.charCodeAt(o++))<<6|63&e.charCodeAt(o++))-65536;if(!(c>=0&&c<=1048575))throw new Error("Character outside valid Unicode range: 0x".concat(c.toString(16)));n[a++]=c>>10&1023|55296,n[a]=1023&c|56320;break;default:throw new Error("Bad UTF-8 encoding 0x".concat(s.toString(16)))}if(a>=32766){var d=a+1;n.length=d,r[r.length]=String.fromCharCode.apply(String,n),t-=d,a=-1}}return a>0&&(n.length=a,r[r.length]=String.fromCharCode.apply(String,n)),r.join("")}(e,t)}function f(e,t){return void 0===e||null===e||0===e.length?e:(e=d(e),t=d(t),a(function(e,t){var r,a,o,c,d,u,f=e.length,l=f-1;for(a=e[l],o=0,u=0|Math.floor(6+52/f);u>0;--u){for(c=(o=i(o+n))>>>2&3,d=0;d<l;++d)r=e[d+1],a=e[d]=i(e[d]+s(o,r,a,d,c,t));r=e[0],a=e[l]=i(e[l]+s(o,r,a,l,c,t))}return e}(o(e,!0),c(o(t,!1))),!1))}function l(e,t){return void 0===e||null===e||0===e.length?e:(t=d(t),u(a(function(e,t){var r,a,o,c,d,u=e.length,f=u-1;for(r=e[0],o=i(Math.floor(6+52/u)*n);0!==o;o=i(o-n)){for(c=o>>>2&3,d=f;d>0;--d)a=e[d-1],r=e[d]=i(e[d]-s(o,r,a,d,c,t));a=e[f],r=e[0]=i(e[0]-s(o,r,a,0,c,t))}return e}(o(e,!1),c(o(t,!1))),!0)))}e.XXTEA={utf8Encode:d,utf8Decode:u,encrypt:f,encryptToBase64:function(t,r){return e.btoa(f(t,r))},decrypt:l,decryptFromBase64:function(t,r){return void 0===t||null===t||0===t.length?t:l(e.atob(t),r)}}}(window)},a262:function(e,t,r){"use strict";var n=r("7067");t.a={methods:{activityHandle:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(n.a)(e,t,r)}}}},d863:function(e,t,r){"use strict";r("a481");var n=r("7067");t.a={data:function(){return{redirect:""}},created:function(){this.redirect=decodeURIComponent(this.$route.fullPath)},methods:{afterLogin:function(){var e=this,t=this.$route.query.redirect?decodeURIComponent(this.$route.query.redirect):"/",r=this.$route.query.skipUrl?decodeURIComponent(this.$route.query.skipUrl):"",a=this.$route.query.callbackType,o=this.$route.query.activityId,i=decodeURIComponent(this.$route.query.callback);setTimeout((function(){if(a)switch(a){case"marketing":Object(n.a)(o,i)}else r?e.$router.replace({path:t,query:{backUrl:r}}):e.$router.replace({path:t})}),2e3)}}}},f13d:function(e,t,r){"use strict";r("8e6e"),r("ac6a"),r("456d");var n=r("75fc"),a=(r("e7e5"),r("d399")),o=r("bd86"),i=(r("c5f6"),r("3ce7"));function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var c={props:{tips:{type:String,default:"拖动左边滑块完成上方拼图"},limitType:{type:String,default:""}},data:function(){return{imgInfo:{url:"",jigsaw:"",token:""},dragState:{left:0,width:0,currentX:0,currentLeft:0,btnWidth:0,maskWidth:0},dragToEnd:!1}},created:function(){this.initDragCaptcha()},mounted:function(){var e=this.$refs.bar,t=this.$refs.dragBtn,r=(this.$refs.drag,e.getBoundingClientRect());Object.assign(this.dragState,{left:Number(r.left.toFixed(2)),width:e.clientWidth,btnWidth:t.offsetWidth/2})},methods:{initDragCaptcha:function(){var e=this,t={};this.limitType&&(t={limitType:this.limitType}),i.a.dragCaptcha({data:t}).then((function(t){e.imgInfo=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t),Object.assign(e.dragState,{currentLeft:0,maskWidth:0}),e.dragToEnd=!1})).catch((function(e){a.a.fail(e.message)}))},handletTouchEnd:function(){var e=this;if(!this.dragToEnd&&this.dragState.currentLeft){var t=this.getToken();this.dragToEnd=!0,i.a.dragValidate({query:{token:t}}).then((function(r){a.a.success("验证成功"),e.$emit("success",t)})).catch((function(t){a.a.fail(t.message),e.initDragCaptcha()}))}},handleTouchMove:function(e){if(!this.dragToEnd){e.preventDefault();var t=this.$refs.dragBtn,r=(this.$refs.dragImgBg,this.dragState),n=e.clientX?e.clientX.toFixed(2):e.targetTouches[0].pageX.toFixed(2)-this.$refs.drag.offsetLeft,a=(n-r.left-r.btnWidth).toFixed(2);a<0&&(a=0),n>r.width+this.$refs.drag.offsetLeft&&(a=r.width-this.$refs.dragImg.width),Object.assign(this.dragState,{currentLeft:a,maskWidth:(Number(a)+t.offsetWidth/2).toFixed(2)})}},calPositionX:function(){var e=this.$refs.dragImgBg,t=(e.naturalWidth/e.width).toFixed(2);return(Number(this.dragState.currentLeft).toFixed(2)*t).toFixed(2)},getToken:function(){var e={token:this.imgInfo.token,captcha:this.calPositionX()};return Object(n.a)(btoa(JSON.stringify(e))).reverse().join("")}}},d=r("a6c2"),u=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"drag",staticClass:"e-drag"},[r("div",{staticClass:"e-drag-section"},[r("div",{staticClass:"e-drag-img"},[r("img",{ref:"dragImgBg",attrs:{src:e.imgInfo.url,alt:""}}),r("img",{ref:"dragImg",staticClass:"e-drag-img__dragable",style:{left:e.dragState.currentLeft+"px"},attrs:{src:e.imgInfo.jigsaw,alt:""}})]),r("div",{ref:"bar",staticClass:"e-drag-bar"},[r("span",[e._v(e._s(e.tips))]),r("div",{staticClass:"e-drag-bar__mask",style:{width:e.dragState.maskWidth+"px"}}),r("div",{ref:"dragBtn",staticClass:"e-drag-btn",style:{left:e.dragState.currentLeft+"px"},on:{touchend:e.handletTouchEnd,touchmove:e.handleTouchMove}},[r("img",{attrs:{src:"static/images/drag.png",alt:""}})])])])])}),[],!1,null,null,null);t.a=u.exports}}]);