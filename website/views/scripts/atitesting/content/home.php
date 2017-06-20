
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>ATI Testing | Nursing Education | NCLEX Exam Review | TEAS Testing</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info = {"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"f7f7db9847","applicationID":"9137107","transactionName":"ZwQGZERSV0RVBhAMCV5OJWNmHEpeQAACDAhZFR0fVV5KUloRFhwWXwgKRBhSSkdM","queueTime":0,"applicationTime":79,"ttGuid":"E74127E94C876C9C","agent":""}</script><script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={xpid:"Vw8GUFFSGwoBV1ZTBwY="};window.NREUM||(NREUM={}),__nr_require=function(t,n,e){function r(e){if(!n[e]){var o=n[e]={exports:{}};t[e][0].call(o.exports,function(n){var o=t[e][1][n];return r(o||n)},o,o.exports)}return n[e].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<e.length;o++)r(e[o]);return r}({1:[function(t,n,e){function r(t){try{s.console&&console.log(t)}catch(n){}}var o,i=t("ee"),a=t(15),s={};try{o=localStorage.getItem("__nr_flags").split(","),console&&"function"==typeof console.log&&(s.console=!0,o.indexOf("dev")!==-1&&(s.dev=!0),o.indexOf("nr_dev")!==-1&&(s.nrDev=!0))}catch(c){}s.nrDev&&i.on("internal-error",function(t){r(t.stack)}),s.dev&&i.on("fn-err",function(t,n,e){r(e.stack)}),s.dev&&(r("NR AGENT IN DEVELOPMENT MODE"),r("flags: "+a(s,function(t,n){return t}).join(", ")))},{}],2:[function(t,n,e){function r(t,n,e,r,o){try{d?d-=1:i("err",[o||new UncaughtException(t,n,e)])}catch(s){try{i("ierr",[s,c.now(),!0])}catch(u){}}return"function"==typeof f&&f.apply(this,a(arguments))}function UncaughtException(t,n,e){this.message=t||"Uncaught error with no additional information",this.sourceURL=n,this.line=e}function o(t){i("err",[t,c.now()])}var i=t("handle"),a=t(16),s=t("ee"),c=t("loader"),f=window.onerror,u=!1,d=0;c.features.err=!0,t(1),window.onerror=r;try{throw new Error}catch(l){"stack"in l&&(t(8),t(7),"addEventListener"in window&&t(5),c.xhrWrappable&&t(9),u=!0)}s.on("fn-start",function(t,n,e){u&&(d+=1)}),s.on("fn-err",function(t,n,e){u&&(this.thrown=!0,o(e))}),s.on("fn-end",function(){u&&!this.thrown&&d>0&&(d-=1)}),s.on("internal-error",function(t){i("ierr",[t,c.now(),!0])})},{}],3:[function(t,n,e){t("loader").features.ins=!0},{}],4:[function(t,n,e){function r(t){}if(window.performance&&window.performance.timing&&window.performance.getEntriesByType){var o=t("ee"),i=t("handle"),a=t(8),s=t(7),c="learResourceTimings",f="addEventListener",u="resourcetimingbufferfull",d="bstResource",l="resource",p="-start",h="-end",m="fn"+p,w="fn"+h,v="bstTimer",y="pushState",g=t("loader");g.features.stn=!0,t(6);var b=NREUM.o.EV;o.on(m,function(t,n){var e=t[0];e instanceof b&&(this.bstStart=g.now())}),o.on(w,function(t,n){var e=t[0];e instanceof b&&i("bst",[e,n,this.bstStart,g.now()])}),a.on(m,function(t,n,e){this.bstStart=g.now(),this.bstType=e}),a.on(w,function(t,n){i(v,[n,this.bstStart,g.now(),this.bstType])}),s.on(m,function(){this.bstStart=g.now()}),s.on(w,function(t,n){i(v,[n,this.bstStart,g.now(),"requestAnimationFrame"])}),o.on(y+p,function(t){this.time=g.now(),this.startPath=location.pathname+location.hash}),o.on(y+h,function(t){i("bstHist",[location.pathname+location.hash,this.startPath,this.time])}),f in window.performance&&(window.performance["c"+c]?window.performance[f](u,function(t){i(d,[window.performance.getEntriesByType(l)]),window.performance["c"+c]()},!1):window.performance[f]("webkit"+u,function(t){i(d,[window.performance.getEntriesByType(l)]),window.performance["webkitC"+c]()},!1)),document[f]("scroll",r,{passive:!0}),document[f]("keypress",r,!1),document[f]("click",r,!1)}},{}],5:[function(t,n,e){function r(t){for(var n=t;n&&!n.hasOwnProperty(u);)n=Object.getPrototypeOf(n);n&&o(n)}function o(t){s.inPlace(t,[u,d],"-",i)}function i(t,n){return t[1]}var a=t("ee").get("events"),s=t(18)(a,!0),c=t("gos"),f=XMLHttpRequest,u="addEventListener",d="removeEventListener";n.exports=a,"getPrototypeOf"in Object?(r(document),r(window),r(f.prototype)):f.prototype.hasOwnProperty(u)&&(o(window),o(f.prototype)),a.on(u+"-start",function(t,n){var e=t[1],r=c(e,"nr@wrapped",function(){function t(){if("function"==typeof e.handleEvent)return e.handleEvent.apply(e,arguments)}var n={object:t,"function":e}[typeof e];return n?s(n,"fn-",null,n.name||"anonymous"):e});this.wrapped=t[1]=r}),a.on(d+"-start",function(t){t[1]=this.wrapped||t[1]})},{}],6:[function(t,n,e){var r=t("ee").get("history"),o=t(18)(r);n.exports=r,o.inPlace(window.history,["pushState","replaceState"],"-")},{}],7:[function(t,n,e){var r=t("ee").get("raf"),o=t(18)(r),i="equestAnimationFrame";n.exports=r,o.inPlace(window,["r"+i,"mozR"+i,"webkitR"+i,"msR"+i],"raf-"),r.on("raf-start",function(t){t[0]=o(t[0],"fn-")})},{}],8:[function(t,n,e){function r(t,n,e){t[0]=a(t[0],"fn-",null,e)}function o(t,n,e){this.method=e,this.timerDuration=isNaN(t[1])?0:+t[1],t[0]=a(t[0],"fn-",this,e)}var i=t("ee").get("timer"),a=t(18)(i),s="setTimeout",c="setInterval",f="clearTimeout",u="-start",d="-";n.exports=i,a.inPlace(window,[s,"setImmediate"],s+d),a.inPlace(window,[c],c+d),a.inPlace(window,[f,"clearImmediate"],f+d),i.on(c+u,r),i.on(s+u,o)},{}],9:[function(t,n,e){function r(t,n){d.inPlace(n,["onreadystatechange"],"fn-",s)}function o(){var t=this,n=u.context(t);t.readyState>3&&!n.resolved&&(n.resolved=!0,u.emit("xhr-resolved",[],t)),d.inPlace(t,y,"fn-",s)}function i(t){g.push(t),h&&(x?x.then(a):w?w(a):(E=-E,O.data=E))}function a(){for(var t=0;t<g.length;t++)r([],g[t]);g.length&&(g=[])}function s(t,n){return n}function c(t,n){for(var e in t)n[e]=t[e];return n}t(5);var f=t("ee"),u=f.get("xhr"),d=t(18)(u),l=NREUM.o,p=l.XHR,h=l.MO,m=l.PR,w=l.SI,v="readystatechange",y=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],g=[];n.exports=u;var b=window.XMLHttpRequest=function(t){var n=new p(t);try{u.emit("new-xhr",[n],n),n.addEventListener(v,o,!1)}catch(e){try{u.emit("internal-error",[e])}catch(r){}}return n};if(c(p,b),b.prototype=p.prototype,d.inPlace(b.prototype,["open","send"],"-xhr-",s),u.on("send-xhr-start",function(t,n){r(t,n),i(n)}),u.on("open-xhr-start",r),h){var x=m&&m.resolve();if(!w&&!m){var E=1,O=document.createTextNode(E);new h(a).observe(O,{characterData:!0})}}else f.on("fn-end",function(t){t[0]&&t[0].type===v||a()})},{}],10:[function(t,n,e){function r(t){var n=this.params,e=this.metrics;if(!this.ended){this.ended=!0;for(var r=0;r<d;r++)t.removeEventListener(u[r],this.listener,!1);if(!n.aborted){if(e.duration=a.now()-this.startTime,4===t.readyState){n.status=t.status;var i=o(t,this.lastSize);if(i&&(e.rxSize=i),this.sameOrigin){var c=t.getResponseHeader("X-NewRelic-App-Data");c&&(n.cat=c.split(", ").pop())}}else n.status=0;e.cbTime=this.cbTime,f.emit("xhr-done",[t],t),s("xhr",[n,e,this.startTime])}}}function o(t,n){var e=t.responseType;if("json"===e&&null!==n)return n;var r="arraybuffer"===e||"blob"===e||"json"===e?t.response:t.responseText;return h(r)}function i(t,n){var e=c(n),r=t.params;r.host=e.hostname+":"+e.port,r.pathname=e.pathname,t.sameOrigin=e.sameOrigin}var a=t("loader");if(a.xhrWrappable){var s=t("handle"),c=t(11),f=t("ee"),u=["load","error","abort","timeout"],d=u.length,l=t("id"),p=t(14),h=t(13),m=window.XMLHttpRequest;a.features.xhr=!0,t(9),f.on("new-xhr",function(t){var n=this;n.totalCbs=0,n.called=0,n.cbTime=0,n.end=r,n.ended=!1,n.xhrGuids={},n.lastSize=null,p&&(p>34||p<10)||window.opera||t.addEventListener("progress",function(t){n.lastSize=t.loaded},!1)}),f.on("open-xhr-start",function(t){this.params={method:t[0]},i(this,t[1]),this.metrics={}}),f.on("open-xhr-end",function(t,n){"loader_config"in NREUM&&"xpid"in NREUM.loader_config&&this.sameOrigin&&n.setRequestHeader("X-NewRelic-ID",NREUM.loader_config.xpid)}),f.on("send-xhr-start",function(t,n){var e=this.metrics,r=t[0],o=this;if(e&&r){var i=h(r);i&&(e.txSize=i)}this.startTime=a.now(),this.listener=function(t){try{"abort"===t.type&&(o.params.aborted=!0),("load"!==t.type||o.called===o.totalCbs&&(o.onloadCalled||"function"!=typeof n.onload))&&o.end(n)}catch(e){try{f.emit("internal-error",[e])}catch(r){}}};for(var s=0;s<d;s++)n.addEventListener(u[s],this.listener,!1)}),f.on("xhr-cb-time",function(t,n,e){this.cbTime+=t,n?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof e.onload||this.end(e)}),f.on("xhr-load-added",function(t,n){var e=""+l(t)+!!n;this.xhrGuids&&!this.xhrGuids[e]&&(this.xhrGuids[e]=!0,this.totalCbs+=1)}),f.on("xhr-load-removed",function(t,n){var e=""+l(t)+!!n;this.xhrGuids&&this.xhrGuids[e]&&(delete this.xhrGuids[e],this.totalCbs-=1)}),f.on("addEventListener-end",function(t,n){n instanceof m&&"load"===t[0]&&f.emit("xhr-load-added",[t[1],t[2]],n)}),f.on("removeEventListener-end",function(t,n){n instanceof m&&"load"===t[0]&&f.emit("xhr-load-removed",[t[1],t[2]],n)}),f.on("fn-start",function(t,n,e){n instanceof m&&("onload"===e&&(this.onload=!0),("load"===(t[0]&&t[0].type)||this.onload)&&(this.xhrCbStart=a.now()))}),f.on("fn-end",function(t,n){this.xhrCbStart&&f.emit("xhr-cb-time",[a.now()-this.xhrCbStart,this.onload,n],n)})}},{}],11:[function(t,n,e){n.exports=function(t){var n=document.createElement("a"),e=window.location,r={};n.href=t,r.port=n.port;var o=n.href.split("://");!r.port&&o[1]&&(r.port=o[1].split("/")[0].split("@").pop().split(":")[1]),r.port&&"0"!==r.port||(r.port="https"===o[0]?"443":"80"),r.hostname=n.hostname||e.hostname,r.pathname=n.pathname,r.protocol=o[0],"/"!==r.pathname.charAt(0)&&(r.pathname="/"+r.pathname);var i=!n.protocol||":"===n.protocol||n.protocol===e.protocol,a=n.hostname===document.domain&&n.port===e.port;return r.sameOrigin=i&&(!n.hostname||a),r}},{}],12:[function(t,n,e){function r(){}function o(t,n,e){return function(){return i(t,[f.now()].concat(s(arguments)),n?null:this,e),n?void 0:this}}var i=t("handle"),a=t(15),s=t(16),c=t("ee").get("tracer"),f=t("loader"),u=NREUM;"undefined"==typeof window.newrelic&&(newrelic=u);var d=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],l="api-",p=l+"ixn-";a(d,function(t,n){u[n]=o(l+n,!0,"api")}),u.addPageAction=o(l+"addPageAction",!0),u.setCurrentRouteName=o(l+"routeName",!0),n.exports=newrelic,u.interaction=function(){return(new r).get()};var h=r.prototype={createTracer:function(t,n){var e={},r=this,o="function"==typeof n;return i(p+"tracer",[f.now(),t,e],r),function(){if(c.emit((o?"":"no-")+"fn-start",[f.now(),r,o],e),o)try{return n.apply(this,arguments)}finally{c.emit("fn-end",[f.now()],e)}}}};a("setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,n){h[n]=o(p+n)}),newrelic.noticeError=function(t){"string"==typeof t&&(t=new Error(t)),i("err",[t,f.now()])}},{}],13:[function(t,n,e){n.exports=function(t){if("string"==typeof t&&t.length)return t.length;if("object"==typeof t){if("undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&t.byteLength)return t.byteLength;if("undefined"!=typeof Blob&&t instanceof Blob&&t.size)return t.size;if(!("undefined"!=typeof FormData&&t instanceof FormData))try{return JSON.stringify(t).length}catch(n){return}}}},{}],14:[function(t,n,e){var r=0,o=navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);o&&(r=+o[1]),n.exports=r},{}],15:[function(t,n,e){function r(t,n){var e=[],r="",i=0;for(r in t)o.call(t,r)&&(e[i]=n(r,t[r]),i+=1);return e}var o=Object.prototype.hasOwnProperty;n.exports=r},{}],16:[function(t,n,e){function r(t,n,e){n||(n=0),"undefined"==typeof e&&(e=t?t.length:0);for(var r=-1,o=e-n||0,i=Array(o<0?0:o);++r<o;)i[r]=t[n+r];return i}n.exports=r},{}],17:[function(t,n,e){n.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],18:[function(t,n,e){function r(t){return!(t&&t instanceof Function&&t.apply&&!t[a])}var o=t("ee"),i=t(16),a="nr@original",s=Object.prototype.hasOwnProperty,c=!1;n.exports=function(t,n){function e(t,n,e,o){function nrWrapper(){var r,a,s,c;try{a=this,r=i(arguments),s="function"==typeof e?e(r,a):e||{}}catch(f){l([f,"",[r,a,o],s])}u(n+"start",[r,a,o],s);try{return c=t.apply(a,r)}catch(d){throw u(n+"err",[r,a,d],s),d}finally{u(n+"end",[r,a,c],s)}}return r(t)?t:(n||(n=""),nrWrapper[a]=t,d(t,nrWrapper),nrWrapper)}function f(t,n,o,i){o||(o="");var a,s,c,f="-"===o.charAt(0);for(c=0;c<n.length;c++)s=n[c],a=t[s],r(a)||(t[s]=e(a,f?s+o:o,i,s))}function u(e,r,o){if(!c||n){var i=c;c=!0;try{t.emit(e,r,o,n)}catch(a){l([a,e,r,o])}c=i}}function d(t,n){if(Object.defineProperty&&Object.keys)try{var e=Object.keys(t);return e.forEach(function(e){Object.defineProperty(n,e,{get:function(){return t[e]},set:function(n){return t[e]=n,n}})}),n}catch(r){l([r])}for(var o in t)s.call(t,o)&&(n[o]=t[o]);return n}function l(n){try{t.emit("internal-error",n)}catch(e){}}return t||(t=o),e.inPlace=f,e.flag=a,e}},{}],ee:[function(t,n,e){function r(){}function o(t){function n(t){return t&&t instanceof r?t:t?c(t,s,i):i()}function e(e,r,o,i){if(!l.aborted||i){t&&t(e,r,o);for(var a=n(o),s=h(e),c=s.length,f=0;f<c;f++)s[f].apply(a,r);var d=u[y[e]];return d&&d.push([g,e,r,a]),a}}function p(t,n){v[t]=h(t).concat(n)}function h(t){return v[t]||[]}function m(t){return d[t]=d[t]||o(e)}function w(t,n){f(t,function(t,e){n=n||"feature",y[e]=n,n in u||(u[n]=[])})}var v={},y={},g={on:p,emit:e,get:m,listeners:h,context:n,buffer:w,abort:a,aborted:!1};return g}function i(){return new r}function a(){(u.api||u.feature)&&(l.aborted=!0,u=l.backlog={})}var s="nr@context",c=t("gos"),f=t(15),u={},d={},l=n.exports=o();l.backlog=u},{}],gos:[function(t,n,e){function r(t,n,e){if(o.call(t,n))return t[n];var r=e();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,n,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return t[n]=r,r}var o=Object.prototype.hasOwnProperty;n.exports=r},{}],handle:[function(t,n,e){function r(t,n,e,r){o.buffer([t],r),o.emit(t,n,e)}var o=t("ee").get("handle");n.exports=r,r.ee=o},{}],id:[function(t,n,e){function r(t){var n=typeof t;return!t||"object"!==n&&"function"!==n?-1:t===window?0:a(t,i,function(){return o++})}var o=1,i="nr@id",a=t("gos");n.exports=r},{}],loader:[function(t,n,e){function r(){if(!x++){var t=b.info=NREUM.info,n=l.getElementsByTagName("script")[0];if(setTimeout(u.abort,3e4),!(t&&t.licenseKey&&t.applicationID&&n))return u.abort();f(y,function(n,e){t[n]||(t[n]=e)}),c("mark",["onload",a()+b.offset],null,"api");var e=l.createElement("script");e.src="https://"+t.agent,n.parentNode.insertBefore(e,n)}}function o(){"complete"===l.readyState&&i()}function i(){c("mark",["domContent",a()+b.offset],null,"api")}function a(){return E.exists&&performance.now?Math.round(performance.now()):(s=Math.max((new Date).getTime(),s))-b.offset}var s=(new Date).getTime(),c=t("handle"),f=t(15),u=t("ee"),d=window,l=d.document,p="addEventListener",h="attachEvent",m=d.XMLHttpRequest,w=m&&m.prototype;NREUM.o={ST:setTimeout,SI:d.setImmediate,CT:clearTimeout,XHR:m,REQ:d.Request,EV:d.Event,PR:d.Promise,MO:d.MutationObserver};var v=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1039.min.js"},g=m&&w&&w[p]&&!/CriOS/.test(navigator.userAgent),b=n.exports={offset:s,now:a,origin:v,features:{},xhrWrappable:g};t(12),l[p]?(l[p]("DOMContentLoaded",i,!1),d[p]("load",r,!1)):(l[h]("onreadystatechange",o),d[h]("onload",r)),c("mark",["firstbyte",s],null,"api");var x=0,E=t(17)},{}]},{},["loader",2,10,4,3]);</script>
<meta name="title" content="ATI - You May Begin.">
<link rel="image_src" href="/website/static/atitesting/css/App_Themes/AtiTesting/imageSrc_ATI.jpg">
<link rel="publisher" href="https://plus.google.com/100933774915862026201">
<meta name="msvalidate.01" content="EF7346A25BF8B9E18548DA405E69B6F8">
<meta name="google-site-verification" content="92R1-VKoXpUW0adV6Ck-Pa3pehPluZf_Bks6yeaLLXg">
<link href="/website/static/atitesting/css/App_Themes/AtiTesting/Default.css" type="text/css" rel="stylesheet">
<meta name="Description" content="We help turn ordinary people into nurses. ATI offers the most comprehensive and adaptive learning systems to assist in preparing students with what they need to know to pass high stakes tests and to become compassionate, skilled nurses. ">
<meta name="Keywords" content="Test Preparation, Nursing Student, TEAS, NCLEX, Curriculum, Nursing School, ATI Product Solutions, Nurse Educators, You May Begin, NCLEX Live Review">
<style type="text/css">
#header {
  background-image: url(/website/static/atitesting/css/App_Themes/AtiTesting/Images/header-image1.jpg)
}
</style>
<link href="/website/static/atitesting/css/Sitefinity/ControlTemplates/Search/searchCommonLayout.css" type="text/css" rel="stylesheet" media="screen">
<link href="/website/static/atitesting/css/WebResource.css?d=z1LcoN3CfmhwPSr92_PWRJlR8GpZcNd--tMiEnCIKnXhZARiPw8QJM8IHfHOr4Q-WyKaAtHn65Srm3E9vEhpAPeel0oRVkbRIjLl-JU7Hb3qVLHqhegHzFnKzVoz8Jnw0&amp;t=634039095040000000" type="text/css" rel="stylesheet" media="screen">
<meta name="Generator" content="Sitefinity 3.7.2096.2:2">
</head>
<body>
<form name="aspnetForm" method="post" action="home.aspx" id="aspnetForm">
  <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUENTM4MQ9kFgJmD2QWAgIHEGRkFgYCBw9kFgICAg9kFgJmD2QWAmYPZBYCAgUPFgIeC18hSXRlbUNvdW50ZmQCCQ9kFgICAQ9kFgJmD2QWAmYPDxYCHg1BbHRlcm5hdGVUZXh0BQtOdXJzZXMgV2Vla2RkAhcPZBYEZg8WAh4EaHJlZgU/aHR0cDovL3d3dy5hdGl0ZXN0aW5nLmNvbS9hdGlfbmV4dF9nZW4vR2VuZXJhbC9Mb2dpbl9TdGVwMS5hc3B4ZAIBDxYCHwIFKmh0dHA6Ly9zdHVkZW50LmF0aXRlc3RpbmcuY29tL2xvZ2luP21vZGU9MWQYDQUhY3RsMDAkSGVhZGVyU2VhcmNoQmFyJEV2ZW50c1ZpZXcxDxQrAAIUKwAEKClYU3lzdGVtLkd1aWQsIG1zY29ybGliLCBWZXJzaW9uPTIuMC4wLjAsIEN1bHR1cmU9bmV1dHJhbCwgUHVibGljS2V5VG9rZW49Yjc3YTVjNTYxOTM0ZTA4OSQwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDACAWQLKZIBVGVsZXJpay5DbXMuRW5naW5lLldlYkNvbnRyb2xzLkNvbnRlbnRWaWV3K0JlaGF2aW9yTW9kZXMsIFRlbGVyaWsuQ21zLkVuZ2luZSwgVmVyc2lvbj0zLjcuMjA5Ni4yLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPWRmZWFlZTBlMzk3OGFjNzkABTdQdWJsaWNhdGlvbl9EYXRlIDw9ICIjbm93IiBBTkQgRXhwaXJhdGlvbl9EYXRlID4gIiNub3ciZAUdY3RsMDAkU2lkZUJhciRHZW5lcmljQ29udGVudDcPFCsAAWRkBSFjdGwwMCRMZWZ0Q29udGVudCRHZW5lcmljQ29udGVudDIPFCsAAWRkBR1jdGwwMCRTaWRlQmFyJEdlbmVyaWNDb250ZW50NQ8UKwABZGQFHWN0bDAwJFNpZGVCYXIkR2VuZXJpY0NvbnRlbnQ4DxQrAAFkZAUdY3RsMDAkU2lkZUJhciRHZW5lcmljQ29udGVudDkPFCsAAWRkBR1jdGwwMCRTaWRlQmFyJEdlbmVyaWNDb250ZW50Ng8UKwABZGQFIGN0bDAwJFNpZGVCYXIkdG1fR2VuZXJpY0NvbnRlbnQxDxQrAAFkZAUdY3RsMDAkU2lkZUJhciRHZW5lcmljQ29udGVudDQPFCsAAQUPR2VuZXJpY19Db250ZW50ZAUiY3RsMDAkUmlnaHRDb250ZW50JEdlbmVyaWNDb250ZW50MQ8UKwABZGQFHWN0bDAwJFNpZGVCYXIkR2VuZXJpY0NvbnRlbnQzDxQrAAFkZAUuY3RsMDAkSGVhZGVyU2VhcmNoQmFyJEV2ZW50c1ZpZXcxJGN0bDAwJHBhZ2VyMQ8UKwADZgIBaGQFHmN0bDAwJFNpZGVCYXIkR2VuZXJpY0NvbnRlbnQxMA8UKwABZGSXhiYpRR0aRjUxc21NuRzGZgzxoQ==">
  <script src="/website/static/atitesting/js/WebResource.js?d=CprpFpCxf889CnZhXxIh2do-TmecyCbPluS7RaHsrb7HEnlyVg8Y-4nB2oSN_kQl-MSZrxJ5-H9Llcrp9iVoJirprOxYeRQEfXKgkly_J_s1&amp;t=634239539880000000" type="text/javascript"></script> 
  <script src="/website/static/atitesting/js/WebResource-1.js?d=Til8dGnhU9i9RYohveioPT7GX3PwWYfU-OOWF7CiSLfmAw3RXuvpRTBlD9dcwKoBLFhJudX1Ooqv0Zcd6cu1ng2&amp;t=634039095040000000" type="text/javascript"></script> 
  <script src="/website/static/atitesting/js/WebResource-2.js?d=z1LcoN3CfmhwPSr92_PWRJlR8GpZcNd--tMiEnCIKnUMZfoVBIIBxhWw9UcpoRct9ko-thjMXNm7r7mzmcs4RA2&amp;t=634039095040000000" type="text/javascript"></script> 
  <script src="/website/static/atitesting/js/ScriptResource.js?d=QauLQPgrD1Twap8bjeqaOLKAebq0-F7EX-jfx1corSBUUnAUwdKTCBFmufNWY69cCustA1Wpp1sL6xMZ0LOPQ0HFHiY2msRlhCGb1w2BNZk1&amp;t=2e2045e2" type="text/javascript"></script>
  <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="15E68AF1">
  <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="/wEWAwLO3I3NCgLS84eLDQKj5vPaDBLSmbRm7Zo31CC+fC60fvQFl/xS">
  <!-- Google Tag Manager -->
  <noscript>
  <iframe src="//www.googletagmanager.com/ns.html?id=GTM-RC5P" height="0" width="0" style="display:none;visibility:hidden"></iframe>
  </noscript>
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-RC5P');</script> 
  <!-- End Google Tag Manager -->
  
  <div id="primary">

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>ATI Testing | Nursing Education | NCLEX Exam Review | TEAS Testing</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info = {"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"f7f7db9847","applicationID":"9137107","transactionName":"ZwQGZERSV0RVBhAMCV5OJWNmHEpeQAACDAhZFR0fVV5KUloRFhwWXwgKRBhSSkdM","queueTime":0,"applicationTime":79,"ttGuid":"E74127E94C876C9C","agent":""}</script><script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={xpid:"Vw8GUFFSGwoBV1ZTBwY="};window.NREUM||(NREUM={}),__nr_require=function(t,n,e){function r(e){if(!n[e]){var o=n[e]={exports:{}};t[e][0].call(o.exports,function(n){var o=t[e][1][n];return r(o||n)},o,o.exports)}return n[e].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<e.length;o++)r(e[o]);return r}({1:[function(t,n,e){function r(t){try{s.console&&console.log(t)}catch(n){}}var o,i=t("ee"),a=t(15),s={};try{o=localStorage.getItem("__nr_flags").split(","),console&&"function"==typeof console.log&&(s.console=!0,o.indexOf("dev")!==-1&&(s.dev=!0),o.indexOf("nr_dev")!==-1&&(s.nrDev=!0))}catch(c){}s.nrDev&&i.on("internal-error",function(t){r(t.stack)}),s.dev&&i.on("fn-err",function(t,n,e){r(e.stack)}),s.dev&&(r("NR AGENT IN DEVELOPMENT MODE"),r("flags: "+a(s,function(t,n){return t}).join(", ")))},{}],2:[function(t,n,e){function r(t,n,e,r,o){try{d?d-=1:i("err",[o||new UncaughtException(t,n,e)])}catch(s){try{i("ierr",[s,c.now(),!0])}catch(u){}}return"function"==typeof f&&f.apply(this,a(arguments))}function UncaughtException(t,n,e){this.message=t||"Uncaught error with no additional information",this.sourceURL=n,this.line=e}function o(t){i("err",[t,c.now()])}var i=t("handle"),a=t(16),s=t("ee"),c=t("loader"),f=window.onerror,u=!1,d=0;c.features.err=!0,t(1),window.onerror=r;try{throw new Error}catch(l){"stack"in l&&(t(8),t(7),"addEventListener"in window&&t(5),c.xhrWrappable&&t(9),u=!0)}s.on("fn-start",function(t,n,e){u&&(d+=1)}),s.on("fn-err",function(t,n,e){u&&(this.thrown=!0,o(e))}),s.on("fn-end",function(){u&&!this.thrown&&d>0&&(d-=1)}),s.on("internal-error",function(t){i("ierr",[t,c.now(),!0])})},{}],3:[function(t,n,e){t("loader").features.ins=!0},{}],4:[function(t,n,e){function r(t){}if(window.performance&&window.performance.timing&&window.performance.getEntriesByType){var o=t("ee"),i=t("handle"),a=t(8),s=t(7),c="learResourceTimings",f="addEventListener",u="resourcetimingbufferfull",d="bstResource",l="resource",p="-start",h="-end",m="fn"+p,w="fn"+h,v="bstTimer",y="pushState",g=t("loader");g.features.stn=!0,t(6);var b=NREUM.o.EV;o.on(m,function(t,n){var e=t[0];e instanceof b&&(this.bstStart=g.now())}),o.on(w,function(t,n){var e=t[0];e instanceof b&&i("bst",[e,n,this.bstStart,g.now()])}),a.on(m,function(t,n,e){this.bstStart=g.now(),this.bstType=e}),a.on(w,function(t,n){i(v,[n,this.bstStart,g.now(),this.bstType])}),s.on(m,function(){this.bstStart=g.now()}),s.on(w,function(t,n){i(v,[n,this.bstStart,g.now(),"requestAnimationFrame"])}),o.on(y+p,function(t){this.time=g.now(),this.startPath=location.pathname+location.hash}),o.on(y+h,function(t){i("bstHist",[location.pathname+location.hash,this.startPath,this.time])}),f in window.performance&&(window.performance["c"+c]?window.performance[f](u,function(t){i(d,[window.performance.getEntriesByType(l)]),window.performance["c"+c]()},!1):window.performance[f]("webkit"+u,function(t){i(d,[window.performance.getEntriesByType(l)]),window.performance["webkitC"+c]()},!1)),document[f]("scroll",r,{passive:!0}),document[f]("keypress",r,!1),document[f]("click",r,!1)}},{}],5:[function(t,n,e){function r(t){for(var n=t;n&&!n.hasOwnProperty(u);)n=Object.getPrototypeOf(n);n&&o(n)}function o(t){s.inPlace(t,[u,d],"-",i)}function i(t,n){return t[1]}var a=t("ee").get("events"),s=t(18)(a,!0),c=t("gos"),f=XMLHttpRequest,u="addEventListener",d="removeEventListener";n.exports=a,"getPrototypeOf"in Object?(r(document),r(window),r(f.prototype)):f.prototype.hasOwnProperty(u)&&(o(window),o(f.prototype)),a.on(u+"-start",function(t,n){var e=t[1],r=c(e,"nr@wrapped",function(){function t(){if("function"==typeof e.handleEvent)return e.handleEvent.apply(e,arguments)}var n={object:t,"function":e}[typeof e];return n?s(n,"fn-",null,n.name||"anonymous"):e});this.wrapped=t[1]=r}),a.on(d+"-start",function(t){t[1]=this.wrapped||t[1]})},{}],6:[function(t,n,e){var r=t("ee").get("history"),o=t(18)(r);n.exports=r,o.inPlace(window.history,["pushState","replaceState"],"-")},{}],7:[function(t,n,e){var r=t("ee").get("raf"),o=t(18)(r),i="equestAnimationFrame";n.exports=r,o.inPlace(window,["r"+i,"mozR"+i,"webkitR"+i,"msR"+i],"raf-"),r.on("raf-start",function(t){t[0]=o(t[0],"fn-")})},{}],8:[function(t,n,e){function r(t,n,e){t[0]=a(t[0],"fn-",null,e)}function o(t,n,e){this.method=e,this.timerDuration=isNaN(t[1])?0:+t[1],t[0]=a(t[0],"fn-",this,e)}var i=t("ee").get("timer"),a=t(18)(i),s="setTimeout",c="setInterval",f="clearTimeout",u="-start",d="-";n.exports=i,a.inPlace(window,[s,"setImmediate"],s+d),a.inPlace(window,[c],c+d),a.inPlace(window,[f,"clearImmediate"],f+d),i.on(c+u,r),i.on(s+u,o)},{}],9:[function(t,n,e){function r(t,n){d.inPlace(n,["onreadystatechange"],"fn-",s)}function o(){var t=this,n=u.context(t);t.readyState>3&&!n.resolved&&(n.resolved=!0,u.emit("xhr-resolved",[],t)),d.inPlace(t,y,"fn-",s)}function i(t){g.push(t),h&&(x?x.then(a):w?w(a):(E=-E,O.data=E))}function a(){for(var t=0;t<g.length;t++)r([],g[t]);g.length&&(g=[])}function s(t,n){return n}function c(t,n){for(var e in t)n[e]=t[e];return n}t(5);var f=t("ee"),u=f.get("xhr"),d=t(18)(u),l=NREUM.o,p=l.XHR,h=l.MO,m=l.PR,w=l.SI,v="readystatechange",y=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],g=[];n.exports=u;var b=window.XMLHttpRequest=function(t){var n=new p(t);try{u.emit("new-xhr",[n],n),n.addEventListener(v,o,!1)}catch(e){try{u.emit("internal-error",[e])}catch(r){}}return n};if(c(p,b),b.prototype=p.prototype,d.inPlace(b.prototype,["open","send"],"-xhr-",s),u.on("send-xhr-start",function(t,n){r(t,n),i(n)}),u.on("open-xhr-start",r),h){var x=m&&m.resolve();if(!w&&!m){var E=1,O=document.createTextNode(E);new h(a).observe(O,{characterData:!0})}}else f.on("fn-end",function(t){t[0]&&t[0].type===v||a()})},{}],10:[function(t,n,e){function r(t){var n=this.params,e=this.metrics;if(!this.ended){this.ended=!0;for(var r=0;r<d;r++)t.removeEventListener(u[r],this.listener,!1);if(!n.aborted){if(e.duration=a.now()-this.startTime,4===t.readyState){n.status=t.status;var i=o(t,this.lastSize);if(i&&(e.rxSize=i),this.sameOrigin){var c=t.getResponseHeader("X-NewRelic-App-Data");c&&(n.cat=c.split(", ").pop())}}else n.status=0;e.cbTime=this.cbTime,f.emit("xhr-done",[t],t),s("xhr",[n,e,this.startTime])}}}function o(t,n){var e=t.responseType;if("json"===e&&null!==n)return n;var r="arraybuffer"===e||"blob"===e||"json"===e?t.response:t.responseText;return h(r)}function i(t,n){var e=c(n),r=t.params;r.host=e.hostname+":"+e.port,r.pathname=e.pathname,t.sameOrigin=e.sameOrigin}var a=t("loader");if(a.xhrWrappable){var s=t("handle"),c=t(11),f=t("ee"),u=["load","error","abort","timeout"],d=u.length,l=t("id"),p=t(14),h=t(13),m=window.XMLHttpRequest;a.features.xhr=!0,t(9),f.on("new-xhr",function(t){var n=this;n.totalCbs=0,n.called=0,n.cbTime=0,n.end=r,n.ended=!1,n.xhrGuids={},n.lastSize=null,p&&(p>34||p<10)||window.opera||t.addEventListener("progress",function(t){n.lastSize=t.loaded},!1)}),f.on("open-xhr-start",function(t){this.params={method:t[0]},i(this,t[1]),this.metrics={}}),f.on("open-xhr-end",function(t,n){"loader_config"in NREUM&&"xpid"in NREUM.loader_config&&this.sameOrigin&&n.setRequestHeader("X-NewRelic-ID",NREUM.loader_config.xpid)}),f.on("send-xhr-start",function(t,n){var e=this.metrics,r=t[0],o=this;if(e&&r){var i=h(r);i&&(e.txSize=i)}this.startTime=a.now(),this.listener=function(t){try{"abort"===t.type&&(o.params.aborted=!0),("load"!==t.type||o.called===o.totalCbs&&(o.onloadCalled||"function"!=typeof n.onload))&&o.end(n)}catch(e){try{f.emit("internal-error",[e])}catch(r){}}};for(var s=0;s<d;s++)n.addEventListener(u[s],this.listener,!1)}),f.on("xhr-cb-time",function(t,n,e){this.cbTime+=t,n?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof e.onload||this.end(e)}),f.on("xhr-load-added",function(t,n){var e=""+l(t)+!!n;this.xhrGuids&&!this.xhrGuids[e]&&(this.xhrGuids[e]=!0,this.totalCbs+=1)}),f.on("xhr-load-removed",function(t,n){var e=""+l(t)+!!n;this.xhrGuids&&this.xhrGuids[e]&&(delete this.xhrGuids[e],this.totalCbs-=1)}),f.on("addEventListener-end",function(t,n){n instanceof m&&"load"===t[0]&&f.emit("xhr-load-added",[t[1],t[2]],n)}),f.on("removeEventListener-end",function(t,n){n instanceof m&&"load"===t[0]&&f.emit("xhr-load-removed",[t[1],t[2]],n)}),f.on("fn-start",function(t,n,e){n instanceof m&&("onload"===e&&(this.onload=!0),("load"===(t[0]&&t[0].type)||this.onload)&&(this.xhrCbStart=a.now()))}),f.on("fn-end",function(t,n){this.xhrCbStart&&f.emit("xhr-cb-time",[a.now()-this.xhrCbStart,this.onload,n],n)})}},{}],11:[function(t,n,e){n.exports=function(t){var n=document.createElement("a"),e=window.location,r={};n.href=t,r.port=n.port;var o=n.href.split("://");!r.port&&o[1]&&(r.port=o[1].split("/")[0].split("@").pop().split(":")[1]),r.port&&"0"!==r.port||(r.port="https"===o[0]?"443":"80"),r.hostname=n.hostname||e.hostname,r.pathname=n.pathname,r.protocol=o[0],"/"!==r.pathname.charAt(0)&&(r.pathname="/"+r.pathname);var i=!n.protocol||":"===n.protocol||n.protocol===e.protocol,a=n.hostname===document.domain&&n.port===e.port;return r.sameOrigin=i&&(!n.hostname||a),r}},{}],12:[function(t,n,e){function r(){}function o(t,n,e){return function(){return i(t,[f.now()].concat(s(arguments)),n?null:this,e),n?void 0:this}}var i=t("handle"),a=t(15),s=t(16),c=t("ee").get("tracer"),f=t("loader"),u=NREUM;"undefined"==typeof window.newrelic&&(newrelic=u);var d=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],l="api-",p=l+"ixn-";a(d,function(t,n){u[n]=o(l+n,!0,"api")}),u.addPageAction=o(l+"addPageAction",!0),u.setCurrentRouteName=o(l+"routeName",!0),n.exports=newrelic,u.interaction=function(){return(new r).get()};var h=r.prototype={createTracer:function(t,n){var e={},r=this,o="function"==typeof n;return i(p+"tracer",[f.now(),t,e],r),function(){if(c.emit((o?"":"no-")+"fn-start",[f.now(),r,o],e),o)try{return n.apply(this,arguments)}finally{c.emit("fn-end",[f.now()],e)}}}};a("setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,n){h[n]=o(p+n)}),newrelic.noticeError=function(t){"string"==typeof t&&(t=new Error(t)),i("err",[t,f.now()])}},{}],13:[function(t,n,e){n.exports=function(t){if("string"==typeof t&&t.length)return t.length;if("object"==typeof t){if("undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&t.byteLength)return t.byteLength;if("undefined"!=typeof Blob&&t instanceof Blob&&t.size)return t.size;if(!("undefined"!=typeof FormData&&t instanceof FormData))try{return JSON.stringify(t).length}catch(n){return}}}},{}],14:[function(t,n,e){var r=0,o=navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);o&&(r=+o[1]),n.exports=r},{}],15:[function(t,n,e){function r(t,n){var e=[],r="",i=0;for(r in t)o.call(t,r)&&(e[i]=n(r,t[r]),i+=1);return e}var o=Object.prototype.hasOwnProperty;n.exports=r},{}],16:[function(t,n,e){function r(t,n,e){n||(n=0),"undefined"==typeof e&&(e=t?t.length:0);for(var r=-1,o=e-n||0,i=Array(o<0?0:o);++r<o;)i[r]=t[n+r];return i}n.exports=r},{}],17:[function(t,n,e){n.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],18:[function(t,n,e){function r(t){return!(t&&t instanceof Function&&t.apply&&!t[a])}var o=t("ee"),i=t(16),a="nr@original",s=Object.prototype.hasOwnProperty,c=!1;n.exports=function(t,n){function e(t,n,e,o){function nrWrapper(){var r,a,s,c;try{a=this,r=i(arguments),s="function"==typeof e?e(r,a):e||{}}catch(f){l([f,"",[r,a,o],s])}u(n+"start",[r,a,o],s);try{return c=t.apply(a,r)}catch(d){throw u(n+"err",[r,a,d],s),d}finally{u(n+"end",[r,a,c],s)}}return r(t)?t:(n||(n=""),nrWrapper[a]=t,d(t,nrWrapper),nrWrapper)}function f(t,n,o,i){o||(o="");var a,s,c,f="-"===o.charAt(0);for(c=0;c<n.length;c++)s=n[c],a=t[s],r(a)||(t[s]=e(a,f?s+o:o,i,s))}function u(e,r,o){if(!c||n){var i=c;c=!0;try{t.emit(e,r,o,n)}catch(a){l([a,e,r,o])}c=i}}function d(t,n){if(Object.defineProperty&&Object.keys)try{var e=Object.keys(t);return e.forEach(function(e){Object.defineProperty(n,e,{get:function(){return t[e]},set:function(n){return t[e]=n,n}})}),n}catch(r){l([r])}for(var o in t)s.call(t,o)&&(n[o]=t[o]);return n}function l(n){try{t.emit("internal-error",n)}catch(e){}}return t||(t=o),e.inPlace=f,e.flag=a,e}},{}],ee:[function(t,n,e){function r(){}function o(t){function n(t){return t&&t instanceof r?t:t?c(t,s,i):i()}function e(e,r,o,i){if(!l.aborted||i){t&&t(e,r,o);for(var a=n(o),s=h(e),c=s.length,f=0;f<c;f++)s[f].apply(a,r);var d=u[y[e]];return d&&d.push([g,e,r,a]),a}}function p(t,n){v[t]=h(t).concat(n)}function h(t){return v[t]||[]}function m(t){return d[t]=d[t]||o(e)}function w(t,n){f(t,function(t,e){n=n||"feature",y[e]=n,n in u||(u[n]=[])})}var v={},y={},g={on:p,emit:e,get:m,listeners:h,context:n,buffer:w,abort:a,aborted:!1};return g}function i(){return new r}function a(){(u.api||u.feature)&&(l.aborted=!0,u=l.backlog={})}var s="nr@context",c=t("gos"),f=t(15),u={},d={},l=n.exports=o();l.backlog=u},{}],gos:[function(t,n,e){function r(t,n,e){if(o.call(t,n))return t[n];var r=e();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,n,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return t[n]=r,r}var o=Object.prototype.hasOwnProperty;n.exports=r},{}],handle:[function(t,n,e){function r(t,n,e,r){o.buffer([t],r),o.emit(t,n,e)}var o=t("ee").get("handle");n.exports=r,r.ee=o},{}],id:[function(t,n,e){function r(t){var n=typeof t;return!t||"object"!==n&&"function"!==n?-1:t===window?0:a(t,i,function(){return o++})}var o=1,i="nr@id",a=t("gos");n.exports=r},{}],loader:[function(t,n,e){function r(){if(!x++){var t=b.info=NREUM.info,n=l.getElementsByTagName("script")[0];if(setTimeout(u.abort,3e4),!(t&&t.licenseKey&&t.applicationID&&n))return u.abort();f(y,function(n,e){t[n]||(t[n]=e)}),c("mark",["onload",a()+b.offset],null,"api");var e=l.createElement("script");e.src="https://"+t.agent,n.parentNode.insertBefore(e,n)}}function o(){"complete"===l.readyState&&i()}function i(){c("mark",["domContent",a()+b.offset],null,"api")}function a(){return E.exists&&performance.now?Math.round(performance.now()):(s=Math.max((new Date).getTime(),s))-b.offset}var s=(new Date).getTime(),c=t("handle"),f=t(15),u=t("ee"),d=window,l=d.document,p="addEventListener",h="attachEvent",m=d.XMLHttpRequest,w=m&&m.prototype;NREUM.o={ST:setTimeout,SI:d.setImmediate,CT:clearTimeout,XHR:m,REQ:d.Request,EV:d.Event,PR:d.Promise,MO:d.MutationObserver};var v=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1039.min.js"},g=m&&w&&w[p]&&!/CriOS/.test(navigator.userAgent),b=n.exports={offset:s,now:a,origin:v,features:{},xhrWrappable:g};t(12),l[p]?(l[p]("DOMContentLoaded",i,!1),d[p]("load",r,!1)):(l[h]("onreadystatechange",o),d[h]("onload",r)),c("mark",["firstbyte",s],null,"api");var x=0,E=t(17)},{}]},{},["loader",2,10,4,3]);</script>
<meta name="title" content="ATI - You May Begin.">
<link rel="image_src" href="/website/static/atitesting/css/App_Themes/AtiTesting/imageSrc_ATI.jpg">
<link rel="publisher" href="https://plus.google.com/100933774915862026201">
<meta name="msvalidate.01" content="EF7346A25BF8B9E18548DA405E69B6F8">
<meta name="google-site-verification" content="92R1-VKoXpUW0adV6Ck-Pa3pehPluZf_Bks6yeaLLXg">
<link href="/website/static/atitesting/css/App_Themes/AtiTesting/Default.css" type="text/css" rel="stylesheet">
<meta name="Description" content="We help turn ordinary people into nurses. ATI offers the most comprehensive and adaptive learning systems to assist in preparing students with what they need to know to pass high stakes tests and to become compassionate, skilled nurses. ">
<meta name="Keywords" content="Test Preparation, Nursing Student, TEAS, NCLEX, Curriculum, Nursing School, ATI Product Solutions, Nurse Educators, You May Begin, NCLEX Live Review">
<style type="text/css">
#header {
  background-image: url(/website/static/atitesting/css/App_Themes/AtiTesting/Images/header-image1.jpg)
}
</style>
<link href="/website/static/atitesting/css/Sitefinity/ControlTemplates/Search/searchCommonLayout.css" type="text/css" rel="stylesheet" media="screen">
<link href="/website/static/atitesting/css/WebResource.css?d=z1LcoN3CfmhwPSr92_PWRJlR8GpZcNd--tMiEnCIKnXhZARiPw8QJM8IHfHOr4Q-WyKaAtHn65Srm3E9vEhpAPeel0oRVkbRIjLl-JU7Hb3qVLHqhegHzFnKzVoz8Jnw0&amp;t=634039095040000000" type="text/css" rel="stylesheet" media="screen">
<meta name="Generator" content="Sitefinity 3.7.2096.2:2">
</head>
<body>
<form name="aspnetForm" method="post" action="home.aspx" id="aspnetForm">
  <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUENTM4MQ9kFgJmD2QWAgIHEGRkFgYCBw9kFgICAg9kFgJmD2QWAmYPZBYCAgUPFgIeC18hSXRlbUNvdW50ZmQCCQ9kFgICAQ9kFgJmD2QWAmYPDxYCHg1BbHRlcm5hdGVUZXh0BQtOdXJzZXMgV2Vla2RkAhcPZBYEZg8WAh4EaHJlZgU/aHR0cDovL3d3dy5hdGl0ZXN0aW5nLmNvbS9hdGlfbmV4dF9nZW4vR2VuZXJhbC9Mb2dpbl9TdGVwMS5hc3B4ZAIBDxYCHwIFKmh0dHA6Ly9zdHVkZW50LmF0aXRlc3RpbmcuY29tL2xvZ2luP21vZGU9MWQYDQUhY3RsMDAkSGVhZGVyU2VhcmNoQmFyJEV2ZW50c1ZpZXcxDxQrAAIUKwAEKClYU3lzdGVtLkd1aWQsIG1zY29ybGliLCBWZXJzaW9uPTIuMC4wLjAsIEN1bHR1cmU9bmV1dHJhbCwgUHVibGljS2V5VG9rZW49Yjc3YTVjNTYxOTM0ZTA4OSQwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDACAWQLKZIBVGVsZXJpay5DbXMuRW5naW5lLldlYkNvbnRyb2xzLkNvbnRlbnRWaWV3K0JlaGF2aW9yTW9kZXMsIFRlbGVyaWsuQ21zLkVuZ2luZSwgVmVyc2lvbj0zLjcuMjA5Ni4yLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPWRmZWFlZTBlMzk3OGFjNzkABTdQdWJsaWNhdGlvbl9EYXRlIDw9ICIjbm93IiBBTkQgRXhwaXJhdGlvbl9EYXRlID4gIiNub3ciZAUdY3RsMDAkU2lkZUJhciRHZW5lcmljQ29udGVudDcPFCsAAWRkBSFjdGwwMCRMZWZ0Q29udGVudCRHZW5lcmljQ29udGVudDIPFCsAAWRkBR1jdGwwMCRTaWRlQmFyJEdlbmVyaWNDb250ZW50NQ8UKwABZGQFHWN0bDAwJFNpZGVCYXIkR2VuZXJpY0NvbnRlbnQ4DxQrAAFkZAUdY3RsMDAkU2lkZUJhciRHZW5lcmljQ29udGVudDkPFCsAAWRkBR1jdGwwMCRTaWRlQmFyJEdlbmVyaWNDb250ZW50Ng8UKwABZGQFIGN0bDAwJFNpZGVCYXIkdG1fR2VuZXJpY0NvbnRlbnQxDxQrAAFkZAUdY3RsMDAkU2lkZUJhciRHZW5lcmljQ29udGVudDQPFCsAAQUPR2VuZXJpY19Db250ZW50ZAUiY3RsMDAkUmlnaHRDb250ZW50JEdlbmVyaWNDb250ZW50MQ8UKwABZGQFHWN0bDAwJFNpZGVCYXIkR2VuZXJpY0NvbnRlbnQzDxQrAAFkZAUuY3RsMDAkSGVhZGVyU2VhcmNoQmFyJEV2ZW50c1ZpZXcxJGN0bDAwJHBhZ2VyMQ8UKwADZgIBaGQFHmN0bDAwJFNpZGVCYXIkR2VuZXJpY0NvbnRlbnQxMA8UKwABZGSXhiYpRR0aRjUxc21NuRzGZgzxoQ==">
  <script src="/website/static/atitesting/js/WebResource.js" type="text/javascript"></script> 
  <script src="/website/static/atitesting/js/WebResource-1.js?d=Til8dGnhU9i9RYohveioPT7GX3PwWYfU-OOWF7CiSLfmAw3RXuvpRTBlD9dcwKoBLFhJudX1Ooqv0Zcd6cu1ng2&amp;t=634039095040000000" type="text/javascript"></script> 
  <script src="/website/static/atitesting/js/WebResource-2.js?d=z1LcoN3CfmhwPSr92_PWRJlR8GpZcNd--tMiEnCIKnUMZfoVBIIBxhWw9UcpoRct9ko-thjMXNm7r7mzmcs4RA2&amp;t=634039095040000000" type="text/javascript"></script> 
  <script src="/website/static/atitesting/js/ScriptResource.js?d=QauLQPgrD1Twap8bjeqaOLKAebq0-F7EX-jfx1corSBUUnAUwdKTCBFmufNWY69cCustA1Wpp1sL6xMZ0LOPQ0HFHiY2msRlhCGb1w2BNZk1&amp;t=2e2045e2" type="text/javascript"></script>
  <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="15E68AF1">
  <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="/wEWAwLO3I3NCgLS84eLDQKj5vPaDBLSmbRm7Zo31CC+fC60fvQFl/xS">
  <!-- Google Tag Manager -->
  <noscript>
  <iframe src="//www.googletagmanager.com/ns.html?id=GTM-RC5P" height="0" width="0" style="display:none;visibility:hidden"></iframe>
  </noscript>
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-RC5P');</script> 
  <!-- End Google Tag Manager -->
  
  <div id="primary">
<div id="header">
      <div id="headerLogo">
        <div id="headerLogo-top"> </div>
        <div id="headerLogo-middle"> <a id="ctl00_headerLogoLink" class="headerLogo-link" href="Home.html"><img id="ctl00_headerLogoLinkSpacer" class="headerLogo-link-spacer" src="/website/static/atitesting/css/App_Themes/AtiTesting/Images/blank.gif" border="0"></a> </div>
        <div id="headerLogo-bottom"> </div>
      </div>
      <div id="headerCallout">
        <div id="headerCallout-top">
          <div id="header-secondaryNav"> <a href="#" id="ctl00_HeaderSecondaryNav_createAnAccount">Create an Account</a>
            <div class="secondaryNav-spacer">|</div>
            <a href="#" id="ctl00_HeaderSecondaryNav_shop">Online Store</a>
            <div class="secondaryNav-spacer">|</div>
            <a href="/ContactUs.aspx" id="ctl00_HeaderSecondaryNav_contactUs">Contact Us </a>
            <div class="clear"> </div>
          </div>
          <div id="header-searchBar">
            <fieldset class="sf_searchBox">
              <input name="ctl00$HeaderSearchBar$tm_SearchBox2$ctl00$ctl00$queryText" type="text" value="Search" id="ctl00_HeaderSearchBar_tm_SearchBox2_ctl00_ctl00_queryText" class="sf_searchText" onfocus="JavaScript:searchBoxFocus(event, this);" onblur="JavaScript:searchBoxBlur(event, this);">
              <input name="ctl00$HeaderSearchBar$tm_SearchBox2$ctl00$ctl00$searchButton" type="button" id="ctl00_HeaderSearchBar_tm_SearchBox2_ctl00_ctl00_searchButton" onmouseover="JavaScript: searchBarGoMouseOver(event, this);" onmouseout="JavaScript: searchBarGoMouseOut(event, this);" class="sf_searchSubmit" alt="Search">
              <div class="clear"> </div>
            </fieldset>
            <ol class="sf_eventsList">
            </ol>
          </div>
        </div>
        <div id="headerCallout-middle"> <a id="ctl00_HeaderImage_imageLink" class="headerCallout-middle-link"><img id="ctl00_HeaderImage_imageOverlay" class="headerCallout-middle-image" src="/website/static/atitesting/css/App_Themes/AtiTesting/Images/blank.gif" alt="Nurses Week" border="0"></a> </div>
        <div id="headerCallout-bottom">
          <div id="header-nav">
            <table cellpadding="0" cellspacing="0">
              <tbody><tr>
        
            <?php     
                $allUrls = array();
                if(\Pimcore\Model\Site::isSiteRequest()) {
                    $currentPageURI = $this->currentPageURI;                           
                    $arr = explode("/", substr($currentPageURI, 1));                            
                    $str.="";
                    foreach($arr as $val){
                        $str.="/".$val;
                        $allUrls[] = $str;
                    }
                }                        

                $mainNavStartNode = ($this->document->getProperty("mainNavStartNode")) ?
                 Document::getByPath("/atitesting") 
                : $this->document->getProperty("mainNavStartNode");
                $mainNavigation = $this->pimcoreNavigation()->getNavigation($this->document, $mainNavStartNode);

                foreach ($mainNavigation as $page) {                            
                    $active = $page->getActive(true) ? "current" : "";
                    if(in_array($page->getHref(), $allUrls)) $active = "current";                            
                 ?>                        
                <?php if (!$page->isVisible() || !$this->navigation()->accept($page) || 
                in_array('footer', explode(' ', $page->getClass()))) { continue; } ?>  

                <td  class="header-nav-item">
                  <a href="<?php echo $page->getHref() ?>" id="ctl00_aboutATI" 
                  onmouseover="JavaScript:navItemMouseOver(event, this);" 
                  onmouseout="JavaScript:navItemMouseOut(event, this);">
                 <span class="header-nav-text">
                  <?php echo $this->translate($page->getLabel());?></span>

                 </a></td>

            
            <?php } ?>                    
      
              </tr>
            </tbody></table>
            <div class="clear"> </div>
          </div>
          <div id="signOnNav"> <a id="signOnNav-link" href="#" onclick="JavaScript:signOnNavStaticClick(event, this);"><span id="signOnNav-text">Secure Sign On </span><span id="signOnNav-expand" style=""></span><span id="signOnNav-collapse" style="display: none;"></span></a>
            <div class="clear"> </div>
          </div>
        </div>
      </div>
    </div>
<table cellpadding="0" cellspacing="0" id="contentAndSidebar">
      <tbody><tr>
        <td valign="top" align="left"><div id="content">
            <div class="topContent">
              <div class="clear"> </div>
            </div>
            <table cellpadding="0" cellspacing="0" id="tableContent">
              <tbody><tr>
                <?= $this->areablock("content"); ?>
              </tr>
            </tbody></table>
            <div class="bottomContent">
              <div class="clear"> </div>
            </div>
          </div></td>
        <td valign="top" align="right"><div class="sidebar">
            <div id="signOnForm" style="">
              <input tabindex="100" id="signOnForm-userId" onfocus="JavaScript:userIdFocus(event, this);" onblur="JavaScript:userIdBlur(event, this);" onkeypress="JavaScript: return userIdKeyPress(event,'');" name="txtUserName" type="text" value="Username">
              <div id="userNameErrorMessage" class="userId-error" style="display:none;"> </div>
              <div id="signOnForm-passwordAndGo">
                <input tabindex="101" id="signOnForm-passwordText" name="signOnForm-passwordText" value="Password" onfocus="JavaScript:passwordTextFocus(event, this);">
                <input tabindex="102" id="signOnForm-password" name="txtPassword" type="password" onblur="JavaScript:passwordBlur(event, this);" onkeypress="JavaScript: return passwordKeyPress(event,'');" value="" style="display:none;">
                <input tabindex="102" class="signOnForm-go" type="button" onclick="JavaScript: return submitSignOnForm('');" onmouseover="JavaScript: signInGoMouseOver(event, this);" onmouseout="JavaScript: signInGoMouseOut(event, this);">
                <div class="clear"> </div>
                <div id="passwordErrorMessage" class="password-error" style="display:none;"> </div>
              </div>
              <div id="signOnForm-other">
                <div id="signOnForm-needHelp"> <a href="ati_next_gen\General\Login_Step1.htm" id="ctl00_forgotPassword" class="signOnForm-needHelp-link">Forgot username and/or password?</a> </div>
                <div id="signOnForm-register"> <a href="" id="ctl00_register" class="signOnForm-register-link">Create an account.</a> </div>
              </div>
            </div>
            <!-- ATING-823 - 2012/08/01 - JDJT - modify 'forgotPassword' text --> 
            <script type="text/javascript">
								function modifyLoginHelpText()
								{
									var myAnchors;
									myAnchors = document.getElementsByTagName('a');
									for (i = 0; i < myAnchors.length; i++)
									{
										if(myAnchors[i].id.indexOf('forgotPassword') != -1)
										{
											myanchor = document.getElementById(myAnchors[i].id);
										}
									}
									if (myanchor && myanchor != '') 
									{
										myanchor.innerHTML = 'Forgot username and/or password?';
									}
								}
								modifyLoginHelpText();
							</script> 
            
            <!-- Start of Async HubSpot Analytics Code --> <script type="text/javascript">
    (function(d,s,i,r) {
      if (d.getElementById(i)){return;}
      var n=d.createElement(s),e=d.getElementsByTagName(s)[0];
      n.id=i;n.src='//js.hs-analytics.net/analytics/'+(Math.ceil(new Date()/r)*r)+'/497482.js';
      e.parentNode.insertBefore(n, e);
    })(document,"script","hs-analytics",300000);
  </script> <!-- End of Async HubSpot Analytics Code -->
            <div style="background-color: #ffffff; height: 7px;"></div>
            <div class="orange">
              <p style="font-weight: bold; font-size: 16px;"><?= $this->wysiwyg("important_desc") ?></p>
              
            </div>
            <style>
    .orange p {color:#ffffff; text-align:left !important; font-size:12px;}
    .orange { background:#eb8031; padding:15px 8px 8px 8px; }
    .orange a {color:#ffffff; text-align:left !important; text-decoration:underline;}
</style>
            <?= $this->snippet("links") ?>
            <script>document.write("<scr"+"ipt src='https://bp.specificclick.net?pixid=99068583&u="+escape(parent.document.location)+"&r="+escape(parent.document.referrer)+"'></scri"+"pt>");</script>
                        <noscript>
                           <img src="https://bp.specificclick.net?pixid=99068583" width="0" height="0" border="0">
                        </noscript>
                        <div style="background-color: #ffffff; height: 7px;"></div>
                      </div>
            </td>

      </tr>
    </tbody></table>

    <div id="footer">
      <div id="footer-content">
        <div id="footer-copyright">
          <div id="footer-copyright-text">
           Copyright © 2016 Assessment Technologies Institute, L.L.C. All rights reserved. </div>
          <div id="footer-copyright-links"> 
                 <?php 
  while($this->block("footer_block")->loop()) { ?>

                    <?= $this->link("footer_links")?>

  <?php } ?>         


              </div>
        </div>
        <div id="footer-links">
                           <?php 
  while($this->block("footer_left_block")->loop()) { ?>

                    <?= $this->link("footer_left_links")?>

  <?php } ?>         

          </div>
        <div class="clear"> </div>
        <div id="footer-followus"> 
          <img alt="Follow Us On" class="followuson" id="ctl00_footerContent_followuson" src="/website/static/atitesting/css/App_Themes/AtiTesting/Images/followuson.gif">
        <a title="ATI Facebook" target="_blank" class="facebook" id="ctl00_footerContent_facebook" href="s"><img border="0" style="border-width:0px;" alt="ATI Facebook" src="/website/static/atitesting/css/App_Themes/AtiTesting/Images/facebook.png"></a>
        <a title="ATI Twitter" target="_blank" class="twitter" id="ctl00_footerContent_twitter" href=""><img border="0" style="border-width:0px;" alt="ATI Twitter" src="/website/static/atitesting/css/App_Themes/AtiTesting/Images/twitter.png"></a>
        <a title="ATI YouTube" target="_blank" class="youtube" id="ctl00_footerContent_youtube" href=""><img border="0" style="border-width:0px;" alt="ATI YouTube" src="/website/static/atitesting/css/App_Themes/AtiTesting/Images/youtube.png"></a>
        <a title="ATI LinkedIn" target="_blank" class="linkedin" id="ctl00_footerContent_linkedin" href=""><img border="0" style="border-width:0px;" alt="ATI LinkedIn" src="/website/static/atitesting/css/App_Themes/AtiTesting/Images/linkedin.png"></a> </div>
        <div class="clear"> </div>
        <div class="clear"> </div>
      </div>
      <div id="footer-sidebar"> </div>
    </div>

           <iframe frameborder='0' width='0' height='0' src='ati_next_gen\general\blank.htm'></iframe>
  </div>
  <script type="text/javascript">
//<![CDATA[
SearchBox.Create('SearchResults.aspx', 'AllWords', 'ATI Testing', 'ctl00_HeaderSearchBar_tm_SearchBox2_ctl00_ctl00_queryText', 'ctl00_HeaderSearchBar_tm_SearchBox2_ctl00_ctl00_searchButton');Sys.Application.initialize();
//]]>
</script>
</form>
</body>
</html>