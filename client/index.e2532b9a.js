import{S as t,i as e,s,e as a,t as n,a as o,c as l,b as r,d as c,f as h,g as i,h as f,j as u,k as m,l as d,q as g,n as p,m as b}from"./client.19b6d283.js";function v(t,e,s){const a=t.slice();return a[1]=e[s],a}function D(t){let e,s,g,p,b,v,D,E=new Date(t[1].fmData.attributes.date).toLocaleDateString()+"",w=t[1].fmData.attributes.title+"";return{c(){e=a("li"),s=a("a"),g=n(E),p=o(),b=n(w),v=o(),this.h()},l(t){e=l(t,"LI",{});var a=r(e);s=l(a,"A",{class:!0,rel:!0,href:!0});var n=r(s);g=c(n,E),p=h(n),b=c(n,w),v=h(n),n.forEach(i),a.forEach(i),this.h()},h(){f(s,"class","e-underline svelte-1ksno0c"),f(s,"rel","prefetch"),f(s,"href",D="blog/"+t[1].slug)},m(t,a){u(t,e,a),m(e,s),m(s,g),m(s,p),m(s,b),m(s,v)},p(t,e){1&e&&E!==(E=new Date(t[1].fmData.attributes.date).toLocaleDateString()+"")&&d(g,E),1&e&&w!==(w=t[1].fmData.attributes.title+"")&&d(b,w),1&e&&D!==(D="blog/"+t[1].slug)&&f(s,"href",D)},d(t){t&&i(e)}}}function E(t){let e,s,n,c,d=t[0],E=[];for(let e=0;e<d.length;e+=1)E[e]=D(v(t,d,e));return{c(){e=a("meta"),s=a("meta"),n=o(),c=a("ul");for(let t=0;t<E.length;t+=1)E[t].c();this.h()},l(t){const a=g('[data-svelte="svelte-1gnxrov"]',document.head);e=l(a,"META",{name:!0,content:!0}),s=l(a,"META",{name:!0,content:!0}),a.forEach(i),n=h(t),c=l(t,"UL",{class:!0});var o=r(c);for(let t=0;t<E.length;t+=1)E[t].l(o);o.forEach(i),this.h()},h(){document.title="GzhiYi's blog",f(e,"name","description"),f(e,"content","web前端工程师，编程是一份兴趣，热爱着生活。"),f(s,"name","keywords"),f(s,"content","frontend开发者，熟悉web前端，vue，React，svelte，小程序等等。"),f(c,"class","svelte-1ksno0c")},m(t,a){m(document.head,e),m(document.head,s),u(t,n,a),u(t,c,a);for(let t=0;t<E.length;t+=1)E[t].m(c,null)},p(t,[e]){if(1&e){let s;for(d=t[0],s=0;s<d.length;s+=1){const a=v(t,d,s);E[s]?E[s].p(a,e):(E[s]=D(a),E[s].c(),E[s].m(c,null))}for(;s<E.length;s+=1)E[s].d(1);E.length=d.length}},i:p,o:p,d(t){i(e),i(s),t&&i(n),t&&i(c),b(E,t)}}}function w({params:t,query:e}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function j(t,e,s){let{posts:a}=e;return t.$set=t=>{"posts"in t&&s(0,a=t.posts)},[a]}export default class extends t{constructor(t){super(),e(this,t,j,E,s,{posts:0})}}export{w as preload};
