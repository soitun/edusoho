(window.webpackJsonp=window.webpackJsonp||[]).push([["exerciseAnalysis~exerciseDo~homeworkAnalysis~homeworkDo~testpaperAnalysis~testpaperDo"],{"1c4c":function(t,e,s){"use strict";var n=s("9b43"),i=s("5ca1"),a=s("4bf8"),r=s("1fa8"),c=s("33a4"),o=s("9def"),l=s("f1ae"),u=s("27ee");i(i.S+i.F*!s("5cc5")((function(t){Array.from(t)})),"Array",{from:function(t){var e,s,i,d,f=a(t),m="function"==typeof this?this:Array,p=arguments.length,h=p>1?arguments[1]:void 0,_=void 0!==h,v=0,y=u(f);if(_&&(h=n(h,p>2?arguments[2]:void 0,2)),null==y||m==Array&&c(y))for(s=new m(e=o(f.length));e>v;v++)l(s,v,_?h(f[v],v):f[v]);else for(d=y.call(f),s=new m;!(i=d.next()).done;v++)l(s,v,_?r(d,h,[i.value,v],!0):i.value);return s.length=v,s}})},"36bd":function(t,e,s){"use strict";var n=s("4bf8"),i=s("77f1"),a=s("9def");t.exports=function(t){for(var e=n(this),s=a(e.length),r=arguments.length,c=i(r>1?arguments[1]:void 0,s),o=r>2?arguments[2]:void 0,l=void 0===o?s:i(o,s);l>c;)e[c++]=t;return e}},"4f7f":function(t,e,s){"use strict";var n=s("c26b"),i=s("b39a");t.exports=s("e0b8")("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return n.def(i(this,"Set"),t=0===t?0:t,t)}},n)},5118:function(t,e,s){(function(t){var n=void 0!==t&&t||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function a(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new a(i.call(setTimeout,n,arguments),clearTimeout)},e.setInterval=function(){return new a(i.call(setInterval,n,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(n,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},s("6017"),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,s("c8ba"))},6017:function(t,e,s){(function(t,e){!function(t,s){"use strict";if(!t.setImmediate){var n,i,a,r,c,o=1,l={},u=!1,d=t.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(t);f=f&&f.setTimeout?f:t,"[object process]"==={}.toString.call(t.process)?n=function(t){e.nextTick((function(){p(t)}))}:function(){if(t.postMessage&&!t.importScripts){var e=!0,s=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=s,e}}()?(r="setImmediate$"+Math.random()+"$",c=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(r)&&p(+e.data.slice(r.length))},t.addEventListener?t.addEventListener("message",c,!1):t.attachEvent("onmessage",c),n=function(e){t.postMessage(r+e,"*")}):t.MessageChannel?((a=new MessageChannel).port1.onmessage=function(t){p(t.data)},n=function(t){a.port2.postMessage(t)}):d&&"onreadystatechange"in d.createElement("script")?(i=d.documentElement,n=function(t){var e=d.createElement("script");e.onreadystatechange=function(){p(t),e.onreadystatechange=null,i.removeChild(e),e=null},i.appendChild(e)}):n=function(t){setTimeout(p,0,t)},f.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),s=0;s<e.length;s++)e[s]=arguments[s+1];var i={callback:t,args:e};return l[o]=i,n(o),o++},f.clearImmediate=m}function m(t){delete l[t]}function p(t){if(u)setTimeout(p,0,t);else{var e=l[t];if(e){u=!0;try{!function(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(s,n)}}(e)}finally{m(t),u=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,s("c8ba"),s("f28c"))},"67ab":function(t,e,s){var n=s("ca5a")("meta"),i=s("d3f4"),a=s("69a8"),r=s("86cc").f,c=0,o=Object.isExtensible||function(){return!0},l=!s("79e5")((function(){return o(Object.preventExtensions({}))})),u=function(t){r(t,n,{value:{i:"O"+ ++c,w:{}}})},d=t.exports={KEY:n,NEED:!1,fastKey:function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,n)){if(!o(t))return"F";if(!e)return"E";u(t)}return t[n].i},getWeak:function(t,e){if(!a(t,n)){if(!o(t))return!0;if(!e)return!1;u(t)}return t[n].w},onFreeze:function(t){return l&&d.NEED&&o(t)&&!a(t,n)&&u(t),t}}},"6c7b":function(t,e,s){var n=s("5ca1");n(n.P,"Array",{fill:s("36bd")}),s("9c6c")("fill")},"8ae7":function(t,e,s){"use strict";s("a481");var n=s("75fc");s("4f7f"),s("5df3"),s("1c4c"),s("c5f6"),s("ac6a"),s("6c7b"),e.a={methods:{sixType:function(t,e,s){if("essay"!==t&&"fill"!==t)return{item:e,answer:s?s[e.id]:[]};if("essay"===t)return{item:e,answer:s?s[e.id]:[""]};if("fill"===t){var n=this.fillReplce(e.stem,0),i=n.stem,a=n.index;return e.stem=i,e.fillnum=a,{item:e,answer:s?s[e.id]:new Array(a).fill("")}}return""},analysisSixType:function(t,e){var s=[];if("fill"!==t&&"essay"!==t&&(e.answer.forEach((function(t,s){e.answer[s]=Number(t)})),s=e.answer,e.testResult&&(e.testResult.answer.forEach((function(t,s){e.testResult.answer[s]=Number(t)})),s=Array.from(new Set([].concat(Object(n.a)(e.answer),Object(n.a)(e.testResult.answer)))))),"essay"===t&&(s=e.testResult?e.testResult.answer:[]),"fill"===t){var i=this.fillReplce(e.stem,0),a=i.stem,r=i.index;e.stem=a,e.fillnum=r,s=e.testResult?e.testResult.answer:new Array(r).fill("")}return{item:e,answer:s}},fillReplce:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=/\[\[.+?\]\]/;null!==s.exec(t);)t=t.replace(s,(function(){return'<span class="fill-bank">('.concat(e+=1,"）</span>")}));return{stem:t,index:e}}}}},b39a:function(t,e,s){var n=s("d3f4");t.exports=function(t,e){if(!n(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},c26b:function(t,e,s){"use strict";var n=s("86cc").f,i=s("2aeb"),a=s("dcbc"),r=s("9b43"),c=s("f605"),o=s("4a59"),l=s("01f9"),u=s("d53b"),d=s("7a56"),f=s("9e1e"),m=s("67ab").fastKey,p=s("b39a"),h=f?"_s":"size",_=function(t,e){var s,n=m(e);if("F"!==n)return t._i[n];for(s=t._f;s;s=s.n)if(s.k==e)return s};t.exports={getConstructor:function(t,e,s,l){var u=t((function(t,n){c(t,u,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[h]=0,null!=n&&o(n,s,t[l],t)}));return a(u.prototype,{clear:function(){for(var t=p(this,e),s=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete s[n.i];t._f=t._l=void 0,t[h]=0},delete:function(t){var s=p(this,e),n=_(s,t);if(n){var i=n.n,a=n.p;delete s._i[n.i],n.r=!0,a&&(a.n=i),i&&(i.p=a),s._f==n&&(s._f=i),s._l==n&&(s._l=a),s[h]--}return!!n},forEach:function(t){p(this,e);for(var s,n=r(t,arguments.length>1?arguments[1]:void 0,3);s=s?s.n:this._f;)for(n(s.v,s.k,this);s&&s.r;)s=s.p},has:function(t){return!!_(p(this,e),t)}}),f&&n(u.prototype,"size",{get:function(){return p(this,e)[h]}}),u},def:function(t,e,s){var n,i,a=_(t,e);return a?a.v=s:(t._l=a={i:i=m(e,!0),k:e,v:s,p:n=t._l,n:void 0,r:!1},t._f||(t._f=a),n&&(n.n=a),t[h]++,"F"!==i&&(t._i[i]=a)),t},getEntry:_,setStrong:function(t,e,s){l(t,e,(function(t,s){this._t=p(t,e),this._k=s,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?u(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,u(1))}),s?"entries":"values",!s,!0),d(e)}}},e0b8:function(t,e,s){"use strict";var n=s("7726"),i=s("5ca1"),a=s("2aba"),r=s("dcbc"),c=s("67ab"),o=s("4a59"),l=s("f605"),u=s("d3f4"),d=s("79e5"),f=s("5cc5"),m=s("7f20"),p=s("5dbc");t.exports=function(t,e,s,h,_,v){var y=n[t],b=y,w=_?"set":"add",C=b&&b.prototype,g={},x=function(t){var e=C[t];a(C,t,"delete"==t?function(t){return!(v&&!u(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(v&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return v&&!u(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,s){return e.call(this,0===t?0:t,s),this})};if("function"==typeof b&&(v||C.forEach&&!d((function(){(new b).entries().next()})))){var j=new b,T=j[w](v?{}:-0,1)!=j,k=d((function(){j.has(1)})),A=f((function(t){new b(t)})),I=!v&&d((function(){for(var t=new b,e=5;e--;)t[w](e,e);return!t.has(-0)}));A||((b=e((function(e,s){l(e,b,t);var n=p(new y,e,b);return null!=s&&o(s,_,n[w],n),n}))).prototype=C,C.constructor=b),(k||I)&&(x("delete"),x("has"),_&&x("get")),(I||T)&&x(w),v&&C.clear&&delete C.clear}else b=h.getConstructor(e,t,_,w),r(b.prototype,s),c.NEED=!0;return m(b,t),g[t]=b,i(i.G+i.W+i.F*(b!=y),g),v||h.setStrong(b,t,_),b}},f1ae:function(t,e,s){"use strict";var n=s("86cc"),i=s("4630");t.exports=function(t,e,s){e in t?n.f(t,e,i(0,s)):t[e]=s}},f5cc:function(t,e,s){"use strict";s("c5f6"),s("2f62");var n,i=s("bd86"),a=(n={name:"FillType",props:{filldata:{type:Object,default:function(){}}}},Object(i.a)(n,"props",{itemdata:{type:Object,default:function(){}},answer:{type:Array,default:function(){return[]}},number:{type:Number,default:1},canDo:{type:Boolean,default:!0}}),Object(i.a)(n,"data",(function(){return{index:0}})),Object(i.a)(n,"computed",{stem:{get:function(){return this.itemdata.parentTitle?this.itemdata.parentTitle.stem:this.itemdata.stem}},placeholder:{get:function(){return this.canDo?"请填写答案":"未作答"}}}),Object(i.a)(n,"methods",{}),n),r=s("2877"),c=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fill"},[s("div",{staticClass:"subject-stem"},[s("div",{staticClass:"serial-number"},[t._v(t._s(t.itemdata.seq)+"、")]),s("div",{staticClass:"rich-text",domProps:{innerHTML:t._s(t.stem)}})]),t.itemdata.parentTitle?s("div",{staticClass:"material-title"},[s("span",{staticClass:"serial-number"},[t._v("问题"+t._s(t.itemdata.materialIndex)+"：")]),s("div",{staticClass:"rich-text",domProps:{innerHTML:t._s(t.itemdata.stem)}})]):t._e(),s("div",{staticClass:"answer-paper"},t._l(t.itemdata.fillnum,(function(e,n){return s("div",{key:n},[s("div",{staticClass:"fill-subject"},[t._v("填空题（"+t._s(n+1)+"）")]),s("van-field",{staticClass:"fill-input",attrs:{placeholder:t.placeholder,disabled:!t.canDo,"label-width":"0px",type:"textarea",rows:"1",autosize:""},model:{value:t.answer[n],callback:function(e){t.$set(t.answer,n,e)},expression:"answer[index]"}})],1)})),0)])}),[],!1,null,null,null).exports,o={name:"EssayType",props:{itemdata:{type:Object,default:function(){}},answer:{type:Array,default:function(){return[]}},number:{type:Number,default:1},canDo:{type:Boolean,default:!0}},computed:{stem:{get:function(){return this.itemdata.parentTitle?this.itemdata.parentTitle.stem:this.itemdata.stem}},placeholder:{get:function(){return this.canDo?"请填写你的答案......":"未作答"}}},methods:{change:function(){}}},l=Object(r.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"essay"},[s("div",{staticClass:"subject-stem"},[s("div",{staticClass:"serial-number"},[t._v(t._s(t.itemdata.seq)+"、")]),s("div",{staticClass:"rich-text",domProps:{innerHTML:t._s(t.stem)}})]),t.itemdata.parentTitle?s("div",{staticClass:"material-title"},[s("span",{staticClass:"serial-number"},[t._v("问题"+t._s(t.itemdata.materialIndex)+"：")]),s("div",{staticClass:"rich-text",domProps:{innerHTML:t._s(t.itemdata.stem)}})]):t._e(),s("div",{staticClass:"answer-paper"},[s("van-field",{staticClass:"essay-input",attrs:{placeholder:t.placeholder,autosize:{maxHeight:200,minHeight:200},disabled:!t.canDo,"label-width":"0px",type:"textarea"},on:{input:function(e){return t.change()}},model:{value:t.answer[0],callback:function(e){t.$set(t.answer,0,e)},expression:"answer[0]"}})],1)])}),[],!1,null,null,null).exports,u={name:"HeadTop",props:{all:{type:Number,default:0},current:{type:Number,default:0},subject:{type:String,default:""},score:{type:String,default:"0"},showScore:{type:Boolean,default:!0}}},d=Object(r.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"head-top"},[s("div",{staticClass:"head-left"},[t._v("\n    "+t._s(t.subject)+"\n    "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.showScore,expression:"showScore"}],staticClass:"left-color"},[t._v("["+t._s(t.score)+"分]")])]),s("div",{staticClass:"head-right"},[s("span",{staticClass:"right-color"},[t._v(t._s(t.current))]),t._v("/"+t._s(t.all)+"\n  ")])])}),[],!1,null,null,null).exports,f=(s("6762"),s("2fdb"),{methods:{checkAnswer:function(t,e){var s=e.answer;if(e.testResult&&e.testResult.answer){var n=e.testResult.answer||[];if(s.includes(t))return"subject-option__order_right";if(s.includes(t)&&!n.includes(t)||!s.includes(t)&&n.includes(t))return"subject-option__order_wrong"}return""}}}),m={name:"ChoiceType",filters:{filterOrder:function(t){return["A","B","C","D","E","F","G","H","I","J"][t]}},mixins:[f],props:{itemdata:{type:Object,default:function(){}},number:{type:Number,default:1},answer:{type:Array,default:function(){return[]}},canDo:{type:Boolean,default:!0}},data:function(){return{result:this.answer}},computed:{stem:{get:function(){return this.itemdata.parentTitle?this.itemdata.parentTitle.stem:this.itemdata.stem}}},methods:{choose:function(t){this.$emit("choiceChoose",this.result,this.itemdata.id)}}},p=Object(r.a)(m,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"subject"},[s("div",{staticClass:"subject-stem"},[s("span",{staticClass:"serial-number"},[t._v(t._s(t.itemdata.seq)+"、")]),s("div",{staticClass:"subject-stem__content rich-text",domProps:{innerHTML:t._s(t.stem)}})]),t.itemdata.parentTitle?s("div",{staticClass:"material-title"},[s("span",{staticClass:"serial-number"},[t._v("问题"+t._s(t.itemdata.materialIndex)+"：")]),s("div",{staticClass:"rich-text",domProps:{innerHTML:t._s(t.itemdata.stem)}})]):t._e(),s("van-checkbox-group",{staticClass:"answer-paper",on:{change:function(e){return t.choose()}},model:{value:t.result,callback:function(e){t.result=e},expression:"result"}},t._l(t.itemdata.metas.choices,(function(e,n){return s("van-checkbox",{key:n,staticClass:"subject-option",attrs:{name:n,disabled:!t.canDo},scopedSlots:t._u([{key:"icon",fn:function(e){return s("span",{class:["subject-option__order","subject-option__order--square",t.canDo?"":t.checkAnswer(n,t.itemdata)]},[t._v(t._s(t._f("filterOrder")(n)))])}}],null,!0)},[s("div",{staticClass:"subject-option__content",domProps:{innerHTML:t._s(e)}})])})),1)],1)}),[],!1,null,null,null).exports,h={name:"SingleChoice",filters:{filterOrder:function(t){return["A","B","C","D","E","F","G","H","I","J"][t]}},mixins:[f],props:{itemdata:{type:Object,default:function(){}},answer:{type:Array,default:function(){return[]}},number:{type:Number,default:1},canDo:{type:Boolean,default:!0}},data:function(){return{radio:this.answer[0]}},computed:{stem:{get:function(){return this.itemdata.parentTitle?this.itemdata.parentTitle.stem:this.itemdata.stem}}},methods:{choose:function(){this.$emit("singleChoose",this.radio,this.itemdata.id)}}},_=Object(r.a)(h,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"subject"},[s("div",{staticClass:"subject-stem"},[s("span",{staticClass:"serial-number"},[t._v(t._s(t.itemdata.seq)+"、")]),s("div",{staticClass:"rich-text",domProps:{innerHTML:t._s(t.stem)}})]),t.itemdata.parentTitle?s("div",{staticClass:"material-title"},[s("span",{staticClass:"serial-number"},[t._v("问题"+t._s(t.itemdata.materialIndex)+"：")]),s("div",{staticClass:"rich-text",domProps:{innerHTML:t._s(t.itemdata.stem)}})]):t._e(),s("van-radio-group",{staticClass:"answer-paper",on:{change:function(e){return t.choose()}},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},t._l(t.itemdata.metas.choices,(function(e,n){return s("van-radio",{key:n,staticClass:"subject-option",attrs:{name:n,disabled:!t.canDo},scopedSlots:t._u([{key:"icon",fn:function(e){return s("span",{class:["subject-option__order",t.canDo?"":t.checkAnswer(n,t.itemdata)]},[t._v(t._s(t._f("filterOrder")(n)))])}}],null,!0)},[s("div",{staticClass:"subject-option__content",domProps:{innerHTML:t._s(e)}})])})),1)],1)}),[],!1,null,null,null).exports,v={name:"DetermineType",mixins:[f],props:{itemdata:{type:Object,default:function(){}},number:{type:Number,default:1},answer:{type:Array,default:function(){return[]}},canDo:{type:Boolean,default:!0}},data:function(){return{radio:this.answer[0]}},computed:{stem:{get:function(){return this.itemdata.parentTitle?this.itemdata.parentTitle.stem:this.itemdata.stem}}},methods:{choose:function(){this.$emit("determineChoose",this.radio,this.itemdata.id)}}},y=Object(r.a)(v,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"subject"},[s("div",{staticClass:"subject-stem"},[s("span",{staticClass:"serial-number"},[t._v(t._s(t.itemdata.seq)+"、")]),s("div",{staticClass:"subject-stem__content rich-text",domProps:{innerHTML:t._s(t.stem)}})]),t.itemdata.parentTitle?s("div",{staticClass:"material-title"},[s("span",{staticClass:"serial-number"},[t._v("问题"+t._s(t.itemdata.materialIndex)+"：")]),s("div",{staticClass:"rich-text",domProps:{innerHTML:t._s(t.itemdata.stem)}})]):t._e(),s("van-radio-group",{staticClass:"answer-paper",on:{change:function(e){return t.choose()}},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[s("van-radio",{staticClass:"subject-option subject-option--determine",attrs:{name:1,disabled:!t.canDo},scopedSlots:t._u([{key:"icon",fn:function(e){return s("i",{class:["iconfont","icon-yes","subject-option__order",t.canDo?"":t.checkAnswer(1,t.itemdata)]})}}])},[s("div",{staticClass:"subject-option__content"},[t._v("对")])]),s("van-radio",{staticClass:"subject-option subject-option--determine",attrs:{name:0,disabled:!t.canDo},scopedSlots:t._u([{key:"icon",fn:function(e){return s("i",{class:["iconfont","icon-no","subject-option__order",t.canDo?"":t.checkAnswer(0,t.itemdata)]})}}])},[s("div",{staticClass:"subject-option__content"},[t._v("错")])])],1)],1)}),[],!1,null,null,null).exports,b=(s("6b54"),{name:"Analysis",props:{testResult:{type:Object,default:function(){}},answer:{type:Array,default:function(){return[]}},analysis:{type:String,default:""},subject:{type:String,default:""},isExercise:{type:Boolean,default:!1}},computed:{statusColor:function(){if(!this.testResult)return"analysis-item_noAnswer";switch(this.testResult.status){case"right":return"analysis-item_right";case"none":return this.isExercise?"analysis-item_subject":"analysis-item_none";case"wrong":case"partRight":return"analysis-item_worng";case"noAnswer":return"analysis-item_noAnswer"}}},methods:{status:function(t){if(!t)return"未回答";var e=t.status;switch(e){case"right":return"回答正确";case"none":return this.isExercise?"主观题":"待批阅";case"wrong":case"partRight":return"回答错误";case"noAnswer":return"未回答"}},filterOrder:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"do";if("fill"==this.subject)return"standard"==e?t.length>0?t.toString():"无":t.length>0?t.toString():"未回答";var s=["A","B","C","D","E","F","G","H","I","J"];"determine"==this.subject&&(s=["错","对"]);var n=null;return n=t.map((function(t){return s[t]})),"standard"==e?n.length>0?n.join(" "):"无":n.length>0?n.join(" "):"未回答"}}}),w=Object(r.a)(b,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"analysis"},[s("div",{staticClass:"mt10 analysis-result"},[s("div",{staticClass:"analysis-title"},[t._v("做题结果")]),s("div",{staticClass:"analysis-content"},[s("div",{staticClass:"analysis-content__item  mt10"},[s("div",{staticClass:"analysis-item__title"},[t._v("做题结果")]),s("div",{class:[t.statusColor]},[t._v(t._s(t.status(t.testResult)))])]),"fill"===t.subject?s("div",[s("div",{staticClass:"analysis-content__item  mt10"},[s("div",{staticClass:"analysis-item__title"},[t._v("正确答案")]),s("div",{staticClass:"analysis-item_right analysis-content__item--column"},t._l(t.answer,(function(e,n){return s("div",{key:"right"+n,staticClass:"fill-answer"},[t._v("（"+t._s(n+1)+"）"+t._s(t.filterOrder(e,"standard")))])})),0)]),s("div",{staticClass:"analysis-content__item "},[s("div",{staticClass:"analysis-item__title"},[t._v("你的答案")]),s("div",{staticClass:"analysis-content__item--column"},t._l(t.answer,(function(e,n){return s("div",{key:n},[t.testResult?s("div",{class:[t.statusColor,"fill-answer"]},[t._v("（"+t._s(n+1)+"）"+t._s(t.filterOrder(t.testResult.answer[n]))+" ")]):s("div",{staticClass:"analysis-item_noAnswer"},[t._v("未回答")])])})),0)])]):t._e(),"essay"===t.subject?s("div",[s("div",{staticClass:"analysis-content__item  mt10"},[s("div",{staticClass:"analysis-item__title"},[t._v("正确答案")]),s("div",{staticClass:"analysis-item_right",domProps:{innerHTML:t._s(t.answer[0])}})]),s("div",{staticClass:"analysis-content__item  mt10"},[s("div",{staticClass:"analysis-item__title"},[t._v("你的答案")]),t.testResult&&t.testResult.answer.length>0?s("div",{class:[t.statusColor],domProps:{innerHTML:t._s(t.testResult.answer[0])}}):s("div",{staticClass:"analysis-item_noAnswer"},[t._v("未回答")])])]):t._e(),"fill"!==t.subject&&"essay"!==t.subject?s("div",[s("div",{staticClass:"analysis-content__item  mt10"},[s("div",{staticClass:"analysis-item__title"},[t._v("正确答案")]),s("div",{staticClass:"analysis-item_right",domProps:{innerHTML:t._s(t.filterOrder(t.answer,"standard"))}})]),s("div",{staticClass:"analysis-content__item  mt10"},[s("div",{staticClass:"analysis-item__title"},[t._v("你的答案")]),t.testResult?s("div",{class:[t.statusColor]},[t._v(t._s(t.filterOrder(t.testResult.answer)))]):s("div",{staticClass:"analysis-item_noAnswer"},[t._v("未回答")])])]):t._e()])]),s("div",{staticClass:"mt10 analysis-result"},[s("div",{staticClass:"analysis-title"},[t._v("做题解析")]),t.analysis?s("div",{staticClass:"analysis-content mt10",domProps:{innerHTML:t._s(t.analysis)}}):s("div",{staticClass:"analysis-content mt10"},[t._v("无解析")])])])}),[],!1,null,null,null).exports,C=(s("5118"),document.documentElement.clientHeight-44),g={name:"ItemBank",components:{fillType:c,essayType:l,headTop:d,choiceType:p,singleChoice:_,determineType:y,analysis:w},props:{info:{type:Array,default:function(){return[]}},answer:{type:Object,default:function(){}},current:{type:Number,default:0},showScore:{type:Boolean,default:!0},canDo:{type:Boolean,default:!0},all:{type:Number,default:0},isWrongMode:{type:Boolean,default:!1},isExercise:{type:Boolean,default:!1}},data:function(){return{testData:this.info,testAnswer:this.answer,currentIndex:this.current,height:C}},watch:{answer:function(t){this.$emit("update:answer",t)},isWrongMode:function(t){this.currentIndex=this.current-1,this.$refs.swipe.swipeTo(this.current-1,{immediate:!0})},current:function(t,e){var s=Number(t);s-1!==this.currentIndex&&this.$refs.swipe.swipeTo(s-1)}},methods:{changeswiper:function(t){this.currentIndex=t,this.$emit("update:current",t+1),this.$emit("update:slideIndex",t)},last:function(){0!=this.currentIndex&&this.$refs.swipe.swipeTo(this.currentIndex-1)},next:function(){this.currentIndex!=this.info.length-1&&this.$refs.swipe.swipeTo(this.currentIndex+1)},subject:function(t){var e,s="",n=t.type;switch(t.parentType&&(s="材料题-"),n){case"single_choice":e="单选题";break;case"choice":e="多选题";break;case"essay":e="问答题";break;case"uncertain_choice":e="不定项选择题";break;case"determine":e="判断题";break;case"fill":e="填空题";break;case"material":e="材料题"}return s+e},singleChoose:function(t,e){this.$set(this.testAnswer[e],0,t)},choiceChoose:function(t,e){this.$set(this.testAnswer,e,t)},determineChoose:function(t,e){this.$set(this.testAnswer[e],0,Number(t))}}},x=Object(r.a)(g,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"paper-swiper"},[t.testData.length>0?s("van-swipe",{ref:"swipe",attrs:{height:t.height,"show-indicators":!1,loop:!1,duration:100},on:{change:t.changeswiper}},t._l(t.info,(function(e,n){return s("van-swipe-item",{key:e.id,style:{height:t.height+"px"}},[s("div",{ref:"paper"+n,refInFor:!0,staticClass:"paper-item"},[s("head-top",{attrs:{all:t.all,current:Number(e.seq),subject:t.subject(e),score:""+parseFloat(e.score),"show-score":t.showScore}}),"single_choice"==e.type?s("single-choice",{attrs:{itemdata:e,answer:t.testAnswer[e.id],number:n+1,"can-do":t.canDo},on:{singleChoose:t.singleChoose}}):t._e(),"choice"==e.type||"uncertain_choice"==e.type?s("choice-type",{attrs:{itemdata:e,answer:t.testAnswer[e.id],number:n+1,"can-do":t.canDo},on:{choiceChoose:t.choiceChoose}}):t._e(),"determine"==e.type?s("determine-type",{attrs:{itemdata:e,answer:t.testAnswer[e.id],number:n+1,"can-do":t.canDo},on:{determineChoose:t.determineChoose}}):t._e(),"essay"==e.type?s("essay-type",{attrs:{itemdata:e,answer:t.testAnswer[e.id],"can-do":t.canDo,number:n+1}}):t._e(),"fill"==e.type?s("fill-type",{attrs:{itemdata:e,answer:t.testAnswer[e.id],"can-do":t.canDo,number:n+1}}):t._e(),t.canDo?t._e():s("analysis",{attrs:{"test-result":e.testResult,analysis:e.analysis,answer:e.answer,subject:e.type,"is-exercise":t.isExercise}})],1)])})),1):t._e(),s("div",[s("div",{class:["left-slide__btn",0==t.currentIndex?"slide-disabled":""],on:{click:function(e){return t.last()}}},[s("i",{staticClass:"iconfont icon-arrow-left"})]),s("div",{class:["right-slide__btn",t.currentIndex==t.info.length-1?"slide-disabled":""],on:{click:function(e){return t.next()}}},[s("i",{staticClass:"iconfont icon-arrow-right"})])])],1)}),[],!1,null,null,null);e.a=x.exports}}]);