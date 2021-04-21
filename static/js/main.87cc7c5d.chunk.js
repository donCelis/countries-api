(this["webpackJsonpcountries-api"]=this["webpackJsonpcountries-api"]||[]).push([[0],{29:function(e,c,t){},30:function(e,c,t){},36:function(e,c,t){},37:function(e,c,t){},38:function(e,c,t){"use strict";t.r(c);var n=t(0),s=t.n(n),r=t(20),a=t.n(r),i=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(c){var t=c.getCLS,n=c.getFID,s=c.getFCP,r=c.getLCP,a=c.getTTFB;t(e),n(e),s(e),r(e),a(e)}))},l=t(14),j=t(1),o=Object(n.createContext)({}),d=function(e){var c=e.children,t=Object(n.useState)([]),s=Object(l.a)(t,2),r={countries:s[0],setContries:s[1]};return Object(j.jsx)(o.Provider,{value:r,children:c})},b=t(12),u=t(2),x=t(9),h=t.n(x),O=t(10),p="https://restcountries.eu/rest/v2",m=function(){var e=Object(O.a)(h.a.mark((function e(){var c,t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/all"));case 2:return c=e.sent,t=c.json(),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(O.a)(h.a.mark((function e(c){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/name/").concat(c,"?fullText=true"));case 2:return t=e.sent,n=t.json(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}(),f=(t(29),function(){return Object(j.jsx)("header",{className:"py-4",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("section",{className:"d-flex",children:[Object(j.jsx)("h4",{className:"m-0",children:"Where in the world?"}),Object(j.jsx)("p",{className:"m-0",children:"Dark Mode"})]})})})}),v=t(22),N=(t(30),function(e){var c=e.name,t=e.flag,n=e.population,s=e.region,r=e.capital;return Object(j.jsxs)(b.b,{className:"card",to:"/country/".concat(c),"aria-label":c,children:[Object(j.jsx)("img",{loading:"lazy",src:t,className:"card-img-top",alt:c}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h4",{className:"card-title mt-1 mb-3",children:c}),Object(j.jsxs)("p",{className:"card-text",children:[Object(j.jsx)("strong",{children:"Population: "}),n.toLocaleString("de-DE")]}),Object(j.jsxs)("p",{className:"card-text",children:[Object(j.jsx)("strong",{children:"Region: "}),s]}),Object(j.jsxs)("p",{className:"card-text",children:[Object(j.jsx)("strong",{children:"Capital: "}),r]})]})]})}),y=function(){var e=Object(n.useContext)(o).countries;return Object(j.jsx)("section",{className:"countries py-5",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row gx-md-5 gy-5",children:e.map((function(e,c){return Object(j.jsx)("div",{className:"col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3",children:Object(j.jsx)(N,Object(v.a)({},e))},c)}))})})})},w=function(){var e=Object(n.useContext)(o),c=e.countries,t=e.setContries;return Object(n.useEffect)((function(){(function(){var e=Object(O.a)(h.a.mark((function e(){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:c=e.sent,t(c);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),0===c.length?Object(j.jsx)("section",{className:"py-5",children:Object(j.jsx)("div",{className:"text-center loading",children:"Loading..."})}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{}),Object(j.jsx)(y,{})]})},C=t(41),k={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,type:"spring"}}},L=(t(36),function(){var e=Object(u.f)().name,c=Object(n.useState)({}),t=Object(l.a)(c,2),s=t[0],r=t[1];Object(n.useEffect)((function(){(function(){var c=Object(O.a)(h.a.mark((function c(){var t;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,g(e);case 2:t=c.sent,r(t[0]);case 4:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}})()()}),[e]);var a=s.flag,i=s.nativeName,o=s.population,d=s.region,x=s.subregion,p=s.capital,m=s.topLevelDomain,f=s.currencies,v=s.languages,N=s.borders;return Object(j.jsx)("section",{className:"country-details py-5",children:0===Object.entries(s).length?Object(j.jsx)("div",{className:"text-center loading",children:"Loading..."}):Object(j.jsxs)(C.a.div,{variants:k,initial:"hidden",animate:"visible",className:"container",children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"mb-5",children:Object(j.jsx)(b.b,{className:"btn-back",to:"/","aria-label":"previous page",children:"Back"})})}),Object(j.jsxs)("div",{className:"row gx-md-5 gy-5 gy-lg-0 align-items-center",children:[Object(j.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-6",children:Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"flag img-fluid",src:a,alt:e})})}),Object(j.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-6",children:Object(j.jsxs)("article",{children:[Object(j.jsx)("h3",{children:e}),Object(j.jsxs)("div",{className:"row my-5",children:[Object(j.jsx)("div",{className:"col-6",children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"native name: "}),i]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"population: "}),o.toLocaleString("de-DE")]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"region: "}),d]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"subregion: "}),x]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"capital: "}),p]})]})}),Object(j.jsx)("div",{className:"col-6",children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"top level domain: "}),m]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"currencies: "}),f[0].code]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"currencies: "}),v[0].name]})]})})]}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Border Countries: "}),0===N.length?Object(j.jsx)("p",{children:"No borders"}):Object(j.jsx)("ul",{className:"borders-list",children:N.map((function(e,c){return Object(j.jsx)("li",{children:e},c)}))})]})})]})})]})]})})}),S=function(){return Object(j.jsx)("section",{children:Object(j.jsx)("div",{className:"container py-5",children:Object(j.jsx)("p",{className:"text-center",children:"No encontrado"})})})},D=function(){return Object(j.jsx)(b.a,{basename:"countries-api",children:Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{exact:!0,path:"/",component:w}),Object(j.jsx)(u.a,{exact:!0,path:"/country/:name",component:L}),Object(j.jsx)(u.a,{exact:!0,path:"*",component:S})]})})};t(37);a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(d,{children:Object(j.jsx)(D,{})})}),document.getElementById("root")),i()}},[[38,1,2]]]);
//# sourceMappingURL=main.87cc7c5d.chunk.js.map