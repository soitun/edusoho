!function(e){function t(t){for(var i,o,s=t[0],l=t[1],c=t[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(d&&d(t);p.length;)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={42:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;a.push([1427,0]),n()}({1427:function(e,t,n){"use strict";n.r(t);var i=n(68),r=n.n(i),a=n(10),o=n.n(a),s=n(3),l=n.n(s),c=n(4),d=n.n(c),u=n(140);new(function(){function e(t){l()(this,e),this.$element=t,this.$step2_form=this.$element.find("#step2-form"),this.$step3_form=this.$element.find("#step3-form"),this.$parentiframe=$(window.parent.document).find("#task-create-content-iframe"),this.scoreSlider=null,this._init()}return d()(e,[{key:"_init",value:function(){Object(u.a)(),this.setValidateRule(),this.initEvent(),this.initStepForm2()}},{key:"initEvent",value:function(){var e=this;this.$element.find("#testpaper-media").on("change",(function(t){return e.changeTestpaper(t)})),this.$element.find("input[name=doTimes]").on("change",(function(t){return e.showRedoInterval(t)})),this.$element.find('input[name="testMode"]').on("change",(function(t){return e.startTimeCheck(t)})),this.$element.find('input[name="length"]').on("blur",(function(t){return e.changeEndTime(t)})),this.$element.find("#condition-select").on("change",(function(t){return e.changeCondition(t)})),this.initSelectTestpaper(this.$element.find("#testpaper-media").find("option:selected"),$('[name="finishScore"]').val())}},{key:"setValidateRule",value:function(){$.validator.addMethod("arithmeticFloat",(function(e,t){return this.optional(t)||/^[0-9]+(\.[0-9]?)?$/.test(e)}),$.validator.format(Translator.trans("activity.testpaper_manage.arithmetic_float_error_hint"))),$.validator.addMethod("positiveInteger",(function(e,t){return this.optional(t)||/^[1-9]\d*$/.test(e)}),$.validator.format(Translator.trans("activity.testpaper_manage.positive_integer_error_hint")))}},{key:"initStepForm2",value:function(){var e=this.$step2_form.validate({onkeyup:!1,rules:{title:{required:!0,trim:!0,maxlength:50,course_title:!0},mediaId:{required:!0,digits:!0},length:{required:!0,digits:!0},startTime:{required:function(){return 1==$('[name="doTimes"]:checked').val()&&"realTime"==$('[name="testMode"]:checked').val()},DateAndTime:function(){return 1==$('[name="doTimes"]:checked').val()&&"realTime"==$('[name="testMode"]:checked').val()}},redoInterval:{required:function(){return 0==$('[name="doTimes"]:checked').val()},arithmeticFloat:!0,max:1e9}},messages:{mediaId:{required:Translator.trans("activity.testpaper_manage.media_error_hint")},redoInterval:{max:Translator.trans("activity.testpaper_manage.max_error_hint")}}});this.$step2_form.data("validator",e)}},{key:"initSelectTestpaper",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e.val();if(""!=n){this.getItemsTable(e.closest("select").data("getTestpaperItems"),n);var i=e.data("score");""==t&&(t=Math.ceil(.6*i)),$("#score-single-input").val(t),$(".js-score-total").text(i),$('input[name="title"]').val()||$('input[name="title"]').val(e.text()),this.initScoreSlider(o()(t),o()(i))}else $("#questionItemShowDiv").hide()}},{key:"changeTestpaper",value:function(e){var t=$(e.currentTarget).find("option:selected");this.initSelectTestpaper(t)}},{key:"showRedoInterval",value:function(e){1==$(e.currentTarget).val()?($("#lesson-redo-interval-field").closest(".form-group").hide(),$(".starttime-check-div").show(),this.dateTimePicker()):($("#lesson-redo-interval-field").closest(".form-group").show(),$(".starttime-check-div").hide())}},{key:"startTimeCheck",value:function(e){"realTime"==$(e.currentTarget).val()?($(".starttime-input").removeClass("hidden"),this.dateTimePicker()):$(".starttime-input").addClass("hidden")}},{key:"changeEndTime",value:function(e){$('input[name="startTime"]:visible').val()}},{key:"changeCondition",value:function(e){"score"!=$(e.currentTarget).find("option:selected").val()?$(".js-score-form-group").addClass("hidden"):$(".js-score-form-group").removeClass("hidden")}},{key:"initScoreSlider",value:function(e,t){var n=document.getElementById("score-slider"),i={start:e,connect:[!0,!1],tooltips:[!0],step:1,range:{min:0,max:t}};this.scoreSlider?this.scoreSlider.updateOptions(i):(this.scoreSlider=noUiSlider.create(n,i),n.noUiSlider.on("update",(function(e,n){$(".noUi-tooltip").text("".concat((e[n]/t*100).toFixed(0),"%")),$(".js-score-tooltip").css("left","".concat((e[n]/t*100).toFixed(0),"%")),$(".js-passScore").text(o()(e[n])),$('input[name="finishScore"]').val(o()(e[n]))})));var r=Translator.trans("activity.testpaper_manage.pass_score_hint",{passScore:'<span class="js-passScore">'+e+"</span>"}),a='<div class="score-tooltip js-score-tooltip"><div class="tooltip top" role="tooltip" style="">\n      <div class="tooltip-arrow"></div>\n      <div class="tooltip-inner ">\n        '.concat(r,"\n      </div>\n      </div></div>");$(".noUi-handle").append(a),$(".noUi-tooltip").text("".concat((e/t*100).toFixed(0),"%")),$(".js-score-tooltip").css("left","".concat((e/t*100).toFixed(0),"%"))}},{key:"getItemsTable",value:function(e,t){$.post(e,{testpaperId:t},(function(e){$("#questionItemShowTable").html(e),$("#questionItemShowDiv").show()}))}},{key:"dateTimePicker",value:function(){var e=this,t=new Date,n=$('input[name="startTime"]');!n.is(":visible")||""!=n.val()&&"0"!=n.val()||n.val(t.Format("yyyy-MM-dd hh:mm")),n.datetimepicker({autoclose:!0,format:"yyyy-mm-dd hh:ii",language:document.documentElement.lang,minView:"hour",endDate:new Date(r()()+31536e7)}).on("show",(function(t){e.$parentiframe.height($("body").height()+240)})).on("hide",(function(t){e.$step2_form.data("validator").form(),e.$parentiframe.height($("body").height())})).on("changeDate",(function(e){e.date.valueOf()})),n.datetimepicker("setStartDate",t)}}]),e}())($("#iframe-content"))}});