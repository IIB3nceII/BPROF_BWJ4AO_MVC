(this["webpackJsonpmro-webapp"]=this["webpackJsonpmro-webapp"]||[]).push([[0],{106:function(e,t,c){},107:function(e,t,c){},133:function(e,t,c){},134:function(e,t,c){},139:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(8),r=c.n(n),i=(c(106),c(107),c(23)),l=c(11),o=c(24),d=c.p+"static/media/pickerbg.55163799.jpg",j=c(172),b=c(173),m=c(94),u=c(171),h=c.p+"static/media/olympialogo1.ef1c5f6a.png",x=c(80),g=c.n(x),p=c(85),O=c.n(p),f=c(86),y=c.n(f),v=c(87),N=c.n(v),w=c(88),S=c.n(w),k=c(2);var I=function(){return Object(k.jsxs)("div",{className:"flex justify-around items-center h-48 text-gray-500 bg-gray-50",children:[Object(k.jsxs)("div",{className:"flex w-1/2 items-center text-center",children:[Object(k.jsx)("p",{className:"pr-5 ml-auto cursor-pointer",children:"Contacts"}),Object(k.jsx)("span",{className:"h-8 bg-gray-500",style:{width:"1px"}}),Object(k.jsx)("p",{className:"pr-5 pl-5 cursor-pointer",children:"Terms and Conditions"}),Object(k.jsx)("span",{className:"h-8 bg-gray-500",style:{width:"1px"}}),Object(k.jsx)("p",{className:"pl-5 mr-auto cursor-pointer",children:"Privacy Policy"})]}),Object(k.jsx)("div",{className:"cursor-pointer",children:Object(k.jsx)("img",{className:"h-24",src:h,alt:"Olympia logo",loading:"lazy"})}),Object(k.jsxs)("div",{className:"flex w-1/2",children:[Object(k.jsx)("div",{className:"pr-5 ml-auto cursor-pointer",children:Object(k.jsx)(g.a,{})}),Object(k.jsx)("div",{className:"pr-5 cursor-pointer",children:Object(k.jsx)(O.a,{})}),Object(k.jsx)("div",{className:"pr-5 cursor-pointer",children:Object(k.jsx)(y.a,{})}),Object(k.jsx)("div",{className:"pr-5 cursor-pointer",children:Object(k.jsx)(N.a,{})}),Object(k.jsx)("div",{className:"mr-auto cursor-pointer",children:Object(k.jsx)(S.a,{})})]})]})},M=c(56),E=c(18),C=c(12),P=c(90),B=c.n(P).a.create({baseURL:"https://localhost:5001"}),A=function(e){return"".concat(e,"_PENDING")},L=function(e){return"".concat(e,"_FULFILLED")},R=function(e){return"".concat(e,"_REJECTED")},T="authentication/LOGIN",U="authentication/REGISTER",q="authentication/LOGOUT",D="authentication/ERROR_MESSAGE",F={loading:!1,isAuthenticated:!1,loginSuccess:!1,loginError:!1,account:{},errorMessage:null,sessionHasBeenFetched:!1},z=Object(m.a)({palette:{primary:{main:"#d32f2f"}}});var W={register:function(e,t){return function(c,a){c({type:U,payload:B.post("/Auth",{UserName:e,Password:t})})}}},_=Object(E.connect)((function(e){return{account:e.authentication.account}}),W)((function(e){var t=Object(a.useState)(""),c=Object(o.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)(""),l=Object(o.a)(r,2),m=l[0],h=l[1],x=Object(a.useState)(!1),g=Object(o.a)(x,2),p=g[0],O=g[1],f=Object(a.useState)(!1),y=Object(o.a)(f,2),v=y[0],N=y[1];return Object(k.jsxs)("div",{className:"flex-col bg-gray-50",style:{height:"90vh"},children:[Object(k.jsxs)("div",{className:"flex h-full",children:[Object(k.jsx)("div",{className:"w-1/2 bg-local bg-no-repeat bg-cover",style:{backgroundImage:"url('".concat(d,"')")},children:Object(k.jsx)("div",{className:"h-full w-full bg-red-900 bg-opacity-60"})}),Object(k.jsxs)("div",{className:"flex-col w-1/2 my-24 items-center",children:[Object(k.jsx)("div",{children:Object(k.jsx)("h3",{children:"Join to the legend."})}),Object(k.jsx)("div",{className:"w-full px-12 mt-48",children:Object(k.jsx)(u.a,{theme:z,children:Object(k.jsx)(j.a,{label:"Username",style:{width:"100%"},onChange:function(e){return n(e.target.value)}})})}),Object(k.jsxs)("div",{className:"relative w-full px-12 mt-12",onMouseLeave:function(){return N(!1)},children:[Object(k.jsx)(u.a,{theme:z,children:Object(k.jsx)(j.a,{label:"Password",type:p?"text":"password",style:{width:"100%"},onChange:function(e){return h(e.target.value)},onClick:function(){return N(!0)}})}),Object(k.jsx)(M.a,{className:"w-5 absolute right-12 top-1/4 cursor-pointer",onMouseDown:function(){return O(!0)},onMouseUp:function(){return O(!1)},style:{color:"".concat(v?"#d32f2f":"black")}})]}),Object(k.jsx)("div",{className:"w-full px-12 mt-12 items-center text-center",children:Object(k.jsx)(u.a,{theme:z,children:Object(k.jsx)(b.a,{variant:"outlined",style:{outline:"none"},onClick:function(){return e.register(s,m)},children:"Register"})})}),Object(k.jsx)("div",{className:"w-full px-12 mt-12 items-center text-center",children:Object(k.jsxs)("p",{children:["If you don't have an account please"," ",Object(k.jsx)(i.b,{to:"/register",className:"cursor-pointer hover:underline",children:"register!"})]})})]})]}),Object(k.jsx)(I,{}),"s"]})})),G=Object(m.a)({palette:{primary:{main:"#d32f2f"}}});var J={login:function(e,t){return function(c,a){c({type:T,payload:B.put("/Auth",{UserName:e,Password:t})})}}},H=Object(E.connect)((function(e){return{account:e.authentication.account}}),J)((function(e){var t=Object(a.useState)(""),c=Object(o.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)(""),l=Object(o.a)(r,2),m=l[0],h=l[1],x=Object(a.useState)(!1),g=Object(o.a)(x,2),p=g[0],O=g[1],f=Object(a.useState)(!1),y=Object(o.a)(f,2),v=y[0],N=y[1];return Object(a.useEffect)((function(){console.log(e.account)}),[e.account]),Object(k.jsxs)("div",{className:"flex-col bg-gray-50",style:{height:"90vh"},children:[Object(k.jsxs)("div",{className:"flex h-full",children:[Object(k.jsx)("div",{className:"w-1/2 bg-local bg-no-repeat bg-cover",style:{backgroundImage:"url('".concat(d,"')")},children:Object(k.jsx)("div",{className:"h-full w-full bg-red-900 bg-opacity-60"})}),Object(k.jsxs)("div",{className:"flex-col w-1/2 my-24 items-center",children:[Object(k.jsx)("div",{className:"w-full px-12 mt-48",children:Object(k.jsx)(u.a,{theme:G,children:Object(k.jsx)(j.a,{label:"Username",style:{width:"100%"},onChange:function(e){return n(e.target.value)}})})}),Object(k.jsxs)("div",{className:"relative w-full px-12 mt-12",onMouseLeave:function(){return N(!1)},children:[Object(k.jsx)(u.a,{theme:G,children:Object(k.jsx)(j.a,{label:"Password",type:p?"text":"password",style:{width:"100%"},onChange:function(e){return h(e.target.value)},onClick:function(){return N(!0)}})}),Object(k.jsx)(M.a,{className:"w-5 absolute right-12 top-1/4 cursor-pointer",onMouseDown:function(){return O(!0)},onMouseUp:function(){return O(!1)},style:{color:"".concat(v?"#d32f2f":"black")}})]}),Object(k.jsx)("div",{className:"w-full px-12 mt-12 items-center text-center",children:Object(k.jsx)(u.a,{theme:G,children:Object(k.jsx)(b.a,{variant:"outlined",style:{outline:"none"},onClick:function(){return e.login(s,m)},children:"Sign In"})})}),Object(k.jsx)("div",{className:"w-full px-12 mt-12 items-center text-center",children:Object(k.jsxs)("p",{children:["If you don't have an account please"," ",Object(k.jsx)(i.b,{to:"/register",className:"cursor-pointer hover:underline",children:"register!"})]})})]})]}),Object(k.jsx)(I,{})]})})),K=(c(133),c.p+"static/media/2020-Olympia-bg.c012c217.jpg"),Q=c.p+"static/media/mop01.9c4785ad.jpg",V=c.p+"static/media/wmbikini01.62fc79fa.jpg",X=c.p+"static/media/classic01.5ab6c0d5.jpg",Y=c.p+"static/media/mens01.f74a4055.jpg",Z=c.p+"static/media/wmsp01.f4ddc3ab.jpg",$=c.p+"static/media/brendonprofp.a46c10e2.jpg",ee=c.p+"static/media/ArnoldProfilePic.09631b48.jpg",te=c.p+"static/media/arnold01.283e75d3.jpg",ce=c(55);var ae=function(){return Object(k.jsxs)("div",{className:"bg-gray-50 items-center h-screen",children:[Object(k.jsx)("div",{className:"h-4/6 bg-local bg-no-repeat bg-cover",style:{backgroundImage:"url('".concat(K,"')")},children:Object(k.jsx)("div",{className:"bg-red-900 bg-opacity-60 h-full",children:Object(k.jsxs)("div",{className:"w-8/12 h-full ml-auto mr-auto text-white text-left flex-wrap",children:[Object(k.jsx)("h3",{className:"text-3xl pt-28 ml-2",children:"Welcome to the"}),Object(k.jsx)("h1",{className:"text-8xl mb-10",children:"Mr. Olympia"}),Object(k.jsx)("p",{className:"w-1/2 text-lg",children:"Mr. Olympia is the title awarded to the winner of the professional men's bodybuilding contest at Joe Weider's Olympia Fitness & Performance Weekend\u2014an international bodybuilding competition that is held annually by the International Federation of BodyBuilding & Fitness (IFBB)."})]})})}),Object(k.jsx)("div",{className:"items-center text-center bg-gray-50",children:Object(k.jsxs)("div",{className:"w-8/12 ml-auto mr-auto",style:{height:"150vh"},children:[Object(k.jsxs)("div",{className:"mt-10 mb-28",children:[Object(k.jsx)("h3",{className:"text-gray-500 text-3xl font-medium",children:"Check"}),Object(k.jsx)("h1",{className:"text-gray-500 text-4xl font-medium",children:"The Mr. Olympia Categories"})]}),Object(k.jsxs)("div",{className:"grid grid-cols-3 gap-4 text-white",children:[Object(k.jsx)("div",{className:"rounded-lg bg-local bg-no-repeat bg-cover",style:{backgroundImage:"url('".concat(Q,"')")},children:Object(k.jsxs)("div",{className:"flex-col bg-red-600 bg-opacity-50 shadow-2xl rounded-lg",style:{height:"50vh"},children:[Object(k.jsx)("span",{className:"h-24",children:"\xa0"}),Object(k.jsx)("h1",{className:"mx-auto mt-12 text-4xl font-medium",children:"Men\u2019s Open"}),Object(k.jsx)("p",{className:"mx-auto mt-40 text-lg font-medium",children:"All the top players participate here with their weights starting from 300 lbs or 137 kgs."})]})}),Object(k.jsx)("div",{className:"rounded-lg bg-local bg-no-repeat bg-cover",style:{backgroundImage:"url('".concat(V,"')")},children:Object(k.jsxs)("div",{className:"flex-col bg-red-600 bg-opacity-50 shadow-2xl rounded-lg",style:{height:"50vh"},children:[Object(k.jsx)("span",{className:"h-24",children:"\xa0"}),Object(k.jsx)("h1",{className:"mx-auto mt-12 text-4xl font-medium",children:"Women's Bikini"}),Object(k.jsx)("p",{className:"mx-auto mt-40 text-lg font-medium",children:"The IFBB WOS Ms. Olympia is both the highest ranking professional female bodybuilding competition and the title of the winner of the competition."})]})}),Object(k.jsx)("div",{className:"rounded-lg bg-local bg-no-repeat bg-cover",style:{backgroundImage:"url('".concat(X,"')")},children:Object(k.jsxs)("div",{className:"flex-col bg-red-600 bg-opacity-50 shadow-2xl rounded-lg",style:{height:"50vh"},children:[Object(k.jsx)("span",{className:"h-24",children:"\xa0"}),Object(k.jsx)("h1",{className:"mx-auto mt-12 text-4xl font-medium",children:"Classic Physique"}),Object(k.jsx)("p",{className:"mx-auto mt-40 text-lg font-medium",children:"This division is targeted to men who want to build their muscles and size above the normal Men\u2019s Physique limits (discussed later), but not to the extent of Open Division Bodybuilding."})]})}),Object(k.jsx)("div",{className:"rounded-lg bg-local bg-no-repeat bg-cover",style:{backgroundImage:"url('".concat(Y,"')")},children:Object(k.jsxs)("div",{className:"flex-col bg-red-600 bg-opacity-50 shadow-2xl rounded-lg",style:{height:"50vh"},children:[Object(k.jsx)("span",{className:"h-24",children:"\xa0"}),Object(k.jsx)("h1",{className:"mx-auto mt-12 text-4xl font-medium",children:"Men\u2019s Physique"}),Object(k.jsx)("p",{className:"mx-auto mt-40 text-lg font-medium",children:"The judges pay close attention to Athletic, Less Muscularity and an Aesthetic physique."})]})}),Object(k.jsx)("div",{className:"rounded-lg bg-local bg-no-repeat bg-cover",style:{backgroundImage:"url('".concat(Z,"')")},children:Object(k.jsxs)("div",{className:"flex-col bg-red-600 bg-opacity-50 shadow-2xl rounded-lg",style:{height:"50vh"},children:[Object(k.jsx)("span",{className:"h-24",children:"\xa0"}),Object(k.jsx)("h1",{className:"mx-auto mt-12 text-4xl font-medium",children:"Women\u2019s Physique"}),Object(k.jsx)("p",{className:"mx-auto mt-40 text-lg font-medium",children:"Competitors should display a toned, athletic physique showcasing femininity, muscle tone, beauty/flow of physique."})]})}),Object(k.jsx)("div",{className:"rounded-lg bg-local bg-no-repeat bg-cover",style:{backgroundImage:"url('".concat($,"')")},children:Object(k.jsxs)("div",{className:"flex-col bg-red-600 bg-opacity-50 shadow-2xl rounded-lg",style:{height:"50vh"},children:[Object(k.jsx)("span",{className:"h-24",children:"\xa0"}),Object(k.jsx)("h1",{className:"mx-auto mt-12 text-4xl font-medium",children:"Mr. Olympia"}),Object(k.jsx)("p",{className:"mx-auto mt-40 text-lg font-medium",children:"The requirements for this class, just as the name implies, is that the athlete needs to weigh up to and under 212 Lb (i.e., 96.6 kg)."})]})})]})]})}),Object(k.jsx)("div",{className:"flex bg-fixed bg-no-repeat bg-cover text-white",style:{backgroundImage:"url('".concat(te,"')"),height:"600px"},children:Object(k.jsx)("div",{className:"bg-red-900 bg-opacity-60",children:Object(k.jsxs)("div",{className:"w-8/12 mx-auto",children:[Object(k.jsxs)("div",{className:"flex-col items-center text-center",children:[Object(k.jsx)(ce.b,{className:"h-32 ml-auto mr-auto"}),Object(k.jsx)("p",{className:"m-5 font-normal text-2xl",children:"\u201cNot many people understand what a pump is. It must be experienced to be understood. It is the greatest feeling that I get. I search for this pump because it means that that my muscles will grow when I get it. I get a pump when the blood is running into my muscles. They become really tight with blood. Like the skin is going to explode any minute. It\u2019s like someone putting air in my muscles. It blows up. It feels fantastic.\u201d"})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:"h-10/12",children:Object(k.jsx)("img",{className:"w-32 h-32 rounded-full mx-auto",src:ee,alt:"Arnold Schwarzenegger",loading:"lazy"})}),Object(k.jsxs)("h1",{className:"text-center mt-5 font-normal",children:["Arnold Schwarzenegger ",Object(k.jsx)("br",{}),"(7 Mr Olympia wins)"]})]})]})})}),Object(k.jsx)(I,{})]})};var se=function(){return Object(k.jsx)("div",{className:"view-routes",children:Object(k.jsxs)(l.c,{children:[Object(k.jsx)(l.a,{path:"/register",component:_}),Object(k.jsx)(l.a,{path:"/sign-in",component:H}),Object(k.jsx)(l.a,{path:"/",component:ae})]})})},ne=(c(134),"appManager/OPEN_SIDEBAR"),re="appManager/CLOSE_SIDEBAR",ie={showSidebar:!1},le=function(){return{type:ne}},oe=function(){return{type:ne}};var de={setSidebarOpen:le,setSidebarClose:oe},je=Object(E.connect)((function(e){return{sidebarState:e.appManager.showSidebar}}),de)((function(e){return Object(k.jsxs)("div",{className:"sticky top-0 bg-gray-50 h-24 flex justify-between ms:justify-between",children:[Object(k.jsxs)("div",{className:"menu flex w-40 p-6 items-center",children:[Object(k.jsx)(ce.a,{className:"h-10 text-gray-500 cursor-pointer transition duration-100 transform"}),Object(k.jsx)("div",{className:"sidebar bg-gray-50",children:Object(k.jsxs)("ul",{className:"h-10 ml-7 text-4xl font-bold",children:[Object(k.jsx)("li",{className:"mt-32",children:Object(k.jsx)("p",{className:"cursor-pointer",children:"Create new"})}),Object(k.jsx)("li",{children:Object(k.jsx)("p",{className:"cursor-pointer",children:"Edit"})}),Object(k.jsx)("li",{children:Object(k.jsx)("p",{className:"cursor-pointer",children:"History"})}),Object(k.jsx)("li",{className:"mt-12 text-base font-thin",children:Object(k.jsx)("p",{className:"cursor-pointer",children:"+ Info"})})]})})]}),Object(k.jsx)("div",{className:"flex px-6 sm:ml-10 sm:mr-10 items-center",children:Object(k.jsx)(i.b,{to:"/",children:Object(k.jsx)("img",{src:h,alt:"Olympia logo",loading:"lazy",className:"w-24 sm:w-32 cursor-pointer"})})}),Object(k.jsx)("div",{className:"flex w-40 items-center p-6",children:Object(k.jsx)(i.b,{to:"/sign-in",children:Object(k.jsx)("p",{className:"ml-10 text-xs sm:text-lg text-gray-500 cursor-pointer hover:underline",children:"Sign in"})})})]})}));var be={setSidebarOpen:le,setSidebarClose:oe},me=Object(E.connect)((function(e){return{sidebarState:e.appManager.showSidebar}}),be)((function(e){return Object(k.jsx)(i.a,{children:Object(k.jsxs)("div",{className:"app",children:[Object(k.jsx)(je,{}),Object(k.jsx)(se,{})]})})})),ue=c(95),he=c(26),xe=c(91),ge=c(92),pe=c(93),Oe=(c(138),Object(he.combineReducers)({appManager:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return Object(C.a)(Object(C.a)({},e),{},{showSidebar:!0});case re:return Object(C.a)(Object(C.a)({},e),{},{showSidebar:!1});default:return e}},authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A(T):return Object(C.a)(Object(C.a)({},e),{},{loading:!0});case R(T):return Object(C.a)(Object(C.a)({},F),{},{errorMessage:t.payload,loginError:!0});case L(T):return Object(C.a)(Object(C.a)({},e),{},{account:{userName:t.payload.data.username,token:t.payload.data.token},loading:!1,loginError:!1,loginSuccess:!0});case A(U):return Object(C.a)(Object(C.a)({},e),{},{loading:!0});case R(U):return Object(C.a)(Object(C.a)({},F),{},{errorMessage:t.payload,loginError:!0});case L(U):return Object(C.a)(Object(C.a)({},e),{},{account:{userName:t.payload.data.username,token:t.payload.data.token},loading:!1,loginError:!1,loginSuccess:!0});case q:return Object(C.a)(Object(C.a)({},F),{},{account:{}});case D:return Object(C.a)({},F);default:return e}}})),fe=function(e,t){return Oe(e,t)},ye=[ge.a,Object(pe.loadingBarMiddleware)(),xe.a],ve=function(e){return Object(he.compose)(he.applyMiddleware.apply(void 0,ye.concat(Object(ue.a)(e))))},Ne=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(he.createStore)(fe,e,ve(t))}();r.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(E.Provider,{store:Ne,children:Object(k.jsx)(me,{})})}),document.getElementById("root"))}},[[139,1,2]]]);
//# sourceMappingURL=main.81dac31b.chunk.js.map