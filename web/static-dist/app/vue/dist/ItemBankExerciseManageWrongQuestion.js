(window.webpackJsonp=window.webpackJsonp||[]).push([[422],{1651:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n.n(a),i=n(22),o=n.n(i),s=n(13),c=n.n(s),l=n(248),u=n(41),d=n.n(u),m={chapter:"章节练习",testpaper:"试卷练习"},p={data:function(){return{form:{exerciseMediaType:"chapter",wrongTimesSort:"default",chapterId:"default",testpaperId:"default",itemType:"",itemTitle:""},conditions:{},itemTypes:[{name:"单选题",value:"single_choice"},{name:"多选题",value:"choice"},{name:"不定项选择题",value:"uncertain_choice"},{name:"判断题",value:"determine"},{name:"填空题",value:"fill"},{name:"材料题",value:"material"}]}},props:{targetId:0},created:function(){this.initSearchParams(),this.fetchWrongBookCondition()},filters:{sourceTitle:function(e){return m[e]}},methods:{onSearch:function(){var e=this;this.$refs.form.validate((function(t){if(t){var n={};d.a.forEach(d.a.keys(e.form),(function(t){var a=e.form[t];"default"!==a&&(n[t]=a)})),e.$emit("on-search",n)}}))},getParams:function(e){var t=this.form,n=t.exerciseMediaType,a=(t.testpaperId,t.chapterId,{query:{targetType:"exercise",targetId:this.targetId},params:{}}),r=a.params;return null==e&&d.a.assign(r,this.form),"exerciseMediaType"===e&&("chapter"===n?d.a.assign(this.form,{chapterId:"default"}):"testpaper"===n&&d.a.assign(this.form,{testpaperId:"default"}),"default"!==n&&(r.exerciseMediaType=n)),a},initSearchParams:function(){var e=this,t=this.$route.query;d.a.forEach(t,(function(t,n){e.form[n]=t}))},fetchWrongBookCondition:function(e){var t=this;return c()(r.a.mark((function n(){var a,i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=t.getParams(e),n.next=3,l.O.get(a);case 3:(i=n.sent).chapter=[{id:"default",name:"全部章节"}].concat(i.chapter),i.testpapers=i.testpaper,t.conditions=i;case 7:case"end":return n.stop()}}),n)})))()},handleChange:function(e,t){this.fetchWrongBookCondition(t)},filterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0}}},f=n(36),h=Object(f.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-form-model",{ref:"form",attrs:{model:e.form,layout:"inline"}},[n("a-form-model-item",[n("a-select",{staticStyle:{width:"120px"},attrs:{"show-search":"","option-filter-prop":"children","filter-option":e.filterOption,notFoundContent:"暂无数据"},on:{change:function(t){return e.handleChange(t,"exerciseMediaType")}},model:{value:e.form.exerciseMediaType,callback:function(t){e.$set(e.form,"exerciseMediaType",t)},expression:"form.exerciseMediaType"}},e._l(["chapter","testpaper"],(function(t){return n("a-select-option",{key:t,attrs:{value:t}},[e._v("\n        "+e._s(e._f("sourceTitle")(t))+"\n      ")])})),1)],1),e._v(" "),"testpaper"===e.form.exerciseMediaType?n("a-form-model-item",[n("a-select",{staticStyle:{width:"120px"},attrs:{"show-search":"","option-filter-prop":"children","filter-option":e.filterOption,notFoundContent:"暂无数据"},model:{value:e.form.testpaperId,callback:function(t){e.$set(e.form,"testpaperId",t)},expression:"form.testpaperId"}},[n("a-select-option",{attrs:{value:"default"}},[e._v("全部试卷")]),e._v(" "),e._l(e.conditions.testpapers,(function(t){return n("a-select-option",{key:t.assessmentId,attrs:{value:t.assessmentId}},[e._v("\n        "+e._s(t.assessmentName)+"\n      ")])}))],2)],1):e._e(),e._v(" "),"chapter"===e.form.exerciseMediaType?n("a-form-model-item",[n("a-tree-select",{staticStyle:{"min-width":"120px","max-width":"120px"},attrs:{notFoundContent:"暂无数据","dropdown-style":{maxHeight:"400px",overflow:"auto"},"tree-data":e.conditions.chapter,"replace-fields":{title:"name",key:"id",value:"id",children:"children"},"tree-default-expand-all":""},model:{value:e.form.chapterId,callback:function(t){e.$set(e.form,"chapterId",t)},expression:"form.chapterId"}})],1):e._e(),e._v(" "),n("a-form-model-item",[n("a-select",{staticStyle:{width:"120px"},model:{value:e.form.wrongTimesSort,callback:function(t){e.$set(e.form,"wrongTimesSort",t)},expression:"form.wrongTimesSort"}},[n("a-select-option",{attrs:{value:"default"}},[e._v("\n        做错频次\n      ")]),e._v(" "),n("a-select-option",{attrs:{value:"DESC"}},[e._v("\n        由高至低\n      ")]),e._v(" "),n("a-select-option",{attrs:{value:"ASC"}},[e._v("\n        由低至高\n      ")])],1)],1),e._v(" "),n("a-form-model-item",[n("a-select",{staticStyle:{width:"120px"},model:{value:e.form.itemType,callback:function(t){e.$set(e.form,"itemType",t)},expression:"form.itemType"}},[n("a-select-option",{attrs:{value:""}},[e._v("题型分类")]),e._v(" "),e._l(e.itemTypes,(function(t,a){return n("a-select-option",{key:a,attrs:{value:t.value}},[e._v("\n        "+e._s(t.name)+"\n      ")])}))],2)],1),e._v(" "),n("a-form-model-item",[n("a-input",{attrs:{placeholder:"请输入题目关键字",allowClear:""},model:{value:e.form.itemTitle,callback:function(t){e.$set(e.form,"itemTitle",t)},expression:"form.itemTitle"}})],1),e._v(" "),n("a-form-model-item",[n("a-button",{attrs:{type:"primary"},on:{click:e.onSearch}},[e._v("搜索")])],1)],1)}),[],!1,null,null,null).exports,g=n(1850),v=n(1845),y={name:"ViewDetailsModal",components:{DetailTable:g.a,Question:v.a},props:{visible:{type:Boolean,required:!0},targetType:{type:String,required:!0},targetId:{type:String,required:!0},currentId:{type:String,required:!0},currentOrder:{type:Number,required:!0},searchParams:{}},data:function(){return{answerDetails:[],question:{},pagination:{hideOnSinglePage:!0,current:1,total:0},loading:!1}},created:function(){this.fetchWrongQuestionDetail()},methods:{fetchWrongQuestionDetail:function(){var e=this;return c()(r.a.mark((function t(){var n,a,i,s,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,n={query:{itemId:e.currentId,targetType:e.targetType},params:o()({targetId:e.targetId,offset:10*(e.pagination.current-1),limit:10},e.searchParams)},t.next=4,l.Q.get(n);case 4:a=t.sent,i=a.data,s=a.item,c=a.paging,e.loading=!1,e.answerDetails=i,e.question=s,e.pagination.total=Number(c.total);case 12:case"end":return t.stop()}}),t)})))()},handleTableChange:function(e){this.pagination.current=e.current,this.fetchWrongQuestionDetail()},handleCancel:function(){this.$emit("event-communication",{type:"modal-cancel"})},eventCommunication:function(e){var t=e.type,n=e.data;"pagination"===t&&this.handleTableChange(n)}}},w=Object(f.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-modal",{attrs:{title:"详情",width:"900px",visible:e.visible,footer:null},on:{cancel:e.handleCancel}},[n("question",{attrs:{question:e.question,order:e.currentOrder}}),e._v(" "),n("detail-table",{attrs:{data:e.answerDetails,loading:e.loading,pagination:e.pagination},on:{"event-communication":e.eventCommunication}})],1)}),[],!1,null,null,null).exports,_=[{title:"",dataIndex:"order",width:"10%",scopedSlots:{customRender:"order"}},{title:"题目",dataIndex:"itemTitle",width:"30%",scopedSlots:{customRender:"itemTitle"}},{title:"名称",dataIndex:"sourceName",width:"15%",scopedSlots:{customRender:"sourceName"}},{title:"来源",dataIndex:"sourceType",width:"20%",scopedSlots:{customRender:"sourceType"}},{title:"答错人次",dataIndex:"wrong_times",width:"15%"},{title:"操作",width:"10%",scopedSlots:{customRender:"actions"}}],T={name:"WrongQuestionTable",props:{data:{type:Array,required:!0},pagination:{type:Object,required:!0},loading:{type:Boolean,required:!0}},data:function(){return{columns:_,sources:{testpaper:"试卷练习",homework:"作业任务",exercise:"练习任务",chapter:"章节练习",wrong_question_exercise:"错题练习"}}},methods:{formateQuestionStem:function(e){var t=/\[\[\]\]/g;if(!e.match(t))return e;var n=1;return e.replace(t,(function(){return'<span class="stem-fill-blank ph16">('.concat(n++,")</span>")}))},formateQuestionSource:function(e){var t=this,n=d.a.map(e,(function(e){return t.sources[e]}));return d.a.join(n,"、")},handleTableChange:function(e){this.$emit("event-communication",{type:"pagination",data:e})},handleClickViewDetails:function(e,t){this.$emit("event-communication",{type:"view-detail",data:{id:e,order:t}})}}},x=(n(1921),{name:"ItemBankExerciseManageWrongQuestion",components:{Search:h,ViewDetailModal:w,StudentWrongQuestionTable:Object(f.a)(T,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-table",{attrs:{columns:e.columns,"row-key":function(e){return e.itemId},"data-source":e.data,pagination:e.pagination,loading:e.loading},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"order",fn:function(t,n,a){return[e._v("\n    "+e._s(10*(e.pagination.current-1)+a+1)+"\n  ")]}},{key:"itemTitle",fn:function(t){return[n("span",{staticClass:"stem",domProps:{innerHTML:e._s(e.formateQuestionStem(t))}})]}},{key:"sourceType",fn:function(t){return[e._v("\n    "+e._s(e.formateQuestionSource(t))+"\n  ")]}},{key:"sourceName",fn:function(t){return[e._v("\n    "+e._s(t.join("、"))+"\n  ")]}},{key:"actions",fn:function(t,a,r){return[n("a-button",{attrs:{type:"link"},on:{click:function(t){e.handleClickViewDetails(a.itemId,10*(e.pagination.current-1)+r+1)}}},[e._v("查看详情")])]}}])})}),[],!1,null,"7827b9cb",null).exports},data:function(){return{targetType:"exercise",targetId:$(".js-item-bank-id").val(),pagination:{hideOnSinglePage:!0,current:1,total:0},loading:!1,wrongQuestionList:[],visible:!1,currentId:"0",currentOrder:0,searchParams:{}}},created:function(){this.fetchWrongQuestion()},methods:{onSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.pagination.current=1,this.searchParams=e,this.fetchWrongQuestion(e)},handleTableChange:function(e){this.pagination.current=e.current,this.fetchWrongQuestion(this.searchParams)},fetchWrongQuestion:function(){var e=arguments,t=this;return c()(r.a.mark((function n(){var a,i,s,c,u;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.length>0&&void 0!==e[0]?e[0]:{},t.loading=!0,i={query:{targetId:t.targetId,targetType:t.targetType},params:o()({offset:10*(t.pagination.current-1),limit:10},a)},n.next=5,l.P.get(i);case 5:s=n.sent,c=s.data,u=s.paging,t.loading=!1,t.wrongQuestionList=c,t.pagination.total=u.total;case 11:case"end":return n.stop()}}),n)})))()},handleClickViewDetails:function(e){this.currentId=e.id,this.currentOrder=e.order,this.visible=!0},eventCommunication:function(e){var t=e.type,n=e.data;"pagination"!==t?"view-detail"!==t?"modal-cancel"===t&&(this.visible=!1):this.handleClickViewDetails(n):this.handleTableChange(n)}}}),b=Object(f.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("search",{attrs:{"target-id":e.targetId},on:{"on-search":e.onSearch}}),e._v(" "),n("student-wrong-question-table",{staticClass:"mt24",attrs:{data:e.wrongQuestionList,pagination:e.pagination,loading:e.loading},on:{"event-communication":e.eventCommunication}}),e._v(" "),e.visible?n("view-detail-modal",{attrs:{visible:e.visible,"current-id":e.currentId,"current-order":e.currentOrder,"target-type":e.targetType,"target-id":e.targetId,"search-params":e.searchParams},on:{"event-communication":e.eventCommunication}}):e._e()],1)}),[],!1,null,null,null);t.default=b.exports},1753:function(e,t,n){},1921:function(e,t,n){"use strict";var a=n(1753);n.n(a).a}}]);