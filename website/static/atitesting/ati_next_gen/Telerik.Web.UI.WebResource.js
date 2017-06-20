/* START MicrosoftAjax.js */
//----------------------------------------------------------
// Copyright (C) Microsoft Corporation. All rights reserved.
//----------------------------------------------------------
// MicrosoftAjax.js
Function.__typeName="Function";Function.__class=true;Function.createCallback=function(b,a){return function(){var e=arguments.length;if(e>0){var d=[];for(var c=0;c<e;c++)d[c]=arguments[c];d[e]=a;return b.apply(this,d)}return b.call(this,a)}};Function.createDelegate=function(a,b){return function(){return b.apply(a,arguments)}};Function.emptyFunction=Function.emptyMethod=function(){};Function._validateParams=function(e,c){var a;a=Function._validateParameterCount(e,c);if(a){a.popStackFrame();return a}for(var b=0;b<e.length;b++){var d=c[Math.min(b,c.length-1)],f=d.name;if(d.parameterArray)f+="["+(b-c.length+1)+"]";a=Function._validateParameter(e[b],d,f);if(a){a.popStackFrame();return a}}return null};Function._validateParameterCount=function(e,a){var c=a.length,d=0;for(var b=0;b<a.length;b++)if(a[b].parameterArray)c=Number.MAX_VALUE;else if(!a[b].optional)d++;if(e.length<d||e.length>c){var f=Error.parameterCount();f.popStackFrame();return f}return null};Function._validateParameter=function(c,a,h){var b,g=a.type,l=!!a.integer,k=!!a.domElement,m=!!a.mayBeNull;b=Function._validateParameterType(c,g,l,k,m,h);if(b){b.popStackFrame();return b}var e=a.elementType,f=!!a.elementMayBeNull;if(g===Array&&typeof c!=="undefined"&&c!==null&&(e||!f)){var j=!!a.elementInteger,i=!!a.elementDomElement;for(var d=0;d<c.length;d++){var n=c[d];b=Function._validateParameterType(n,e,j,i,f,h+"["+d+"]");if(b){b.popStackFrame();return b}}}return null};Function._validateParameterType=function(a,c,n,m,k,d){var b;if(typeof a==="undefined")if(k)return null;else{b=Error.argumentUndefined(d);b.popStackFrame();return b}if(a===null)if(k)return null;else{b=Error.argumentNull(d);b.popStackFrame();return b}if(c&&c.__enum){if(typeof a!=="number"){b=Error.argumentType(d,Object.getType(a),c);b.popStackFrame();return b}if(a%1===0){var e=c.prototype;if(!c.__flags||a===0){for(var i in e)if(e[i]===a)return null}else{var l=a;for(var i in e){var f=e[i];if(f===0)continue;if((f&a)===f)l-=f;if(l===0)return null}}}b=Error.argumentOutOfRange(d,a,String.format(Sys.Res.enumInvalidValue,a,c.getName()));b.popStackFrame();return b}if(m){var h;if(typeof a.nodeType!=="number"){var g=a.ownerDocument||a.document||a;if(g!=a){var j=g.defaultView||g.parentWindow;h=j!=a&&!(j.document&&a.document&&j.document===a.document)}else h=typeof g.body==="undefined"}else h=a.nodeType===3;if(h){b=Error.argument(d,Sys.Res.argumentDomElement);b.popStackFrame();return b}}if(c&&!c.isInstanceOfType(a)){b=Error.argumentType(d,Object.getType(a),c);b.popStackFrame();return b}if(c===Number&&n)if(a%1!==0){b=Error.argumentOutOfRange(d,a,Sys.Res.argumentInteger);b.popStackFrame();return b}return null};Error.__typeName="Error";Error.__class=true;Error.create=function(d,b){var a=new Error(d);a.message=d;if(b)for(var c in b)a[c]=b[c];a.popStackFrame();return a};Error.argument=function(a,c){var b="Sys.ArgumentException: "+(c?c:Sys.Res.argument);if(a)b+="\n"+String.format(Sys.Res.paramName,a);var d=Error.create(b,{name:"Sys.ArgumentException",paramName:a});d.popStackFrame();return d};Error.argumentNull=function(a,c){var b="Sys.ArgumentNullException: "+(c?c:Sys.Res.argumentNull);if(a)b+="\n"+String.format(Sys.Res.paramName,a);var d=Error.create(b,{name:"Sys.ArgumentNullException",paramName:a});d.popStackFrame();return d};Error.argumentOutOfRange=function(c,a,d){var b="Sys.ArgumentOutOfRangeException: "+(d?d:Sys.Res.argumentOutOfRange);if(c)b+="\n"+String.format(Sys.Res.paramName,c);if(typeof a!=="undefined"&&a!==null)b+="\n"+String.format(Sys.Res.actualValue,a);var e=Error.create(b,{name:"Sys.ArgumentOutOfRangeException",paramName:c,actualValue:a});e.popStackFrame();return e};Error.argumentType=function(d,c,b,e){var a="Sys.ArgumentTypeException: ";if(e)a+=e;else if(c&&b)a+=String.format(Sys.Res.argumentTypeWithTypes,c.getName(),b.getName());else a+=Sys.Res.argumentType;if(d)a+="\n"+String.format(Sys.Res.paramName,d);var f=Error.create(a,{name:"Sys.ArgumentTypeException",paramName:d,actualType:c,expectedType:b});f.popStackFrame();return f};Error.argumentUndefined=function(a,c){var b="Sys.ArgumentUndefinedException: "+(c?c:Sys.Res.argumentUndefined);if(a)b+="\n"+String.format(Sys.Res.paramName,a);var d=Error.create(b,{name:"Sys.ArgumentUndefinedException",paramName:a});d.popStackFrame();return d};Error.format=function(a){var c="Sys.FormatException: "+(a?a:Sys.Res.format),b=Error.create(c,{name:"Sys.FormatException"});b.popStackFrame();return b};Error.invalidOperation=function(a){var c="Sys.InvalidOperationException: "+(a?a:Sys.Res.invalidOperation),b=Error.create(c,{name:"Sys.InvalidOperationException"});b.popStackFrame();return b};Error.notImplemented=function(a){var c="Sys.NotImplementedException: "+(a?a:Sys.Res.notImplemented),b=Error.create(c,{name:"Sys.NotImplementedException"});b.popStackFrame();return b};Error.parameterCount=function(a){var c="Sys.ParameterCountException: "+(a?a:Sys.Res.parameterCount),b=Error.create(c,{name:"Sys.ParameterCountException"});b.popStackFrame();return b};Error.prototype.popStackFrame=function(){if(typeof this.stack==="undefined"||this.stack===null||typeof this.fileName==="undefined"||this.fileName===null||typeof this.lineNumber==="undefined"||this.lineNumber===null)return;var a=this.stack.split("\n"),c=a[0],e=this.fileName+":"+this.lineNumber;while(typeof c!=="undefined"&&c!==null&&c.indexOf(e)===-1){a.shift();c=a[0]}var d=a[1];if(typeof d==="undefined"||d===null)return;var b=d.match(/@(.*):(\d+)$/);if(typeof b==="undefined"||b===null)return;this.fileName=b[1];this.lineNumber=parseInt(b[2]);a.shift();this.stack=a.join("\n")};Object.__typeName="Object";Object.__class=true;Object.getType=function(b){var a=b.constructor;if(!a||typeof a!=="function"||!a.__typeName||a.__typeName==="Object")return Object;return a};Object.getTypeName=function(a){return Object.getType(a).getName()};String.__typeName="String";String.__class=true;String.prototype.endsWith=function(a){return this.substr(this.length-a.length)===a};String.prototype.startsWith=function(a){return this.substr(0,a.length)===a};String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")};String.prototype.trimEnd=function(){return this.replace(/\s+$/,"")};String.prototype.trimStart=function(){return this.replace(/^\s+/,"")};String.format=function(){return String._toFormattedString(false,arguments)};String.localeFormat=function(){return String._toFormattedString(true,arguments)};String._toFormattedString=function(l,j){var c="",e=j[0];for(var a=0;true;){var f=e.indexOf("{",a),d=e.indexOf("}",a);if(f<0&&d<0){c+=e.slice(a);break}if(d>0&&(d<f||f<0)){c+=e.slice(a,d+1);a=d+2;continue}c+=e.slice(a,f);a=f+1;if(e.charAt(a)==="{"){c+="{";a++;continue}if(d<0)break;var h=e.substring(a,d),g=h.indexOf(":"),k=parseInt(g<0?h:h.substring(0,g),10)+1,i=g<0?"":h.substring(g+1),b=j[k];if(typeof b==="undefined"||b===null)b="";if(b.toFormattedString)c+=b.toFormattedString(i);else if(l&&b.localeFormat)c+=b.localeFormat(i);else if(b.format)c+=b.format(i);else c+=b.toString();a=d+1}return c};Boolean.__typeName="Boolean";Boolean.__class=true;Boolean.parse=function(b){var a=b.trim().toLowerCase();if(a==="false")return false;if(a==="true")return true};Date.__typeName="Date";Date.__class=true;Date._appendPreOrPostMatch=function(e,b){var d=0,a=false;for(var c=0,g=e.length;c<g;c++){var f=e.charAt(c);switch(f){case "'":if(a)b.append("'");else d++;a=false;break;case "\\":if(a)b.append("\\");a=!a;break;default:b.append(f);a=false}}return d};Date._expandFormat=function(a,b){if(!b)b="F";if(b.length===1)switch(b){case "d":return a.ShortDatePattern;case "D":return a.LongDatePattern;case "t":return a.ShortTimePattern;case "T":return a.LongTimePattern;case "F":return a.FullDateTimePattern;case "M":case "m":return a.MonthDayPattern;case "s":return a.SortableDateTimePattern;case "Y":case "y":return a.YearMonthPattern;default:throw Error.format(Sys.Res.formatInvalidString)}return b};Date._expandYear=function(c,a){if(a<100){var b=(new Date).getFullYear();a+=b-b%100;if(a>c.Calendar.TwoDigitYearMax)return a-100}return a};Date._getParseRegExp=function(b,e){if(!b._parseRegExp)b._parseRegExp={};else if(b._parseRegExp[e])return b._parseRegExp[e];var c=Date._expandFormat(b,e);c=c.replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g,"\\\\$1");var a=new Sys.StringBuilder("^"),j=[],f=0,i=0,h=Date._getTokenRegExp(),d;while((d=h.exec(c))!==null){var l=c.slice(f,d.index);f=h.lastIndex;i+=Date._appendPreOrPostMatch(l,a);if(i%2===1){a.append(d[0]);continue}switch(d[0]){case "dddd":case "ddd":case "MMMM":case "MMM":a.append("(\\D+)");break;case "tt":case "t":a.append("(\\D*)");break;case "yyyy":a.append("(\\d{4})");break;case "fff":a.append("(\\d{3})");break;case "ff":a.append("(\\d{2})");break;case "f":a.append("(\\d)");break;case "dd":case "d":case "MM":case "M":case "yy":case "y":case "HH":case "H":case "hh":case "h":case "mm":case "m":case "ss":case "s":a.append("(\\d\\d?)");break;case "zzz":a.append("([+-]?\\d\\d?:\\d{2})");break;case "zz":case "z":a.append("([+-]?\\d\\d?)")}Array.add(j,d[0])}Date._appendPreOrPostMatch(c.slice(f),a);a.append("$");var k=a.toString().replace(/\s+/g,"\\s+"),g={"regExp":k,"groups":j};b._parseRegExp[e]=g;return g};Date._getTokenRegExp=function(){return /dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z/g};Date.parseLocale=function(a){return Date._parse(a,Sys.CultureInfo.CurrentCulture,arguments)};Date.parseInvariant=function(a){return Date._parse(a,Sys.CultureInfo.InvariantCulture,arguments)};Date._parse=function(g,c,h){var e=false;for(var a=1,i=h.length;a<i;a++){var f=h[a];if(f){e=true;var b=Date._parseExact(g,f,c);if(b)return b}}if(!e){var d=c._getDateTimeFormats();for(var a=0,i=d.length;a<i;a++){var b=Date._parseExact(g,d[a],c);if(b)return b}}return null};Date._parseExact=function(s,y,j){s=s.trim();var m=j.dateTimeFormat,v=Date._getParseRegExp(m,y),x=(new RegExp(v.regExp)).exec(s);if(x===null)return null;var w=v.groups,f=null,c=null,h=null,g=null,d=0,n=0,o=0,e=0,k=null,r=false;for(var p=0,z=w.length;p<z;p++){var a=x[p+1];if(a)switch(w[p]){case "dd":case "d":h=parseInt(a,10);if(h<1||h>31)return null;break;case "MMMM":c=j._getMonthIndex(a);if(c<0||c>11)return null;break;case "MMM":c=j._getAbbrMonthIndex(a);if(c<0||c>11)return null;break;case "M":case "MM":var c=parseInt(a,10)-1;if(c<0||c>11)return null;break;case "y":case "yy":f=Date._expandYear(m,parseInt(a,10));if(f<0||f>9999)return null;break;case "yyyy":f=parseInt(a,10);if(f<0||f>9999)return null;break;case "h":case "hh":d=parseInt(a,10);if(d===12)d=0;if(d<0||d>11)return null;break;case "H":case "HH":d=parseInt(a,10);if(d<0||d>23)return null;break;case "m":case "mm":n=parseInt(a,10);if(n<0||n>59)return null;break;case "s":case "ss":o=parseInt(a,10);if(o<0||o>59)return null;break;case "tt":case "t":var u=a.toUpperCase();r=u===m.PMDesignator.toUpperCase();if(!r&&u!==m.AMDesignator.toUpperCase())return null;break;case "f":e=parseInt(a,10)*100;if(e<0||e>999)return null;break;case "ff":e=parseInt(a,10)*10;if(e<0||e>999)return null;break;case "fff":e=parseInt(a,10);if(e<0||e>999)return null;break;case "dddd":g=j._getDayIndex(a);if(g<0||g>6)return null;break;case "ddd":g=j._getAbbrDayIndex(a);if(g<0||g>6)return null;break;case "zzz":var q=a.split(/:/);if(q.length!==2)return null;var i=parseInt(q[0],10);if(i<-12||i>13)return null;var l=parseInt(q[1],10);if(l<0||l>59)return null;k=i*60+(a.startsWith("-")?-l:l);break;case "z":case "zz":var i=parseInt(a,10);if(i<-12||i>13)return null;k=i*60}}var b=new Date;if(f===null)f=b.getFullYear();if(c===null)c=b.getMonth();if(h===null)h=b.getDate();b.setFullYear(f,c,h);if(b.getDate()!==h)return null;if(g!==null&&b.getDay()!==g)return null;if(r&&d<12)d+=12;b.setHours(d,n,o,e);if(k!==null){var t=b.getMinutes()-(k+b.getTimezoneOffset());b.setHours(b.getHours()+parseInt(t/60,10),t%60)}return b};Date.prototype.format=function(a){return this._toFormattedString(a,Sys.CultureInfo.InvariantCulture)};Date.prototype.localeFormat=function(a){return this._toFormattedString(a,Sys.CultureInfo.CurrentCulture)};Date.prototype._toFormattedString=function(e,h){if(!e||e.length===0||e==="i")if(h&&h.name.length>0)return this.toLocaleString();else return this.toString();var d=h.dateTimeFormat;e=Date._expandFormat(d,e);var a=new Sys.StringBuilder,b;function c(a){if(a<10)return "0"+a;return a.toString()}function g(a){if(a<10)return "00"+a;if(a<100)return "0"+a;return a.toString()}var j=0,i=Date._getTokenRegExp();for(;true;){var l=i.lastIndex,f=i.exec(e),k=e.slice(l,f?f.index:e.length);j+=Date._appendPreOrPostMatch(k,a);if(!f)break;if(j%2===1){a.append(f[0]);continue}switch(f[0]){case "dddd":a.append(d.DayNames[this.getDay()]);break;case "ddd":a.append(d.AbbreviatedDayNames[this.getDay()]);break;case "dd":a.append(c(this.getDate()));break;case "d":a.append(this.getDate());break;case "MMMM":a.append(d.MonthNames[this.getMonth()]);break;case "MMM":a.append(d.AbbreviatedMonthNames[this.getMonth()]);break;case "MM":a.append(c(this.getMonth()+1));break;case "M":a.append(this.getMonth()+1);break;case "yyyy":a.append(this.getFullYear());break;case "yy":a.append(c(this.getFullYear()%100));break;case "y":a.append(this.getFullYear()%100);break;case "hh":b=this.getHours()%12;if(b===0)b=12;a.append(c(b));break;case "h":b=this.getHours()%12;if(b===0)b=12;a.append(b);break;case "HH":a.append(c(this.getHours()));break;case "H":a.append(this.getHours());break;case "mm":a.append(c(this.getMinutes()));break;case "m":a.append(this.getMinutes());break;case "ss":a.append(c(this.getSeconds()));break;case "s":a.append(this.getSeconds());break;case "tt":a.append(this.getHours()<12?d.AMDesignator:d.PMDesignator);break;case "t":a.append((this.getHours()<12?d.AMDesignator:d.PMDesignator).charAt(0));break;case "f":a.append(g(this.getMilliseconds()).charAt(0));break;case "ff":a.append(g(this.getMilliseconds()).substr(0,2));break;case "fff":a.append(g(this.getMilliseconds()));break;case "z":b=this.getTimezoneOffset()/60;a.append((b<=0?"+":"-")+Math.floor(Math.abs(b)));break;case "zz":b=this.getTimezoneOffset()/60;a.append((b<=0?"+":"-")+c(Math.floor(Math.abs(b))));break;case "zzz":b=this.getTimezoneOffset()/60;a.append((b<=0?"+":"-")+c(Math.floor(Math.abs(b)))+d.TimeSeparator+c(Math.abs(this.getTimezoneOffset()%60)))}}return a.toString()};Number.__typeName="Number";Number.__class=true;Number.parseLocale=function(a){return Number._parse(a,Sys.CultureInfo.CurrentCulture)};Number.parseInvariant=function(a){return Number._parse(a,Sys.CultureInfo.InvariantCulture)};Number._parse=function(b,o){b=b.trim();if(b.match(/^[+-]?infinity$/i))return parseFloat(b);if(b.match(/^0x[a-f0-9]+$/i))return parseInt(b);var a=o.numberFormat,g=Number._parseNumberNegativePattern(b,a,a.NumberNegativePattern),h=g[0],e=g[1];if(h===""&&a.NumberNegativePattern!==1){g=Number._parseNumberNegativePattern(b,a,1);h=g[0];e=g[1]}if(h==="")h="+";var j,d,f=e.indexOf("e");if(f<0)f=e.indexOf("E");if(f<0){d=e;j=null}else{d=e.substr(0,f);j=e.substr(f+1)}var c,k,m=d.indexOf(a.NumberDecimalSeparator);if(m<0){c=d;k=null}else{c=d.substr(0,m);k=d.substr(m+a.NumberDecimalSeparator.length)}c=c.split(a.NumberGroupSeparator).join("");var n=a.NumberGroupSeparator.replace(/\u00A0/g," ");if(a.NumberGroupSeparator!==n)c=c.split(n).join("");var l=h+c;if(k!==null)l+="."+k;if(j!==null){var i=Number._parseNumberNegativePattern(j,a,1);if(i[0]==="")i[0]="+";l+="e"+i[0]+i[1]}if(l.match(/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/))return parseFloat(l);return Number.NaN};Number._parseNumberNegativePattern=function(a,d,e){var b=d.NegativeSign,c=d.PositiveSign;switch(e){case 4:b=" "+b;c=" "+c;case 3:if(a.endsWith(b))return ["-",a.substr(0,a.length-b.length)];else if(a.endsWith(c))return ["+",a.substr(0,a.length-c.length)];break;case 2:b+=" ";c+=" ";case 1:if(a.startsWith(b))return ["-",a.substr(b.length)];else if(a.startsWith(c))return ["+",a.substr(c.length)];break;case 0:if(a.startsWith("(")&&a.endsWith(")"))return ["-",a.substr(1,a.length-2)]}return ["",a]};Number.prototype.format=function(a){return this._toFormattedString(a,Sys.CultureInfo.InvariantCulture)};Number.prototype.localeFormat=function(a){return this._toFormattedString(a,Sys.CultureInfo.CurrentCulture)};Number.prototype._toFormattedString=function(d,j){if(!d||d.length===0||d==="i")if(j&&j.name.length>0)return this.toLocaleString();else return this.toString();var o=["n %","n%","%n"],n=["-n %","-n%","-%n"],p=["(n)","-n","- n","n-","n -"],m=["$n","n$","$ n","n $"],l=["($n)","-$n","$-n","$n-","(n$)","-n$","n-$","n$-","-n $","-$ n","n $-","$ n-","$ -n","n- $","($ n)","(n $)"];function g(a,c,d){for(var b=a.length;b<c;b++)a=d?"0"+a:a+"0";return a}function i(j,i,l,n,p){var h=l[0],k=1,o=Math.pow(10,i),m=Math.round(j*o)/o;if(!isFinite(m))m=j;j=m;var b=j.toString(),a="",c,e=b.split(/e/i);b=e[0];c=e.length>1?parseInt(e[1]):0;e=b.split(".");b=e[0];a=e.length>1?e[1]:"";var q;if(c>0){a=g(a,c,false);b+=a.slice(0,c);a=a.substr(c)}else if(c<0){c=-c;b=g(b,c+1,true);a=b.slice(-c,b.length)+a;b=b.slice(0,-c)}if(i>0){if(a.length>i)a=a.slice(0,i);else a=g(a,i,false);a=p+a}else a="";var d=b.length-1,f="";while(d>=0){if(h===0||h>d)if(f.length>0)return b.slice(0,d+1)+n+f+a;else return b.slice(0,d+1)+a;if(f.length>0)f=b.slice(d-h+1,d+1)+n+f;else f=b.slice(d-h+1,d+1);d-=h;if(k<l.length){h=l[k];k++}}return b.slice(0,d+1)+n+f+a}var a=j.numberFormat,e=Math.abs(this);if(!d)d="D";var b=-1;if(d.length>1)b=parseInt(d.slice(1),10);var c;switch(d.charAt(0)){case "d":case "D":c="n";if(b!==-1)e=g(""+e,b,true);if(this<0)e=-e;break;case "c":case "C":if(this<0)c=l[a.CurrencyNegativePattern];else c=m[a.CurrencyPositivePattern];if(b===-1)b=a.CurrencyDecimalDigits;e=i(Math.abs(this),b,a.CurrencyGroupSizes,a.CurrencyGroupSeparator,a.CurrencyDecimalSeparator);break;case "n":case "N":if(this<0)c=p[a.NumberNegativePattern];else c="n";if(b===-1)b=a.NumberDecimalDigits;e=i(Math.abs(this),b,a.NumberGroupSizes,a.NumberGroupSeparator,a.NumberDecimalSeparator);break;case "p":case "P":if(this<0)c=n[a.PercentNegativePattern];else c=o[a.PercentPositivePattern];if(b===-1)b=a.PercentDecimalDigits;e=i(Math.abs(this)*100,b,a.PercentGroupSizes,a.PercentGroupSeparator,a.PercentDecimalSeparator);break;default:throw Error.format(Sys.Res.formatBadFormatSpecifier)}var k=/n|\$|-|%/g,f="";for(;true;){var q=k.lastIndex,h=k.exec(c);f+=c.slice(q,h?h.index:c.length);if(!h)break;switch(h[0]){case "n":f+=e;break;case "$":f+=a.CurrencySymbol;break;case "-":f+=a.NegativeSign;break;case "%":f+=a.PercentSymbol}}return f};RegExp.__typeName="RegExp";RegExp.__class=true;Array.__typeName="Array";Array.__class=true;Array.add=Array.enqueue=function(a,b){a[a.length]=b};Array.addRange=function(a,b){a.push.apply(a,b)};Array.clear=function(a){a.length=0};Array.clone=function(a){if(a.length===1)return [a[0]];else return Array.apply(null,a)};Array.contains=function(a,b){return Array.indexOf(a,b)>=0};Array.dequeue=function(a){return a.shift()};Array.forEach=function(b,e,d){for(var a=0,f=b.length;a<f;a++){var c=b[a];if(typeof c!=="undefined")e.call(d,c,a,b)}};Array.indexOf=function(d,e,a){if(typeof e==="undefined")return -1;var c=d.length;if(c!==0){a=a-0;if(isNaN(a))a=0;else{if(isFinite(a))a=a-a%1;if(a<0)a=Math.max(0,c+a)}for(var b=a;b<c;b++)if(typeof d[b]!=="undefined"&&d[b]===e)return b}return -1};Array.insert=function(a,b,c){a.splice(b,0,c)};Array.parse=function(value){if(!value)return [];return eval(value)};Array.remove=function(b,c){var a=Array.indexOf(b,c);if(a>=0)b.splice(a,1);return a>=0};Array.removeAt=function(a,b){a.splice(b,1)};if(!window)this.window=this;window.Type=Function;Type.prototype.callBaseMethod=function(a,d,b){var c=this.getBaseMethod(a,d);if(!b)return c.apply(a);else return c.apply(a,b)};Type.prototype.getBaseMethod=function(d,c){var b=this.getBaseType();if(b){var a=b.prototype[c];return a instanceof Function?a:null}return null};Type.prototype.getBaseType=function(){return typeof this.__baseType==="undefined"?null:this.__baseType};Type.prototype.getInterfaces=function(){var a=[],b=this;while(b){var c=b.__interfaces;if(c)for(var d=0,f=c.length;d<f;d++){var e=c[d];if(!Array.contains(a,e))a[a.length]=e}b=b.__baseType}return a};Type.prototype.getName=function(){return typeof this.__typeName==="undefined"?"":this.__typeName};Type.prototype.implementsInterface=function(d){this.resolveInheritance();var c=d.getName(),a=this.__interfaceCache;if(a){var e=a[c];if(typeof e!=="undefined")return e}else a=this.__interfaceCache={};var b=this;while(b){var f=b.__interfaces;if(f)if(Array.indexOf(f,d)!==-1)return a[c]=true;b=b.__baseType}return a[c]=false};Type.prototype.inheritsFrom=function(b){this.resolveInheritance();var a=this.__baseType;while(a){if(a===b)return true;a=a.__baseType}return false};Type.prototype.initializeBase=function(a,b){this.resolveInheritance();if(this.__baseType)if(!b)this.__baseType.apply(a);else this.__baseType.apply(a,b);return a};Type.prototype.isImplementedBy=function(a){if(typeof a==="undefined"||a===null)return false;var b=Object.getType(a);return !!(b.implementsInterface&&b.implementsInterface(this))};Type.prototype.isInstanceOfType=function(b){if(typeof b==="undefined"||b===null)return false;if(b instanceof this)return true;var a=Object.getType(b);return !!(a===this)||a.inheritsFrom&&a.inheritsFrom(this)||a.implementsInterface&&a.implementsInterface(this)};Type.prototype.registerClass=function(c,b,d){this.prototype.constructor=this;this.__typeName=c;this.__class=true;if(b){this.__baseType=b;this.__basePrototypePending=true}Sys.__upperCaseTypes[c.toUpperCase()]=this;if(d){this.__interfaces=[];for(var a=2,f=arguments.length;a<f;a++){var e=arguments[a];this.__interfaces.push(e)}}return this};Type.prototype.registerInterface=function(a){Sys.__upperCaseTypes[a.toUpperCase()]=this;this.prototype.constructor=this;this.__typeName=a;this.__interface=true;return this};Type.prototype.resolveInheritance=function(){if(this.__basePrototypePending){var b=this.__baseType;b.resolveInheritance();for(var a in b.prototype){var c=b.prototype[a];if(!this.prototype[a])this.prototype[a]=c}delete this.__basePrototypePending}};Type.getRootNamespaces=function(){return Array.clone(Sys.__rootNamespaces)};Type.isClass=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__class};Type.isInterface=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__interface};Type.isNamespace=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__namespace};Type.parse=function(typeName,ns){var fn;if(ns){fn=Sys.__upperCaseTypes[ns.getName().toUpperCase()+"."+typeName.toUpperCase()];return fn||null}if(!typeName)return null;if(!Type.__htClasses)Type.__htClasses={};fn=Type.__htClasses[typeName];if(!fn){fn=eval(typeName);Type.__htClasses[typeName]=fn}return fn};Type.registerNamespace=function(f){var d=window,c=f.split(".");for(var b=0;b<c.length;b++){var e=c[b],a=d[e];if(!a){a=d[e]={__namespace:true,__typeName:c.slice(0,b+1).join(".")};if(b===0)Sys.__rootNamespaces[Sys.__rootNamespaces.length]=a;a.getName=function(){return this.__typeName}}d=a}};window.Sys={__namespace:true,__typeName:"Sys",getName:function(){return "Sys"},__upperCaseTypes:{}};Sys.__rootNamespaces=[Sys];Sys.IDisposable=function(){};Sys.IDisposable.prototype={};Sys.IDisposable.registerInterface("Sys.IDisposable");Sys.StringBuilder=function(a){this._parts=typeof a!=="undefined"&&a!==null&&a!==""?[a.toString()]:[];this._value={};this._len=0};Sys.StringBuilder.prototype={append:function(a){this._parts[this._parts.length]=a},appendLine:function(a){this._parts[this._parts.length]=typeof a==="undefined"||a===null||a===""?"\r\n":a+"\r\n"},clear:function(){this._parts=[];this._value={};this._len=0},isEmpty:function(){if(this._parts.length===0)return true;return this.toString()===""},toString:function(a){a=a||"";var b=this._parts;if(this._len!==b.length){this._value={};this._len=b.length}var d=this._value;if(typeof d[a]==="undefined"){if(a!=="")for(var c=0;c<b.length;)if(typeof b[c]==="undefined"||b[c]===""||b[c]===null)b.splice(c,1);else c++;d[a]=this._parts.join(a)}return d[a]}};Sys.StringBuilder.registerClass("Sys.StringBuilder");if(!window.XMLHttpRequest)window.XMLHttpRequest=function(){var b=["Msxml2.XMLHTTP.3.0","Msxml2.XMLHTTP"];for(var a=0,c=b.length;a<c;a++)try{return new ActiveXObject(b[a])}catch(d){}return null};Sys.Browser={};Sys.Browser.InternetExplorer={};Sys.Browser.Firefox={};Sys.Browser.Safari={};Sys.Browser.Opera={};Sys.Browser.agent=null;Sys.Browser.hasDebuggerStatement=false;Sys.Browser.name=navigator.appName;Sys.Browser.version=parseFloat(navigator.appVersion);Sys.Browser.documentMode=0;if(navigator.userAgent.indexOf(" MSIE ")>-1){Sys.Browser.agent=Sys.Browser.InternetExplorer;Sys.Browser.version=parseFloat(navigator.userAgent.match(/MSIE (\d+\.\d+)/)[1]);if(Sys.Browser.version>=8)if(document.documentMode>=7)Sys.Browser.documentMode=document.documentMode;Sys.Browser.hasDebuggerStatement=true}else if(navigator.userAgent.indexOf(" Firefox/")>-1){Sys.Browser.agent=Sys.Browser.Firefox;Sys.Browser.version=parseFloat(navigator.userAgent.match(/Firefox\/(\d+\.\d+)/)[1]);Sys.Browser.name="Firefox";Sys.Browser.hasDebuggerStatement=true}else if(navigator.userAgent.indexOf(" AppleWebKit/")>-1){Sys.Browser.agent=Sys.Browser.Safari;Sys.Browser.version=parseFloat(navigator.userAgent.match(/AppleWebKit\/(\d+(\.\d+)?)/)[1]);Sys.Browser.name="Safari"}else if(navigator.userAgent.indexOf("Opera/")>-1)Sys.Browser.agent=Sys.Browser.Opera;Type.registerNamespace("Sys.UI");Sys._Debug=function(){};Sys._Debug.prototype={_appendConsole:function(a){if(typeof Debug!=="undefined"&&Debug.writeln)Debug.writeln(a);if(window.console&&window.console.log)window.console.log(a);if(window.opera)window.opera.postError(a);if(window.debugService)window.debugService.trace(a)},_appendTrace:function(b){var a=document.getElementById("TraceConsole");if(a&&a.tagName.toUpperCase()==="TEXTAREA")a.value+=b+"\n"},assert:function(c,a,b){if(!c){a=b&&this.assert.caller?String.format(Sys.Res.assertFailedCaller,a,this.assert.caller):String.format(Sys.Res.assertFailed,a);if(confirm(String.format(Sys.Res.breakIntoDebugger,a)))this.fail(a)}},clearTrace:function(){var a=document.getElementById("TraceConsole");if(a&&a.tagName.toUpperCase()==="TEXTAREA")a.value=""},fail:function(message){this._appendConsole(message);if(Sys.Browser.hasDebuggerStatement)eval("debugger")},trace:function(a){this._appendConsole(a);this._appendTrace(a)},traceDump:function(a,b){var c=this._traceDump(a,b,true)},_traceDump:function(a,c,f,b,d){c=c?c:"traceDump";b=b?b:"";if(a===null){this.trace(b+c+": null");return}switch(typeof a){case "undefined":this.trace(b+c+": Undefined");break;case "number":case "string":case "boolean":this.trace(b+c+": "+a);break;default:if(Date.isInstanceOfType(a)||RegExp.isInstanceOfType(a)){this.trace(b+c+": "+a.toString());break}if(!d)d=[];else if(Array.contains(d,a)){this.trace(b+c+": ...");return}Array.add(d,a);if(a==window||a===document||window.HTMLElement&&a instanceof HTMLElement||typeof a.nodeName==="string"){var k=a.tagName?a.tagName:"DomElement";if(a.id)k+=" - "+a.id;this.trace(b+c+" {"+k+"}")}else{var i=Object.getTypeName(a);this.trace(b+c+(typeof i==="string"?" {"+i+"}":""));if(b===""||f){b+="    ";var e,j,l,g,h;if(Array.isInstanceOfType(a)){j=a.length;for(e=0;e<j;e++)this._traceDump(a[e],"["+e+"]",f,b,d)}else for(g in a){h=a[g];if(!Function.isInstanceOfType(h))this._traceDump(h,g,f,b,d)}}}Array.remove(d,a)}}};Sys._Debug.registerClass("Sys._Debug");Sys.Debug=new Sys._Debug;Sys.Debug.isDebug=false;function Sys$Enum$parse(c,e){var a,b,i;if(e){a=this.__lowerCaseValues;if(!a){this.__lowerCaseValues=a={};var g=this.prototype;for(var f in g)a[f.toLowerCase()]=g[f]}}else a=this.prototype;if(!this.__flags){i=e?c.toLowerCase():c;b=a[i.trim()];if(typeof b!=="number")throw Error.argument("value",String.format(Sys.Res.enumInvalidValue,c,this.__typeName));return b}else{var h=(e?c.toLowerCase():c).split(","),j=0;for(var d=h.length-1;d>=0;d--){var k=h[d].trim();b=a[k];if(typeof b!=="number")throw Error.argument("value",String.format(Sys.Res.enumInvalidValue,c.split(",")[d].trim(),this.__typeName));j|=b}return j}}function Sys$Enum$toString(c){if(typeof c==="undefined"||c===null)return this.__string;var d=this.prototype,a;if(!this.__flags||c===0){for(a in d)if(d[a]===c)return a}else{var b=this.__sortedValues;if(!b){b=[];for(a in d)b[b.length]={key:a,value:d[a]};b.sort(function(a,b){return a.value-b.value});this.__sortedValues=b}var e=[],g=c;for(a=b.length-1;a>=0;a--){var h=b[a],f=h.value;if(f===0)continue;if((f&c)===f){e[e.length]=h.key;g-=f;if(g===0)break}}if(e.length&&g===0)return e.reverse().join(", ")}return ""}Type.prototype.registerEnum=function(b,c){Sys.__upperCaseTypes[b.toUpperCase()]=this;for(var a in this.prototype)this[a]=this.prototype[a];this.__typeName=b;this.parse=Sys$Enum$parse;this.__string=this.toString();this.toString=Sys$Enum$toString;this.__flags=c;this.__enum=true};Type.isEnum=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__enum};Type.isFlags=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__flags};Sys.EventHandlerList=function(){this._list={}};Sys.EventHandlerList.prototype={addHandler:function(b,a){Array.add(this._getEvent(b,true),a)},removeHandler:function(c,b){var a=this._getEvent(c);if(!a)return;Array.remove(a,b)},getHandler:function(b){var a=this._getEvent(b);if(!a||a.length===0)return null;a=Array.clone(a);return function(c,d){for(var b=0,e=a.length;b<e;b++)a[b](c,d)}},_getEvent:function(a,b){if(!this._list[a]){if(!b)return null;this._list[a]=[]}return this._list[a]}};Sys.EventHandlerList.registerClass("Sys.EventHandlerList");Sys.EventArgs=function(){};Sys.EventArgs.registerClass("Sys.EventArgs");Sys.EventArgs.Empty=new Sys.EventArgs;Sys.CancelEventArgs=function(){Sys.CancelEventArgs.initializeBase(this);this._cancel=false};Sys.CancelEventArgs.prototype={get_cancel:function(){return this._cancel},set_cancel:function(a){this._cancel=a}};Sys.CancelEventArgs.registerClass("Sys.CancelEventArgs",Sys.EventArgs);Sys.INotifyPropertyChange=function(){};Sys.INotifyPropertyChange.prototype={};Sys.INotifyPropertyChange.registerInterface("Sys.INotifyPropertyChange");Sys.PropertyChangedEventArgs=function(a){Sys.PropertyChangedEventArgs.initializeBase(this);this._propertyName=a};Sys.PropertyChangedEventArgs.prototype={get_propertyName:function(){return this._propertyName}};Sys.PropertyChangedEventArgs.registerClass("Sys.PropertyChangedEventArgs",Sys.EventArgs);Sys.INotifyDisposing=function(){};Sys.INotifyDisposing.prototype={};Sys.INotifyDisposing.registerInterface("Sys.INotifyDisposing");Sys.Component=function(){if(Sys.Application)Sys.Application.registerDisposableObject(this)};Sys.Component.prototype={_id:null,_initialized:false,_updating:false,get_events:function(){if(!this._events)this._events=new Sys.EventHandlerList;return this._events},get_id:function(){return this._id},set_id:function(a){this._id=a},get_isInitialized:function(){return this._initialized},get_isUpdating:function(){return this._updating},add_disposing:function(a){this.get_events().addHandler("disposing",a)},remove_disposing:function(a){this.get_events().removeHandler("disposing",a)},add_propertyChanged:function(a){this.get_events().addHandler("propertyChanged",a)},remove_propertyChanged:function(a){this.get_events().removeHandler("propertyChanged",a)},beginUpdate:function(){this._updating=true},dispose:function(){if(this._events){var a=this._events.getHandler("disposing");if(a)a(this,Sys.EventArgs.Empty)}delete this._events;Sys.Application.unregisterDisposableObject(this);Sys.Application.removeComponent(this)},endUpdate:function(){this._updating=false;if(!this._initialized)this.initialize();this.updated()},initialize:function(){this._initialized=true},raisePropertyChanged:function(b){if(!this._events)return;var a=this._events.getHandler("propertyChanged");if(a)a(this,new Sys.PropertyChangedEventArgs(b))},updated:function(){}};Sys.Component.registerClass("Sys.Component",null,Sys.IDisposable,Sys.INotifyPropertyChange,Sys.INotifyDisposing);function Sys$Component$_setProperties(a,i){var d,j=Object.getType(a),e=j===Object||j===Sys.UI.DomElement,h=Sys.Component.isInstanceOfType(a)&&!a.get_isUpdating();if(h)a.beginUpdate();for(var c in i){var b=i[c],f=e?null:a["get_"+c];if(e||typeof f!=="function"){var k=a[c];if(!b||typeof b!=="object"||e&&!k)a[c]=b;else Sys$Component$_setProperties(k,b)}else{var l=a["set_"+c];if(typeof l==="function")l.apply(a,[b]);else if(b instanceof Array){d=f.apply(a);for(var g=0,m=d.length,n=b.length;g<n;g++,m++)d[m]=b[g]}else if(typeof b==="object"&&Object.getType(b)===Object){d=f.apply(a);Sys$Component$_setProperties(d,b)}}}if(h)a.endUpdate()}function Sys$Component$_setReferences(c,b){for(var a in b){var e=c["set_"+a],d=$find(b[a]);e.apply(c,[d])}}var $create=Sys.Component.create=function(h,f,d,c,g){var a=g?new h(g):new h,b=Sys.Application,i=b.get_isCreatingComponents();a.beginUpdate();if(f)Sys$Component$_setProperties(a,f);if(d)for(var e in d)a["add_"+e](d[e]);if(a.get_id())b.addComponent(a);if(i){b._createdComponents[b._createdComponents.length]=a;if(c)b._addComponentToSecondPass(a,c);else a.endUpdate()}else{if(c)Sys$Component$_setReferences(a,c);a.endUpdate()}return a};Sys.UI.MouseButton=function(){throw Error.notImplemented()};Sys.UI.MouseButton.prototype={leftButton:0,middleButton:1,rightButton:2};Sys.UI.MouseButton.registerEnum("Sys.UI.MouseButton");Sys.UI.Key=function(){throw Error.notImplemented()};Sys.UI.Key.prototype={backspace:8,tab:9,enter:13,esc:27,space:32,pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40,del:127};Sys.UI.Key.registerEnum("Sys.UI.Key");Sys.UI.Point=function(a,b){this.x=Math.round(a);this.y=Math.round(b)};Sys.UI.Point.registerClass("Sys.UI.Point");Sys.UI.Bounds=function(c,d,b,a){this.x=c;this.y=d;this.height=a;this.width=b};Sys.UI.Bounds.registerClass("Sys.UI.Bounds");Sys.UI.DomEvent=function(e){var a=e,b=this.type=a.type.toLowerCase();this.rawEvent=a;this.altKey=a.altKey;if(typeof a.button!=="undefined")this.button=typeof a.which!=="undefined"?a.button:a.button===4?Sys.UI.MouseButton.middleButton:a.button===2?Sys.UI.MouseButton.rightButton:Sys.UI.MouseButton.leftButton;if(b==="keypress")this.charCode=a.charCode||a.keyCode;else if(a.keyCode&&a.keyCode===46)this.keyCode=127;else this.keyCode=a.keyCode;this.clientX=a.clientX;this.clientY=a.clientY;this.ctrlKey=a.ctrlKey;this.target=a.target?a.target:a.srcElement;if(!b.startsWith("key"))if(typeof a.offsetX!=="undefined"&&typeof a.offsetY!=="undefined"){this.offsetX=a.offsetX;this.offsetY=a.offsetY}else if(this.target&&this.target.nodeType!==3&&typeof a.clientX==="number"){var c=Sys.UI.DomElement.getLocation(this.target),d=Sys.UI.DomElement._getWindow(this.target);this.offsetX=(d.pageXOffset||0)+a.clientX-c.x;this.offsetY=(d.pageYOffset||0)+a.clientY-c.y}this.screenX=a.screenX;this.screenY=a.screenY;this.shiftKey=a.shiftKey};Sys.UI.DomEvent.prototype={preventDefault:function(){if(this.rawEvent.preventDefault)this.rawEvent.preventDefault();else if(window.event)this.rawEvent.returnValue=false},stopPropagation:function(){if(this.rawEvent.stopPropagation)this.rawEvent.stopPropagation();else if(window.event)this.rawEvent.cancelBubble=true}};Sys.UI.DomEvent.registerClass("Sys.UI.DomEvent");var $addHandler=Sys.UI.DomEvent.addHandler=function(a,d,e){if(!a._events)a._events={};var c=a._events[d];if(!c)a._events[d]=c=[];var b;if(a.addEventListener){b=function(b){return e.call(a,new Sys.UI.DomEvent(b))};a.addEventListener(d,b,false)}else if(a.attachEvent){b=function(){var b={};try{b=Sys.UI.DomElement._getWindow(a).event}catch(c){}return e.call(a,new Sys.UI.DomEvent(b))};a.attachEvent("on"+d,b)}c[c.length]={handler:e,browserHandler:b}},$addHandlers=Sys.UI.DomEvent.addHandlers=function(e,d,c){for(var b in d){var a=d[b];if(c)a=Function.createDelegate(c,a);$addHandler(e,b,a)}},$clearHandlers=Sys.UI.DomEvent.clearHandlers=function(a){if(a._events){var e=a._events;for(var b in e){var d=e[b];for(var c=d.length-1;c>=0;c--)$removeHandler(a,b,d[c].handler)}a._events=null}},$removeHandler=Sys.UI.DomEvent.removeHandler=function(a,e,f){var d=null,c=a._events[e];for(var b=0,g=c.length;b<g;b++)if(c[b].handler===f){d=c[b].browserHandler;break}if(a.removeEventListener)a.removeEventListener(e,d,false);else if(a.detachEvent)a.detachEvent("on"+e,d);c.splice(b,1)};Sys.UI.DomElement=function(){};Sys.UI.DomElement.registerClass("Sys.UI.DomElement");Sys.UI.DomElement.addCssClass=function(a,b){if(!Sys.UI.DomElement.containsCssClass(a,b))if(a.className==="")a.className=b;else a.className+=" "+b};Sys.UI.DomElement.containsCssClass=function(b,a){return Array.contains(b.className.split(" "),a)};Sys.UI.DomElement.getBounds=function(a){var b=Sys.UI.DomElement.getLocation(a);return new Sys.UI.Bounds(b.x,b.y,a.offsetWidth||0,a.offsetHeight||0)};var $get=Sys.UI.DomElement.getElementById=function(f,e){if(!e)return document.getElementById(f);if(e.getElementById)return e.getElementById(f);var c=[],d=e.childNodes;for(var b=0;b<d.length;b++){var a=d[b];if(a.nodeType==1)c[c.length]=a}while(c.length){a=c.shift();if(a.id==f)return a;d=a.childNodes;for(b=0;b<d.length;b++){a=d[b];if(a.nodeType==1)c[c.length]=a}}return null};switch(Sys.Browser.agent){case Sys.Browser.InternetExplorer:Sys.UI.DomElement.getLocation=function(a){if(a.self||a.nodeType===9)return new Sys.UI.Point(0,0);var b=a.getBoundingClientRect();if(!b)return new Sys.UI.Point(0,0);var d=a.ownerDocument.documentElement,e=b.left-2+d.scrollLeft,f=b.top-2+d.scrollTop;try{var c=a.ownerDocument.parentWindow.frameElement||null;if(c){var g=c.frameBorder==="0"||c.frameBorder==="no"?2:0;e+=g;f+=g}}catch(h){}return new Sys.UI.Point(e,f)};break;case Sys.Browser.Safari:Sys.UI.DomElement.getLocation=function(c){if(c.window&&c.window===c||c.nodeType===9)return new Sys.UI.Point(0,0);var f=0,g=0,j=null,e=null,b;for(var a=c;a;j=a,(e=b,a=a.offsetParent)){b=Sys.UI.DomElement._getCurrentStyle(a);var d=a.tagName?a.tagName.toUpperCase():null;if((a.offsetLeft||a.offsetTop)&&(d!=="BODY"||(!e||e.position!=="absolute"))){f+=a.offsetLeft;g+=a.offsetTop}}b=Sys.UI.DomElement._getCurrentStyle(c);var h=b?b.position:null;if(!h||h!=="absolute")for(var a=c.parentNode;a;a=a.parentNode){d=a.tagName?a.tagName.toUpperCase():null;if(d!=="BODY"&&d!=="HTML"&&(a.scrollLeft||a.scrollTop)){f-=a.scrollLeft||0;g-=a.scrollTop||0}b=Sys.UI.DomElement._getCurrentStyle(a);var i=b?b.position:null;if(i&&i==="absolute")break}return new Sys.UI.Point(f,g)};break;case Sys.Browser.Opera:Sys.UI.DomElement.getLocation=function(b){if(b.window&&b.window===b||b.nodeType===9)return new Sys.UI.Point(0,0);var d=0,e=0,i=null;for(var a=b;a;i=a,a=a.offsetParent){var f=a.tagName;d+=a.offsetLeft||0;e+=a.offsetTop||0}var g=b.style.position,c=g&&g!=="static";for(var a=b.parentNode;a;a=a.parentNode){f=a.tagName?a.tagName.toUpperCase():null;if(f!=="BODY"&&f!=="HTML"&&(a.scrollLeft||a.scrollTop)&&(c&&(a.style.overflow==="scroll"||a.style.overflow==="auto"))){d-=a.scrollLeft||0;e-=a.scrollTop||0}var h=a&&a.style?a.style.position:null;c=c||h&&h!=="static"}return new Sys.UI.Point(d,e)};break;default:Sys.UI.DomElement.getLocation=function(d){if(d.window&&d.window===d||d.nodeType===9)return new Sys.UI.Point(0,0);var e=0,f=0,i=null,g=null,b=null;for(var a=d;a;i=a,(g=b,a=a.offsetParent)){var c=a.tagName?a.tagName.toUpperCase():null;b=Sys.UI.DomElement._getCurrentStyle(a);if((a.offsetLeft||a.offsetTop)&&!(c==="BODY"&&(!g||g.position!=="absolute"))){e+=a.offsetLeft;f+=a.offsetTop}if(i!==null&&b){if(c!=="TABLE"&&c!=="TD"&&c!=="HTML"){e+=parseInt(b.borderLeftWidth)||0;f+=parseInt(b.borderTopWidth)||0}if(c==="TABLE"&&(b.position==="relative"||b.position==="absolute")){e+=parseInt(b.marginLeft)||0;f+=parseInt(b.marginTop)||0}}}b=Sys.UI.DomElement._getCurrentStyle(d);var h=b?b.position:null;if(!h||h!=="absolute")for(var a=d.parentNode;a;a=a.parentNode){c=a.tagName?a.tagName.toUpperCase():null;if(c!=="BODY"&&c!=="HTML"&&(a.scrollLeft||a.scrollTop)){e-=a.scrollLeft||0;f-=a.scrollTop||0;b=Sys.UI.DomElement._getCurrentStyle(a);if(b){e+=parseInt(b.borderLeftWidth)||0;f+=parseInt(b.borderTopWidth)||0}}}return new Sys.UI.Point(e,f)}}Sys.UI.DomElement.removeCssClass=function(d,c){var a=" "+d.className+" ",b=a.indexOf(" "+c+" ");if(b>=0)d.className=(a.substr(0,b)+" "+a.substring(b+c.length+1,a.length)).trim()};Sys.UI.DomElement.setLocation=function(b,c,d){var a=b.style;a.position="absolute";a.left=c+"px";a.top=d+"px"};Sys.UI.DomElement.toggleCssClass=function(b,a){if(Sys.UI.DomElement.containsCssClass(b,a))Sys.UI.DomElement.removeCssClass(b,a);else Sys.UI.DomElement.addCssClass(b,a)};Sys.UI.DomElement.getVisibilityMode=function(a){return a._visibilityMode===Sys.UI.VisibilityMode.hide?Sys.UI.VisibilityMode.hide:Sys.UI.VisibilityMode.collapse};Sys.UI.DomElement.setVisibilityMode=function(a,b){Sys.UI.DomElement._ensureOldDisplayMode(a);if(a._visibilityMode!==b){a._visibilityMode=b;if(Sys.UI.DomElement.getVisible(a)===false)if(a._visibilityMode===Sys.UI.VisibilityMode.hide)a.style.display=a._oldDisplayMode;else a.style.display="none";a._visibilityMode=b}};Sys.UI.DomElement.getVisible=function(b){var a=b.currentStyle||Sys.UI.DomElement._getCurrentStyle(b);if(!a)return true;return a.visibility!=="hidden"&&a.display!=="none"};Sys.UI.DomElement.setVisible=function(a,b){if(b!==Sys.UI.DomElement.getVisible(a)){Sys.UI.DomElement._ensureOldDisplayMode(a);a.style.visibility=b?"visible":"hidden";if(b||a._visibilityMode===Sys.UI.VisibilityMode.hide)a.style.display=a._oldDisplayMode;else a.style.display="none"}};Sys.UI.DomElement._ensureOldDisplayMode=function(a){if(!a._oldDisplayMode){var b=a.currentStyle||Sys.UI.DomElement._getCurrentStyle(a);a._oldDisplayMode=b?b.display:null;if(!a._oldDisplayMode||a._oldDisplayMode==="none")switch(a.tagName.toUpperCase()){case "DIV":case "P":case "ADDRESS":case "BLOCKQUOTE":case "BODY":case "COL":case "COLGROUP":case "DD":case "DL":case "DT":case "FIELDSET":case "FORM":case "H1":case "H2":case "H3":case "H4":case "H5":case "H6":case "HR":case "IFRAME":case "LEGEND":case "OL":case "PRE":case "TABLE":case "TD":case "TH":case "TR":case "UL":a._oldDisplayMode="block";break;case "LI":a._oldDisplayMode="list-item";break;default:a._oldDisplayMode="inline"}}};Sys.UI.DomElement._getWindow=function(a){var b=a.ownerDocument||a.document||a;return b.defaultView||b.parentWindow};Sys.UI.DomElement._getCurrentStyle=function(a){if(a.nodeType===3)return null;var c=Sys.UI.DomElement._getWindow(a);if(a.documentElement)a=a.documentElement;var b=c&&a!==c&&c.getComputedStyle?c.getComputedStyle(a,null):a.currentStyle||a.style;if(!b&&Sys.Browser.agent===Sys.Browser.Safari&&a.style){var g=a.style.display,f=a.style.position;a.style.position="absolute";a.style.display="block";var e=c.getComputedStyle(a,null);a.style.display=g;a.style.position=f;b={};for(var d in e)b[d]=e[d];b.display="none"}return b};Sys.IContainer=function(){};Sys.IContainer.prototype={};Sys.IContainer.registerInterface("Sys.IContainer");Sys._ScriptLoader=function(){this._scriptsToLoad=null;this._sessions=[];this._scriptLoadedDelegate=Function.createDelegate(this,this._scriptLoadedHandler)};Sys._ScriptLoader.prototype={dispose:function(){this._stopSession();this._loading=false;if(this._events)delete this._events;this._sessions=null;this._currentSession=null;this._scriptLoadedDelegate=null},loadScripts:function(d,b,c,a){var e={allScriptsLoadedCallback:b,scriptLoadFailedCallback:c,scriptLoadTimeoutCallback:a,scriptsToLoad:this._scriptsToLoad,scriptTimeout:d};this._scriptsToLoad=null;this._sessions[this._sessions.length]=e;if(!this._loading)this._nextSession()},notifyScriptLoaded:function(){if(!this._loading)return;this._currentTask._notified++;if(Sys.Browser.agent===Sys.Browser.Safari)if(this._currentTask._notified===1)window.setTimeout(Function.createDelegate(this,function(){this._scriptLoadedHandler(this._currentTask.get_scriptElement(),true)}),0)},queueCustomScriptTag:function(a){if(!this._scriptsToLoad)this._scriptsToLoad=[];Array.add(this._scriptsToLoad,a)},queueScriptBlock:function(a){if(!this._scriptsToLoad)this._scriptsToLoad=[];Array.add(this._scriptsToLoad,{text:a})},queueScriptReference:function(a){if(!this._scriptsToLoad)this._scriptsToLoad=[];Array.add(this._scriptsToLoad,{src:a})},_createScriptElement:function(c){var a=document.createElement("script");a.type="text/javascript";for(var b in c)a[b]=c[b];return a},_loadScriptsInternal:function(){var b=this._currentSession;if(b.scriptsToLoad&&b.scriptsToLoad.length>0){var c=Array.dequeue(b.scriptsToLoad),a=this._createScriptElement(c);if(a.text&&Sys.Browser.agent===Sys.Browser.Safari){a.innerHTML=a.text;delete a.text}if(typeof c.src==="string"){this._currentTask=new Sys._ScriptLoaderTask(a,this._scriptLoadedDelegate);this._currentTask.execute()}else{document.getElementsByTagName("head")[0].appendChild(a);Sys._ScriptLoader._clearScript(a);this._loadScriptsInternal()}}else{this._stopSession();var d=b.allScriptsLoadedCallback;if(d)d(this);this._nextSession()}},_nextSession:function(){if(this._sessions.length===0){this._loading=false;this._currentSession=null;return}this._loading=true;var a=Array.dequeue(this._sessions);this._currentSession=a;if(a.scriptTimeout>0)this._timeoutCookie=window.setTimeout(Function.createDelegate(this,this._scriptLoadTimeoutHandler),a.scriptTimeout*1000);this._loadScriptsInternal()},_raiseError:function(a){var c=this._currentSession.scriptLoadFailedCallback,b=this._currentTask.get_scriptElement();this._stopSession();if(c){c(this,b,a);this._nextSession()}else{this._loading=false;throw Sys._ScriptLoader._errorScriptLoadFailed(b.src,a)}},_scriptLoadedHandler:function(a,b){if(b&&this._currentTask._notified)if(this._currentTask._notified>1)this._raiseError(true);else{Array.add(Sys._ScriptLoader._getLoadedScripts(),a.src);this._currentTask.dispose();this._currentTask=null;this._loadScriptsInternal()}else this._raiseError(false)},_scriptLoadTimeoutHandler:function(){var a=this._currentSession.scriptLoadTimeoutCallback;this._stopSession();if(a)a(this);this._nextSession()},_stopSession:function(){if(this._timeoutCookie){window.clearTimeout(this._timeoutCookie);this._timeoutCookie=null}if(this._currentTask){this._currentTask.dispose();this._currentTask=null}}};Sys._ScriptLoader.registerClass("Sys._ScriptLoader",null,Sys.IDisposable);Sys._ScriptLoader.getInstance=function(){var a=Sys._ScriptLoader._activeInstance;if(!a)a=Sys._ScriptLoader._activeInstance=new Sys._ScriptLoader;return a};Sys._ScriptLoader.isScriptLoaded=function(b){var a=document.createElement("script");a.src=b;return Array.contains(Sys._ScriptLoader._getLoadedScripts(),a.src)};Sys._ScriptLoader.readLoadedScripts=function(){if(!Sys._ScriptLoader._referencedScripts){var b=Sys._ScriptLoader._referencedScripts=[],c=document.getElementsByTagName("script");for(i=c.length-1;i>=0;i--){var d=c[i],a=d.src;if(a.length)if(!Array.contains(b,a))Array.add(b,a)}}};Sys._ScriptLoader._clearScript=function(a){if(!Sys.Debug.isDebug)a.parentNode.removeChild(a)};Sys._ScriptLoader._errorScriptLoadFailed=function(b,d){var a;if(d)a=Sys.Res.scriptLoadMultipleCallbacks;else a=Sys.Res.scriptLoadFailed;var e="Sys.ScriptLoadFailedException: "+String.format(a,b),c=Error.create(e,{name:"Sys.ScriptLoadFailedException","scriptUrl":b});c.popStackFrame();return c};Sys._ScriptLoader._getLoadedScripts=function(){if(!Sys._ScriptLoader._referencedScripts){Sys._ScriptLoader._referencedScripts=[];Sys._ScriptLoader.readLoadedScripts()}return Sys._ScriptLoader._referencedScripts};Sys._ScriptLoaderTask=function(b,a){this._scriptElement=b;this._completedCallback=a;this._notified=0};Sys._ScriptLoaderTask.prototype={get_scriptElement:function(){return this._scriptElement},dispose:function(){if(this._disposed)return;this._disposed=true;this._removeScriptElementHandlers();Sys._ScriptLoader._clearScript(this._scriptElement);this._scriptElement=null},execute:function(){this._addScriptElementHandlers();document.getElementsByTagName("head")[0].appendChild(this._scriptElement)},_addScriptElementHandlers:function(){this._scriptLoadDelegate=Function.createDelegate(this,this._scriptLoadHandler);if(Sys.Browser.agent!==Sys.Browser.InternetExplorer){this._scriptElement.readyState="loaded";$addHandler(this._scriptElement,"load",this._scriptLoadDelegate)}else $addHandler(this._scriptElement,"readystatechange",this._scriptLoadDelegate);if(this._scriptElement.addEventListener){this._scriptErrorDelegate=Function.createDelegate(this,this._scriptErrorHandler);this._scriptElement.addEventListener("error",this._scriptErrorDelegate,false)}},_removeScriptElementHandlers:function(){if(this._scriptLoadDelegate){var a=this.get_scriptElement();if(Sys.Browser.agent!==Sys.Browser.InternetExplorer)$removeHandler(a,"load",this._scriptLoadDelegate);else $removeHandler(a,"readystatechange",this._scriptLoadDelegate);if(this._scriptErrorDelegate){this._scriptElement.removeEventListener("error",this._scriptErrorDelegate,false);this._scriptErrorDelegate=null}this._scriptLoadDelegate=null}},_scriptErrorHandler:function(){if(this._disposed)return;this._completedCallback(this.get_scriptElement(),false)},_scriptLoadHandler:function(){if(this._disposed)return;var a=this.get_scriptElement();if(a.readyState!=="loaded"&&a.readyState!=="complete")return;var b=this;window.setTimeout(function(){b._completedCallback(a,true)},0)}};Sys._ScriptLoaderTask.registerClass("Sys._ScriptLoaderTask",null,Sys.IDisposable);Sys.ApplicationLoadEventArgs=function(b,a){Sys.ApplicationLoadEventArgs.initializeBase(this);this._components=b;this._isPartialLoad=a};Sys.ApplicationLoadEventArgs.prototype={get_components:function(){return this._components},get_isPartialLoad:function(){return this._isPartialLoad}};Sys.ApplicationLoadEventArgs.registerClass("Sys.ApplicationLoadEventArgs",Sys.EventArgs);Sys.HistoryEventArgs=function(a){Sys.HistoryEventArgs.initializeBase(this);this._state=a};Sys.HistoryEventArgs.prototype={get_state:function(){return this._state}};Sys.HistoryEventArgs.registerClass("Sys.HistoryEventArgs",Sys.EventArgs);Sys._Application=function(){Sys._Application.initializeBase(this);this._disposableObjects=[];this._components={};this._createdComponents=[];this._secondPassComponents=[];this._appLoadHandler=null;this._beginRequestHandler=null;this._clientId=null;this._currentEntry="";this._endRequestHandler=null;this._history=null;this._enableHistory=false;this._historyFrame=null;this._historyInitialized=false;this._historyInitialLength=0;this._historyLength=0;this._historyPointIsNew=false;this._ignoreTimer=false;this._initialState=null;this._state={};this._timerCookie=0;this._timerHandler=null;this._uniqueId=null;this._unloadHandlerDelegate=Function.createDelegate(this,this._unloadHandler);this._loadHandlerDelegate=Function.createDelegate(this,this._loadHandler);Sys.UI.DomEvent.addHandler(window,"unload",this._unloadHandlerDelegate);Sys.UI.DomEvent.addHandler(window,"load",this._loadHandlerDelegate)};Sys._Application.prototype={_creatingComponents:false,_disposing:false,get_isCreatingComponents:function(){return this._creatingComponents},get_stateString:function(){var a=window.location.hash;if(this._isSafari2()){var b=this._getHistory();if(b)a=b[window.history.length-this._historyInitialLength]}if(a.length>0&&a.charAt(0)==="#")a=a.substring(1);if(Sys.Browser.agent===Sys.Browser.Firefox)a=this._serializeState(this._deserializeState(a,true));return a},get_enableHistory:function(){return this._enableHistory},set_enableHistory:function(a){this._enableHistory=a},add_init:function(a){if(this._initialized)a(this,Sys.EventArgs.Empty);else this.get_events().addHandler("init",a)},remove_init:function(a){this.get_events().removeHandler("init",a)},add_load:function(a){this.get_events().addHandler("load",a)},remove_load:function(a){this.get_events().removeHandler("load",a)},add_navigate:function(a){this.get_events().addHandler("navigate",a)},remove_navigate:function(a){this.get_events().removeHandler("navigate",a)},add_unload:function(a){this.get_events().addHandler("unload",a)},remove_unload:function(a){this.get_events().removeHandler("unload",a)},addComponent:function(a){this._components[a.get_id()]=a},addHistoryPoint:function(c,f){this._ensureHistory();var b=this._state;for(var a in c){var d=c[a];if(d===null){if(typeof b[a]!=="undefined")delete b[a]}else b[a]=d}var e=this._serializeState(b);this._historyPointIsNew=true;this._setState(e,f);this._raiseNavigate()},beginCreateComponents:function(){this._creatingComponents=true},dispose:function(){if(!this._disposing){this._disposing=true;if(this._timerCookie){window.clearTimeout(this._timerCookie);delete this._timerCookie}if(this._endRequestHandler){Sys.WebForms.PageRequestManager.getInstance().remove_endRequest(this._endRequestHandler);delete this._endRequestHandler}if(this._beginRequestHandler){Sys.WebForms.PageRequestManager.getInstance().remove_beginRequest(this._beginRequestHandler);delete this._beginRequestHandler}if(window.pageUnload)window.pageUnload(this,Sys.EventArgs.Empty);var c=this.get_events().getHandler("unload");if(c)c(this,Sys.EventArgs.Empty);var b=Array.clone(this._disposableObjects);for(var a=0,e=b.length;a<e;a++)b[a].dispose();Array.clear(this._disposableObjects);Sys.UI.DomEvent.removeHandler(window,"unload",this._unloadHandlerDelegate);if(this._loadHandlerDelegate){Sys.UI.DomEvent.removeHandler(window,"load",this._loadHandlerDelegate);this._loadHandlerDelegate=null}var d=Sys._ScriptLoader.getInstance();if(d)d.dispose();Sys._Application.callBaseMethod(this,"dispose")}},endCreateComponents:function(){var b=this._secondPassComponents;for(var a=0,d=b.length;a<d;a++){var c=b[a].component;Sys$Component$_setReferences(c,b[a].references);c.endUpdate()}this._secondPassComponents=[];this._creatingComponents=false},findComponent:function(b,a){return a?Sys.IContainer.isInstanceOfType(a)?a.findComponent(b):a[b]||null:Sys.Application._components[b]||null},getComponents:function(){var a=[],b=this._components;for(var c in b)a[a.length]=b[c];return a},initialize:function(){if(!this._initialized&&!this._initializing){this._initializing=true;window.setTimeout(Function.createDelegate(this,this._doInitialize),0)}},notifyScriptLoaded:function(){var a=Sys._ScriptLoader.getInstance();if(a)a.notifyScriptLoaded()},registerDisposableObject:function(a){if(!this._disposing)this._disposableObjects[this._disposableObjects.length]=a},raiseLoad:function(){var b=this.get_events().getHandler("load"),a=new Sys.ApplicationLoadEventArgs(Array.clone(this._createdComponents),!this._initializing);if(b)b(this,a);if(window.pageLoad)window.pageLoad(this,a);this._createdComponents=[]},removeComponent:function(b){var a=b.get_id();if(a)delete this._components[a]},setServerId:function(a,b){this._clientId=a;this._uniqueId=b},setServerState:function(a){this._ensureHistory();this._state.__s=a;this._updateHiddenField(a)},unregisterDisposableObject:function(a){if(!this._disposing)Array.remove(this._disposableObjects,a)},_addComponentToSecondPass:function(b,a){this._secondPassComponents[this._secondPassComponents.length]={component:b,references:a}},_deserializeState:function(a,i){var e={};a=a||"";var b=a.indexOf("&&");if(b!==-1&&b+2<a.length){e.__s=a.substr(b+2);a=a.substr(0,b)}var g=a.split("&");for(var f=0,k=g.length;f<k;f++){var d=g[f],c=d.indexOf("=");if(c!==-1&&c+1<d.length){var j=d.substr(0,c),h=d.substr(c+1);e[j]=i?h:decodeURIComponent(h)}}return e},_doInitialize:function(){Sys._Application.callBaseMethod(this,"initialize");var b=this.get_events().getHandler("init");if(b){this.beginCreateComponents();b(this,Sys.EventArgs.Empty);this.endCreateComponents()}if(Sys.WebForms){this._beginRequestHandler=Function.createDelegate(this,this._onPageRequestManagerBeginRequest);Sys.WebForms.PageRequestManager.getInstance().add_beginRequest(this._beginRequestHandler);this._endRequestHandler=Function.createDelegate(this,this._onPageRequestManagerEndRequest);Sys.WebForms.PageRequestManager.getInstance().add_endRequest(this._endRequestHandler)}var a=this.get_stateString();if(a!==this._currentEntry)this._navigate(a);this.raiseLoad();this._initializing=false},_enableHistoryInScriptManager:function(){this._enableHistory=true},_ensureHistory:function(){if(!this._historyInitialized&&this._enableHistory){if(Sys.Browser.agent===Sys.Browser.InternetExplorer&&Sys.Browser.documentMode<8){this._historyFrame=document.getElementById("__historyFrame");this._ignoreIFrame=true}if(this._isSafari2()){var a=document.getElementById("__history");this._setHistory([window.location.hash]);this._historyInitialLength=window.history.length}this._timerHandler=Function.createDelegate(this,this._onIdle);this._timerCookie=window.setTimeout(this._timerHandler,100);try{this._initialState=this._deserializeState(this.get_stateString())}catch(b){}this._historyInitialized=true}},_getHistory:function(){var a=document.getElementById("__history");if(!a)return "";var b=a.value;return b?Sys.Serialization.JavaScriptSerializer.deserialize(b,true):""},_isSafari2:function(){return Sys.Browser.agent===Sys.Browser.Safari&&Sys.Browser.version<=419.3},_loadHandler:function(){if(this._loadHandlerDelegate){Sys.UI.DomEvent.removeHandler(window,"load",this._loadHandlerDelegate);this._loadHandlerDelegate=null}this.initialize()},_navigate:function(c){this._ensureHistory();var b=this._deserializeState(c);if(this._uniqueId){var d=this._state.__s||"",a=b.__s||"";if(a!==d){this._updateHiddenField(a);__doPostBack(this._uniqueId,a);this._state=b;return}}this._setState(c);this._state=b;this._raiseNavigate()},_onIdle:function(){delete this._timerCookie;var a=this.get_stateString();if(a!==this._currentEntry){if(!this._ignoreTimer){this._historyPointIsNew=false;this._navigate(a);this._historyLength=window.history.length}}else this._ignoreTimer=false;this._timerCookie=window.setTimeout(this._timerHandler,100)},_onIFrameLoad:function(a){this._ensureHistory();if(!this._ignoreIFrame){this._historyPointIsNew=false;this._navigate(a)}this._ignoreIFrame=false},_onPageRequestManagerBeginRequest:function(){this._ignoreTimer=true},_onPageRequestManagerEndRequest:function(e,d){var b=d.get_dataItems()[this._clientId],a=document.getElementById("__EVENTTARGET");if(a&&a.value===this._uniqueId)a.value="";if(typeof b!=="undefined"){this.setServerState(b);this._historyPointIsNew=true}else this._ignoreTimer=false;var c=this._serializeState(this._state);if(c!==this._currentEntry){this._ignoreTimer=true;this._setState(c);this._raiseNavigate()}},_raiseNavigate:function(){var c=this.get_events().getHandler("navigate"),b={};for(var a in this._state)if(a!=="__s")b[a]=this._state[a];var d=new Sys.HistoryEventArgs(b);if(c)c(this,d)},_serializeState:function(d){var b=[];for(var a in d){var e=d[a];if(a==="__s")var c=e;else b[b.length]=a+"="+encodeURIComponent(e)}return b.join("&")+(c?"&&"+c:"")},_setHistory:function(b){var a=document.getElementById("__history");if(a)a.value=Sys.Serialization.JavaScriptSerializer.serialize(b)},_setState:function(a,c){a=a||"";if(a!==this._currentEntry){if(window.theForm){var e=window.theForm.action,f=e.indexOf("#");window.theForm.action=(f!==-1?e.substring(0,f):e)+"#"+a}if(this._historyFrame&&this._historyPointIsNew){this._ignoreIFrame=true;this._historyPointIsNew=false;var d=this._historyFrame.contentWindow.document;d.open("javascript:'<html></html>'");d.write("<html><head><title>"+(c||document.title)+"</title><scri"+'pt type="text/javascript">parent.Sys.Application._onIFrameLoad(\''+a+"');</scri"+"pt></head><body></body></html>");d.close()}this._ignoreTimer=false;var h=this.get_stateString();this._currentEntry=a;if(a!==h){if(this._isSafari2()){var g=this._getHistory();g[window.history.length-this._historyInitialLength+1]=a;this._setHistory(g);this._historyLength=window.history.length+1;var b=document.createElement("form");b.method="get";b.action="#"+a;document.appendChild(b);b.submit();document.removeChild(b)}else window.location.hash=a;if(typeof c!=="undefined"&&c!==null)document.title=c}}},_unloadHandler:function(){this.dispose()},_updateHiddenField:function(b){if(this._clientId){var a=document.getElementById(this._clientId);if(a)a.value=b}}};Sys._Application.registerClass("Sys._Application",Sys.Component,Sys.IContainer);Sys.Application=new Sys._Application;var $find=Sys.Application.findComponent;Type.registerNamespace("Sys.Net");Sys.Net.WebRequestExecutor=function(){this._webRequest=null;this._resultObject=null};Sys.Net.WebRequestExecutor.prototype={get_webRequest:function(){return this._webRequest},_set_webRequest:function(a){this._webRequest=a},get_started:function(){throw Error.notImplemented()},get_responseAvailable:function(){throw Error.notImplemented()},get_timedOut:function(){throw Error.notImplemented()},get_aborted:function(){throw Error.notImplemented()},get_responseData:function(){throw Error.notImplemented()},get_statusCode:function(){throw Error.notImplemented()},get_statusText:function(){throw Error.notImplemented()},get_xml:function(){throw Error.notImplemented()},get_object:function(){if(!this._resultObject)this._resultObject=Sys.Serialization.JavaScriptSerializer.deserialize(this.get_responseData());return this._resultObject},executeRequest:function(){throw Error.notImplemented()},abort:function(){throw Error.notImplemented()},getResponseHeader:function(){throw Error.notImplemented()},getAllResponseHeaders:function(){throw Error.notImplemented()}};Sys.Net.WebRequestExecutor.registerClass("Sys.Net.WebRequestExecutor");Sys.Net.XMLDOM=function(d){if(!window.DOMParser){var c=["Msxml2.DOMDocument.3.0","Msxml2.DOMDocument"];for(var b=0,f=c.length;b<f;b++)try{var a=new ActiveXObject(c[b]);a.async=false;a.loadXML(d);a.setProperty("SelectionLanguage","XPath");return a}catch(g){}}else try{var e=new window.DOMParser;return e.parseFromString(d,"text/xml")}catch(g){}return null};Sys.Net.XMLHttpExecutor=function(){Sys.Net.XMLHttpExecutor.initializeBase(this);var a=this;this._xmlHttpRequest=null;this._webRequest=null;this._responseAvailable=false;this._timedOut=false;this._timer=null;this._aborted=false;this._started=false;this._onReadyStateChange=function(){if(a._xmlHttpRequest.readyState===4){try{if(typeof a._xmlHttpRequest.status==="undefined")return}catch(b){return}a._clearTimer();a._responseAvailable=true;try{a._webRequest.completed(Sys.EventArgs.Empty)}finally{if(a._xmlHttpRequest!=null){a._xmlHttpRequest.onreadystatechange=Function.emptyMethod;a._xmlHttpRequest=null}}}};this._clearTimer=function(){if(a._timer!=null){window.clearTimeout(a._timer);a._timer=null}};this._onTimeout=function(){if(!a._responseAvailable){a._clearTimer();a._timedOut=true;a._xmlHttpRequest.onreadystatechange=Function.emptyMethod;a._xmlHttpRequest.abort();a._webRequest.completed(Sys.EventArgs.Empty);a._xmlHttpRequest=null}}};Sys.Net.XMLHttpExecutor.prototype={get_timedOut:function(){return this._timedOut},get_started:function(){return this._started},get_responseAvailable:function(){return this._responseAvailable},get_aborted:function(){return this._aborted},executeRequest:function(){this._webRequest=this.get_webRequest();var c=this._webRequest.get_body(),a=this._webRequest.get_headers();this._xmlHttpRequest=new XMLHttpRequest;this._xmlHttpRequest.onreadystatechange=this._onReadyStateChange;var e=this._webRequest.get_httpVerb();this._xmlHttpRequest.open(e,this._webRequest.getResolvedUrl(),true);if(a)for(var b in a){var f=a[b];if(typeof f!=="function")this._xmlHttpRequest.setRequestHeader(b,f)}if(e.toLowerCase()==="post"){if(a===null||!a["Content-Type"])this._xmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");if(!c)c=""}var d=this._webRequest.get_timeout();if(d>0)this._timer=window.setTimeout(Function.createDelegate(this,this._onTimeout),d);this._xmlHttpRequest.send(c);this._started=true},getResponseHeader:function(b){var a;try{a=this._xmlHttpRequest.getResponseHeader(b)}catch(c){}if(!a)a="";return a},getAllResponseHeaders:function(){return this._xmlHttpRequest.getAllResponseHeaders()},get_responseData:function(){return this._xmlHttpRequest.responseText},get_statusCode:function(){var a=0;try{a=this._xmlHttpRequest.status}catch(b){}return a},get_statusText:function(){return this._xmlHttpRequest.statusText},get_xml:function(){var a=this._xmlHttpRequest.responseXML;if(!a||!a.documentElement){a=Sys.Net.XMLDOM(this._xmlHttpRequest.responseText);if(!a||!a.documentElement)return null}else if(navigator.userAgent.indexOf("MSIE")!==-1&&typeof a.setProperty!="undefined")a.setProperty("SelectionLanguage","XPath");if(a.documentElement.namespaceURI==="http://www.mozilla.org/newlayout/xml/parsererror.xml"&&a.documentElement.tagName==="parsererror")return null;if(a.documentElement.firstChild&&a.documentElement.firstChild.tagName==="parsererror")return null;return a},abort:function(){if(this._aborted||this._responseAvailable||this._timedOut)return;this._aborted=true;this._clearTimer();if(this._xmlHttpRequest&&!this._responseAvailable){this._xmlHttpRequest.onreadystatechange=Function.emptyMethod;this._xmlHttpRequest.abort();this._xmlHttpRequest=null;this._webRequest.completed(Sys.EventArgs.Empty)}}};Sys.Net.XMLHttpExecutor.registerClass("Sys.Net.XMLHttpExecutor",Sys.Net.WebRequestExecutor);Sys.Net._WebRequestManager=function(){this._defaultTimeout=0;this._defaultExecutorType="Sys.Net.XMLHttpExecutor"};Sys.Net._WebRequestManager.prototype={add_invokingRequest:function(a){this._get_eventHandlerList().addHandler("invokingRequest",a)},remove_invokingRequest:function(a){this._get_eventHandlerList().removeHandler("invokingRequest",a)},add_completedRequest:function(a){this._get_eventHandlerList().addHandler("completedRequest",a)},remove_completedRequest:function(a){this._get_eventHandlerList().removeHandler("completedRequest",a)},_get_eventHandlerList:function(){if(!this._events)this._events=new Sys.EventHandlerList;return this._events},get_defaultTimeout:function(){return this._defaultTimeout},set_defaultTimeout:function(a){this._defaultTimeout=a},get_defaultExecutorType:function(){return this._defaultExecutorType},set_defaultExecutorType:function(a){this._defaultExecutorType=a},executeRequest:function(webRequest){var executor=webRequest.get_executor();if(!executor){var failed=false;try{var executorType=eval(this._defaultExecutorType);executor=new executorType}catch(a){failed=true}webRequest.set_executor(executor)}if(executor.get_aborted())return;var evArgs=new Sys.Net.NetworkRequestEventArgs(webRequest),handler=this._get_eventHandlerList().getHandler("invokingRequest");if(handler)handler(this,evArgs);if(!evArgs.get_cancel())executor.executeRequest()}};Sys.Net._WebRequestManager.registerClass("Sys.Net._WebRequestManager");Sys.Net.WebRequestManager=new Sys.Net._WebRequestManager;Sys.Net.NetworkRequestEventArgs=function(a){Sys.Net.NetworkRequestEventArgs.initializeBase(this);this._webRequest=a};Sys.Net.NetworkRequestEventArgs.prototype={get_webRequest:function(){return this._webRequest}};Sys.Net.NetworkRequestEventArgs.registerClass("Sys.Net.NetworkRequestEventArgs",Sys.CancelEventArgs);Sys.Net.WebRequest=function(){this._url="";this._headers={};this._body=null;this._userContext=null;this._httpVerb=null;this._executor=null;this._invokeCalled=false;this._timeout=0};Sys.Net.WebRequest.prototype={add_completed:function(a){this._get_eventHandlerList().addHandler("completed",a)},remove_completed:function(a){this._get_eventHandlerList().removeHandler("completed",a)},completed:function(b){var a=Sys.Net.WebRequestManager._get_eventHandlerList().getHandler("completedRequest");if(a)a(this._executor,b);a=this._get_eventHandlerList().getHandler("completed");if(a)a(this._executor,b)},_get_eventHandlerList:function(){if(!this._events)this._events=new Sys.EventHandlerList;return this._events},get_url:function(){return this._url},set_url:function(a){this._url=a},get_headers:function(){return this._headers},get_httpVerb:function(){if(this._httpVerb===null){if(this._body===null)return "GET";return "POST"}return this._httpVerb},set_httpVerb:function(a){this._httpVerb=a},get_body:function(){return this._body},set_body:function(a){this._body=a},get_userContext:function(){return this._userContext},set_userContext:function(a){this._userContext=a},get_executor:function(){return this._executor},set_executor:function(a){this._executor=a;this._executor._set_webRequest(this)},get_timeout:function(){if(this._timeout===0)return Sys.Net.WebRequestManager.get_defaultTimeout();return this._timeout},set_timeout:function(a){this._timeout=a},getResolvedUrl:function(){return Sys.Net.WebRequest._resolveUrl(this._url)},invoke:function(){Sys.Net.WebRequestManager.executeRequest(this);this._invokeCalled=true}};Sys.Net.WebRequest._resolveUrl=function(b,a){if(b&&b.indexOf("://")!==-1)return b;if(!a||a.length===0){var d=document.getElementsByTagName("base")[0];if(d&&d.href&&d.href.length>0)a=d.href;else a=document.URL}var c=a.indexOf("?");if(c!==-1)a=a.substr(0,c);c=a.indexOf("#");if(c!==-1)a=a.substr(0,c);a=a.substr(0,a.lastIndexOf("/")+1);if(!b||b.length===0)return a;if(b.charAt(0)==="/"){var e=a.indexOf("://"),g=a.indexOf("/",e+3);return a.substr(0,g)+b}else{var f=a.lastIndexOf("/");return a.substr(0,f+1)+b}};Sys.Net.WebRequest._createQueryString=function(d,b){if(!b)b=encodeURIComponent;var a=new Sys.StringBuilder,f=0;for(var c in d){var e=d[c];if(typeof e==="function")continue;var g=Sys.Serialization.JavaScriptSerializer.serialize(e);if(f!==0)a.append("&");a.append(c);a.append("=");a.append(b(g));f++}return a.toString()};Sys.Net.WebRequest._createUrl=function(a,b){if(!b)return a;var d=Sys.Net.WebRequest._createQueryString(b);if(d.length>0){var c="?";if(a&&a.indexOf("?")!==-1)c="&";return a+c+d}else return a};Sys.Net.WebRequest.registerClass("Sys.Net.WebRequest");Sys.Net.WebServiceProxy=function(){};Sys.Net.WebServiceProxy.prototype={get_timeout:function(){return this._timeout},set_timeout:function(a){if(a<0)throw Error.argumentOutOfRange("value",a,Sys.Res.invalidTimeout);this._timeout=a},get_defaultUserContext:function(){return this._userContext},set_defaultUserContext:function(a){this._userContext=a},get_defaultSucceededCallback:function(){return this._succeeded},set_defaultSucceededCallback:function(a){this._succeeded=a},get_defaultFailedCallback:function(){return this._failed},set_defaultFailedCallback:function(a){this._failed=a},get_path:function(){return this._path},set_path:function(a){this._path=a},_invoke:function(d,e,g,f,c,b,a){if(c===null||typeof c==="undefined")c=this.get_defaultSucceededCallback();if(b===null||typeof b==="undefined")b=this.get_defaultFailedCallback();if(a===null||typeof a==="undefined")a=this.get_defaultUserContext();return Sys.Net.WebServiceProxy.invoke(d,e,g,f,c,b,a,this.get_timeout())}};Sys.Net.WebServiceProxy.registerClass("Sys.Net.WebServiceProxy");Sys.Net.WebServiceProxy.invoke=function(k,a,j,d,i,c,f,h){var b=new Sys.Net.WebRequest;b.get_headers()["Content-Type"]="application/json; charset=utf-8";if(!d)d={};var g=d;if(!j||!g)g={};b.set_url(Sys.Net.WebRequest._createUrl(k+"/"+encodeURIComponent(a),g));var e=null;if(!j){e=Sys.Serialization.JavaScriptSerializer.serialize(d);if(e==="{}")e=""}b.set_body(e);b.add_completed(l);if(h&&h>0)b.set_timeout(h);b.invoke();function l(d){if(d.get_responseAvailable()){var g=d.get_statusCode(),b=null;try{var e=d.getResponseHeader("Content-Type");if(e.startsWith("application/json"))b=d.get_object();else if(e.startsWith("text/xml"))b=d.get_xml();else b=d.get_responseData()}catch(m){}var k=d.getResponseHeader("jsonerror"),h=k==="true";if(h){if(b)b=new Sys.Net.WebServiceError(false,b.Message,b.StackTrace,b.ExceptionType)}else if(e.startsWith("application/json"))b=b.d;if(g<200||g>=300||h){if(c){if(!b||!h)b=new Sys.Net.WebServiceError(false,String.format(Sys.Res.webServiceFailedNoMsg,a),"","");b._statusCode=g;c(b,f,a)}}else if(i)i(b,f,a)}else{var j;if(d.get_timedOut())j=String.format(Sys.Res.webServiceTimedOut,a);else j=String.format(Sys.Res.webServiceFailedNoMsg,a);if(c)c(new Sys.Net.WebServiceError(d.get_timedOut(),j,"",""),f,a)}}return b};Sys.Net.WebServiceProxy._generateTypedConstructor=function(a){return function(b){if(b)for(var c in b)this[c]=b[c];this.__type=a}};Sys.Net.WebServiceError=function(c,d,b,a){this._timedOut=c;this._message=d;this._stackTrace=b;this._exceptionType=a;this._statusCode=-1};Sys.Net.WebServiceError.prototype={get_timedOut:function(){return this._timedOut},get_statusCode:function(){return this._statusCode},get_message:function(){return this._message},get_stackTrace:function(){return this._stackTrace},get_exceptionType:function(){return this._exceptionType}};Sys.Net.WebServiceError.registerClass("Sys.Net.WebServiceError");Type.registerNamespace("Sys.Services");Sys.Services._ProfileService=function(){Sys.Services._ProfileService.initializeBase(this);this.properties={}};Sys.Services._ProfileService.DefaultWebServicePath="";Sys.Services._ProfileService.prototype={_defaultLoadCompletedCallback:null,_defaultSaveCompletedCallback:null,_path:"",_timeout:0,get_defaultLoadCompletedCallback:function(){return this._defaultLoadCompletedCallback},set_defaultLoadCompletedCallback:function(a){this._defaultLoadCompletedCallback=a},get_defaultSaveCompletedCallback:function(){return this._defaultSaveCompletedCallback},set_defaultSaveCompletedCallback:function(a){this._defaultSaveCompletedCallback=a},get_path:function(){return this._path||""},load:function(c,d,e,f){var b,a;if(!c){a="GetAllPropertiesForCurrentUser";b={authenticatedUserOnly:false}}else{a="GetPropertiesForCurrentUser";b={properties:this._clonePropertyNames(c),authenticatedUserOnly:false}}this._invoke(this._get_path(),a,false,b,Function.createDelegate(this,this._onLoadComplete),Function.createDelegate(this,this._onLoadFailed),[d,e,f])},save:function(d,b,c,e){var a=this._flattenProperties(d,this.properties);this._invoke(this._get_path(),"SetPropertiesForCurrentUser",false,{values:a.value,authenticatedUserOnly:false},Function.createDelegate(this,this._onSaveComplete),Function.createDelegate(this,this._onSaveFailed),[b,c,e,a.count])},_clonePropertyNames:function(e){var c=[],d={};for(var b=0;b<e.length;b++){var a=e[b];if(!d[a]){Array.add(c,a);d[a]=true}}return c},_flattenProperties:function(a,i,j){var b={},e,d,g=0;if(a&&a.length===0)return {value:b,count:0};for(var c in i){e=i[c];d=j?j+"."+c:c;if(Sys.Services.ProfileGroup.isInstanceOfType(e)){var k=this._flattenProperties(a,e,d),h=k.value;g+=k.count;for(var f in h){var l=h[f];b[f]=l}}else if(!a||Array.indexOf(a,d)!==-1){b[d]=e;g++}}return {value:b,count:g}},_get_path:function(){var a=this.get_path();if(!a.length)a=Sys.Services._ProfileService.DefaultWebServicePath;if(!a||!a.length)throw Error.invalidOperation(Sys.Res.servicePathNotSet);return a},_onLoadComplete:function(a,e,g){if(typeof a!=="object")throw Error.invalidOperation(String.format(Sys.Res.webServiceInvalidReturnType,g,"Object"));var c=this._unflattenProperties(a);for(var b in c)this.properties[b]=c[b];var d=e[0]||this.get_defaultLoadCompletedCallback()||this.get_defaultSucceededCallback();if(d){var f=e[2]||this.get_defaultUserContext();d(a.length,f,"Sys.Services.ProfileService.load")}},_onLoadFailed:function(d,b){var a=b[1]||this.get_defaultFailedCallback();if(a){var c=b[2]||this.get_defaultUserContext();a(d,c,"Sys.Services.ProfileService.load")}},_onSaveComplete:function(a,b,f){var c=b[3];if(a!==null)if(a instanceof Array)c-=a.length;else if(typeof a==="number")c=a;else throw Error.invalidOperation(String.format(Sys.Res.webServiceInvalidReturnType,f,"Array"));var d=b[0]||this.get_defaultSaveCompletedCallback()||this.get_defaultSucceededCallback();if(d){var e=b[2]||this.get_defaultUserContext();d(c,e,"Sys.Services.ProfileService.save")}},_onSaveFailed:function(d,b){var a=b[1]||this.get_defaultFailedCallback();if(a){var c=b[2]||this.get_defaultUserContext();a(d,c,"Sys.Services.ProfileService.save")}},_unflattenProperties:function(e){var c={},d,f,h=0;for(var a in e){h++;f=e[a];d=a.indexOf(".");if(d!==-1){var g=a.substr(0,d);a=a.substr(d+1);var b=c[g];if(!b||!Sys.Services.ProfileGroup.isInstanceOfType(b)){b=new Sys.Services.ProfileGroup;c[g]=b}b[a]=f}else c[a]=f}e.length=h;return c}};Sys.Services._ProfileService.registerClass("Sys.Services._ProfileService",Sys.Net.WebServiceProxy);Sys.Services.ProfileService=new Sys.Services._ProfileService;Sys.Services.ProfileGroup=function(a){if(a)for(var b in a)this[b]=a[b]};Sys.Services.ProfileGroup.registerClass("Sys.Services.ProfileGroup");Sys.Services._AuthenticationService=function(){Sys.Services._AuthenticationService.initializeBase(this)};Sys.Services._AuthenticationService.DefaultWebServicePath="";Sys.Services._AuthenticationService.prototype={_defaultLoginCompletedCallback:null,_defaultLogoutCompletedCallback:null,_path:"",_timeout:0,_authenticated:false,get_defaultLoginCompletedCallback:function(){return this._defaultLoginCompletedCallback},set_defaultLoginCompletedCallback:function(a){this._defaultLoginCompletedCallback=a},get_defaultLogoutCompletedCallback:function(){return this._defaultLogoutCompletedCallback},set_defaultLogoutCompletedCallback:function(a){this._defaultLogoutCompletedCallback=a},get_isLoggedIn:function(){return this._authenticated},get_path:function(){return this._path||""},login:function(c,b,a,h,f,d,e,g){this._invoke(this._get_path(),"Login",false,{userName:c,password:b,createPersistentCookie:a},Function.createDelegate(this,this._onLoginComplete),Function.createDelegate(this,this._onLoginFailed),[c,b,a,h,f,d,e,g])},logout:function(c,a,b,d){this._invoke(this._get_path(),"Logout",false,{},Function.createDelegate(this,this._onLogoutComplete),Function.createDelegate(this,this._onLogoutFailed),[c,a,b,d])},_get_path:function(){var a=this.get_path();if(!a.length)a=Sys.Services._AuthenticationService.DefaultWebServicePath;if(!a||!a.length)throw Error.invalidOperation(Sys.Res.servicePathNotSet);return a},_onLoginComplete:function(e,c,f){if(typeof e!=="boolean")throw Error.invalidOperation(String.format(Sys.Res.webServiceInvalidReturnType,f,"Boolean"));var b=c[4],d=c[7]||this.get_defaultUserContext(),a=c[5]||this.get_defaultLoginCompletedCallback()||this.get_defaultSucceededCallback();if(e){this._authenticated=true;if(a)a(true,d,"Sys.Services.AuthenticationService.login");if(typeof b!=="undefined"&&b!==null)window.location.href=b}else if(a)a(false,d,"Sys.Services.AuthenticationService.login")},_onLoginFailed:function(d,b){var a=b[6]||this.get_defaultFailedCallback();if(a){var c=b[7]||this.get_defaultUserContext();a(d,c,"Sys.Services.AuthenticationService.login")}},_onLogoutComplete:function(f,a,e){if(f!==null)throw Error.invalidOperation(String.format(Sys.Res.webServiceInvalidReturnType,e,"null"));var b=a[0],d=a[3]||this.get_defaultUserContext(),c=a[1]||this.get_defaultLogoutCompletedCallback()||this.get_defaultSucceededCallback();this._authenticated=false;if(c)c(null,d,"Sys.Services.AuthenticationService.logout");if(!b)window.location.reload();else window.location.href=b},_onLogoutFailed:function(c,b){var a=b[2]||this.get_defaultFailedCallback();if(a)a(c,b[3],"Sys.Services.AuthenticationService.logout")},_setAuthenticated:function(a){this._authenticated=a}};Sys.Services._AuthenticationService.registerClass("Sys.Services._AuthenticationService",Sys.Net.WebServiceProxy);Sys.Services.AuthenticationService=new Sys.Services._AuthenticationService;Sys.Services._RoleService=function(){Sys.Services._RoleService.initializeBase(this);this._roles=[]};Sys.Services._RoleService.DefaultWebServicePath="";Sys.Services._RoleService.prototype={_defaultLoadCompletedCallback:null,_rolesIndex:null,_timeout:0,_path:"",get_defaultLoadCompletedCallback:function(){return this._defaultLoadCompletedCallback},set_defaultLoadCompletedCallback:function(a){this._defaultLoadCompletedCallback=a},get_path:function(){return this._path||""},get_roles:function(){return Array.clone(this._roles)},isUserInRole:function(a){var b=this._get_rolesIndex()[a.trim().toLowerCase()];return !!b},load:function(a,b,c){Sys.Net.WebServiceProxy.invoke(this._get_path(),"GetRolesForCurrentUser",false,{},Function.createDelegate(this,this._onLoadComplete),Function.createDelegate(this,this._onLoadFailed),[a,b,c],this.get_timeout())},_get_path:function(){var a=this.get_path();if(!a||!a.length)a=Sys.Services._RoleService.DefaultWebServicePath;if(!a||!a.length)throw Error.invalidOperation(Sys.Res.servicePathNotSet);return a},_get_rolesIndex:function(){if(!this._rolesIndex){var b={};for(var a=0;a<this._roles.length;a++)b[this._roles[a].toLowerCase()]=true;this._rolesIndex=b}return this._rolesIndex},_onLoadComplete:function(a,c,f){if(a&&!(a instanceof Array))throw Error.invalidOperation(String.format(Sys.Res.webServiceInvalidReturnType,f,"Array"));this._roles=a;this._rolesIndex=null;var b=c[0]||this.get_defaultLoadCompletedCallback()||this.get_defaultSucceededCallback();if(b){var e=c[2]||this.get_defaultUserContext(),d=Array.clone(a);b(d,e,"Sys.Services.RoleService.load")}},_onLoadFailed:function(d,b){var a=b[1]||this.get_defaultFailedCallback();if(a){var c=b[2]||this.get_defaultUserContext();a(d,c,"Sys.Services.RoleService.load")}}};Sys.Services._RoleService.registerClass("Sys.Services._RoleService",Sys.Net.WebServiceProxy);Sys.Services.RoleService=new Sys.Services._RoleService;Type.registerNamespace("Sys.Serialization");Sys.Serialization.JavaScriptSerializer=function(){};Sys.Serialization.JavaScriptSerializer.registerClass("Sys.Serialization.JavaScriptSerializer");Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs=[];Sys.Serialization.JavaScriptSerializer._charsToEscape=[];Sys.Serialization.JavaScriptSerializer._dateRegEx=new RegExp('(^|[^\\\\])\\"\\\\/Date\\((-?[0-9]+)(?:[a-zA-Z]|(?:\\+|-)[0-9]{4})?\\)\\\\/\\"',"g");Sys.Serialization.JavaScriptSerializer._escapeChars={};Sys.Serialization.JavaScriptSerializer._escapeRegEx=new RegExp('["\\\\\\x00-\\x1F]',"i");Sys.Serialization.JavaScriptSerializer._escapeRegExGlobal=new RegExp('["\\\\\\x00-\\x1F]',"g");Sys.Serialization.JavaScriptSerializer._jsonRegEx=new RegExp("[^,:{}\\[\\]0-9.\\-+Eaeflnr-u \\n\\r\\t]","g");Sys.Serialization.JavaScriptSerializer._jsonStringRegEx=new RegExp('"(\\\\.|[^"\\\\])*"',"g");Sys.Serialization.JavaScriptSerializer._serverTypeFieldName="__type";Sys.Serialization.JavaScriptSerializer._init=function(){var c=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000b","\\f","\\r","\\u000e","\\u000f","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001a","\\u001b","\\u001c","\\u001d","\\u001e","\\u001f"];Sys.Serialization.JavaScriptSerializer._charsToEscape[0]="\\";Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs["\\"]=new RegExp("\\\\","g");Sys.Serialization.JavaScriptSerializer._escapeChars["\\"]="\\\\";Sys.Serialization.JavaScriptSerializer._charsToEscape[1]='"';Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs['"']=new RegExp('"',"g");Sys.Serialization.JavaScriptSerializer._escapeChars['"']='\\"';for(var a=0;a<32;a++){var b=String.fromCharCode(a);Sys.Serialization.JavaScriptSerializer._charsToEscape[a+2]=b;Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs[b]=new RegExp(b,"g");Sys.Serialization.JavaScriptSerializer._escapeChars[b]=c[a]}};Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder=function(b,a){a.append(b.toString())};Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder=function(a,b){if(isFinite(a))b.append(String(a));else throw Error.invalidOperation(Sys.Res.cannotSerializeNonFiniteNumbers)};Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder=function(a,c){c.append('"');if(Sys.Serialization.JavaScriptSerializer._escapeRegEx.test(a)){if(Sys.Serialization.JavaScriptSerializer._charsToEscape.length===0)Sys.Serialization.JavaScriptSerializer._init();if(a.length<128)a=a.replace(Sys.Serialization.JavaScriptSerializer._escapeRegExGlobal,function(a){return Sys.Serialization.JavaScriptSerializer._escapeChars[a]});else for(var d=0;d<34;d++){var b=Sys.Serialization.JavaScriptSerializer._charsToEscape[d];if(a.indexOf(b)!==-1)if(Sys.Browser.agent===Sys.Browser.Opera||Sys.Browser.agent===Sys.Browser.FireFox)a=a.split(b).join(Sys.Serialization.JavaScriptSerializer._escapeChars[b]);else a=a.replace(Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs[b],Sys.Serialization.JavaScriptSerializer._escapeChars[b])}}c.append(a);c.append('"')};Sys.Serialization.JavaScriptSerializer._serializeWithBuilder=function(b,a,i,g){var c;switch(typeof b){case "object":if(b)if(Number.isInstanceOfType(b))Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder(b,a);else if(Boolean.isInstanceOfType(b))Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder(b,a);else if(String.isInstanceOfType(b))Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder(b,a);else if(Array.isInstanceOfType(b)){a.append("[");for(c=0;c<b.length;++c){if(c>0)a.append(",");Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(b[c],a,false,g)}a.append("]")}else{if(Date.isInstanceOfType(b)){a.append('"\\/Date(');a.append(b.getTime());a.append(')\\/"');break}var d=[],f=0;for(var e in b){if(e.startsWith("$"))continue;if(e===Sys.Serialization.JavaScriptSerializer._serverTypeFieldName&&f!==0){d[f++]=d[0];d[0]=e}else d[f++]=e}if(i)d.sort();a.append("{");var j=false;for(c=0;c<f;c++){var h=b[d[c]];if(typeof h!=="undefined"&&typeof h!=="function"){if(j)a.append(",");else j=true;Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(d[c],a,i,g);a.append(":");Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(h,a,i,g)}}a.append("}")}else a.append("null");break;case "number":Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder(b,a);break;case "string":Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder(b,a);break;case "boolean":Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder(b,a);break;default:a.append("null")}};Sys.Serialization.JavaScriptSerializer.serialize=function(b){var a=new Sys.StringBuilder;Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(b,a,false);return a.toString()};Sys.Serialization.JavaScriptSerializer.deserialize=function(data,secure){if(data.length===0)throw Error.argument("data",Sys.Res.cannotDeserializeEmptyString);try{var exp=data.replace(Sys.Serialization.JavaScriptSerializer._dateRegEx,"$1new Date($2)");if(secure&&Sys.Serialization.JavaScriptSerializer._jsonRegEx.test(exp.replace(Sys.Serialization.JavaScriptSerializer._jsonStringRegEx,"")))throw null;return eval("("+exp+")")}catch(a){throw Error.argument("data",Sys.Res.cannotDeserializeInvalidJson)}};Sys.CultureInfo=function(c,b,a){this.name=c;this.numberFormat=b;this.dateTimeFormat=a};Sys.CultureInfo.prototype={_getDateTimeFormats:function(){if(!this._dateTimeFormats){var a=this.dateTimeFormat;this._dateTimeFormats=[a.MonthDayPattern,a.YearMonthPattern,a.ShortDatePattern,a.ShortTimePattern,a.LongDatePattern,a.LongTimePattern,a.FullDateTimePattern,a.RFC1123Pattern,a.SortableDateTimePattern,a.UniversalSortableDateTimePattern]}return this._dateTimeFormats},_getMonthIndex:function(a){if(!this._upperMonths)this._upperMonths=this._toUpperArray(this.dateTimeFormat.MonthNames);return Array.indexOf(this._upperMonths,this._toUpper(a))},_getAbbrMonthIndex:function(a){if(!this._upperAbbrMonths)this._upperAbbrMonths=this._toUpperArray(this.dateTimeFormat.AbbreviatedMonthNames);return Array.indexOf(this._upperAbbrMonths,this._toUpper(a))},_getDayIndex:function(a){if(!this._upperDays)this._upperDays=this._toUpperArray(this.dateTimeFormat.DayNames);return Array.indexOf(this._upperDays,this._toUpper(a))},_getAbbrDayIndex:function(a){if(!this._upperAbbrDays)this._upperAbbrDays=this._toUpperArray(this.dateTimeFormat.AbbreviatedDayNames);return Array.indexOf(this._upperAbbrDays,this._toUpper(a))},_toUpperArray:function(c){var b=[];for(var a=0,d=c.length;a<d;a++)b[a]=this._toUpper(c[a]);return b},_toUpper:function(a){return a.split("\u00a0").join(" ").toUpperCase()}};Sys.CultureInfo._parse=function(b){var a=Sys.Serialization.JavaScriptSerializer.deserialize(b);return new Sys.CultureInfo(a.name,a.numberFormat,a.dateTimeFormat)};Sys.CultureInfo.registerClass("Sys.CultureInfo");Sys.CultureInfo.InvariantCulture=Sys.CultureInfo._parse('{"name":"","numberFormat":{"CurrencyDecimalDigits":2,"CurrencyDecimalSeparator":".","IsReadOnly":true,"CurrencyGroupSizes":[3],"NumberGroupSizes":[3],"PercentGroupSizes":[3],"CurrencyGroupSeparator":",","CurrencySymbol":"\u00a4","NaNSymbol":"NaN","CurrencyNegativePattern":0,"NumberNegativePattern":1,"PercentPositivePattern":0,"PercentNegativePattern":0,"NegativeInfinitySymbol":"-Infinity","NegativeSign":"-","NumberDecimalDigits":2,"NumberDecimalSeparator":".","NumberGroupSeparator":",","CurrencyPositivePattern":0,"PositiveInfinitySymbol":"Infinity","PositiveSign":"+","PercentDecimalDigits":2,"PercentDecimalSeparator":".","PercentGroupSeparator":",","PercentSymbol":"%","PerMilleSymbol":"\u2030","NativeDigits":["0","1","2","3","4","5","6","7","8","9"],"DigitSubstitution":1},"dateTimeFormat":{"AMDesignator":"AM","Calendar":{"MinSupportedDateTime":"@-62135568000000@","MaxSupportedDateTime":"@253402300799999@","AlgorithmType":1,"CalendarType":1,"Eras":[1],"TwoDigitYearMax":2029,"IsReadOnly":true},"DateSeparator":"/","FirstDayOfWeek":0,"CalendarWeekRule":0,"FullDateTimePattern":"dddd, dd MMMM yyyy HH:mm:ss","LongDatePattern":"dddd, dd MMMM yyyy","LongTimePattern":"HH:mm:ss","MonthDayPattern":"MMMM dd","PMDesignator":"PM","RFC1123Pattern":"ddd, dd MMM yyyy HH\':\'mm\':\'ss \'GMT\'","ShortDatePattern":"MM/dd/yyyy","ShortTimePattern":"HH:mm","SortableDateTimePattern":"yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss","TimeSeparator":":","UniversalSortableDateTimePattern":"yyyy\'-\'MM\'-\'dd HH\':\'mm\':\'ss\'Z\'","YearMonthPattern":"yyyy MMMM","AbbreviatedDayNames":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"ShortestDayNames":["Su","Mo","Tu","We","Th","Fr","Sa"],"DayNames":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"AbbreviatedMonthNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthNames":["January","February","March","April","May","June","July","August","September","October","November","December",""],"IsReadOnly":true,"NativeCalendarName":"Gregorian Calendar","AbbreviatedMonthGenitiveNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthGenitiveNames":["January","February","March","April","May","June","July","August","September","October","November","December",""]}}');if(typeof __cultureInfo==="undefined")var __cultureInfo='{"name":"en-US","numberFormat":{"CurrencyDecimalDigits":2,"CurrencyDecimalSeparator":".","IsReadOnly":false,"CurrencyGroupSizes":[3],"NumberGroupSizes":[3],"PercentGroupSizes":[3],"CurrencyGroupSeparator":",","CurrencySymbol":"$","NaNSymbol":"NaN","CurrencyNegativePattern":0,"NumberNegativePattern":1,"PercentPositivePattern":0,"PercentNegativePattern":0,"NegativeInfinitySymbol":"-Infinity","NegativeSign":"-","NumberDecimalDigits":2,"NumberDecimalSeparator":".","NumberGroupSeparator":",","CurrencyPositivePattern":0,"PositiveInfinitySymbol":"Infinity","PositiveSign":"+","PercentDecimalDigits":2,"PercentDecimalSeparator":".","PercentGroupSeparator":",","PercentSymbol":"%","PerMilleSymbol":"\u2030","NativeDigits":["0","1","2","3","4","5","6","7","8","9"],"DigitSubstitution":1},"dateTimeFormat":{"AMDesignator":"AM","Calendar":{"MinSupportedDateTime":"@-62135568000000@","MaxSupportedDateTime":"@253402300799999@","AlgorithmType":1,"CalendarType":1,"Eras":[1],"TwoDigitYearMax":2029,"IsReadOnly":false},"DateSeparator":"/","FirstDayOfWeek":0,"CalendarWeekRule":0,"FullDateTimePattern":"dddd, MMMM dd, yyyy h:mm:ss tt","LongDatePattern":"dddd, MMMM dd, yyyy","LongTimePattern":"h:mm:ss tt","MonthDayPattern":"MMMM dd","PMDesignator":"PM","RFC1123Pattern":"ddd, dd MMM yyyy HH\':\'mm\':\'ss \'GMT\'","ShortDatePattern":"M/d/yyyy","ShortTimePattern":"h:mm tt","SortableDateTimePattern":"yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss","TimeSeparator":":","UniversalSortableDateTimePattern":"yyyy\'-\'MM\'-\'dd HH\':\'mm\':\'ss\'Z\'","YearMonthPattern":"MMMM, yyyy","AbbreviatedDayNames":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"ShortestDayNames":["Su","Mo","Tu","We","Th","Fr","Sa"],"DayNames":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"AbbreviatedMonthNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthNames":["January","February","March","April","May","June","July","August","September","October","November","December",""],"IsReadOnly":false,"NativeCalendarName":"Gregorian Calendar","AbbreviatedMonthGenitiveNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthGenitiveNames":["January","February","March","April","May","June","July","August","September","October","November","December",""]}}';Sys.CultureInfo.CurrentCulture=Sys.CultureInfo._parse(__cultureInfo);delete __cultureInfo;Sys.UI.Behavior=function(b){Sys.UI.Behavior.initializeBase(this);this._element=b;var a=b._behaviors;if(!a)b._behaviors=[this];else a[a.length]=this};Sys.UI.Behavior.prototype={_name:null,get_element:function(){return this._element},get_id:function(){var a=Sys.UI.Behavior.callBaseMethod(this,"get_id");if(a)return a;if(!this._element||!this._element.id)return "";return this._element.id+"$"+this.get_name()},get_name:function(){if(this._name)return this._name;var a=Object.getTypeName(this),b=a.lastIndexOf(".");if(b!=-1)a=a.substr(b+1);if(!this.get_isInitialized())this._name=a;return a},set_name:function(a){this._name=a},initialize:function(){Sys.UI.Behavior.callBaseMethod(this,"initialize");var a=this.get_name();if(a)this._element[a]=this},dispose:function(){Sys.UI.Behavior.callBaseMethod(this,"dispose");if(this._element){var a=this.get_name();if(a)this._element[a]=null;Array.remove(this._element._behaviors,this);delete this._element}}};Sys.UI.Behavior.registerClass("Sys.UI.Behavior",Sys.Component);Sys.UI.Behavior.getBehaviorByName=function(b,c){var a=b[c];return a&&Sys.UI.Behavior.isInstanceOfType(a)?a:null};Sys.UI.Behavior.getBehaviors=function(a){if(!a._behaviors)return [];return Array.clone(a._behaviors)};Sys.UI.Behavior.getBehaviorsByType=function(d,e){var a=d._behaviors,c=[];if(a)for(var b=0,f=a.length;b<f;b++)if(e.isInstanceOfType(a[b]))c[c.length]=a[b];return c};Sys.UI.VisibilityMode=function(){throw Error.notImplemented()};Sys.UI.VisibilityMode.prototype={hide:0,collapse:1};Sys.UI.VisibilityMode.registerEnum("Sys.UI.VisibilityMode");Sys.UI.Control=function(a){Sys.UI.Control.initializeBase(this);this._element=a;a.control=this};Sys.UI.Control.prototype={_parent:null,_visibilityMode:Sys.UI.VisibilityMode.hide,get_element:function(){return this._element},get_id:function(){if(!this._element)return "";return this._element.id},set_id:function(){throw Error.invalidOperation(Sys.Res.cantSetId)},get_parent:function(){if(this._parent)return this._parent;if(!this._element)return null;var a=this._element.parentNode;while(a){if(a.control)return a.control;a=a.parentNode}return null},set_parent:function(a){this._parent=a},get_visibilityMode:function(){return Sys.UI.DomElement.getVisibilityMode(this._element)},set_visibilityMode:function(a){Sys.UI.DomElement.setVisibilityMode(this._element,a)},get_visible:function(){return Sys.UI.DomElement.getVisible(this._element)},set_visible:function(a){Sys.UI.DomElement.setVisible(this._element,a)},addCssClass:function(a){Sys.UI.DomElement.addCssClass(this._element,a)},dispose:function(){Sys.UI.Control.callBaseMethod(this,"dispose");if(this._element){this._element.control=undefined;delete this._element}if(this._parent)delete this._parent},onBubbleEvent:function(){return false},raiseBubbleEvent:function(b,c){var a=this.get_parent();while(a){if(a.onBubbleEvent(b,c))return;a=a.get_parent()}},removeCssClass:function(a){Sys.UI.DomElement.removeCssClass(this._element,a)},toggleCssClass:function(a){Sys.UI.DomElement.toggleCssClass(this._element,a)}};Sys.UI.Control.registerClass("Sys.UI.Control",Sys.Component);
Type.registerNamespace('Sys');Sys.Res={
"argumentInteger":"Value must be an integer.","scriptLoadMultipleCallbacks":"The script \u0027{0}\u0027 contains multiple calls to Sys.Application.notifyScriptLoaded(). Only one is allowed.","invokeCalledTwice":"Cannot call invoke more than once.","webServiceFailed":"The server method \u0027{0}\u0027 failed with the following error: {1}","webServiceInvalidJsonWrapper":"The server method \u0027{0}\u0027 returned invalid data. The \u0027d\u0027 property is missing from the JSON wrapper.","argumentType":"Object cannot be converted to the required type.","argumentNull":"Value cannot be null.","controlCantSetId":"The id property can\u0027t be set on a control.","formatBadFormatSpecifier":"Format specifier was invalid.","webServiceFailedNoMsg":"The server method \u0027{0}\u0027 failed.","argumentDomElement":"Value must be a DOM element.","invalidExecutorType":"Could not create a valid Sys.Net.WebRequestExecutor from: {0}.","cannotCallBeforeResponse":"Cannot call {0} when responseAvailable is false.","actualValue":"Actual value was {0}.","enumInvalidValue":"\u0027{0}\u0027 is not a valid value for enum {1}.","scriptLoadFailed":"The script \u0027{0}\u0027 could not be loaded.","parameterCount":"Parameter count mismatch.","cannotDeserializeEmptyString":"Cannot deserialize empty string.","formatInvalidString":"Input string was not in a correct format.","invalidTimeout":"Value must be greater than or equal to zero.","cannotAbortBeforeStart":"Cannot abort when executor has not started.","argument":"Value does not fall within the expected range.","cannotDeserializeInvalidJson":"Cannot deserialize. The data does not correspond to valid JSON.","invalidHttpVerb":"httpVerb cannot be set to an empty or null string.","nullWebRequest":"Cannot call executeRequest with a null webRequest.","eventHandlerInvalid":"Handler was not added through the Sys.UI.DomEvent.addHandler method.","cannotSerializeNonFiniteNumbers":"Cannot serialize non finite numbers.","argumentUndefined":"Value cannot be undefined.","webServiceInvalidReturnType":"The server method \u0027{0}\u0027 returned an invalid type. Expected type: {1}","servicePathNotSet":"The path to the web service has not been set.","argumentTypeWithTypes":"Object of type \u0027{0}\u0027 cannot be converted to type \u0027{1}\u0027.","cannotCallOnceStarted":"Cannot call {0} once started.","badBaseUrl1":"Base URL does not contain ://.","badBaseUrl2":"Base URL does not contain another /.","badBaseUrl3":"Cannot find last / in base URL.","setExecutorAfterActive":"Cannot set executor after it has become active.","paramName":"Parameter name: {0}","cannotCallOutsideHandler":"Cannot call {0} outside of a completed event handler.","cannotSerializeObjectWithCycle":"Cannot serialize object with cyclic reference within child properties.","format":"One of the identified items was in an invalid format.","assertFailedCaller":"Assertion Failed: {0}\r\nat {1}","argumentOutOfRange":"Specified argument was out of the range of valid values.","webServiceTimedOut":"The server method \u0027{0}\u0027 timed out.","notImplemented":"The method or operation is not implemented.","assertFailed":"Assertion Failed: {0}","invalidOperation":"Operation is not valid due to the current state of the object.","breakIntoDebugger":"{0}\r\n\r\nBreak into debugger?"};
/* END MicrosoftAjax.js */
/* START MicrosoftAjaxTimer.js */
//----------------------------------------------------------
// Copyright (C) Microsoft Corporation. All rights reserved.
//----------------------------------------------------------
// MicrosoftAjaxTimer.js
Sys.UI._Timer=function(a){Sys.UI._Timer.initializeBase(this,[a]);this._interval=60000;this._enabled=true;this._postbackPending=false;this._raiseTickDelegate=null;this._endRequestHandlerDelegate=null;this._timer=null;this._pageRequestManager=null;this._uniqueID=null};Sys.UI._Timer.prototype={get_enabled:function(){return this._enabled},set_enabled:function(a){this._enabled=a},get_interval:function(){return this._interval},set_interval:function(a){this._interval=a},get_uniqueID:function(){return this._uniqueID},set_uniqueID:function(a){this._uniqueID=a},dispose:function(){this._stopTimer();if(this._pageRequestManager!==null)this._pageRequestManager.remove_endRequest(this._endRequestHandlerDelegate);Sys.UI._Timer.callBaseMethod(this,"dispose")},_doPostback:function(){__doPostBack(this.get_uniqueID(),"")},_handleEndRequest:function(c,b){var a=b.get_dataItems()[this.get_id()];if(a)this._update(a[0],a[1]);if(this._postbackPending===true&&this._pageRequestManager!==null&&this._pageRequestManager.get_isInAsyncPostBack()===false){this._postbackPending=false;this._doPostback()}},initialize:function(){Sys.UI._Timer.callBaseMethod(this,"initialize");this._raiseTickDelegate=Function.createDelegate(this,this._raiseTick);this._endRequestHandlerDelegate=Function.createDelegate(this,this._handleEndRequest);if(Sys.WebForms&&Sys.WebForms.PageRequestManager)this._pageRequestManager=Sys.WebForms.PageRequestManager.getInstance();if(this._pageRequestManager!==null)this._pageRequestManager.add_endRequest(this._endRequestHandlerDelegate);if(this.get_enabled())this._startTimer()},_raiseTick:function(){this._startTimer();if(this._pageRequestManager===null||!this._pageRequestManager.get_isInAsyncPostBack()){this._doPostback();this._postbackPending=false}else this._postbackPending=true},_startTimer:function(){this._timer=window.setTimeout(Function.createDelegate(this,this._raiseTick),this.get_interval())},_stopTimer:function(){if(this._timer!==null){window.clearTimeout(this._timer);this._timer=null}},_update:function(c,b){var a=!this.get_enabled(),d=this.get_interval()!==b;if(!a&&(!c||d)){this._stopTimer();a=true}this.set_enabled(c);this.set_interval(b);if(this.get_enabled()&&a)this._startTimer()}};Sys.UI._Timer.registerClass("Sys.UI._Timer",Sys.UI.Control);
/* END MicrosoftAjaxTimer.js */
/* START AjaxControlToolkit.Common.Common.js */
// (c) Copyright Microsoft Corporation.
// This source is subject to the Microsoft Permissive License.
// See http://www.microsoft.com/resources/sharedsource/licensingbasics/sharedsourcelicenses.mspx.
// All other rights reserved.


/// <reference name="MicrosoftAjax.debug.js" />
/// <reference name="MicrosoftAjaxTimer.debug.js" />
/// <reference name="MicrosoftAjaxWebForms.debug.js" />


// Add common toolkit scripts here.  To consume the scripts on a control add
// 
//      [RequiredScript(typeof(CommonToolkitScripts))] 
//      public class SomeExtender : ...
// 
// to the controls extender class declaration.


Type.registerNamespace('AjaxControlToolkit');


AjaxControlToolkit.BoxSide = function() {
    /// <summary>
    /// The BoxSide enumeration describes the sides of a DOM element
    /// </summary>
    /// <field name="Top" type="Number" integer="true" static="true" />
    /// <field name="Right" type="Number" integer="true" static="true" />
    /// <field name="Bottom" type="Number" integer="true" static="true" />
    /// <field name="Left" type="Number" integer="true" static="true" />
}
AjaxControlToolkit.BoxSide.prototype = {
    Top : 0,
    Right : 1,
    Bottom : 2,
    Left : 3
}
AjaxControlToolkit.BoxSide.registerEnum("AjaxControlToolkit.BoxSide", false);


AjaxControlToolkit._CommonToolkitScripts = function() {
    /// <summary>
    /// The _CommonToolkitScripts class contains functionality utilized across a number
    /// of controls (but not universally)
    /// </summary>
    /// <remarks>
    /// You should not create new instances of _CommonToolkitScripts.  Instead you should use the shared instance CommonToolkitScripts (or AjaxControlToolkit.CommonToolkitScripts).
    /// </remarks>
}
AjaxControlToolkit._CommonToolkitScripts.prototype = {
    // The order of these lookup tables is directly linked to the BoxSide enum defined above
    _borderStyleNames : ["borderTopStyle","borderRightStyle","borderBottomStyle","borderLeftStyle"],
    _borderWidthNames : ["borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"],
    _paddingWidthNames : ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    _marginWidthNames : ["marginTop", "marginRight", "marginBottom", "marginLeft"],

    getCurrentStyle : function(element, attribute, defaultValue) {
        /// <summary>
        /// CommonToolkitScripts.getCurrentStyle is used to compute the value of a style attribute on an
        /// element that is currently being displayed.  This is especially useful for scenarios where
        /// several CSS classes and style attributes are merged, or when you need information about the
        /// size of an element (such as its padding or margins) that is not exposed in any other fashion.
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" domElement="true">
        /// Live DOM element to check style of
        /// </param>
        /// <param name="attribute" type="String">
        /// The style attribute's name is expected to be in a camel-cased form that you would use when
        /// accessing a JavaScript property instead of the hyphenated form you would use in a CSS
        /// stylesheet (i.e. it should be "backgroundColor" and not "background-color").
        /// </param>
        /// <param name="defaultValue" type="Object" mayBeNull="true" optional="true">
        /// In the event of a problem (i.e. a null element or an attribute that cannot be found) we
        /// return this object (or null if none if not specified).
        /// </param>
        /// <returns type="Object">
        /// Current style of the element's attribute
        /// </returns>

        var currentValue = null;
        if (element) {
            if (element.currentStyle) {
                currentValue = element.currentStyle[attribute];
            } else if (document.defaultView && document.defaultView.getComputedStyle) {
                var style = document.defaultView.getComputedStyle(element, null);
                if (style) {
                    currentValue = style[attribute];
                }
            }
            
            if (!currentValue && element.style.getPropertyValue) {
                currentValue = element.style.getPropertyValue(attribute);
            }
            else if (!currentValue && element.style.getAttribute) {
                currentValue = element.style.getAttribute(attribute);
            }       
        }
        
        if ((!currentValue || currentValue == "" || typeof(currentValue) === 'undefined')) {
            if (typeof(defaultValue) != 'undefined') {
                currentValue = defaultValue;
            }
            else {
                currentValue = null;
            }
        }   
        return currentValue;  
    },

    getInheritedBackgroundColor : function(element) {
        /// <summary>
        /// CommonToolkitScripts.getInheritedBackgroundColor provides the ability to get the displayed
        /// background-color of an element.  In most cases calling CommonToolkitScripts.getCurrentStyle
        /// won't do the job because it will return "transparent" unless the element has been given a
        /// specific background color.  This function will walk up the element's parents until it finds
        /// a non-transparent color.  If we get all the way to the top of the document or have any other
        /// problem finding a color, we will return the default value '#FFFFFF'.  This function is
        /// especially important when we're using opacity in IE (because ClearType will make text look
        /// horrendous if you fade it with a transparent background color).
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" domElement="true">
        /// Live DOM element to get the background color of
        /// </param>
        /// <returns type="String">
        /// Background color of the element
        /// </returns>
        
        if (!element) return '#FFFFFF';
        var background = this.getCurrentStyle(element, 'backgroundColor');
        try {
            while (!background || background == '' || background == 'transparent' || background == 'rgba(0, 0, 0, 0)') {
                element = element.parentNode;
                if (!element) {
                    background = '#FFFFFF';
                } else {
                    background = this.getCurrentStyle(element, 'backgroundColor');
                }
            }
        } catch(ex) {
            background = '#FFFFFF';
        }
        return background;
    },

    getLocation : function(element) {
    /// <summary>Gets the coordinates of a DOM element.</summary>
    /// <param name="element" domElement="true"/>
    /// <returns type="Sys.UI.Point">
    ///   A Point object with two fields, x and y, which contain the pixel coordinates of the element.
    /// </returns>

    // workaround for an issue in getLocation where it will compute the location of the document element.
    // this will return an offset if scrolled.
    //
    if (element === document.documentElement) {
        return new Sys.UI.Point(0,0);
    }

    // Workaround for IE6 bug in getLocation (also required patching getBounds - remove that fix when this is removed)
    if (Sys.Browser.agent == Sys.Browser.InternetExplorer && Sys.Browser.version < 7) {
        if (element.window === element || element.nodeType === 9 || !element.getClientRects || !element.getBoundingClientRect) return new Sys.UI.Point(0,0);

        // Get the first bounding rectangle in screen coordinates
        var screenRects = element.getClientRects();
        if (!screenRects || !screenRects.length) {
            return new Sys.UI.Point(0,0);
        }
        var first = screenRects[0];

        // Delta between client coords and screen coords
        var dLeft = 0;
        var dTop = 0;

        var inFrame = false;
        try {
            inFrame = element.ownerDocument.parentWindow.frameElement;
        } catch(ex) {
            // If accessing the frameElement fails, a frame is probably in a different
            // domain than its parent - and we still want to do the calculation below
            inFrame = true;
        }

        // If we're in a frame, get client coordinates too so we can compute the delta
        if (inFrame) {
            // Get the bounding rectangle in client coords
            var clientRect = element.getBoundingClientRect();
            if (!clientRect) {
                return new Sys.UI.Point(0,0);
            }

            // Find the minima in screen coords
            var minLeft = first.left;
            var minTop = first.top;
            for (var i = 1; i < screenRects.length; i++) {
                var r = screenRects[i];
                if (r.left < minLeft) {
                    minLeft = r.left;
                }
                if (r.top < minTop) {
                    minTop = r.top;
                }
            }

            // Compute the delta between screen and client coords
            dLeft = minLeft - clientRect.left;
            dTop = minTop - clientRect.top;
        }

        // Subtract 2px, the border of the viewport (It can be changed in IE6 by applying a border style to the HTML element,
        // but this is not supported by ASP.NET AJAX, and it cannot be changed in IE7.), and also subtract the delta between
        // screen coords and client coords
        var ownerDocument = element.document.documentElement;
        return new Sys.UI.Point(first.left - 2 - dLeft + ownerDocument.scrollLeft, first.top - 2 - dTop + ownerDocument.scrollTop);
    }

    return Sys.UI.DomElement.getLocation(element);
},

    setLocation : function(element, point) {
        /// <summary>
        /// Sets the current location for an element.
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" domElement="true">
        /// DOM element
        /// </param>
        /// <param name="point" type="Object">
        /// Point object (of the form {x,y})
        /// </param>
        /// <remarks>
        /// This method does not attempt to set the positioning mode of an element.
        /// The position is relative from the elements nearest position:relative or
        /// position:absolute element.
        /// </remarks>
        Sys.UI.DomElement.setLocation(element, point.x, point.y);
    },
    
    getContentSize : function(element) {
        /// <summary>
        /// Gets the "content-box" size of an element.
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" domElement="true">
        /// DOM element
        /// </param>
        /// <returns type="Object">
        /// Size of the element (in the form {width,height})
        /// </returns>
        /// <remarks>
        /// The "content-box" is the size of the content area *inside* of the borders and
        /// padding of an element. The "content-box" size does not include the margins around
        /// the element.
        /// </remarks>
        
        if (!element) {
            throw Error.argumentNull('element');
        }
        var size = this.getSize(element);
        var borderBox = this.getBorderBox(element);
        var paddingBox = this.getPaddingBox(element);
        return {
            width :  size.width - borderBox.horizontal - paddingBox.horizontal,
            height : size.height - borderBox.vertical - paddingBox.vertical
        }
    },

    getSize : function(element) {
        /// <summary>
        /// Gets the "border-box" size of an element.
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" domElement="true">
        /// DOM element
        /// </param>
        /// <returns type="Object">
        /// Size of the element (in the form {width,height})
        /// </returns>
        /// <remarks>
        /// The "border-box" is the size of the content area *outside* of the borders and
        /// padding of an element.  The "border-box" size does not include the margins around
        /// the element.
        /// </remarks>
        
        if (!element) {
            throw Error.argumentNull('element');
        }
        return {
            width:  element.offsetWidth,
            height: element.offsetHeight
        };
    },
    
    setContentSize : function(element, size) {
        /// <summary>
        /// Sets the "content-box" size of an element.
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" domElement="true">
        /// DOM element
        /// </param>
        /// <param name="size" type="Object">
        /// Size of the element (in the form {width,height})
        /// </param>
        /// <remarks>
        /// The "content-box" is the size of the content area *inside* of the borders and
        /// padding of an element. The "content-box" size does not include the margins around
        /// the element.
        /// </remarks>
        
        if (!element) {
            throw Error.argumentNull('element');
        }
        if (!size) {
            throw Error.argumentNull('size');
        }
        // FF respects -moz-box-sizing css extension, so adjust the box size for the border-box
        if(this.getCurrentStyle(element, 'MozBoxSizing') == 'border-box' || this.getCurrentStyle(element, 'BoxSizing') == 'border-box') {
            var borderBox = this.getBorderBox(element);
            var paddingBox = this.getPaddingBox(element);
            size = {
                width: size.width + borderBox.horizontal + paddingBox.horizontal,
                height: size.height + borderBox.vertical + paddingBox.vertical
            };
        }
        element.style.width = size.width.toString() + 'px';
        element.style.height = size.height.toString() + 'px';
    },
    
    setSize : function(element, size) {
        /// <summary>
        /// Sets the "border-box" size of an element.
        /// </summary>
        /// <remarks>
        /// The "border-box" is the size of the content area *outside* of the borders and 
        /// padding of an element.  The "border-box" size does not include the margins around
        /// the element.
        /// </remarks>
        /// <param name="element" type="Sys.UI.DomElement">DOM element</param>
        /// <param name="size" type="Object">Size of the element (in the form {width,height})</param>
        /// <returns />
        
        if (!element) {
            throw Error.argumentNull('element');
        }
        if (!size) {
            throw Error.argumentNull('size');
        }
        var borderBox = this.getBorderBox(element);
        var paddingBox = this.getPaddingBox(element);
        var contentSize = {
            width:  size.width - borderBox.horizontal - paddingBox.horizontal,
            height: size.height - borderBox.vertical - paddingBox.vertical
        };
        this.setContentSize(element, contentSize);
    },
    
    getBounds : function(element) {
        /// <summary>Gets the coordinates, width and height of an element.</summary>
        /// <param name="element" domElement="true"/>
        /// <returns type="Sys.UI.Bounds">
        ///   A Bounds object with four fields, x, y, width and height, which contain the pixel coordinates,
        ///   width and height of the element.
        /// </returns>
        /// <remarks>
        ///   Use the CommonToolkitScripts version of getLocation to handle the workaround for IE6.  We can
        ///   remove the below implementation and just call Sys.UI.DomElement.getBounds when the other bug
        ///   is fixed.
        /// </remarks>
        
        var offset = $common.getLocation(element);
        return new Sys.UI.Bounds(offset.x, offset.y, element.offsetWidth || 0, element.offsetHeight || 0);
    }, 
    
    setBounds : function(element, bounds) {
        /// <summary>
        /// Sets the "border-box" bounds of an element
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" domElement="true">
        /// DOM element
        /// </param>
        /// <param name="bounds" type="Object">
        /// Bounds of the element (of the form {x,y,width,height})
        /// </param>
        /// <remarks>
        /// The "border-box" is the size of the content area *outside* of the borders and
        /// padding of an element.  The "border-box" size does not include the margins around
        /// the element.
        /// </remarks>
        
        if (!element) {
            throw Error.argumentNull('element');
        }
        if (!bounds) {
            throw Error.argumentNull('bounds');
        }
        this.setSize(element, bounds);
        $common.setLocation(element, bounds);
    },
    
    getClientBounds : function() {
        /// <summary>
        /// Gets the width and height of the browser client window (excluding scrollbars)
        /// </summary>
        /// <returns type="Sys.UI.Bounds">
        /// Browser's client width and height
        /// </returns>

        var clientWidth;
        var clientHeight;
        switch(Sys.Browser.agent) {
            case Sys.Browser.InternetExplorer:
                clientWidth = document.documentElement.clientWidth;
                clientHeight = document.documentElement.clientHeight;
                break;
            case Sys.Browser.Safari:
                clientWidth = window.innerWidth;
                clientHeight = window.innerHeight;
                break;
            case Sys.Browser.Opera:
                clientWidth = Math.min(window.innerWidth, document.body.clientWidth);
                clientHeight = Math.min(window.innerHeight, document.body.clientHeight);
                break;
            default:  // Sys.Browser.Firefox, etc.
                clientWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
                clientHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);
                break;
        }
        return new Sys.UI.Bounds(0, 0, clientWidth, clientHeight);
    },
   
    getMarginBox : function(element) {
        /// <summary>
        /// Gets the entire margin box sizes.
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" domElement="true">
        /// DOM element
        /// </param>
        /// <returns type="Object">
        /// Element's margin box sizes (of the form {top,left,bottom,right,horizontal,vertical})
        /// </returns>
        
        if (!element) {
            throw Error.argumentNull('element');
        }
        var box = {
            top: this.getMargin(element, AjaxControlToolkit.BoxSide.Top),
            right: this.getMargin(element, AjaxControlToolkit.BoxSide.Right),
            bottom: this.getMargin(element, AjaxControlToolkit.BoxSide.Bottom),
            left: this.getMargin(element, AjaxControlToolkit.BoxSide.Left)
        };
        box.horizontal = box.left + box.right;
        box.vertical = box.top + box.bottom;
        return box;
    },
    
    getBorderBox : function(element) {
        /// <summary>
        /// Gets the entire border box sizes.
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" domElement="true">
        /// DOM element
        /// </param>
        /// <returns type="Object">
        /// Element's border box sizes (of the form {top,left,bottom,right,horizontal,vertical})
        /// </returns>
        
        if (!element) {
            throw Error.argumentNull('element');
        }
        var box = {
            top: this.getBorderWidth(element, AjaxControlToolkit.BoxSide.Top),
            right: this.getBorderWidth(element, AjaxControlToolkit.BoxSide.Right),
            bottom: this.getBorderWidth(element, AjaxControlToolkit.BoxSide.Bottom),
            left: this.getBorderWidth(element, AjaxControlToolkit.BoxSide.Left)
        };
        box.horizontal = box.left + box.right;
        box.vertical = box.top + box.bottom;
        return box;
    },
    
    getPaddingBox : function(element) {
        /// <summary>
        /// Gets the entire padding box sizes.
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" domElement="true">
        /// DOM element
        /// </param>
        /// <returns type="Object">
        /// Element's padding box sizes (of the form {top,left,bottom,right,horizontal,vertical})
        /// </returns>
        
        if (!element) {
            throw Error.argumentNull('element');
        }
        var box = {
            top: this.getPadding(element, AjaxControlToolkit.BoxSide.Top),
            right: this.getPadding(element, AjaxControlToolkit.BoxSide.Right),
            bottom: this.getPadding(element, AjaxControlToolkit.BoxSide.Bottom),
            left: this.getPadding(element, AjaxControlToolkit.BoxSide.Left)
        };
        box.horizontal = box.left + box.right;
        box.vertical = box.top + box.bottom;
        return box;
    },
    
    isBorderVisible : function(element, boxSide) {
        /// <summary>
        /// Gets whether the current border style for an element on a specific boxSide is not 'none'.
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" domElement="true">
        /// DOM element
        /// </param>
        /// <param name="boxSide" type="AjaxControlToolkit.BoxSide">
        /// Side of the element
        /// </param>
        /// <returns type="Boolean">
        /// Whether the current border style for an element on a specific boxSide is not 'none'.
        /// </returns>
        
        if (!element) {
            throw Error.argumentNull('element');
        }
        if(boxSide < AjaxControlToolkit.BoxSide.Top || boxSide > AjaxControlToolkit.BoxSide.Left) {
            throw Error.argumentOutOfRange(String.format(Sys.Res.enumInvalidValue, boxSide, 'AjaxControlToolkit.BoxSide'));
        }
        var styleName = this._borderStyleNames[boxSide];
        var styleValue = this.getCurrentStyle(element, styleName);
        return styleValue != "none";
    },
    
    getMargin : function(element, boxSide) {
        /// <summary>
        /// Gets the margin thickness of an element on a specific boxSide.
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" domElement="true">
        /// DOM element
        /// </param>
        /// <param name="boxSide" type="AjaxControlToolkit.BoxSide">
        /// Side of the element
        /// </param>
        /// <returns type="Number" integer="true">
        /// Margin thickness on the element's specified side
        /// </returns>
        
        if (!element) {
            throw Error.argumentNull('element');
        }
        if(boxSide < AjaxControlToolkit.BoxSide.Top || boxSide > AjaxControlToolkit.BoxSide.Left) {
            throw Error.argumentOutOfRange(String.format(Sys.Res.enumInvalidValue, boxSide, 'AjaxControlToolkit.BoxSide'));
        }
        var styleName = this._marginWidthNames[boxSide];
        var styleValue = this.getCurrentStyle(element, styleName);
        try { return this.parsePadding(styleValue); } catch(ex) { return 0; }
    },

    getBorderWidth : function(element, boxSide) {
        /// <summary>
        /// Gets the border thickness of an element on a specific boxSide.
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" domElement="true">
        /// DOM element
        /// </param>
        /// <param name="boxSide" type="AjaxControlToolkit.BoxSide">
        /// Side of the element
        /// </param>
        /// <returns type="Number" integer="true">
        /// Border thickness on the element's specified side
        /// </returns>
        
        if (!element) {
            throw Error.argumentNull('element');
        }
        if(boxSide < AjaxControlToolkit.BoxSide.Top || boxSide > AjaxControlToolkit.BoxSide.Left) {
            throw Error.argumentOutOfRange(String.format(Sys.Res.enumInvalidValue, boxSide, 'AjaxControlToolkit.BoxSide'));
        }
        if(!this.isBorderVisible(element, boxSide)) {
            return 0;
        }        
        var styleName = this._borderWidthNames[boxSide];    
        var styleValue = this.getCurrentStyle(element, styleName);
        return this.parseBorderWidth(styleValue);
    },
    
    getPadding : function(element, boxSide) {
        /// <summary>
        /// Gets the padding thickness of an element on a specific boxSide.
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" domElement="true">
        /// DOM element
        /// </param>
        /// <param name="boxSide" type="AjaxControlToolkit.BoxSide">
        /// Side of the element
        /// </param>
        /// <returns type="Number" integer="true">
        /// Padding on the element's specified side
        /// </returns>
        
        if (!element) {
            throw Error.argumentNull('element');
        }
        if(boxSide < AjaxControlToolkit.BoxSide.Top || boxSide > AjaxControlToolkit.BoxSide.Left) {
            throw Error.argumentOutOfRange(String.format(Sys.Res.enumInvalidValue, boxSide, 'AjaxControlToolkit.BoxSide'));
        }
        var styleName = this._paddingWidthNames[boxSide];
        var styleValue = this.getCurrentStyle(element, styleName);
        return this.parsePadding(styleValue);
    },
    
    parseBorderWidth : function(borderWidth) {
        /// <summary>
        /// Parses a border-width string into a pixel size
        /// </summary>
        /// <param name="borderWidth" type="String" mayBeNull="true">
        /// Type of border ('thin','medium','thick','inherit',px unit,null,'')
        /// </param>
        /// <returns type="Number" integer="true">
        /// Number of pixels in the border-width
        /// </returns>
        if (!this._borderThicknesses) {
            
            // Populate the borderThicknesses lookup table
            var borderThicknesses = { };
            var div0 = document.createElement('div');
            div0.style.visibility = 'hidden';
            div0.style.position = 'absolute';
            div0.style.fontSize = '1px';
            document.body.appendChild(div0)
            var div1 = document.createElement('div');
            div1.style.height = '0px';
            div1.style.overflow = 'hidden';
            div0.appendChild(div1);
            var base = div0.offsetHeight;
            div1.style.borderTop = 'solid black';
            div1.style.borderTopWidth = 'thin';
            borderThicknesses['thin'] = div0.offsetHeight - base;
            div1.style.borderTopWidth = 'medium';
            borderThicknesses['medium'] = div0.offsetHeight - base;
            div1.style.borderTopWidth = 'thick';
            borderThicknesses['thick'] = div0.offsetHeight - base;
            div0.removeChild(div1);
            document.body.removeChild(div0);
            this._borderThicknesses = borderThicknesses;
        }
        
        if (borderWidth) {
            switch(borderWidth) {
                case 'thin':
                case 'medium':
                case 'thick':
                    return this._borderThicknesses[borderWidth];
                case 'inherit':
                    return 0;
            }
            var unit = this.parseUnit(borderWidth);
            Sys.Debug.assert(unit.type == 'px', String.format(AjaxControlToolkit.Resources.Common_InvalidBorderWidthUnit, unit.type));
            return unit.size;
        }
        return 0;
    },
    
    parsePadding : function(padding) {
        /// <summary>
        /// Parses a padding string into a pixel size
        /// </summary>
        /// <param name="padding" type="String" mayBeNull="true">
        /// Padding to parse ('inherit',px unit,null,'')
        /// </param>
        /// <returns type="Number" integer="true">
        /// Number of pixels in the padding
        /// </returns>
        
        if(padding) {
            if(padding == 'inherit') {
                return 0;
            }
            var unit = this.parseUnit(padding);
            Sys.Debug.assert(unit.type == 'px', String.format(AjaxControlToolkit.Resources.Common_InvalidPaddingUnit, unit.type));
            return unit.size;
        }
        return 0;
    },
    
    parseUnit : function(value) {
        /// <summary>
        /// Parses a unit string into a unit object
        /// </summary>
        /// <param name="value" type="String" mayBeNull="true">
        /// Value to parse (of the form px unit,% unit,em unit,...)
        /// </param>
        /// <returns type="Object">
        /// Parsed unit (of the form {size,type})
        /// </returns>
        
        if (!value) {
            throw Error.argumentNull('value');
        }
        
        value = value.trim().toLowerCase();
        var l = value.length;
        var s = -1;
        for(var i = 0; i < l; i++) {
            var ch = value.substr(i, 1);
            if((ch < '0' || ch > '9') && ch != '-' && ch != '.' && ch != ',') {
                break;
            }
            s = i;
        }
        if(s == -1) {
            throw Error.create(AjaxControlToolkit.Resources.Common_UnitHasNoDigits);
        }
        var type;
        var size;
        if(s < (l - 1)) {
            type = value.substring(s + 1).trim();
        } else {
            type = 'px';
        }
        size = parseFloat(value.substr(0, s + 1));
        if(type == 'px') {
            size = Math.floor(size);
        }
        return { 
            size: size,
            type: type
        };
    },
    
    getElementOpacity : function(element) {
        /// <summary>
        /// Get the element's opacity
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" domElement="true">
        /// Element
        /// </param>
        /// <returns type="Number">
        /// Opacity of the element
        /// </returns>
        
        if (!element) {
            throw Error.argumentNull('element');
        }
        
        var hasOpacity = false;
        var opacity;
        
        if (element.filters) {
            var filters = element.filters;
            if (filters.length !== 0) {
                var alphaFilter = filters['DXImageTransform.Microsoft.Alpha'];
                if (alphaFilter) {
                    opacity = alphaFilter.opacity / 100.0;
                    hasOpacity = true;
                }
            }
        }
        else {
            opacity = this.getCurrentStyle(element, 'opacity', 1);
            hasOpacity = true;
        }
        
        if (hasOpacity === false) {
            return 1.0;
        }
        return parseFloat(opacity);
    },

    setElementOpacity : function(element, value) {
        /// <summary>
        /// Set the element's opacity
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" domElement="true">
        /// Element
        /// </param>
        /// <param name="value" type="Number">
        /// Opacity of the element
        /// </param>
        
        if (!element) {
            throw Error.argumentNull('element');
        }
        
        if (element.filters) {
            var filters = element.filters;
            var createFilter = true;
            if (filters.length !== 0) {
                var alphaFilter = filters['DXImageTransform.Microsoft.Alpha'];
                if (alphaFilter) {
                    createFilter = false;
                    alphaFilter.opacity = value * 100;
                }
            }
            if (createFilter) {
                element.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(opacity=' + (value * 100) + ')';
            }
        }
        else {
            element.style.opacity = value;
        }
    },
    
    getVisible : function(element) {
        /// <summary>
        /// Check if an element is visible
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" domElement="true">
        /// Element
        /// </param>
        /// <returns type="Boolean" mayBeNull="false">
        /// True if the element is visible, false otherwise
        /// </returns>
        
        // Note: reference to CommonToolkitScripts must be left intact (i.e. don't
        // replace with 'this') because this function will be aliased
        
        return (element &&
                ("none" != $common.getCurrentStyle(element, "display")) &&
                ("hidden" != $common.getCurrentStyle(element, "visibility")));
    },
    
    setVisible : function(element, value) {
        /// <summary>
        /// Check if an element is visible
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" domElement="true">
        /// Element
        /// </param>
        /// <param name="value" type="Boolean" mayBeNull="false">
        /// True to make the element visible, false to hide it
        /// </param>
        
        // Note: reference to CommonToolkitScripts must be left intact (i.e. don't
        // replace with 'this') because this function will be aliased
        
        if (element && value != $common.getVisible(element)) {
            if (value) {
                if (element.style.removeAttribute) {
                    element.style.removeAttribute("display");
                } else {
                   element.style.removeProperty("display");
                }
            } else {
                element.style.display = 'none';
            }
            element.style.visibility = value ? 'visible' : 'hidden';
        }
    },
    
    resolveFunction : function(value) {
        /// <summary>
        /// Returns a function reference that corresponds to the provided value
        /// </summary>
        /// <param name="value" type="Object">
        /// The value can either be a Function, the name of a function (that can be found using window['name']),
        /// or an expression that evaluates to a function.
        /// </param>
        /// <returns type="Function">
        /// Reference to the function, or null if not found
        /// </returns>
        
        if (value) {
            if (value instanceof Function) {
                return value;
            } else if (String.isInstanceOfType(value) && value.length > 0) {
                var func;
                if ((func = window[value]) instanceof Function) {
                    return func;
                } else if ((func = eval(value)) instanceof Function) {
                    return func;
                }
            }
        }
        return null;
    },

    addCssClasses : function(element, classNames) {
        /// <summary>
        /// Adds multiple css classes to a DomElement
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement">The element to modify</param>
        /// <param name="classNames" type="Array">The class names to add</param>
        
        for(var i = 0; i < classNames.length; i++) {
            Sys.UI.DomElement.addCssClass(element, classNames[i]);
        }
    },
    removeCssClasses : function(element, classNames) {
        /// <summary>
        /// Removes multiple css classes to a DomElement
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement">The element to modify</param>
        /// <param name="classNames" type="Array">The class names to remove</param>
        
        for(var i = 0; i < classNames.length; i++) {
            Sys.UI.DomElement.removeCssClass(element, classNames[i]);
        }
    },
    setStyle : function(element, style) {
        /// <summary>
        /// Sets the style of the element using the supplied style template object
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement">The element to modify</param>
        /// <param name="style" type="Object">The template</param>

        $common.applyProperties(element.style, style);
    },
    removeHandlers : function(element, events) {
        /// <summary>
        /// Removes a set of event handlers from an element
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement">The element to modify</param>
        /// <param name="events" type="Object">The template object that contains event names and delegates</param>
        /// <remarks>
        /// This is NOT the same as $clearHandlers which removes all delegates from a DomElement.  This rather removes select delegates 
        /// from a specified element and has a matching signature as $addHandlers
        /// </remarks>
        for (var name in events) {
            $removeHandler(element, name, events[name]);
        }
    },
    
    overlaps : function(r1, r2) {
        /// <summary>
        /// Determine if two rectangles overlap
        /// </summary>
        /// <param name="r1" type="Object">
        /// Rectangle
        /// </param>
        /// <param name="r2" type="Object">
        /// Rectangle
        /// </param>
        /// <returns type="Boolean">
        /// True if the rectangles overlap, false otherwise
        /// </returns>
        
         return r1.x < (r2.x + r2.width)
                && r2.x < (r1.x + r1.width)
                && r1.y < (r2.y + r2.height)
                && r2.y < (r1.y + r1.height);
    },
    
    containsPoint : function(rect, x, y) {
        /// <summary>
        /// Tests whether a point (x,y) is contained within a rectangle
        /// </summary>
        /// <param name="rect" type="Object">The rectangle</param>
        /// <param name="x" type="Number">The x coordinate of the point</param>
        /// <param name="y" type="Number">The y coordinate of the point</param>
        
        return x >= rect.x && x < (rect.x + rect.width) && y >= rect.y && y < (rect.y + rect.height);
    },

    isKeyDigit : function(keyCode) { 
        /// <summary>
        /// Gets whether the supplied key-code is a digit
        /// </summary>
        /// <param name="keyCode" type="Number" integer="true">The key code of the event (from Sys.UI.DomEvent)</param>
        /// <returns type="Boolean" />

        return (0x30 <= keyCode && keyCode <= 0x39); 
    },
    
    isKeyNavigation : function(keyCode) { 
        /// <summary>
        /// Gets whether the supplied key-code is a navigation key
        /// </summary>
        /// <param name="keyCode" type="Number" integer="true">The key code of the event (from Sys.UI.DomEvent)</param>
        /// <returns type="Boolean" />

        return (Sys.UI.Key.left <= keyCode && keyCode <= Sys.UI.Key.down); 
    },
    
    padLeft : function(text, size, ch, truncate) { 
        /// <summary>
        /// Pads the left hand side of the supplied text with the specified pad character up to the requested size
        /// </summary>
        /// <param name="text" type="String">The text to pad</param>
        /// <param name="size" type="Number" integer="true" optional="true">The size to pad the text (default is 2)</param>
        /// <param name="ch" type="String" optional="true">The single character to use as the pad character (default is ' ')</param>
        /// <param name="truncate" type="Boolean" optional="true">Whether to truncate the text to size (default is false)</param>
        
        return $common._pad(text, size || 2, ch || ' ', 'l', truncate || false); 
    },
    
    padRight : function(text, size, ch, truncate) { 
        /// <summary>
        /// Pads the right hand side of the supplied text with the specified pad character up to the requested size
        /// </summary>
        /// <param name="text" type="String">The text to pad</param>
        /// <param name="size" type="Number" integer="true" optional="true">The size to pad the text (default is 2)</param>
        /// <param name="ch" type="String" optional="true">The single character to use as the pad character (default is ' ')</param>
        /// <param name="truncate" type="Boolean" optional="true">Whether to truncate the text to size (default is false)</param>

        return $common._pad(text, size || 2, ch || ' ', 'r', truncate || false); 
    },
    
    _pad : function(text, size, ch, side, truncate) {
        /// <summary>
        /// Pads supplied text with the specified pad character up to the requested size
        /// </summary>
        /// <param name="text" type="String">The text to pad</param>
        /// <param name="size" type="Number" integer="true">The size to pad the text</param>
        /// <param name="ch" type="String">The single character to use as the pad character</param>
        /// <param name="side" type="String">Either 'l' or 'r' to siginfy whether to pad the Left or Right side respectively</param>
        /// <param name="truncate" type="Boolean">Whether to truncate the text to size</param>

        text = text.toString();
        var length = text.length;
        var builder = new Sys.StringBuilder();
        if (side == 'r') {
            builder.append(text);
        } 
        while (length < size) {
            builder.append(ch);
            length++;
        }
        if (side == 'l') {
            builder.append(text);
        }
        var result = builder.toString();
        if (truncate && result.length > size) {
            if (side == 'l') {
                result = result.substr(result.length - size, size);
            } else {
                result = result.substr(0, size);
            }
        }
        return result;
    },
    
    __DOMEvents : {
        focusin : { eventGroup : "UIEvents", init : function(e, p) { e.initUIEvent("focusin", true, false, window, 1); } },
        focusout : { eventGroup : "UIEvents", init : function(e, p) { e.initUIEvent("focusout", true, false, window, 1); } },
        activate : { eventGroup : "UIEvents", init : function(e, p) { e.initUIEvent("activate", true, true, window, 1); } },
        focus : { eventGroup : "UIEvents", init : function(e, p) { e.initUIEvent("focus", false, false, window, 1); } },
        blur : { eventGroup : "UIEvents", init : function(e, p) { e.initUIEvent("blur", false, false, window, 1); } },
        click : { eventGroup : "MouseEvents", init : function(e, p) { e.initMouseEvent("click", true, true, window, 1, p.screenX || 0, p.screenY || 0, p.clientX || 0, p.clientY || 0, p.ctrlKey || false, p.altKey || false, p.shiftKey || false, p.metaKey || false, p.button || 0, p.relatedTarget || null); } },
        dblclick : { eventGroup : "MouseEvents", init : function(e, p) { e.initMouseEvent("click", true, true, window, 2, p.screenX || 0, p.screenY || 0, p.clientX || 0, p.clientY || 0, p.ctrlKey || false, p.altKey || false, p.shiftKey || false, p.metaKey || false, p.button || 0, p.relatedTarget || null); } },
        mousedown : { eventGroup : "MouseEvents", init : function(e, p) { e.initMouseEvent("mousedown", true, true, window, 1, p.screenX || 0, p.screenY || 0, p.clientX || 0, p.clientY || 0, p.ctrlKey || false, p.altKey || false, p.shiftKey || false, p.metaKey || false, p.button || 0, p.relatedTarget || null); } },
        mouseup : { eventGroup : "MouseEvents", init : function(e, p) { e.initMouseEvent("mouseup", true, true, window, 1, p.screenX || 0, p.screenY || 0, p.clientX || 0, p.clientY || 0, p.ctrlKey || false, p.altKey || false, p.shiftKey || false, p.metaKey || false, p.button || 0, p.relatedTarget || null); } },
        mouseover : { eventGroup : "MouseEvents", init : function(e, p) { e.initMouseEvent("mouseover", true, true, window, 1, p.screenX || 0, p.screenY || 0, p.clientX || 0, p.clientY || 0, p.ctrlKey || false, p.altKey || false, p.shiftKey || false, p.metaKey || false, p.button || 0, p.relatedTarget || null); } },
        mousemove : { eventGroup : "MouseEvents", init : function(e, p) { e.initMouseEvent("mousemove", true, true, window, 1, p.screenX || 0, p.screenY || 0, p.clientX || 0, p.clientY || 0, p.ctrlKey || false, p.altKey || false, p.shiftKey || false, p.metaKey || false, p.button || 0, p.relatedTarget || null); } },
        mouseout : { eventGroup : "MouseEvents", init : function(e, p) { e.initMouseEvent("mousemove", true, true, window, 1, p.screenX || 0, p.screenY || 0, p.clientX || 0, p.clientY || 0, p.ctrlKey || false, p.altKey || false, p.shiftKey || false, p.metaKey || false, p.button || 0, p.relatedTarget || null); } },
        load : { eventGroup : "HTMLEvents", init : function(e, p) { e.initEvent("load", false, false); } },
        unload : { eventGroup : "HTMLEvents", init : function(e, p) { e.initEvent("unload", false, false); } },
        select : { eventGroup : "HTMLEvents", init : function(e, p) { e.initEvent("select", true, false); } },
        change : { eventGroup : "HTMLEvents", init : function(e, p) { e.initEvent("change", true, false); } },
        submit : { eventGroup : "HTMLEvents", init : function(e, p) { e.initEvent("submit", true, true); } },
        reset : { eventGroup : "HTMLEvents", init : function(e, p) { e.initEvent("reset", true, false); } },
        resize : { eventGroup : "HTMLEvents", init : function(e, p) { e.initEvent("resize", true, false); } },
        scroll : { eventGroup : "HTMLEvents", init : function(e, p) { e.initEvent("scroll", true, false); } }
    },
    
    tryFireRawEvent : function(element, rawEvent) {
        /// <summary>
        /// Attempts to fire a raw DOM event on an element
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement">The element to fire the event</param>
        /// <param name="rawEvent" type="Object">The raw DOM event object to fire. Must not be Sys.UI.DomEvent</param>
        /// <returns type="Boolean">True if the event was successfully fired, otherwise false</returns>
        
        try {
            if (element.fireEvent) {
                element.fireEvent("on" + rawEvent.type, rawEvent);
                return true;
            } else if (element.dispatchEvent) {
                element.dispatchEvent(rawEvent);
                return true;
            }
        } catch (e) {
        }
        return false;
    },    

    tryFireEvent : function(element, eventName, properties) {
        /// <summary>
        /// Attempts to fire a DOM event on an element
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement">The element to fire the event</param>
        /// <param name="eventName" type="String">The name of the event to fire (without an 'on' prefix)</param>
        /// <param name="properties" type="Object">Properties to add to the event</param>
        /// <returns type="Boolean">True if the event was successfully fired, otherwise false</returns>
        
        try {
            if (document.createEventObject) {
                var e = document.createEventObject();
                $common.applyProperties(e, properties || {});
                element.fireEvent("on" + eventName, e);
                return true;
            } else if (document.createEvent) {
                var def = $common.__DOMEvents[eventName];
                if (def) {
                    var e = document.createEvent(def.eventGroup);
                    def.init(e, properties || {});
                    element.dispatchEvent(e);
                    return true;
                }
            }
        } catch (e) {
        }
        return false;
    },

    wrapElement : function(innerElement, newOuterElement, newInnerParentElement) {
        /// <summary>
        /// Wraps an inner element with a new outer element at the same DOM location as the inner element
        /// </summary>
        /// <param name="innerElement" type="Sys.UI.DomElement">The element to be wrapped</param>
        /// <param name="newOuterElement" type="Sys.UI.DomElement">The new parent for the element</param>
        /// <returns />
        
        var parent = innerElement.parentNode;
        parent.replaceChild(newOuterElement, innerElement);        
        (newInnerParentElement || newOuterElement).appendChild(innerElement);
    },

    unwrapElement : function(innerElement, oldOuterElement) {
        /// <summary>
        /// Unwraps an inner element from an outer element at the same DOM location as the outer element
        /// </summary>
        /// <param name="innerElement" type="Sys.UI.DomElement">The element to be wrapped</param>
        /// <param name="newOuterElement" type="Sys.UI.DomElement">The new parent for the element</param>
        /// <returns />

        var parent = oldOuterElement.parentNode;
        if (parent != null) {
            $common.removeElement(innerElement);
            parent.replaceChild(innerElement, oldOuterElement);
        }
    },
    
    removeElement : function(element) {
        /// <summary>
        /// Removes an element from the DOM tree
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement">The element to be removed</param>
        /// <returns />

        var parent = element.parentNode;
        if (parent != null) {
            parent.removeChild(element);
        }
    },
 
    applyProperties : function(target, properties) {
        /// <summary>
        /// Quick utility method to copy properties from a template object to a target object
        /// </summary>
        /// <param name="target" type="Object">The object to apply to</param>
        /// <param name="properties" type="Object">The template to copy values from</param>
        
        for (var p in properties) {
            var pv = properties[p];
            if (pv != null && Object.getType(pv)===Object) {
                var tv = target[p];
                $common.applyProperties(tv, pv);
            } else {
                target[p] = pv;
            }
        }
    },
        
    createElementFromTemplate : function(template, appendToParent, nameTable) {
        /// <summary>
        /// Creates an element for the current document based on a template object
        /// </summary>
        /// <param name="template" type="Object">The template from which to create the element</param>
        /// <param name="appendToParent" type="Sys.UI.DomElement" optional="true" mayBeNull="true">A DomElement under which to append this element</param>
        /// <param name="nameTable" type="Object" optional="true" mayBeNull="true">An object to use as the storage for the element using template.name as the key</param>
        /// <returns type="Sys.UI.DomElement" />
        /// <remarks>
        /// This method is useful if you find yourself using the same or similar DomElement constructions throughout a class.  You can even set the templates
        /// as static properties for a type to cut down on overhead.  This method is often called with a JSON style template:
        /// <code>
        /// var elt = $common.createElementFromTemplate({
        ///     nodeName : "div",
        ///     properties : {
        ///         style : {
        ///             height : "100px",
        ///             width : "100px",
        ///             backgroundColor : "white"
        ///         },
        ///         expandoAttribute : "foo"
        ///     },
        ///     events : {
        ///         click : function() { alert("foo"); },
        ///         mouseover : function() { elt.backgroundColor = "silver"; },
        ///         mouseout : function() { elt.backgroundColor = "white"; }
        ///     },
        ///     cssClasses : [ "class0", "class1" ],
        ///     visible : true,
        ///     opacity : .5
        /// }, someParent);
        /// </code>
        /// </remarks>
        
        // if we wish to override the name table we do so here
        if (typeof(template.nameTable)!='undefined') {
            var newNameTable = template.nameTable;
            if (String.isInstanceOfType(newNameTable)) {
                newNameTable = nameTable[newNameTable];
            }
            if (newNameTable != null) {
                nameTable = newNameTable;
            }
        }
        
        // get a name for the element in the nameTable
        var elementName = null;
        if (typeof(template.name)!=='undefined') {
            elementName = template.name;
        }
        
        // create or acquire the element
        var elt = document.createElement(template.nodeName);
        
        // if our element is named, add it to the name table
        if (typeof(template.name)!=='undefined' && nameTable) {
            nameTable[template.name] = elt;
        }
        
        // if we wish to supply a default parent we do so here
        if (typeof(template.parent)!=='undefined' && appendToParent == null) {
            var newParent = template.parent;
            if (String.isInstanceOfType(newParent)) {
                newParent = nameTable[newParent];
            }
            if (newParent != null) {
                appendToParent = newParent;
            }
        }
        
        // properties are applied as expando values to the element
        if (typeof(template.properties)!=='undefined' && template.properties != null) {
            $common.applyProperties(elt, template.properties);
        }
        
        // css classes are added to the element's className property
        if (typeof(template.cssClasses)!=='undefined' && template.cssClasses != null) {
            $common.addCssClasses(elt, template.cssClasses);
        }
        
        // events are added to the dom element using $addHandlers
        if (typeof(template.events)!=='undefined' && template.events != null) {
            $addHandlers(elt, template.events);
        }
        
        // if the element is visible or not its visibility is set
        if (typeof(template.visible)!=='undefined' && template.visible != null) {
            this.setVisible(elt, template.visible);
        }
        
        // if we have an appendToParent we will now append to it
        if (appendToParent) {
            appendToParent.appendChild(elt);
        }

        // if we have opacity, apply it
        if (typeof(template.opacity)!=='undefined' && template.opacity != null) {
            $common.setElementOpacity(elt, template.opacity);
        }
        
        // if we have child templates, process them
        if (typeof(template.children)!=='undefined' && template.children != null) {
            for (var i = 0; i < template.children.length; i++) {
                var subtemplate = template.children[i];
                $common.createElementFromTemplate(subtemplate, elt, nameTable);
            }
        }
        
        // if we have a content presenter for the element get it (the element itself is the default presenter for content)
        var contentPresenter = elt;
        if (typeof(template.contentPresenter)!=='undefined' && template.contentPresenter != null) {
            contentPresenter = nameTable[contentPresenter];
        }
        
        // if we have content, add it
        if (typeof(template.content)!=='undefined' && template.content != null) {
            var content = template.content;
            if (String.isInstanceOfType(content)) {
                content = nameTable[content];
            }
            if (content.parentNode) {
                $common.wrapElement(content, elt, contentPresenter);
            } else {
                contentPresenter.appendChild(content);
            }
        }
        
        // return the created element
        return elt;
    },
    
    prepareHiddenElementForATDeviceUpdate : function () {
        /// <summary>
        /// JAWS, an Assistive Technology device responds to updates to form elements 
        /// and refreshes its document buffer to what is showing live
        /// in the browser. To ensure that Toolkit controls that make XmlHttpRequests to
        /// retrieve content are useful to users with visual disabilities, we update a
        /// hidden form element to ensure that JAWS conveys what is in
        /// the browser. See this article for more details: 
        /// http://juicystudio.com/article/improving-ajax-applications-for-jaws-users.php
        /// This method creates a hidden input on the screen for any page that uses a Toolkit
        /// control that will perform an XmlHttpRequest.
        /// </summary>   
        var objHidden = document.getElementById('hiddenInputToUpdateATBuffer_CommonToolkitScripts');
        if (!objHidden) {
            var objHidden = document.createElement('input');
            objHidden.setAttribute('type', 'hidden');
            objHidden.setAttribute('value', '1');
            objHidden.setAttribute('id', 'hiddenInputToUpdateATBuffer_CommonToolkitScripts');
            objHidden.setAttribute('name', 'hiddenInputToUpdateATBuffer_CommonToolkitScripts');
            if ( document.forms[0] ) {
                document.forms[0].appendChild(objHidden);
            }
        }
    },
    
    updateFormToRefreshATDeviceBuffer : function () {
        /// <summary>
        /// Updates the hidden buffer to ensure that the latest document stream is picked up
        /// by the screen reader.
        /// </summary>
        var objHidden = document.getElementById('hiddenInputToUpdateATBuffer_CommonToolkitScripts');

        if (objHidden) {
            if (objHidden.getAttribute('value') == '1') {
                objHidden.setAttribute('value', '0');
            } else {
                objHidden.setAttribute('value', '1');
            }
        }
    }
}

// Create the singleton instance of the CommonToolkitScripts
var CommonToolkitScripts = AjaxControlToolkit.CommonToolkitScripts = new AjaxControlToolkit._CommonToolkitScripts();
var $common = CommonToolkitScripts;

// Alias functions that were moved from BlockingScripts into Common
Sys.UI.DomElement.getVisible = $common.getVisible;
Sys.UI.DomElement.setVisible = $common.setVisible;
Sys.UI.Control.overlaps = $common.overlaps;

AjaxControlToolkit._DomUtility = function() {
    /// <summary>
    /// Utility functions for manipulating the DOM
    /// </summary>
}
AjaxControlToolkit._DomUtility.prototype = {
    isDescendant : function(ancestor, descendant) {
        /// <summary>
        /// Whether the specified element is a descendant of the ancestor
        /// </summary>
        /// <param name="ancestor" type="Sys.UI.DomElement">Ancestor node</param>
        /// <param name="descendant" type="Sys.UI.DomElement">Possible descendant node</param>
        /// <returns type="Boolean" />
        
        for (var n = descendant.parentNode; n != null; n = n.parentNode) {
            if (n == ancestor) return true;
        }
        return false;
    },
    isDescendantOrSelf : function(ancestor, descendant) {
        /// <summary>
        /// Whether the specified element is a descendant of the ancestor or the same as the ancestor
        /// </summary>
        /// <param name="ancestor" type="Sys.UI.DomElement">Ancestor node</param>
        /// <param name="descendant" type="Sys.UI.DomElement">Possible descendant node</param>
        /// <returns type="Boolean" />

        if (ancestor === descendant) 
            return true;
        return AjaxControlToolkit.DomUtility.isDescendant(ancestor, descendant);
    },
    isAncestor : function(descendant, ancestor) {
        /// <summary>
        /// Whether the specified element is an ancestor of the descendant
        /// </summary>
        /// <param name="descendant" type="Sys.UI.DomElement">Descendant node</param>
        /// <param name="ancestor" type="Sys.UI.DomElement">Possible ancestor node</param>
        /// <returns type="Boolean" />

        return AjaxControlToolkit.DomUtility.isDescendant(ancestor, descendant);
    },
    isAncestorOrSelf : function(descendant, ancestor) {
        /// <summary>
        /// Whether the specified element is an ancestor of the descendant or the same as the descendant
        /// </summary>
        /// <param name="descendant" type="Sys.UI.DomElement">Descendant node</param>
        /// <param name="ancestor" type="Sys.UI.DomElement">Possible ancestor node</param>
        /// <returns type="Boolean" />
        
        if (descendant === ancestor)
            return true;
            
        return AjaxControlToolkit.DomUtility.isDescendant(ancestor, descendant);
    },
    isSibling : function(self, sibling) {
        /// <summary>
        /// Whether the specified element is a sibling of the self element
        /// </summary>
        /// <param name="self" type="Sys.UI.DomElement">Self node</param>
        /// <param name="sibling" type="Sys.UI.DomElement">Possible sibling node</param>
        /// <returns type="Boolean" />
        
        var parent = self.parentNode;
        for (var i = 0; i < parent.childNodes.length; i++) {
            if (parent.childNodes[i] == sibling) return true;
        }
        return false;
    }
}
AjaxControlToolkit._DomUtility.registerClass("AjaxControlToolkit._DomUtility");
AjaxControlToolkit.DomUtility = new AjaxControlToolkit._DomUtility();


AjaxControlToolkit.TextBoxWrapper = function(element) {
    /// <summary>
    /// Class that wraps a TextBox (INPUT type="text") to abstract-out the
    /// presence of a watermark (which may be visible to the user but which
    /// should never be read by script.
    /// </summary>
    /// <param name="element" type="Sys.UI.DomElement" domElement="true">
    /// The DOM element the behavior is associated with
    /// </param>
    AjaxControlToolkit.TextBoxWrapper.initializeBase(this, [element]);
    this._current = element.value;
    this._watermark = null;
    this._isWatermarked = false;
}

AjaxControlToolkit.TextBoxWrapper.prototype = {

    dispose : function() {
        /// <summary>
        /// Dispose the behavior
        /// </summary>
        this.get_element().AjaxControlToolkitTextBoxWrapper = null;
        AjaxControlToolkit.TextBoxWrapper.callBaseMethod(this, 'dispose');
    },

    get_Current : function() {
        /// <value type="String">
        /// Current value actually in the TextBox (i.e., TextBox.value)
        /// </value>
        this._current = this.get_element().value;
        return this._current;
    },
    set_Current : function(value) {
        this._current = value;
        this._updateElement();
    },

    get_Value : function() {
        /// <value type="String">
        /// Conceptual "value" of the TextBox - its contents if no watermark is present
        /// or "" if one is
        /// </value>
        if (this.get_IsWatermarked()) {
            return "";
        } else {
            return this.get_Current();
        }
    },
    set_Value : function(text) {
        this.set_Current(text);
        if (!text || (0 == text.length)) {
            if (null != this._watermark) {
                this.set_IsWatermarked(true);
            }
        } else {
            this.set_IsWatermarked(false);
        }
    },

    get_Watermark : function() {
        /// <value type="String">
        /// Text of the watermark for the TextBox
        /// </value>
        return this._watermark;
    },
    set_Watermark : function(value) {
        this._watermark = value;
        this._updateElement();
    },

    get_IsWatermarked : function() {
        /// <value type="Boolean">
        /// true iff the TextBox is watermarked
        /// </value>
        return this._isWatermarked;
    },
    set_IsWatermarked : function(isWatermarked) {
        if (this._isWatermarked != isWatermarked) {
            this._isWatermarked = isWatermarked;
            this._updateElement();
            this._raiseWatermarkChanged();
        }
    },

    _updateElement : function() {
        /// <summary>
        /// Updates the actual contents of the TextBox according to what should be there
        /// </summary>
        var element = this.get_element();
        if (this._isWatermarked) {
            if (element.value != this._watermark) {
                element.value = this._watermark;
            }
        } else {
            if (element.value != this._current) {
                element.value = this._current;
            }
        }
    },

    add_WatermarkChanged : function(handler) {
        /// <summary>
        /// Adds a handler for the WatermarkChanged event
        /// </summary>
        /// <param name="handler" type="Function">
        /// Handler
        /// </param>
        this.get_events().addHandler("WatermarkChanged", handler);
    },
    remove_WatermarkChanged : function(handler) {
        /// <summary>
        /// Removes a handler for the WatermarkChanged event
        /// </summary>
        /// <param name="handler" type="Function">
        /// Handler
        /// </param>
        this.get_events().removeHandler("WatermarkChanged", handler);
    },
    _raiseWatermarkChanged : function() {
        /// <summary>
        /// Raises the WatermarkChanged event
        /// </summary>
        var onWatermarkChangedHandler = this.get_events().getHandler("WatermarkChanged");
        if (onWatermarkChangedHandler) {
            onWatermarkChangedHandler(this, Sys.EventArgs.Empty);
        }
    }
}
AjaxControlToolkit.TextBoxWrapper.get_Wrapper = function(element) {
    /// <summary>
    /// Gets (creating one if necessary) the TextBoxWrapper for the specified TextBox
    /// </summary>
    /// <param name="element" type="Sys.UI.DomElement" domElement="true">
    /// TextBox for which to get the wrapper
    /// </param>
    /// <returns type="AjaxControlToolkit.TextBoxWrapper">
    /// TextBoxWrapper instance
    /// </returns>
    if (null == element.AjaxControlToolkitTextBoxWrapper) {
        element.AjaxControlToolkitTextBoxWrapper = new AjaxControlToolkit.TextBoxWrapper(element);
    }
    return element.AjaxControlToolkitTextBoxWrapper;
}
AjaxControlToolkit.TextBoxWrapper.registerClass('AjaxControlToolkit.TextBoxWrapper', Sys.UI.Behavior);

AjaxControlToolkit.TextBoxWrapper.validatorGetValue = function(id) {
    /// <summary>
    /// Wrapper for ASP.NET's validatorGetValue to return the value from the wrapper if present
    /// </summary>
    /// <param name="id" type="String">
    /// id of the element
    /// </param>
    /// <returns type="Object">
    /// Value from the wrapper or result of original ValidatorGetValue
    /// </returns>
    var control = $get(id);
    if (control && control.AjaxControlToolkitTextBoxWrapper) {
        return control.AjaxControlToolkitTextBoxWrapper.get_Value();
    }
    return AjaxControlToolkit.TextBoxWrapper._originalValidatorGetValue(id);
}

// Wrap ASP.NET's ValidatorGetValue with AjaxControlToolkit.TextBoxWrapper.validatorGetValue
// to make validators work properly with watermarked TextBoxes
if (typeof(ValidatorGetValue) == 'function') {
    AjaxControlToolkit.TextBoxWrapper._originalValidatorGetValue = ValidatorGetValue;
    ValidatorGetValue = AjaxControlToolkit.TextBoxWrapper.validatorGetValue;
}


// Temporary fix null reference bug in Sys.CultureInfo._getAbbrMonthIndex
if (Sys.CultureInfo.prototype._getAbbrMonthIndex) {
    try {
        Sys.CultureInfo.prototype._getAbbrMonthIndex('');
    } catch(ex) {
        Sys.CultureInfo.prototype._getAbbrMonthIndex = function(value) {
            if (!this._upperAbbrMonths) {
                this._upperAbbrMonths = this._toUpperArray(this.dateTimeFormat.AbbreviatedMonthNames);
            }
            return Array.indexOf(this._upperAbbrMonths, this._toUpper(value));
        }
        Sys.CultureInfo.CurrentCulture._getAbbrMonthIndex = Sys.CultureInfo.prototype._getAbbrMonthIndex;
        Sys.CultureInfo.InvariantCulture._getAbbrMonthIndex = Sys.CultureInfo.prototype._getAbbrMonthIndex;
    }
}

/* END AjaxControlToolkit.Common.Common.js */
/* START AjaxControlToolkit.ExtenderBase.BaseScripts.js */
// (c) Copyright Microsoft Corporation.
// This source is subject to the Microsoft Permissive License.
// See http://www.microsoft.com/resources/sharedsource/licensingbasics/sharedsourcelicenses.mspx.
// All other rights reserved.


/// <reference name="MicrosoftAjax.debug.js" />
/// <reference name="MicrosoftAjaxTimer.debug.js" />
/// <reference name="MicrosoftAjaxWebForms.debug.js" />


Type.registerNamespace('AjaxControlToolkit');

// This is the base behavior for all extender behaviors
AjaxControlToolkit.BehaviorBase = function(element) {
    /// <summary>
    /// Base behavior for all extender behaviors
    /// </summary>
    /// <param name="element" type="Sys.UI.DomElement" domElement="true">
    /// Element the behavior is associated with
    /// </param>
    AjaxControlToolkit.BehaviorBase.initializeBase(this,[element]);
    
    this._clientStateFieldID = null;
    this._pageRequestManager = null;
    this._partialUpdateBeginRequestHandler = null;
    this._partialUpdateEndRequestHandler = null;
}
AjaxControlToolkit.BehaviorBase.prototype = {
    initialize : function() {
        /// <summary>
        /// Initialize the behavior
        /// </summary>

        // TODO: Evaluate necessity
        AjaxControlToolkit.BehaviorBase.callBaseMethod(this, 'initialize');
    },

    dispose : function() {
        /// <summary>
        /// Dispose the behavior
        /// </summary>
        AjaxControlToolkit.BehaviorBase.callBaseMethod(this, 'dispose');

        if (this._pageRequestManager) {
            if (this._partialUpdateBeginRequestHandler) {
                this._pageRequestManager.remove_beginRequest(this._partialUpdateBeginRequestHandler);
                this._partialUpdateBeginRequestHandler = null;
            }
            if (this._partialUpdateEndRequestHandler) {
                this._pageRequestManager.remove_endRequest(this._partialUpdateEndRequestHandler);
                this._partialUpdateEndRequestHandler = null;
            }
            this._pageRequestManager = null;
        }
    },

    get_ClientStateFieldID : function() {
        /// <value type="String">
        /// ID of the hidden field used to store client state
        /// </value>
        return this._clientStateFieldID;
    },
    set_ClientStateFieldID : function(value) {
        if (this._clientStateFieldID != value) {
            this._clientStateFieldID = value;
            this.raisePropertyChanged('ClientStateFieldID');
        }
    },

    get_ClientState : function() {
        /// <value type="String">
        /// Client state
        /// </value>
        if (this._clientStateFieldID) {
            var input = document.getElementById(this._clientStateFieldID);
            if (input) {
                return input.value;
            }
        }
        return null;
    },
    set_ClientState : function(value) {
        if (this._clientStateFieldID) {
            var input = document.getElementById(this._clientStateFieldID);
            if (input) {
                input.value = value;
            }
        }
    },

    registerPartialUpdateEvents : function() {
        /// <summary>
        /// Register for beginRequest and endRequest events on the PageRequestManager,
        /// (which cause _partialUpdateBeginRequest and _partialUpdateEndRequest to be
        /// called when an UpdatePanel refreshes)
        /// </summary>

        if (Sys && Sys.WebForms && Sys.WebForms.PageRequestManager){
            this._pageRequestManager = Sys.WebForms.PageRequestManager.getInstance();
            if (this._pageRequestManager) {
                this._partialUpdateBeginRequestHandler = Function.createDelegate(this, this._partialUpdateBeginRequest);
                this._pageRequestManager.add_beginRequest(this._partialUpdateBeginRequestHandler);
                this._partialUpdateEndRequestHandler = Function.createDelegate(this, this._partialUpdateEndRequest);
                this._pageRequestManager.add_endRequest(this._partialUpdateEndRequestHandler);
            }
        }
    },

    _partialUpdateBeginRequest : function(sender, beginRequestEventArgs) {
        /// <summary>
        /// Method that will be called when a partial update (via an UpdatePanel) begins,
        /// if registerPartialUpdateEvents() has been called.
        /// </summary>
        /// <param name="sender" type="Object">
        /// Sender
        /// </param>
        /// <param name="beginRequestEventArgs" type="Sys.WebForms.BeginRequestEventArgs">
        /// Event arguments
        /// </param>

        // Nothing done here; override this method in a child class
    },
    
    _partialUpdateEndRequest : function(sender, endRequestEventArgs) {
        /// <summary>
        /// Method that will be called when a partial update (via an UpdatePanel) finishes,
        /// if registerPartialUpdateEvents() has been called.
        /// </summary>
        /// <param name="sender" type="Object">
        /// Sender
        /// </param>
        /// <param name="endRequestEventArgs" type="Sys.WebForms.EndRequestEventArgs">
        /// Event arguments
        /// </param>

        // Nothing done here; override this method in a child class
    }
}
AjaxControlToolkit.BehaviorBase.registerClass('AjaxControlToolkit.BehaviorBase', Sys.UI.Behavior);


// Dynamically populates content when the populate method is called
AjaxControlToolkit.DynamicPopulateBehaviorBase = function(element) {
    /// <summary>
    /// DynamicPopulateBehaviorBase is used to add DynamicPopulateBehavior funcitonality
    /// to other extenders.  It will dynamically populate the contents of the target element
    /// when its populate method is called.
    /// </summary>
    /// <param name="element" type="Sys.UI.DomElement" domElement="true">
    /// DOM Element the behavior is associated with
    /// </param>
    AjaxControlToolkit.DynamicPopulateBehaviorBase.initializeBase(this, [element]);
    
    this._DynamicControlID = null;
    this._DynamicContextKey = null;
    this._DynamicServicePath = null;
    this._DynamicServiceMethod = null;
    this._cacheDynamicResults = false;
    this._dynamicPopulateBehavior = null;
    this._populatingHandler = null;
    this._populatedHandler = null;
}
AjaxControlToolkit.DynamicPopulateBehaviorBase.prototype = {
    initialize : function() {
        /// <summary>
        /// Initialize the behavior
        /// </summary>

        AjaxControlToolkit.DynamicPopulateBehaviorBase.callBaseMethod(this, 'initialize');

        // Create event handlers
        this._populatingHandler = Function.createDelegate(this, this._onPopulating);
        this._populatedHandler = Function.createDelegate(this, this._onPopulated);
    },

    dispose : function() {
        /// <summary>
        /// Dispose the behavior
        /// </summary>

        // Dispose of event handlers
        if (this._populatedHandler) {
            if (this._dynamicPopulateBehavior) {
                this._dynamicPopulateBehavior.remove_populated(this._populatedHandler);
            }
            this._populatedHandler = null;
        }
        if (this._populatingHandler) {
            if (this._dynamicPopulateBehavior) {
                this._dynamicPopulateBehavior.remove_populating(this._populatingHandler);
            }
            this._populatingHandler = null;
        }

        // Dispose of the placeholder control and behavior
        if (this._dynamicPopulateBehavior) {
            this._dynamicPopulateBehavior.dispose();
            this._dynamicPopulateBehavior = null;
        }
        AjaxControlToolkit.DynamicPopulateBehaviorBase.callBaseMethod(this, 'dispose');
    },

    populate : function(contextKeyOverride) {
        /// <summary>
        /// Demand-create the DynamicPopulateBehavior and use it to populate the target element
        /// </summary>
        /// <param name="contextKeyOverride" type="String" mayBeNull="true" optional="true">
        /// An arbitrary string value to be passed to the web method. For example, if the element to be populated is within a data-bound repeater, this could be the ID of the current row.
        /// </param>

        // If the DynamicPopulateBehavior's element is out of date, dispose of it
        if (this._dynamicPopulateBehavior && (this._dynamicPopulateBehavior.get_element() != $get(this._DynamicControlID))) {
            this._dynamicPopulateBehavior.dispose();
            this._dynamicPopulateBehavior = null;
        }
        
        // If a DynamicPopulateBehavior is not available and the necessary information is, create one
        if (!this._dynamicPopulateBehavior && this._DynamicControlID && this._DynamicServiceMethod) {
            this._dynamicPopulateBehavior = $create(AjaxControlToolkit.DynamicPopulateBehavior,
                {
                    "id" : this.get_id() + "_DynamicPopulateBehavior",
                    "ContextKey" : this._DynamicContextKey,
                    "ServicePath" : this._DynamicServicePath,
                    "ServiceMethod" : this._DynamicServiceMethod,
                    "cacheDynamicResults" : this._cacheDynamicResults
                }, null, null, $get(this._DynamicControlID));

            // Attach event handlers
            this._dynamicPopulateBehavior.add_populating(this._populatingHandler);
            this._dynamicPopulateBehavior.add_populated(this._populatedHandler);
        }
        
        // If a DynamicPopulateBehavior is available, use it to populate the dynamic content
        if (this._dynamicPopulateBehavior) {
            this._dynamicPopulateBehavior.populate(contextKeyOverride ? contextKeyOverride : this._DynamicContextKey);
        }
    },

    _onPopulating : function(sender, eventArgs) {
        /// <summary>
        /// Handler for DynamicPopulate behavior's Populating event
        /// </summary>
        /// <param name="sender" type="Object">
        /// DynamicPopulate behavior
        /// </param>
        /// <param name="eventArgs" type="Sys.CancelEventArgs" mayBeNull="false">
        /// Event args
        /// </param>
        this.raisePopulating(eventArgs);
    },

    _onPopulated : function(sender, eventArgs) {
        /// <summary>
        /// Handler for DynamicPopulate behavior's Populated event
        /// </summary>
        /// <param name="sender" type="Object">
        /// DynamicPopulate behavior
        /// </param>
        /// <param name="eventArgs" type="Sys.EventArgs" mayBeNull="false">
        /// Event args
        /// </param>
        this.raisePopulated(eventArgs);
    },

    get_dynamicControlID : function() {
        /// <value type="String">
        /// ID of the element to populate with dynamic content
        /// </value>
        return this._DynamicControlID;
    },
    get_DynamicControlID : this.get_dynamicControlID,
    set_dynamicControlID : function(value) {
        if (this._DynamicControlID != value) {
            this._DynamicControlID = value;
            this.raisePropertyChanged('dynamicControlID');
            this.raisePropertyChanged('DynamicControlID');
        }
    },
    set_DynamicControlID : this.set_dynamicControlID,

    get_dynamicContextKey : function() {
        /// <value type="String">
        /// An arbitrary string value to be passed to the web method.
        /// For example, if the element to be populated is within a
        /// data-bound repeater, this could be the ID of the current row.
        /// </value>
        return this._DynamicContextKey;
    },
    get_DynamicContextKey : this.get_dynamicContextKey,
    set_dynamicContextKey : function(value) {
        if (this._DynamicContextKey != value) {
            this._DynamicContextKey = value;
            this.raisePropertyChanged('dynamicContextKey');
            this.raisePropertyChanged('DynamicContextKey');
        }
    },
    set_DynamicContextKey : this.set_dynamicContextKey,

    get_dynamicServicePath : function() {
        /// <value type="String" mayBeNull="true" optional="true">
        /// The URL of the web service to call.  If the ServicePath is not defined, then we will invoke a PageMethod instead of a web service.
        /// </value>
        return this._DynamicServicePath;
    },
    get_DynamicServicePath : this.get_dynamicServicePath,
    set_dynamicServicePath : function(value) {
        if (this._DynamicServicePath != value) {
            this._DynamicServicePath = value;
            this.raisePropertyChanged('dynamicServicePath');
            this.raisePropertyChanged('DynamicServicePath');
        }
    },
    set_DynamicServicePath : this.set_dynamicServicePath,

    get_dynamicServiceMethod : function() {
        /// <value type="String">
        /// The name of the method to call on the page or web service
        /// </value>
        /// <remarks>
        /// The signature of the method must exactly match the following:
        ///     [WebMethod]
        ///     string DynamicPopulateMethod(string contextKey)
        ///     {
        ///         ...
        ///     }
        /// </remarks>
        return this._DynamicServiceMethod;
    },
    get_DynamicServiceMethod : this.get_dynamicServiceMethod,
    set_dynamicServiceMethod : function(value) {
        if (this._DynamicServiceMethod != value) {
            this._DynamicServiceMethod = value;
            this.raisePropertyChanged('dynamicServiceMethod');
            this.raisePropertyChanged('DynamicServiceMethod');
        }
    },
    set_DynamicServiceMethod : this.set_dynamicServiceMethod,
    
    get_cacheDynamicResults : function() {
        /// <value type="Boolean" mayBeNull="false">
        /// Whether the results of the dynamic population should be cached and
        /// not fetched again after the first load
        /// </value>
        return this._cacheDynamicResults;
    },
    set_cacheDynamicResults : function(value) {
        if (this._cacheDynamicResults != value) {
            this._cacheDynamicResults = value;
            this.raisePropertyChanged('cacheDynamicResults');
        }
    },
    
    add_populated : function(handler) {
        /// <summary>
        /// Add a handler on the populated event
        /// </summary>
        /// <param name="handler" type="Function">
        /// Handler
        /// </param>
        this.get_events().addHandler("populated", handler);
    },
    remove_populated : function(handler) {
        /// <summary>
        /// Remove a handler from the populated event
        /// </summary>
        /// <param name="handler" type="Function">
        /// Handler
        /// </param>
        this.get_events().removeHandler("populated", handler);
    },
    raisePopulated : function(arg) {
        /// <summary>
        /// Raise the populated event
        /// </summary>
        /// <param name="arg" type="Sys.EventArgs">
        /// Event arguments
        /// </param>
        var handler = this.get_events().getHandler("populated");  
        if (handler) handler(this, arg);
    },
    
    add_populating : function(handler) {
        /// <summary>
        /// Add an event handler for the populating event
        /// </summary>
        /// <param name="handler" type="Function" mayBeNull="false">
        /// Event handler
        /// </param>
        /// <returns />
        this.get_events().addHandler('populating', handler);
    },
    remove_populating : function(handler) {
        /// <summary>
        /// Remove an event handler from the populating event
        /// </summary>
        /// <param name="handler" type="Function" mayBeNull="false">
        /// Event handler
        /// </param>
        /// <returns />
        this.get_events().removeHandler('populating', handler);
    },
    raisePopulating : function(eventArgs) {
        /// <summary>
        /// Raise the populating event
        /// </summary>
        /// <param name="eventArgs" type="Sys.CancelEventArgs" mayBeNull="false">
        /// Event arguments for the populating event
        /// </param>
        /// <returns />
        
        var handler = this.get_events().getHandler('populating');
        if (handler) {
            handler(this, eventArgs);
        }
    }
}
AjaxControlToolkit.DynamicPopulateBehaviorBase.registerClass('AjaxControlToolkit.DynamicPopulateBehaviorBase', AjaxControlToolkit.BehaviorBase);


AjaxControlToolkit.ControlBase = function(element) {
    AjaxControlToolkit.ControlBase.initializeBase(this, [element]);
    this._clientStateField = null;
    this._callbackTarget = null;
    this._onsubmit$delegate = Function.createDelegate(this, this._onsubmit);
    this._oncomplete$delegate = Function.createDelegate(this, this._oncomplete);
    this._onerror$delegate = Function.createDelegate(this, this._onerror);
}
AjaxControlToolkit.ControlBase.prototype = {
    initialize : function() {
        AjaxControlToolkit.ControlBase.callBaseMethod(this, "initialize");
        // load the client state if possible
        if (this._clientStateField) {
            this.loadClientState(this._clientStateField.value);
        }
        // attach an event to save the client state before a postback or updatepanel partial postback
        if (typeof(Sys.WebForms)!=="undefined" && typeof(Sys.WebForms.PageRequestManager)!=="undefined") {
            Array.add(Sys.WebForms.PageRequestManager.getInstance()._onSubmitStatements, this._onsubmit$delegate);
        } else {
            $addHandler(document.forms[0], "submit", this._onsubmit$delegate);
        }
    },
    dispose : function() {
        if (typeof(Sys.WebForms)!=="undefined" && typeof(Sys.WebForms.PageRequestManager)!=="undefined") {
            Array.remove(Sys.WebForms.PageRequestManager.getInstance()._onSubmitStatements, this._onsubmit$delegate);
        } else {
            $removeHandler(document.forms[0], "submit", this._onsubmit$delegate);
        }
        AjaxControlToolkit.ControlBase.callBaseMethod(this, "dispose");
    },
    findElement : function(id) {
        // <summary>Finds an element within this control (ScriptControl/ScriptUserControl are NamingContainers);
        return $get(this.get_id() + '_' + id.split(':').join('_'));
    },
    get_clientStateField : function() {
        return this._clientStateField;
    },
    set_clientStateField : function(value) {
        if (this.get_isInitialized()) throw Error.invalidOperation(AjaxControlToolkit.Resources.ExtenderBase_CannotSetClientStateField);
        if (this._clientStateField != value) {
            this._clientStateField = value;
            this.raisePropertyChanged('clientStateField');
        }
    },
    loadClientState : function(value) {
        /// <remarks>override this method to intercept client state loading after a callback</remarks>
    },
    saveClientState : function() {
        /// <remarks>override this method to intercept client state acquisition before a callback</remarks>
        return null;
    },
    _invoke : function(name, args, cb) {
        /// <summary>invokes a callback method on the server control</summary>        
        if (!this._callbackTarget) {
            throw Error.invalidOperation(AjaxControlToolkit.Resources.ExtenderBase_ControlNotRegisteredForCallbacks);
        }
        if (typeof(WebForm_DoCallback)==="undefined") {
            throw Error.invalidOperation(AjaxControlToolkit.Resources.ExtenderBase_PageNotRegisteredForCallbacks);
        }
        var ar = [];
        for (var i = 0; i < args.length; i++) 
            ar[i] = args[i];
        var clientState = this.saveClientState();
        if (clientState != null && !String.isInstanceOfType(clientState)) {
            throw Error.invalidOperation(AjaxControlToolkit.Resources.ExtenderBase_InvalidClientStateType);
        }
        var payload = Sys.Serialization.JavaScriptSerializer.serialize({name:name,args:ar,state:this.saveClientState()});
        WebForm_DoCallback(this._callbackTarget, payload, this._oncomplete$delegate, cb, this._onerror$delegate, true);
    },
    _oncomplete : function(result, context) {
        result = Sys.Serialization.JavaScriptSerializer.deserialize(result);
        if (result.error) {
            throw Error.create(result.error);
        }
        this.loadClientState(result.state);
        context(result.result);
    },
    _onerror : function(message, context) {
        throw Error.create(message);
    },
    _onsubmit : function() {
        if (this._clientStateField) {
            this._clientStateField.value = this.saveClientState();
        }
        return true;
    }    
   
}
AjaxControlToolkit.ControlBase.registerClass("AjaxControlToolkit.ControlBase", Sys.UI.Control);

Type.registerNamespace('AjaxControlToolkit');AjaxControlToolkit.Resources={
"PasswordStrength_InvalidWeightingRatios":"Strength Weighting ratios must have 4 elements","Animation_ChildrenNotAllowed":"AjaxControlToolkit.Animation.createAnimation cannot add child animations to type \"{0}\" that does not derive from AjaxControlToolkit.Animation.ParentAnimation","PasswordStrength_RemainingSymbols":"{0} symbol characters","ExtenderBase_CannotSetClientStateField":"clientStateField can only be set before initialization","RTE_PreviewHTML":"Preview HTML","RTE_JustifyCenter":"Justify Center","PasswordStrength_RemainingUpperCase":"{0} more upper case characters","Animation_TargetNotFound":"AjaxControlToolkit.Animation.Animation.set_animationTarget requires the ID of a Sys.UI.DomElement or Sys.UI.Control.  No element or control could be found corresponding to \"{0}\"","RTE_FontColor":"Font Color","RTE_LabelColor":"Label Color","Common_InvalidBorderWidthUnit":"A unit type of \"{0}\"\u0027 is invalid for parseBorderWidth","RTE_Heading":"Heading","Tabs_PropertySetBeforeInitialization":"{0} cannot be changed before initialization","RTE_OrderedList":"Ordered List","ReorderList_DropWatcherBehavior_NoChild":"Could not find child of list with id \"{0}\"","CascadingDropDown_MethodTimeout":"[Method timeout]","RTE_Columns":"Columns","RTE_InsertImage":"Insert Image","RTE_InsertTable":"Insert Table","RTE_Values":"Values","RTE_OK":"OK","ExtenderBase_PageNotRegisteredForCallbacks":"This Page has not been registered for callbacks","Animation_NoDynamicPropertyFound":"AjaxControlToolkit.Animation.createAnimation found no property corresponding to \"{0}\" or \"{1}\"","Animation_InvalidBaseType":"AjaxControlToolkit.Animation.registerAnimation can only register types that inherit from AjaxControlToolkit.Animation.Animation","RTE_UnorderedList":"Unordered List","ResizableControlBehavior_InvalidHandler":"{0} handler not a function, function name, or function text","Animation_InvalidColor":"Color must be a 7-character hex representation (e.g. #246ACF), not \"{0}\"","RTE_CellColor":"Cell Color","PasswordStrength_RemainingMixedCase":"Mixed case characters","RTE_Italic":"Italic","CascadingDropDown_NoParentElement":"Failed to find parent element \"{0}\"","ValidatorCallout_DefaultErrorMessage":"This control is invalid","RTE_Indent":"Indent","ReorderList_DropWatcherBehavior_CallbackError":"Reorder failed, see details below.\\r\\n\\r\\n{0}","PopupControl_NoDefaultProperty":"No default property supported for control \"{0}\" of type \"{1}\"","RTE_Normal":"Normal","PopupExtender_NoParentElement":"Couldn\u0027t find parent element \"{0}\"","RTE_ViewValues":"View Values","RTE_Legend":"Legend","RTE_Labels":"Labels","RTE_CellSpacing":"Cell Spacing","PasswordStrength_RemainingNumbers":"{0} more numbers","RTE_Border":"Border","RTE_Create":"Create","RTE_BackgroundColor":"Background Color","RTE_Cancel":"Cancel","RTE_JustifyFull":"Justify Full","RTE_JustifyLeft":"Justify Left","RTE_Cut":"Cut","ResizableControlBehavior_CannotChangeProperty":"Changes to {0} not supported","RTE_ViewSource":"View Source","Common_InvalidPaddingUnit":"A unit type of \"{0}\" is invalid for parsePadding","RTE_Paste":"Paste","ExtenderBase_ControlNotRegisteredForCallbacks":"This Control has not been registered for callbacks","Calendar_Today":"Today: {0}","MultiHandleSlider_CssHeightWidthRequired":"You must specify a CSS width and height for all handle styles as well as the rail.","Common_DateTime_InvalidFormat":"Invalid format","ListSearch_DefaultPrompt":"Type to search","CollapsiblePanel_NoControlID":"Failed to find element \"{0}\"","RTE_ViewEditor":"View Editor","RTE_BarColor":"Bar Color","PasswordStrength_DefaultStrengthDescriptions":"NonExistent;Very Weak;Weak;Poor;Almost OK;Barely Acceptable;Average;Good;Strong;Excellent;Unbreakable!","RTE_Inserttexthere":"Insert text here","Animation_UknownAnimationName":"AjaxControlToolkit.Animation.createAnimation could not find an Animation corresponding to the name \"{0}\"","ExtenderBase_InvalidClientStateType":"saveClientState must return a value of type String","Rating_CallbackError":"An unhandled exception has occurred:\\r\\n{0}","Tabs_OwnerExpected":"owner must be set before initialize","DynamicPopulate_WebServiceTimeout":"Web service call timed out","PasswordStrength_RemainingLowerCase":"{0} more lower case characters","Animation_MissingAnimationName":"AjaxControlToolkit.Animation.createAnimation requires an object with an AnimationName property","RTE_JustifyRight":"Justify Right","Tabs_ActiveTabArgumentOutOfRange":"Argument is not a member of the tabs collection","RTE_CellPadding":"Cell Padding","RTE_ClearFormatting":"Clear Formatting","AlwaysVisible_ElementRequired":"AjaxControlToolkit.AlwaysVisibleControlBehavior must have an element","Slider_NoSizeProvided":"Please set valid values for the height and width attributes in the slider\u0027s CSS classes","DynamicPopulate_WebServiceError":"Web Service call failed: {0}","PasswordStrength_StrengthPrompt":"Strength: ","PasswordStrength_RemainingCharacters":"{0} more characters","PasswordStrength_Satisfied":"Nothing more required","RTE_Hyperlink":"Hyperlink","Animation_NoPropertyFound":"AjaxControlToolkit.Animation.createAnimation found no property corresponding to \"{0}\"","PasswordStrength_InvalidStrengthDescriptionStyles":"Text Strength description style classes must match the number of text descriptions.","PasswordStrength_GetHelpRequirements":"Get help on password requirements","PasswordStrength_InvalidStrengthDescriptions":"Invalid number of text strength descriptions specified","RTE_Underline":"Underline","Tabs_PropertySetAfterInitialization":"{0} cannot be changed after initialization","RTE_Rows":"Rows","RTE_Redo":"Redo","RTE_Size":"Size","RTE_Undo":"Undo","RTE_Bold":"Bold","RTE_Copy":"Copy","RTE_Font":"Font","CascadingDropDown_MethodError":"[Method error {0}]","RTE_BorderColor":"Border Color","RTE_Paragraph":"Paragraph","RTE_InsertHorizontalRule":"Insert Horizontal Rule","Common_UnitHasNoDigits":"No digits","RTE_Outdent":"Outdent","Common_DateTime_InvalidTimeSpan":"\"{0}\" is not a valid TimeSpan format","Animation_CannotNestSequence":"AjaxControlToolkit.Animation.SequenceAnimation cannot be nested inside AjaxControlToolkit.Animation.ParallelAnimation","Shared_BrowserSecurityPreventsPaste":"Your browser security settings don\u0027t permit the automatic execution of paste operations. Please use the keyboard shortcut Ctrl+V instead."};
/* END AjaxControlToolkit.ExtenderBase.BaseScripts.js */
/* START AjaxControlToolkit.RoundedCorners.RoundedCornersBehavior.js */
// (c) Copyright Microsoft Corporation.
// This source is subject to the Microsoft Permissive License.
// See http://www.microsoft.com/resources/sharedsource/licensingbasics/sharedsourcelicenses.mspx.
// All other rights reserved.


/// <reference name="MicrosoftAjax.debug.js" />
/// <reference name="MicrosoftAjaxTimer.debug.js" />
/// <reference name="MicrosoftAjaxWebForms.debug.js" />
/// <reference path="../ExtenderBase/BaseScripts.js" />
/// <reference path="../Common/Common.js" />


Type.registerNamespace('AjaxControlToolkit');

AjaxControlToolkit.BoxCorners = function() {
    /// <summary>
    /// Corners of an element
    /// </summary>
    /// <field name="None" type="Number" integer="true" />
    /// <field name="TopLeft" type="Number" integer="true" />
    /// <field name="TopRight" type="Number" integer="true" />
    /// <field name="BottomRight" type="Number" integer="true" />
    /// <field name="BottomLeft" type="Number" integer="true" />
    /// <field name="Top" type="Number" integer="true" />
    /// <field name="Right" type="Number" integer="true" />
    /// <field name="Bottom" type="Number" integer="true" />
    /// <field name="Left" type="Number" integer="true" />
    /// <field name="All" type="Number" integer="true" />
    throw Error.invalidOperation();
}
AjaxControlToolkit.BoxCorners.prototype = {
    None        : 0x00,

    TopLeft     : 0x01,
    TopRight    : 0x02,
    BottomRight : 0x04,
    BottomLeft  : 0x08,
    
    Top         : 0x01 | 0x02,
    Right       : 0x02 | 0x04,
    Bottom      : 0x04 | 0x08,
    Left        : 0x08 | 0x01,
    All         : 0x01 | 0x02 | 0x04 | 0x08
}
AjaxControlToolkit.BoxCorners.registerEnum("AjaxControlToolkit.BoxCorners", true);


AjaxControlToolkit.RoundedCornersBehavior = function(element) {
    /// <summary>
    /// The RoundedCornersBehavior rounds the corners of its target element
    /// </summary>
    /// <param name="element" type="Sys.UI.DomElement" domElement="true">
    /// DOM element associated with the behavior
    /// </param>
    AjaxControlToolkit.RoundedCornersBehavior.initializeBase(this, [element]);

    this._corners = AjaxControlToolkit.BoxCorners.All;
    this._radius = 5;
    this._color = null;
    this._parentDiv = null;
    this._originalStyle = null;
    this._borderColor = null;
    this._isDirty = true;
}
AjaxControlToolkit.RoundedCornersBehavior.prototype = {
    initialize: function() {
        /// <summary>
        /// Initialize the behavior
        /// </summary>
        AjaxControlToolkit.RoundedCornersBehavior.callBaseMethod(this, 'initialize');
        this.update();
    },

    dispose: function() {
        /// <summary>
        /// Dispose the behavior
        /// </summary>

        this.disposeParentDiv();
        AjaxControlToolkit.RoundedCornersBehavior.callBaseMethod(this, 'dispose');
    },

    update: function() {
        /// <summary>
        /// Create the surrounding div that will have rounded corners
        /// </summary>
        var e = this.get_element();

        if (!e || !this._isDirty || this.get_isUpdating()) return;

        this.disposeParentDiv();

        var color = this.getBackgroundColor();
        var originalWidth = e.offsetWidth;
        var newParent = e.cloneNode(false);

        // move all children into the new div.
        this.moveChildren(e, newParent);

        // modify the target element to be transparent
        // and set up the new parent
        this._originalStyle = e.style.cssText;
        e.style.backgroundColor = "transparent";
        e.style.verticalAlign = "top";
        e.style.padding = "0";
        e.style.overflow = "";
        e.style.className = "";
        // Don't assume there is a numerical value for height.  A height of "auto" is possible.
        if (e.style.height && e.style.height != "auto") {
            // Increase the height to account for the rounded corners
            e.style.height = parseInt($common.getCurrentStyle(e, 'height')) + (this._radius * 2) + "px";
        } else {
            // Note: Do NOT use $common.getCurrentStyle in the check below
            // because that breaks the work-around
            if (!e.style.width && (0 < originalWidth)) {
                // The following line works around a problem where IE renders the first
                // rounded DIV about 6 pixels too high if e doesn't have a width or height
                e.style.width = originalWidth + "px";
            }
        }

        // these are properties we don't want cloned down to the new parent
        newParent.style.position = "";
        newParent.style.border = "";
        newParent.style.margin = "";
        newParent.style.width = "100%";
        newParent.id = "";
        newParent.removeAttribute("control");

        if (this._borderColor) {
            newParent.style.borderTopStyle = "none";
            newParent.style.borderBottomStyle = "none";
            newParent.style.borderLeftStyle = "solid";
            newParent.style.borderRightStyle = "solid";
            newParent.style.borderLeftColor = this._borderColor;
            newParent.style.borderRightColor = this._borderColor;
            newParent.style.borderLeftWidth = "1px";
            newParent.style.borderRightWidth = "1px";
            if (this._radius == 0) {
                newParent.style.borderTopStyle = "solid";
                newParent.style.borderBottomStyle = "solid";
                newParent.style.borderTopColor = this._borderColor;
                newParent.style.borderBottomColor = this._borderColor;
                newParent.style.borderTopWidth = "1px";
                newParent.style.borderBottomWidth = "1px";
            }
        } else {
            newParent.style.borderTopStyle = "none";
            newParent.style.borderBottomStyle = "none";
            newParent.style.borderLeftStyle = "none";
            newParent.style.borderRightStyle = "none";
        }

        // build a set of steps on each end to fake the corners.
        //  ------- (step 0)
        //  -------- (step n-1)
        //  --------- (step n)
        //  XXXXXXXXX (inner div)
        //  XXXXXXXXX
        //  --------- (bottom step n)
        //  --------  (bottom step n-1)
        //  ------    (bottom step 0)

        var lastDiv = null;
        var radius = this._radius;
        var lines = this._radius;
        var lastDelta = 0;

        for (var i = lines; i > 0; i--) {

            // figure out how much we'll need to subtract from each item
            var angle = Math.acos(i / radius);
            var delta = radius - Math.round(Math.sin(angle) * radius);

            // build a 1 pixel tall div
            // that's delta pixels shorter on each end.

            // add the top one
            var newDiv = document.createElement("DIV");
            newDiv.__roundedDiv = true;
            newDiv.style.backgroundColor = color;
            newDiv.style.marginLeft = delta + "px";
            newDiv.style.marginRight = (delta - (this._borderColor ? 2 : 0)) + "px";
            newDiv.style.height = "1px";
            newDiv.style.fontSize = "1px"; // workaround for IE wierdness with 1px divs.
            newDiv.style.overflow = "hidden";

            if (this._borderColor) {
                newDiv.style.borderLeftStyle = "solid";
                newDiv.style.borderRightStyle = "solid";
                newDiv.style.borderLeftColor = this._borderColor;
                newDiv.style.borderRightColor = this._borderColor;

                var offset = Math.max(0, lastDelta - delta - 1);
                newDiv.style.borderLeftWidth = (offset + 1) + "px";
                newDiv.style.borderRightWidth = (offset + 1) + "px";

                if (i == lines) {
                    newDiv.__roundedDivNoBorder = true;
                    newDiv.style.backgroundColor = this._borderColor;
                }
            }

            e.insertBefore(newDiv, lastDiv);

            var topDiv = newDiv;

            // add the bottom one one
            newDiv = newDiv.cloneNode(true);
            newDiv.__roundedDiv = true;

            e.insertBefore(newDiv, lastDiv);

            var bottomDiv = newDiv;

            lastDiv = newDiv;
            lastDelta = delta;

            if (!this.isCornerSet(AjaxControlToolkit.BoxCorners.TopLeft)) {
                topDiv.style.marginLeft = "0";
                if (this._borderColor) {
                    topDiv.style.borderLeftWidth = "1px";
                }
            }
            if (!this.isCornerSet(AjaxControlToolkit.BoxCorners.TopRight)) {
                topDiv.style.marginRight = "0";
                if (this._borderColor) {
                    topDiv.style.borderRightWidth = "1px";
                    topDiv.style.marginRight = "-2px";
                }
            }
            if (!this.isCornerSet(AjaxControlToolkit.BoxCorners.BottomLeft)) {
                bottomDiv.style.marginLeft = "0";
                if (this._borderColor) {
                    bottomDiv.style.borderLeftWidth = "1px";
                }
            }
            if (!this.isCornerSet(AjaxControlToolkit.BoxCorners.BottomRight)) {
                bottomDiv.style.marginRight = "0";
                if (this._borderColor) {
                    bottomDiv.style.borderRightWidth = "1px";
                    bottomDiv.style.marginRight = "-2px";
                }
            }
        }

        // finally, add the newParent (which has all the original content)
        // into the div.
        e.insertBefore(newParent, lastDiv);
        this._parentDiv = newParent;
        this._isDirty = false;
    },

    disposeParentDiv: function() {
        /// <summary>
        /// Dispose the surrounding div with rounded corners
        /// </summary>

        if (this._parentDiv) {
            // clean up the divs we added.
            var e = this.get_element();
            var children = e.childNodes;
            for (var i = children.length - 1; i >= 0; i--) {
                var child = children[i];
                if (child) {
                    if (child == this._parentDiv) {
                        this.moveChildren(child, e);
                    }
                    try {
                        e.removeChild(child);
                    } catch (e) {
                        // Safari likes to throw NOT_FOUND_ERR (DOMException 8)
                        // but it seems to work fine anyway.
                    }
                }
            }

            // restore the original style
            if (this._originalStyle) {
                e.style.cssText = this._originalStyle;
                this._originalStyle = null;
            }
            this._parentDiv = null;
        }
    },

    getBackgroundColor: function() {
        /// <summary>
        /// Get the background color of the target element
        /// </summary>
        if (this._color) {
            return this._color;
        }
        return $common.getCurrentStyle(this.get_element(), 'backgroundColor');
    },

    moveChildren: function(src, dest) {
        /// <summary>
        /// Move the child nodes from one element to another
        /// </summary>
        /// <param name="src" type="Sys.UI.DomElement" domElement="true">
        /// DOM Element
        /// </param>
        /// <param name="dest" type="Sys.UI.DomElement" domElement="true">
        /// DOM Element
        /// </param>

        var moveCount = 0;
        while (src.hasChildNodes()) {
            var child = src.childNodes[0];
            child = src.removeChild(child);
            dest.appendChild(child);
            moveCount++;
        }
        return moveCount;
    },

    isCornerSet: function(corner) {
        /// <summary>
        /// Check whether the a flag for this corner has been set
        /// </summary>
        /// <param name="corner" type="AjaxControlTooolkit.BoxCorners">
        /// Corner to check
        /// </param>
        /// <returns type="Boolean">
        /// True if it is included in the flags, false otherwise
        /// </returns>
        return (this._corners & corner) != AjaxControlToolkit.BoxCorners.None;
    },

    setCorner: function(corner, value) {
        /// <summary>
        /// Set a corner as one that should be rounded
        /// </summary>
        /// <param name="corner" type="AjaxControlToolkit.BoxCorners">
        /// Corner to set
        /// </param>
        /// <param name="value" type="Boolean">
        /// True to set the value, False to clear it
        /// </param>
        if (value) {
            this.set_Corners(this._corners | corner);
        } else {
            this.set_Corners(this._corners & ~corner);
        }
    },
    
    get_Color: function() {
        /// <value type="String">
        /// The background color of the rounded area an corners.  By default this picks up the background color of the panel that it is attached to.
        /// </value>
        return this._color;
    },
    set_Color: function(value) {
        if (value != this._color) {
            this._color = value;
            this._isDirty = true;
            this.update();
            this.raisePropertyChanged('Color');
        }
    },

    get_Radius: function() {
        /// <value type="Number" integer="true">
        /// The radius of the corners (and height of the added area).  Default is 5.
        /// </value>
        return this._radius;
    },
    set_Radius: function(value) {
        if (value != this._radius) {
            this._radius = value;
            this._isDirty = true;
            this.update();
            this.raisePropertyChanged('Radius');
        }
    },

    get_Corners: function() {
        /// <value type="AjaxControlToolkit.BoxCorners">
        /// Corners that should be rounded
        /// </value>
        return this._corners;
    },
    set_Corners: function(value) {
        if (value != this._corners) {
            this._corners = value;
            this._isDirty = true;
            this.update();
            this.raisePropertyChanged("Corners");
        }
    },

    get_BorderColor: function() {
        /// <value type="String">
        /// Color of the border (and hence the rounded corners)
        /// </value>
        return this._borderColor;
    },
    set_BorderColor: function(value) {
        if (value != this._borderColor) {
            this._borderColor = value;
            this._isDirty = true;
            this.update();
            this.raisePropertyChanged("BorderColor");
        }
    }
}
AjaxControlToolkit.RoundedCornersBehavior.registerClass('AjaxControlToolkit.RoundedCornersBehavior', AjaxControlToolkit.BehaviorBase);

/* END AjaxControlToolkit.RoundedCorners.RoundedCornersBehavior.js */
/* START AjaxControlToolkit.Compat.Timer.Timer.js */
// (c) Copyright Microsoft Corporation.
// This source is subject to the Microsoft Permissive License.
// See http://www.microsoft.com/resources/sharedsource/licensingbasics/sharedsourcelicenses.mspx.
// All other rights reserved.


/// <reference name="MicrosoftAjax.debug.js" />
/// <reference name="MicrosoftAjaxTimer.debug.js" />
/// <reference name="MicrosoftAjaxWebForms.debug.js" />


///////////////////////////////////////////////////////////////////////////////
// Sys.Timer

Sys.Timer = function() {
    Sys.Timer.initializeBase(this);
    
    this._interval = 1000;
    this._enabled = false;
    this._timer = null;
}

Sys.Timer.prototype = {
    get_interval: function() {
        
        return this._interval;
    },
    set_interval: function(value) {
        
        if (this._interval !== value) {
            this._interval = value;
            this.raisePropertyChanged('interval');
            
            if (!this.get_isUpdating() && (this._timer !== null)) {
                this._stopTimer();
                this._startTimer();
            }
        }
    },
    
    get_enabled: function() {
        
        return this._enabled;
    },
    set_enabled: function(value) {
        
        if (value !== this.get_enabled()) {
            this._enabled = value;
            this.raisePropertyChanged('enabled');
            if (!this.get_isUpdating()) {
                if (value) {
                    this._startTimer();
                }
                else {
                    this._stopTimer();
                }
            }
        }
    },

    
    add_tick: function(handler) {
        
        
        this.get_events().addHandler("tick", handler);
    },

    remove_tick: function(handler) {
        
        
        this.get_events().removeHandler("tick", handler);
    },

    dispose: function() {
        this.set_enabled(false);
        this._stopTimer();
        
        Sys.Timer.callBaseMethod(this, 'dispose');
    },
    
    updated: function() {
        Sys.Timer.callBaseMethod(this, 'updated');

        if (this._enabled) {
            this._stopTimer();
            this._startTimer();
        }
    },

    _timerCallback: function() {
        var handler = this.get_events().getHandler("tick");
        if (handler) {
            handler(this, Sys.EventArgs.Empty);
        }
    },

    _startTimer: function() {
        this._timer = window.setInterval(Function.createDelegate(this, this._timerCallback), this._interval);
    },

    _stopTimer: function() {
        window.clearInterval(this._timer);
        this._timer = null;
    }
}

Sys.Timer.descriptor = {
    properties: [   {name: 'interval', type: Number},
                    {name: 'enabled', type: Boolean} ],
    events: [ {name: 'tick'} ]
}

Sys.Timer.registerClass('Sys.Timer', Sys.Component);

/* END AjaxControlToolkit.Compat.Timer.Timer.js */
/* START AjaxControlToolkit.DropShadow.DropShadowBehavior.js */
// (c) Copyright Microsoft Corporation.
// This source is subject to the Microsoft Permissive License.
// See http://www.microsoft.com/resources/sharedsource/licensingbasics/sharedsourcelicenses.mspx.
// All other rights reserved.


/// <reference name="MicrosoftAjax.debug.js" />
/// <reference name="MicrosoftAjaxTimer.debug.js" />
/// <reference name="MicrosoftAjaxWebForms.debug.js" />
/// <reference path="../ExtenderBase/BaseScripts.js" />
/// <reference path="../Common/Common.js" />
/// <reference path="../RoundedCorners/RoundedCornersBehavior.js" />
/// <reference path="../Compat/Timer/Timer.js" />


Type.registerNamespace('AjaxControlToolkit');

AjaxControlToolkit.DropShadowBehavior = function(element) {
    /// <summary>
    /// The DropShadowBehavior is used to attach a drop shadow to the element
    /// </summary>
    /// <param name="element" type="Sys.UI.DomElement" domElement="true">
    /// DOM Element the behavior is associated with
    /// </param>
    AjaxControlToolkit.DropShadowBehavior.initializeBase(this, [element]);

    // our property values
    this._opacity = 1.0;
    this._width = 5;

    // the div we create for the shadow.
    this._shadowDiv = null;

    // our timer for tracking position
    this._trackPosition = null;
    this._trackPositionDelay = 50;
    this._timer = null;
    this._tickHandler = null;
    this._roundedBehavior = null;
    this._shadowRoundedBehavior = null;

    this._rounded = false;
    this._radius = 5;

    // our cache of our last size and position for tracking
    this._lastX = null;
    this._lastY = null;
    this._lastW = null;
    this._lastH = null;
}
AjaxControlToolkit.DropShadowBehavior.prototype = {
    initialize : function() {
        /// <summary>
        /// Initialize the behavior
        /// </summary>
        AjaxControlToolkit.DropShadowBehavior.callBaseMethod(this, 'initialize');
        
        var e = this.get_element();

        // flip the styles position to relative so that we z-order properly.
        if ($common.getCurrentStyle(e, 'position', e.style.position) != "absolute") {
            e.style.position = "relative";
        }

        // set up our initial state
        if (this._rounded) {
            this.setupRounded();
        }
        if (this._trackPosition) {
            this.startTimer();
        }
        this.setShadow();
    },

    dispose : function() {
        /// <summary>
        /// Dispose the behavior
        /// </summary>
        this.stopTimer();
        this.disposeShadowDiv();
        AjaxControlToolkit.DropShadowBehavior.callBaseMethod(this, 'dispose');
    },

    buildShadowDiv : function() {
        /// <summary>
        /// Create the div that we'll use as the shadow
        /// </summary>
        
        var e = this.get_element();

        if (!this.get_isInitialized() || !e || !this._width) return;

        var div = document.createElement("DIV");
        div.style.backgroundColor = "black";
        div.style.position= "absolute";
                
        if (e.id) {
            div.id = e.id + "_DropShadow";
        }

        // initialize a control around it, and
        // set up the opacity behavior and rounding
        this._shadowDiv = div;

       e.parentNode.appendChild(div);

       if (this._rounded ) {
            this._shadowDiv.style.height = Math.max(0, e.offsetHeight - (2*this._radius)) + "px";
            if (!this._shadowRoundedBehavior) {
                this._shadowRoundedBehavior = $create(AjaxControlToolkit.RoundedCornersBehavior, {"Radius": this._radius}, null, null, this._shadowDiv);
            } else {
                this._shadowRoundedBehavior.set_Radius(this._radius);
            }
        } else if (this._shadowRoundedBehavior) {
            this._shadowRoundedBehavior.set_Radius(0);
        }

        if (this._opacity != 1.0) {
            this.setupOpacity();
        }

        this.setShadow(false, true);
        this.updateZIndex();
    },

    disposeShadowDiv : function() {
        /// <summary>
        /// Dispose of the div we use as the shadow
        /// </summary>

        if (this._shadowDiv) {
            // on page teardown (or in an update panel, this may already
            // be gone)
            //
            if (this._shadowDiv.parentNode) {
                this._shadowDiv.parentNode.removeChild(this._shadowDiv);
            }            
            this._shadowDiv = null;
        }
        
        if (this._shadowRoundedBehavior) {
            this._shadowRoundedBehavior.dispose();
            this._shadowRoundedBehavior = null;            
        }
    },

    onTimerTick : function() {
        /// <summary>
        /// Timer's tick handler that is used to position the shadow when its target moves
        /// </summary>
        this.setShadow();
    },

    startTimer : function() {
        /// <summary>
        /// Start the timer (and hence start tracking the bounds of the target element)
        /// </summary>

        if (!this._timer) {
            if (!this._tickHandler) {
                this._tickHandler = Function.createDelegate(this, this.onTimerTick);
            }
            this._timer = new Sys.Timer();
            this._timer.set_interval(this._trackPositionDelay);
            this._timer.add_tick(this._tickHandler);
            this._timer.set_enabled(true);
        }
    },

    stopTimer : function() {
        /// <summary>
        /// Stop the timer (and hence stop tracking the bounds of the target element)
        /// </summary>

        // on stop, just clean the thing up completely
        if (this._timer) {
            this._timer.remove_tick(this._tickHandler);
            this._timer.set_enabled(false);
            this._timer.dispose();
            this._timer = null;
        }
    },

    setShadow : function(force, norecurse) {
        /// <summary>
        /// This function does the heavy lifting of positioning and sizing the shadow.
        /// It caches values to avoid extra work - it's called on a timer so we need to
        /// keep it light weight.
        /// </summary>
        /// <param name="force" type="Boolean">
        /// Whether to force the bounds change
        /// </param>
        /// <param name="norecurse" type="Boolean">
        /// Whether to recurse if we need to recreate the shadow div
        /// </param>

        var e = this.get_element();
        if (!this.get_isInitialized() || !e || (!this._width && !force)) return;

        var existingShadow = this._shadowDiv;
        if (!existingShadow) {
            this.buildShadowDiv();
        }

        // Consider calling offsetLeft first to avoid recursive math of location?                
        var location = $common.getLocation(e);
        
        if (force || this._lastX != location.x || this._lastY != location.y || !existingShadow) {
            this._lastX = location.x;
            this._lastY = location.y;

            var w = this.get_Width();
            
            // to work around setlocation bug because elements embedded within fixed\absolute
            // elements are set relative to their parent instead of the window
            if((e.parentNode.style.position == "absolute") || (e.parentNode.style.position == "fixed") )
            {
                location.x = w;
                location.y = w;
            }
            else if (e.parentNode.style.position == "relative")
            {
                location.x = w;
                var paddingTop = e.parentNode.style.paddingTop;
                paddingTop = paddingTop.replace("px", "");
                
                var intPaddingTop = 0;
                intPaddingTop = parseInt(paddingTop);
                 
                location.y = w + intPaddingTop;
            }
            else
            {
                location.x += w;
                location.y += w;
            }
            
            $common.setLocation(this._shadowDiv, location);
        }

        var h = e.offsetHeight;
        var w = e.offsetWidth;

        if (force || h != this._lastH || w != this._lastW || !existingShadow) {
            this._lastW = w;
            this._lastH = h;
            if (!this._rounded || !existingShadow || norecurse) {
               this._shadowDiv.style.width = w + "px";
               this._shadowDiv.style.height = h + "px";
            } else {
                // recurse if we need to redo the div
                this.disposeShadowDiv();
                this.setShadow();
            }
        }

        if (this._shadowDiv) {
            this._shadowDiv.style.visibility = $common.getCurrentStyle(e, 'visibility');
        }
    },

    setupOpacity : function() {
        /// <summary>
        /// Set the opacity of the shadow div
        /// </summary>
        if (this.get_isInitialized() && this._shadowDiv) {
            $common.setElementOpacity(this._shadowDiv, this._opacity);
        }
    },

    setupRounded : function() {
        /// <summary>
        /// Demand create and initialize the RoundedCornersBehavior
        /// </summary>
        
        if (!this._roundedBehavior && this._rounded) {
            this._roundedBehavior = $create(AjaxControlToolkit.RoundedCornersBehavior, null, null, null, this.get_element());            
        }
        if (this._roundedBehavior) {
            this._roundedBehavior.set_Radius(this._rounded ? this._radius : 0);
        }
    },

    updateZIndex : function() {
        /// <summary>
        /// Update the z-Index so the shadow div remains behind the target element
        /// </summary>

        if (!this._shadowDiv) return;
        
        var e = this.get_element();
        var targetZIndex = e.style.zIndex;
        var shadowZIndex = this._shadowDiv.style.zIndex;

        if (shadowZIndex && targetZIndex && targetZIndex > shadowZIndex) {
            return;
        } else {
           targetZIndex = Math.max(2, targetZIndex);
           shadowZIndex = targetZIndex - 1;
        }
        e.style.zIndex = targetZIndex;
        this._shadowDiv.style.zIndex = shadowZIndex;
    },

    updateRoundedCorners : function() {
        /// <summary>
        /// Update the RoundedCorndersBehavior and recreate the shadow div so its corners are rounded as well
        /// </summary>
        if (this.get_isInitialized()) {
            this.setupRounded();
            this.disposeShadowDiv();
            this.setShadow();
        }
    },

    get_Opacity : function() {
        /// <value type="Number">
        /// The opacity of the drop shadow, from 0 (fully transparent) to 1.0 (fully opaque). The default value is .5.
        /// </value>
        return this._opacity;
    },
    set_Opacity : function(value) {
        if (this._opacity != value) {
            this._opacity = value;
            this.setupOpacity();
            this.raisePropertyChanged('Opacity');
        }
    },

    get_Rounded : function() {
        /// <value type="Boolean">
        /// Whether or not the corners of the target and drop shadow should be rounded
        /// </value>
        return this._rounded;
    },
    set_Rounded : function(value) {
        if (value != this._rounded) {
            this._rounded = value;
            this.updateRoundedCorners();
            this.raisePropertyChanged('Rounded');
        }
    },

    get_Radius : function() {
        /// <value type="Number" integer="true">
        /// Radius, in pixels, of the rounded corners
        /// </value>
        return this._radius;
    },
    set_Radius : function(value) {
        if (value != this._radius) {
            this._radius = value;
            this.updateRoundedCorners();
            this.raisePropertyChanged('Radius');
        }
    },

    get_Width : function() {
        /// <value type="Number" integer="true">
        /// Width in pixels of the drop shadow.  The default value is 5 pixels.
        /// </value>
        return this._width;
    },
    set_Width : function(value) {
        if (value != this._width) {
            this._width = value;
            
            if (this._shadowDiv) {
                $common.setVisible(this._shadowDiv, value > 0);
            }
            
            this.setShadow(true);
            this.raisePropertyChanged('Width');
        }
    },

    get_TrackPositionDelay : function() {
        /// <value type="Number">
        /// Length of the timer interval used when tracking the position of the target
        /// </value>
        return this._trackPositionDelay;
    },
    set_TrackPositionDelay : function(value) {
        if (value != this._trackPositionDelay) {
            this._trackPositionDelay = value;
            if (this._trackPosition) {
                this.stopTimer();
                this.startTimer();
            }
            this.raisePropertyChanged('TrackPositionDelay');
        }
    },

    get_TrackPosition : function() {
        /// <value type="Boolean">
        /// Whether the drop shadow should track the position of the panel it is attached to. Use this if the panel is absolutely positioned or will otherwise move.
        /// </value>
        return this._trackPosition;
    },
    set_TrackPosition : function(value) {
        if (value != this._trackPosition) {
            this._trackPosition = value;
            if (this.get_element()) {
                if (value) {
                    this.startTimer();
                } else {
                    this.stopTimer();
                }
            }
            this.raisePropertyChanged('TrackPosition');
        }
    }
}
AjaxControlToolkit.DropShadowBehavior.registerClass('AjaxControlToolkit.DropShadowBehavior', AjaxControlToolkit.BehaviorBase);
//    getDescriptor : function() {
//        var td = AjaxControlToolkit.DropShadowBehavior.callBaseMethod(this, 'getDescriptor');
//        td.addProperty('Opacity', Number);
//        td.addProperty('Width', Number);
//        td.addProperty('TrackPosition', Boolean);
//        td.addProperty('TrackPositionDelay', Number);
//        td.addProperty('Rounded', Boolean);
//        td.addProperty('Radius', Number);
//        return td;
//    },

/* END AjaxControlToolkit.DropShadow.DropShadowBehavior.js */
/* START AjaxControlToolkit.DynamicPopulate.DynamicPopulateBehavior.js */
// (c) Copyright Microsoft Corporation.
// This source is subject to the Microsoft Permissive License.
// See http://www.microsoft.com/resources/sharedsource/licensingbasics/sharedsourcelicenses.mspx.
// All other rights reserved.


/// <reference name="MicrosoftAjax.debug.js" />
/// <reference name="MicrosoftAjaxTimer.debug.js" />
/// <reference name="MicrosoftAjaxWebForms.debug.js" />
/// <reference path="../ExtenderBase/BaseScripts.js" />
/// <reference path="../Common/Common.js" />


Type.registerNamespace('AjaxControlToolkit');

AjaxControlToolkit.DynamicPopulateBehavior = function(element) {
    /// <summary>
    /// The DynamicPopulateBehavior replaces the contents of an element with the result of a web service or page method call.  The method call returns a string of HTML that is inserted as the children of the target element.
    /// </summary>
    /// <param name="element" type="Sys.UI.DomElement" domElement="true">
    /// DOM Element the behavior is associated with
    /// </param>
    AjaxControlToolkit.DynamicPopulateBehavior.initializeBase(this, [element]);
    
    this._servicePath = null;
    this._serviceMethod = null;
    this._contextKey = null;
    this._cacheDynamicResults = false;
    this._populateTriggerID = null;
    this._setUpdatingCssClass = null;
    this._clearDuringUpdate = true;
    this._customScript = null;
    
    this._clickHandler = null;
    
    this._callID = 0;
    this._currentCallID = -1;
    
    // Whether or not we've already populated (used for cacheDynamicResults)
    this._populated = false;
}
AjaxControlToolkit.DynamicPopulateBehavior.prototype = {
    initialize : function() {
        /// <summary>
        /// Initialize the behavior
        /// </summary>
        AjaxControlToolkit.DynamicPopulateBehavior.callBaseMethod(this, 'initialize');
        $common.prepareHiddenElementForATDeviceUpdate();        
    
        // hook up the trigger if we have one.
        if (this._populateTriggerID) {
            var populateTrigger = $get(this._populateTriggerID);
            if (populateTrigger) {
                this._clickHandler = Function.createDelegate(this, this._onPopulateTriggerClick);
                $addHandler(populateTrigger, "click", this._clickHandler);
            }
        }
    },
    
    dispose : function() {
        /// <summary>
        /// Dispose the behavior
        /// </summary>

        // clean up the trigger event.
        if (this._populateTriggerID && this._clickHandler) {
            var populateTrigger = $get(this._populateTriggerID);
            if (populateTrigger) {
                $removeHandler(populateTrigger, "click", this._clickHandler);
            }
            this._populateTriggerID = null;
            this._clickHandler = null;
        }
       
        AjaxControlToolkit.DynamicPopulateBehavior.callBaseMethod(this, 'dispose');
    },
    
    populate : function(contextKey) {
        /// <summary>
        /// Get the dymanic content and use it to populate the target element
        /// </summary>
        /// <param name="contextKey" type="String" mayBeNull="true" optional="true">
        /// An arbitrary string value to be passed to the web method. For example, if the element to be
        /// populated is within a data-bound repeater, this could be the ID of the current row.
        /// </param>
        
        // Don't populate if we already cached the results
        if (this._populated && this._cacheDynamicResults) {
            return;
        }

        // Initialize the population if this is the very first call
        if (this._currentCallID == -1) {
            var eventArgs = new Sys.CancelEventArgs();
            this.raisePopulating(eventArgs);
            if (eventArgs.get_cancel()) {
                return;
            }
            this._setUpdating(true);
        }
        
        // Either run the custom population script or invoke the web service
        if (this._customScript) {
            // Call custom javascript call to populate control
            var scriptResult = eval(this._customScript);
            this._setTargetHtml(scriptResult); 
            this._setUpdating(false);
         } else {
             this._currentCallID = ++this._callID;
             if (this._servicePath && this._serviceMethod) {
                Sys.Net.WebServiceProxy.invoke(this._servicePath, this._serviceMethod, false,
                    { contextKey:(contextKey ? contextKey : this._contextKey) },
                    Function.createDelegate(this, this._onMethodComplete), Function.createDelegate(this, this._onMethodError),
                    this._currentCallID);
                $common.updateFormToRefreshATDeviceBuffer();
             }
        }
    },

    _onMethodComplete : function (result, userContext, methodName) {
        /// <summary>
        /// Callback used when the populating service returns successfully
        /// </summary>
        /// <param name="result" type="Object" mayBeNull="">
        /// The data returned from the Web service method call
        /// </param>
        /// <param name="userContext" type="Object">
        /// The context information that was passed when the Web service method was invoked
        /// </param>        
        /// <param name="methodName" type="String">
        /// The Web service method that was invoked
        /// </param>

        // ignore if it's not the current call.
        if (userContext != this._currentCallID) return;

        this._setTargetHtml(result);

        this._setUpdating(false);
    },

    _onMethodError : function(webServiceError, userContext, methodName) {
        /// <summary>
        /// Callback used when the populating service fails
        /// </summary>
        /// <param name="webServiceError" type="Sys.Net.WebServiceError">
        /// Web service error
        /// </param>
        /// <param name="userContext" type="Object">
        /// The context information that was passed when the Web service method was invoked
        /// </param>        
        /// <param name="methodName" type="String">
        /// The Web service method that was invoked
        /// </param>

        // ignore if it's not the current call.
        if (userContext != this._currentCallID) return;

        if (webServiceError.get_timedOut()) {
            this._setTargetHtml(AjaxControlToolkit.Resources.DynamicPopulate_WebServiceTimeout);
        } else {
            this._setTargetHtml(String.format(AjaxControlToolkit.Resources.DynamicPopulate_WebServiceError, webServiceError.get_statusCode()));
        }

        this._setUpdating(false);
    },

    _onPopulateTriggerClick : function() {
        /// <summary>
        /// Handler for the element described by PopulateTriggerID's click event
        /// </summary>

        // just call through to the trigger.
        this.populate(this._contextKey);
    },
    
    _setUpdating : function(updating) {
        /// <summary>
        /// Toggle the display elements to indicate if they are being updated or not
        /// </summary>
        /// <param name="updating" type="Boolean">
        /// Whether or not the display should indicated it is being updated
        /// </param>

        this.setStyle(updating);
        
        if (!updating) {
            this._currentCallID = -1;
            this._populated = true;
            this.raisePopulated(this, Sys.EventArgs.Empty);
        }
    },
    
    _setTargetHtml : function(value) {
        /// <summary>
        /// Populate the target element with the given value
        /// </summary>
        /// <param name="value" type="String">
        /// The data to populate the target element.
        /// </param>
        
        // Make sure the element is still accessible
        var e = this.get_element()
        if (e) {
            // Use value for input elements; otherwise innerHTML
            if (e.tagName == "INPUT") {
                e.value = value;
            } else {
                e.innerHTML = value;
            }
        }
    },
    
    setStyle : function(updating) {
        /// <summary>
        /// Set the style of the display
        /// </summary>
        /// <param name="updating" type="Boolean">
        /// Whether or not the display is being updated
        /// </param>
        
        var e = this.get_element();
        if (this._setUpdatingCssClass) {
            if (!updating) {
                e.className = this._oldCss;
                this._oldCss = null;
            } else {
                this._oldCss = e.className;
                e.className = this._setUpdatingCssClass;
            }
        }
        
        if (updating && this._clearDuringUpdate) {
            this._setTargetHtml("");
        }
    },
    
    get_ClearContentsDuringUpdate : function() {
        /// <value type="Boolean">
        /// Whether the contents of the target should be cleared when an update begins
        /// </value>
        return this._clearDuringUpdate;
    },
    set_ClearContentsDuringUpdate : function(value) {
        if (this._clearDuringUpdate != value) {
            this._clearDuringUpdate = value;
            this.raisePropertyChanged('ClearContentsDuringUpdate');
        }
    },
    
    get_ContextKey : function() {
        /// <value type="String">
        /// An arbitrary string value to be passed to the web method.
        /// For example, if the element to be populated is within a
        /// data-bound repeater, this could be the ID of the current row.
        /// </value>
        return this._contextKey;
    },
    set_ContextKey : function(value) {
        if (this._contextKey != value) {
            this._contextKey = value;
            this.raisePropertyChanged('ContextKey');
        }
    },
    
    get_PopulateTriggerID : function() {
        /// <value type="String" mayBeNull="true" optional="true">
        /// Name of an element that triggers the population of the target when clicked
        /// </value>
        return this._populateTriggerID;
    },
    set_PopulateTriggerID : function(value) {
        if (this._populateTriggerID != value) {
            this._populateTriggerID = value;
            this.raisePropertyChanged('PopulateTriggerID');
        }
    },
    
    get_ServicePath : function() {
        /// <value type="String" mayBeNull="true" optional="true">
        /// The URL of the web service to call.  If the ServicePath is not defined, then we will invoke a PageMethod instead of a web service.
        /// </value>
        return this._servicePath;
    },
    set_ServicePath : function(value) {
        if (this._servicePath != value) {
            this._servicePath = value;
            this.raisePropertyChanged('ServicePath');
        }
    },
    
    get_ServiceMethod : function() {
        /// <value type="String">
        /// The name of the method to call on the page or web service
        /// </value>
        /// <remarks>
        /// The signature of the method must exactly match the following:
        ///    [WebMethod]
        ///    string DynamicPopulateMethod(string contextKey)
        ///    {
        ///        ...
        ///    }
        /// </remarks>
        return this._serviceMethod;
    },
    set_ServiceMethod : function(value) {
        if (this._serviceMethod != value) {
            this._serviceMethod = value;
            this.raisePropertyChanged('ServiceMethod');
        }
    },
    
    get_cacheDynamicResults : function() {
        /// <value type="Boolean" mayBeNull="false">
        /// Whether the results of the dynamic population should be cached and
        /// not fetched again after the first load
        /// </value>
        return this._cacheDynamicResults;
    },
    set_cacheDynamicResults : function(value) {
        if (this._cacheDynamicResults != value) {
            this._cacheDynamicResults = value;
            this.raisePropertyChanged('cacheDynamicResults');
        }
    },
    
    get_UpdatingCssClass : function() {
        /// <value type="String">
        /// The CSS class to apply to the target during asynchronous calls
        /// </value>
        return this._setUpdatingCssClass;
    },
    set_UpdatingCssClass : function(value) {
        if (this._setUpdatingCssClass != value) {
            this._setUpdatingCssClass = value;
            this.raisePropertyChanged('UpdatingCssClass');
        }
    },
    
    get_CustomScript : function() {
        /// <value type="String">
        /// The script to invoke instead of calling a Web or Page method. This script must evaluate to a string value.
        /// </value>
        return this._customScript;
    },   
    set_CustomScript : function(value) {
        if (this._customScript != value) {
            this._customScript = value;
            this.raisePropertyChanged('CustomScript');
        }
    },
    
    add_populating : function(handler) {
        /// <summary>
        /// Add an event handler for the populating event
        /// </summary>
        /// <param name="handler" type="Function" mayBeNull="false">
        /// Event handler
        /// </param>
        /// <returns />
        this.get_events().addHandler('populating', handler);
    },
    remove_populating : function(handler) {
        /// <summary>
        /// Remove an event handler from the populating event
        /// </summary>
        /// <param name="handler" type="Function" mayBeNull="false">
        /// Event handler
        /// </param>
        /// <returns />
        this.get_events().removeHandler('populating', handler);
    },
    raisePopulating : function(eventArgs) {
        /// <summary>
        /// Raise the populating event
        /// </summary>
        /// <param name="eventArgs" type="Sys.CancelEventArgs" mayBeNull="false">
        /// Event arguments for the populating event
        /// </param>
        /// <returns />
        
        var handler = this.get_events().getHandler('populating');
        if (handler) {
            handler(this, eventArgs);
        }
    },
    
    add_populated : function(handler) {
        /// <summary>
        /// Add an event handler for the populated event
        /// </summary>
        /// <param name="handler" type="Function" mayBeNull="false">
        /// Event handler
        /// </param>
        /// <returns />
        this.get_events().addHandler('populated', handler);
    },
    remove_populated : function(handler) {
        /// <summary>
        /// Remove an event handler from the populated event
        /// </summary>
        /// <param name="handler" type="Function" mayBeNull="false">
        /// Event handler
        /// </param>
        /// <returns />
        this.get_events().removeHandler('populated', handler);
    },
    raisePopulated : function(eventArgs) {
        /// <summary>
        /// Raise the populated event
        /// </summary>
        /// <param name="eventArgs" type="Sys.EventArgs" mayBeNull="false">
        /// Event arguments for the populated event
        /// </param>
        /// <returns />
         
        var handler = this.get_events().getHandler('populated');
        if (handler) {
            handler(this, eventArgs);
        }
    }
}
AjaxControlToolkit.DynamicPopulateBehavior.registerClass('AjaxControlToolkit.DynamicPopulateBehavior', AjaxControlToolkit.BehaviorBase);

/* END AjaxControlToolkit.DynamicPopulate.DynamicPopulateBehavior.js */
/* START AjaxControlToolkit.Compat.DragDrop.DragDropScripts.js */
// (c) Copyright Microsoft Corporation.
// This source is subject to the Microsoft Permissive License.
// See http://www.microsoft.com/resources/sharedsource/licensingbasics/sharedsourcelicenses.mspx.
// All other rights reserved.


/// <reference name="MicrosoftAjax.debug.js" />
/// <reference name="MicrosoftAjaxTimer.debug.js" />
/// <reference name="MicrosoftAjaxWebForms.debug.js" />
/// <reference path="../../Common/Common.js" />
/// <reference path="../Timer/Timer.js" />


///////////////////////////////////////////////////////////////////////////////
// IDropSource

Type.registerNamespace('AjaxControlToolkit');

AjaxControlToolkit.IDragSource = function() {
}
AjaxControlToolkit.IDragSource.prototype = {
    // Type get_dragDataType()
    get_dragDataType: function() { throw Error.notImplemented(); },
    // Object getDragData(Context)
    getDragData: function() { throw Error.notImplemented(); },
    // DragMode get_dragMode()
    get_dragMode: function() { throw Error.notImplemented(); },
    // void onDragStart()
    onDragStart: function() { throw Error.notImplemented(); },
    // void onDrag()
    onDrag: function() { throw Error.notImplemented(); },
    // void onDragEnd(Cancelled)
    onDragEnd: function() { throw Error.notImplemented(); }
}
AjaxControlToolkit.IDragSource.registerInterface('AjaxControlToolkit.IDragSource');

///////////////////////////////////////////////////////////////////////////////
// IDropTarget
AjaxControlToolkit.IDropTarget = function() {
}
AjaxControlToolkit.IDropTarget.prototype = {
    get_dropTargetElement: function() { throw Error.notImplemented(); },
    // bool canDrop(DragMode, DataType, Data)
    canDrop: function() { throw Error.notImplemented(); },
    // void drop(DragMode, DataType, Data)
    drop: function() { throw Error.notImplemented(); },
    // void onDragEnterTarget(DragMode, DataType, Data)
    onDragEnterTarget: function() { throw Error.notImplemented(); },
    // void onDragLeaveTarget(DragMode, DataType, Data)
    onDragLeaveTarget: function() { throw Error.notImplemented(); },
    // void onDragInTarget(DragMode, DataType, Data)
    onDragInTarget: function() { throw Error.notImplemented(); }
}
AjaxControlToolkit.IDropTarget.registerInterface('AjaxControlToolkit.IDropTarget');

///////////////////////////////////////////////
// DragMode
//

AjaxControlToolkit.DragMode = function() {
    throw Error.invalidOperation();
}
AjaxControlToolkit.DragMode.prototype = {
    Copy: 0,
    Move: 1
}
AjaxControlToolkit.DragMode.registerEnum('AjaxControlToolkit.DragMode');

////////////////////////////////////////////////////////////////////
// DragDropEventArgs
//

AjaxControlToolkit.DragDropEventArgs = function(dragMode, dragDataType, dragData) {
    this._dragMode = dragMode;
    this._dataType = dragDataType;
    this._data = dragData;
}
AjaxControlToolkit.DragDropEventArgs.prototype = {
    get_dragMode: function() {
        return this._dragMode || null;
    },
    get_dragDataType: function() {
        return this._dataType || null;
    },
    get_dragData: function() {
        return this._data || null;
    }
}
AjaxControlToolkit.DragDropEventArgs.registerClass('AjaxControlToolkit.DragDropEventArgs');


AjaxControlToolkit._DragDropManager = function() {
    this._instance = null;
    this._events =  null;
}
AjaxControlToolkit._DragDropManager.prototype = {

    add_dragStart: function(handler) {
        this.get_events().addHandler('dragStart', handler);
    },
    remove_dragStart: function(handler) {
        this.get_events().removeHandler('dragStart', handler);
    },
    
    get_events: function() {
    // todo: doc comments. this one is commented out (two //) due to a bug with the preprocessor.
        // <value type="Sys.EventHandlerList">
        // </value>
        if (!this._events) {
            this._events = new Sys.EventHandlerList();
        }
        return this._events;
    },
    
    add_dragStop: function(handler) {
        this.get_events().addHandler('dragStop', handler);
    },
    remove_dragStop: function(handler) {
        this.get_events().removeHandler('dragStop', handler);
    },
    
    _getInstance: function() {
        if (!this._instance) {
            if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
                this._instance = new AjaxControlToolkit.IEDragDropManager();
            }
            else {
                this._instance = new AjaxControlToolkit.GenericDragDropManager();
            }
            this._instance.initialize();
            this._instance.add_dragStart(Function.createDelegate(this, this._raiseDragStart));
            this._instance.add_dragStop(Function.createDelegate(this, this._raiseDragStop));
        }
        return this._instance;
    },
    
    startDragDrop: function(dragSource, dragVisual, context) {
        this._getInstance().startDragDrop(dragSource, dragVisual, context);
    },
    
    registerDropTarget: function(target) {
        this._getInstance().registerDropTarget(target);
    },
    
    unregisterDropTarget: function(target) {
        this._getInstance().unregisterDropTarget(target);
    },
    
    dispose: function() {
        delete this._events;
        Sys.Application.unregisterDisposableObject(this);
        Sys.Application.removeComponent(this);
    },
    
    _raiseDragStart: function(sender, eventArgs) {
        var handler = this.get_events().getHandler('dragStart');
        if(handler) {
            handler(this, eventArgs);
        }
    },
    
    _raiseDragStop: function(sender, eventArgs) {
        var handler = this.get_events().getHandler('dragStop');
        if(handler) {
            handler(this, eventArgs);
        }
    }
}
AjaxControlToolkit._DragDropManager.registerClass('AjaxControlToolkit._DragDropManager');
AjaxControlToolkit.DragDropManager = new AjaxControlToolkit._DragDropManager();


AjaxControlToolkit.IEDragDropManager = function() {
    AjaxControlToolkit.IEDragDropManager.initializeBase(this);
    
    this._dropTargets = null;
    // Radius of the cursor used to determine what drop target we 
    // are hovering. Anything below the cursor's zone may be a 
    // potential drop target.
    this._radius = 10;
    this._activeDragVisual = null;
    this._activeContext = null;
    this._activeDragSource = null;
    this._underlyingTarget = null;
    this._oldOffset = null;
    this._potentialTarget = null;
    this._isDragging = false;
    this._mouseUpHandler = null;
    this._documentMouseMoveHandler = null;
    this._documentDragOverHandler = null;
    this._dragStartHandler = null;
    this._mouseMoveHandler = null;
    this._dragEnterHandler = null;
    this._dragLeaveHandler = null;
    this._dragOverHandler = null;
    this._dropHandler = null;
}
AjaxControlToolkit.IEDragDropManager.prototype = {

    add_dragStart : function(handler) {
        this.get_events().addHandler("dragStart", handler);
    },
    
    remove_dragStart : function(handler) {
        this.get_events().removeHandler("dragStart", handler);
    },
    
    add_dragStop : function(handler) {
        this.get_events().addHandler("dragStop", handler);
    },
    
    remove_dragStop : function(handler) {
        this.get_events().removeHandler("dragStop", handler);
    },
    
    initialize : function() {
        AjaxControlToolkit.IEDragDropManager.callBaseMethod(this, 'initialize');
        this._mouseUpHandler = Function.createDelegate(this, this._onMouseUp);
        this._documentMouseMoveHandler = Function.createDelegate(this, this._onDocumentMouseMove);
        this._documentDragOverHandler = Function.createDelegate(this, this._onDocumentDragOver);
        this._dragStartHandler = Function.createDelegate(this, this._onDragStart);
        this._mouseMoveHandler = Function.createDelegate(this, this._onMouseMove);
        this._dragEnterHandler = Function.createDelegate(this, this._onDragEnter);
        this._dragLeaveHandler = Function.createDelegate(this, this._onDragLeave);
        this._dragOverHandler = Function.createDelegate(this, this._onDragOver);
        this._dropHandler = Function.createDelegate(this, this._onDrop);
    },
    
    
    dispose : function() {
        if(this._dropTargets) {
            for (var i = 0; i < this._dropTargets; i++) {
                this.unregisterDropTarget(this._dropTargets[i]);
            }
            this._dropTargets = null;
        }
        
        AjaxControlToolkit.IEDragDropManager.callBaseMethod(this, 'dispose');
    },
    

    startDragDrop : function(dragSource, dragVisual, context) {
        var ev = window._event;
        
        // Don't allow drag and drop if there is another active drag operation going on.
        if (this._isDragging) {
            return;
        }
        
        this._underlyingTarget = null;
        this._activeDragSource = dragSource;
        this._activeDragVisual = dragVisual;
        this._activeContext = context;
        
        var mousePosition = { x: ev.clientX, y: ev.clientY };
        
        // By default we use absolute positioning, unless a different type 
        // of positioning is set explicitly.
        dragVisual.originalPosition = dragVisual.style.position;
        dragVisual.style.position = "absolute";
        
        document._lastPosition = mousePosition;
        dragVisual.startingPoint = mousePosition;
        var scrollOffset = this.getScrollOffset(dragVisual, /* recursive */ true);
        
        dragVisual.startingPoint = this.addPoints(dragVisual.startingPoint, scrollOffset);
        
        if (dragVisual.style.position == "absolute") {
            dragVisual.startingPoint = this.subtractPoints(dragVisual.startingPoint, $common.getLocation(dragVisual));
        }
        else {
            var left = parseInt(dragVisual.style.left);
            var top = parseInt(dragVisual.style.top);
            if (isNaN(left)) left = "0";
            if (isNaN(top)) top = "0";
            
            dragVisual.startingPoint = this.subtractPoints(dragVisual.startingPoint, { x: left, y: top });
        }
        
        // Monitor DOM changes.
        this._prepareForDomChanges();
        dragSource.onDragStart();
        var eventArgs = new AjaxControlToolkit.DragDropEventArgs(
            dragSource.get_dragMode(),
            dragSource.get_dragDataType(),
            dragSource.getDragData(context));
        var handler = this.get_events().getHandler('dragStart');
        if(handler) handler(this,eventArgs);
        this._recoverFromDomChanges();
        
        this._wireEvents();
        
        this._drag(/* isInitialDrag */ true);
    },
    
    
    _stopDragDrop : function(cancelled) {
        var ev = window._event;
        if (this._activeDragSource != null) {
            this._unwireEvents();
        
            if (!cancelled) {
                // The drag operation is cancelled if there 
                // is no drop target.
                cancelled = (this._underlyingTarget == null);
            }

            if (!cancelled && this._underlyingTarget != null) {
                this._underlyingTarget.drop(this._activeDragSource.get_dragMode(), this._activeDragSource.get_dragDataType(),
                    this._activeDragSource.getDragData(this._activeContext));
            }

            this._activeDragSource.onDragEnd(cancelled);
            var handler = this.get_events().getHandler('dragStop');
            if(handler) handler(this,Sys.EventArgs.Empty);
            
            this._activeDragVisual.style.position = this._activeDragVisual.originalPosition;
        
            this._activeDragSource = null;
            this._activeContext = null;
            this._activeDragVisual = null;
            this._isDragging = false;
            this._potentialTarget = null;
            ev.preventDefault();
        }
    },
    
    _drag : function(isInitialDrag) {
        var ev = window._event;
        var mousePosition = { x: ev.clientX, y: ev.clientY };
        
        // NOTE: We store the event object to be able to determine the current 
        // mouse position in Mozilla in other event handlers such as keydown.
        document._lastPosition = mousePosition;
        
        var scrollOffset = this.getScrollOffset(this._activeDragVisual, /* recursive */ true);
        var position = this.addPoints(this.subtractPoints(mousePosition, this._activeDragVisual.startingPoint), scrollOffset);
        
        // Check if the visual moved at all.
        if (!isInitialDrag && parseInt(this._activeDragVisual.style.left) == position.x && parseInt(this._activeDragVisual.style.top) == position.y) {
            return;
        }
        
        $common.setLocation(this._activeDragVisual, position);
        
        // Monitor DOM changes.
        this._prepareForDomChanges();
        this._activeDragSource.onDrag();
        this._recoverFromDomChanges();
        
        // Find a potential target.
        this._potentialTarget = this._findPotentialTarget(this._activeDragSource, this._activeDragVisual);
        
        var movedToOtherTarget = (this._potentialTarget != this._underlyingTarget || this._potentialTarget == null);
        // Check if we are leaving an underlying target.
        if (movedToOtherTarget && this._underlyingTarget != null) {
            this._leaveTarget(this._activeDragSource, this._underlyingTarget);
        }
        
        if (this._potentialTarget != null) {
            // Check if we are entering a new target.
            if (movedToOtherTarget) {
                this._underlyingTarget = this._potentialTarget;
                
                // Enter the new target.
                this._enterTarget(this._activeDragSource, this._underlyingTarget);
            }
            else {
                this._moveInTarget(this._activeDragSource, this._underlyingTarget);
            }
        }
        else {
            this._underlyingTarget = null;
        }
    },
    
    
    _wireEvents : function() {
        $addHandler(document, "mouseup", this._mouseUpHandler);
        $addHandler(document, "mousemove", this._documentMouseMoveHandler);
        $addHandler(document.body, "dragover", this._documentDragOverHandler);
        
        $addHandler(this._activeDragVisual, "dragstart", this._dragStartHandler);
        $addHandler(this._activeDragVisual, "dragend", this._mouseUpHandler);
        $addHandler(this._activeDragVisual, "drag", this._mouseMoveHandler);
    },
    
    
    _unwireEvents : function() {
        $removeHandler(this._activeDragVisual, "drag", this._mouseMoveHandler);
        $removeHandler(this._activeDragVisual, "dragend", this._mouseUpHandler);
        $removeHandler(this._activeDragVisual, "dragstart", this._dragStartHandler);

        $removeHandler(document.body, "dragover", this._documentDragOverHandler);
        $removeHandler(document, "mousemove", this._documentMouseMoveHandler);
        $removeHandler(document, "mouseup", this._mouseUpHandler);
    },
    
    
    registerDropTarget : function(dropTarget) {
        if (this._dropTargets == null) {
            this._dropTargets = [];
        }
        Array.add(this._dropTargets, dropTarget);
        
        this._wireDropTargetEvents(dropTarget);
    },
    
    
    unregisterDropTarget : function(dropTarget) {
        this._unwireDropTargetEvents(dropTarget);
        if (this._dropTargets) {
            Array.remove(this._dropTargets, dropTarget);
        }
    },
    
    
    _wireDropTargetEvents : function(dropTarget) {
        var associatedElement = dropTarget.get_dropTargetElement();
        associatedElement._dropTarget = dropTarget;
        $addHandler(associatedElement, "dragenter",  this._dragEnterHandler);
        $addHandler(associatedElement, "dragleave",  this._dragLeaveHandler);
        $addHandler(associatedElement, "dragover", this._dragOverHandler);
        $addHandler(associatedElement, "drop", this._dropHandler);
    },
    
    
    _unwireDropTargetEvents : function(dropTarget) {
        var associatedElement = dropTarget.get_dropTargetElement();
        // make sure that the handlers are not removed twice
        if(associatedElement._dropTarget)
        {
            associatedElement._dropTarget = null;
            $removeHandler(associatedElement, "dragenter",  this._dragEnterHandler);
            $removeHandler(associatedElement, "dragleave",  this._dragLeaveHandler);
            $removeHandler(associatedElement, "dragover", this._dragOverHandler);
            $removeHandler(associatedElement, "drop", this._dropHandler);
        }
    },
    
    
    _onDragStart : function(ev) {
        window._event = ev;
        document.selection.empty();
        
        var dt = ev.dataTransfer;
        if(!dt && ev.rawEvent) dt = ev.rawEvent.dataTransfer;
        
        var dataType = this._activeDragSource.get_dragDataType().toLowerCase();
        var data = this._activeDragSource.getDragData(this._activeContext);
        
        if (data) {
            // TODO: How do we want to deal with 'non-compatible types'?
            if (dataType != "text" && dataType != "url") {
                dataType = "text";
                
                if (data.innerHTML != null) {
                    data = data.innerHTML;
                }
            }
            
            dt.effectAllowed = "move";
            dt.setData(dataType, data.toString());
        }
    },
    
    _onMouseUp : function(ev) {
        window._event = ev;
        this._stopDragDrop(false);
    },
    
    _onDocumentMouseMove : function(ev) {
        window._event = ev;
        this._dragDrop();
    },

    _onDocumentDragOver : function(ev) {
        window._event = ev;
        if(this._potentialTarget) ev.preventDefault();
        //ev.returnValue = (_potentialTarget == null);
    },
    
    _onMouseMove : function(ev) {
        window._event = ev;
        this._drag();
    },
    
    _onDragEnter : function(ev) {
        window._event = ev;
        if (this._isDragging) {
            ev.preventDefault();
            //ev.returnValue = false;
        }
        else {
            // An external object is dragged to the drop target.
            var dataObjects = AjaxControlToolkit.IEDragDropManager._getDataObjectsForDropTarget(this._getDropTarget(ev.target));
            for (var i = 0; i < dataObjects.length; i++) {
                this._dropTarget.onDragEnterTarget(AjaxControlToolkit.DragMode.Copy, dataObjects[i].type, dataObjects[i].value);
            }
        }
    },
    
    _onDragLeave : function(ev) {
        window._event = ev;
        if (this._isDragging) {
            ev.preventDefault();
            //ev.returnValue = false;
        }
        else {
            // An external object is dragged to the drop target.
            var dataObjects = AjaxControlToolkit.IEDragDropManager._getDataObjectsForDropTarget(this._getDropTarget(ev.target));
            for (var i = 0; i < dataObjects.length; i++) {
                this._dropTarget.onDragLeaveTarget(AjaxControlToolkit.DragMode.Copy, dataObjects[i].type, dataObjects[i].value);
            }
        }
    },
    
    _onDragOver : function(ev) {
        window._event = ev;
        if (this._isDragging) {
            ev.preventDefault();
            //ev.returnValue = false;
        }
        else {
            // An external object is dragged over the drop target.
            var dataObjects = AjaxControlToolkit.IEDragDropManager._getDataObjectsForDropTarget(this._getDropTarget(ev.target));
            for (var i = 0; i < dataObjects.length; i++) {
                this._dropTarget.onDragInTarget(AjaxControlToolkit.DragMode.Copy, dataObjects[i].type, dataObjects[i].value);
            }
        }
    },
    
    _onDrop : function(ev) {
        window._event = ev;
        if (!this._isDragging) {
            // An external object is dropped on the drop target.
            var dataObjects = AjaxControlToolkit.IEDragDropManager._getDataObjectsForDropTarget(this._getDropTarget(ev.target));
            for (var i = 0; i < dataObjects.length; i++) {
                this._dropTarget.drop(AjaxControlToolkit.DragMode.Copy, dataObjects[i].type, dataObjects[i].value);
            }
        }
        ev.preventDefault();
        //ev.returnValue = false;
    },
    
    _getDropTarget : function(element) {
        while (element) {
            if (element._dropTarget != null) {
                return element._dropTarget;
            }
            element = element.parentNode;
        }
        return null;
    },
    
    _dragDrop : function() {
        if (this._isDragging) {
            return;
        }
        
        this._isDragging = true;
        this._activeDragVisual.dragDrop();
        document.selection.empty();
    },
    
    _moveInTarget : function(dragSource, dropTarget) {
        // Monitor DOM changes.
        this._prepareForDomChanges();
        dropTarget.onDragInTarget(dragSource.get_dragMode(), dragSource.get_dragDataType(), dragSource.getDragData(this._activeContext));
        this._recoverFromDomChanges();
    },
    
    _enterTarget : function(dragSource, dropTarget) {
        // Monitor DOM changes.
        this._prepareForDomChanges();
        dropTarget.onDragEnterTarget(dragSource.get_dragMode(), dragSource.get_dragDataType(), dragSource.getDragData(this._activeContext));
        this._recoverFromDomChanges();
    },
    
    _leaveTarget : function(dragSource, dropTarget) {
        // Monitor DOM changes.
        this._prepareForDomChanges();
        dropTarget.onDragLeaveTarget(dragSource.get_dragMode(), dragSource.get_dragDataType(), dragSource.getDragData(this._activeContext));
        this._recoverFromDomChanges();
    },
    
    _findPotentialTarget : function(dragSource, dragVisual) {
        var ev = window._event;

        if (this._dropTargets == null) {
            return null;
        }
        
        var type = dragSource.get_dragDataType();
        var mode = dragSource.get_dragMode();
        var data = dragSource.getDragData(this._activeContext);

        // Get the current cursor location.
        var scrollOffset = this.getScrollOffset(document.body, /* recursive */ true);
        var x = ev.clientX + scrollOffset.x;
        var y = ev.clientY + scrollOffset.y;
        var cursorRect = { x: x - this._radius, y: y - this._radius, width: this._radius * 2, height: this._radius * 2 };
        
        // Find any targets near the current cursor location.
        var targetRect;
        for (var i = 0; i < this._dropTargets.length; i++) {
            targetRect = $common.getBounds(this._dropTargets[i].get_dropTargetElement());
            if ($common.overlaps(cursorRect, targetRect) && this._dropTargets[i].canDrop(mode, type, data)) {
                return this._dropTargets[i];
            }
        }
        
        return null;
    },
    
    _prepareForDomChanges : function() {
        this._oldOffset = $common.getLocation(this._activeDragVisual);
    },
    
    _recoverFromDomChanges : function() {
        var newOffset = $common.getLocation(this._activeDragVisual);
        if (this._oldOffset.x != newOffset.x || this._oldOffset.y != newOffset.y) {
            this._activeDragVisual.startingPoint = this.subtractPoints(this._activeDragVisual.startingPoint, this.subtractPoints(this._oldOffset, newOffset));
            scrollOffset = this.getScrollOffset(this._activeDragVisual, /* recursive */ true);
            var position = this.addPoints(this.subtractPoints(document._lastPosition, this._activeDragVisual.startingPoint), scrollOffset);
            $common.setLocation(this._activeDragVisual, position);
        }
    },
    
    addPoints : function(p1, p2) {
        return { x: p1.x + p2.x, y: p1.y + p2.y };
    },
    
    subtractPoints : function(p1, p2) {
        return { x: p1.x - p2.x, y: p1.y - p2.y };
    },
    
    // -- Drag and drop helper methods.
    getScrollOffset : function(element, recursive) {
        var left = element.scrollLeft;
        var top = element.scrollTop;
        if (recursive) {
            var parent = element.parentNode;
            while (parent != null && parent.scrollLeft != null) {
                left += parent.scrollLeft;
                top += parent.scrollTop;
                // Don't include anything below the body.
                if (parent == document.body && (left != 0 && top != 0))
                    break;
                parent = parent.parentNode;
            }
        }
        return { x: left, y: top };
    },
    
    getBrowserRectangle : function() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        if (width == null) {
            width = document.body.clientWidth;
        }
        if (height == null) {
            height = document.body.clientHeight;
        }
        
        return { x: 0, y: 0, width: width, height: height };
    },
    
    getNextSibling : function(item) {
        for (item = item.nextSibling; item != null; item = item.nextSibling) {
            if (item.innerHTML != null) {
                return item;
            }
        }
        return null;
    },
    
    hasParent : function(element) {
        return (element.parentNode != null && element.parentNode.tagName != null);
    }
}
AjaxControlToolkit.IEDragDropManager.registerClass('AjaxControlToolkit.IEDragDropManager', Sys.Component);

AjaxControlToolkit.IEDragDropManager._getDataObjectsForDropTarget = function(dropTarget) {
    if (dropTarget == null) {
        return [];
    }
    var ev = window._event;
    var dataObjects = [];
    var dataTypes = [ "URL", "Text" ];
    var data;
    for (var i = 0; i < dataTypes.length; i++) {
        var dt = ev.dataTransfer;
        if(!dt && ev.rawEvent) dt = ev.rawEvent.dataTransfer;
        data = dt.getData(dataTypes[i]);
        if (dropTarget.canDrop(AjaxControlToolkit.DragMode.Copy, dataTypes[i], data)) {
            if (data) {
                Array.add(dataObjects, { type : dataTypes[i], value : data });
            }
        }
    }

    return dataObjects;
}


AjaxControlToolkit.GenericDragDropManager = function() {
    AjaxControlToolkit.GenericDragDropManager.initializeBase(this);
    
    this._dropTargets = null;
    // Radius of the cursor used to determine what drop target we 
    // are hovering. Anything below the cursor's zone may be a 
    // potential drop target.
    this._scrollEdgeConst = 40;
    this._scrollByConst = 10;
    this._scroller = null;
    this._scrollDeltaX = 0;
    this._scrollDeltaY = 0;
    this._activeDragVisual = null;
    this._activeContext = null;
    this._activeDragSource = null;
    this._oldOffset = null;
    this._potentialTarget = null;
    this._mouseUpHandler = null;
    this._mouseMoveHandler = null;
    this._keyPressHandler = null;
    this._scrollerTickHandler = null;
}
AjaxControlToolkit.GenericDragDropManager.prototype = {
   
    initialize : function() {
        AjaxControlToolkit.GenericDragDropManager.callBaseMethod(this, "initialize");
        this._mouseUpHandler = Function.createDelegate(this, this._onMouseUp);
        this._mouseMoveHandler = Function.createDelegate(this, this._onMouseMove);
        this._keyPressHandler = Function.createDelegate(this, this._onKeyPress);
        this._scrollerTickHandler = Function.createDelegate(this, this._onScrollerTick);
        if (Sys.Browser.agent === Sys.Browser.Safari) {
            AjaxControlToolkit.GenericDragDropManager.__loadSafariCompatLayer(this);
        }
        this._scroller = new Sys.Timer();
        this._scroller.set_interval(10);
        this._scroller.add_tick(this._scrollerTickHandler);
    },

    startDragDrop : function(dragSource, dragVisual, context) {
        this._activeDragSource = dragSource;
        this._activeDragVisual = dragVisual;
        this._activeContext = context;
        
        AjaxControlToolkit.GenericDragDropManager.callBaseMethod(this, "startDragDrop", [dragSource, dragVisual, context]);
    },
    
    _stopDragDrop : function(cancelled) {
        this._scroller.set_enabled(false);
        
        AjaxControlToolkit.GenericDragDropManager.callBaseMethod(this, "_stopDragDrop", [cancelled]);
    },
    
    _drag : function(isInitialDrag) {
        AjaxControlToolkit.GenericDragDropManager.callBaseMethod(this, "_drag", [isInitialDrag]);
        
        this._autoScroll();
    },
    
    _wireEvents : function() {
        $addHandler(document, "mouseup", this._mouseUpHandler);
        $addHandler(document, "mousemove", this._mouseMoveHandler);
        $addHandler(document, "keypress", this._keyPressHandler);
    },
    
    _unwireEvents : function() {
        $removeHandler(document, "keypress", this._keyPressHandler);
        $removeHandler(document, "mousemove", this._mouseMoveHandler);
        $removeHandler(document, "mouseup", this._mouseUpHandler);
    },
    
    _wireDropTargetEvents : function(dropTarget) {
        //
    },
    
    _unwireDropTargetEvents : function(dropTarget) {
        //
    },
    
    _onMouseUp : function(e) {
        window._event = e;
        this._stopDragDrop(false);
    },
    
    _onMouseMove : function(e) {
        window._event = e;
        this._drag();
    },
    
    _onKeyPress : function(e) {
        window._event = e;
        // Escape.
        var k = e.keyCode ? e.keyCode : e.rawEvent.keyCode;
        if (k == 27) {
            this._stopDragDrop(/* cancel */ true);
        }
    },
    
    _autoScroll : function() {
        var ev = window._event;
        var browserRect = this.getBrowserRectangle();
        if (browserRect.width > 0) {
            this._scrollDeltaX = this._scrollDeltaY = 0;
            if (ev.clientX < browserRect.x + this._scrollEdgeConst) this._scrollDeltaX = -this._scrollByConst;
            else if (ev.clientX > browserRect.width - this._scrollEdgeConst) this._scrollDeltaX = this._scrollByConst;
            if (ev.clientY < browserRect.y + this._scrollEdgeConst) this._scrollDeltaY = -this._scrollByConst;
            else if (ev.clientY > browserRect.height - this._scrollEdgeConst) this._scrollDeltaY = this._scrollByConst;
            if (this._scrollDeltaX != 0 || this._scrollDeltaY != 0) {
                this._scroller.set_enabled(true);
            }
            else {
                this._scroller.set_enabled(false);
            }
        }
    },
    
    _onScrollerTick : function() {
        var oldLeft = document.body.scrollLeft;
        var oldTop = document.body.scrollTop;
        window.scrollBy(this._scrollDeltaX, this._scrollDeltaY);
        var newLeft = document.body.scrollLeft;
        var newTop = document.body.scrollTop;
        
        var dragVisual = this._activeDragVisual;
        var position = { x: parseInt(dragVisual.style.left) + (newLeft - oldLeft), y: parseInt(dragVisual.style.top) + (newTop - oldTop) };
        $common.setLocation(dragVisual, position);
    }
}
AjaxControlToolkit.GenericDragDropManager.registerClass('AjaxControlToolkit.GenericDragDropManager', AjaxControlToolkit.IEDragDropManager);


if (Sys.Browser.agent === Sys.Browser.Safari) {
    AjaxControlToolkit.GenericDragDropManager.__loadSafariCompatLayer = function(ddm) {
        ddm._getScrollOffset = ddm.getScrollOffset;

        ddm.getScrollOffset = function(element, recursive) {
            return { x: 0, y: 0 };
        }

        ddm._getBrowserRectangle = ddm.getBrowserRectangle;

        ddm.getBrowserRectangle = function() {
            var browserRect = ddm._getBrowserRectangle();
            
            var offset = ddm._getScrollOffset(document.body, true);
            return { x: browserRect.x + offset.x, y: browserRect.y + offset.y,
                width: browserRect.width + offset.x, height: browserRect.height + offset.y };
        }
    }
}

/* END AjaxControlToolkit.Compat.DragDrop.DragDropScripts.js */
/* START AjaxControlToolkit.DragPanel.FloatingBehavior.js */
// (c) Copyright Microsoft Corporation.
// This source is subject to the Microsoft Permissive License.
// See http://www.microsoft.com/resources/sharedsource/licensingbasics/sharedsourcelicenses.mspx.
// All other rights reserved.


/// <reference name="MicrosoftAjax.debug.js" />
/// <reference name="MicrosoftAjaxTimer.debug.js" />
/// <reference name="MicrosoftAjaxWebForms.debug.js" />
/// <reference path="../ExtenderBase/BaseScripts.js" />
/// <reference path="../Common/Common.js" />
/// <reference path="../Compat/Timer/Timer.js" />
/// <reference path="../Compat/DragDrop/DragDropScripts.js" />


AjaxControlToolkit.FloatingBehavior = function(element) {
    AjaxControlToolkit.FloatingBehavior.initializeBase(this,[element]);
    
    var _handle;
    var _location;
    var _dragStartLocation;
    var _profileProperty;
    var _profileComponent;
    
    var _mouseDownHandler = Function.createDelegate(this, mouseDownHandler);
    
    this.add_move = function(handler) {
        this.get_events().addHandler('move', handler);
    }
    this.remove_move = function(handler) {
        this.get_events().removeHandler('move', handler);
    }
    
    this.get_handle = function() {
        return _handle;
    }
    this.set_handle = function(value) {
        if (_handle != null) {
            $removeHandler(_handle, "mousedown", _mouseDownHandler);            
        }
    
        _handle = value;
        $addHandler(_handle, "mousedown", _mouseDownHandler);        
    }
    
    this.get_profileProperty = function() {
        return _profileProperty;
    }
    this.set_profileProperty = function(value) {
        //##DEBUG Sys.Debug.assert(!this.get_isInitialized() || _profileProperty === value, "You cannot change the profile property after initialization.");
        _profileProperty = value;
    }
    
    this.get_profileComponent = function() {
        return _profileComponent;
    }
    this.set_profileComponent = function(value) {
        _profileComponent = value;
    }
    
    this.get_location = function() {
        return _location;
    }
    this.set_location = function(value) {
        if (_location != value) {
            _location = value;
            if (this.get_isInitialized()) {                
                $common.setLocation(this.get_element(), _location);
            }
            this.raisePropertyChanged('location');
        }
    }
    
    this.initialize = function() {
        AjaxControlToolkit.FloatingBehavior.callBaseMethod(this, 'initialize');
        AjaxControlToolkit.DragDropManager.registerDropTarget(this);

        var el = this.get_element();

        
        if (!_location) {                       
            _location = $common.getLocation(el);
        }
        
        el.style.position = "fixed";
        $common.setLocation(el, _location);

//        var p = this.get_profileProperty();
//        if(p) {
//            var b = new Sys.Preview.Binding();
//            b.beginUpdate();
//            b.set_target(this);
//            b.set_property("location");
//            var profile = this.get_profileComponent();
//            if(!profile) profile = Sys.Preview.Services.Components.Profile.instance;
//            b.set_dataContext(profile);
//            b.set_dataPath(p);
//            b.set_direction(Sys.Preview.BindingDirection.InOut);            
//                      
//            // we must hook into the loaded event since the profile may be loaded and the location property
//            // will be different. But profile doesnt raise a change notificaiton for every property after a load
//            var a = new Sys.Preview.InvokeMethodAction();
//            a.beginUpdate();
//            a.set_eventSource(profile);
//            a.set_eventName("loadComplete");
//            a.set_target(b);
//            a.set_method("evaluateIn");

//            a.endUpdate();
//            b.endUpdate();

//            this._binding = b;
//            this._action = a;
//        }
    }
    
    this.dispose = function() {
        AjaxControlToolkit.DragDropManager.unregisterDropTarget(this);
        if (_handle && _mouseDownHandler) {
            $removeHandler(_handle, "mousedown", _mouseDownHandler);
            //_handle.detachEvent("onmousedown", _mouseDownHandler);
        }
        _mouseDownHandler = null;
        AjaxControlToolkit.FloatingBehavior.callBaseMethod(this, 'dispose');
    }
    
    this.checkCanDrag = function(element) {
        var undraggableTagNames = ["input", "button", "select", "textarea", "label"];
        var tagName = element.tagName;
        
        if ((tagName.toLowerCase() == "a") && (element.href != null) && (element.href.length > 0)) {
            return false;
        }
        if (Array.indexOf(undraggableTagNames, tagName.toLowerCase()) > -1) {
            return false;
        }
        return true;
    }
    
    function mouseDownHandler(ev) {
        window._event = ev;
        var el = this.get_element();
        
        if (this.checkCanDrag(ev.target)) {
            _dragStartLocation = $common.getLocation(el);
            
            ev.preventDefault();
            
            this.startDragDrop(el);
        }
    }

    // Type get_dataType()
    this.get_dragDataType = function() {
        return "_floatingObject";
    }
    
    // Object get_data(Context)
    this.getDragData = function(context) {
        return null;
    }
    
    // DragMode get_dragMode()
    this.get_dragMode = function() {
        return AjaxControlToolkit.DragMode.Move;
    }
    
    // void onDragStart()
    this.onDragStart = function() { }
    
    // void onDrag()
    this.onDrag = function() { }
    
    // void onDragEnd(Canceled)
    this.onDragEnd = function(canceled) {
        if (!canceled) {
            var handler = this.get_events().getHandler('move');
            if(handler) {
                var cancelArgs = new Sys.CancelEventArgs();
                handler(this, cancelArgs);
                canceled = cancelArgs.get_cancel();
            }            
        }
        
        var el = this.get_element();
        if (canceled) {
            // Restore the position of the control.
            $common.setLocation(el, _dragStartLocation);
        } else {
            _location = $common.getLocation(el);
            this.raisePropertyChanged('location');
        }
    }
    
    this.startDragDrop = function(dragVisual) {
        AjaxControlToolkit.DragDropManager.startDragDrop(this, dragVisual, null);
    }
    
    this.get_dropTargetElement = function() {
        return document.body;
    }
    
    // bool canDrop(DragMode, DataType, Data)
    this.canDrop = function(dragMode, dataType, data) {
        return (dataType == "_floatingObject");
    }
    
    // void drop(DragMode, DataType, Data)
    this.drop = function(dragMode, dataType, data) {}
    
    // void onDragEnterTarget(DragMode, DataType, Data)
    this.onDragEnterTarget = function(dragMode, dataType, data) {}
    
    // void onDragLeaveTarget(DragMode, DataType, Data)
    this.onDragLeaveTarget = function(dragMode, dataType, data) {}
    
    // void onDragInTarget(DragMode, DataType, Data)
    this.onDragInTarget = function(dragMode, dataType, data) {}
}
//AjaxControlToolkit.FloatingBehavior.descriptor = {
//    properties: [   {name: "profileProperty", type: String},
//                    {name: "profileComponent", type: Object},
//                    {name: "dragData", type: Object, readOnly: true},
//                    {name: "dragDataType", type: String, readOnly: true},
//                    {name: "dragMode", type: AjaxControlToolkit.DragMode, readOnly: true},
//                    {name: "dropTargetElement", type: Object, readOnly: true},
//                    {name: "handle", type: Sys.UI.DomElement},
//                    {name: "location", type: String} ],
//    events: [   {name: "move"} ]
//}
AjaxControlToolkit.FloatingBehavior.registerClass('AjaxControlToolkit.FloatingBehavior', AjaxControlToolkit.BehaviorBase, AjaxControlToolkit.IDragSource, AjaxControlToolkit.IDropTarget, Sys.IDisposable);

/* END AjaxControlToolkit.DragPanel.FloatingBehavior.js */
/* START AjaxControlToolkit.ModalPopup.ModalPopupBehavior.js */
// (c) Copyright Microsoft Corporation.
// This source is subject to the Microsoft Permissive License.
// See http://www.microsoft.com/resources/sharedsource/licensingbasics/sharedsourcelicenses.mspx.
// All other rights reserved.


/// <reference name="MicrosoftAjax.debug.js" />
/// <reference name="MicrosoftAjaxTimer.debug.js" />
/// <reference name="MicrosoftAjaxWebForms.debug.js" />
/// <reference path="../ExtenderBase/BaseScripts.js" />
/// <reference path="../Common/Common.js" />
/// <reference path="../DynamicPopulate/DynamicPopulateBehavior.js" />
/// <reference path="../RoundedCorners/RoundedCornersBehavior.js" />
/// <reference path="../Compat/Timer/Timer.js" />
/// <reference path="../DropShadow/DropShadowBehavior.js" />
/// <reference path="../Compat/DragDrop/DragDropScripts.js" />
/// <reference path="../DragPanel/FloatingBehavior.js" />


Type.registerNamespace('AjaxControlToolkit');

AjaxControlToolkit.ModalPopupRepositionMode = function() {
    /// <summary>
    /// The ModalPopupRepositionMode enumeration describes how the modal popup repositions
    /// </summary>
    /// <field name="None" type="Number" integer="true" />
    /// <field name="RepositionOnWindowResize" type="Number" integer="true" />
    /// <field name="RepositionOnWindowScroll" type="Number" integer="true" />
    /// <field name="RepositionOnWindowResizeAndScroll" type="Number" integer="true" />
    throw Error.invalidOperation();
}
AjaxControlToolkit.ModalPopupRepositionMode.prototype = {
    None : 0,
    RepositionOnWindowResize : 1,
    RepositionOnWindowScroll : 2,
    RepositionOnWindowResizeAndScroll : 3
}
AjaxControlToolkit.ModalPopupRepositionMode.registerEnum('AjaxControlToolkit.ModalPopupRepositionMode');


AjaxControlToolkit.ModalPopupBehavior = function(element) {
    /// <summary>
    /// The ModalPopupBehavior is used to display the target element as a modal dialog
    /// </summary>
    /// <param name="element" type="Sys.UI.DomElement" domElement="true">
    /// DOM Element the behavior is associated with
    /// </param>
    AjaxControlToolkit.ModalPopupBehavior.initializeBase(this, [element]);
    
    // Properties
    this._PopupControlID = null;
    this._PopupDragHandleControlID = null;
    this._BackgroundCssClass = null;
    this._DropShadow = false;
    this._Drag = false;    
    this._OkControlID = null;
    this._CancelControlID = null;
    this._OnOkScript = null;
    this._OnCancelScript = null;
    this._xCoordinate = -1;
    this._yCoordinate = -1;
    this._repositionMode = AjaxControlToolkit.ModalPopupRepositionMode.RepositionOnWindowResizeAndScroll;

    // Variables
    this._backgroundElement = null;
    this._foregroundElement = null;
    this._relativeOrAbsoluteParentElement = null;
    this._popupElement = null;
    this._dragHandleElement = null;
    this._showHandler = null;
    this._okHandler = null;
    this._cancelHandler = null;
    this._scrollHandler = null;
    this._resizeHandler = null;
    this._windowHandlersAttached = false;
    this._dropShadowBehavior = null;
    this._dragBehavior = null;
    this._isIE6 = false;

    this._saveTabIndexes = new Array();
    this._saveDesableSelect = new Array();
    this._tagWithTabIndex = new Array('A','AREA','BUTTON','INPUT','OBJECT','SELECT','TEXTAREA','IFRAME');
}
AjaxControlToolkit.ModalPopupBehavior.prototype = {
    initialize : function() {
        /// <summary>
        /// Initialize the behavior
        /// </summary>
        
        /*
            <div superpopup - drag container resizable><div -- drag handle\dropshadow foreground></div></div>
        */
        AjaxControlToolkit.ModalPopupBehavior.callBaseMethod(this, 'initialize');
        this._isIE6 = (Sys.Browser.agent == Sys.Browser.InternetExplorer && Sys.Browser.version < 7);
        if(this._PopupDragHandleControlID)
            this._dragHandleElement = $get(this._PopupDragHandleControlID);

        this._popupElement = $get(this._PopupControlID);
        if(this._DropShadow)
        {
            this._foregroundElement = document.createElement('div');
            this._foregroundElement.id = this.get_id() + '_foregroundElement';
            this._popupElement.parentNode.appendChild(this._foregroundElement);
            this._foregroundElement.appendChild(this._popupElement);
        }
        else
        {
            this._foregroundElement = this._popupElement;
        }
        this._backgroundElement = document.createElement('div');
        this._backgroundElement.id = this.get_id() + '_backgroundElement';
        this._backgroundElement.style.display = 'none';
        this._backgroundElement.style.position = 'fixed';
        this._backgroundElement.style.left = '0px';
        this._backgroundElement.style.top = '0px';
        // Want zIndex to big enough that the background sits above everything else
        // CSS 2.1 defines no bounds for the <integer> type, so pick arbitrarily
        this._backgroundElement.style.zIndex = 10000;
        if (this._BackgroundCssClass) {
            this._backgroundElement.className = this._BackgroundCssClass;
        }
        this._foregroundElement.parentNode.appendChild(this._backgroundElement);

        this._foregroundElement.style.display = 'none';
        this._foregroundElement.style.position = 'fixed';
        this._foregroundElement.style.zIndex = $common.getCurrentStyle(this._backgroundElement, 'zIndex', this._backgroundElement.style.zIndex) + 1;
        
        this._showHandler = Function.createDelegate(this, this._onShow);
        $addHandler(this.get_element(), 'click', this._showHandler);

        if (this._OkControlID) {
            this._okHandler = Function.createDelegate(this, this._onOk);
            $addHandler($get(this._OkControlID), 'click', this._okHandler);
        }

        if (this._CancelControlID) {
            this._cancelHandler = Function.createDelegate(this, this._onCancel);
            $addHandler($get(this._CancelControlID), 'click', this._cancelHandler);
        }

        this._scrollHandler = Function.createDelegate(this, this._onLayout);
        this._resizeHandler = Function.createDelegate(this, this._onLayout);

        // Need to know when partial updates complete
        this.registerPartialUpdateEvents();
    },

    dispose : function() {
        /// <summary>
        /// Dispose the behavior
        /// </summary>

        // Going away; restore any changes to the page
        this._hideImplementation();

        if (this._foregroundElement && this._foregroundElement.parentNode) {
            // Remove background we added to the DOM
            this._foregroundElement.parentNode.removeChild(this._backgroundElement);

            if(this._DropShadow) {
                // Remove DIV wrapper added in initialize
                this._foregroundElement.parentNode.appendChild(this._popupElement);
                this._foregroundElement.parentNode.removeChild(this._foregroundElement);
            }
        }

        this._scrollHandler = null;
        this._resizeHandler = null;
        if (this._cancelHandler && $get(this._CancelControlID)) {
            $removeHandler($get(this._CancelControlID), 'click', this._cancelHandler);
            this._cancelHandler = null;
        }
        if (this._okHandler && $get(this._OkControlID)) {
            $removeHandler($get(this._OkControlID), 'click', this._okHandler);
            this._okHandler = null;
        }
        if (this._showHandler) {
            $removeHandler(this.get_element(), 'click', this._showHandler);
            this._showHandler = null;
        }
        
        AjaxControlToolkit.ModalPopupBehavior.callBaseMethod(this, 'dispose');
    },

    _attachPopup : function() {
        /// <summary>
        /// Attach the event handlers for the popup
        /// </summary>

        if (this._DropShadow && !this._dropShadowBehavior) {
            this._dropShadowBehavior = $create(AjaxControlToolkit.DropShadowBehavior, {}, null, null, this._popupElement);
        }
        if (this._dragHandleElement && !this._dragBehavior) {
            this._dragBehavior = $create(AjaxControlToolkit.FloatingBehavior, {"handle" : this._dragHandleElement}, null, null, this._foregroundElement);
        }        
                
        $addHandler(window, 'resize', this._resizeHandler);
        $addHandler(window, 'scroll', this._scrollHandler);
        this._windowHandlersAttached = true;
    },

    _detachPopup : function() {
        /// <summary>
        /// Detach the event handlers for the popup
        /// </summary>

        if (this._windowHandlersAttached) {
            if (this._scrollHandler) {
                $removeHandler(window, 'scroll', this._scrollHandler);
            }
            if (this._resizeHandler) {
                $removeHandler(window, 'resize', this._resizeHandler);
            }
            this._windowHandlersAttached = false;
        }
        
        if (this._dragBehavior) {
            this._dragBehavior.dispose();
            this._dragBehavior = null;
        }       
        
        if (this._dropShadowBehavior) {
            this._dropShadowBehavior.dispose();
            this._dropShadowBehavior = null;
        }
    },

    _onShow : function(e) {
        /// <summary>
        /// Handler for the target's click event
        /// </summary>
        /// <param name="e" type="Sys.UI.DomEvent">
        /// Event info
        /// </param>

        if (!this.get_element().disabled) {
            this.show();
            e.preventDefault();
            return false;
        }
    },

    _onOk : function(e) {
        /// <summary>
        /// Handler for the modal dialog's OK button click
        /// </summary>
        /// <param name="e" type="Sys.UI.DomEvent">
        /// Event info
        /// </param>

        var element = $get(this._OkControlID);
        if (element && !element.disabled) {
            if (this.hide() && this._OnOkScript) {
                window.setTimeout(this._OnOkScript, 0);
            }
            e.preventDefault();
            return false;
        }
    },

    _onCancel : function(e) {
        /// <summary>
        /// Handler for the modal dialog's Cancel button click
        /// </summary>
        /// <param name="e" type="Sys.UI.DomEvent">
        /// Event info
        /// </param>

        var element = $get(this._CancelControlID);
        if (element && !element.disabled) {
            if (this.hide() && this._OnCancelScript) {
                window.setTimeout(this._OnCancelScript, 0);
            }
            e.preventDefault();
            return false;
        }
    },

    _onLayout : function(e) {
        /// <summary>
        /// Handler for scrolling and resizing events that would require a repositioning of the modal dialog
        /// </summary>
        /// <param name="e" type="Sys.UI.DomEvent">
        /// Event info
        /// </param>
        var positioning = this.get_repositionMode();
        if (((positioning === AjaxControlToolkit.ModalPopupRepositionMode.RepositionOnWindowScroll) ||
            (positioning === AjaxControlToolkit.ModalPopupRepositionMode.RepositionOnWindowResizeAndScroll)) && (e.type === 'scroll')) {
            this._layout();
        } else if (((positioning === AjaxControlToolkit.ModalPopupRepositionMode.RepositionOnWindowResize) ||
            (positioning === AjaxControlToolkit.ModalPopupRepositionMode.RepositionOnWindowResizeAndScroll)) && (e.type === 'resize')) {
            this._layout();
        } else {
            // Layout background element again to make sure it covers the whole background.
            // This needs to be called separately since _layout will not be always called
            // to reposition the popup depending on the RepositionMode but the background needs 
            // to handle the resize/scroll every time.
            this._layoutBackgroundElement();
        }
    },

    show : function() {
        /// <summary>
        /// Display the element referenced by PopupControlID as a modal dialog
        /// </summary>
        
        var eventArgs = new Sys.CancelEventArgs();
        this.raiseShowing(eventArgs);
        if (eventArgs.get_cancel()) {
            return;
        }
        
        this.populate();
        this._attachPopup();

        this._backgroundElement.style.display = '';
        this._foregroundElement.style.display = '';
        this._popupElement.style.display = '';
        if (this._isIE6) {
            this._foregroundElement.style.position = 'absolute';
            this._backgroundElement.style.position = 'absolute'; 
            // find the relative or absolute parent
            var tempRelativeOrAbsoluteParent = this._foregroundElement.parentNode;
            while (tempRelativeOrAbsoluteParent && (tempRelativeOrAbsoluteParent != document.documentElement)) {
                if((tempRelativeOrAbsoluteParent.style.position != 'relative') && (tempRelativeOrAbsoluteParent.style.position != 'absolute')) {
                    tempRelativeOrAbsoluteParent = tempRelativeOrAbsoluteParent.parentNode;
                } else {
                    this._relativeOrAbsoluteParentElement = tempRelativeOrAbsoluteParent;
                    break;
                }
            }                       
        }        


        // Disable TAB
        this.disableTab();

        this._layout();
        // On pages that don't need scrollbars, Firefox and Safari act like
        // one or both are present the first time the layout code runs which
        // obviously leads to display issues - run the layout code a second
        // time to work around this problem
        this._layout();
        
        this.raiseShown(Sys.EventArgs.Empty);
    },

    disableTab : function() {
        /// <summary>
        /// Change the tab indices so we only tab through the modal popup
        /// (and hide SELECT tags in IE6)
        /// </summary>

        var i = 0;
        var tagElements;
        var tagElementsInPopUp = new Array();
        Array.clear(this._saveTabIndexes);

        //Save all popup's tag in tagElementsInPopUp
        for (var j = 0; j < this._tagWithTabIndex.length; j++) {
            tagElements = this._foregroundElement.getElementsByTagName(this._tagWithTabIndex[j]);
            for (var k = 0 ; k < tagElements.length; k++) {
                tagElementsInPopUp[i] = tagElements[k];
                i++;
            }
        }

        i = 0;
        for (var j = 0; j < this._tagWithTabIndex.length; j++) {
            tagElements = document.getElementsByTagName(this._tagWithTabIndex[j]);
            for (var k = 0 ; k < tagElements.length; k++) {
                if (Array.indexOf(tagElementsInPopUp, tagElements[k]) == -1)  {
                    this._saveTabIndexes[i] = {tag: tagElements[k], index: tagElements[k].tabIndex};
                    tagElements[k].tabIndex="-1";
                    i++;
                }
            }
        }

        //IE6 Bug with SELECT element always showing up on top
        i = 0;
        if ((Sys.Browser.agent === Sys.Browser.InternetExplorer) && (Sys.Browser.version < 7)) {
            //Save SELECT in PopUp
            var tagSelectInPopUp = new Array();
            for (var j = 0; j < this._tagWithTabIndex.length; j++) {
                tagElements = this._foregroundElement.getElementsByTagName('SELECT');
                for (var k = 0 ; k < tagElements.length; k++) {
                    tagSelectInPopUp[i] = tagElements[k];
                    i++;
                }
            }

            i = 0;
            Array.clear(this._saveDesableSelect);
            tagElements = document.getElementsByTagName('SELECT');
            for (var k = 0 ; k < tagElements.length; k++) {
                if (Array.indexOf(tagSelectInPopUp, tagElements[k]) == -1)  {
                    this._saveDesableSelect[i] = {tag: tagElements[k], visib: $common.getCurrentStyle(tagElements[k], 'visibility')} ;
                    tagElements[k].style.visibility = 'hidden';
                    i++;
                }
            }
        }
    },

    restoreTab : function() {
        /// <summary>
        /// Restore the tab indices so we tab through the page like normal
        /// (and restore SELECT tags in IE6)
        /// </summary>

        for (var i = 0; i < this._saveTabIndexes.length; i++) {
            this._saveTabIndexes[i].tag.tabIndex = this._saveTabIndexes[i].index;
        }
        Array.clear(this._saveTabIndexes);

        //IE6 Bug with SELECT element always showing up on top
        if ((Sys.Browser.agent === Sys.Browser.InternetExplorer) && (Sys.Browser.version < 7)) {
            for (var k = 0 ; k < this._saveDesableSelect.length; k++) {
                this._saveDesableSelect[k].tag.style.visibility = this._saveDesableSelect[k].visib;
            }
            Array.clear(this._saveDesableSelect);
        }
    },

    hide : function() {
        /// <summary>
        /// Hide the modal dialog
        /// </summary>
        /// <returns type="Boolean" mayBeNull="false">
        /// Whether or not the dialog was hidden
        /// </returns>

        var eventArgs = new Sys.CancelEventArgs();
        this.raiseHiding(eventArgs);
        if (eventArgs.get_cancel()) {
            return false;
        }

        this._hideImplementation();

        this.raiseHidden(Sys.EventArgs.Empty);
        return true;
    },

    _hideImplementation : function() {
        /// <summary>
        /// Internal implementation to hide the modal dialog
        /// </summary>

        this._backgroundElement.style.display = 'none';
        this._foregroundElement.style.display = 'none';

        this.restoreTab();

        this._detachPopup();
    },

    _layout : function() {
        /// <summary>
        /// Position the modal dialog 
        /// </summary>
        var scrollLeft = (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
        var scrollTop = (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
               
        var clientBounds = $common.getClientBounds();
        var clientWidth = clientBounds.width;
        var clientHeight = clientBounds.height;
        
        // Setup the location of the background element
        this._layoutBackgroundElement();

        var xCoord = 0;
        var yCoord = 0;
        if(this._xCoordinate < 0) {
            var foregroundelementwidth = this._foregroundElement.offsetWidth? this._foregroundElement.offsetWidth: this._foregroundElement.scrollWidth;
            xCoord = ((clientWidth-foregroundelementwidth)/2);
            // workaround for drag behavior which calls setlocation which in turn
            // changes the position of the panel to be absolute and requiring us
            // to add the scrollLeft so that it is positioned correctly.
            if (this._foregroundElement.style.position == 'absolute') {
                xCoord += scrollLeft;
            }
            this._foregroundElement.style.left = xCoord + 'px';
            
        } else {
            if(this._isIE6) {
                this._foregroundElement.style.left = (this._xCoordinate + scrollLeft) + 'px';
                xCoord = this._xCoordinate + scrollLeft;
            }
            else {
                this._foregroundElement.style.left = this._xCoordinate + 'px';
                xCoord = this._xCoordinate;
            }
        }
        if(this._yCoordinate < 0) {
            var foregroundelementheight = this._foregroundElement.offsetHeight? this._foregroundElement.offsetHeight: this._foregroundElement.scrollHeight;
            yCoord = ((clientHeight-foregroundelementheight)/2);           
            // workaround for drag behavior which calls setlocation which in turn
            // changes the position of the panel to be absolute and requiring us
            // to add the scrollLeft so that it is positioned correctly.
            if (this._foregroundElement.style.position == 'absolute') {
                yCoord += scrollTop;
            }
            this._foregroundElement.style.top = yCoord + 'px';
          
        } else {
            if(this._isIE6) {
                this._foregroundElement.style.top = (this._yCoordinate + scrollTop) + 'px';
                yCoord = this._yCoordinate + scrollTop;
            }
            else {
                this._foregroundElement.style.top = this._yCoordinate + 'px';
                yCoord = this._yCoordinate;
            }
        }

        // make sure get location agrees with the location of the foreground element
        this._layoutForegroundElement(xCoord, yCoord);
        
        if (this._dropShadowBehavior) {
            this._dropShadowBehavior.setShadow();
            window.setTimeout(Function.createDelegate(this, this._fixupDropShadowBehavior), 0);
        }
        
        // layout background element again to make sure it covers the whole background 
        // in case things moved around when laying out the foreground element
        this._layoutBackgroundElement();
    },
    
    _layoutForegroundElement : function(xCoord, yCoord) {
        /// <summary>
        /// Set the correct location of the foreground element to ensure that it is absolutely 
        /// positioned with respect to the browser. This is just a workaround for IE 6 since
        /// elements nested in relative parents cause modal popup positioning issues and 'fixed'
        /// is not supported by IE 6. Hence we manually compute the right location of the popup.
        /// </summary>
        /// <param name="xCoord" type="Number" integer="true" maybenull="false">
        /// <param name="yCoord" type="Number" integer="true" maybenull="false">        
        /// </params>
        
        if (this._isIE6 && this._relativeOrAbsoluteParentElement) {
            var foregroundLocation = $common.getLocation(this._foregroundElement);  
            var relativeParentLocation = $common.getLocation(this._relativeOrAbsoluteParentElement);
            var getLocationXCoord = foregroundLocation.x;
            if (getLocationXCoord != xCoord) {
                // offset it by that amount
                this._foregroundElement.style.left = (xCoord - relativeParentLocation.x) + 'px';
            } 
                        
            var getLocationYCoord = foregroundLocation.y;
            if (getLocationYCoord != yCoord) {
                // offset it by that amount
                this._foregroundElement.style.top = (yCoord - relativeParentLocation.y) + 'px';
            } 
        }
    },
    
    _layoutBackgroundElement : function() {
        /// <summary>
        /// Set the correct location of the background element to ensure that it is absolutely 
        /// positioned with respect to the browser.
        /// </summary>

        // Background element needs to cover the visible client area completely hence its
        // top and left coordinates need to be 0, and if relatively positioned its getlocation
        // value needs to be 0.
        if(this._isIE6) { 
            var backgroundLocation = $common.getLocation(this._backgroundElement);
            var backgroundXCoord = backgroundLocation.x;
            if (backgroundXCoord != 0) {
                // offset it by that amount. This is assuming only one level of nesting. If
                // multiple parents with absolute/relative positioning are setup this may not 
                // cover the whole background.
                this._backgroundElement.style.left = (-backgroundXCoord) + 'px';
            } 
            
            var backgroundYCoord = backgroundLocation.y;
            if (backgroundYCoord != 0) {
                // offset it by that amount. This is assuming only one level of nesting. If
                // multiple parents with absolute/relative positioning are setup this may not 
                // cover the whole background.
                this._backgroundElement.style.top = (-backgroundYCoord) + 'px';
            }         
        }
        var clientBounds = $common.getClientBounds();
        var clientWidth = clientBounds.width;
        var clientHeight = clientBounds.height;
        this._backgroundElement.style.width = Math.max(Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), clientWidth)+'px';
        this._backgroundElement.style.height = Math.max(Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), clientHeight)+'px';
    },

    _fixupDropShadowBehavior : function() {
        /// <summary>
        /// Some browsers don't update the location values immediately, so
        /// the location of the drop shadow would always be a step behind
        /// without this method
        /// </summary>

        if (this._dropShadowBehavior) {
            this._dropShadowBehavior.setShadow();
        }
    },

    _partialUpdateEndRequest : function(sender, endRequestEventArgs) {
        /// <summary>
        /// Show the popup if requested during a partial postback
        /// </summary>
        /// <param name="sender" type="Object">
        /// Sender
        /// </param>
        /// <param name="endRequestEventArgs" type="Sys.WebForms.EndRequestEventArgs">
        /// Event arguments
        /// </param>
        /// <returns />
        AjaxControlToolkit.ModalPopupBehavior.callBaseMethod(this, '_partialUpdateEndRequest', [sender, endRequestEventArgs]);

        if (this.get_element()) {
            // Look up result by element's ID
            var action = endRequestEventArgs.get_dataItems()[this.get_element().id];
            if ("show" == action) {
                this.show();
            } else if ("hide" == action) {
                this.hide();
            }
        }

        // Async postback may have added content; re-layout to accomodate it
        this._layout();
    },

    _onPopulated : function(sender, eventArgs) {
        /// <summary>
        /// Re-layout the popup after we've dynamically populated
        /// </summary>
        /// <param name="sender" type="Object">
        /// Sender
        /// </param>
        /// <param name="eventArgs" type="Sys.EventArgs">
        /// Event arguments
        /// </param>
        /// <returns />
        AjaxControlToolkit.ModalPopupBehavior.callBaseMethod(this, '_onPopulated', [sender, eventArgs]);

        // Dynamic populate may have added content; re-layout to accomodate it
        this._layout();
    },
    
    get_PopupControlID : function() {
        /// <value type="String">
        /// The ID of the element to display as a modal popup
        /// </value>
        return this._PopupControlID;
    },
    set_PopupControlID : function(value) {
        if (this._PopupControlID != value) {
            this._PopupControlID = value;
            this.raisePropertyChanged('PopupControlID');
        }
    },

    get_X: function() {
        /// <value type="Number" integer="true">
        /// The number of pixels from the left of the browser to position the modal popup.
        /// </value>
        return this._xCoordinate;
    },
    set_X: function(value) {
        if (this._xCoordinate != value) {
            this._xCoordinate = value;
            this.raisePropertyChanged('X');
        }
    },

    get_Y: function() {
        /// <value type="Number" integer="true">
        /// The number of pixels from the top of the browser to position the modal popup.
        /// </value>
        return this._yCoordinate;
    },
    set_Y: function(value) {
        if (this._yCoordinate != value) {
            this._yCoordinate = value;
            this.raisePropertyChanged('Y');
        }
    },
       
    get_PopupDragHandleControlID : function() {
        /// <value type="String">
        /// The ID of the element to display as the drag handle for the modal popup
        /// </value>
        return this._PopupDragHandleControlID;
    },
    set_PopupDragHandleControlID : function(value) {
        if (this._PopupDragHandleControlID != value) {
            this._PopupDragHandleControlID = value;
            this.raisePropertyChanged('PopupDragHandleControlID');
        }
    },

    get_BackgroundCssClass : function() {
        /// <value type="String">
        /// The CSS class to apply to the background when the modal popup is displayed
        /// </value>
        return this._BackgroundCssClass;
    },
    set_BackgroundCssClass : function(value) {
        if (this._BackgroundCssClass != value) {
            this._BackgroundCssClass = value;
            this.raisePropertyChanged('BackgroundCssClass');
        }
    },

    get_DropShadow : function() {
        /// <value type="Boolean">
        /// Whether or not a drop-shadow should be added to the modal popup
        /// </value>
        return this._DropShadow;
    },
    set_DropShadow : function(value) {
        if (this._DropShadow != value) {
            this._DropShadow = value;
            this.raisePropertyChanged('DropShadow');
        }
    },

    get_Drag : function() {
        /// <value type="Boolean">
        /// Obsolete: Setting the _Drag property is a noop
        /// </value>
        return this._Drag;
    },
    set_Drag : function(value) {
        if (this._Drag != value) {
            this._Drag = value;
            this.raisePropertyChanged('Drag');
        }
    },

    get_OkControlID : function() {
        /// <value type="String">
        /// The ID of the element that dismisses the modal popup
        /// </value>
        return this._OkControlID;
    },
    set_OkControlID : function(value) {
        if (this._OkControlID != value) {
            this._OkControlID = value;
            this.raisePropertyChanged('OkControlID');
        }
    },

    get_CancelControlID : function() {
        /// <value type="String">
        /// The ID of the element that cancels the modal popup
        /// </value>
        return this._CancelControlID;
    },
    set_CancelControlID : function(value) {
        if (this._CancelControlID != value) {
            this._CancelControlID = value;
            this.raisePropertyChanged('CancelControlID');
        }
    },

    get_OnOkScript : function() {
        /// <value type="String">
        /// Script to run when the modal popup is dismissed with the OkControlID
        /// </value>
        return this._OnOkScript;
    },
    set_OnOkScript : function(value) {
        if (this._OnOkScript != value) {
            this._OnOkScript = value;
            this.raisePropertyChanged('OnOkScript');
        }
    },

    get_OnCancelScript : function() {
        /// <value type="String">
        /// Script to run when the modal popup is dismissed with the CancelControlID
        /// </value>
        return this._OnCancelScript;
    },
    set_OnCancelScript : function(value) {
        if (this._OnCancelScript != value) {
            this._OnCancelScript = value;
            this.raisePropertyChanged('OnCancelScript');
        }
    },

    get_repositionMode : function() {
        /// <value type="AjaxControlToolkit.ModalPopupRepositionMode">
        /// Determines if the ModalPopup should be repositioned on window resize/scroll
        /// </value>
        return this._repositionMode;
    },
    set_repositionMode : function(value) {
        if (this._repositionMode !== value) {
            this._repositionMode = value;
            this.raisePropertyChanged('RepositionMode');
        }
    },
    
    add_showing : function(handler) {
        /// <summary>
        /// Add an event handler for the showing event
        /// </summary>
        /// <param name="handler" type="Function" mayBeNull="false">
        /// Event handler
        /// </param>
        /// <returns />
        this.get_events().addHandler('showing', handler);
    },
    remove_showing : function(handler) {
        /// <summary>
        /// Remove an event handler from the showing event
        /// </summary>
        /// <param name="handler" type="Function" mayBeNull="false">
        /// Event handler
        /// </param>
        /// <returns />
        this.get_events().removeHandler('showing', handler);
    },
    raiseShowing : function(eventArgs) {
        /// <summary>
        /// Raise the showing event
        /// </summary>
        /// <param name="eventArgs" type="Sys.CancelEventArgs" mayBeNull="false">
        /// Event arguments for the showing event
        /// </param>
        /// <returns />
        
        var handler = this.get_events().getHandler('showing');
        if (handler) {
            handler(this, eventArgs);
        }
    },
    
    add_shown : function(handler) {
        /// <summary>
        /// Add an event handler for the shown event
        /// </summary>
        /// <param name="handler" type="Function" mayBeNull="false">
        /// Event handler
        /// </param>
        /// <returns />
        this.get_events().addHandler('shown', handler);
    },
    remove_shown : function(handler) {
        /// <summary>
        /// Remove an event handler from the shown event
        /// </summary>
        /// <param name="handler" type="Function" mayBeNull="false">
        /// Event handler
        /// </param>
        /// <returns />
        this.get_events().removeHandler('shown', handler);
    },
    raiseShown : function(eventArgs) {
        /// <summary>
        /// Raise the shown event
        /// </summary>
        /// <param name="eventArgs" type="Sys.EventArgs" mayBeNull="false">
        /// Event arguments for the shown event
        /// </param>
        /// <returns />
        
        var handler = this.get_events().getHandler('shown');
        if (handler) {
            handler(this, eventArgs);
        }
    },
    
    add_hiding : function(handler) {
        /// <summary>
        /// Add an event handler for the hiding event
        /// </summary>
        /// <param name="handler" type="Function" mayBeNull="false">
        /// Event handler
        /// </param>
        /// <returns />
        this.get_events().addHandler('hiding', handler);
    },
    remove_hiding : function(handler) {
        /// <summary>
        /// Remove an event handler from the hiding event
        /// </summary>
        /// <param name="handler" type="Function" mayBeNull="false">
        /// Event handler
        /// </param>
        /// <returns />
        this.get_events().removeHandler('hiding', handler);
    },
    raiseHiding : function(eventArgs) {
        /// <summary>
        /// Raise the hiding event
        /// </summary>
        /// <param name="eventArgs" type="Sys.CancelEventArgs" mayBeNull="false">
        /// Event arguments for the hiding event
        /// </param>
        /// <returns />
        
        var handler = this.get_events().getHandler('hiding');
        if (handler) {
            handler(this, eventArgs);
        }
    },
    
    add_hidden : function(handler) {
        /// <summary>
        /// Add an event handler for the hidden event
        /// </summary>
        /// <param name="handler" type="Function" mayBeNull="false">
        /// Event handler
        /// </param>
        /// <returns />
        this.get_events().addHandler('hidden', handler);
    },
    remove_hidden : function(handler) {
        /// <summary>
        /// Remove an event handler from the hidden event
        /// </summary>
        /// <param name="handler" type="Function" mayBeNull="false">
        /// Event handler
        /// </param>
        /// <returns />
        this.get_events().removeHandler('hidden', handler);
    },
    raiseHidden : function(eventArgs) {
        /// <summary>
        /// Raise the hidden event
        /// </summary>
        /// <param name="eventArgs" type="Sys.EventArgs" mayBeNull="false">
        /// Event arguments for the hidden event
        /// </param>
        /// <returns />
        
        var handler = this.get_events().getHandler('hidden');
        if (handler) {
            handler(this, eventArgs);
        }
    }
}
AjaxControlToolkit.ModalPopupBehavior.registerClass('AjaxControlToolkit.ModalPopupBehavior', AjaxControlToolkit.DynamicPopulateBehaviorBase);

AjaxControlToolkit.ModalPopupBehavior.invokeViaServer = function(behaviorID, show) {
    /// <summary>
    /// This static function (that is intended to be called from script emitted
    /// on the server) will show or hide the behavior associated with behaviorID
    /// (i.e. to use this, the ModalPopupExtender must have an ID or BehaviorID) and
    /// will either show or hide depending on the show parameter.
    /// </summary>
    /// <param name="behaviorID" type="String">
    /// ID of the modal popup behavior
    /// </param>
    /// <param name="show" type="Boolean">
    /// Whether to show or hide the modal popup
    /// </param>
    var behavior = $find(behaviorID);
    if (behavior) {
        if (show) {
            behavior.show();
        } else {
            behavior.hide();
        }
    }
}

/* END AjaxControlToolkit.ModalPopup.ModalPopupBehavior.js */
if(typeof(Sys)!=='undefined')Sys.Application.notifyScriptLoaded();
(function() {
    function loadHandler() {
        var hf = $get('ctl00_ScriptManager1_TSM');
        if (!hf) return;
        if (!hf._RSM_init) { hf._RSM_init = true; hf.value = ''; }
        hf.value += ';;System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35:en-US:eb198dbd-2212-44f6-bb15-882bde414f00:ea597d4b:76254418;AjaxControlToolkit, Version=3.0.20820.31124, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e:en-US:7876e3f7-f7f3-41c9-9df1-0d4477bce7e0:b14bb7d5:13f47f54:3c55b13e:dc2d6e36:de51bc8f:1d056c78:a3e10fa2:701e375f:a4313c7a';                                    
        Sys.Application.remove_load(loadHandler);
    };
    Sys.Application.add_load(loadHandler);
})();
