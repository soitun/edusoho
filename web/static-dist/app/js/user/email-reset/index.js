!function(t){function e(e){for(var n,a,u=e[0],l=e[1],s=e[2],f=0,p=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);for(c&&c(e);p.length;)p.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,u=1;u<r.length;u++){var l=r[u];0!==i[l]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},i={406:0},o=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/static-dist/";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var c=l;o.push([1656,0]),r()}({1656:function(t,e,r){"use strict";r.r(e);var n=r(5),i=r.n(n),o=r(6),a=r.n(o),u=r(106);new(function(){function t(){i()(this,t),this.drag=$("#drag-btn").length?new u.a($("#drag-btn"),$(".js-jigsaw"),{limitType:"web_register"}):null,this.container=$("#reset-email-form"),this.btn=$("#next-btn"),this.initValidator(),this.init()}return a()(t,[{key:"init",value:function(){var t=this;t.btn.click((function(){t.validator.form()&&($btn.button("loadding"),t.container.submit())}))}},{key:"initValidator",value:function(){this.validator=this.container.validate({rules:{email:{required:!0,es_email:!0,es_remote:{type:"get"}},password:{required:!0,minlength:5,maxlength:20},dragCaptchaToken:{required:!0}},messages:{dragCaptchaToken:{required:Translator.trans("auth.register.drag_captcha_tips")}}})}}]),t}())}});