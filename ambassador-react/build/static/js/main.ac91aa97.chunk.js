(this["webpackJsonphello-voter"]=this["webpackJsonphello-voter"]||[]).push([[0],{48:function(e,t,n){e.exports=n(68)},53:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"SERVER_URL",(function(){return _})),n.d(a,"getToken",(function(){return k})),n.d(a,"logIn",(function(){return R})),n.d(a,"fetchTriplers",(function(){return M})),n.d(a,"claimTriplers",(function(){return H}));var r=n(0),c=n.n(r),o=n(29),l=n.n(o),i=(n(53),n(9)),u=n(28),s=n(12),m=n(40),d=n.n(m),p=function(e){return Object.assign(e,{signupCompleted:!0})},f=function(e){return Object.assign(e,{approved:!0})},h=function(e){var t=Object(r.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(null),l=Object(s.a)(o,2),i=l[0],u=l[1],m=Object(r.useState)(!0),h=Object(s.a)(m,2),E=h[0],b=h[1];return Object(r.useEffect)((function(){!function(){if(e&&!a){var t=function(e){return Object.assign(e,{type:"user",approved:!1,signupCompleted:!1})}(d()(e));return t&&u(t),c(Boolean(t)),!0}b(!1)}()}),[e,c,a]),{authenticated:a,user:i,completeSignup:p,approveUser:f,loading:E}},E=n(10),b=n.n(E),v=n(15),g=n(35),T=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_ORGID:"VT6WX8A",REACT_APP_AUDIANCE:"blockpower.us",REACT_APP_BASEURI:"/voterambassador/staging",REACT_APP_APPPATH:"voterambassador/staging",REACT_APP_API_DOMAIN:"gotv-vt.ourvoiceusa.org",REACT_APP_API_SSL:"true",REACT_APP_OAUTH_HEADER:"x-sm-oauth-url",REACT_APP_TOKEN_KEY:"eyJhbGciOiJSUzI1NiJ9.eyJpZCI6ImZhY2Vib29rOjEwMjIxNjI1MTc2MTE0MDc0IiwibmFtZSI6IlRvbWHFviBLb3JlbmlrYSIsImVtYWlsIjoibGl0ZW51bGxAZ21haWwuY29tIiwiYXZhdGFyIjoiaHR0cHM6Ly9wbGF0Zm9ybS1sb29rYXNpZGUuZmJzYnguY29tL3BsYXRmb3JtL3Byb2ZpbGVwaWMvP2FzaWQ9MTAyMjE2MjUxNzYxMTQwNzQmaGVpZ2h0PTUwJndpZHRoPTUwJmV4dD0xNTk2MDEyNzE2Jmhhc2g9QWVRYXJXN1RrNDR3SUNpQyIsImlzcyI6Im91cnZvaWNldXNhLm9yZyIsImlhdCI6MTU5MzQyMDcxNiwiZXhwIjoxNTk0MzI3OTE2LCJkaXNjbGFpbWVyIjoiQnkgdXNpbmcgdGhpcyB0b2tlbiBhbmQgYWNjZXNzaW5nIHRoZXNlIHNlcnZpY2VzLCB5b3UgYWdyZWUgdG8gdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zIGhlcmU6IGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9PdXJWb2ljZVVTQS9IZWxsb1ZvdGVyL21hc3Rlci9kb2NzL1Rlcm1zLW9mLVNlcnZpY2UubWQiLCJzdWIiOiJmYWNlYm9vazoxMDIyMTYyNTE3NjExNDA3NCIsImF1ZCI6ImJsb2NrcG93ZXIudXMifQ.OGHmFS63fX8IuiJj6u0mNNtFxZc3U_rYcmcN0AAhAKYZZjrQ0fjCSkk1_CQiIRqpj3gDNShmPUWheUOnXkt6EOa_1qAfv7FG_fQNqXZ6hiAdqzsiQWHSXZI2i-6lI11XrDnuR7U2xvRD3VR-1WGXFfTBLfdAMn387zybcabt2O5FzVzfocYpWnCPT7iNfBteKqQhu5KUM_7vHL583IlSumKiwBrrHl_IWY8D0l3NdovDFskpRc9e7guW3XSJdfW0dC_JvMKL1JxRzRvX3a_HHM8njsiHFETGY7MeNsg_22HMhHPVk3IkcnGn-xg_cSlUax8zfqYhK8Pj0djiyXauofYAV9QAnEDRj4MKI1IFOHtfnRKnvjBfrtdkX0HrwG08S60QMp0egp-S7tq8BiV-7oaDoW21smwGWFeqrddDVNuygDtqsmiKHuVMJvfEsvgxQlXD949iuXmBWeNTohywQrMz_MnmWZhTwkv9uVq4q5vo9L54-UYMiwSq4uf1fUIPNUk6C6Mp49qnb1NGNZ4Z_GR00-kRDk1YtHuomlBVnIRhkTi4eppR9lar8NaLV-A5IJl3tlCU67fzz9Y7CS1Sdhzc2nvYEwzj6_hf9l_6o3TlI5y0saGzJPnUqzDKEkx6O1p3OOMMxTLH_7dIq7crQ1WhGHEoaI1Mh711gkigspQ",REACT_APP_REDIRECT_URL:"https://apps.ourvoiceusa.org/ambassador-react",REACT_APP_DEVELOPMENT:"true",REACT_APP_API_URL:"https://hellovoter.api.stage.colab.coop"}),O=T.REACT_APP_OAUTH_HEADER,j=T.REACT_APP_TOKEN_KEY,w=T.REACT_APP_AUDIANCE,x=T.REACT_APP_REDIRECT_URL,y=T.REACT_APP_DEVELOPMENT,I=T.REACT_APP_API_URL,_="https://".concat("gotv-vt.ourvoiceusa.org","/HelloVoterHQ/").concat("VT6WX8A","/api/v1"),A="".concat(_,"/hello"),P="".concat(I,"/api/v1/va/triplers"),C="".concat(I,"/api/v1/va/ambassadors/current/triplers"),N=function(e){console.warn(e)},k=function(){return localStorage.getItem(j)},S=function(e){var t=k();return Object(g.a)(Object(g.a)({},e||null),{},{Authorization:"Bearer ".concat(t?t.replace(/"/gi,""):"of the one ring"),"Content-Type":"application/json"})},R=function(){var e=Object(v.a)(b.a.mark((function e(t){var n,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(A,{method:"POST",headers:S()});case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,r="".concat(n.headers.get(O),"/").concat(t,"/?aud=").concat(w,"&app=").concat(x,"&local=").concat(y),e.abrupt("return",{data:a,smOauthUrl:r});case 11:return e.prev=11,e.t0=e.catch(0),N(e.t0),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(v.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(P,{method:"GET",headers:S()});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",{data:n});case 10:return e.prev=10,e.t0=e.catch(0),N(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(v.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(C,{method:"PUT",headers:S(),body:JSON.stringify({triplers:t})});case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",{data:a});case 10:return e.prev=10,e.t0=e.catch(0),N(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),U=c.a.createContext({}),G=function(e){var t=e.children,n=function(e,t){var n=Object(r.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),a=Object(s.a)(n,2),c=a[0],o=a[1];return[c,function(t){try{var n=t instanceof Function?t(c):t;o(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]}("token",null),o=Object(s.a)(n,2),l=o[0],i=o[1],u=h(l),m=u.user,d=u.authenticated,p=u.completeSignup,f=u.approveUser,E=u.loading;return c.a.createElement(U.Provider,{value:{user:m,authenticated:d,setToken:i,api:a,completeSignup:p,approveUser:f,loading:E}},t)},W=n(6),z=n(85),L=n(86),Y=n(87),Z=n(7),D=["0px","2px","4px","8px","12px","16px","24px","32px","48px","64px","96px"],V={10:"#f3f3f3",20:"#dcdcdc",30:"#bebebe",40:"#a4a4a4",50:"#8c8c8c",60:"#6f6f6f",70:"#565656",80:"#3d3d3d",90:"#282828",100:"#171717"},B="#ffffff",F=n(83),X=n(84),J=n(79),Q=n(80),K=n(101),q=n(81),$=n(82),ee=function(){return c.a.createElement(J.a,{render:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(Q.a,{"aria-label":"IBM Platform Name"},c.a.createElement(K.a,{href:"#",prefix:"HELLO VOTER"}),c.a.createElement(q.a,null,c.a.createElement($.a,{"aria-label":"Help",onClick:function(){}},c.a.createElement(F.a,null)),c.a.createElement($.a,{"aria-label":"Profile",onClick:function(){}},c.a.createElement(X.a,null)))))}})},te=n(100),ne=n(99);function ae(){var e=Object(W.a)(["\n  width: 100%;\n  justify-content: center;\n  height: ",";\n"]);return ae=function(){return e},e}function re(){var e=Object(W.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 100%;\n  padding-right: ",";\n  margin-top: ",";\n"]);return re=function(){return e},e}var ce=Object(Z.a)(te.a)(re(),D[4],D[5]),oe=Object(Z.a)(ne.a)(ae(),D[5]),le=function(e){var t=e.href,n=e.children,a=e.className,o=e.small,l=e.kind,u=e.onClick,m=Object(r.useState)(!1),d=Object(s.a)(m,2),p=d[0],f=d[1],h=Object(r.useState)(!1),E=Object(s.a)(h,2),g=E[0],T=E[1],O=Object(r.useState)("off"),j=Object(s.a)(O,2),w=j[0],x=j[1],y=Object(i.g)(),I=function(){var e=Object(v.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(!0),x("assertive"),setTimeout((function(){f(!1),T(!0),setTimeout((function(){T(!1),x("off")}),1500)}),2e3),y.push(t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(ce,{small:o,kind:p||g?"ghost":l,className:a,onClick:function(){u&&u(),I(t)}},p||g?c.a.createElement(oe,{description:"",status:g?"finished":"active","aria-live":w}):n)};function ie(){var e=Object(W.a)(["\n  width: 100%;\n  max-width: 100%;\n  margin-top: 0;\n  margin-bottom: ",";\n"]);return ie=function(){return e},e}function ue(){var e=Object(W.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: ",";\n  z-index: 1;\n"]);return ue=function(){return e},e}function se(){var e=Object(W.a)(["\n  margin-top: ",";\n  margin-bottom: ",";\n"]);return se=function(){return e},e}function me(){var e=Object(W.a)(["\n  padding: ",";\n  padding-top: ",";\n  padding-bottom: ",";\n  height: 100vh;\n  margin-top: 0;\n  overflow-y: scroll;\n"]);return me=function(){return e},e}var de=Object(Z.a)(z.a)(me(),D[3],D[8],D[10]),pe=Object(Z.a)(L.a)(se(),D[7],D[7]),fe=Object(Z.a)(Y.a)(ue(),B),he=Object(Z.a)(le)(ie(),D[3]),Ee=function(e){var t=e.header,n=e.title,a=e.children,r=e.submitButtonTitle,o=e.onClickSubmit;return c.a.createElement(c.a.Fragment,null,c.a.createElement(ee,null),c.a.createElement(de,null,c.a.createElement(Y.a,{lg:{span:4,offset:3},md:{span:4,offset:1},sm:{span:4}},c.a.createElement(L.a,null,t),c.a.createElement(pe,null,c.a.createElement("h3",null,n)),c.a.createElement(L.a,null,a)),c.a.createElement(fe,{lg:{span:4,offset:3},md:{span:4,offset:1},sm:{span:4}},c.a.createElement(L.a,null,r&&c.a.createElement(he,{onClick:o},r)))))},be=n(44),ve=n.n(be),ge="FB",Te="GOOGLE",Oe="Facebook",je="Google",we={FB:"fm",GOOGLE:"gm"},xe=function(e){var t=e.type,n=c.a.useContext(U).api,a=function(){var e=Object(v.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.logIn(we[t]);case 2:(a=e.sent)&&(window.location.href=a.smOauthUrl);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(ve.a,{onClick:a},"Log in with"," ",t===ge&&Oe,t===Te&&je)},ye=function(){return c.a.createElement(Ee,{title:"Log In"},c.a.createElement(xe,{type:ge}))},Ie=function(){var e=c.a.useContext(U),t=e.setToken,n=e.authenticated,a=e.user,o=window.location.href.split("#/jwt/")[1];return Object(r.useEffect)((function(){o&&t(o)}),[o,t]),c.a.createElement(c.a.Fragment,null,n?"Hello, ".concat(a.name):"Hello Voter!")},_e=n(88);function Ae(){var e=Object(W.a)(["\n  margin-left: ",";\n"]);return Ae=function(){return e},e}function Pe(){var e=Object(W.a)(["\n  margin-left: ",";\n"]);return Pe=function(){return e},e}function Ce(){var e=Object(W.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: ",";\n"]);return Ce=function(){return e},e}function Ne(){var e=Object(W.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: ",";\n"]);return Ne=function(){return e},e}function ke(){var e=Object(W.a)(["\n  color: ",";\n  padding-right: ",";\n"]);return ke=function(){return e},e}function Se(){var e=Object(W.a)(['\n  width: 100%;\n  height: 240px;\n  background-image: url("./placeholder.png");\n  background-size: cover;\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  margin-top: ',";\n"]);return Se=function(){return e},e}var Re=Z.a.div(Se(),D[3]),Me=Z.a.p(ke(),B,D[3]),He=Z.a.div(Ne(),D[7]),Ue=Z.a.div(Ce(),D[3]),Ge=Z.a.h5(Pe(),D[3]),We=Z.a.p(Ae(),D[7]),ze=function(e){var t=e.title,n=e.description;return c.a.createElement(He,null,c.a.createElement(Ue,null,c.a.createElement(_e.a,null),c.a.createElement(Ge,null,t)),c.a.createElement(We,null,n))},Le=function(){return c.a.createElement(Ee,{title:"Become an ambassador",submitButtonTitle:"Get Started",header:c.a.createElement(Re,null,c.a.createElement(Me,null,"Photo by Perry Grone"))},c.a.createElement(ze,{title:"Make a difference",description:"Help increase voter turnout to better your community and the country"}),c.a.createElement(ze,{title:"Get paid for your impact",description:"You\u2019ll get $50 for every vote tripler you sign up and a $25 bonus if they also become an ambassador"}))},Ye=n(69),Ze=n(91),De=n(89),Ve=n(90);function Be(){var e=Object(W.a)(["\n  display: inline;\n"]);return Be=function(){return e},e}function Fe(){var e=Object(W.a)(["\n  margin-top: ",";\n"]);return Fe=function(){return e},e}var Xe=Object(Z.a)(De.a)(Fe(),D[7]),Je=Object(Z.a)(Ve.a)(Be()),Qe=function(e){var t=e.items;return c.a.createElement(Xe,{noTrailingSlash:!0},t.length>1?t.map((function(e,n){return c.a.createElement(Je,{key:n,isCurrentPage:n===t.length-1,href:e.route},e.name)})):c.a.createElement(Je,{href:t[0].route},t[0].name))};function Ke(){var e=Object(W.a)(["\n  font-size: 12px;\n"]);return Ke=function(){return e},e}function qe(){var e=Object(W.a)(["\n  font-weight: normal;\n"]);return qe=function(){return e},e}function $e(){var e=Object(W.a)(["\n  width: 100%;\n  padding: ",";\n  background-color: ",";\n  border-top: 1px solid ",";\n  &:hover {\n    background-color: #e5e5e5;\n    cursor: pointer;\n  } \n"]);return $e=function(){return e},e}function et(){var e=Object(W.a)(["\n  margin-bottom: ",";\n"]);return et=function(){return e},e}function tt(){var e=Object(W.a)(["\n  margin-top: ",";\n  margin-bottom: ",";\n"]);return tt=function(){return e},e}var nt=Z.a.h5(tt(),D[7],D[2]),at=Z.a.p(et(),D[5]),rt=Z.a.div($e(),D[4],V[10],V[20]),ct=Z.a.h6(qe()),ot=Z.a.p(Ke()),lt=function(e){var t=e.name,n=e.address;return c.a.createElement(rt,null,c.a.createElement(ct,null,t),c.a.createElement(ot,null,n))},it=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Confirm that these people will ask 3 friends to vote and earn 50 dollars"),c.a.createElement(le,{href:"/triplers/add"},"Find new Triplers",c.a.createElement(Ze.a,null)))},ut=function(e){var t=e.unconfirmed,n=e.pending,a=e.confirmed;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"These are your contacts that will each help 3 others vote. Confirm each Tripler by adding their information below"),c.a.createElement(le,{href:"/triplers/add"},"Find new Triplers",c.a.createElement(Ze.a,null)),c.a.createElement(nt,null,"Your unconfirmed Triplers"),c.a.createElement(at,null,"Add information for a Tripler. We\u2019ll send them a text message to confirm."),t&&t.map((function(e){return c.a.createElement(lt,{name:"".concat(e.first_name," ").concat(e.last_name),address:"".concat(e.address.address1," ").concat(e.address.city," ").concat(e.address.state),onClick:function(){}})})),c.a.createElement(nt,null,"Your Triplers who haven\u2019t replied yet"),c.a.createElement(at,null,"Once the Tripler confirms \u201cYES\u201d to our text message, you will get your reward."),n&&n.map((function(e){return c.a.createElement(lt,{name:"".concat(e.first_name," ").concat(e.last_name),address:"".concat(e.address.address1," ").concat(e.address.city," ").concat(e.address.state),onClick:function(){}})})),c.a.createElement(nt,null,"Your confirmed Triplers"),c.a.createElement(at,null,"Once your ",c.a.createElement(Ye.a,{href:"#"},"payment method is set up"),", you\u2019ll receive your reward for these Triplers."),a&&a.map((function(e){return c.a.createElement(lt,{name:"".concat(e.first_name," ").concat(e.last_name),address:"".concat(e.address.address1," ").concat(e.address.city," ").concat(e.address.state),onClick:function(){}})})))},st=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),n=t[0],a=t[1],o=c.a.useContext(U).api;return Object(r.useEffect)((function(){(function(){var e=Object(v.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.fetchTriplers();case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),n?c.a.createElement(mt,{triplers:n}):"Loading..."},mt=function(e){var t=e.triplers,n=t.filter((function(e){return"confirmed"===e.status})),a=t.filter((function(e){return"pending"===e.status})),r=t.filter((function(e){return"unconfirmed"===e.status}));return c.a.createElement(Ee,{title:"My Vote Triplers",header:c.a.createElement(Qe,{items:[{name:"Home",route:"/"},{name:"Triplers",route:"/"}]})},t?c.a.createElement(ut,{unconfirmed:r,pending:a,confirmed:n}):c.a.createElement(it,null))},dt=n(96),pt=n(98),ft=n(92);function ht(){var e=Object(W.a)(["\n  padding-top: 0 !important;\n  vertical-align: middle !important;\n"]);return ht=function(){return e},e}function Et(){var e=Object(W.a)(["\n  min-width: 0;\n  width: 100%;\n  margin-top: ",";\n"]);return Et=function(){return e},e}var bt=dt.a.TableContainer,vt=dt.a.Table,gt=dt.a.TableHead,Tt=dt.a.TableRow,Ot=dt.a.TableBody,jt=dt.a.TableCell,wt=dt.a.TableHeader,xt=dt.a.TableToolbar,yt=dt.a.TableBatchActions,It=dt.a.TableBatchAction,_t=dt.a.TableToolbarContent,At=dt.a.TableToolbarSearch,Pt=dt.a.TableSelectAll,Ct=dt.a.TableSelectRow,Nt=Object(Z.a)(bt)(Et(),D[7]),kt=Object(Z.a)(jt)(ht()),St=function(e){var t,n=e.headers,a=e.rows,r=e.handleSelected;return c.a.createElement(dt.a,{headers:n,render:(t=r,function(e){var n=e.rows,a=e.headers,r=e.getHeaderProps,o=e.getSelectionProps,l=e.getToolbarProps,i=e.getBatchActionProps,u=e.getRowProps,s=e.onInputChange,m=e.selectedRows,d=e.getTableProps,p=e.getTableContainerProps;return c.a.createElement(Nt,p(),c.a.createElement(xt,l(),c.a.createElement(yt,i(),c.a.createElement(It,{renderIcon:ft.a,iconDescription:"Download the selected rows",onClick:t(m)},"Add")),c.a.createElement(_t,null,c.a.createElement(At,{onChange:s}))),c.a.createElement(vt,Object.assign({},d(),{size:"tall"}),c.a.createElement(gt,null,c.a.createElement(Tt,null,c.a.createElement(Pt,o()),a.map((function(e){return c.a.createElement(wt,r({header:e}),e.header)})))),c.a.createElement(Ot,null,n.map((function(e){return c.a.createElement(Tt,Object.assign({key:e.id},u({row:e})),c.a.createElement(Ct,o({row:e})),c.a.createElement(kt,{colSpan:100},e.cells.map((function(e){return c.a.createElement("p",{key:e.id},e.value)}))))})))),c.a.createElement(pt.a,{backwardText:"Previous page",forwardText:"Next page",itemsPerPageText:"Show:",page:1,pageNumberText:"Page Number",pageSize:10,pageSizes:[10,20,30,40,50],totalItems:103}))}),rows:a})},Rt=function(){var e=Object(i.g)(),t=Object(r.useState)(null),n=Object(s.a)(t,2),a=n[0],o=n[1],l=Object(r.useState)(!1),u=Object(s.a)(l,2),m=u[0],d=u[1],p=c.a.useContext(U).api;Object(r.useEffect)((function(){(function(){var e=Object(v.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.fetchTriplers();case 2:t=e.sent,n=t.data.map((function(e){return{id:e.id,name:e.first_name+" "+e.last_name,address:e.first_name+" "+e.last_name}})),o(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return a?c.a.createElement(Mt,{triplers:a,claimTriplers:function(t){return Object(v.a)(b.a.mark((function n(){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d(!0),n.next=3,p.claimTriplers(t.map((function(e){return e.id})));case 3:d(!1),e.push("/triplers");case 5:case"end":return n.stop()}}),n)})))},loading:m}):"Loading..."},Mt=function(e){var t=e.triplers,n=e.claimTriplers;e.loading;return c.a.createElement(Ee,{title:"Add Triplers to my list",header:c.a.createElement(Qe,{items:[{name:"Home",route:"/"},{name:"Triplers",route:"/"},{name:"Add",route:"/"}]})},c.a.createElement("p",null,"This is someone who agrees to help three others vote in the next election."),c.a.createElement(St,{headers:[{header:"Eligible neighbors",key:"name"},{header:"",key:"address"}],rows:t,handleSelected:n}))},Ht=n(94),Ut=n(95),Gt=n(97),Wt=function(){return c.a.createElement(Ee,{title:"Tripler: {Name}",header:c.a.createElement(Qe,{items:[{name:"Home",route:"/"},{name:"Triplers",route:"/"},{name:"Confirm",route:"/"}]})},c.a.createElement(Ht.a,{style:{width:"100%"}},c.a.createElement("p",null,"Add \\[First Name]\\\u2019s phone number so we can confirm her identity, and then we\u2019ll send you your payment! "),c.a.createElement(Ut.a,null,c.a.createElement(Gt.a,{id:"phone",invalidText:"Invalid error message.",labelText:"Melody\u2019s Phone Number",placeholder:"123-456-7890"})),c.a.createElement("p",null,"Add the names of three people that Melody will remind to vote"),c.a.createElement(Ut.a,null,c.a.createElement(Gt.a,{id:"name-1",invalidText:"Invalid error message.",labelText:"Name 1",placeholder:"Name"})),c.a.createElement(Ut.a,null,c.a.createElement(Gt.a,{id:"name-2",invalidText:"Invalid error message.",labelText:"Name 2",placeholder:"Name"})),c.a.createElement(Ut.a,null,c.a.createElement(Gt.a,{id:"name-3",invalidText:"Invalid error message.",labelText:"Name 3",placeholder:"Name"})),c.a.createElement(le,null,"Update Info"),c.a.createElement(le,{small:!0,kind:"tertiary"},"Go back to My Vote Triplers")))},zt=function(e){var t=e.component,n=e.authenticated;return c.a.createElement(i.b,{render:function(e){return!0===n?c.a.createElement(t,e):c.a.createElement(i.a,{to:{pathname:"/login",state:{from:e.location}}})}})},Lt=function(){var e=c.a.useContext(U),t=e.authenticated;return e.loading?c.a.createElement("div",null," Loading ... "):c.a.createElement(u.a,null,c.a.createElement(i.d,null,c.a.createElement(zt,{path:"/ambassador",component:Le,exact:!0,authenticated:t}),c.a.createElement(zt,{path:"/triplers",component:st,exact:!0,authenticated:t}),c.a.createElement(zt,{path:"/triplers/add",component:Rt,exact:!0,authenticated:t}),c.a.createElement(zt,{path:"/triplers/confirm",component:Wt,exact:!0,authenticated:t}),c.a.createElement(i.b,{path:"/login",component:ye}),c.a.createElement(i.b,{component:Ie})))},Yt=function(){return c.a.createElement(G,null,c.a.createElement(Lt,null))},Zt=function(){return c.a.createElement(Yt,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Zt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.ac91aa97.chunk.js.map