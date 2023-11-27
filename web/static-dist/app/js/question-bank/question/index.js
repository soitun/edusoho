!function(e){function t(t){for(var a,r,o=t[0],l=t[1],c=t[2],u=0,h=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(d&&d(t);h.length;)h.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},s={336:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/static-dist/";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;i.push([1607,0]),n()}({1607:function(e,t,n){"use strict";n.r(t);var a=n(5),s=n.n(a),i=n(6),r=n.n(i),o=n(222);n(129);new(function(){function e(){s()(this,e),this.table=$(".js-question-html"),this.renderUrl=this.table.data("url"),this.element=$(".js-question-container"),this.categoryContainer=$(".js-category-content"),this.categoryModal=$(".js-category-modal"),this.selector=new o.a(this.table),this.nextBtn=$(".js-next-btn"),this.modal=$("#modal"),this.modalUrl=$('[name="introModalUrl"]').val(),this.accessCloud=$('[name="accessCloud"]').val(),this.canManageCloud=$('[name="canManageCloud"]').val(),this.init()}return r()(e,[{key:"init",value:function(){this.initEvent(),this.initSelect(),this.initShortLongText(),store.get("QUESTION_IMPORT_INTRO")||1==this.accessCloud||(store.set("QUESTION_IMPORT_INTRO",!0),this.modal.load(this.modalUrl),this.modal.modal("show"))}},{key:"initEvent",value:function(){var e=this;this.element.on("click",".js-search-btn",(function(t){e.onClickSearchBtn(t)})),this.element.on("click",".js-batch-delete",(function(t){e.onDeleteQuestions(t)})),this.element.on("click",".js-delete-btn",(function(t){e.onDeleteSingle(t)})),this.element.on("click",".js-batch-set",(function(t){e.showCategoryModal(t)})),this.element.on("click",".js-export-btn",(function(t){e.exportQuestions(t)})),this.categoryModal.on("click",".js-category-btn",(function(t){e.setCategory(t)})),this.element.on("click",".js-update-btn",(function(t){e.onUpdateQuestion(t)})),$(".js-item-create").click((function(e){var t=$("#select_category").val(),n=$(e.currentTarget).data("url");location.href=n+"&categoryId="+t})),this.modal.on("click",".js-next-btn",(function(t){e.modal.modal("hide"),1!=e.canManageCloud?e.skipCanManageCloud():e.skipAccessCloud()}))}},{key:"skipAccessCloud",value:function(){introJs().setOptions({steps:[{element:".js-import-btn",intro:Translator.trans("upgrade.cloud.capabilities.to.experience"),position:"left"}],doneLabel:Translator.trans("skip.upgrade.btn"),showBullets:!1,showStepNumbers:!1,exitOnEsc:!1,exitOnOverlayClick:!1,tooltipClass:"question-bank-intro-skip"}).start(),$(".introjs-skipbutton").click((function(e){var t=document.createElement("a");t.target="_blank",t.href=$(".js-skip-btn").attr("href"),t.click()}))}},{key:"skipCanManageCloud",value:function(){introJs().setOptions({steps:[{element:".js-import-btn",intro:Translator.trans("next.skip.intro.text"),position:"left"}],doneLabel:Translator.trans("skip.i.know"),showBullets:!1,showStepNumbers:!1,exitOnEsc:!1,exitOnOverlayClick:!1,tooltipClass:"question-bank-intro-skip"}).start()}},{key:"initSelect",value:function(){$("#question_categoryId").select2({treeview:!0,dropdownAutoWidth:!0,treeviewInitState:"collapsed",placeholderOption:"first"})}},{key:"initShortLongText",value:function(){var e;(e=$("#quiz-table-container")).on("click",".short-text",(function(){$(this).slideUp("fast").parents(".short-long-text").find(".long-text").slideDown("fast")})),e.on("click",".long-text",(function(){$(this).slideUp("fast").parents(".short-long-text").find(".short-text").slideDown("fast")}))}},{key:"onUpdateQuestion",value:function(e){var t=$(e.currentTarget).data("url");-1!==t.indexOf("/questions/show/ajax")&&(t=t.replace("/questions/show/ajax","/questions")),window.location.href=t}},{key:"showCategoryModal",value:function(e){var t=$(e.currentTarget).data("name");0!==this.selector.toJson().length?this.categoryModal.modal("show"):cd.message({type:"danger",message:Translator.trans("site.data.uncheck_name_hint",{name:t})})}},{key:"exportQuestions",value:function(e){var t=$(e.currentTarget),n=this.element.find('[data-role="search-conditions"]').serialize(),a=t.data("url"),s=this.selector.toJson();t.attr("href",a+"?"+n+"&ids="+s)}},{key:"setCategory",value:function(e){var t=this,n=$(e.currentTarget).data("url"),a={ids:this.selector.toJson(),categoryId:$("#question_categoryId").val()};$.post(n,a,(function(e){e?(cd.message({type:"success",message:Translator.trans("site.save_success_hint")}),t.selector.resetItems(),t.renderTable(!0),t.categoryModal.modal("hide")):cd.message({type:"danger",message:Translator.trans("site.save_error_hint")})})).error((function(e){cd.message({type:"danger",message:Translator.trans("site.save_error_hint")})}))}},{key:"onDeleteQuestions",value:function(e){var t=this,n=$(e.currentTarget),a=n.data("name"),s=this.selector.toJson(),i='<br><div class="help-block">'+Translator.trans("course.question_manage.manage.delete_tips")+"</div>";0!==s.length?cd.confirm({title:Translator.trans("site.data.delete_title_hint",{name:a}),content:Translator.trans("site.data.delete_check_name_hint",{name:a})+i,okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.close")}).on("ok",(function(){$.post(n.data("url"),{ids:s},(function(e){e?(cd.message({type:"success",message:Translator.trans("site.delete_success_hint")}),t.selector.resetItems(),t.renderTable(!0)):cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")})})).error((function(e){cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")})}))})):cd.message({type:"danger",message:Translator.trans("site.data.uncheck_name_hint",{name:a})})}},{key:"onDeleteSingle",value:function(e){var t=$(e.currentTarget),n=t.data("name"),a=this,s='<br><div class="help-block">'+Translator.trans("course.question_manage.manage.delete_tips")+"</div>";cd.confirm({title:Translator.trans("site.data.delete_title_hint",{name:n}),content:Translator.trans("site.data.delete_name_hint",{name:n})+s,okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.close")}).on("ok",(function(){$.post(t.data("url"),(function(e){e?(cd.message({type:"success",message:Translator.trans("site.delete_success_hint")}),a.selector.resetItems(),a.renderTable(!0)):cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")})})).error((function(e){cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")})}))}))}},{key:"onClickSearchBtn",value:function(e){this.renderTable(),e.preventDefault()}},{key:"onClickPagination",value:function(e){var t=$(e.currentTarget);this.element.find(".js-page").val(t.data("page")),this.renderTable(!0),e.preventDefault()}},{key:"onChangePagination",value:function(){var e=this,t=$(".js-current-perpage-count").children("option:selected").val(),n=this.element.find('[data-role="search-conditions"]').serialize(),a="".concat(n,"&page=1&perpage=").concat(t);this._loading(),$.ajax({type:"GET",url:this.renderUrl,data:a}).done((function(t){e.table.html(t),e.selector.updateTable()})).fail((function(){e._loaded_error()}))}},{key:"onClickCategorySearch",value:function(e){var t=$(e.currentTarget);this.categoryContainer.find(".js-active-set.active").removeClass("active"),t.addClass("active"),$(".js-category-choose").val(t.data("id"));this.renderTable("",10)}},{key:"onClickAllCategorySearch",value:function(e){var t=$(e.currentTarget);this.categoryContainer.find(".js-active-set.active").removeClass("active"),t.addClass("active"),$(".js-category-choose").val("");this.renderTable("",10)}},{key:"renderTable",value:function(e,t){e||this._resetPage();var n=this,a=t||$(".js-current-perpage-count").children("option:selected").val(),s=this.element.find(".js-page").val(),i={category_id:$(".js-category-choose").val(),difficulty:"default"===$(".js-list-header-difficulty").val()?"":$(".js-list-header-difficulty").val(),type:"default"===$(".js-list-header-type").val()?"":$(".js-list-header-type").val(),keyword:"default"===$(".js-list-header-keyword").val()?"":$(".js-list-header-keyword").val(),perpage:a,page:s};this._loading(),$.ajax({type:"GET",url:this.renderUrl,data:i}).done((function(e){n.table.html(e),n.selector.updateTable()})).fail((function(){n._loaded_error()}))}},{key:"_loading",value:function(){var e='<div class="empty" colspan="10" style="color:#999;padding:80px;">'+Translator.trans("site.loading")+"</div>";this.table.html(e)}},{key:"_loaded_error",value:function(){var e='<div class="empty" colspan="10" style="color:#999;padding:80px;">'+Translator.trans("site.loading_error")+"</div>";this.table.html(e)}},{key:"_resetPage",value:function(){this.element.find(".js-page").val(1)}}]),e}())},222:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(55),s=n.n(a),i=n(5),r=n.n(i),o=n(6),l=n.n(o),c=function(){function e(t){r()(this,e),this.$elem=$(t),this.init(),this.selectMap={}}return l()(e,[{key:"init",value:function(){this.initEvent()}},{key:"initEvent",value:function(){var e=this;this.$elem.on("click",".js-checkbox",(function(t){e.toggleItem(t),e.changeSelectedNum()})),this.$elem.on("click",".js-select-all",(function(t){$(t.target).prop("checked")?(e.$elem.find(".js-select-all").prop("checked",!0),e.addItems()):(e.$elem.find(".js-select-all").prop("checked",!1),e.removeItems()),e.changeSelectedNum()}))}},{key:"setOpts",value:function(e){var t=e.addCb,n=void 0===t?function(){}:t,a=e.removeCb,s=void 0===a?function(){}:a;this.addCb=n,this.removeCb=s}},{key:"getItem",value:function(e){return{id:e.data("id")}}},{key:"removeItem",value:function(e){var t=this.$elem.find('input[data-id="'.concat(e.id,'"]'));t.length&&t.prop("checked",!1),this.selectMap[e.id]&&delete this.selectMap[e.id]}},{key:"addItem",value:function(e){var t=$(e);t.prop("checked",!0),this.selectMap[t.data("id")]||(this.selectMap[t.data("id")]=!0)}},{key:"addItems",value:function(){var e=this;this.$elem.find(".js-checkbox").each((function(t,n){$(n).prop("checked")||(e.addItem(n),e.addCb&&e.addCb(n))}))}},{key:"removeItems",value:function(){var e=this;this.$elem.find(".js-checkbox").each((function(t,n){if($(n).prop("checked")){var a=e.getItem($(n));e.removeItem(a),e.removeCb&&e.removeCb(n)}}))}},{key:"toggleItem",value:function(e){var t=$(e.currentTarget);t.prop("checked")?this.selectMap[t.data("id")]||(this.selectMap[t.data("id")]=!0,this.addCb&&this.addCb(t)):this.selectMap[t.data("id")]&&(delete this.selectMap[t.data("id")],this.removeCb&&this.removeCb(t))}},{key:"resetItems",value:function(){this.selectMap={}}},{key:"getObjectLength",value:function(){return s()(this.selectMap).length}},{key:"toJson",value:function(){return s()(this.selectMap)}},{key:"updateTable",value:function(){var e=this;this.$elem.find(".js-checkbox").each((function(t,n){e.selectMap[$(n).data("id")]&&$(n).prop("checked",!0)})),this.changeSelectedNum()}},{key:"changeSelectedNum",value:function(){this.$elem.find(".js-select-number").length>0&&this.$elem.find(".js-select-number").text(this.getObjectLength())}}]),e}()}});