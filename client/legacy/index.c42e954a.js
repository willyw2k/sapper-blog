import{_ as t,a as n,b as e,c as a,i as r,s as o,d as s,S as c,e as u,t as i,f,g as l,h,j as v,k as m,l as d,m as p,n as g,o as b,p as D,q as y,r as E,u as R,v as w}from"./client.4e6474e3.js";function j(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=n(t);if(a){var s=n(this).constructor;r=Reflect.construct(o,arguments,s)}else r=o.apply(this,arguments);return e(this,r)}}function k(t,n,e){var a=t.slice();return a[1]=n[e],a}function x(t){var n,e,a,r,o,s,c,y=new Date(t[1].fmData.attributes.date).toLocaleDateString()+"",E=t[1].fmData.attributes.title+"";return{c:function(){n=u("li"),e=u("a"),a=i(y),r=f(),o=i(E),s=f(),this.h()},l:function(t){n=l(t,"LI",{});var c=h(n);e=l(c,"A",{class:!0,rel:!0,href:!0});var u=h(e);a=v(u,y),r=m(u),o=v(u,E),s=m(u),u.forEach(d),c.forEach(d),this.h()},h:function(){p(e,"class","e-underline svelte-1ksno0c"),p(e,"rel","prefetch"),p(e,"href",c="blog/"+t[1].slug)},m:function(t,c){g(t,n,c),b(n,e),b(e,a),b(e,r),b(e,o),b(e,s)},p:function(t,n){1&n&&y!==(y=new Date(t[1].fmData.attributes.date).toLocaleDateString()+"")&&D(a,y),1&n&&E!==(E=t[1].fmData.attributes.title+"")&&D(o,E),1&n&&c!==(c="blog/"+t[1].slug)&&p(e,"href",c)},d:function(t){t&&d(n)}}}function L(t){for(var n,e,a,r,o=t[0],s=[],c=0;c<o.length;c+=1)s[c]=x(k(t,o,c));return{c:function(){n=u("meta"),e=u("meta"),a=f(),r=u("ul");for(var t=0;t<s.length;t+=1)s[t].c();this.h()},l:function(t){var o=y('[data-svelte="svelte-1gnxrov"]',document.head);n=l(o,"META",{name:!0,content:!0}),e=l(o,"META",{name:!0,content:!0}),o.forEach(d),a=m(t),r=l(t,"UL",{class:!0});for(var c=h(r),u=0;u<s.length;u+=1)s[u].l(c);c.forEach(d),this.h()},h:function(){document.title="GzhiYi's blog",p(n,"name","description"),p(n,"content","web前端工程师，编程是一份兴趣，热爱着生活。"),p(e,"name","keywords"),p(e,"content","frontend开发者，熟悉web前端，vue，React，svelte，小程序等等。"),p(r,"class","svelte-1ksno0c")},m:function(t,o){b(document.head,n),b(document.head,e),g(t,a,o),g(t,r,o);for(var c=0;c<s.length;c+=1)s[c].m(r,null)},p:function(t,n){var e=E(n,1)[0];if(1&e){var a;for(o=t[0],a=0;a<o.length;a+=1){var c=k(t,o,a);s[a]?s[a].p(c,e):(s[a]=x(c),s[a].c(),s[a].m(r,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=o.length}},i:R,o:R,d:function(t){d(n),d(e),t&&d(a),t&&d(r),w(s,t)}}}function S(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function A(t,n,e){var a=n.posts;return t.$set=function(t){"posts"in t&&e(0,a=t.posts)},[a]}var q=function(n){t(u,c);var e=j(u);function u(t){var n;return a(this,u),n=e.call(this),r(s(n),t,A,L,o,{posts:0}),n}return u}();export default q;export{S as preload};
