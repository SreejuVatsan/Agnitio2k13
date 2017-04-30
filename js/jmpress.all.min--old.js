/*!
 * jmpress.js v0.4.4
 * http://shama.github.com/jmpress.js
 *
 * A jQuery plugin to build a website on the infinite canvas.
 *
 * Copyright 2012 Kyle Robinson Young @shama & Tobias Koppers @sokra
 * Licensed MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Based on the foundation laid by Bartek Szopka @bartaz
 */
(function(a,b,c,d){function f(a){if(!a)return;var b=1+a.substr(1).search(/[A-Z]/),c=a.substr(0,b).toLowerCase(),d=a.substr(b).toLowerCase();return"-"+c+"-"+d}function g(a){return a?a+",":""}function k(e){function v(b,c){var d=o(b),e={oldStyle:a(b).attr("style")||""},f={data:d,stepData:e};z.call(this,"beforeInitStep",a(b),f),e.delegate=d.delegate,z.call(this,"initStep",a(b),f),a(b).data("stepData",e),a(b).attr("id")||a(b).attr("id","step-"+(c+1)),z.call(this,"applyStep",a(b),f)}function w(b){var c=a(b).data("stepData");a(b).attr("style",c.oldStyle),z.call(this,"unapplyStep",a(b),{stepData:c})}function x(b){z.call(this,"unapplyStep",a(b),{stepData:b.data("stepData")}),z.call(this,"applyStep",a(b),{stepData:b.data("stepData")})}function y(){s&&z.call(this,"setInactive",s,{stepData:a(s).data("stepData"),reason:"deinit"}),r.jmpressClass&&a(k).removeClass(r.jmpressClass),z.call(this,"beforeDeinit",a(this),{}),a(j.stepSelector,k).each(function(a){w.call(k,this)}),l.attr("style",p.container),j.fullscreen&&a("html").attr("style",""),m.attr("style",p.area),a(q).children().each(function(){k.append(a(this))}),j.fullscreen?q.remove():(q.remove(),m.remove()),z.call(this,"afterDeinit",a(this),{}),a(k).data("jmpressmethods",!1)}function z(b,c,d){d.settings=j,d.current=r,d.container=l,d.parents=c?A(c):null,d.current=r,d.jmpress=this;var e={};return a.each(j[b],function(a,b){e.value=b.call(k,c,d)||e.value}),e.value}function A(b){return a(b).parentsUntil(k).not(k).filter(j.stepSelector)}function B(a){return C({step:s,substep:t},a)}function C(b,c){var e;a.isPlainObject(b)&&(e=b.substep,b=b.step),typeof b=="string"&&(b=k.find(b).first());if(!b||!a(b).data("stepData"))return!1;D.call(this);var f=a(b).data("stepData"),g=!1;z.call(this,"beforeChange",b,{stepData:f,reason:c,cancel:function(){g=!0}});if(g)return d;var h={},i=b;a(b).data("stepData").delegate&&(i=a(b).parentsUntil(k).filter(j.stepSelector).filter(f.delegate)||a(b).near(f.delegate)||a(b).near(f.delegate,!0)||a(f.delegate,k),f=i.data("stepData")),u&&z.call(this,"setInactive",u,{stepData:a(u).data("stepData"),delegatedFrom:s,reason:c,target:h,nextStep:i,nextSubstep:e,nextStepData:f});var l={stepData:f,delegatedFrom:b,reason:c,target:h,substep:e,prevStep:u,prevSubstep:t,prevStepData:u&&a(u).data("stepData")};return z.call(this,"beforeActive",i,l),z.call(this,"setActive",i,l),r.jmpressClass&&a(k).removeClass(r.jmpressClass),a(k).addClass(r.jmpressClass="step-"+a(i).attr("id")),r.jmpressDelegatedClass&&a(k).removeClass(r.jmpressDelegatedClass),a(k).addClass(r.jmpressDelegatedClass="delegating-step-"+a(b).attr("id")),z.call(this,"applyTarget",i,a.extend({canvas:q,area:m,beforeActive:u},l)),s=b,t=l.substep,u=i,r.idleTimeout&&clearTimeout(r.idleTimeout),r.idleTimeout=setTimeout(function(){z.call(this,"idle",i,l)},Math.max(1,j.transitionDuration-100)),i}function D(){(function b(){function e(){(a(l).scrollTop()!==0||a(l).scrollLeft()!==0)&&b()}if(a(l)[0].tagName==="BODY")try{c.scrollTo(0,0)}catch(d){}a(l).scrollTop(0),a(l).scrollLeft(0),setTimeout(e,1),setTimeout(e,10),setTimeout(e,100),setTimeout(e,200),setTimeout(e,400)})()}function E(a){return C.call(this,a,"jump")}function F(){return C.call(this,z.call(this,"selectNext",s,{stepData:a(s).data("stepData"),substep:t}),"next")}function G(){return C.call(this,z.call(this,"selectPrev",s,{stepData:a(s).data("stepData"),substep:t}),"prev")}function H(){return C.call(this,z.call(this,"selectHome",s,{stepData:a(s).data("stepData")}),"home")}function I(){return C.call(this,z.call(this,"selectEnd",s,{stepData:a(s).data("stepData")}),"end")}function J(b){return n(q,b||{}),a(q)}function K(){return u&&a(u)}function L(b,c,d){if(!i[b])a.error("callback "+b+" is not registered.");else return z.call(this,b,c,d)}function M(){var a=navigator.userAgent.toLowerCase(),b=a.search(/(iphone)|(ipod)|(android)/)===-1;return b}e=a.extend(!0,{},e||{});var f={},g=null;for(g in i)f[g]=a.isFunction(e[g])?[e[g]]:e[g],e[g]=[];var j=a.extend(!0,{},h,e);for(g in i)f[g]&&Array.prototype.push.apply(j[g],f[g]);var k=a(this),l=null,m=null,p={container:"",area:""},q=null,r=null,s=!1,t=null,u=!1;k.data("jmpressmethods",{select:C,reselect:B,scrollFix:D,goTo:E,next:F,prev:G,home:H,end:I,canvas:J,container:function(){return l},settings:function(){return j},active:K,current:function(){return r},fire:L,init:function(b){v.call(this,a(b),r.nextIdNumber++)},deinit:function(b){b?w.call(this,a(b)):y.call(this)},reapply:x});if(M()===!1){j.notSupportedClass&&k.addClass(j.notSupportedClass);return}j.notSupportedClass&&k.removeClass(j.notSupportedClass);var N=a(j.stepSelector,k);l=k,m=a("<div />"),q=a("<div />"),a(k).children().filter(N).each(function(){q.append(a(this))}),j.fullscreen&&(l=a("body"),a("html").css({overflow:"hidden"}),m=k),p.area=m.attr("style")||"",p.container=l.attr("style")||"",j.fullscreen?(l.css({height:"100%"}),k.append(q)):(l.css({position:"relative"}),m.append(q),k.append(m)),a(l).addClass(j.containerClass),a(m).addClass(j.areaClass),a(q).addClass(j.canvasClass),b.documentElement.style.height="100%",l.css({overflow:"hidden"});var O={position:"absolute",transitionDuration:"0s"};O=a.extend({},j.animation,O),n(m,O),n(m,{top:"50%",left:"50%",perspective:"1000px"}),n(q,O),r={},z.call(this,"beforeInit",null,{}),N.each(function(a){v.call(k,this,a)}),r.nextIdNumber=N.length,z.call(this,"afterInit",null,{}),C.call(this,z.call(this,"selectInitialStep","init",{})),j.initClass&&a(N).removeClass(j.initClass)}function l(){return h}function m(b,c){a.isFunction(c)?q[b]?a.error("function "+b+" is already registered."):q[b]=c:i[b]?a.error("callback "+b+" is already registered."):(i[b]=1,h[b]=[])}function n(b,c){var d,f,g={};for(d in c)c.hasOwnProperty(d)&&(f=e(d),f!==null&&(g[f]=c[d]));return a(b).css(g),b}function o(b){function c(a){a=a.split("-");for(var b=1;b<a.length;b++)a[b]=a[b].substr(0,1).toUpperCase()+a[b].substr(1);return a.join("")}if(a(b)[0].dataset)return a.extend({},a(b)[0].dataset);var d={},e=a(b)[0].attributes;return a.each(e,function(a,b){b.nodeName.substr(0,5)==="data-"&&(d[c(b.nodeName.substr(5))]=b.nodeValue)}),d}function p(){return!!a(this).data("jmpressmethods")}"use strict";var e=function(){var a=b.createElement("dummy").style,c="Webkit Moz O ms Khtml".split(" "),e={};return function(b){if(typeof e[b]=="undefined"){var f=b.charAt(0).toUpperCase()+b.substr(1),g=(b+" "+c.join(f+" ")+f).split(" ");e[b]=null;for(var h in g)if(a[g[h]]!==d){e[b]=g[h];break}}return e[b]}}(),h={stepSelector:".step",containerClass:"",canvasClass:"",areaClass:"",notSupportedClass:"not-supported",fullscreen:!0,animation:{transformOrigin:"top left",transitionProperty:g(f(e("transform")))+g(f(e("perspective")))+"opacity",transitionDuration:"1s",transitionDelay:"500ms",transitionTimingFunction:"ease-in-out",transformStyle:"preserve-3d"},transitionDuration:1500},i={beforeChange:1,beforeInitStep:1,initStep:1,beforeInit:1,afterInit:1,beforeDeinit:1,afterDeinit:1,applyStep:1,unapplyStep:1,setInactive:1,beforeActive:1,setActive:1,selectInitialStep:1,selectPrev:1,selectNext:1,selectHome:1,selectEnd:1,idle:1,applyTarget:1};for(var j in i)h[j]=[];var q={init:k,initialized:p,deinit:function(){},css:n,pfx:e,defaults:l,register:m,dataset:o};a.fn.jmpress=function(b){function c(){var c=a(this).data("jmpressmethods");if(c&&c[b])return c[b].apply(this,Array.prototype.slice.call(arguments,1));if(q[b])return q[b].apply(this,Array.prototype.slice.call(arguments,1));if(i[b]&&c){var d=c.settings(),e=Array.prototype.slice.call(arguments,1)[0];a.isFunction(e)&&(d[b]=d[b]||[],d[b].push(e))}else{if(typeof b=="object"||!b)return k.apply(this,arguments);a.error("Method "+b+" does not exist on jQuery.jmpress")}return this}var d=arguments,e;return a(this).each(function(a,b){e=c.apply(b,d)}),e},a.extend({jmpress:function(b){if(q[b])return q[b].apply(this,Array.prototype.slice.call(arguments,1));if(i[b]){var c=Array.prototype.slice.call(arguments,1)[0];a.isFunction(c)?h[b].push(c):a.error("Second parameter should be a function: $.jmpress( callbackName, callbackFunction )")}else a.error("Method "+b+" does not exist on jQuery.jmpress")}})})(jQuery,document,window),function(a,b,c,d){function e(b,c,d,e){var f;return b.each(function(b,g){if(e){f=c(g,d,e);if(f)return!1}if(a(g).is(d))return f=g,!1;if(!e){f=c(g,d,e);if(f)return!1}}),f}function f(b,c,d){var g=a(b).children();return d&&(g=a(g.get().reverse())),e(g,f,c,d)}function g(b,c,d){return e(a(b)[d?"prevAll":"nextAll"](),f,c,d)}function h(b,c,d){var e,f=a(b).parents();return f=a(f.get()),a.each(f.get(),function(b,f){if(d&&a(f).is(c))return e=f,!1;e=g(f,c,d);if(e)return!1}),e}"use strict",a.fn.near=function(b,c){var d=[];return a(this).each(function(a,e){var i=(c?!1:f(e,b,c))||g(e,b,c)||h(e,b,c);i&&d.push(i)}),a(d)}}(jQuery,document,window),function(a,b,c,d){function e(a){return Math.round(1e4*a)/1e4+""}"use strict";var f={3:{transform:function(b,c){var d="translate(-50%,-50%)";a.each(c,function(a,b){var c=["X","Y","Z"],f;if(b[0]==="translate")d+=" translate3d("+e(b[1]||0)+"px,"+e(b[2]||0)+"px,"+e(b[3]||0)+"px)";else if(b[0]==="rotate"){var g=b[4]?[1,2,3]:[3,2,1];for(f=0;f<3;f++)d+=" rotate"+c[g[f]-1]+"("+e(b[g[f]]||0)+"deg)"}else if(b[0]==="scale")for(f=0;f<3;f++)d+=" scale"+c[f]+"("+e(b[f+1]||1)+")"}),a.jmpress("css",b,a.extend({},{transform:d}))}},2:{transform:function(b,c){var d="translate(-50%,-50%)";a.each(c,function(a,b){var c=["X","Y"];if(b[0]==="translate")d+=" translate("+e(b[1]||0)+"px,"+e(b[2]||0)+"px)";else if(b[0]==="rotate")d+=" rotate("+e(b[3]||0)+"deg)";else if(b[0]==="scale")for(var f=0;f<2;f++)d+=" scale"+c[f]+"("+e(b[f+1]||1)+")"}),a.jmpress("css",b,a.extend({},{transform:d}))}},1:{transform:function(b,c){var d={top:0,left:0};a.each(c,function(a,b){var c=["X","Y"];b[0]==="translate"&&(d.left=Math.round(b[1]||0)+"px",d.top=Math.round(b[2]||0)+"px")}),b.animate(d,1e3)}}},g=function(){return a.jmpress("pfx","perspective")?f[3]:a.jmpress("pfx","transform")?f[2]:f[1]}();a.jmpress("defaults").reasonableAnimation={},a.jmpress("initStep",function(b,c){var d=c.data,e=c.stepData,f=parseFloat;a.extend(e,{x:f(d.x)||0,y:f(d.y)||0,z:f(d.z)||0,r:f(d.r)||0,phi:f(d.phi)||0,rotate:f(d.rotate)||0,rotateX:f(d.rotateX)||0,rotateY:f(d.rotateY)||0,rotateZ:f(d.rotateZ)||0,revertRotate:!1,scale:f(d.scale)||1,scaleX:f(d.scaleX)||!1,scaleY:f(d.scaleY)||!1,scaleZ:f(d.scaleZ)||1})}),a.jmpress("afterInit",function(b,c){var d=c.settings.stepSelector,e=c.current;e.perspectiveScale=1,e.maxNestedDepth=0;var f=a(c.jmpress).find(d).children(d);while(f.length)e.maxNestedDepth++,f=f.children(d)}),a.jmpress("applyStep",function(b,c){a.jmpress("css",a(b),{position:"absolute",transformStyle:"preserve-3d"}),c.parents.length>0&&a.jmpress("css",a(b),{top:"50%",left:"50%"});var d=c.stepData,e=[["translate",d.x||d.r*Math.sin(d.phi*Math.PI/180),d.y||-d.r*Math.cos(d.phi*Math.PI/180),d.z],["rotate",d.rotateX,d.rotateY,d.rotateZ||d.rotate,!0],["scale",d.scaleX||d.scale,d.scaleY||d.scale,d.scaleZ||d.scale]];g.transform(b,e)}),a.jmpress("setActive",function(b,c){var e=c.target,f=c.stepData,g=e.transform=[];e.perspectiveScale=1;for(var h=c.current.maxNestedDepth;h>(c.parents.length||0);h--)g.push(["scale"],["rotate"],["translate"]);g.push(["scale",1/(f.scaleX||f.scale),1/(f.scaleY||f.scale),1/f.scaleZ]),g.push(["rotate",-f.rotateX,-f.rotateY,-(f.rotateZ||f.rotate)]),g.push(["translate",-(f.x||f.r*Math.sin(f.phi*Math.PI/180)),-(f.y||-f.r*Math.cos(f.phi*Math.PI/180)),-f.z]),e.perspectiveScale*=f.scaleX||f.scale,a.each(c.parents,function(b,c){var d=a(c).data("stepData");g.push(["scale",1/(d.scaleX||d.scale),1/(d.scaleY||d.scale),1/d.scaleZ]),g.push(["rotate",-d.rotateX,-d.rotateY,-(d.rotateZ||d.rotate)]),g.push(["translate",-(d.x||d.r*Math.sin(d.phi*Math.PI/180)),-(d.y||-d.r*Math.cos(d.phi*Math.PI/180)),-d.z]),e.perspectiveScale*=d.scaleX||d.scale}),a.each(g,function(a,b){function e(e){c.current["rotate"+e+"-"+a]===d&&(c.current["rotate"+e+"-"+a]=b[e]||0);var f=c.current["rotate"+e+"-"+a],g=b[e]||0,h=f%360,i=g%360;h<0&&(h+=360),i<0&&(i+=360);var j=i-h;j<-180?j+=360:j>180&&(j-=360),c.current["rotate"+e+"-"+a]=b[e]=f+j}if(b[0]!=="rotate")return;e(1),e(2),e(3)})}),a.jmpress("applyTarget",function(b,c){var d=c.target,e,f=c.stepData,h=c.settings,i=d.perspectiveScale*1.3<c.current.perspectiveScale,j=d.perspectiveScale>c.current.perspectiveScale*1.3,k=-1;a.each(d.transform,function(a,b){if(b.length<=1)return;if(b[0]==="rotate"&&b[1]%360===0&&b[2]%360===0&&b[3]%360===0)return;if(b[0]==="scale")k=a;else return!1}),k!==c.current.oldLastScale&&(i=j=!1,c.current.oldLastScale=k);var l=[];if(k!==-1)while(k>=0)d.transform[k][0]==="scale"&&(l.push(d.transform[k]),d.transform[k]=["scale"]),k--;var m=h.animation;h.reasonableAnimation[c.reason]&&(m=a.extend({},m,h.reasonableAnimation[c.reason])),e={perspective:Math.round(d.perspectiveScale*1e3)+"px"},e=a.extend({},m,e),i||(e.transitionDelay="0s"),c.beforeActive||(e.transitionDuration="0s",e.transitionDelay="0s"),a.jmpress("css",c.area,e),g.transform(c.area,l),e=a.extend({},m),j||(e.transitionDelay="0s"),c.beforeActive||(e.transitionDuration="0s",e.transitionDelay="0s"),c.current.perspectiveScale=d.perspectiveScale,a.jmpress("css",c.canvas,e),g.transform(c.canvas,d.transform)})}(jQuery,document,window),function(a,b,c,d){"use strict";var e=a.jmpress,f="activeClass",g="nestedActiveClass",h=e("defaults");h[g]="nested-active",h[f]="active",e("setInactive",function(b,c){var d=c.settings,e=d[f],h=d[g];e&&a(b).removeClass(e),h&&a.each(c.parents,function(b,c){a(c).removeClass(h)})}),e("setActive",function(b,c){var d=c.settings,e=d[f],h=d[g];e&&a(b).addClass(e),h&&a.each(c.parents,function(b,c){a(c).addClass(h)})})}(jQuery,document,window),function(a,b,c,d){function f(b,c){return a(this).find(c.settings.stepSelector).first()}function g(b,c,d,e){if(!c)return!1;var f=d.settings.stepSelector;c=a(c);do{var g=c.near(f,e);if(g.length===0||g.closest(b).length===0)g=a(b).find(f)[e?"last":"first"]();if(!g.length)return!1;c=g}while(c.data("stepData").exclude);return c}"use strict";var e=a.jmpress;e("initStep",function(a,b){b.stepData.exclude=b.data.exclude&&["false","no"].indexOf(b.data.exclude)===-1}),e("selectInitialStep",f),e("selectHome",f),e("selectEnd",function(b,c){return a(this).find(c.settings.stepSelector).last()}),e("selectPrev",function(a,b){return g(this,a,b,!0)}),e("selectNext",function(a,b){return g(this,a,b)})}(jQuery,document,window),function(a,b,c,d){"use strict",a.jmpress("selectInitialStep",function(a,b){return b.settings.start})}(jQuery,document,window),function(a,b,c,d){function f(b,c,d){for(var e=0;e<c.length-1;e++){var f=c[e],g=c[e+1];a(b).jmpress("initialized")?a(f,b).data("stepData")[d]=g:a(f,b).attr("data-"+d,g)}}function g(b,c,d,e){var f=c.stepData;if(f[d]){var g=a(b).near(f[d],e);if(g&&g.length)return g;g=a(f[d],this)[e?"last":"first"]();if(g&&g.length)return g}}"use strict";var e=a.jmpress;e("register","route",function(a,b,c){typeof a=="string"&&(a=[a,a]),f(this,a,c?"prev":"next"),b||f(this,a.reverse(),c?"next":"prev")}),e("initStep",function(a,b){for(var c in{next:1,prev:1})b.stepData[c]=b.data[c]}),e("selectNext",function(a,b){return g.call(this,a,b,"next")}),e("selectPrev",function(a,b){return g.call(this,a,b,"prev",!0)})}(jQuery,document,window),function(a,b,c,d){"use strict";var e=a.jmpress,f="ajax:afterStepLoaded",g="ajax:loadStep";e("register",g),e("register",f),e("defaults").ajaxLoadedClass="loaded",e("initStep",function(b,c){c.stepData.src=a(b).attr("href")||c.data.src||!1,c.stepData.srcLoaded=!1}),e(g,function(b,c){var d=c.stepData,e=d&&d.src,g=c.settings;e&&(a(b).addClass(g.ajaxLoadedClass),d.srcLoaded=!0,a(b).load(e,function(d,e,g){a(c.jmpress).jmpress("fire",f,b,a.extend({},c,{response:d,status:e,xhr:g}))}))}),e("idle",function(b,c){if(!b)return;var d=c.settings,e=a(this),f=c.stepData,h=a(b).add(a(b).near(d.stepSelector)).add(a(b).near(d.stepSelector,!0)).add(e.jmpress("fire","selectPrev",b,{stepData:a(b).data("stepData")})).add(e.jmpress("fire","selectNext",b,{stepData:a(b).data("stepData")}));h.each(function(){var b=this,c=a(b).data("stepData");if(!c.src||c.srcLoaded)return;e.jmpress("fire",g,b,{stepData:a(b).data("stepData")})})}),e("setActive",function(b,c){var d=a(b).data("stepData");if(!d.src||d.srcLoaded)return;a(this).jmpress("fire",g,b,{stepData:a(b).data("stepData")})})}(jQuery,document,window),function(a,b,c,d){function g(){return""+Math.round(Math.random()*1e5,0)}function h(b){try{var e=a("#"+c.location.hash.replace(/^#\/?/,""));return e.length>0&&e.is(b.stepSelector)?e:d}catch(f){}}function i(a){var b="#/"+a;c.history&&c.history.pushState?c.location.hash!==b&&c.history.pushState({},"",b):c.location.hash!==b&&(c.location.hash=b)}"use strict";var e=a.jmpress,f="a[href^=#]";e("defaults").hash={use:!0,update:!0,bindChange:!0},e("selectInitialStep",function(b,d){var e=d.settings,j=e.hash,k=d.current,l=a(this);d.current.hashNamespace=".jmpress-"+g();if(j.use)return j.bindChange&&(a(c).bind("hashchange"+k.hashNamespace,function(a){var b=h(e);l.jmpress("initialized")&&l.jmpress("scrollFix"),b&&b.length&&(b.attr("id")!==l.jmpress("active").attr("id")&&l.jmpress("select",b),i(b.attr("id"))),a.preventDefault()}),a(f).on("click"+k.hashNamespace,function(b){var c=a(this).attr("href");try{a(c).is(e.stepSelector)&&(l.jmpress("select",c),b.preventDefault(),b.stopPropagation())}catch(d){}})),h(e)}),e("afterDeinit",function(b,d){a(f).off(d.current.hashNamespace),a(c).unbind(d.current.hashNamespace)}),e("setActive",function(b,c){var d=c.settings,e=c.current;d.hash.use&&d.hash.update&&(clearTimeout(e.hashtimeout),e.hashtimeout=setTimeout(function(){i(a(c.delegatedFrom).attr("id"))},d.transitionDuration+200))})}(jQuery,document,window),function(a,b,c,d){function h(){return""+Math.round(Math.random()*1e5,0)}function i(a){a.preventDefault(),a.stopPropagation()}"use strict";var e=a.jmpress,f="next",g="prev";e("defaults").keyboard={use:!0,keys:{33:g,37:g,38:g,9:f+":"+g,32:f,34:f,39:f,40:f,36:"home",35:"end"},ignore:{INPUT:[32,37,38,39,40],TEXTAREA:[32,37,38,39,40],SELECT:[38,40]},tabSelector:"a[href]:visible, :input:visible"},e("afterInit",function(c,e){var f=e.settings,g=f.keyboard,j=g.ignore,k=e.current,l=a(this);f.fullscreen||l.attr("tabindex",0),k.keyboardNamespace=".jmpress-"+h(),a(f.fullscreen?b:l).bind("keypress"+k.keyboardNamespace,function(a){for(var b in j)if(a.target.nodeName===b&&j[b].indexOf(a.which)!==-1)return;(a.which>=37&&a.which<=40||a.which===32)&&i(a)}),a(f.fullscreen?b:l).bind("keydown"+k.keyboardNamespace,function(b){var c=a(b.target);if(!f.fullscreen&&!c.closest(l).length||!g.use)return;for(var e in j)if(c[0].nodeName===e&&j[e].indexOf(b.which)!==-1)return;var h=!1,k;if(b.which===9){c.closest(l.jmpress("active")).length?(k=c.near(g.tabSelector,b.shiftKey),a(k).closest(f.stepSelector).is(l.jmpress("active"))||(k=d)):b.shiftKey?h=!0:k=l.jmpress("active").find("a[href], :input").filter(":visible").first();if(k&&k.length>0){k.focus(),l.jmpress("scrollFix"),i(b);return}b.shiftKey&&(h=!0)}var m=g.keys[b.which];typeof m=="string"?(m.indexOf(":")!==-1&&(m=m.split(":"),m=b.shiftKey?m[1]:m[0]),l.jmpress(m),i(b)):a.isFunction(m)?m.call(l,b):m&&(l.jmpress.apply(l,m),i(b)),h&&(k=l.jmpress("active").find("a[href], :input").filter(":visible").last(),k.focus(),l.jmpress("scrollFix"))})}),e("afterDeinit",function(c,d){a(b).unbind(d.current.keyboardNamespace)})}(jQuery,document,window),function(a,b,c,d){function e(){return""+Math.round(Math.random()*1e5,0)}function h(a,b){return Math.max(Math.min(a,b),-b)}function i(b,c,d){var e=a(this).jmpress("current"),f=a(this).jmpress("settings"),g=a(this).jmpress("active").data("stepData"),i=a(this).jmpress("container");if(e.userZoom===0&&d<0)return;var j=g.viewPortZoomable||f.viewPort.zoomable;if(e.userZoom===j&&d>0)return;e.userZoom+=d;var k=a(i).innerWidth()/2,l=a(i).innerHeight()/2;b=b?b-k:b,c=c?c-l:c,e.userTranslateX=h(e.userTranslateX-d*b/e.zoomOriginWindowScale/j,k*e.userZoom*e.userZoom/j),e.userTranslateY=h(e.userTranslateY-d*c/e.zoomOriginWindowScale/j,l*e.userZoom*e.userZoom/j),a(this).jmpress("reselect","zoom")}"use strict";var f=a.jmpress("defaults");f.viewPort={width:!1,height:!1,maxScale:0,minScale:0,zoomable:0,zoomBindMove:!0,zoomBindWheel:!0};var g=f.keyboard.keys;g[a.browser.mozilla?107:187]="zoomIn",g[a.browser.mozilla?109:189]="zoomOut",f.reasonableAnimation.resize={transitionDuration:"0s",transitionDelay:"0ms"},f.reasonableAnimation.zoom={transitionDuration:"0s",transitionDelay:"0ms"},a.jmpress("initStep",function(a,b){for(var c in{viewPortHeight:1,viewPortWidth:1,viewPortMinScale:1,viewPortMaxScale:1,viewPortZoomable:1})b.stepData[c]=b.data[c]&&parseFloat(b.data[c])}),a.jmpress("afterInit",function(f,g){var h=this;g.current.viewPortNamespace=".jmpress-"+e(),a(c).bind("resize"+g.current.viewPortNamespace,function(b){a(h).jmpress("reselect","resize")}),g.current.userZoom=0,g.current.userTranslateX=0,g.current.userTranslateY=0,g.settings.viewPort.zoomBindWheel&&a(g.settings.fullscreen?b:this).bind("mousewheel"+g.current.viewPortNamespace+" DOMMouseScroll"+g.current.viewPortNamespace,function(b,c){c=c||b.originalEvent.wheelDelta||-b.originalEvent.detail;var d=c/Math.abs(c);return d<0?a(g.jmpress).jmpress("zoomOut",b.originalEvent.x,b.originalEvent.y):d>0&&a(g.jmpress).jmpress("zoomIn",b.originalEvent.x,b.originalEvent.y),!1}),g.settings.viewPort.zoomBindMove&&a(g.settings.fullscreen?b:this).bind("mousedown"+g.current.viewPortNamespace,function(a){g.current.userZoom&&(g.current.userTranslating={x:a.clientX,y:a.clientY},a.preventDefault(),a.stopImmediatePropagation())}).bind("mousemove"+g.current.viewPortNamespace,function(b){var c=g.current.userTranslating;c&&(a(h).jmpress("zoomTranslate",b.clientX-c.x,b.clientY-c.y),c.x=b.clientX,c.y=b.clientY,b.preventDefault(),b.stopImmediatePropagation())}).bind("mouseup"+g.current.viewPortNamespace,function(a){g.current.userTranslating&&(g.current.userTranslating=d,a.preventDefault(),a.stopImmediatePropagation())})}),a.jmpress("register","zoomIn",function(a,b){i.call(this,a||0,b||0,1)}),a.jmpress("register","zoomOut",function(a,b){i.call(this,a||0,b||0,-1)}),a.jmpress("register","zoomTranslate",function(b,c){var d=a(this).jmpress("current"),e=a(this).jmpress("settings"),f=a(this).jmpress("active").data("stepData"),g=a(this).jmpress("container"),i=f.viewPortZoomable||e.viewPort.zoomable,j=a(g).innerWidth(),k=a(g).innerHeight();d.userTranslateX=h(d.userTranslateX+b/d.zoomOriginWindowScale,j*d.userZoom*d.userZoom/i),d.userTranslateY=h(d.userTranslateY+c/d.zoomOriginWindowScale,k*d.userZoom*d.userZoom/i),a(this).jmpress("reselect","zoom")}),a.jmpress("afterDeinit",function(b,d){a(c).unbind(d.current.viewPortNamespace)}),a.jmpress("setActive",function(b,c){var d=c.settings.viewPort,e=c.stepData.viewPortHeight||d.height,f=c.stepData.viewPortWidth||d.width,g=c.stepData.viewPortMaxScale||d.maxScale,h=c.stepData.viewPortMinScale||d.minScale,i=e&&a(c.container).innerHeight()/e,j=f&&a(c.container).innerWidth()/f,k=(j||i)&&Math.min(j||i,i||j);if(k){k=k||1,g&&(k=Math.min(k,g)),h&&(k=Math.max(k,h));var l=c.stepData.viewPortZoomable||c.settings.viewPort.zoomable;if(l){var m=1/k-1/g;m/=l,k=1/(1/k-m*c.current.userZoom)}c.target.transform.reverse(),c.current.userTranslateX&&c.current.userTranslateY?c.target.transform.push(["translate",c.current.userTranslateX,c.current.userTranslateY,0]):c.target.transform.push(["translate"]),c.target.transform.push(["scale",k,k,1]),c.target.transform.reverse(),c.target.perspectiveScale/=k}c.current.zoomOriginWindowScale=k}),a.jmpress("setInactive",function(b,c){if(!c.nextStep||!b||a(c.nextStep).attr("id")!==a(b).attr("id"))c.current.userZoom=0,c.current.userTranslateX=0,c.current.userTranslateY=0})}(jQuery,document,window),function(a,b,c,d){function f(){return""+Math.round(Math.random()*1e5,0)}"use strict";var e=a.jmpress;e("defaults").mouse={clickSelects:!0},e("afterInit",function(b,c){var d=c.settings,e=d.stepSelector,g=c.current,h=a(this);g.clickableStepsNamespace=".jmpress-"+f(),h.bind("click"+g.clickableStepsNamespace,function(b){if(!d.mouse.clickSelects||g.userZoom)return;var c=a(b.target).closest(e);if(c.is(h.jmpress("active")))return;c.length&&(h.jmpress("select",c[0],"click"),b.preventDefault(),b.stopPropagation())})}),e("afterDeinit",function(b,c){a(this).unbind(c.current.clickableStepsNamespace)})}(jQuery,document,window),function(a,b,c,d){function f(){return""+Math.round(Math.random()*1e5,0)}"use strict";var e=a.jmpress;e("afterInit",function(c,d){var e=d.settings,g=d.current,h=d.jmpress;g.mobileNamespace=".jmpress-"+f();var i,j=[0,0];a(e.fullscreen?b:h).bind("touchstart"+g.mobileNamespace,function(a){i=a.originalEvent.touches[0],j=[i.pageX,i.pageY]}).bind("touchmove"+g.mobileNamespace,function(a){return i=a.originalEvent.touches[0],a.preventDefault(),!1}).bind("touchend"+g.mobileNamespace,function(b){var c=[i.pageX,i.pageY],d=[c[0]-j[0],c[1]-j[1]];if(Math.max(Math.abs(d[0]),Math.abs(d[1]))>50)return d=Math.abs(d[0])>Math.abs(d[1])?d[0]:d[1],a(h).jmpress(d>0?"prev":"next"),b.preventDefault(),!1})}),e("afterDeinit",function(c,d){var e=d.settings,f=d.current,g=d.jmpress;a(e.fullscreen?b:g).unbind(f.mobileNamespace)})}(jQuery,document,window),function(a,b,c,d){function i(b,c,e){for(var f in c){var g=f;e&&(g=e+g.substr(0,1).toUpperCase()+g.substr(1)),a.isPlainObject(c[f])?i(b,c[f],g):b[g]===d&&(b[g]=c[f])}}function j(b,c){a.isArray(c)?c.length<b.length?a.error("more nested steps than children in template"):b.each(function(b,d){d=a(d);var e=d.data(f)||{};i(e,c[b]),d.data(f,e)}):a.isFunction(c)&&b.each(function(d,e){e=a(e);var g=e.data(f)||{};i(g,c(d,e,b)),e.data(f,g)})}function k(a,b,c,d){if(c.children){var e=b.children(d.settings.stepSelector);j(e,c.children)}l(a,c)}function l(a,b){i(a,b)}"use strict";var e=a.jmpress,f="_template_",g="_applied_template_",h={};e("beforeInitStep",function(b,c){b=a(b);var d=c.data,e=d.template,i=b.data(g),j=b.data(f);e&&a.each(e.split(" "),function(a,e){var f=h[e];k(d,b,f,c)}),i&&k(d,b,i,c),j&&(k(d,b,j,c),b.data(f,null),j.template&&a.each(j.template.split(" "),function(a,e){var f=h[e];k(d,b,f,c)}))}),e("beforeInit",function(b,c){var d=e("dataset",this),f=d.template,g=c.settings.stepSelector;if(f){var i=h[f];j(a(this).find(g).filter(function(){return!a(this).parent().is(g)}),i.children)}}),e("register","template",function(b,c){h[b]?h[b]=a.extend(!0,{},h[b],c):h[b]=a.extend(!0,{},c)}),e("register","apply",function(b,c){if(!c){var d=a(this).jmpress("settings").stepSelector;j(a(this).find(d).filter(function(){return!a(this).parent().is(d)}),b)}else if(a.isArray(c))j(a(b),c);else{var e;typeof c=="string"?e=h[c]:e=a.extend(!0,{},c),a(b).each(function(b,c){c=a(c);var d=c.data(g)||{};i(d,e),c.data(g,d)})}})}(jQuery,document,window),function(a,b,c,d){"use strict",a.jmpress("setActive",function(b,c){c.prevStep!==b&&a(b).triggerHandler("enterStep")}),a.jmpress("setInactive",function(b,c){c.nextStep!==b&&a(b).triggerHandler("leaveStep")})}(jQuery,document,window),function(a,b,c,d){function e(b){var c=b.split(" "),d=c[0],e={willClass:"will-"+d,doClass:"do-"+d,hasClass:"has-"+d},f="";for(var g=1;g<c.length;g++){var h=c[g];switch(f){case"":h==="after"?f="after":a.warn("unknown keyword in '"+b+"'. '"+h+"' unknown.");break;case"after":if(h.match(/^[1-9][0-9]*m?s?/)){var i=parseFloat(h);h.indexOf("ms")!==-1?i*=1:h.indexOf("s")!==-1?i*=1e3:h.indexOf("m")!==-1&&(i*=6e4),e.delay=i}else e.after=Array.prototype.slice.call(c,g).join(" "),g=c.length}}return e}function f(b,c,d,e){e=e||b.length-1,d=d||0;for(var f=d;f<e+1;f++)if(a(b[f].element).is(c))return f}function g(b,c,d){a.each(c._on,function(a,c){b.push({substep:c.substep,delay:c.delay+d}),g(b,c.substep,c.delay+d)})}"use strict",a.jmpress("defaults").customAnimationDataAttribute="jmpress",a.jmpress("afterInit",function(a,b){b.current.animationTimeouts=[],b.current.animationCleanupWaiting=[]}),a.jmpress("applyStep",function(b,c){function m(a,b){if(b.substep._after)return j=b.substep._after,!1}var h={},i=[];a(b).find("[data-"+c.settings.customAnimationDataAttribute+"]").each(function(d,e){a(e).closest(c.settings.stepSelector).is(b)&&i.push({element:e})});if(i.length===0)return;a.each(i,function(b,d){d.info=e(a(d.element).data(c.settings.customAnimationDataAttribute)),a(d.element).addClass(d.info.willClass),d._on=[],d._after=null});var j={_after:d,_on:[],info:{}};a.each(i,function(a,b){var c=b.info.after;if(c)if(c==="step")c=j;else if(c==="prev")c=i[a-1];else{var e=f(i,c,0,a-1);e===d&&(e=f(i,c)),c=e===d||e===a?i[a-1]:i[e]}else c=i[a-1];if(c){if(!b.info.delay){if(!c._after){c._after=b;return}c=c._after}c._on.push({substep:b,delay:b.info.delay||0})}});if(j._after===d&&j._on.length===0){var k=f(i,c.stepData.startSubstep)||0;j._after=i[k]}var l=[];do{var n=[{substep:j,delay:0}];g(n,j,0),l.push(n),j=null,a.each(n,m)}while(j);h.list=l,a(b).data("substepsData",h)}),a.jmpress("unapplyStep",function(b,c){var d=a(b).data("substepsData");d&&a.each(d.list,function(b,c){a.each(c,function(b,c){c.substep.info.willClass&&a(c.substep.element).removeClass(c.substep.info.willClass),c.substep.info.hasClass&&a(c.substep.element).removeClass(c.substep.info.hasClass),c.substep.info.doClass&&a(c.substep.element).removeClass(c.substep.info.doClass)})})}),a.jmpress("setActive",function(b,c){var e=a(b).data("substepsData");if(!e)return;c.substep===d&&(c.substep=c.reason==="prev"?e.list.length-1:0);var f=c.substep;a.each(c.current.animationTimeouts,function(a,b){clearTimeout(b)}),c.current.animationTimeouts=[],a.each(e.list,function(b,d){var e=b<f,g=b<=f;a.each(d,function(b,d){function f(){a(d.substep.element).addClass(d.substep.info.doClass)}d.substep.info.hasClass&&a(d.substep.element)[(e?"add":"remove")+"Class"](d.substep.info.hasClass),g&&!e&&d.delay&&c.reason!=="prev"?d.substep.info.doClass&&(a(d.substep.element).removeClass(d.substep.info.doClass),c.current.animationTimeouts.push(setTimeout(f,d.delay))):d.substep.info.doClass&&a(d.substep.element)[(g?"add":"remove")+"Class"](d.substep.info.doClass)})})}),a.jmpress("setInactive",function(b,c){function d(b){a.each(b.list,function(b,c){a.each(c,function(b,c){c.substep.info.hasClass&&a(c.substep.element).removeClass(c.substep.info.hasClass),c.substep.info.doClass&&a(c.substep.element).removeClass(c.substep.info.doClass)})})}if(c.nextStep===b)return;a.each(c.current.animationCleanupWaiting,function(a,b){d(b)}),c.current.animationCleanupWaiting=[];var e=a(b).data("substepsData");e&&c.current.animationCleanupWaiting.push(e)}),a.jmpress("selectNext",function(b,c){if(c.substep===d)return;var e=a(b).data("substepsData");if(!e)return;if(c.substep<e.list.length-1)return{step:b,substep:c.substep+1}}),a.jmpress("selectPrev",function(b,c){if(c.substep===d)return;var e=a(b).data("substepsData");if(!e)return;if(c.substep>0)return{step:b,substep:c.substep-1}})}(jQuery,document,window),function(a,b,c,d){"use strict",a.jmpress("register","toggle",function(c,d,e){var f=this;a(b).bind("keydown",function(b){b.keyCode===c&&(a(f).jmpress("initialized")?a(f).jmpress("deinit"):a(f).jmpress(d))}),e&&a(f).jmpress(d)})}(jQuery,document,window),function(a,b,c,d){function e(b,c,d){if(b.secondary&&b.secondary.split(" ").indexOf(c)!==-1){for(var e in b)if(e.length>9&&e.indexOf("secondary")===0){var f=b[e],g=e.substr(9);g=g.substr(0,1).toLowerCase()+g.substr(1),b[e]=b[g],b[g]=f}a(this).jmpress("reapply",a(d))}}"use strict",a.jmpress("initStep",function(a,b){for(var c in b.data)c.indexOf("secondary")===0&&(b.stepData[c]=b.data[c])}),a.jmpress("beforeActive",function(b,c){function f(b,d){var f=a(d).data("stepData");e.call(c.jmpress,f,"grandchildren",d)}e.call(c.jmpress,a(b).data("stepData"),"self",b);var d=a(b).parent();a(d).children(c.settings.stepSelector).each(function(b,d){var f=a(d).data("stepData");e.call(c.jmpress,f,"siblings",d)});for(var g=1;g<c.parents.length;g++)a(c.parents[g]).children(c.settings.stepSelector).each()}),a.jmpress("setInactive",function(b,c){function f(b,d){var f=a(d).data("stepData");e.call(c.jmpress,f,"grandchildren",d)}e.call(c.jmpress,a(b).data("stepData"),"self",b);var d=a(b).parent();a(d).children(c.settings.stepSelector).each(function(b,d){var f=a(d).data("stepData");e.call(c.jmpress,f,"siblings",d)});for(var g=1;g<c.parents.length;g++)a(c.parents[g]).children(c.settings.stepSelector).each(f)})}(jQuery,document,window),function(a,b,c,d){"use strict",a.jmpress("defaults").duration={defaultValue:-1,defaultAction:"next",barSelector:d,barProperty:"width",barPropertyStart:"0",barPropertyEnd:"100%"},a.jmpress("initStep",function(a,b){b.stepData.duration=b.data.duration&&parseInt(b.data.duration,10),b.stepData.durationAction=b.data.durationAction}),a.jmpress("setInactive",function(b,c){var d=c.settings,e=d.duration,f=c.current,g=c.stepData.duration||e.defaultValue;if(f.durationTimeout){if(e.barSelector){var h={transitionProperty:e.barProperty,transitionDuration:"0",transitionDelay:"0",transitionTimingFunction:"linear"};h[e.barProperty]=e.barPropertyStart;var i=a(e.barSelector);a.jmpress("css",i,h),i.each(function(b,c){var d=a(c).next(),e=a(c).parent();a(c).detach(),d.length?d.insertBefore(c):e.append(c)})}clearTimeout(f.durationTimeout),delete f.durationTimeout}}),a.jmpress("setActive",function(b,c){var e=c.settings,f=e.duration,g=c.current,h=c.stepData.duration||f.defaultValue;if(h&&h>0){if(f.barSelector){var i={transitionProperty:f.barProperty,transitionDuration:h-e.transitionDuration*2/3-100+"ms",transitionDelay:e.transitionDuration*2/3+"ms",transitionTimingFunction:"linear"};i[f.barProperty]=f.barPropertyEnd,a.jmpress("css",a(f.barSelector),i)}var j=this;g.durationTimeout&&(clearTimeout(g.durationTimeout),g.durationTimeout=d),g.durationTimeout=setTimeout(function(){var b=c.stepData.durationAction||f.defaultAction;a(j).jmpress(b)},h)}})}(jQuery,document,window),function(a,b,c,d){function f(){return""+Math.round(Math.random()*1e5,0)}"use strict";var e=a.jmpress;e("defaults").presentationMode={use:!0,url:"presentation-screen.html",notesUrl:!1,transferredValues:["userZoom","userTranslateX","userTranslateY"]},e("defaults").keyboard.keys[80]="presentationPopup",e("afterInit",function(b,d){var e=d.current;e.selectMessageListeners=[];if(d.settings.presentationMode.use){c.addEventListener("message",function(b){try{var f=JSON.parse(b.data);switch(f.type){case"select":a.each(d.settings.presentationMode.transferredValues,function(a,b){d.current[b]=f[b]}),a(d.jmpress).jmpress("select",{step:"#"+f.targetId,substep:f.substep},f.reason);break;case"listen":e.selectMessageListeners.push(b.source);break;case"ok":clearTimeout(e.presentationPopupTimeout);break;case"read":try{b.source.postMessage(JSON.stringify({type:"url",url:c.location.href,notesUrl:d.settings.presentationMode.notesUrl}),"*")}catch(g){a.error("Cannot post message to source: "+g)}break;default:throw"Unknown message type: "+f.type}}catch(g){a.error("Recieved message is malformed: "+g)}});try{c.parent&&c.parent!==c&&c.parent.postMessage(JSON.stringify({type:"afterInit"}),"*")}catch(f){a.error("Cannot post message to parent: "+f)}}}),e("afterDeinit",function(b,d){if(d.settings.presentationMode.use)try{c.parent&&c.parent!==c&&c.parent.postMessage(JSON.stringify({type:"afterDeinit"}),"*")}catch(e){a.error("Cannot post message to parent: "+e)}}),e("setActive",function(b,c){var d=a(c.delegatedFrom).attr("id"),e=c.substep,f=c.reason;a.each(c.current.selectMessageListeners,function(b,g){try{var h={type:"select",targetId:d,substep:e,reason:f};a.each(c.settings.presentationMode.transferredValues,function(a,b){h[b]=c.current[b]}),g.postMessage(JSON.stringify(h),"*")}catch(i){a.error("Cannot post message to listener: "+i)}})}),e("register","presentationPopup",function(){function b(){d.jmpress("current").presentationPopupTimeout=setTimeout(b,100);try{e.postMessage(JSON.stringify({type:"url",url:c.location.href,notesUrl:d.jmpress("settings").presentationMode.notesUrl}),"*")}catch(a){}}var d=a(this),e;d.jmpress("settings").presentationMode.use&&(e=c.open(a(this).jmpress("settings").presentationMode.url),d.jmpress("current").presentationPopupTimeout=setTimeout(b,100))})}(jQuery,document,window);