!function(r){function e(e){for(var n,u,s=e[0],i=e[1],l=e[2],f=0,p=[];f<s.length;f++)u=s[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r[n]=i[n]);for(c&&c(e);p.length;)p.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var r,e=0;e<a.length;e++){for(var t=a[e],n=!0,s=1;s<t.length;s++){var i=t[s];0!==o[i]&&(n=!1)}n&&(a.splice(e--,1),r=u(u.s=t[0]))}return r}var n={},o={383:0},a=[];function u(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=r,u.c=n,u.d=function(r,e,t){u.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:t})},u.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},u.t=function(r,e){if(1&e&&(r=u(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)u.d(t,n,function(e){return r[e]}.bind(null,n));return t},u.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return u.d(e,"a",e),e},u.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},u.p="/static-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=i;a.push([1505,0]),t()}({1505:function(r,e,t){"use strict";t.r(e);var n=t(11),o=$("#pay-password-reset-update-form"),a=o.validate({rules:{"form[currentUserLoginPassword]":{required:!0},"form[payPassword]":{required:!0,minlength:5,maxlength:20},"form[confirmPayPassword]":{required:!0,equalTo:"#form_payPassword"}}});console.log(a),$("#payPassword-save-btn").on("click",(function(r){var e=$(r.currentTarget);a.form()&&(e.button("loading"),o.submit())}));var u=$(".alert-danger").text(),s=$(".alert-success").text();u&&Object(n.a)("danger",Translator.trans(u)),s&&Object(n.a)("success",Translator.trans(s))},29:function(r,e){r.exports=jQuery}});