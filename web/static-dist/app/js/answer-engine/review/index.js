!function(e){function t(t){for(var a,i,c=t[0],s=t[1],l=t[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(u&&u(t);f.length;)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={117:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static-dist/";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;r.push([1370,0]),n()}({1370:function(e,t,n){"use strict";n.r(t);var a=n(33),o=n.n(a),r=n(26),i=n.n(r),c={data:function(){return{role:$("[name=role]").val(),showCKEditorData:{publicPath:$("[name=ckeditor_path]").val(),filebrowserImageUploadUrl:$("[name=ckeditor_image_upload_url]").val(),filebrowserImageDownloadUrl:$("[name=ckeditor_image_download_url]").val(),language:"zh_CN"===document.documentElement.lang?"zh-cn":document.documentElement.lang,jqueryPath:$("[name=jquery_path]").val()},showAttachment:$("[name=show_attachment]").val(),cdnHost:$("[name=cdn_host]").val(),fileId:0,mediaType:$("[name=media_type]").val(),finishType:$("[name=finishType]").val(),activity:{},submitList:[]}},created:function(){var e=this;$.ajax({url:"/api/answer_record/"+$("[name='answer_record_id']").val(),type:"GET",async:!1,headers:{Accept:"application/vnd.edusoho.v2+json"},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content")),e.setRequestHeader("X-Requested-With","XMLHttpRequest")}}).done((function(t){e.activity=t.activity,e.answerRecord=t.answer_record,"finished"!=e.answerRecord.status?(e.assessment=t.assessment,e.answerReport=t.answer_report,e.answerScene=t.answer_scene):location.href=$("[name=success_goto_url]").val()})),this.getAnswerRecord()},methods:{getReviewData:function(e){$.ajax({url:$("[name='answer_engine_review_url']").val(),contentType:"application/json;charset=utf-8",type:"post",data:i()(e),beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done((function(e){location.href=$("[name=success_goto_url]").val()}))},getReviewDataAagin:function(e){$.ajax({url:$("[name='answer_engine_review_url']").val(),contentType:"application/json;charset=utf-8",type:"post",data:i()(e),beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done((function(e){location.href=$("[name=success_continue_goto_url]").val()}))},deleteAttachment:function(e,t){t&&(this.fileId=e)},previewAttachment:function(e){this.fileId=e},downloadAttachment:function(e){this.fileId=e},previewAttachmentCallback:function(){var e=this,t=this;return new o.a((function(n){$.ajax({url:$("[name=preview-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done((function(e){console.log(app),console.log(e),e.data.sdkBaseUri=app.cloudSdkBaseUri,e.data.disableDataUpload=app.cloudDisableLogReport,e.data.disableSentry=app.cloudDisableLogReport,n(e),t.fileId=0}))}))},downloadAttachmentCallback:function(){var e=this,t=this;return new o.a((function(n){$.ajax({url:$("[name=download-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done((function(e){n(e),t.fileId=0}))}))},deleteAttachmentCallback:function(){var e=this,t=this;return new o.a((function(n){$.ajax({url:$("[name=delete-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done((function(e){n(e),t.fileId=0}))}))},getAnswerRecord:function(){var e=this,t=$("[name='answer_record_id']").val();$.ajax({url:"/api/answerRecord/".concat(t,"/submitList"),type:"GET",headers:{Accept:"application/vnd.edusoho.v2+json"},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content")),e.setRequestHeader("X-Requested-With","XMLHttpRequest")}}).done((function(t){e.submitList=t}))},handleViewHistoricalResult:function(e){window.open("/homework/result/".concat(e.answer_record_id,"/show?action=check"))},handleCancel:function(){location.href=$("[name=goto_back_url]").val()}}},s=n(30),l=Object(s.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ibs-vue",attrs:{id:"app"}},[n("item-review",{attrs:{role:e.role,activity:e.activity,assessment:e.assessment,answerReport:e.answerReport,answerRecord:e.answerRecord,answerScene:e.answerScene,showCKEditorData:e.showCKEditorData,showAttachment:e.showAttachment,cdnHost:e.cdnHost,previewAttachmentCallback:e.previewAttachmentCallback,downloadAttachmentCallback:e.downloadAttachmentCallback,"media-type":e.mediaType,"finish-type":e.finishType,"submit-list":e.submitList},on:{cancel:e.handleCancel,previewAttachment:e.previewAttachment,downloadAttachment:e.downloadAttachment,getReviewData:e.getReviewData,getReviewDataAagin:e.getReviewDataAagin,"view-historical-result":e.handleViewHistoricalResult}})],1)}),[],!1,null,null,null).exports;if(jQuery.support.cors=!0,Vue.config.productionTip=!1,"en"==app.lang){var u=local.default;itemBank.default.install(Vue,{locale:u})}new Vue({render:function(e){return e(l)}}).$mount("#app")}});