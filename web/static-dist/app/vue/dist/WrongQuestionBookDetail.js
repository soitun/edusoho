(window.webpackJsonp=window.webpackJsonp||[]).push([[442],{1646:function(t,e,n){"use strict";n.r(e);var o=n(122),s=n.n(o),r=n(128),a=n.n(r),i=n(87),c=n.n(i),u=n(86),l=n.n(u),p=n(88),d=n.n(p),m=n(47),f=n.n(m),h=n(1922),v=n.n(h),_=n(43),g=n.n(_),y=n(9),w=n.n(y),C=n(13),x=n.n(C),k=n(41),S=n.n(k),b=n(248),q={testpaper:"考试任务",homework:"作业任务",exercise:"练习任务"},T={filters:{sourceTitle:function(t){return q[t]}},props:{id:{type:String,required:!0}},data:function(){return{form:{courseId:"default",courseMediaType:"default",courseTaskId:"default",wrongTimesSort:"default"},conditions:{}}},created:function(){this.initSearchParams(),this.fetchWrongBookCondition()},methods:{initSearchParams:function(){var t=this,e=this.$route.query;S.a.forEach(e,(function(e,n){t.form[n]=e}))},getParams:function(t){var e=this.form,n=e.courseId,o=e.courseMediaType,s={query:{poolId:this.id},params:{}},r=s.params;return"plan"===t&&(S.a.assign(this.form,{courseMediaType:"default",courseTaskId:"default"}),"default"!==n&&(r.courseId=n)),"source"===t&&(S.a.assign(this.form,{courseTaskId:"default"}),"default"!==o&&(r.courseMediaType=o),"default"!==n&&(r.courseId=n)),s},fetchWrongBookCondition:function(t){var e=this;return x()(w.a.mark((function n(){var o,s;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.getParams(t),n.next=3,b.M.get(o);case 3:s=n.sent,S.a.forEach(s.plans,(function(t,e){t.title||s.plans.splice(e,1)})),e.conditions=s,e.$emit("set-title",s.title);case 7:case"end":return n.stop()}}),n)})))()},handleChange:function(t,e){this.fetchWrongBookCondition(e)},filterOption:function(t,e){return e.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0},handleSubmit:function(){var t=this,e={};S.a.forEach(S.a.keys(this.form),(function(n){var o=t.form[n];"default"!=o&&(e[n]=o)})),this.$emit("on-search",e)}}},I=n(36),$=Object(I.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-form-model",{attrs:{model:t.form,layout:"inline"}},[n("a-form-model-item",[n("a-select",{staticStyle:{width:"120px"},attrs:{"show-search":"","option-filter-prop":"children","filter-option":t.filterOption,notFoundContent:"暂无数据"},on:{change:function(e){return t.handleChange(e,"plan")}},model:{value:t.form.courseId,callback:function(e){t.$set(t.form,"courseId",e)},expression:"form.courseId"}},[n("a-select-option",{attrs:{value:"default"}},[t._v("全部计划")]),t._v(" "),t._l(t.conditions.plans,(function(e){return n("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v("\n        "+t._s(e.title)+"\n      ")])}))],2)],1),t._v(" "),n("a-form-model-item",[n("a-select",{staticStyle:{width:"120px"},attrs:{"show-search":"","option-filter-prop":"children","filter-option":t.filterOption,notFoundContent:"暂无数据"},on:{change:function(e){return t.handleChange(e,"source")}},model:{value:t.form.courseMediaType,callback:function(e){t.$set(t.form,"courseMediaType",e)},expression:"form.courseMediaType"}},[n("a-select-option",{attrs:{value:"default"}},[t._v("题目来源")]),t._v(" "),t._l(t.conditions.source,(function(e){return n("a-select-option",{key:e,attrs:{value:e}},[t._v("\n        "+t._s(t._f("sourceTitle")(e))+"\n      ")])}))],2)],1),t._v(" "),n("a-form-model-item",[n("a-select",{staticStyle:{width:"120px"},attrs:{"show-search":"","option-filter-prop":"children","filter-option":t.filterOption,notFoundContent:"暂无数据"},model:{value:t.form.courseTaskId,callback:function(e){t.$set(t.form,"courseTaskId",e)},expression:"form.courseTaskId"}},[n("a-select-option",{attrs:{value:"default"}},[t._v("任务名称")]),t._v(" "),t._l(t.conditions.tasks,(function(e){return n("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v("\n        "+t._s(e.title)+"\n      ")])}))],2)],1),t._v(" "),n("a-form-model-item",[n("a-select",{staticStyle:{width:"120px"},model:{value:t.form.wrongTimesSort,callback:function(e){t.$set(t.form,"wrongTimesSort",e)},expression:"form.wrongTimesSort"}},[n("a-select-option",{attrs:{value:"default"}},[t._v("\n        做错频次\n      ")]),t._v(" "),n("a-select-option",{attrs:{value:"DESC"}},[t._v("\n        由高至低\n      ")]),t._v(" "),n("a-select-option",{attrs:{value:"ASC"}},[t._v("\n        由低至高\n      ")])],1)],1),t._v(" "),n("a-form-model-item",[n("a-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("搜索")])],1)],1)}),[],!1,null,null,null).exports,O={testpaper:"考试任务",homework:"作业任务",exercise:"练习任务"},M={filters:{sourceTitle:function(t){return O[t]}},props:{id:{type:String,required:!0}},data:function(){return{form:{classroomCourseSetId:"default",classroomMediaType:"default",classroomTaskId:"default",wrongTimesSort:"default"},conditions:{}}},created:function(){this.initSearchParams(),this.fetchWrongBookCondition()},methods:{initSearchParams:function(){var t=this,e=this.$route.query;S.a.forEach(e,(function(e,n){t.form[n]=e}))},getParams:function(t){var e=this.form,n=e.classroomCourseSetId,o=e.classroomMediaType,s={query:{poolId:this.id},params:{}},r=s.params;return"classroomCourseSetId"===t&&(S.a.assign(this.form,{classroomMediaType:"default",classroomTaskId:"default"}),"default"!==n&&(r.classroomCourseSetId=n)),"classroomMediaType"===t&&(S.a.assign(this.form,{classroomTaskId:"default"}),"default"!==o&&(r.classroomMediaType=o),"default"!==n&&(r.classroomCourseSetId=n)),s},fetchWrongBookCondition:function(t){var e=this;return x()(w.a.mark((function n(){var o,s;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.getParams(t),n.next=3,b.M.get(o);case 3:s=n.sent,e.conditions=s,e.$emit("set-title",s.title);case 6:case"end":return n.stop()}}),n)})))()},handleChange:function(t,e){this.fetchWrongBookCondition(e)},filterOption:function(t,e){return e.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0},handleSubmit:function(){var t=this,e={};S.a.forEach(S.a.keys(this.form),(function(n){var o=t.form[n];"default"!=o&&(e[n]=o)})),this.$emit("on-search",e)}}},E=Object(I.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-form-model",{attrs:{model:t.form,layout:"inline"}},[n("a-form-model-item",[n("a-select",{staticStyle:{width:"120px"},attrs:{"show-search":"","option-filter-prop":"children","filter-option":t.filterOption,notFoundContent:"暂无数据"},on:{change:function(e){return t.handleChange(e,"classroomCourseSetId")}},model:{value:t.form.classroomCourseSetId,callback:function(e){t.$set(t.form,"classroomCourseSetId",e)},expression:"form.classroomCourseSetId"}},[n("a-select-option",{attrs:{value:"default"}},[t._v("全部课程")]),t._v(" "),t._l(t.conditions.courseSets,(function(e){return n("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v("\n        "+t._s(e.title)+"\n      ")])}))],2)],1),t._v(" "),n("a-form-model-item",[n("a-select",{staticStyle:{width:"120px"},attrs:{"show-search":"","option-filter-prop":"children","filter-option":t.filterOption,notFoundContent:"暂无数据"},on:{change:function(e){return t.handleChange(e,"classroomMediaType")}},model:{value:t.form.classroomMediaType,callback:function(e){t.$set(t.form,"classroomMediaType",e)},expression:"form.classroomMediaType"}},[n("a-select-option",{attrs:{value:"default"}},[t._v("题目来源")]),t._v(" "),t._l(t.conditions.mediaTypes,(function(e){return n("a-select-option",{key:e,attrs:{value:e}},[t._v("\n        "+t._s(t._f("sourceTitle")(e))+"\n      ")])}))],2)],1),t._v(" "),n("a-form-model-item",[n("a-select",{staticStyle:{width:"120px"},attrs:{"show-search":"","option-filter-prop":"children","filter-option":t.filterOption,notFoundContent:"暂无数据"},model:{value:t.form.classroomTaskId,callback:function(e){t.$set(t.form,"classroomTaskId",e)},expression:"form.classroomTaskId"}},[n("a-select-option",{attrs:{value:"default"}},[t._v("任务名称")]),t._v(" "),t._l(t.conditions.tasks,(function(e){return n("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v("\n        "+t._s(e.title)+"\n      ")])}))],2)],1),t._v(" "),n("a-form-model-item",[n("a-select",{staticStyle:{width:"120px"},model:{value:t.form.wrongTimesSort,callback:function(e){t.$set(t.form,"wrongTimesSort",e)},expression:"form.wrongTimesSort"}},[n("a-select-option",{attrs:{value:"default"}},[t._v("\n        做错频次\n      ")]),t._v(" "),n("a-select-option",{attrs:{value:"DESC"}},[t._v("\n        由高至低\n      ")]),t._v(" "),n("a-select-option",{attrs:{value:"ASC"}},[t._v("\n        由低至高\n      ")])],1)],1),t._v(" "),n("a-form-model-item",[n("a-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("搜索")])],1)],1)}),[],!1,null,null,null).exports,j={chapter:"章节练习",testpaper:"试卷练习"},N={filters:{sourceTitle:function(t){return j[t]}},props:{id:{type:String,required:!0}},data:function(){return{form:{chapterId:"default",exerciseMediaType:"chapter",testpaperId:"default",wrongTimesSort:"default"},conditions:{}}},created:function(){this.initSearchParams(),this.fetchWrongBookCondition()},methods:{initSearchParams:function(){var t=this,e=this.$route.query;S.a.forEach(e,(function(e,n){t.form[n]=e}))},getParams:function(t){var e=this.form,n=e.exerciseMediaType,o=(e.testpaperId,e.chapterId,{query:{poolId:this.id},params:{}}),s=o.params;return null==t&&S.a.assign(s,this.form),"exerciseMediaType"===t&&("chapter"===n?S.a.assign(this.form,{chapterId:"default"}):"testpaper"===n&&S.a.assign(this.form,{testpaperId:"default"}),"default"!==n&&(s.exerciseMediaType=n)),o},fetchWrongBookCondition:function(t){var e=this;return x()(w.a.mark((function n(){var o,s;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.getParams(t),n.next=3,b.M.get(o);case 3:(s=n.sent).chapter=[{id:"default",name:"全部章节"}].concat(s.chapter),s.testpapers=s.testpaper,e.$emit("set-title",s.title),e.conditions=s;case 8:case"end":return n.stop()}}),n)})))()},handleChange:function(t,e){this.fetchWrongBookCondition(e)},filterOption:function(t,e){return e.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0},handleSubmit:function(){var t=this,e={};S.a.forEach(S.a.keys(this.form),(function(n){var o=t.form[n];"default"!=o&&(e[n]=o)})),this.$emit("on-search",e)}}},P=Object(I.a)(N,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-form-model",{attrs:{model:t.form,layout:"inline"}},[n("a-form-model-item",[n("a-select",{staticStyle:{width:"120px"},attrs:{"show-search":"","option-filter-prop":"children","filter-option":t.filterOption,notFoundContent:"暂无数据"},on:{change:function(e){return t.handleChange(e,"exerciseMediaType")}},model:{value:t.form.exerciseMediaType,callback:function(e){t.$set(t.form,"exerciseMediaType",e)},expression:"form.exerciseMediaType"}},t._l(["chapter","testpaper"],(function(e){return n("a-select-option",{key:e,attrs:{value:e}},[t._v("\n        "+t._s(t._f("sourceTitle")(e))+"\n      ")])})),1)],1),t._v(" "),"testpaper"===t.form.exerciseMediaType?n("a-form-model-item",[n("a-select",{staticStyle:{width:"120px"},attrs:{"show-search":"","option-filter-prop":"children","filter-option":t.filterOption,notFoundContent:"暂无数据"},model:{value:t.form.testpaperId,callback:function(e){t.$set(t.form,"testpaperId",e)},expression:"form.testpaperId"}},[n("a-select-option",{attrs:{value:"default"}},[t._v("全部试卷")]),t._v(" "),t._l(t.conditions.testpapers,(function(e){return n("a-select-option",{key:e.assessmentId,attrs:{value:e.assessmentId}},[t._v("\n        "+t._s(e.assessmentName)+"\n      ")])}))],2)],1):t._e(),t._v(" "),"chapter"===t.form.exerciseMediaType?n("a-form-model-item",[n("a-tree-select",{staticStyle:{"min-width":"120px"},attrs:{notFoundContent:"暂无数据","dropdown-style":{maxHeight:"400px",overflow:"auto"},"tree-data":t.conditions.chapter,placeholder:"全部章节","replace-fields":{title:"name",key:"id",value:"id",children:"children"},"tree-default-expand-all":""},model:{value:t.form.chapterId,callback:function(e){t.$set(t.form,"chapterId",e)},expression:"form.chapterId"}})],1):t._e(),t._v(" "),n("a-form-model-item",[n("a-select",{staticStyle:{width:"120px"},model:{value:t.form.wrongTimesSort,callback:function(e){t.$set(t.form,"wrongTimesSort",e)},expression:"form.wrongTimesSort"}},[n("a-select-option",{attrs:{value:"default"}},[t._v("\n        做错频次\n      ")]),t._v(" "),n("a-select-option",{attrs:{value:"DESC"}},[t._v("\n        由高至低\n      ")]),t._v(" "),n("a-select-option",{attrs:{value:"ASC"}},[t._v("\n        由低至高\n      ")])],1)],1),t._v(" "),n("a-form-model-item",[n("a-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("搜索")])],1)],1)}),[],!1,null,null,null).exports,B=n(1851),W=n(1852),L={props:{question:{type:Object,required:!0}},computed:{answerResult:function(){var t=this.question.questions[0],e=t.answer,n=t.answer_mode,o=t.report.response;if("true_false"===n&&(o=S.a.map(o,(function(t){return"T"===t?"正确":"错误"}))),"text"===n){var s="";return S.a.forEach(e,(function(t,e){s+="<div>填空(".concat(e+1,')：正确答案：<span class="success">').concat(t,'</span>， 你的答案：<span class="danger">').concat(o.length>0?o[e]:"未作答","</span></div>")})),s}return'你的答案是<span class="danger"> '.concat(S.a.join(o,"、")," </span>, 你答错了。")}}},Q=(n(1925),Object(I.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix answer-result"},[n("div",{staticClass:"pull-left answer-result-label"},[t._v("答题结果：")]),t._v(" "),n("div",{staticClass:"pull-left answer-result-content",domProps:{innerHTML:t._s(t.answerResult)}})])}),[],!1,null,"e48cc6fe",null).exports),A=n(1853),F={props:{question:{type:Object,required:!0}},computed:{source:function(){return this.question.sources.join("、")}}},H=(n(1926),Object(I.a)(F,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix situation"},[n("div",{staticClass:"pull-left source"},[t._v("来源："+t._s(t.source))]),t._v(" "),n("div",{staticClass:"pull-right clearfix situation-right"},[n("div",{staticClass:"pull-left frequency"},[t._v("\n      做错频次：\n      "),n("span",{staticClass:"frequency-error"},[t._v(t._s(t.question.wrong_times))]),t._v("次\n    ")]),t._v(" "),n("div",{staticClass:"pull-left time"},[t._v("错题时间："+t._s(t.$dateFormat(t.question.submit_time,"YYYY-MM-DD HH:mm:ss")))])])])}),[],!1,null,"02b77aca",null).exports),V={name:"question-layout",components:{Stem:B.a,RightAnswer:W.a,AnswerResult:Q,Analysis:A.a,Situation:H},props:{question:{type:Object,required:!0},order:{type:Number,required:!0}},computed:{questions:function(){return this.question.questions[0]}}},D=(n(1927),{components:{Layout:Object(I.a)(V,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"question-layout",attrs:{order:t.order}},[n("stem",{attrs:{order:t.order,stem:t.questions.stem}}),t._v(" "),n("div",{staticClass:"prevent-click answer-content"},[t._t("answer")],2),t._v(" "),"text"!==t.questions.answer_mode?n("a-divider",{staticStyle:{margin:"16px 0"}}):t._e(),t._v(" "),"text"!==t.questions.answer_mode?n("right-answer",{attrs:{question:t.question}}):t._e(),t._v(" "),n("answer-result",{attrs:{question:t.question}}),t._v(" "),n("analysis",{attrs:{analysis:t.questions.analysis}}),t._v(" "),n("situation",{attrs:{question:t.question}})],1)}),[],!1,null,null,null).exports},props:{question:{type:Object,required:!0},order:{type:Number,required:!0}},computed:{questions:function(){return this.question.questions[0]}},methods:{getAnswerClass:function(t){var e=this.questions,n=e.answer,o=e.report.response;return S.a.includes(S.a.difference(n,o),t)?"right-answer":S.a.includes(S.a.difference(o,n),t)?"choose-answer--wrong":S.a.includes(S.a.intersection(n,o),t)?"choose-answer--right":void 0}}}),z={name:"SingleChoice",mixins:[D]},J=Object(I.a)(z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout",{attrs:{question:t.question,order:t.order},scopedSlots:t._u([{key:"answer",fn:function(){return[n("a-radio-group",{attrs:{"default-value":t.questions.report.response[0]}},t._l(t.questions.response_points,(function(e,o){return n("a-radio",{key:o,class:["choose-answer",t.getAnswerClass(e.radio.val)],attrs:{value:e.radio.val}},[n("div",{staticClass:"choose-answer-content"},[n("span",[t._v(t._s(e.radio.val)+".")]),t._v(" "),n("span",{staticClass:"choose-answer-text",domProps:{innerHTML:t._s(e.radio.text)}})])])})),1)]},proxy:!0}])})}),[],!1,null,null,null).exports,R={name:"Choice",mixins:[D]},Y=Object(I.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout",{attrs:{question:t.question,order:t.order},scopedSlots:t._u([{key:"answer",fn:function(){return[n("a-checkbox-group",{attrs:{"default-value":t.questions.report.response}},t._l(t.questions.response_points,(function(e,o){return n("a-checkbox",{key:o,class:["choose-answer",t.getAnswerClass(e.checkbox.val)],attrs:{value:e.checkbox.val}},[n("div",{staticClass:"choose-answer-content"},[n("span",[t._v(t._s(e.checkbox.val)+".")]),t._v(" "),n("span",{staticClass:"choose-answer-text",domProps:{innerHTML:t._s(e.checkbox.text)}})])])})),1)]},proxy:!0}])})}),[],!1,null,null,null).exports,G={name:"Judge",mixins:[D]},K=Object(I.a)(G,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout",{attrs:{question:t.question,order:t.order},scopedSlots:t._u([{key:"answer",fn:function(){return[n("a-radio-group",{attrs:{"default-value":t.questions.report.response[0]}},t._l(t.questions.response_points,(function(e,o){return n("a-radio",{key:o,class:["choose-answer",t.getAnswerClass(e.radio.val)],attrs:{value:e.radio.val}},[n("div",{staticClass:"choose-answer-content"},[n("span",{staticClass:"choose-answer-text",domProps:{innerHTML:t._s(e.radio.text)}})])])})),1)]},proxy:!0}])})}),[],!1,null,null,null).exports,U={name:"Fill",mixins:[D]},X=Object(I.a)(U,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("layout",{attrs:{question:t.question,order:t.order}})}),[],!1,null,null,null).exports,Z=n(1703),tt=n(2008);function et(t,e){var n=f()(t);if(d.a){var o=d()(t);e&&(o=o.filter((function(e){return l()(t,e).enumerable}))),n.push.apply(n,o)}return n}function nt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?et(Object(n),!0).forEach((function(e){g()(t,e,n[e])})):c.a?a()(t,c()(n)):et(Object(n)).forEach((function(e){s()(t,e,l()(n,e))}))}return t}var ot={name:"WrongQuestionDetail",components:{CourseScreen:$,ClassroomScreen:E,QuestionBankScreen:P,SingleChoice:J,Choice:Y,Judge:K,Fill:X,Empty:Z.a},data:function(){return{title:"",targetType:this.$route.params.target_type,targetId:this.$route.params.target_id,questionList:[],searchParams:this.$route.query,loading:!1,pagination:{current:1,pageSize:20},questionComponents:{single_choice:"SingleChoice",choice:"Choice",uncertain_choice:"Choice",true_false:"Judge",text:"Fill"},screenComponents:{course:"CourseScreen",classroom:"ClassroomScreen",exercise:"QuestionBankScreen"},visible:!1,modeValue:"A",itemNum:1,wrongNumCount:null}},computed:{currentScreenComponent:function(){return this.screenComponents[this.targetType]}},created:function(){this.fetchWrongBookQuestion(),this.getWrongBook_pool()},methods:{changeInput:function(){/^[0-9]+$/.test(this.itemNum)||(this.itemNum=this.itemNum.replace(/[^\d]/g,"")),this.itemNum>this.wrongNumCount&&(this.itemNum=this.wrongNumCount),this.itemNum<0&&(this.itemNum=1)},blurInput:function(){""===this.itemNum&&(this.itemNum=1)},getWrongBook_pool:function(){var t=this;return x()(w.a.mark((function e(){var n,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{targetType:t.targetType},query:{poolId:t.targetId}},e.next=3,b.R.get(n);case 3:o=e.sent,t.wrongNumCount=o.wrongNumCount;case 5:case"end":return e.stop()}}),e)})))()},fetchWrongBookQuestion:function(){var t=this;return x()(w.a.mark((function e(){var n,o,s,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.questionList=[],t.loading=!0,n={params:nt({targetType:t.targetType,offset:20*(t.pagination.current-1),limit:20},t.searchParams),query:{poolId:t.targetId}},e.next=5,b.N.search(n);case 5:o=e.sent,s=o.paging,r=o.data,t.pagination.total=Number(s.total),t.loading=!1,t.questionList=r;case 11:case"end":return e.stop()}}),e)})))()},currentQuestionComponent:function(t){return this.questionComponents[t]},handleClickWrongExercises:function(){this.visible=!0},goToWrongExercises:function(){if(0==this.itemNum&&"B"===this.modeValue)return tt.a.warning("答题数不能为0");this.visible=!1,"B"===this.modeValue?window.location.href=window.location.origin+"/wrong_question_book/pool/".concat(this.$route.params.target_id,"/practise")+this.makeQuery(nt({targetType:this.targetType,itemNum:this.itemNum},this.searchParams)):window.location.href=window.location.origin+"/wrong_question_book/pool/".concat(this.$route.params.target_id,"/practise")+this.makeQuery(nt({targetType:this.targetType},this.searchParams))},makeQuery:function(t){var e=v()(t).reduce((function(t,e){return t.push(e.join("=")),t}),[]).join("&");return"?".concat(e)},onSearch:function(t){this.judgeSearchParamsChange(t)&&(this.resetQuery(t),this.searchParams=t,this.pagination.current=1,this.fetchWrongBookQuestion())},setTitle:function(t){this.title=t},judgeSearchParamsChange:function(t){var e=this;if(S.a.size(t)!=S.a.size(this.searchParams))return!0;var n=!1;return S.a.forEach(t,(function(t,o){t!=e.searchParams[o]&&(n=!0)})),n},resetQuery:function(t){this.$router.push({query:t})},onChange:function(){this.fetchWrongBookQuestion()}}},st=(n(1928),Object(I.a)(ot,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrong-question-detail",attrs:{id:"app"}},[n("div",{staticClass:"clearfix mb12"},[n("h3",{staticClass:"wrong-question-detail-title pull-left text-overflow mb0"},[t._v("\n      "+t._s(t._f("formatHtml")(t.title))+"\n    ")]),t._v(" "),n("a-button",{staticClass:"pull-right",attrs:{type:"primary",disabled:t.pagination.total<=0},on:{click:t.handleClickWrongExercises}},[t._v("\n      错题练习\n    ")])],1),t._v(" "),n(t.currentScreenComponent,{tag:"component",attrs:{id:t.targetId},on:{"on-search":t.onSearch,"set-title":t.setTitle}}),t._v(" "),t._l(t.questionList,(function(e,o){return[n(t.currentQuestionComponent(e.questions[0].answer_mode),{key:e.id+o,tag:"component",attrs:{question:e,order:20*(t.pagination.current-1)+o+1}})]})),t._v(" "),t.loading?n("div",{staticClass:"text-center mt20",staticStyle:{height:"200px"}},[n("a-spin",{staticStyle:{"padding-top":"100px"}})],1):t._e(),t._v(" "),t.loading||t.questionList.length?t._e():n("empty"),t._v(" "),n("a-pagination",{staticClass:"text-center mt48",attrs:{"hide-on-single-page":!0,total:t.pagination.total,"page-size":t.pagination.pageSize},on:{change:t.onChange},model:{value:t.pagination.current,callback:function(e){t.$set(t.pagination,"current",e)},expression:"pagination.current"}}),t._v(" "),n("a-modal",{attrs:{title:"错题练习",width:"446px","ok-text":"开始答题","cancel-text":"取消",visible:t.visible},on:{cancel:function(e){t.visible=!1},ok:t.goToWrongExercises}},[n("div",[t._v("\n      展示数量：\n      "),n("a-radio-group",{attrs:{name:"radioGroup"},model:{value:t.modeValue,callback:function(e){t.modeValue=e},expression:"modeValue"}},[n("a-radio",{staticClass:"font-normal",attrs:{value:"A"}},[t._v(t._s(Math.min(t.wrongNumCount,20))+"题")]),t._v(" "),n("a-radio",{staticClass:"font-normal",attrs:{value:"B"}},[t._v("自定义")])],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"B"===t.modeValue,expression:"modeValue === 'B'"}]},[n("div",[n("a-input",{staticClass:"item-num",attrs:{type:"number"},on:{input:t.changeInput,blur:t.blurInput},model:{value:t.itemNum,callback:function(e){t.itemNum=e},expression:"itemNum"}}),t._v("题\n        ")],1),t._v(" "),n("div",{staticClass:"item-num-tip"},[t._v("\n          可输入范围：1≤题目数量≤单个错题本全部错题\n        ")])])],1)])],2)}),[],!1,null,"89b39314",null));e.default=st.exports},1692:function(t,e,n){},1703:function(t,e,n){"use strict";var o={name:"Empty",props:{description:{type:String,default:"暂无数据"},image:{type:String,default:"/static-dist/app/img/vue/empty.png"},imageStyle:{type:Object,default:function(){return{height:"200px"}}}}},s=(n(1704),n(36)),r=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-empty",{staticClass:"custom-empty",attrs:{image:t.image,"image-style":t.imageStyle}},[n("span",{staticClass:"custom-empty__description",attrs:{slot:"description"},slot:"description"},[t._v(t._s(t.description))])])}),[],!1,null,null,null);e.a=r.exports},1704:function(t,e,n){"use strict";var o=n(1692);n.n(o).a},1710:function(t,e,n){},1711:function(t,e,n){},1712:function(t,e,n){},1744:function(t,e,n){"use strict";var o=n(1710);n.n(o).a},1745:function(t,e,n){"use strict";var o=n(1711);n.n(o).a},1746:function(t,e,n){"use strict";var o=n(1712);n.n(o).a},1754:function(t,e,n){},1755:function(t,e,n){},1756:function(t,e,n){},1757:function(t,e,n){},1851:function(t,e,n){"use strict";var o={props:{order:{type:[String,Number],required:!0},stem:{type:String,required:!0}},computed:{formateQuestionStem:function(){var t=this.stem,e=/\[\[\]\]/g;if(!t.match(e))return t;var n=1;return t.replace(e,(function(){return'<span class="stem-fill-blank ph16">('.concat(n++,")</span>")}))}}},s=(n(1744),n(36)),r=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stem"},[n("div",{staticClass:"stem-order"},[t._v(t._s(t.order))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.formateQuestionStem)}})])}),[],!1,null,"dd9b75e0",null);e.a=r.exports},1852:function(t,e,n){"use strict";var o=n(41),s=n.n(o),r={props:{question:{type:Object,required:!0}},computed:{rightAnswer:function(){var t=this.question.questions[0],e=t.answer;return"true_false"===t.answer_mode&&(e=s.a.map(e,(function(t){return"T"===t?"正确":"错误"}))),'<span class="success">'.concat(s.a.join(e,"、"),"<span>")}}},a=(n(1745),n(36)),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix right-answer"},[n("div",{staticClass:"pull-left right-answer-label"},[t._v("正确答案：")]),t._v(" "),n("div",{staticClass:"pull-left right-answer-content",domProps:{innerHTML:t._s(t.rightAnswer)}})])}),[],!1,null,"4375d75c",null);e.a=i.exports},1853:function(t,e,n){"use strict";var o={props:{analysis:{type:String,required:!0}}},s=(n(1746),n(36)),r=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix analysis"},[n("div",{staticClass:"pull-left analysis-label"},[t._v("解析：")]),t._v(" "),n("div",{staticClass:"pull-left analysis-content",domProps:{innerHTML:t._s(t.analysis||"无解析")}})])}),[],!1,null,"54931e0e",null);e.a=r.exports},1925:function(t,e,n){"use strict";var o=n(1754);n.n(o).a},1926:function(t,e,n){"use strict";var o=n(1755);n.n(o).a},1927:function(t,e,n){"use strict";var o=n(1756);n.n(o).a},1928:function(t,e,n){"use strict";var o=n(1757);n.n(o).a}}]);