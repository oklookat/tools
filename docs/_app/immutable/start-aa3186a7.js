var Ke=Object.defineProperty;var We=(r,e,t)=>e in r?Ke(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var ue=(r,e,t)=>(We(r,typeof e!="symbol"?e+"":e,t),t);import{S as He,i as Fe,s as Ge,a as Me,e as V,c as Ye,b as K,g as te,t as q,d as ne,f as z,h as B,j as Xe,o as me,k as Qe,l as Ze,m as et,n as de,p as N,q as tt,r as nt,u as rt,v as W,w as ye,x as H,y as F,z as Ce}from"./chunks/index-cb0128ce.js";import{g as De,f as Ne,a as Te,s as J,b as _e,i as at,c as st}from"./chunks/singletons-12215512.js";class Z{constructor(e,t){ue(this,"name","HttpError");ue(this,"stack");this.status=e,this.message=t!=null?t:`Error: ${e}`}toString(){return this.message}}class xe{constructor(e,t){this.status=e,this.location=t}}function it(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ot(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const lt=["href","pathname","search","searchParams","toString","toJSON"];function ct(r,e){const t=new URL(r);for(const o of lt){let s=t[o];Object.defineProperty(t,o,{get(){return e(),s},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(o,s,d)=>d(r,s),ft(t),t}function ft(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function ut(r){let e=5381,t=r.length;if(typeof r=="string")for(;t;)e=e*33^r.charCodeAt(--t);else for(;t;)e=e*33^r[--t];return(e>>>0).toString(36)}const ee=window.fetch;function dt(r,e){let o=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;e&&typeof e.body=="string"&&(o+=`[sveltekit\\:data-body="${ut(e.body)}"]`);const s=document.querySelector(o);if(s&&s.textContent){const{body:d,...n}=JSON.parse(s.textContent);return Promise.resolve(new Response(d,n))}return ee(r,e)}const pt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function ht(r){const e=[],t=[];let o=!0;if(/\]\[/.test(r))throw new Error(`Invalid route ${r} \u2014 parameters must be separated`);if(Ve("[",r)!==Ve("]",r))throw new Error(`Invalid route ${r} \u2014 brackets are unbalanced`);return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(mt).map((d,n,u)=>{const w=decodeURIComponent(d),h=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(w);if(h)return e.push(h[1]),t.push(h[2]),"(?:/(.*))?";const g=n===u.length-1;return w&&"/"+w.split(/\[(.+?)\]/).map(($,E)=>{if(E%2){const I=pt.exec($);if(!I)throw new Error(`Invalid param: ${$}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,A,G,M]=I;return e.push(G),t.push(M),A?"(.*?)":"([^/]+?)"}return g&&$.includes(".")&&(o=!1),$.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${o?"/?":""}$`),names:e,types:t}}function mt(r){return!/^\([^)]+\)$/.test(r)}function _t(r,e,t,o){const s={};for(let d=0;d<e.length;d+=1){const n=e[d],u=t[d],w=r[d+1]||"";if(u){const h=o[u];if(!h)throw new Error(`Missing "${u}" param matcher`);if(!h(w))return}s[n]=w}return s}function Ve(r,e){let t=0;for(let o=0;o<e.length;o+=1)e[o]===r&&(t+=1);return t}function gt(r,e,t){return Object.entries(e).map(([o,[s,d,n]])=>{const{pattern:u,names:w,types:h}=ht(o),g=s<0;g&&(s=~s);const $={id:o,exec:E=>{const I=u.exec(E);if(I)return _t(I,w,h,t)},errors:[1,...n||[]].map(E=>r[E]),layouts:[0,...d||[]].map(E=>r[E]),leaf:r[s],uses_server_data:g};return $.errors.length=$.layouts.length=Math.max($.errors.length,$.layouts.length),$})}function wt(r,e){return new Z(r,e)}function yt(r){let e,t,o;var s=r[0][0];function d(n){return{props:{data:n[1],errors:n[3]}}}return s&&(e=new s(d(r))),{c(){e&&W(e.$$.fragment),t=V()},l(n){e&&ye(e.$$.fragment,n),t=V()},m(n,u){e&&H(e,n,u),K(n,t,u),o=!0},p(n,u){const w={};if(u&2&&(w.data=n[1]),u&8&&(w.errors=n[3]),s!==(s=n[0][0])){if(e){te();const h=e;q(h.$$.fragment,1,0,()=>{F(h,1)}),ne()}s?(e=new s(d(n)),W(e.$$.fragment),z(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else s&&e.$set(w)},i(n){o||(e&&z(e.$$.fragment,n),o=!0)},o(n){e&&q(e.$$.fragment,n),o=!1},d(n){n&&B(t),e&&F(e,n)}}}function bt(r){let e,t,o;var s=r[0][0];function d(n){return{props:{data:n[1],$$slots:{default:[vt]},$$scope:{ctx:n}}}}return s&&(e=new s(d(r))),{c(){e&&W(e.$$.fragment),t=V()},l(n){e&&ye(e.$$.fragment,n),t=V()},m(n,u){e&&H(e,n,u),K(n,t,u),o=!0},p(n,u){const w={};if(u&2&&(w.data=n[1]),u&517&&(w.$$scope={dirty:u,ctx:n}),s!==(s=n[0][0])){if(e){te();const h=e;q(h.$$.fragment,1,0,()=>{F(h,1)}),ne()}s?(e=new s(d(n)),W(e.$$.fragment),z(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else s&&e.$set(w)},i(n){o||(e&&z(e.$$.fragment,n),o=!0)},o(n){e&&q(e.$$.fragment,n),o=!1},d(n){n&&B(t),e&&F(e,n)}}}function vt(r){let e,t,o;var s=r[0][1];function d(n){return{props:{data:n[2]}}}return s&&(e=new s(d(r))),{c(){e&&W(e.$$.fragment),t=V()},l(n){e&&ye(e.$$.fragment,n),t=V()},m(n,u){e&&H(e,n,u),K(n,t,u),o=!0},p(n,u){const w={};if(u&4&&(w.data=n[2]),s!==(s=n[0][1])){if(e){te();const h=e;q(h.$$.fragment,1,0,()=>{F(h,1)}),ne()}s?(e=new s(d(n)),W(e.$$.fragment),z(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else s&&e.$set(w)},i(n){o||(e&&z(e.$$.fragment,n),o=!0)},o(n){e&&q(e.$$.fragment,n),o=!1},d(n){n&&B(t),e&&F(e,n)}}}function qe(r){let e,t=r[5]&&ze(r);return{c(){e=Qe("div"),t&&t.c(),this.h()},l(o){e=Ze(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=et(e);t&&t.l(s),s.forEach(B),this.h()},h(){de(e,"id","svelte-announcer"),de(e,"aria-live","assertive"),de(e,"aria-atomic","true"),N(e,"position","absolute"),N(e,"left","0"),N(e,"top","0"),N(e,"clip","rect(0 0 0 0)"),N(e,"clip-path","inset(50%)"),N(e,"overflow","hidden"),N(e,"white-space","nowrap"),N(e,"width","1px"),N(e,"height","1px")},m(o,s){K(o,e,s),t&&t.m(e,null)},p(o,s){o[5]?t?t.p(o,s):(t=ze(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(o){o&&B(e),t&&t.d()}}}function ze(r){let e;return{c(){e=tt(r[6])},l(t){e=nt(t,r[6])},m(t,o){K(t,e,o)},p(t,o){o&64&&rt(e,t[6])},d(t){t&&B(e)}}}function kt(r){let e,t,o,s,d;const n=[bt,yt],u=[];function w(g,$){return g[0][1]?0:1}e=w(r),t=u[e]=n[e](r);let h=r[4]&&qe(r);return{c(){t.c(),o=Me(),h&&h.c(),s=V()},l(g){t.l(g),o=Ye(g),h&&h.l(g),s=V()},m(g,$){u[e].m(g,$),K(g,o,$),h&&h.m(g,$),K(g,s,$),d=!0},p(g,[$]){let E=e;e=w(g),e===E?u[e].p(g,$):(te(),q(u[E],1,1,()=>{u[E]=null}),ne(),t=u[e],t?t.p(g,$):(t=u[e]=n[e](g),t.c()),z(t,1),t.m(o.parentNode,o)),g[4]?h?h.p(g,$):(h=qe(g),h.c(),h.m(s.parentNode,s)):h&&(h.d(1),h=null)},i(g){d||(z(t),d=!0)},o(g){q(t),d=!1},d(g){u[e].d(g),g&&B(o),h&&h.d(g),g&&B(s)}}}function Et(r,e,t){let{stores:o}=e,{page:s}=e,{components:d}=e,{data_0:n=null}=e,{data_1:u=null}=e,{errors:w}=e;Xe(o.page.notify);let h=!1,g=!1,$=null;return me(()=>{const E=o.page.subscribe(()=>{h&&(t(5,g=!0),t(6,$=document.title||"untitled page"))});return t(4,h=!0),E}),r.$$set=E=>{"stores"in E&&t(7,o=E.stores),"page"in E&&t(8,s=E.page),"components"in E&&t(0,d=E.components),"data_0"in E&&t(1,n=E.data_0),"data_1"in E&&t(2,u=E.data_1),"errors"in E&&t(3,w=E.errors)},r.$$.update=()=>{r.$$.dirty&384&&o.page.set(s)},[d,n,u,w,h,g,$,o,s]}class $t extends He{constructor(e){super(),Fe(this,e,Et,kt,Ge,{stores:7,page:8,components:0,data_0:1,data_1:2,errors:3})}}const St=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Rt=function(r,e){return new URL(r,e).href},Be={},Y=function(e,t,o){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=Rt(s,o),s in Be)return;Be[s]=!0;const d=s.endsWith(".css"),n=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":St,d||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),d)return new Promise((w,h)=>{u.addEventListener("load",w),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},Lt={},re=[()=>Y(()=>import("./chunks/0-f8f295a0.js"),["chunks\\0-f8f295a0.js","components\\pages\\_layout.svelte-e91e8639.js","assets\\+layout-f1c5ec01.css","chunks\\index-cb0128ce.js","chunks\\navigation-d6f8d552.js","chunks\\singletons-12215512.js","chunks\\index-8c5aca60.js"],import.meta.url),()=>Y(()=>import("./chunks/1-597c916c.js"),["chunks\\1-597c916c.js","components\\error.svelte-b0a3b576.js","chunks\\index-cb0128ce.js","chunks\\singletons-12215512.js"],import.meta.url),()=>Y(()=>import("./chunks/2-dc5ba4c0.js"),["chunks\\2-dc5ba4c0.js","components\\pages\\_page.svelte-3faee8d2.js","assets\\+page-41a0aa2a.css","chunks\\index-cb0128ce.js","chunks\\navigation-d6f8d552.js","chunks\\singletons-12215512.js"],import.meta.url),()=>Y(()=>import("./chunks/3-4056b73f.js"),["chunks\\3-4056b73f.js","components\\pages\\demgen\\_page.svelte-4d95bc25.js","assets\\+page-d7dc6cdf.css","chunks\\index-cb0128ce.js","chunks\\button-f3823e01.js","assets\\button-64717cd1.css","chunks\\index-8c5aca60.js"],import.meta.url),()=>Y(()=>import("./chunks/4-d8def77b.js"),["chunks\\4-d8def77b.js","components\\pages\\zapletaker\\_page.svelte-388834f6.js","assets\\+page-6fdadb64.css","chunks\\index-cb0128ce.js","chunks\\button-f3823e01.js","assets\\button-64717cd1.css","chunks\\index-8c5aca60.js"],import.meta.url)],Pt={"":[2],demgen:[3],zapletaker:[4]},Je="sveltekit:scroll",x="sveltekit:index",pe=gt(re,Pt,Lt),ge=re[0],we=re[1];ge();we();let X={};try{X=JSON.parse(sessionStorage[Je])}catch{}function he(r){X[r]=_e()}function jt({target:r,base:e,trailing_slash:t}){var Pe;const o=[],s={id:null,promise:null},d={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,session_id:0,url:null},u=!1,w=!0,h=!1,g=1,$=null,E,I=!0,A=(Pe=history.state)==null?void 0:Pe[x];A||(A=Date.now(),history.replaceState({...history.state,[x]:A},"",location.href));const G=X[A];G&&(history.scrollRestoration="manual",scrollTo(G.x,G.y));let M=!1,ae,be;async function ve(a,{noscroll:c=!1,replaceState:f=!1,keepfocus:i=!1,state:l={}},b){if(typeof a=="string"&&(a=new URL(a,De(document))),I)return le({url:a,scroll:c?_e():null,keepfocus:i,redirect_chain:b,details:{state:l,replaceState:f},accepted:()=>{},blocked:()=>{}});await T(a)}async function ke(a){const c=Le(a);if(!c)throw new Error("Attempted to prefetch a URL that does not belong to this app");return s.promise=Re(c),s.id=c.id,s.promise}async function Ee(a,c,f,i){var y,R,j;const l=Le(a),b=be={};let p=l&&await Re(l);if(!p&&a.origin===location.origin&&a.pathname===location.pathname&&(p=await oe({status:404,error:new Error(`Not found: ${a.pathname}`),url:a,routeId:null})),!p)return await T(a),!1;if(a=(l==null?void 0:l.url)||a,be!==b)return!1;if(o.length=0,p.type==="redirect")if(c.length>10||c.includes(a.pathname))p=await oe({status:500,error:new Error("Redirect loop"),url:a,routeId:null});else return I?ve(new URL(p.location,a).href,{},[...c,a.pathname]):await T(new URL(p.location,location.href)),!1;else((R=(y=p.props)==null?void 0:y.page)==null?void 0:R.status)>=400&&await J.updated.check()&&await T(a);if(h=!0,f&&f.details){const{details:k}=f,L=k.replaceState?0:1;k.state[x]=A+=L,history[k.replaceState?"replaceState":"pushState"](k.state,"",a)}if(u?(n=p.state,p.props.page&&(p.props.page.url=a),E.$set(p.props)):$e(p),f){const{scroll:k,keepfocus:L}=f;if(!L){const S=document.body,O=S.getAttribute("tabindex");S.tabIndex=-1,S.focus({preventScroll:!0}),setTimeout(()=>{var _;(_=getSelection())==null||_.removeAllRanges()}),O!==null?S.setAttribute("tabindex",O):S.removeAttribute("tabindex")}if(await Ce(),w){const S=a.hash&&document.getElementById(a.hash.slice(1));k?scrollTo(k.x,k.y):S?S.scrollIntoView():scrollTo(0,0)}}else await Ce();s.promise=null,s.id=null,w=!0,p.props.page&&(ae=p.props.page);const v=p.state.branch[p.state.branch.length-1];I=((j=v==null?void 0:v.node.shared)==null?void 0:j.router)!==!1,i&&i(),h=!1}function $e(a){n=a.state;const c=document.querySelector("style[data-sveltekit]");if(c&&c.remove(),ae=a.props.page,E=new $t({target:r,props:{...a.props,stores:J},hydrate:!0}),I){const f={from:null,to:new URL(location.href)};d.after_navigate.forEach(i=>i(f))}u=!0}async function Q({url:a,params:c,branch:f,status:i,error:l,routeId:b,validation_errors:p}){const v=f.filter(Boolean),y={type:"loaded",state:{url:a,params:c,branch:f,error:l,session_id:g},props:{components:v.map(L=>L.node.component),errors:p}};let R={},j=!1;for(let L=0;L<v.length;L+=1)R={...R,...v[L].data},(j||!n.branch.some(S=>S===v[L]))&&(y.props[`data_${L}`]=R,j=!0);if(!n.url||a.href!==n.url.href||n.error!==l||j){y.props.page={error:l,params:c,routeId:b,status:i,url:a,data:R};const L=(S,O)=>{Object.defineProperty(y.props.page,S,{get:()=>{throw new Error(`$page.${S} has been replaced by $page.url.${O}`)}})};L("origin","origin"),L("path","pathname"),L("query","searchParams")}return y}async function se({loader:a,parent:c,url:f,params:i,routeId:l,server_data_node:b}){var R,j,k,L,S;let p=null;const v={dependencies:new Set,params:new Set,parent:!1,url:!1},y=await a();if((R=y.shared)!=null&&R.load){let O=function(...m){for(const P of m){const{href:C}=new URL(P,f);v.dependencies.add(C)}};const _={};for(const m in i)Object.defineProperty(_,m,{get(){return v.params.add(m),i[m]},enumerable:!0});const U={routeId:l,params:_,data:(j=b==null?void 0:b.data)!=null?j:null,url:ct(f,()=>{v.url=!0}),async fetch(m,P){let C;typeof m=="string"?C=m:(C=m.url,P={body:m.method==="GET"||m.method==="HEAD"?void 0:await m.blob(),cache:m.cache,credentials:m.credentials,headers:m.headers,integrity:m.integrity,keepalive:m.keepalive,method:m.method,mode:m.mode,redirect:m.redirect,referrer:m.referrer,referrerPolicy:m.referrerPolicy,signal:m.signal,...P});const D=new URL(C,f).href;return O(D),u?ee(D,P):dt(C,P)},setHeaders:()=>{},depends:O,parent(){return v.parent=!0,c()}};Object.defineProperties(U,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),p=(k=await y.shared.load.call(null,U))!=null?k:null}return{node:y,loader:a,server:b,shared:(L=y.shared)!=null&&L.load?{type:"data",data:p,uses:v}:null,data:(S=p!=null?p:b==null?void 0:b.data)!=null?S:null}}function Se(a,c,f){if(!f)return!1;if(f.parent&&c||a.url&&f.url)return!0;for(const i of a.params)if(f.params.has(i))return!0;for(const i of f.dependencies)if(o.some(l=>l(i)))return!0;return!1}function ie(a){var c,f;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((c=a.uses.dependencies)!=null?c:[]),params:new Set((f=a.uses.params)!=null?f:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:null}async function Re({id:a,url:c,params:f,route:i}){if(s.id===a&&s.promise)return s.promise;const{errors:l,layouts:b,leaf:p}=i,v=n.url&&{url:a!==n.url.pathname+n.url.search,params:Object.keys(f).filter(_=>n.params[_]!==f[_])};[...l,...b,p].forEach(_=>_==null?void 0:_().catch(()=>{}));const y=[...b,p];let R=null;const j=y.reduce((_,U,m)=>{var D;const P=n.branch[m],C=U&&((P==null?void 0:P.loader)!==U||Se(v,_.some(Boolean),(D=P.server)==null?void 0:D.uses));return _.push(C),_},[]);if(i.uses_server_data&&j.some(Boolean)){try{const _=await ee(`${c.pathname}${c.pathname.endsWith("/")?"":"/"}__data.json${c.search}`,{headers:{"x-sveltekit-invalidated":j.map(U=>U?"1":"").join(",")}});if(R=await _.json(),!_.ok)throw R}catch{T(c);return}if(R.type==="redirect")return R}const k=R==null?void 0:R.nodes;let L=!1;const S=y.map(async(_,U)=>{var ce,je,Oe,Ue;if(!_)return;const m=n.branch[U],P=(ce=k==null?void 0:k[U])!=null?ce:null;if((!P||P.type==="skip")&&_===(m==null?void 0:m.loader)&&!Se(v,L,(je=m.shared)==null?void 0:je.uses))return m;if(L=!0,(P==null?void 0:P.type)==="error")throw P.httperror?wt(P.httperror.status,P.httperror.message):P.error;return se({loader:_,url:c,params:f,routeId:i.id,parent:async()=>{var Ie;const Ae={};for(let fe=0;fe<U;fe+=1)Object.assign(Ae,(Ie=await S[fe])==null?void 0:Ie.data);return Ae},server_data_node:(Ue=(Oe=ie(P))!=null?Oe:m==null?void 0:m.server)!=null?Ue:null})});for(const _ of S)_.catch(()=>{});const O=[];for(let _=0;_<y.length;_+=1)if(y[_])try{O.push(await S[_])}catch(U){const m=U;if(m instanceof xe)return{type:"redirect",location:m.location};const P=U instanceof Z?U.status:500;for(;_--;)if(l[_]){let C,D=_;for(;!O[D];)D-=1;try{return C={node:await l[_](),loader:l[_],data:{},server:null,shared:null},await Q({url:c,params:f,branch:O.slice(0,D+1).concat(C),status:P,error:m,routeId:i.id})}catch{continue}}T(c);return}else O.push(void 0);return await Q({url:c,params:f,branch:O,status:200,error:null,routeId:i.id})}async function oe({status:a,error:c,url:f,routeId:i}){var R;const l={},b=await ge();let p=null;if(b.server){const j=await ee(`${f.pathname}${f.pathname.endsWith("/")?"":"/"}__data.json${f.search}`,{headers:{"x-sveltekit-invalidated":"1"}}),k=await j.json();if(p=(R=k==null?void 0:k[0])!=null?R:null,!j.ok||(k==null?void 0:k.type)!=="data"){T(f);return}}const v=await se({loader:ge,url:f,params:l,routeId:i,parent:()=>Promise.resolve({}),server_data_node:ie(p)}),y={node:await we(),loader:we,shared:null,server:null,data:null};return await Q({url:f,params:l,branch:[v,y],status:a,error:c,routeId:i})}function Le(a){if(a.origin!==location.origin||!a.pathname.startsWith(e))return;const c=decodeURI(a.pathname.slice(e.length)||"/");for(const f of pe){const i=f.exec(c);if(i){const l=new URL(a.origin+it(a.pathname,t)+a.search+a.hash);return{id:l.pathname+l.search,route:f,params:ot(i),url:l}}}}async function le({url:a,scroll:c,keepfocus:f,redirect_chain:i,details:l,accepted:b,blocked:p}){const v=n.url;let y=!1;const R={from:v,to:a,cancel:()=>y=!0};if(d.before_navigate.forEach(j=>j(R)),y){p();return}he(A),b(),u&&J.navigating.set({from:n.url,to:a}),await Ee(a,i,{scroll:c,keepfocus:f,details:l},()=>{const j={from:v,to:a};d.after_navigate.forEach(k=>k(j)),J.navigating.set(null)})}function T(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{me(()=>(d.after_navigate.push(a),()=>{const c=d.after_navigate.indexOf(a);d.after_navigate.splice(c,1)}))},before_navigate:a=>{me(()=>(d.before_navigate.push(a),()=>{const c=d.before_navigate.indexOf(a);d.before_navigate.splice(c,1)}))},disable_scroll_handling:()=>{(h||!u)&&(w=!1)},goto:(a,c={})=>ve(a,c,[]),invalidate:a=>{var c,f;if(a===void 0){for(const i of n.branch)(c=i==null?void 0:i.server)==null||c.uses.dependencies.add(""),(f=i==null?void 0:i.shared)==null||f.uses.dependencies.add("");o.push(()=>!0)}else if(typeof a=="function")o.push(a);else{const{href:i}=new URL(a,location.href);o.push(l=>l===i)}return $||($=Promise.resolve().then(async()=>{await Ee(new URL(location.href),[]),$=null})),$},prefetch:async a=>{const c=new URL(a,De(document));await ke(c)},prefetch_routes:async a=>{const f=(a?pe.filter(i=>a.some(l=>i.exec(l))):pe).map(i=>Promise.all([...i.layouts,i.leaf].map(l=>l==null?void 0:l())));await Promise.all(f)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{let l=!1;const b={from:n.url,to:null,cancel:()=>l=!0};d.before_navigate.forEach(p=>p(b)),l?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){he(A);try{sessionStorage[Je]=JSON.stringify(X)}catch{}}});const a=i=>{const l=Ne(i);l&&l.href&&l.hasAttribute("sveltekit:prefetch")&&ke(Te(l))};let c;const f=i=>{clearTimeout(c),c=setTimeout(()=>{var l;(l=i.target)==null||l.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",f),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(!I||i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const l=Ne(i);if(!l||!l.href)return;const b=l instanceof SVGAElement,p=Te(l);if(!b&&!(p.protocol==="https:"||p.protocol==="http:"))return;const v=(l.getAttribute("rel")||"").split(/\s+/);if(l.hasAttribute("download")||v.includes("external")||l.hasAttribute("sveltekit:reload")||(b?l.target.baseVal:l.target))return;const[y,R]=p.href.split("#");if(R!==void 0&&y===location.href.split("#")[0]){M=!0,he(A),J.page.set({...ae,url:p}),J.page.notify();return}le({url:p,scroll:l.hasAttribute("sveltekit:noscroll")?_e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:p.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault()})}),addEventListener("popstate",i=>{if(i.state&&I){if(i.state[x]===A)return;le({url:new URL(location.href),scroll:X[i.state[x]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{A=i.state[x]},blocked:()=>{const l=A-i.state[x];history.go(l)}})}}),addEventListener("hashchange",()=>{M&&(M=!1,history.replaceState({...history.state,[x]:++A},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&J.navigating.set(null)})},_hydrate:async({status:a,error:c,node_ids:f,params:i,routeId:l})=>{const b=new URL(location.href);let p;try{const v=(k,L)=>{const S=document.querySelector(`script[sveltekit\\:data-type="${k}"]`);return S!=null&&S.textContent?JSON.parse(S.textContent):L},y=v("server_data",[]),R=v("validation_errors",void 0),j=f.map(async(k,L)=>se({loader:re[k],url:b,params:i,routeId:l,parent:async()=>{const S={};for(let O=0;O<L;O+=1)Object.assign(S,(await j[O]).data);return S},server_data_node:ie(y[L])}));p=await Q({url:b,params:i,branch:await Promise.all(j),status:a,error:c!=null&&c.__is_http_error?new Z(c.status,c.message):c,validation_errors:R,routeId:l})}catch(v){const y=v;if(y instanceof xe){await T(new URL(v.location,location.href));return}p=await oe({status:y instanceof Z?y.status:500,error:y,url:b,routeId:l})}$e(p)}}}function It(r){}async function Ct({paths:r,target:e,route:t,spa:o,trailing_slash:s,hydrate:d}){const n=jt({target:e,base:r.base,trailing_slash:s});at({client:n}),st(r),d&&await n._hydrate(d),t&&(o&&n.goto(location.href,{replaceState:!0}),n._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{It as set_public_env,Ct as start};
