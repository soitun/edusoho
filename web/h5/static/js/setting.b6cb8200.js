(window.webpackJsonp=window.webpackJsonp||[]).push([["setting"],{"08a6":function(t,e,i){"use strict";i.r(e),i("8e6e"),i("ac6a"),i("456d"),i("e7e5");var n=i("d399"),o=(i("e17f"),i("2241")),a=i("bd86"),s=i("2f62"),r=i("3ce7"),c=i("faa5");function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(Object(i),!0).forEach((function(e){Object(a.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var l={components:{VueCropper:i("7e79").VueCropper},data:function(){return{settings:[{name:"setting.heads",info:""},{name:"setting.nickname",info:""},{name:"setting.language",info:""}],dialogVisible:!1,imageCropped:!1,option:{img:"",autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedNumber:[1,1],fixed:!0,high:!1,enlarge:2}}},computed:u({},Object(s.e)({user:function(t){return t.user},isLoading:function(t){return t.isLoading}})),created:function(){this.$set(this.settings[0],"info",this.user.avatar.large),this.$set(this.settings[1],"info",this.user.nickname),this.$set(this.settings[2],"info",this.$t("lang.language"))},methods:u(u({},Object(s.c)(["setAvatar"])),{},{handleSetting:function(t){switch(t){case 0:break;case 1:this.$router.push({name:"setting_nickname",query:{nickname:""==this.user.nickname?"":this.user.nickname}});break;case 2:this.$router.push({name:"settingLang"})}},logout:function(){var t=this;o.a.confirm({title:this.$t("setting.dropOut"),message:this.$t("setting.dropOutCancelConfirm"),confirmButtonText:this.$t("btn.confirm"),cancelButtonText:this.$t("btn.cancel")}).then((function(){t.$store.commit(c.H,{token:"",user:{}}),window.localStorage.setItem("mobile_bind_skip","0"),t.$router.push({name:"my"})}))},stopCropFn:function(){var t=this,e=this.$refs.cropper[0];e.stopCrop(),this.dialogVisible=!1,e.getCropData((function(e){t.imageCropped=!0,t.uploadImg(e),t.option.img=e}))},beforeUpload:function(t){var e=this,i=t.type,o=t.size/1024/1024;if(-1!==i.indexOf("image"))if(o>2)n.a.fail(this.$t("setting.fileSizeMustNotExceed2MB"));else{this.dialogVisible=!0;var a=new FileReader;a.onload=function(){e.option.img=a.result},a.readAsDataURL(t)}else n.a.fail(this.$t("setting.fileTypeOnlySupportsImageFormat"))},uploadImg:function(t){var e=this;if(this.imageCropped){this.imageCropped=!1;var i=new FormData;i.append("file",t),i.append("group","user"),r.a.updateFile({data:i}).then((function(i){e.$set(e.settings[0],"info",t.content),e.setAvatar({avatarId:i.id}).then((function(){n.a.success(e.$t("setting.modifySuccess"))})).catch((function(t){n.a.fail(t.message)}))})).catch((function(t){n.a.fail(t.message)}))}}})},g=(i("c4bb"),i("0c7c")),f=Object(g.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my_setting"},[t.isLoading?i("e-loading"):t._e(),t._l(t.settings,(function(e,n){return i("div",{key:n,staticClass:"my_setting-item",on:{click:function(e){return t.handleSetting(n)}}},[i("span",{staticClass:"my_setting-title title-18"},[t._v(t._s(t.$t(e.name)))]),i("div",{staticClass:"my_setting-content"},[n?t._e():i("img",{staticClass:"my_setting-avatar",attrs:{src:e.info||t.option.img,alt:""}}),n?i("span",[t._v(t._s(e.info))]):t._e(),i("img",{staticClass:"my_setting-more",attrs:{src:"static/images/more.png",alt:""}})]),n?t._e():i("van-uploader",{attrs:{"before-read":t.beforeUpload}},[i("van-popup",{attrs:{overlay:!1,position:"top"},model:{value:t.dialogVisible,callback:function(e){t.dialogVisible=e},expression:"dialogVisible"}},[i("div",{staticClass:"cropper-container"},[i("vueCropper",{directives:[{name:"show",rawName:"v-show",value:t.option.img,expression:"option.img"}],ref:"cropper",refInFor:!0,attrs:{img:t.option.img,fixed:t.option.fixed,enlarge:t.option.enlarge,"auto-crop":t.option.autoCrop,"fixed-number":t.option.fixedNumber,"auto-crop-width":t.option.autoCropWidth,"auto-crop-height":t.option.autoCropHeight}})],1),i("div",{staticClass:"dialog-footer"},[i("van-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v(t._s(t.$t("btn.cancel")))]),i("van-button",{attrs:{type:"primary"},on:{click:t.stopCropFn}},[t._v(t._s(t.$t("btn.confirm")))])],1)])],1)],1)})),i("div",{staticClass:"log-out-btn title-18",on:{click:t.logout}},[i("span",[t._v(t._s(t.$t("btn.dropOut")))])])],2)}),[],!1,null,null,null);e.default=f.exports},b6d6:function(t,e,i){},c4bb:function(t,e,i){"use strict";var n=i("b6d6");i.n(n).a}}]);