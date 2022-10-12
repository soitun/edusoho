(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{101:function(e,t,r){e.exports=r(218)},1471:function(e,t,r){"use strict";r.r(t);var n=r(194),a=r.n(n),o=r(349),i=r.n(o),u=r(1489),c={name:"SettingQualification",components:{EditorQualification:r(1654).a},data:function(){return{userId:$(".js-user-id").val(),info:{}}},created:function(){var e=this;return i()(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.F.get({user_id:e.userId});case 2:e.info=t.sent;case 3:case"end":return t.stop()}}),t)})))()}},s=r(30),l=Object(s.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("editor-qualification",{attrs:{"user-id":e.userId,"edit-info":e.info}})}),[],!1,null,null,null);t.default=l.exports},1519:function(e,t,r){},1610:function(e,t,r){"use strict";var n=r(1519);r.n(n).a},1654:function(e,t,r){"use strict";var n=r(109),a=r.n(n),o=r(101),i=r.n(o),u=r(68),c=r.n(u),s=r(78),l=r.n(s),p=r(69),f=r.n(p),d=r(42),m=r.n(d),v=r(194),g=r.n(v),b=r(37),h=r.n(b),y=r(349),x=r.n(y),w=r(399),k=r.n(w),_=r(1489),F=r(1535),O=r.n(F),j=(r(1536),{name:"UploadPicture",components:{VueCropper:O.a},props:{title:{type:String,default:"图片裁剪"},tip:{type:String,default:""},aspectRatio:{type:Number},file:{type:String,default:""}},data:function(){return{loading:!1,pictureName:"",pictureUrl:"",imgUrl:"",visible:!1,uploadLoading:!1,uploadToken:{},cropperKey:0}},created:function(){this.pictureUrl=this.file,this.toBlobPolyfillInIE()},watch:{file:function(){this.pictureUrl=this.file}},methods:{toBlobPolyfillInIE:function(){HTMLCanvasElement.prototype.toBlob||a()(HTMLCanvasElement.prototype,"toBlob",{value:function(e,t,r){var n=this;setTimeout((function(){for(var a=atob(n.toDataURL(t,r).split(",")[1]),o=a.length,i=new Uint8Array(o),u=0;u<o;u++)i[u]=a.charCodeAt(u);e(new Blob([i],{type:t||"image/png"}))}))}})},getUploadToken:function(){var e=this;return x()(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.G.get("default");case 2:e.uploadToken=t.sent;case 3:case"end":return t.stop()}}),t)})))()},uploadPicture:function(e){var t=this;this.cropperKey++;var r=new FileReader;r.onload=function(e){t.imgUrl=e.target.result,t.visible=!0},this.pictureName=e.file.originFileObj.name,r.readAsDataURL(e.file.originFileObj)},handleCancel:function(){this.visible=!1},handleReselect:function(){var e=this.$refs.upload.$el.getElementsByTagName("input");this.visible=!1,e.length>0&&e[0].click()},handleSaveCropper:function(){var e=this;return x()(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.loading=!0,e.uploadToken.expiry&&!(new Date>=new Date(e.uploadToken.expiry))){t.next=4;break}return t.next=4,e.getUploadToken();case 4:e.$refs.cropper.getCroppedCanvas().toBlob(function(){var t=x()(g.a.mark((function t(r){var n,a,o,i;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("file",r,e.pictureName),n.append("token",e.uploadToken.token),e.uploadLoading=!0,t.prev=4,t.next=7,_.l.uploadFile(n);case 7:a=t.sent,o=a.url,i=a.id,e.pictureUrl=o,e.$emit("success",i),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(4),413==t.t0.response.status&&Vue.prototype.$message.error("文件过大，请上传小于 2M 的文件！");case 18:return t.prev=18,e.loading=!1,e.visible=!1,e.uploadLoading=!1,t.finish(18);case 23:case"end":return t.stop()}}),t,null,[[4,14,18,23]])})));return function(e){return t.apply(this,arguments)}}());case 6:case"end":return t.stop()}}),t)})))()}}}),I=(r(1610),r(30));function $(e,t){var r=m()(e);if(f.a){var n=f()(e);t&&(n=n.filter((function(t){return l()(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){h()(e,t,r[t])})):c.a?i()(e,c()(r)):$(Object(r)).forEach((function(t){a()(e,t,l()(r,t))}))}return e}var C={name:"EditorTeacherQualification",components:{UploadPicture:Object(I.a)(j,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("a-upload",{ref:"upload",attrs:{accept:"image/*","file-list":[],"list-type":"picture-card",customRequest:function(){}},on:{change:e.uploadPicture}},[e.pictureUrl?r("img",{staticStyle:{width:"100%"},attrs:{src:e.pictureUrl}}):r("div",[r("a-icon",{attrs:{type:e.loading?"loading":"plus"}}),e._v(" "),r("div",{staticClass:"ant-upload-text"},[e._v("\n        上传照片\n      ")])],1)]),e._v(" "),e.tip?r("p",{staticClass:"mb0",staticStyle:{"font-size":"14px","line-height":"20px"}},[e._v(e._s(e.tip))]):e._e(),e._v(" "),r("a-modal",{key:e.cropperKey,attrs:{title:e.title,visible:e.visible,"mask-closable":!1},on:{cancel:e.handleCancel}},[r("vue-cropper",{ref:"cropper",attrs:{"view-mode":1,"auto-crop-area":1,"aspect-ratio":e.aspectRatio,src:e.imgUrl}}),e._v(" "),r("template",{slot:"footer"},[r("a-button",{on:{click:e.handleReselect}},[e._v("重新选择")]),e._v(" "),r("a-button",{attrs:{type:"primary",loading:e.uploadLoading},on:{click:e.handleSaveCropper}},[e._v("保存图片")])],1)],2)],1)}),[],!1,null,"8162e456",null).exports},props:{userId:{type:String,required:!0},editInfo:{type:Object,required:!0}},data:function(){return{labelCol:{span:4},wrapperCol:{span:16},form:{truename:"",avatarFileId:"",code:""},rules:{truename:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:2,message:"最少需要输入 2 个字符",trigger:"blur"},{max:36,message:"最多只能输入 36 个字符",trigger:"blur"},{pattern:/^[\u4E00-\u9FA5A-Za-z0-9_]+$/,message:"只支持中文字、英文字母、数字及_",trigger:"blur"}],avatarFileId:[{required:!0,message:"请上传图片"}],code:[{required:!0,message:"请输入教师资格证书编号",trigger:"blur"},{len:17,message:"请输入 17 位数字",trigger:"blur"},{pattern:/^[0-9]*$/,message:"请输入整数",trigger:"blur"}]},file:""}},watch:{editInfo:function(){this.setFormValue()}},created:function(){this.setFormValue()},methods:{setFormValue:function(){var e=this.editInfo,t=e.truename,r=e.avatarFileId,n=e.code,a=e.url;k.a.assign(this.form,{truename:t,avatarFileId:r,code:n}),this.file=a},onSubmit:function(){var e=this;this.$refs.ruleForm.validate(function(){var t=x()(g.a.mark((function t(r){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,_.F.add(S(S({},e.form),{},{userId:e.userId}));case 4:n=t.sent,e.$message.success("保存成功"),e.$emit("handle-cancel-modal",n);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},uploadedSuccessfully:function(e){this.form.avatarFileId=e}}},U=Object(I.a)(C,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-form-model",{key:e.userId,ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[r("a-form-model-item",{ref:"truename",attrs:{label:"姓名",prop:"truename"}},[r("a-input",{on:{blur:function(){e.$refs.truename.onFieldBlur()}},model:{value:e.form.truename,callback:function(t){e.$set(e.form,"truename",t)},expression:"form.truename"}})],1),e._v(" "),r("a-form-model-item",{attrs:{label:"照片",prop:"avatarFileId"}},[r("upload-picture",{attrs:{file:e.file,"aspect-ratio":1,tip:"请上传jpg, gif, png格式的图片，建议图片尺寸为 270×270px，建议图片大小不超过2MB"},on:{success:e.uploadedSuccessfully}})],1),e._v(" "),r("a-form-model-item",{ref:"code",attrs:{label:"教师资格证书编号",prop:"code"}},[r("a-input",{on:{blur:function(){e.$refs.code.onFieldBlur()}},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),e._v(" "),r("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[r("a-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("\n      保存\n    ")])],1)],1)}),[],!1,null,null,null);t.a=U.exports},218:function(e,t,r){r(219);var n=r(53).Object;e.exports=function(e,t){return n.defineProperties(e,t)}},219:function(e,t,r){var n=r(72);n(n.S+n.F*!r(140),"Object",{defineProperties:r(372)})},220:function(e,t,r){r(221),e.exports=r(53).Object.getOwnPropertyDescriptors},221:function(e,t,r){var n=r(72),a=r(222),o=r(182),i=r(217),u=r(374);n(n.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,r,n=o(e),c=i.f,s=a(n),l={},p=0;s.length>p;)void 0!==(r=c(n,t=s[p++]))&&u(l,t,r);return l}})},222:function(e,t,r){var n=r(350),a=r(320),o=r(135),i=r(102).Reflect;e.exports=i&&i.ownKeys||function(e){var t=n.f(o(e)),r=a.f;return r?t.concat(r(e)):t}},223:function(e,t,r){r(373),e.exports=r(53).Object.getOwnPropertySymbols},42:function(e,t,r){e.exports=r(643)},488:function(e,t,r){var n=r(72),a=r(53),o=r(319);e.exports=function(e,t){var r=(a.Object||{})[e]||Object[e],i={};i[e]=t(r),n(n.S+n.F*o((function(){r(1)})),"Object",i)}},643:function(e,t,r){r(644),e.exports=r(53).Object.keys},644:function(e,t,r){var n=r(371),a=r(370);r(488)("keys",(function(){return function(e){return a(n(e))}}))},645:function(e,t,r){r(646);var n=r(53).Object;e.exports=function(e,t){return n.getOwnPropertyDescriptor(e,t)}},646:function(e,t,r){var n=r(182),a=r(217).f;r(488)("getOwnPropertyDescriptor",(function(){return function(e,t){return a(n(e),t)}}))},68:function(e,t,r){e.exports=r(220)},69:function(e,t,r){e.exports=r(223)},78:function(e,t,r){e.exports=r(645)}}]);