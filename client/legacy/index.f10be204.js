import{_ as t,a as n,b as e,c as r,i as a,s as o,d as s,S as c,f,t as u,e as i,j as l,k as h,l as p,h as v,g,r as m,m as d,n as D,u as b,q as y,o as R,p as E,v as j}from"./client.857e2828.js";function L(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,o=n(t);if(r){var s=n(this).constructor;a=Reflect.construct(o,arguments,s)}else a=o.apply(this,arguments);return e(this,a)}}function S(t,n,e){var r=t.slice();return r[1]=n[e],r}function x(t){var n,e,r,a,o,s,c,y=new Date(t[1].fmData.attributes.date).toLocaleDateString()+"",R=t[1].fmData.attributes.title+"";return{c:function(){n=f("li"),e=f("a"),r=u(y),a=i(),o=u(R),s=i(),this.h()},l:function(t){n=l(t,"LI",{});var c=h(n);e=l(c,"A",{rel:!0,href:!0});var f=h(e);r=p(f,y),a=v(f),o=p(f,R),s=v(f),f.forEach(g),c.forEach(g),this.h()},h:function(){m(e,"rel","prefetch"),m(e,"href",c="blog/"+t[1].slug)},m:function(t,c){d(t,n,c),D(n,e),D(e,r),D(e,a),D(e,o),D(e,s)},p:function(t,n){1&n&&y!==(y=new Date(t[1].fmData.attributes.date).toLocaleDateString()+"")&&b(r,y),1&n&&R!==(R=t[1].fmData.attributes.title+"")&&b(o,R),1&n&&c!==(c="blog/"+t[1].slug)&&m(e,"href",c)},d:function(t){t&&g(n)}}}function q(t){for(var n,e,r,a,o,s=t[0],c=[],b=0;b<s.length;b+=1)c[b]=x(S(t,s,b));return{c:function(){n=i(),e=f("h1"),r=u("Recent posts"),a=i(),o=f("ul");for(var t=0;t<c.length;t+=1)c[t].c();this.h()},l:function(t){y('[data-svelte="svelte-hfp9t8"]',document.head).forEach(g),n=v(t),e=l(t,"H1",{});var s=h(e);r=p(s,"Recent posts"),s.forEach(g),a=v(t),o=l(t,"UL",{class:!0});for(var f=h(o),u=0;u<c.length;u+=1)c[u].l(f);f.forEach(g),this.h()},h:function(){document.title="Blog",m(o,"class","svelte-1ect80f")},m:function(t,s){d(t,n,s),d(t,e,s),D(e,r),d(t,a,s),d(t,o,s);for(var f=0;f<c.length;f+=1)c[f].m(o,null)},p:function(t,n){var e=R(n,1)[0];if(1&e){var r;for(s=t[0],r=0;r<s.length;r+=1){var a=S(t,s,r);c[r]?c[r].p(a,e):(c[r]=x(a),c[r].c(),c[r].m(o,null))}for(;r<c.length;r+=1)c[r].d(1);c.length=s.length}},i:E,o:E,d:function(t){t&&g(n),t&&g(e),t&&g(a),t&&g(o),j(c,t)}}}function w(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function k(t,n,e){var r=n.posts;return t.$set=function(t){"posts"in t&&e(0,r=t.posts)},[r]}var A=function(n){t(f,c);var e=L(f);function f(t){var n;return r(this,f),n=e.call(this),a(s(n),t,k,q,o,{posts:0}),n}return f}();export default A;export{w as preload};
