import{w as t,x as n,_ as e,a as r,b as a,c as s,i as c,s as o,d as u,S as i,e as f,f as l,q as h,g as p,h as m,j as d,k as v,r as y,m as x,o as b,p as g,y as j,z}from"./client.70169cfa.js";function D(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,s=r(t);if(n){var c=r(this).constructor;e=Reflect.construct(s,arguments,c)}else e=s.apply(this,arguments);return a(this,e)}}function R(t){var n,e,r,a=t[0].html+"";return document.title=n=t[0].fmData.attributes.title,{c:function(){e=f(),r=l("div"),this.h()},l:function(t){h('[data-svelte="svelte-14uz9zo"]',document.head).forEach(p),e=m(t),r=d(t,"DIV",{class:!0}),v(r).forEach(p),this.h()},h:function(){y(r,"class","content svelte-1dlbxyy")},m:function(t,n){x(t,e,n),x(t,r,n),r.innerHTML=a},p:function(t,e){var s=b(e,1)[0];1&s&&n!==(n=t[0].fmData.attributes.title)&&(document.title=n),1&s&&a!==(a=t[0].html+"")&&(r.innerHTML=a)},i:g,o:g,d:function(t){t&&p(e),t&&p(r)}}}function k(t){return w.apply(this,arguments)}function w(){return(w=t(n.mark((function t(e){var r,a,s;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,e.query,t.next=3,this.fetch("blog/".concat(r.slug,".json"));case 3:return a=t.sent,t.next=6,a.json();case 6:if(s=t.sent,200!==a.status){t.next=11;break}return t.abrupt("return",{post:s});case 11:this.error(a.status,s.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function q(t,n,e){var r=null;j((function(){import("./medium-zoom.esm.afd62676.js").then((function(t){r=t.default("[data-zoomable]")}))})),z((function(){r&&r.detach()}));var a=n.post;return t.$set=function(t){"post"in t&&e(0,a=t.post)},[a]}var E=function(t){e(r,i);var n=D(r);function r(t){var e;return s(this,r),e=n.call(this),c(u(e),t,q,R,o,{post:0}),e}return r}();export default E;export{k as preload};
