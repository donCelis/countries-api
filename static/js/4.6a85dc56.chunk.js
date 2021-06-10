(this["webpackJsonpcountries-api"]=this["webpackJsonpcountries-api"]||[]).push([[4],{27:function(e,t,c){},29:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(19),s=c(13),r=(c(27),c(0)),a=c(4),i=c(1),l=function(){var e=Object(r.useContext)(a.a),t=e.countries,c=e.setFiltered;return Object(i.jsx)("section",{className:"search-form py-5",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("form",{onSubmit:function(e){e.preventDefault();var n=e.target.country.value,s=t.filter((function(e){return e.name.toLowerCase().match(n.toLowerCase())}));c(s),e.target.reset()},children:Object(i.jsxs)("div",{className:"input-group",children:[Object(i.jsx)("span",{className:"input-group-text",children:"\ud83d\udd0d"}),Object(i.jsx)("input",{type:"text",autoComplete:"off",name:"country",placeholder:"Search for a country...",className:"form-control"}),Object(i.jsx)("button",{className:"btn btn-dark text-light",type:"submit",children:"Search"})]})})})})},o=c(40),j=c(17),d=c.n(j),u=c(18),b="https://restcountries.eu/rest/v2",x=function(){var e=Object(u.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/all"));case 2:return t=e.sent,c=t.json(),e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(d.a.mark((function e(t){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/name/").concat(t,"?fullText=true"));case 2:return c=e.sent,n=c.json(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=(c(29),function(e){var t=e.name,c=e.flag,s=e.population,r=e.region,a=e.capital;return Object(i.jsxs)(n.b,{className:"card",to:"/country/".concat(t),"aria-label":t,children:[Object(i.jsx)("img",{loading:"lazy",src:c,className:"card-img-top",alt:t}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("h4",{className:"card-title mt-1 mb-3",children:t}),Object(i.jsxs)("p",{className:"card-text",children:[Object(i.jsx)("strong",{children:"Population: "}),s.toLocaleString("de-DE")]}),Object(i.jsxs)("p",{className:"card-text",children:[Object(i.jsx)("strong",{children:"Region: "}),r]}),Object(i.jsxs)("p",{className:"card-text",children:[Object(i.jsx)("strong",{children:"Capital: "}),a]})]})]})}),m=function(){var e=Object(r.useContext)(a.a),t=e.countries,c=e.setContries,n=e.filtered,s=e.setFiltered;return Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,c(t),s(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();0===t.length&&e()}),[]),0===t.length?Object(i.jsx)("div",{className:"text-center loading py-5",children:"Loading..."}):0===n.length?Object(i.jsx)("div",{className:"text-center loading py-5",children:"Busqueda no encontrada"}):Object(i.jsx)("section",{className:"countries",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"row gx-md-5 gy-5",children:n.map((function(e,t){return Object(i.jsx)("div",{className:"col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3",children:Object(i.jsx)(O,Object(o.a)({},e))},t)}))})})})},p=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)(m,{})]})},f=(c(38),function(){return Object(i.jsx)("header",{className:"py-4",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("section",{className:"d-flex",children:[Object(i.jsx)("h4",{className:"m-0",children:"Where in the world?"}),Object(i.jsx)("button",{className:"m-0 btn btn-info",children:"Dark Mode"})]})})})}),g=c(3),v=c(44),N={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,type:"spring"}}},y=(c(39),function(){var e=Object(s.f)().name,t=Object(r.useState)({}),c=Object(g.a)(t,2),a=c[0],l=c[1];Object(r.useEffect)((function(){(function(){var t=Object(u.a)(d.a.mark((function t(){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(e);case 2:c=t.sent,l(c[0]);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var o=a.flag,j=a.nativeName,b=a.population,x=a.region,O=a.subregion,m=a.capital,p=a.topLevelDomain,f=a.currencies,y=a.languages,w=a.borders;return 0===Object.entries(a).length?Object(i.jsx)("div",{className:"text-center loading py-5",children:"Loading..."}):Object(i.jsx)("section",{className:"country-details",children:Object(i.jsxs)(v.a.div,{variants:N,initial:"hidden",animate:"visible",className:"container",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"my-5",children:Object(i.jsx)(n.b,{className:"btn-back",to:"/","aria-label":"previous page",children:"Back"})})}),Object(i.jsxs)("div",{className:"row gx-md-5 gy-5 gy-lg-0 align-items-center",children:[Object(i.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-6",children:Object(i.jsx)("div",{children:Object(i.jsx)("img",{className:"flag img-fluid",src:o,alt:e})})}),Object(i.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-6",children:Object(i.jsxs)("article",{children:[Object(i.jsx)("h3",{children:e}),Object(i.jsxs)("div",{className:"row my-5",children:[Object(i.jsx)("div",{className:"col-6",children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"native name: "}),j]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"population: "}),b.toLocaleString("de-DE")]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"region: "}),x]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"subregion: "}),O]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"capital: "}),m]})]})}),Object(i.jsx)("div",{className:"col-6",children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"top level domain: "}),p]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"currencies: "}),f[0].code]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"currencies: "}),y[0].name]})]})})]}),Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"Border Countries: "}),0===w.length?Object(i.jsx)("p",{children:"No borders"}):Object(i.jsx)("ul",{className:"borders-list",children:w.map((function(e,t){return Object(i.jsx)("li",{children:e},t)}))})]})})]})})]})]})})}),w=function(){return Object(i.jsx)("section",{children:Object(i.jsx)("div",{className:"container py-5",children:Object(i.jsx)("p",{className:"text-center",children:"P\xe1gina no encontrada"})})})};t.default=function(){return Object(i.jsxs)(n.a,{basename:"countries-api",children:[Object(i.jsx)(f,{}),Object(i.jsxs)(s.c,{children:[Object(i.jsx)(s.a,{exact:!0,path:"/",component:p}),Object(i.jsx)(s.a,{exact:!0,path:"/country/:name",component:y}),Object(i.jsx)(s.a,{exact:!0,path:"*",component:w})]})]})}}}]);
//# sourceMappingURL=4.6a85dc56.chunk.js.map