!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/static-dist/",n(n.s=998)}({998:function(e,t){$("input[type=radio][name=enable]").change((function(){var e=$("input[type=radio][name=enable]:checked").val();"1"===e&&($("#enableTips").removeClass("hidden"),$("#disableTips").addClass("hidden"),$(".remind_setting").removeClass("hidden")),"0"===e&&($("#enableTips").addClass("hidden"),$("#disableTips").removeClass("hidden"),$(".remind_setting").addClass("hidden"))})),$(".js-tooltip-twig-widget").find(".js-twig-widget-tips").each((function(){var e=$(this);e.popover({html:!0,trigger:"focus",placement:e.data("placement"),content:e.next(".js-twig-widget-html").html()})}))}});