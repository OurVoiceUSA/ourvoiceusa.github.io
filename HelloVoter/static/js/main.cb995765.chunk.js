(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(54),s=a.n(o),c=(a(92),a(2)),i=a.n(c),l=a(13),u=a(4),m=a(5),p=a(7),h=a(6),d=a(8),v=a(29),f=a(212),b=a(211),g=a(210),E=a(20),j=a.n(E),w=a(43),O=a.n(w),y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=Object(l.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,e.next=4,fetch("https://"+a.props.server+"/canvass/v1/dashboard",{headers:{Authorization:"Bearer "+(a.props.jwt?a.props.jwt:"of the one ring"),"Content-Type":"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:t=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.warn(e.t0);case 13:a.setState({data:t,loading:!1});case 14:case"end":return e.stop()}},e,this,[[1,10]])})),a.state={loading:!0},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.state.loading?r.a.createElement("div",null,"loading"):r.a.createElement("div",null,JSON.stringify(this.state.data))}}]),t}(n.Component),k=a(56),x=a(85),S=a.n(x),C=a(83),T=a.n(C),I=a(84),F=a.n(I),_=a(37),B=a(16);k.a.locale(S.a);var D=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=Object(l.a)(i.a.mark(function e(){var t,n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.prev=1,e.next=4,fetch("https://"+a.props.server+"/canvass/v1/canvasser/list",{headers:{Authorization:"Bearer "+(a.props.jwt?a.props.jwt:"of the one ring"),"Content-Type":"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,t=r.data?r.data:[],e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.warn(e.t0);case 14:a.setState({loading:!1,canvassers:t});case 15:case"end":return e.stop()}},e,this,[[1,11]])})),a.state={loading:!0,canvassers:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement(g.a,{exact:!0,path:"/canvassers/",render:function(){return e.state.loading?"loading":e.state.canvassers.map(function(e){return r.a.createElement(A,{key:e.id,canvasser:e})})}}),r.a.createElement(g.a,{path:"/canvassers/:id",render:function(e){return r.a.createElement("div",null,e.match.params.id)}})))}}]),t}(n.Component),A=function(e){var t=new k.a("en-US");return r.a.createElement("div",{style:{display:"flex",padding:"10px"}},r.a.createElement("div",{style:{padding:"5px 10px"}},r.a.createElement(F.a,{width:50,src:e.canvasser.avatar,loader:r.a.createElement(T.a,{width:50,type:"ThreeDots"}),unloader:r.a.createElement(_.a,{style:{width:50,height:50,color:"gray"},icon:B.i})})),r.a.createElement("div",{style:{flex:1,overflow:"auto"}},"Name: ",e.canvasser.name," (",r.a.createElement(b.a,{to:"/canvassers/"+e.canvasser.id},"view profile"),") ",e.canvasser.admin?r.a.createElement(_.a,{icon:B.d,color:"gold"}):"",r.a.createElement("br",null),"Email: ",e.canvasser.email," ",r.a.createElement("br",null),"Last Login: ",t.format(new Date(e.canvasser.last_seen-3e4))))},N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).doCreateTeam=Object(l.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(t=a.addTeamForm.getValue())){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,fetch("https://"+a.props.server+"/canvass/v1/team/create",{method:"POST",headers:{Authorization:"Bearer "+(a.props.jwt?a.props.jwt:"of the one ring"),"Content-Type":"application/json"},body:JSON.stringify({name:t.name})});case 6:n=e.sent,console.warn(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.warn(e.t0);case 13:case"end":return e.stop()}},e,this,[[3,10]])})),a.componentDidMount=Object(l.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,e.next=4,fetch("https://"+a.props.server+"/canvass/v1/team/list",{headers:{Authorization:"Bearer "+(a.props.jwt?a.props.jwt:"of the one ring"),"Content-Type":"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:t=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.warn(e.t0);case 13:a.setState({loading:!1,teams:t.data});case 14:case"end":return e.stop()}},e,this,[[1,10]])})),a.state={loading:!0},a.formServerItems=j.a.struct({name:j.a.String}),a.formServerOptions={fields:{server:{label:"Team Name",error:"You must enter a team name."}}},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onChangeTeam",value:function(e){this.setState({addTeamForm:e})}},{key:"render",value:function(){var e=this;return r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement(g.a,{exact:!0,path:"/teams/",render:function(){return r.a.createElement("div",null,e.state.loading?"loading":e.state.teams.map(function(e){return r.a.createElement(U,{key:e.name,team:e})}),r.a.createElement(b.a,{to:"/teams/add"},r.a.createElement("button",null,"Add Team")))}}),r.a.createElement(g.a,{exact:!0,path:"/teams/add",render:function(){return r.a.createElement("div",null,r.a.createElement(j.a.form.Form,{ref:function(t){return e.addTeamForm=t},type:e.formServerItems,options:e.formServerOptions,onChange:function(t){return e.onChangeTeam(t)},value:e.state.addTeamForm}),r.a.createElement("button",{onClick:function(){return e.doCreateTeam()}},"Submit"))}}),r.a.createElement(g.a,{path:"/teams/edit",render:function(){return r.a.createElement("div",null,"LIST / EDIT / etc")}})))}}]),t}(n.Component),U=function(e){return r.a.createElement("div",null,"Name: ",e.team.name," (",r.a.createElement(b.a,{to:"/teams/edit/"+e.team.name},"edit"),")",r.a.createElement("br",null),r.a.createElement("hr",null))},z=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=Object(l.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,e.next=4,fetch("https://"+a.props.server+"/canvass/v1/turf/list",{headers:{Authorization:"Bearer "+(a.props.jwt?a.props.jwt:"of the one ring"),"Content-Type":"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:t=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.warn(e.t0);case 13:a.setState({loading:!1,turf:t.data});case 14:case"end":return e.stop()}},e,this,[[1,10]])})),a.state={loading:!0},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.loading?"loading":this.state.turf.map(function(e){return r.a.createElement(M,{key:e.name,turf:e})}))}}]),t}(n.Component),M=function(e){return r.a.createElement("div",null,"Name: ",e.turf.name," ",r.a.createElement("br",null),r.a.createElement("hr",null))},q=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Questions Component")}}]),t}(n.Component),H=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Forms Component")}}]),t}(n.Component),J=a(86),L=a.n(J),V=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=Object(l.a)(i.a.mark(function e(){var t,n,r,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=!1,e.prev=1,e.next=4,fetch("https://"+a.props.server+"/canvass/v1/google_maps_key",{headers:{Authorization:"Bearer "+(a.props.jwt?a.props.jwt:"of the one ring"),"Content-Type":"application/json"}});case 4:return r=e.sent,e.next=7,r.json();case 7:o=e.sent,t=o.google_maps_key,o.error&&(n=!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.warn(e.t0);case 15:a.setState({google_maps_key:t?{key:t}:null,loading:!1,error:n});case 16:case"end":return e.stop()}},e,this,[[1,12]])})),a.state={loading:!0,google_maps_key:null},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.state.loading?r.a.createElement("div",null,"loading"):this.state.error?r.a.createElement("div",null,"Awaiting assignment"):r.a.createElement("div",{style:{height:"100vh",width:"100%"}},r.a.createElement(L.a,{bootstrapURLKeys:this.state.google_maps_key,defaultCenter:{lat:33.9208231,lng:-118.328137},defaultZoom:11},r.a.createElement(W,{lat:59.955413,lng:30.337844})))}}]),t}(n.Component),W=function(e){return r.a.createElement("div",null,"FOOBAR")},R=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Import Data")}}]),t}(n.Component),Y=a(208),K=a(213),P=function(e){function t(e){var a,n;Object(u.a)(this,t),a=Object(p.a)(this,Object(h.a)(t).call(this,e));try{n=a.props.location.pathname.split("/").pop(),O()(n)}catch(r){console.warn("Unable to extract jwt from URI: "+r),n="error"}return a.state={jwt:n},a.props.refer.setState({jwt:n}),sessionStorage.setItem("jwt",n),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return"error"===this.state.jwt?r.a.createElement("div",null,"There was an error parsing the jwt"):r.a.createElement(Y.a,{render:function(){return r.a.createElement(K.a,{to:"/"})}})}}]),t}(n.Component),Q=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).doSave=Object(l.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(t=a.refs.mainForm.getValue())){e.next=3;break}return e.abrupt("return");case 3:if(!0===t.ack){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,a.singHello(t.server);case 7:!0!==(n=e.sent).flag?console.warn(n.error?"Error":"Connection Successful",n.msg,[{text:"OK"}],{cancelable:!1}):console.warn(n);case 9:case"end":return e.stop()}},e,this)})),a.singHello=function(){var e=Object(l.a)(i.a.mark(function e(t){var n,r,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return sessionStorage.setItem("server",t),e.prev=1,e.next=4,fetch("https://"+t+"/canvass/v1/hello",{method:"POST",headers:{Authorization:"Bearer "+(a.state.jwt?a.state.jwt:"of the one ring"),"Content-Type":"application/json"},body:JSON.stringify({longitude:-118,latitude:40})});case 4:if(n=e.sent,r=n.headers.get("x-sm-oauth-url")){e.next=8;break}return e.abrupt("return",{error:!0,msg:"Missing required header."});case 8:e.t0=n.status,e.next=200===e.t0?11:400===e.t0?12:401===e.t0?13:403===e.t0?15:16;break;case 11:return e.abrupt("break",17);case 12:return e.abrupt("return",{error:!0,msg:"The server didn't understand the request sent from this device."});case 13:return window.location.href=r+"/gm?app=HelloVoter",e.abrupt("return",{error:!1,flag:!0});case 15:return e.abrupt("return",{error:!0,msg:"We're sorry, but your request to canvass with this server has been rejected."});case 16:return e.abrupt("return",{error:!0,msg:"Unknown error connecting to server."});case 17:return e.next=19,n.json();case 19:if(o=e.sent,console.warn(o),a.setState({server:t}),sessionStorage.setItem("server",t),!0===o.data.ready){e.next=27;break}return e.abrupt("return",{error:!1,msg:"The server said: "+o.msg});case 27:return console.warn({server:t,dbx:null,user:a.state.user}),e.abrupt("return",{error:!1,flag:!0});case 29:e.next=35;break;case 31:return e.prev=31,e.t1=e.catch(1),console.warn("singHello: "+e.t1),e.abrupt("return",{error:!0,msg:"Unable to make a connection to target server"});case 35:case"end":return e.stop()}},e,this,[[1,31]])}));return function(t){return e.apply(this,arguments)}}(),a.state={jwt:sessionStorage.getItem("jwt"),server:sessionStorage.getItem("server")},a.formServerItems=j.a.struct({server:j.a.String,ack:j.a.subtype(j.a.Boolean,function(e){return e})}),a.formServerOptions={fields:{server:{label:"Server Domain Name",help:"Enter the domain name of the server you wish to connect to.",error:"You must enter a domain name."},ack:{label:"Terms of Use",help:"By checking this you acknowledge that the server to which you are connecting is not affiliated with Our Voice USA and the data you send and receive is governed by that server's terms of use.",error:"You must acknowledge the terms of use."}}},a.onChange=a.onChange.bind(Object(v.a)(Object(v.a)(a))),a.doSave=a.doSave.bind(Object(v.a)(Object(v.a)(a))),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onChange",value:function(e){this.setState({connectForm:e})}},{key:"getName",value:function(){var e;try{e=O()(this.state.jwt).name}catch(t){console.warn(t)}return e}},{key:"_logout",value:function(){sessionStorage.removeItem("server"),sessionStorage.removeItem("jwt"),this.setState({server:null,jwt:null})}},{key:"render",value:function(){var e=this,t=this.state,a=t.server,n=t.jwt;return a?r.a.createElement(f.a,null,r.a.createElement(Z,null,r.a.createElement($,null,r.a.createElement("div",{style:{margin:10}},"Welcome, ",this.getName(),"!",r.a.createElement("br",null),"Server: ",this.state.server),r.a.createElement(G,null,r.a.createElement(ee,{icon:B.c})," ",r.a.createElement(b.a,{to:"/"},"Dashboard")),r.a.createElement(G,null,r.a.createElement(ee,{icon:B.i})," ",r.a.createElement(b.a,{to:"/canvassers/"},"Canvassers")),r.a.createElement(G,null,r.a.createElement(ee,{icon:B.j})," ",r.a.createElement(b.a,{to:"/teams/"},"Teams")),r.a.createElement(G,null,r.a.createElement(ee,{icon:B.g})," ",r.a.createElement(b.a,{to:"/turf/"},"Turf")),r.a.createElement(G,null,r.a.createElement(ee,{icon:B.a})," ",r.a.createElement(b.a,{to:"/questions/"},"Questions")),r.a.createElement(G,null,r.a.createElement(ee,{icon:B.b})," ",r.a.createElement(b.a,{to:"/forms/"},"Forms")),r.a.createElement(G,null,r.a.createElement(ee,{icon:B.f})," ",r.a.createElement(b.a,{to:"/map/"},"Map")),r.a.createElement(G,null,r.a.createElement(ee,{icon:B.e})," ",r.a.createElement(b.a,{to:"/import/"},"Import Data")),r.a.createElement(G,null,r.a.createElement(ee,{icon:B.h})," ",r.a.createElement("button",{onClick:function(){return e._logout()}},"Logout"))),r.a.createElement(X,null,r.a.createElement(g.a,{exact:!0,path:"/",render:function(){return r.a.createElement(y,{server:a,jwt:n})}}),r.a.createElement(g.a,{path:"/canvassers/",render:function(){return r.a.createElement(D,{server:a,jwt:n})}}),r.a.createElement(g.a,{path:"/teams/",render:function(){return r.a.createElement(N,{server:a,jwt:n})}}),r.a.createElement(g.a,{path:"/turf/",render:function(){return r.a.createElement(z,{server:a,jwt:n})}}),r.a.createElement(g.a,{path:"/questions/",render:function(){return r.a.createElement(q,{server:a,jwt:n})}}),r.a.createElement(g.a,{path:"/forms/",render:function(){return r.a.createElement(H,{server:a,jwt:n})}}),r.a.createElement(g.a,{path:"/map/",render:function(){return r.a.createElement(V,{server:a,jwt:n})}}),r.a.createElement(g.a,{path:"/import/",render:function(){return r.a.createElement(R,{server:a,jwt:n})}}),r.a.createElement(g.a,{path:"/jwt/",render:function(t){return r.a.createElement(P,Object.assign({},t,{refer:e}))}})))):r.a.createElement("div",{align:"center"},r.a.createElement("h3",null,"HelloVoter"),r.a.createElement(j.a.form.Form,{ref:"mainForm",type:this.formServerItems,options:this.formServerOptions,onChange:this.onChange,value:this.state.connectForm}),r.a.createElement("button",{onClick:this.doSave},"Connect to Server"))}}]),t}(n.Component),Z=function(e){return r.a.createElement("div",Object.assign({style:{display:"flex"}},e))},$=function(e){return r.a.createElement("div",Object.assign({style:{width:"22vw",height:"100vh",overlow:"auto",background:"#eee"}},e))},G=function(e){return r.a.createElement("div",Object.assign({style:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",padding:"5px 10px"}},e))},X=function(e){return r.a.createElement("div",{style:{flex:1,height:"100vh",overflow:"auto"}},r.a.createElement("div",Object.assign({style:{padding:"20px"}},e)))},ee=function(e){return r.a.createElement(_.a,{style:{width:25},icon:e.icon})},te=Q;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},87:function(e,t,a){e.exports=a(207)},92:function(e,t,a){}},[[87,2,1]]]);
//# sourceMappingURL=main.cb995765.chunk.js.map