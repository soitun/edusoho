<<<<<<< HEAD
!function(r){var n={};function a(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=r,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/static-dist/",a(a.s=673)}({673:function(e,t){$("#live-lesson-content-field");var r=$("#live-open-course-form"),n=new Date,a=$("#live-open-course-form-btn");r.data("update")?($("[name=startTime]").attr("disabled",!1),$("#live-open-course-form-btn").attr("disabled",!1)):($("[name=startTime]").attr("disabled",!0),$("#live-length-field").attr("disabled",!0),$("#live-open-course-form-btn").attr("disabled",!0),$("#starttime-help-block").html(Translator.trans("activity.live.started_or_ended_notice")),$("#starttime-help-block").css("color","#a94442"),$("#timelength-help-block").html(Translator.trans("activity.live.started_or_ended_notice")),$("#timelength-help-block").css("color","#a94442"));var o=r.validate({rules:{startTime:{required:!0,after_now:!0,es_remote:{type:"post",data:{clientTime:function(){return $("[name=startTime]").val()}}}},timeLength:{required:!0,positive_integer:!0,es_remote:{type:"get",data:{startTime:function(){return $("[name=startTime]").val()},length:function(){return $("[name=timeLength]").val()}}}}},messages:{startTime:{es_remote:Translator.trans("validate.after_now.message")}}});$("[name=startTime]").datetimepicker({autoclose:!0,language:document.documentElement.lang}).on("hide",function(e){o.element("[name=startTime]")}),$("[name=startTime]").datetimepicker("setStartDate",n),a.click(function(){o.form()&&(a.button("loading"),r.submit())})}});
=======
!function(r){var n={};function a(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=r,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/static-dist/",a(a.s=718)}({718:function(e,t){$("#live-lesson-content-field");var r=$("#live-open-course-form"),n=new Date,a=$("#live-open-course-form-btn");r.data("update")?($("[name=startTime]").attr("disabled",!1),$("#live-open-course-form-btn").attr("disabled",!1)):($("[name=startTime]").attr("disabled",!0),$("#live-length-field").attr("disabled",!0),$("#live-open-course-form-btn").attr("disabled",!0),$("#starttime-help-block").html(Translator.trans("activity.live.started_or_ended_notice")),$("#starttime-help-block").css("color","#a94442"),$("#timelength-help-block").html(Translator.trans("activity.live.started_or_ended_notice")),$("#timelength-help-block").css("color","#a94442"));var o=r.validate({rules:{startTime:{required:!0,after_now:!0,es_remote:{type:"post",data:{clientTime:function(){return $("[name=startTime]").val()}}}},timeLength:{required:!0,positive_integer:!0,es_remote:{type:"get",data:{startTime:function(){return $("[name=startTime]").val()},length:function(){return $("[name=timeLength]").val()}}}}},messages:{startTime:{es_remote:Translator.trans("validate.after_now.message")}}});$("[name=startTime]").datetimepicker({autoclose:!0,language:document.documentElement.lang}).on("hide",function(e){o.element("[name=startTime]")}),$("[name=startTime]").datetimepicker("setStartDate",n),a.click(function(){o.form()&&(a.button("loading"),r.submit())})}});
>>>>>>> master
