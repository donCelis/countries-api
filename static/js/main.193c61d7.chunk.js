(this["webpackJsonpcountries-api"]=this["webpackJsonpcountries-api"]||[]).push([[0],{29:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(20),a=c.n(s),i=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))},l=c(14),o=c(1),j=Object(n.createContext)({}),d=function(e){var t=e.children,c=Object(n.useState)([]),r=Object(l.a)(c,2),s={countries:r[0],setContries:r[1]};return Object(o.jsx)(j.Provider,{value:s,children:t})},u=c(12),b=c(2),x=c(9),h=c.n(x),O=c(10),p="https://restcountries.eu/rest/v2",m=function(){var e=Object(O.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/all"));case 2:return t=e.sent,c=t.json(),e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(O.a)(h.a.mark((function e(t){var c,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/name/").concat(t,"?fullText=true"));case 2:return c=e.sent,n=c.json(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=c(22),f=(c(29),function(e){var t=e.name,c=e.flag,n=e.population,r=e.region,s=e.capital;return n=new Intl.NumberFormat("de-DE").format(Number(n)),Object(o.jsxs)(u.b,{className:"card",to:"/country/".concat(t),"aria-label":t,children:[Object(o.jsx)("img",{loading:"lazy",src:c,className:"card-img-top",alt:t}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h4",{className:"card-title mt-1 mb-3",children:t}),Object(o.jsxs)("p",{className:"card-text",children:[Object(o.jsx)("strong",{children:"Population: "}),n]}),Object(o.jsxs)("p",{className:"card-text",children:[Object(o.jsx)("strong",{children:"Region: "}),r]}),Object(o.jsxs)("p",{className:"card-text",children:[Object(o.jsx)("strong",{children:"Capital: "}),s]})]})]})}),N=function(){var e=Object(n.useContext)(j).countries;return Object(o.jsx)("section",{className:"py-5 countries",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row gx-md-5 gy-5",children:e.map((function(e,t){return Object(o.jsx)("div",{className:"col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3",children:Object(o.jsx)(f,Object(v.a)({},e))},t)}))})})})},y=function(){var e=Object(n.useContext)(j),t=e.countries,c=e.setContries;return Object(n.useEffect)((function(){(function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),0===t.length?Object(o.jsx)("div",{className:"text-center loading",children:"Loading..."}):Object(o.jsx)(N,{})},w=c(39),C={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,type:"spring"}}},k=function(){var e=Object(b.f)().name,t=Object(n.useState)({}),c=Object(l.a)(t,2),r=c[0],s=c[1];Object(n.useEffect)((function(){(function(){var t=Object(O.a)(h.a.mark((function t(){var c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:c=t.sent,s(c[0]);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var a=r.flag,i=r.nativeName,j=r.population,d=r.region,x=r.subregion,p=r.capital,m=r.topLevelDomain,v=r.currencies,f=r.languages,N=r.borders;return Object(o.jsx)("section",{className:"country-details",children:0===Object.entries(r).length?Object(o.jsx)("div",{className:"text-center loading",children:"Loading..."}):Object(o.jsxs)(w.a.div,{variants:C,initial:"hidden",animate:"visible",className:"container",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"mb-5",children:Object(o.jsx)(u.b,{className:"btn-back",to:"/","aria-label":"previous page",children:"Back"})})}),Object(o.jsxs)("div",{className:"row gx-md-5 gy-5 gy-lg-0 align-items-center",children:[Object(o.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-6",children:Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"flag img-fluid",src:a,alt:e})})}),Object(o.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-6",children:Object(o.jsxs)("article",{children:[Object(o.jsx)("h3",{children:e}),Object(o.jsxs)("div",{className:"row my-5",children:[Object(o.jsx)("div",{className:"col-6",children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"native name: "})," ",i]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"population: "})," ",j]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"region: "})," ",d]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"subregion: "})," ",x]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"capital: "})," ",p]})]})}),Object(o.jsx)("div",{className:"col-6",children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"top level domain: "})," ",m]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"currencies: "})," ",v[0].code]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"currencies: "})," ",f[0].name]})]})})]}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"Border Countries: "}),0===N.length?Object(o.jsx)("p",{children:"No borders"}):Object(o.jsx)("ul",{className:"borders-list",children:N.map((function(e,t){return Object(o.jsx)("li",{children:e},t)}))})]})})]})})]})]})})},F=function(){return Object(o.jsx)("section",{children:Object(o.jsx)("div",{className:"container py-5",children:Object(o.jsx)("p",{className:"text-center",children:"No encontrado"})})})},L=function(){return Object(o.jsx)(u.a,{basename:"countries-api",children:Object(o.jsxs)(b.c,{children:[Object(o.jsx)(b.a,{exact:!0,path:"/",component:y}),Object(o.jsx)(b.a,{exact:!0,path:"/country/:name",component:k}),Object(o.jsx)(b.a,{exact:!0,path:"*",component:F})]})})};c(35);a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(d,{children:Object(o.jsx)(L,{})})}),document.getElementById("root")),i()}},[[36,1,2]]]);
//# sourceMappingURL=main.193c61d7.chunk.js.map