(this["webpackJsonp02-gif-expert-app"]=this["webpackJsonp02-gif-expert-app"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),i=n(7),s=n.n(i),u=(n(16),n(2)),j=n(9);function o(e){var t=e.setCategories,n=Object(c.useState)(""),r=Object(u.a)(n,2),i=r[0],s=r[1];return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(j.a)(e))})),s(""))},children:Object(a.jsx)("input",{type:"text",value:i,onChange:function(e){s(e.target.value)}})})}var d=n(10),l=n(6),b=n.n(l),f=n(8),m=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,a,c,r,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=5twlrqxXjhgbp3XPRX5wjo2rAScF5Y6y"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function h(e){e.id;var t=e.title,n=e.url;return Object(a.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(a.jsx)("img",{src:n,alt:t}),Object(a.jsx)("p",{children:t})]})}function p(e){var t=e.category,n=function(e){var t=Object(c.useState)({imgs:[],loading:!0}),n=Object(u.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){m(e).then((function(e){r({imgs:e,loading:!1})}))}),[e]),a}(t),r=n.imgs,i=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),i&&Object(a.jsx)("h4",{className:"animate__animated animate__flash",children:"Loading..."}),Object(a.jsx)("div",{className:"card-grid",children:r.map((function(e){return Object(a.jsx)(h,Object(d.a)({},e),e.id)}))})]})}function g(){var e=Object(c.useState)(["One Punch"]),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"GifExpertApp"}),Object(a.jsx)(o,{setCategories:r}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:n.map((function(e){return Object(a.jsx)(p,{category:e},e)}))})]})}var O=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(g,{})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),x()}},[[18,1,2]]]);
//# sourceMappingURL=main.1df80e09.chunk.js.map