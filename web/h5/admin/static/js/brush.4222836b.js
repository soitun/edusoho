(window.webpackJsonp=window.webpackJsonp||[]).push([["brush"],{1169:function(e,t,s){var r=s("2d95");e.exports=Array.isArray||function(e){return"Array"==r(e)}},"1c4c":function(e,t,s){"use strict";var r=s("9b43"),n=s("5ca1"),o=s("4bf8"),i=s("1fa8"),a=s("33a4"),c=s("9def"),u=s("f1ae"),d=s("27ee");n(n.S+n.F*!s("5cc5")((function(e){Array.from(e)})),"Array",{from:function(e){var t,s,n,f,h=o(e),l="function"==typeof this?this:Array,p=arguments.length,m=p>1?arguments[1]:void 0,g=void 0!==m,w=0,v=d(h);if(g&&(m=r(m,p>2?arguments[2]:void 0,2)),void 0==v||l==Array&&a(v))for(s=new l(t=c(h.length));t>w;w++)u(s,w,g?m(h[w],w):h[w]);else for(f=v.call(h),s=new l;!(n=f.next()).done;w++)u(s,w,g?i(f,m,[n.value,w],!0):n.value);return s.length=w,s}})},"36bd":function(e,t,s){"use strict";var r=s("4bf8"),n=s("77f1"),o=s("9def");e.exports=function(e){for(var t=r(this),s=o(t.length),i=arguments.length,a=n(i>1?arguments[1]:void 0,s),c=i>2?arguments[2]:void 0,u=void 0===c?s:n(c,s);u>a;)t[a++]=e;return t}},"37c8":function(e,t,s){t.f=s("2b4c")},"3a72":function(e,t,s){var r=s("7726"),n=s("8378"),o=s("2d00"),i=s("37c8"),a=s("86cc").f;e.exports=function(e){var t=n.Symbol||(n.Symbol=o?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||a(t,e,{value:i.f(e)})}},"3b28":function(e,t,s){"use strict";s.r(t),s("8e6e"),s("ac6a"),s("456d"),s("a481"),s("c5f6");var r=s("bd86"),n=s("3ce7"),o=s("2f62"),i=s("faa5"),a=s("a556");function c(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function u(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?c(Object(s),!0).forEach((function(t){Object(r.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var d={components:{},data:function(){return{isLoading:!0,assessment:{},answerScene:{},answerReport:{},answerRecord:{},height:0,exerciseModes:""}},computed:u(u({},Object(o.e)("ItemBank",{ItemBankExercise:function(e){return e.ItemBankExercise}})),{},{usedTime:function(){return this.answerRecord.used_time/60},isReadOver:function(){return"reviewing"===this.answerRecord.status},needScore:function(){return!!Number(this.answerScene.need_score)}}),watch:{},created:function(){this.getData()},methods:{getheight:function(){var e=document.body.clientHeight-46;return document.body.scrollHeight-46>e?document.body.scrollHeight:e},getData:function(){var e=this,t={answerRecordId:Number(this.$route.params.answerRecordId)};n.a.answerRecord({query:t}).then((function(t){e.exerciseModes=t.answer_record.exercise_mode,e.assessment=t.assessment,e.answerScene=t.answer_scene,e.answerReport=t.answer_report,e.answerRecord=t.answer_record,e.$store.commit(i.x,e.$route.query.title),e.isLoading=!1,e.$nextTick((function(){e.height=e.getheight()}))})).catch((function(t){e.isLoading=!1,e.$toast(t.message)}))},doReview:function(){var e={title:this.$route.query.title,type:this.$route.query.type,exerciseId:this.$route.query.exerciseId,assessmentId:this.$route.query.assessmentId,moduleId:this.$route.query.moduleId,categoryId:this.$route.query.categoryId},t=this.$route.params.answerRecordId;this.$router.push({path:"/brushReview/".concat(t),query:e})},doAgain:function(){var e;if("closed"!=(null===(e=this.ItemBankExercise)||void 0===e?void 0:e.status))if("assessment"===this.$route.query.type){var t=this.$route.query.type,s={mode:"start",title:this.$route.query.title,type:this.$route.query.type,exerciseId:this.$route.query.exerciseId,moduleId:this.$route.query.moduleId};"chapter"===t?s.categoryId=this.$route.query.categoryId:s.assessmentId=this.$route.query.assessmentId,this.$router.replace({path:"/brushDo",query:s})}else{var r={title:this.$route.query.title,moduleId:this.$route.query.moduleId,categoryId:this.$route.query.categoryId,exerciseId:this.$route.query.exerciseId};this.$router.push({path:"/brushIntro",query:r})}else Object(a.a)("exercise")},doAnalysis:function(){var e={title:this.$route.query.title,type:this.$route.query.type},t=this.$route.params.answerRecordId;this.$router.push({path:"/brushReport/".concat(t),query:e})}}},f=s("0c7c"),h=Object(f.a)(d,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"item-bank-result brush-exercise-report",style:{height:e.height+"px"}},[e.isLoading?s("e-loading"):e._e(),e.isReadOver&&"0"===e.exerciseModes?s("div",{staticClass:"notify"},[e._v("\n    ※请参考题目解析，对主观题自行估分批阅。\n  ")]):e._e(),s("div",{staticClass:"item-bank-result_content"},[e.isReadOver&&"0"===e.exerciseModes?s("div",{staticClass:"exercise-report-status"},[s("img",{attrs:{src:"static/images/report-review.png"}}),s("p",{staticClass:"result-text result-status_fail mt20"},[e._v("正在批阅中")])]):e._e(),s("div",{directives:[{name:"show",rawName:"v-show",value:e.needScore,expression:"needScore"}],staticClass:"result-score"},[e._v("\n      分数：\n      "),e.isReadOver&&"0"===e.exerciseModes?s("span",{staticClass:"result-status_fail"},[e._v("?")]):s("span",[e._v(e._s(e.answerReport.score)+"分")])]),s("div",{staticClass:"result-content"},[s("div",{staticClass:"result-content-item result-section-title"},[s("span",[e._v("题型")]),s("span",[e._v("答对题")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.needScore,expression:"needScore"}]},[e._v("总分")])]),e._l(e.answerReport.section_reports,(function(t,r){return s("div",{key:r,staticClass:"result-content-item"},[s("span",[e._v(e._s(t.section_name))]),s("span",[s("i",{staticClass:"color-primary"},[e._v(e._s(t.right_question_num))]),e._v("\n          / "+e._s(t.question_count)+"\n        ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.needScore,expression:"needScore"}],staticClass:"color-primary"},[t.reviewing_question_num>0&&e.isReadOver?s("i",{staticClass:"result-status_fail"},[e._v("?\n          ")]):s("i",[e._v(e._s(t.score))])])])}))],2),s("div",{staticClass:"result-footer"},[e.isReadOver&&"0"===e.exerciseModes?s("div",{staticClass:"result-footer__btn",on:{click:e.doReview}},[e._v("\n        开始批阅\n      ")]):[s("div",{staticClass:"result-footer__btn result-footer__btn-border",on:{click:e.doAgain}},[e._v("\n          再次答题\n        ")]),s("div",{staticClass:"result-footer__btn",on:{click:e.doAnalysis}},[e._v("查看解析")])]],2)])],1)}),[],!1,null,null,null);t.default=h.exports},4917:function(e,t,s){"use strict";var r=s("cb7c"),n=s("9def"),o=s("0390"),i=s("5f1b");s("214f")("match",1,(function(e,t,s,a){return[function(s){var r=e(this),n=void 0==s?void 0:s[t];return void 0!==n?n.call(s,r):new RegExp(s)[t](String(r))},function(e){var t=a(s,e,this);if(t.done)return t.value;var c=r(e),u=String(this);if(!c.global)return i(c,u);var d=c.unicode;c.lastIndex=0;for(var f,h=[],l=0;null!==(f=i(c,u));){var p=String(f[0]);h[l]=p,""===p&&(c.lastIndex=o(u,n(c.lastIndex),d)),l++}return 0===l?null:h}]}))},"6c7b":function(e,t,s){var r=s("5ca1");r(r.P,"Array",{fill:s("36bd")}),s("9c6c")("fill")},"7bbc":function(e,t,s){var r=s("6821"),n=s("9093").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return i&&"[object Window]"==o.call(e)?function(e){try{return n(e)}catch(e){return i.slice()}}(e):n(r(e))}},"8a81":function(e,t,s){"use strict";var r=s("7726"),n=s("69a8"),o=s("9e1e"),i=s("5ca1"),a=s("2aba"),c=s("67ab").KEY,u=s("79e5"),d=s("5537"),f=s("7f20"),h=s("ca5a"),l=s("2b4c"),p=s("37c8"),m=s("3a72"),g=s("d4c0"),w=s("1169"),v=s("cb7c"),y=s("d3f4"),b=s("4bf8"),_=s("6821"),I=s("6a99"),x=s("4630"),R=s("2aeb"),S=s("7bbc"),O=s("11e9"),q=s("2621"),$=s("86cc"),j=s("0d58"),k=O.f,P=$.f,D=S.f,E=r.Symbol,A=r.JSON,C=A&&A.stringify,L=l("_hidden"),T=l("toPrimitive"),M={}.propertyIsEnumerable,N=d("symbol-registry"),B=d("symbols"),F=d("op-symbols"),U=Object.prototype,J="function"==typeof E&&!!q.f,H=r.QObject,Q=!H||!H.prototype||!H.prototype.findChild,z=o&&u((function(){return 7!=R(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a}))?function(e,t,s){var r=k(U,t);r&&delete U[t],P(e,t,s),r&&e!==U&&P(U,t,r)}:P,W=function(e){var t=B[e]=R(E.prototype);return t._k=e,t},G=J&&"symbol"==typeof E.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof E},K=function(e,t,s){return e===U&&K(F,t,s),v(e),t=I(t,!0),v(s),n(B,t)?(s.enumerable?(n(e,L)&&e[L][t]&&(e[L][t]=!1),s=R(s,{enumerable:x(0,!1)})):(n(e,L)||P(e,L,x(1,{})),e[L][t]=!0),z(e,t,s)):P(e,t,s)},Y=function(e,t){v(e);for(var s,r=g(t=_(t)),n=0,o=r.length;o>n;)K(e,s=r[n++],t[s]);return e},V=function(e){var t=M.call(this,e=I(e,!0));return!(this===U&&n(B,e)&&!n(F,e))&&(!(t||!n(this,e)||!n(B,e)||n(this,L)&&this[L][e])||t)},X=function(e,t){if(e=_(e),t=I(t,!0),e!==U||!n(B,t)||n(F,t)){var s=k(e,t);return!s||!n(B,t)||n(e,L)&&e[L][t]||(s.enumerable=!0),s}},Z=function(e){for(var t,s=D(_(e)),r=[],o=0;s.length>o;)n(B,t=s[o++])||t==L||t==c||r.push(t);return r},ee=function(e){for(var t,s=e===U,r=D(s?F:_(e)),o=[],i=0;r.length>i;)!n(B,t=r[i++])||s&&!n(U,t)||o.push(B[t]);return o};J||(a((E=function(){if(this instanceof E)throw TypeError("Symbol is not a constructor!");var e=h(arguments.length>0?arguments[0]:void 0),t=function(s){this===U&&t.call(F,s),n(this,L)&&n(this[L],e)&&(this[L][e]=!1),z(this,e,x(1,s))};return o&&Q&&z(U,e,{configurable:!0,set:t}),W(e)}).prototype,"toString",(function(){return this._k})),O.f=X,$.f=K,s("9093").f=S.f=Z,s("52a7").f=V,q.f=ee,o&&!s("2d00")&&a(U,"propertyIsEnumerable",V,!0),p.f=function(e){return W(l(e))}),i(i.G+i.W+i.F*!J,{Symbol:E});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),se=0;te.length>se;)l(te[se++]);for(var re=j(l.store),ne=0;re.length>ne;)m(re[ne++]);i(i.S+i.F*!J,"Symbol",{for:function(e){return n(N,e+="")?N[e]:N[e]=E(e)},keyFor:function(e){if(!G(e))throw TypeError(e+" is not a symbol!");for(var t in N)if(N[t]===e)return t},useSetter:function(){Q=!0},useSimple:function(){Q=!1}}),i(i.S+i.F*!J,"Object",{create:function(e,t){return void 0===t?R(e):Y(R(e),t)},defineProperty:K,defineProperties:Y,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:ee});var oe=u((function(){q.f(1)}));i(i.S+i.F*oe,"Object",{getOwnPropertySymbols:function(e){return q.f(b(e))}}),A&&i(i.S+i.F*(!J||u((function(){var e=E();return"[null]"!=C([e])||"{}"!=C({a:e})||"{}"!=C(Object(e))}))),"JSON",{stringify:function(e){for(var t,s,r=[e],n=1;arguments.length>n;)r.push(arguments[n++]);if(s=t=r[1],(y(t)||void 0!==e)&&!G(e))return w(t)||(t=function(e,t){if("function"==typeof s&&(t=s.call(this,e,t)),!G(t))return t}),r[1]=t,C.apply(A,r)}}),E.prototype[T]||s("32e9")(E.prototype,T,E.prototype.valueOf),f(E,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},"8d5b":function(e,t,s){"use strict";s.r(t),s("8e6e"),s("ac6a"),s("456d"),s("e7e5");var r=s("d399"),n=(s("c5f6"),s("bd86")),o=s("3ce7"),i=s("2f62"),a=s("faa5"),c=s("fb44"),u=s("361b"),d=s("a8b4"),f=0,h=0,l=0,p=0,m={name:"item-review",mixins:[s("def6").a],components:{ibsItem:c.a,card:u.a,ibsFooter:d.a},props:{mode:{type:String,default:"review"},assessmentResponse:{type:Object,default:function(){}},answerScene:{type:Object,default:function(){}},answerRecord:{type:Object,default:function(){}},answerReport:{type:Object,default:function(){}},assessment:{type:Object,default:function(){}}},data:function(){return{section_responses:[],height:0,cardShow:!1,currentItemIndex:0,sourceMap:{},sections:[],question_reports:[],items:[],current:0,renderItmes:[],answerAttachments:{}}},provide:function(){return{itemEngine:this}},inject:["brushDo"],computed:{needScore:function(){return!!Number(this.answerScene.need_score)}},created:function(){this.$on("changeStatus",this.changeStatus),this.$on("changeScore",this.changeScore),this.resetDefaultData()},mounted:function(){this.setSwiperHeight(),this.getSectionResponses()},methods:{resetDefaultData:function(){f=0,h=0,l=0,p=0},slideTo:function(e){var t=this,s="item".concat(e.itemId);this.current=Math.max(this.sourceMap["item_".concat(e.itemId)].reviewIndex,0),this.changeRenderItems(this.current),this.fastSlide(),this.$nextTick((function(){var r=t.$refs[s][0].$refs["childSwiper".concat(e.itemId)],n=Math.max(t.sourceMap["question_".concat(e.questionId)].reviewIndex);r.$swiper.slideTo(n,0,!1)}))},getSectionResponses:function(){this.section_responses=this.answerReport.section_reports,this.formateSections()},getResponseAttachments:function(){var e=this;this.assessmentResponse.section_responses&&this.assessmentResponse.section_responses.forEach((function(t){t.item_responses.forEach((function(t){t.question_responses.forEach((function(t){e.answerAttachments[t.question_id]=t.attachments}))}))}))},formateSections:function(){var e=this;this.getResponseAttachments(),this.assessment.sections.forEach((function(t,s){var r=e.answerReport.section_reports[s].reviewing_question_num;Number(r)>0&&e.formateItems(t.items,s)})),this.changeRenderItems(0)},formateItems:function(e,t){var s=this;e.forEach((function(e,r){s.answerReport.section_reports[t].item_reports[r].reviewing_question_num>0&&(e.sectionIndex=t,e.itemIndex=r,s.items.push(e),s.formateQuestions(e,e.questions,t,r))}))},formateQuestions:function(e,t,s,r){var n=this,o=0;t.forEach((function(t,i){"rich_text"===t.answer_mode?(o+=1,n.assessment.sections[s].items[r].questions[i].reviewShow=!0,n.setReviewList(s,r,i),f!==e.id&&(f=e.id,h=0,e.reviewIndex||(e.reviewIndex=l,l++)),t.reviewIndex||(t.reviewIndex=h,h++),t.richTextIndex=p,t.attachments=t.attachments.concat(n.answerAttachments[t.id]||[]),p++,n.setSourceMap(e,t,s,r,i)):n.assessment.sections[s].items[r].questions[i].reviewShow=!1})),o>0&&(this.assessment.sections[s].richTextNum=o,this.assessment.sections[s].items[r].richTextNum=o)},setReviewList:function(e,t,s){var r=this.answerReport.section_reports[e].item_reports[t].question_reports[s].id;this.question_reports.push({id:r,score:null,comment:null,status:null})},setSourceMap:function(e,t,s,r,n){e.sectionIndex=s,e.itemIndex=r,t.sectionIndex=s,t.itemIndex=r,t.questionIndex=n;var o=this.answerReport.section_reports[s].item_reports[r];e.reviewNum=o.reviewing_question_num,this.sourceMap["item_".concat(e.id)]=e,this.sourceMap["question_".concat(t.id)]=t},showcard:function(){this.cardShow=!0},getUserAnwer:function(e,t){return this.answerReport.section_reports[e].item_reports[t]},getUserReport:function(e,t){return this.answerReport.section_reports[e].item_reports[t]},changeStatus:function(e){var t=this.sourceMap["question_".concat(e.questionId)].richTextIndex;this.question_reports[t].status=e.status},changeScore:function(e){var t=this.sourceMap["question_".concat(e.questionId)].richTextIndex;this.question_reports[t].score=e.score},submitReview:function(){var e=this;if(this.question_reports.every((function(t){return e.needScore?t.score||0===t.score:t.status}))){var t={report_id:this.answerReport.id,question_reports:this.question_reports};this.$emit("getReviewData",t)}else this.$toast({message:"还有题目未批阅",getContainer:function(){return document.querySelector("#ibs-item-bank")}})}}},g=s("0c7c");function w(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}var v={components:{itemReview:Object(g.a)(m,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ibs-item-bank",attrs:{id:"ibs-item-bank"}},[this.question_reports.length>0?[s("swiper",{ref:"mySwiper",attrs:{height:e.height,loop:!1,speed:500},on:{slideNextTransitionEnd:e.slideNextTransitionEnd,slidePrevTransitionEnd:e.slidePrevTransitionEnd}},[e._l(e.renderItmes,(function(t){return[s("swiper-slide",{key:"paper"+t.id,ref:"paper"+t.id,refInFor:!0,staticClass:"ibs-paper-item",style:{height:e.height+"px"}},[s("ibs-item",{ref:"item"+t.id,refInFor:!0,attrs:{item:t,mode:e.mode,itemUserAnswer:e.getUserAnwer(t.sectionIndex,t.itemIndex),needScore:e.needScore,question_reports:e.question_reports,all:Number(e.assessment.question_count),keys:[t.sectionIndex,t.itemIndex],itemUserReport:e.getUserReport(t.sectionIndex,t.itemIndex),showAnalysis:!0,showReport:!0,showResult:!1,showReview:!0,current:e.current,itemLength:e.items.length,exerciseInfo:e.answerRecord},on:{itemSlideNext:e.itemSlideNext,itemSlidePrev:e.itemSlidePrev,changeStatus:e.changeStatus}})],1)]}))],2),s("card",{attrs:{mode:e.mode,sections:e.assessment.sections,section_responses:e.section_responses,answer_report:e.answerReport,question_reports:e.question_reports,needScore:e.needScore},on:{slideTo:e.slideTo},model:{value:e.cardShow,callback:function(t){e.cardShow=t},expression:"cardShow"}}),s("ibs-footer",{attrs:{mode:e.mode},on:{showcard:e.showcard,submitReview:e.submitReview}})]:e._e()],2)}),[],!1,null,null,null).exports},data:function(){return{isLoading:!0,assessment:{},answerScene:{},answerReport:{},answerRecord:{},assessmentResponse:{},exerciseModes:"",status:""}},beforeRouteEnter:function(e,t,s){document.getElementById("app").style.background="#f6f6f6",s()},beforeRouteLeave:function(e,t,s){document.getElementById("app").style.background="",s()},computed:function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?w(Object(s),!0).forEach((function(t){Object(n.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):w(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},Object(i.e)({storageSetting:function(e){return e.storageSetting}})),watch:{},created:function(){this.getData()},provide:function(){return{getResourceToken:this.getResourceToken,settings:this.storageSetting,brushDo:this}},methods:{getResourceToken:function(e){return o.a.getItemDetail({params:{globalId:e}})},getData:function(){var e=this,t={answerRecordId:Number(this.$route.params.answerRecordId)};o.a.answerRecord({query:t}).then((function(t){e.exerciseModes=t.answer_record.exercise_mode,e.status=t.answer_record.status,e.assessment=t.assessment,e.answerScene=t.answer_scene,e.answerReport=t.answer_report,e.answerRecord=t.answer_record,e.assessmentResponse=t.assessment_response,e.$store.commit(a.x,e.$route.query.title),e.isLoading=!1})).catch((function(t){e.isLoading=!1,e.$toast(t.message)}))},getReviewData:function(e){var t=this;r.a.loading({message:"提交中...",forbidClick:!0});var s={exerciseId:this.$route.query.exerciseId};o.a.pushItemBankReviewReport({query:s,data:e}).then((function(e){r.a.clear(),t.goResult(e)})).catch((function(e){r.a.clear(),t.$toast(e.message)}))},goResult:function(e){this.$router.go(-1)}}},y=Object(g.a)(v,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"item-bank-review ibs-wap-vue"},[this.isLoading?t("e-loading"):t("item-review",{attrs:{answerRecord:this.answerRecord,answerReport:this.answerReport,assessment:this.assessment,answerScene:this.answerScene,assessmentResponse:this.assessmentResponse},on:{getReviewData:this.getReviewData}})],1)}),[],!1,null,null,null);t.default=y.exports},ac4d:function(e,t,s){s("3a72")("asyncIterator")},c94b:function(e,t,s){"use strict";s.r(t),s("8e6e"),s("ac6a"),s("456d"),s("e17f");var r=s("2241"),n=(s("a481"),s("e7e5"),s("d399")),o=s("bd86"),i=s("3ce7"),a=s("2f62"),c=s("faa5");function u(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}var d={assessment:{api:"getAssessmentExerciseRecord"},chapter:{api:"getChapterExerciseRecord"}},f={mixins:[{methods:{isAuthorized:function(e){11===e.code?this.$router.replace({name:"login",query:{redirect:this.$router.currentRoute.fullPath}},(function(){window.location.reload()})):this.$toast(e.message)}}}],components:{itemEngine:s("51aa").a},data:function(){return{exerciseId:"",isLoading:!0,assessment:{},answerScene:{},answerRecord:{},assessmentResponse:{},canLeave:!1,resources:[{id:"1"},{id:"2"}],exerciseModes:this.$route.query.exerciseMode,status:"",reviewedCount:0,recordId:"",backUrl:"",type:"lessonTask",exerciseInfo:[]}},computed:function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?u(Object(s),!0).forEach((function(t){Object(o.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},Object(a.e)({storageSetting:function(e){return e.storageSetting}})),watch:{},created:function(){"start"!==this.$route.query.mode||localStorage.getItem("exerciseId_"+this.$route.query.exerciseId)?this.getContinue():this.getStart()},provide:function(){return{getResourceToken:this.getResourceToken,settings:this.storageSetting,brushDo:this}},mounted:function(){this.exerciseId=this.$route.query.exerciseId},beforeRouteEnter:function(e,t,s){document.getElementById("app").style.background="#f6f6f6",s()},beforeRouteLeave:function(e,t,s){document.getElementById("app").style.background="",this.canLeave||e.query.isLeave?s():this.$refs.itemEngine.submitPaper(!0)},methods:{getContinue:function(){var e=this;this.isLoading=!0;var t={answer_record_id:this.$route.query.answer_record_id?this.$route.query.answer_record_id:localStorage.getItem("exerciseId_"+this.$route.query.exerciseId)};i.a.continueAnswer({data:t}).then((function(t){e.recordId=t.answer_record.id,e.reviewedCount=t.reviewedCount,e.exerciseModes=t.answer_record.exercise_mode,e.status=t.answer_record.status,e.assignData(t),e.isLoading=!1,e.exerciseInfo=t.submittedQuestions})).catch((function(t){e.handleError(t)}))},getResourceToken:function(e){return i.a.getItemDetail({params:{globalId:e}})},getStart:function(){var e=this;this.isLoading=!0;var t=this.$route.query.type,s={exerciseId:this.$route.query.exerciseId},r={moduleId:this.$route.query.moduleId,exerciseMode:this.exerciseModes};"assessment"===t?r.assessmentId=this.$route.query.assessmentId:r.categoryId=this.$route.query.categoryId,i.a[d[t].api]({query:s,data:r}).then((function(t){e.recordId=t.answer_record.id,e.exerciseModes=t.answer_record.exercise_mode,e.status=t.answer_record.status,e.isLoading=!1,e.assignData(t),localStorage.setItem("exerciseId_"+e.$route.query.exerciseId,t.answer_record.id)})).catch((function(t){e.handleError(t)}))},handleError:function(e){this.canLeave=!0,this.isLoading=!1,this.isAuthorized(e)},assignData:function(e){this.$store.commit(c.x,this.$route.query.title),this.assessment=e.assessment,this.answerScene=e.answer_scene,this.answerRecord=e.answer_record,this.assessmentResponse=e.assessment_response},saveAnswerData:function(e){var t=this;n.a.loading({message:"保存中...",forbidClick:!0}),e.admission_ticket=this.answerRecord.admission_ticket,i.a.saveAnswer({data:e}).then((function(e){n.a.clear(),t.canLeave=!0;var s=t.$route.query.exerciseId;t.$router.replace({path:"/item_bank_exercise/".concat(s)})})).catch((function(e){n.a.clear(),50095211!=e.code?t.$toast(e.message):r.a.confirm({title:"您已退出题库，无法继续学习",showCancelButton:!1,confirmButtonText:"点击刷新"}).then((function(){return t.exitPage()}))}))},getAnswerData:function(e){var t=this;n.a.loading({message:"提交中...",forbidClick:!0}),i.a.submitAnswer({data:e}).then((function(e){n.a.clear(),t.canLeave=!0,t.goResult()})).catch((function(e){n.a.clear(),50095211!=e.code?t.$toast(e.message):r.a.confirm({title:"您已退出题库，无法继续学习",showCancelButton:!1,confirmButtonText:"点击刷新"}).then((function(){return t.exitPage()}))}))},timeSaveAnswerData:function(e){var t=this;e.admission_ticket=this.answerRecord.admission_ticket,i.a.saveAnswer({data:e}).then((function(e){})).catch((function(e){50095211!=e.code?t.$toast(e.message):r.a.confirm({title:"您已退出题库，无法继续学习",showCancelButton:!1,confirmButtonText:"点击刷新"}).then((function(){return t.exitPage()}))}))},goResult:function(){var e={title:this.$route.query.title,type:this.$route.query.type,exerciseId:this.$route.query.exerciseId,assessmentId:this.$route.query.assessmentId,moduleId:this.$route.query.moduleId,categoryId:this.$route.query.categoryId,backUrl:""},t=this.assessmentResponse.answer_record_id;this.$router.replace({path:"/brushResult/".concat(t),query:e})},exitPage:function(){this.canLeave=!0,this.$router.replace("/my/courses/learning?active=2")}},destroyed:function(){localStorage.removeItem("exerciseId_"+this.$route.query.exerciseId)}},h=s("0c7c"),l=Object(h.a)(f,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.isLoading?s("e-loading"):s("div",{staticClass:"ibs-wap-vue"},[s("item-engine",{ref:"itemEngine",attrs:{answerRecord:e.answerRecord,assessmentResponse:e.assessmentResponse,assessment:e.assessment,answerScene:e.answerScene,exerciseId:e.exerciseId,exerciseInfo:e.exerciseInfo},on:{saveAnswerData:e.saveAnswerData,getAnswerData:e.getAnswerData,timeSaveAnswerData:e.timeSaveAnswerData}})],1)],1)}),[],!1,null,null,null);t.default=l.exports},cf57:function(e,t,s){"use strict";s.r(t),s("8e6e"),s("ac6a"),s("456d"),s("c5f6");var r=s("bd86"),n=s("3ce7"),o=s("2f62"),i=s("faa5");function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}var c={components:{itemReport:s("c75f").a},data:function(){return{isLoading:!0,assessment:{},answerScene:{},answerReport:{},answerRecord:{},assessmentResponse:{},exerciseModes:"",status:""}},beforeRouteEnter:function(e,t,s){document.getElementById("app").style.background="#f6f6f6",s()},beforeRouteLeave:function(e,t,s){document.getElementById("app").style.background="",s()},computed:function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){Object(r.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},Object(o.e)({storageSetting:function(e){return e.storageSetting}})),watch:{},created:function(){this.getData()},provide:function(){return{getResourceToken:this.getResourceToken,settings:this.storageSetting,brushDo:this}},methods:{getResourceToken:function(e){return n.a.getItemDetail({params:{globalId:e}})},getData:function(){var e=this,t={answerRecordId:Number(this.$route.params.answerRecordId)};n.a.answerRecord({query:t}).then((function(t){e.exerciseModes=t.answer_record.exercise_mode,e.status=t.answer_record.status,e.$store.commit(i.x,e.$route.query.title),e.assessment=t.assessment,e.answerScene=t.answer_scene,e.answerReport=t.answer_report,e.answerRecord=t.answer_record,e.assessmentResponse=t.assessment_response,e.isLoading=!1})).catch((function(t){e.isLoading=!1,e.$toast(t.message)}))}}},u=s("0c7c"),d=Object(u.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"brush-exercise-report"},[this.isLoading?t("e-loading"):[t("div",{staticClass:"ibs-wap-vue"},[t("item-report",{attrs:{answerRecord:this.answerRecord,answerReport:this.answerReport,assessment:this.assessment,answerScene:this.answerScene,assessmentResponse:this.assessmentResponse}})],1)]],2)}),[],!1,null,null,null);t.default=d.exports},d4c0:function(e,t,s){var r=s("0d58"),n=s("2621"),o=s("52a7");e.exports=function(e){var t=r(e),s=n.f;if(s)for(var i,a=s(e),c=o.f,u=0;a.length>u;)c.call(e,i=a[u++])&&t.push(i);return t}}}]);