import{S as t,i as e,s,e as a,a as o,b as i,f as n,d as r,c,k as l,h as d,n as f,o as h,p}from"./client.fcb48980.js";function m(t){let e,s,h,p=t[0].html+"";return{c(){e=a("div"),s=o(),h=a("div"),this.h()},l(t){e=i(t,"DIV",{class:!0}),n(e).forEach(r),s=c(t),h=i(t,"DIV",{id:!0}),n(h).forEach(r),this.h()},h(){l(e,"class","content svelte-1dlbxyy"),l(h,"id","gitalk-container")},m(t,a){d(t,e,a),e.innerHTML=p,d(t,s,a),d(t,h,a)},p(t,[s]){1&s&&p!==(p=t[0].html+"")&&(e.innerHTML=p)},i:f,o:f,d(t){t&&r(e),t&&r(s),t&&r(h)}}}async function u({params:t,query:e}){const s=await this.fetch(`blog/${t.slug}.json`),a=await s.json();if(200===s.status)return{post:a};this.error(s.status,a.message)}function b(t,e,s){let a=null;h(()=>{try{import("./medium-zoom.esm.eccdde9e.js").then(t=>{a=t.default("[data-zoomable]")})}catch(t){console.log("import error",t)}new Gitalk({clientID:"1ceb416f2f4ca6ba6c84",clientSecret:"9feefebe3e29a96416c667fc8f2f633edf3c51da",repo:"sapper-blog",owner:"GzhiYi",admin:["GzhiYi"],id:location.pathname,distractionFreeMode:!1}).render("gitalk-container")}),p(()=>{a&&a.detach()});let{post:o}=e;return t.$set=t=>{"post"in t&&s(0,o=t.post)},[o]}export default class extends t{constructor(t){super(),e(this,t,b,m,s,{post:0})}}export{u as preload};
