import{w as t,x as a,_ as e,a as n,b as s,c as r,i,s as c,d as o,S as l,e as f,t as u,g as h,k as m,l as v,h as p,m as d,o as g,n as b,r as D,f as y,q as w,j as z,H as E,u as G,p as k,v as x,y as Y,z as S,A as j}from"./client.3a0e9a48.js";function A(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=n(t);if(a){var i=n(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return s(this,e)}}var I=j.document;function R(t,a,e){var n=t.slice();return n[2]=a[e],n}function M(t){var a,e,n=t[2]+"";return{c:function(){a=f("span"),e=u(n),this.h()},l:function(t){a=h(t,"SPAN",{class:!0});var s=m(a);e=v(s,n),s.forEach(p),this.h()},h:function(){d(a,"class","label svelte-9n0g6a")},m:function(t,n){g(t,a,n),b(a,e)},p:function(t,a){1&a&&n!==(n=t[2]+"")&&D(e,n)},d:function(t){t&&p(a)}}}function P(t){var a,e,n,s,r,i,c,o,l,Y,S,j,A,P,V,q,H,L,N,T,F,$,_=t[0].fmData.attributes.title+"",B=new Date(t[0].fmData.attributes.date).toLocaleDateString()+"",C=t[0].html+"";I.title=a=t[0].fmData.attributes.title+"-GzhiYi's blog";for(var J=t[0].fmData.attributes.labels,K=[],O=0;O<J.length;O+=1)K[O]=M(R(t,J,O));return{c:function(){e=f("meta"),s=f("meta"),i=y(),c=f("div"),o=f("h1"),l=u(_),Y=y(),S=f("p"),j=u(B),A=y();for(var t=0;t<K.length;t+=1)K[t].c();P=y(),q=y(),H=f("div"),L=f("span"),N=y(),T=f("img"),F=y(),$=f("div"),this.h()},l:function(t){var a=w('[data-svelte="svelte-zeglup"]',I.head);e=h(a,"META",{name:!0,content:!0}),s=h(a,"META",{name:!0,content:!0}),a.forEach(p),i=z(t),c=h(t,"DIV",{class:!0});var n=m(c);o=h(n,"H1",{});var r=m(o);l=v(r,_),r.forEach(p),Y=z(n),S=h(n,"P",{class:!0});var f=m(S);j=v(f,B),A=z(f);for(var u=0;u<K.length;u+=1)K[u].l(f);f.forEach(p),P=z(n),n.forEach(p),q=z(t),H=h(t,"DIV",{class:!0});var d=m(H);L=h(d,"SPAN",{class:!0}),m(L).forEach(p),N=z(d),T=h(d,"IMG",{class:!0,src:!0,alt:!0}),d.forEach(p),F=z(t),$=h(t,"DIV",{id:!0}),m($).forEach(p),this.h()},h:function(){d(e,"name","description"),d(e,"content",n=t[0].fmData.attributes.description||"GzhiYi's blog"),d(s,"name","keywords"),d(s,"content",r=t[0].fmData.attributes.keywords||"GzhiYi's blog"),d(S,"class","desc svelte-9n0g6a"),V=new E(null),d(c,"class","content svelte-9n0g6a"),d(L,"class","line svelte-9n0g6a"),d(T,"class","absolute w-6 h-6 cat svelte-9n0g6a"),T.src!=="favicon.png"&&d(T,"src","favicon.png"),d(T,"alt","catcat!"),d(H,"class","divide relative svelte-9n0g6a"),d($,"id","gitalk-container")},m:function(t,a){b(I.head,e),b(I.head,s),g(t,i,a),g(t,c,a),b(c,o),b(o,l),b(c,Y),b(c,S),b(S,j),b(S,A);for(var n=0;n<K.length;n+=1)K[n].m(S,null);b(c,P),V.m(C,c),g(t,q,a),g(t,H,a),b(H,L),b(H,N),b(H,T),g(t,F,a),g(t,$,a)},p:function(t,i){var c=G(i,1)[0];if(1&c&&a!==(a=t[0].fmData.attributes.title+"-GzhiYi's blog")&&(I.title=a),1&c&&n!==(n=t[0].fmData.attributes.description||"GzhiYi's blog")&&d(e,"content",n),1&c&&r!==(r=t[0].fmData.attributes.keywords||"GzhiYi's blog")&&d(s,"content",r),1&c&&_!==(_=t[0].fmData.attributes.title+"")&&D(l,_),1&c&&B!==(B=new Date(t[0].fmData.attributes.date).toLocaleDateString()+"")&&D(j,B),1&c){var o;for(J=t[0].fmData.attributes.labels,o=0;o<J.length;o+=1){var f=R(t,J,o);K[o]?K[o].p(f,c):(K[o]=M(f),K[o].c(),K[o].m(S,null))}for(;o<K.length;o+=1)K[o].d(1);K.length=J.length}1&c&&C!==(C=t[0].html+"")&&V.p(C)},i:k,o:k,d:function(t){p(e),p(s),t&&p(i),t&&p(c),x(K,t),t&&p(q),t&&p(H),t&&p(F),t&&p($)}}}function V(t){return q.apply(this,arguments)}function q(){return(q=t(a.mark((function t(e){var n,s,r;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,e.query,t.next=3,this.fetch("blog/".concat(n.slug,".json"));case 3:return s=t.sent,t.next=6,s.json();case 6:if(r=t.sent,200!==s.status){t.next=11;break}return t.abrupt("return",{post:r});case 11:this.error(s.status,r.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function H(t,a,e){var n=null;Y((function(){try{import("./medium-zoom.esm.f9ac00a1.js").then((function(t){n=t.default("[data-zoomable]")}))}catch(t){console.log("import error",t)}new Gitalk({clientID:"1ceb416f2f4ca6ba6c84",clientSecret:"9feefebe3e29a96416c667fc8f2f633edf3c51da",repo:"sapper-blog",owner:"GzhiYi",admin:["GzhiYi"],id:document.title,distractionFreeMode:!1}).render("gitalk-container")})),S((function(){n&&n.detach()}));var s=a.post;return t.$set=function(t){"post"in t&&e(0,s=t.post)},[s]}var L=function(t){e(n,l);var a=A(n);function n(t){var e;return r(this,n),e=a.call(this),i(o(e),t,H,P,c,{post:0}),e}return n}();export default L;export{V as preload};
