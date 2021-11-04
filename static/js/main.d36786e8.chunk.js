(this["webpackJsonpcountries-api"]=this["webpackJsonpcountries-api"]||[]).push([[0],{26:function(e,t,c){},28:function(e,t,c){},30:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(17),a=c.n(r),i=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))},l=(c(25),c(26),c(12)),o=c(0),j=Object(n.createContext)({}),d=function(e){var t=e.children,c=Object(n.useState)([]),s=Object(l.a)(c,2),r=s[0],a=s[1],i=Object(n.useState)([]),d=Object(l.a)(i,2),u={countries:r,setContries:a,filtered:d[0],setFiltered:d[1]};return Object(o.jsx)(j.Provider,{value:u,children:t})},u=c(10),b=c(2),x=(c(28),function(){var e=Object(n.useContext)(j),t=e.countries,c=e.setFiltered;return Object(o.jsx)("section",{className:"search-form py-5",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault();var n=e.target.country.value,s=t.filter((function(e){return e.name.toLowerCase().match(n.toLowerCase())}));c(s),e.target.reset()},children:Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("span",{className:"input-group-text",children:"\ud83d\udd0d"}),Object(o.jsx)("input",{type:"text",autoComplete:"off",name:"country",placeholder:"Search for a country...",className:"form-control"}),Object(o.jsx)("button",{className:"btn btn-dark text-light",type:"submit",children:"Search"})]})})})})}),h=c(20),O=c(7),m=c.n(O),p=c(8),f="https://restcountries.com/v3.1/all",g=function(){var e=Object(p.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f));case 2:return t=e.sent,c=t.json(),e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(p.a)(m.a.mark((function e(t){var c,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"/name/").concat(t,"?fullText=true"));case 2:return c=e.sent,n=c.json(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=(c(30),function(e){var t=e.name,c=e.flags,n=e.population,s=e.region,r=e.capital;return Object(o.jsxs)(u.b,{className:"card",to:"/country/".concat(t.official),"aria-label":t.official,children:[Object(o.jsx)("img",{loading:"lazy",src:c.svg,className:"card-img-top",alt:t.official}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h4",{className:"card-title mt-1 mb-3",children:t.official}),Object(o.jsxs)("p",{className:"card-text",children:[Object(o.jsx)("strong",{children:"Population: "}),n.toLocaleString("de-DE")]}),Object(o.jsxs)("p",{className:"card-text",children:[Object(o.jsx)("strong",{children:"Region: "}),s]}),Object(o.jsxs)("p",{className:"card-text",children:[Object(o.jsx)("strong",{children:"Capital: "}),r]})]})]})}),y=function(){var e=Object(n.useContext)(j),t=e.countries,c=e.setContries,s=e.filtered,r=e.setFiltered;return Object(n.useEffect)((function(){var e=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,c(t),r(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();0===t.length&&e()}),[]),0===t.length?Object(o.jsx)("div",{className:"text-center loading py-5",children:"Loading..."}):0===s.length?Object(o.jsx)("div",{className:"text-center loading py-5",children:"Busqueda no encontrada"}):Object(o.jsx)("section",{className:"countries",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row gx-md-5 gy-5",children:s.map((function(e,t){return Object(o.jsx)("div",{className:"col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3",children:Object(o.jsx)(N,Object(h.a)({},e))},t)}))})})})},w=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(x,{}),Object(o.jsx)(y,{})]})},C=(c(36),function(){return Object(o.jsx)("header",{className:"py-4",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("section",{className:"d-flex",children:[Object(o.jsx)("h4",{className:"m-0",children:"Where in the world?"}),Object(o.jsx)("button",{className:"m-0 btn btn-info",children:"Dark Mode"})]})})})}),k=(c(37),function(){var e=Object(b.f)().name,t=Object(n.useState)({}),c=Object(l.a)(t,2),s=c[0],r=c[1];Object(n.useEffect)((function(){(function(){var t=Object(p.a)(m.a.mark((function t(){var c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e);case 2:c=t.sent,r(c[0]);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var a=s.flags,i=s.nativeName,j=s.population,d=s.region,x=s.subregion,h=s.capital,O=s.topLevelDomain,f=s.currencies,g=s.languages,N=s.borders;return 0===Object.entries(s).length?Object(o.jsx)("div",{className:"text-center loading py-5",children:"Loading..."}):Object(o.jsx)("section",{className:"country-details",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"my-5",children:Object(o.jsx)(u.b,{className:"btn-back",to:"/","aria-label":"previous page",children:"Back"})})}),Object(o.jsxs)("div",{className:"row gx-md-5 gy-5 gy-lg-0 align-items-center",children:[Object(o.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-6",children:Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"flag img-fluid",src:a.svg,alt:e})})}),Object(o.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-6",children:Object(o.jsxs)("article",{children:[Object(o.jsx)("h3",{children:e}),Object(o.jsxs)("div",{className:"row my-5",children:[Object(o.jsx)("div",{className:"col-6",children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"native name: "}),i]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"population: "}),j.toLocaleString("de-DE")]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"region: "}),d]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"subregion: "}),x]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"capital: "}),h]})]})}),Object(o.jsx)("div",{className:"col-6",children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"top level domain: "}),O]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"currencies: "}),f[0].code]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"currencies: "}),g[0].name]})]})})]}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"Border Countries: "}),0===N.length?Object(o.jsx)("p",{children:"No borders"}):Object(o.jsx)("ul",{className:"borders-list",children:N.map((function(e,t){return Object(o.jsx)("li",{children:e},t)}))})]})})]})})]})]})})}),S=function(){return Object(o.jsx)("section",{children:Object(o.jsx)("div",{className:"container py-5",children:Object(o.jsx)("p",{className:"text-center",children:"P\xe1gina no encontrada"})})})},L=function(){return Object(o.jsxs)(u.a,{children:[Object(o.jsx)(C,{}),Object(o.jsxs)(b.c,{children:[Object(o.jsx)(b.a,{exact:!0,path:"/",component:w}),Object(o.jsx)(b.a,{exact:!0,path:"/country/:name",component:k}),Object(o.jsx)(b.a,{exact:!0,path:"*",component:S})]})]})};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(d,{children:Object(o.jsx)(L,{})})}),document.getElementById("root")),i()}},[[38,1,2]]]);
//# sourceMappingURL=main.d36786e8.chunk.js.map