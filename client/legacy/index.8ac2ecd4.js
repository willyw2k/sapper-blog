import{_ as t,a as n,b as e,c as a,i as r,s as o,d as s,S as c,e as u,t as f,f as i,g as l,k as h,l as v,j as m,h as p,m as d,o as g,n as b,r as D,q as y,u as R,p as E,v as w}from"./client.3a0e9a48.js";function j(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=n(t);if(a){var s=n(this).constructor;r=Reflect.construct(o,arguments,s)}else r=o.apply(this,arguments);return e(this,r)}}function x(t,n,e){var a=t.slice();return a[1]=n[e],a}function L(t){var n,e,a,r,o,s,c,y=new Date(t[1].fmData.attributes.date).toLocaleDateString()+"",R=t[1].fmData.attributes.title+"";return{c:function(){n=u("li"),e=u("a"),a=f(y),r=i(),o=f(R),s=i(),this.h()},l:function(t){n=l(t,"LI",{});var c=h(n);e=l(c,"A",{rel:!0,href:!0});var u=h(e);a=v(u,y),r=m(u),o=v(u,R),s=m(u),u.forEach(p),c.forEach(p),this.h()},h:function(){d(e,"rel","prefetch"),d(e,"href",c="blog/"+t[1].slug)},m:function(t,c){g(t,n,c),b(n,e),b(e,a),b(e,r),b(e,o),b(e,s)},p:function(t,n){1&n&&y!==(y=new Date(t[1].fmData.attributes.date).toLocaleDateString()+"")&&D(a,y),1&n&&R!==(R=t[1].fmData.attributes.title+"")&&D(o,R),1&n&&c!==(c="blog/"+t[1].slug)&&d(e,"href",c)},d:function(t){t&&p(n)}}}function S(t){for(var n,e,a,r,o,s,c,D=t[0],j=[],S=0;S<D.length;S+=1)j[S]=L(x(t,D,S));return{c:function(){n=u("meta"),e=u("meta"),a=i(),r=u("h1"),o=f("Recent posts"),s=i(),c=u("ul");for(var t=0;t<j.length;t+=1)j[t].c();this.h()},l:function(t){var u=y('[data-svelte="svelte-1gnxrov"]',document.head);n=l(u,"META",{name:!0,content:!0}),e=l(u,"META",{name:!0,content:!0}),u.forEach(p),a=m(t),r=l(t,"H1",{});var f=h(r);o=v(f,"Recent posts"),f.forEach(p),s=m(t),c=l(t,"UL",{class:!0});for(var i=h(c),d=0;d<j.length;d+=1)j[d].l(i);i.forEach(p),this.h()},h:function(){document.title="GzhiYi's blog",d(n,"name","description"),d(n,"content","web前端工程师，编程是一份兴趣，热爱着生活。"),d(e,"name","keywords"),d(e,"content","frontend开发者，熟悉web前端，vue，React，svelte，小程序等等。"),d(c,"class","svelte-1ect80f")},m:function(t,u){b(document.head,n),b(document.head,e),g(t,a,u),g(t,r,u),b(r,o),g(t,s,u),g(t,c,u);for(var f=0;f<j.length;f+=1)j[f].m(c,null)},p:function(t,n){var e=R(n,1)[0];if(1&e){var a;for(D=t[0],a=0;a<D.length;a+=1){var r=x(t,D,a);j[a]?j[a].p(r,e):(j[a]=L(r),j[a].c(),j[a].m(c,null))}for(;a<j.length;a+=1)j[a].d(1);j.length=D.length}},i:E,o:E,d:function(t){p(n),p(e),t&&p(a),t&&p(r),t&&p(s),t&&p(c),w(j,t)}}}function A(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function k(t,n,e){var a=n.posts;return t.$set=function(t){"posts"in t&&e(0,a=t.posts)},[a]}var q=function(n){t(u,c);var e=j(u);function u(t){var n;return a(this,u),n=e.call(this),r(s(n),t,k,S,o,{posts:0}),n}return u}();export default q;export{A as preload};
