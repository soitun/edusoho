!function(e){function o(o){for(var r,i,a=o[0],u=o[1],d=o[2],l=0,w=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&w.push(t[i][0]),t[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(c&&c(o);w.length;)w.shift()();return s.push.apply(s,d||[]),n()}function n(){for(var e,o=0;o<s.length;o++){for(var n=s[o],r=!0,a=1;a<n.length;a++){var u=n[a];0!==t[u]&&(r=!1)}r&&(s.splice(o--,1),e=i(i.s=n[0]))}return e}var r={},t={229:0},s=[];function i(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,o,n){i.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,o){if(1&o&&(e=i(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)i.d(n,r,function(o){return e[o]}.bind(null,r));return n},i.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(o,"a",o),o},i.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},i.p="/static-dist/";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=o,a=a.slice();for(var d=0;d<a.length;d++)o(a[d]);var c=u;s.push([1049,0]),n()}({1049:function(e,o,n){"use strict";n.r(o);var r=n(37),t=n.n(r),s=n(3),i=n.n(s),a=n(4),u=n.n(a),d=n(417),c=n.n(d),l=n(451),w=n(9);new(function(){function e(){i()(this,e),this.sdk=null,this._initSdk(),this.sdk&&this.capture()}return u()(e,[{key:"_initSdk",value:function(){var e=Object(l.a)();!1!==e.ok?this.sdk=new window.ExamSupervisorSDK({apiServer:"//exam-supervisor-service.edusoho.net",token:$("input[name=token]").val()}):this.showErrorMessage(e.message)}},{key:"capture",value:function(){var e=this,o=this;o.sdk.on("collect-open-error",(function(e){console.log("error",e),o.showErrorMessage(e.message),$("#inspection-collect-btn").attr("disabled",!0)})),o.sdk.bootCollectFace("inspection-collect-video",(function(o){return e.faceCaptured(o)}))}},{key:"faceCaptured",value:function(e){var o=this;return console.log(e),new t.a((function(){console.log("uploading......"),o.uploadImg(e.face)}))}},{key:"uploadImg",value:function(e){var o=new FormData;o.append("picture",c()(e)),$.ajax({url:$(".js-upload-url").data("uploadUrl"),type:"POST",contentType:!1,processData:!1,data:o,success:function(e){e?(Object(w.a)("success",Translator.trans("恭喜！您已成功完成图像采集!")),$("#inspection-collect-finish-btn").show(),$(".js-upload-url").find("button").hide()):Object(w.a)("danger",Translator.trans("采集失败！请刷新页面重新采集"))}})}},{key:"showErrorMessage",value:function(e){$("#alert-box").html(e)}}]),e}())},26:function(e,o){e.exports=jQuery},417:function(e,o){e.exports=function(e){"use strict";if(!window||window.window!==window)throw new Error("This module is only available in browser");var o=window.Blob||window.MozBlob||window.WebKitBlob;if(!o)throw new Error("Blob was not supported");var n=e.match(/^data:((.*?)(;charset=.*?)?)(;base64)?,/);if(!n)throw new Error("invalid dataURI");for(var r=n[2]?n[1]:"text/plain"+(n[3]||";charset=utf-8"),t=!!n[4],s=e.slice(n[0].length),i=t?atob(s):decodeURIComponent(s),a=[],u=0;u<i.length;u++)a.push(i.charCodeAt(u));return new o([new Uint8Array(a)],{type:r})}},451:function(e,o,n){"use strict";n.d(o,"a",(function(){return s}));var r=n(11),t=n.n(r);var s=function(){var e={ok:!0,message:""},o=function(){var e=navigator.userAgent.toLowerCase(),o=function(o){return o.test(e)},n=function(o){return e.match(o).toString().replace(/[^0-9|_.]/g,"").replace(/_/g,".")},r="unknow";o(/windows|win32|win64|wow32|wow64/g)?r="windows":o(/macintosh|macintel/g)?r="macos":o(/x11/g)?r="linux":o(/android|adr/g)?r="android":o(/ios|iphone|ipad|ipod|iwatch/g)&&(r="ios");var t="unknow";"windows"===r?o(/windows nt 5.0|windows 2000/g)?t="2000":o(/windows nt 5.1|windows xp/g)?t="xp":o(/windows nt 5.2|windows 2003/g)?t="2003":o(/windows nt 6.0|windows vista/g)?t="vista":o(/windows nt 6.1|windows 7/g)?t="7":o(/windows nt 6.2|windows 8/g)?t="8":o(/windows nt 6.3|windows 8.1/g)?t="8.1":o(/windows nt 10.0|windows 10/g)&&(t="10"):"macos"===r?t=n(/os x [\d._]+/g):"android"===r?t=n(/android [\d._]+/g):"ios"===r&&(t=n(/os [\d._]+/g));var s="unknow";"windows"===r||"macos"===r||"linux"===r?s="desktop":("android"===r||"ios"===r||o(/mobile/g))&&(s="mobile");var i="unknow",a="unknow";o(/applewebkit/g)?(i="webkit",o(/edge/g)?a="edge":o(/opr/g)?a="opera":o(/chrome/g)?a="chrome":o(/safari/g)&&(a="safari")):o(/gecko/g)&&o(/firefox/g)?(i="gecko",a="firefox"):o(/presto/g)?(i="presto",a="opera"):o(/trident|compatible|msie/g)&&(i="trident",a="iexplore");var u="unknow";"webkit"===i?u=n(/applewebkit\/[\d._]+/g):"gecko"===i?u=n(/gecko\/[\d._]+/g):"presto"===i?u=n(/presto\/[\d._]+/g):"trident"===i&&(u=n(/trident\/[\d._]+/g));var d="unknow";"chrome"===a?d=n(/chrome\/[\d._]+/g):"safari"===a?d=n(/version\/[\d._]+/g):"firefox"===a?d=n(/firefox\/[\d._]+/g):"opera"===a?d=n(/opr\/[\d._]+/g):"iexplore"===a?d=n(/(msie [\d._]+)|(rv:[\d._]+)/g):"edge"===a&&(d=n(/edge\/[\d._]+/g));var c="none",l="unknow";o(/micromessenger/g)?(c="wechat",l=n(/micromessenger\/[\d._]+/g)):o(/qqbrowser/g)?(c="qq",l=n(/qqbrowser\/[\d._]+/g)):o(/ucbrowser/g)?(c="uc",l=n(/ucbrowser\/[\d._]+/g)):o(/qihu 360se/g)?c="360":o(/2345explorer/g)?(c="2345",l=n(/2345explorer\/[\d._]+/g)):o(/metasr/g)?c="sougou":o(/lbbrowser/g)?c="liebao":o(/maxthon/g)&&(c="maxthon",l=n(/maxthon\/[\d._]+/g));var w={engine:i,engineVs:u,platform:s,supporter:a,supporterVs:d,system:r,systemVs:t};return"none"!==c&&(w.shell=c,w.shellVs=l),w}(),n=e.message='请下载安装使用最新版 <a href="https://edtech.edusoho.net/software/chrome-win64.exe" target="_blank">谷歌</a>、<a href="https://browser.360.cn/se/" target="_blank">360</a> 或 <a href="https://ie.sogou.com/" target="_blank">搜狗</a> 浏览器。';return"desktop"!==o.platform?(e.ok=!1,e.message="请在电脑端浏览器中打开！"):"iexplore"===o.supporter||o.shell&&"qq"===o.shell?(e.ok=!1,e.message="不支持当前浏览器，"+n):"chrome"===o.supporter&&t()(o.supporterVs)<69&&(e.ok=!1,e.message="当前浏览器版本过低，"+n),e}}});