(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}},15:function(e,t,n){e.exports={container:"Container_container__3RIox"}},16:function(e,t,n){e.exports={mainContainer:"App_mainContainer__2o5r7"}},2:function(e,t,n){e.exports={form:"AddContactForm_form__eBlI5",label:"AddContactForm_label__31e87",input:"AddContactForm_input__31n-O",btn:"AddContactForm_btn__3a61C"}},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),i=n(17),s=n(5),l=n(13),u=n(8),b=n(10),d=n(14),j=n.n(d),m=n(2),f=n.n(m),h=n(0),O={name:"",number:""},p=function(e){var t=e.contacts,n=e.handleAddContact,c=Object(a.useState)(O),r=Object(s.a)(c,2),o=r[0],i=r[1],d=function(e){return i(Object(b.a)(Object(b.a)({},o),{},Object(u.a)({},e.target.name,e.target.value)))};return Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a,c=Object(l.a)(t);try{for(c.s();!(a=c.n()).done;){var r=a.value.name;if(r===o.name)return void alert("".concat(r," is already in contacts"))}}catch(u){c.e(u)}finally{c.f()}var s={id:j.a.generate(),name:o.name,number:o.number};n(s),i({name:"",number:""})},className:f.a.form,children:[Object(h.jsxs)("label",{className:f.a.label,children:["Name",Object(h.jsx)("input",{className:f.a.input,value:o.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:d})]}),Object(h.jsxs)("label",{className:f.a.label,children:["Number",Object(h.jsx)("input",{className:f.a.input,value:o.number,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:d})]}),Object(h.jsx)("button",{type:"submit",className:f.a.btn,children:"Add contact"})]})},x=n(15),_=n.n(x);var v=function(e){var t=e.children;return Object(h.jsx)("div",{className:_.a.container,children:t})},C=n(11),N=n.n(C),g=function(e){var t=e.filterText,n=e.handleFilter;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("label",{className:N.a.label,children:["Find contacts by name",Object(h.jsx)("input",{className:N.a.input,type:"text",value:t,onChange:n})]})})},A=n(6),y=n.n(A),F=function(e){var t=e.contacts,n=e.filterText,a=e.handleDelete,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(h.jsx)("ul",{className:y.a.list,children:c.map((function(e){var t=e.id,n=e.name,c=e.number;return Object(h.jsxs)("li",{className:y.a.item,children:[Object(h.jsxs)("p",{className:y.a.info,children:[n,": ",c]}),Object(h.jsx)("button",{className:y.a.btn,type:"button",onClick:function(){return a(t)},children:"Delete"})]},t)}))})},k=n(16),S=n.n(k),w="contacts",D=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(s.a)(r,2),l=o[0],u=o[1];Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem(w));e&&c(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem(w,JSON.stringify(n))}),[n]);return Object(h.jsx)(v,{children:Object(h.jsxs)("div",{className:S.a.container,children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(p,{handleAddContact:function(e){return c([].concat(Object(i.a)(n),[e]))},contacts:n}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(g,{filterText:l,handleFilter:function(e){return u(e.target.value)}}),Object(h.jsx)(F,{contacts:n,filterText:l,handleDelete:function(e){var t=n.filter((function(t){return t.id!==e}));c(t)}})]})})};n(31);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(D,{})}),document.getElementById("root"))},6:function(e,t,n){e.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK",btn:"ContactList_btn__1Xk4q"}}},[[32,1,2]]]);
//# sourceMappingURL=main.b55c13de.chunk.js.map