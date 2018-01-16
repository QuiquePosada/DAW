(function(){var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},f="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ba=function(){ba=function(){};f.Symbol||(f.Symbol=ca)},da=0,ca=function(a){return"jscomp_symbol_"+(a||"")+da++},l=function(){ba();var a=f.Symbol.iterator;a||(a=f.Symbol.iterator=
f.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(this)}});l=function(){}},ea=function(a){var b=0;return fa(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})},fa=function(a){l();a={next:a};a[f.Symbol.iterator]=function(){return this};return a};var m=this,ga=function(){},ha=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},n=function(a){return"string"==typeof a},p=function(a){return"function"==ha(a)},ia=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ja=function(a,b,c){return a.call.apply(a.bind,arguments)},ka=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,
c)}}return function(){return a.apply(b,arguments)}},q=function(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return q.apply(null,arguments)};var la=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},r=function(a,b){return a<b?-1:a>b?1:0};var t;a:{var ma=m.navigator;if(ma){var na=ma.userAgent;if(na){t=na;break a}}t=""}var v=function(a){return-1!=t.indexOf(a)};var w=function(){return(v("Chrome")||v("CriOS"))&&!v("Edge")};var x=function(){return v("iPhone")&&!v("iPod")&&!v("iPad")};var pa=function(a,b){var c=oa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var y=v("Opera"),z=v("Trident")||v("MSIE"),qa=v("Edge"),B=v("Gecko")&&!(-1!=t.toLowerCase().indexOf("webkit")&&!v("Edge"))&&!(v("Trident")||v("MSIE"))&&!v("Edge"),C=-1!=t.toLowerCase().indexOf("webkit")&&!v("Edge"),ra=v("Macintosh"),sa=v("Windows"),ta=v("Android"),ua=x(),va=v("iPad"),wa=v("iPod"),xa=function(){var a=m.document;return a?a.documentMode:void 0},D;
a:{var E="",F=function(){var a=t;if(B)return/rv\:([^\);]+)(\)|;)/.exec(a);if(qa)return/Edge\/([\d\.]+)/.exec(a);if(z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(C)return/WebKit\/(\S+)/.exec(a);if(y)return/(?:Version)[ \/]?(\S+)/.exec(a)}();F&&(E=F?F[1]:"");if(z){var G=xa();if(null!=G&&G>parseFloat(E)){D=String(G);break a}}D=E}
var H=D,oa={},I=function(a){return pa(a,function(){for(var b=0,c=la(String(H)).split("."),d=la(String(a)).split("."),e=Math.max(c.length,d.length),h=0;0==b&&h<e;h++){var k=c[h]||"",g=d[h]||"";do{k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==k[0].length&&0==g[0].length)break;b=r(0==k[1].length?0:parseInt(k[1],10),0==g[1].length?0:parseInt(g[1],10))||r(0==k[2].length,0==g[2].length)||r(k[2],g[2]);k=k[3];g=g[3]}while(0==b)}return 0<=b})},ya;var za=m.document;
ya=za&&z?xa()||("CSS1Compat"==za.compatMode?parseInt(H,10):5):void 0;!B&&!z||z&&9<=Number(ya)||B&&I("1.9.1");z&&I("9");var J=function(a){return a?a.parentWindow||a.defaultView:window};var K=function(a,b,c){this.F=c;this.C=a;this.H=b;this.m=0;this.l=null};K.prototype.get=function(){var a;0<this.m?(this.m--,a=this.l,this.l=a.next,a.next=null):a=this.C();return a};K.prototype.put=function(a){this.H(a);this.m<this.F&&(this.m++,a.next=this.l,this.l=a)};var Aa=function(a){m.setTimeout(function(){throw a;},0)},L,Ba=function(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!v("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,
a=q(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!v("Trident")&&!v("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.A;c.A=null;a()}};return function(a){d.next={A:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}};var M=function(){this.s=this.g=null},Ca=new K(function(){return new N},function(a){a.reset()},100);M.prototype.add=function(a,b){var c=Ca.get();c.set(a,b);this.s?this.s.next=c:this.g=c;this.s=c};M.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.s=null),a.next=null);return a};var N=function(){this.next=this.scope=this.w=null};N.prototype.set=function(a,b){this.w=a;this.scope=b;this.next=null};N.prototype.reset=function(){this.next=this.scope=this.w=null};var Fa=function(a,b){O||Da();P||(O(),P=!0);Ea.add(a,b)},O,Da=function(){if(-1!=String(m.Promise).indexOf("[native code]")){var a=m.Promise.resolve(void 0);O=function(){a.then(Ga)}}else O=function(){var a=Ga;!p(m.setImmediate)||m.Window&&m.Window.prototype&&!v("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(L||(L=Ba()),L(a)):m.setImmediate(a)}},P=!1,Ea=new M,Ga=function(){for(var a;a=Ea.remove();){try{a.w.call(a.scope)}catch(b){Aa(b)}Ca.put(a)}P=!1};var R=function(a,b){this.a=0;this.B=void 0;this.i=this.b=this.o=null;this.j=this.v=!1;if(a!=ga)try{var c=this;a.call(b,function(a){Q(c,2,a)},function(a){Q(c,3,a)})}catch(d){Q(this,3,d)}},Ha=function(){this.next=this.context=this.f=this.h=this.c=null;this.u=!1};Ha.prototype.reset=function(){this.context=this.f=this.h=this.c=null;this.u=!1};
var Ia=new K(function(){return new Ha},function(a){a.reset()},100),Ja=function(a,b,c){var d=Ia.get();d.h=a;d.f=b;d.context=c;return d},La=function(){var a,b,c=new R(function(c,e){a=c;b=e});return new Ka(c,a,b)};R.prototype.then=function(a,b,c){return Ma(this,p(a)?a:null,p(b)?b:null,c)};R.prototype.then=R.prototype.then;R.prototype.$goog_Thenable=!0;
var Oa=function(a,b){a.b||2!=a.a&&3!=a.a||Na(a);a.i?a.i.next=b:a.b=b;a.i=b},Ma=function(a,b,c,d){var e=Ja(null,null,null);e.c=new R(function(a,k){e.h=b?function(c){try{var e=b.call(d,c);a(e)}catch(u){k(u)}}:a;e.f=c?function(b){try{var e=c.call(d,b);a(e)}catch(u){k(u)}}:k});e.c.o=a;Oa(a,e);return e.c};R.prototype.J=function(a){this.a=0;Q(this,2,a)};R.prototype.K=function(a){this.a=0;Q(this,3,a)};
var Q=function(a,b,c){if(0==a.a){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.a=1;var d;a:{var e=c,h=a.J,k=a.K;if(e instanceof R)Oa(e,Ja(h||ga,k||null,a)),d=!0;else{var g;if(e)try{g=!!e.$goog_Thenable}catch(u){g=!1}else g=!1;if(g)e.then(h,k,a),d=!0;else{if(ia(e))try{var A=e.then;if(p(A)){Pa(e,A,h,k,a);d=!0;break a}}catch(u){k.call(a,u);d=!0;break a}d=!1}}}d||(a.B=c,a.a=b,a.o=null,Na(a),3!=b||Qa(a,c))}},Pa=function(a,b,c,d,e){var h=!1,k=function(a){h||(h=!0,c.call(e,a))},g=function(a){h||
(h=!0,d.call(e,a))};try{b.call(a,k,g)}catch(A){g(A)}},Na=function(a){a.v||(a.v=!0,Fa(a.D,a))},Ra=function(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.i=null);return b};R.prototype.D=function(){for(var a;a=Ra(this);){var b=this.a,c=this.B;if(3==b&&a.f&&!a.u){var d;for(d=this;d&&d.j;d=d.o)d.j=!1}if(a.c)a.c.o=null,Sa(a,b,c);else try{a.u?a.h.call(a.context):Sa(a,b,c)}catch(e){Ta.call(null,e)}Ia.put(a)}this.v=!1};
var Sa=function(a,b,c){2==b?a.h.call(a.context,c):a.f&&a.f.call(a.context,c)},Qa=function(a,b){a.j=!0;Fa(function(){a.j&&Ta.call(null,b)})},Ta=Aa,Ka=function(a,b,c){this.G=a;this.resolve=b;this.reject=c};var Ua=function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});m.addEventListener("test",null,b)}catch(c){}return a}();var S=function(a){var b=J();b.google_image_requests||(b.google_image_requests=[]);var c=b.document.createElement("img");c.src=a;b.google_image_requests.push(c)};var Va=function(a){return"//pagead2.googlesyndication.com/pagead/gen_204?id=sodar&v=17&t="+a},T=function(a,b,c,d){a=Va(1)+"&e="+a;c&&(a+="&li="+encodeURIComponent(String(c)));d&&(a+="&cv="+encodeURIComponent(String(d)));b&&(a+="&bgai="+encodeURIComponent(String(b)));S(a)},Wa=function(a,b,c,d,e){"0.01"<Math.random()||(a="//pagead2.googlesyndication.com/pagead/gen_204?id=sodarir&v=17&d="+(a?1:0)+"&s="+(b?1:0)+"&f=0.01",d&&(a+="&li="+encodeURIComponent(String(d))),e&&(a+="&cv="+encodeURIComponent(String(e))),
c&&(a+="&bgai="+encodeURIComponent(String(c))),S(a))},Xa=function(a,b){return function(){try{return a.apply(this,arguments)}catch(g){if(!(1<=U.count)){var c=Va(3)+"&c="+encodeURIComponent(String(b))+"&ex=",d=g.toString();g.name&&-1==d.indexOf(g.name)&&(d+=": "+g.name);g.message&&-1==d.indexOf(g.message)&&(d+=": "+g.message);if(g.stack){var e=g.stack,h=d;try{-1==e.indexOf(h)&&(e=h+"\n"+e);for(var k;e!=k;)k=e,e=e.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");d=e.replace(/\n */g,"\n")}catch(A){d=
h}}c+=encodeURIComponent(String(d));2E3<c.length?T(11):S(c);U.count+=1}}}},U={count:0},Ya=function(a,b){b=Xa(b,"i:lh");var c={capture:void 0};a.addEventListener?a.addEventListener("load",b,Ua?c:c?c.capture||!1:!1):a.attachEvent&&a.attachEvent("onload",b);return b},Za=function(a,b){var c,d=b;c=Ya(a,function(){if(d){var b=d;d=null;var h={capture:void 0};a.removeEventListener?a.removeEventListener("load",c,Ua?h:h?h.capture||!1:!1):a.detachEvent&&a.detachEvent("onload",c);return b.apply(this,arguments)}})},
V=function(){this.I=La()};V.prototype.start=function(){};V.prototype.end=function(){this.I.resolve("")};var W=!1,X=function(a){if(a=a.match(/[\d]+/g))a.length=3};
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(W=!0,a.description)){X(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){W=!0;return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],W=!(!a||!a.enabledPlugin))){X(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");W=!0;X(b.GetVariable("$version"));return}catch(c){}try{b=
new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");W=!0;return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),W=!0,X(b.GetVariable("$version"))}catch(c){}})();(function(){var a;return sa?(a=/Windows NT ([0-9.]+)/,(a=a.exec(t))?a[1]:"0"):ra?(a=/10[_.][0-9_.]+/,(a=a.exec(t))?a[0].replace(/_/g,"."):"10"):ta?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(t))?a[1]:""):ua||va||wa?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(t))?a[1].replace(/_/g,"."):""):""})();var $a=v("Firefox"),ab=x()||v("iPod"),bb=v("iPad"),cb=v("Android")&&!(w()||v("Firefox")||v("Opera")||v("Silk")),db=w(),eb=v("Safari")&&!(w()||v("Coast")||v("Opera")||v("Edge")||v("Silk")||v("Android"))&&!(x()||v("iPad")||v("iPod"));var Y=function(a){return(a=a.exec(t))?a[1]:""};(function(){if($a)return Y(/Firefox\/([0-9.]+)/);if(z||qa||y)return H;if(db)return x()||v("iPad")||v("iPod")?Y(/CriOS\/([0-9.]+)/):Y(/Chrome\/([0-9.]+)/);if(eb&&!(x()||v("iPad")||v("iPod")))return Y(/Version\/([0-9.]+)/);if(ab||bb){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(t);if(a)return a[1]+"."+a[2]}else if(cb)return(a=Y(/Android\s+([0-9.]+)/))?a:Y(/Version\/([0-9.]+)/);return""})();z&&I("9");!C||I("528");B&&I("1.9b")||z&&I("8")||y&&I("9.5")||C&&I("528");B&&!I("8")||z&&I("9");var fb=function(a){if(!ia(a))return!1;switch(a["0"]){case "0":return!("0"===a["0"]&&n(a["1"])&&n(a["2"])&&n(a["3"])&&n(a["4"]))||"5"in a&&!n(a["5"])?!1:!0;case "1":var b;"1"===a["0"]&&n(a["1"])?(b=a["6"],a=a["7"],b=""!==b&&""!==a&&!isNaN(Number(b))&&!isNaN(Number(a))):b=!1;return b}return!1},gb=function(a){if(!fb(a))return null;var b=[],c;for(c in a)b.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return b.join("&")};var hb={},Z=(hb.it=new V,hb.dt=new V,hb),ib=La(),jb=function(){var a=J().GoogleTyFxhY;if(!a)return T(13),null;if(0==a.length)return T(1),null;a=a.shift();return(a._scs_||a._cv_)&&a._bgu_&&a._bgp_?a:(T(2),null)},kb=function(a){var b;a:{try{b=a.contentWindow||(a.contentDocument?J(a.contentDocument):null);break a}catch(c){}b=null}ib.resolve([(0==a.src.indexOf("https:")?"https":"http")+"://tpc.googlesyndication.com",b])},lb=function(){var a=document.createElement("iframe");Za(a,q(kb,null,a));a.src="//tpc.googlesyndication.com/sodar/3PnwIJ1d.html";
a.width="0";a.height="0";a.style.display="none";document.body.appendChild(a)},mb=function(a){ib.G.then(function(b){var c;l();c=(c=b[Symbol.iterator])?c.call(b):ea(b);b=c.next().value;c=c.next().value;var d=a._bgu_,e=a._bgp_,h=a._li_,k=a._cv_,g={0:"0"};g["1"]=a._scs_||"";g["2"]=d;g["3"]=e;g["4"]=h||"";g["5"]=k||"";c?c.postMessage(gb(g),b):T(3)})};Z.it.start();(function(a,b,c){Xa(a,b).apply(null,Array.prototype.slice.call(arguments,2))})(function(){var a=J().postMessage?!0:!1,b=!1,c=null,d=null,e=null,h=jb();h&&(b=!0,c=h._scs_,d=h._li_,e=h._cv_,a?(lb(),mb(h)):T(8,c,d,e),m.setTimeout(Xa(function(){Z.dt.start();Z.dt.end()},"i:rsv"),0));Wa(b,a,c,d,e);Z.it.end()},"i:i");}).call(this);
