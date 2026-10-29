(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Hi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function qf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},qa={duration:.5,overwrite:!1,delay:0},ih,un,Dt,oi=1e8,St=1/oi,jc=Math.PI*2,ig=jc/4,rg=0,Yf=Math.sqrt,sg=Math.cos,ag=Math.sin,on=function(e){return typeof e=="string"},zt=function(e){return typeof e=="function"},$i=function(e){return typeof e=="number"},rh=function(e){return typeof e>"u"},Ri=function(e){return typeof e=="object"},Nn=function(e){return e!==!1},sh=function(){return typeof window<"u"},po=function(e){return zt(e)||on(e)},$f=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},vn=Array.isArray,og=/random\([^)]+\)/g,lg=/,\s*/g,Yh=/(?:-?\.?\d|\.)+/gi,jf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Is=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ec=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Kf=/[+-]=-?[.\d]+/,cg=/[^,'"\[\]\s]+/gi,ug=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ut,Mi,Kc,ah,Jn={},vl={},Zf,Jf=function(e){return(vl=js(e,Jn))&&kn},oh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ya=function(e,t){return!t&&console.warn(e)},Qf=function(e,t){return e&&(Jn[e]=t)&&vl&&(vl[e]=t)||Jn},$a=function(){return 0},hg={suppressEvents:!0,isStart:!0,kill:!1},nl={suppressEvents:!0,kill:!1},dg={suppressEvents:!0},lh={},fr=[],Zc={},ep,Xn={},tc={},$h=30,il=[],ch="",uh=function(e){var t=e[0],n,i;if(Ri(t)||zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=il.length;i--&&!il[i].targetTest(t););n=il[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Sp(e[i],n)))||e.splice(i,1);return e},Xr=function(e){return e._gsap||uh(li(e))[0]._gsap},tp=function(e,t,n){return(n=e[t])&&zt(n)?e[t]():rh(n)&&e.getAttribute&&e.getAttribute(t)||n},Un=function(e,t){return(e=e.split(",")).forEach(t)||e},Ht=function(e){return Math.round(e*1e5)/1e5||0},Nt=function(e){return Math.round(e*1e7)/1e7||0},Bs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},fg=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},xl=function(){var e=fr.length,t=fr.slice(0),n,i;for(Zc={},fr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},hh=function(e){return!!(e._initted||e._startAt||e.add)},np=function(e,t,n,i){fr.length&&!un&&xl(),e.render(t,n,!!(un&&t<0&&hh(e))),fr.length&&!un&&xl()},ip=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(cg).length<2?t:on(e)?e.trim():e},rp=function(e){return e},Qn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},pg=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},js=function(e,t){for(var n in t)e[n]=t[n];return e},jh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ri(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},yl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ca=function(e){var t=e.parent||Ut,n=e.keyframes?pg(vn(e.keyframes)):Qn;if(Nn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},mg=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},sp=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},kl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},vr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},qr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},gg=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Jc=function(e,t,n,i){return e._startAt&&(un?e._startAt.revert(nl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},_g=function r(e){return!e||e._ts&&r(e.parent)},Kh=function(e){return e._repeat?Ks(e._tTime,e=e.duration()+e._rDelay)*e:0},Ks=function(e,t){var n=Math.floor(e=Nt(e/t));return e&&n===e?n-1:n},Ml=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Bl=function(e){return e._end=Nt(e._start+(e._tDur/Math.abs(e._ts||e._rts||St)||0))},zl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Nt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Bl(e),n._dirty||qr(n,e)),e},ap=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ml(e.rawTime(),t),(!t._dur||oo(0,t.totalDuration(),n)-t._tTime>St)&&t.render(n,!0)),qr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-St}},wi=function(e,t,n,i){return t.parent&&vr(t),t._start=Nt(($i(n)?n:n||e!==Ut?ii(e,n,t):e._time)+t._delay),t._end=Nt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),sp(e,t,"_first","_last",e._sort?"_start":0),Qc(t)||(e._recent=t),i||ap(e,t),e._ts<0&&zl(e,e._tTime),e},op=function(e,t){return(Jn.ScrollTrigger||oh("scrollTrigger",t))&&Jn.ScrollTrigger.create(t,e)},lp=function(e,t,n,i,s){if(fh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!un&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ep!==Yn.frame)return fr.push(e),e._lazy=[s,i],1},vg=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Qc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},xg=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&vg(e)&&!(!e._initted&&Qc(e))||(e._ts<0||e._dp._ts<0)&&!Qc(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=oo(0,e._tDur,t),u=Ks(l,o),e._yoyo&&u&1&&(a=1-a),u!==Ks(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||un||i||e._zTime===St||!t&&e._zTime){if(!e._initted&&lp(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?St:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Jc(e,t,n,!0),e._onUpdate&&!n&&jn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&jn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&vr(e,1),!n&&!un&&(jn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},yg=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Zs=function(e,t,n,i){var s=e._repeat,a=Nt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Nt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&zl(e,e._tTime=e._tDur*o),e.parent&&Bl(e),n||qr(e.parent,e),e},Zh=function(e){return e instanceof Dn?qr(e):Zs(e,e._dur)},Mg={_start:0,endTime:$a,totalDuration:$a},ii=function r(e,t,n){var i=e.labels,s=e._recent||Mg,a=e.duration()>=oi?s.endTime(!1):e._dur,o,l,c;return on(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(vn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ra=function(e,t,n){var i=$i(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Nn(l.vars.inherit)&&l.parent;a.immediateRender=Nn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Yt(t[0],a,t[s+1])},wr=function(e,t){return e||e===0?t(e):t},oo=function(e,t,n){return n<e?e:n>t?t:n},gn=function(e,t){return!on(e)||!(t=ug.exec(e))?"":t[1]},Sg=function(e,t,n){return wr(n,function(i){return oo(e,t,i)})},eu=[].slice,cp=function(e,t){return e&&Ri(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ri(e[0]))&&!e.nodeType&&e!==Mi},bg=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return on(i)&&!t||cp(i,1)?(s=n).push.apply(s,li(i)):n.push(i)})||n},li=function(e,t,n){return Dt&&!t&&Dt.selector?Dt.selector(e):on(e)&&!n&&(Kc||!Js())?eu.call((t||ah).querySelectorAll(e),0):vn(e)?bg(e,n):cp(e)?eu.call(e,0):e?[e]:[]},tu=function(e){return e=li(e)[0]||Ya("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return li(t,n.querySelectorAll?n:n===e?Ya("Invalid scope")||ah.createElement("div"):e)}},up=function(e){return e.sort(function(){return .5-Math.random()})},hp=function(e){if(zt(e))return e;var t=Ri(e)?e:{each:e},n=Yr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return on(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,p=a[g],m,S,x,M,E,v,b,A,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,oi])[1],!w){for(b=-oi;b<(b=_[w++].getBoundingClientRect().left)&&w<g;);w<g&&w--}for(p=a[g]=[],m=l?Math.min(w,g)*u-.5:i%w,S=w===oi?0:l?g*h/w-.5:i/w|0,b=0,A=oi,v=0;v<g;v++)x=v%w-m,M=S-(v/w|0),p[v]=E=c?Math.abs(c==="y"?M:x):Yf(x*x+M*M),E>b&&(b=E),E<A&&(A=E);i==="random"&&up(p),p.max=b-A,p.min=A,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(w>g?g-1:c?c==="y"?g/w:w:Math.max(w,g/w))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=gn(t.amount||t.each)||0,n=n&&g<0?Og(n):n}return g=(p[f]-p.min)/p.max||0,Nt(p.b+(n?n(g):g)*p.v)+p.u}},nu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Nt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+($i(n)?0:gn(n))}},dp=function(e,t){var n=vn(e),i,s;return!n&&Ri(e)&&(i=n=e.radius||oi,e.values?(e=li(e.values),(s=!$i(e[0]))&&(i*=i)):e=nu(e.increment)),wr(t,n?zt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=oi,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,s||u===a||$i(a)?u:u+gn(a)}:nu(e))},fp=function(e,t,n,i){return wr(vn(e)?!t:n===!0?!!(n=0):!i,function(){return vn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},wg=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Eg=function(e,t){return function(n){return e(parseFloat(n))+(t||gn(n))}},Tg=function(e,t,n){return mp(e,t,0,1,n)},pp=function(e,t,n){return wr(n,function(i){return e[~~t(i)]})},Ag=function r(e,t,n){var i=t-e;return vn(e)?pp(e,r(0,e.length),t):wr(n,function(s){return(i+(s-e)%i)%i+e})},Cg=function r(e,t,n){var i=t-e,s=i*2;return vn(e)?pp(e,r(0,e.length-1),t):wr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},ja=function(e){return e.replace(og,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(lg);return fp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},mp=function(e,t,n,i,s){var a=t-e,o=i-n;return wr(s,function(l){return n+((l-e)/a*o||0)})},Rg=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=on(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(vn(e)&&!vn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=js(vn(e)?[]:{},e));if(!u){for(l in t)dh.call(o,e,l,"get",t[l]);s=function(_){return gh(_,o)||(a?e.p:e)}}}return wr(n,s)},Jh=function(e,t,n){var i=e.labels,s=oi,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},jn=function(e,t,n){var i=e.vars,s=i[t],a=Dt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&fr.length&&xl(),o&&(Dt=o),u=l?s.apply(c,l):s.call(c),Dt=a,u},ya=function(e){return vr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!un),e.progress()<1&&jn(e,"onInterrupt"),e},Ns,gp=[],_p=function(e){if(e)if(e=!e.name&&e.default||e,sh()||e.headless){var t=e.name,n=zt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:$a,render:gh,add:dh,kill:qg,modifier:Xg,rawVars:0},a={targetTest:0,get:0,getSetter:mh,aliases:{},register:0};if(Js(),e!==i){if(Xn[t])return;Qn(i,Qn(yl(e,s),a)),js(i.prototype,js(s,yl(e,a))),Xn[i.prop=t]=i,e.targetTest&&(il.push(i),lh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Qf(t,i),e.register&&e.register(kn,i,On)}else gp.push(e)},Mt=255,Ma={aqua:[0,Mt,Mt],lime:[0,Mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Mt],navy:[0,0,128],white:[Mt,Mt,Mt],olive:[128,128,0],yellow:[Mt,Mt,0],orange:[Mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Mt,0,0],pink:[Mt,192,203],cyan:[0,Mt,Mt],transparent:[Mt,Mt,Mt,0]},nc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Mt+.5|0},vp=function(e,t,n){var i=e?$i(e)?[e>>16,e>>8&Mt,e&Mt]:0:Ma.black,s,a,o,l,c,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ma[e])i=Ma[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Mt,i&Mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Mt,e&Mt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Yh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=nc(l+1/3,s,a),i[1]=nc(l,s,a),i[2]=nc(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(jf),n&&i.length<4&&(i[3]=1),i}else i=e.match(Yh)||Ma.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/Mt,a=i[1]/Mt,o=i[2]/Mt,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(a-o)/d+(a<o?6:0):h===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},xp=function(e){var t=[],n=[],i=-1;return e.split(pr).forEach(function(s){var a=s.match(Is)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Qh=function(e,t,n){var i="",s=(e+i).match(pr),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=vp(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=xp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(pr,"1").split(Is),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(pr),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},pr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ma)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Pg=/hsl[a]?\(/,yp=function(e){var t=e.join(" "),n;if(pr.lastIndex=0,pr.test(t))return n=Pg.test(t),e[1]=Qh(e[1],n),e[0]=Qh(e[0],n,xp(e[1])),!0},Ka,Yn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,f,d,_=function g(p){var m=r()-i,S=p===!0,x,M,E,v;if((m>e||m<0)&&(n+=m-t),i+=m,E=i-n,x=E-a,(x>0||S)&&(v=++h.frame,f=E-h.time*1e3,h.time=E=E/1e3,a+=x+(x>=s?4:s-x),M=1),S||(l=c(g)),M)for(d=0;d<o.length;d++)o[d](E,f,v,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Zf&&(!Kc&&sh()&&(Mi=Kc=window,ah=Mi.document||{},Jn.gsap=kn,(Mi.gsapVersions||(Mi.gsapVersions=[])).push(kn.version),Jf(vl||Mi.GreenSockGlobals||!Mi.gsap&&Mi||{}),gp.forEach(_p)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Ka=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ka=0,c=$a},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,m,S){var x=m?function(M,E,v,b){p(M,E,v,b),h.remove(x)}:p;return h.remove(p),o[S?"unshift":"push"](x),Js(),x},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},h}(),Js=function(){return!Ka&&Yn.wake()},ot={},Lg=/^[\d.\-M][\d.\-,\s]/,Dg=/["']/g,Ig=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Dg,"").trim():+c,i=l.substr(o+1).trim();return t},Ng=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Ug=function(e){var t=(e+"").split("("),n=ot[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Ig(t[1])]:Ng(e).split(",").map(ip)):ot._CE&&Lg.test(e)?ot._CE("",e):n},Og=function(e){return function(t){return 1-e(1-t)}},Yr=function(e,t){return e&&(zt(e)?e:ot[e]||Ug(e))||t},ss=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Un(e,function(o){ot[o]=Jn[o]=s,ot[a=o.toLowerCase()]=n;for(var l in s)ot[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ot[o+"."+l]=s[l]}),s},Mp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ic=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/jc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*ag((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Mp(o);return s=jc/s,l.config=function(c,u){return r(e,c,u)},l},rc=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Mp(n);return i.config=function(s){return r(e,s)},i};Un("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ss(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;ss("Elastic",ic("in"),ic("out"),ic());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};ss("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ss("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ss("Circ",function(r){return-(Yf(1-r*r)-1)});ss("Sine",function(r){return r===1?1:-sg(r*ig)+1});ss("Back",rc("in"),rc("out"),rc());ot.SteppedEase=ot.steps=Jn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-St;return function(o){return((i*oo(0,a,o)|0)+s)*n}}};qa.ease=ot["quad.out"];Un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return ch+=r+","+r+"Params,"});var Sp=function(e,t){this.id=rg++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:tp,this.set=t?t.getSetter:mh},Za=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Zs(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),Ka||Yn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Zs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Js(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(zl(this,n),!s._dp||s.parent||ap(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&wi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===St||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),np(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Kh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Kh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ks(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-St?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ml(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-St?0:this._rts,this.totalTime(oo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Bl(this),gg(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Js(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==St&&(this._tTime-=St)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Nt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&wi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Nn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ml(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=dg);var i=un;return un=n,hh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),un=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Zh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Zh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ii(this,n),Nn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Nn(i)),this._dur||(this._zTime=-St),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-St:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-St,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-St)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=zt(n)?n:rp,l=function(){var u=i.then;i.then=null,s&&s(),zt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){ya(this)},r}();Qn(Za.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-St,_prom:0,_ps:!1,_rts:1});var Dn=function(r){qf(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Nn(n.sortChildren),Ut&&wi(n.parent||Ut,Hi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&op(Hi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Ra(0,arguments,this),this},t.from=function(i,s,a){return Ra(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Ra(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Ca(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Yt(i,s,ii(this,a),1),this},t.call=function(i,s,a){return wi(this,Yt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Yt(i,a,ii(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Ca(a).immediateRender=Nn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,Ca(o).immediateRender=Nn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Nt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,p,m,S,x,M,E,v,b;if(this!==Ut&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,M=this._start,x=this._ts,m=!x,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(v=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=Nt(u%p),u===l?(g=this._repeat,f=c):(E=Nt(u/p),g=~~E,g&&g===E&&(f=c,g--),f>c&&(f=c)),E=Ks(this._tTime,p),!o&&this._tTime&&E!==g&&this._tTime-E*p-this._dur<=0&&(E=g),v&&g&1&&(f=c-f,b=1),g!==E&&!this._lock){var A=v&&E&1,w=A===(v&&g&1);if(g<E&&(A=!A),o=A?0:u%c?c:u,this._lock=1,this.render(o||(b?0:Nt(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&jn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,E=g),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,o=A?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=yg(this,Nt(o),Nt(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!E&&(jn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=-St);break}}d=_}else{d=this._last;for(var y=i<0?i:f;d;){if(_=d._prev,(d._act||y<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,s,a||un&&hh(d)),f!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=y?-St:St);break}}d=_}}if(S&&!s&&(this.pause(),S.render(f>=o?0:-St)._zTime=f>=o?1:-1,this._ts))return this._start=M,Bl(this),this.render(i,s,a);this._onUpdate&&!s&&jn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&vr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(jn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if($i(s)||(s=ii(this,s,i)),!(i instanceof Za)){if(vn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(on(i))return this.addLabel(i,s);if(zt(i))i=Yt.delayedCall(0,i);else return this}return this!==i?wi(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-oi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Yt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return on(i)?this.removeLabel(i):zt(i)?this.killTweensOf(i):(i.parent===this&&kl(this,i),i===this._recent&&(this._recent=this._last),qr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Nt(Yn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ii(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Yt.delayedCall(0,s||$a,a);return o.data="isPause",this._hasPause=1,wi(this,o,ii(this,i))},t.removePause=function(i){var s=this._first;for(i=ii(this,i);s;)s._start===i&&s.data==="isPause"&&vr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)lr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=li(i),l=this._first,c=$i(s),u;l;)l instanceof Yt?fg(l._targets,o)&&(c?(!lr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=ii(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=Yt.to(a,Qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||St,onStart:function(){if(a.pause(),!d){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&Zs(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,Qn({startAt:{time:ii(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Jh(this,ii(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Jh(this,ii(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+St)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Nt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return qr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),qr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=oi,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,wi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=Nt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Zs(a,a===Ut&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Ut._ts&&(np(Ut,Ml(i,Ut)),ep=Yn.frame),Yn.frame>=$h){$h+=Zn.autoSleep||120;var s=Ut._first;if((!s||!s._ts)&&Zn.autoSleep&&Yn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Yn.sleep()}}},e}(Za);Qn(Dn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Fg=function(e,t,n,i,s,a,o){var l=new On(this._pt,e,t,0,1,Cp,null,s),c=0,u=0,h,f,d,_,g,p,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=ja(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),f=n.match(ec)||[];h=ec.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?Bs(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=ec.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Kf.test(i)||m)&&(l.e=0),this._pt=l,l},dh=function(e,t,n,i,s,a,o,l,c,u){zt(i)&&(i=i(s||0,e,a));var h=e[t],f=n!=="get"?n:zt(h)?c?e[t.indexOf("set")||!zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=zt(h)?c?Gg:Tp:ph,_;if(on(i)&&(~i.indexOf("random(")&&(i=ja(i)),i.charAt(1)==="="&&(_=Bs(f,i)+(gn(f)||0),(_||_===0)&&(i=_))),!u||f!==i||iu)return!isNaN(f*i)&&i!==""?(_=new On(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?Wg:Ap,0,d),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(t in e)&&oh(t,i),Fg.call(this,e,t,f,i,d,l||Zn.stringFilter,c))},kg=function(e,t,n,i,s){if(zt(e)&&(e=Pa(e,s,t,n,i)),!Ri(e)||e.style&&e.nodeType||vn(e)||$f(e))return on(e)?Pa(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Pa(e[o],s,t,n,i);return a},bp=function(e,t,n,i,s,a){var o,l,c,u;if(Xn[e]&&(o=new Xn[e]).init(s,o.rawVars?t[e]:kg(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new On(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Ns))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},lr,iu,fh=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,S=m&&m.data==="nested"?m.vars.targets:p,x=e._overwrite==="auto"&&!ih,M=e.timeline,E=i.easeReverse||h,v,b,A,w,y,C,L,U,B,N,O,H,k;if(M&&(!f||!s)&&(s="none"),e._ease=Yr(s,qa.ease),e._rEase=E&&(Yr(E)||e._ease),e._from=!M&&!!i.runBackwards,e._from&&(e.ratio=1),!M||f&&!i.stagger){if(U=p[0]?Xr(p[0]).harness:0,H=U&&i[U.prop],v=yl(i,lh),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!d?g.render(-1,!0):g.revert(u&&_?nl:hg),g._lazy=0),a){if(vr(e._startAt=Yt.set(p,Qn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Nn(l),startAt:null,delay:0,onUpdate:c&&function(){return jn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(un||!o&&!d)&&e._startAt.revert(nl),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),A=Qn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Nn(l),immediateRender:o,stagger:0,parent:m},v),H&&(A[U.prop]=H),vr(e._startAt=Yt.set(p,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(un?e._startAt.revert(nl):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,St,St);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Nn(l)||l&&!_,b=0;b<p.length;b++){if(y=p[b],L=y._gsap||uh(p)[b]._gsap,e._ptLookup[b]=N={},Zc[L.id]&&fr.length&&xl(),O=S===p?b:S.indexOf(y),U&&(B=new U).init(y,H||v,e,O,S)!==!1&&(e._pt=w=new On(e._pt,y,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(re){N[re]=w}),B.priority&&(C=1)),!U||H)for(A in v)Xn[A]&&(B=bp(A,v,e,O,y,S))?B.priority&&(C=1):N[A]=w=dh.call(e,y,A,"get",v[A],O,S,0,i.stringFilter);e._op&&e._op[b]&&e.kill(y,e._op[b]),x&&e._pt&&(lr=e,Ut.killTweensOf(y,N,e.globalTime(t)),k=!e.parent,lr=0),e._pt&&l&&(Zc[L.id]=1)}C&&Rp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!k,f&&t<=0&&M.render(oi,!0,!0)},Bg=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return iu=1,e.vars[t]="+=0",fh(e,o),iu=0,l?Ya(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Ht(n)+gn(h.e)),h.b&&(h.b=u.s+gn(h.b))},zg=function(e,t){var n=e[0]?Xr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=js({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Hg=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(vn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Pa=function(e,t,n,i,s){return zt(e)?e.call(t,n,i,s):on(e)&&~e.indexOf("random(")?ja(e):e},wp=ch+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Ep={};Un(wp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Ep[r]=1});var Yt=function(r){qf(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Ca(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=i.parent||Ut,S=(vn(n)||$f(n)?$i(n[0]):"length"in i)?[n]:li(n),x,M,E,v,b,A,w,y;if(o._targets=S.length?uh(S):Ya("GSAP target "+n+" not found. https://gsap.com",!Zn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||f||po(c)||po(u)){i=o.vars;var C=i.easeReverse||i.yoyoEase;if(x=o.timeline=new Dn({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:S}),x.kill(),x.parent=x._dp=Hi(o),x._start=0,f||po(c)||po(u)){if(v=S.length,w=f&&hp(f),Ri(f))for(b in f)~wp.indexOf(b)&&(y||(y={}),y[b]=f[b]);for(M=0;M<v;M++)E=yl(i,Ep),E.stagger=0,C&&(E.easeReverse=C),y&&js(E,y),A=S[M],E.duration=+Pa(c,Hi(o),M,A,S),E.delay=(+Pa(u,Hi(o),M,A,S)||0)-o._delay,!f&&v===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),x.to(A,E,w?w(M,A,S):0),x._ease=ot.none;x.duration()?c=u=0:o.timeline=0}else if(_){Ca(Qn(x.vars.defaults,{ease:"none"})),x._ease=Yr(_.ease||i.ease||"none");var L=0,U,B,N;if(vn(_))_.forEach(function(O){return x.to(S,O,">")}),x.duration();else{E={};for(b in _)b==="ease"||b==="easeEach"||Hg(b,_[b],E,_.easeEach);for(b in E)for(U=E[b].sort(function(O,H){return O.t-H.t}),L=0,M=0;M<U.length;M++)B=U[M],N={ease:B.e,duration:(B.t-(M?U[M-1].t:0))/100*c},N[b]=B.v,x.to(S,N,L),L+=N.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return d===!0&&!ih&&(lr=Hi(o),Ut.killTweensOf(S),lr=0),wi(m,Hi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!_&&o._start===Nt(m._time)&&Nn(h)&&_g(Hi(o))&&m.data!=="nested")&&(o._tTime=-St,o.render(Math.max(0,-u)||0)),p&&op(Hi(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-St&&!u?l:i<St?0:i,f,d,_,g,p,m,S,x;if(!c)xg(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(f=Nt(h%g),h===l?(_=this._repeat,f=c):(p=Nt(h/g),_=~~p,_&&_===p?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(f=c-f),p=Ks(this._tTime,g),f===o&&!a&&this._initted&&_===p)return this._tTime=h,this;_!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=a=1,this.render(Nt(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(lp(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var M=f<o;if(M!==this._inv){var E=M?o:c-o;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=E?(M?-1:1)/E:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(f/c);if(this._from&&(this.ratio=S=1-S),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!p&&(jn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Jc(this,i,s,a),jn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&jn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Jc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&vr(this,1),!s&&!(u&&!o)&&(h||o||m)&&(jn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Ka||Yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||fh(this,c),u=this._ease(c/this._dur),Bg(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(zl(this,0),this.parent||sp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ya(this):this.scrollTrigger&&this.scrollTrigger.kill(!!un),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,lr&&lr.vars.overwrite!==!0)._first||ya(this),this.parent&&a!==this.timeline.totalDuration()&&Zs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?li(i):o,c=this._ptLookup,u=this._pt,h,f,d,_,g,p,m;if((!s||s==="all")&&mg(o,l))return s==="all"&&(this._pt=0),ya(this);for(h=this._op=this._op||[],s!=="all"&&(on(s)&&(g={},Un(s,function(S){return g[S]=1}),s=g),s=zg(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],s==="all"?(h[m]=s,_=f,d={}):(d=h[m]=h[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&kl(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&ya(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ra(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Ra(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Ut.killTweensOf(i,s,a)},e}(Za);Qn(Yt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Un("staggerTo,staggerFrom,staggerFromTo",function(r){Yt[r]=function(){var e=new Dn,t=eu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var ph=function(e,t,n){return e[t]=n},Tp=function(e,t,n){return e[t](n)},Gg=function(e,t,n,i){return e[t](i.fp,n)},Vg=function(e,t,n){return e.setAttribute(t,n)},mh=function(e,t){return zt(e[t])?Tp:rh(e[t])&&e.setAttribute?Vg:ph},Ap=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Wg=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Cp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},gh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Xg=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},qg=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?kl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Yg=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Rp=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},On=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Ap,this.d=l||this,this.set=c||ph,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Yg,this.m=n,this.mt=s,this.tween=i},r}();Un(ch+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return lh[r]=1});Jn.TweenMax=Jn.TweenLite=Yt;Jn.TimelineLite=Jn.TimelineMax=Dn;Ut=new Dn({sortChildren:!1,defaults:qa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Zn.stringFilter=yp;var $r=[],rl={},$g=[],ed=0,jg=0,sc=function(e){return(rl[e]||$g).map(function(t){return t()})},ru=function(){var e=Date.now(),t=[];e-ed>2&&(sc("matchMediaInit"),$r.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Mi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),sc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),ed=e,sc("matchMedia"))},Pp=function(){function r(t,n){this.selector=n&&tu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=jg++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){zt(n)&&(s=i,i=n,n=zt);var a=this,o=function(){var c=Dt,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=tu(s)),Dt=a,h=i.apply(a,arguments),zt(h)&&a._r.push(h),Dt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===zt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Dt;Dt=null,n(this),Dt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Yt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Dn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Yt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=$r.length;a--;)$r[a].id===this.id&&$r.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),Kg=function(){function r(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ri(n)||(n={matches:n});var a=new Pp(0,s||this.scope),o=a.conditions={},l,c,u;Dt&&!a.selector&&(a.selector=Dt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Mi.matchMedia(n[c]),l&&($r.indexOf(a)<0&&$r.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(ru):l.addEventListener("change",ru)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Sl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return _p(i)})},timeline:function(e){return new Dn(e)},getTweensOf:function(e,t){return Ut.getTweensOf(e,t)},getProperty:function(e,t,n,i){on(e)&&(e=li(e)[0]);var s=Xr(e||{}).get,a=n?rp:ip;return n==="native"&&(n=""),e&&(t?a((Xn[t]&&Xn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Xn[o]&&Xn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=li(e),e.length>1){var i=e.map(function(u){return kn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=Xn[t],o=Xr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Ns._pt=0,h.init(e,n?u+n:u,Ns,0,[e]),h.render(1,h),Ns._pt&&gh(1,Ns)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=kn.to(e,Qn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Yr(e.ease,qa.ease)),jh(qa,e||{})},config:function(e){return jh(Zn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Xn[o]&&!Jn[o]&&Ya(t+" effect requires "+o+" plugin.")}),tc[t]=function(o,l,c){return n(li(o),Qn(l||{},s),c)},a&&(Dn.prototype[t]=function(o,l,c){return this.add(tc[t](o,Ri(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ot[e]=Yr(t)},parseEase:function(e,t){return arguments.length?Yr(e,t):ot},getById:function(e){return Ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Dn(e),i,s;for(n.smoothChildTiming=Nn(e.smoothChildTiming),Ut.remove(n),n._dp=0,n._time=n._tTime=Ut._time,i=Ut._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Yt&&i.vars.onComplete===i._targets[0]))&&wi(n,i,i._start-i._delay),i=s;return wi(Ut,n,0),n},context:function(e,t){return e?new Pp(e,t):Dt},matchMedia:function(e){return new Kg(e)},matchMediaRefresh:function(){return $r.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||ru()},addEventListener:function(e,t){var n=rl[e]||(rl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=rl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Ag,wrapYoyo:Cg,distribute:hp,random:fp,snap:dp,normalize:Tg,getUnit:gn,clamp:Sg,splitColor:vp,toArray:li,selector:tu,mapRange:mp,pipe:wg,unitize:Eg,interpolate:Rg,shuffle:up},install:Jf,effects:tc,ticker:Yn,updateRoot:Dn.updateRoot,plugins:Xn,globalTimeline:Ut,core:{PropTween:On,globals:Qf,Tween:Yt,Timeline:Dn,Animation:Za,getCache:Xr,_removeLinkedListItem:kl,reverting:function(){return un},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return ih=e}}};Un("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Sl[r]=Yt[r]});Yn.add(Dn.updateRoot);Ns=Sl.to({},{duration:0});var Zg=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Jg=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Zg(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},ac=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(on(s)&&(l={},Un(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Jg(o,s)}}}},kn=Sl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)un?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ac("roundProps",nu),ac("modifiers"),ac("snap",dp))||Sl;Yt.version=Dn.version=kn.version="3.15.0";Zf=1;sh()&&Js();ot.Power0;ot.Power1;ot.Power2;ot.Power3;ot.Power4;ot.Linear;ot.Quad;ot.Cubic;ot.Quart;ot.Quint;ot.Strong;ot.Elastic;ot.Back;ot.SteppedEase;ot.Bounce;ot.Sine;ot.Expo;ot.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var td,cr,zs,_h,Hr,nd,vh,Qg=function(){return typeof window<"u"},ji={},Nr=180/Math.PI,Hs=Math.PI/180,cs=Math.atan2,id=1e8,xh=/([A-Z])/g,e0=/(left|right|width|margin|padding|x)/i,t0=/[\s,\(]\S/,Ti={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},su=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},n0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},i0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},r0=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},s0=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Lp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Dp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},a0=function(e,t,n){return e.style[t]=n},o0=function(e,t,n){return e.style.setProperty(t,n)},l0=function(e,t,n){return e._gsap[t]=n},c0=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},u0=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},h0=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Ot="transform",Fn=Ot+"Origin",d0=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in ji&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ti[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Gi(i,o)}):this.tfm[e]=a.x?a[e]:Gi(i,e),e===Fn&&(this.tfm.zOrigin=a.zOrigin);else return Ti.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Ot)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Fn,t,"")),e=Ot}(s||t)&&this.props.push(e,t,s[e])},Ip=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},f0=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(xh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=vh(),(!s||!s.isStart)&&!n[Ot]&&(Ip(n),i.zOrigin&&n[Fn]&&(n[Fn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Np=function(e,t){var n={target:e,props:[],revert:f0,save:d0};return e._gsap||kn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Up,au=function(e,t){var n=cr.createElementNS?cr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):cr.createElement(e);return n&&n.style?n:cr.createElement(e)},Kn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(xh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Qs(t)||t,1)||""},rd="O,Moz,ms,Ms,Webkit".split(","),Qs=function(e,t,n){var i=t||Hr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(rd[a]+e in s););return a<0?null:(a===3?"ms":a>=0?rd[a]:"")+e},ou=function(){Qg()&&window.document&&(td=window,cr=td.document,zs=cr.documentElement,Hr=au("div")||{style:{}},au("div"),Ot=Qs(Ot),Fn=Ot+"Origin",Hr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Up=!!Qs("perspective"),vh=kn.core.reverting,_h=1)},sd=function(e){var t=e.ownerSVGElement,n=au("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),zs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),zs.removeChild(n),s},ad=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Op=function(e){var t,n;try{t=e.getBBox()}catch{t=sd(e),n=1}return t&&(t.width||t.height)||n||(t=sd(e)),t&&!t.width&&!t.x&&!t.y?{x:+ad(e,["x","cx","x1"])||0,y:+ad(e,["y","cy","y1"])||0,width:0,height:0}:t},Fp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Op(e))},xr=function(e,t){if(t){var n=e.style,i;t in ji&&t!==Fn&&(t=Ot),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(xh,"-$1").toLowerCase())):n.removeAttribute(t)}},ur=function(e,t,n,i,s,a){var o=new On(e._pt,t,n,0,1,a?Dp:Lp);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},od={deg:1,rad:1,turn:1},p0={grid:1,flex:1},yr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Hr.style,l=e0.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,p,m;if(i===a||!s||od[i]||od[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&Fp(e),(d||a==="%")&&(ji[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],Ht(d?s/_*h:s/100*_);if(o[l?"width":"height"]=h+(f?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===cr||!g.appendChild)&&(g=cr.body),p=g._gsap,p&&d&&p.width&&l&&p.time===Yn.time&&!p.uncache)return Ht(s/p.width*h);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+i,_=e[u],S?e.style[t]=S:xr(e,t)}else(d||a==="%")&&!p0[Kn(g,"display")]&&(o.position=Kn(e,"position")),g===e&&(o.position="static"),g.appendChild(Hr),_=Hr[u],g.removeChild(Hr),o.position="absolute";return l&&d&&(p=Xr(g),p.time=Yn.time,p.width=g[u]),Ht(f?_*s/h:_&&s?h/_*s:0)},Gi=function(e,t,n,i){var s;return _h||ou(),t in Ti&&t!=="transform"&&(t=Ti[t],~t.indexOf(",")&&(t=t.split(",")[0])),ji[t]&&t!=="transform"?(s=Qa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:wl(Kn(e,Fn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=bl[t]&&bl[t](e,t,n)||Kn(e,t)||tp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?yr(e,t,s,n)+n:s},m0=function(e,t,n,i){if(!n||n==="none"){var s=Qs(t,e,1),a=s&&Kn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Kn(e,"borderTopColor"))}var o=new On(this._pt,e.style,t,0,1,Cp),l=0,c=0,u,h,f,d,_,g,p,m,S,x,M,E;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Kn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=Kn(e,t)||i,g?e.style[t]=g:xr(e,t)),u=[n,i],yp(u),n=u[0],i=u[1],f=n.match(Is)||[],E=i.match(Is)||[],E.length){for(;h=Is.exec(i);)p=h[0],S=i.substring(l,h.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,M=g.substr((d+"").length),p.charAt(1)==="="&&(p=Bs(d,p)+M),m=parseFloat(p),x=p.substr((m+"").length),l=Is.lastIndex-x.length,x||(x=x||Zn.units[t]||M,l===i.length&&(i+=x,o.e+=x)),M!==x&&(d=yr(e,t,g,x)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Dp:Lp;return Kf.test(i)&&(o.e=0),this._pt=o,o},ld={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},g0=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=ld[n]||n,t[1]=ld[i]||i,t.join(" ")},_0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ji[o]&&(l=1,o=o==="transformOrigin"?Fn:Ot),xr(n,o);l&&(xr(n,Ot),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Qa(n,1),a.uncache=1,Ip(i)))}},bl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new On(e._pt,t,n,0,0,_0);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Ja=[1,0,0,1,0,0],kp={},Bp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},cd=function(e){var t=Kn(e,Ot);return Bp(t)?Ja:t.substr(7).match(jf).map(Ht)},yh=function(e,t){var n=e._gsap||Xr(e),i=e.style,s=cd(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ja:s):(s===Ja&&!e.offsetParent&&e!==zs&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,zs.appendChild(e)),s=cd(e),l?i.display=l:xr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):zs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},lu=function(e,t,n,i,s,a){var o=e._gsap,l=s||yh(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],S=l[5],x=t.split(" "),M=parseFloat(x[0])||0,E=parseFloat(x[1])||0,v,b,A,w;n?l!==Ja&&(b=d*p-_*g)&&(A=M*(p/b)+E*(-g/b)+(g*S-p*m)/b,w=M*(-_/b)+E*(d/b)-(d*S-_*m)/b,M=A,E=w):(v=Op(e),M=v.x+(~x[0].indexOf("%")?M/100*v.width:M),E=v.y+(~(x[1]||x[0]).indexOf("%")?E/100*v.height:E)),i||i!==!1&&o.smooth?(m=M-c,S=E-u,o.xOffset=h+(m*d+S*g)-m,o.yOffset=f+(m*_+S*p)-S):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=E,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Fn]="0px 0px",a&&(ur(a,o,"xOrigin",c,M),ur(a,o,"yOrigin",u,E),ur(a,o,"xOffset",h,o.xOffset),ur(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+E)},Qa=function(e,t){var n=e._gsap||new Sp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Kn(e,Fn)||"0",u,h,f,d,_,g,p,m,S,x,M,E,v,b,A,w,y,C,L,U,B,N,O,H,k,re,I,Q,ge,xe,X,$;return u=h=f=g=p=m=S=x=M=0,d=_=1,n.svg=!!(e.getCTM&&Fp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ot]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ot]!=="none"?l[Ot]:"")),i.scale=i.rotate=i.translate="none"),b=yh(e,n.svg),n.svg&&(n.uncache?(k=e.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),lu(e,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,b)),E=n.xOrigin||0,v=n.yOrigin||0,b!==Ja&&(C=b[0],L=b[1],U=b[2],B=b[3],u=N=b[4],h=O=b[5],b.length===6?(d=Math.sqrt(C*C+L*L),_=Math.sqrt(B*B+U*U),g=C||L?cs(L,C)*Nr:0,S=U||B?cs(U,B)*Nr+g:0,S&&(_*=Math.abs(Math.cos(S*Hs))),n.svg&&(u-=E-(E*C+v*U),h-=v-(E*L+v*B))):($=b[6],xe=b[7],I=b[8],Q=b[9],ge=b[10],X=b[11],u=b[12],h=b[13],f=b[14],A=cs($,ge),p=A*Nr,A&&(w=Math.cos(-A),y=Math.sin(-A),H=N*w+I*y,k=O*w+Q*y,re=$*w+ge*y,I=N*-y+I*w,Q=O*-y+Q*w,ge=$*-y+ge*w,X=xe*-y+X*w,N=H,O=k,$=re),A=cs(-U,ge),m=A*Nr,A&&(w=Math.cos(-A),y=Math.sin(-A),H=C*w-I*y,k=L*w-Q*y,re=U*w-ge*y,X=B*y+X*w,C=H,L=k,U=re),A=cs(L,C),g=A*Nr,A&&(w=Math.cos(A),y=Math.sin(A),H=C*w+L*y,k=N*w+O*y,L=L*w-C*y,O=O*w-N*y,C=H,N=k),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=Ht(Math.sqrt(C*C+L*L+U*U)),_=Ht(Math.sqrt(O*O+$*$)),A=cs(N,O),S=Math.abs(A)>2e-4?A*Nr:0,M=X?1/(X<0?-X:X):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Bp(Kn(e,Ot)),H&&e.setAttribute("transform",H))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Ht(d),n.scaleY=Ht(_),n.rotation=Ht(g)+o,n.rotationX=Ht(p)+o,n.rotationY=Ht(m)+o,n.skewX=S+o,n.skewY=x+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Fn]=wl(c)),n.xOffset=n.yOffset=0,n.force3D=Zn.force3D,n.renderTransform=n.svg?x0:Up?zp:v0,n.uncache=0,n},wl=function(e){return(e=e.split(" "))[0]+" "+e[1]},oc=function(e,t,n){var i=gn(t);return Ht(parseFloat(t)+parseFloat(yr(e,"x",n+"px",i)))+i},v0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,zp(e,t)},Tr="0deg",ua="0px",Ar=") ",zp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,x=n.zOrigin,M="",E=m==="auto"&&e&&e!==1||m===!0;if(x&&(h!==Tr||u!==Tr)){var v=parseFloat(u)*Hs,b=Math.sin(v),A=Math.cos(v),w;v=parseFloat(h)*Hs,w=Math.cos(v),a=oc(S,a,b*w*-x),o=oc(S,o,-Math.sin(v)*-x),l=oc(S,l,A*w*-x+x)}p!==ua&&(M+="perspective("+p+Ar),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(E||a!==ua||o!==ua||l!==ua)&&(M+=l!==ua||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ar),c!==Tr&&(M+="rotate("+c+Ar),u!==Tr&&(M+="rotateY("+u+Ar),h!==Tr&&(M+="rotateX("+h+Ar),(f!==Tr||d!==Tr)&&(M+="skew("+f+", "+d+Ar),(_!==1||g!==1)&&(M+="scale("+_+", "+g+Ar),S.style[Ot]=M||"translate(0, 0)"},x0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,x=parseFloat(a),M=parseFloat(o),E,v,b,A,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Hs,c*=Hs,E=Math.cos(l)*h,v=Math.sin(l)*h,b=Math.sin(l-c)*-f,A=Math.cos(l-c)*f,c&&(u*=Hs,w=Math.tan(c-u),w=Math.sqrt(1+w*w),b*=w,A*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),E*=w,v*=w)),E=Ht(E),v=Ht(v),b=Ht(b),A=Ht(A)):(E=h,A=f,v=b=0),(x&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(x=yr(d,"x",a,"px"),M=yr(d,"y",o,"px")),(_||g||p||m)&&(x=Ht(x+_-(_*E+g*b)+p),M=Ht(M+g-(_*v+g*A)+m)),(i||s)&&(w=d.getBBox(),x=Ht(x+i/100*w.width),M=Ht(M+s/100*w.height)),w="matrix("+E+","+v+","+b+","+A+","+x+","+M+")",d.setAttribute("transform",w),S&&(d.style[Ot]=w)},y0=function(e,t,n,i,s){var a=360,o=on(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Nr:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*id)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*id)%a-~~(c/a)*a)),e._pt=f=new On(e._pt,t,n,i,c,n0),f.e=u,f.u="deg",e._props.push(n),f},ud=function(e,t){for(var n in t)e[n]=t[n];return e},M0=function(e,t,n){var i=ud({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ot]=t,o=Qa(n,1),xr(n,Ot),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ot],a[Ot]=t,o=Qa(n,1),a[Ot]=c);for(l in ji)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=gn(c),_=gn(u),h=d!==_?yr(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new On(e._pt,o,l,h,f-h,su),e._pt.u=_||0,e._props.push(l));ud(o,i)};Un("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});bl[e>1?"border"+r:r]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(_){return Gi(o,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,d,h)}});var Hp={name:"css",register:ou,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,p,m,S,x,M,E,v,b,A,w;_h||ou(),this.styles=this.styles||Np(e),A=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Xn[g]&&bp(g,t,n,i,e,s)))){if(d=typeof u,_=bl[g],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ja(u)),_)_(this,e,g,u,n)&&(b=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",pr.lastIndex=0,pr.test(c)||(p=gn(c),m=gn(u),m?p!==m&&(c=yr(e,g,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),A.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],on(c)&&~c.indexOf("random(")&&(c=ja(c)),gn(c+"")||c==="auto"||(c+=Zn.units[g]||gn(Gi(e,g))||""),(c+"").charAt(1)==="="&&(c=Gi(e,g))):c=Gi(e,g),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),g in Ti&&(g==="autoAlpha"&&(f===1&&Gi(e,"visibility")==="hidden"&&h&&(f=0),A.push("visibility",0,o.visibility),ur(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Ti[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in ji,x){if(this.styles.save(g),w=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Kn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var y=e.style.perspective;e.style.perspective=u,u=Kn(e,"perspective"),y?e.style.perspective=y:xr(e,"perspective")}h=parseFloat(u)}if(M||(E=e._gsap,E.renderTransform&&!t.parseTransform||Qa(e,t.parseTransform),v=t.smoothOrigin!==!1&&E.smooth,M=this._pt=new On(this._pt,o,Ot,0,1,E.renderTransform,E,0,-1),M.dep=1),g==="scale")this._pt=new On(this._pt,E,"scaleY",E.scaleY,(S?Bs(E.scaleY,S+h):h)-E.scaleY||0,su),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){A.push(Fn,0,o[Fn]),u=g0(u),E.svg?lu(e,u,0,v,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==E.zOrigin&&ur(this,E,"zOrigin",E.zOrigin,m),ur(this,o,g,wl(c),wl(u)));continue}else if(g==="svgOrigin"){lu(e,u,1,v,0,this);continue}else if(g in kp){y0(this,E,g,f,S?Bs(f,S+u):u);continue}else if(g==="smoothOrigin"){ur(this,E,"smooth",E.smooth,u);continue}else if(g==="force3D"){E[g]=u;continue}else if(g==="transform"){M0(this,u,e);continue}}else g in o||(g=Qs(g)||g);if(x||(h||h===0)&&(f||f===0)&&!t0.test(u)&&g in o)p=(c+"").substr((f+"").length),h||(h=0),m=gn(u)||(g in Zn.units?Zn.units[g]:p),p!==m&&(f=yr(e,g,c,m)),this._pt=new On(this._pt,x?E:o,g,f,(S?Bs(f,S+h):h)-f,!x&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?s0:su),this._pt.u=m||0,x&&w!==u?(this._pt.b=c,this._pt.e=w,this._pt.r=r0):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=i0);else if(g in o)m0.call(this,e,g,c,S?S+u:u);else if(g in e)this.add(e,g,c||e[g],S?S+u:u,i,s);else if(g!=="parseTransform"){oh(g,u);continue}x||(g in o?A.push(g,0,o[g]):typeof e[g]=="function"?A.push(g,2,e[g]()):A.push(g,1,c||e[g])),a.push(g)}}b&&Rp(this)},render:function(e,t){if(t.tween._time||!vh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Gi,aliases:Ti,getSetter:function(e,t,n){var i=Ti[t];return i&&i.indexOf(",")<0&&(t=i),t in ji&&t!==Fn&&(e._gsap.x||Gi(e,"x"))?n&&nd===n?t==="scale"?c0:l0:(nd=n||{})&&(t==="scale"?u0:h0):e.style&&!rh(e.style[t])?a0:~t.indexOf("-")?o0:mh(e,t)},core:{_removeProperty:xr,_getMatrix:yh}};kn.utils.checkPrefix=Qs;kn.core.getStyleSaver=Np;(function(r,e,t,n){var i=Un(r+","+e+","+t,function(s){ji[s]=1});Un(e,function(s){Zn.units[s]="deg",kp[s]=1}),Ti[i[13]]=r+","+e,Un(n,function(s){var a=s.split(":");Ti[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Zn.units[r]="px"});kn.registerPlugin(Hp);var xi=kn.registerPlugin(Hp)||kn;xi.core.Tween;function S0(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function b0(r,e,t){return e&&S0(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var cn,sl,$n,hr,dr,Gs,Gp,Ur,Vs,Vp,Wi,_i,Wp,Xp=function(){return cn||typeof window<"u"&&(cn=window.gsap)&&cn.registerPlugin&&cn},qp=1,Us=[],it=[],Ci=[],La=Date.now,cu=function(e,t){return t},w0=function(){var e=Vs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,it),i.push.apply(i,Ci),it=n,Ci=i,cu=function(a,o){return t[a](o)}},mr=function(e,t){return~Ci.indexOf(e)&&Ci[Ci.indexOf(e)+1][t]},Da=function(e){return!!~Vp.indexOf(e)},yn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},xn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},mo="scrollLeft",go="scrollTop",uu=function(){return Wi&&Wi.isPressed||it.cache++},El=function(e,t){var n=function i(s){if(s||s===0){qp&&($n.history.scrollRestoration="manual");var a=Wi&&Wi.isPressed;s=i.v=Math.round(s)||(Wi&&Wi.iOS?1:0),e(s),i.cacheID=it.cache,a&&cu("ss",s)}else(t||it.cache!==i.cacheID||cu("ref"))&&(i.cacheID=it.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Cn={s:mo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:El(function(r){return arguments.length?$n.scrollTo(r,Zt.sc()):$n.pageXOffset||hr[mo]||dr[mo]||Gs[mo]||0})},Zt={s:go,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Cn,sc:El(function(r){return arguments.length?$n.scrollTo(Cn.sc(),r):$n.pageYOffset||hr[go]||dr[go]||Gs[go]||0})},Ln=function(e,t){return(t&&t._ctx&&t._ctx.selector||cn.utils.toArray)(e)[0]||(typeof e=="string"&&cn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},E0=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Mr=function(e,t){var n=t.s,i=t.sc;Da(e)&&(e=hr.scrollingElement||dr);var s=it.indexOf(e),a=i===Zt.sc?1:2;!~s&&(s=it.push(e)-1),it[s+a]||yn(e,"scroll",uu);var o=it[s+a],l=o||(it[s+a]=El(mr(e,n),!0)||(Da(e)?i:El(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=cn.getProperty(e,"scrollBehavior")==="smooth"),l},hu=function(e,t,n){var i=e,s=e,a=La(),o=a,l=t||50,c=Math.max(500,l*3),u=function(_,g){var p=La();g||p-a>l?(s=i,i=_,o=a,a=p):n?i+=_:i=s+(_-s)/(p-o)*(a-o)},h=function(){s=i=n?0:i,o=a=0},f=function(_){var g=o,p=s,m=La();return(_||_===0)&&_!==i&&u(_),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-g)*1e3};return{update:u,reset:h,getVelocity:f}},ha=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},hd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Yp=function(){Vs=cn.core.globals().ScrollTrigger,Vs&&Vs.core&&w0()},$p=function(e){return cn=e||Xp(),!sl&&cn&&typeof document<"u"&&document.body&&($n=window,hr=document,dr=hr.documentElement,Gs=hr.body,Vp=[$n,hr,dr,Gs],cn.utils.clamp,Wp=cn.core.context||function(){},Ur="onpointerenter"in Gs?"pointer":"mouse",Gp=Gt.isTouch=$n.matchMedia&&$n.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in $n||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,_i=Gt.eventTypes=("ontouchstart"in dr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in dr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return qp=0},500),sl=1),Vs||Yp(),sl};Cn.op=Zt;it.cache=0;var Gt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){sl||$p(cn)||console.warn("Please gsap.registerPlugin(Observer)"),Vs||Yp();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,S=n.onDrag,x=n.onPress,M=n.onRelease,E=n.onRight,v=n.onLeft,b=n.onUp,A=n.onDown,w=n.onChangeX,y=n.onChangeY,C=n.onChange,L=n.onToggleX,U=n.onToggleY,B=n.onHover,N=n.onHoverEnd,O=n.onMove,H=n.ignoreCheck,k=n.isNormalizer,re=n.onGestureStart,I=n.onGestureEnd,Q=n.onWheel,ge=n.onEnable,xe=n.onDisable,X=n.onClick,$=n.scrollSpeed,le=n.capture,ee=n.allowClicks,me=n.lockAxis,Te=n.onLockAxis;this.target=o=Ln(o)||dr,this.vars=n,d&&(d=cn.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,$=$||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat($n.getComputedStyle(Gs).lineHeight)||22);var Re,Ue,P,ne,ie,de,te,G=this,fe=0,ye=0,D=n.passive||!u&&n.passive!==!1,T=Mr(o,Cn),F=Mr(o,Zt),Y=T(),Z=F(),J=~a.indexOf("touch")&&!~a.indexOf("pointer")&&_i[0]==="pointerdown",be=Da(o),ce=o.ownerDocument||hr,Me=[0,0,0],Be=[0,0,0],he=0,Se=function(){return he=La()},He=function(Oe,lt){return(G.event=Oe)&&d&&E0(Oe.target,d)||lt&&J&&Oe.pointerType!=="touch"||H&&H(Oe,lt)},Xe=function(){G._vx.reset(),G._vy.reset(),Ue.pause(),h&&h(G)},Ce=function(){var Oe=G.deltaX=hd(Me),lt=G.deltaY=hd(Be),ve=Math.abs(Oe)>=i,$e=Math.abs(lt)>=i;C&&(ve||$e)&&C(G,Oe,lt,Me,Be),ve&&(E&&G.deltaX>0&&E(G),v&&G.deltaX<0&&v(G),w&&w(G),L&&G.deltaX<0!=fe<0&&L(G),fe=G.deltaX,Me[0]=Me[1]=Me[2]=0),$e&&(A&&G.deltaY>0&&A(G),b&&G.deltaY<0&&b(G),y&&y(G),U&&G.deltaY<0!=ye<0&&U(G),ye=G.deltaY,Be[0]=Be[1]=Be[2]=0),(ne||P)&&(O&&O(G),P&&(p&&P===1&&p(G),S&&S(G),P=0),ne=!1),de&&!(de=!1)&&Te&&Te(G),ie&&(Q(G),ie=!1),Re=0},qe=function(Oe,lt,ve){Me[ve]+=Oe,Be[ve]+=lt,G._vx.update(Oe),G._vy.update(lt),c?Re||(Re=requestAnimationFrame(Ce)):Ce()},Ke=function(Oe,lt){me&&!te&&(G.axis=te=Math.abs(Oe)>Math.abs(lt)?"x":"y",de=!0),te!=="y"&&(Me[2]+=Oe,G._vx.update(Oe,!0)),te!=="x"&&(Be[2]+=lt,G._vy.update(lt,!0)),c?Re||(Re=requestAnimationFrame(Ce)):Ce()},ht=function(Oe){if(!He(Oe,1)){Oe=ha(Oe,u);var lt=Oe.clientX,ve=Oe.clientY,$e=lt-G.x,Ge=ve-G.y,je=G.isDragging;G.x=lt,G.y=ve,(je||($e||Ge)&&(Math.abs(G.startX-lt)>=s||Math.abs(G.startY-ve)>=s))&&(P||(P=je?2:1),je||(G.isDragging=!0),Ke($e,Ge))}},W=G.onPress=function(Ve){He(Ve,1)||Ve&&Ve.button||(G.axis=te=null,Ue.pause(),G.isPressed=!0,Ve=ha(Ve),fe=ye=0,G.startX=G.x=Ve.clientX,G.startY=G.y=Ve.clientY,G._vx.reset(),G._vy.reset(),yn(k?o:ce,_i[1],ht,D,!0),G.deltaX=G.deltaY=0,x&&x(G))},se=G.onRelease=function(Ve){if(!He(Ve,1)){xn(k?o:ce,_i[1],ht,!0);var Oe=!isNaN(G.y-G.startY),lt=G.isDragging,ve=lt&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),$e=ha(Ve);!ve&&Oe&&(G._vx.reset(),G._vy.reset(),u&&ee&&cn.delayedCall(.08,function(){if(La()-he>300&&!Ve.defaultPrevented){if(Ve.target.click)Ve.target.click();else if(ce.createEvent){var Ge=ce.createEvent("MouseEvents");Ge.initMouseEvent("click",!0,!0,$n,1,$e.screenX,$e.screenY,$e.clientX,$e.clientY,!1,!1,!1,!1,0,null),Ve.target.dispatchEvent(Ge)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,h&&lt&&!k&&Ue.restart(!0),P&&Ce(),m&&lt&&m(G),M&&M(G,ve)}},ae=function(Oe){return Oe.touches&&Oe.touches.length>1&&(G.isGesturing=!0)&&re(Oe,G.isDragging)},oe=function(){return(G.isGesturing=!1)||I(G)},pe=function(Oe){if(!He(Oe)){var lt=T(),ve=F();qe((lt-Y)*$,(ve-Z)*$,1),Y=lt,Z=ve,h&&Ue.restart(!0)}},ke=function(Oe){if(!He(Oe)){Oe=ha(Oe,u),Q&&(ie=!0);var lt=(Oe.deltaMode===1?l:Oe.deltaMode===2?$n.innerHeight:1)*_;qe(Oe.deltaX*lt,Oe.deltaY*lt,0),h&&!k&&Ue.restart(!0)}},Ze=function(Oe){if(!He(Oe)){var lt=Oe.clientX,ve=Oe.clientY,$e=lt-G.x,Ge=ve-G.y;G.x=lt,G.y=ve,ne=!0,h&&Ue.restart(!0),($e||Ge)&&Ke($e,Ge)}},xt=function(Oe){G.event=Oe,B(G)},yt=function(Oe){G.event=Oe,N(G)},st=function(Oe){return He(Oe)||ha(Oe,u)&&X(G)};Ue=G._dc=cn.delayedCall(f||.25,Xe).pause(),G.deltaX=G.deltaY=0,G._vx=hu(0,50,!0),G._vy=hu(0,50,!0),G.scrollX=T,G.scrollY=F,G.isDragging=G.isGesturing=G.isPressed=!1,Wp(this),G.enable=function(Ve){return G.isEnabled||(yn(be?ce:o,"scroll",uu),a.indexOf("scroll")>=0&&yn(be?ce:o,"scroll",pe,D,le),a.indexOf("wheel")>=0&&yn(o,"wheel",ke,D,le),(a.indexOf("touch")>=0&&Gp||a.indexOf("pointer")>=0)&&(yn(o,_i[0],W,D,le),yn(ce,_i[2],se),yn(ce,_i[3],se),ee&&yn(o,"click",Se,!0,!0),X&&yn(o,"click",st),re&&yn(ce,"gesturestart",ae),I&&yn(ce,"gestureend",oe),B&&yn(o,Ur+"enter",xt),N&&yn(o,Ur+"leave",yt),O&&yn(o,Ur+"move",Ze)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=ne=P=!1,G._vx.reset(),G._vy.reset(),Y=T(),Z=F(),Ve&&Ve.type&&W(Ve),ge&&ge(G)),G},G.disable=function(){G.isEnabled&&(Us.filter(function(Ve){return Ve!==G&&Da(Ve.target)}).length||xn(be?ce:o,"scroll",uu),G.isPressed&&(G._vx.reset(),G._vy.reset(),xn(k?o:ce,_i[1],ht,!0)),xn(be?ce:o,"scroll",pe,le),xn(o,"wheel",ke,le),xn(o,_i[0],W,le),xn(ce,_i[2],se),xn(ce,_i[3],se),xn(o,"click",Se,!0),xn(o,"click",st),xn(ce,"gesturestart",ae),xn(ce,"gestureend",oe),xn(o,Ur+"enter",xt),xn(o,Ur+"leave",yt),xn(o,Ur+"move",Ze),G.isEnabled=G.isPressed=G.isDragging=!1,xe&&xe(G))},G.kill=G.revert=function(){G.disable();var Ve=Us.indexOf(G);Ve>=0&&Us.splice(Ve,1),Wi===G&&(Wi=0)},Us.push(G),k&&Da(o)&&(Wi=G),G.enable(g)},b0(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Gt.version="3.15.0";Gt.create=function(r){return new Gt(r)};Gt.register=$p;Gt.getAll=function(){return Us.slice()};Gt.getById=function(r){return Us.filter(function(e){return e.vars.id===r})[0]};Xp()&&cn.registerPlugin(Gt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var De,Ps,nt,gt,qn,ft,Mh,Tl,eo,Ia,Sa,_o,fn,Hl,du,wn,dd,fd,Ls,jp,lc,Kp,bn,fu,Zp,Jp,ar,pu,Sh,Ws,bh,Na,mu,cc,vo=1,pn=Date.now,uc=pn(),ui=0,ba=0,pd=function(e,t,n){var i=Wn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},md=function(e,t){return t&&(!Wn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},T0=function r(){return ba&&requestAnimationFrame(r)},gd=function(){return Hl=1},_d=function(){return Hl=0},Si=function(e){return e},wa=function(e){return Math.round(e*1e5)/1e5||0},Qp=function(){return typeof window<"u"},em=function(){return De||Qp()&&(De=window.gsap)&&De.registerPlugin&&De},Jr=function(e){return!!~Mh.indexOf(e)},tm=function(e){return(e==="Height"?bh:nt["inner"+e])||qn["client"+e]||ft["client"+e]},nm=function(e){return mr(e,"getBoundingClientRect")||(Jr(e)?function(){return ul.width=nt.innerWidth,ul.height=bh,ul}:function(){return Vi(e)})},A0=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=mr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?tm(s):e["client"+s])||0}},C0=function(e,t){return!t||~Ci.indexOf(e)?nm(e):function(){return ul}},Ai=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=mr(e,n))?a()-nm(e)()[s]:Jr(e)?(qn[n]||ft[n])-tm(i):e[n]-e["offset"+i])},xo=function(e,t){for(var n=0;n<Ls.length;n+=3)(!t||~t.indexOf(Ls[n+1]))&&e(Ls[n],Ls[n+1],Ls[n+2])},Wn=function(e){return typeof e=="string"},_n=function(e){return typeof e=="function"},Ea=function(e){return typeof e=="number"},Or=function(e){return typeof e=="object"},da=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},us=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},hs=Math.abs,im="left",rm="top",wh="right",Eh="bottom",jr="width",Kr="height",Ua="Right",Oa="Left",Fa="Top",ka="Bottom",qt="padding",ri="margin",ea="Width",Th="Height",Kt="px",si=function(e){return nt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},R0=function(e){var t=si(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},vd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Vi=function(e,t){var n=t&&si(e)[du]!=="matrix(1, 0, 0, 1, 0, 0)"&&De.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Al=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},sm=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},P0=function(e){return function(t){return De.utils.snap(sm(e),t)}},Ah=function(e){var t=De.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},L0=function(e){return function(t,n){return Ah(sm(e))(t,n.direction)}},yo=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},rn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},nn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Mo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},xd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},So={toggleActions:"play",anticipatePin:0},Cl={top:0,left:0,center:.5,bottom:1,right:1},al=function(e,t){if(Wn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Cl?Cl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},bo=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,_=gt.createElement("div"),g=Jr(n)||mr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=g?ft:n.tagName==="IFRAME"?n.contentDocument.body:n,S=e.indexOf("start")!==-1,x=S?c:u,M="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(M+=(i===Zt?wh:Eh)+":"+(a+parseFloat(f))+"px;"),o&&(M+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=M,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],ol(_,0,i,S),_},ol=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+ea]=1,s["border"+o+ea]=0,s[n.p]=t+"px",De.set(e,s)},et=[],gu={},to,yd=function(){return pn()-ui>34&&(to||(to=requestAnimationFrame(Yi)))},ds=function(){(!bn||!bn.isPressed||bn.startX>ft.clientWidth)&&(it.cache++,bn?to||(to=requestAnimationFrame(Yi)):Yi(),ui||es("scrollStart"),ui=pn())},hc=function(){Jp=nt.innerWidth,Zp=nt.innerHeight},Ta=function(e){it.cache++,(e===!0||!fn&&!Kp&&!gt.fullscreenElement&&!gt.webkitFullscreenElement&&(!fu||Jp!==nt.innerWidth||Math.abs(nt.innerHeight-Zp)>nt.innerHeight*.25))&&Tl.restart(!0)},Qr={},D0=[],am=function r(){return nn(rt,"scrollEnd",r)||Gr(!0)},es=function(e){return Qr[e]&&Qr[e].map(function(t){return t()})||D0},Vn=[],om=function(e){for(var t=0;t<Vn.length;t+=5)(!e||Vn[t+4]&&Vn[t+4].query===e)&&(Vn[t].style.cssText=Vn[t+1],Vn[t].getBBox&&Vn[t].setAttribute("transform",Vn[t+2]||""),Vn[t+3].uncache=1)},lm=function(){return it.forEach(function(e){return _n(e)&&++e.cacheID&&(e.rec=e())})},Ch=function(e,t){var n;for(wn=0;wn<et.length;wn++)n=et[wn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Na=!0,t&&om(t),t||es("revert")},cm=function(e,t){it.cache++,(t||!En)&&it.forEach(function(n){return _n(n)&&n.cacheID++&&(n.rec=0)}),Wn(e)&&(nt.history.scrollRestoration=Sh=e)},En,Zr=0,Md,I0=function(){if(Md!==Zr){var e=Md=Zr;requestAnimationFrame(function(){return e===Zr&&Gr(!0)})}},um=function(){ft.appendChild(Ws),bh=!bn&&Ws.offsetHeight||nt.innerHeight,ft.removeChild(Ws)},Sd=function(e){return eo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Gr=function(e,t){if(qn=gt.documentElement,ft=gt.body,Mh=[nt,gt,qn,ft],ui&&!e&&!Na){rn(rt,"scrollEnd",am);return}um(),En=rt.isRefreshing=!0,Na||lm();var n=es("refreshInit");jp&&rt.sort(),t||Ch(),it.forEach(function(i){_n(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),et.slice(0).forEach(function(i){return i.refresh()}),Na=!1,et.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),mu=1,Sd(!0),et.forEach(function(i){var s=Ai(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Sd(!1),mu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),it.forEach(function(i){_n(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),cm(Sh,1),Tl.pause(),Zr++,En=2,Yi(2),et.forEach(function(i){return _n(i.vars.onRefresh)&&i.vars.onRefresh(i)}),En=rt.isRefreshing=!1,es("refresh")},_u=0,ll=1,Ba,Yi=function(e){if(e===2||!En&&!Na){rt.isUpdating=!0,Ba&&Ba.update(0);var t=et.length,n=pn(),i=n-uc>=50,s=t&&et[0].scroll();if(ll=_u>s?-1:1,En||(_u=s),i&&(ui&&!Hl&&n-ui>200&&(ui=0,es("scrollEnd")),Sa=uc,uc=n),ll<0){for(wn=t;wn-- >0;)et[wn]&&et[wn].update(0,i);ll=1}else for(wn=0;wn<t;wn++)et[wn]&&et[wn].update(0,i);rt.isUpdating=!1}to=0},vu=[im,rm,Eh,wh,ri+ka,ri+Ua,ri+Fa,ri+Oa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],cl=vu.concat([jr,Kr,"boxSizing","max"+ea,"max"+Th,"position",ri,qt,qt+Fa,qt+Ua,qt+ka,qt+Oa]),N0=function(e,t,n){Xs(n);var i=e._gsap;if(i.spacerIsNative)Xs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},dc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=vu.length,a=t.style,o=e.style,l;s--;)l=vu[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Eh]=o[wh]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[jr]=Al(e,Cn)+Kt,a[Kr]=Al(e,Zt)+Kt,a[qt]=o[ri]=o[rm]=o[im]="0",Xs(i),o[jr]=o["max"+ea]=n[jr],o[Kr]=o["max"+Th]=n[Kr],o[qt]=n[qt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},U0=/([A-Z])/g,Xs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||De.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(U0,"-$1").toLowerCase())}},wo=function(e){for(var t=cl.length,n=e.style,i=[],s=0;s<t;s++)i.push(cl[s],n[cl[s]]);return i.t=e,i},O0=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},ul={left:0,top:0},bd=function(e,t,n,i,s,a,o,l,c,u,h,f,d,_){_n(e)&&(e=e(l)),Wn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?al("0"+e.substr(3),n):0));var g=d?d.time():0,p,m,S;if(d&&d.seek(0),isNaN(e)||(e=+e),Ea(e))d&&(e=De.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),o&&ol(o,n,i,!0);else{_n(t)&&(t=t(l));var x=(e||"0").split(" "),M,E,v,b;S=Ln(t,l)||ft,M=Vi(S)||{},(!M||!M.left&&!M.top)&&si(S).display==="none"&&(b=S.style.display,S.style.display="block",M=Vi(S),b?S.style.display=b:S.style.removeProperty("display")),E=al(x[0],M[i.d]),v=al(x[1]||"0",n),e=M[i.p]-c[i.p]-u+E+s-v,o&&ol(o,v,i,n-v<20||o._isStart&&v>20),n-=n-v}if(_&&(l[_]=e||-.001,e<0&&(e=0)),a){var A=e+n,w=a._isStart;p="scroll"+i.d2,ol(a,A,i,w&&A>20||!w&&(h?Math.max(ft[p],qn[p]):a.parentNode[p])<=A+1),h&&(c=Vi(o),h&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Kt))}return d&&S&&(p=Vi(S),d.seek(f),m=Vi(S),d._caScrollDist=p[i.p]-m[i.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},F0=/(webkit|moz|length|cssText|inset)/i,wd=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===ft){e._stOrig=s.cssText,o=si(e);for(a in o)!+a&&!F0.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;De.core.getCache(e).uncache=1,t.appendChild(e)}},hm=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Eo=function(e,t,n){var i={};i[t.p]="+="+n,De.set(e,i)},Ed=function(e,t){var n=Mr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,h){var f=a.tween,d=l.onComplete,_={};c=c||n();var g=hm(n,c,function(){f.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){it.cache++,a.tween&&Yi()},l.onComplete=function(){a.tween=0,d&&d.call(f)},f=a.tween=De.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},rn(e,"wheel",n.wheelHandler),rt.isTouch&&rn(e,"touchmove",n.wheelHandler),s},rt=function(){function r(t,n){Ps||r.register(De)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),pu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ba){this.update=this.refresh=this.kill=Si;return}n=vd(Wn(n)||Ea(n)||n.nodeType?{trigger:n}:n,So);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,S=s.onSnapComplete,x=s.once,M=s.snap,E=s.pinReparent,v=s.pinSpacer,b=s.containerAnimation,A=s.fastScrollEnd,w=s.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Cn:Zt,C=!h&&h!==0,L=Ln(n.scroller||nt),U=De.core.getCache(L),B=Jr(L),N=("pinType"in n?n.pinType:mr(L,"pinType")||B&&"fixed")==="fixed",O=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],H=C&&n.toggleActions.split(" "),k="markers"in n?n.markers:So.markers,re=B?0:parseFloat(si(L)["border"+y.p2+ea])||0,I=this,Q=n.onRefreshInit&&function(){return n.onRefreshInit(I)},ge=A0(L,B,y),xe=C0(L,B),X=0,$=0,le=0,ee=Mr(L,y),me,Te,Re,Ue,P,ne,ie,de,te,G,fe,ye,D,T,F,Y,Z,J,be,ce,Me,Be,he,Se,He,Xe,Ce,qe,Ke,ht,W,se,ae,oe,pe,ke,Ze,xt,yt;if(I._startClamp=I._endClamp=!1,I._dir=y,p*=45,I.scroller=L,I.scroll=b?b.time.bind(b):ee,Ue=ee(),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(jp=1,n.refreshPriority===-9999&&(Ba=I)),U.tweenScroll=U.tweenScroll||{top:Ed(L,Zt),left:Ed(L,Cn)},I.tweenTo=me=U.tweenScroll[y.p],I.scrubDuration=function(ve){ae=Ea(ve)&&ve,ae?se?se.duration(ve):se=De.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ae,paused:!0,onComplete:function(){return m&&m(I)}}):(se&&se.progress(1).kill(),se=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(h),ht=0,l||(l=i.vars.id)),M&&((!Or(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in ft.style&&De.set(B?[ft,qn]:L,{scrollBehavior:"auto"}),it.forEach(function(ve){return _n(ve)&&ve.target===(B?gt.scrollingElement||qn:L)&&(ve.smooth=!1)}),Re=_n(M.snapTo)?M.snapTo:M.snapTo==="labels"?P0(i):M.snapTo==="labelsDirectional"?L0(i):M.directional!==!1?function(ve,$e){return Ah(M.snapTo)(ve,pn()-$<500?0:$e.direction)}:De.utils.snap(M.snapTo),oe=M.duration||{min:.1,max:2},oe=Or(oe)?Ia(oe.min,oe.max):Ia(oe,oe),pe=De.delayedCall(M.delay||ae/2||.1,function(){var ve=ee(),$e=pn()-$<500,Ge=me.tween;if(($e||Math.abs(I.getVelocity())<10)&&!Ge&&!Hl&&X!==ve){var je=(ve-ne)/T,It=i&&!C?i.totalProgress():je,tt=$e?0:(It-W)/(pn()-Sa)*1e3||0,wt=De.utils.clamp(-je,1-je,hs(tt/2)*tt/.185),$t=je+(M.inertia===!1?0:wt),Ct,Et,mt=M,Bn=mt.onStart,R=mt.onInterrupt,V=mt.onComplete;if(Ct=Re($t,I),Ea(Ct)||(Ct=$t),Et=Math.max(0,Math.round(ne+Ct*T)),ve<=ie&&ve>=ne&&Et!==ve){if(Ge&&!Ge._initted&&Ge.data<=hs(Et-ve))return;M.inertia===!1&&(wt=Ct-je),me(Et,{duration:oe(hs(Math.max(hs($t-It),hs(Ct-It))*.185/tt/.05||0)),ease:M.ease||"power3",data:hs(Et-ve),onInterrupt:function(){return pe.restart(!0)&&R&&us(I,R)},onComplete:function(){I.update(),X=ee(),i&&!C&&(se?se.resetTo("totalProgress",Ct,i._tTime/i._tDur):i.progress(Ct)),ht=W=i&&!C?i.totalProgress():I.progress,S&&S(I),V&&us(I,V)}},ve,wt*T,Et-ve-wt*T),Bn&&us(I,Bn,me.tween)}}else I.isActive&&X!==ve&&pe.restart(!0)}).pause()),l&&(gu[l]=I),f=I.trigger=Ln(f||d!==!0&&d),yt=f&&f._gsap&&f._gsap.stRevert,yt&&(yt=yt(I)),d=d===!0?f:Ln(d),Wn(o)&&(o={targets:f,className:o}),d&&(_===!1||_===ri||(_=!_&&d.parentNode&&d.parentNode.style&&si(d.parentNode).display==="flex"?!1:qt),I.pin=d,Te=De.core.getCache(d),Te.spacer?F=Te.pinState:(v&&(v=Ln(v),v&&!v.nodeType&&(v=v.current||v.nativeElement),Te.spacerIsNative=!!v,v&&(Te.spacerState=wo(v))),Te.spacer=J=v||gt.createElement("div"),J.classList.add("pin-spacer"),l&&J.classList.add("pin-spacer-"+l),Te.pinState=F=wo(d)),n.force3D!==!1&&De.set(d,{force3D:!0}),I.spacer=J=Te.spacer,Ke=si(d),Se=Ke[_+y.os2],ce=De.getProperty(d),Me=De.quickSetter(d,y.a,Kt),dc(d,J,Ke),Z=wo(d)),k){ye=Or(k)?vd(k,xd):xd,G=bo("scroller-start",l,L,y,ye,0),fe=bo("scroller-end",l,L,y,ye,0,G),be=G["offset"+y.op.d2];var st=Ln(mr(L,"content")||L);de=this.markerStart=bo("start",l,st,y,ye,be,0,b),te=this.markerEnd=bo("end",l,st,y,ye,be,0,b),b&&(xt=De.quickSetter([de,te],y.a,Kt)),!N&&!(Ci.length&&mr(L,"fixedMarkers")===!0)&&(R0(B?ft:L),De.set([G,fe],{force3D:!0}),Xe=De.quickSetter(G,y.a,Kt),qe=De.quickSetter(fe,y.a,Kt))}if(b){var Ve=b.vars.onUpdate,Oe=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){I.update(0,0,1),Ve&&Ve.apply(b,Oe||[])})}if(I.previous=function(){return et[et.indexOf(I)-1]},I.next=function(){return et[et.indexOf(I)+1]},I.revert=function(ve,$e){if(!$e)return I.kill(!0);var Ge=ve!==!1||!I.enabled,je=fn;Ge!==I.isReverted&&(Ge&&(ke=Math.max(ee(),I.scroll.rec||0),le=I.progress,Ze=i&&i.progress()),de&&[de,te,G,fe].forEach(function(It){return It.style.display=Ge?"none":"block"}),Ge&&(fn=I,I.update(Ge)),d&&(!E||!I.isActive)&&(Ge?N0(d,J,F):dc(d,J,si(d),He)),Ge||I.update(Ge),fn=je,I.isReverted=Ge)},I.refresh=function(ve,$e,Ge,je){if(!((fn||!I.enabled)&&!$e)){if(d&&ve&&ui){rn(r,"scrollEnd",am);return}!En&&Q&&Q(I),fn=I,me.tween&&!Ge&&(me.tween.kill(),me.tween=0),se&&se.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ie){return Ie.vars.immediateRender&&Ie.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var It=ge(),tt=xe(),wt=b?b.duration():Ai(L,y),$t=T<=.01||!T,Ct=0,Et=je||0,mt=Or(Ge)?Ge.end:n.end,Bn=n.endTrigger||f,R=Or(Ge)?Ge.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),V=I.pinnedContainer=n.pinnedContainer&&Ln(n.pinnedContainer,I),K=f&&Math.max(0,et.indexOf(I))||0,j=K,q,ue,Ee,Le,we,Pe,ze,Fe,ct,_t,ut,jt,at;for(k&&Or(Ge)&&(jt=De.getProperty(G,y.p),at=De.getProperty(fe,y.p));j-- >0;)Pe=et[j],Pe.end||Pe.refresh(0,1)||(fn=I),ze=Pe.pin,ze&&(ze===f||ze===d||ze===V)&&!Pe.isReverted&&(_t||(_t=[]),_t.unshift(Pe),Pe.revert(!0,!0)),Pe!==et[j]&&(K--,j--);for(_n(R)&&(R=R(I)),R=pd(R,"start",I),ne=bd(R,f,It,y,ee(),de,G,I,tt,re,N,wt,b,I._startClamp&&"_startClamp")||(d?-.001:0),_n(mt)&&(mt=mt(I)),Wn(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(Wn(R)?R.split(" ")[0]:"")+mt:(Ct=al(mt.substr(2),It),mt=Wn(R)?R:(b?De.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,ne):ne)+Ct,Bn=f)),mt=pd(mt,"end",I),ie=Math.max(ne,bd(mt||(Bn?"100% 0":wt),Bn,It,y,ee()+Ct,te,fe,I,tt,re,N,wt,b,I._endClamp&&"_endClamp"))||-.001,Ct=0,j=K;j--;)Pe=et[j]||{},ze=Pe.pin,ze&&Pe.start-Pe._pinPush<=ne&&!b&&Pe.end>0&&(q=Pe.end-(I._startClamp?Math.max(0,Pe.start):Pe.start),(ze===f&&Pe.start-Pe._pinPush<ne||ze===V)&&isNaN(R)&&(Ct+=q*(1-Pe.progress)),ze===d&&(Et+=q));if(ne+=Ct,ie+=Ct,I._startClamp&&(I._startClamp+=Ct),I._endClamp&&!En&&(I._endClamp=ie||-.001,ie=Math.min(ie,Ai(L,y))),T=ie-ne||(ne-=.01)&&.001,$t&&(le=De.utils.clamp(0,1,De.utils.normalize(ne,ie,ke))),I._pinPush=Et,de&&Ct&&(q={},q[y.a]="+="+Ct,V&&(q[y.p]="-="+ee()),De.set([de,te],q)),d&&!(mu&&I.end>=Ai(L,y)))q=si(d),Le=y===Zt,Ee=ee(),Be=parseFloat(ce(y.a))+Et,!wt&&ie>1&&(ut=(B?gt.scrollingElement||qn:L).style,ut={style:ut,value:ut["overflow"+y.a.toUpperCase()]},B&&si(ft)["overflow"+y.a.toUpperCase()]!=="scroll"&&(ut.style["overflow"+y.a.toUpperCase()]="scroll")),dc(d,J,q),Z=wo(d),ue=Vi(d,!0),Fe=N&&Mr(L,Le?Cn:Zt)(),_?(He=[_+y.os2,T+Et+Kt],He.t=J,j=_===qt?Al(d,y)+T+Et:0,j&&(He.push(y.d,j+Kt),J.style.flexBasis!=="auto"&&(J.style.flexBasis=j+Kt)),Xs(He),V&&et.forEach(function(Ie){Ie.pin===V&&Ie.vars.pinSpacing!==!1&&(Ie._subPinOffset=!0)}),N&&ee(ke)):(j=Al(d,y),j&&J.style.flexBasis!=="auto"&&(J.style.flexBasis=j+Kt)),N&&(we={top:ue.top+(Le?Ee-ne:Fe)+Kt,left:ue.left+(Le?Fe:Ee-ne)+Kt,boxSizing:"border-box",position:"fixed"},we[jr]=we["max"+ea]=Math.ceil(ue.width)+Kt,we[Kr]=we["max"+Th]=Math.ceil(ue.height)+Kt,we[ri]=we[ri+Fa]=we[ri+Ua]=we[ri+ka]=we[ri+Oa]="0",we[qt]=q[qt],we[qt+Fa]=q[qt+Fa],we[qt+Ua]=q[qt+Ua],we[qt+ka]=q[qt+ka],we[qt+Oa]=q[qt+Oa],Y=O0(F,we,E),En&&ee(0)),i?(ct=i._initted,lc(1),i.render(i.duration(),!0,!0),he=ce(y.a)-Be+T+Et,Ce=Math.abs(T-he)>1,N&&Ce&&Y.splice(Y.length-2,2),i.render(0,!0,!0),ct||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),lc(0)):he=T,ut&&(ut.value?ut.style["overflow"+y.a.toUpperCase()]=ut.value:ut.style.removeProperty("overflow-"+y.a));else if(f&&ee()&&!b)for(ue=f.parentNode;ue&&ue!==ft;)ue._pinOffset&&(ne-=ue._pinOffset,ie-=ue._pinOffset),ue=ue.parentNode;_t&&_t.forEach(function(Ie){return Ie.revert(!1,!0)}),I.start=ne,I.end=ie,Ue=P=En?ke:ee(),!b&&!En&&(Ue<ke&&ee(ke),I.scroll.rec=0),I.revert(!1,!0),$=pn(),pe&&(X=-1,pe.restart(!0)),fn=0,i&&C&&(i._initted||Ze)&&i.progress()!==Ze&&i.progress(Ze||0,!0).render(i.time(),!0,!0),($t||le!==I.progress||b||g||i&&!i._initted)&&(i&&!C&&(i._initted||le||i.vars.immediateRender!==!1)&&i.totalProgress(b&&ne<-.001&&!le?De.utils.normalize(ne,ie,0):le,!0),I.progress=$t||(Ue-ne)/T===le?0:le),d&&_&&(J._pinOffset=Math.round(I.progress*he)),se&&se.invalidate(),isNaN(jt)||(jt-=De.getProperty(G,y.p),at-=De.getProperty(fe,y.p),Eo(G,y,jt),Eo(de,y,jt-(je||0)),Eo(fe,y,at),Eo(te,y,at-(je||0))),$t&&!En&&I.update(),u&&!En&&!D&&(D=!0,u(I),D=!1)}},I.getVelocity=function(){return(ee()-P)/(pn()-Sa)*1e3||0},I.endAnimation=function(){da(I.callbackAnimation),i&&(se?se.progress(1):i.paused()?C||da(i,I.direction<0,1):da(i,i.reversed()))},I.labelToScroll=function(ve){return i&&i.labels&&(ne||I.refresh()||ne)+i.labels[ve]/i.duration()*T||0},I.getTrailing=function(ve){var $e=et.indexOf(I),Ge=I.direction>0?et.slice(0,$e).reverse():et.slice($e+1);return(Wn(ve)?Ge.filter(function(je){return je.vars.preventOverlaps===ve}):Ge).filter(function(je){return I.direction>0?je.end<=ne:je.start>=ie})},I.update=function(ve,$e,Ge){if(!(b&&!Ge&&!ve)){var je=En===!0?ke:I.scroll(),It=ve?0:(je-ne)/T,tt=It<0?0:It>1?1:It||0,wt=I.progress,$t,Ct,Et,mt,Bn,R,V,K;if($e&&(P=Ue,Ue=b?ee():je,M&&(W=ht,ht=i&&!C?i.totalProgress():tt)),p&&d&&!fn&&!vo&&ui&&(!tt&&ne<je+(je-P)/(pn()-Sa)*p?tt=1e-4:tt===1&&ie>je+(je-P)/(pn()-Sa)*p&&(tt=.9999)),tt!==wt&&I.enabled){if($t=I.isActive=!!tt&&tt<1,Ct=!!wt&&wt<1,R=$t!==Ct,Bn=R||!!tt!=!!wt,I.direction=tt>wt?1:-1,I.progress=tt,Bn&&!fn&&(Et=tt&&!wt?0:tt===1?1:wt===1?2:3,C&&(mt=!R&&H[Et+1]!=="none"&&H[Et+1]||H[Et],K=i&&(mt==="complete"||mt==="reset"||mt in i))),w&&(R||K)&&(K||h||!i)&&(_n(w)?w(I):I.getTrailing(w).forEach(function(Ee){return Ee.endAnimation()})),C||(se&&!fn&&!vo?(se._dp._time-se._start!==se._time&&se.render(se._dp._time-se._start),se.resetTo?se.resetTo("totalProgress",tt,i._tTime/i._tDur):(se.vars.totalProgress=tt,se.invalidate().restart())):i&&i.totalProgress(tt,!!(fn&&($||ve)))),d){if(ve&&_&&(J.style[_+y.os2]=Se),!N)Me(wa(Be+he*tt));else if(Bn){if(V=!ve&&tt>wt&&ie+1>je&&je+1>=Ai(L,y),E)if(!ve&&($t||V)){var j=Vi(d,!0),q=je-ne;wd(d,ft,j.top+(y===Zt?q:0)+Kt,j.left+(y===Zt?0:q)+Kt)}else wd(d,J);Xs($t||V?Y:Z),Ce&&tt<1&&$t||Me(Be+(tt===1&&!V?he:0))}}M&&!me.tween&&!fn&&!vo&&pe.restart(!0),o&&(R||x&&tt&&(tt<1||!cc))&&eo(o.targets).forEach(function(Ee){return Ee.classList[$t||x?"add":"remove"](o.className)}),a&&!C&&!ve&&a(I),Bn&&!fn?(C&&(K&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),a&&a(I)),(R||!cc)&&(c&&R&&us(I,c),O[Et]&&us(I,O[Et]),x&&(tt===1?I.kill(!1,1):O[Et]=0),R||(Et=tt===1?1:3,O[Et]&&us(I,O[Et]))),A&&!$t&&Math.abs(I.getVelocity())>(Ea(A)?A:2500)&&(da(I.callbackAnimation),se?se.progress(1):da(i,mt==="reverse"?1:!tt,1))):C&&a&&!fn&&a(I)}if(qe){var ue=b?je/b.duration()*(b._caScrollDist||0):je;Xe(ue+(G._isFlipped?1:0)),qe(ue)}xt&&xt(-je/b.duration()*(b._caScrollDist||0))}},I.enable=function(ve,$e){I.enabled||(I.enabled=!0,rn(L,"resize",Ta),B||rn(L,"scroll",ds),Q&&rn(r,"refreshInit",Q),ve!==!1&&(I.progress=le=0,Ue=P=X=ee()),$e!==!1&&I.refresh())},I.getTween=function(ve){return ve&&me?me.tween:se},I.setPositions=function(ve,$e,Ge,je){if(b){var It=b.scrollTrigger,tt=b.duration(),wt=It.end-It.start;ve=It.start+wt*ve/tt,$e=It.start+wt*$e/tt}I.refresh(!1,!1,{start:md(ve,Ge&&!!I._startClamp),end:md($e,Ge&&!!I._endClamp)},je),I.update()},I.adjustPinSpacing=function(ve){if(He&&ve){var $e=He.indexOf(y.d)+1;He[$e]=parseFloat(He[$e])+ve+Kt,He[1]=parseFloat(He[1])+ve+Kt,Xs(He)}},I.disable=function(ve,$e){if(ve!==!1&&I.revert(!0,!0),I.enabled&&(I.enabled=I.isActive=!1,$e||se&&se.pause(),ke=0,Te&&(Te.uncache=1),Q&&nn(r,"refreshInit",Q),pe&&(pe.pause(),me.tween&&me.tween.kill()&&(me.tween=0)),!B)){for(var Ge=et.length;Ge--;)if(et[Ge].scroller===L&&et[Ge]!==I)return;nn(L,"resize",Ta),B||nn(L,"scroll",ds)}},I.kill=function(ve,$e){I.disable(ve,$e),se&&!$e&&se.kill(),l&&delete gu[l];var Ge=et.indexOf(I);Ge>=0&&et.splice(Ge,1),Ge===wn&&ll>0&&wn--,Ge=0,et.forEach(function(je){return je.scroller===I.scroller&&(Ge=1)}),Ge||En||(I.scroll.rec=0),i&&(i.scrollTrigger=null,ve&&i.revert({kill:!1}),$e||i.kill()),de&&[de,te,G,fe].forEach(function(je){return je.parentNode&&je.parentNode.removeChild(je)}),Ba===I&&(Ba=0),d&&(Te&&(Te.uncache=1),Ge=0,et.forEach(function(je){return je.pin===d&&Ge++}),Ge||(Te.spacer=0)),n.onKill&&n.onKill(I)},et.push(I),I.enable(!1,!1),yt&&yt(I),i&&i.add&&!T){var lt=I.update;I.update=function(){I.update=lt,it.cache++,ne||ie||I.refresh()},De.delayedCall(.01,I.update),T=.01,ne=ie=0}else I.refresh();d&&I0()},r.register=function(n){return Ps||(De=n||em(),Qp()&&window.document&&r.enable(),Ps=ba),Ps},r.defaults=function(n){if(n)for(var i in n)So[i]=n[i];return So},r.disable=function(n,i){ba=0,et.forEach(function(a){return a[i?"kill":"disable"](n)}),nn(nt,"wheel",ds),nn(gt,"scroll",ds),clearInterval(_o),nn(gt,"touchcancel",Si),nn(ft,"touchstart",Si),yo(nn,gt,"pointerdown,touchstart,mousedown",gd),yo(nn,gt,"pointerup,touchend,mouseup",_d),Tl.kill(),xo(nn);for(var s=0;s<it.length;s+=3)Mo(nn,it[s],it[s+1]),Mo(nn,it[s],it[s+2])},r.enable=function(){if(nt=window,gt=document,qn=gt.documentElement,ft=gt.body,De){if(eo=De.utils.toArray,Ia=De.utils.clamp,pu=De.core.context||Si,lc=De.core.suppressOverwrites||Si,Sh=nt.history.scrollRestoration||"auto",_u=nt.pageYOffset||0,De.core.globals("ScrollTrigger",r),ft){ba=1,Ws=document.createElement("div"),Ws.style.height="100vh",Ws.style.position="absolute",um(),T0(),Gt.register(De),r.isTouch=Gt.isTouch,ar=Gt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),fu=Gt.isTouch===1,rn(nt,"wheel",ds),Mh=[nt,gt,qn,ft],De.matchMedia?(r.matchMedia=function(u){var h=De.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},De.addEventListener("matchMediaInit",function(){lm(),Ch()}),De.addEventListener("matchMediaRevert",function(){return om()}),De.addEventListener("matchMedia",function(){Gr(0,1),es("matchMedia")}),De.matchMedia().add("(orientation: portrait)",function(){return hc(),hc})):console.warn("Requires GSAP 3.11.0 or later"),hc(),rn(gt,"scroll",ds);var n=ft.hasAttribute("style"),i=ft.style,s=i.borderTopStyle,a=De.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Vi(ft),Zt.m=Math.round(o.top+Zt.sc())||0,Cn.m=Math.round(o.left+Cn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ft.setAttribute("style",""),ft.removeAttribute("style")),_o=setInterval(yd,250),De.delayedCall(.5,function(){return vo=0}),rn(gt,"touchcancel",Si),rn(ft,"touchstart",Si),yo(rn,gt,"pointerdown,touchstart,mousedown",gd),yo(rn,gt,"pointerup,touchend,mouseup",_d),du=De.utils.checkPrefix("transform"),cl.push(du),Ps=pn(),Tl=De.delayedCall(.2,Gr).pause(),Ls=[gt,"visibilitychange",function(){var u=nt.innerWidth,h=nt.innerHeight;gt.hidden?(dd=u,fd=h):(dd!==u||fd!==h)&&Ta()},gt,"DOMContentLoaded",Gr,nt,"load",Gr,nt,"resize",Ta],xo(rn),et.forEach(function(u){return u.enable(0,1)}),l=0;l<it.length;l+=3)Mo(nn,it[l],it[l+1]),Mo(nn,it[l],it[l+2])}else if(gt){var c=function u(){r.enable(),gt.removeEventListener("DOMContentLoaded",u)};gt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(cc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(_o)||(_o=i)&&setInterval(yd,i),"ignoreMobileResize"in n&&(fu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(xo(nn)||xo(rn,n.autoRefreshEvents||"none"),Kp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Ln(n),a=it.indexOf(s),o=Jr(s);~a&&it.splice(a,o?6:2),i&&(o?Ci.unshift(nt,i,ft,i,qn,i):Ci.unshift(s,i))},r.clearMatchMedia=function(n){et.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Wn(n)?Ln(n):n).getBoundingClientRect(),o=a[s?jr:Kr]*i||0;return s?a.right-o>0&&a.left+o<nt.innerWidth:a.bottom-o>0&&a.top+o<nt.innerHeight},r.positionInViewport=function(n,i,s){Wn(n)&&(n=Ln(n));var a=n.getBoundingClientRect(),o=a[s?jr:Kr],l=i==null?o/2:i in Cl?Cl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/nt.innerWidth:(a.top+l)/nt.innerHeight},r.killAll=function(n){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Qr.killAll||[];Qr={},i.forEach(function(s){return s()})}},r}();rt.version="3.15.0";rt.saveStyles=function(r){return r?eo(r).forEach(function(e){if(e&&e.style){var t=Vn.indexOf(e);t>=0&&Vn.splice(t,5),Vn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),De.core.getCache(e),pu())}}):Vn};rt.revert=function(r,e){return Ch(!r,e)};rt.create=function(r,e){return new rt(r,e)};rt.refresh=function(r){return r?Ta(!0):(Ps||rt.register())&&Gr(!0)};rt.update=function(r){return++it.cache&&Yi(r===!0?2:0)};rt.clearScrollMemory=cm;rt.maxScroll=function(r,e){return Ai(r,e?Cn:Zt)};rt.getScrollFunc=function(r,e){return Mr(Ln(r),e?Cn:Zt)};rt.getById=function(r){return gu[r]};rt.getAll=function(){return et.filter(function(r){return r.vars.id!=="ScrollSmoother"})};rt.isScrolling=function(){return!!ui};rt.snapDirectional=Ah;rt.addEventListener=function(r,e){var t=Qr[r]||(Qr[r]=[]);~t.indexOf(e)||t.push(e)};rt.removeEventListener=function(r,e){var t=Qr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};rt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var h=[],f=[],d=De.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&_n(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return _n(s)&&(s=s(),rn(rt,"refresh",function(){return s=e.batchMax()})),eo(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(rt.create(c))}),t};var Td=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},fc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Gt.isTouch?" pinch-zoom":""):"none",e===qn&&r(ft,t)},To={auto:1,scroll:1},k0=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||De.core.getCache(s),o=pn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==ft&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(To[(l=si(s)).overflowY]||To[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Jr(s)&&(To[(l=si(s)).overflowY]||To[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},dm=function(e,t,n,i){return Gt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&k0,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&rn(gt,Gt.eventTypes[0],Cd,!1,!0)},onDisable:function(){return nn(gt,Gt.eventTypes[0],Cd,!0)}})},B0=/(input|label|select|textarea)/i,Ad,Cd=function(e){var t=B0.test(e.target.tagName);(t||Ad)&&(e._gsapAllow=!0,Ad=t)},z0=function(e){Or(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Ln(e.target)||qn,u=De.core.globals().ScrollSmoother,h=u&&u.get(),f=ar&&(e.content&&Ln(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Mr(c,Zt),_=Mr(c,Cn),g=1,p=(Gt.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,m=0,S=_n(i)?function(){return i(o)}:function(){return i||2.8},x,M,E=dm(c,e.type,!0,s),v=function(){return M=!1},b=Si,A=Si,w=function(){l=Ai(c,Zt),A=Ia(ar?1:0,l),n&&(b=Ia(0,Ai(c,Cn))),x=Zr},y=function(){f._gsap.y=wa(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},C=function(){if(M){requestAnimationFrame(v);var k=wa(o.deltaY/2),re=A(d.v-k);if(f&&re!==d.v+d.offset){d.offset=re-d.v;var I=wa((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",f._gsap.y=I+"px",d.cacheID=it.cache,Yi()}return!0}d.offset&&y(),M=!0},L,U,B,N,O=function(){w(),L.isActive()&&L.vars.scrollY>l&&(d()>l?L.progress(1)&&d(l):L.resetTo("scrollY",l))};return f&&De.set(f,{y:"+=0"}),e.ignoreCheck=function(H){return ar&&H.type==="touchmove"&&C()||g>1.05&&H.type!=="touchstart"||o.isGesturing||H.touches&&H.touches.length>1},e.onPress=function(){M=!1;var H=g;g=wa((nt.visualViewport&&nt.visualViewport.scale||1)/p),L.pause(),H!==g&&fc(c,g>1.01?!0:n?!1:"x"),U=_(),B=d(),w(),x=Zr},e.onRelease=e.onGestureStart=function(H,k){if(d.offset&&y(),!k)N.restart(!0);else{it.cache++;var re=S(),I,Q;n&&(I=_(),Q=I+re*.05*-H.velocityX/.227,re*=Td(_,I,Q,Ai(c,Cn)),L.vars.scrollX=b(Q)),I=d(),Q=I+re*.05*-H.velocityY/.227,re*=Td(d,I,Q,Ai(c,Zt)),L.vars.scrollY=A(Q),L.invalidate().duration(re).play(.01),(ar&&L.vars.scrollY>=l||I>=l-1)&&De.to({},{onUpdate:O,duration:re})}a&&a(H)},e.onWheel=function(){L._ts&&L.pause(),pn()-m>1e3&&(x=0,m=pn())},e.onChange=function(H,k,re,I,Q){if(Zr!==x&&w(),k&&n&&_(b(I[2]===k?U+(H.startX-H.x):_()+k-I[1])),re){d.offset&&y();var ge=Q[2]===re,xe=ge?B+H.startY-H.y:d()+re-Q[1],X=A(xe);ge&&xe!==X&&(B+=X-xe),d(X)}(re||k)&&Yi()},e.onEnable=function(){fc(c,n?!1:"x"),rt.addEventListener("refresh",O),rn(nt,"resize",O),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),E.enable()},e.onDisable=function(){fc(c,!0),nn(nt,"resize",O),rt.removeEventListener("refresh",O),E.kill()},e.lockAxis=e.lockAxis!==!1,o=new Gt(e),o.iOS=ar,ar&&!d()&&d(1),ar&&De.ticker.add(Si),N=o._dc,L=De.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:hm(d,d(),function(){return L.pause()})},onUpdate:Yi,onComplete:N.vars.onComplete}),o};rt.sort=function(r){if(_n(r))return et.sort(r);var e=nt.pageYOffset||0;return rt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+nt.innerHeight}),et.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};rt.observe=function(r){return new Gt(r)};rt.normalizeScroll=function(r){if(typeof r>"u")return bn;if(r===!0&&bn)return bn.enable();if(r===!1){bn&&bn.kill(),bn=r;return}var e=r instanceof Gt?r:z0(r);return bn&&bn.target===e.target&&bn.kill(),Jr(e.target)&&(bn=e),e};rt.core={_getVelocityProp:hu,_inputObserver:dm,_scrollers:it,_proxies:Ci,bridge:{ss:function(){ui||es("scrollStart"),ui=pn()},ref:function(){return fn}}};em()&&De.registerPlugin(rt);const Rd=[{id:"radar-system",number:"01",title:"Smart Radar System",type:"Robotics / Detection",shortDesc:"Ultrasonic distance scanning prototype with 180° servo sweep, target coordinate plotting, and dark-green radar HUD.",tags:["Arduino / ESP8266","HC-SR04 Ultrasonic","SG90 Servo","Processing IDE","C++"],status:"Working Prototype",symbol:"◉",accentColor:"#10b981",overview:"An interactive scanning sonar/radar system built by mounting an HC-SR04 ultrasonic sensor onto a micro servo motor that sweeps continuously across a 180-degree field of view. The system emits high-frequency sound pulses (40 kHz) and measures the round-trip travel time to calculate object distance with millimeter accuracy.",workingPrinciple:"The Arduino triggers a 10µs pulse to the sensor Trigger pin. The sensor transmits eight 40kHz ultrasound bursts. When sound bounces back, the Echo pin outputs a high signal proportional to elapsed time. Distance = (Echo Time in µs × 0.0343 cm/µs) / 2. Every angular step (1° resolution) transmits polar coordinates (angle, distance) via Serial to render the live radar display.",components:[{name:"Microcontroller",spec:"Arduino Uno R3 / ESP8266 NodeMCU"},{name:"Ranging Sensor",spec:"HC-SR04 Ultrasonic (2cm - 400cm range, ±3mm accuracy)"},{name:"Actuator",spec:"SG90 9g Micro Servo (180° rotation range)"},{name:"Display Software",spec:"Processing 4 / Custom Three.js Canvas HUD"},{name:"Power & Support",spec:"5V Breadboard Supply, Custom 3D-printed Mount"}],architecture:["Servo sweeps left-to-right (0° to 180°) in 1-degree steps.","HC-SR04 triggers ping at each step and measures echo travel time.",'Distance and angle data are packed into serial string packets: "angle,distance.".',"Web HUD converts polar coordinates (r, θ) into Cartesian (x, y) coordinates.","Target blips are illuminated with decay trails and range-ring references."],applications:["Robotic obstacle detection & autonomous navigation","Blind spot monitoring in narrow corridors","Classroom demonstration of echolocation and radar physics","Perimeter security intruder alert"],disclaimer:"Demonstrates sonar principles using acoustic waves. It is an educational prototype and does not use radio microwave radar."},{id:"smart-agriculture",number:"02",title:"Smart Agriculture System",type:"IoT / Automation",shortDesc:"Automated microclimate farm with soil moisture tracking, rain protection canopy, and automated irrigation pump simulation.",tags:["Arduino","Soil Moisture","Rain Sensor","5V Relay","Submersible Pump","IoT"],status:"In Progress Prototype",symbol:"🌱",accentColor:"#22c55e",overview:"An intelligent agricultural automation prototype created to conserve water, reduce labor, and protect sensitive crops from unexpected rainfall. The system monitors soil moisture and atmospheric precipitation, automatically activating irrigation only when the soil is dry and closing a protective canopy when raindrops are detected.",workingPrinciple:"Two conductive probes measure soil resistance—higher moisture reduces soil electrical resistance, yielding an analog voltage reading. If moisture drops below 35%, a 5V relay switches on the DC water pump. If the rain sensor detects water drops, a servo deploys the protective roof cover over the seedbed.",components:[{name:"Controller",spec:"Arduino Uno / Nano"},{name:"Soil Sensor",spec:"Capacitive / Resistive Soil Moisture Probe"},{name:"Rain Detection",spec:"Nickel-coated Raindrop Sensor Board (LM393 Comparator)"},{name:"Water Pumping",spec:"5V Mini Submersible Water Pump with Vinyl Tubing"},{name:"Actuation",spec:"TowerPro MG90S Metal Gear Servo (Canopy Mechanism)"},{name:"Switching",spec:"Single-channel Optocoupler 5V Relay Module"}],architecture:["Continuous sensor polling every 2 seconds with analog averaging.","Moisture comparator triggers relay when moisture is < threshold.","Interrupt-driven rain detector signals servo motor to pivot canopy.","LCD 16x2 / Web dashboard displays real-time telemetry (Soil %, Rain: YES/NO, Pump: ON/OFF)."],applications:["Automated drip irrigation for greenhouse nurseries","Water conservation in arid farming regions","Protection of delicate floral crops and seedbeds from sudden rainfall damage"],disclaimer:"The web dashboard simulates sensor telemetry and motor responses for demonstrations without physical high-voltage pumps."},{id:"lpg-safety",number:"03",title:"LPG Gas Safety System",type:"Safety / Embedded Systems",shortDesc:"Flammable gas leakage detector with automated exhaust ventilation, sound buzzer, and simulated emergency shutoff valve.",tags:["MQ-2 Gas Sensor","Arduino Nano","Active Buzzer","12V DC Fan","Relay Module"],status:"Working Concept",symbol:"♨",accentColor:"#f97316",overview:"A life-safety concept designed to mitigate liquefied petroleum gas (LPG) explosions in domestic kitchens and school labs. The system monitors combustible hydrocarbon vapors (propane and butane) in real time and executes an automated safety containment sequence upon threshold breach.",workingPrinciple:"The MQ-2 sensor utilizes a SnO2 (tin dioxide) semiconductor layer with low conductivity in clean air. In the presence of combustible gases, adsorbed oxygen is consumed, drastically increasing sensor conductivity. An analog voltage comparator detects hazardous concentrations (> 400 PPM) and trips safety relays.",components:[{name:"Gas Sensor",spec:"MQ-2 Semiconductor Gas Sensor (LPG, Propane, Smoke)"},{name:"Controller",spec:"Arduino Nano ATmega328P"},{name:"Audible Alarm",spec:"85dB Piezo Buzzer with Red Flashing Strobe LED"},{name:"Ventilation",spec:"Brushless 12V DC Exhaust Fan with Transistor Driver"},{name:"Gas Cut-off",spec:"Simulated 12V Solenoid Shut-off Valve"}],architecture:["Pre-heating phase (20s) to stabilize the sensor internal coil.","PPM level continuously measured and categorized into Safe, Caution, and Hazard.","Upon Hazard: buzzer pulses urgently, solenoid valve cuts gas supply, exhaust fan activates to disperse dense gas from floor level.","Automatic reset only once PPM returns to atmospheric baseline."],applications:["Kitchen gas cylinder leak detection","Chemistry laboratory safety automation","Industrial storage tank monitoring"],disclaimer:"This is an educational prototype and visual demonstration. It is not an industrial ATEX-certified safety device."},{id:"voice-assistant",number:"04",title:"Voice Interaction Interface",type:"AI / Speech Interaction",shortDesc:"Hands-free voice recognition interface with live audio waveform visualization and browser speech synthesis responses.",tags:["Web Speech API","AudioContext API","Speech Synthesis","JavaScript","HTML5 Audio"],status:"Interactive Prototype",symbol:"〰",accentColor:"#a855f7",overview:"An interactive voice recognition and audio visualization interface that lets users command the portfolio using natural speech. It demonstrates hands-free accessibility, real-time frequency analysis with the Web Audio API, and voice responses via the Web Speech Synthesis API.",workingPrinciple:"With explicit user microphone permission, the Web Audio API connects a MediaStreamSource to an AnalyserNode. The Fast Fourier Transform (FFT) analyzes audio spectrum bins to animate the glowing frequency waveform. Concurrently, the Web Speech Recognition engine transcribes spoken words into intent commands.",components:[{name:"Speech Recognition",spec:"Browser SpeechRecognition / webkitSpeechRecognition"},{name:"Audio Analyzer",spec:"Web Audio API AnalyserNode (FFT Size 128)"},{name:"Voice Synthesis",spec:"SpeechSynthesisUtterance with custom pitch and rate"},{name:"Rendering Canvas",spec:"HTML5 2D Canvas with Neon Glow Gradient Filters"}],architecture:["User grants microphone access via browser permission prompt.","Continuous audio stream fed into frequency visualizer.",'Speech engine matches spoken phrases: "Go to projects", "Who is Mritunjay", "Say hello".',"Assistant confirms action with speech synthesis and UI scrolling."],applications:["Accessible portfolio navigation for users with motor impairments","Voice-operated smart room controls and IoT dashboards","Interactive kiosk greeting systems"],disclaimer:"Audio processing runs entirely inside the local browser. No audio recordings are stored, saved, or uploaded to any server."},{id:"helmet-detection",number:"05",title:"Smart Helmet Safety Concept",type:"Computer Vision / Road Safety",shortDesc:"Two-wheeler road safety concept verifying rider helmet compliance before authorizing vehicle ignition switch.",tags:["Computer Vision","YOLO Object Detection Concept","Python / OpenCV","Ignition Interlock"],status:"Research & Concept",symbol:"🏍",accentColor:"#38bdf8",overview:"A vision-based safety system conceptualized to combat motorcycle fatalities caused by lack of helmet use. The system features a forward camera module that inspects the rider’s headgear using an object detection model and controls an ignition relay to prevent riding without protective equipment.",workingPrinciple:'A lightweight neural network (e.g. YOLOv8-nano / MobileNet) processes video frames from a handlebar-mounted camera. It localizes head regions and classifies them into "Helmet" or "No Helmet". If helmet confidence exceeds 90%, the ignition circuit closes; otherwise, an audible warning plays.',components:[{name:"Processing Unit",spec:"Raspberry Pi 4 / ESP32-CAM (Concept Model)"},{name:"Camera Module",spec:"Wide-angle 5MP OV5647 Camera"},{name:"Ignition Control",spec:"12V 30A Automotive Ignition Interlock Relay"},{name:"Visual Indicator",spec:"Dual RGB High-brightness Safety LED"}],architecture:['Rider turns ignition key to "ACC" (accessory mode).',"Camera captures head frame and runs inference.","Model detects helmet bounding box with confidence percentage.","Interlock relay activates starter motor if helmet verified."],applications:["Commercial delivery bike fleet enforcement","Rental motorcycle safety compliance","Traffic checkpoint automated violation logging"],disclaimer:"Simulated computer-vision demonstration. Does not interface with a real motorcycle engine without certified vehicular testing."},{id:"face-recognition",number:"06",title:"3D Face & Landmark Tracker",type:"Computer Vision / 3D Graphics",shortDesc:"Procedural 3D wireframe head mesh with animated facial landmark nodes, depth triangulation, and coordinate telemetry.",tags:["Three.js","WebGL","MediaPipe Concept","3D Landmark Mesh","Python / OpenCV"],status:"Interactive 3D Demo",symbol:"◈",accentColor:"#c084fc",overview:"An interactive exploration of 3D facial landmark estimation, point cloud tracking, and computer vision geometry. Users can rotate and inspect a 3D wireframe human head displaying key landmark points for eyes, nose bridge, jawline contour, and lips.",workingPrinciple:"Modern face trackers map 468 3D landmark coordinates (x, y, z) from a monocular 2D image by inferring depth through deep regression networks. This scene demonstrates the resulting polygonal tessellation using Three.js Wireframe and Point Cloud shaders.",components:[{name:"3D Engine",spec:"Three.js WebGL Renderer with Custom Shaders"},{name:"Mesh Structure",spec:"Procedural 3D Sphere/Head Topology with 320 Vertices"},{name:"Tracker HUD",spec:"Real-time Landmark Coordinate Telemetry (X, Y, Z, Pitch, Yaw)"},{name:"Controls",spec:"Interactive Orbit Controls with Cursor Follow"}],architecture:["Vertex buffer initialized with anatomical facial proportions.","Dynamic keypoint markers attached to ocular, nasal, and mandibular anchors.","Cursor movement smoothly drives head rotation and focal parallax.","HUD reflects simulated landmark coordinate streams in real time."],applications:["Driver fatigue & drowsiness detection","Facial gesture control for assistive computing","Augmented reality avatar face tracking"],disclaimer:"Runs procedurally in WebGL. No biometric facial recognition or storage is performed."},{id:"nfc-card",number:"07",title:"NFC Smart Card System",type:"Embedded Systems / RFID",shortDesc:"Contactless 13.56MHz smart card reader concept with 3D holographic card physics, magnetic flux animation, and UID readout.",tags:["RC522 RFID / NFC","Arduino / ESP32","13.56MHz Mifare","Contactless UID","Access Control"],status:"Working Prototype Concept",symbol:"▣",accentColor:"#34d399",overview:"A high-frequency radio frequency identification (RFID) and near-field communication (NFC) prototype for student access control and cashless canteen attendance. Includes an interactive 3D metallic card with holographic shimmer that users can tap against an NFC reader pad.",workingPrinciple:"The reader generates a 13.56MHz alternating electromagnetic field via its planar antenna coil. When a passive NFC card enters the field within 4cm, inductive coupling powers the card’s internal microchip, which modulates the field to transmit its 4-byte or 7-byte Unique Identifier (UID).",components:[{name:"Reader Module",spec:"RC522 13.56MHz RFID/NFC Module (SPI Interface)"},{name:"Smart Cards",spec:"Mifare Classic 1K Contactless Smart Cards"},{name:"Controller",spec:"Arduino Uno / ESP32 (Wi-Fi Attendance Logger)"},{name:"Feedback",spec:"Buzzer + Green/Red Verification LEDs"}],architecture:["Reader emits constant RF carrier wave.","Card coil harvest energy via Faraday induction.","Card sends anti-collision protocol and responds with UID.","Arduino matches UID against authorized database array and signals access."],applications:["School campus smart attendance logging","Laboratory door lock authorization","Library book borrowing automation"],disclaimer:"This web demo simulates NFC data exchanges and induction physics for educational demonstration."},{id:"fingerprint-system",number:"08",title:"Fingerprint Biometric Concept",type:"Biometrics / Embedded Systems",shortDesc:"Biometric fingerprint scanner visual with animated laser sweep, minutiae ridge-ending detection, and match verification HUD.",tags:["R307 Optical Sensor","Arduino","Minutiae Matching","Biometric Security","Local Cryptography"],status:"Interactive Concept",symbol:"◎",accentColor:"#fb923c",overview:"An interactive exploration of biometric fingerprint authentication and pattern analysis. The demo displays a detailed friction-ridge fingerprint visual, sweeps a cyan laser scanning line across it, detects minutiae points (ridge bifurcations and endings), and visualizes the match verification state.",workingPrinciple:"An optical prism illuminates the finger surface with a blue LED. Ridges touching the glass cause total internal reflection to disperse, creating dark lines, while valleys remain bright. The processor extracts minutiae coordinates and compares them against pre-enrolled template hashes.",components:[{name:"Optical Sensor",spec:"R307 / AS608 Optical Fingerprint Module (500 DPI)"},{name:"Microcontroller",spec:"Arduino Nano via SoftwareSerial (Pins 2 & 3)"},{name:"Template Storage",spec:"Onboard 1000-fingerprint Flash Memory"},{name:"Display Interface",spec:'OLED 0.96" 128x64 I2C Display'}],architecture:["Finger placed on prism activates touch detection.","Image captured and converted into 512-byte normalized minutiae feature vector.","Search algorithm queries stored database with False Acceptance Rate < 0.001%.","System displays verified User ID and match confidence score."],applications:["Classroom attendance verification","Electronic locker secure keypad bypass","Equipment access authorization"],disclaimer:"This interactive canvas demo illustrates biometric minutiae extraction concepts without collecting or storing real fingerprints."}],Rl=[{id:"javascript",name:"JavaScript",abbr:"JS",category:"Web & Logic",color:"#f7df1e",accent:"#eab308",description:"Modern ES6+ syntax, asynchronous programming, DOM interactions, Canvas 2D/WebGL engines, and modular architectures.",experience:"Core scripting language for interactive web projects, custom visualizers, and hardware dashboards."},{id:"html",name:"HTML5",abbr:"HTML",category:"Web & Structure",color:"#e34f26",accent:"#f97316",description:"Semantic markup, accessible structure, Canvas elements, audio/video APIs, and responsive page foundations.",experience:"Structuring modular web applications, hardware monitoring dashboards, and accessible interfaces."},{id:"css",name:"CSS3",abbr:"CSS",category:"Design & Motion",color:"#264de4",accent:"#3b82f6",description:"Modern layout systems (Flexbox, CSS Grid), responsive design, keyframe animations, glassmorphism, and custom properties.",experience:"Crafting dark futuristic aesthetics, fluid typography, and micro-interactions."},{id:"python",name:"Python",abbr:"PY",category:"Programming & AI",color:"#3776ab",accent:"#38bdf8",description:"Object-oriented programming, algorithmic problem-solving, OpenCV computer vision concepts, and serial communication scripts.",experience:"Writing test scripts to bridge microcontroller serial data, image processing experiments, and automation logic."},{id:"c",name:"C Language",abbr:"C",category:"Low-Level Systems",color:"#555555",accent:"#94a3b8",description:"Pointers, memory management, low-level data structures, and foundational algorithmic efficiency.",experience:"Building strong computer science foundations and understanding bare-metal system architecture."},{id:"cpp",name:"C++",abbr:"C++",category:"Embedded & Systems",color:"#00599c",accent:"#60a5fa",description:"Object-oriented hardware programming, timing-critical routines, interrupts, and library development.",experience:"Developing Arduino sketches, sensor drivers, state machines, and hardware communication protocols."},{id:"arduino",name:"Arduino",abbr:"ARD",category:"Physical Computing",color:"#00979d",accent:"#14b8a6",description:"Microcontroller programming, PWM control, analog-to-digital conversion, hardware interrupts, and sensor interfacing.",experience:"Core platform used for Smart Radar, Smart Agriculture, Gas Detection, and robotics prototypes."},{id:"threejs",name:"Three.js / WebGL",abbr:"3D",category:"Creative 3D",color:"#8b5cf6",accent:"#a855f7",description:"3D scenes, camera projection, procedural geometries, standard materials, lighting setups, and raycasting interactions.",experience:"Building interactive 3D avatars, floating celestial skill fields, and miniature interactive worlds."},{id:"webdev",name:"Web Development",abbr:"WEB",category:"Frontend Engineering",color:"#06b6d4",accent:"#22d3ee",description:"Full-stack fundamentals, modern build tools (Vite), performance optimization, and cross-browser compatibility.",experience:"Creating fast, responsive developer portfolios, telemetry dashboards, and interactive educational sites."},{id:"uiux",name:"UI/UX Design",abbr:"UI",category:"Visual & Experience",color:"#ec4899",accent:"#f43f5e",description:"Futuristic dark-mode design, visual hierarchy, purposeful motion design, microcopy, and accessible usability.",experience:"Designing cyberpunk/laboratory aesthetic interfaces with clean ergonomics and high contrast."},{id:"robotics",name:"Robotics",abbr:"BOT",category:"Mechatronics",color:"#10b981",accent:"#34d399",description:"Actuators, servo motors, DC motor drivers (L298N), chassis mechanics, kinematics, and obstacle avoidance logic.",experience:"Building pan-tilt ultrasonic scanning mounts, mobile robotic platforms, and automated mechanisms."},{id:"iot",name:"IoT & Automation",abbr:"IoT",category:"Connected Hardware",color:"#6366f1",accent:"#818cf8",description:"ESP8266/ESP32 Wi-Fi microcontrollers, cloud dashboards (Blynk), telemetry streaming, and automated triggers.",experience:"Prototyping connected greenhouse sensors, real-time alert notifications, and remote monitoring."},{id:"electronics",name:"Electronics",abbr:"ELEC",category:"Hardware Engineering",color:"#f59e0b",accent:"#fbbf24",description:"Circuit schematics, breadboard prototyping, voltage regulation, transistors, relays, pull-up/pull-down resistors.",experience:"Designing safe power distribution for microcontrollers, sensors, solenoids, and inductive loads."},{id:"embedded",name:"Embedded Systems",abbr:"EMB",category:"Hardware Logic",color:"#d946ef",accent:"#e879f9",description:"Communication protocols: I2C, SPI, UART; sensor timing diagrams; register operations; and power optimization.",experience:"Interfacing OLED displays (I2C), RFID/NFC readers (SPI), and fingerprint modules (UART)."},{id:"git",name:"Git & GitHub",abbr:"GIT",category:"Version Control",color:"#f05032",accent:"#fb7185",description:"Repository management, branching, commit discipline, open-source collaboration, and project documentation.",experience:"Managing codebase versions, tracking hardware sketch iterations, and sharing open-source projects."},{id:"processing",name:"Processing IDE",abbr:"PROC",category:"Visual Computing",color:"#006699",accent:"#38bdf8",description:"Creative visual coding, polar-to-cartesian coordinate transformations, serial communication parsing, and radar HUDs.",experience:"Used to render the graphical radar sweep interface directly from Arduino serial ultrasound packets."}],H0=[{id:"web-dev",number:"01",icon:"🌐",title:"Web Development",tagline:"Modern, fast, and structured web interfaces",description:"Building responsive, standards-compliant web applications with clean component architecture, HTML5, modern CSS, and vanilla JavaScript modules without bloat.",highlights:["Component-based architecture","Responsive across mobile & desktop","Semantic & accessible HTML","Clean performance optimization"]},{id:"ui-design",number:"02",icon:"✨",title:"UI & Visual Design",tagline:"Futuristic, high-contrast digital experiences",description:"Designing immersive dark-mode interfaces, cybernetic aesthetics, thoughtful visual hierarchy, bespoke typography, and subtle glowing accents.",highlights:["Cinematic dark themes","Ergonomic layout & typography","Micro-interactions & feedback","Cohesive design systems"]},{id:"creative-coding",number:"03",icon:"⚡",title:"Creative Coding",tagline:"Transforming algorithms into visual motion",description:"Developing generative canvas graphics, audio frequency visualizers, particle systems, and polar coordinate transformations using Processing and WebGL.",highlights:["Canvas 2D & WebGL shaders","Real-time mathematical plotting","Audio reactivity with Web Audio API","Physics-based spring animations"]},{id:"arduino-prog",number:"04",icon:"📟",title:"Arduino Programming",tagline:"Precise hardware firmware & timing in C++",description:"Writing non-blocking firmware for Atmel/ESP microcontrollers, controlling PWM actuators, handling external interrupts, and decoding sensor telemetry.",highlights:["Non-blocking event loops with millis()","Interrupt service routines","Custom serial communication packets","Low-power state management"]},{id:"robotics-elec",number:"05",icon:"🤖",title:"Robotics & Electronics",tagline:"Mechatronics from breadboard to motion",description:"Designing and wiring breadboard circuits, motor driver stages (L298N/L293D), ultrasonic scanning pan-tilts, and mobile robot chassis mechanics.",highlights:["Circuit prototyping & schematics","Servo & DC motor synchronization","Safe power & ground isolation","Ultrasonic obstacle avoidance"]},{id:"iot-prototypes",number:"06",icon:"📡",title:"IoT Prototypes",tagline:"Connecting physical sensors to digital networks",description:"Prototyping connected devices with ESP8266/ESP32, transmitting sensor telemetry (soil, temperature, gas, rain), and triggering automated safety responses.",highlights:["Microcontroller Wi-Fi integration","Blynk & cloud telemetry logging","Threshold event triggers & alarms","Environmental monitoring"]},{id:"interactive-dash",number:"07",icon:"📊",title:"Interactive Dashboards",tagline:"Telemetry visualization & control consoles",description:"Creating real-time diagnostic heads-up displays (HUDs), gauge meters, radar sweeps, and live status monitors that bring sensor data to life.",highlights:["Real-time radar & gauge instruments","Visual status indicators & alarms","Simulated hardware controls","Clean monospace data telemetry"]},{id:"3d-vis",number:"08",icon:"🧊",title:"3D Visualisation",tagline:"Interactive WebGL scenes & voxel characters",description:"Constructing performant Three.js 3D environments, procedural voxel characters with cursor tracking, celestial skill constellations, and miniature landmark worlds.",highlights:["Procedural Three.js geometry","Raycasting body hotspots","Dynamic lighting & soft bloom","Hardware-conscious 60FPS loops"]},{id:"problem-solving",number:"09",icon:"🧩",title:"Technical Problem-Solving",tagline:"Learning by building, testing, and debugging",description:"Iterative approach to troubleshooting: diagnosing oscilloscope signals, serial debug streams, hardware bus conflicts, and browser console errors.",highlights:["Systematic debugging methodology","Hardware & software integration","Hands-on curiosity and documentation","Refining prototypes step-by-step"]}],G0=[{id:"github",name:"GitHub",handle:"mritunjay20",url:"https://github.com/mritunjay20",isVerified:!0,symbol:"GH",iconColor:"#38bdf8",description:"Open source repositories, robotics code, and web prototypes"},{id:"linkedin",name:"LinkedIn",handle:"Mritunjay Saini",url:"https://www.linkedin.com/in/mritunjay-saini-564218445?utm_source=share_via&utm_content=profile&utm_meduim=member_android",isVerified:!1,symbol:"in",iconColor:"#0a66c2",description:"Professional networking, education, and development updates"},{id:"instagram",name:"Instagram",handle:"mritunjay.social",url:"https://www.instagram.com/",isVerified:!1,symbol:"IG",iconColor:"#ec4899",description:"Behind-the-scenes build photos, hardware clips, and desk setup"},{id:"youtube",name:"YouTube",handle:"Mritunjay ",url:"https://youtube.com/@mritunjay_saini1?si=_E-EVHnta_DjAJgZ",isVerified:!1,symbol:"YT",iconColor:"#ef4444",description:"Project walk-throughs, radar tests, and hardware demonstrations"},{id:"pinterest",name:"Pinterest",handle:"Mritunjay Saini",url:"https://www.pin.it/YZVy8waf",isVerified:!1,symbol:"PIN",iconColor:"#e60023",description:"Design inspiration, UI boards, and 3D voxel moodboards"},{id:"x",name:"X (Twitter)",handle:"Mritunjay Saini",url:"https://x.com/mritunjay_33442",isVerified:!1,symbol:"𝕏",iconColor:"#a78bfa",description:"Short tech updates, learning notes, and project releases"}];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rh="168",V0=0,Pd=1,W0=2,fm=1,X0=2,zi=3,Sr=0,Rn=1,ai=2,gr=0,qs=1,Ld=2,Dd=3,Id=4,q0=5,Br=100,Y0=101,$0=102,j0=103,K0=104,Z0=200,J0=201,Q0=202,e_=203,xu=204,yu=205,t_=206,n_=207,i_=208,r_=209,s_=210,a_=211,o_=212,l_=213,c_=214,u_=0,h_=1,d_=2,Pl=3,f_=4,p_=5,m_=6,g_=7,pm=0,__=1,v_=2,_r=0,x_=1,y_=2,M_=3,S_=4,b_=5,w_=6,E_=7,mm=300,ta=301,na=302,Mu=303,Su=304,Gl=306,bu=1e3,Vr=1001,wu=1002,In=1003,T_=1004,Ao=1005,vi=1006,pc=1007,Wr=1008,Ki=1009,gm=1010,_m=1011,no=1012,Ph=1013,ts=1014,Xi=1015,lo=1016,Lh=1017,Dh=1018,ia=1020,vm=35902,xm=1021,ym=1022,yi=1023,Mm=1024,Sm=1025,Ys=1026,ra=1027,bm=1028,Ih=1029,wm=1030,Nh=1031,Uh=1033,hl=33776,dl=33777,fl=33778,pl=33779,Eu=35840,Tu=35841,Au=35842,Cu=35843,Ru=36196,Pu=37492,Lu=37496,Du=37808,Iu=37809,Nu=37810,Uu=37811,Ou=37812,Fu=37813,ku=37814,Bu=37815,zu=37816,Hu=37817,Gu=37818,Vu=37819,Wu=37820,Xu=37821,ml=36492,qu=36494,Yu=36495,Em=36283,$u=36284,ju=36285,Ku=36286,A_=3200,C_=3201,Tm=0,R_=1,or="",Tn="srgb",Er="srgb-linear",Oh="display-p3",Vl="display-p3-linear",Ll="linear",Rt="srgb",Dl="rec709",Il="p3",fs=7680,Nd=519,P_=512,L_=513,D_=514,Am=515,I_=516,N_=517,U_=518,O_=519,Ud=35044,Od="300 es",qi=2e3,Nl=2001;class la{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fd=1234567;const za=Math.PI/180,io=180/Math.PI;function as(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function sn(r,e,t){return Math.max(e,Math.min(t,r))}function Fh(r,e){return(r%e+e)%e}function F_(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function k_(r,e,t){return r!==e?(t-r)/(e-r):0}function Ha(r,e,t){return(1-t)*r+t*e}function B_(r,e,t,n){return Ha(r,e,1-Math.exp(-t*n))}function z_(r,e=1){return e-Math.abs(Fh(r,e*2)-e)}function H_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function G_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function V_(r,e){return r+Math.floor(Math.random()*(e-r+1))}function W_(r,e){return r+Math.random()*(e-r)}function X_(r){return r*(.5-Math.random())}function q_(r){r!==void 0&&(Fd=r);let e=Fd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Y_(r){return r*za}function $_(r){return r*io}function j_(r){return(r&r-1)===0&&r!==0}function K_(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Z_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function J_(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*h,l*f,o*c);break;case"YZY":r.set(l*f,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*f,o*u,o*c);break;case"XZX":r.set(o*u,l*_,l*d,o*c);break;case"YXY":r.set(l*d,o*u,l*_,o*c);break;case"ZYZ":r.set(l*_,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ds(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Mn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Pt={DEG2RAD:za,RAD2DEG:io,generateUUID:as,clamp:sn,euclideanModulo:Fh,mapLinear:F_,inverseLerp:k_,lerp:Ha,damp:B_,pingpong:z_,smoothstep:H_,smootherstep:G_,randInt:V_,randFloat:W_,randFloatSpread:X_,seededRandom:q_,degToRad:Y_,radToDeg:$_,isPowerOfTwo:j_,ceilPowerOfTwo:K_,floorPowerOfTwo:Z_,setQuaternionFromProperEuler:J_,normalize:Mn,denormalize:Ds};class _e{constructor(e=0,t=0){_e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,i,s,a,o,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],S=i[1],x=i[4],M=i[7],E=i[2],v=i[5],b=i[8];return s[0]=a*g+o*S+l*E,s[3]=a*p+o*x+l*v,s[6]=a*m+o*M+l*b,s[1]=c*g+u*S+h*E,s[4]=c*p+u*x+h*v,s[7]=c*m+u*M+h*b,s[2]=f*g+d*S+_*E,s[5]=f*p+d*x+_*v,s[8]=f*m+d*M+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(mc.makeScale(e,t)),this}rotate(e){return this.premultiply(mc.makeRotation(-e)),this}translate(e,t){return this.premultiply(mc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mc=new Qe;function Cm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ul(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Q_(){const r=Ul("canvas");return r.style.display="block",r}const kd={};function Ga(r){r in kd||(kd[r]=!0,console.warn(r))}function ev(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Bd=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zd=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fa={[Er]:{transfer:Ll,primaries:Dl,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[Tn]:{transfer:Rt,primaries:Dl,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Vl]:{transfer:Ll,primaries:Il,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(zd),fromReference:r=>r.applyMatrix3(Bd)},[Oh]:{transfer:Rt,primaries:Il,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(zd),fromReference:r=>r.applyMatrix3(Bd).convertLinearToSRGB()}},tv=new Set([Er,Vl]),pt={enabled:!0,_workingColorSpace:Er,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!tv.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=fa[e].toReference,i=fa[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return fa[r].primaries},getTransfer:function(r){return r===or?Ll:fa[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(fa[e].luminanceCoefficients)}};function $s(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function gc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ps;class nv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ps===void 0&&(ps=Ul("canvas")),ps.width=e.width,ps.height=e.height;const n=ps.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ul("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=$s(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($s(t[n]/255)*255):t[n]=$s(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iv=0;class Rm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(_c(i[a].image)):s.push(_c(i[a]))}else s=_c(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function _c(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?nv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rv=0;class Pn extends la{constructor(e=Pn.DEFAULT_IMAGE,t=Pn.DEFAULT_MAPPING,n=Vr,i=Vr,s=vi,a=Wr,o=yi,l=Ki,c=Pn.DEFAULT_ANISOTROPY,u=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=as(),this.name="",this.source=new Rm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bu:e.x=e.x-Math.floor(e.x);break;case Vr:e.x=e.x<0?0:1;break;case wu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bu:e.y=e.y-Math.floor(e.y);break;case Vr:e.y=e.y<0?0:1;break;case wu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=mm;Pn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,n=0,i=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(d+1)/2,E=(m+1)/2,v=(u+f)/4,b=(h+g)/4,A=(_+p)/4;return x>M&&x>E?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=v/n,s=b/n):M>E?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=v/i,s=A/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=b/s,i=A/s),this.set(n,i,s,t),this}let S=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(h-g)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sv extends la{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Pn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Rm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends sv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Pm extends Pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=In,this.minFilter=In,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class av extends Pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=In,this.minFilter=In,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class co{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],d=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let p=1-o;const m=l*f+c*d+u*_+h*g,S=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const E=Math.sqrt(x),v=Math.atan2(E,m*S);p=Math.sin(p*v)/E,o=Math.sin(o*v)/E}const M=o*S;if(l=l*p+f*M,c=c*p+d*M,u=u*p+_*M,h=h*p+g*M,p===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],d=s[a+2],_=s[a+3];return e[t]=o*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-o*d,e[t+2]=c*_+u*d+o*f-l*h,e[t+3]=u*_-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),d=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vc.copy(this).projectOnVector(e),this.sub(vc)}reflect(e){return this.sub(vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vc=new z,Hd=new co;class uo{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,pi):pi.fromBufferAttribute(s,a),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Co.copy(n.boundingBox)),Co.applyMatrix4(e.matrixWorld),this.union(Co)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),Ro.subVectors(this.max,pa),ms.subVectors(e.a,pa),gs.subVectors(e.b,pa),_s.subVectors(e.c,pa),er.subVectors(gs,ms),tr.subVectors(_s,gs),Cr.subVectors(ms,_s);let t=[0,-er.z,er.y,0,-tr.z,tr.y,0,-Cr.z,Cr.y,er.z,0,-er.x,tr.z,0,-tr.x,Cr.z,0,-Cr.x,-er.y,er.x,0,-tr.y,tr.x,0,-Cr.y,Cr.x,0];return!xc(t,ms,gs,_s,Ro)||(t=[1,0,0,0,1,0,0,0,1],!xc(t,ms,gs,_s,Ro))?!1:(Po.crossVectors(er,tr),t=[Po.x,Po.y,Po.z],xc(t,ms,gs,_s,Ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new z,new z,new z,new z,new z,new z,new z,new z],pi=new z,Co=new uo,ms=new z,gs=new z,_s=new z,er=new z,tr=new z,Cr=new z,pa=new z,Ro=new z,Po=new z,Rr=new z;function xc(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Rr.fromArray(r,s);const o=i.x*Math.abs(Rr.x)+i.y*Math.abs(Rr.y)+i.z*Math.abs(Rr.z),l=e.dot(Rr),c=t.dot(Rr),u=n.dot(Rr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ov=new uo,ma=new z,yc=new z;class ho{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ov.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);const t=ma.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ma,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(yc)),this.expandByPoint(ma.copy(e.center).sub(yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new z,Mc=new z,Lo=new z,nr=new z,Sc=new z,Do=new z,bc=new z;class Wl{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Mc.copy(e).add(t).multiplyScalar(.5),Lo.copy(t).sub(e).normalize(),nr.copy(this.origin).sub(Mc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Lo),o=nr.dot(this.direction),l=-nr.dot(Lo),c=nr.lengthSq(),u=Math.abs(1-a*a);let h,f,d,_;if(u>0)if(h=a*l-o,f=a*o-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Mc).addScaledVector(Lo,f),d}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const n=Oi.dot(this.direction),i=Oi.dot(Oi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,i,s){Sc.subVectors(t,e),Do.subVectors(n,e),bc.crossVectors(Sc,Do);let a=this.direction.dot(bc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;nr.subVectors(this.origin,e);const l=o*this.direction.dot(Do.crossVectors(nr,Do));if(l<0)return null;const c=o*this.direction.dot(Sc.cross(nr));if(c<0||l+c>a)return null;const u=-o*nr.dot(bc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,t,n,i,s,a,o,l,c,u,h,f,d,_,g,p){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,f,d,_,g,p)}set(e,t,n,i,s,a,o,l,c,u,h,f,d,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/vs.setFromMatrixColumn(e,0).length(),s=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,d=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*o,t[4]=-a*h,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=a*l,d=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=a*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=o*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lv,e,cv)}lookAt(e,t,n){const i=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),ir.crossVectors(n,Hn),ir.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),ir.crossVectors(n,Hn)),ir.normalize(),Io.crossVectors(Hn,ir),i[0]=ir.x,i[4]=Io.x,i[8]=Hn.x,i[1]=ir.y,i[5]=Io.y,i[9]=Hn.y,i[2]=ir.z,i[6]=Io.z,i[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],S=n[3],x=n[7],M=n[11],E=n[15],v=i[0],b=i[4],A=i[8],w=i[12],y=i[1],C=i[5],L=i[9],U=i[13],B=i[2],N=i[6],O=i[10],H=i[14],k=i[3],re=i[7],I=i[11],Q=i[15];return s[0]=a*v+o*y+l*B+c*k,s[4]=a*b+o*C+l*N+c*re,s[8]=a*A+o*L+l*O+c*I,s[12]=a*w+o*U+l*H+c*Q,s[1]=u*v+h*y+f*B+d*k,s[5]=u*b+h*C+f*N+d*re,s[9]=u*A+h*L+f*O+d*I,s[13]=u*w+h*U+f*H+d*Q,s[2]=_*v+g*y+p*B+m*k,s[6]=_*b+g*C+p*N+m*re,s[10]=_*A+g*L+p*O+m*I,s[14]=_*w+g*U+p*H+m*Q,s[3]=S*v+x*y+M*B+E*k,s[7]=S*b+x*C+M*N+E*re,s[11]=S*A+x*L+M*O+E*I,s[15]=S*w+x*U+M*H+E*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*d-n*l*d)+g*(+t*l*d-t*c*f+s*a*f-i*a*d+i*c*u-s*l*u)+p*(+t*c*h-t*o*d-s*a*h+n*a*d+s*o*u-n*c*u)+m*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],p=e[14],m=e[15],S=h*p*c-g*f*c+g*l*d-o*p*d-h*l*m+o*f*m,x=_*f*c-u*p*c-_*l*d+a*p*d+u*l*m-a*f*m,M=u*g*c-_*h*c+_*o*d-a*g*d-u*o*m+a*h*m,E=_*h*l-u*g*l-_*o*f+a*g*f+u*o*p-a*h*p,v=t*S+n*x+i*M+s*E;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/v;return e[0]=S*b,e[1]=(g*f*s-h*p*s-g*i*d+n*p*d+h*i*m-n*f*m)*b,e[2]=(o*p*s-g*l*s+g*i*c-n*p*c-o*i*m+n*l*m)*b,e[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*d-n*l*d)*b,e[4]=x*b,e[5]=(u*p*s-_*f*s+_*i*d-t*p*d-u*i*m+t*f*m)*b,e[6]=(_*l*s-a*p*s-_*i*c+t*p*c+a*i*m-t*l*m)*b,e[7]=(a*f*s-u*l*s+u*i*c-t*f*c-a*i*d+t*l*d)*b,e[8]=M*b,e[9]=(_*h*s-u*g*s-_*n*d+t*g*d+u*n*m-t*h*m)*b,e[10]=(a*g*s-_*o*s+_*n*c-t*g*c-a*n*m+t*o*m)*b,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*d-t*o*d)*b,e[12]=E*b,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*p+t*h*p)*b,e[14]=(_*o*i-a*g*i-_*n*l+t*g*l+a*n*p-t*o*p)*b,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,_=s*h,g=a*u,p=a*h,m=o*h,S=l*c,x=l*u,M=l*h,E=n.x,v=n.y,b=n.z;return i[0]=(1-(g+m))*E,i[1]=(d+M)*E,i[2]=(_-x)*E,i[3]=0,i[4]=(d-M)*v,i[5]=(1-(f+m))*v,i[6]=(p+S)*v,i[7]=0,i[8]=(_+x)*b,i[9]=(p-S)*b,i[10]=(1-(f+g))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=vs.set(i[0],i[1],i[2]).length();const a=vs.set(i[4],i[5],i[6]).length(),o=vs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],mi.copy(this);const c=1/s,u=1/a,h=1/o;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=u,mi.elements[5]*=u,mi.elements[6]*=u,mi.elements[8]*=h,mi.elements[9]*=h,mi.elements[10]*=h,t.setFromRotationMatrix(mi),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=qi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,_;if(o===qi)d=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Nl)d=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=qi){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-s),f=(t+e)*c,d=(n+i)*u;let _,g;if(o===qi)_=(a+s)*h,g=-2*h;else if(o===Nl)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vs=new z,mi=new At,lv=new z(0,0,0),cv=new z(1,1,1),ir=new z,Io=new z,Hn=new z,Gd=new At,Vd=new co;class Pi{constructor(e=0,t=0,n=0,i=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vd.setFromEuler(this),this.setFromQuaternion(Vd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class kh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uv=0;const Wd=new z,xs=new co,Fi=new At,No=new z,ga=new z,hv=new z,dv=new co,Xd=new z(1,0,0),qd=new z(0,1,0),Yd=new z(0,0,1),$d={type:"added"},fv={type:"removed"},ys={type:"childadded",child:null},wc={type:"childremoved",child:null};class Jt extends la{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new z,t=new Pi,n=new co,i=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new At},normalMatrix:{value:new Qe}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(Xd,e)}rotateY(e){return this.rotateOnAxis(qd,e)}rotateZ(e){return this.rotateOnAxis(Yd,e)}translateOnAxis(e,t){return Wd.copy(e).applyQuaternion(this.quaternion),this.position.add(Wd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xd,e)}translateY(e){return this.translateOnAxis(qd,e)}translateZ(e){return this.translateOnAxis(Yd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?No.copy(e):No.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(ga,No,this.up):Fi.lookAt(No,ga,this.up),this.quaternion.setFromRotationMatrix(Fi),i&&(Fi.extractRotation(i.matrixWorld),xs.setFromRotationMatrix(Fi),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($d),ys.child=e,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fv),wc.child=e,this.dispatchEvent(wc),wc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($d),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,hv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,dv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Jt.DEFAULT_UP=new z(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new z,ki=new z,Ec=new z,Bi=new z,Ms=new z,Ss=new z,jd=new z,Tc=new z,Ac=new z,Cc=new z;class Ei{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),gi.subVectors(e,t),i.cross(gi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){gi.subVectors(i,t),ki.subVectors(n,t),Ec.subVectors(e,t);const a=gi.dot(gi),o=gi.dot(ki),l=gi.dot(Ec),c=ki.dot(ki),u=ki.dot(Ec),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bi.x),l.addScaledVector(a,Bi.y),l.addScaledVector(o,Bi.z),l)}static isFrontFacing(e,t,n,i){return gi.subVectors(n,t),ki.subVectors(e,t),gi.cross(ki).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),gi.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Ei.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ms.subVectors(i,n),Ss.subVectors(s,n),Tc.subVectors(e,n);const l=Ms.dot(Tc),c=Ss.dot(Tc);if(l<=0&&c<=0)return t.copy(n);Ac.subVectors(e,i);const u=Ms.dot(Ac),h=Ss.dot(Ac);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ms,a);Cc.subVectors(e,s);const d=Ms.dot(Cc),_=Ss.dot(Cc);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Ss,o);const p=u*_-d*h;if(p<=0&&h-u>=0&&d-_>=0)return jd.subVectors(s,i),o=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(jd,o);const m=1/(p+g+f);return a=g*m,o=f*m,t.copy(n).addScaledVector(Ms,a).addScaledVector(Ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function Rc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=Fh(e,1),t=sn(t,0,1),n=sn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Rc(a,s,e+1/3),this.g=Rc(a,s,e),this.b=Rc(a,s,e-1/3)}return pt.toWorkingColorSpace(this,i),this}setStyle(e,t=Tn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){const n=Lm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}copyLinearToSRGB(e){return this.r=gc(e.r),this.g=gc(e.g),this.b=gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return pt.fromWorkingColorSpace(dn.copy(this),e),Math.round(sn(dn.r*255,0,255))*65536+Math.round(sn(dn.g*255,0,255))*256+Math.round(sn(dn.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(dn.copy(this),t);const n=dn.r,i=dn.g,s=dn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Tn){pt.fromWorkingColorSpace(dn.copy(this),e);const t=dn.r,n=dn.g,i=dn.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+t,rr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rr),e.getHSL(Uo);const n=Ha(rr.h,Uo.h,t),i=Ha(rr.s,Uo.s,t),s=Ha(rr.l,Uo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new Ye;Ye.NAMES=Lm;let pv=0;class os extends la{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=as(),this.name="",this.type="Material",this.blending=qs,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xu,this.blendDst=yu,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Pl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(n.blending=this.blending),this.side!==Sr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xu&&(n.blendSrc=this.blendSrc),this.blendDst!==yu&&(n.blendDst=this.blendDst),this.blendEquation!==Br&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class an extends os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=pm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new z,Oo=new _e;class hi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ud,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ga("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oo.fromBufferAttribute(this,t),Oo.applyMatrix3(e),this.setXY(t,Oo.x,Oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ds(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ds(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ds(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ds(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ds(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array),i=Mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array),i=Mn(i,this.array),s=Mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ud&&(e.usage=this.usage),e}}class Dm extends hi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Im extends hi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vt extends hi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mv=0;const ti=new At,Pc=new Jt,bs=new z,Gn=new uo,_a=new uo,tn=new z;class Vt extends la{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cm(e)?Im:Dm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,n){return ti.makeTranslation(e,t,n),this.applyMatrix4(ti),this}scale(e,t,n){return ti.makeScale(e,t,n),this.applyMatrix4(ti),this}lookAt(e){return Pc.lookAt(e),Pc.updateMatrix(),this.applyMatrix4(Pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new vt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Gn.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ho);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];_a.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(Gn.min,_a.min),Gn.expandByPoint(tn),tn.addVectors(Gn.max,_a.max),Gn.expandByPoint(tn)):(Gn.expandByPoint(_a.min),Gn.expandByPoint(_a.max))}Gn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)tn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(tn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)tn.fromBufferAttribute(o,c),l&&(bs.fromBufferAttribute(e,c),tn.add(bs)),i=Math.max(i,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<n.count;A++)o[A]=new z,l[A]=new z;const c=new z,u=new z,h=new z,f=new _e,d=new _e,_=new _e,g=new z,p=new z;function m(A,w,y){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,y),f.fromBufferAttribute(s,A),d.fromBufferAttribute(s,w),_.fromBufferAttribute(s,y),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const C=1/(d.x*_.y-_.x*d.y);isFinite(C)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(C),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(C),o[A].add(g),o[w].add(g),o[y].add(g),l[A].add(p),l[w].add(p),l[y].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let A=0,w=S.length;A<w;++A){const y=S[A],C=y.start,L=y.count;for(let U=C,B=C+L;U<B;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const x=new z,M=new z,E=new z,v=new z;function b(A){E.fromBufferAttribute(i,A),v.copy(E);const w=o[A];x.copy(w),x.sub(E.multiplyScalar(E.dot(w))).normalize(),M.crossVectors(v,w);const C=M.dot(l[A])<0?-1:1;a.setXYZW(A,x.x,x.y,x.z,C)}for(let A=0,w=S.length;A<w;++A){const y=S[A],C=y.start,L=y.count;for(let U=C,B=C+L;U<B;U+=3)b(e.getX(U+0)),b(e.getX(U+1)),b(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new z,s=new z,a=new z,o=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[d++]}return new hi(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kd=new At,Pr=new Wl,Fo=new ho,Zd=new z,ws=new z,Es=new z,Ts=new z,Lc=new z,ko=new z,Bo=new _e,zo=new _e,Ho=new _e,Jd=new z,Qd=new z,ef=new z,Go=new z,Vo=new z;class Ne extends Jt{constructor(e=new Vt,t=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){ko.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Lc.fromBufferAttribute(h,e),a?ko.addScaledVector(Lc,u):ko.addScaledVector(Lc.sub(t),u))}t.add(ko)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(s),Pr.copy(e.ray).recast(e.near),!(Fo.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(Fo,Zd)===null||Pr.origin.distanceToSquared(Zd)>(e.far-e.near)**2))&&(Kd.copy(s).invert(),Pr.copy(e.ray).applyMatrix4(Kd),!(n.boundingBox!==null&&Pr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],S=Math.max(p.start,d.start),x=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let M=S,E=x;M<E;M+=3){const v=o.getX(M),b=o.getX(M+1),A=o.getX(M+2);i=Wo(this,m,e,n,c,u,h,v,b,A),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const S=o.getX(p),x=o.getX(p+1),M=o.getX(p+2);i=Wo(this,a,e,n,c,u,h,S,x,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],S=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=S,E=x;M<E;M+=3){const v=M,b=M+1,A=M+2;i=Wo(this,m,e,n,c,u,h,v,b,A),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const S=p,x=p+1,M=p+2;i=Wo(this,a,e,n,c,u,h,S,x,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function gv(r,e,t,n,i,s,a,o){let l;if(e.side===Rn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Sr,o),l===null)return null;Vo.copy(o),Vo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Vo);return c<t.near||c>t.far?null:{distance:c,point:Vo.clone(),object:r}}function Wo(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,ws),r.getVertexPosition(l,Es),r.getVertexPosition(c,Ts);const u=gv(r,e,t,n,ws,Es,Ts,Go);if(u){i&&(Bo.fromBufferAttribute(i,o),zo.fromBufferAttribute(i,l),Ho.fromBufferAttribute(i,c),u.uv=Ei.getInterpolation(Go,ws,Es,Ts,Bo,zo,Ho,new _e)),s&&(Bo.fromBufferAttribute(s,o),zo.fromBufferAttribute(s,l),Ho.fromBufferAttribute(s,c),u.uv1=Ei.getInterpolation(Go,ws,Es,Ts,Bo,zo,Ho,new _e)),a&&(Jd.fromBufferAttribute(a,o),Qd.fromBufferAttribute(a,l),ef.fromBufferAttribute(a,c),u.normal=Ei.getInterpolation(Go,ws,Es,Ts,Jd,Qd,ef,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new z,materialIndex:0};Ei.getNormal(ws,Es,Ts,h.normal),u.face=h}return u}class Tt extends Vt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(h,2));function _(g,p,m,S,x,M,E,v,b,A,w){const y=M/b,C=E/A,L=M/2,U=E/2,B=v/2,N=b+1,O=A+1;let H=0,k=0;const re=new z;for(let I=0;I<O;I++){const Q=I*C-U;for(let ge=0;ge<N;ge++){const xe=ge*y-L;re[g]=xe*S,re[p]=Q*x,re[m]=B,c.push(re.x,re.y,re.z),re[g]=0,re[p]=0,re[m]=v>0?1:-1,u.push(re.x,re.y,re.z),h.push(ge/b),h.push(1-I/A),H+=1}}for(let I=0;I<A;I++)for(let Q=0;Q<b;Q++){const ge=f+Q+N*I,xe=f+Q+N*(I+1),X=f+(Q+1)+N*(I+1),$=f+(Q+1)+N*I;l.push(ge,xe,$),l.push(xe,X,$),k+=6}o.addGroup(d,k,w),d+=k,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sa(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Sn(r){const e={};for(let t=0;t<r.length;t++){const n=sa(r[t]);for(const i in n)e[i]=n[i]}return e}function _v(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Nm(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const vv={clone:sa,merge:Sn};var xv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class br extends os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xv,this.fragmentShader=yv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.uniformsGroups=_v(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Um extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sr=new z,tf=new _e,nf=new _e;class Bt extends Um{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return io*2*Math.atan(Math.tan(za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,t){return this.getViewBounds(e,tf,nf),t.subVectors(nf,tf)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(za*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const As=-90,Cs=1;class Mv extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Bt(As,Cs,e,t);i.layers=this.layers,this.add(i);const s=new Bt(As,Cs,e,t);s.layers=this.layers,this.add(s);const a=new Bt(As,Cs,e,t);a.layers=this.layers,this.add(a);const o=new Bt(As,Cs,e,t);o.layers=this.layers,this.add(o);const l=new Bt(As,Cs,e,t);l.layers=this.layers,this.add(l);const c=new Bt(As,Cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===qi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Om extends Pn{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ta,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sv extends ns{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Om(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Tt(5,5,5),s=new br({name:"CubemapFromEquirect",uniforms:sa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:gr});s.uniforms.tEquirect.value=t;const a=new Ne(i,s),o=t.minFilter;return t.minFilter===Wr&&(t.minFilter=vi),new Mv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Dc=new z,bv=new z,wv=new Qe;class Fr{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Dc.subVectors(n,t).cross(bv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Dc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wv.getNormalMatrix(e),i=this.coplanarPoint(Dc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new ho,Xo=new z;class Bh{constructor(e=new Fr,t=new Fr,n=new Fr,i=new Fr,s=new Fr,a=new Fr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qi){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],p=i[11],m=i[12],S=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-s,f-c,p-d,M-m).normalize(),n[1].setComponents(l+s,f+c,p+d,M+m).normalize(),n[2].setComponents(l+a,f+u,p+_,M+S).normalize(),n[3].setComponents(l-a,f-u,p-_,M-S).normalize(),n[4].setComponents(l-o,f-h,p-g,M-x).normalize(),t===qi)n[5].setComponents(l+o,f+h,p+g,M+x).normalize();else if(t===Nl)n[5].setComponents(o,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){return Lr.center.set(0,0,0),Lr.radius=.7071067811865476,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Xo.x=i.normal.x>0?e.max.x:e.min.x,Xo.y=i.normal.y>0?e.max.y:e.min.y,Xo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fm(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Ev(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(r.bindBuffer(c,o),h.count===-1&&f.length===0&&r.bufferSubData(c,0,u),f.length!==0){for(let d=0,_=f.length;d<_;d++){const g=f[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}h.count!==-1&&(r.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class fo extends Vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const S=m*f-a;for(let x=0;x<c;x++){const M=x*h-s;_.push(M,-S,0),g.push(0,0,1),p.push(x/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const x=S+c*m,M=S+c*(m+1),E=S+1+c*(m+1),v=S+1+c*m;d.push(x,M,v),d.push(M,E,v)}this.setIndex(d),this.setAttribute("position",new vt(_,3)),this.setAttribute("normal",new vt(g,3)),this.setAttribute("uv",new vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Av=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Iv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Uv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ov=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$v=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ex=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ix=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ax=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ox=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ux=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_x=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ex=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ax=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Px=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ux=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ox=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$x=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ey=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ty=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ny=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ry=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ay=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ly=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,py=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,my=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_y=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,My=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,by=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ey=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ty=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Py=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ly=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Iy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ny=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Oy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ky=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,By=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$y=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ky=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,eM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,iM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:Tv,alphahash_pars_fragment:Av,alphamap_fragment:Cv,alphamap_pars_fragment:Rv,alphatest_fragment:Pv,alphatest_pars_fragment:Lv,aomap_fragment:Dv,aomap_pars_fragment:Iv,batching_pars_vertex:Nv,batching_vertex:Uv,begin_vertex:Ov,beginnormal_vertex:Fv,bsdfs:kv,iridescence_fragment:Bv,bumpmap_pars_fragment:zv,clipping_planes_fragment:Hv,clipping_planes_pars_fragment:Gv,clipping_planes_pars_vertex:Vv,clipping_planes_vertex:Wv,color_fragment:Xv,color_pars_fragment:qv,color_pars_vertex:Yv,color_vertex:$v,common:jv,cube_uv_reflection_fragment:Kv,defaultnormal_vertex:Zv,displacementmap_pars_vertex:Jv,displacementmap_vertex:Qv,emissivemap_fragment:ex,emissivemap_pars_fragment:tx,colorspace_fragment:nx,colorspace_pars_fragment:ix,envmap_fragment:rx,envmap_common_pars_fragment:sx,envmap_pars_fragment:ax,envmap_pars_vertex:ox,envmap_physical_pars_fragment:vx,envmap_vertex:lx,fog_vertex:cx,fog_pars_vertex:ux,fog_fragment:hx,fog_pars_fragment:dx,gradientmap_pars_fragment:fx,lightmap_pars_fragment:px,lights_lambert_fragment:mx,lights_lambert_pars_fragment:gx,lights_pars_begin:_x,lights_toon_fragment:xx,lights_toon_pars_fragment:yx,lights_phong_fragment:Mx,lights_phong_pars_fragment:Sx,lights_physical_fragment:bx,lights_physical_pars_fragment:wx,lights_fragment_begin:Ex,lights_fragment_maps:Tx,lights_fragment_end:Ax,logdepthbuf_fragment:Cx,logdepthbuf_pars_fragment:Rx,logdepthbuf_pars_vertex:Px,logdepthbuf_vertex:Lx,map_fragment:Dx,map_pars_fragment:Ix,map_particle_fragment:Nx,map_particle_pars_fragment:Ux,metalnessmap_fragment:Ox,metalnessmap_pars_fragment:Fx,morphinstance_vertex:kx,morphcolor_vertex:Bx,morphnormal_vertex:zx,morphtarget_pars_vertex:Hx,morphtarget_vertex:Gx,normal_fragment_begin:Vx,normal_fragment_maps:Wx,normal_pars_fragment:Xx,normal_pars_vertex:qx,normal_vertex:Yx,normalmap_pars_fragment:$x,clearcoat_normal_fragment_begin:jx,clearcoat_normal_fragment_maps:Kx,clearcoat_pars_fragment:Zx,iridescence_pars_fragment:Jx,opaque_fragment:Qx,packing:ey,premultiplied_alpha_fragment:ty,project_vertex:ny,dithering_fragment:iy,dithering_pars_fragment:ry,roughnessmap_fragment:sy,roughnessmap_pars_fragment:ay,shadowmap_pars_fragment:oy,shadowmap_pars_vertex:ly,shadowmap_vertex:cy,shadowmask_pars_fragment:uy,skinbase_vertex:hy,skinning_pars_vertex:dy,skinning_vertex:fy,skinnormal_vertex:py,specularmap_fragment:my,specularmap_pars_fragment:gy,tonemapping_fragment:_y,tonemapping_pars_fragment:vy,transmission_fragment:xy,transmission_pars_fragment:yy,uv_pars_fragment:My,uv_pars_vertex:Sy,uv_vertex:by,worldpos_vertex:wy,background_vert:Ey,background_frag:Ty,backgroundCube_vert:Ay,backgroundCube_frag:Cy,cube_vert:Ry,cube_frag:Py,depth_vert:Ly,depth_frag:Dy,distanceRGBA_vert:Iy,distanceRGBA_frag:Ny,equirect_vert:Uy,equirect_frag:Oy,linedashed_vert:Fy,linedashed_frag:ky,meshbasic_vert:By,meshbasic_frag:zy,meshlambert_vert:Hy,meshlambert_frag:Gy,meshmatcap_vert:Vy,meshmatcap_frag:Wy,meshnormal_vert:Xy,meshnormal_frag:qy,meshphong_vert:Yy,meshphong_frag:$y,meshphysical_vert:jy,meshphysical_frag:Ky,meshtoon_vert:Zy,meshtoon_frag:Jy,points_vert:Qy,points_frag:eM,shadow_vert:tM,shadow_frag:nM,sprite_vert:iM,sprite_frag:rM},Ae={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},bi={basic:{uniforms:Sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Sn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Sn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Sn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Sn([Ae.points,Ae.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Sn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Sn([Ae.common,Ae.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Sn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Sn([Ae.sprite,Ae.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Sn([Ae.common,Ae.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Sn([Ae.lights,Ae.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};bi.physical={uniforms:Sn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const qo={r:0,b:0,g:0},Dr=new Pi,sM=new At;function aM(r,e,t,n,i,s,a){const o=new Ye(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function g(S){let x=!1;const M=_(S);M===null?m(o,l):M&&M.isColor&&(m(M,1),x=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(S,x){const M=_(x);M&&(M.isCubeTexture||M.mapping===Gl)?(u===void 0&&(u=new Ne(new Tt(1,1,1),new br({name:"BackgroundCubeMaterial",uniforms:sa(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,v,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Dr.copy(x.backgroundRotation),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(sM.makeRotationFromEuler(Dr)),u.material.toneMapped=pt.getTransfer(M.colorSpace)!==Rt,(h!==M||f!==M.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,d=r.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ne(new fo(2,2),new br({name:"BackgroundMaterial",uniforms:sa(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=pt.getTransfer(M.colorSpace)!==Rt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,x){S.getRGB(qo,Nm(r)),n.buffers.color.setClear(qo.r,qo.g,qo.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(S,x=1){o.set(S),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(o,l)},render:g,addToRenderList:p}}function oM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(y,C,L,U,B){let N=!1;const O=h(U,L,C);s!==O&&(s=O,c(s.object)),N=d(y,U,L,B),N&&_(y,U,L,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,M(y,C,L,U),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function u(y){return r.deleteVertexArray(y)}function h(y,C,L){const U=L.wireframe===!0;let B=n[y.id];B===void 0&&(B={},n[y.id]=B);let N=B[C.id];N===void 0&&(N={},B[C.id]=N);let O=N[U];return O===void 0&&(O=f(l()),N[U]=O),O}function f(y){const C=[],L=[],U=[];for(let B=0;B<t;B++)C[B]=0,L[B]=0,U[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:U,object:y,attributes:{},index:null}}function d(y,C,L,U){const B=s.attributes,N=C.attributes;let O=0;const H=L.getAttributes();for(const k in H)if(H[k].location>=0){const I=B[k];let Q=N[k];if(Q===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor)),I===void 0||I.attribute!==Q||Q&&I.data!==Q.data)return!0;O++}return s.attributesNum!==O||s.index!==U}function _(y,C,L,U){const B={},N=C.attributes;let O=0;const H=L.getAttributes();for(const k in H)if(H[k].location>=0){let I=N[k];I===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(I=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(I=y.instanceColor));const Q={};Q.attribute=I,I&&I.data&&(Q.data=I.data),B[k]=Q,O++}s.attributes=B,s.attributesNum=O,s.index=U}function g(){const y=s.newAttributes;for(let C=0,L=y.length;C<L;C++)y[C]=0}function p(y){m(y,0)}function m(y,C){const L=s.newAttributes,U=s.enabledAttributes,B=s.attributeDivisors;L[y]=1,U[y]===0&&(r.enableVertexAttribArray(y),U[y]=1),B[y]!==C&&(r.vertexAttribDivisor(y,C),B[y]=C)}function S(){const y=s.newAttributes,C=s.enabledAttributes;for(let L=0,U=C.length;L<U;L++)C[L]!==y[L]&&(r.disableVertexAttribArray(L),C[L]=0)}function x(y,C,L,U,B,N,O){O===!0?r.vertexAttribIPointer(y,C,L,B,N):r.vertexAttribPointer(y,C,L,U,B,N)}function M(y,C,L,U){g();const B=U.attributes,N=L.getAttributes(),O=C.defaultAttributeValues;for(const H in N){const k=N[H];if(k.location>=0){let re=B[H];if(re===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),re!==void 0){const I=re.normalized,Q=re.itemSize,ge=e.get(re);if(ge===void 0)continue;const xe=ge.buffer,X=ge.type,$=ge.bytesPerElement,le=X===r.INT||X===r.UNSIGNED_INT||re.gpuType===Ph;if(re.isInterleavedBufferAttribute){const ee=re.data,me=ee.stride,Te=re.offset;if(ee.isInstancedInterleavedBuffer){for(let Re=0;Re<k.locationSize;Re++)m(k.location+Re,ee.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Re=0;Re<k.locationSize;Re++)p(k.location+Re);r.bindBuffer(r.ARRAY_BUFFER,xe);for(let Re=0;Re<k.locationSize;Re++)x(k.location+Re,Q/k.locationSize,X,I,me*$,(Te+Q/k.locationSize*Re)*$,le)}else{if(re.isInstancedBufferAttribute){for(let ee=0;ee<k.locationSize;ee++)m(k.location+ee,re.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ee=0;ee<k.locationSize;ee++)p(k.location+ee);r.bindBuffer(r.ARRAY_BUFFER,xe);for(let ee=0;ee<k.locationSize;ee++)x(k.location+ee,Q/k.locationSize,X,I,Q*$,Q/k.locationSize*ee*$,le)}}else if(O!==void 0){const I=O[H];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(k.location,I);break;case 3:r.vertexAttrib3fv(k.location,I);break;case 4:r.vertexAttrib4fv(k.location,I);break;default:r.vertexAttrib1fv(k.location,I)}}}}S()}function E(){A();for(const y in n){const C=n[y];for(const L in C){const U=C[L];for(const B in U)u(U[B].object),delete U[B];delete C[L]}delete n[y]}}function v(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const L in C){const U=C[L];for(const B in U)u(U[B].object),delete U[B];delete C[L]}delete n[y.id]}function b(y){for(const C in n){const L=n[C];if(L[y.id]===void 0)continue;const U=L[y.id];for(const B in U)u(U[B].object),delete U[B];delete L[y.id]}}function A(){w(),a=!0,s!==i&&(s=i,c(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:w,dispose:E,releaseStatesOfGeometry:v,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:p,disableUnusedAttributes:S}}function lM(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g];for(let g=0;g<f.length;g++)t.update(_,n,f[g])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function cM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(v){return!(v!==yi&&n.convert(v)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){const b=v===lo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Ki&&n.convert(v)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==Xi&&!b)}function l(v){if(v==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:M,maxSamples:E}}function uM(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Fr,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const S=s?0:n,x=S*4;let M=m.clippingState||null;l.value=M,M=u(_,f,x,d);for(let E=0;E!==x;++E)M[E]=t[E];m.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,M=d;x!==g;++x,M+=4)a.copy(h[x]).applyMatrix4(S,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function hM(r){let e=new WeakMap;function t(a,o){return o===Mu?a.mapping=ta:o===Su&&(a.mapping=na),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Mu||o===Su)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Sv(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class km extends Um{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Os=4,rf=[.125,.215,.35,.446,.526,.582],zr=20,Ic=new km,sf=new Ye;let Nc=null,Uc=0,Oc=0,Fc=!1;const kr=(1+Math.sqrt(5))/2,Rs=1/kr,af=[new z(-kr,Rs,0),new z(kr,Rs,0),new z(-Rs,0,kr),new z(Rs,0,kr),new z(0,kr,-Rs),new z(0,kr,Rs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class of{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Nc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nc,Uc,Oc),this._renderer.xr.enabled=Fc,e.scissorTest=!1,Yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ta||e.mapping===na?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:lo,format:yi,colorSpace:Er,depthBuffer:!1},i=lf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dM(s)),this._blurMaterial=fM(s,e,t)}return i}_compileMaterial(e){const t=new Ne(this._lodPlanes[0],e);this._renderer.compile(t,Ic)}_sceneToCubeUV(e,t,n,i){const o=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(sf),u.toneMapping=_r,u.autoClear=!1;const d=new an({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),_=new Ne(new Tt,d);let g=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,g=!0):(d.color.copy(sf),g=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):S===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const x=this._cubeSize;Yo(i,S*x,m>2?x:0,x,x),u.setRenderTarget(i),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ta||e.mapping===na;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cf());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ne(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Yo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ic)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=af[(i-s-1)%af.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ne(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*zr-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):zr;p>zr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zr}`);const m=[];let S=0;for(let b=0;b<zr;++b){const A=b/g,w=Math.exp(-A*A/2);m.push(w),b===0?S+=w:b<p&&(S+=2*w)}for(let b=0;b<m.length;b++)m[b]=m[b]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;const M=this._sizeLods[i],E=3*M*(i>x-Os?i-x+Os:0),v=4*(this._cubeSize-M);Yo(t,E,v,3*M,2*M),l.setRenderTarget(t),l.render(h,Ic)}}function dM(r){const e=[],t=[],n=[];let i=r;const s=r-Os+1+rf.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Os?l=rf[a-r+Os-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,p=2,m=1,S=new Float32Array(g*_*d),x=new Float32Array(p*_*d),M=new Float32Array(m*_*d);for(let v=0;v<d;v++){const b=v%3*2/3-1,A=v>2?0:-1,w=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];S.set(w,g*_*v),x.set(f,p*_*v);const y=[v,v,v,v,v,v];M.set(y,m*_*v)}const E=new Vt;E.setAttribute("position",new hi(S,g)),E.setAttribute("uv",new hi(x,p)),E.setAttribute("faceIndex",new hi(M,m)),e.push(E),i>Os&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lf(r,e,t){const n=new ns(r,e,t);return n.texture.mapping=Gl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function fM(r,e,t){const n=new Float32Array(zr),i=new z(0,1,0);return new br({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function cf(){return new br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function uf(){return new br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function zh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pM(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Mu||l===Su,u=l===ta||l===na;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new of(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new of(r)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function mM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ga("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function gM(r,e,t,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)e.remove(g[p])}f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)e.update(g[p],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const S=d.array;g=d.version;for(let x=0,M=S.length;x<M;x+=3){const E=S[x+0],v=S[x+1],b=S[x+2];f.push(E,v,v,b,b,E)}}else if(_!==void 0){const S=_.array;g=_.version;for(let x=0,M=S.length/3-1;x<M;x+=3){const E=x+0,v=x+1,b=x+2;f.push(E,v,v,b,b,E)}}else return;const p=new(Cm(f)?Im:Dm)(f,1);p.version=g;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function _M(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*a),t.update(d,n,1)}function c(f,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,f*a,_),t.update(d,n,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];t.update(p,n,1)}function h(f,d,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/a,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,g,0,_);let m=0;for(let S=0;S<_;S++)m+=d[S];for(let S=0;S<g.length;S++)t.update(m,n,g[S])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function vM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function xM(r,e,t){const n=new WeakMap,i=new Lt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let y=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),g===!0&&(M=2),p===!0&&(M=3);let E=o.attributes.position.count*M,v=1;E>e.maxTextureSize&&(v=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const b=new Float32Array(E*v*4*h),A=new Pm(b,E,v,h);A.type=Xi,A.needsUpdate=!0;const w=M*4;for(let C=0;C<h;C++){const L=m[C],U=S[C],B=x[C],N=E*v*4*C;for(let O=0;O<L.count;O++){const H=O*w;_===!0&&(i.fromBufferAttribute(L,O),b[N+H+0]=i.x,b[N+H+1]=i.y,b[N+H+2]=i.z,b[N+H+3]=0),g===!0&&(i.fromBufferAttribute(U,O),b[N+H+4]=i.x,b[N+H+5]=i.y,b[N+H+6]=i.z,b[N+H+7]=0),p===!0&&(i.fromBufferAttribute(B,O),b[N+H+8]=i.x,b[N+H+9]=i.y,b[N+H+10]=i.z,b[N+H+11]=B.itemSize===4?i.w:1)}}f={count:h,texture:A,size:new _e(E,v)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function yM(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Bm extends Pn{constructor(e,t,n,i,s,a,o,l,c,u=Ys){if(u!==Ys&&u!==ra)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ys&&(n=ts),n===void 0&&u===ra&&(n=ia),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:In,this.minFilter=l!==void 0?l:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const zm=new Pn,hf=new Bm(1,1),Hm=new Pm,Gm=new av,Vm=new Om,df=[],ff=[],pf=new Float32Array(16),mf=new Float32Array(9),gf=new Float32Array(4);function ca(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=df[i];if(s===void 0&&(s=new Float32Array(i),df[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Qt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function en(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Xl(r,e){let t=ff[e];t===void 0&&(t=new Int32Array(e),ff[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function MM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function SM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2fv(this.addr,e),en(t,e)}}function bM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;r.uniform3fv(this.addr,e),en(t,e)}}function wM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4fv(this.addr,e),en(t,e)}}function EM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;gf.set(n),r.uniformMatrix2fv(this.addr,!1,gf),en(t,n)}}function TM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;mf.set(n),r.uniformMatrix3fv(this.addr,!1,mf),en(t,n)}}function AM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;pf.set(n),r.uniformMatrix4fv(this.addr,!1,pf),en(t,n)}}function CM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function RM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2iv(this.addr,e),en(t,e)}}function PM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3iv(this.addr,e),en(t,e)}}function LM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4iv(this.addr,e),en(t,e)}}function DM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function IM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2uiv(this.addr,e),en(t,e)}}function NM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3uiv(this.addr,e),en(t,e)}}function UM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4uiv(this.addr,e),en(t,e)}}function OM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(hf.compareFunction=Am,s=hf):s=zm,t.setTexture2D(e||s,i)}function FM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Gm,i)}function kM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Vm,i)}function BM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Hm,i)}function zM(r){switch(r){case 5126:return MM;case 35664:return SM;case 35665:return bM;case 35666:return wM;case 35674:return EM;case 35675:return TM;case 35676:return AM;case 5124:case 35670:return CM;case 35667:case 35671:return RM;case 35668:case 35672:return PM;case 35669:case 35673:return LM;case 5125:return DM;case 36294:return IM;case 36295:return NM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return OM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return BM}}function HM(r,e){r.uniform1fv(this.addr,e)}function GM(r,e){const t=ca(e,this.size,2);r.uniform2fv(this.addr,t)}function VM(r,e){const t=ca(e,this.size,3);r.uniform3fv(this.addr,t)}function WM(r,e){const t=ca(e,this.size,4);r.uniform4fv(this.addr,t)}function XM(r,e){const t=ca(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function qM(r,e){const t=ca(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function YM(r,e){const t=ca(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function $M(r,e){r.uniform1iv(this.addr,e)}function jM(r,e){r.uniform2iv(this.addr,e)}function KM(r,e){r.uniform3iv(this.addr,e)}function ZM(r,e){r.uniform4iv(this.addr,e)}function JM(r,e){r.uniform1uiv(this.addr,e)}function QM(r,e){r.uniform2uiv(this.addr,e)}function eS(r,e){r.uniform3uiv(this.addr,e)}function tS(r,e){r.uniform4uiv(this.addr,e)}function nS(r,e,t){const n=this.cache,i=e.length,s=Xl(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||zm,s[a])}function iS(r,e,t){const n=this.cache,i=e.length,s=Xl(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Gm,s[a])}function rS(r,e,t){const n=this.cache,i=e.length,s=Xl(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Vm,s[a])}function sS(r,e,t){const n=this.cache,i=e.length,s=Xl(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Hm,s[a])}function aS(r){switch(r){case 5126:return HM;case 35664:return GM;case 35665:return VM;case 35666:return WM;case 35674:return XM;case 35675:return qM;case 35676:return YM;case 5124:case 35670:return $M;case 35667:case 35671:return jM;case 35668:case 35672:return KM;case 35669:case 35673:return ZM;case 5125:return JM;case 36294:return QM;case 36295:return eS;case 36296:return tS;case 35678:case 36198:case 36298:case 36306:case 35682:return nS;case 35679:case 36299:case 36307:return iS;case 35680:case 36300:case 36308:case 36293:return rS;case 36289:case 36303:case 36311:case 36292:return sS}}class oS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zM(t.type)}}class lS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=aS(t.type)}}class cS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const kc=/(\w+)(\])?(\[|\.)?/g;function _f(r,e){r.seq.push(e),r.map[e.id]=e}function uS(r,e,t){const n=r.name,i=n.length;for(kc.lastIndex=0;;){const s=kc.exec(n),a=kc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){_f(t,c===void 0?new oS(o,r,e):new lS(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new cS(o),_f(t,h)),t=h}}}class gl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);uS(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function vf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const hS=37297;let dS=0;function fS(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function pS(r){const e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(r);let n;switch(e===t?n="":e===Il&&t===Dl?n="LinearDisplayP3ToLinearSRGB":e===Dl&&t===Il&&(n="LinearSRGBToLinearDisplayP3"),r){case Er:case Vl:return[n,"LinearTransferOETF"];case Tn:case Oh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function xf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+fS(r.getShaderSource(e),a)}else return i}function mS(r,e){const t=pS(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function gS(r,e){let t;switch(e){case x_:t="Linear";break;case y_:t="Reinhard";break;case M_:t="Cineon";break;case S_:t="ACESFilmic";break;case w_:t="AgX";break;case E_:t="Neutral";break;case b_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $o=new z;function _S(){pt.getLuminanceCoefficients($o);const r=$o.x.toFixed(4),e=$o.y.toFixed(4),t=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Aa).join(`
`)}function xS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Aa(r){return r!==""}function yf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zu(r){return r.replace(MS,bS)}const SS=new Map;function bS(r,e){let t=Je[e];if(t===void 0){const n=SS.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zu(t)}const wS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sf(r){return r.replace(wS,ES)}function ES(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function bf(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TS(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===fm?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===X0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function AS(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ta:case na:e="ENVMAP_TYPE_CUBE";break;case Gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CS(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case na:e="ENVMAP_MODE_REFRACTION";break}return e}function RS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case pm:e="ENVMAP_BLENDING_MULTIPLY";break;case __:e="ENVMAP_BLENDING_MIX";break;case v_:e="ENVMAP_BLENDING_ADD";break}return e}function PS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function LS(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=TS(t),c=AS(t),u=CS(t),h=RS(t),f=PS(t),d=vS(t),_=xS(s),g=i.createProgram();let p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Aa).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Aa).join(`
`),m.length>0&&(m+=`
`)):(p=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),m=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_r?"#define TONE_MAPPING":"",t.toneMapping!==_r?Je.tonemapping_pars_fragment:"",t.toneMapping!==_r?gS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,mS("linearToOutputTexel",t.outputColorSpace),_S(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Aa).join(`
`)),a=Zu(a),a=yf(a,t),a=Mf(a,t),o=Zu(o),o=yf(o,t),o=Mf(o,t),a=Sf(a),o=Sf(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Od?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Od?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=S+p+a,M=S+m+o,E=vf(i,i.VERTEX_SHADER,x),v=vf(i,i.FRAGMENT_SHADER,M);i.attachShader(g,E),i.attachShader(g,v),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function b(C){if(r.debug.checkShaderErrors){const L=i.getProgramInfoLog(g).trim(),U=i.getShaderInfoLog(E).trim(),B=i.getShaderInfoLog(v).trim();let N=!0,O=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(N=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,E,v);else{const H=xf(i,E,"vertex"),k=xf(i,v,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+H+`
`+k)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(U===""||B==="")&&(O=!1);O&&(C.diagnostics={runnable:N,programLog:L,vertexShader:{log:U,prefix:p},fragmentShader:{log:B,prefix:m}})}i.deleteShader(E),i.deleteShader(v),A=new gl(i,g),w=yS(i,g)}let A;this.getUniforms=function(){return A===void 0&&b(this),A};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(g,hS)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=v,this}let DS=0;class IS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new NS(e),t.set(e,n)),n}}class NS{constructor(e){this.id=DS++,this.code=e,this.usedTimes=0}}function US(r,e,t,n,i,s,a){const o=new kh,l=new IS,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,y,C,L,U){const B=L.fog,N=U.geometry,O=w.isMeshStandardMaterial?L.environment:null,H=(w.isMeshStandardMaterial?t:e).get(w.envMap||O),k=H&&H.mapping===Gl?H.image.height:null,re=_[w.type];w.precision!==null&&(d=i.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const I=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Q=I!==void 0?I.length:0;let ge=0;N.morphAttributes.position!==void 0&&(ge=1),N.morphAttributes.normal!==void 0&&(ge=2),N.morphAttributes.color!==void 0&&(ge=3);let xe,X,$,le;if(re){const st=bi[re];xe=st.vertexShader,X=st.fragmentShader}else xe=w.vertexShader,X=w.fragmentShader,l.update(w),$=l.getVertexShaderID(w),le=l.getFragmentShaderID(w);const ee=r.getRenderTarget(),me=U.isInstancedMesh===!0,Te=U.isBatchedMesh===!0,Re=!!w.map,Ue=!!w.matcap,P=!!H,ne=!!w.aoMap,ie=!!w.lightMap,de=!!w.bumpMap,te=!!w.normalMap,G=!!w.displacementMap,fe=!!w.emissiveMap,ye=!!w.metalnessMap,D=!!w.roughnessMap,T=w.anisotropy>0,F=w.clearcoat>0,Y=w.dispersion>0,Z=w.iridescence>0,J=w.sheen>0,be=w.transmission>0,ce=T&&!!w.anisotropyMap,Me=F&&!!w.clearcoatMap,Be=F&&!!w.clearcoatNormalMap,he=F&&!!w.clearcoatRoughnessMap,Se=Z&&!!w.iridescenceMap,He=Z&&!!w.iridescenceThicknessMap,Xe=J&&!!w.sheenColorMap,Ce=J&&!!w.sheenRoughnessMap,qe=!!w.specularMap,Ke=!!w.specularColorMap,ht=!!w.specularIntensityMap,W=be&&!!w.transmissionMap,se=be&&!!w.thicknessMap,ae=!!w.gradientMap,oe=!!w.alphaMap,pe=w.alphaTest>0,ke=!!w.alphaHash,Ze=!!w.extensions;let xt=_r;w.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(xt=r.toneMapping);const yt={shaderID:re,shaderType:w.type,shaderName:w.name,vertexShader:xe,fragmentShader:X,defines:w.defines,customVertexShaderID:$,customFragmentShaderID:le,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Te,batchingColor:Te&&U._colorsTexture!==null,instancing:me,instancingColor:me&&U.instanceColor!==null,instancingMorph:me&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Er,alphaToCoverage:!!w.alphaToCoverage,map:Re,matcap:Ue,envMap:P,envMapMode:P&&H.mapping,envMapCubeUVHeight:k,aoMap:ne,lightMap:ie,bumpMap:de,normalMap:te,displacementMap:f&&G,emissiveMap:fe,normalMapObjectSpace:te&&w.normalMapType===R_,normalMapTangentSpace:te&&w.normalMapType===Tm,metalnessMap:ye,roughnessMap:D,anisotropy:T,anisotropyMap:ce,clearcoat:F,clearcoatMap:Me,clearcoatNormalMap:Be,clearcoatRoughnessMap:he,dispersion:Y,iridescence:Z,iridescenceMap:Se,iridescenceThicknessMap:He,sheen:J,sheenColorMap:Xe,sheenRoughnessMap:Ce,specularMap:qe,specularColorMap:Ke,specularIntensityMap:ht,transmission:be,transmissionMap:W,thicknessMap:se,gradientMap:ae,opaque:w.transparent===!1&&w.blending===qs&&w.alphaToCoverage===!1,alphaMap:oe,alphaTest:pe,alphaHash:ke,combine:w.combine,mapUv:Re&&g(w.map.channel),aoMapUv:ne&&g(w.aoMap.channel),lightMapUv:ie&&g(w.lightMap.channel),bumpMapUv:de&&g(w.bumpMap.channel),normalMapUv:te&&g(w.normalMap.channel),displacementMapUv:G&&g(w.displacementMap.channel),emissiveMapUv:fe&&g(w.emissiveMap.channel),metalnessMapUv:ye&&g(w.metalnessMap.channel),roughnessMapUv:D&&g(w.roughnessMap.channel),anisotropyMapUv:ce&&g(w.anisotropyMap.channel),clearcoatMapUv:Me&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:Be&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:He&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&g(w.sheenRoughnessMap.channel),specularMapUv:qe&&g(w.specularMap.channel),specularColorMapUv:Ke&&g(w.specularColorMap.channel),specularIntensityMapUv:ht&&g(w.specularIntensityMap.channel),transmissionMapUv:W&&g(w.transmissionMap.channel),thicknessMapUv:se&&g(w.thicknessMap.channel),alphaMapUv:oe&&g(w.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(te||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!N.attributes.uv&&(Re||oe),fog:!!B,useFog:w.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:U.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ge,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:xt,decodeVideoTexture:Re&&w.map.isVideoTexture===!0&&pt.getTransfer(w.map.colorSpace)===Rt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ai,flipSided:w.side===Rn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ze&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&w.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function m(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const C in w.defines)y.push(C),y.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(S(y,w),x(y,w),y.push(r.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function S(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function x(w,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.doubleSided&&o.enable(10),y.flipSided&&o.enable(11),y.useDepthPacking&&o.enable(12),y.dithering&&o.enable(13),y.transmission&&o.enable(14),y.sheen&&o.enable(15),y.opaque&&o.enable(16),y.pointsUvs&&o.enable(17),y.decodeVideoTexture&&o.enable(18),y.alphaToCoverage&&o.enable(19),w.push(o.mask)}function M(w){const y=_[w.type];let C;if(y){const L=bi[y];C=vv.clone(L.uniforms)}else C=w.uniforms;return C}function E(w,y){let C;for(let L=0,U=u.length;L<U;L++){const B=u[L];if(B.cacheKey===y){C=B,++C.usedTimes;break}}return C===void 0&&(C=new LS(r,y,w,s),u.push(C)),C}function v(w){if(--w.usedTimes===0){const y=u.indexOf(w);u[y]=u[u.length-1],u.pop(),w.destroy()}}function b(w){l.remove(w)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:M,acquireProgram:E,releaseProgram:v,releaseShaderCache:b,programs:u,dispose:A}}function OS(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function FS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function wf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ef(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,_,g,p){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},r[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=p),e++,m}function o(h,f,d,_,g,p){const m=a(h,f,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(h,f,d,_,g,p){const m=a(h,f,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||FS),n.length>1&&n.sort(f||wf),i.length>1&&i.sort(f||wf)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function kS(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Ef,r.set(n,[a])):i>=s.length?(a=new Ef,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function BS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ye};break;case"SpotLight":t={position:new z,direction:new z,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new z,halfWidth:new z,halfHeight:new z};break}return r[e.id]=t,t}}}function zS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let HS=0;function GS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function VS(r){const e=new BS,t=zS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const i=new z,s=new At,a=new At;function o(c){let u=0,h=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,_=0,g=0,p=0,m=0,S=0,x=0,M=0,E=0,v=0,b=0;c.sort(GS);for(let w=0,y=c.length;w<y;w++){const C=c[w],L=C.color,U=C.intensity,B=C.distance,N=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=L.r*U,h+=L.g*U,f+=L.b*U;else if(C.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(C.sh.coefficients[O],U);b++}else if(C.isDirectionalLight){const O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const H=C.shadow,k=t.get(C);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=N,n.directionalShadowMatrix[d]=C.shadow.matrix,S++}n.directional[d]=O,d++}else if(C.isSpotLight){const O=e.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(L).multiplyScalar(U),O.distance=B,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,n.spot[g]=O;const H=C.shadow;if(C.map&&(n.spotLightMap[E]=C.map,E++,H.updateMatrices(C),C.castShadow&&v++),n.spotLightMatrix[g]=H.matrix,C.castShadow){const k=t.get(C);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,n.spotShadow[g]=k,n.spotShadowMap[g]=N,M++}g++}else if(C.isRectAreaLight){const O=e.get(C);O.color.copy(L).multiplyScalar(U),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=O,p++}else if(C.isPointLight){const O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){const H=C.shadow,k=t.get(C);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,k.shadowCameraNear=H.camera.near,k.shadowCameraFar=H.camera.far,n.pointShadow[_]=k,n.pointShadowMap[_]=N,n.pointShadowMatrix[_]=C.shadow.matrix,x++}n.point[_]=O,_++}else if(C.isHemisphereLight){const O=e.get(C);O.skyColor.copy(C.color).multiplyScalar(U),O.groundColor.copy(C.groundColor).multiplyScalar(U),n.hemi[m]=O,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const A=n.hash;(A.directionalLength!==d||A.pointLength!==_||A.spotLength!==g||A.rectAreaLength!==p||A.hemiLength!==m||A.numDirectionalShadows!==S||A.numPointShadows!==x||A.numSpotShadows!==M||A.numSpotMaps!==E||A.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+E-v,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=v,n.numLightProbes=b,A.directionalLength=d,A.pointLength=_,A.spotLength=g,A.rectAreaLength=p,A.hemiLength=m,A.numDirectionalShadows=S,A.numPointShadows=x,A.numSpotShadows=M,A.numSpotMaps=E,A.numLightProbes=b,n.version=HS++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const x=c[m];if(x.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),h++}else if(x.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),a.identity(),s.copy(x.matrixWorld),s.premultiply(p),a.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Tf(r){const e=new VS(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function WS(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Tf(r),e.set(i,[o])):s>=a.length?(o=new Tf(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class XS extends os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=A_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qS extends os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const YS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$S=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jS(r,e,t){let n=new Bh;const i=new _e,s=new _e,a=new Lt,o=new XS({depthPacking:C_}),l=new qS,c={},u=t.maxTextureSize,h={[Sr]:Rn,[Rn]:Sr,[ai]:ai},f=new br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:YS,fragmentShader:$S}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Vt;_.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ne(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fm;let m=this.type;this.render=function(v,b,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;const w=r.getRenderTarget(),y=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),L=r.state;L.setBlending(gr),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const U=m!==zi&&this.type===zi,B=m===zi&&this.type!==zi;for(let N=0,O=v.length;N<O;N++){const H=v[N],k=H.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const re=k.getFrameExtents();if(i.multiply(re),s.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/re.x),i.x=s.x*re.x,k.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/re.y),i.y=s.y*re.y,k.mapSize.y=s.y)),k.map===null||U===!0||B===!0){const Q=this.type!==zi?{minFilter:In,magFilter:In}:{};k.map!==null&&k.map.dispose(),k.map=new ns(i.x,i.y,Q),k.map.texture.name=H.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const I=k.getViewportCount();for(let Q=0;Q<I;Q++){const ge=k.getViewport(Q);a.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),L.viewport(a),k.updateMatrices(H,Q),n=k.getFrustum(),M(b,A,k.camera,H,this.type)}k.isPointLightShadow!==!0&&this.type===zi&&S(k,A),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(w,y,C)};function S(v,b){const A=e.update(g);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new ns(i.x,i.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(b,null,A,f,g,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(b,null,A,d,g,null)}function x(v,b,A,w){let y=null;const C=A.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(C!==void 0)y=C;else if(y=A.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const L=y.uuid,U=b.uuid;let B=c[L];B===void 0&&(B={},c[L]=B);let N=B[U];N===void 0&&(N=y.clone(),B[U]=N,b.addEventListener("dispose",E)),y=N}if(y.visible=b.visible,y.wireframe=b.wireframe,w===zi?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:h[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const L=r.properties.get(y);L.light=A}return y}function M(v,b,A,w,y){if(v.visible===!1)return;if(v.layers.test(b.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&y===zi)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,v.matrixWorld);const U=e.update(v),B=v.material;if(Array.isArray(B)){const N=U.groups;for(let O=0,H=N.length;O<H;O++){const k=N[O],re=B[k.materialIndex];if(re&&re.visible){const I=x(v,re,w,y);v.onBeforeShadow(r,v,b,A,U,I,k),r.renderBufferDirect(A,null,U,I,v,k),v.onAfterShadow(r,v,b,A,U,I,k)}}}else if(B.visible){const N=x(v,B,w,y);v.onBeforeShadow(r,v,b,A,U,N,null),r.renderBufferDirect(A,null,U,N,v,null),v.onAfterShadow(r,v,b,A,U,N,null)}}const L=v.children;for(let U=0,B=L.length;U<B;U++)M(L[U],b,A,w,y)}function E(v){v.target.removeEventListener("dispose",E);for(const A in c){const w=c[A],y=v.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}function KS(r){function e(){let W=!1;const se=new Lt;let ae=null;const oe=new Lt(0,0,0,0);return{setMask:function(pe){ae!==pe&&!W&&(r.colorMask(pe,pe,pe,pe),ae=pe)},setLocked:function(pe){W=pe},setClear:function(pe,ke,Ze,xt,yt){yt===!0&&(pe*=xt,ke*=xt,Ze*=xt),se.set(pe,ke,Ze,xt),oe.equals(se)===!1&&(r.clearColor(pe,ke,Ze,xt),oe.copy(se))},reset:function(){W=!1,ae=null,oe.set(-1,0,0,0)}}}function t(){let W=!1,se=null,ae=null,oe=null;return{setTest:function(pe){pe?le(r.DEPTH_TEST):ee(r.DEPTH_TEST)},setMask:function(pe){se!==pe&&!W&&(r.depthMask(pe),se=pe)},setFunc:function(pe){if(ae!==pe){switch(pe){case u_:r.depthFunc(r.NEVER);break;case h_:r.depthFunc(r.ALWAYS);break;case d_:r.depthFunc(r.LESS);break;case Pl:r.depthFunc(r.LEQUAL);break;case f_:r.depthFunc(r.EQUAL);break;case p_:r.depthFunc(r.GEQUAL);break;case m_:r.depthFunc(r.GREATER);break;case g_:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ae=pe}},setLocked:function(pe){W=pe},setClear:function(pe){oe!==pe&&(r.clearDepth(pe),oe=pe)},reset:function(){W=!1,se=null,ae=null,oe=null}}}function n(){let W=!1,se=null,ae=null,oe=null,pe=null,ke=null,Ze=null,xt=null,yt=null;return{setTest:function(st){W||(st?le(r.STENCIL_TEST):ee(r.STENCIL_TEST))},setMask:function(st){se!==st&&!W&&(r.stencilMask(st),se=st)},setFunc:function(st,Ve,Oe){(ae!==st||oe!==Ve||pe!==Oe)&&(r.stencilFunc(st,Ve,Oe),ae=st,oe=Ve,pe=Oe)},setOp:function(st,Ve,Oe){(ke!==st||Ze!==Ve||xt!==Oe)&&(r.stencilOp(st,Ve,Oe),ke=st,Ze=Ve,xt=Oe)},setLocked:function(st){W=st},setClear:function(st){yt!==st&&(r.clearStencil(st),yt=st)},reset:function(){W=!1,se=null,ae=null,oe=null,pe=null,ke=null,Ze=null,xt=null,yt=null}}}const i=new e,s=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,_=!1,g=null,p=null,m=null,S=null,x=null,M=null,E=null,v=new Ye(0,0,0),b=0,A=!1,w=null,y=null,C=null,L=null,U=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,O=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(H)[1]),N=O>=1):H.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),N=O>=2);let k=null,re={};const I=r.getParameter(r.SCISSOR_BOX),Q=r.getParameter(r.VIEWPORT),ge=new Lt().fromArray(I),xe=new Lt().fromArray(Q);function X(W,se,ae,oe){const pe=new Uint8Array(4),ke=r.createTexture();r.bindTexture(W,ke),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ze=0;Ze<ae;Ze++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(se,0,r.RGBA,1,1,oe,0,r.RGBA,r.UNSIGNED_BYTE,pe):r.texImage2D(se+Ze,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,pe);return ke}const $={};$[r.TEXTURE_2D]=X(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=X(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=X(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=X(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),le(r.DEPTH_TEST),s.setFunc(Pl),de(!1),te(Pd),le(r.CULL_FACE),ne(gr);function le(W){c[W]!==!0&&(r.enable(W),c[W]=!0)}function ee(W){c[W]!==!1&&(r.disable(W),c[W]=!1)}function me(W,se){return u[W]!==se?(r.bindFramebuffer(W,se),u[W]=se,W===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=se),W===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=se),!0):!1}function Te(W,se){let ae=f,oe=!1;if(W){ae=h.get(se),ae===void 0&&(ae=[],h.set(se,ae));const pe=W.textures;if(ae.length!==pe.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let ke=0,Ze=pe.length;ke<Ze;ke++)ae[ke]=r.COLOR_ATTACHMENT0+ke;ae.length=pe.length,oe=!0}}else ae[0]!==r.BACK&&(ae[0]=r.BACK,oe=!0);oe&&r.drawBuffers(ae)}function Re(W){return d!==W?(r.useProgram(W),d=W,!0):!1}const Ue={[Br]:r.FUNC_ADD,[Y0]:r.FUNC_SUBTRACT,[$0]:r.FUNC_REVERSE_SUBTRACT};Ue[j0]=r.MIN,Ue[K0]=r.MAX;const P={[Z0]:r.ZERO,[J0]:r.ONE,[Q0]:r.SRC_COLOR,[xu]:r.SRC_ALPHA,[s_]:r.SRC_ALPHA_SATURATE,[i_]:r.DST_COLOR,[t_]:r.DST_ALPHA,[e_]:r.ONE_MINUS_SRC_COLOR,[yu]:r.ONE_MINUS_SRC_ALPHA,[r_]:r.ONE_MINUS_DST_COLOR,[n_]:r.ONE_MINUS_DST_ALPHA,[a_]:r.CONSTANT_COLOR,[o_]:r.ONE_MINUS_CONSTANT_COLOR,[l_]:r.CONSTANT_ALPHA,[c_]:r.ONE_MINUS_CONSTANT_ALPHA};function ne(W,se,ae,oe,pe,ke,Ze,xt,yt,st){if(W===gr){_===!0&&(ee(r.BLEND),_=!1);return}if(_===!1&&(le(r.BLEND),_=!0),W!==q0){if(W!==g||st!==A){if((p!==Br||x!==Br)&&(r.blendEquation(r.FUNC_ADD),p=Br,x=Br),st)switch(W){case qs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ld:r.blendFunc(r.ONE,r.ONE);break;case Dd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Id:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case qs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ld:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Dd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Id:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}m=null,S=null,M=null,E=null,v.set(0,0,0),b=0,g=W,A=st}return}pe=pe||se,ke=ke||ae,Ze=Ze||oe,(se!==p||pe!==x)&&(r.blendEquationSeparate(Ue[se],Ue[pe]),p=se,x=pe),(ae!==m||oe!==S||ke!==M||Ze!==E)&&(r.blendFuncSeparate(P[ae],P[oe],P[ke],P[Ze]),m=ae,S=oe,M=ke,E=Ze),(xt.equals(v)===!1||yt!==b)&&(r.blendColor(xt.r,xt.g,xt.b,yt),v.copy(xt),b=yt),g=W,A=!1}function ie(W,se){W.side===ai?ee(r.CULL_FACE):le(r.CULL_FACE);let ae=W.side===Rn;se&&(ae=!ae),de(ae),W.blending===qs&&W.transparent===!1?ne(gr):ne(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),s.setFunc(W.depthFunc),s.setTest(W.depthTest),s.setMask(W.depthWrite),i.setMask(W.colorWrite);const oe=W.stencilWrite;a.setTest(oe),oe&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),fe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?le(r.SAMPLE_ALPHA_TO_COVERAGE):ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function de(W){w!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),w=W)}function te(W){W!==V0?(le(r.CULL_FACE),W!==y&&(W===Pd?r.cullFace(r.BACK):W===W0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ee(r.CULL_FACE),y=W}function G(W){W!==C&&(N&&r.lineWidth(W),C=W)}function fe(W,se,ae){W?(le(r.POLYGON_OFFSET_FILL),(L!==se||U!==ae)&&(r.polygonOffset(se,ae),L=se,U=ae)):ee(r.POLYGON_OFFSET_FILL)}function ye(W){W?le(r.SCISSOR_TEST):ee(r.SCISSOR_TEST)}function D(W){W===void 0&&(W=r.TEXTURE0+B-1),k!==W&&(r.activeTexture(W),k=W)}function T(W,se,ae){ae===void 0&&(k===null?ae=r.TEXTURE0+B-1:ae=k);let oe=re[ae];oe===void 0&&(oe={type:void 0,texture:void 0},re[ae]=oe),(oe.type!==W||oe.texture!==se)&&(k!==ae&&(r.activeTexture(ae),k=ae),r.bindTexture(W,se||$[W]),oe.type=W,oe.texture=se)}function F(){const W=re[k];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Y(){try{r.compressedTexImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Z(){try{r.compressedTexImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function J(){try{r.texSubImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function be(){try{r.texSubImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Be(){try{r.texStorage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{r.texStorage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(){try{r.texImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function He(){try{r.texImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Xe(W){ge.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),ge.copy(W))}function Ce(W){xe.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),xe.copy(W))}function qe(W,se){let ae=l.get(se);ae===void 0&&(ae=new WeakMap,l.set(se,ae));let oe=ae.get(W);oe===void 0&&(oe=r.getUniformBlockIndex(se,W.name),ae.set(W,oe))}function Ke(W,se){const oe=l.get(se).get(W);o.get(se)!==oe&&(r.uniformBlockBinding(se,oe,W.__bindingPointIndex),o.set(se,oe))}function ht(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},k=null,re={},u={},h=new WeakMap,f=[],d=null,_=!1,g=null,p=null,m=null,S=null,x=null,M=null,E=null,v=new Ye(0,0,0),b=0,A=!1,w=null,y=null,C=null,L=null,U=null,ge.set(0,0,r.canvas.width,r.canvas.height),xe.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:le,disable:ee,bindFramebuffer:me,drawBuffers:Te,useProgram:Re,setBlending:ne,setMaterial:ie,setFlipSided:de,setCullFace:te,setLineWidth:G,setPolygonOffset:fe,setScissorTest:ye,activeTexture:D,bindTexture:T,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:Z,texImage2D:Se,texImage3D:He,updateUBOMapping:qe,uniformBlockBinding:Ke,texStorage2D:Be,texStorage3D:he,texSubImage2D:J,texSubImage3D:be,compressedTexSubImage2D:ce,compressedTexSubImage3D:Me,scissor:Xe,viewport:Ce,reset:ht}}function Af(r,e,t,n){const i=ZS(n);switch(t){case xm:return r*e;case Mm:return r*e;case Sm:return r*e*2;case bm:return r*e/i.components*i.byteLength;case Ih:return r*e/i.components*i.byteLength;case wm:return r*e*2/i.components*i.byteLength;case Nh:return r*e*2/i.components*i.byteLength;case ym:return r*e*3/i.components*i.byteLength;case yi:return r*e*4/i.components*i.byteLength;case Uh:return r*e*4/i.components*i.byteLength;case hl:case dl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case fl:case pl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Tu:case Cu:return Math.max(r,16)*Math.max(e,8)/4;case Eu:case Au:return Math.max(r,8)*Math.max(e,8)/2;case Ru:case Pu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Lu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Du:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Iu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Nu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Uu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ou:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Fu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ku:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Bu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case zu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Gu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Vu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Wu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Xu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ml:case qu:case Yu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Em:case $u:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ju:case Ku:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ZS(r){switch(r){case Ki:case gm:return{byteLength:1,components:1};case no:case _m:case lo:return{byteLength:2,components:1};case Lh:case Dh:return{byteLength:2,components:4};case ts:case Ph:case Xi:return{byteLength:4,components:1};case vm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function JS(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,T){return d?new OffscreenCanvas(D,T):Ul("canvas")}function g(D,T,F){let Y=1;const Z=ye(D);if((Z.width>F||Z.height>F)&&(Y=F/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const J=Math.floor(Y*Z.width),be=Math.floor(Y*Z.height);h===void 0&&(h=_(J,be));const ce=T?_(J,be):h;return ce.width=J,ce.height=be,ce.getContext("2d").drawImage(D,0,0,J,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+J+"x"+be+")."),ce}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),D;return D}function p(D){return D.generateMipmaps&&D.minFilter!==In&&D.minFilter!==vi}function m(D){r.generateMipmap(D)}function S(D,T,F,Y,Z=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let J=T;if(T===r.RED&&(F===r.FLOAT&&(J=r.R32F),F===r.HALF_FLOAT&&(J=r.R16F),F===r.UNSIGNED_BYTE&&(J=r.R8)),T===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(J=r.R8UI),F===r.UNSIGNED_SHORT&&(J=r.R16UI),F===r.UNSIGNED_INT&&(J=r.R32UI),F===r.BYTE&&(J=r.R8I),F===r.SHORT&&(J=r.R16I),F===r.INT&&(J=r.R32I)),T===r.RG&&(F===r.FLOAT&&(J=r.RG32F),F===r.HALF_FLOAT&&(J=r.RG16F),F===r.UNSIGNED_BYTE&&(J=r.RG8)),T===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(J=r.RG8UI),F===r.UNSIGNED_SHORT&&(J=r.RG16UI),F===r.UNSIGNED_INT&&(J=r.RG32UI),F===r.BYTE&&(J=r.RG8I),F===r.SHORT&&(J=r.RG16I),F===r.INT&&(J=r.RG32I)),T===r.RGB&&F===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),T===r.RGBA){const be=Z?Ll:pt.getTransfer(Y);F===r.FLOAT&&(J=r.RGBA32F),F===r.HALF_FLOAT&&(J=r.RGBA16F),F===r.UNSIGNED_BYTE&&(J=be===Rt?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(D,T){let F;return D?T===null||T===ts||T===ia?F=r.DEPTH24_STENCIL8:T===Xi?F=r.DEPTH32F_STENCIL8:T===no&&(F=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ts||T===ia?F=r.DEPTH_COMPONENT24:T===Xi?F=r.DEPTH_COMPONENT32F:T===no&&(F=r.DEPTH_COMPONENT16),F}function M(D,T){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==In&&D.minFilter!==vi?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function E(D){const T=D.target;T.removeEventListener("dispose",E),b(T),T.isVideoTexture&&u.delete(T)}function v(D){const T=D.target;T.removeEventListener("dispose",v),w(T)}function b(D){const T=n.get(D);if(T.__webglInit===void 0)return;const F=D.source,Y=f.get(F);if(Y){const Z=Y[T.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&A(D),Object.keys(Y).length===0&&f.delete(F)}n.remove(D)}function A(D){const T=n.get(D);r.deleteTexture(T.__webglTexture);const F=D.source,Y=f.get(F);delete Y[T.__cacheKey],a.memory.textures--}function w(D){const T=n.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(T.__webglFramebuffer[Y]))for(let Z=0;Z<T.__webglFramebuffer[Y].length;Z++)r.deleteFramebuffer(T.__webglFramebuffer[Y][Z]);else r.deleteFramebuffer(T.__webglFramebuffer[Y]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[Y])}else{if(Array.isArray(T.__webglFramebuffer))for(let Y=0;Y<T.__webglFramebuffer.length;Y++)r.deleteFramebuffer(T.__webglFramebuffer[Y]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Y=0;Y<T.__webglColorRenderbuffer.length;Y++)T.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[Y]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const F=D.textures;for(let Y=0,Z=F.length;Y<Z;Y++){const J=n.get(F[Y]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(F[Y])}n.remove(D)}let y=0;function C(){y=0}function L(){const D=y;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),y+=1,D}function U(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function B(D,T){const F=n.get(D);if(D.isVideoTexture&&G(D),D.isRenderTargetTexture===!1&&D.version>0&&F.__version!==D.version){const Y=D.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(F,D,T);return}}t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+T)}function N(D,T){const F=n.get(D);if(D.version>0&&F.__version!==D.version){xe(F,D,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+T)}function O(D,T){const F=n.get(D);if(D.version>0&&F.__version!==D.version){xe(F,D,T);return}t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+T)}function H(D,T){const F=n.get(D);if(D.version>0&&F.__version!==D.version){X(F,D,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+T)}const k={[bu]:r.REPEAT,[Vr]:r.CLAMP_TO_EDGE,[wu]:r.MIRRORED_REPEAT},re={[In]:r.NEAREST,[T_]:r.NEAREST_MIPMAP_NEAREST,[Ao]:r.NEAREST_MIPMAP_LINEAR,[vi]:r.LINEAR,[pc]:r.LINEAR_MIPMAP_NEAREST,[Wr]:r.LINEAR_MIPMAP_LINEAR},I={[P_]:r.NEVER,[O_]:r.ALWAYS,[L_]:r.LESS,[Am]:r.LEQUAL,[D_]:r.EQUAL,[U_]:r.GEQUAL,[I_]:r.GREATER,[N_]:r.NOTEQUAL};function Q(D,T){if(T.type===Xi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===vi||T.magFilter===pc||T.magFilter===Ao||T.magFilter===Wr||T.minFilter===vi||T.minFilter===pc||T.minFilter===Ao||T.minFilter===Wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,k[T.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,k[T.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,k[T.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,re[T.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,re[T.minFilter]),T.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===In||T.minFilter!==Ao&&T.minFilter!==Wr||T.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ge(D,T){let F=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",E));const Y=T.source;let Z=f.get(Y);Z===void 0&&(Z={},f.set(Y,Z));const J=U(T);if(J!==D.__cacheKey){Z[J]===void 0&&(Z[J]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[J].usedTimes++;const be=Z[D.__cacheKey];be!==void 0&&(Z[D.__cacheKey].usedTimes--,be.usedTimes===0&&A(T)),D.__cacheKey=J,D.__webglTexture=Z[J].texture}return F}function xe(D,T,F){let Y=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Y=r.TEXTURE_3D);const Z=ge(D,T),J=T.source;t.bindTexture(Y,D.__webglTexture,r.TEXTURE0+F);const be=n.get(J);if(J.version!==be.__version||Z===!0){t.activeTexture(r.TEXTURE0+F);const ce=pt.getPrimaries(pt.workingColorSpace),Me=T.colorSpace===or?null:pt.getPrimaries(T.colorSpace),Be=T.colorSpace===or||ce===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let he=g(T.image,!1,i.maxTextureSize);he=fe(T,he);const Se=s.convert(T.format,T.colorSpace),He=s.convert(T.type);let Xe=S(T.internalFormat,Se,He,T.colorSpace,T.isVideoTexture);Q(Y,T);let Ce;const qe=T.mipmaps,Ke=T.isVideoTexture!==!0,ht=be.__version===void 0||Z===!0,W=J.dataReady,se=M(T,he);if(T.isDepthTexture)Xe=x(T.format===ra,T.type),ht&&(Ke?t.texStorage2D(r.TEXTURE_2D,1,Xe,he.width,he.height):t.texImage2D(r.TEXTURE_2D,0,Xe,he.width,he.height,0,Se,He,null));else if(T.isDataTexture)if(qe.length>0){Ke&&ht&&t.texStorage2D(r.TEXTURE_2D,se,Xe,qe[0].width,qe[0].height);for(let ae=0,oe=qe.length;ae<oe;ae++)Ce=qe[ae],Ke?W&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,Ce.width,Ce.height,Se,He,Ce.data):t.texImage2D(r.TEXTURE_2D,ae,Xe,Ce.width,Ce.height,0,Se,He,Ce.data);T.generateMipmaps=!1}else Ke?(ht&&t.texStorage2D(r.TEXTURE_2D,se,Xe,he.width,he.height),W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,he.width,he.height,Se,He,he.data)):t.texImage2D(r.TEXTURE_2D,0,Xe,he.width,he.height,0,Se,He,he.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ke&&ht&&t.texStorage3D(r.TEXTURE_2D_ARRAY,se,Xe,qe[0].width,qe[0].height,he.depth);for(let ae=0,oe=qe.length;ae<oe;ae++)if(Ce=qe[ae],T.format!==yi)if(Se!==null)if(Ke){if(W)if(T.layerUpdates.size>0){const pe=Af(Ce.width,Ce.height,T.format,T.type);for(const ke of T.layerUpdates){const Ze=Ce.data.subarray(ke*pe/Ce.data.BYTES_PER_ELEMENT,(ke+1)*pe/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,ke,Ce.width,Ce.height,1,Se,Ze,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,Ce.width,Ce.height,he.depth,Se,Ce.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ae,Xe,Ce.width,Ce.height,he.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?W&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,Ce.width,Ce.height,he.depth,Se,He,Ce.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ae,Xe,Ce.width,Ce.height,he.depth,0,Se,He,Ce.data)}else{Ke&&ht&&t.texStorage2D(r.TEXTURE_2D,se,Xe,qe[0].width,qe[0].height);for(let ae=0,oe=qe.length;ae<oe;ae++)Ce=qe[ae],T.format!==yi?Se!==null?Ke?W&&t.compressedTexSubImage2D(r.TEXTURE_2D,ae,0,0,Ce.width,Ce.height,Se,Ce.data):t.compressedTexImage2D(r.TEXTURE_2D,ae,Xe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?W&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,Ce.width,Ce.height,Se,He,Ce.data):t.texImage2D(r.TEXTURE_2D,ae,Xe,Ce.width,Ce.height,0,Se,He,Ce.data)}else if(T.isDataArrayTexture)if(Ke){if(ht&&t.texStorage3D(r.TEXTURE_2D_ARRAY,se,Xe,he.width,he.height,he.depth),W)if(T.layerUpdates.size>0){const ae=Af(he.width,he.height,T.format,T.type);for(const oe of T.layerUpdates){const pe=he.data.subarray(oe*ae/he.data.BYTES_PER_ELEMENT,(oe+1)*ae/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,oe,he.width,he.height,1,Se,He,pe)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Se,He,he.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Xe,he.width,he.height,he.depth,0,Se,He,he.data);else if(T.isData3DTexture)Ke?(ht&&t.texStorage3D(r.TEXTURE_3D,se,Xe,he.width,he.height,he.depth),W&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Se,He,he.data)):t.texImage3D(r.TEXTURE_3D,0,Xe,he.width,he.height,he.depth,0,Se,He,he.data);else if(T.isFramebufferTexture){if(ht)if(Ke)t.texStorage2D(r.TEXTURE_2D,se,Xe,he.width,he.height);else{let ae=he.width,oe=he.height;for(let pe=0;pe<se;pe++)t.texImage2D(r.TEXTURE_2D,pe,Xe,ae,oe,0,Se,He,null),ae>>=1,oe>>=1}}else if(qe.length>0){if(Ke&&ht){const ae=ye(qe[0]);t.texStorage2D(r.TEXTURE_2D,se,Xe,ae.width,ae.height)}for(let ae=0,oe=qe.length;ae<oe;ae++)Ce=qe[ae],Ke?W&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,Se,He,Ce):t.texImage2D(r.TEXTURE_2D,ae,Xe,Se,He,Ce);T.generateMipmaps=!1}else if(Ke){if(ht){const ae=ye(he);t.texStorage2D(r.TEXTURE_2D,se,Xe,ae.width,ae.height)}W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Se,He,he)}else t.texImage2D(r.TEXTURE_2D,0,Xe,Se,He,he);p(T)&&m(Y),be.__version=J.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function X(D,T,F){if(T.image.length!==6)return;const Y=ge(D,T),Z=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+F);const J=n.get(Z);if(Z.version!==J.__version||Y===!0){t.activeTexture(r.TEXTURE0+F);const be=pt.getPrimaries(pt.workingColorSpace),ce=T.colorSpace===or?null:pt.getPrimaries(T.colorSpace),Me=T.colorSpace===or||be===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Be=T.isCompressedTexture||T.image[0].isCompressedTexture,he=T.image[0]&&T.image[0].isDataTexture,Se=[];for(let oe=0;oe<6;oe++)!Be&&!he?Se[oe]=g(T.image[oe],!0,i.maxCubemapSize):Se[oe]=he?T.image[oe].image:T.image[oe],Se[oe]=fe(T,Se[oe]);const He=Se[0],Xe=s.convert(T.format,T.colorSpace),Ce=s.convert(T.type),qe=S(T.internalFormat,Xe,Ce,T.colorSpace),Ke=T.isVideoTexture!==!0,ht=J.__version===void 0||Y===!0,W=Z.dataReady;let se=M(T,He);Q(r.TEXTURE_CUBE_MAP,T);let ae;if(Be){Ke&&ht&&t.texStorage2D(r.TEXTURE_CUBE_MAP,se,qe,He.width,He.height);for(let oe=0;oe<6;oe++){ae=Se[oe].mipmaps;for(let pe=0;pe<ae.length;pe++){const ke=ae[pe];T.format!==yi?Xe!==null?Ke?W&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,pe,0,0,ke.width,ke.height,Xe,ke.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,pe,qe,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,pe,0,0,ke.width,ke.height,Xe,Ce,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,pe,qe,ke.width,ke.height,0,Xe,Ce,ke.data)}}}else{if(ae=T.mipmaps,Ke&&ht){ae.length>0&&se++;const oe=ye(Se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,se,qe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(he){Ke?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Se[oe].width,Se[oe].height,Xe,Ce,Se[oe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,qe,Se[oe].width,Se[oe].height,0,Xe,Ce,Se[oe].data);for(let pe=0;pe<ae.length;pe++){const Ze=ae[pe].image[oe].image;Ke?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,pe+1,0,0,Ze.width,Ze.height,Xe,Ce,Ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,pe+1,qe,Ze.width,Ze.height,0,Xe,Ce,Ze.data)}}else{Ke?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Xe,Ce,Se[oe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,qe,Xe,Ce,Se[oe]);for(let pe=0;pe<ae.length;pe++){const ke=ae[pe];Ke?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,pe+1,0,0,Xe,Ce,ke.image[oe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,pe+1,qe,Xe,Ce,ke.image[oe])}}}p(T)&&m(r.TEXTURE_CUBE_MAP),J.__version=Z.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function $(D,T,F,Y,Z,J){const be=s.convert(F.format,F.colorSpace),ce=s.convert(F.type),Me=S(F.internalFormat,be,ce,F.colorSpace);if(!n.get(T).__hasExternalTextures){const he=Math.max(1,T.width>>J),Se=Math.max(1,T.height>>J);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,J,Me,he,Se,T.depth,0,be,ce,null):t.texImage2D(Z,J,Me,he,Se,0,be,ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),te(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,Z,n.get(F).__webglTexture,0,de(T)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,Z,n.get(F).__webglTexture,J),t.bindFramebuffer(r.FRAMEBUFFER,null)}function le(D,T,F){if(r.bindRenderbuffer(r.RENDERBUFFER,D),T.depthBuffer){const Y=T.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,J=x(T.stencilBuffer,Z),be=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=de(T);te(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce,J,T.width,T.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,J,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,J,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,be,r.RENDERBUFFER,D)}else{const Y=T.textures;for(let Z=0;Z<Y.length;Z++){const J=Y[Z],be=s.convert(J.format,J.colorSpace),ce=s.convert(J.type),Me=S(J.internalFormat,be,ce,J.colorSpace),Be=de(T);F&&te(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Be,Me,T.width,T.height):te(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Be,Me,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Me,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ee(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),B(T.depthTexture,0);const Y=n.get(T.depthTexture).__webglTexture,Z=de(T);if(T.depthTexture.format===Ys)te(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Y,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Y,0);else if(T.depthTexture.format===ra)te(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Y,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function me(D){const T=n.get(D),F=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const Y=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Y){const Z=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),T.__depthDisposeCallback=Z}T.__boundDepthTexture=Y}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ee(T.__webglFramebuffer,D)}else if(F){T.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[Y]),T.__webglDepthbuffer[Y]===void 0)T.__webglDepthbuffer[Y]=r.createRenderbuffer(),le(T.__webglDepthbuffer[Y],D,!1);else{const Z=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,J)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),le(T.__webglDepthbuffer,D,!1);else{const Y=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,Y,r.RENDERBUFFER,Z)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Te(D,T,F){const Y=n.get(D);T!==void 0&&$(Y.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&me(D)}function Re(D){const T=D.texture,F=n.get(D),Y=n.get(T);D.addEventListener("dispose",v);const Z=D.textures,J=D.isWebGLCubeRenderTarget===!0,be=Z.length>1;if(be||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=T.version,a.memory.textures++),J){F.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(T.mipmaps&&T.mipmaps.length>0){F.__webglFramebuffer[ce]=[];for(let Me=0;Me<T.mipmaps.length;Me++)F.__webglFramebuffer[ce][Me]=r.createFramebuffer()}else F.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){F.__webglFramebuffer=[];for(let ce=0;ce<T.mipmaps.length;ce++)F.__webglFramebuffer[ce]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(be)for(let ce=0,Me=Z.length;ce<Me;ce++){const Be=n.get(Z[ce]);Be.__webglTexture===void 0&&(Be.__webglTexture=r.createTexture(),a.memory.textures++)}if(D.samples>0&&te(D)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ce=0;ce<Z.length;ce++){const Me=Z[ce];F.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[ce]);const Be=s.convert(Me.format,Me.colorSpace),he=s.convert(Me.type),Se=S(Me.internalFormat,Be,he,Me.colorSpace,D.isXRRenderTarget===!0),He=de(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,He,Se,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,F.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),le(F.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),Q(r.TEXTURE_CUBE_MAP,T);for(let ce=0;ce<6;ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let Me=0;Me<T.mipmaps.length;Me++)$(F.__webglFramebuffer[ce][Me],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me);else $(F.__webglFramebuffer[ce],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(T)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ce=0,Me=Z.length;ce<Me;ce++){const Be=Z[ce],he=n.get(Be);t.bindTexture(r.TEXTURE_2D,he.__webglTexture),Q(r.TEXTURE_2D,Be),$(F.__webglFramebuffer,D,Be,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D,0),p(Be)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let ce=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ce=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ce,Y.__webglTexture),Q(ce,T),T.mipmaps&&T.mipmaps.length>0)for(let Me=0;Me<T.mipmaps.length;Me++)$(F.__webglFramebuffer[Me],D,T,r.COLOR_ATTACHMENT0,ce,Me);else $(F.__webglFramebuffer,D,T,r.COLOR_ATTACHMENT0,ce,0);p(T)&&m(ce),t.unbindTexture()}D.depthBuffer&&me(D)}function Ue(D){const T=D.textures;for(let F=0,Y=T.length;F<Y;F++){const Z=T[F];if(p(Z)){const J=D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,be=n.get(Z).__webglTexture;t.bindTexture(J,be),m(J),t.unbindTexture()}}}const P=[],ne=[];function ie(D){if(D.samples>0){if(te(D)===!1){const T=D.textures,F=D.width,Y=D.height;let Z=r.COLOR_BUFFER_BIT;const J=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=n.get(D),ce=T.length>1;if(ce)for(let Me=0;Me<T.length;Me++)t.bindFramebuffer(r.FRAMEBUFFER,be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Me=0;Me<T.length;Me++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,be.__webglColorRenderbuffer[Me]);const Be=n.get(T[Me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Be,0)}r.blitFramebuffer(0,0,F,Y,0,0,F,Y,Z,r.NEAREST),l===!0&&(P.length=0,ne.length=0,P.push(r.COLOR_ATTACHMENT0+Me),D.depthBuffer&&D.resolveDepthBuffer===!1&&(P.push(J),ne.push(J),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ne)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,P))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let Me=0;Me<T.length;Me++){t.bindFramebuffer(r.FRAMEBUFFER,be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,be.__webglColorRenderbuffer[Me]);const Be=n.get(T[Me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,Be,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const T=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function de(D){return Math.min(i.maxSamples,D.samples)}function te(D){const T=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function G(D){const T=a.render.frame;u.get(D)!==T&&(u.set(D,T),D.update())}function fe(D,T){const F=D.colorSpace,Y=D.format,Z=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||F!==Er&&F!==or&&(pt.getTransfer(F)===Rt?(Y!==yi||Z!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),T}function ye(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=C,this.setTexture2D=B,this.setTexture2DArray=N,this.setTexture3D=O,this.setTextureCube=H,this.rebindTextures=Te,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=$,this.useMultisampledRTT=te}function QS(r,e){function t(n,i=or){let s;const a=pt.getTransfer(i);if(n===Ki)return r.UNSIGNED_BYTE;if(n===Lh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Dh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===vm)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===gm)return r.BYTE;if(n===_m)return r.SHORT;if(n===no)return r.UNSIGNED_SHORT;if(n===Ph)return r.INT;if(n===ts)return r.UNSIGNED_INT;if(n===Xi)return r.FLOAT;if(n===lo)return r.HALF_FLOAT;if(n===xm)return r.ALPHA;if(n===ym)return r.RGB;if(n===yi)return r.RGBA;if(n===Mm)return r.LUMINANCE;if(n===Sm)return r.LUMINANCE_ALPHA;if(n===Ys)return r.DEPTH_COMPONENT;if(n===ra)return r.DEPTH_STENCIL;if(n===bm)return r.RED;if(n===Ih)return r.RED_INTEGER;if(n===wm)return r.RG;if(n===Nh)return r.RG_INTEGER;if(n===Uh)return r.RGBA_INTEGER;if(n===hl||n===dl||n===fl||n===pl)if(a===Rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===hl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===hl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===dl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Eu||n===Tu||n===Au||n===Cu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Eu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Au)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ru||n===Pu||n===Lu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ru||n===Pu)return a===Rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Lu)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Du||n===Iu||n===Nu||n===Uu||n===Ou||n===Fu||n===ku||n===Bu||n===zu||n===Hu||n===Gu||n===Vu||n===Wu||n===Xu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Du)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Iu)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nu)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uu)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ou)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fu)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ku)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bu)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zu)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hu)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gu)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vu)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wu)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xu)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ml||n===qu||n===Yu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ml)return a===Rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Em||n===$u||n===ju||n===Ku)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ml)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$u)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ju)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ku)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ia?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class e1 extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bt extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t1={type:"move"};class Bc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(t1)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const n1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class r1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Pn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new br({vertexShader:n1,fragmentShader:i1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new fo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s1 extends la{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=new r1,p=t.getContextAttributes();let m=null,S=null;const x=[],M=[],E=new _e;let v=null;const b=new Bt;b.layers.enable(1),b.viewport=new Lt;const A=new Bt;A.layers.enable(2),A.viewport=new Lt;const w=[b,A],y=new e1;y.layers.enable(1),y.layers.enable(2);let C=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let $=x[X];return $===void 0&&($=new Bc,x[X]=$),$.getTargetRaySpace()},this.getControllerGrip=function(X){let $=x[X];return $===void 0&&($=new Bc,x[X]=$),$.getGripSpace()},this.getHand=function(X){let $=x[X];return $===void 0&&($=new Bc,x[X]=$),$.getHandSpace()};function U(X){const $=M.indexOf(X.inputSource);if($===-1)return;const le=x[$];le!==void 0&&(le.update(X.inputSource,X.frame,c||a),le.dispatchEvent({type:X.type,data:X.inputSource}))}function B(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",N);for(let X=0;X<x.length;X++){const $=M[X];$!==null&&(M[X]=null,x[X].disconnect($))}C=null,L=null,g.reset(),e.setRenderTarget(m),d=null,f=null,h=null,i=null,S=null,xe.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",B),i.addEventListener("inputsourceschange",N),p.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(E),i.renderState.layers===void 0){const $={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new ns(d.framebufferWidth,d.framebufferHeight,{format:yi,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let $=null,le=null,ee=null;p.depth&&(ee=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=p.stencil?ra:Ys,le=p.stencil?ia:ts);const me={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(me),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new ns(f.textureWidth,f.textureHeight,{format:yi,type:Ki,depthTexture:new Bm(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),xe.setContext(i),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function N(X){for(let $=0;$<X.removed.length;$++){const le=X.removed[$],ee=M.indexOf(le);ee>=0&&(M[ee]=null,x[ee].disconnect(le))}for(let $=0;$<X.added.length;$++){const le=X.added[$];let ee=M.indexOf(le);if(ee===-1){for(let Te=0;Te<x.length;Te++)if(Te>=M.length){M.push(le),ee=Te;break}else if(M[Te]===null){M[Te]=le,ee=Te;break}if(ee===-1)break}const me=x[ee];me&&me.connect(le)}}const O=new z,H=new z;function k(X,$,le){O.setFromMatrixPosition($.matrixWorld),H.setFromMatrixPosition(le.matrixWorld);const ee=O.distanceTo(H),me=$.projectionMatrix.elements,Te=le.projectionMatrix.elements,Re=me[14]/(me[10]-1),Ue=me[14]/(me[10]+1),P=(me[9]+1)/me[5],ne=(me[9]-1)/me[5],ie=(me[8]-1)/me[0],de=(Te[8]+1)/Te[0],te=Re*ie,G=Re*de,fe=ee/(-ie+de),ye=fe*-ie;if($.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ye),X.translateZ(fe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),me[10]===-1)X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const D=Re+fe,T=Ue+fe,F=te-ye,Y=G+(ee-ye),Z=P*Ue/T*D,J=ne*Ue/T*D;X.projectionMatrix.makePerspective(F,Y,Z,J,D,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function re(X,$){$===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices($.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let $=X.near,le=X.far;g.texture!==null&&(g.depthNear>0&&($=g.depthNear),g.depthFar>0&&(le=g.depthFar)),y.near=A.near=b.near=$,y.far=A.far=b.far=le,(C!==y.near||L!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,L=y.far);const ee=X.parent,me=y.cameras;re(y,ee);for(let Te=0;Te<me.length;Te++)re(me[Te],ee);me.length===2?k(y,b,A):y.projectionMatrix.copy(b.projectionMatrix),I(X,y,ee)};function I(X,$,le){le===null?X.matrix.copy($.matrixWorld):(X.matrix.copy(le.matrixWorld),X.matrix.invert(),X.matrix.multiply($.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=io*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let Q=null;function ge(X,$){if(u=$.getViewerPose(c||a),_=$,u!==null){const le=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let ee=!1;le.length!==y.cameras.length&&(y.cameras.length=0,ee=!0);for(let Te=0;Te<le.length;Te++){const Re=le[Te];let Ue=null;if(d!==null)Ue=d.getViewport(Re);else{const ne=h.getViewSubImage(f,Re);Ue=ne.viewport,Te===0&&(e.setRenderTargetTextures(S,ne.colorTexture,f.ignoreDepthValues?void 0:ne.depthStencilTexture),e.setRenderTarget(S))}let P=w[Te];P===void 0&&(P=new Bt,P.layers.enable(Te),P.viewport=new Lt,w[Te]=P),P.matrix.fromArray(Re.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(Re.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),Te===0&&(y.matrix.copy(P.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ee===!0&&y.cameras.push(P)}const me=i.enabledFeatures;if(me&&me.includes("depth-sensing")){const Te=h.getDepthInformation(le[0]);Te&&Te.isValid&&Te.texture&&g.init(e,Te,i.renderState)}}for(let le=0;le<x.length;le++){const ee=M[le],me=x[le];ee!==null&&me!==void 0&&me.update(ee,$,c||a)}Q&&Q(X,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),_=null}const xe=new Fm;xe.setAnimationLoop(ge),this.setAnimationLoop=function(X){Q=X},this.dispose=function(){}}}const Ir=new Pi,a1=new At;function o1(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Nm(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,x,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Rn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Rn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),x=S.envMap,M=S.envMapRotation;x&&(p.envMap.value=x,Ir.copy(M),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),p.envMapRotation.value.setFromMatrix4(a1.makeRotationFromEuler(Ir)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Rn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function l1(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){const M=x.program;n.uniformBlockBinding(S,M)}function c(S,x){let M=i[S.id];M===void 0&&(_(S),M=u(S),i[S.id]=M,S.addEventListener("dispose",p));const E=x.program;n.updateUBOMapping(S,E);const v=e.render.frame;s[S.id]!==v&&(f(S),s[S.id]=v)}function u(S){const x=h();S.__bindingPointIndex=x;const M=r.createBuffer(),E=S.__size,v=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,E,v),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,M),M}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const x=i[S.id],M=S.uniforms,E=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let v=0,b=M.length;v<b;v++){const A=Array.isArray(M[v])?M[v]:[M[v]];for(let w=0,y=A.length;w<y;w++){const C=A[w];if(d(C,v,w,E)===!0){const L=C.__offset,U=Array.isArray(C.value)?C.value:[C.value];let B=0;for(let N=0;N<U.length;N++){const O=U[N],H=g(O);typeof O=="number"||typeof O=="boolean"?(C.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,L+B,C.__data)):O.isMatrix3?(C.__data[0]=O.elements[0],C.__data[1]=O.elements[1],C.__data[2]=O.elements[2],C.__data[3]=0,C.__data[4]=O.elements[3],C.__data[5]=O.elements[4],C.__data[6]=O.elements[5],C.__data[7]=0,C.__data[8]=O.elements[6],C.__data[9]=O.elements[7],C.__data[10]=O.elements[8],C.__data[11]=0):(O.toArray(C.__data,B),B+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,x,M,E){const v=S.value,b=x+"_"+M;if(E[b]===void 0)return typeof v=="number"||typeof v=="boolean"?E[b]=v:E[b]=v.clone(),!0;{const A=E[b];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return E[b]=v,!0}else if(A.equals(v)===!1)return A.copy(v),!0}return!1}function _(S){const x=S.uniforms;let M=0;const E=16;for(let b=0,A=x.length;b<A;b++){const w=Array.isArray(x[b])?x[b]:[x[b]];for(let y=0,C=w.length;y<C;y++){const L=w[y],U=Array.isArray(L.value)?L.value:[L.value];for(let B=0,N=U.length;B<N;B++){const O=U[B],H=g(O),k=M%E,re=k%H.boundary,I=k+re;M+=re,I!==0&&E-I<H.storage&&(M+=E-I),L.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=H.storage}}}const v=M%E;return v>0&&(M+=E-v),S.__size=M,S.__cache={},this}function g(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function p(S){const x=S.target;x.removeEventListener("dispose",p);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Li{constructor(e={}){const{canvas:t=Q_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tn,this.toneMapping=_r,this.toneMappingExposure=1;const x=this;let M=!1,E=0,v=0,b=null,A=-1,w=null;const y=new Lt,C=new Lt;let L=null;const U=new Ye(0);let B=0,N=t.width,O=t.height,H=1,k=null,re=null;const I=new Lt(0,0,N,O),Q=new Lt(0,0,N,O);let ge=!1;const xe=new Bh;let X=!1,$=!1;const le=new At,ee=new z,me=new Lt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function Ue(){return b===null?H:1}let P=n;function ne(R,V){return t.getContext(R,V)}try{const R={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rh}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",pe,!1),P===null){const V="webgl2";if(P=ne(V,R),P===null)throw ne(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ie,de,te,G,fe,ye,D,T,F,Y,Z,J,be,ce,Me,Be,he,Se,He,Xe,Ce,qe,Ke,ht;function W(){ie=new mM(P),ie.init(),qe=new QS(P,ie),de=new cM(P,ie,e,qe),te=new KS(P),G=new vM(P),fe=new OS,ye=new JS(P,ie,te,fe,de,qe,G),D=new hM(x),T=new pM(x),F=new Ev(P),Ke=new oM(P,F),Y=new gM(P,F,G,Ke),Z=new yM(P,Y,F,G),He=new xM(P,de,ye),Be=new uM(fe),J=new US(x,D,T,ie,de,Ke,Be),be=new o1(x,fe),ce=new kS,Me=new WS(ie),Se=new aM(x,D,T,te,Z,f,l),he=new jS(x,Z,de),ht=new l1(P,G,de,te),Xe=new lM(P,ie,G),Ce=new _M(P,ie,G),G.programs=J.programs,x.capabilities=de,x.extensions=ie,x.properties=fe,x.renderLists=ce,x.shadowMap=he,x.state=te,x.info=G}W();const se=new s1(x,P);this.xr=se,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const R=ie.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ie.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(N,O,!1))},this.getSize=function(R){return R.set(N,O)},this.setSize=function(R,V,K=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,O=V,t.width=Math.floor(R*H),t.height=Math.floor(V*H),K===!0&&(t.style.width=R+"px",t.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(N*H,O*H).floor()},this.setDrawingBufferSize=function(R,V,K){N=R,O=V,H=K,t.width=Math.floor(R*K),t.height=Math.floor(V*K),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(y)},this.getViewport=function(R){return R.copy(I)},this.setViewport=function(R,V,K,j){R.isVector4?I.set(R.x,R.y,R.z,R.w):I.set(R,V,K,j),te.viewport(y.copy(I).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(Q)},this.setScissor=function(R,V,K,j){R.isVector4?Q.set(R.x,R.y,R.z,R.w):Q.set(R,V,K,j),te.scissor(C.copy(Q).multiplyScalar(H).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(R){te.setScissorTest(ge=R)},this.setOpaqueSort=function(R){k=R},this.setTransparentSort=function(R){re=R},this.getClearColor=function(R){return R.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(R=!0,V=!0,K=!0){let j=0;if(R){let q=!1;if(b!==null){const ue=b.texture.format;q=ue===Uh||ue===Nh||ue===Ih}if(q){const ue=b.texture.type,Ee=ue===Ki||ue===ts||ue===no||ue===ia||ue===Lh||ue===Dh,Le=Se.getClearColor(),we=Se.getClearAlpha(),Pe=Le.r,ze=Le.g,Fe=Le.b;Ee?(d[0]=Pe,d[1]=ze,d[2]=Fe,d[3]=we,P.clearBufferuiv(P.COLOR,0,d)):(_[0]=Pe,_[1]=ze,_[2]=Fe,_[3]=we,P.clearBufferiv(P.COLOR,0,_))}else j|=P.COLOR_BUFFER_BIT}V&&(j|=P.DEPTH_BUFFER_BIT),K&&(j|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ce.dispose(),Me.dispose(),fe.dispose(),D.dispose(),T.dispose(),Z.dispose(),Ke.dispose(),ht.dispose(),J.dispose(),se.dispose(),se.removeEventListener("sessionstart",Oe),se.removeEventListener("sessionend",lt),ve.stop()};function ae(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=G.autoReset,V=he.enabled,K=he.autoUpdate,j=he.needsUpdate,q=he.type;W(),G.autoReset=R,he.enabled=V,he.autoUpdate=K,he.needsUpdate=j,he.type=q}function pe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ke(R){const V=R.target;V.removeEventListener("dispose",ke),Ze(V)}function Ze(R){xt(R),fe.remove(R)}function xt(R){const V=fe.get(R).programs;V!==void 0&&(V.forEach(function(K){J.releaseProgram(K)}),R.isShaderMaterial&&J.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,K,j,q,ue){V===null&&(V=Te);const Ee=q.isMesh&&q.matrixWorld.determinant()<0,Le=Et(R,V,K,j,q);te.setMaterial(j,Ee);let we=K.index,Pe=1;if(j.wireframe===!0){if(we=Y.getWireframeAttribute(K),we===void 0)return;Pe=2}const ze=K.drawRange,Fe=K.attributes.position;let ct=ze.start*Pe,_t=(ze.start+ze.count)*Pe;ue!==null&&(ct=Math.max(ct,ue.start*Pe),_t=Math.min(_t,(ue.start+ue.count)*Pe)),we!==null?(ct=Math.max(ct,0),_t=Math.min(_t,we.count)):Fe!=null&&(ct=Math.max(ct,0),_t=Math.min(_t,Fe.count));const ut=_t-ct;if(ut<0||ut===1/0)return;Ke.setup(q,j,Le,K,we);let jt,at=Xe;if(we!==null&&(jt=F.get(we),at=Ce,at.setIndex(jt)),q.isMesh)j.wireframe===!0?(te.setLineWidth(j.wireframeLinewidth*Ue()),at.setMode(P.LINES)):at.setMode(P.TRIANGLES);else if(q.isLine){let Ie=j.linewidth;Ie===void 0&&(Ie=1),te.setLineWidth(Ie*Ue()),q.isLineSegments?at.setMode(P.LINES):q.isLineLoop?at.setMode(P.LINE_LOOP):at.setMode(P.LINE_STRIP)}else q.isPoints?at.setMode(P.POINTS):q.isSprite&&at.setMode(P.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)at.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))at.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ie=q._multiDrawStarts,ln=q._multiDrawCounts,dt=q._multiDrawCount,fi=we?F.get(we).bytesPerElement:1,ls=fe.get(j).currentProgram.getUniforms();for(let zn=0;zn<dt;zn++)ls.setValue(P,"_gl_DrawID",zn),at.render(Ie[zn]/fi,ln[zn])}else if(q.isInstancedMesh)at.renderInstances(ct,ut,q.count);else if(K.isInstancedBufferGeometry){const Ie=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ln=Math.min(K.instanceCount,Ie);at.renderInstances(ct,ut,ln)}else at.render(ct,ut)};function yt(R,V,K){R.transparent===!0&&R.side===ai&&R.forceSinglePass===!1?(R.side=Rn,R.needsUpdate=!0,wt(R,V,K),R.side=Sr,R.needsUpdate=!0,wt(R,V,K),R.side=ai):wt(R,V,K)}this.compile=function(R,V,K=null){K===null&&(K=R),p=Me.get(K),p.init(V),S.push(p),K.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),R!==K&&R.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const j=new Set;return R.traverse(function(q){const ue=q.material;if(ue)if(Array.isArray(ue))for(let Ee=0;Ee<ue.length;Ee++){const Le=ue[Ee];yt(Le,K,q),j.add(Le)}else yt(ue,K,q),j.add(ue)}),S.pop(),p=null,j},this.compileAsync=function(R,V,K=null){const j=this.compile(R,V,K);return new Promise(q=>{function ue(){if(j.forEach(function(Ee){fe.get(Ee).currentProgram.isReady()&&j.delete(Ee)}),j.size===0){q(R);return}setTimeout(ue,10)}ie.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let st=null;function Ve(R){st&&st(R)}function Oe(){ve.stop()}function lt(){ve.start()}const ve=new Fm;ve.setAnimationLoop(Ve),typeof self<"u"&&ve.setContext(self),this.setAnimationLoop=function(R){st=R,se.setAnimationLoop(R),R===null?ve.stop():ve.start()},se.addEventListener("sessionstart",Oe),se.addEventListener("sessionend",lt),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(V),V=se.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,V,b),p=Me.get(R,S.length),p.init(V),S.push(p),le.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),xe.setFromProjectionMatrix(le),$=this.localClippingEnabled,X=Be.init(this.clippingPlanes,$),g=ce.get(R,m.length),g.init(),m.push(g),se.enabled===!0&&se.isPresenting===!0){const ue=x.xr.getDepthSensingMesh();ue!==null&&$e(ue,V,-1/0,x.sortObjects)}$e(R,V,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(k,re),Re=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Re&&Se.addToRenderList(g,R),this.info.render.frame++,X===!0&&Be.beginShadows();const K=p.state.shadowsArray;he.render(K,R,V),X===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=g.opaque,q=g.transmissive;if(p.setupLights(),V.isArrayCamera){const ue=V.cameras;if(q.length>0)for(let Ee=0,Le=ue.length;Ee<Le;Ee++){const we=ue[Ee];je(j,q,R,we)}Re&&Se.render(R);for(let Ee=0,Le=ue.length;Ee<Le;Ee++){const we=ue[Ee];Ge(g,R,we,we.viewport)}}else q.length>0&&je(j,q,R,V),Re&&Se.render(R),Ge(g,R,V);b!==null&&(ye.updateMultisampleRenderTarget(b),ye.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(x,R,V),Ke.resetDefaultState(),A=-1,w=null,S.pop(),S.length>0?(p=S[S.length-1],X===!0&&Be.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function $e(R,V,K,j){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||xe.intersectsSprite(R)){j&&me.setFromMatrixPosition(R.matrixWorld).applyMatrix4(le);const Ee=Z.update(R),Le=R.material;Le.visible&&g.push(R,Ee,Le,K,me.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||xe.intersectsObject(R))){const Ee=Z.update(R),Le=R.material;if(j&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),me.copy(R.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),me.copy(Ee.boundingSphere.center)),me.applyMatrix4(R.matrixWorld).applyMatrix4(le)),Array.isArray(Le)){const we=Ee.groups;for(let Pe=0,ze=we.length;Pe<ze;Pe++){const Fe=we[Pe],ct=Le[Fe.materialIndex];ct&&ct.visible&&g.push(R,Ee,ct,K,me.z,Fe)}}else Le.visible&&g.push(R,Ee,Le,K,me.z,null)}}const ue=R.children;for(let Ee=0,Le=ue.length;Ee<Le;Ee++)$e(ue[Ee],V,K,j)}function Ge(R,V,K,j){const q=R.opaque,ue=R.transmissive,Ee=R.transparent;p.setupLightsView(K),X===!0&&Be.setGlobalState(x.clippingPlanes,K),j&&te.viewport(y.copy(j)),q.length>0&&It(q,V,K),ue.length>0&&It(ue,V,K),Ee.length>0&&It(Ee,V,K),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function je(R,V,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new ns(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?lo:Ki,minFilter:Wr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));const ue=p.state.transmissionRenderTarget[j.id],Ee=j.viewport||y;ue.setSize(Ee.z,Ee.w);const Le=x.getRenderTarget();x.setRenderTarget(ue),x.getClearColor(U),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear(),Re&&Se.render(K);const we=x.toneMapping;x.toneMapping=_r;const Pe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),X===!0&&Be.setGlobalState(x.clippingPlanes,j),It(R,K,j),ye.updateMultisampleRenderTarget(ue),ye.updateRenderTargetMipmap(ue),ie.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Fe=0,ct=V.length;Fe<ct;Fe++){const _t=V[Fe],ut=_t.object,jt=_t.geometry,at=_t.material,Ie=_t.group;if(at.side===ai&&ut.layers.test(j.layers)){const ln=at.side;at.side=Rn,at.needsUpdate=!0,tt(ut,K,j,jt,at,Ie),at.side=ln,at.needsUpdate=!0,ze=!0}}ze===!0&&(ye.updateMultisampleRenderTarget(ue),ye.updateRenderTargetMipmap(ue))}x.setRenderTarget(Le),x.setClearColor(U,B),Pe!==void 0&&(j.viewport=Pe),x.toneMapping=we}function It(R,V,K){const j=V.isScene===!0?V.overrideMaterial:null;for(let q=0,ue=R.length;q<ue;q++){const Ee=R[q],Le=Ee.object,we=Ee.geometry,Pe=j===null?Ee.material:j,ze=Ee.group;Le.layers.test(K.layers)&&tt(Le,V,K,we,Pe,ze)}}function tt(R,V,K,j,q,ue){R.onBeforeRender(x,V,K,j,q,ue),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(x,V,K,j,R,ue),q.transparent===!0&&q.side===ai&&q.forceSinglePass===!1?(q.side=Rn,q.needsUpdate=!0,x.renderBufferDirect(K,V,j,q,R,ue),q.side=Sr,q.needsUpdate=!0,x.renderBufferDirect(K,V,j,q,R,ue),q.side=ai):x.renderBufferDirect(K,V,j,q,R,ue),R.onAfterRender(x,V,K,j,q,ue)}function wt(R,V,K){V.isScene!==!0&&(V=Te);const j=fe.get(R),q=p.state.lights,ue=p.state.shadowsArray,Ee=q.state.version,Le=J.getParameters(R,q.state,ue,V,K),we=J.getProgramCacheKey(Le);let Pe=j.programs;j.environment=R.isMeshStandardMaterial?V.environment:null,j.fog=V.fog,j.envMap=(R.isMeshStandardMaterial?T:D).get(R.envMap||j.environment),j.envMapRotation=j.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,Pe===void 0&&(R.addEventListener("dispose",ke),Pe=new Map,j.programs=Pe);let ze=Pe.get(we);if(ze!==void 0){if(j.currentProgram===ze&&j.lightsStateVersion===Ee)return Ct(R,Le),ze}else Le.uniforms=J.getUniforms(R),R.onBeforeCompile(Le,x),ze=J.acquireProgram(Le,we),Pe.set(we,ze),j.uniforms=Le.uniforms;const Fe=j.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Fe.clippingPlanes=Be.uniform),Ct(R,Le),j.needsLights=Bn(R),j.lightsStateVersion=Ee,j.needsLights&&(Fe.ambientLightColor.value=q.state.ambient,Fe.lightProbe.value=q.state.probe,Fe.directionalLights.value=q.state.directional,Fe.directionalLightShadows.value=q.state.directionalShadow,Fe.spotLights.value=q.state.spot,Fe.spotLightShadows.value=q.state.spotShadow,Fe.rectAreaLights.value=q.state.rectArea,Fe.ltc_1.value=q.state.rectAreaLTC1,Fe.ltc_2.value=q.state.rectAreaLTC2,Fe.pointLights.value=q.state.point,Fe.pointLightShadows.value=q.state.pointShadow,Fe.hemisphereLights.value=q.state.hemi,Fe.directionalShadowMap.value=q.state.directionalShadowMap,Fe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Fe.spotShadowMap.value=q.state.spotShadowMap,Fe.spotLightMatrix.value=q.state.spotLightMatrix,Fe.spotLightMap.value=q.state.spotLightMap,Fe.pointShadowMap.value=q.state.pointShadowMap,Fe.pointShadowMatrix.value=q.state.pointShadowMatrix),j.currentProgram=ze,j.uniformsList=null,ze}function $t(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=gl.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function Ct(R,V){const K=fe.get(R);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function Et(R,V,K,j,q){V.isScene!==!0&&(V=Te),ye.resetTextureUnits();const ue=V.fog,Ee=j.isMeshStandardMaterial?V.environment:null,Le=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Er,we=(j.isMeshStandardMaterial?T:D).get(j.envMap||Ee),Pe=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ze=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Fe=!!K.morphAttributes.position,ct=!!K.morphAttributes.normal,_t=!!K.morphAttributes.color;let ut=_r;j.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ut=x.toneMapping);const jt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,at=jt!==void 0?jt.length:0,Ie=fe.get(j),ln=p.state.lights;if(X===!0&&($===!0||R!==w)){const ei=R===w&&j.id===A;Be.setState(j,R,ei)}let dt=!1;j.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==ln.state.version||Ie.outputColorSpace!==Le||q.isBatchedMesh&&Ie.batching===!1||!q.isBatchedMesh&&Ie.batching===!0||q.isBatchedMesh&&Ie.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ie.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ie.instancing===!1||!q.isInstancedMesh&&Ie.instancing===!0||q.isSkinnedMesh&&Ie.skinning===!1||!q.isSkinnedMesh&&Ie.skinning===!0||q.isInstancedMesh&&Ie.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ie.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ie.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ie.instancingMorph===!1&&q.morphTexture!==null||Ie.envMap!==we||j.fog===!0&&Ie.fog!==ue||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==Be.numPlanes||Ie.numIntersection!==Be.numIntersection)||Ie.vertexAlphas!==Pe||Ie.vertexTangents!==ze||Ie.morphTargets!==Fe||Ie.morphNormals!==ct||Ie.morphColors!==_t||Ie.toneMapping!==ut||Ie.morphTargetsCount!==at)&&(dt=!0):(dt=!0,Ie.__version=j.version);let fi=Ie.currentProgram;dt===!0&&(fi=wt(j,V,q));let ls=!1,zn=!1,Zl=!1;const Wt=fi.getUniforms(),Qi=Ie.uniforms;if(te.useProgram(fi.program)&&(ls=!0,zn=!0,Zl=!0),j.id!==A&&(A=j.id,zn=!0),ls||w!==R){Wt.setValue(P,"projectionMatrix",R.projectionMatrix),Wt.setValue(P,"viewMatrix",R.matrixWorldInverse);const ei=Wt.map.cameraPosition;ei!==void 0&&ei.setValue(P,ee.setFromMatrixPosition(R.matrixWorld)),de.logarithmicDepthBuffer&&Wt.setValue(P,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Wt.setValue(P,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,zn=!0,Zl=!0)}if(q.isSkinnedMesh){Wt.setOptional(P,q,"bindMatrix"),Wt.setOptional(P,q,"bindMatrixInverse");const ei=q.skeleton;ei&&(ei.boneTexture===null&&ei.computeBoneTexture(),Wt.setValue(P,"boneTexture",ei.boneTexture,ye))}q.isBatchedMesh&&(Wt.setOptional(P,q,"batchingTexture"),Wt.setValue(P,"batchingTexture",q._matricesTexture,ye),Wt.setOptional(P,q,"batchingIdTexture"),Wt.setValue(P,"batchingIdTexture",q._indirectTexture,ye),Wt.setOptional(P,q,"batchingColorTexture"),q._colorsTexture!==null&&Wt.setValue(P,"batchingColorTexture",q._colorsTexture,ye));const Jl=K.morphAttributes;if((Jl.position!==void 0||Jl.normal!==void 0||Jl.color!==void 0)&&He.update(q,K,fi),(zn||Ie.receiveShadow!==q.receiveShadow)&&(Ie.receiveShadow=q.receiveShadow,Wt.setValue(P,"receiveShadow",q.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Qi.envMap.value=we,Qi.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&V.environment!==null&&(Qi.envMapIntensity.value=V.environmentIntensity),zn&&(Wt.setValue(P,"toneMappingExposure",x.toneMappingExposure),Ie.needsLights&&mt(Qi,Zl),ue&&j.fog===!0&&be.refreshFogUniforms(Qi,ue),be.refreshMaterialUniforms(Qi,j,H,O,p.state.transmissionRenderTarget[R.id]),gl.upload(P,$t(Ie),Qi,ye)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(gl.upload(P,$t(Ie),Qi,ye),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Wt.setValue(P,"center",q.center),Wt.setValue(P,"modelViewMatrix",q.modelViewMatrix),Wt.setValue(P,"normalMatrix",q.normalMatrix),Wt.setValue(P,"modelMatrix",q.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const ei=j.uniformsGroups;for(let Ql=0,ng=ei.length;Ql<ng;Ql++){const qh=ei[Ql];ht.update(qh,fi),ht.bind(qh,fi)}}return fi}function mt(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Bn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,V,K){fe.get(R.texture).__webglTexture=V,fe.get(R.depthTexture).__webglTexture=K;const j=fe.get(R);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=K===void 0,j.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,V){const K=fe.get(R);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,K=0){b=R,E=V,v=K;let j=!0,q=null,ue=!1,Ee=!1;if(R){const we=fe.get(R);if(we.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(P.FRAMEBUFFER,null),j=!1;else if(we.__webglFramebuffer===void 0)ye.setupRenderTarget(R);else if(we.__hasExternalTextures)ye.rebindTextures(R,fe.get(R.texture).__webglTexture,fe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Fe=R.depthTexture;if(we.__boundDepthTexture!==Fe){if(Fe!==null&&fe.has(Fe)&&(R.width!==Fe.image.width||R.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ye.setupDepthRenderbuffer(R)}}const Pe=R.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Ee=!0);const ze=fe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ze[V])?q=ze[V][K]:q=ze[V],ue=!0):R.samples>0&&ye.useMultisampledRTT(R)===!1?q=fe.get(R).__webglMultisampledFramebuffer:Array.isArray(ze)?q=ze[K]:q=ze,y.copy(R.viewport),C.copy(R.scissor),L=R.scissorTest}else y.copy(I).multiplyScalar(H).floor(),C.copy(Q).multiplyScalar(H).floor(),L=ge;if(te.bindFramebuffer(P.FRAMEBUFFER,q)&&j&&te.drawBuffers(R,q),te.viewport(y),te.scissor(C),te.setScissorTest(L),ue){const we=fe.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+V,we.__webglTexture,K)}else if(Ee){const we=fe.get(R.texture),Pe=V||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,we.__webglTexture,K||0,Pe)}A=-1},this.readRenderTargetPixels=function(R,V,K,j,q,ue,Ee){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=fe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ee!==void 0&&(Le=Le[Ee]),Le){te.bindFramebuffer(P.FRAMEBUFFER,Le);try{const we=R.texture,Pe=we.format,ze=we.type;if(!de.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-j&&K>=0&&K<=R.height-q&&P.readPixels(V,K,j,q,qe.convert(Pe),qe.convert(ze),ue)}finally{const we=b!==null?fe.get(b).__webglFramebuffer:null;te.bindFramebuffer(P.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(R,V,K,j,q,ue,Ee){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=fe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ee!==void 0&&(Le=Le[Ee]),Le){te.bindFramebuffer(P.FRAMEBUFFER,Le);try{const we=R.texture,Pe=we.format,ze=we.type;if(!de.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=R.width-j&&K>=0&&K<=R.height-q){const Fe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Fe),P.bufferData(P.PIXEL_PACK_BUFFER,ue.byteLength,P.STREAM_READ),P.readPixels(V,K,j,q,qe.convert(Pe),qe.convert(ze),0),P.flush();const ct=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await ev(P,ct,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,Fe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ue)}finally{P.deleteBuffer(Fe),P.deleteSync(ct)}return ue}}finally{const we=b!==null?fe.get(b).__webglFramebuffer:null;te.bindFramebuffer(P.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(R,V=null,K=0){R.isTexture!==!0&&(Ga("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,R=arguments[1]);const j=Math.pow(2,-K),q=Math.floor(R.image.width*j),ue=Math.floor(R.image.height*j),Ee=V!==null?V.x:0,Le=V!==null?V.y:0;ye.setTexture2D(R,0),P.copyTexSubImage2D(P.TEXTURE_2D,K,0,0,Ee,Le,q,ue),te.unbindTexture()},this.copyTextureToTexture=function(R,V,K=null,j=null,q=0){R.isTexture!==!0&&(Ga("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,R=arguments[1],V=arguments[2],q=arguments[3]||0,K=null);let ue,Ee,Le,we,Pe,ze;K!==null?(ue=K.max.x-K.min.x,Ee=K.max.y-K.min.y,Le=K.min.x,we=K.min.y):(ue=R.image.width,Ee=R.image.height,Le=0,we=0),j!==null?(Pe=j.x,ze=j.y):(Pe=0,ze=0);const Fe=qe.convert(V.format),ct=qe.convert(V.type);ye.setTexture2D(V,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,V.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,V.unpackAlignment);const _t=P.getParameter(P.UNPACK_ROW_LENGTH),ut=P.getParameter(P.UNPACK_IMAGE_HEIGHT),jt=P.getParameter(P.UNPACK_SKIP_PIXELS),at=P.getParameter(P.UNPACK_SKIP_ROWS),Ie=P.getParameter(P.UNPACK_SKIP_IMAGES),ln=R.isCompressedTexture?R.mipmaps[q]:R.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,ln.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ln.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Le),P.pixelStorei(P.UNPACK_SKIP_ROWS,we),R.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,q,Pe,ze,ue,Ee,Fe,ct,ln.data):R.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,q,Pe,ze,ln.width,ln.height,Fe,ln.data):P.texSubImage2D(P.TEXTURE_2D,q,Pe,ze,ue,Ee,Fe,ct,ln),P.pixelStorei(P.UNPACK_ROW_LENGTH,_t),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ut),P.pixelStorei(P.UNPACK_SKIP_PIXELS,jt),P.pixelStorei(P.UNPACK_SKIP_ROWS,at),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ie),q===0&&V.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),te.unbindTexture()},this.copyTextureToTexture3D=function(R,V,K=null,j=null,q=0){R.isTexture!==!0&&(Ga("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,j=arguments[1]||null,R=arguments[2],V=arguments[3],q=arguments[4]||0);let ue,Ee,Le,we,Pe,ze,Fe,ct,_t;const ut=R.isCompressedTexture?R.mipmaps[q]:R.image;K!==null?(ue=K.max.x-K.min.x,Ee=K.max.y-K.min.y,Le=K.max.z-K.min.z,we=K.min.x,Pe=K.min.y,ze=K.min.z):(ue=ut.width,Ee=ut.height,Le=ut.depth,we=0,Pe=0,ze=0),j!==null?(Fe=j.x,ct=j.y,_t=j.z):(Fe=0,ct=0,_t=0);const jt=qe.convert(V.format),at=qe.convert(V.type);let Ie;if(V.isData3DTexture)ye.setTexture3D(V,0),Ie=P.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)ye.setTexture2DArray(V,0),Ie=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,V.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,V.unpackAlignment);const ln=P.getParameter(P.UNPACK_ROW_LENGTH),dt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),fi=P.getParameter(P.UNPACK_SKIP_PIXELS),ls=P.getParameter(P.UNPACK_SKIP_ROWS),zn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ut.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ut.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,we),P.pixelStorei(P.UNPACK_SKIP_ROWS,Pe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ze),R.isDataTexture||R.isData3DTexture?P.texSubImage3D(Ie,q,Fe,ct,_t,ue,Ee,Le,jt,at,ut.data):V.isCompressedArrayTexture?P.compressedTexSubImage3D(Ie,q,Fe,ct,_t,ue,Ee,Le,jt,ut.data):P.texSubImage3D(Ie,q,Fe,ct,_t,ue,Ee,Le,jt,at,ut),P.pixelStorei(P.UNPACK_ROW_LENGTH,ln),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,dt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,fi),P.pixelStorei(P.UNPACK_SKIP_ROWS,ls),P.pixelStorei(P.UNPACK_SKIP_IMAGES,zn),q===0&&V.generateMipmaps&&P.generateMipmap(Ie),te.unbindTexture()},this.initRenderTarget=function(R){fe.get(R).__webglFramebuffer===void 0&&ye.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ye.setTextureCube(R,0):R.isData3DTexture?ye.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ye.setTexture2DArray(R,0):ye.setTexture2D(R,0),te.unbindTexture()},this.resetState=function(){E=0,v=0,b=null,te.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Oh?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===Vl?"display-p3":"srgb"}}class Di extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Wm extends os{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ol=new z,Fl=new z,Cf=new At,va=new Wl,jo=new ho,zc=new z,Rf=new z;class c1 extends Jt{constructor(e=new Vt,t=new Wm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ol.fromBufferAttribute(t,i-1),Fl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ol.distanceTo(Fl);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(i),jo.radius+=s,e.ray.intersectsSphere(jo)===!1)return;Cf.copy(i).invert(),va.copy(e.ray).applyMatrix4(Cf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=d,p=_-1;g<p;g+=c){const m=u.getX(g),S=u.getX(g+1),x=Ko(this,e,va,l,m,S);x&&t.push(x)}if(this.isLineLoop){const g=u.getX(_-1),p=u.getX(d),m=Ko(this,e,va,l,g,p);m&&t.push(m)}}else{const d=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let g=d,p=_-1;g<p;g+=c){const m=Ko(this,e,va,l,g,g+1);m&&t.push(m)}if(this.isLineLoop){const g=Ko(this,e,va,l,_-1,d);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ko(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(Ol.fromBufferAttribute(a,i),Fl.fromBufferAttribute(a,s),t.distanceSqToSegment(Ol,Fl,zc,Rf)>n)return;zc.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(zc);if(!(l<e.near||l>e.far))return{distance:l,point:Rf.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}class is extends os{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pf=new At,Ju=new Wl,Zo=new ho,Jo=new z;class aa extends Jt{constructor(e=new Vt,t=new is){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(i),Zo.radius+=s,e.ray.intersectsSphere(Zo)===!1)return;Pf.copy(i).invert(),Ju.copy(e.ray).applyMatrix4(Pf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=f,g=d;_<g;_++){const p=c.getX(_);Jo.fromBufferAttribute(h,p),Lf(Jo,p,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let _=f,g=d;_<g;_++)Jo.fromBufferAttribute(h,_),Lf(Jo,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Lf(r,e,t,n,i,s,a){const o=Ju.distanceSqToPoint(r);if(o<t){const l=new z;Ju.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Xm extends Pn{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ii{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(a-u)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new _e:new z);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new z,i=[],s=[],a=[],o=new z,l=new At;for(let d=0;d<=e;d++){const _=d/e;i[d]=this.getTangentAt(_,new z)}s[0]=new z,a[0]=new z;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(sn(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,_))}a[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(sn(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],d*_)),a[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ql extends Ii{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new _e){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class u1 extends ql{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Hh(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,d*=u,i(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Qo=new z,Hc=new Hh,Gc=new Hh,Vc=new Hh;class h1 extends Ii{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new z){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(Qo.subVectors(i[0],i[1]).add(i[0]),c=Qo);const h=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(Qo.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Qo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),Hc.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,g,p),Gc.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,g,p),Vc.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,g,p)}else this.curveType==="catmullrom"&&(Hc.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Gc.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Vc.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Hc.calc(l),Gc.calc(l),Vc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new z().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Df(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function d1(r,e){const t=1-r;return t*t*e}function f1(r,e){return 2*(1-r)*r*e}function p1(r,e){return r*r*e}function Va(r,e,t,n){return d1(r,e)+f1(r,t)+p1(r,n)}function m1(r,e){const t=1-r;return t*t*t*e}function g1(r,e){const t=1-r;return 3*t*t*r*e}function _1(r,e){return 3*(1-r)*r*r*e}function v1(r,e){return r*r*r*e}function Wa(r,e,t,n,i){return m1(r,e)+g1(r,t)+_1(r,n)+v1(r,i)}class qm extends Ii{constructor(e=new _e,t=new _e,n=new _e,i=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new _e){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Wa(e,i.x,s.x,a.x,o.x),Wa(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class x1 extends Ii{constructor(e=new z,t=new z,n=new z,i=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new z){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Wa(e,i.x,s.x,a.x,o.x),Wa(e,i.y,s.y,a.y,o.y),Wa(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ym extends Ii{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class y1 extends Ii{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $m extends Ii{constructor(e=new _e,t=new _e,n=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Va(e,i.x,s.x,a.x),Va(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class M1 extends Ii{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Va(e,i.x,s.x,a.x),Va(e,i.y,s.y,a.y),Va(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jm extends Ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(Df(o,l.x,c.x,u.x,h.x),Df(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new _e().fromArray(i))}return this}}var Qu=Object.freeze({__proto__:null,ArcCurve:u1,CatmullRomCurve3:h1,CubicBezierCurve:qm,CubicBezierCurve3:x1,EllipseCurve:ql,LineCurve:Ym,LineCurve3:y1,QuadraticBezierCurve:$m,QuadraticBezierCurve3:M1,SplineCurve:jm});class S1 extends Ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Qu[i.type]().fromJSON(i))}return this}}class If extends S1{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ym(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new $m(this.currentPoint.clone(),new _e(e,t),new _e(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new qm(this.currentPoint.clone(),new _e(e,t),new _e(n,i),new _e(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new jm(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new ql(e,t,n,i,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class An extends Vt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],d=[];let _=0;const g=[],p=n/2;let m=0;S(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new vt(h,3)),this.setAttribute("normal",new vt(f,3)),this.setAttribute("uv",new vt(d,2));function S(){const M=new z,E=new z;let v=0;const b=(t-e)/n;for(let A=0;A<=s;A++){const w=[],y=A/s,C=y*(t-e)+e;for(let L=0;L<=i;L++){const U=L/i,B=U*l+o,N=Math.sin(B),O=Math.cos(B);E.x=C*N,E.y=-y*n+p,E.z=C*O,h.push(E.x,E.y,E.z),M.set(N,b,O).normalize(),f.push(M.x,M.y,M.z),d.push(U,1-y),w.push(_++)}g.push(w)}for(let A=0;A<i;A++)for(let w=0;w<s;w++){const y=g[w][A],C=g[w+1][A],L=g[w+1][A+1],U=g[w][A+1];u.push(y,C,U),u.push(C,L,U),v+=6}c.addGroup(m,v,0),m+=v}function x(M){const E=_,v=new _e,b=new z;let A=0;const w=M===!0?e:t,y=M===!0?1:-1;for(let L=1;L<=i;L++)h.push(0,p*y,0),f.push(0,y,0),d.push(.5,.5),_++;const C=_;for(let L=0;L<=i;L++){const B=L/i*l+o,N=Math.cos(B),O=Math.sin(B);b.x=w*O,b.y=p*y,b.z=w*N,h.push(b.x,b.y,b.z),f.push(0,y,0),v.x=N*.5+.5,v.y=O*.5*y+.5,d.push(v.x,v.y),_++}for(let L=0;L<i;L++){const U=E+L,B=C+L;M===!0?u.push(B,B+1,U):u.push(B+1,B,U),A+=3}c.addGroup(m,A,M===!0?1:2),m+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new An(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gh extends Vt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),u(),this.setAttribute("position",new vt(s,3)),this.setAttribute("normal",new vt(s.slice(),3)),this.setAttribute("uv",new vt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const x=new z,M=new z,E=new z;for(let v=0;v<t.length;v+=3)d(t[v+0],x),d(t[v+1],M),d(t[v+2],E),l(x,M,E,S)}function l(S,x,M,E){const v=E+1,b=[];for(let A=0;A<=v;A++){b[A]=[];const w=S.clone().lerp(M,A/v),y=x.clone().lerp(M,A/v),C=v-A;for(let L=0;L<=C;L++)L===0&&A===v?b[A][L]=w:b[A][L]=w.clone().lerp(y,L/C)}for(let A=0;A<v;A++)for(let w=0;w<2*(v-A)-1;w++){const y=Math.floor(w/2);w%2===0?(f(b[A][y+1]),f(b[A+1][y]),f(b[A][y])):(f(b[A][y+1]),f(b[A+1][y+1]),f(b[A+1][y]))}}function c(S){const x=new z;for(let M=0;M<s.length;M+=3)x.x=s[M+0],x.y=s[M+1],x.z=s[M+2],x.normalize().multiplyScalar(S),s[M+0]=x.x,s[M+1]=x.y,s[M+2]=x.z}function u(){const S=new z;for(let x=0;x<s.length;x+=3){S.x=s[x+0],S.y=s[x+1],S.z=s[x+2];const M=p(S)/2/Math.PI+.5,E=m(S)/Math.PI+.5;a.push(M,1-E)}_(),h()}function h(){for(let S=0;S<a.length;S+=6){const x=a[S+0],M=a[S+2],E=a[S+4],v=Math.max(x,M,E),b=Math.min(x,M,E);v>.9&&b<.1&&(x<.2&&(a[S+0]+=1),M<.2&&(a[S+2]+=1),E<.2&&(a[S+4]+=1))}}function f(S){s.push(S.x,S.y,S.z)}function d(S,x){const M=S*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function _(){const S=new z,x=new z,M=new z,E=new z,v=new _e,b=new _e,A=new _e;for(let w=0,y=0;w<s.length;w+=9,y+=6){S.set(s[w+0],s[w+1],s[w+2]),x.set(s[w+3],s[w+4],s[w+5]),M.set(s[w+6],s[w+7],s[w+8]),v.set(a[y+0],a[y+1]),b.set(a[y+2],a[y+3]),A.set(a[y+4],a[y+5]),E.copy(S).add(x).add(M).divideScalar(3);const C=p(E);g(v,y+0,S,C),g(b,y+2,x,C),g(A,y+4,M,C)}}function g(S,x,M,E){E<0&&S.x===1&&(a[x]=S.x-1),M.x===0&&M.z===0&&(a[x]=E/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gh(e.vertices,e.indices,e.radius,e.details)}}class Km extends If{constructor(e){super(e),this.uuid=as(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new If().fromJSON(i))}return this}}const b1={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Zm(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,f,d;if(n&&(s=C1(r,e,s,t)),r.length>80*t){o=c=r[0],l=u=r[1];for(let _=t;_<i;_+=t)h=r[_],f=r[_+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-o,u-l),d=d!==0?32767/d:0}return ro(s,a,t,o,l,d,0),a}};function Zm(r,e,t,n,i){let s,a;if(i===B1(r,e,t,n)>0)for(s=e;s<t;s+=n)a=Nf(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=Nf(s,r[s],r[s+1],a);return a&&Yl(a,a.next)&&(ao(a),a=a.next),a}function rs(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Yl(t,t.next)||Ft(t.prev,t,t.next)===0)){if(ao(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ro(r,e,t,n,i,s,a){if(!r)return;!a&&s&&I1(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?E1(r,n,i,s):w1(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),ao(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=T1(rs(r),e,t),ro(r,e,t,n,i,s,2)):a===2&&A1(r,e,t,n,i,s):ro(rs(r),e,t,n,i,s,1);break}}}function w1(r){const e=r.prev,t=r,n=r.next;if(Ft(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=i<s?i<a?i:a:s<a?s:a,h=o<l?o<c?o:c:l<c?l:c,f=i>s?i>a?i:a:s>a?s:a,d=o>l?o>c?o:c:l>c?l:c;let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=d&&Fs(i,o,s,l,a,c,_.x,_.y)&&Ft(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function E1(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Ft(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,u=i.y,h=s.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,_=u<h?u<f?u:f:h<f?h:f,g=o>l?o>c?o:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,m=eh(d,_,e,t,n),S=eh(g,p,e,t,n);let x=r.prevZ,M=r.nextZ;for(;x&&x.z>=m&&M&&M.z<=S;){if(x.x>=d&&x.x<=g&&x.y>=_&&x.y<=p&&x!==i&&x!==a&&Fs(o,u,l,h,c,f,x.x,x.y)&&Ft(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=d&&M.x<=g&&M.y>=_&&M.y<=p&&M!==i&&M!==a&&Fs(o,u,l,h,c,f,M.x,M.y)&&Ft(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=m;){if(x.x>=d&&x.x<=g&&x.y>=_&&x.y<=p&&x!==i&&x!==a&&Fs(o,u,l,h,c,f,x.x,x.y)&&Ft(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=S;){if(M.x>=d&&M.x<=g&&M.y>=_&&M.y<=p&&M!==i&&M!==a&&Fs(o,u,l,h,c,f,M.x,M.y)&&Ft(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function T1(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Yl(i,s)&&Jm(i,n,n.next,s)&&so(i,s)&&so(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ao(n),ao(n.next),n=r=s),n=n.next}while(n!==r);return rs(n)}function A1(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&O1(a,o)){let l=Qm(a,o);a=rs(a,a.next),l=rs(l,l.next),ro(a,e,t,n,i,s,0),ro(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function C1(r,e,t,n){const i=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=Zm(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(U1(c));for(i.sort(R1),s=0;s<i.length;s++)t=P1(i[s],t);return t}function R1(r,e){return r.x-e.x}function P1(r,e){const t=L1(r,e);if(!t)return e;const n=Qm(t,r);return rs(n,n.next),rs(t,t.next)}function L1(r,e){let t=e,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===s))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let u=1/0,h;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&Fs(a<c?s:n,a,l,c,a<c?n:s,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(s-t.x),so(t,r)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&D1(i,t)))&&(i=t,u=h)),t=t.next;while(t!==o);return i}function D1(r,e){return Ft(r.prev,r,e.prev)<0&&Ft(e.next,r,r.next)<0}function I1(r,e,t,n){let i=r;do i.z===0&&(i.z=eh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,N1(i)}function N1(r){let e,t,n,i,s,a,o,l,c=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(a>1);return r}function eh(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function U1(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Fs(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function O1(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!F1(r,e)&&(so(r,e)&&so(e,r)&&k1(r,e)&&(Ft(r.prev,r,e.prev)||Ft(r,e.prev,e))||Yl(r,e)&&Ft(r.prev,r,r.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Yl(r,e){return r.x===e.x&&r.y===e.y}function Jm(r,e,t,n){const i=tl(Ft(r,e,t)),s=tl(Ft(r,e,n)),a=tl(Ft(t,n,r)),o=tl(Ft(t,n,e));return!!(i!==s&&a!==o||i===0&&el(r,t,e)||s===0&&el(r,n,e)||a===0&&el(t,r,n)||o===0&&el(t,e,n))}function el(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function tl(r){return r>0?1:r<0?-1:0}function F1(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Jm(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function so(r,e){return Ft(r.prev,r,r.next)<0?Ft(r,e,r.next)>=0&&Ft(r,r.prev,e)>=0:Ft(r,e,r.prev)<0||Ft(r,r.next,e)<0}function k1(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Qm(r,e){const t=new th(r.i,r.x,r.y),n=new th(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Nf(r,e,t,n){const i=new th(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ao(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function th(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function B1(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class Xa{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Xa.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Uf(e),Of(n,e);let a=e.length;t.forEach(Uf);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Of(n,t[l]);const o=b1.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Uf(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Of(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Vh extends Vt{constructor(e=new Km([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new vt(i,3)),this.setAttribute("uv",new vt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:z1;let x,M=!1,E,v,b,A;m&&(x=m.getSpacedPoints(u),M=!0,f=!1,E=m.computeFrenetFrames(u,!1),v=new z,b=new z,A=new z),f||(p=0,d=0,_=0,g=0);const w=o.extractPoints(c);let y=w.shape;const C=w.holes;if(!Xa.isClockWise(y)){y=y.reverse();for(let P=0,ne=C.length;P<ne;P++){const ie=C[P];Xa.isClockWise(ie)&&(C[P]=ie.reverse())}}const U=Xa.triangulateShape(y,C),B=y;for(let P=0,ne=C.length;P<ne;P++){const ie=C[P];y=y.concat(ie)}function N(P,ne,ie){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(ne,ie)}const O=y.length,H=U.length;function k(P,ne,ie){let de,te,G;const fe=P.x-ne.x,ye=P.y-ne.y,D=ie.x-P.x,T=ie.y-P.y,F=fe*fe+ye*ye,Y=fe*T-ye*D;if(Math.abs(Y)>Number.EPSILON){const Z=Math.sqrt(F),J=Math.sqrt(D*D+T*T),be=ne.x-ye/Z,ce=ne.y+fe/Z,Me=ie.x-T/J,Be=ie.y+D/J,he=((Me-be)*T-(Be-ce)*D)/(fe*T-ye*D);de=be+fe*he-P.x,te=ce+ye*he-P.y;const Se=de*de+te*te;if(Se<=2)return new _e(de,te);G=Math.sqrt(Se/2)}else{let Z=!1;fe>Number.EPSILON?D>Number.EPSILON&&(Z=!0):fe<-Number.EPSILON?D<-Number.EPSILON&&(Z=!0):Math.sign(ye)===Math.sign(T)&&(Z=!0),Z?(de=-ye,te=fe,G=Math.sqrt(F)):(de=fe,te=ye,G=Math.sqrt(F/2))}return new _e(de/G,te/G)}const re=[];for(let P=0,ne=B.length,ie=ne-1,de=P+1;P<ne;P++,ie++,de++)ie===ne&&(ie=0),de===ne&&(de=0),re[P]=k(B[P],B[ie],B[de]);const I=[];let Q,ge=re.concat();for(let P=0,ne=C.length;P<ne;P++){const ie=C[P];Q=[];for(let de=0,te=ie.length,G=te-1,fe=de+1;de<te;de++,G++,fe++)G===te&&(G=0),fe===te&&(fe=0),Q[de]=k(ie[de],ie[G],ie[fe]);I.push(Q),ge=ge.concat(Q)}for(let P=0;P<p;P++){const ne=P/p,ie=d*Math.cos(ne*Math.PI/2),de=_*Math.sin(ne*Math.PI/2)+g;for(let te=0,G=B.length;te<G;te++){const fe=N(B[te],re[te],de);ee(fe.x,fe.y,-ie)}for(let te=0,G=C.length;te<G;te++){const fe=C[te];Q=I[te];for(let ye=0,D=fe.length;ye<D;ye++){const T=N(fe[ye],Q[ye],de);ee(T.x,T.y,-ie)}}}const xe=_+g;for(let P=0;P<O;P++){const ne=f?N(y[P],ge[P],xe):y[P];M?(b.copy(E.normals[0]).multiplyScalar(ne.x),v.copy(E.binormals[0]).multiplyScalar(ne.y),A.copy(x[0]).add(b).add(v),ee(A.x,A.y,A.z)):ee(ne.x,ne.y,0)}for(let P=1;P<=u;P++)for(let ne=0;ne<O;ne++){const ie=f?N(y[ne],ge[ne],xe):y[ne];M?(b.copy(E.normals[P]).multiplyScalar(ie.x),v.copy(E.binormals[P]).multiplyScalar(ie.y),A.copy(x[P]).add(b).add(v),ee(A.x,A.y,A.z)):ee(ie.x,ie.y,h/u*P)}for(let P=p-1;P>=0;P--){const ne=P/p,ie=d*Math.cos(ne*Math.PI/2),de=_*Math.sin(ne*Math.PI/2)+g;for(let te=0,G=B.length;te<G;te++){const fe=N(B[te],re[te],de);ee(fe.x,fe.y,h+ie)}for(let te=0,G=C.length;te<G;te++){const fe=C[te];Q=I[te];for(let ye=0,D=fe.length;ye<D;ye++){const T=N(fe[ye],Q[ye],de);M?ee(T.x,T.y+x[u-1].y,x[u-1].x+ie):ee(T.x,T.y,h+ie)}}}X(),$();function X(){const P=i.length/3;if(f){let ne=0,ie=O*ne;for(let de=0;de<H;de++){const te=U[de];me(te[2]+ie,te[1]+ie,te[0]+ie)}ne=u+p*2,ie=O*ne;for(let de=0;de<H;de++){const te=U[de];me(te[0]+ie,te[1]+ie,te[2]+ie)}}else{for(let ne=0;ne<H;ne++){const ie=U[ne];me(ie[2],ie[1],ie[0])}for(let ne=0;ne<H;ne++){const ie=U[ne];me(ie[0]+O*u,ie[1]+O*u,ie[2]+O*u)}}n.addGroup(P,i.length/3-P,0)}function $(){const P=i.length/3;let ne=0;le(B,ne),ne+=B.length;for(let ie=0,de=C.length;ie<de;ie++){const te=C[ie];le(te,ne),ne+=te.length}n.addGroup(P,i.length/3-P,1)}function le(P,ne){let ie=P.length;for(;--ie>=0;){const de=ie;let te=ie-1;te<0&&(te=P.length-1);for(let G=0,fe=u+p*2;G<fe;G++){const ye=O*G,D=O*(G+1),T=ne+de+ye,F=ne+te+ye,Y=ne+te+D,Z=ne+de+D;Te(T,F,Y,Z)}}}function ee(P,ne,ie){l.push(P),l.push(ne),l.push(ie)}function me(P,ne,ie){Re(P),Re(ne),Re(ie);const de=i.length/3,te=S.generateTopUV(n,i,de-3,de-2,de-1);Ue(te[0]),Ue(te[1]),Ue(te[2])}function Te(P,ne,ie,de){Re(P),Re(ne),Re(de),Re(ne),Re(ie),Re(de);const te=i.length/3,G=S.generateSideWallUV(n,i,te-6,te-3,te-2,te-1);Ue(G[0]),Ue(G[1]),Ue(G[3]),Ue(G[1]),Ue(G[2]),Ue(G[3])}function Re(P){i.push(l[P*3+0]),i.push(l[P*3+1]),i.push(l[P*3+2])}function Ue(P){s.push(P.x),s.push(P.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return H1(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Qu[i.type]().fromJSON(i)),new Vh(n,e.options)}}const z1={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new _e(s,a),new _e(o,l),new _e(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],_=e[i*3+2],g=e[s*3],p=e[s*3+1],m=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new _e(a,1-l),new _e(c,1-h),new _e(f,1-_),new _e(g,1-m)]:[new _e(o,1-l),new _e(u,1-h),new _e(d,1-_),new _e(p,1-m)]}};function H1(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class $l extends Gh{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new $l(e.radius,e.detail)}}class jl extends Vt{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],u=[];let h=e;const f=(t-e)/i,d=new z,_=new _e;for(let g=0;g<=i;g++){for(let p=0;p<=n;p++){const m=s+p/n*a;d.x=h*Math.cos(m),d.y=h*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),_.x=(d.x/t+1)/2,_.y=(d.y/t+1)/2,u.push(_.x,_.y)}h+=f}for(let g=0;g<i;g++){const p=g*(n+1);for(let m=0;m<n;m++){const S=m+p,x=S,M=S+n+1,E=S+n+2,v=S+1;o.push(x,M,v),o.push(M,E,v)}}this.setIndex(o),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ci extends Vt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new z,f=new z,d=[],_=[],g=[],p=[];for(let m=0;m<=n;m++){const S=[],x=m/n;let M=0;m===0&&a===0?M=.5/t:m===n&&l===Math.PI&&(M=-.5/t);for(let E=0;E<=t;E++){const v=E/t;h.x=-e*Math.cos(i+v*s)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(i+v*s)*Math.sin(a+x*o),_.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),p.push(v+M,1-x),S.push(c++)}u.push(S)}for(let m=0;m<n;m++)for(let S=0;S<t;S++){const x=u[m][S+1],M=u[m][S],E=u[m+1][S],v=u[m+1][S+1];(m!==0||a>0)&&d.push(x,M,v),(m!==n-1||l<Math.PI)&&d.push(M,E,v)}this.setIndex(d),this.setAttribute("position",new vt(_,3)),this.setAttribute("normal",new vt(g,3)),this.setAttribute("uv",new vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oa extends Vt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],u=new z,h=new z,f=new z;for(let d=0;d<=n;d++)for(let _=0;_<=i;_++){const g=_/i*s,p=d/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(g),h.y=(e+t*Math.cos(p))*Math.sin(g),h.z=t*Math.sin(p),o.push(h.x,h.y,h.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(_/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let _=1;_<=i;_++){const g=(i+1)*d+_-1,p=(i+1)*(d-1)+_-1,m=(i+1)*(d-1)+_,S=(i+1)*d+_;a.push(g,p,S),a.push(p,m,S)}this.setIndex(a),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class We extends os{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tm,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wh extends We{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return sn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Kl extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class G1 extends Kl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Wc=new At,Ff=new z,kf=new z;class eg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bh,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ff.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ff),kf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kf),t.updateMatrixWorld(),Wc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Bf=new At,xa=new z,Xc=new z;class V1 extends eg{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),xa.setFromMatrixPosition(e.matrixWorld),n.position.copy(xa),Xc.copy(n.position),Xc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Xc),n.updateMatrixWorld(),i.makeTranslation(-xa.x,-xa.y,-xa.z),Bf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bf)}}class di extends Kl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new V1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class W1 extends eg{constructor(){super(new km(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zi extends Kl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new W1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ji extends Kl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ni{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=zf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function zf(){return(typeof performance>"u"?Date:performance).now()}const Hf=new At;class Xh{constructor(e,t,n=0,i=1/0){this.ray=new Wl(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new kh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hf),this}intersectObject(e,t=!0,n=[]){return nh(e,this,n,t),n.sort(Gf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)nh(e[i],this,n,t);return n.sort(Gf),n}}function Gf(r,e){return r.distance-e.distance}function nh(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)nh(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rh);function X1(r,e){const t="Hi, I am Mritunjay.";if("speechSynthesis"in window){window.speechSynthesis.cancel();const n=new SpeechSynthesisUtterance(t);n.rate=1,n.pitch=1.05;const s=window.speechSynthesis.getVoices().find(a=>a.lang.startsWith("en")&&!a.name.includes("Google"));s&&(n.voice=s),n.onstart=()=>{qc(t),typeof r=="function"&&r()},n.onend=()=>{setTimeout(Yc,1200)},n.onerror=()=>{qc(t),setTimeout(Yc,2400)},window.speechSynthesis.speak(n)}else qc(t),setTimeout(Yc,2800)}function qc(r){let e=document.getElementById("avatar-speech-bubble");e||(e=document.createElement("div"),e.id="avatar-speech-bubble",e.className="avatar-speech-bubble",document.body.appendChild(e)),e.innerHTML=`<span class="speech-icon">💬</span> <strong>Mritunjay:</strong> "${r}"`,e.classList.add("visible")}function Yc(){const r=document.getElementById("avatar-speech-bubble");r&&r.classList.remove("visible")}let _l=null;function q1(){let r=document.getElementById("eye-camera-modal");if(!r){r=document.createElement("div"),r.id="eye-camera-modal",r.className="camera-modal-overlay",r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-label","Camera Interface"),r.innerHTML=`
      <div class="camera-modal-card">
        <div class="camera-modal-header">
          <div class="camera-hud-title">
            <span class="hud-blink-dot"></span>
            <span>OPTICAL SYSTEM / OCULAR INTERFACE</span>
          </div>
          <button class="camera-modal-close" id="camera-modal-close-btn" aria-label="Close camera">✕</button>
        </div>

        <div class="camera-video-wrapper">
          <div class="camera-reticle">
            <div class="reticle-corner top-left"></div>
            <div class="reticle-corner top-right"></div>
            <div class="reticle-corner bottom-left"></div>
            <div class="reticle-corner bottom-right"></div>
            <div class="reticle-crosshair"></div>
          </div>
          <video id="eye-camera-video" autoplay playsinline muted></video>
          <div class="camera-scanline"></div>
          <div class="camera-status-hud" id="camera-status-hud">
            <span>STATUS: INITIALIZING...</span>
          </div>
        </div>

        <div class="camera-modal-footer">
          <p class="camera-privacy-note">
            🔒 <strong>Privacy Assurance:</strong> Camera feed runs 100% locally in your browser memory. No video or frames are recorded, stored, or sent to any server.
          </p>
          <div class="camera-controls">
            <button class="btn ghost small" id="camera-stop-btn">Stop Camera</button>
            <button class="btn primary small" id="camera-close-btn">Close HUD</button>
          </div>
        </div>
      </div>
    `,document.body.appendChild(r);const e=()=>{Vf(),r.classList.remove("open")};r.querySelector("#camera-modal-close-btn").addEventListener("click",e),r.querySelector("#camera-close-btn").addEventListener("click",e),r.querySelector("#camera-stop-btn").addEventListener("click",()=>{Vf();const t=r.querySelector("#camera-status-hud");t&&(t.innerHTML="<span>STATUS: FEED STOPPED BY USER</span>")}),r.addEventListener("click",t=>{t.target===r&&e()}),window.addEventListener("keydown",t=>{t.key==="Escape"&&r.classList.contains("open")&&e()})}r.classList.add("open"),Y1(r)}async function Y1(r){const e=r.querySelector("#eye-camera-video"),t=r.querySelector("#camera-status-hud");if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){t.innerHTML='<span class="status-error">CAMERA API NOT SUPPORTED IN THIS BROWSER</span>';return}t.innerHTML='<span class="status-pending">AWAITING CAMERA PERMISSION...</span>';try{const n=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1280},height:{ideal:720},facingMode:"user"},audio:!1});_l=n,e.srcObject=n,t.innerHTML='<span class="status-active">FEED ACTIVE • 60 FPS • LOCAL ONLY</span>'}catch(n){console.warn("Camera access denied or unavailable:",n),t.innerHTML=`
      <span class="status-error">
        PERMISSION DENIED OR NO WEBCAM DETECTED.
        <small style="display:block;margin-top:4px;color:#a6a1b8;">
          Allow camera access in your browser address bar permissions to view the ocular feed.
        </small>
      </span>
    `}}function Vf(){_l&&(_l.getTracks().forEach(e=>{try{e.stop()}catch(t){console.error("Error stopping track:",t)}}),_l=null);const r=document.getElementById("eye-camera-video");r&&(r.srcObject=null)}function ni(r,e,t){const n=document.createElement("canvas");n.width=r,n.height=e;const i=n.getContext("2d");i.imageSmoothingEnabled=!1,t(i,r,e);const s=new Xm(n);return s.magFilter=In,s.minFilter=In,s.colorSpace=Tn,s}function $1(){const r="#cfa07e",e="#b88a68",t="#17141b",n="#26222c",i="#101217",s="#090a0d",a="#00ff73",o="#f8fafc",l="#1b1720";function c(v,b,A){v.fillStyle=r,v.fillRect(0,0,b,A),v.fillStyle=t,v.fillRect(0,0,b,24),v.fillRect(0,24,16,12),v.fillRect(16,24,18,18),v.fillRect(34,24,24,8),v.fillRect(58,24,20,16),v.fillRect(78,24,18,22),v.fillRect(96,0,32,36),v.fillRect(112,0,16,42),v.fillStyle=n,v.fillRect(20,8,30,8),v.fillRect(70,8,30,8),v.fillStyle=e,v.fillRect(16,80,16,8),v.fillRect(96,80,16,8)}const u=ni(128,128,(v,b,A)=>{c(v,b,A),v.fillStyle=t,v.fillRect(24,46,26,8),v.fillRect(78,46,26,8),v.fillStyle=o,v.fillRect(26,56,22,16),v.fillRect(80,56,22,16),v.fillStyle=l,v.fillRect(32,56,14,16),v.fillRect(82,56,14,16),v.fillStyle=o,v.fillRect(40,58,5,6),v.fillRect(90,58,5,6),v.fillStyle=e,v.fillRect(60,76,8,8),v.fillStyle="#6b473e",v.fillRect(52,94,24,5)}),h=ni(128,128,(v,b,A)=>{c(v,b,A),v.fillStyle=t,v.fillRect(24,44,26,8),v.fillRect(78,44,26,8),v.fillStyle=o,v.fillRect(26,54,22,16),v.fillRect(80,54,22,16),v.fillStyle=l,v.fillRect(32,54,14,16),v.fillRect(82,54,14,16),v.fillStyle=o,v.fillRect(40,56,5,6),v.fillRect(90,56,5,6),v.fillStyle="#6b473e",v.fillRect(48,92,32,8),v.fillStyle=o,v.fillRect(52,94,24,4)}),f=ni(128,128,(v,b,A)=>{c(v,b,A),v.fillStyle=t,v.fillRect(24,40,26,8),v.fillRect(78,40,26,8),v.fillStyle=t,v.fillRect(26,62,24,8),v.fillRect(34,54,12,8),v.fillRect(78,62,24,8),v.fillRect(82,54,12,8),v.fillStyle="#6b473e",v.fillRect(46,88,36,14),v.fillStyle=o,v.fillRect(50,90,28,6)}),d=ni(128,128,(v,b,A)=>{c(v,b,A),v.fillStyle=t,v.fillRect(24,48,28,8),v.fillRect(76,48,28,8),v.fillStyle=o,v.fillRect(26,58,22,12),v.fillRect(80,58,22,12),v.fillStyle=l,v.fillRect(34,58,12,12),v.fillRect(82,58,12,12),v.fillStyle="#6b473e",v.fillRect(50,94,28,5)}),_=ni(128,128,(v,b,A)=>{v.fillStyle=t,v.fillRect(0,0,b,A),v.fillStyle=n;for(let w=8;w<A;w+=24)for(let y=8;y<b;y+=32)v.fillRect(y,w,16,12),v.fillRect(y+8,w+8,12,8)}),g=ni(128,128,(v,b,A)=>{v.fillStyle=i,v.fillRect(0,0,b,A),v.fillStyle=s,v.beginPath(),v.moveTo(34,0),v.lineTo(64,30),v.lineTo(94,0),v.fill(),v.fillStyle="#ffffff",v.fillRect(58,4,12,10),v.fillStyle="#e2e8f0",v.fillRect(44,26,4,34),v.fillRect(80,26,4,34),v.fillStyle=a,v.fillRect(43,60,6,12),v.fillRect(79,60,6,12),v.fillStyle=a,v.fillRect(46,50,7,24),v.fillRect(75,50,7,24),v.fillRect(53,56,6,8),v.fillRect(69,56,6,8),v.fillRect(59,62,10,8),v.strokeStyle=s,v.lineWidth=4,v.strokeRect(24,88,80,36),v.fillStyle=s,v.fillRect(0,116,b,12)}),p=ni(128,128,(v,b,A)=>{v.fillStyle=i,v.fillRect(0,0,b,A),v.fillStyle=s,v.fillRect(20,4,88,30),v.fillRect(32,34,64,8),v.fillStyle=a,v.fillRect(38,52,10,36),v.fillRect(80,52,10,36),v.fillRect(48,60,8,12),v.fillRect(72,60,8,12),v.fillRect(56,70,16,10),v.fillStyle=s,v.fillRect(0,116,b,12)}),m=ni(64,128,(v,b,A)=>{v.fillStyle=i,v.fillRect(0,0,b,A),v.fillStyle=a,v.fillRect(26,8,12,88),v.fillRect(16,64,32,10),v.fillStyle=s,v.fillRect(0,96,b,10),v.fillStyle=r,v.fillRect(0,106,b,22)}),S=ni(64,128,(v,b,A)=>{v.fillStyle=i,v.fillRect(0,0,b,A),v.fillStyle=s,v.fillRect(0,96,b,10),v.fillStyle=r,v.fillRect(0,106,b,22)}),x=ni(64,128,(v,b,A)=>{v.fillStyle="#111319",v.fillRect(0,0,b,A),v.fillStyle="#090a0d",v.fillRect(10,30,44,40),v.fillStyle=a,v.fillRect(10,48,44,6)}),M=ni(64,128,(v,b,A)=>{v.fillStyle="#111319",v.fillRect(0,0,b,A),v.fillStyle="#090a0d",v.fillRect(8,26,48,46),v.fillStyle=a,v.fillRect(8,46,48,8),v.fillRect(40,46,12,16)}),E=ni(64,64,(v,b,A)=>{v.fillStyle="#f8fafc",v.fillRect(0,0,b,44),v.fillStyle="#111319",v.fillRect(20,4,24,28),v.fillStyle="#f8fafc",v.fillRect(22,10,20,4),v.fillRect(22,18,20,4),v.fillStyle=a,v.fillRect(4,32,12,8),v.fillRect(48,32,12,8),v.fillStyle="#e2e8f0",v.fillRect(0,44,b,10),v.fillStyle=a,v.fillRect(0,54,b,10)});return{faces:{normal:u,smile:h,happy:f,serious:d},hair:_,torsoFront:g,torsoBack:p,armOuter:m,armInner:S,legFront:x,legOuter:M,shoeFront:E}}function j1(r,e){if(!r)return;const t=r.parentElement,n=new Di,i=new Bt(34,1,.1,100);i.position.set(0,1.25,8.4);const s=new Li({canvas:r,antialias:!0,alpha:!0});s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.outputColorSpace=Tn,s.shadowMap.enabled=!0;const a=new G1(10859772,329490,2);n.add(a);const o=new Zi(8490232,3.2);o.position.set(3.5,6,5),o.castShadow=!0,n.add(o);const l=new di(65395,20,12);l.position.set(-3.5,2,2.5),n.add(l);const c=new di(3718648,14,10);c.position.set(3.5,-1,1.5),n.add(c);const u=new bt;n.add(u);const h=$1();function f(F,Y,Z,J,be,ce,Me,Be){const he=new Tt(be,ce,Me),Se=new Ne(he,Be);return Se.position.set(Y,Z,J),Se.castShadow=!0,Se.receiveShadow=!0,F.add(Se),Se}const d=new bt;d.position.set(0,.52,0),u.add(d);const _=new We({map:h.hair,roughness:.8}),g=new We({map:h.faces.normal,roughness:.5}),p=new We({color:13607038,roughness:.6}),S=f(d,0,.28,0,1.08,1.08,1,[_,_,_,p,g,_]);S.userData={hotspot:"head",label:"Head: Education & Qualifications"};function x(F){h.faces[F]&&(g.map=h.faces[F],g.needsUpdate=!0)}const M=new We({color:1512475,roughness:.9});[[-.52,.74,.22,.28,.28,.28],[-.28,.78,.36,.3,.26,.26],[-.02,.76,.38,.32,.28,.26],[.26,.75,.34,.3,.26,.26],[.5,.7,.24,.28,.28,.28],[-.46,.54,.35,.24,.24,.26],[-.14,.6,.44,.26,.22,.22],[.18,.59,.44,.26,.22,.22],[.44,.53,.36,.24,.24,.26]].forEach(([F,Y,Z,J,be,ce])=>{f(d,F,Y,Z,J,be,ce,M)});const v=f(d,0,.34,.52,.75,.24,.05,new an({transparent:!0,opacity:0}));v.userData={hotspot:"eyes",label:"Eyes: Launch Camera Interface"};const b=f(d,0,.12,.52,.45,.18,.05,new an({transparent:!0,opacity:0}));b.userData={hotspot:"mouth",label:'Mouth: Speak "Hi, I am Mritunjay"'};const A=new bt;A.position.set(0,-.45,0),u.add(A);const w=new We({color:1053207,roughness:.7}),y=new We({map:h.torsoFront,roughness:.6}),C=new We({map:h.torsoBack,roughness:.6}),U=f(A,0,0,0,1.12,1.18,.62,[w,w,w,w,y,C]);U.userData={hotspot:"chest",label:"Chest: View Contact & Socials"};const B=new bt;B.position.set(-.82,-.48,0),B.rotation.z=-.12,u.add(B);const N=new We({map:h.armOuter,roughness:.6}),O=new We({map:h.armInner,roughness:.6});f(B,0,0,0,.36,1.08,.44,[O,N,w,p,O,O]);const k=new bt;k.position.set(.82,.05,0),u.add(k);const I=f(k,0,-.53,0,.36,1.08,.44,[N,O,w,p,O,O]);I.rotation.z=.12,I.userData={hotspot:"hand",label:"Right Hand: Wave Hello!"};const Q=new We({map:h.legFront,roughness:.8}),ge=new We({map:h.legOuter,roughness:.8}),xe=new We({color:1119001,roughness:.8});f(u,-.31,-1.42,0,.44,1.02,.46,[xe,ge,xe,xe,Q,xe]),f(u,.31,-1.42,0,.44,1.02,.46,[ge,xe,xe,xe,Q,xe]);const le=new We({map:h.shoeFront,roughness:.4}),ee=new We({color:16317180,roughness:.4}),me=new We({color:65395,roughness:.5}),Te=[ee,ee,ee,me,le,ee];f(u,-.31,-1.94,.12,.48,.26,.62,Te),f(u,.31,-1.94,.12,.48,.26,.62,Te);const Re=new bt;n.add(Re);for(let F=0;F<8;F++){const Y=F*Math.PI/4,Z=f(Re,Math.cos(Y)*1.25,-2.45+Math.sin(F*2)*.06,Math.sin(Y)*.72,.82,.32,.72,new We({color:F%2===0?1976635:988970,roughness:.9}));Z.rotation.y=Y}f(Re,0,-2.62,0,1.85,.32,1.45,new We({color:593174,roughness:.9}));for(let F=0;F<7;F++){const Y=f(Re,Math.sin(F*2.4)*1.35,-2.22+F%2*.18,Math.cos(F*1.7)*.72,.14,.24,.14,new We({color:65395,emissive:65395,emissiveIntensity:2.2}));Y.rotation.y=F}const Ue=new Vt,P=[];for(let F=0;F<240;F++)P.push((Math.random()-.5)*9,(Math.random()-.5)*7,(Math.random()-.5)*5-1);Ue.setAttribute("position",new vt(P,3)),n.add(new aa(Ue,new is({color:65395,size:.02,transparent:!0,opacity:.6})));const ne=new Xh,ie=new _e(100,100),de=[S,v,b,U,I];function te(){x("happy"),xi.killTweensOf(k.rotation),xi.to(k.rotation,{z:4.15,x:.2,duration:.58,yoyo:!0,repeat:5,ease:"sine.inOut",onComplete:()=>{xi.to(k.rotation,{z:0,x:0,duration:.4}),setTimeout(()=>x("normal"),1200)}})}function G(F){if(F==="head"){const Y=document.getElementById("education-card")||document.getElementById("about");Y&&Y.scrollIntoView({behavior:"smooth",block:"center"}),$c("Education Profile: Class 10 student developing coding & electronics builds.")}else if(F==="eyes")x("serious"),q1(),setTimeout(()=>x("normal"),4e3);else if(F==="mouth")x("smile"),X1(()=>{setTimeout(()=>x("normal"),2500)});else if(F==="hand")te(),$c("Mritunjay waves hello! 👋");else if(F==="chest"){const Y=document.getElementById("contact");Y&&Y.scrollIntoView({behavior:"smooth"}),$c("Contact Section: Connect via GitHub, LinkedIn, or Email.")}}r.addEventListener("pointermove",F=>{const Y=r.getBoundingClientRect();ie.x=(F.clientX-Y.left)/Y.width*2-1,ie.y=-((F.clientY-Y.top)/Y.height*2-1)}),r.addEventListener("pointerdown",()=>{var Y,Z;ne.setFromCamera(ie,i);const F=ne.intersectObjects(de,!0);if(F.length>0){let J=F[0].object;for(;J&&!((Y=J.userData)!=null&&Y.hotspot)&&J.parent;)J=J.parent;J&&((Z=J.userData)!=null&&Z.hotspot)&&G(J.userData.hotspot)}});function fe(){const F=t.clientWidth,Y=t.clientHeight;s.setSize(F,Y,!1),i.aspect=F/Y,i.updateProjectionMatrix()}new ResizeObserver(fe).observe(t),fe();const ye=new Ni;let D=null;function T(){var Z,J;D=requestAnimationFrame(T);const F=ye.getElapsedTime();d.rotation.y=Pt.lerp(d.rotation.y,ie.x*.48,.06),d.rotation.x=Pt.lerp(d.rotation.x,-ie.y*.22,.06),u.position.y=Math.sin(F*1.5)*.06,u.rotation.y=Pt.lerp(u.rotation.y,ie.x*.08,.03),Re.rotation.y=Math.sin(F*.4)*.05,ne.setFromCamera(ie,i);const Y=ne.intersectObjects(de,!0);if(Y.length>0){r.style.cursor="pointer";let be=Y[0].object;for(;be&&!((Z=be.userData)!=null&&Z.label)&&be.parent;)be=be.parent;e&&((J=be==null?void 0:be.userData)!=null&&J.label)&&(e.textContent=be.userData.label,e.classList.add("visible"))}else r.style.cursor="default",e&&e.classList.remove("visible");s.render(n,i)}return D=requestAnimationFrame(T),{waveHand:te,handleAction:G,setExpression:x,dispose:()=>{D&&cancelAnimationFrame(D),s.dispose()}}}function $c(r){let e=document.getElementById("toast");e||(e=document.createElement("div"),e.id="toast",document.body.appendChild(e)),e.textContent=r,e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),2800)}function K1(r){r.innerHTML=`
    <div class="brain-visual-card">
      <div class="brain-canvas-wrapper">
        <canvas id="brain-core-canvas"></canvas>
        <div class="brain-hud-overlay">
          <div class="brain-status">
            <span class="hud-blink-dot purple"></span>
            <span>NEURAL CORE • LOGIC & PROBLEM SOLVING</span>
          </div>
          <span class="brain-node-counter">64 SYNAPTIC NODES ACTIVE</span>
        </div>
      </div>
      <div class="brain-info-dock">
        <h4></h4>
        <p></p>
      </div>
    </div>
  `;const e=r.querySelector("#brain-core-canvas"),t=e.getContext("2d");let n=0,i=0,s=null;function a(){const g=e.parentElement.getBoundingClientRect();n=g.width,i=Math.max(240,g.height||260),e.width=n*window.devicePixelRatio,e.height=i*window.devicePixelRatio,t.scale(window.devicePixelRatio,window.devicePixelRatio)}a(),window.addEventListener("resize",a);const o=56,l=[];for(let g=0;g<o;g++){const p=g<o/2,m=p?-1:1,S=Math.random(),x=Math.random()*Math.PI*2,M=Math.sqrt(S)*65,E=m*42+Math.cos(x)*M,v=Math.sin(x)*(M*.85);l.push({baseX:E,baseY:v,x:E,y:v,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,radius:Math.random()*2.2+1.8,pulsePhase:Math.random()*Math.PI*2,color:p?"#5b6bfc":"#aa5cf8"})}const c=[];function u(){if(l.length<2)return;const g=Math.floor(Math.random()*l.length),p=Math.floor(Math.random()*l.length);g!==p&&c.push({from:g,to:p,progress:0,speed:Math.random()*.02+.015})}setInterval(u,150);let h=0,f=0,d=!1;e.addEventListener("pointermove",g=>{const p=e.getBoundingClientRect();h=g.clientX-p.left-n/2,f=g.clientY-p.top-i/2,d=!0}),e.addEventListener("pointerleave",()=>{d=!1});function _(){t.clearRect(0,0,n,i);const g=n/2,p=i/2;l.forEach(m=>{if(m.pulsePhase+=.05,m.x+=m.vx,m.y+=m.vy,m.vx+=(m.baseX-m.x)*.03,m.vy+=(m.baseY-m.y)*.03,d){const S=h-m.x,x=f-m.y,M=Math.hypot(S,x);M<90&&M>2&&(m.vx+=S/M*.35,m.vy+=x/M*.35)}});for(let m=0;m<l.length;m++)for(let S=m+1;S<l.length;S++){const x=l[m],M=l[S],E=Math.hypot(x.x-M.x,x.y-M.y);if(E<46){const v=(1-E/46)*.45;t.strokeStyle=`rgba(168, 85, 247, ${v})`,t.lineWidth=1,t.beginPath(),t.moveTo(g+x.x,p+x.y),t.lineTo(g+M.x,p+M.y),t.stroke()}}for(let m=c.length-1;m>=0;m--){const S=c[m];if(S.progress+=S.speed,S.progress>=1){c.splice(m,1);continue}const x=l[S.from],M=l[S.to],E=g+x.x+(M.x-x.x)*S.progress,v=p+x.y+(M.y-x.y)*S.progress;t.fillStyle="#38bdf8",t.shadowColor="#38bdf8",t.shadowBlur=10,t.beginPath(),t.arc(E,v,2.8,0,Math.PI*2),t.fill(),t.shadowBlur=0}l.forEach(m=>{const S=Math.sin(m.pulsePhase)*.5+.5;t.fillStyle=m.color,t.shadowColor=m.color,t.shadowBlur=8*S+2,t.beginPath(),t.arc(g+m.x,p+m.y,m.radius,0,Math.PI*2),t.fill(),t.shadowBlur=0}),s=requestAnimationFrame(_)}return s=requestAnimationFrame(_),{dispose:()=>{s&&cancelAnimationFrame(s),window.removeEventListener("resize",a)}}}function Z1(r,e,t){if(!r)return;const n=r.parentElement,i=new Di,s=new Bt(42,1,.1,100);s.position.set(0,0,8.4);const a=new Li({canvas:r,antialias:!0,alpha:!0});a.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.add(new Ji(8490232,1.8));const o=new di(3718648,25,20);o.position.set(2,4,5),i.add(o);const l=[],c=[];Rl.forEach((S,x)=>{const M=x/Rl.length*Math.PI*2,E=2.8+x%2*.45,v=1.35+x%3*.2,b=Math.sin(M)*.8,A=new Wh({color:new Ye(S.color),metalness:.35,roughness:.2,clearcoat:1,clearcoatRoughness:.15,emissive:new Ye(S.accent),emissiveIntensity:.35}),w=new Ne(new $l(.38,2),A);w.position.set(Math.cos(M)*E,Math.sin(M*2)*v,b),w.userData={skill:S,base:w.position.clone(),index:x,baseScale:1},i.add(w),l.push(w);const y=new an({color:new Ye(S.color),transparent:!0,opacity:.5,side:ai}),C=new Ne(new oa(.5,.015,8,48),y);C.rotation.x=Math.PI/2.5,i.add(C),c.push(C)});for(let S=0;S<3;S++){const M=new ql(0,0,3.2+S*.4,1.5+S*.2,S*.8,S*.8+Math.PI*2,!1,0).getPoints(80).map(b=>new z(b.x,b.y,0)),E=new Vt().setFromPoints(M),v=new Wm({color:5195493,transparent:!0,opacity:.25});i.add(new c1(E,v))}const u=new Xh,h=new _e(100,100);let f=null,d=null;r.addEventListener("pointermove",S=>{const x=r.getBoundingClientRect();h.x=(S.clientX-x.left)/x.width*2-1,h.y=-((S.clientY-x.top)/x.height*2-1)}),r.addEventListener("pointerleave",()=>{h.set(100,100),f=null,e&&e.classList.remove("visible")}),r.addEventListener("pointerdown",()=>{u.setFromCamera(h,s);const S=u.intersectObjects(l);S.length>0&&(d=S[0].object)}),r.addEventListener("pointerup",()=>{d&&(typeof t=="function"&&t(d.userData.skill),d=null)});function _(){const S=n.clientWidth,x=n.clientHeight;a.setSize(S,x,!1),s.aspect=S/x,s.updateProjectionMatrix()}new ResizeObserver(_).observe(n),_();const g=new Ni;let p=null;function m(){var M;p=requestAnimationFrame(m);const S=g.getElapsedTime();u.setFromCamera(h,s),f=((M=u.intersectObjects(l)[0])==null?void 0:M.object)||null,l.forEach((E,v)=>{const b=S*.12+v/l.length*Math.PI*2,A=2.8+v%2*.45,w=1.35+v%3*.2;let y=Math.cos(b)*A,C=Math.sin(b*2)*w+Math.sin(S+v)*.08,L=Math.sin(b)*.8;if(h.x<5){const U=y-h.x*3.5,B=C-h.y*2.5,N=Math.hypot(U,B);N<1.6&&N>.01&&(y+=U/N*.35,C+=B/N*.35)}E.position.x=Pt.lerp(E.position.x,y,.08),E.position.y=Pt.lerp(E.position.y,C,.08),E.position.z=Pt.lerp(E.position.z,L,.08),E===f?(E.scale.setScalar(1.35),E.material.emissiveIntensity=1,c[v].scale.setScalar(1.35),c[v].material.opacity=1,e&&(e.innerHTML=`<strong>${E.userData.skill.name}</strong> • <small>${E.userData.skill.category}</small><p style="margin:4px 0 0;font-size:11px;color:#cbd5e1;">${E.userData.skill.description}</p>`,e.classList.add("visible")),r.style.cursor="pointer"):(E.scale.setScalar(1),E.material.emissiveIntensity=.35,c[v].scale.setScalar(1),c[v].material.opacity=.5),c[v].position.copy(E.position),c[v].rotation.z=S*.4+v}),f||(e&&e.classList.remove("visible"),r.style.cursor="grab"),a.render(i,s)}return p=requestAnimationFrame(m),{dispose:()=>{p&&cancelAnimationFrame(p),a.dispose()}}}function J1(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const n=t.getContext("2d"),i=n.createLinearGradient(0,0,0,1024);i.addColorStop(0,"#020b18"),i.addColorStop(.5,"#041328"),i.addColorStop(1,"#020b18"),n.fillStyle=i,n.fillRect(0,0,2048,1024),n.fillStyle="#06203d";for(let u=0;u<40;u++){const h=Math.random()*2048,f=Math.random()*1024;n.beginPath(),n.arc(h,f,Math.random()*80+30,0,Math.PI*2),n.fill()}n.fillStyle="#0d2818",n.strokeStyle="#1b4d2e",n.lineWidth=3;function s(u){return(u+180)/360*2048}function a(u){return(90-u)/180*1024}function o(u,h="#0f3820"){n.fillStyle=h,n.beginPath(),u.forEach(([f,d],_)=>{const g=s(f),p=a(d);_===0?n.moveTo(g,p):n.lineTo(g,p)}),n.closePath(),n.fill(),n.stroke()}o([[-168,66],[-140,70],[-120,72],[-80,72],[-60,60],[-55,48],[-65,44],[-75,38],[-80,26],[-82,23],[-97,20],[-105,23],[-115,30],[-124,38],[-125,50],[-135,58],[-165,60]]),o([[-80,10],[-74,12],[-60,8],[-50,-2],[-35,-6],[-38,-18],[-48,-28],[-56,-36],[-68,-54],[-75,-50],[-72,-35],[-80,-10]]),o([[-10,36],[0,42],[5,44],[15,40],[25,38],[28,42],[30,46],[32,55],[25,62],[15,60],[5,52],[-4,48],[-8,44]]),o([[-5,50],[1,52],[0,58],[-6,58]]),o([[-17,15],[-12,28],[-5,36],[10,37],[25,32],[32,31],[42,12],[51,10],[40,-5],[35,-20],[28,-34],[18,-34],[12,-18],[8,4],[0,6],[-14,8]]),o([[32,31],[40,38],[50,42],[60,50],[80,65],[110,70],[140,70],[170,65],[145,45],[130,32],[120,22],[108,12],[100,4],[90,22],[80,12],[76,8],[72,20],[68,25],[58,24],[48,30]]),o([[68,24],[73,20],[77,8],[80,13],[88,22],[85,27],[72,28]],"#154a2b"),o([[114,-22],[122,-14],[135,-12],[148,-20],[152,-32],[145,-38],[130,-32],[116,-35]]),[[78,27],[77,28],[72,19],[80,13],[88,22],[31,30],[30,31],[2,48],[-.1,51],[13,52],[4,52],[-74,40],[-71,42],[-87,41],[-118,34],[-122,37],[116,40],[121,31],[114,22],[139,35]].forEach(([u,h])=>{const f=s(u),d=a(h),_=n.createRadialGradient(f,d,1,f,d,12);_.addColorStop(0,"#ffd166"),_.addColorStop(.4,"#38bdf8"),_.addColorStop(1,"transparent"),n.fillStyle=_,n.beginPath(),n.arc(f,d,12,0,Math.PI*2),n.fill(),n.fillStyle="#ffffff",n.beginPath(),n.arc(f,d,2,0,Math.PI*2),n.fill()}),n.strokeStyle="rgba(56, 189, 248, 0.08)",n.lineWidth=1;for(let u=-60;u<=60;u+=30){const h=a(u);n.beginPath(),n.moveTo(0,h),n.lineTo(2048,h),n.stroke()}for(let u=-150;u<=180;u+=30){const h=s(u);n.beginPath(),n.moveTo(h,0),n.lineTo(h,1024),n.stroke()}const c=new Xm(t);return c.colorSpace=Tn,c}function Q1(r,e){if(!r)return;const t=r.parentElement,n=new Di,i=new Bt(40,1,.1,100);i.position.set(0,1.2,7.8);const s=new Li({canvas:r,antialias:!0,alpha:!0});s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.outputColorSpace=Tn,s.shadowMap.enabled=!0,n.add(new Ji(8298708,1.2));const a=new Zi(16775149,3.2);a.position.set(5,4,6),a.castShadow=!0,n.add(a);const o=new di(3718648,12,14);o.position.set(-5,-2,-3),n.add(o);const l=new bt;n.add(l);const c=2.45,u=J1(),h=new We({map:u,roughness:.65,metalness:.15}),f=new Ne(new ci(c,64,48),h);f.receiveShadow=!0,l.add(f);const d=new an({color:3718648,transparent:!0,opacity:.15,side:Rn}),_=new Ne(new ci(c*1.04,48,36),d);l.add(_);function g(N,O,H){const k=(90-N)*(Math.PI/180),re=(O+180)*(Math.PI/180);return new z(-H*Math.sin(k)*Math.cos(re),H*Math.cos(k),H*Math.sin(k)*Math.sin(re))}function p(N,O,H,k,re,I,Q,ge,xe={}){const X=new Tt(re,I,Q),$=new We({color:ge,roughness:.6,...xe}),le=new Ne(X,$);return le.position.set(O,H,k),N.add(le),le}const m=[{id:"taj-mahal",name:"Taj Mahal",location:"Agra, India",lat:27.1751,lon:78.0421,description:"Architectural symmetry & precision engineering.",color:"#f8fafc"},{id:"pyramids",name:"Pyramids of Giza",location:"Cairo, Egypt",lat:29.9792,lon:31.1342,description:"Timeless structural bedrock & mathematical alignment.",color:"#f59e0b"},{id:"eiffel",name:"Eiffel Tower",location:"Paris, France",lat:48.8584,lon:2.2945,description:"Wrought-iron structural lattice & communication spire.",color:"#94a3b8"},{id:"liberty",name:"Statue of Liberty",location:"New York, USA",lat:40.6892,lon:-74.0445,description:"Iconic beacon of innovation, discovery & aspiration.",color:"#10b981"},{id:"great-wall",name:"Great Wall of China",location:"Northern China",lat:40.4319,lon:116.5704,description:"Resilient network spanning diverse physical terrain.",color:"#cbd5e1"}],S=[];m.forEach(N=>{const O=g(N.lat,N.lon,c),H=O.clone().normalize(),k=new bt;k.position.copy(O),k.quaternion.setFromUnitVectors(new z(0,1,0),H),k.userData=N,l.add(k);const re=new an({color:new Ye(N.color),side:ai,transparent:!0,opacity:.8}),I=new Ne(new jl(.08,.12,32),re);I.rotation.x=-Math.PI/2,I.position.y=.01,k.add(I),S.push(I);const Q=new an({color:new Ye(N.color),transparent:!0,opacity:.35}),ge=new Ne(new An(.015,.04,.6,12),Q);if(ge.position.y=.3,k.add(ge),N.id==="taj-mahal"){p(k,0,.04,0,.32,.06,.32,16317180),p(k,0,.14,0,.22,.16,.22,16317180);const xe=new Ne(new ci(.09,16,12),new We({color:16777215,roughness:.2}));xe.position.y=.26,xe.scale.set(1,1.3,1),k.add(xe),[[-.14,-.14],[.14,-.14],[-.14,.14],[.14,.14]].forEach(([X,$])=>{p(k,X,.12,$,.03,.24,.03,16317180)})}else N.id==="pyramids"?(p(k,0,.04,0,.36,.07,.36,14251782),p(k,0,.09,0,.26,.07,.26,14251782),p(k,0,.14,0,.16,.06,.16,16096779),p(k,0,.19,0,.08,.06,.08,16638023),p(k,.2,.04,.15,.2,.08,.2,14251782),p(k,.2,.09,.15,.1,.06,.1,16096779)):N.id==="eiffel"?(p(k,0,.04,0,.22,.08,.22,5722958),p(k,0,.14,0,.14,.14,.14,5722958),p(k,0,.28,0,.06,.18,.06,7893356),p(k,0,.42,0,.015,.16,.015,3718648,{emissive:3718648,emissiveIntensity:1.5})):N.id==="liberty"?(p(k,0,.05,0,.16,.1,.16,6583435),p(k,0,.18,0,.1,.2,.1,1357990),p(k,.06,.32,.02,.03,.06,.03,16096779,{emissive:16096779,emissiveIntensity:2})):N.id==="great-wall"&&(p(k,-.16,.06,0,.09,.12,.09,6583435),p(k,0,.04,0,.28,.08,.06,6583435),p(k,.16,.06,0,.09,.12,.09,6583435))});const x=new Vt,M=[];for(let N=0;N<350;N++)M.push((Math.random()-.5)*16,(Math.random()-.5)*12,(Math.random()-.5)*8-2);x.setAttribute("position",new vt(M,3)),n.add(new aa(x,new is({color:8490232,size:.02,transparent:!0,opacity:.7})));let E=!1,v=0,b=0,A=-.2,w=-1.2;r.addEventListener("pointerdown",N=>{E=!0,v=N.clientX,b=N.clientY,r.setPointerCapture(N.pointerId)}),r.addEventListener("pointermove",N=>{E&&(w+=(N.clientX-v)*.007,A+=(N.clientY-b)*.007,A=Math.max(-1.2,Math.min(1.2,A)),v=N.clientX,b=N.clientY)}),r.addEventListener("pointerup",()=>{E=!1}),r.addEventListener("pointercancel",()=>{E=!1}),r.addEventListener("wheel",N=>{N.preventDefault(),i.position.z=Pt.clamp(i.position.z+N.deltaY*.006,3.8,11)},{passive:!1});function y(N){const O=m.find(I=>I.id===N);if(!O)return;(90-O.lat)*(Math.PI/180);const H=(O.lon+180)*(Math.PI/180),k=O.lat*Math.PI/180,re=-H+Math.PI/2;xi.to(l.rotation,{x:k,y:re,duration:1.2,ease:"power3.out"}),xi.to(i.position,{z:5.6,duration:1.2,ease:"power3.out"}),e&&(e.innerHTML=`
        <strong>${O.name}</strong> • <span style="color:#38bdf8;">${O.location}</span>
        <p style="margin:4px 0 0;font-size:11px;color:#cbd5e1;">${O.description}</p>
        <small style="font-family:var(--font-mono);color:#94a3b8;">Coordinates: ${O.lat.toFixed(2)}° N, ${O.lon.toFixed(2)}° E</small>
      `,e.classList.add("visible"))}function C(){const N=t.clientWidth,O=t.clientHeight;s.setSize(N,O,!1),i.aspect=N/O,i.updateProjectionMatrix()}new ResizeObserver(C).observe(t),C();const L=new Ni;let U=null;function B(){U=requestAnimationFrame(B);const N=L.getElapsedTime();E?(l.rotation.x=Pt.lerp(l.rotation.x,A,.08),l.rotation.y=Pt.lerp(l.rotation.y,w,.08)):l.rotation.y+=.002,S.forEach((O,H)=>{const k=1+Math.sin(N*3+H)*.25;O.scale.set(k,k,1)}),s.render(n,i)}return U=requestAnimationFrame(B),{focusMonument:y,monuments:m,zoomIn:()=>{i.position.z=Math.max(3.8,i.position.z-.8)},zoomOut:()=>{i.position.z=Math.min(11,i.position.z+.8)},resetView:()=>{xi.to(l.rotation,{x:-.2,y:-1.2,duration:.8}),xi.to(i.position,{z:7.8,duration:.8})},dispose:()=>{U&&cancelAnimationFrame(U),s.dispose()}}}function eb(r){r.innerHTML=`
    <div class="radar-container">
      <div class="radar-hud-bar">
        <div class="radar-status-badge">
          <span class="hud-blink-dot green"></span>
          <span id="radar-mode-text">RADAR SWEEP ACTIVE • 180° SERVO</span>
        </div>
        <div class="radar-hud-controls">
          <button class="hud-pill-btn" id="radar-daynight-toggle">Day / Night</button>
          <button class="hud-pill-btn active" id="radar-airland-toggle">Air / Ground</button>
          <button class="hud-pill-btn" id="radar-speed-toggle">Sweep: Normal</button>
        </div>
      </div>

      <div class="radar-display-wrapper">
        <canvas id="radar-canvas"></canvas>
        <div class="radar-overlay-hud">
          <div class="hud-telemetry-corner top-left">
            <span>SYS: HC-SR04 SONAR</span>
            <span>FREQ: 40.0 kHz</span>
            <span>MAX RNG: 40.0 cm</span>
          </div>
          <div class="hud-telemetry-corner top-right">
            <span>ANGLE: <strong id="hud-angle-val">90°</strong></span>
            <span>RANGE: <strong id="hud-dist-val">-- cm</strong></span>
            <span>TARGET: <strong id="hud-target-val">SEARCHING</strong></span>
          </div>
          <div class="hud-telemetry-corner bottom-left">
            <span>FRAME: LIVE SERIAL EMULATION</span>
            <span>BAUD: 9600 BPS</span>
          </div>
          <div class="hud-telemetry-corner bottom-right">
            <span>FOV: 0° — 180°</span>
            <span>ECHO LATENCY: 2.3 ms</span>
          </div>
        </div>
      </div>

      <div class="radar-control-panel">
        <div class="radar-slider-group">
          <label for="radar-manual-angle">Simulate Servo Angle (0° - 180°):</label>
          <input type="range" id="radar-manual-angle" min="0" max="180" value="90" />
        </div>
        <div class="radar-targets-list">
          <span>Active Targets:</span>
          <span class="target-tag">Target A: 48° @ 18cm</span>
          <span class="target-tag">Target B: 112° @ 29cm</span>
          <span class="target-tag">Target C: 154° @ 12cm</span>
        </div>
      </div>
    </div>
  `;const e=r.querySelector("#radar-canvas"),t=e.getContext("2d"),n=r.querySelector("#hud-angle-val"),i=r.querySelector("#hud-dist-val"),s=r.querySelector("#hud-target-val"),a=r.querySelector("#radar-manual-angle"),o=r.querySelector("#radar-daynight-toggle"),l=r.querySelector("#radar-speed-toggle");let c=0,u=0,h=90,f=1,d=.8,_=!0,g=!1,p=null;const m=[{angle:48,dist:18,label:"TGT-1",lastHit:0},{angle:112,dist:29,label:"TGT-2",lastHit:0},{angle:154,dist:12,label:"TGT-3",lastHit:0}];function S(){const M=e.parentElement.getBoundingClientRect();c=M.width,u=Math.max(340,M.height||380),e.width=c*window.devicePixelRatio,e.height=u*window.devicePixelRatio,t.scale(window.devicePixelRatio,window.devicePixelRatio)}S(),window.addEventListener("resize",S),o.addEventListener("click",()=>{_=!_,o.classList.toggle("active",!_)}),l.addEventListener("click",()=>{d===.8?(d=1.6,l.textContent="Sweep: Fast (2x)"):(d=.8,l.textContent="Sweep: Normal (1x)")}),a.addEventListener("input",M=>{g=!0,h=parseFloat(M.target.value),setTimeout(()=>{g=!1},3e3)});function x(){t.clearRect(0,0,c,u);const M=c/2,E=u*.88,v=Math.min(c*.45,u*.78),b=_?"#10b981":"#38bdf8",A=_?"rgba(16, 185, 129, 0.18)":"rgba(56, 189, 248, 0.18)",w=_?"#34d399":"#7dd3fc",y=t.createRadialGradient(M,E,10,M,E,v);y.addColorStop(0,_?"rgba(6, 78, 59, 0.35)":"rgba(12, 74, 110, 0.35)"),y.addColorStop(.85,"rgba(4, 12, 22, 0.6)"),y.addColorStop(1,"rgba(2, 6, 12, 0.9)"),t.fillStyle=y,t.beginPath(),t.arc(M,E,v,Math.PI,0,!1),t.closePath(),t.fill();const C=[.25,.5,.75,1],L=["10 cm","20 cm","30 cm","40 cm"];C.forEach((Q,ge)=>{const xe=v*Q;t.strokeStyle=A,t.lineWidth=1,t.beginPath(),t.arc(M,E,xe,Math.PI,0,!1),t.stroke(),t.fillStyle=w,t.font='10px "DM Mono", monospace',t.fillText(L[ge],M+8,E-xe+12)});for(let Q=0;Q<=180;Q+=30){const ge=(180-Q)*(Math.PI/180),xe=M+Math.cos(ge)*v,X=E-Math.sin(ge)*v;t.strokeStyle=Q===90?"rgba(255, 255, 255, 0.25)":A,t.lineWidth=1,t.beginPath(),t.moveTo(M,E),t.lineTo(xe,X),t.stroke();const $=M+Math.cos(ge)*(v+14),le=E-Math.sin(ge)*(v+14);t.fillStyle=w,t.font='9px "DM Mono", monospace',t.textAlign="center",t.fillText(`${Q}°`,$,le+3)}g||(h+=f*d,h>=180?(h=180,f=-1):h<=0&&(h=0,f=1),a.value=Math.round(h)),n.textContent=`${Math.round(h)}°`;let U=null,B=999;const N=performance.now();m.forEach(Q=>{Math.abs(h-Q.angle)<4&&(Q.lastHit=N);const xe=N-Q.lastHit;if(xe<2500){const X=Math.max(0,1-xe/2500),$=(180-Q.angle)*(Math.PI/180),le=Q.dist/40*v,ee=M+Math.cos($)*le,me=E-Math.sin($)*le;t.fillStyle=`rgba(239, 68, 68, ${X})`,t.shadowColor="#ef4444",t.shadowBlur=12,t.beginPath(),t.arc(ee,me,5,0,Math.PI*2),t.fill();const Te=5+xe*.015;t.strokeStyle=`rgba(239, 68, 68, ${X*.6})`,t.lineWidth=1.5,t.beginPath(),t.arc(ee,me,Te,0,Math.PI*2),t.stroke(),t.shadowBlur=0,t.fillStyle=`rgba(255, 255, 255, ${X})`,t.font='9px "DM Mono", monospace',t.fillText(`${Q.label} (${Q.dist}cm)`,ee+8,me-6),Q.dist<B&&(B=Q.dist,U=Q)}}),U?(i.textContent=`${B.toFixed(1)} cm`,s.textContent=`${U.label} @ ${U.angle}°`,s.style.color="#ef4444"):(i.textContent="-- cm",s.textContent="SCANNING...",s.style.color=w);const O=(180-h)*(Math.PI/180),H=M+Math.cos(O)*v,k=E-Math.sin(O)*v;t.strokeStyle=b,t.lineWidth=2.5,t.shadowColor=b,t.shadowBlur=16,t.beginPath(),t.moveTo(M,E),t.lineTo(H,k),t.stroke(),t.shadowBlur=0;const re=f>0?.22:-.22,I=t.createRadialGradient(M,E,5,M,E,v);I.addColorStop(0,b),I.addColorStop(1,"transparent"),t.fillStyle=_?"rgba(16, 185, 129, 0.09)":"rgba(56, 189, 248, 0.09)",t.beginPath(),t.moveTo(M,E),t.arc(M,E,v,O+re,O,f<0),t.closePath(),t.fill(),t.fillStyle=b,t.beginPath(),t.arc(M,E,6,0,Math.PI*2),t.fill(),p=requestAnimationFrame(x)}return p=requestAnimationFrame(x),{dispose:()=>{p&&cancelAnimationFrame(p),window.removeEventListener("resize",S)}}}function tb(r){r.innerHTML=`
    <div class="agri-container">
      <div class="agri-hud-header">
        <div class="agri-badge">
          <span class="hud-blink-dot green"></span>
          <span>MICROCLIMATE SIMULATION • CLOSED-LOOP AUTOMATION</span>
        </div>
        <div class="agri-controls-row">
          <button class="hud-pill-btn" id="agri-rain-btn">Trigger Rain: OFF</button>
          <button class="hud-pill-btn" id="agri-pump-btn">Pump Relay: AUTO</button>
          <button class="hud-pill-btn" id="agri-canopy-btn">Canopy: AUTO</button>
        </div>
      </div>

      <div class="agri-viewport-wrapper">
        <canvas id="agri-canvas"></canvas>
        <div class="agri-telemetry-hud">
          <div class="agri-metric-card">
            <span class="metric-label">SOIL MOISTURE</span>
            <div class="metric-value-row">
              <strong id="agri-moisture-val">42%</strong>
              <span id="agri-moisture-badge" class="badge-warning">IRRIGATION ON</span>
            </div>
            <div class="metric-progress-bar">
              <div id="agri-moisture-fill" style="width: 42%;"></div>
            </div>
          </div>

          <div class="agri-metric-card">
            <span class="metric-label">ATMOSPHERIC RAIN</span>
            <div class="metric-value-row">
              <strong id="agri-rain-status">NONE</strong>
              <span id="agri-rain-badge" class="badge-safe">DRY SENSOR</span>
            </div>
          </div>

          <div class="agri-metric-card">
            <span class="metric-label">CANOPY POSITION</span>
            <div class="metric-value-row">
              <strong id="agri-canopy-status">OPEN (0°)</strong>
              <span class="badge-neutral">SERVO MG90S</span>
            </div>
          </div>

          <div class="agri-metric-card">
            <span class="metric-label">SUBMERSIBLE PUMP</span>
            <div class="metric-value-row">
              <strong id="agri-pump-status">RUNNING</strong>
              <span id="agri-pump-badge" class="badge-active">5V RELAY CLOSED</span>
            </div>
          </div>
        </div>
      </div>

      <div class="agri-slider-dock">
        <label for="agri-soil-slider">Manual Moisture Simulation (0% Dry - 100% Saturated):</label>
        <input type="range" id="agri-soil-slider" min="10" max="90" value="42" />
        <small class="agri-dock-hint">Automatic Rule: If Soil &lt; 45% &rarr; Pump turns ON. If Rain &rarr; Canopy closes over crops.</small>
      </div>
    </div>
  `;const e=r.querySelector("#agri-canvas"),t=r.querySelector("#agri-moisture-val"),n=r.querySelector("#agri-moisture-fill"),i=r.querySelector("#agri-moisture-badge"),s=r.querySelector("#agri-rain-status"),a=r.querySelector("#agri-rain-badge"),o=r.querySelector("#agri-canopy-status"),l=r.querySelector("#agri-pump-status"),c=r.querySelector("#agri-pump-badge"),u=r.querySelector("#agri-rain-btn"),h=r.querySelector("#agri-pump-btn"),f=r.querySelector("#agri-canopy-btn"),d=r.querySelector("#agri-soil-slider");let _=!1,g=42,p=!0,m=0,S=0,x=!1,M=null;const E=new Di;E.background=new Ye(264208);const v=new Bt(38,1,.1,100);v.position.set(0,4.2,7.8),v.lookAt(0,0,0);const b=new Li({canvas:e,antialias:!0,alpha:!0});b.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),b.shadowMap.enabled=!0;const A=new Ji(8368857,1.4);E.add(A);const w=new Zi(16774358,2.8);w.position.set(4,8,5),w.castShadow=!0,E.add(w);const y=new di(11032055,3,14);y.position.set(-5,3,-3),E.add(y);const C=new bt;E.add(C);const L=new Tt(5.2,.4,3.8),U=new We({color:2365458,roughness:.9}),B=new Ne(L,U);B.position.y=-.2,B.receiveShadow=!0,C.add(B);for(let F=-1.2;F<=1.2;F+=.8){const Y=new Tt(4.8,.14,.55),Z=new We({color:3350550,roughness:.95}),J=new Ne(Y,Z);J.position.set(0,.05,F),C.add(J)}const N=[],O=new Tt(.08,.42,.08),H=new Tt(.24,.05,.12);for(let F=-1.2;F<=1.2;F+=.8)for(let Y=-2.1;Y<=2.1;Y+=.45){const Z=new bt;Z.position.set(Y+(Math.random()-.5)*.05,.22,F+(Math.random()-.5)*.05);const J=new We({color:2278750,roughness:.7}),be=new Ne(O,J);be.castShadow=!0,Z.add(be);const ce=new Ne(H,J);ce.position.y=.16,ce.rotation.y=Math.random()*Math.PI,ce.rotation.z=.2,Z.add(ce),C.add(Z),N.push(Z)}const k=new We({color:4674921,metalness:.6,roughness:.3}),re=new Ne(new An(.05,.05,5,16),k);re.rotation.z=Math.PI/2,re.position.set(0,.15,-1.65),C.add(re);for(let F=-1.8;F<=1.8;F+=1.2){const Y=new Ne(new An(.035,.035,3.2,12),k);Y.rotation.x=Math.PI/2,Y.position.set(F,.14,0),C.add(Y)}const I=new We({color:2450411,metalness:.4,roughness:.4}),Q=new Ne(new Tt(.45,.4,.45),I);Q.position.set(-2.4,.2,-1.65),C.add(Q);const ge=120,xe=new Vt,X=new Float32Array(ge*3);for(let F=0;F<ge;F++){const Y=(Math.random()-.5)*4,Z=(Math.random()-.5)*2.8;X[F*3]=Y,X[F*3+1]=.18,X[F*3+2]=Z}xe.setAttribute("position",new hi(X,3));const $=new is({color:3718648,size:.08,transparent:!0,opacity:.85}),le=new aa(xe,$);C.add(le);const ee=600,me=new Vt,Te=new Float32Array(ee*3);for(let F=0;F<ee;F++)Te[F*3]=(Math.random()-.5)*6,Te[F*3+1]=Math.random()*5+1,Te[F*3+2]=(Math.random()-.5)*5;me.setAttribute("position",new hi(Te,3));const Re=new is({color:9684477,size:.05,transparent:!0,opacity:0}),Ue=new aa(me,Re);C.add(Ue);const P=new bt;P.position.set(0,1.8,1.7),C.add(P);const ne=new We({color:165063,roughness:.3,transparent:!0,opacity:.85}),ie=new Ne(new Tt(4.8,.06,3.4),ne);ie.position.set(0,0,-1.7),P.add(ie),u.addEventListener("click",()=>{_=!_,u.textContent=`Trigger Rain: ${_?"ON":"OFF"}`,u.classList.toggle("active",_),de()}),h.addEventListener("click",()=>{x=!x,x?(p=!p,h.textContent=`Pump: MANUAL (${p?"ON":"OFF"})`):(h.textContent="Pump Relay: AUTO",de())}),f.addEventListener("click",()=>{S===0?(S=.55,f.textContent="Canopy: DEPLOYED"):(S=0,f.textContent="Canopy: OPEN")}),d.addEventListener("input",F=>{g=parseInt(F.target.value,10),de()});function de(){t.textContent=`${g}%`,n.style.width=`${g}%`,g<45?(i.textContent="IRRIGATION NEEDED",i.className="badge-warning"):(i.textContent="OPTIMAL MOISTURE",i.className="badge-safe"),_?(s.textContent="DETECTED",a.textContent="WET SENSOR",a.className="badge-active",S=.52,o.textContent="DEPLOYED (ROOF CLOSED)"):(s.textContent="NONE",a.textContent="DRY SENSOR",a.className="badge-safe",S=0,o.textContent="OPEN (0°)"),x||(g<45&&!_?(p=!0,l.textContent="RUNNING (AUTO)",c.textContent="5V RELAY CLOSED",c.className="badge-active"):(p=!1,l.textContent="STANDBY (IDLE)",c.textContent="RELAY OPEN",c.className="badge-neutral"))}de();function te(){const F=e.parentElement.getBoundingClientRect(),Y=F.width,Z=Math.max(340,F.height||420);b.setSize(Y,Z,!1),v.aspect=Y/Z,v.updateProjectionMatrix()}te(),window.addEventListener("resize",te);let G=!1,fe=0,ye=-.3;e.addEventListener("pointerdown",F=>{G=!0,fe=F.clientX}),window.addEventListener("pointermove",F=>{if(G){const Y=F.clientX-fe;ye+=Y*.006,fe=F.clientX}}),window.addEventListener("pointerup",()=>{G=!1});const D=new Ni;function T(){M=requestAnimationFrame(T),D.getDelta();const F=D.getElapsedTime();if(C.rotation.y=Pt.lerp(C.rotation.y,ye,.08),m=Pt.lerp(m,S,.05),P.rotation.x=m,N.forEach((Y,Z)=>{Y.rotation.z=Math.sin(F*2+Z)*.04}),_){Re.opacity=Pt.lerp(Re.opacity,.8,.05);const Y=me.attributes.position.array;for(let Z=0;Z<ee;Z++)Y[Z*3+1]-=.15,Y[Z*3+1]<0&&(Y[Z*3+1]=5);me.attributes.position.needsUpdate=!0}else Re.opacity=Pt.lerp(Re.opacity,0,.08);if(p){$.opacity=Pt.lerp($.opacity,.85,.08);const Y=xe.attributes.position.array;for(let Z=0;Z<ge;Z++)Y[Z*3+1]=.14+Math.sin(F*6+Z)*.05;xe.attributes.position.needsUpdate=!0}else $.opacity=Pt.lerp($.opacity,0,.08);b.render(E,v)}return M=requestAnimationFrame(T),{dispose:()=>{M&&cancelAnimationFrame(M),window.removeEventListener("resize",te),b.dispose()}}}function nb(r){r.innerHTML=`
    <div class="lpg-container">
      <div class="lpg-hud-header">
        <div class="lpg-badge">
          <span class="hud-blink-dot orange" id="lpg-status-dot"></span>
          <span id="lpg-status-title">MQ-2 SENSOR ACTIVE • GAS MONITORING</span>
        </div>
        <div class="lpg-safety-state" id="lpg-state-pill">
          STATE: NORMAL (SAFE)
        </div>
      </div>

      <div class="lpg-viewport-wrapper">
        <canvas id="lpg-canvas"></canvas>
        <div class="lpg-telemetry-hud">
          <div class="lpg-hud-row">
            <span>GAS CONCENTRATION:</span>
            <strong id="lpg-ppm-text">85 PPM</strong>
          </div>
          <div class="lpg-hud-row">
            <span>THRESHOLD 1 (WARNING):</span>
            <span>250 PPM</span>
          </div>
          <div class="lpg-hud-row">
            <span>THRESHOLD 2 (HAZARD):</span>
            <span>450 PPM</span>
          </div>
          <div class="lpg-hud-row">
            <span>EXHAUST VENTILATION:</span>
            <strong id="lpg-fan-status">OFF (STANDBY)</strong>
          </div>
          <div class="lpg-hud-row">
            <span>GAS VALVE SOLENOID:</span>
            <strong id="lpg-valve-status" class="safe">OPEN (SUPPLY ON)</strong>
          </div>
        </div>
      </div>

      <div class="lpg-slider-dock">
        <label for="lpg-ppm-slider">Simulate Hydrocarbon Vapor Concentration (PPM):</label>
        <div class="slider-row">
          <input type="range" id="lpg-ppm-slider" min="30" max="800" value="85" />
          <button class="hud-pill-btn" id="lpg-test-leak-btn">Trigger Simulated Leak</button>
        </div>
        <div class="lpg-state-indicators">
          <span class="indicator-safe">0-250 PPM: Safe</span>
          <span class="indicator-warn">250-450 PPM: Warning Alert</span>
          <span class="indicator-hazard">450+ PPM: Emergency Containment</span>
        </div>
      </div>
    </div>
  `;const e=r.querySelector("#lpg-canvas"),t=r.querySelector("#lpg-ppm-text"),n=r.querySelector("#lpg-state-pill"),i=r.querySelector("#lpg-fan-status"),s=r.querySelector("#lpg-valve-status"),a=r.querySelector("#lpg-ppm-slider"),o=r.querySelector("#lpg-test-leak-btn"),l=r.querySelector("#lpg-status-dot");let c=85,u=0,h=0,f=null;const d=new Di;d.background=new Ye(329227);const _=new Bt(35,1,.1,100);_.position.set(0,1.2,5.8);const g=new Li({canvas:e,antialias:!0,alpha:!0});g.setPixelRatio(Math.min(window.devicePixelRatio,1.8));const p=new Ji(8162209,1.2);d.add(p);const m=new Zi(16773341,2.5);m.position.set(3,6,4),d.add(m);const S=new di(1096065,4,8);S.position.set(0,2.2,1.5),d.add(S);const x=new bt;d.add(x);const M=new We({color:12730636,metalness:.35,roughness:.4}),E=new Ne(new An(.7,.7,1.8,32),M);x.add(E);const v=M,b=new Ne(new ci(.7,32,16,0,Math.PI*2,0,Math.PI/2),v);b.position.y=.9,x.add(b);const A=new Ne(new ci(.7,32,16,0,Math.PI*2,Math.PI/2,Math.PI/2),v);A.position.y=-.9,x.add(A);const w=new Ne(new An(.72,.72,.25,32,1,!0),new We({color:2042167}));w.position.y=-1.1,x.add(w);const y=new Ne(new An(.55,.55,.38,24,1,!0),M);y.position.y=1.35,x.add(y);const C=new We({color:14251782,metalness:.8,roughness:.2}),L=new Ne(new An(.08,.08,.35,16),C);L.position.y=1.25,x.add(L);const U=new bt;U.position.set(.9,-.2,.4),x.add(U);const B=new Ne(new Tt(.4,.55,.1),new We({color:413243}));U.add(B);const N=new Ne(new An(.12,.12,.16,16),new We({color:9741240,metalness:.7}));N.rotation.x=Math.PI/2,N.position.z=.08,U.add(N);const O=new bt;O.position.set(-1.8,.8,-1.2),d.add(O);const H=new Ne(new An(.65,.65,.2,24),new We({color:1976635}));H.rotation.x=Math.PI/2,O.add(H);const k=new bt;O.add(k);for(let $=0;$<4;$++){const le=new Ne(new Tt(.12,.48,.02),new We({color:9741240}));le.rotation.z=$*Math.PI/2,le.position.y=.2,k.add(le)}function re($){c=$,t.textContent=`${c} PPM`,a.value=c,c<250?(n.textContent="STATE: NORMAL (SAFE)",n.className="lpg-safety-state safe",i.textContent="OFF (STANDBY)",s.textContent="OPEN (SUPPLY ON)",s.className="safe",h=0,S.color.setHex(1096065),l.className="hud-blink-dot green"):c<450?(n.textContent="STATE: WARNING THRESHOLD",n.className="lpg-safety-state warning",i.textContent="LOW SPEED (EVACUATION)",s.textContent="OPEN (MONITORING)",s.className="warning",h=.1,S.color.setHex(16096779),l.className="hud-blink-dot orange"):(n.textContent="STATE: EMERGENCY HAZARD!",n.className="lpg-safety-state hazard",i.textContent="MAX SPEED ACTIVE (EXHAUST)",s.textContent="EMERGENCY SHUTOFF (CLOSED)",s.className="danger",h=.45,S.color.setHex(15680580),l.className="hud-blink-dot red")}a.addEventListener("input",$=>{re(parseInt($.target.value,10))}),o.addEventListener("click",()=>{re(580),setTimeout(()=>{re(110)},5e3)});function I(){const $=e.parentElement.getBoundingClientRect(),le=$.width,ee=Math.max(340,$.height||420);g.setSize(le,ee,!1),_.aspect=le/ee,_.updateProjectionMatrix()}I(),window.addEventListener("resize",I);let Q=!1,ge=0;e.addEventListener("pointerdown",$=>{Q=!0,ge=$.clientX}),window.addEventListener("pointermove",$=>{Q&&(x.rotation.y+=($.clientX-ge)*.01,ge=$.clientX)}),window.addEventListener("pointerup",()=>{Q=!1});const xe=new Ni;function X(){f=requestAnimationFrame(X);const $=xe.getElapsedTime();Q||(x.rotation.y+=.005),u=Pt.lerp(u,h,.05),k.rotation.z+=u,c>=450?S.intensity=Math.sin($*12)*5+6:S.intensity=3,g.render(d,_)}return f=requestAnimationFrame(X),{dispose:()=>{f&&cancelAnimationFrame(f),window.removeEventListener("resize",I),g.dispose()}}}function ib(r){r.innerHTML=`
    <div class="voice-container">
      <div class="voice-hud-header">
        <div class="voice-badge">
          <span class="hud-blink-dot purple" id="voice-dot"></span>
          <span id="voice-status-title">VOICE INTERACTION CORE • STANDBY</span>
        </div>
        <div class="voice-mic-controls">
          <button class="btn primary small" id="voice-mic-toggle">Start Microphone</button>
          <button class="btn ghost small" id="voice-speak-demo-btn">Say Sample Phrase</button>
        </div>
      </div>

      <div class="voice-visualizer-wrapper">
        <canvas id="voice-canvas"></canvas>
        <div class="voice-transcript-overlay">
          <div class="voice-transcript-box">
            <span class="transcript-label">LIVE SPEECH TRANSCRIPT:</span>
            <p id="voice-transcript-text">"Click 'Start Microphone' or click any sample command below to test speech interaction."</p>
          </div>
          <div class="voice-response-box">
            <span class="response-label">ASSISTANT RESPONSE:</span>
            <p id="voice-response-text">Awaiting user vocal command.</p>
          </div>
        </div>
      </div>

      <div class="voice-command-dock">
        <span class="command-dock-title">Supported Vocal Commands:</span>
        <div class="command-chips">
          <button class="command-chip" data-cmd="Who is Mritunjay?">"Who is Mritunjay?"</button>
          <button class="command-chip" data-cmd="Show me your projects">"Show me your projects"</button>
          <button class="command-chip" data-cmd="Tell me about Smart Radar">"Tell me about Smart Radar"</button>
          <button class="command-chip" data-cmd="What are your core skills?">"What are your core skills?"</button>
          <button class="command-chip" data-cmd="How to contact you?">"How to contact you?"</button>
        </div>
        <p class="voice-privacy-notice">
          🔒 <strong>Local Processing:</strong> Speech recognition runs client-side via the browser's Web Speech API. Audio is never recorded, uploaded, or transmitted to any external server.
        </p>
      </div>
    </div>
  `;const e=r.querySelector("#voice-canvas"),t=e.getContext("2d"),n=r.querySelector("#voice-mic-toggle"),i=r.querySelector("#voice-speak-demo-btn"),s=r.querySelector("#voice-transcript-text"),a=r.querySelector("#voice-response-text"),o=r.querySelector("#voice-status-title"),l=r.querySelector("#voice-dot"),c=r.querySelectorAll(".command-chip");let u=null,h=null,f=null,d=null,_=!1,g=null,p=0,m=0;function S(){const y=e.parentElement.getBoundingClientRect();p=y.width,m=Math.max(260,y.height||320),e.width=p*window.devicePixelRatio,e.height=m*window.devicePixelRatio,t.scale(window.devicePixelRatio,window.devicePixelRatio)}S(),window.addEventListener("resize",S);const x=window.SpeechRecognition||window.webkitSpeechRecognition;x&&(d=new x,d.continuous=!0,d.interimResults=!0,d.lang="en-US",d.onstart=()=>{_=!0,n.textContent="Stop Microphone",n.classList.add("danger"),o.textContent="LISTENING FOR SPOKEN COMMANDS...",l.className="hud-blink-dot green"},d.onresult=y=>{let C="",L="";for(let B=y.resultIndex;B<y.results.length;++B)y.results[B].isFinal?L+=y.results[B][0].transcript:C+=y.results[B][0].transcript;const U=L||C;U&&(s.textContent=`"${U}"`,L&&v(L))},d.onerror=y=>{console.warn("Speech recognition error:",y.error),y.error==="not-allowed"&&(s.textContent="Microphone permission was denied. You can still test voice synthesis using the sample command buttons below.",E())},d.onend=()=>{if(_)try{d.start()}catch{}});async function M(){try{const y=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1});f=y,u=new(window.AudioContext||window.webkitAudioContext);const C=u.createMediaStreamSource(y);h=u.createAnalyser(),h.fftSize=256,C.connect(h),d?d.start():(s.textContent="SpeechRecognition API not available in this browser. Showing simulated audio frequencies.",_=!0,n.textContent="Stop Microphone")}catch(y){console.warn("Mic access failed:",y),s.textContent="Microphone permission not granted. Use sample command buttons to test audio synthesis!"}}function E(){if(_=!1,f&&(f.getTracks().forEach(y=>y.stop()),f=null),u&&(u.close(),u=null,h=null),d)try{d.stop()}catch{}n.textContent="Start Microphone",n.classList.remove("danger"),o.textContent="VOICE INTERACTION CORE • STANDBY",l.className="hud-blink-dot purple"}n.addEventListener("click",()=>{_?E():M()});function v(y){const C=y.toLowerCase();let L="";C.includes("who is")||C.includes("who are you")||C.includes("about")?L="Mritunjay is a Class 10 student passionate about creative coding, robotics, IoT, and embedded electronics.":C.includes("project")||C.includes("build")?L="Mritunjay has built 8 interactive builds including the Smart Radar System, Smart Agriculture, and LPG Safety Detector.":C.includes("radar")?L="The Smart Radar system sweeps 180 degrees using an ultrasonic sensor and micro servo, transmitting live coordinates to a custom HUD.":C.includes("skill")?L="Core skills include HTML, CSS, JavaScript, Python, C, C++, Arduino, Three.js, and IoT prototyping.":C.includes("contact")||C.includes("reach")||C.includes("email")?L="You can reach Mritunjay via GitHub at github.com/mritunjay20 or via the Contact form below.":L=`Received command: "${y}". How else may I assist you with exploring Mritunjay's work?`,a.textContent=L,b(L)}function b(y){if("speechSynthesis"in window){window.speechSynthesis.cancel();const C=new SpeechSynthesisUtterance(y);C.rate=1,C.pitch=1.05,window.speechSynthesis.speak(C)}}c.forEach(y=>{y.addEventListener("click",()=>{const C=y.dataset.cmd;s.textContent=`"${C}"`,v(C)})}),i.addEventListener("click",()=>{const y="Welcome to Mritunjay's interactive 3D portfolio. Explore the avatar, projects, and robotics builds!";s.textContent=`"${y}"`,a.textContent="Speaking greeting message...",b(y)});let A=0;function w(){t.clearRect(0,0,p,m),A+=.04;const y=m/2,C=48,L=p/C*.7,U=p/C*.3;let B=new Uint8Array(C);if(h&&_){const N=new Uint8Array(h.frequencyBinCount);h.getByteFrequencyData(N);for(let O=0;O<C;O++)B[O]=N[Math.floor(O*(N.length/C))]}else for(let N=0;N<C;N++){const O=Math.sin(A*2+N*.2)*25+Math.cos(A+N*.4)*15+30;B[N]=Math.max(10,O)}for(let N=0;N<C;N++){const O=B[N]/255*(m*.38),H=N*(L+U)+U,k=t.createLinearGradient(0,y-O,0,y+O);k.addColorStop(0,"#c084fc"),k.addColorStop(.5,"#8b5cf6"),k.addColorStop(1,"#38bdf8"),t.fillStyle=k,t.shadowColor="#8b5cf6",t.shadowBlur=10,t.fillRect(H,y-O,L,O*2)}t.shadowBlur=0,t.strokeStyle="rgba(255, 255, 255, 0.7)",t.lineWidth=2,t.beginPath();for(let N=0;N<p;N+=4){const O=Math.sin(N*.03+A*3)*(_?22:8),H=y+O;N===0?t.moveTo(N,H):t.lineTo(N,H)}t.stroke(),g=requestAnimationFrame(w)}return g=requestAnimationFrame(w),{dispose:()=>{g&&cancelAnimationFrame(g),E(),window.removeEventListener("resize",S)}}}function rb(r){r.innerHTML=`
    <div class="helmet-container">
      <div class="helmet-hud-header">
        <div class="helmet-badge">
          <span class="hud-blink-dot cyan" id="helmet-hud-dot"></span>
          <span>CV VISION PIPELINE • SAFETY INTERLOCK RELAY</span>
        </div>
        <div class="helmet-relay-status" id="helmet-relay-pill">
          IGNITION: LOCKED (NO HELMET)
        </div>
      </div>

      <div class="helmet-viewport-wrapper">
        <canvas id="helmet-canvas"></canvas>
        <div class="cv-bounding-box" id="helmet-bbox">
          <div class="cv-tag">
            <span id="cv-class-label">CLASS: HELMET</span>
            <span id="cv-conf-label">CONF: 98.4%</span>
          </div>
          <div class="cv-bracket top-left"></div>
          <div class="cv-bracket top-right"></div>
          <div class="cv-bracket bottom-left"></div>
          <div class="cv-bracket bottom-right"></div>
        </div>

        <div class="helmet-telemetry-hud">
          <div class="helmet-telemetry-card">
            <span>VISION MODEL:</span>
            <strong>YOLO-v8n (Headgear Classifier)</strong>
          </div>
          <div class="helmet-telemetry-card">
            <span>INFERENCE TIME:</span>
            <strong>14.2 ms / Frame</strong>
          </div>
          <div class="helmet-telemetry-card">
            <span>IGNITION SOLENOID:</span>
            <strong id="helmet-solenoid-status" class="locked">DE-ENERGIZED (OPEN)</strong>
          </div>
        </div>
      </div>

      <div class="helmet-controls-dock">
        <div class="dock-actions">
          <button class="btn primary small" id="helmet-toggle-btn">Toggle Rider Helmet: WEAR HELMET</button>
          <button class="btn ghost small" id="helmet-ignition-btn">Simulate Ignition Key Press</button>
        </div>
        <p class="helmet-disclaimer">
          ⚠️ <strong>Interlock Logic:</strong> The motorcycle electric starter motor relay only energizes when a certified helmet is detected with &gt; 90% model confidence.
        </p>
      </div>
    </div>
  `;const e=r.querySelector("#helmet-canvas"),t=r.querySelector("#helmet-bbox"),n=r.querySelector("#cv-class-label"),i=r.querySelector("#cv-conf-label"),s=r.querySelector("#helmet-relay-pill"),a=r.querySelector("#helmet-solenoid-status"),o=r.querySelector("#helmet-toggle-btn"),l=r.querySelector("#helmet-ignition-btn"),c=r.querySelector("#helmet-hud-dot");let u=!1,h=null;const f=new Di;f.background=new Ye(329486);const d=new Bt(36,1,.1,100);d.position.set(0,1.2,5.5);const _=new Li({canvas:e,antialias:!0,alpha:!0});_.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),f.add(new Ji(8234196,1.3));const g=new Zi(16777215,2.5);g.position.set(4,5,4),f.add(g);const p=new di(3718648,3,10);p.position.set(-3,2,-2),f.add(p);const m=new bt;f.add(m);const S=new We({color:13279618,roughness:.6}),x=new Ne(new ci(.55,32,24),S);x.position.set(0,.6,0),m.add(x);const M=new We({color:1512731,roughness:.9}),E=new Ne(new ci(.58,24,16,0,Math.PI*2,0,Math.PI/1.7),M);E.position.set(0,.65,0),m.add(E);const v=new We({color:1120295,roughness:.7}),b=new Ne(new An(.7,.6,1.2,24),v);b.position.set(0,-.6,0),m.add(b);const A=new bt;A.position.set(0,.65,0),m.add(A);const w=new We({color:165063,metalness:.5,roughness:.2}),y=new Ne(new ci(.68,32,24),w);A.add(y);const C=new We({color:592139,metalness:.9,roughness:.1,transparent:!0,opacity:.85}),L=new Ne(new ci(.7,24,16,Math.PI*.7,Math.PI*.6,Math.PI*.25,Math.PI*.45),C);A.add(L);const U=new We({color:3718648,transparent:!0,opacity:.35,roughness:.1}),B=new Ne(new Tt(1.6,.9,.05),U);B.position.set(0,-.2,1.2),B.rotation.x=-.3,m.add(B);function N(Q){u=Q,A.visible=u,u?(o.textContent="Toggle Rider: REMOVE HELMET",t.classList.add("visible"),n.textContent="CLASS: APPROVED HELMET",i.textContent="CONF: 98.6%",s.textContent="IGNITION: READY (INTERLOCK CLOSED)",s.className="helmet-relay-status ready",a.textContent="ENERGIZED (CLOSED)",a.className="ready",c.className="hud-blink-dot green"):(o.textContent="Toggle Rider: WEAR HELMET",t.classList.remove("visible"),n.textContent="CLASS: NO HELMET",i.textContent="CONF: 94.1%",s.textContent="IGNITION: LOCKED (NO HELMET)",s.className="helmet-relay-status locked",a.textContent="DE-ENERGIZED (OPEN)",a.className="locked",c.className="hud-blink-dot red")}N(!1),o.addEventListener("click",()=>{N(!u)}),l.addEventListener("click",()=>{alert(u?"✓ Ignition Sequence Initiated! Relay clicked closed. Engine started safely.":"❌ Ignition Blocked! Helmet not detected. Wear a protective helmet to start engine.")});function O(){const Q=e.parentElement.getBoundingClientRect(),ge=Q.width,xe=Math.max(340,Q.height||420);_.setSize(ge,xe,!1),d.aspect=ge/xe,d.updateProjectionMatrix()}O(),window.addEventListener("resize",O);let H=!1,k=0;e.addEventListener("pointerdown",Q=>{H=!0,k=Q.clientX}),window.addEventListener("pointermove",Q=>{H&&(m.rotation.y+=(Q.clientX-k)*.008,k=Q.clientX)}),window.addEventListener("pointerup",()=>{H=!1});const re=new Ni;function I(){h=requestAnimationFrame(I);const Q=re.getElapsedTime();H||(m.rotation.y=Math.sin(Q*.6)*.15),_.render(f,d)}return h=requestAnimationFrame(I),{dispose:()=>{h&&cancelAnimationFrame(h),window.removeEventListener("resize",O),_.dispose()}}}function sb(r){r.innerHTML=`
    <div class="face-container">
      <div class="face-hud-header">
        <div class="face-badge">
          <span class="hud-blink-dot purple"></span>
          <span>3D FACIAL GEOMETRY • 468 LANDMARK MESH</span>
        </div>
        <div class="face-mode-controls">
          <button class="hud-pill-btn active" id="face-wireframe-toggle">Mode: Triangulation</button>
          <button class="hud-pill-btn" id="face-pointcloud-toggle">Landmark Nodes: ON</button>
        </div>
      </div>

      <div class="face-viewport-wrapper">
        <canvas id="face-canvas"></canvas>
        <div class="face-telemetry-hud">
          <div class="face-hud-row">
            <span>POSE ESTIMATION:</span>
            <strong id="face-pitch-val">PITCH: 0.0° • YAW: 0.0°</strong>
          </div>
          <div class="face-hud-row">
            <span>KEYPOINT DENSITY:</span>
            <span>468 Topological Vertices</span>
          </div>
          <div class="face-hud-row">
            <span>DEPTH RECONSTRUCTION:</span>
            <span class="safe">Monocular Depth (Active)</span>
          </div>
          <div class="face-hud-row">
            <span>LATENCY:</span>
            <span>8.4 ms (WebGL Accelerated)</span>
          </div>
        </div>
      </div>

      <div class="face-controls-dock">
        <span class="dock-hint">Interact: Move cursor or drag across viewport to dynamically steer facial pose tracking.</span>
      </div>
    </div>
  `;const e=r.querySelector("#face-canvas"),t=r.querySelector("#face-pitch-val"),n=r.querySelector("#face-wireframe-toggle"),i=r.querySelector("#face-pointcloud-toggle");let s=null;const a=new Di;a.background=new Ye(329229);const o=new Bt(38,1,.1,100);o.position.set(0,0,5.2);const l=new Li({canvas:e,antialias:!0,alpha:!0});l.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),a.add(new Ji(8490232,1.2));const c=new Zi(12616956,2.5);c.position.set(0,3,5),a.add(c);const u=new di(3718648,3,10);u.position.set(-3,-2,2),a.add(u);const h=new bt;a.add(h);const f=new $l(1.6,4),d=f.attributes.position;for(let C=0;C<d.count;C++){let L=d.getX(C),U=d.getY(C),B=d.getZ(C);U<-.4&&(L*=1+U*.35,B*=1+U*.2),B>.8&&U>0&&U<.6&&(Math.abs(L)<.22?B+=.35:Math.abs(L)<.7&&(B-=.15)),d.setXYZ(C,L,U,B)}f.computeVertexNormals();const _=new We({color:592404,roughness:.8,metalness:.2}),g=new Ne(f,_);h.add(g);const p=new an({color:11032055,wireframe:!0,transparent:!0,opacity:.65}),m=new Ne(f,p);h.add(m);const S=new is({color:3718648,size:.055,transparent:!0,opacity:.85}),x=new aa(f,S);h.add(x);let M=!1;n.addEventListener("click",()=>{M=!M,g.visible=!M,n.classList.toggle("active",!M)});let E=!0;i.addEventListener("click",()=>{E=!E,x.visible=E,i.classList.toggle("active",E)});function v(){const C=e.parentElement.getBoundingClientRect(),L=C.width,U=Math.max(340,C.height||420);l.setSize(L,U,!1),o.aspect=L/U,o.updateProjectionMatrix()}v(),window.addEventListener("resize",v);let b=0,A=0;e.addEventListener("pointermove",C=>{const L=e.getBoundingClientRect();b=(C.clientX-L.left)/L.width*2-1,A=-((C.clientY-L.top)/L.height*2-1)});const w=new Ni;function y(){s=requestAnimationFrame(y);const C=w.getElapsedTime(),L=b*.75+Math.sin(C*.5)*.1,U=-A*.5;h.rotation.y=Pt.lerp(h.rotation.y,L,.06),h.rotation.x=Pt.lerp(h.rotation.x,U,.06);const B=(h.rotation.x*(180/Math.PI)).toFixed(1),N=(h.rotation.y*(180/Math.PI)).toFixed(1);t.textContent=`PITCH: ${B}° • YAW: ${N}°`,l.render(a,o)}return s=requestAnimationFrame(y),{dispose:()=>{s&&cancelAnimationFrame(s),window.removeEventListener("resize",v),l.dispose()}}}function ab(r){r.innerHTML=`
    <div class="nfc-container">
      <div class="nfc-hud-header">
        <div class="nfc-badge">
          <span class="hud-blink-dot cyan"></span>
          <span>13.56 MHz HF RFID • INDUCTIVE COUPLING</span>
        </div>
        <div class="nfc-status-pill" id="nfc-status-pill">
          READER: IDLE (WAITING FOR CARD)
        </div>
      </div>

      <div class="nfc-viewport-wrapper">
        <canvas id="nfc-canvas"></canvas>
        <div class="nfc-payload-card" id="nfc-payload-card">
          <div class="payload-header">
            <span>MIFARE CLASSIC 1K • ISO/IEC 14443A</span>
            <span class="payload-tag">VERIFIED</span>
          </div>
          <div class="payload-body">
            <div class="payload-row">
              <span>CARD UID:</span>
              <strong id="nfc-uid-text">0x4A 0x9B 0x1F 0x82</strong>
            </div>
            <div class="payload-row">
              <span>HOLDER NAME:</span>
              <strong>Mritunjay Saini</strong>
            </div>
            <div class="payload-row">
              <span>STATUS:</span>
              <strong class="safe">ACCESS GRANTED • CLASS 10 LAB</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="nfc-controls-dock">
        <button class="btn primary small" id="nfc-tap-btn">Tap Card to Reader Pad</button>
        <button class="btn ghost small" id="nfc-flip-btn">Flip Card (Front / Back)</button>
        <p class="nfc-disclaimer">
          ⚡ <strong>Physical Principle:</strong> High frequency 13.56MHz electromagnetic resonance delivers both power and data to passive smart cards without any battery.
        </p>
      </div>
    </div>
  `;const e=r.querySelector("#nfc-canvas"),t=r.querySelector("#nfc-tap-btn"),n=r.querySelector("#nfc-flip-btn"),i=r.querySelector("#nfc-status-pill"),s=r.querySelector("#nfc-payload-card");let a=null;const o=new Di;o.background=new Ye(329489);const l=new Bt(36,1,.1,100);l.position.set(0,1.4,5.2);const c=new Li({canvas:e,antialias:!0,alpha:!0});c.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),o.add(new Ji(8168665,1.4));const u=new Zi(16777215,2.5);u.position.set(2,5,4),o.add(u);const h=new di(11032055,3,10);h.position.set(-3,2,-1),o.add(h);const f=new bt;f.position.set(0,-1.2,0),o.add(f);const d=new Ne(new Tt(3,.22,2.2),new We({color:988970,roughness:.5,metalness:.6}));f.add(d);const _=new Ne(new oa(.8,.025,8,48),new an({color:3718648,transparent:!0,opacity:.7}));_.rotation.x=Math.PI/2,_.position.y=.12,f.add(_);const g=new bt;g.position.set(0,.5,0),o.add(g);const p=new Wh({color:592139,metalness:.4,roughness:.2,clearcoat:1,clearcoatRoughness:.1}),m=new Ne(new Tt(2.4,1.5,.04),p);g.add(m);const S=new We({color:16096779,metalness:.9,roughness:.2}),x=new Ne(new Tt(.42,.35,.05),S);x.position.set(-.65,.15,.02),g.add(x);const M=new an({color:9133302}),E=new Ne(new Tt(2.36,.2,.042),M);E.position.set(0,-.4,.02),g.add(E);const v=new Ne(new jl(.2,.35,32),new an({color:3462041,transparent:!0,opacity:0,side:ai}));v.rotation.x=-Math.PI/2,v.position.set(0,-1.05,0),o.add(v);let b=!1,A=.5,w=0,y=0,C=!1;t.addEventListener("click",()=>{b||(b=!0,i.textContent="READER: CARD DETECTED • INDUCTION ACTIVE",i.className="nfc-status-pill active",A=-.95,w=.4,setTimeout(()=>{v.scale.set(1,1,1),v.material.opacity=.9,i.textContent="READER: UID VERIFIED • ACCESS GRANTED",i.className="nfc-status-pill verified",s.classList.add("visible"),setTimeout(()=>{A=.5,w=0,b=!1},1800)},600))}),n.addEventListener("click",()=>{C=!C,y=C?Math.PI:0});function L(){const N=e.parentElement.getBoundingClientRect(),O=N.width,H=Math.max(340,N.height||420);c.setSize(O,H,!1),l.aspect=O/H,l.updateProjectionMatrix()}L(),window.addEventListener("resize",L);const U=new Ni;function B(){a=requestAnimationFrame(B);const N=U.getElapsedTime();g.position.y=Pt.lerp(g.position.y,A+Math.sin(N*2)*.05,.08),g.rotation.x=Pt.lerp(g.rotation.x,w,.08),g.rotation.y=Pt.lerp(g.rotation.y,y+Math.sin(N)*.08,.08),v.material.opacity>.01&&(v.scale.x+=.08,v.scale.y+=.08,v.material.opacity=Pt.lerp(v.material.opacity,0,.04)),c.render(o,l)}return a=requestAnimationFrame(B),{dispose:()=>{a&&cancelAnimationFrame(a),window.removeEventListener("resize",L),c.dispose()}}}function ob(r){r.innerHTML=`
    <div class="fingerprint-container">
      <div class="fingerprint-hud-header">
        <div class="fingerprint-badge">
          <span class="hud-blink-dot cyan" id="fp-hud-dot"></span>
          <span>OPTICAL PRISM SCANNER • 500 DPI MINUTIAE</span>
        </div>
        <div class="fingerprint-match-status" id="fp-status-pill">
          STATUS: READY FOR ENROLLMENT / SCAN
        </div>
      </div>

      <div class="fingerprint-viewport-wrapper">
        <canvas id="fingerprint-canvas"></canvas>
        <div class="fingerprint-telemetry-hud">
          <div class="fp-telemetry-card">
            <span>EXTRACTION ALGORITHM:</span>
            <strong>Bifurcation & Ridge-Ending Extraction</strong>
          </div>
          <div class="fp-telemetry-card">
            <span>EXTRACTED MINUTIAE:</span>
            <strong id="fp-minutiae-count">42 Feature Points</strong>
          </div>
          <div class="fp-telemetry-card">
            <span>MATCH SCORE:</span>
            <strong id="fp-score-val" class="safe">96.8% (VERIFIED)</strong>
          </div>
          <div class="fp-telemetry-card">
            <span>FALSE ACCEPTANCE RATE (FAR):</span>
            <span>&lt; 0.001% (Local Hash)</span>
          </div>
        </div>
      </div>

      <div class="fingerprint-controls-dock">
        <button class="btn primary small" id="fp-scan-btn">Trigger Laser Sweep Scan</button>
        <button class="btn ghost small" id="fp-toggle-minutiae">Toggle Minutiae Points: ON</button>
        <p class="fp-disclaimer">
          🔒 <strong>Biometric Security:</strong> Optical scanners convert friction ridges into one-way mathematical feature vectors. Raw fingerprint images are never permanently stored.
        </p>
      </div>
    </div>
  `;const e=r.querySelector("#fingerprint-canvas"),t=e.getContext("2d"),n=r.querySelector("#fp-scan-btn"),i=r.querySelector("#fp-toggle-minutiae"),s=r.querySelector("#fp-status-pill"),a=r.querySelector("#fp-score-val"),o=r.querySelector("#fp-hud-dot");let l=0,c=0,u=0,h=!1,f=!0,d=null;function _(){const m=e.parentElement.getBoundingClientRect();l=m.width,c=Math.max(340,m.height||400),e.width=l*window.devicePixelRatio,e.height=c*window.devicePixelRatio,t.scale(window.devicePixelRatio,window.devicePixelRatio)}_(),window.addEventListener("resize",_);const g=[];for(let m=0;m<42;m++){const S=Math.random()*Math.PI*2,x=Math.random()*85+15;g.push({xOffset:Math.cos(S)*x*.8,yOffset:Math.sin(S)*x*1.3,type:Math.random()>.5?"Bifurcation":"Ridge Ending",detected:!1})}n.addEventListener("click",()=>{h=!0,u=0,g.forEach(m=>m.detected=!1),s.textContent="SCANNING: EXTRACTING FRICTION RIDGES...",s.className="fingerprint-match-status scanning",o.className="hud-blink-dot cyan"}),i.addEventListener("click",()=>{f=!f,i.textContent=`Toggle Minutiae Points: ${f?"ON":"OFF"}`});function p(){t.clearRect(0,0,l,c);const m=l/2,S=c/2;t.strokeStyle="rgba(56, 189, 248, 0.05)",t.lineWidth=1;const x=24;for(let E=0;E<l;E+=x)t.beginPath(),t.moveTo(E,0),t.lineTo(E,c),t.stroke();for(let E=0;E<c;E+=x)t.beginPath(),t.moveTo(0,E),t.lineTo(l,E),t.stroke();const M=26;for(let E=1;E<=M;E++){const v=E*4.8,b=E*7.6;t.strokeStyle="#38bdf8",t.lineWidth=1.8,t.shadowColor="#0284c7",t.shadowBlur=6,t.beginPath(),t.ellipse(m,S-10,v,b,0,0,Math.PI*2),t.stroke(),t.shadowBlur=0}if(h){u+=.008,u>1&&(h=!1,s.textContent="STATUS: MATCH VERIFIED (ID: 001)",s.className="fingerprint-match-status verified",a.textContent="98.9% (VERIFIED)",a.className="safe",o.className="hud-blink-dot green");const E=S-170+u*340,v=t.createLinearGradient(m-150,E,m+150,E);v.addColorStop(0,"transparent"),v.addColorStop(.5,"#38bdf8"),v.addColorStop(1,"transparent"),t.strokeStyle=v,t.lineWidth=3,t.shadowColor="#38bdf8",t.shadowBlur=18,t.beginPath(),t.moveTo(m-150,E),t.lineTo(m+150,E),t.stroke(),t.shadowBlur=0,g.forEach(b=>{const A=S+b.yOffset;E>=A&&(b.detected=!0)})}f&&g.forEach(E=>{const v=m+E.xOffset,b=S+E.yOffset;(E.detected||!h)&&(t.strokeStyle="#f59e0b",t.lineWidth=1.5,t.beginPath(),t.arc(v,b,4.5,0,Math.PI*2),t.stroke(),t.fillStyle="#f59e0b",t.beginPath(),t.arc(v,b,1.8,0,Math.PI*2),t.fill())}),d=requestAnimationFrame(p)}return d=requestAnimationFrame(p),{dispose:()=>{d&&cancelAnimationFrame(d),window.removeEventListener("resize",_)}}}let mn=null;function Wf(r){let e=document.getElementById("project-modal");e||(e=document.createElement("div"),e.id="project-modal",e.className="project-modal-backdrop",document.body.appendChild(e)),mn&&typeof mn.dispose=="function"&&(mn.dispose(),mn=null),e.innerHTML=`
    <div class="project-modal-wrapper" role="dialog" aria-modal="true" aria-labelledby="modal-project-title">

      <!-- ── Header ── -->
      <div class="modal-header">
        <div class="modal-title-group">
          <span class="modal-eyebrow">PROJECT ${r.number} · ${r.type.toUpperCase()}</span>
          <h2 id="modal-project-title">${r.title}</h2>
        </div>
        <div class="modal-actions">
          <span class="modal-status-badge">${r.status}</span>
          <button class="modal-close-btn" id="modal-close-btn" aria-label="Close project modal">✕</button>
        </div>
      </div>

      <!-- ── Tab Bar ── -->
      <div class="modal-tabs">
        <button class="modal-tab-btn active" data-tab="demo">⚡ Interactive Simulation</button>
        <button class="modal-tab-btn" data-tab="specs">🛠 Engineering Specs &amp; Architecture</button>
      </div>

      <!-- ── Scrollable Content ── -->
      <div class="modal-content">

        <!-- Demo Tab: scene fills the panel -->
        <div class="modal-tab-pane active" id="tab-demo">
          <div class="project-scene-host" id="project-scene-host"></div>
        </div>

        <!-- Specs Tab -->
        <div class="modal-tab-pane" id="tab-specs">
          <div class="specs-grid">

            <!-- Left column -->
            <div class="specs-section">
              <h3>System Overview</h3>
              <p>${r.overview}</p>

              <h3>Working Principle &amp; Logic</h3>
              <p>${r.workingPrinciple}</p>

              <h3>Target Applications</h3>
              <ul class="specs-list">
                ${r.applications.map(o=>`<li>${o}</li>`).join("")}
              </ul>
            </div>

            <!-- Right column -->
            <div class="specs-section">
              <h3>Hardware &amp; Component Bill of Materials</h3>
              <table class="specs-table">
                <thead>
                  <tr><th>Subsystem</th><th>Specification &amp; Role</th></tr>
                </thead>
                <tbody>
                  ${r.components.map(o=>`<tr><td><strong>${o.name}</strong></td><td>${o.spec}</td></tr>`).join("")}
                </tbody>
              </table>

              <h3>Data &amp; Signal Pipeline</h3>
              <ol class="specs-pipeline">
                ${r.architecture.map(o=>`<li>${o}</li>`).join("")}
              </ol>

              <div class="specs-disclaimer">
                <strong>Project Integrity:</strong> ${r.disclaimer}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  `,e.classList.add("open"),document.body.style.overflow="hidden";const t=e.querySelector("#project-scene-host");lb(r.id,t);const n=()=>{mn&&typeof mn.dispose=="function"&&(mn.dispose(),mn=null),e.classList.remove("open"),document.body.style.overflow=""};e.querySelector("#modal-close-btn").addEventListener("click",n),e.addEventListener("click",o=>{o.target===e&&n()});const i=o=>{o.key==="Escape"&&e.classList.contains("open")&&(n(),window.removeEventListener("keydown",i))};window.addEventListener("keydown",i);const s=e.querySelectorAll(".modal-tab-btn"),a=e.querySelectorAll(".modal-tab-pane");s.forEach(o=>{o.addEventListener("click",()=>{s.forEach(c=>c.classList.remove("active")),a.forEach(c=>c.classList.remove("active")),o.classList.add("active");const l=e.querySelector(`#tab-${o.dataset.tab}`);l&&l.classList.add("active")})})}function lb(r,e){if(e)switch(r){case"radar-system":mn=eb(e);break;case"smart-agriculture":mn=tb(e);break;case"lpg-safety":mn=nb(e);break;case"voice-assistant":mn=ib(e);break;case"helmet-detection":mn=rb(e);break;case"face-recognition":mn=sb(e);break;case"nfc-card":mn=ab(e);break;case"fingerprint-system":mn=ob(e);break;default:e.innerHTML=`
        <div style="display:flex;align-items:center;justify-content:center;height:100%;
                    color:#948979;font-family:'DM Mono',monospace;font-size:13px;
                    padding:24px;text-align:center;">
          Interactive simulation for <strong style="color:#DFD0B8;margin:0 4px">${r}</strong> is loading…
        </div>`}}function cb(r){const e="mritunjay20";r.innerHTML=`
    <div class="github-city-card">
      <div class="city-header-bar">
        <div class="city-brand-title">
          <svg viewBox="0 0 24 24" class="github-icon-svg" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <div>
            <h3>My <span>GitHub</span> Contributions</h3>
            <p>Small steps • Big dreams • Building my future</p>
          </div>
        </div>

        <div class="city-motto-badge">
          <span>Code today, a better tomorrow</span>
          <code>&lt;/&gt;</code>
        </div>
      </div>

      <div class="city-canvas-wrapper">
        <canvas id="github-city-canvas"></canvas>

        <!-- Top Left Legend Card (from Image 3) -->
        <div class="city-legend-card">
          <div class="legend-row">
            <span class="legend-box lvl-4"></span>
            <span class="legend-text">More contributions</span>
            <strong class="legend-val">96+</strong>
          </div>
          <div class="legend-row">
            <span class="legend-box lvl-3"></span>
            <span class="legend-text">Good progress</span>
            <strong class="legend-val">51–95</strong>
          </div>
          <div class="legend-row">
            <span class="legend-box lvl-2"></span>
            <span class="legend-text">Some activity</span>
            <strong class="legend-val">21–50</strong>
          </div>
          <div class="legend-row">
            <span class="legend-box lvl-1"></span>
            <span class="legend-text">Little activity</span>
            <strong class="legend-val">1–20</strong>
          </div>
          <div class="legend-row">
            <span class="legend-box lvl-0"></span>
            <span class="legend-text">No activity</span>
            <strong class="legend-val">0</strong>
          </div>
        </div>

        <!-- Left Day Axis Labels -->
        <div class="city-days-axis">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>

        <!-- City Hover Tooltip -->
        <div id="city-building-tooltip" class="city-tooltip" role="tooltip"></div>
      </div>

      <div class="city-footer-bar">
        <div class="city-footer-motto">
          <span>🌲 Every contribution builds a better me 🌲</span>
        </div>
        <a href="https://github.com/${e}" target="_blank" rel="noopener noreferrer" class="btn primary small city-github-btn">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span>View my GitHub →</span>
        </a>
      </div>
    </div>
  `;const t=r.querySelector("#github-city-canvas"),n=r.querySelector("#city-building-tooltip");if(!t)return;const i=t.parentElement,s=new Di;s.background=new Ye(264211);const a=new Bt(38,1,.1,100);a.position.set(0,7.8,11.2),a.lookAt(0,-.6,0);const o=new Li({canvas:t,antialias:!0,alpha:!0});o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.shadowMap.enabled=!0;const l=new Ji(4674921,1.2);s.add(l);const c=new Zi(12443902,2.4);c.position.set(8,12,10),c.castShadow=!0,s.add(c);const u=new di(65395,14,18);u.position.set(0,3,2),s.add(u);const h=new bt;s.add(h);const f=new fo(24,8),d=new We({color:135977,metalness:.9,roughness:.15}),_=new Ne(f,d);_.rotation.x=-Math.PI/2,_.position.set(0,-.85,4.2),h.add(_);const g=new Ne(new Tt(18,.35,1.2),new We({color:1976635,roughness:.8}));g.position.set(0,-.7,1.6),h.add(g);const p=new Ne(new Tt(1.4,.38,3.8),new We({color:3359061,roughness:.6}));p.position.set(0,-.68,3.5),h.add(p);const m=new Ne(new Tt(.08,.08,3.8),new an({color:3718648}));m.position.set(-.65,-.45,3.5),h.add(m);const S=new Ne(new Tt(.08,.08,3.8),new an({color:3718648}));S.position.set(.65,-.45,3.5),h.add(S);for(let X=-8;X<=8;X+=1.2){if(Math.abs(X)<1)continue;const $=new bt;$.position.set(X,-.5,1.7);const le=new Ne(new An(.03,.04,.25),new We({color:4528643}));$.add(le);const ee=new Ne(new ci(.14,8,6),new We({color:1409085,roughness:.9}));ee.position.y=.22,$.add(ee),h.add($)}[[-6.5,2.8,-3.2,.9,3.4,.9,1976635],[-4.8,3.4,-3.8,1.1,4.6,1.1,988970],[-2.8,3.8,-4.2,1.3,5.4,1.3,1976635],[0,4.8,-4.5,1.5,7.2,1.5,988970],[2.8,3.8,-4.2,1.3,5.4,1.3,1976635],[4.8,3.4,-3.8,1.1,4.6,1.1,988970],[6.5,2.8,-3.2,.9,3.4,.9,1976635]].forEach(([X,$,le,ee,me,Te,Re])=>{const Ue=new We({color:Re,roughness:.5}),P=new Ne(new Tt(ee,me,Te),Ue);if(P.position.set(X,$-1,le),h.add(P),me>4.5){const ne=new Ne(new An(.02,.04,1.2,8),new an({color:65395}));ne.position.set(X,$+me/2-.4,le),h.add(ne)}});const M=new Ne(new An(.45,.45,.3,16),new an({color:3718648}));M.position.set(0,5.8,-4.5),h.add(M);const E=[],v=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],b=28,A=7,w=.38,y=.34,C=-14/2,L=-3.3600000000000003/2+.3,U=[{color:1975864,glow:0,heightMin:.25,heightMax:.35,label:"0 contributions"},{color:292951,glow:366185,heightMin:.45,heightMax:.65,label:"1–20 contributions"},{color:1096065,glow:3462041,heightMin:.75,heightMax:1.15,label:"21–50 contributions"},{color:15381256,glow:16436245,heightMin:1.25,heightMax:1.65,label:"51–95 contributions"},{color:65395,glow:65395,heightMin:1.85,heightMax:2.35,label:"96+ contributions"}];for(let X=0;X<b;X++)for(let $=0;$<A;$++){const le=(Math.sin(X*.4+$*.7)+Math.cos(X*.25))*.5+.5;let ee=0;le>.82?ee=4:le>.62?ee=3:le>.42?ee=2:le>.25&&(ee=1);const me=U[ee],Te=Pt.lerp(me.heightMin,me.heightMax,Math.random()),Re=new We({color:me.color,emissive:me.glow,emissiveIntensity:ee>=3?.9:.25,roughness:.3,metalness:.4}),Ue=new Ne(new Tt(w,Te,y),Re),P=C+X*(w+.12),ne=L+$*(y+.14);Ue.position.set(P,-.6+Te/2,ne),Ue.userData={week:X+1,day:v[$],level:ee,label:me.label,count:ee===4?"112 commits":ee===3?"64 commits":ee===2?"36 commits":ee===1?"12 commits":"0 commits",baseY:Ue.position.y,baseScaleY:1},h.add(Ue),E.push(Ue)}const B=new Xh,N=new _e(100,100);let O=null;t.addEventListener("pointermove",X=>{const $=t.getBoundingClientRect();N.x=(X.clientX-$.left)/$.width*2-1,N.y=-((X.clientY-$.top)/$.height*2-1)}),t.addEventListener("pointerleave",()=>{N.set(100,100),O=null,n&&n.classList.remove("visible")});let H=!1,k=0,re=0;t.addEventListener("pointerdown",X=>{H=!0,k=X.clientX,re=X.clientY}),window.addEventListener("pointermove",X=>{H&&(h.rotation.y+=(X.clientX-k)*.005,h.rotation.x+=(X.clientY-re)*.003,h.rotation.x=Math.max(-.25,Math.min(.25,h.rotation.x)),k=X.clientX,re=X.clientY)}),window.addEventListener("pointerup",()=>{H=!1});function I(){const X=i.clientWidth,$=Math.max(440,i.clientHeight||480);o.setSize(X,$,!1),a.aspect=X/$,a.updateProjectionMatrix()}new ResizeObserver(I).observe(i),I();const Q=new Ni;let ge=null;function xe(){ge=requestAnimationFrame(xe);const X=Q.getElapsedTime();_.material.roughness=.15+Math.sin(X*1.5)*.05,B.setFromCamera(N,a);const $=B.intersectObjects(E);if($.length>0){const le=$[0].object;if(le!==O){if(O&&O.scale.set(1,1,1),O=le,O.scale.set(1.15,1.15,1.15),n){const ee=le.userData;n.innerHTML=`
            <strong>${ee.day}, Week ${ee.week}</strong>
            <span style="color:#00ff73;display:block;margin-top:2px;">${ee.count} (${ee.label})</span>
          `,n.classList.add("visible")}t.style.cursor="pointer"}}else O&&(O.scale.set(1,1,1),O=null),n&&n.classList.remove("visible"),t.style.cursor="grab";o.render(s,a)}return ge=requestAnimationFrame(xe),{dispose:()=>{ge&&cancelAnimationFrame(ge),o.dispose()}}}function ub(r){if(!r)return;const e=r.parentElement,t=new Di,n=new Bt(35,1,.1,100);n.position.set(0,0,5.8);const i=new Li({canvas:r,antialias:!0,alpha:!0});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.outputColorSpace=Tn,t.add(new Ji(15485081,1.4));const s=new Zi(16773365,2.8);s.position.set(2,4,4),t.add(s);const a=new di(15485081,16,10);a.position.set(-3,2,2),t.add(a);const o=new di(3718648,12,10);o.position.set(3,-2,1),t.add(o);const l=new bt;t.add(l);const c=0,u=0,h=new Km;h.moveTo(c+.25,u+.25),h.bezierCurveTo(c+.25,u+.25,c+.2,u,c,u),h.bezierCurveTo(c-.3,u,c-.3,u+.35,c-.3,u+.35),h.bezierCurveTo(c-.3,u+.55,c-.1,u+.77,c+.25,u+.95),h.bezierCurveTo(c+.6,u+.77,c+.8,u+.55,c+.8,u+.35),h.bezierCurveTo(c+.8,u+.35,c+.8,u,c+.5,u),h.bezierCurveTo(c+.35,u,c+.25,u+.25,c+.25,u+.25);const f={depth:.36,bevelEnabled:!0,bevelSegments:8,steps:2,bevelSize:.14,bevelThickness:.14},d=new Vh(h,f);d.center();const _=new Wh({color:15485081,emissive:9133302,emissiveIntensity:.45,metalness:.25,roughness:.002,clearcoat:1,clearcoatRoughness:.1}),g=new Ne(d,_);g.rotation.z=Math.PI,g.scale.set(1.5,1.5,1.5),l.add(g);const p=new Ne(new oa(1.65,.015,8,64),new an({color:15485081,transparent:!0,opacity:.6}));p.rotation.x=Math.PI/2.8,l.add(p);const m=new Ne(new oa(1.85,.015,8,64),new an({color:3718648,transparent:!0,opacity:.5}));m.rotation.x=-Math.PI/3.2,m.rotation.y=Math.PI/4,l.add(m);const S=new Vt,x=[];for(let L=0;L<90;L++){const U=Math.random()*Math.PI*2,B=Math.random()*1.5+.8;x.push(Math.cos(U)*B,(Math.random()-.5)*2.2,Math.sin(U)*B)}S.setAttribute("position",new vt(x,3));const M=new is({color:16020150,size:.035,transparent:!0,opacity:.8});l.add(new aa(S,M));let E=0,v=0,b=!1;r.addEventListener("pointermove",L=>{const U=r.getBoundingClientRect();E=(L.clientX-U.left)/U.width*2-1,v=-((L.clientY-U.top)/U.height*2-1)}),r.addEventListener("pointerenter",()=>{b=!0}),r.addEventListener("pointerleave",()=>{b=!1,E=0,v=0}),r.addEventListener("click",()=>{xi.to(g.scale,{x:1.85,y:1.85,z:1.85,duration:.12,yoyo:!0,repeat:3,ease:"power2.out",onComplete:()=>{g.scale.set(1.5,1.5,1.5)}})});function A(){const L=e.clientWidth,U=Math.max(300,e.clientHeight||340);i.setSize(L,U,!1),n.aspect=L/U,n.updateProjectionMatrix()}new ResizeObserver(A).observe(e),A();const w=new Ni;let y=null;function C(){y=requestAnimationFrame(C);const L=w.getElapsedTime(),U=b?6:3.2,B=Math.pow(Math.max(0,Math.sin(L*U)),8)*.14,N=Math.pow(Math.max(0,Math.sin(L*U+.45)),8)*.08,O=1+B+N;g.scale.set(1.5*O,1.5*O,1.5*O);const H=E*.6+L*.35,k=-v*.4;l.rotation.y=Pt.lerp(l.rotation.y,H,.06),l.rotation.x=Pt.lerp(l.rotation.x,k,.06),p.rotation.z=L*.4,m.rotation.z=-L*.3,i.render(t,n)}return y=requestAnimationFrame(C),{dispose:()=>{y&&cancelAnimationFrame(y),i.dispose()}}}function hb(){const r=document.getElementById("main-nav"),e=document.getElementById("menu-toggle"),t=document.querySelectorAll("#main-nav a");e&&r&&(e.addEventListener("click",()=>{const o=r.classList.toggle("nav-open");e.setAttribute("aria-expanded",String(o)),e.textContent=o?"✕":"☰"}),t.forEach(o=>{o.addEventListener("click",()=>{r.classList.remove("nav-open"),e.setAttribute("aria-expanded","false"),e.textContent="☰"})}));const n=document.querySelectorAll("main section[id]"),i={rootMargin:"-30% 0px -50% 0px",threshold:0},s=new IntersectionObserver(o=>{o.forEach(l=>{if(l.isIntersecting){const c=l.target.id;t.forEach(u=>{const h=u.getAttribute("href");u.classList.toggle("active",h===`#${c}`)})}})},i);n.forEach(o=>s.observe(o)),window.matchMedia("(prefers-reduced-motion: reduce)").matches&&document.documentElement.classList.add("reduced-motion")}xi.registerPlugin(rt);const kt=(r,e=document)=>e.querySelector(r),ks=(r,e=document)=>[...e.querySelectorAll(r)],Xf=kt("#current-year");Xf&&(Xf.textContent=new Date().getFullYear());function db(){const r=kt("#projects-grid");r&&(r.innerHTML=Rd.map(e=>`
    <article class="project-card reveal" data-project-id="${e.id}" tabindex="0" role="button" aria-label="Open ${e.title} project details">
      <div class="project-card-header">
        <span>${e.number} / ${e.type}</span>
        <span class="project-status-pill">${e.status}</span>
      </div>

      <div class="project-art-stage">
        <div class="project-art-grid"></div>
        <span class="project-symbol" style="color: ${e.accentColor};">${e.symbol}</span>
      </div>

      <div class="project-card-body">
        <h3>
          <span>${e.title}</span>
          <span class="project-arrow">↗</span>
        </h3>
        <p>${e.shortDesc}</p>
        <div class="project-tag-row">
          ${e.tags.map(t=>`<span>${t}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join(""),ks(".project-card").forEach(e=>{const t=Rd.find(n=>n.id===e.dataset.projectId);e.addEventListener("click",()=>Wf(t)),e.addEventListener("keydown",n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),Wf(t))})}))}function fb(){const r=kt("#capabilities-grid");r&&(r.innerHTML=H0.map(e=>`
    <article class="capability-card reveal">
      <span class="cap-number">${e.number}</span>
      <span class="cap-icon">${e.icon}</span>
      <h3>${e.title}</h3>
      <span class="cap-tagline">${e.tagline}</span>
      <p>${e.description}</p>
      <ul class="cap-highlights">
        ${e.highlights.map(t=>`<li>${t}</li>`).join("")}
      </ul>
    </article>
  `).join(""))}function pb(){const r=kt("#skills-tags-container");r&&(r.innerHTML=Rl.map(e=>`
    <button class="skill-tag-pill" data-skill-id="${e.id}" title="Click to view ${e.name} notes">
      <span class="lang-dot" style="background: ${e.accent};"></span>
      <span>${e.name}</span>
    </button>
  `).join(""),ks(".skill-tag-pill").forEach(e=>{e.addEventListener("click",()=>{const t=Rl.find(n=>n.id===e.dataset.skillId);tg(t)})}))}function tg(r){if(!r)return;const e=kt("#skill-detail-modal");if(!e)return;e.innerHTML=`
    <div class="detail-card">
      <button class="detail-close-btn" id="skill-close-btn" aria-label="Close modal">✕</button>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
        <span class="lang-dot" style="width:12px;height:12px;background:${r.accent};"></span>
        <h3 style="font-size:20px;color:#fff;">${r.name}</h3>
        <span style="font-family:var(--font-mono);font-size:10px;color:var(--cyan-accent);background:rgba(56,189,248,0.12);padding:2px 8px;border-radius:99px;">${r.category}</span>
      </div>
      <p style="font-size:13px;line-height:1.8;color:var(--text-muted);margin-bottom:14px;">${r.description}</p>
      <div style="background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:var(--radius-sm);padding:14px;margin-bottom:18px;">
        <strong style="display:block;font-size:12px;color:#fff;margin-bottom:4px;">How Mritunjay applies this:</strong>
        <p style="font-size:12px;color:var(--text-dim);margin:0;line-height:1.6;">${r.experience}</p>
      </div>
      <button class="btn primary small" id="skill-ok-btn" style="width:100%;">Close Details</button>
    </div>
  `,e.classList.add("open");const t=()=>e.classList.remove("open");e.querySelector("#skill-close-btn").onclick=t,e.querySelector("#skill-ok-btn").onclick=t,e.onclick=n=>{n.target===e&&t()}}function mb(){const r=kt("#socials-grid");r&&(r.innerHTML=G0.map(e=>`
    <a class="social-card" href="${e.url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${e.name} profile">
      <div class="social-symbol-box" style="border-color: ${e.iconColor}33; color: ${e.iconColor};">
        ${e.symbol}
      </div>
      <div class="social-meta-info">
        <strong>${e.name} ${e.isVerified?"✓":""}</strong>
        <small>${e.handle}</small>
        <em>${e.description}</em>
      </div>
      <span class="social-arrow">↗</span>
    </a>
  `).join(""))}document.addEventListener("DOMContentLoaded",()=>{var f,d,_;db(),fb(),pb(),mb(),hb();const r=kt("#avatar-canvas"),e=kt("#avatar-tooltip");let t=null;if(r)try{t=j1(r,e),ks(".hotspot-pill").forEach(p=>{p.addEventListener("click",()=>{const m=p.dataset.hotspot;t.handleAction(m)})});const g={normal:kt("#expr-normal-btn"),smile:kt("#expr-smile-btn"),happy:kt("#expr-happy-btn"),serious:kt("#expr-serious-btn")};Object.entries(g).forEach(([p,m])=>{m&&m.addEventListener("click",()=>{Object.values(g).forEach(S=>S==null?void 0:S.classList.remove("active")),m.classList.add("active"),t.setExpression(p)})})}catch(g){console.warn("Avatar 3D canvas could not initialize:",g)}const n=kt("#brain-visual-container");if(n)try{K1(n)}catch(g){console.warn("Brain canvas could not initialize:",g)}const i=kt("#skills-canvas"),s=kt("#skills-tooltip");if(i)try{Z1(i,s,g=>{tg(g)})}catch(g){console.warn("Skills 3D canvas could not initialize:",g)}const a=kt("#world-canvas"),o=kt("#monument-tooltip");let l=null;if(a)try{l=Q1(a,o),(f=kt("#world-zoom-in"))==null||f.addEventListener("click",()=>l.zoomIn()),(d=kt("#world-zoom-out"))==null||d.addEventListener("click",()=>l.zoomOut()),(_=kt("#world-reset"))==null||_.addEventListener("click",()=>l.resetView()),ks(".monument-pill-btn").forEach(g=>{g.addEventListener("click",()=>{ks(".monument-pill-btn").forEach(m=>m.classList.remove("active")),g.classList.add("active");const p=g.dataset.monument;l.focusMonument(p)})})}catch(g){console.warn("World 3D canvas could not initialize:",g)}const c=kt("#github-section-container");c&&cb(c);const u=kt("#heart-3d-canvas");if(u)try{ub(u)}catch(g){console.warn("3D Heart canvas could not initialize:",g)}ks(".reveal").forEach(g=>{xi.fromTo(g,{y:28,opacity:0},{y:0,opacity:1,duration:.85,ease:"power3.out",scrollTrigger:{trigger:g,start:"top 88%",once:!0}})})});document.addEventListener("visibilitychange",()=>{document.hidden?document.title="💤 Mritunjay Saini — Developer & Maker":document.title="Mritunjay Saini — 3D Developer & Robotics Portfolio"});
