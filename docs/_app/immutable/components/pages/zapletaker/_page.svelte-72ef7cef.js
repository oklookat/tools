var Le=Object.defineProperty;var Ce=(t,n,e)=>n in t?Le(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var G=(t,n,e)=>(Ce(t,typeof n!="symbol"?n+"":n,e),e);import{S as Pe,i as Ve,s as ke,k as p,a as k,l as h,m,h as c,c as A,n as d,p as Y,b as Z,C as l,D as $,_ as Ne,B as _e,M as Ae,N as Be,$ as We,F as Me,a0 as $e,q as C,w as me,L as je,r as N,x as ge,a1 as be,y as ye,a2 as Te,u as ze,f as Ee,t as we,z as Ie}from"../../../chunks/index-dd855060.js";import{B as qe}from"../../../chunks/button-8279e48a.js";import{r as Re}from"../../../chunks/index-8c5aca60.js";function ie(t){return t=Math.round(t),t>100?t=100:t<0&&(t=0),t}function Fe(t,n){let e=t/n*100;return e=Math.ceil(e),e=ie(e),e}function Ue(t,n){n<1&&(n=1);const e=Math.round(t/n)*n;return ie(e)}function De(t){let n=t-4;return ie(n)}function Ge(t){let n,e,s,a,r,v;return{c(){n=p("div"),e=p("div"),s=k(),a=p("div"),this.h()},l(o){n=h(o,"DIV",{class:!0});var _=m(n);e=h(_,"DIV",{class:!0,style:!0}),m(e).forEach(c),s=A(_),a=h(_,"DIV",{class:!0,style:!0}),m(a).forEach(c),_.forEach(c),this.h()},h(){d(e,"class","line svelte-jy4cs6"),Y(e,"width",t[1]+"%"),d(a,"class","dot svelte-jy4cs6"),Y(a,"left",De(t[1])+"%"),d(n,"class","range svelte-jy4cs6")},m(o,_){Z(o,n,_),l(n,e),l(n,s),l(n,a),t[7](n),r||(v=[$(n,"pointerdown",t[2]),$(n,"pointerup",t[3]),$(n,"pointercancel",t[3]),$(n,"contextmenu",Ne(t[6]))],r=!0)},p(o,[_]){_&2&&Y(e,"width",o[1]+"%"),_&2&&Y(a,"left",De(o[1])+"%")},i:_e,o:_e,d(o){o&&c(n),t[7](null),r=!1,Ae(v)}}}function He(t,n,e){let s;const a=Be();let{step:r=1}=n,{value:v=100}=n,o=v;function _(i){i.pointerType==="mouse"&&i.button!==0||(a("start"),D(i),s.setPointerCapture(i.pointerId),e(0,s.onpointermove=D,s))}function M(i){e(0,s.onpointermove=null,s),s.releasePointerCapture(i.pointerId),a("end")}function D(i){const b=s.clientWidth,B=s.getBoundingClientRect();let f=i.x-B.x;f<0?f=0:f>b&&(f=b);let E=Fe(f,b);E=Ue(E,r),E>99?E=100:E<1&&(E=0),e(1,o=E),a("sliding",o)}function S(i){We.call(this,t,i)}function g(i){Me[i?"unshift":"push"](()=>{s=i,e(0,s)})}return t.$$set=i=>{"step"in i&&e(4,r=i.step),"value"in i&&e(5,v=i.value)},[s,o,_,M,r,v,S,g]}class Je extends Pe{constructor(n){super(),Ve(this,n,He,Ge,ke,{step:4,value:5})}}class H{constructor(n,e){G(this,"cutLen",0);G(this,"full","");G(this,"first","");G(this,"second","");this.full=n,e||(e=10),this.cutLen=Qe(this.full.length,e),this.handle()}handle(){const n=this.full.slice(0,this.cutLen);this.first=n;const e=this.full.slice(this.cutLen);this.second=e}}let q=[];function Ke(t,n){if(q=[],!t)return t;let e=t;e=e.replace(/\s+/g," ").trim();const s=e.split(" ");if(s.length<2)return e;for(const r of s)q.push(new H(r,n));const a=[];for(let r=0;r<q.length&&q[r+1];r+=2){const{w1:v,w2:o}=Oe(q[r],q[r+1]);a.push(v.full,o.full)}return a.join(" ")}function Oe(t,n){if(!(t instanceof H)||!(n instanceof H))throw Error("cursify: words bad instance");const e=n.first+t.second,s=t.first+n.second;return{w1:new H(e),w2:new H(s)}}function Qe(t,n){let e=t*n/100;return e=Math.ceil(e),!e||e<0?0:e}function Ye(t){let n;return{c(){n=C("\u0421\u0434\u0435\u043B\u0430\u0442\u044C")},l(e){n=N(e,"\u0421\u0434\u0435\u043B\u0430\u0442\u044C")},m(e,s){Z(e,n,s)},d(e){e&&c(n)}}}function Ze(t){let n,e,s,a,r,v,o,_,M,D,S,g,i,b,B,f,E,X,x,w,ee,L,R,te,ne,j,I,se,le,P,ae,T,F=(t[2]?t[2]:"\u0442\u0443\u0442 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043F\u043B\u0435\u0442\u0430\u043A")+"",J,U,re,oe;function Se(u){t[9](u)}let ue={step:10};return t[0]!==void 0&&(ue.value=t[0]),I=new Je({props:ue}),Me.push(()=>$e(I,"value",Se,t[0])),I.$on("sliding",t[10]),P=new qe({props:{$$slots:{default:[Ye]},$$scope:{ctx:t}}}),P.$on("click",t[3]),{c(){n=p("meta"),e=p("meta"),s=k(),a=p("div"),r=p("div"),v=p("span"),o=C("\u0417\u0430\u043F\u043B\u0435\u0442\u0430\u043A\u0435\u0440"),_=k(),M=p("div"),D=C("\u043D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \u2014 \u043F\u043E\u043B\u0443\u0447\u0438\u0448\u044C \u0437\u0430\u043F\u043B\u0435\u0442\u0430\u043A"),S=k(),g=p("div"),i=p("label"),b=p("span"),B=C("\u0422\u0435\u043A\u0441\u0442 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 "),f=p("span"),E=C(t[5]),X=C(")"),x=k(),w=p("input"),ee=k(),L=p("div"),R=p("span"),te=C("\u0411\u0435\u0437\u0443\u043C\u0438\u0435"),ne=k(),j=p("div"),me(I.$$.fragment),le=k(),me(P.$$.fragment),ae=k(),T=p("div"),J=C(F),this.h()},l(u){const y=je("svelte-mff9rb",document.head);n=h(y,"META",{property:!0,content:!0}),e=h(y,"META",{name:!0,content:!0}),y.forEach(c),s=A(u),a=h(u,"DIV",{class:!0});var V=m(a);r=h(V,"DIV",{class:!0});var W=m(r);v=h(W,"SPAN",{class:!0});var ce=m(v);o=N(ce,"\u0417\u0430\u043F\u043B\u0435\u0442\u0430\u043A\u0435\u0440"),ce.forEach(c),_=A(W),M=h(W,"DIV",{});var fe=m(M);D=N(fe,"\u043D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \u2014 \u043F\u043E\u043B\u0443\u0447\u0438\u0448\u044C \u0437\u0430\u043F\u043B\u0435\u0442\u0430\u043A"),fe.forEach(c),W.forEach(c),S=A(V),g=h(V,"DIV",{class:!0});var z=m(g);i=h(z,"LABEL",{class:!0});var K=m(i);b=h(K,"SPAN",{});var O=m(b);B=N(O,"\u0422\u0435\u043A\u0441\u0442 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 "),f=h(O,"SPAN",{class:!0});var de=m(f);E=N(de,t[5]),de.forEach(c),X=N(O,")"),O.forEach(c),x=A(K),w=h(K,"INPUT",{type:!0,"aria-labelledby":!0,class:!0}),K.forEach(c),ee=A(z),L=h(z,"DIV",{class:!0});var Q=m(L);R=h(Q,"SPAN",{});var pe=m(R);te=N(pe,"\u0411\u0435\u0437\u0443\u043C\u0438\u0435"),pe.forEach(c),ne=A(Q),j=h(Q,"DIV",{class:!0});var he=m(j);ge(I.$$.fragment,he),he.forEach(c),Q.forEach(c),le=A(z),ge(P.$$.fragment,z),z.forEach(c),ae=A(V),T=h(V,"DIV",{class:!0});var ve=m(T);J=N(ve,F),ve.forEach(c),V.forEach(c),this.h()},h(){document.title="\u0417\u0430\u043F\u043B\u0435\u0442\u0430\u043A\u0435\u0440",d(n,"property","og:title"),d(n,"content","\u0417\u0430\u043F\u043B\u0435\u0442\u0430\u043A\u0435\u0440"),d(e,"name","description"),d(e,"content","\u0421\u044B\u0440 \u043A\u043E\u0441\u0438\u0447\u043A\u0430, \u043C\u0438\u0441\u043A\u0430 \u043A\u0430\u0448\u0438?"),d(v,"class","title svelte-1n37rfi"),d(r,"class","welcome svelte-1n37rfi"),d(f,"class","example svelte-1n37rfi"),d(w,"type","text"),d(w,"aria-labelledby","text__desc"),d(w,"class","svelte-1n37rfi"),d(i,"class","text svelte-1n37rfi"),d(j,"class","range svelte-1n37rfi"),d(L,"class","madness svelte-1n37rfi"),d(g,"class","main svelte-1n37rfi"),d(T,"class","result svelte-1n37rfi"),d(a,"class","zapletaker svelte-1n37rfi")},m(u,y){l(document.head,n),l(document.head,e),Z(u,s,y),Z(u,a,y),l(a,r),l(r,v),l(v,o),l(r,_),l(r,M),l(M,D),l(a,S),l(a,g),l(g,i),l(i,b),l(b,B),l(b,f),l(f,E),l(b,X),l(i,x),l(i,w),be(w,t[1]),l(g,ee),l(g,L),l(L,R),l(R,te),l(L,ne),l(L,j),ye(I,j,null),l(g,le),ye(P,g,null),l(a,ae),l(a,T),l(T,J),U=!0,re||(oe=[$(window,"keypress",t[4]),$(f,"mousedown",t[7]),$(w,"input",t[8])],re=!0)},p(u,[y]){y&2&&w.value!==u[1]&&be(w,u[1]);const V={};!se&&y&1&&(se=!0,V.value=u[0],Te(()=>se=!1)),I.$set(V);const W={};y&8192&&(W.$$scope={dirty:y,ctx:u}),P.$set(W),(!U||y&4)&&F!==(F=(u[2]?u[2]:"\u0442\u0443\u0442 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043F\u043B\u0435\u0442\u0430\u043A")+"")&&ze(J,F)},i(u){U||(Ee(I.$$.fragment,u),Ee(P.$$.fragment,u),U=!0)},o(u){we(I.$$.fragment,u),we(P.$$.fragment,u),U=!1},d(u){c(n),c(e),u&&c(s),u&&c(a),Ie(I),Ie(P),re=!1,Ae(oe)}}}function Xe(t,n,e){let s="",a="",r=0;function v(f){o()}function o(){e(2,a=Ke(s,r))}function _(f){f.key==="Enter"&&o()}let D=Re(["\u041C\u0430\u0448\u0438\u043D\u0430 \u0424\u043E\u0440\u0434","\u041C\u0438\u0441\u043A\u0430 \u043A\u0430\u0448\u0438","\u0421\u044B\u0440 \u043A\u043E\u0441\u0438\u0447\u043A\u0430","\u0411\u0443\u0442\u044B\u043B\u043A\u0430 \u0440\u043E\u043C\u0430","\u041A\u0440\u043E\u043A\u043E\u0434\u0438\u043B \u0413\u0435\u043D\u0430","\u0420\u0430\u0439\u0430\u043D \u0413\u043E\u0441\u043B\u0438\u043D\u0433","\u041D\u0430\u0440\u0443\u0447\u043D\u044B\u0435 \u0447\u0430\u0441\u044B","\u0423\u043C\u043D\u044B\u0439 \u0434\u043E\u043C","\u041A\u043E\u0444\u0435 \u0432\u0435\u0447\u0435\u0440\u043E\u043C"]);function S(){e(1,s=D),o()}const g=()=>S();function i(){s=this.value,e(1,s)}function b(f){r=f,e(0,r)}const B=f=>e(0,r=f.detail);return t.$$.update=()=>{t.$$.dirty&1&&v()},[r,s,a,o,_,D,S,g,i,b,B]}class st extends Pe{constructor(n){super(),Ve(this,n,Xe,Ze,ke,{})}}export{st as default};
