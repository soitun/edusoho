<<<<<<< HEAD
!function(l){function t(t){for(var e,r,n=t[0],o=t[1],a=t[2],i=0,s=[];i<n.length;i++)r=n[i],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&s.push(c[r][0]),c[r]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(l[e]=o[e]);for(p&&p(t);s.length;)s.shift()();return f.push.apply(f,a||[]),u()}function u(){for(var t,e=0;e<f.length;e++){for(var r=f[e],n=!0,o=1;o<r.length;o++){var a=r[o];0!==c[a]&&(n=!1)}n&&(f.splice(e--,1),t=i(i.s=r[0]))}return t}var r={},c={54:0},f=[];function i(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return l[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=l,i.c=r,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],n=e.push.bind(e);e.push=t,e=e.slice();for(var o=0;o<e.length;o++)t(e[o]);var p=n;f.push([496,0]),u()}({15:function(t,e){t.exports=jQuery},496:function(t,e,r){"use strict";r.r(e);var n=r(4);$('ul[role="tablist"]').on("click",'li[role="presentation"]',function(){$('li[role="presentation"]').attr("class",""),$(this).attr("class","active"),$(".es-piece").attr("style","display: none; visibility: hidden; ");var t=$(this).attr("id");$('div[data-label="'+t+'"]').attr("style","")}),$("#js-course-select-btn").on("click",function(t){var e=$(this);e.attr("disabled","true"),e.text("处理中..."),$.post($(this).data("chooseUrl"),{courseSetData:$(this).data("courseSet")},function(t){if("repeat"===t.status)Object(n.a)("danger",Translator.trans("已选择过该课程"));else{if(!0!==t.status)return void Object(n.a)("danger",Translator.trans("意外错误，操作失败，请联系管理员处理！"));Object(n.a)("success","已选择，请到“课程管理”查看并进行营销配置")}e.attr("disabled","true"),e.attr("style","width: 130px; background-color: #CCCCCC; border-color: #CCCCCC"),e.text("已选择")}).error(function(){e.text("选择"),e.attr("disabled",!1),Object(n.a)("danger",Translator.trans("网络波动，请重试！"))})})}});
=======
!function(l){function t(t){for(var e,r,n=t[0],o=t[1],a=t[2],i=0,s=[];i<n.length;i++)r=n[i],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&s.push(c[r][0]),c[r]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(l[e]=o[e]);for(p&&p(t);s.length;)s.shift()();return f.push.apply(f,a||[]),u()}function u(){for(var t,e=0;e<f.length;e++){for(var r=f[e],n=!0,o=1;o<r.length;o++){var a=r[o];0!==c[a]&&(n=!1)}n&&(f.splice(e--,1),t=i(i.s=r[0]))}return t}var r={},c={54:0},f=[];function i(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return l[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=l,i.c=r,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],n=e.push.bind(e);e.push=t,e=e.slice();for(var o=0;o<e.length;o++)t(e[o]);var p=n;f.push([540,0]),u()}({15:function(t,e){t.exports=jQuery},540:function(t,e,r){"use strict";r.r(e);var n=r(4);$('ul[role="tablist"]').on("click",'li[role="presentation"]',function(){$('li[role="presentation"]').attr("class",""),$(this).attr("class","active"),$(".es-piece").attr("style","display: none; visibility: hidden; ");var t=$(this).attr("id");$('div[data-label="'+t+'"]').attr("style","")}),$("#js-course-select-btn").on("click",function(t){var e=$(this);e.attr("disabled","true"),e.text("处理中..."),$.post($(this).data("chooseUrl"),{courseSetData:$(this).data("courseSet")},function(t){if("repeat"===t.status)Object(n.a)("danger",Translator.trans("已选择过该课程"));else{if(!0!==t.status)return void Object(n.a)("danger",Translator.trans("意外错误，操作失败，请联系管理员处理！"));Object(n.a)("success","已选择，请到“课程管理”查看并进行营销配置")}e.attr("disabled","true"),e.attr("style","width: 130px; background-color: #CCCCCC; border-color: #CCCCCC"),e.text("已选择")}).error(function(){e.text("选择"),e.attr("disabled",!1),Object(n.a)("danger",Translator.trans("网络波动，请重试！"))})})}});
>>>>>>> master
