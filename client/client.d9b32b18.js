function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e,n,r,o,s,c){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(i){const o=a(e,n,r,c);t.p(o,i)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function g(){return d("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function b(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):h(e)}function v(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function _(t){return v(t," ")}function E(t,e){e=""+e,t.data!==e&&(t.data=e)}function w(t,e=document.body){return Array.from(e.querySelectorAll(t))}let S;function x(t){S=t}function R(){if(!S)throw new Error("Function called outside component initialization");return S}function A(t){R().$$.on_mount.push(t)}function P(t){R().$$.on_destroy.push(t)}const L=[],j=[],C=[],N=[],q=Promise.resolve();let O=!1;function U(t){C.push(t)}let k=!1;const I=new Set;function D(){if(!k){k=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];x(e),H(e.$$)}for(L.length=0;j.length;)j.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];I.has(e)||(I.add(e),e())}C.length=0}while(L.length);for(;N.length;)N.pop()();O=!1,k=!1,I.clear()}}function H(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const T=new Set;let B;function J(){B={r:0,c:[],p:B}}function V(){B.r||o(B.c),B=B.p}function K(t,e){t&&t.i&&(T.delete(t),t.i(e))}function M(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),B.c.push(()=>{T.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function Y(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(r[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[s]=a}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function z(t){return"object"==typeof t&&null!==t?t:{}}function F(t){t&&t.c()}function G(t,e){t&&t.l(e)}function W(t,e,r){const{fragment:c,on_mount:a,on_destroy:i,after_update:l}=t.$$;c&&c.m(e,r),U(()=>{const e=a.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(U)}function X(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){-1===t.$$.dirty[0]&&(L.push(t),O||(O=!0,q.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,n,s,c,a,i,l=[-1]){const u=S;x(e);const p=n.props||{},h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let d=!1;if(h.ctx=s?s(e,p,(t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=o)&&(h.bound[t]&&h.bound[t](o),d&&Q(e,t)),n}):[],h.update(),d=!0,o(h.before_update),h.fragment=!!c&&c(h.ctx),n.target){if(n.hydrate){const t=y(n.target);h.fragment&&h.fragment.l(t),t.forEach(f)}else h.fragment&&h.fragment.c();n.intro&&K(e.$$.fragment),W(e,n.target,n.anchor),D()}x(u)}class tt{$destroy(){X(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const et=[];function nt(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!et.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),et.push(n,e)}if(t){for(let t=0;t<et.length;t+=2)et[t][0](et[t+1]);et.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return o.push(i),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const rt={},ot=()=>({});function st(e){let n,r,o,s,c,a;return{c(){n=h("nav"),r=h("ul"),o=h("li"),s=h("a"),c=d("blog"),this.h()},l(t){n=b(t,"NAV",{class:!0});var e=y(n);r=b(e,"UL",{class:!0});var a=y(r);o=b(a,"LI",{class:!0});var i=y(o);s=b(i,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var l=y(s);c=v(l,"blog"),l.forEach(f),i.forEach(f),a.forEach(f),e.forEach(f),this.h()},h(){$(s,"rel","prefetch"),$(s,"aria-current",a="blog"===e[0]?"page":void 0),$(s,"href","blog"),$(s,"class","svelte-1wr5yce"),$(o,"class","svelte-1wr5yce"),$(r,"class","svelte-1wr5yce"),$(n,"class","svelte-1wr5yce")},m(t,e){u(t,n,e),l(n,r),l(r,o),l(o,s),l(s,c)},p(t,[e]){1&e&&a!==(a="blog"===t[0]?"page":void 0)&&$(s,"aria-current",a)},i:t,o:t,d(t){t&&f(n)}}}function ct(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class at extends tt{constructor(t){super(),Z(this,t,ct,st,c,{segment:0})}}function it(t){let e,n,r,o;e=new at({props:{segment:t[0]}});const s=t[2].default,c=function(t,e,n,r){if(t){const o=a(t,e,n,r);return t[0](o)}}(s,t,t[1],null);return{c(){F(e.$$.fragment),n=m(),r=h("main"),c&&c.c(),this.h()},l(t){G(e.$$.fragment,t),n=_(t),r=b(t,"MAIN",{class:!0});var o=y(r);c&&c.l(o),o.forEach(f),this.h()},h(){$(r,"class","svelte-iwmse4")},m(t,s){W(e,t,s),u(t,n,s),u(t,r,s),c&&c.m(r,null),o=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),c&&c.p&&2&n&&i(c,s,t,t[1],n,null,null)},i(t){o||(K(e.$$.fragment,t),K(c,t),o=!0)},o(t){M(e.$$.fragment,t),M(c,t),o=!1},d(t){X(e,t),t&&f(n),t&&f(r),c&&c.d(t)}}}function lt(t,e,n){let{segment:r}=e,{$$slots:o={},$$scope:s}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[r,s,o]}class ut extends tt{constructor(t){super(),Z(this,t,lt,it,c,{segment:0})}}function ft(t){let e,n,r=t[1].stack+"";return{c(){e=h("pre"),n=d(r)},l(t){e=b(t,"PRE",{});var o=y(e);n=v(o,r),o.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&E(n,r)},d(t){t&&f(e)}}}function pt(e){let n,r,o,s,c,a,i,p,S,x=e[1].message+"";document.title=n=e[0];let R=e[2]&&e[1].stack&&ft(e);return{c(){r=m(),o=h("h1"),s=d(e[0]),c=m(),a=h("p"),i=d(x),p=m(),R&&R.c(),S=g(),this.h()},l(t){w('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=_(t),o=b(t,"H1",{class:!0});var n=y(o);s=v(n,e[0]),n.forEach(f),c=_(t),a=b(t,"P",{class:!0});var l=y(a);i=v(l,x),l.forEach(f),p=_(t),R&&R.l(t),S=g(),this.h()},h(){$(o,"class","svelte-u4e356"),$(a,"class","svelte-u4e356")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),u(t,c,e),u(t,a,e),l(a,i),u(t,p,e),R&&R.m(t,e),u(t,S,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&E(s,t[0]),2&e&&x!==(x=t[1].message+"")&&E(i,x),t[2]&&t[1].stack?R?R.p(t,e):(R=ft(t),R.c(),R.m(S.parentNode,S)):R&&(R.d(1),R=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(c),t&&f(a),t&&f(p),R&&R.d(t),t&&f(S)}}}function ht(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class dt extends tt{constructor(t){super(),Z(this,t,ht,pt,c,{status:0,error:1})}}function mt(t){let n,r,o;const s=[t[4].props];var c=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(a())),{c(){n&&F(n.$$.fragment),r=g()},l(t){n&&G(n.$$.fragment,t),r=g()},m(t,e){n&&W(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?Y(s,[z(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){J();const t=n;M(t.$$.fragment,1,0,()=>{X(t,1)}),V()}c?(n=new c(a()),F(n.$$.fragment),K(n.$$.fragment,1),W(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&K(n.$$.fragment,t),o=!0)},o(t){n&&M(n.$$.fragment,t),o=!1},d(t){t&&f(r),n&&X(n,t)}}}function gt(t){let e,n;return e=new dt({props:{error:t[0],status:t[1]}}),{c(){F(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,r){W(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(K(e.$$.fragment,t),n=!0)},o(t){M(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function $t(t){let e,n,r,o;const s=[gt,mt],c=[];function a(t,e){return t[0]?0:1}return e=a(t),n=c[e]=s[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){c[e].m(t,n),u(t,r,n),o=!0},p(t,o){let i=e;e=a(t),e===i?c[e].p(t,o):(J(),M(c[i],1,1,()=>{c[i]=null}),V(),n=c[e],n||(n=c[e]=s[e](t),n.c()),K(n,1),n.m(r.parentNode,r))},i(t){o||(K(n),o=!0)},o(t){M(n),o=!1},d(t){c[e].d(t),t&&f(r)}}}function yt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[$t]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new ut({props:s}),{c(){F(n.$$.fragment)},l(t){G(n.$$.fragment,t)},m(t,e){W(n,t,e),r=!0},p(t,[e]){const r=12&e?Y(o,[4&e&&{segment:t[2][0]},8&e&&z(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(K(n.$$.fragment,t),r=!0)},o(t){M(n.$$.fragment,t),r=!1},d(t){X(n,t)}}}function bt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:a}=e,{level1:i=null}=e,{notify:l}=e;var u,f,p;return u=l,R().$$.after_update.push(u),f=rt,p=r,R().$$.context.set(f,p),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,c,a,i,r,l]}class vt extends tt{constructor(t){super(),Z(this,t,bt,yt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const _t=[/^\/blog\.json$/,/^\/blog\/([^\/]+?)\.json$/],Et=[{js:()=>import("./index.385b0eb5.js"),css:[]},{js:()=>import("./about.256a0382.js"),css:[]},{js:()=>import("./index.c63fc38c.js"),css:[]},{js:()=>import("./[slug].856faf0e.js"),css:[]}],wt=(St=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:t=>({slug:St(t[1])})}]}]);var St;const xt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Rt,At,Pt,Lt=!1,jt=[],Ct="{}";const Nt={page:function(t){const e=nt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:nt(null),session:nt(xt&&xt.session)};let qt,Ot;Nt.session.subscribe(async t=>{if(qt=t,!Lt)return;Ot=!0;const e=Jt(new URL(location.href)),n=At={},{redirect:r,props:o,branch:s}=await Yt(e);n===At&&await Mt(r,s,o,e.page)});let Ut,kt=null;let It,Dt=1;const Ht="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Tt={};function Bt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Jt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(xt.baseUrl))return null;let e=t.pathname.slice(xt.baseUrl.length);if(""===e&&(e="/"),!_t.some(t=>t.test(e)))for(let n=0;n<wt.length;n+=1){const r=wt[n],o=r.pattern.exec(e);if(o){const n=Bt(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},a={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:a}}}}function Vt(){return{x:pageXOffset,y:pageYOffset}}async function Kt(t,e,n,r){if(e)It=e;else{const t=Vt();Tt[It]=t,e=It=++Dt,Tt[It]=n?t:{x:0,y:0}}It=e,Rt&&Nt.preloading.set(!0);const o=kt&&kt.href===t.href?kt.promise:Yt(t);kt=null;const s=At={},{redirect:c,props:a,branch:i}=await o;if(s===At&&(await Mt(c,i,a,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Tt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Tt[It]=t,t&&scrollTo(t.x,t.y)}}async function Mt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Jt(new URL(t,document.baseURI));return n?(Ht[e.replaceState?"replaceState":"pushState"]({id:It},"",t),Kt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Nt.page.set(r),Nt.preloading.set(!1),Rt)Rt.$set(n);else{n.stores={page:{subscribe:Nt.page.subscribe},preloading:{subscribe:Nt.preloading.subscribe},session:Nt.session},n.level0={props:await Pt},n.notify=Nt.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Ft(t.nextSibling);Ft(t),Ft(e)}Rt=new vt({target:Ut,props:n,hydrate:!0})}jt=e,Ct=JSON.stringify(r.query),Lt=!0,Ot=!1}async function Yt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let a;Pt||(Pt=xt.preloaded[0]||ot.call(c,{host:n.host,path:n.path,query:n.query,params:{}},qt));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=await Promise.all(e.parts.map(async(e,a)=>{const f=r[a];if(function(t,e,n,r){if(r!==Ct)return!0;const o=jt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(a,f,l,o)&&(u=!0),s.segments[i]=r[a+1],!e)return{segment:f};const p=i++;if(!Ot&&!u&&jt[a]&&jt[a].part===e.i)return jt[a];u=!1;const{default:h,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(zt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Et[e.i]);let m;return m=Lt||!xt.preloaded[a+1]?d?await d.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},qt):{}:xt.preloaded[a+1],s["level"+p]={component:h,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}function zt(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Ft(t){t.parentNode.removeChild(t)}function Gt(t){const e=Jt(new URL(t,document.baseURI));if(e)return kt&&t===kt.href||function(t,e){kt={href:t,promise:e}}(t,Yt(e)),kt.promise}let Wt;function Xt(t){clearTimeout(Wt),Wt=setTimeout(()=>{Qt(t)},20)}function Qt(t){const e=te(t.target);e&&"prefetch"===e.rel&&Gt(e.href)}function Zt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=te(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Jt(o);if(s){Kt(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Ht.pushState({id:It},"",o.href)}}function te(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ee(t){if(Tt[It]=Vt(),t.state){const e=Jt(new URL(location.href));e?Kt(e,t.state.id):location.href=location.href}else Dt=Dt+1,function(t){It=t}(Dt),Ht.replaceState({id:It},"",location.href)}var ne;ne={target:document.querySelector("#sapper")},"scrollRestoration"in Ht&&(Ht.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Ht.scrollRestoration="auto"}),addEventListener("load",()=>{Ht.scrollRestoration="manual"}),function(t){Ut=t}(ne.target),addEventListener("click",Zt),addEventListener("popstate",ee),addEventListener("touchstart",Qt),addEventListener("mousemove",Xt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Ht.replaceState({id:Dt},"",e);const n=new URL(location.href);if(xt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:c,error:a}=xt;Pt||(Pt=s&&s[0]),Mt(null,[],{error:a,status:c,session:o,level0:{props:Pt},level1:{props:{status:c,error:a},component:dt},segments:s},{host:e,path:n,query:Bt(r),params:{}})}();const r=Jt(n);return r?Kt(r,Dt,!0,t):void 0});export{tt as S,m as a,b,_ as c,f as d,h as e,y as f,v as g,u as h,Z as i,l as j,$ as k,E as l,p as m,t as n,A as o,P as p,w as q,c as s,d as t};
