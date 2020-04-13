(this["webpackJsonpmy-library"]=this["webpackJsonpmy-library"]||[]).push([[0],{25:function(e,t,a){e.exports=a(40)},30:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),c=a.n(o),s=(a(30),a(3)),l=a.n(s),i=a(10),u=a(11),m=a(5),h=a(6),d=a(8),p=a(7),f=a(2);var v=function(e){var t=e.user?r.a.createElement("div",null,r.a.createElement(f.b,{to:"/books"},"Search"),"\xa0\xa0 | \xa0\xa0",r.a.createElement(f.b,{to:"/user/library"},"Library"),"\xa0\xa0 | \xa0\xa0",r.a.createElement(f.b,{to:"/"},"About"),"\xa0\xa0 | \xa0\xa0",r.a.createElement(f.b,{to:"",onClick:e.handleLogout},"Log Out")):r.a.createElement("div",null,r.a.createElement(f.b,{to:"/"},"About"),"\xa0\xa0 | \xa0\xa0",r.a.createElement(f.b,{to:"/login"},"Login"),"\xa0\xa0 | \xa0\xa0",r.a.createElement(f.b,{to:"/signup"},"Sign Up"));return r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("h1",{className:"navbar-brand"},"My Library"),t)},b=a(14);a(37);function g(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var E={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:g,removeToken:function(){localStorage.removeItem("token")},getUserFromToken:function(){var e=g();return e?JSON.parse(atob(e.split(".")[1])).user:null}};var y={signup:function(e){return fetch("/api/users/signup",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Email already taken!")})).then((function(e){var t=e.token;return E.setToken(t)}))},getUser:function(){return E.getUserFromToken()},logout:function(){E.removeToken()},login:function(e){return fetch("/api/users/login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Bad Credentials!")})).then((function(e){var t=e.token;return E.setToken(t)}))}},k=a(13),w=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={email:"",pw:""},e.handleChange=function(t){e.setState(Object(k.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){var t=Object(i.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,y.login(e.state);case 4:e.props.handleSignupOrLogin(),e.props.history.push("/books"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),alert("Invalid Credentials!");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"LoginPage"},r.a.createElement("header",{className:"header-footer"},"Log In"),r.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",value:this.state.email,name:"email",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",value:this.state.pw,name:"pw",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12 text-center"},r.a.createElement("button",{className:"btn btn-default"},"Log In"),"\xa0\xa0\xa0",r.a.createElement(f.b,{to:"/"},"Cancel")))))}}]),a}(n.Component),S=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",password:"",passwordConf:""},e.handleChange=function(t){e.props.updateMessage(""),e.setState(Object(k.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){var t=Object(i.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,y.signup(e.state);case 4:e.props.handleSignupOrLogin(),e.props.history.push("/books"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.props.updateMessage(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(h.a)(a,[{key:"isFormInvalid",value:function(){return!(this.state.name&&this.state.email&&this.state.password===this.state.passwordConf)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"header-footer"},"Sign Up"),r.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Name",value:this.state.name,name:"name",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",value:this.state.email,name:"email",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",value:this.state.password,name:"password",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Confirm Password",value:this.state.passwordConf,name:"passwordConf",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12 text-center"},r.a.createElement("button",{className:"btn btn-default",disabled:this.isFormInvalid()},"Sign Up"),"\xa0\xa0",r.a.createElement(f.b,{to:"/"},"Cancel")))))}}]),a}(n.Component),O=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).updateMessage=function(e){n.setState({message:e})},n.state={message:""},n}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"SignupPage"},r.a.createElement(S,Object.assign({},this.props,{updateMessage:this.updateMessage})),r.a.createElement("p",null,this.state.message))}}]),a}(n.Component);var N=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About"),r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"Welcome to My Library! My Library allows you to create your own virtual library to match what you have at home. Keep track of what books you own and which of them you have read, which you need to read and what books you want to get next!")))};a(38);var j=function(e){return Object(n.useEffect)((function(){return function(){e.clearBookSearch()}}),[]),r.a.createElement("div",{className:"styles.container"},r.a.createElement("div",null,r.a.createElement("form",{className:"search-books-form",onSubmit:e.handleSubmit},r.a.createElement("input",{onChange:e.handleChange,value:e.searchTerm}),r.a.createElement("button",{type:"submit",className:"btn btn-secondary"},"Submit"))),r.a.createElement("div",{className:"book-search-container"},e.books.map((function(e,t){return r.a.createElement("div",{className:"book-search-card",style:{width:"18rem"},key:t},r.a.createElement(f.b,{to:{pathname:"/book-page/".concat(e.id)}},r.a.createElement("img",{className:"book-search-img rounded-right",src:e.volumeInfo.imageLinks.thumbnail,alt:e.title})))}))))};function C(e){return fetch("https://www.googleapis.com/books/v1/volumes?q="+e+"&key=AIzaSyDUSPfNfVXsyNu8EBMElBIm4XyZtx8LGbY&orderBy=relevance&startIndex=0&maxResults=40").then((function(e){return e.json()}))}function x(e){return fetch("https://www.googleapis.com/books/v1/volumes/"+e+"?key=AIzaSyDUSPfNfVXsyNu8EBMElBIm4XyZtx8LGbY").then((function(e){return e.json()}))}function L(e,t){var a={title:e[0].volumeInfo.title,authors:e[0].volumeInfo.authors,descriptions:e[0].volumeInfo.descriptions,cover:e[0].volumeInfo.imageLinks.medium,owned:t.owned,read:t.read};return fetch("/api/library",{method:"POST",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(E.getToken())},body:JSON.stringify(a)}).then((function(e){return e.json()}))}a(39);var I=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={library:[]},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/library",{headers:{Authorization:"Bearer ".concat(E.getToken())}}).then((function(e){return e.json()}));case 2:t=e.sent,console.log(t),this.setState(Object(u.a)({},this.state,{library:t}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"library-container"},this.state.library.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("div",null,e.title),r.a.createElement("img",{src:e.cover,alt:e.title}))})))}}]),a}(n.Component),T=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={book:[],invalidForm:!0,formData:{owned:!1,read:!1}},e.formRef=r.a.createRef(),e.getBook=function(){var t=Object(i.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(a);case 2:n=t.sent,console.log(n.volumeInfo.title),e.setState(Object(u.a)({},e.state,{book:[n]}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleAddLibrary=function(){var e=Object(i.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t,a);case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),e.handleChange=function(t){var a=Object(u.a)({},e.state.formData,Object(k.a)({},t.target.name,t.target.value));e.setState({formData:a,invalidForm:!e.formRef.current.checkValidity()})},e.handleSubmit=function(t){t.preventDefault(),e.handleAddLibrary(e.state.book,e.state.formData)},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.getBook(this.props.match.params.id)}},{key:"componentWillUnmount",value:function(){this.setState(Object(u.a)({},this.state,{book:[]}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,this.state.book.map((function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("div",null,t.volumeInfo.title),r.a.createElement("div",null,t.volumeInfo.authors),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:"".concat(t.volumeInfo.description)}}),r.a.createElement("form",{ref:e.formRef,onSubmit:e.handleSubmit},r.a.createElement("label",null,"Do you own?",r.a.createElement("select",{name:"owned",value:e.state.formData.owned,onChange:e.handleChange},r.a.createElement("option",{value:"true"},"Yes"),r.a.createElement("option",{value:"false"},"No"))),r.a.createElement("label",null,"Have you read?",r.a.createElement("select",{name:"read",value:e.state.formData.read,onChange:e.handleChange},r.a.createElement("option",{value:"true"},"Yes"),r.a.createElement("option",{value:"false"},"No"))),r.a.createElement("button",{type:"submit",disabled:e.state.invalidForm},"Add to Library")))}))))}}]),a}(n.Component),B=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).handleLogout=function(){console.log("logout"),y.logout(),e.setState({user:null})},e.handleSignupOrLogin=function(){e.setState({user:y.getUser()})},e.handleChange=function(t){e.setState(Object(u.a)({},e.state,{searchTerm:t.target.value}))},e.handleSubmit=function(t){t.preventDefault(),e.getBooks(e.state.searchTerm)},e.clearBookSearch=function(){e.setState(Object(u.a)({},e.state,{books:[]}))},e.state={user:y.getUser(),books:[],searchTerm:""},e}return Object(h.a)(a,[{key:"getBooks",value:function(){var e=Object(i.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,C(t);case 3:a=e.sent,this.setState(Object(u.a)({},this.state,{books:a.items,searchTerm:""}));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(v,{user:this.state.user,handleLogout:this.handleLogout}),r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",render:function(){return r.a.createElement(N,null)}}),r.a.createElement(b.a,{path:"/user/library",render:function(e){return r.a.createElement(I,e)}}),r.a.createElement(b.a,{path:"/book-page/:id",render:function(e){return r.a.createElement(T,e)}}),r.a.createElement(b.a,{path:"/books",render:function(){return r.a.createElement(j,{handleChange:e.handleChange,handleSubmit:e.handleSubmit,getBooks:e.getBooks,searchTerm:e.state.searchTerm,books:e.state.books,clearBookSearch:e.clearBookSearch})}}),r.a.createElement(b.a,{exact:!0,path:"/signup",render:function(t){var a=t.history;return r.a.createElement(O,{history:a,handleSignupOrLogin:e.handleSignupOrLogin})}}),r.a.createElement(b.a,{exact:!0,path:"/login",render:function(t){var a=t.history;return r.a.createElement(w,{history:a,handleSignupOrLogin:e.handleSignupOrLogin})}})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,null,r.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.9c14d9aa.chunk.js.map