!function(e){function t(t){for(var a,r,o=t[0],c=t[1],l=t[2],u=0,h=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(d&&d(t);h.length;)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},s={318:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/static-dist/";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;i.push([1242,0]),n()}({1242:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),i=n(3),r=n.n(i),o=n(197);new(function(){function e(){s()(this,e),this.table=$(".js-question-html"),this.renderUrl=this.table.data("url"),this.element=$(".js-question-container"),this.categoryContainer=$(".js-category-content"),this.categoryModal=$(".js-category-modal"),this.selector=new o.a(this.table),this.init()}return r()(e,[{key:"init",value:function(){this.initEvent(),this.initSelect(),this.initShortLongText()}},{key:"initEvent",value:function(){var e=this;this.element.on("click",".js-search-btn",(function(t){e.onClickSearchBtn(t)})),this.element.on("click",".pagination li",(function(t){e.onClickPagination(t)})),this.element.on("click",".js-category-search",(function(t){e.onClickCategorySearch(t)})),this.element.on("click",".js-all-category-search",(function(t){e.onClickAllCategorySearch(t)})),this.element.on("click",".js-batch-delete",(function(t){e.onDeleteQuestions(t)})),this.element.on("click",".js-delete-btn",(function(t){e.onDeleteSingle(t)})),this.element.on("click",".js-batch-set",(function(t){e.showCategoryModal(t)})),this.element.on("click",".js-export-btn",(function(t){e.exportQuestions(t)})),this.categoryModal.on("click",".js-category-btn",(function(t){e.setCategory(t)})),this.element.on("click",".js-update-btn",(function(t){e.onUpdateQuestion(t)}))}},{key:"initSelect",value:function(){$("#question_categoryId").select2({treeview:!0,dropdownAutoWidth:!0,treeviewInitState:"collapsed",placeholderOption:"first"})}},{key:"initShortLongText",value:function(){var e;(e=$("#quiz-table-container")).on("click",".short-text",(function(){$(this).slideUp("fast").parents(".short-long-text").find(".long-text").slideDown("fast")})),e.on("click",".long-text",(function(){$(this).slideUp("fast").parents(".short-long-text").find(".short-text").slideDown("fast")}))}},{key:"onUpdateQuestion",value:function(e){var t=$(e.currentTarget).data("url");-1!==t.indexOf("/questions/show/ajax")&&(t=t.replace("/questions/show/ajax","/questions")),window.location.href=t}},{key:"showCategoryModal",value:function(e){var t=$(e.currentTarget).data("name");0!==this.selector.toJson().length?this.categoryModal.modal("show"):cd.message({type:"danger",message:Translator.trans("site.data.uncheck_name_hint",{name:t})})}},{key:"exportQuestions",value:function(e){var t=$(e.currentTarget),n=this.element.find('[data-role="search-conditions"]').serialize(),a=t.data("url"),s=this.selector.toJson();t.attr("href",a+"?"+n+"&ids="+s)}},{key:"setCategory",value:function(e){var t=this,n=$(e.currentTarget).data("url"),a={ids:this.selector.toJson(),categoryId:$("#question_categoryId").val()};$.post(n,a,(function(e){e?(cd.message({type:"success",message:Translator.trans("site.save_success_hint")}),t.selector.resetItems(),t.renderTable(!0),t.categoryModal.modal("hide")):cd.message({type:"danger",message:Translator.trans("site.save_error_hint")})})).error((function(e){cd.message({type:"danger",message:Translator.trans("site.save_error_hint")})}))}},{key:"onDeleteQuestions",value:function(e){var t=this,n=$(e.currentTarget),a=n.data("name"),s=this.selector.toJson(),i='<br><div class="help-block">'+Translator.trans("course.question_manage.manage.delete_tips")+"</div>";0!==s.length?cd.confirm({title:Translator.trans("site.data.delete_title_hint",{name:a}),content:Translator.trans("site.data.delete_check_name_hint",{name:a})+i,okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.close")}).on("ok",(function(){$.post(n.data("url"),{ids:s},(function(e){e?(cd.message({type:"success",message:Translator.trans("site.delete_success_hint")}),t.selector.resetItems(),t.renderTable(!0)):cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")})})).error((function(e){cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")})}))})):cd.message({type:"danger",message:Translator.trans("site.data.uncheck_name_hint",{name:a})})}},{key:"onDeleteSingle",value:function(e){var t=$(e.currentTarget),n=t.data("name"),a=this,s='<br><div class="help-block">'+Translator.trans("course.question_manage.manage.delete_tips")+"</div>";cd.confirm({title:Translator.trans("site.data.delete_title_hint",{name:n}),content:Translator.trans("site.data.delete_name_hint",{name:n})+s,okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.close")}).on("ok",(function(){$.post(t.data("url"),(function(e){e?(cd.message({type:"success",message:Translator.trans("site.delete_success_hint")}),a.selector.resetItems(),a.renderTable(!0)):cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")})})).error((function(e){cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")})}))}))}},{key:"onClickSearchBtn",value:function(e){this.renderTable(),e.preventDefault()}},{key:"onClickPagination",value:function(e){var t=$(e.currentTarget);this.element.find(".js-page").val(t.data("page")),this.renderTable(!0),e.preventDefault()}},{key:"onClickCategorySearch",value:function(e){var t=$(e.currentTarget);this.categoryContainer.find(".js-active-set.active").removeClass("active"),t.addClass("active"),$(".js-category-choose").val(t.data("id")),this.renderTable()}},{key:"onClickAllCategorySearch",value:function(e){var t=$(e.currentTarget);this.categoryContainer.find(".js-active-set.active").removeClass("active"),t.addClass("active"),$(".js-category-choose").val(""),this.renderTable()}},{key:"renderTable",value:function(e){e||this._resetPage();var t=this,n=this.element.find('[data-role="search-conditions"]').serialize()+"&page="+this.element.find(".js-page").val();this._loading(),$.ajax({type:"GET",url:this.renderUrl,data:n}).done((function(e){t.table.html(e),t.selector.updateTable()})).fail((function(){t._loaded_error()}))}},{key:"_loading",value:function(){var e='<div class="empty" colspan="10" style="color:#999;padding:80px;">'+Translator.trans("site.loading")+"</div>";this.table.html(e)}},{key:"_loaded_error",value:function(){var e='<div class="empty" colspan="10" style="color:#999;padding:80px;">'+Translator.trans("site.loading_error")+"</div>";this.table.html(e)}},{key:"_resetPage",value:function(){this.element.find(".js-page").val(1)}}]),e}())},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(43),s=n.n(a),i=n(2),r=n.n(i),o=n(3),c=n.n(o),l=function(){function e(t){r()(this,e),this.$elem=$(t),this.init(),this.selectMap={}}return c()(e,[{key:"init",value:function(){this.initEvent()}},{key:"initEvent",value:function(){var e=this;this.$elem.on("click",".js-checkbox",(function(t){e.toggleItem(t),e.changeSelectedNum()})),this.$elem.on("click",".js-select-all",(function(t){$(t.target).prop("checked")?(e.$elem.find(".js-select-all").prop("checked",!0),e.addItems()):(e.$elem.find(".js-select-all").prop("checked",!1),e.removeItems()),e.changeSelectedNum()}))}},{key:"setOpts",value:function(e){var t=e.addCb,n=void 0===t?function(){}:t,a=e.removeCb,s=void 0===a?function(){}:a;this.addCb=n,this.removeCb=s}},{key:"getItem",value:function(e){return{id:e.data("id")}}},{key:"removeItem",value:function(e){var t=this.$elem.find('input[data-id="'.concat(e.id,'"]'));t.length&&t.prop("checked",!1),this.selectMap[e.id]&&delete this.selectMap[e.id]}},{key:"addItem",value:function(e){var t=$(e);t.prop("checked",!0),this.selectMap[t.data("id")]||(this.selectMap[t.data("id")]=!0)}},{key:"addItems",value:function(){var e=this;this.$elem.find(".js-checkbox").each((function(t,n){$(n).prop("checked")||(e.addItem(n),e.addCb&&e.addCb(n))}))}},{key:"removeItems",value:function(){var e=this;this.$elem.find(".js-checkbox").each((function(t,n){if($(n).prop("checked")){var a=e.getItem($(n));e.removeItem(a),e.removeCb&&e.removeCb(n)}}))}},{key:"toggleItem",value:function(e){var t=$(e.currentTarget);t.prop("checked")?this.selectMap[t.data("id")]||(this.selectMap[t.data("id")]=!0,this.addCb&&this.addCb(t)):this.selectMap[t.data("id")]&&(delete this.selectMap[t.data("id")],this.removeCb&&this.removeCb(t))}},{key:"resetItems",value:function(){this.selectMap={}}},{key:"getObjectLength",value:function(){return s()(this.selectMap).length}},{key:"toJson",value:function(){return s()(this.selectMap)}},{key:"updateTable",value:function(){var e=this;this.$elem.find(".js-checkbox").each((function(t,n){e.selectMap[$(n).data("id")]&&$(n).prop("checked",!0)})),this.changeSelectedNum()}},{key:"changeSelectedNum",value:function(){this.$elem.find(".js-select-number").length>0&&this.$elem.find(".js-select-number").text(this.getObjectLength())}}]),e}()}});