(this["webpackJsonphello-voter"]=this["webpackJsonphello-voter"]||[]).push([[0],{55:function(e,t,n){e.exports=n(71)},60:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"SERVER_URL",(function(){return O})),n.d(a,"getToken",(function(){return N})),n.d(a,"logIn",(function(){return V})),n.d(a,"fetchTriplers",(function(){return D})),n.d(a,"claimTriplers",(function(){return M})),n.d(a,"fetchTripler",(function(){return B})),n.d(a,"fetchFreeTriplers",(function(){return F})),n.d(a,"signup",(function(){return H})),n.d(a,"confirmTriplers",(function(){return U})),n.d(a,"sendReminder",(function(){return L})),n.d(a,"fetchAmbassador",(function(){return G}));var r=n(0),c=n.n(r),i=n(35),o=n.n(i),l=(n(60),n(16)),u=n(21),s=n(14),d=n(7),m=n.n(d),p=n(11),f=n(24),b=Object({NODE_ENV:"production",PUBLIC_URL:"https://apps.ourvoiceusa.org/ambassador-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_ORGID:"VT6WX8A",REACT_APP_AUDIANCE:"apps.ourvoiceusa.org",REACT_APP_BASEURI:"/voterambassador/staging",REACT_APP_APPPATH:"voterambassador/staging",REACT_APP_API_DOMAIN:"gotv-vt.ourvoiceusa.org",REACT_APP_API_SSL:"true",REACT_APP_OAUTH_HEADER:"x-sm-oauth-url",REACT_APP_TOKEN_KEY:"token",REACT_APP_REDIRECT_URL:"https://apps.ourvoiceusa.org/ambassador-react",REACT_APP_DEVELOPMENT:"false",REACT_APP_API_URL:"https://hellovoter.api.stage.colab.coop",REACT_APP_KEY:"ambassador-react"}),h=b.REACT_APP_OAUTH_HEADER,E=b.REACT_APP_TOKEN_KEY,v=b.REACT_APP_AUDIANCE,g=b.REACT_APP_KEY,x=b.REACT_APP_DEVELOPMENT,T=b.REACT_APP_API_URL,O="https://".concat("gotv-vt.ourvoiceusa.org","/HelloVoterHQ/").concat("VT6WX8A","/api/v1"),j="".concat(O,"/hello"),w="".concat(T,"/api/v1/va/ambassadors/current/triplers"),y="".concat(T,"/api/v1/va/ambassadors/current/triplers"),k="".concat(T,"/api/v1/va/ambassadors/current"),A="".concat(T,"/api/v1/va/suggest-triplers"),C="".concat(T,"/api/v1/va/ambassadors/signup"),P="".concat(T,"/api/v1/va/triplers"),_="".concat(T,"/api/v1/va/triplers"),S=function(e){console.warn(e)},I=function(e){return[401,400,500].includes(e)},N=function(){return localStorage.getItem(E)},R=function(e){var t=N();return Object(f.a)(Object(f.a)({},e||null),{},{Authorization:"Bearer ".concat(t?t.replace(/"/gi,""):"of the one ring"),"Content-Type":"application/json"})},V=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(j,{method:"POST",headers:R()});case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,r="".concat(n.headers.get(h),"/").concat(t,"/?aud=").concat(v,"&app=").concat(g),"true"===x&&(r+=["&local=",x].join("")),e.abrupt("return",{data:a,smOauthUrl:r});case 12:return e.prev=12,e.t0=e.catch(0),S(e.t0),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(p.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(w,{method:"GET",headers:R()});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",{data:n});case 10:return e.prev=10,e.t0=e.catch(0),S(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(y,{method:"PUT",headers:R(),body:JSON.stringify({triplers:t})});case 3:return n=e.sent,e.next=6,n.json();case 6:if(a=e.sent,!I(a.code)){e.next=9;break}return e.abrupt("return",{error:a});case 9:return e.abrupt("return",{data:a});case 12:return e.prev=12,e.t0=e.catch(0),S(e.t0),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(P,"/").concat(t),{method:"GET",headers:R()});case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",{data:a});case 10:return e.prev=10,e.t0=e.catch(0),S(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(p.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(A),{method:"GET",headers:R()});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",{data:n});case 10:return e.prev=10,e.t0=e.catch(0),S(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(C,{method:"POST",headers:R(),body:JSON.stringify(t)});case 3:return n=e.sent,e.next=6,n.json();case 6:if(a=e.sent,!I(a.code)){e.next=9;break}return e.abrupt("return",{error:a});case 9:return e.abrupt("return",{data:a});case 12:return e.prev=12,e.t0=e.catch(0),S(e.t0),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(p.a)(m.a.mark((function e(t,n){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(_,"/").concat(t,"/start-confirm"),{method:"PUT",headers:R(),body:JSON.stringify(n)});case 3:return a=e.sent,e.next=6,a.json();case 6:if(r=e.sent,!I(r.code)){e.next=9;break}return e.abrupt("return",{error:r});case 9:return e.abrupt("return",{data:r});case 12:return e.prev=12,e.t0=e.catch(0),S(e.t0),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(P,"/").concat(t,"/remind"),{method:"PUT",headers:R()});case 3:return n=e.sent,e.next=6,n.json();case 6:if(a=e.sent,!I(a.code)){e.next=9;break}return e.abrupt("return",{error:a});case 9:return e.abrupt("return",{data:a});case 12:return e.prev=12,e.t0=e.catch(0),S(e.t0),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(p.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(k,{method:"GET",headers:R()});case 3:return t=e.sent,e.next=6,t.json();case 6:if(n=e.sent,!I(n.code)){e.next=9;break}return e.abrupt("return",{error:n});case 9:return e.abrupt("return",{data:n});case 12:return e.prev=12,e.t0=e.catch(0),S(e.t0),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),W=c.a.createContext({}),Y=function(e){var t=e.children,n=function(e,t){var n=Object(r.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),a=Object(s.a)(n,2),c=a[0],i=a[1];return[c,function(t){try{var n=t instanceof Function?t(c):t;i(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]}("token",null),i=Object(s.a)(n,2),o=(i[0],i[1]),l=Object(r.useState)({}),u=Object(s.a)(l,2),d=u[0],f=u[1],b=function(e,t){var n=Object(r.useState)(!1),a=Object(s.a)(n,2),c=a[0],i=a[1],o=Object(r.useState)(null),l=Object(s.a)(o,2),u=l[0],d=l[1],f=Object(r.useState)(!0),b=Object(s.a)(f,2),h=b[0],E=b[1],v=function(){var e=Object(p.a)(m.a.mark((function e(){var n,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchAmbassador();case 2:if(n=e.sent,a=n.error,r=n.data,!a){e.next=9;break}return E(!1),"No current ambassador"===a.msg&&i(!0),e.abrupt("return",{completed:!1,error:a});case 9:return d(r),i(!0),E(!1),e.abrupt("return",{completed:!0,data:r});case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){!c&&v()}),[c,v]),{authenticated:c,user:u,loading:h,fetchUser:v}}(0,a),h=b.user,E=b.authenticated,v=b.loading,g=b.fetchUser;return c.a.createElement(W.Provider,{value:{user:h,authenticated:E,setToken:o,api:a,loading:v,ambassador:d,setAmbassador:f,fetchUser:g}},t)},K=n(8),q=n(89),z=n(90),J=n(91),X=n(92),$=n(9),Z=["0px","2px","4px","8px","12px","16px","24px","32px","48px","64px","96px"],Q={10:"#edf4ff",20:"#c9deff",30:"#97c1ff",40:"#6ea6ff",50:"#408bfc",60:"#0062ff",70:"#054ada",80:"#0530ad",90:"#061f80",100:"#051243"},ee={10:"#f3f3f3",20:"#dcdcdc",30:"#bebebe",40:"#a4a4a4",50:"#8c8c8c",60:"#6f6f6f",70:"#565656",80:"#3d3d3d",90:"#282828",100:"#171717"},te="#ffffff",ne=n(87),ae=n(88),re=n(83),ce=n(84),ie=n(85),oe=n(86);function le(){var e=Object(K.a)(["\n  width: ",";\n  height: ",";\n  margin-left: ",';\n  background-image: url("./logo.png");\n  background-size: contain;\n  background-repeat: no-repeat;\n  &:hover {\n    cursor: pointer;\n  }\n']);return le=function(){return e},e}var ue=$.a.div(le(),Z[10],Z[7],Z[3]),se=function(){return c.a.createElement(re.a,{render:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(ce.a,{"aria-label":"Hello Voter"},c.a.createElement(ue,{onClick:function(){}}),c.a.createElement(ie.a,null,c.a.createElement(oe.a,{"aria-label":"Help",onClick:function(){}},c.a.createElement(ne.a,null)),c.a.createElement(oe.a,{"aria-label":"Profile",onClick:function(){}},c.a.createElement(ae.a,null)))))}})},de=n(53),me=n(113),pe=n(111);function fe(){var e=Object(K.a)(["\n  border-radius: 32px;\n  font-size: 12px;\n  padding: "," ",";\n  background-color: ",";\n  border: 2px solid ",";\n  display: flex;\n  align-items: center;\n  &:hover {\n    border: 2px solid ",";\n  }\n"]);return fe=function(){return e},e}function be(){var e=Object(K.a)(["\n  width: 100%;\n  justify-content: center;\n  height: ",";\n"]);return be=function(){return e},e}function he(){var e=Object(K.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: ",";\n  max-width: 100%;\n  padding-right: ",";\n  margin-top: ",";\n"]);return he=function(){return e},e}var Ee=Object($.a)(me.a)(he(),(function(e){return e.micro?"50%":"100%"}),Z[4],Z[5]),ve=Object($.a)(pe.a)(be(),Z[5]),ge=$.a.div(fe(),Z[2],Z[3],ee[20],ee[20],Q[60]),xe=function(e){var t=e.href,n=e.children,a=e.kind,r=e.loading,i=e.onClick,o=e.pill,u=Object(de.a)(e,["href","children","kind","loading","onClick","pill"]),s=Object(l.g)(),d=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.push(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o?c.a.createElement(ge,Object.assign({onClick:function(e){i&&i(e),t&&d(t)}},u),n):c.a.createElement(Ee,Object.assign({kind:r?"ghost":a,onClick:function(e){i&&i(e),t&&d(t)}},u),r?c.a.createElement(ve,{description:"",status:r?"active":"finished","aria-live":"off"}):n)},Te=n(108);function Oe(){var e=Object(K.a)(["\n  width: 100%;\n  max-width: 100%;\n  margin-top: 0;\n  margin-bottom: ",";\n"]);return Oe=function(){return e},e}function je(){var e=Object(K.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: ",";\n  z-index: 1;\n"]);return je=function(){return e},e}function we(){var e=Object(K.a)(["\n  margin-top: ",";\n  margin-bottom: ",";\n"]);return we=function(){return e},e}function ye(){var e=Object(K.a)(["\n  padding: ",";\n  padding-top: ",";\n  padding-bottom: ",";\n  height: 100vh;\n  margin-top: 0;\n  overflow-y: scroll;\n"]);return ye=function(){return e},e}var ke=Object($.a)(q.a)(ye(),Z[3],Z[8],Z[10]),Ae=Object($.a)(z.a)(we(),Z[7],Z[7]),Ce=Object($.a)(J.a)(je(),te),Pe=Object($.a)(xe)(Oe(),Z[3]),_e=function(e){var t=e.header,n=e.title,a=e.children,r=e.submitButtonTitle,i=e.onClickSubmit,o=e.formId,l=e.error;return c.a.createElement(c.a.Fragment,null,c.a.createElement(se,null),c.a.createElement(ke,null,c.a.createElement(X.a,{id:o,onSubmit:i},c.a.createElement(J.a,{lg:{span:4,offset:3},md:{span:4,offset:1},sm:{span:4}},c.a.createElement(z.a,null,t),c.a.createElement(Ae,null,c.a.createElement("h3",null,n)),c.a.createElement(z.a,{style:{display:"block"}},a)),c.a.createElement(Ce,{lg:{span:4,offset:3},md:{span:4,offset:1},sm:{span:4}},c.a.createElement(z.a,null,l&&c.a.createElement(Te.a,{kind:"error",icondescription:"Dismiss notification",subtitle:l,title:"Oops!"}),r&&c.a.createElement(Pe,{type:"submit",id:o},r))))))},Se=n(49),Ie=n.n(Se),Ne=function(){return c.a.createElement(_e,{title:""},c.a.createElement(Ie.a,{description:"Loading some awesome stuff, please wait."}))},Re="FB",Ve="GOOGLE",De="Facebook",Me="Google",Be={FB:"fm",GOOGLE:"gm"},Fe=function(e){var t=e.type,n=Object(r.useState)(!1),a=Object(s.a)(n,2),i=a[0],o=a[1],l=c.a.useContext(W).api,u=function(){var e=Object(p.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,l.logIn(Be[t]);case 3:(n=e.sent)&&(window.location.href=n.smOauthUrl),o(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(xe,{onClick:u,loading:i},"Log in with"," ",t===Re&&De,t===Ve&&Me)},He=function(){return c.a.createElement(_e,{title:"Log In"},c.a.createElement(Fe,{type:Re}),c.a.createElement(Fe,{type:Ve}))},Ue=function(){var e=c.a.useContext(W),t=e.setToken,n=e.authenticated,a=window.location.href.split("#/jwt/")[1],i=Object(l.g)();return Object(r.useEffect)((function(){a&&t(a),n&&i.push("/triplers")}),[a,n]),c.a.createElement(c.a.Fragment,null,n?"":c.a.createElement(Ne,null))},Le=n(96),Ge=n(94),We=n(95);function Ye(){var e=Object(K.a)(["\n  display: inline;\n"]);return Ye=function(){return e},e}function Ke(){var e=Object(K.a)(["\n  margin-top: ",";\n"]);return Ke=function(){return e},e}var qe=Object($.a)(Ge.a)(Ke(),Z[7]),ze=Object($.a)(We.a)(Ye()),Je=function(e){var t=e.items;return c.a.createElement(qe,{noTrailingSlash:!0},t.length>1?t.map((function(e,n){return c.a.createElement(ze,{key:n,isCurrentPage:n===t.length-1,href:e.route},e.name)})):c.a.createElement(ze,{href:t[0].route},t[0].name))};function Xe(){var e=Object(K.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid ",";\n  padding: "," ",";\n"]);return Xe=function(){return e},e}function $e(){var e=Object(K.a)(["\n  width: 100%;\n  margin-top: ",";\n"]);return $e=function(){return e},e}var Ze=$.a.ol($e(),Z[7]),Qe=$.a.li(Xe(),ee[20],Z[4],Z[5]),et=function(e){var t=e.text,n=e.bold;return c.a.createElement(Qe,null,n?c.a.createElement("strong",null,t):t,c.a.createElement(Le.a,null))},tt=function(){var e=Object(l.g)();return c.a.createElement(_e,{onClickSubmit:function(){e.push("/ambassador/personal_info")},title:"Sign Up",submitButtonTitle:"Continue",header:c.a.createElement(Je,{items:[{name:"Back",route:"/ambassador"}]})},c.a.createElement("p",null,"Being a Voting Ambassador is an easy and rewarding way to bring positive change to your community. To sign up:"),c.a.createElement(Ze,null,c.a.createElement(et,{text:"Complete a brief application"}),c.a.createElement(et,{text:"Take a 15-minute training"}),c.a.createElement(et,{text:"Have a 10-minute phone interview"}),c.a.createElement(et,{bold:!0,text:"Start working and earning!"})))},nt=n(97);function at(){var e=Object(K.a)(["\n  margin-left: ",";\n"]);return at=function(){return e},e}function rt(){var e=Object(K.a)(["\n  margin-left: ",";\n"]);return rt=function(){return e},e}function ct(){var e=Object(K.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: ",";\n"]);return ct=function(){return e},e}function it(){var e=Object(K.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: ",";\n"]);return it=function(){return e},e}function ot(){var e=Object(K.a)(["\n  color: ",";\n  padding-right: ",";\n"]);return ot=function(){return e},e}function lt(){var e=Object(K.a)(['\n  width: 100%;\n  height: 240px;\n  background-image: url("./placeholder.png");\n  background-size: cover;\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  margin-top: ',";\n"]);return lt=function(){return e},e}var ut=$.a.div(lt(),Z[3]),st=$.a.p(ot(),te,Z[3]),dt=$.a.div(it(),Z[7]),mt=$.a.div(ct(),Z[3]),pt=$.a.h5(rt(),Z[3]),ft=$.a.p(at(),Z[7]),bt=function(e){var t=e.title,n=e.description;return c.a.createElement(dt,null,c.a.createElement(mt,null,c.a.createElement(nt.a,null),c.a.createElement(pt,null,t)),c.a.createElement(ft,null,n))},ht=function(){var e=Object(l.g)();return c.a.createElement(_e,{onClickSubmit:function(){e.push("/ambassador/signup")},title:"Become a Voting Ambassador",submitButtonTitle:"Get Started",header:c.a.createElement(ut,null,c.a.createElement(st,null,"Photo by Perry Grone"))},c.a.createElement(bt,{title:"Make a difference!",description:"Talk to your housemates, friends, and neighbors about voting in the next election to bring positive change to your community and the country."}),c.a.createElement(bt,{title:"Make money!",description:'Receive $X for every "Vote Tripler" you sign up \u2014 and a $Y bonus for each Vote Tripler who goes on to become a Voting Ambassador.'}))},Et=n(98),vt=n(107),gt=n(110),xt=n(112),Tt=function(){var e=Object(l.g)(),t=c.a.useContext(W).setAmbassador;return c.a.createElement(_e,{title:"Personal Info",onClickSubmit:function(n){n.preventDefault();var a=new FormData(n.target),r={first_name:a.get("first_name"),last_name:a.get("last_name"),date_of_birth:a.get("dob")};t(r),e.push("/ambassador/address")},submitButtonTitle:"Continue",header:c.a.createElement(Je,{items:[{name:"Back",route:"/ambassador/signup"}]})},c.a.createElement(Et.a,null,c.a.createElement(vt.a,{name:"first_name",invalidText:"Invalid error message.",labelText:"First Name",placeholder:"Joan",required:!0})),c.a.createElement(Et.a,null,c.a.createElement(vt.a,{name:"last_name",invalidText:"Invalid error message.",labelText:"Last Name",placeholder:"Ambassador",required:!0})),c.a.createElement(gt.a,{dateFormat:"m/d/Y",datePickerType:"single"},c.a.createElement(xt.a,{name:"dob",placeholder:"mm/dd/yyyy",labelText:"Date of Birth",type:"text"})))},Ot=n(106),jt=[{id:"Alabama",text:"AL"},{id:"Alaska",text:"AK"},{id:"American Samoa",text:"AS"},{id:"Arizona",text:"AZ"},{id:"Arkansas",text:"AR"},{id:"California",text:"CA"},{id:"Colorado",text:"CO"},{id:"Connecticut",text:"CT"},{id:"Delaware",text:"DE"},{id:"District Of Columbia",text:"DC"},{id:"Federated States Of Micronesia",text:"FM"},{id:"Florida",text:"FL"},{id:"Georgia",text:"GA"},{id:"Guam",text:"GU"},{id:"Hawaii",text:"HI"},{id:"Idaho",text:"ID"},{id:"Illinois",text:"IL"},{id:"Indiana",text:"IN"},{id:"Iowa",text:"IA"},{id:"Kansas",text:"KS"},{id:"Kentucky",text:"KY"},{id:"Louisiana",text:"LA"},{id:"Maine",text:"ME"},{id:"Marshall Islands",text:"MH"},{id:"Maryland",text:"MD"},{id:"Massachusetts",text:"MA"},{id:"Michigan",text:"MI"},{id:"Minnesota",text:"MN"},{id:"Mississippi",text:"MS"},{id:"Missouri",text:"MO"},{id:"Montana",text:"MT"},{id:"Nebraska",text:"NE"},{id:"Nevada",text:"NV"},{id:"New Hampshire",text:"NH"},{id:"New Jersey",text:"NJ"},{id:"New Mexico",text:"NM"},{id:"New York",text:"NY"},{id:"North Carolina",text:"NC"},{id:"North Dakota",text:"ND"},{id:"Northern Mariana Islands",text:"MP"},{id:"Ohio",text:"OH"},{id:"Oklahoma",text:"OK"},{id:"Oregon",text:"OR"},{id:"Palau",text:"PW"},{id:"Pennsylvania",text:"PA"},{id:"Puerto Rico",text:"PR"},{id:"Rhode Island",text:"RI"},{id:"South Carolina",text:"SC"},{id:"South Dakota",text:"SD"},{id:"Tennessee",text:"TN"},{id:"Texas",text:"TX"},{id:"Utah",text:"UT"},{id:"Vermont",text:"VT"},{id:"Virgin Islands",text:"VI"},{id:"Virginia",text:"VA"},{id:"Washington",text:"WA"},{id:"West Virginia",text:"WV"},{id:"Wisconsin",text:"WI"},{id:"Wyoming",text:"WY"}];function wt(){var e=Object(K.a)(["\n  grid-row-start: span 1;\n  grid-row-end: span 1;\n  grid-column-start: span 5;\n  grid-column-end: span 5;\n"]);return wt=function(){return e},e}function yt(){var e=Object(K.a)(["\n  grid-row-start: span 1;\n  grid-row-end: span 1;\n  grid-column-start: span 3;\n  grid-column-end: span 3;\n"]);return yt=function(){return e},e}function kt(){var e=Object(K.a)(["\n  display: grid;\n  grid-auto-columns: 1fr;\n  grid-column-gap: ",";\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n"]);return kt=function(){return e},e}var At=$.a.div(kt(),Z[5]),Ct=$.a.div(yt()),Pt=$.a.div(wt()),_t=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(Et.a,null,c.a.createElement(vt.a,{name:"address1",invalidText:"Invalid error message.",labelText:"Street Address",placeholder:"1234 Ambassador Lane",required:!0})),c.a.createElement(Et.a,null,c.a.createElement(vt.a,{name:"city",invalidText:"Invalid error message.",labelText:"City",placeholder:"San Francisco",required:!0})),c.a.createElement(Et.a,null,c.a.createElement(At,null,c.a.createElement(Ct,null,c.a.createElement(Ot.a,{ariaLabel:"Choose an item",name:"state",invalidText:"A valid value is required",itemToString:function(e){return e?e.text:""},items:jt,onChange:function(e){return console.log(e)},placeholder:" ",titleText:"State",type:"default",required:!0})),c.a.createElement(Pt,null,c.a.createElement(vt.a,{name:"zip",invalidText:"Invalid error message.",labelText:"Zip Code",placeholder:"12345",required:!0})))))},St=function(){var e=Object(l.g)(),t=c.a.useContext(W).setAmbassador;return c.a.createElement(_e,{onClickSubmit:function(n){n.preventDefault();var a=new FormData(n.target),r={address:{address1:a.get("address1"),state:a.get("state"),zip:a.get("zip"),city:a.get("city")}};t((function(e){return Object(f.a)(Object(f.a)({},e),r)})),e.push("/ambassador/contact")},title:"Address",submitButtonTitle:"Continue",header:c.a.createElement(Je,{items:[{name:"Back",route:"/ambassador/personal_info"}]})},c.a.createElement(_t,null))},It=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(l.g)(),o=c.a.useContext(W),u=o.ambassador,d=o.setAmbassador,b=o.api,h=o.fetchUser;return Object(r.useEffect)((function(){var e=function(){var e=Object(p.a)(m.a.mark((function e(){var t,n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.signup(u);case 2:if(t=e.sent,!(n=t.error)){e.next=6;break}return e.abrupt("return",a(n.msg));case 6:return e.next=8,h();case 8:if(r=e.sent,!(c=r.userError)){e.next=12;break}return e.abrupt("return",a(c.msg));case 12:i.push("/triplers");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();u.signupComplete&&e()}),[u]),c.a.createElement(_e,{error:n,title:"Contact",onClickSubmit:function(e){e.preventDefault();var t=new FormData(e.target),n={email:t.get("email"),phone:t.get("phone").toString(),signupComplete:!0};d((function(e){return Object(f.a)(Object(f.a)({},e),n)}))},submitButtonTitle:"Continue",header:c.a.createElement(Je,{items:[{name:"Back",route:"/ambassador/address"}]})},c.a.createElement(Et.a,null,c.a.createElement(vt.a,{name:"email",invalidText:"Invalid error message.",labelText:"Email",placeholder:"joanambassador@email.co",required:!0})),c.a.createElement(Et.a,null,c.a.createElement(vt.a,{name:"phone",invalidText:"Invalid error message.",labelText:"Phone number",placeholder:"(123) 456-7890",required:!0})))};function Nt(){var e=Object(K.a)(["\n  margin-bottom: ",";\n"]);return Nt=function(){return e},e}var Rt=$.a.h5(Nt(),Z[5]),Vt=function(){return c.a.createElement(_e,{title:"Confirm Info",submitButtonTitle:"Submit",header:c.a.createElement(Je,{items:[{name:"Back",route:"/"}]})},c.a.createElement(Rt,null,"Personal Info"),c.a.createElement(Et.a,null,c.a.createElement(vt.a,{id:"first_name",invalidText:"Invalid error message.",labelText:"First Name",placeholder:"Joan"})),c.a.createElement(Et.a,null,c.a.createElement(vt.a,{id:"last_name",invalidText:"Invalid error message.",labelText:"Last Name",placeholder:"Ambassador"})),c.a.createElement(Et.a,{style:{width:"50%"}},c.a.createElement(gt.a,{dateFormat:"m/d/Y",datePickerType:"single"},c.a.createElement(xt.a,{id:"dob",placeholder:"mm/dd/yyyy",labelText:"Date of Birth",type:"text"}))),c.a.createElement(Rt,null,"Address"),c.a.createElement(_t,null),c.a.createElement(Rt,null,"Contact"),c.a.createElement(Et.a,null,c.a.createElement(vt.a,{id:"email",invalidText:"Invalid error message.",labelText:"Email",placeholder:"joanambassador@email.co"})),c.a.createElement(Et.a,null,c.a.createElement(vt.a,{id:"phone",invalidText:"Invalid error message.",labelText:"Phone number",placeholder:"(123) 456-7890"})))},Dt=n(72),Mt=n(102),Bt=n(103);function Ft(){var e=Object(K.a)(["\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: flex-end;\n  align-items: center;\n"]);return Ft=function(){return e},e}function Ht(){var e=Object(K.a)(["\n  font-size: 12px;\n"]);return Ht=function(){return e},e}function Ut(){var e=Object(K.a)(["\n  font-weight: normal;\n"]);return Ut=function(){return e},e}function Lt(){var e=Object(K.a)(["\n  display: flex;\n  width: 100%;\n  padding: ",";\n  background-color: ",";\n  border-top: 1px solid ",";\n  &:hover {\n    background-color: #e5e5e5;\n    cursor: pointer;\n  }\n"]);return Lt=function(){return e},e}function Gt(){var e=Object(K.a)(["\n  margin-bottom: ",";\n"]);return Gt=function(){return e},e}function Wt(){var e=Object(K.a)(["\n  margin-top: ",";\n  margin-bottom: ",";\n"]);return Wt=function(){return e},e}var Yt=$.a.h5(Wt(),Z[7],Z[2]),Kt=$.a.p(Gt(),Z[5]),qt=$.a.div(Lt(),Z[4],ee[10],ee[20]),zt=$.a.h6(Ut()),Jt=$.a.p(Ht()),Xt=$.a.div(Ft()),$t=function(e){var t=e.name,n=e.address,a=e.id,r=e.unconfirmed,i=e.pending,o=e.remindTripler;return c.a.createElement(qt,null,c.a.createElement("div",null,c.a.createElement(zt,null,t),c.a.createElement(Jt,null,n)),c.a.createElement(Xt,null,r&&c.a.createElement(xe,{pill:!0,href:"/triplers/confirm/".concat(a)},"Add Info ",c.a.createElement(Mt.a,null)),i&&c.a.createElement(xe,{pill:!0,"data-id":a,onClick:o},"Remind")))},Zt=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Confirm that these people will ask 3 friends to vote and earn 50 dollars"),c.a.createElement(xe,{href:"/triplers/add"},"Find new Triplers",c.a.createElement(Bt.a,null)))},Qt=function(e){var t=e.unconfirmed,n=e.pending,a=e.confirmed,r=e.remindTripler;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"As a Voting Ambasssador, your task is to recruit \u201cVote Triplers\u201d from a list of family members and neighbors. A Vote Tripler is someone who agrees to remind three other people to vote in the next election."),c.a.createElement("p",null,"You will receive $X for each Vote Tripler you recruit and a $Y bonus for each Vote Tripler who goes on to become a Voting Ambassador."),c.a.createElement(xe,{href:"/triplers/add"},"Find new Triplers",c.a.createElement(Bt.a,null)),c.a.createElement(Yt,null,"Your possible Vote Triplers"),c.a.createElement(Kt,null,"Add information for a Tripler. We\u2019ll send them a text message to confirm."),t&&t.map((function(e){return c.a.createElement($t,{id:e.id,name:"".concat(e.first_name," ").concat(e.last_name),address:"".concat(e.address.address1," ").concat(e.address.city," ").concat(e.address.state),unconfirmed:!0,onClick:function(){}})})),c.a.createElement(Yt,null,"Your unconfirmed Vote Triplers"),c.a.createElement(Kt,null,"These possible Vote Triplers have not yet confirmed their identity."),n&&n.map((function(e){return c.a.createElement($t,{id:e.id,name:"".concat(e.first_name," ").concat(e.last_name),address:"".concat(e.address.address1," ").concat(e.address.city," ").concat(e.address.state),onClick:function(){},pending:!0,remindTripler:r})})),c.a.createElement(Yt,null,"Your confirmed Vote Triplers"),c.a.createElement(Kt,null,"Once your ",c.a.createElement(Dt.a,{href:"#"},"payment method is set up"),", you\u2019ll receive payment for these Vote Triplers"),a&&a.map((function(e){return c.a.createElement($t,{name:"".concat(e.first_name," ").concat(e.last_name),address:"".concat(e.address.address1," ").concat(e.address.city," ").concat(e.address.state),onClick:function(){}})})))},en=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),n=t[0],a=t[1],i=c.a.useContext(W).api;Object(r.useEffect)((function(){(function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.fetchTriplers();case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var o=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.sendReminder(t.target.dataset.id);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n?c.a.createElement(tn,{triplers:n,remindTripler:o}):c.a.createElement(Ne,null)},tn=function(e){var t=e.triplers,n=e.remindTripler,a=t.filter((function(e){return"confirmed"===e.status})),r=t.filter((function(e){return"pending"===e.status})),i=t.filter((function(e){return"unconfirmed"===e.status}));return c.a.createElement(_e,{title:"My Vote Triplers",header:c.a.createElement(Je,{items:[{name:"Home",route:"/"},{name:"Triplers",route:"/"}]})},t?c.a.createElement(Qt,{unconfirmed:i,pending:r,confirmed:a,remindTripler:n}):c.a.createElement(Zt,null))},nn=n(105),an=n(109),rn=n(104);function cn(){var e=Object(K.a)(["\n  padding-top: 0 !important;\n  vertical-align: middle !important;\n"]);return cn=function(){return e},e}function on(){var e=Object(K.a)(["\n  min-width: 0;\n  width: 100%;\n  margin-top: ",";\n"]);return on=function(){return e},e}var ln=nn.a.TableContainer,un=nn.a.Table,sn=nn.a.TableHead,dn=nn.a.TableRow,mn=nn.a.TableBody,pn=nn.a.TableCell,fn=nn.a.TableHeader,bn=nn.a.TableToolbar,hn=nn.a.TableBatchActions,En=nn.a.TableBatchAction,vn=(nn.a.TableToolbarContent,nn.a.TableToolbarSearch,nn.a.TableSelectAll),gn=nn.a.TableSelectRow,xn=Object($.a)(ln)(on(),Z[7]),Tn=Object($.a)(pn)(cn()),On=function(e){var t,n=e.headers,a=e.rows,r=e.handleSelected;return c.a.createElement(nn.a,{headers:n,render:(t=r,function(e){var n=e.rows,a=e.headers,r=e.getHeaderProps,i=e.getSelectionProps,o=e.getToolbarProps,l=e.getBatchActionProps,u=e.getRowProps,s=(e.onInputChange,e.selectedRows),d=e.getTableProps,m=e.getTableContainerProps;return c.a.createElement(xn,m(),c.a.createElement(bn,o(),c.a.createElement(hn,l(),c.a.createElement(En,{renderIcon:rn.a,iconDescription:"Download the selected rows",onClick:t(s)},"Add"))),c.a.createElement(un,Object.assign({},d(),{size:"tall"}),c.a.createElement(sn,null,c.a.createElement(dn,null,c.a.createElement(vn,i()),a.map((function(e){return c.a.createElement(fn,r({header:e}),e.header)})))),c.a.createElement(mn,null,n.map((function(e){return c.a.createElement(dn,Object.assign({key:e.id},u({row:e})),c.a.createElement(gn,i({row:e})),c.a.createElement(Tn,{colSpan:100},e.cells.map((function(e){return c.a.createElement("p",{key:e.id},e.value)}))))})))),c.a.createElement(an.a,{backwardText:"Previous page",forwardText:"Next page",itemsPerPageText:"Show:",page:1,pageNumberText:"Page Number",pageSize:10,pageSizes:[10,20,30,40,50],totalItems:103}))}),rows:a})},jn=function(){var e=Object(l.g)(),t=Object(r.useState)(null),n=Object(s.a)(t,2),a=n[0],i=n[1],o=Object(r.useState)(!1),u=Object(s.a)(o,2),d=u[0],f=u[1],b=c.a.useContext(W).api;Object(r.useEffect)((function(){(function(){var e=Object(p.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.fetchFreeTriplers();case 2:t=e.sent,n=t.data.map((function(e){return{id:e.id,name:e.first_name+" "+e.last_name,address:e.address.address1+" "+e.address.city+" "+e.address.state}})),i(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return a?c.a.createElement(wn,{triplers:a,claimTriplers:function(t){return Object(p.a)(m.a.mark((function n(){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return f(!0),n.next=3,b.claimTriplers(t.map((function(e){return e.id})));case 3:f(!1),e.push("/triplers");case 5:case"end":return n.stop()}}),n)})))},loading:d}):c.a.createElement(Ne,null)},wn=function(e){var t=e.triplers,n=e.claimTriplers;e.loading;return c.a.createElement(_e,{title:"Add Vote Triplers",header:c.a.createElement(Je,{items:[{name:"Home",route:"/"},{name:"Triplers",route:"/"},{name:"Add",route:"/"}]})},c.a.createElement("p",null,"Here's a list of people you may know. Put a check next to anyone you'd be willing to ask to be a Vote Tripler."),c.a.createElement(On,{headers:[{header:"Eligible neighbors",key:"name"},{header:"",key:"address"}],rows:t,handleSelected:n}))},yn=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(!1),o=Object(s.a)(i,2),u=o[0],d=o[1],f=Object(l.h)().triplerId,b=c.a.useContext(W).api;Object(r.useEffect)((function(){(function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.fetchTripler(f);case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=function(){var e=Object(p.a)(m.a.mark((function e(t,n){var a,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,b.confirmTriplers(t,n);case 3:return a=e.sent,r=a.error,c=a.data,d(!1),e.abrupt("return",{error:r,data:c});case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return n?c.a.createElement(kn,{tripler:n,confirmTriplers:h,loading:u}):c.a.createElement(Ne,null)},kn=function(e){var t=e.tripler,n=e.confirmTriplers,a=e.loading,i=Object(l.g)(),o=Object(r.useState)(!1),u=Object(s.a)(o,2),d=u[0],f=u[1],b=function(){var e=Object(p.a)(m.a.mark((function e(a){var r,c,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),r=new FormData(a.target),e.next=4,n(t.id,{phone:r.get("phone"),triplees:[r.get("triplee1"),r.get("triplee2"),r.get("triplee3")],address:t.address});case 4:if(c=e.sent,!(o=c.error)){e.next=8;break}return e.abrupt("return",f(o.msg));case 8:i.push("/triplers");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(_e,{title:"Tripler: ".concat(t.first_name),onClickSubmit:b,header:c.a.createElement(Je,{items:[{name:"Home",route:"/"},{name:"Triplers",route:"/"},{name:"Confirm",route:"/"}]})},c.a.createElement("p",null,"Add the names of three Voters the Vote Tripler will remind to vote:"),c.a.createElement(Et.a,null,c.a.createElement(vt.a,{name:"triplee1",invalidText:"Invalid error message.",labelText:"Name 1",placeholder:"Name",required:!0})),c.a.createElement(Et.a,null,c.a.createElement(vt.a,{name:"triplee2",invalidText:"Invalid error message.",labelText:"Name 2",placeholder:"Name",required:!0})),c.a.createElement(Et.a,null,c.a.createElement(vt.a,{name:"triplee3",invalidText:"Invalid error message.",labelText:"Name 3",placeholder:"Name",required:!0})),c.a.createElement("p",null,"Add the Vote Tripler's phone number so we can confirm his or her identity and send you your payment!"),c.a.createElement(Et.a,null,c.a.createElement(vt.a,{name:"phone",invalidText:"Invalid error message.",labelText:"Melody\u2019s Phone Number",placeholder:"123-456-7890",required:!0})),d&&c.a.createElement(Te.a,{kind:"error",icondescription:"Dismiss notification",subtitle:d,title:"Oops!"}),c.a.createElement(xe,{type:"submit",loading:a},"Add"),c.a.createElement(xe,{small:!0,kind:"tertiary",href:"/triplers"},"Go back to My Vote Triplers"))},An=function(e){var t=e.authenticated,n=e.path,a=e.user;return c.a.createElement(l.b,{path:n,render:function(e){return!0===t?a&&a.signup_completed?c.a.createElement(l.a,{to:{pathname:"/triplers",state:{from:e.location}}}):c.a.createElement(l.a,{to:{pathname:"/ambassador",state:{from:e.location}}}):c.a.createElement(l.a,{to:{pathname:"/login",state:{from:e.location}}})}})},Cn=function(e){var t=e.component,n=e.authenticated,a=e.path,r=e.user;return c.a.createElement(l.b,{path:a,render:function(e){return!0===n?r&&r.signup_completed?c.a.createElement(t,e):c.a.createElement(l.a,{to:{pathname:"/ambassador",state:{from:e.location}}}):c.a.createElement(l.a,{to:{pathname:"/login",state:{from:e.location}}})}})},Pn=function(e){var t=e.component,n=e.authenticated,a=e.path;return c.a.createElement(l.b,{path:a,render:function(e){return!0===n?c.a.createElement(t,e):c.a.createElement(l.a,{to:{pathname:"/login",state:{from:e.location}}})}})},_n=function(){var e=c.a.useContext(W),t=e.authenticated,n=e.loading,a=e.user;return n?c.a.createElement(Ne,null):c.a.createElement(u.a,null,c.a.createElement(l.d,null,c.a.createElement(Pn,{path:"/ambassador",component:ht,exact:!0,authenticated:t}),c.a.createElement(Pn,{path:"/ambassador/signup",component:tt,exact:!0,authenticated:t}),c.a.createElement(Pn,{path:"/ambassador/personal_info",component:Tt,exact:!0,authenticated:t}),c.a.createElement(Pn,{path:"/ambassador/address",component:St,exact:!0,authenticated:t}),c.a.createElement(Pn,{path:"/ambassador/contact",component:It,exact:!0,authenticated:t}),c.a.createElement(Pn,{path:"/ambassador/confirm",component:Vt,exact:!0,authenticated:t}),c.a.createElement(Cn,{path:"/triplers",component:en,exact:!0,authenticated:t,user:a}),c.a.createElement(Cn,{path:"/triplers/add",component:jn,exact:!0,authenticated:t,user:a}),c.a.createElement(Cn,{path:"/triplers/confirm/:triplerId",component:yn,exact:!0,authenticated:t,user:a}),c.a.createElement(l.b,{path:"/login",component:He}),c.a.createElement(l.b,{path:"/jwt",component:Ue}),c.a.createElement(An,{authenticated:t,user:a})))},Sn=function(){return c.a.createElement(Y,null,c.a.createElement(_n,null))},In=function(){return c.a.createElement(Sn,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(In,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.f38e4dcb.chunk.js.map