(this["webpackJsonpmy-library"]=this["webpackJsonpmy-library"]||[]).push([[0],{18:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX/xJz////bmWyhakr/1bigaEefZkS3kX2oeFydYj/TvrOaY0Pal2nosIr/2Lv/yKL5v5eudVKbXjjt5eGocVHgp4PIiWGoc1Tgs5f49PK0jHfdzcWwg2vr4NuaXDbNs6XCoZDk1s/ZxrzTk2nRmXa7f1qxhW7JrqC067O8AAAC6klEQVR4nO3Y7ZKaMBSAYYEGjLa1RrrWb9Rue/93WInb3ZnuBB0SexL2ff9m3TmPAQRG2dAbSQ/w8BCmH8L0Q5h+CNMP4WurzaGpYm698RKetsboMurMxEN4KrQqYk/3F662Jn6fj3BRltLD31Vv4W7/uoG1raiXbXVM+QhXL2fgdP6UX/v85WvbLKJGUw/h+HqI1uc8fxN+ujQbxdM3D+HEWOA8z4cq1Bb4nA9WeLDCOh+ucGkvM+fhChf7f0/CoQkn+v0WDkvY2J+KfMDCrXp/kA5LOEYYSQgRIpQPIUKE8iFEiFA+hAgRyocQIUL5ECJEKB9ChAjlQ4gQoXwIESKUDyFChPIhRIhQPoQIEcqHECFC+RAiRCgfQoQI5UOIEKF8CBEilA8hQoTyIUSIUD6ECBHKhxAhQvkQIkQoH0KECOVDiBChfAgRIpQPIUKE8iFEiFA+hAgRyocQIUL5ECJEKB9ChAjlQ4gQoXwIESKUDyFChPIhRIhQPoQIEcqHECFC+RAiRCgfQoQfUdgWkXAWRnh++tvPH23fY8pbeH6ui7fUNLoKT+F8WiRQf2F983/HUX9hKvkKS22iTQcQlrrZ7BaxdrTE/c5DaKpV159Jd2iFZeNYvUe4Pz1grIAt2zGNaxPuEOrDA6YK2GLftYV3CNU2/FBBm7QHqTm6lm8LtfOzkdSU7ZTO5dtCE3ykwG0vU6qxc/mmUP0KPlLg6suUZeVcvins+GwkFZ0XmiHsYeGxh+v2HFbBRwqc3Qf3Bb9T+NtehxfBZwpb5XEtPZruQzyODt370CnMjL0rddzSxpLdB/eNV7ewab8eVUZ9351ldsila7VbuLKbqIpj6KGCZk9Es3GsdguzyZW4r2I+Uhd2E5XjSLshzNbXB+jSqOU42lTvZ/y2rX55zlfx1v8thq0y3i+J/kv9hZfnL53COzcP4eU3dWl0GXvGR5hlu0lTRd7a8XNxpzDhEKYfwvRDmH4I0w9h+v0BEV07tyHJKb4AAAAASUVORK5CYII="},27:function(e,t,a){e.exports=a(49)},32:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),s=a.n(o),l=(a(32),a(1)),c=a.n(l),i=a(4),u=a(3),m=a(6),d=a(7),h=a(9),p=a(8),b=a(2);var f=function(e){var t=e.user?r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("h1",{className:"navbar-brand"},e.user.name,"'s Library"),r.a.createElement("div",null,r.a.createElement(b.b,{to:"/books"},"Search"),"\xa0\xa0 | \xa0\xa0",r.a.createElement(b.b,{to:"/library"},"Library"),"\xa0\xa0 | \xa0\xa0",r.a.createElement(b.b,{to:"/"},"About"),"\xa0\xa0 | \xa0\xa0",r.a.createElement(b.b,{to:"",onClick:e.handleLogout},"Log Out"))):r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("h1",{className:"navbar-brand"},"My Library"),r.a.createElement("div",null,r.a.createElement(b.b,{to:"/"},"About"),"\xa0\xa0 | \xa0\xa0",r.a.createElement(b.b,{to:"/login"},"Login"),"\xa0\xa0 | \xa0\xa0",r.a.createElement(b.b,{to:"/signup"},"Sign Up")));return r.a.createElement(r.a.Fragment,null,t)},v=a(14);a(39);function k(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var g={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:k,removeToken:function(){localStorage.removeItem("token")},getUserFromToken:function(){var e=k();return e?JSON.parse(atob(e.split(".")[1])).user:null}};var E={signup:function(e){return fetch("/api/users/signup",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Email already taken!")})).then((function(e){var t=e.token;return g.setToken(t)}))},getUser:function(){return g.getUserFromToken()},logout:function(){g.removeToken()},login:function(e){return fetch("/api/users/login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Bad Credentials!")})).then((function(e){var t=e.token;return g.setToken(t)}))}},y=a(12),w=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={email:"",pw:""},e.handleChange=function(t){e.setState(Object(y.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){var t=Object(i.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,E.login(e.state);case 4:e.props.handleSignupOrLogin(),e.props.history.push("/books"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),alert("Invalid Credentials!");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"LoginPage"},r.a.createElement("header",{className:"header-footer"},"Log In"),r.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",value:this.state.email,name:"email",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",value:this.state.pw,name:"pw",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12 text-center"},r.a.createElement("button",{className:"btn btn-default"},"Log In"),"\xa0\xa0\xa0",r.a.createElement(b.b,{to:"/"},"Cancel")))))}}]),a}(n.Component),O=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",password:"",passwordConf:""},e.handleChange=function(t){e.props.updateMessage(""),e.setState(Object(y.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){var t=Object(i.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,E.signup(e.state);case 4:e.props.handleSignupOrLogin(),e.props.history.push("/books"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.props.updateMessage(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"isFormInvalid",value:function(){return!(this.state.name&&this.state.email&&this.state.password===this.state.passwordConf)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"header-footer"},"Sign Up"),r.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Name",value:this.state.name,name:"name",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",value:this.state.email,name:"email",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",value:this.state.password,name:"password",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Confirm Password",value:this.state.passwordConf,name:"passwordConf",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12 text-center"},r.a.createElement("button",{className:"btn btn-default",disabled:this.isFormInvalid()},"Sign Up"),"\xa0\xa0",r.a.createElement(b.b,{to:"/"},"Cancel")))))}}]),a}(n.Component),C=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).updateMessage=function(e){n.setState({message:e})},n.state={message:""},n}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"SignupPage"},r.a.createElement(O,Object.assign({},this.props,{updateMessage:this.updateMessage})),r.a.createElement("p",null,this.state.message))}}]),a}(n.Component);var j=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About"),r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"Welcome to My Library! My Library allows you to create your own virtual library to match what you have at home. Keep track of what books you own and which of them you have read, which you need to read and what books you want to get next!")))},N=(a(40),a(18)),S=a.n(N);var B=function(e){return r.a.createElement("div",{className:"styles.container"},r.a.createElement("div",null,r.a.createElement("form",{className:"search-books-form",onSubmit:e.handleSubmit},r.a.createElement("input",{onChange:e.handleChange,value:e.searchTerm}),r.a.createElement("button",{type:"submit",className:"btn btn-secondary"},"Submit"))),r.a.createElement("div",{className:"book-search-container"},e.books?e.books.map((function(e,t){return r.a.createElement("div",{className:"book-search-card",style:{width:"18rem"},key:t},r.a.createElement(b.b,{to:{pathname:"/book-page/".concat(e.id)}},r.a.createElement("img",{className:"book-search-img rounded-right",src:e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.thumbnail:S.a,alt:e.title})))})):null))};function I(e){return fetch("/api/google/volume/"+e,{headers:{Authorization:"Bearer ".concat(g.getToken())}}).then((function(e){return e.json()}))}var L=a(16),A=a.n(L);function x(){return A()("/api/library",{headers:{Authorization:"Bearer ".concat(g.getToken())}}).then((function(e){return e.json()}))}function R(e){return A()("/api/library/"+e,{headers:{Authorization:"Bearer ".concat(g.getToken())}}).then((function(e){return e.json()}))}function D(e,t){return A()("/api/library/"+t,{method:"PUT",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(g.getToken())},body:JSON.stringify(e)}).then((function(e){return e.json()}))}function U(e,t){var a={title:e[0].volumeInfo.title,authors:e[0].volumeInfo.authors,descriptions:e[0].volumeInfo.descriptions,cover:e[0].volumeInfo.imageLinks.small?e[0].volumeInfo.imageLinks.small:e[0].volumeInfo.imageLinks.thumbnail,bookId:e[0].id,owned:t.owned,read:t.read};return A()("/api/library",{method:"POST",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(g.getToken())},body:JSON.stringify(a)}).then((function(e){return e.json()}))}function T(e){return A()("/api/library/"+e.bookId,{method:"DELETE",headers:{Authorization:"Bearer ".concat(g.getToken())}}).then((function(e){return e.json()}))}a(41),a(42);var Q=function(e){var t=e.ownedReadBooks?e.ownedReadBooks.map((function(t,a){return r.a.createElement("div",{key:a,onClick:e.handleClick,className:"owned-read-book",id:t.bookId},t.title)})):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"owned-read-container"},t))};a(43);var F=function(e){var t=e.ownedUnreadBooks?e.ownedUnreadBooks.map((function(t,a){return r.a.createElement("div",{key:a,onClick:e.handleClick,className:"owned-unread-book",id:t.bookId},t.title)})):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"owned-unread-container"},t))};a(44);var K=function(e){var t=e.wishList?e.wishList.map((function(t,a){return r.a.createElement("div",{key:a,onClick:e.handleClick,className:"owned-read-book",id:t.bookId},t.title)})):"Empty Shelf";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wish-list-container"},t))};a(45);var P=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("label",null,"Currently Reading?"),r.a.createElement("input",{onChange:e.handleCurrentlyReading,id:e.bk.bookId,checked:e.bk.currentlyReading,value:"true",type:"radio"}),r.a.createElement("label",null,"Yes"),r.a.createElement("input",{onChange:e.handleCurrentlyReading,id:e.bk.bookId,checked:!1===e.bk.currentlyReading,value:"false",type:"radio"}),r.a.createElement("label",null,"No")))};var z=function(e){var t=e.libraryBookInfo.length?e.libraryBookInfo.map((function(t,a){return r.a.createElement("div",{key:a},r.a.createElement("h1",null,"Book Info"),r.a.createElement("hr",null),r.a.createElement("h3",null,t.title),r.a.createElement(b.b,{to:{pathname:"/book-page/".concat(t.bookId)}},r.a.createElement("img",{src:t.cover,alt:t.title})),r.a.createElement("p",null,t.authors),r.a.createElement(P,{handleCurrentlyReading:e.handleCurrentlyReading,bk:t}))})):r.a.createElement("div",null,r.a.createElement("h1",null,"Book Info"),r.a.createElement("hr",null));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,t))};a(46);var M=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",null,"Currently Reading"),r.a.createElement("div",{className:"curr-read-container"},e.library.map((function(e,t){return e.currentlyReading?r.a.createElement(b.b,{key:t,to:{pathname:"/book-page/".concat(e.bookId)}},r.a.createElement("img",{src:e.cover,alt:e.title})):null})))))},Y=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={libraryBookInfo:[]},e.handleClick=function(){var t=Object(i.a)(c.a.mark((function t(a){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R(a.target.id);case 2:n=t.sent,e.setState(Object(u.a)({},e.state,{libraryBookInfo:n}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleCurrentlyReading=function(){var t=Object(i.a)(c.a.mark((function t(a){var n,r,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={currentlyReading:a.target.value},t.next=3,D(n,a.target.id);case 3:return r=t.sent,t.next=6,x();case 6:return o=t.sent,t.next=9,e.props.seperateBooks(o);case 9:return t.next=11,e.setState(Object(u.a)({},e.state,{libraryBookInfo:r}));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,this.props.seperateBooks(t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"library-container"},r.a.createElement("div",{className:"library-curr-read"},r.a.createElement("div",{className:"library-current"},r.a.createElement(M,{library:this.props.library}))),r.a.createElement("div",{className:"library-shelves"},r.a.createElement("h1",null,"Library"),r.a.createElement(Q,{handleClick:this.handleClick,ownedReadBooks:this.props.ownedReadBooks}),r.a.createElement(F,{handleClick:this.handleClick,ownedUnreadBooks:this.props.ownedUnreadBooks}),r.a.createElement(K,{handleClick:this.handleClick,wishList:this.props.wishList})),r.a.createElement("div",{className:"library-info"},r.a.createElement("div",{className:"library-book-info"},r.a.createElement(z,{libraryBookInfo:this.state.libraryBookInfo,handleCurrentlyReading:this.handleCurrentlyReading})))))}}]),a}(n.Component),X=(a(47),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={formData:{owned:!1,read:!1}},e.formRef=r.a.createRef(),e.handleAddLibrary=function(){var t=Object(i.a)(c.a.mark((function t(a,n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U(a,n);case 2:return t.next=4,e.props.refreshLibrary();case 4:return t.next=6,e.props.updateOwnedBook(a[0].id);case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=Object(u.a)({},e.state.formData,Object(y.a)({},t.target.name,t.target.value));e.setState({formData:a})},e.handleSubmit=function(t){t.preventDefault(),e.handleAddLibrary(e.props.book,e.state.formData)},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"add-library-form-container"},r.a.createElement("form",{ref:this.formRef,onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",null,"Do you own?",r.a.createElement("select",{className:"btn btn-secondary",name:"owned",value:this.state.formData.owned,onChange:this.handleChange},r.a.createElement("option",{value:"true"},"Yes"),r.a.createElement("option",{value:"false"},"No"))),r.a.createElement("label",null,"Have you read?",r.a.createElement("select",{className:"btn btn-secondary",name:"read",value:this.state.formData.read,onChange:this.handleChange},r.a.createElement("option",{value:"true"},"Yes"),r.a.createElement("option",{value:"false"},"No")))),r.a.createElement("button",{className:"btn btn-secondary",type:"submit"},this.state.formData.owned?"Add to Library":"Add to Wish List")))}}]),a}(n.Component)),H=(a(48),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={formData:{owned:!1,read:!1}},e.formRef=r.a.createRef(),e.handleUpdateBook=function(){var t=Object(i.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(a,e.props.bookOwned[0].bookId);case 2:return t.next=4,e.props.refreshLibrary();case 4:return t.next=6,e.props.updateOwnedBook(e.props.bookOwned[0].bookId);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=Object(u.a)({},e.state.formData,Object(y.a)({},t.target.name,t.target.value));e.setState({formData:a})},e.handleSubmit=function(t){t.preventDefault(),e.handleUpdateBook(e.state.formData)},e.handleDeleteSubmit=function(){var t=Object(i.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(e.props.bookOwned[0]);case 2:return e.setState(Object(u.a)({},e.state,{formData:{owned:!1,read:!1}})),t.next=5,e.props.refreshLibrary();case 5:return t.next=7,e.props.deleteOwnedBook();case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.bookOwned[0]&&this.setState(Object(u.a)({},this.state,{formData:{owned:this.props.bookOwned[0].owned,read:this.props.bookOwned[0].read}}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"add-library-form-container"},r.a.createElement("form",{ref:this.formRef,onSubmit:this.handleSubmit},r.a.createElement("div",null,this.props.bookOwned[0]&&this.props.bookOwned[0].owned?null:r.a.createElement("label",null,"Do you now own?",r.a.createElement("select",{className:"btn btn-secondary",name:"owned",value:this.state.formData.owned,onChange:this.handleChange},r.a.createElement("option",{value:"true"},"Yes"),r.a.createElement("option",{value:"false"},"No"))),this.props.bookOwned[0]&&this.props.bookOwned[0].read?null:r.a.createElement("label",null,"Add to read?",r.a.createElement("select",{className:"btn btn-secondary",name:"read",value:this.state.formData.read,onChange:this.handleChange},r.a.createElement("option",{value:"true"},"Yes"),r.a.createElement("option",{value:"false"},"No")))),this.props.bookOwned[0]&&this.props.bookOwned[0].owned&&this.props.bookOwned[0].read?null:r.a.createElement("button",{className:"btn btn-secondary",type:"submit"},this.state.formData.owned?"Update Library":"Add To Library")),r.a.createElement("button",{onClick:this.handleDeleteSubmit,className:"btn btn-secondary",type:"submit"},"Delete from Library"),r.a.createElement(b.b,{to:"/library",className:"btn btn-secondary"},"Your Library")))}}]),a}(n.Component)),W=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={book:[],bookOwned:[]},e.getBook=function(){var t=Object(i.a)(c.a.mark((function t(a){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(a);case 2:return n=t.sent,t.next=5,e.props.library.map((function(t){if(t.bookId===a)return e.setState(Object(u.a)({},e.state,{bookOwned:[t]}))}));case 5:e.setState(Object(u.a)({},e.state,{book:[n]}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.updateOwnedBook=function(){var t=Object(i.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.library.map((function(t){if(t.bookId===a)return e.setState(Object(u.a)({},e.state,{bookOwned:[t]}));e.setState(Object(u.a)({},e.state,{bookOwned:[]}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.deleteOwnedBook=function(){e.setState(Object(u.a)({},e.state,{bookOwned:[]}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.library.length||this.props.refreshLibrary(),this.getBook(this.props.match.params.id);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"book-page-container"},r.a.createElement("div",null,this.state.book.map((function(t){return r.a.createElement("div",{className:"book-page-info",key:t.id},r.a.createElement("div",{className:"book-page-book"},r.a.createElement("h1",null,t.volumeInfo.title),r.a.createElement("hr",null),r.a.createElement("h4",null,t.volumeInfo.authors),r.a.createElement("br",null),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:"".concat(t.volumeInfo.description)?"".concat(t.volumeInfo.description):"No Details Known"}})),r.a.createElement("div",{className:"book-page-image"},r.a.createElement("img",{src:t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.small?t.volumeInfo.imageLinks.small:t.volumeInfo.imageLinks.thumbnail:S.a,alt:t.volumeInfo.title}),e.state.bookOwned.length?r.a.createElement(H,Object.assign({},e.props,{book:e.state.book,bookOwned:e.state.bookOwned,refreshLibrary:e.props.refreshLibrary,updateOwnedBook:e.updateOwnedBook,deleteOwnedBook:e.deleteOwnedBook})):r.a.createElement(X,Object.assign({},e.props,{book:e.state.book,refreshLibrary:e.props.refreshLibrary,updateOwnedBook:e.updateOwnedBook}))))})))))}}]),a}(n.Component),J=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).seperateBooks=function(t){var a=[],n=[],r=[];t.map((function(e){return e.owned&&e.read?a.push(e):e.owned&&!e.read?n.push(e):r.push(e)})),e.setState(Object(u.a)({},e.state,{library:t,ownedReadBooks:a,ownedUnreadBooks:n,wishList:r}))},e.refreshLibrary=Object(i.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:a=t.sent,e.setState(Object(u.a)({},e.state,{library:a}));case 4:case"end":return t.stop()}}),t)}))),e.handleLogout=function(){E.logout(),e.setState({user:null})},e.handleSignupOrLogin=Object(i.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:a=t.sent,e.setState(Object(u.a)({},e.state,{library:a,user:E.getUser()}));case 4:case"end":return t.stop()}}),t)}))),e.handleChange=function(t){e.setState(Object(u.a)({},e.state,{searchTerm:t.target.value}))},e.handleSubmit=function(t){t.preventDefault(),e.getBooks(e.state.searchTerm)},e.clearBookSearch=function(){e.setState(Object(u.a)({},e.state,{books:[]}))},e.state={user:E.getUser(),books:[],searchTerm:"",library:[],ownedReadBooks:[],ownedUnreadBooks:[],wishList:[]},e}return Object(d.a)(a,[{key:"getBooks",value:function(){var e=Object(i.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,fetch("/api/google/"+t,{headers:{Authorization:"Bearer ".concat(g.getToken())}}).then((function(e){return e.json()}));case 3:a=e.sent,this.setState(Object(u.a)({},this.state,{books:a.items,searchTerm:""}));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(f,{user:this.state.user,handleLogout:this.handleLogout}),r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/",render:function(){return r.a.createElement(j,null)}}),r.a.createElement(v.a,{path:"/library",render:function(t){return r.a.createElement(Y,Object.assign({},t,{library:e.state.library,user:e.state.user,seperateBooks:e.seperateBooks,ownedReadBooks:e.state.ownedReadBooks,ownedUnreadBooks:e.state.ownedUnreadBooks,wishList:e.state.wishList}))}}),r.a.createElement(v.a,{path:"/book-page/:id",render:function(t){return r.a.createElement(W,Object.assign({},t,{library:e.state.library,refreshLibrary:e.refreshLibrary}))}}),r.a.createElement(v.a,{path:"/books",render:function(){return r.a.createElement(B,{handleChange:e.handleChange,handleSubmit:e.handleSubmit,getBooks:e.getBooks,searchTerm:e.state.searchTerm,books:e.state.books,clearBookSearch:e.clearBookSearch})}}),r.a.createElement(v.a,{exact:!0,path:"/signup",render:function(t){var a=t.history;return r.a.createElement(C,{history:a,handleSignupOrLogin:e.handleSignupOrLogin})}}),r.a.createElement(v.a,{exact:!0,path:"/login",render:function(t){var a=t.history;return r.a.createElement(w,{history:a,handleSignupOrLogin:e.handleSignupOrLogin})}})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b.a,null,r.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.2a7ae55b.chunk.js.map