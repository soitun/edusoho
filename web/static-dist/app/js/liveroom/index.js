/*! For license information please see index.js.LICENSE.txt */
!function(i){function e(e){for(var t,o,a=e[0],l=e[1],u=e[2],c=0,h=[];c<a.length;c++)o=a[c],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&h.push(n[o][0]),n[o]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(i[t]=l[t]);for(d&&d(e);h.length;)h.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var i,e=0;e<r.length;e++){for(var s=r[e],t=!0,a=1;a<s.length;a++){var l=s[a];0!==n[l]&&(t=!1)}t&&(r.splice(e--,1),i=o(o.s=s[0]))}return i}var t={},n={263:0},r=[];function o(e){if(t[e])return t[e].exports;var s=t[e]={i:e,l:!1,exports:{}};return i[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=i,o.c=t,o.d=function(i,e,s){o.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:s})},o.r=function(i){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},o.t=function(i,e){if(1&e&&(i=o(i)),8&e)return i;if(4&e&&"object"==typeof i&&i&&i.__esModule)return i;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var t in i)o.d(s,t,function(e){return i[e]}.bind(null,t));return s},o.n=function(i){var e=i&&i.__esModule?function(){return i.default}:function(){return i};return o.d(e,"a",e),e},o.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},o.p="/static-dist/";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var d=l;r.push([1072,0]),s()}({1072:function(i,e,s){"use strict";s.r(e);var t=s(18),n=s.n(t),r=s(3),o=s.n(r),a=s(4),l=s.n(a),u=s(214),d=s.n(u),c=s(45),h=s(91),v=s(346),w=s(22);new(function(){function i(){o()(this,i),this.taskId=$("#entry").data("taskId"),this.courseId=$("#entry").data("courseId"),this.taskPipeCounter=0,this.pushing=!1,this.sign="",this.absorbed=0,this.TASK_PIPE_INTERNAL=60,this.intervalId=null,this.lastTimestamp=0,this.init()}return l()(i,[{key:"init",value:function(){this.isLiveRoomOpened=!1;var i=$("#entry").data("role"),e=$("#entry").data("directUrl"),s=$("#entry").data("url");e?this.entryRoom(e):s&&this.pollingTryEntryRoom(s),"student"===i&&0!=this.taskId&&this.triggerLiveEvent()}},{key:"entryRoom",value:function(i){var e=$("#entry").data("provider"),s=$("#entry").data("role"),t=new d.a(navigator.userAgent),n=t.getBrowser(),r=t.getOS();"http:"===document.location.protocol&&"student"===s&&(8===e||9===e)&&"Android"!==r.name&&"Chrome"===n.name&&n.major>=60&&(window.location.href=i),this.isLiveRoomOpened=!0;var o='<iframe name="classroom" src="'+i+'" style="position:absolute; left:0; top:0; height:100%; width:100%; border:0px;" scrolling="no" allowfullscreen="true" allow="microphone; camera; screen-wake-lock; display-capture"></iframe>';$("body").html(o)}},{key:"pollingTryEntryRoom",value:function(i){var e=this,s=0,t=1;s=setInterval((function(){if(t>10)return clearInterval(s),void $("#entry").html(Translator.trans("course_set.live_room.entry_error_hint"));$.ajax({url:i,success:function(i){if(i.error)return clearInterval(s),void $("#entry").html(Translator.trans("course_set.live_room.entry_error_with_message",{message:i.error}));i.roomUrl&&(e.entryRoom(i.roomUrl),clearInterval(s)),t++},error:function(){$("#entry").html(Translator.trans("course_set.live_room.entry_error_hint"))}})}),3e3)}},{key:"triggerLiveEvent",value:function(){this._initInterval(),w.a.safari&&!Object(w.f)()&&this.safariVisibilitychange()}},{key:"_clearInterval",value:function(){clearInterval(this.intervalId)}},{key:"_initInterval",value:function(){var i=this;this._flush(),window.onbeforeunload=function(){i._clearInterval(),i._flush(),i.sign.length>0&&localStorage.setItem("flowSign",i.sign)},this._clearInterval(),this.intervalId=setInterval((function(){return i._addPipeCounter()}),1e3)}},{key:"_flush",value:function(){var i=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.pushing)if(""===this.sign){var s={},t=localStorage.getItem("flowSign");t&&(this.lastSign=t,s.lastSign=t,localStorage.removeItem("flowSign")),c.a.courseTaskEvent.pushEvent({params:{courseId:this.courseId,taskId:this.taskId,eventName:"start"},data:n()({client:"pc"},s)}).then((function(s){if(i.MonitoringEvents=new v.a({videoPlayRule:i.videoPlayRule,taskType:"live",taskPipe:i,maskElement:$("body")}),s.learnControl.allowLearn||"kick_previous"!==s.learnControl.denyReason){if(!s.learnControl.allowLearn&&"reject_current"===s.learnControl.denyReason)return i.MonitoringEvents.triggerEvent("reject_current"),i._clearInterval(),void $("[name=classroom]").attr("src","");i.sign=s.record.flowSign,i.record=s.record,i._doing(e)}else i.MonitoringEvents.triggerEvent("kick_previous")}))}else this._doing(e)}},{key:"_doing",value:function(){var i=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(0!==this.sign.length){var s={client:"pc",sign:this.sign,duration:this.taskPipeCounter,status:this.absorbed,lastLearnTime:h.a.get(this.userId,this.fileId)};if(e.watchTime){var t={watchData:{duration:e.watchTime}};s=n()(s,t)}e.reActive&&(s.reActive=e.reActive),this.pushing=!0,c.a.courseTaskEvent.pushEvent({params:{courseId:this.courseId,taskId:this.taskId,eventName:"doing"},data:s}).then((function(e){i.pushing=!1,i.record=e.record,i.taskPipeCounter=0,i.lastTimestamp=(new Date).getTime(),e.learnControl.allowLearn||"kick_previous"!==e.learnControl.denyReason?e.learnControl.allowLearn||"reject_current"!==e.learnControl.denyReason||i.MonitoringEvents.triggerEvent("reject_current"):i.MonitoringEvents.triggerEvent("kick_previous")})).catch((function(e){i.pushing=!1,i._clearInterval(),cd.message({type:"danger",message:Translator.trans("task_show.user_login_protect_tip")})}))}}},{key:"absorbedChange",value:function(i){this.absorbed=i}},{key:"_addPipeCounter",value:function(){this.taskPipeCounter++,this.taskPipeCounter>=this.TASK_PIPE_INTERNAL&&this._flush()}},{key:"safariVisibilitychange",value:function(){var i=this;document.addEventListener("visibilitychange",(function(){var e=document.visibilityState;"hidden"===e?i._clearInterval():"visible"===e&&(i.taskPipeCounter=Math.round(((new Date).getTime()-i.lastTimestamp)/1e3),i.intervalId=setInterval((function(){return i._addPipeCounter()}),1e3))}))}}]),i}())},214:function(i,e,s){var t;!function(n,r){"use strict";var o="function",a="undefined",l="object",u="model",d="name",c="type",h="vendor",v="version",w="architecture",m="console",p="mobile",f="tablet",g="smarttv",b="wearable",k={extend:function(i,e){var s={};for(var t in i)e[t]&&e[t].length%2==0?s[t]=e[t].concat(i[t]):s[t]=i[t];return s},has:function(i,e){return"string"==typeof i&&-1!==e.toLowerCase().indexOf(i.toLowerCase())},lowerize:function(i){return i.toLowerCase()},major:function(i){return"string"==typeof i?i.replace(/[^\d\.]/g,"").split(".")[0]:r},trim:function(i){return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},y={rgx:function(i,e){for(var s,t,n,a,u,d,c=0;c<e.length&&!u;){var h=e[c],v=e[c+1];for(s=t=0;s<h.length&&!u;)if(u=h[s++].exec(i))for(n=0;n<v.length;n++)d=u[++t],typeof(a=v[n])===l&&a.length>0?2==a.length?typeof a[1]==o?this[a[0]]=a[1].call(this,d):this[a[0]]=a[1]:3==a.length?typeof a[1]!==o||a[1].exec&&a[1].test?this[a[0]]=d?d.replace(a[1],a[2]):r:this[a[0]]=d?a[1].call(this,d,a[2]):r:4==a.length&&(this[a[0]]=d?a[3].call(this,d.replace(a[1],a[2])):r):this[a]=d||r;c+=2}},str:function(i,e){for(var s in e)if(typeof e[s]===l&&e[s].length>0){for(var t=0;t<e[s].length;t++)if(k.has(e[s][t],i))return"?"===s?r:s}else if(k.has(e[s],i))return"?"===s?r:s;return i}},T={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},_={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[d,v],[/(opios)[\/\s]+([\w\.]+)/i],[[d,"Opera Mini"],v],[/\s(opr)\/([\w\.]+)/i],[[d,"Opera"],v],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[d,v],[/(konqueror)\/([\w\.]+)/i],[[d,"Konqueror"],v],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[d,"IE"],v],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[d,"Edge"],v],[/(yabrowser)\/([\w\.]+)/i],[[d,"Yandex"],v],[/(Avast)\/([\w\.]+)/i],[[d,"Avast Secure Browser"],v],[/(AVG)\/([\w\.]+)/i],[[d,"AVG Secure Browser"],v],[/(puffin)\/([\w\.]+)/i],[[d,"Puffin"],v],[/(focus)\/([\w\.]+)/i],[[d,"Firefox Focus"],v],[/(opt)\/([\w\.]+)/i],[[d,"Opera Touch"],v],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[d,"UCBrowser"],v],[/(comodo_dragon)\/([\w\.]+)/i],[[d,/_/g," "],v],[/(windowswechat qbcore)\/([\w\.]+)/i],[[d,"WeChat(Win) Desktop"],v],[/(micromessenger)\/([\w\.]+)/i],[[d,"WeChat"],v],[/(brave)\/([\w\.]+)/i],[[d,"Brave"],v],[/(qqbrowserlite)\/([\w\.]+)/i],[d,v],[/(QQ)\/([\d\.]+)/i],[d,v],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[d,v],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[d,v],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[d,v],[/(MetaSr)[\/\s]?([\w\.]+)/i],[d],[/(LBBROWSER)/i],[d],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[v,[d,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[v,[d,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[d,v],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[v,[d,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[d,/(.+)/,"$1 WebView"],v],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[d,/(.+(?:g|us))(.+)/,"$1 $2"],v],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[v,[d,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[d,"Sailfish Browser"],v],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[d,v],[/(dolfin)\/([\w\.]+)/i],[[d,"Dolphin"],v],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[d,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[d,"Chrome"],v],[/(coast)\/([\w\.]+)/i],[[d,"Opera Coast"],v],[/fxios\/([\w\.-]+)/i],[v,[d,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[v,[d,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[v,d],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[d,"GSA"],v],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[d,[v,y.str,T.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[d,v],[/(navigator|netscape)\/([\w\.-]+)/i],[[d,"Netscape"],v],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[d,v]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[w,"amd64"]],[/(ia32(?=;))/i],[[w,k.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[w,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[w,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[w,/ower/,"",k.lowerize]],[/(sun4\w)[;\)]/i],[[w,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[w,k.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[u,h,[c,f]],[/applecoremedia\/[\w\.]+ \((ipad)/],[u,[h,"Apple"],[c,f]],[/(apple\s{0,1}tv)/i],[[u,"Apple TV"],[h,"Apple"],[c,g]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[h,u,[c,f]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[u,[h,"Amazon"],[c,f]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[u,y.str,T.device.amazon.model],[h,"Amazon"],[c,p]],[/android.+aft([bms])\sbuild/i],[u,[h,"Amazon"],[c,g]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[u,h,[c,p]],[/\((ip[honed|\s\w*]+);/i],[u,[h,"Apple"],[c,p]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[h,u,[c,p]],[/\(bb10;\s(\w+)/i],[u,[h,"BlackBerry"],[c,p]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[u,[h,"Asus"],[c,f]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[h,"Sony"],[u,"Xperia Tablet"],[c,f]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[u,[h,"Sony"],[c,p]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[h,u,[c,m]],[/android.+;\s(shield)\sbuild/i],[u,[h,"Nvidia"],[c,m]],[/(playstation\s[34portablevi]+)/i],[u,[h,"Sony"],[c,m]],[/(sprint\s(\w+))/i],[[h,y.str,T.device.sprint.vendor],[u,y.str,T.device.sprint.model],[c,p]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[h,[u,/_/g," "],[c,p]],[/(nexus\s9)/i],[u,[h,"HTC"],[c,f]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],[u,[h,"Huawei"],[c,p]],[/android.+(bah2?-a?[lw]\d{2})/i],[u,[h,"Huawei"],[c,f]],[/(microsoft);\s(lumia[\s\w]+)/i],[h,u,[c,p]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[u,[h,"Microsoft"],[c,m]],[/(kin\.[onetw]{3})/i],[[u,/\./g," "],[h,"Microsoft"],[c,p]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[u,[h,"Motorola"],[c,p]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[u,[h,"Motorola"],[c,f]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[h,k.trim],[u,k.trim],[c,g]],[/hbbtv.+maple;(\d+)/i],[[u,/^/,"SmartTV"],[h,"Samsung"],[c,g]],[/\(dtv[\);].+(aquos)/i],[u,[h,"Sharp"],[c,g]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[h,"Samsung"],u,[c,f]],[/smart-tv.+(samsung)/i],[h,[c,g],u],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[h,"Samsung"],u,[c,p]],[/sie-(\w*)/i],[u,[h,"Siemens"],[c,p]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[h,"Nokia"],u,[c,p]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[u,[h,"Acer"],[c,f]],[/android.+([vl]k\-?\d{3})\s+build/i],[u,[h,"LG"],[c,f]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[h,"LG"],u,[c,f]],[/(lg) netcast\.tv/i],[h,u,[c,g]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[u,[h,"LG"],[c,p]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[h,u,[c,f]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[u,[h,"Lenovo"],[c,f]],[/(lenovo)[_\s-]?([\w-]+)/i],[h,u,[c,p]],[/linux;.+((jolla));/i],[h,u,[c,p]],[/((pebble))app\/[\d\.]+\s/i],[h,u,[c,b]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[h,u,[c,p]],[/crkey/i],[[u,"Chromecast"],[h,"Google"],[c,g]],[/android.+;\s(glass)\s\d/i],[u,[h,"Google"],[c,b]],[/android.+;\s(pixel c)[\s)]/i],[u,[h,"Google"],[c,f]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[u,[h,"Google"],[c,p]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[u,/_/g," "],[h,"Xiaomi"],[c,p]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[u,/_/g," "],[h,"Xiaomi"],[c,f]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[u,[h,"Meizu"],[c,p]],[/(mz)-([\w-]{2,})/i],[[h,"Meizu"],u,[c,p]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[u,[h,"OnePlus"],[c,p]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[u,[h,"RCA"],[c,f]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[u,[h,"Dell"],[c,f]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[u,[h,"Verizon"],[c,f]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[h,"Barnes & Noble"],u,[c,f]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[u,[h,"NuVision"],[c,f]],[/android.+;\s(k88)\sbuild/i],[u,[h,"ZTE"],[c,f]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[u,[h,"Swiss"],[c,p]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[u,[h,"Swiss"],[c,f]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[u,[h,"Zeki"],[c,f]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[h,"Dragon Touch"],u,[c,f]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[u,[h,"Insignia"],[c,f]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[u,[h,"NextBook"],[c,f]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[h,"Voice"],u,[c,p]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[h,"LvTel"],u,[c,p]],[/android.+;\s(PH-1)\s/i],[u,[h,"Essential"],[c,p]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[u,[h,"Envizen"],[c,f]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[h,u,[c,f]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[u,[h,"MachSpeed"],[c,f]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[h,u,[c,f]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[u,[h,"Rotor"],[c,f]],[/android.+(KS(.+))\s+build/i],[u,[h,"Amazon"],[c,f]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[h,u,[c,f]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[c,k.lowerize],h,u],[/[\s\/\(](smart-?tv)[;\)]/i],[[c,g]],[/(android[\w\.\s\-]{0,9});.+build/i],[u,[h,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[v,[d,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[v,[d,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[d,v],[/rv\:([\w\.]{1,9}).+(gecko)/i],[v,d]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[d,v],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[d,[v,y.str,T.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[d,"Windows"],[v,y.str,T.os.windows.version]],[/\((bb)(10);/i],[[d,"BlackBerry"],v],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[d,v],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[d,"Symbian"],v],[/\((series40);/i],[d],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[d,"Firefox OS"],v],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[d,v],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[d,"Chromium OS"],v],[/(sunos)\s?([\w\.\d]*)/i],[[d,"Solaris"],v],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[d,v],[/(haiku)\s(\w+)/i],[d,v],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[v,/_/g,"."],[d,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[d,"Mac OS"],[v,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[d,v]]},E=function(i,e){if("object"==typeof i&&(e=i,i=r),!(this instanceof E))return new E(i,e).getResult();var s=i||(n&&n.navigator&&n.navigator.userAgent?n.navigator.userAgent:""),t=e?k.extend(_,e):_;return this.getBrowser=function(){var i={name:r,version:r};return y.rgx.call(i,s,t.browser),i.major=k.major(i.version),i},this.getCPU=function(){var i={architecture:r};return y.rgx.call(i,s,t.cpu),i},this.getDevice=function(){var i={vendor:r,model:r,type:r};return y.rgx.call(i,s,t.device),i},this.getEngine=function(){var i={name:r,version:r};return y.rgx.call(i,s,t.engine),i},this.getOS=function(){var i={name:r,version:r};return y.rgx.call(i,s,t.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return s},this.setUA=function(i){return s=i,this},this};E.VERSION="0.7.21",E.BROWSER={NAME:d,MAJOR:"major",VERSION:v},E.CPU={ARCHITECTURE:w},E.DEVICE={MODEL:u,VENDOR:h,TYPE:c,CONSOLE:m,MOBILE:p,SMARTTV:g,TABLET:f,WEARABLE:b,EMBEDDED:"embedded"},E.ENGINE={NAME:d,VERSION:v},E.OS={NAME:d,VERSION:v},typeof e!==a?(typeof i!==a&&i.exports&&(e=i.exports=E),e.UAParser=E):(t=function(){return E}.call(e,s,e,i))===r||(i.exports=t);var S=n&&(n.jQuery||n.Zepto);if(S&&!S.ua){var x=new E;S.ua=x.getResult(),S.ua.get=function(){return x.getUA()},S.ua.set=function(i){x.setUA(i);var e=x.getResult();for(var s in e)S.ua[s]=e[s]}}}("object"==typeof window?window:this)},346:function(i,e,s){"use strict";s.d(e,"a",(function(){return v}));var t=s(3),n=s.n(t),r=s(4),o=s.n(r),a=s(44),l=s.n(a),u=(s(361),s(362),function(){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;n()(this,i),this.$element=null===e?$(".all-wrapper"):e,this.mask='\n            <div class="out-focus-mask">\n                <div class="content">\n                    <div class="tips"></div>\n                    <div class="continue-studying">\n                        <button class="btn btn-primary js-continue-studying">'.concat(Translator.trans("course.task.out_focus_mask.continue_studying"),"</button>\n                    </div>\n                </div>\n            </div>"),this.mask1='\n            <div class="out-focus-mask">\n                <div class="content">\n                    <div class="tips"></div>\n                </div>\n            </div>',this.initEvent()}return o()(i,[{key:"initEvent",value:function(){this._registerChannel()}},{key:"validateMask",value:function(){return this.$element.find(".out-focus-mask").length>0}},{key:"initLearStopTips",value:function(){this.validateMask()||(this.$element.append(this.mask),this.$element.find(".out-focus-mask .content .tips").html(Translator.trans("course.task.out_focus_mask.stop.tips")),this.popAfter())}},{key:"initAntiBrushTips",value:function(){this.validateMask()&&this.destroyMask(),this.$element.append(this.mask),this.$element.find(".out-focus-mask .content .tips").html(Translator.trans("course.task.out_focus_mask.anti_brush.tips")),this.popAfter()}},{key:"initBanTips",value:function(){this.validateMask()&&this.destroyMask(),this.$element.append(this.mask1),this.$element.find(".out-focus-mask .content .tips").html(Translator.trans("course.task.out_focus_mask.anti_brush.tips")),this.popAfter()}},{key:"continueStudying",value:function(){this.destroyMask(),this._publishResponse("play")}},{key:"destroyMask",value:function(){this.$element.find(".out-focus-mask").remove()}},{key:"popAfter",value:function(){this._publishResponse("pause")}},{key:"_registerChannel",value:function(){return l.a.instanceId("task"),l.a.fedx.addFilter([{channel:"task-events",topic:"monitoringEvent",direction:"out"}]),this}},{key:"_publishResponse",value:function(i){l.a.publish({channel:"task-events",topic:"monitoringEvent",data:i})}}]),i}()),d=s(22),c=s(83),h=s.n(c),v=function(){function i(e){n()(this,i),this.maskElement=e.maskElement||null,this.OutFocusMask=new u(this.maskElement),this.activityTimer=null,this.ACTIVITY_TIME=1200,this.eventMaskElement=null,this.eventMaskTimer=null,this.EVENT_MASK_TIME=30,this.videoPlayRule=e.videoPlayRule,this.taskType=e.taskType,this.taskPipe=e.taskPipe,this.lastFullScreenState=h.a.isFullscreen,this.fullScreenTimer=null,this.initEvent()}return o()(i,[{key:"initEvent",value:function(){var i=this;$("body").off("click",".js-continue-studying"),$("body").on("click",".js-continue-studying",(function(){i.OutFocusMask.continueStudying(),i.taskPipe._flush({reActive:1}),i.taskPipe.absorbedChange(0)})),Object(d.f)()||"auto_pause"===this.videoPlayRule&&"video"===this.taskType&&(d.a.safari&&this.safariResetFullScreenState(),this.initMaskElement(),this.initVisibilitychange(),this.initActivity())}},{key:"initMaskElement",value:function(){$("body").append('\n      <div class="monitor-event-mask" style="position: fixed; left: 0; right: 0; top: 0; bottom: 0; opacity: 0; display: none;"></div>\n    '),this.eventMaskElement=$(".monitor-event-mask"),this.maskElementShow()}},{key:"ineffectiveEvent",value:function(){this.OutFocusMask.initLearStopTips(),this.taskPipe.absorbedChange(1),this.taskPipe._flush()}},{key:"triggerEvent",value:function(i){this.taskPipe.absorbedChange(1),"reject_current"!==i?"kick_previous"!==i||this.OutFocusMask.initAntiBrushTips():this.OutFocusMask.initBanTips()}},{key:"initVisibilitychange",value:function(){var i=this;document.addEventListener("visibilitychange",(function(){if("hidden"===document.visibilityState){if(d.a.safari&&!i.lastFullScreenState&&h.a.isFullscreen)return void(i.lastFullScreenState=h.a.isFullscreen);i.ineffectiveEvent()}}))}},{key:"safariResetFullScreenState",value:function(){var i=this;window.addEventListener("resize",(function(){!i.fullScreenTimer&&i.lastFullScreenState&&(i.fullScreenTimer=setTimeout((function(){i.lastFullScreenState=h.a.isFullscreen,clearTimeout(i.fullScreenTimer),i.fullScreenTimer=null}),66))}))}},{key:"initActivity",value:function(){this.afterActivity(),document.onmousedown=this.afterActivity.bind(this),document.onscroll=this.afterActivity.bind(this),document.onkeypress=this.afterActivity.bind(this),document.onmousemove=this.afterActivity.bind(this)}},{key:"afterActivity",value:function(){var i=this;this.maskElementHide(),clearTimeout(this.activityTimer),this.activityTimer=null,this.activityTimer=setTimeout((function(){i.ineffectiveEvent()}),1e3*this.ACTIVITY_TIME)}},{key:"maskElementShow",value:function(){var i=this;clearTimeout(this.eventMaskTimer),this.eventMaskTimer=null,this.eventMaskTimer=setTimeout((function(){i.eventMaskElement.show()}),1e3*this.EVENT_MASK_TIME)}},{key:"maskElementHide",value:function(){this.eventMaskElement.hide(),this.maskElementShow()}}]),i}()},91:function(i,e,s){"use strict";var t=s(20),n=s.n(t),r=s(3),o=s.n(r),a=s(4),l=s.n(a),u=(s(109),function(){function i(){o()(this,i)}return l()(i,null,[{key:"set",value:function(i,e,s){var t=store.get("durations",{});t&&t instanceof Array||(t=new Array);var n=i+"-"+e+":"+s;t.length>0&&t.slice(t.length-1,t.length)[0].indexOf(i+"-"+e)>-1&&t.splice(t.length-1,t.length),t.length>=20&&t.shift(),t.push(n),store.set("durations",t)}},{key:"get",value:function(i,e){var s=store.get("durations",{});if(s)for(var t=0;t<s.length;t++){if(s[t].indexOf(i+"-"+e)>-1){var r=s[t];return n()(r.split(":")[1])}}return 0}},{key:"del",value:function(i,e){var s=store.get("durations");if(s){for(var t=0;t<s.length;t++){s[t].indexOf(i+"-"+e)>-1&&s.splice(t,1)}store.set("durations",s)}}}]),i}());e.a=u}});