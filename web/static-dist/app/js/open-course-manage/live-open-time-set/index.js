!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/static-dist/",r(r.s=1088)}({1088:function(e,t){$("#live-lesson-content-field");var r=$("#live-open-course-form"),n=new Date,a=$("#live-open-course-form-btn");r.data("update")?($("[name=startTime]").attr("disabled",!1),$("#live-open-course-form-btn").attr("disabled",!1)):($("[name=startTime]").attr("disabled",!0),$("#live-length-field").attr("disabled",!0),$("#live-open-course-form-btn").attr("disabled",!0),$("#starttime-help-block").html(Translator.trans("activity.live.started_or_ended_notice")),$("#starttime-help-block").css("color","#a94442"),$("#timelength-help-block").html(Translator.trans("activity.live.started_or_ended_notice")),$("#timelength-help-block").css("color","#a94442"));var o=r.validate({rules:{startTime:{required:!0,after_now:!0,es_remote:{type:"post",data:{clientTime:function(){return $("[name=startTime]").val()}}}},timeLength:{required:!0,positive_integer:!0,es_remote:{type:"get",data:{startTime:function(){return $("[name=startTime]").val()},length:function(){return $("[name=timeLength]").val()}}}}},messages:{startTime:{es_remote:Translator.trans("validate.after_now.message")}}});$("[name=startTime]").datetimepicker({autoclose:!0,language:document.documentElement.lang}).on("hide",(function(e){o.element("[name=startTime]")})),$("[name=startTime]").datetimepicker("setStartDate",n),a.click((function(){o.form()&&(a.button("loading"),r.submit())}))}});