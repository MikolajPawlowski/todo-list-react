(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{49:function(n,e,t){"use strict";t.r(e);var r,o,c,a,i,s,d,u,l,b,j,x,h,f,O,p,m,g,v,k,w,y=t(0),C=t.n(y),z=t(22),D=t.n(z),I=t(4),T=t(9),S=t(7),H=Object(I.b)(r||(r=Object(S.a)(['\n  html {\n    box-sizing: border-box;\n  }\n\n  *, ::after, ::before {\n    box-sizing: inherit;\n  }\n\n  body {\n    display: flex;\n    flex-direction: column;\n    font-family: "Montserrat", sans-serif;\n    background-color: rgb(235, 235, 235);\n  }\n']))),A=t(17),E=t(8),F=t(35),P=t(21),U=I.d.form(o||(o=Object(S.a)(["\n    max-width: 1080px;\n"]))),L=I.d.fieldset(c||(c=Object(S.a)(["\n    margin: 0 auto;\n    border: none;\n    display: flex;\n    padding: 20px;\n    background-color: white;\n\n    @media (max-width: ","px) {\n        padding: 5px;\n        flex-direction: column;\n    }\n"])),(function(n){return n.theme.breakpoints.small})),N=I.d.button(a||(a=Object(S.a)(["\n    background-color: ",";\n    color: white;\n    padding: 10px;\n    border: none;\n    cursor: pointer;\n    flex-shrink: 0;\n    transition: background-color 0.5s, transform 0.5s;\n    \n    &:hover {\n        background-color: ",";\n        transform: scale(1.05);\n    }\n\n    &:active {\n        background-color: ",";\n    }\n\n    @media(max-width: ","px) {\n        flex-basis: 100%;\n        margin: 5px 0px;\n    }\n"])),(function(n){return n.theme.colors.buttonsColor}),(function(n){return n.theme.colors.buttonsColorHover}),(function(n){return n.theme.colors.buttonsActive}),(function(n){return n.theme.breakpoints.small})),J=t(33),R="tasks",M=function(n){return localStorage.setItem(R,JSON.stringify(n))},B=Object(P.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(R))||[],hideDone:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,o=t.findIndex((function(n){return n.id===r}));t[o].done=!t[o].done},removeTask:function(n,e){var t=n.tasks,r=e.payload,o=t.findIndex((function(n){return n.id===r}));t.splice(o,1)},setAllDone:function(n){var e,t=n.tasks,r=Object(J.a)(t);try{for(r.s();!(e=r.n()).done;){e.value.done=!0}}catch(o){r.e(o)}finally{r.f()}},fetchExampleTasks:function(n){n.loading=!0},fetchExampleTasksSuccess:function(n,e){var t=e.payload;n.tasks=t,n.loading=!1},fetchExampleTasksError:function(n){n.loading=!1}}}),q=B.actions,W=q.addTask,Z=q.toggleHideDone,G=q.toggleTaskDone,K=q.removeTask,Q=q.setAllDone,V=q.fetchExampleTasks,X=q.fetchExampleTasksSuccess,Y=q.fetchExampleTasksError,$=function(n){return n.tasks},_=function(n){return $(n).tasks},nn=function(n){return $(n).hideDone},en=function(n){return $(n).loading},tn=function(n){return 0===_(n).length},rn=function(n){return _(n).every((function(n){return n.done}))},on=B.reducer,cn=I.d.input(i||(i=Object(S.a)(["\n    flex-grow:1;\n    margin-right: 10px;\n    padding: 10px;\n    color: black;\n    border: 1px solid ",";\n    outline-color: ",";\n\n    @media (max-width: ","px) {\n        margin: 0 0 10px;\n    }\n"])),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.buttonsColor}),(function(n){return n.theme.breakpoints.small})),an=t(2),sn=function(){var n=Object(y.useState)(""),e=Object(F.a)(n,2),t=e[0],r=e[1],o=Object(y.useRef)(null),c=Object(T.b)();return Object(an.jsx)(U,{onSubmit:function(n){n.preventDefault();var e=t.trim();e&&(c(W({content:e,done:!1,id:Object(P.c)()})),r(""),o.current.focus())},children:Object(an.jsxs)(L,{children:[Object(an.jsx)(cn,{ref:o,value:t,required:!0,placeholder:"Co jest do zrobienia?",onChange:function(n){var e=n.target;return r(e.value)}}),Object(an.jsx)(N,{children:"Dodaj zadanie"})]})})},dn="link-active",un=Object(I.d)(A.b).attrs((function(){return{activeClassName:dn}}))(s||(s=Object(S.a)(["\n  color: ",";\n  text-decoration: none;\n\n  &."," {\n    font-weight: bold;\n  }\n\n  &:hover {\n    border-bottom: 2px solid;\n  }\n"])),(function(n){return n.theme.colors.white}),dn),ln=I.d.ul(d||(d=Object(S.a)(["\n    list-style: none;\n    padding: 20px 20px;\n    margin: 0;\n"]))),bn=I.d.li(u||(u=Object(S.a)(["\n    display: flex;\n    padding: 10px 10px;\n    align-items: center;\n    border-bottom: 1px solid rgb(235, 235, 235);\n\n    ","\n"])),(function(n){return n.hidden&&Object(I.c)(l||(l=Object(S.a)(["\n        display: none;\n    "])))})),jn=I.d.span(b||(b=Object(S.a)(["\n    word-break: break-word;\n    flex-grow: 1;\n    \n    ","\n"])),(function(n){return n.done&&Object(I.c)(j||(j=Object(S.a)(["\n        text-decoration-line: line-through;\n    "])))})),xn=I.d.button(x||(x=Object(S.a)(["\n    height: 30px;\n    width: 30px;\n    margin: 0 10px;\n    border: none;\n    color: white;\n    flex-shrink: 0;\n    cursor: pointer;\n\n    ","\n\n    ","\n"])),(function(n){return n.toggleDone&&Object(I.c)(h||(h=Object(S.a)(["\n        background-color: ",";\n\n        &:hover {\n        background-color: ",";\n        transition: .5s ease-out;\n        }\n\n        &:active {\n        background-color: ",";\n        transition: .5s ease-out;\n        }\n    "])),(function(n){return n.theme.colors.doneIconColor}),(function(n){return n.theme.colors.doneIconColorHover}),(function(n){return n.theme.colors.doneIconColorActive}))}),(function(n){return n.remove&&Object(I.c)(f||(f=Object(S.a)(["\n        background-color: ",";\n    \n        &:hover {\n        background-color: ",";\n        transition: .5s ease-out;\n        }\n\n        &:active {\n        background-color: ",";\n        transition: .5s ease-out;\n        }    \n    "])),(function(n){return n.theme.colors.deleteIconColor}),(function(n){return n.theme.colors.deleteIconColorHover}),(function(n){return n.theme.colors.deleteIconColorActive}))})),hn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:":id"},e=n.id;return"/zadania/".concat(e)},fn="szukaj",On=function(n){var e=Object(E.h)();return new URLSearchParams(e.search).get(n)},pn=function(){var n=On(fn),e=Object(T.c)((function(e){return function(n,e){var t=_(n);return e&&""!==e.trim()?t.filter((function(n){return n.content.toUpperCase().includes(e.trim().toUpperCase())})):t}(e,n)})),t=Object(T.c)(nn),r=Object(T.b)();return Object(an.jsx)(ln,{children:e.map((function(n){return Object(an.jsxs)(bn,{hidden:n.done&&t,children:[Object(an.jsx)(xn,{toggleDone:!0,onClick:function(){return r(G(n.id))},children:n.done?"\u2713":""}),Object(an.jsx)(jn,{done:n.done,children:Object(an.jsx)(un,{to:hn({id:n.id}),children:n.content})}),Object(an.jsx)(xn,{remove:!0,onClick:function(){return r(K(n.id))},children:"\ud83d\uddd1\ufe0f"})]},n.id)}))})},mn=I.d.div(O||(O=Object(S.a)(["\n    display: flex;\n    flex-wrap: wrap;\n"]))),gn=I.d.button(p||(p=Object(S.a)(["\n    background: transparent;\n    color: ",";\n    border: none;\n    margin: 0 0 0 20px;\n    transition: filter 0.5s;\n    cursor: pointer;\n\n    @media(max-width: ","px) {\n        flex-basis: 100%;\n        margin: 10px 0;\n    }\n    \n    &:hover{\n        color: ",";\n    }\n\n    &:disabled{\n        color: ","\n    }\n"])),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.breakpoints.small}),(function(n){return n.theme.colors.buttonsColorHover}),(function(n){return n.theme.colors.buttonsColorDisabled})),vn=function(){var n=Object(T.c)(tn),e=Object(T.c)(rn),t=Object(T.c)(nn),r=Object(T.b)();return Object(an.jsx)(mn,{children:!n&&Object(an.jsxs)(an.Fragment,{children:[Object(an.jsxs)(gn,{onClick:function(){return r(Z())},children:[t?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(an.jsx)(gn,{onClick:function(){return r(Q())},disabled:e,children:"Uko\u0144cz wszystkie"})]})})},kn=I.d.section(m||(m=Object(S.a)(["\n    margin: 0 auto;\n    background-color: white;\n    box-shadow: 0 0 5px #ddd;\n    padding: 10px;\n"]))),wn=I.d.header(g||(g=Object(S.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: 1px solid rgb(235, 235, 235);\n    padding: 20px;\n"]))),yn=I.d.h2(v||(v=Object(S.a)(["\n    margin: 0;\n    font-size: 20px;\n\n    @media(max-width: ","px) {\n    text-align: center;\n    margin-left: 0;\n    }\n"])),(function(n){return n.theme.breakpoints.small})),Cn=I.d.div(k||(k=Object(S.a)(["\n    padding: 10px;\n    margin: 0 auto;\n"]))),zn=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return Object(an.jsxs)(kn,{children:[Object(an.jsxs)(wn,{children:[Object(an.jsx)(yn,{children:e}),r]}),Object(an.jsx)(Cn,{children:t})]})},Dn=function(n){var e=n.title;return Object(an.jsx)("header",{children:Object(an.jsx)("h1",{children:e})})},In=I.d.div(w||(w=Object(S.a)(["\n    margin: 0 auto;\n    padding: 30px;\n    max-width: 1080px;\n"]))),Tn=function(n){var e=n.children;return Object(an.jsx)(In,{children:e})},Sn=function(){var n=On(fn),e=function(){var n=Object(E.h)(),e=Object(E.g)();return function(t){var r=t.key,o=t.value,c=new URLSearchParams(n.search);void 0===o?c.delete(r):c.set(r,o);var a=c.toString();e.push("".concat(n.pathname,"?").concat(a))}}();return Object(an.jsx)(L,{children:Object(an.jsx)(cn,{placeholder:"Filtruj zadania",value:n||"",onChange:function(n){var t=n.target;e({key:fn,value:""!==t.value.trim()?t.value:void 0})}})})},Hn=function(){var n=Object(T.b)(),e=Object(T.c)(en);return Object(an.jsx)(gn,{disabled:e,onClick:function(){return n(V())},children:e?"\u0141adowanie...":"Pobierz przyk\u0142adowe zadania"})};var An=function(){return Object(an.jsxs)(Tn,{children:[Object(an.jsx)(Dn,{title:"Lista zada\u0144"}),Object(an.jsx)(zn,{title:"Dodaj nowe zadanie",body:Object(an.jsx)(sn,{}),extraHeaderContent:Object(an.jsx)(Hn,{})}),Object(an.jsx)(zn,{title:"Wyszukiwarka",body:Object(an.jsx)(Sn,{})}),Object(an.jsx)(zn,{title:"Lista zada\u0144",body:Object(an.jsx)(pn,{}),extraHeaderContent:Object(an.jsx)(vn,{})})]})};var En,Fn,Pn,Un=function(){var n=Object(E.i)().id,e=Object(T.c)((function(e){return function(n,e){return _(n).find((function(n){return n.id===e}))}(e,n)}));return Object(an.jsxs)(Tn,{children:[Object(an.jsx)(Dn,{title:"Szczeg\xf3\u0142y zadania"}),Object(an.jsx)(zn,{title:e?e.content:"Nie znaleziono zadania \ud83d\udc40",body:!!e&&Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)("strong",{children:"Uko\u0144czono:"})," ",e.done?"Tak":"Nie"]})})]})},Ln=function(){return Object(an.jsxs)(Tn,{children:[Object(an.jsx)(Dn,{title:"O Autorze"}),Object(an.jsx)(zn,{title:"Miko\u0142aj Paw\u0142owski",body:Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)(Cn,{children:Object(an.jsx)("strong",{children:"Autor \u0107wiczy tworzenie podstron w React-Route."})}),Object(an.jsxs)(Cn,{children:["Tutaj widnieje przyk\u0142adowy tekst, powsta\u0142y w trakcie uczestnictwa w kursie ",Object(an.jsx)("em",{children:"JavaScript od podstaw"}),"."]})]})})]})},Nn="link-active",Jn=Object(I.d)(A.b).attrs((function(){return{activeClassName:Nn}}))(En||(En=Object(S.a)(["\n  color: ",";\n  text-decoration: none;\n\n  &."," {\n    font-weight: bold;\n  }\n\n  &:hover {\n    border-bottom: 2px solid;\n  }\n"])),(function(n){return n.theme.colors.white}),Nn),Rn=I.d.ul(Fn||(Fn=Object(S.a)(["\n    background: ",";\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    justify-content: center;\n"])),(function(n){return n.theme.colors.primaryColor})),Mn=I.d.li(Pn||(Pn=Object(S.a)(["\n    margin: 20px;\n"]))),Bn=function(){return Object(an.jsx)("nav",{children:Object(an.jsxs)(Rn,{children:[Object(an.jsx)(Mn,{children:Object(an.jsx)(Jn,{to:"/zadania",children:"Zadania"})}),Object(an.jsx)(Mn,{children:Object(an.jsx)(Jn,{to:"/autor",children:"O autorze"})})]})})},qn=function(){return Object(an.jsxs)(A.a,{children:[Object(an.jsx)(Bn,{}),Object(an.jsxs)(E.d,{children:[Object(an.jsx)(E.b,{path:hn(),children:Object(an.jsx)(Un,{})}),Object(an.jsx)(E.b,{path:"/zadania",children:Object(an.jsx)(An,{})}),Object(an.jsx)(E.b,{path:"/autor",children:Object(an.jsx)(Ln,{})}),Object(an.jsx)(E.b,{children:Object(an.jsx)(E.a,{to:"/zadania"})})]})]})},Wn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,50)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),r(n),o(n),c(n),a(n)}))},Zn=t(36),Gn=t(12),Kn=t.n(Gn),Qn=t(16),Vn=t(34),Xn=function(){var n=Object(Vn.a)(Kn.a.mark((function n(){var e;return Kn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/todo-list-react/exampleTasks.json");case 2:if((e=n.sent).ok){n.next=9;break}return n.t0=Error,n.next=7,e;case 7:n.t1=n.sent.statusText,new n.t0(n.t1);case 9:return n.next=11,e.json();case 11:return n.abrupt("return",n.sent);case 12:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Yn=Kn.a.mark(ne),$n=Kn.a.mark(ee),_n=Kn.a.mark(te);function ne(){var n;return Kn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Qn.c)(1e3);case 3:return e.next=5,Object(Qn.b)(Xn);case 5:return n=e.sent,e.next=8,Object(Qn.d)(X(n));case 8:e.next=16;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(Qn.d)(Y());case 14:return e.next=16,Object(Qn.b)(alert,"Co\u015b posz\u0142o nie tak, jak powinno!\ud83d\udc40");case 16:case"end":return e.stop()}}),Yn,null,[[0,10]])}function ee(){var n;return Kn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Qn.e)(_);case 2:return n=e.sent,e.next=5,Object(Qn.b)(M,n);case 5:case"end":return e.stop()}}),$n)}function te(){return Kn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Qn.g)(V.type,ne);case 2:return n.next=4,Object(Qn.f)("*",ee);case 4:case"end":return n.stop()}}),_n)}var re=Kn.a.mark(oe);function oe(){return Kn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Qn.a)([te()]);case 2:case"end":return n.stop()}}),re)}var ce=Object(Zn.a)(),ae=Object(P.a)({reducer:{tasks:on},middleware:[ce]});ce.run(oe);var ie=ae;D.a.render(Object(an.jsx)(C.a.StrictMode,{children:Object(an.jsx)(T.a,{store:ie,children:Object(an.jsxs)(I.a,{theme:{colors:{white:"white",primaryColor:"teal",buttonsColor:"teal",buttonsColorHover:"rgb(0, 175, 175)",buttonsColorActive:"rgb(0, 200, 200)",buttonsColorDisabled:"rgb(190, 190, 190)",doneIconColor:"green",doneIconColorHover:"rgb(0, 190, 0)",doneIconColorActive:"rgb(0, 220, 0)",deleteIconColor:"red",deleteIconColorHover:"rgb(252, 30, 30)",deleteIconColorActive:"rgb(255, 60, 60)"},breakpoints:{small:767}},children:[Object(an.jsx)(H,{}),Object(an.jsx)(qn,{})]})})}),document.getElementById("root")),Wn()}},[[49,1,2]]]);
//# sourceMappingURL=main.81a29e99.chunk.js.map