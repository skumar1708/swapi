(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){},50:function(e,t,a){e.exports=a(80)},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(49),c=a(23),o=a(17),i=a(25),l=a(44),u=a(21),m=function(e,t){var a={};return t.forEach(function(t){a[t]="".concat(e,"/").concat(t)}),a}("login",["LOGIN_CLICKED","POST_LOGIN"]),p=function(e){return{type:m.LOGIN_CLICKED,payload:Object(u.a)({},e)}},h=function(e){return{type:m.POST_LOGIN,payload:Object(u.a)({},e)}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.POST_LOGIN:return console.log("payload:",t),Object(u.a)({},e,{loading:!0});default:return e}},f=a(12),b=a(13),v=a(15),g=a(14),E=a(16),O=(a(33),a(45)),y=a.n(O),w=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(v.a)(this,Object(g.a)(t).call(this,e))).state={show:!0},a}return Object(E.a)(t,e),Object(b.a)(t,[{key:"show",value:function(){this.setState({show:!0})}},{key:"close",value:function(){this.props.hideInfo()}},{key:"render",value:function(){var e=this.props.planet;return r.a.createElement("div",null,r.a.createElement(y.a,{className:"modal-class",containerClassName:"test",closeOnOuterClick:!0,show:this.state.show,onClose:this.close.bind(this)},r.a.createElement("div",{className:"modal-dialog"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h4",null,e.name),r.a.createElement("button",{type:"button",className:"close",onClick:this.close.bind(this)},"\xd7")),r.a.createElement("div",{className:"modal-body"},Object.keys(e).map(function(t,a){return r.a.createElement("p",{key:a},r.a.createElement("span",{className:"planet-info-key"},t.replace(/_/g," ")),r.a.createElement("span",{className:"planet-info-value",title:e[t]},e[t]))}))))))}}]),t}(r.a.Component),N=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(v.a)(this,Object(g.a)(t).call(this,e))).state={planets:[{name:"No Data Found"}],searchParam:"",filtered:a.props.data||[{name:"No Data Found"}],currPage:1,searching:"no"},a}return Object(E.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.setState({planets:this.props.data,filtered:this.props.data||[],showInfo:!1})}},{key:"shouldComponentUpdate",value:function(){return!0}},{key:"filterList",value:function(e){var t=[this,e.target.value.toLowerCase()],a=t[0],n=t[1];a.setState({searching:"yes"}),this.props.searchAPlanet(n).then(function(e){a.setState({filtered:a.props.data,searchParam:n,searching:"no"})},function(){alert("No item found!!")})}},{key:"lessItems",value:function(e){e.currentTarget.value||this.setState({filtered:[]})}},{key:"logouot",value:function(){}},{key:"itemClicked",value:function(e){this.setState({showInfo:!0,planet:e})}},{key:"hideInfo",value:function(){this.setState({showInfo:!1})}},{key:"paginate",value:function(e){var t=this,a="next"==e?1:-1,n=parseInt(t.state.currPage,0)+a;t.setState({searching:"yes"}),this.props.searchAPlanet(this.state.searchParam+"&page="+n).then(function(){t.setState({filtered:t.props.data,currPage:n,searching:"no"})},function(){alert("No item found!!")})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},this.state.showInfo?r.a.createElement(w,{planet:this.state.planet,hideInfo:this.hideInfo.bind(this)}):"",r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 userinfo"},"Welcome: ",r.a.createElement("i",{className:"fa fa-sign-out","aria-hidden":"true",onClick:this.logouot.bind(this)}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 center"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:this.props.data&&this.props.data.length>0?"Search":"Loading...",onKeyUp:this.filterList.bind(this),onBlur:this.lessItems.bind(this)}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 center planet-list"},r.a.createElement("div",{className:"list-group searching-".concat(this.state.searching)},this.state.filtered.length>0?this.state.filtered.map(function(t,a){var n={fontSize:50+Number(t.diameter)/1e3+"px"},s=e.itemClicked.bind(e,t);return r.a.createElement("a",{href:"#",className:"list-group-item",key:a,style:n,onClick:s},t.name," ",r.a.createElement("i",{className:"fa fa-globe","aria-hidden":"true"}))}):""),r.a.createElement("ul",{className:"pagination"},r.a.createElement("li",null,r.a.createElement("a",{href:"#",onClick:this.paginate.bind(this,"prev")},"Prev")),r.a.createElement("li",null,r.a.createElement("a",{href:"#",onClick:this.paginate.bind(this,"next")},"Next"))))))}}]),t}(n.Component),j=a(48),k=(a(34),function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(v.a)(this,Object(g.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault();var t=Array.from(e.target).map(function(e){return e.value}),n=Object(j.a)(t,2),r=n[0],s=n[1];(0,a.props.dispatch)(p({username:r,password:s})),console.log("username",r)},a}return Object(E.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 login-panel"},r.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"username",placeholder:"Enter username",name:"email",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",id:"pwd",placeholder:"Enter password",name:"pwd",required:!0})),r.a.createElement("button",{type:"submit",className:"btn btn-default login-btn"},"Login"))))}}]),t}(n.Component)),C=(Object(i.b)(function(e){return{userData:{}}})(k),a(26)),I=a(7),x=Object(I.a)(),L=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(b.a)(t,[{key:"validateLogin",value:function(){return!1}},{key:"render",value:function(){return r.a.createElement(C.b,{history:x},r.a.createElement(C.a,{exact:!0,path:"/login",component:N}))}}]),t}(n.Component),S=a(18),P=a.n(S),D=a(19),_=a(47),G=a.n(_).a.create({baseURL:"https://swapi.co/api/",timeout:18e5,headers:{Accept:"application/json","Content-Type":"application/json"}}),A={get:function(e){return console.log("baseAPIResourceURL","https://swapi.co/api/"),G.get(e)}},T=P.a.mark(R),K=P.a.mark(W),U=P.a.mark(q),B=Object(I.a)();function R(e){var t,a,n,r,s,c;return P.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,t=e.payload,a=t.username,n=t.password,o.next=4,Object(D.b)(A.get,"people/?search=".concat(a));case 4:if(r=o.sent,s=r.data.results,c=s.length?s.filter(function(e){return e.birth_year==n}):[],c.length){o.next=12;break}alert("Invalid credentials"),o.next=16;break;case 12:return o.next=14,Object(D.c)(h(c));case 14:return o.next=16,Object(D.b)(B.push,"/planets");case 16:o.next=22;break;case 19:o.prev=19,o.t0=o.catch(0),console.log("Login error: ",o.t0);case 22:case"end":return o.stop()}},T,null,[[0,19]])}function W(){return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)(m.LOGIN_CLICKED,R);case 2:case"end":return e.stop()}},K)}function q(){return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.a)([W()]);case 2:case"end":return e.stop()}},U)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(79);var F=Object(s.a)(),J=Object(o.d)(d,Object(o.a)(F,l.logger));F.run(q),Object(c.render)(r.a.createElement(i.a,{store:J},r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[50,1,2]]]);
//# sourceMappingURL=main.112fab65.chunk.js.map