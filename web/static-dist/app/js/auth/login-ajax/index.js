!function(e){function r(r){for(var t,i,s=r[0],c=r[1],l=r[2],u=0,h=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);for(d&&d(r);h.length;)h.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,r=0;r<a.length;r++){for(var n=a[r],t=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(t=!1)}t&&(a.splice(r--,1),e=i(i.s=n[0]))}return e}var t={},o={130:0},a=[];function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,r,n){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,r){if(1&r&&(e=i(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)i.d(n,t,function(r){return e[r]}.bind(null,t));return n},i.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="/static-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=r,s=s.slice();for(var l=0;l<s.length;l++)r(s[l]);var d=c;a.push([1129,0]),n()}({1129:function(e,r,n){"use strict";n.r(r);var t=n(518),o=n(103),a=n(10);n(429);var i=$("#login-ajax-form"),s=$("#drag-btn").length?new o.a($("#drag-btn"),$(".js-jigsaw"),{limitType:"user_login"}):null,c=$(".js-submit-login-ajax"),l=i.validate({rules:{_username:{required:!0},_password:{required:!0},dragCaptchaToken:{required:!0}},messages:{_username:{required:Translator.trans("auth.login.username_required_error_hint")},_password:{required:Translator.trans("auth.login.password_required_error_hint")},dragCaptchaToken:{required:Translator.trans("auth.register.drag_captcha_tips")}}});c.click((function(e){var r=i.find("#ajax-username").val(),n=i.find("#ajax-password").val(),t=window.XXTEA.encryptToBase64(r,"EduSoho"),o=window.XXTEA.encryptToBase64(n,"EduSoho"),d=i.serializeArray(),u={_username:t,_password:o};if(d.forEach((function(e){u.hasOwnProperty(e.name)&&(e.value=u[e.name])})),l.form()){var h=$('input[name="agree_policy"]').prop("checked"),f=$('input[name="user_terms_enable"]').val(),g=$('input[name="agree_policy_enable"]').val();if(!h&&null!=h)return"opened"===f&&"opened"===g&&Object(a.a)("warning",Translator.trans("user.login.read.agree.policy.and.user.terms")),"opened"===f&&"opened"!=g&&Object(a.a)("warning",Translator.trans("user.login.read.user.terms")),void("opened"===g&&"opened"!=f&&Object(a.a)("warning",Translator.trans("user.login.read.agree.policy")));$.post(i.attr("action"),$.param(d),(function(e){c.button("loading"),window.location.reload()}),"json").error((function(e,r,n){var t=jQuery.parseJSON(e.responseText);i.find(".alert-danger").html(Translator.trans(t.message)).show(),s.initDragCaptcha()}))}})),$(".js-sts-login-link").length&&new t.a({element:$(".js-login-modal"),target:".js-login-form, .modal-footer"});var d=$("#login-modal");$("#sms-login").click((function(e){$.get($(e.currentTarget).data("url"),(function(e){d.html(e)}))}))},26:function(e,r){e.exports=jQuery},429:function(e,r){!function(e){"use strict";var r,n;void 0===e.btoa&&(e.btoa=(r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),function(e){var n,t,o,a,i,s,c;for(t=o=0,a=e.length,s=(a-=i=a%3)/3<<2,i>0&&(s+=4),n=new Array(s);t<a;)c=e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<8|e.charCodeAt(t++),n[o++]=r[c>>18]+r[c>>12&63]+r[c>>6&63]+r[63&c];return 1==i?(c=e.charCodeAt(t++),n[o++]=r[c>>2]+r[(3&c)<<4]+"=="):2==i&&(c=e.charCodeAt(t++)<<8|e.charCodeAt(t++),n[o++]=r[c>>10]+r[c>>4&63]+r[(15&c)<<2]+"="),n.join("")})),void 0===e.atob&&(e.atob=(n=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1],function(e){var r,t,o,a,i,s,c,l,d,u;if((c=e.length)%4!=0)return"";if(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(e))return"";for(d=c,(l="="==e.charAt(c-2)?1:"="==e.charAt(c-1)?2:0)>0&&(d-=4),d=3*(d>>2)+l,u=new Array(d),i=s=0;i<c&&-1!=(r=n[e.charCodeAt(i++)])&&-1!=(t=n[e.charCodeAt(i++)])&&(u[s++]=String.fromCharCode(r<<2|(48&t)>>4),-1!=(o=n[e.charCodeAt(i++)]))&&(u[s++]=String.fromCharCode((15&t)<<4|(60&o)>>2),-1!=(a=n[e.charCodeAt(i++)]));)u[s++]=String.fromCharCode((3&o)<<6|a);return u.join("")}));var t=2654435769;function o(e,r){var n=e.length,t=n<<2;if(r){var o=e[n-1];if(o<(t-=4)-3||o>t)return null;t=o}for(var a=0;a<n;a++)e[a]=String.fromCharCode(255&e[a],e[a]>>>8&255,e[a]>>>16&255,e[a]>>>24&255);var i=e.join("");return r?i.substring(0,t):i}function a(e,r){var n,t=e.length,o=t>>2;0!=(3&t)&&++o,r?(n=new Array(o+1))[o]=t:n=new Array(o);for(var a=0;a<t;++a)n[a>>2]|=e.charCodeAt(a)<<((3&a)<<3);return n}function i(e){return 4294967295&e}function s(e,r,n,t,o,a){return(n>>>5^r<<2)+(r>>>3^n<<4)^(e^r)+(a[3&t^o]^n)}function c(e){return e.length<4&&(e.length=4),e}function l(e){if(/^[\x00-\x7f]*$/.test(e))return e;for(var r=[],n=e.length,t=0,o=0;t<n;++t,++o){var a=e.charCodeAt(t);if(a<128)r[o]=e.charAt(t);else if(a<2048)r[o]=String.fromCharCode(192|a>>6,128|63&a);else{if(!(a<55296||a>57343)){if(t+1<n){var i=e.charCodeAt(t+1);if(a<56320&&56320<=i&&i<=57343){var s=65536+((1023&a)<<10|1023&i);r[o]=String.fromCharCode(240|s>>18&63,128|s>>12&63,128|s>>6&63,128|63&s),++t;continue}}throw new Error("Malformed string")}r[o]=String.fromCharCode(224|a>>12,128|a>>6&63,128|63&a)}}return r.join("")}function d(e,r){return(null==r||r<0)&&(r=e.length),0===r?"":/^[\x00-\x7f]*$/.test(e)||!/^[\x00-\xff]*$/.test(e)?r===e.length?e:e.substr(0,r):r<65535?function(e,r){for(var n=new Array(r),t=0,o=0,a=e.length;t<r&&o<a;t++){var i=e.charCodeAt(o++);switch(i>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:n[t]=i;break;case 12:case 13:if(!(o<a))throw new Error("Unfinished UTF-8 octet sequence");n[t]=(31&i)<<6|63&e.charCodeAt(o++);break;case 14:if(!(o+1<a))throw new Error("Unfinished UTF-8 octet sequence");n[t]=(15&i)<<12|(63&e.charCodeAt(o++))<<6|63&e.charCodeAt(o++);break;case 15:if(!(o+2<a))throw new Error("Unfinished UTF-8 octet sequence");var s=((7&i)<<18|(63&e.charCodeAt(o++))<<12|(63&e.charCodeAt(o++))<<6|63&e.charCodeAt(o++))-65536;if(!(0<=s&&s<=1048575))throw new Error("Character outside valid Unicode range: 0x"+s.toString(16));n[t++]=s>>10&1023|55296,n[t]=1023&s|56320;break;default:throw new Error("Bad UTF-8 encoding 0x"+i.toString(16))}}return t<r&&(n.length=t),String.fromCharCode.apply(String,n)}(e,r):function(e,r){for(var n=[],t=new Array(32768),o=0,a=0,i=e.length;o<r&&a<i;o++){var s=e.charCodeAt(a++);switch(s>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:t[o]=s;break;case 12:case 13:if(!(a<i))throw new Error("Unfinished UTF-8 octet sequence");t[o]=(31&s)<<6|63&e.charCodeAt(a++);break;case 14:if(!(a+1<i))throw new Error("Unfinished UTF-8 octet sequence");t[o]=(15&s)<<12|(63&e.charCodeAt(a++))<<6|63&e.charCodeAt(a++);break;case 15:if(!(a+2<i))throw new Error("Unfinished UTF-8 octet sequence");var c=((7&s)<<18|(63&e.charCodeAt(a++))<<12|(63&e.charCodeAt(a++))<<6|63&e.charCodeAt(a++))-65536;if(!(0<=c&&c<=1048575))throw new Error("Character outside valid Unicode range: 0x"+c.toString(16));t[o++]=c>>10&1023|55296,t[o]=1023&c|56320;break;default:throw new Error("Bad UTF-8 encoding 0x"+s.toString(16))}if(o>=32766){var l=o+1;t.length=l,n[n.length]=String.fromCharCode.apply(String,t),r-=l,o=-1}}return o>0&&(t.length=o,n[n.length]=String.fromCharCode.apply(String,t)),n.join("")}(e,r)}function u(e,r){return null==e||0===e.length?e:(e=l(e),r=l(r),o(function(e,r){var n,o,a,c,l,d,u=e.length,h=u-1;for(o=e[h],a=0,d=0|Math.floor(6+52/u);d>0;--d){for(c=(a=i(a+t))>>>2&3,l=0;l<h;++l)n=e[l+1],o=e[l]=i(e[l]+s(a,n,o,l,c,r));n=e[0],o=e[h]=i(e[h]+s(a,n,o,h,c,r))}return e}(a(e,!0),c(a(r,!1))),!1))}function h(e,r){return null==e||0===e.length?e:(r=l(r),d(o(function(e,r){var n,o,a,c,l,d=e.length,u=d-1;for(n=e[0],a=i(Math.floor(6+52/d)*t);0!==a;a=i(a-t)){for(c=a>>>2&3,l=u;l>0;--l)o=e[l-1],n=e[l]=i(e[l]-s(a,n,o,l,c,r));o=e[u],n=e[0]=i(e[0]-s(a,n,o,0,c,r))}return e}(a(e,!1),c(a(r,!1))),!0)))}e.XXTEA={utf8Encode:l,utf8Decode:d,encrypt:u,encryptToBase64:function(r,n){return e.btoa(u(r,n))},decrypt:h,decryptFromBase64:function(r,n){return null==r||0===r.length?r:h(e.atob(r),n)}}}(window)},518:function(e,r,n){"use strict";n.d(r,"a",(function(){return s}));var t=n(5),o=n.n(t),a=n(6),i=n.n(a),s=function(){function e(r){o()(this,e),this.options=r,this.$element=this.options.element,this.$loginDom=$(".js-sts-login"),this.init()}return i()(e,[{key:"init",value:function(){this.bindEvent(),this.closeModal()}},{key:"bindEvent",value:function(){var e=this;this.$loginDom.on("click",".js-login-back",(function(){return e.back()})),this.$loginDom.on("click",".js-invalid-btn",(function(){return e.refresh()})),this.$loginDom.on("click",".js-approve-again-btn",(function(){return e.approveAgain()})),this.$element.on("click",".js-sts-login-link",(function(){return e.showQrcode()}))}},{key:"back",value:function(){$(".js-approve-ing, .js-feedback, .js-sts-login").addClass("hidden"),this.options.target?this.$element.find(this.options.target).removeClass("hidden"):this.$element.removeClass("hidden")}},{key:"showQrcode",value:function(){var e=this;$.ajax({type:"post",url:this.$loginDom.data("url"),dataType:"json",success:function(r){console.log(r),e.$loginDom.find(".js-sts-login-qrcode img").attr("src",r.qrcode),e.onlyShow(),e.token=r.token,e.pollStatus()}})}},{key:"approveAgain",value:function(){$(".js-feedback").addClass("hidden"),$(".js-login-section, .js-sts-tip").removeClass("hidden"),this.refresh()}},{key:"refresh",value:function(){$(".js-approve-ing").addClass("hidden"),this.showQrcode()}},{key:"pollStatus",value:function(){var e=this,r=this.token,n=this.$loginDom.data("goto"),t=$(".js-fail-feedback"),o=$(".js-success-feedback"),a=$(".js-fail-tip"),i=$(".js-approve-again-btn");this.$loginDom.hasClass("hidden")||this.flag||$.get("/login/face_token/".concat(r),{goto:n},(function(r){switch(r.status){case"created":setTimeout((function(){e.pollStatus()}),2e3);break;case"processing":$(".js-invalid-btn").addClass("hidden"),$(".js-approve-ing, .js-approve-ing-tip").removeClass("hidden"),setTimeout((function(){e.pollStatus()}),2e3);break;case"expired":$(".js-approve-ing-tip").addClass("hidden"),$(".js-approve-ing, .js-invalid-btn").removeClass("hidden");break;case"successed":e.statusShow(),o.removeClass("hidden").siblings().addClass("hidden"),window.location.href=r.url;break;case"failed":e.feedbackShow(t,i,a);break;case"failures":e.feedbackShow(t,a,i)}}))}},{key:"closeModal",value:function(){var e=this;$("#login-modal").on("hide.bs.modal",(function(){e.flag=!0}))}},{key:"onlyShow",value:function(){$(".js-sts-login, .js-login-section, .js-sts-tip").removeClass("hidden"),this.options.target?this.$element.find(this.options.target).addClass("hidden"):this.$element.addClass("hidden")}},{key:"statusShow",value:function(){$(".js-login-section, .js-sts-tip").addClass("hidden"),$(".js-feedback").removeClass("hidden")}},{key:"feedbackShow",value:function(e,r,n){this.statusShow(),e.removeClass("hidden").siblings().addClass("hidden"),r.removeClass("hidden"),n.addClass("hidden")}}]),e}()}});