import{S as ie,i as oe,s as ce,l as i,r as I,a as L,m as o,n as d,u as P,h as c,c as V,p as r,b as ue,F as t,P as Q,G as S,v as fe,E as re,Q as de,R as pe}from"../../chunks/index-65259950.js";import{t as he,r as ve}from"../../chunks/index-bc3c5511.js";import"../../chunks/index-57285400.js";class T{constructor(l,e){this.cutLen=0,this.full="",this.first="",this.second="",this.full=l,e||(e=10),this.cutLen=be(this.full.length,e),this.handle()}handle(){const l=this.full.slice(0,this.cutLen);this.first=l;const e=this.full.slice(this.cutLen);this.second=e}}let W=[];function _e(s,l){if(W=[],!s)return s;let e=s;e=e.replace(/\s+/g," ").trim();const n=e.split(" ");if(n.length<2)return e;for(const a of n)W.push(new T(a,l));const _=[];for(let a=0;a<W.length&&(console.log(a),!!W[a+1]);a+=2){const{w1:E,w2:m}=me(W[a],W[a+1]);_.push(E.full,m.full)}return _.join(" ")}function me(s,l){if(!(s instanceof T)||!(l instanceof T))throw Error("cursify: words bad instance");const e=l.first+s.second,n=s.first+l.second;return console.log(e,n),{w1:new T(e),w2:new T(n)}}function be(s,l){let e=s*l/100;return e=Math.ceil(e),!e||e<0?0:e}function Ee(s){let l,e,n,_,a,E,m,z,p,h,y,B,g,w,R,Z,b,x,k,C,H,J,u,K,A,O,X,D,M=(s[2]?s[2]:"\u0442\u0443\u0442 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043F\u043B\u0435\u0442\u0430\u043A")+"",U,Y,$;return{c(){l=i("div"),e=i("div"),n=i("span"),_=I("\u0417\u0430\u043F\u043B\u0435\u0442\u0430\u043A\u0435\u0440"),a=L(),E=i("div"),m=I("\u043D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \u2014 \u043F\u043E\u043B\u0443\u0447\u0438\u0448\u044C \u0437\u0430\u043F\u043B\u0435\u0442\u0430\u043A"),z=L(),p=i("div"),h=i("label"),y=i("span"),B=I("\u0422\u0435\u043A\u0441\u0442 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 "),g=i("span"),w=I(s[5]),R=I(")"),Z=L(),b=i("input"),x=L(),k=i("label"),C=i("span"),H=I("\u0411\u0435\u0437\u0443\u043C\u0438\u0435"),J=L(),u=i("input"),K=L(),A=i("div"),O=I("\u041A\u041D\u041E\u041F\u041A\u0410"),X=L(),D=i("div"),U=I(M),this.h()},l(v){l=o(v,"DIV",{class:!0});var f=d(l);e=o(f,"DIV",{class:!0});var j=d(e);n=o(j,"SPAN",{class:!0});var ee=d(n);_=P(ee,"\u0417\u0430\u043F\u043B\u0435\u0442\u0430\u043A\u0435\u0440"),ee.forEach(c),a=V(j),E=o(j,"DIV",{});var te=d(E);m=P(te,"\u043D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \u2014 \u043F\u043E\u043B\u0443\u0447\u0438\u0448\u044C \u0437\u0430\u043F\u043B\u0435\u0442\u0430\u043A"),te.forEach(c),j.forEach(c),z=V(f),p=o(f,"DIV",{class:!0});var N=d(p);h=o(N,"LABEL",{class:!0});var q=d(h);y=o(q,"SPAN",{});var F=d(y);B=P(F,"\u0422\u0435\u043A\u0441\u0442 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 "),g=o(F,"SPAN",{class:!0});var se=d(g);w=P(se,s[5]),se.forEach(c),R=P(F,")"),F.forEach(c),Z=V(q),b=o(q,"INPUT",{type:!0,"aria-labelledby":!0,class:!0}),q.forEach(c),x=V(N),k=o(N,"LABEL",{class:!0});var G=d(k);C=o(G,"SPAN",{});var le=d(C);H=P(le,"\u0411\u0435\u0437\u0443\u043C\u0438\u0435"),le.forEach(c),J=V(G),u=o(G,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),G.forEach(c),K=V(N),A=o(N,"DIV",{class:!0});var ne=d(A);O=P(ne,"\u041A\u041D\u041E\u041F\u041A\u0410"),ne.forEach(c),N.forEach(c),X=V(f),D=o(f,"DIV",{class:!0});var ae=d(D);U=P(ae,M),ae.forEach(c),f.forEach(c),this.h()},h(){r(n,"class","title svelte-lifn0b"),r(e,"class","welcome svelte-lifn0b"),r(g,"class","example svelte-lifn0b"),r(b,"type","text"),r(b,"aria-labelledby","text__desc"),r(b,"class","svelte-lifn0b"),r(h,"class","text svelte-lifn0b"),r(u,"type","range"),r(u,"min","10"),r(u,"max","80"),r(u,"step","5"),r(u,"class","svelte-lifn0b"),r(k,"class","madness svelte-lifn0b"),r(A,"class","button"),r(p,"class","main svelte-lifn0b"),r(D,"class","result svelte-lifn0b"),r(l,"class","zapletaker svelte-lifn0b")},m(v,f){ue(v,l,f),t(l,e),t(e,n),t(n,_),t(e,a),t(e,E),t(E,m),t(l,z),t(l,p),t(p,h),t(h,y),t(y,B),t(y,g),t(g,w),t(y,R),t(h,Z),t(h,b),Q(b,s[1]),t(p,x),t(p,k),t(k,C),t(C,H),t(k,J),t(k,u),Q(u,s[0]),t(p,K),t(p,A),t(A,O),t(l,X),t(l,D),t(D,U),Y||($=[S(window,"keypress",s[4]),S(g,"click",s[6]),S(b,"input",s[7]),S(u,"change",s[8]),S(u,"input",s[8]),S(A,"click",s[3])],Y=!0)},p(v,[f]){f&2&&b.value!==v[1]&&Q(b,v[1]),f&1&&Q(u,v[0]),f&4&&M!==(M=(v[2]?v[2]:"\u0442\u0443\u0442 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043F\u043B\u0435\u0442\u0430\u043A")+"")&&fe(U,M)},i:re,o:re,d(v){v&&c(l),Y=!1,de($)}}}function ye(s,l,e){he.set("\u0417\u0430\u043F\u043B\u0435\u0442\u0430\u043A\u0435\u0440");let n="",_="",a=10;function E(w){m()}function m(w){e(2,_=_e(n,a))}function z(w){w.key==="Enter"&&m()}let h=ve(["\u041C\u0430\u0448\u0438\u043D\u0430 \u0424\u043E\u0440\u0434","\u041C\u0438\u0441\u043A\u0430 \u043A\u0430\u0448\u0438","\u0421\u044B\u0440 \u043A\u043E\u0441\u0438\u0447\u043A\u0430","\u0411\u0443\u0442\u044B\u043B\u043A\u0430 \u0440\u043E\u043C\u0430","\u041A\u0440\u043E\u043A\u043E\u0434\u0438\u043B \u0413\u0435\u043D\u0430","\u0420\u0430\u0439\u0430\u043D \u0413\u043E\u0441\u043B\u0438\u043D\u0433","\u041D\u0430\u0440\u0443\u0447\u043D\u044B\u0435 \u0447\u0430\u0441\u044B","\u0423\u043C\u043D\u044B\u0439 \u0434\u043E\u043C","\u041F\u043E\u043C\u0438\u0434\u043E\u0440\u043D\u044B\u0439 \u043E\u0433\u0443\u0440\u0435\u0446"]);function y(w){e(1,n=h),m()}function B(){n=this.value,e(1,n)}function g(){a=pe(this.value),e(0,a)}return s.$$.update=()=>{s.$$.dirty&1&&E()},[a,n,_,m,z,h,y,B,g]}class Ie extends ie{constructor(l){super(),oe(this,l,ye,Ee,ce,{})}}export{Ie as default};
