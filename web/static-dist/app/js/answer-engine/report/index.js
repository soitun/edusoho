!function(e){function t(t){for(var a,s,i=t[0],c=t[1],l=t[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(u&&u(t);p.length;)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={108:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/static-dist/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;r.push([1203,0]),n()}({1203:function(e,t,n){"use strict";n.r(t);var a=n(33),o=n.n(a),r=n(27),s=n.n(r),i=n(10),c=n.n(i),l={data:function(){return{collect:1==$("[name='collect']").val(),answerShow:$("[name=answer_show]").val(),showCKEditorData:{publicPath:$("[name=ckeditor_path]").val(),filebrowserImageUploadUrl:$("[name=ckeditor_image_upload_url]").val(),filebrowserImageDownloadUrl:$("[name=ckeditor_image_download_url]").val(),language:"zh_CN"===document.documentElement.lang?"zh-cn":document.documentElement.lang,jqueryPath:$("[name=jquery_path]").val()},showAttachment:$("[name=show_attachment]").val(),cdnHost:$("[name=cdn_host]").val(),fileId:0,showDoAgainBtn:void 0===$("[name=show_do_again_btn]").val()?1:c()($("[name=show_do_again_btn]").val()),showReturnBtn:void 0===$("[name=submit_return_url]").val()?0:$("[name=submit_return_url]").val().length}},created:function(){var e=this;$.ajax({url:"/api/answer_record/"+$("[name='answer_record_id']").val(),type:"GET",async:!1,headers:{Accept:"application/vnd.edusoho.v2+json"},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content")),e.setRequestHeader("X-Requested-With","XMLHttpRequest")}}).done((function(t){e.assessment=t.assessment,e.answerReport=t.answer_report,e.answerRecord=t.answer_record,e.answerScene=t.answer_scene})),$.ajax({url:"/api/assessments/"+e.assessment.id+"/question_favorites",type:"GET",async:!1,headers:{Accept:"application/vnd.edusoho.v2+json"},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content")),e.setRequestHeader("X-Requested-With","XMLHttpRequest")}}).done((function(t){e.questionFavorites=t}))},methods:{doAgainEvent:function(e){location.href=$("[name=restart_url]").val()},cancelFavoriteEvent:function(e){$.ajax({url:"/api/me/question_favorite/1",headers:{Accept:"application/vnd.edusoho.v2+json"},contentType:"application/json;charset=utf-8",type:"DELETE",beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))},data:s()(e)}).done((function(e){}))},gotoReturnUrl:function(){parent.location.href=$("[name=submit_return_url]").val()},returnUrlGoto:function(){parent.location.href=$("[name=submit_return_url]").val()},favoriteEvent:function(e){$.ajax({url:"/api/me/question_favorite",headers:{Accept:"application/vnd.edusoho.v2+json"},contentType:"application/json;charset=utf-8",type:"POST",beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))},data:s()(e)}).done((function(e){}))},deleteAttachment:function(e,t){t&&(this.fileId=e)},previewAttachment:function(e){this.fileId=e},downloadAttachment:function(e){this.fileId=e},previewAttachmentCallback:function(){var e=this,t=this;return new o.a((function(n){$.ajax({url:$("[name=preview-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done((function(e){console.log(app),console.log(e),e.data.sdkBaseUri=app.cloudSdkBaseUri,e.data.disableDataUpload=app.cloudDisableLogReport,e.data.disableSentry=app.cloudDisableLogReport,n(e),t.fileId=0}))}))},downloadAttachmentCallback:function(){var e=this,t=this;return new o.a((function(n){$.ajax({url:$("[name=download-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done((function(e){n(e),t.fileId=0}))}))},deleteAttachmentCallback:function(){var e=this,t=this;return new o.a((function(n){$.ajax({url:$("[name=delete-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done((function(e){n(e),t.fileId=0}))}))}}},u=n(31),d=Object(u.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ibs-vue",attrs:{id:"app"}},[n("item-report",{attrs:{answerShow:e.answerShow,answerReport:e.answerReport,assessment:e.assessment,answerRecord:e.answerRecord,answerScene:e.answerScene,questionFavorites:e.questionFavorites,showCKEditorData:e.showCKEditorData,showAttachment:e.showAttachment,showDoAgainBtn:e.showDoAgainBtn,cdnHost:e.cdnHost,collect:e.collect,previewAttachmentCallback:e.previewAttachmentCallback,downloadAttachmentCallback:e.downloadAttachmentCallback},on:{previewAttachment:e.previewAttachment,downloadAttachment:e.downloadAttachment,doAgainEvent:e.doAgainEvent,cancelFavoriteEvent:e.cancelFavoriteEvent,favoriteEvent:e.favoriteEvent,submitReturn:e.returnUrlGoto}},[e.showReturnBtn?n("template",{slot:"returnBtn"},[n("div",{staticClass:"ibs-text-center ibs-mt16"},[n("a-button",{attrs:{type:"primary",shape:"round"},on:{click:e.gotoReturnUrl}},[e._v(e._s("返回错题本"))])],1)]):e._e()],2)],1)}),[],!1,null,null,null).exports,p=n(20);if(jQuery.support.cors=!0,Object(p.f)()&&$("body, html").css({height:"100%",overflow:"auto"}),Vue.config.productionTip=!1,"en"==app.lang){var f=local.default;itemBank.default.install(Vue,{locale:f})}new Vue({render:function(e){return e(d)}}).$mount("#app")}});