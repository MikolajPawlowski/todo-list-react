(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(7),s=n.n(i),a=(n(13),n(8)),r=n(4),u=n(3),d=(n(14),n(0)),l=function(e){var t=e.addNewTask,n=Object(c.useState)(""),o=Object(u.a)(n,2),i=o[0],s=o[1];return Object(d.jsx)("form",{className:"form",onSubmit:function(e){e.preventDefault();var n=i.trim();n&&(t(n),s(""))},children:Object(d.jsxs)("fieldset",{className:"form__fieldset",children:[Object(d.jsx)("input",{value:i,className:"form__input",type:"text",placeholder:"Co jest do zrobienia?",onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("button",{className:"form__button",children:"Dodaj zadanie"})]})})},j=(n(16),function(e){var t=e.tasks,n=e.hideDone,c=e.removeTask,o=e.toggleTaskDone;return Object(d.jsx)("ul",{className:"section__list",children:t.map((function(e){return Object(d.jsxs)("li",{className:"list__item".concat(e.done&&n?" list__item--hidden":""),children:[Object(d.jsx)("button",{className:"list__button list__button--toggleDone",onClick:function(){return o(e.id)},children:e.done?"\u2713":""}),Object(d.jsx)("span",{className:"list__span".concat(e.done?" list__span--done":""),children:e.content}),Object(d.jsx)("button",{className:"list__button list__button--remove",onClick:function(){return c(e.id)},children:"\ud83d\uddd1\ufe0f"})]},e.id)}))})}),b=(n(17),function(e){var t=e.tasks,n=e.hideDone,c=e.toggleHideDone,o=e.setAllDone;return Object(d.jsx)("div",{className:"section__buttons",children:t.length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{onClick:c,className:"section__button",children:n?"Poka\u017c uko\u0144czone":"Ukryj uko\u0144czone"}),Object(d.jsx)("button",{onClick:o,className:"section__button",disabled:t.every((function(e){return e.done})),children:"Uko\u0144cz wszystkie"})]})})}),f=(n(18),function(e){var t=e.title,n=e.body,c=e.extraHeaderContent;return Object(d.jsxs)("section",{className:"section",children:[Object(d.jsxs)("header",{className:"section__header",children:[Object(d.jsx)("h2",{className:"section__title",children:t}),c]}),n]})}),h=function(e){var t=e.title;return Object(d.jsx)("header",{children:Object(d.jsx)("h1",{children:t})})},O=(n(19),function(e){var t=e.children;return Object(d.jsx)("main",{className:"container",children:t})});var m=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)([{id:1,content:"przej\u015b\u0107 na Reacta",done:!1},{id:2,content:"odrobi\u0107 zadanie domowe",done:!0}]),s=Object(u.a)(i,2),m=s[0],_=s[1];return Object(d.jsxs)(O,{children:[Object(d.jsx)(h,{title:"Lista zada\u0144"}),Object(d.jsx)(f,{title:"Dodaj nowe zadanie",body:Object(d.jsx)(l,{addNewTask:function(e){_((function(t){return[].concat(Object(a.a)(t),[{content:e,done:!1,id:t.length?t[t.length-1].id+1:1}])}))}})}),Object(d.jsx)(f,{title:"Lista zada\u0144",body:Object(d.jsx)(j,{tasks:m,hideDone:n,removeTask:function(e){_((function(t){return t.filter((function(t){return t.id!==e}))}))},toggleTaskDone:function(e){_((function(t){return t.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{done:!t.done}):t}))}))}}),extraHeaderContent:Object(d.jsx)(b,{tasks:m,hideDone:n,toggleHideDone:function(){o((function(e){return!e}))},setAllDone:function(){_((function(e){return e.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{done:!0})}))}))}})})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),i(e),s(e)}))};s.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),_()}],[[20,1,2]]]);
//# sourceMappingURL=main.d1919954.chunk.js.map