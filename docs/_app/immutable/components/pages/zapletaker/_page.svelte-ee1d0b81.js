import{S as Pe,i as De,s as Ve,k as d,a as A,l as p,m as _,h as u,c as M,n as f,p as Q,b as Y,B as l,C as $,$ as Se,A as ve,L as ke,M as Le,a0 as Ce,E as Ae,a1 as Be,q as C,v as _e,K as Ne,r as B,w as me,a2 as ge,x as be,a3 as We,u as $e,f as ye,t as Ee,y as we}from"../../../chunks/index-314c1f20.js";import{B as je}from"../../../chunks/button-283a2017.js";import{r as Te}from"../../../chunks/index-8c5aca60.js";function re(t){return t=Math.round(t),t>100?t=100:t<0&&(t=0),t}function qe(t,n){let e=t/n*100;return e=Math.ceil(e),e=re(e),e}function ze(t,n){n<1&&(n=1);const e=Math.round(t/n)*n;return re(e)}function Ie(t){let n=t-4;return re(n)}function Re(t){let n,e,s,a,r,h;return{c(){n=d("div"),e=d("div"),s=A(),a=d("div"),this.h()},l(o){n=p(o,"DIV",{class:!0});var v=_(n);e=p(v,"DIV",{class:!0,style:!0}),_(e).forEach(u),s=M(v),a=p(v,"DIV",{class:!0,style:!0}),_(a).forEach(u),v.forEach(u),this.h()},h(){f(e,"class","line svelte-jy4cs6"),Q(e,"width",t[1]+"%"),f(a,"class","dot svelte-jy4cs6"),Q(a,"left",Ie(t[1])+"%"),f(n,"class","range svelte-jy4cs6")},m(o,v){Y(o,n,v),l(n,e),l(n,s),l(n,a),t[7](n),r||(h=[$(n,"pointerdown",t[2]),$(n,"pointerup",t[3]),$(n,"pointercancel",t[3]),$(n,"contextmenu",Se(t[6]))],r=!0)},p(o,[v]){v&2&&Q(e,"width",o[1]+"%"),v&2&&Q(a,"left",Ie(o[1])+"%")},i:ve,o:ve,d(o){o&&u(n),t[7](null),r=!1,ke(h)}}}function Ke(t,n,e){let s;const a=Le();let{step:r=1}=n,{value:h=100}=n,o=h;function v(i){i.pointerType==="mouse"&&i.button!==0||(a("start"),D(i),s.setPointerCapture(i.pointerId),e(0,s.onpointermove=D,s))}function S(i){e(0,s.onpointermove=null,s),s.releasePointerCapture(i.pointerId),a("end")}function D(i){const g=s.clientWidth,b=s.getBoundingClientRect();let y=i.x-b.x;y<0?y=0:y>g&&(y=g);let w=qe(y,g);w=ze(w,r),w>99?w=100:w<1&&(w=0),e(1,o=w),a("sliding",o)}function N(i){Ce.call(this,t,i)}function m(i){Ae[i?"unshift":"push"](()=>{s=i,e(0,s)})}return t.$$set=i=>{"step"in i&&e(4,r=i.step),"value"in i&&e(5,h=i.value)},[s,o,v,S,r,h,N,m]}class Ue extends Pe{constructor(n){super(),De(this,n,Ke,Re,Ve,{step:4,value:5})}}class F{constructor(n,e){this.cutLen=0,this.full="",this.first="",this.second="",this.full=n,e||(e=10),this.cutLen=He(this.full.length,e),this.handle()}handle(){const n=this.full.slice(0,this.cutLen);this.first=n;const e=this.full.slice(this.cutLen);this.second=e}}let z=[];function Fe(t,n){if(z=[],!t)return t;let e=t;e=e.replace(/\s+/g," ").trim();const s=e.split(" ");if(s.length<2)return e;for(const r of s)z.push(new F(r,n));const a=[];for(let r=0;r<z.length&&z[r+1];r+=2){const{w1:h,w2:o}=Ge(z[r],z[r+1]);a.push(h.full,o.full)}return a.join(" ")}function Ge(t,n){if(!(t instanceof F)||!(n instanceof F))throw Error("cursify: words bad instance");const e=n.first+t.second,s=t.first+n.second;return{w1:new F(e),w2:new F(s)}}function He(t,n){let e=t*n/100;return e=Math.ceil(e),!e||e<0?0:e}function Je(t){let n;return{c(){n=C("\u0421\u0434\u0435\u043B\u0430\u0442\u044C")},l(e){n=B(e,"\u0421\u0434\u0435\u043B\u0430\u0442\u044C")},m(e,s){Y(e,n,s)},d(e){e&&u(n)}}}function Oe(t){let n,e,s,a,r,h,o,v,S,D,N,m,i,g,b,y,w,Z,X,I,x,L,R,ee,te,j,P,ne,se,V,le,T,K=(t[2]?t[2]:"\u0442\u0443\u0442 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043F\u043B\u0435\u0442\u0430\u043A")+"",G,U,ae,ie;function Me(c){t[8](c)}let oe={step:10};return t[0]!==void 0&&(oe.value=t[0]),P=new Ue({props:oe}),Ae.push(()=>Be(P,"value",Me)),P.$on("sliding",t[9]),V=new je({props:{$$slots:{default:[Je]},$$scope:{ctx:t}}}),V.$on("click",t[3]),{c(){n=d("meta"),e=d("meta"),s=A(),a=d("div"),r=d("div"),h=d("span"),o=C("\u0417\u0430\u043F\u043B\u0435\u0442\u0430\u043A\u0435\u0440"),v=A(),S=d("div"),D=C("\u043D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \u2014 \u043F\u043E\u043B\u0443\u0447\u0438\u0448\u044C \u0437\u0430\u043F\u043B\u0435\u0442\u0430\u043A"),N=A(),m=d("div"),i=d("label"),g=d("span"),b=C("\u0422\u0435\u043A\u0441\u0442 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 "),y=d("span"),w=C(t[5]),Z=C(")"),X=A(),I=d("input"),x=A(),L=d("div"),R=d("span"),ee=C("\u0411\u0435\u0437\u0443\u043C\u0438\u0435"),te=A(),j=d("div"),_e(P.$$.fragment),se=A(),_e(V.$$.fragment),le=A(),T=d("div"),G=C(K),this.h()},l(c){const E=Ne('[data-svelte="svelte-cwuovw"]',document.head);n=p(E,"META",{property:!0,content:!0}),e=p(E,"META",{name:!0,content:!0}),E.forEach(u),s=M(c),a=p(c,"DIV",{class:!0});var k=_(a);r=p(k,"DIV",{class:!0});var W=_(r);h=p(W,"SPAN",{class:!0});var ce=_(h);o=B(ce,"\u0417\u0430\u043F\u043B\u0435\u0442\u0430\u043A\u0435\u0440"),ce.forEach(u),v=M(W),S=p(W,"DIV",{});var ue=_(S);D=B(ue,"\u043D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \u2014 \u043F\u043E\u043B\u0443\u0447\u0438\u0448\u044C \u0437\u0430\u043F\u043B\u0435\u0442\u0430\u043A"),ue.forEach(u),W.forEach(u),N=M(k),m=p(k,"DIV",{class:!0});var q=_(m);i=p(q,"LABEL",{class:!0});var H=_(i);g=p(H,"SPAN",{});var J=_(g);b=B(J,"\u0422\u0435\u043A\u0441\u0442 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 "),y=p(J,"SPAN",{class:!0});var fe=_(y);w=B(fe,t[5]),fe.forEach(u),Z=B(J,")"),J.forEach(u),X=M(H),I=p(H,"INPUT",{type:!0,"aria-labelledby":!0,class:!0}),H.forEach(u),x=M(q),L=p(q,"DIV",{class:!0});var O=_(L);R=p(O,"SPAN",{});var de=_(R);ee=B(de,"\u0411\u0435\u0437\u0443\u043C\u0438\u0435"),de.forEach(u),te=M(O),j=p(O,"DIV",{class:!0});var pe=_(j);me(P.$$.fragment,pe),pe.forEach(u),O.forEach(u),se=M(q),me(V.$$.fragment,q),q.forEach(u),le=M(k),T=p(k,"DIV",{class:!0});var he=_(T);G=B(he,K),he.forEach(u),k.forEach(u),this.h()},h(){document.title="\u0417\u0430\u043F\u043B\u0435\u0442\u0430\u043A\u0435\u0440",f(n,"property","og:title"),f(n,"content","\u0417\u0430\u043F\u043B\u0435\u0442\u0430\u043A\u0435\u0440"),f(e,"name","description"),f(e,"content","\u0417\u0430\u043F\u043B\u0435\u0442\u0430\u043A\u0435\u0440 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043B\u0435\u0433\u043A\u043E \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0437\u0430\u043F\u043B\u0435\u0442\u0430\u043A\u0438. \u041A\u044B\u0440 \u0441\u043E\u0441\u0438\u0447\u043A\u0430, \u043C\u0438\u0441\u043A\u0430 \u043A\u0430\u0448\u0438 - \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F. \u0417\u0430\u043F\u043B\u0435\u0442\u0430\u043A\u0435\u0440 \u043C\u043E\u0436\u0435\u0442 \u0432\u0441\u0451."),f(h,"class","title svelte-1n37rfi"),f(r,"class","welcome svelte-1n37rfi"),f(y,"class","example svelte-1n37rfi"),f(I,"type","text"),f(I,"aria-labelledby","text__desc"),f(I,"class","svelte-1n37rfi"),f(i,"class","text svelte-1n37rfi"),f(j,"class","range svelte-1n37rfi"),f(L,"class","madness svelte-1n37rfi"),f(m,"class","main svelte-1n37rfi"),f(T,"class","result svelte-1n37rfi"),f(a,"class","zapletaker svelte-1n37rfi")},m(c,E){l(document.head,n),l(document.head,e),Y(c,s,E),Y(c,a,E),l(a,r),l(r,h),l(h,o),l(r,v),l(r,S),l(S,D),l(a,N),l(a,m),l(m,i),l(i,g),l(g,b),l(g,y),l(y,w),l(g,Z),l(i,X),l(i,I),ge(I,t[1]),l(m,x),l(m,L),l(L,R),l(R,ee),l(L,te),l(L,j),be(P,j,null),l(m,se),be(V,m,null),l(a,le),l(a,T),l(T,G),U=!0,ae||(ie=[$(window,"keypress",t[4]),$(y,"click",t[6]),$(I,"input",t[7])],ae=!0)},p(c,[E]){E&2&&I.value!==c[1]&&ge(I,c[1]);const k={};!ne&&E&1&&(ne=!0,k.value=c[0],We(()=>ne=!1)),P.$set(k);const W={};E&4096&&(W.$$scope={dirty:E,ctx:c}),V.$set(W),(!U||E&4)&&K!==(K=(c[2]?c[2]:"\u0442\u0443\u0442 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043F\u043B\u0435\u0442\u0430\u043A")+"")&&$e(G,K)},i(c){U||(ye(P.$$.fragment,c),ye(V.$$.fragment,c),U=!0)},o(c){Ee(P.$$.fragment,c),Ee(V.$$.fragment,c),U=!1},d(c){u(n),u(e),c&&u(s),c&&u(a),we(P),we(V),ae=!1,ke(ie)}}}function Qe(t,n,e){let s="",a="",r=0;function h(b){o()}function o(){e(2,a=Fe(s,r))}function v(b){b.key==="Enter"&&o()}let D=Te(["\u041C\u0430\u0448\u0438\u043D\u0430 \u0424\u043E\u0440\u0434","\u041C\u0438\u0441\u043A\u0430 \u043A\u0430\u0448\u0438","\u0421\u044B\u0440 \u043A\u043E\u0441\u0438\u0447\u043A\u0430","\u0411\u0443\u0442\u044B\u043B\u043A\u0430 \u0440\u043E\u043C\u0430","\u041A\u0440\u043E\u043A\u043E\u0434\u0438\u043B \u0413\u0435\u043D\u0430","\u0420\u0430\u0439\u0430\u043D \u0413\u043E\u0441\u043B\u0438\u043D\u0433","\u041D\u0430\u0440\u0443\u0447\u043D\u044B\u0435 \u0447\u0430\u0441\u044B","\u0423\u043C\u043D\u044B\u0439 \u0434\u043E\u043C","\u041A\u043E\u0444\u0435 \u0432\u0435\u0447\u0435\u0440\u043E\u043C"]);function N(b){e(1,s=D),o()}function m(){s=this.value,e(1,s)}function i(b){r=b,e(0,r)}const g=b=>e(0,r=b.detail);return t.$$.update=()=>{t.$$.dirty&1&&h()},[r,s,a,o,v,D,N,m,i,g]}class xe extends Pe{constructor(n){super(),De(this,n,Qe,Oe,Ve,{})}}export{xe as default};