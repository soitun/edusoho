!function(e){function t(t){for(var r,i,a=t[0],l=t[1],u=t[2],d=0,f=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(c&&c(t);f.length;)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={109:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static-dist/";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var c=l;s.push([929,0]),n()}({22:function(e,t){e.exports=jQuery},929:function(e,t,n){"use strict";n.r(t);var r=n(8),o=$("#video-play-form");$(".js-setting-submit").click((function(){$.post(o.data("url"),o.serialize()).success((function(e){Object(r.a)("success",Translator.trans("site.save_success_hint"))})).fail((function(e,t,n){Object(r.a)("danger",e.responseJSON.error.message)}))})),$('input:radio[name="multiple_learn_enable"]').click((function(){0==$('input:radio[name="multiple_learn_enable"]:checked').val()?($(".js-effect-show").removeClass("hidden"),$(".js-allow-tips").addClass("hidden"),$(".js-forbidden-tips").removeClass("hidden")):($(".js-effect-show").addClass("hidden"),$(".js-allow-tips").removeClass("hidden"),$(".js-forbidden-tips").addClass("hidden"))}))}});