(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(54),s=n.n(o),c=(n(88),n(2)),i=n.n(c),l=n(13),u=n(4),m=n(5),p=n(7),h=n(6),v=n(8),d=n(29),f=n(172),b=n(171),j=n(170),E=n(20),g=n.n(E),w=n(42),O=n.n(w),y=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=Object(l.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,e.next=4,fetch("https://"+n.props.server+"/canvass/v1/dashboard",{headers:{Authorization:"Bearer "+(n.props.jwt?n.props.jwt:"of the one ring"),"Content-Type":"application/json"}});case 4:return a=e.sent,e.next=7,a.json();case 7:t=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.warn(e.t0);case 13:n.setState({data:t,loading:!1});case 14:case"end":return e.stop()}},e,this,[[1,10]])})),n.state={loading:!0},n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.state.loading?r.a.createElement("div",null,"loading"):r.a.createElement("div",null,JSON.stringify(this.state.data))}}]),t}(a.Component),k=n(56),x=n(81),S=n.n(x),C=n(43),T=n(18);k.a.locale(S.a);var I=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=Object(l.a)(i.a.mark(function e(){var t,a,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.prev=1,e.next=4,fetch("https://"+n.props.server+"/canvass/v1/canvasser/list",{headers:{Authorization:"Bearer "+(n.props.jwt?n.props.jwt:"of the one ring"),"Content-Type":"application/json"}});case 4:return a=e.sent,e.next=7,a.json();case 7:r=e.sent,t=r.data?r.data:[],e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.warn(e.t0);case 14:n.setState({loading:!1,canvassers:t});case 15:case"end":return e.stop()}},e,this,[[1,11]])})),n.state={loading:!0,canvassers:[]},n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement(j.a,{exact:!0,path:"/canvassers/",render:function(){return e.state.loading?"loading":e.state.canvassers.map(function(e){return r.a.createElement(F,{key:e.id,canvasser:e})})}}),r.a.createElement(j.a,{path:"/canvassers/:id",render:function(e){return r.a.createElement("div",null,e.match.params.id)}})))}}]),t}(a.Component),F=function(e){var t=new k.a("en-US");return r.a.createElement("div",null,"Name: ",e.canvasser.name," (",r.a.createElement(b.a,{to:"/canvassers/"+e.canvasser.id},"view profile"),") ",e.canvasser.admin?r.a.createElement(C.a,{icon:T.d,color:"gold"}):"",r.a.createElement("br",null),"Email: ",e.canvasser.email," ",r.a.createElement("br",null),"Last Login: ",t.format(new Date(e.canvasser.last_seen-3e4))," ",r.a.createElement("br",null),r.a.createElement("hr",null))},_=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).doCreateTeam=Object(l.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(t=n.addTeamForm.getValue())){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,fetch("https://"+n.props.server+"/canvass/v1/team/create",{method:"POST",headers:{Authorization:"Bearer "+(n.props.jwt?n.props.jwt:"of the one ring"),"Content-Type":"application/json"},body:JSON.stringify({name:t.name})});case 6:a=e.sent,console.warn(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.warn(e.t0);case 13:case"end":return e.stop()}},e,this,[[3,10]])})),n.componentDidMount=Object(l.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,e.next=4,fetch("https://"+n.props.server+"/canvass/v1/team/list",{headers:{Authorization:"Bearer "+(n.props.jwt?n.props.jwt:"of the one ring"),"Content-Type":"application/json"}});case 4:return a=e.sent,e.next=7,a.json();case 7:t=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.warn(e.t0);case 13:n.setState({loading:!1,teams:t.data});case 14:case"end":return e.stop()}},e,this,[[1,10]])})),n.state={loading:!0},n.formServerItems=g.a.struct({name:g.a.String}),n.formServerOptions={fields:{server:{label:"Team Name",error:"You must enter a team name."}}},n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"onChangeTeam",value:function(e){this.setState({addTeamForm:e})}},{key:"render",value:function(){var e=this;return r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement(j.a,{exact:!0,path:"/teams/",render:function(){return r.a.createElement("div",null,e.state.loading?"loading":e.state.teams.map(function(e){return r.a.createElement(B,{key:e.name,team:e})}),r.a.createElement(b.a,{to:"/teams/add"},r.a.createElement("button",null,"Add Team")))}}),r.a.createElement(j.a,{exact:!0,path:"/teams/add",render:function(){return r.a.createElement("div",null,r.a.createElement(g.a.form.Form,{ref:function(t){return e.addTeamForm=t},type:e.formServerItems,options:e.formServerOptions,onChange:function(t){return e.onChangeTeam(t)},value:e.state.addTeamForm}),r.a.createElement("button",{onClick:function(){return e.doCreateTeam()}},"Submit"))}}),r.a.createElement(j.a,{path:"/teams/edit",render:function(){return r.a.createElement("div",null,"LIST / EDIT / etc")}})))}}]),t}(a.Component),B=function(e){return r.a.createElement("div",null,"Name: ",e.team.name," (",r.a.createElement(b.a,{to:"/teams/edit/"+e.team.name},"edit"),")",r.a.createElement("br",null),r.a.createElement("hr",null))},D=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=Object(l.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,e.next=4,fetch("https://"+n.props.server+"/canvass/v1/turf/list",{headers:{Authorization:"Bearer "+(n.props.jwt?n.props.jwt:"of the one ring"),"Content-Type":"application/json"}});case 4:return a=e.sent,e.next=7,a.json();case 7:t=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.warn(e.t0);case 13:n.setState({loading:!1,turf:t.data});case 14:case"end":return e.stop()}},e,this,[[1,10]])})),n.state={loading:!0},n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.loading?"loading":this.state.turf.map(function(e){return r.a.createElement(A,{key:e.name,turf:e})}))}}]),t}(a.Component),A=function(e){return r.a.createElement("div",null,"Name: ",e.turf.name," ",r.a.createElement("br",null),r.a.createElement("hr",null))},N=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Questions Component")}}]),t}(a.Component),U=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Forms Component")}}]),t}(a.Component),z=n(82),M=n.n(z),H=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=Object(l.a)(i.a.mark(function e(){var t,a,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://"+n.props.server+"/canvass/v1/google_maps_key",{headers:{Authorization:"Bearer "+(n.props.jwt?n.props.jwt:"of the one ring"),"Content-Type":"application/json"}});case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,t=r.google_maps_key,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.warn(e.t0);case 13:n.setState({google_maps_key:t?{key:t}:null,loading:!1});case 14:case"end":return e.stop()}},e,this,[[0,10]])})),n.state={loading:!0,google_maps_key:null},n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.state.loading?r.a.createElement("div",null,"loading"):r.a.createElement("div",{style:{height:"100vh",width:"100%"}},r.a.createElement(M.a,{bootstrapURLKeys:this.state.google_maps_key,defaultCenter:{lat:33.9208231,lng:-118.328137},defaultZoom:11},r.a.createElement(J,{lat:59.955413,lng:30.337844})))}}]),t}(a.Component),J=function(e){return r.a.createElement("div",null,"FOOBAR")},L=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Import Data")}}]),t}(a.Component),V=n(168),q=n(173),W=function(e){function t(e){var n,a;Object(u.a)(this,t),n=Object(p.a)(this,Object(h.a)(t).call(this,e));try{a=n.props.location.pathname.split("/").pop(),O()(a)}catch(r){console.warn("Unable to extract jwt from URI: "+r),a="error"}return n.state={jwt:a},sessionStorage.setItem("jwt",a),n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return"error"===this.state.jwt?r.a.createElement("div",null,"There was an error parsing the jwt"):r.a.createElement(V.a,{render:function(){return r.a.createElement(q.a,{to:"/"})}})}}]),t}(a.Component),R=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).doSave=Object(l.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(t=n.refs.mainForm.getValue())){e.next=3;break}return e.abrupt("return");case 3:if(!0===t.ack){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,n.singHello(t.server);case 7:!0!==(a=e.sent).flag?console.warn(a.error?"Error":"Connection Successful",a.msg,[{text:"OK"}],{cancelable:!1}):console.warn(a);case 9:case"end":return e.stop()}},e,this)})),n.singHello=function(){var e=Object(l.a)(i.a.mark(function e(t){var a,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return sessionStorage.setItem("server",t),e.prev=1,e.next=4,fetch("https://"+t+"/canvass/v1/hello",{method:"POST",headers:{Authorization:"Bearer "+(n.state.jwt?n.state.jwt:"of the one ring"),"Content-Type":"application/json"},body:JSON.stringify({longitude:-118,latitude:40})});case 4:a=e.sent,e.t0=a.status,e.next=200===e.t0?8:400===e.t0?9:401===e.t0?10:403===e.t0?12:13;break;case 8:return e.abrupt("break",14);case 9:return e.abrupt("return",{error:!0,msg:"The server didn't understand the request sent from this device."});case 10:return window.location.href="https://"+t+"/auth/gm?app=HelloVoter",e.abrupt("return",{error:!1,flag:!0});case 12:return e.abrupt("return",{error:!0,msg:"We're sorry, but your request to canvass with this server has been rejected."});case 13:return e.abrupt("return",{error:!0,msg:"Unknown error connecting to server."});case 14:return e.next=16,a.json();case 16:if(r=e.sent,console.warn(r),n.setState({server:t}),sessionStorage.setItem("server",t),!0===r.data.ready){e.next=24;break}return e.abrupt("return",{error:!1,msg:"The server said: "+r.msg});case 24:return console.warn({server:t,dbx:null,user:n.state.user}),e.abrupt("return",{error:!1,flag:!0});case 26:e.next=32;break;case 28:return e.prev=28,e.t1=e.catch(1),console.warn("singHello: "+e.t1),e.abrupt("return",{error:!0,msg:"Unable to make a connection to target server"});case 32:case"end":return e.stop()}},e,this,[[1,28]])}));return function(t){return e.apply(this,arguments)}}(),n.state={jwt:sessionStorage.getItem("jwt"),server:sessionStorage.getItem("server")},n.formServerItems=g.a.struct({server:g.a.String,ack:g.a.subtype(g.a.Boolean,function(e){return e})}),n.formServerOptions={fields:{server:{label:"Server Domain Name",help:"Enter the domain name of the server you wish to connect to.",error:"You must enter a domain name."},ack:{label:"Terms of Use",help:"By checking this you acknowledge that the server to which you are connecting is not affiliated with Our Voice USA and the data you send and receive is governed by that server's terms of use.",error:"You must acknowledge the terms of use."}}},n.onChange=n.onChange.bind(Object(d.a)(Object(d.a)(n))),n.doSave=n.doSave.bind(Object(d.a)(Object(d.a)(n))),n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"onChange",value:function(e){this.setState({connectForm:e})}},{key:"getName",value:function(){var e;try{e=O()(this.state.jwt).name}catch(t){console.warn(t)}return e}},{key:"_logout",value:function(){sessionStorage.removeItem("server"),sessionStorage.removeItem("jwt"),this.setState({server:null,jwt:null})}},{key:"render",value:function(){var e=this,t=this.state,n=t.server,a=t.jwt;return n?(a||window.location.reload(),r.a.createElement(f.a,null,r.a.createElement(Y,null,r.a.createElement(K,null,r.a.createElement("div",{style:{margin:10}},"Welcome, ",this.getName(),"!"),r.a.createElement(P,null,r.a.createElement(Z,{icon:T.c})," ",r.a.createElement(b.a,{to:"/"},"Dashboard")),r.a.createElement(P,null,r.a.createElement(Z,{icon:T.i})," ",r.a.createElement(b.a,{to:"/canvassers/"},"Canvassers")),r.a.createElement(P,null,r.a.createElement(Z,{icon:T.j})," ",r.a.createElement(b.a,{to:"/teams/"},"Teams")),r.a.createElement(P,null,r.a.createElement(Z,{icon:T.g})," ",r.a.createElement(b.a,{to:"/turf/"},"Turf")),r.a.createElement(P,null,r.a.createElement(Z,{icon:T.a})," ",r.a.createElement(b.a,{to:"/questions/"},"Questions")),r.a.createElement(P,null,r.a.createElement(Z,{icon:T.b})," ",r.a.createElement(b.a,{to:"/forms/"},"Forms")),r.a.createElement(P,null,r.a.createElement(Z,{icon:T.f})," ",r.a.createElement(b.a,{to:"/map/"},"Map")),r.a.createElement(P,null,r.a.createElement(Z,{icon:T.e})," ",r.a.createElement(b.a,{to:"/import/"},"Import Data")),r.a.createElement(P,null,r.a.createElement(Z,{icon:T.h})," ",r.a.createElement("button",{onClick:function(){return e._logout()}},"Logout"))),r.a.createElement(Q,null,r.a.createElement(j.a,{exact:!0,path:"/",render:function(){return r.a.createElement(y,{server:n,jwt:a})}}),r.a.createElement(j.a,{path:"/canvassers/",render:function(){return r.a.createElement(I,{server:n,jwt:a})}}),r.a.createElement(j.a,{path:"/teams/",render:function(){return r.a.createElement(_,{server:n,jwt:a})}}),r.a.createElement(j.a,{path:"/turf/",render:function(){return r.a.createElement(D,{server:n,jwt:a})}}),r.a.createElement(j.a,{path:"/questions/",render:function(){return r.a.createElement(N,{server:n,jwt:a})}}),r.a.createElement(j.a,{path:"/forms/",render:function(){return r.a.createElement(U,{server:n,jwt:a})}}),r.a.createElement(j.a,{path:"/map/",render:function(){return r.a.createElement(H,{server:n,jwt:a})}}),r.a.createElement(j.a,{path:"/import/",render:function(){return r.a.createElement(L,{server:n,jwt:a})}}),r.a.createElement(j.a,{path:"/jwt/",component:W}))))):r.a.createElement("div",{align:"center"},r.a.createElement("h3",null,"HelloVoter"),r.a.createElement(g.a.form.Form,{ref:"mainForm",type:this.formServerItems,options:this.formServerOptions,onChange:this.onChange,value:this.state.connectForm}),r.a.createElement("button",{onClick:this.doSave},"Connect to Server"))}}]),t}(a.Component),Y=function(e){return r.a.createElement("div",Object.assign({style:{display:"flex"}},e))},K=function(e){return r.a.createElement("div",Object.assign({style:{width:"22vw",height:"100vh",overlow:"auto",background:"#eee"}},e))},P=function(e){return r.a.createElement("div",Object.assign({style:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",padding:"5px 10px"}},e))},Q=function(e){return r.a.createElement("div",{style:{flex:1,height:"100vh",overflow:"auto"}},r.a.createElement("div",Object.assign({style:{padding:"20px"}},e)))},Z=function(e){return r.a.createElement(C.a,{style:{width:25},icon:e.icon})},$=R;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},83:function(e,t,n){e.exports=n(167)},88:function(e,t,n){}},[[83,2,1]]]);
//# sourceMappingURL=main.7f6caa4a.chunk.js.map