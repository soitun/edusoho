!function(r){function t(t){for(var o,a,p=t[0],i=t[1],c=t[2],f=0,s=[];f<p.length;f++)a=p[f],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&s.push(n[a][0]),n[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o]);for(l&&l(t);s.length;)s.shift()();return u.push.apply(u,c||[]),e()}function e(){for(var r,t=0;t<u.length;t++){for(var e=u[t],o=!0,p=1;p<e.length;p++){var i=e[p];0!==n[i]&&(o=!1)}o&&(u.splice(t--,1),r=a(a.s=e[0]))}return r}var o={},n={234:0},u=[];function a(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=r,a.c=o,a.d=function(r,t,e){a.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:e})},a.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},a.t=function(r,t){if(1&t&&(r=a(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var o in r)a.d(e,o,function(t){return r[t]}.bind(null,o));return e},a.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return a.d(t,"a",t),t},a.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},a.p="/static-dist/";var p=window.webpackJsonp=window.webpackJsonp||[],i=p.push.bind(p);p.push=t,p=p.slice();for(var c=0;c<p.length;c++)t(p[c]);var l=i;u.push([1027,0]),e()}({1027:function(r,t,e){"use strict";e.r(t);var o=e(191),n=($("#avatar-crop-form"),$("#avatar-crop"),new o.a({element:"#logo-crop",group:"group",cropedWidth:200,cropedHeight:200}));n.afterCrop=function(r){var t=$("#upload-picture-btn").data("url");$.post(t,{images:r},(function(){document.location.href=$("#upload-picture-btn").data("reloadUrl")}))},$("#upload-picture-btn").click((function(r){r.stopPropagation(),n.crop({imgs:{logo:[200,200]}})}))}});