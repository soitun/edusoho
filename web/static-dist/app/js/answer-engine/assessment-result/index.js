!function(e){function t(t){for(var a,c,i=t[0],s=t[1],l=t[2],u=0,p=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(d&&d(t);p.length;)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={117:0},o=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/static-dist/";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=s;o.push([1370,0]),n()}({1370:function(e,t,n){"use strict";n.r(t);var a=n(33),r=n.n(a),o={data:function(){return{questionFavorites:[],showCKEditorData:{publicPath:$("[name=ckeditor_path]").val(),filebrowserImageUploadUrl:$("[name=ckeditor_image_upload_url]").val(),filebrowserImageDownloadUrl:$("[name=ckeditor_image_download_url]").val(),language:"zh_CN"===document.documentElement.lang?"zh-cn":document.documentElement.lang,jqueryPath:$("[name=jquery_path]").val()},showAttachment:$("[name=show_attachment]").val(),cdnHost:$("[name=cdn_host]").val(),isErrorCorrection:$("[name=is_error_correction]").val(),fileId:0,metaActivity:{}}},created:function(){var e=this;$.ajax({url:"/api/answer_record/"+$("[name='answer_record_id']").val(),type:"GET",async:!1,headers:{Accept:"application/vnd.edusoho.v2+json"},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content")),e.setRequestHeader("X-Requested-With","XMLHttpRequest")}}).done((function(t){e.metaActivity=t.metaActivity,e.assessment=t.assessment,e.answerReport=t.answer_report,e.answerRecord=t.answer_record,e.answerScene=t.answer_scene}))},methods:{deleteAttachment:function(e,t){t&&(this.fileId=e)},previewAttachment:function(e){this.fileId=e},downloadAttachment:function(e){this.fileId=e},previewAttachmentCallback:function(){var e=this,t=this;return new r.a((function(n){$.ajax({url:$("[name=preview-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done((function(e){e.data.sdkBaseUri=app.cloudSdkBaseUri,e.data.disableDataUpload=app.cloudDisableLogReport,e.data.disableSentry=app.cloudDisableLogReport,n(e),t.fileId=0}))}))},downloadAttachmentCallback:function(){var e=this,t=this;return new r.a((function(n){$.ajax({url:$("[name=download-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done((function(e){n(e),t.fileId=0}))}))},deleteAttachmentCallback:function(){var e=this,t=this;return new r.a((function(n){$.ajax({url:$("[name=delete-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done((function(e){n(e),t.fileId=0}))}))},errorCorrection:function(e){var t=$("[name='answer_record_id']").val();$.ajax({url:"/api/answerRecord/".concat(t,"/fillAnswer"),type:"POST",async:!1,headers:{Accept:"application/vnd.edusoho.v2+json"},data:e,beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content")),e.setRequestHeader("X-Requested-With","XMLHttpRequest")}}).done((function(e){console.log(e)}))}}},c=n(30),i=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ibs-vue",attrs:{id:"app"}},[n("assessment-result",{attrs:{metaActivity:e.metaActivity,answerReport:e.answerReport,assessment:e.assessment,answerRecord:e.answerRecord,answerScene:e.answerScene,showCKEditorData:e.showCKEditorData,showAttachment:e.showAttachment,cdnHost:e.cdnHost,previewAttachmentCallback:e.previewAttachmentCallback,downloadAttachmentCallback:e.downloadAttachmentCallback,"is-error-correction":e.isErrorCorrection},on:{previewAttachment:e.previewAttachment,downloadAttachment:e.downloadAttachment,"error-correction":e.errorCorrection}})],1)}),[],!1,null,null,null).exports;if(jQuery.support.cors=!0,Vue.config.productionTip=!1,"en"==app.lang){var s=local.default;itemBank.default.install(Vue,{locale:s})}new Vue({render:function(e){return e(i)}}).$mount("#app")}});