(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{117:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(36),a=n.n(c),i=n(24),s=n(13),o=n(57),l=n(18),u=n(39),d=(n(75),n(58)),b=n.n(d),j=n(5),p={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"},O={currentUser:null,error:null},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.SIGN_IN_SUCCESS:return Object(j.a)(Object(j.a)({},e),{},{currentUser:t.payload,error:null});case p.SIGN_OUT_SUCCESS:return Object(j.a)(Object(j.a)({},e),{},{currentUser:null,error:null});case p.SIGN_IN_FAILURE:case p.SIGN_OUT_FAILURE:case p.SIGN_UP_FAILURE:return Object(j.a)(Object(j.a)({},e),{},{error:t.payload});default:return e}},f={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_CART:"CLEAR_CART"},h=n(64),x=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(h.a)(e),[Object(j.a)(Object(j.a)({},t),{},{quantity:1})])},v=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity-1}):e}))},g={hidden:!0,cartItems:[]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.TOGGLE_CART_HIDDEN:return Object(j.a)(Object(j.a)({},e),{},{hidden:!e.hidden});case f.ADD_ITEM:return Object(j.a)(Object(j.a)({},e),{},{cartItems:x(e.cartItems,t.payload)});case f.REMOVE_ITEM:return Object(j.a)(Object(j.a)({},e),{},{cartItems:v(e.cartItems,t.payload)});case f.CLEAR_ITEM_FROM_CART:return Object(j.a)(Object(j.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case f.CLEAR_CART:return Object(j.a)(Object(j.a)({},e),{},{cartItems:[]});default:return e}},E={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;return t.type,e},_={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"},N={collections:null,isFetching:!1,errorMessage:void 0},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.FETCH_COLLECTIONS_START:return Object(j.a)(Object(j.a)({},e),{},{isFetching:!0});case _.FETCH_COLLECTIONS_SUCCESS:return Object(j.a)(Object(j.a)({},e),{},{isFetching:!1,collections:t.payload});case _.FETCH_COLLECTIONS_FAILURE:return Object(j.a)(Object(j.a)({},e),{},{isFetching:!1,errorMessage:t.payload});default:return e}},C={key:"root",storage:b.a,whitelist:["cart"]},w=Object(l.b)({user:m,cart:S,directory:I,shop:y}),T=Object(u.a)(C,w),U=n(65),k=n(4),R=n.n(k),A=n(9),G=n(30),L=n(33);n(122),n(79);L.a.initializeApp({apiKey:"AIzaSyDa1J6wWKUHUuZMC_nx5FZRRpHp94NsHiU",authDomain:"crwn-db-7e3fa.firebaseapp.com",projectId:"crwn-db-7e3fa",storageBucket:"crwn-db-7e3fa.appspot.com",messagingSenderId:"371567924211",appId:"1:371567924211:web:658c16da420a64732e7886",measurementId:"G-VSDTR4FGPG"});var P=function(){var e=Object(G.a)(R.a.mark((function e(t,n){var r,c,a,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=M.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return c=t.displayName,a=t.email,i=new Date,e.prev=9,e.next=12,r.set(Object(j.a)({displayName:c,email:a,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),F=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,r=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:r}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})},H=L.a.auth(),M=L.a.firestore(),D=new L.a.auth.GoogleAuthProvider;D.setCustomParameters({prompt:"select_account"});L.a;var q=function(){return{type:_.FETCH_COLLECTIONS_START}},V=function(e){return{type:_.FETCH_COLLECTIONS_SUCCESS,payload:e}},z=function(e){return{type:_.FETCH_COLLECTIONS_FAILURE,payload:e}},B=R.a.mark(X),K=R.a.mark(J),W=R.a.mark(Y);function X(){var e,t,n;return R.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,console.log("i am fired");case 2:return r.prev=2,e=M.collection("collections"),r.next=6,e.get();case 6:return t=r.sent,r.next=9,Object(A.b)(F,t);case 9:return n=r.sent,r.next=12,Object(A.c)(V(n));case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(2),r.next=18,Object(A.c)(z(r.t0.message));case 18:case"end":return r.stop()}}),B,null,[[2,14]])}function J(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.d)(_.FETCH_COLLECTIONS_START,X);case 2:case"end":return e.stop()}}),K)}function Y(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.a)([Object(A.b)(J)]);case 2:case"end":return e.stop()}}),W)}var Z=function(e){return{type:p.SIGN_IN_FAILURE,payload:e}},Q=function(e){var t=e.user,n=e.additionalData;return{type:p.SIGN_UP_SUCCESS,payload:{user:t,additionalData:n}}},$=R.a.mark(je),ee=R.a.mark(pe),te=R.a.mark(Oe),ne=R.a.mark(me),re=R.a.mark(fe),ce=R.a.mark(he),ae=R.a.mark(xe),ie=R.a.mark(ve),se=R.a.mark(ge),oe=R.a.mark(Se),le=R.a.mark(Ee),ue=R.a.mark(Ie),de=R.a.mark(_e),be=R.a.mark(Ne);function je(e,t){var n,r;return R.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(A.b)(P,e,t);case 3:return n=c.sent,c.next=6,n.get();case 6:return r=c.sent,c.next=9,Object(A.c)((a=Object(j.a)({id:r.id},r.data()),{type:p.SIGN_IN_SUCCESS,payload:a}));case 9:c.next=15;break;case 11:return c.prev=11,c.t0=c.catch(0),c.next=15,Object(A.c)(Z(c.t0));case 15:case"end":return c.stop()}var a}),$,null,[[0,11]])}function pe(){var e,t;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,H.signInWithPopup(D);case 3:return e=n.sent,t=e.user,n.next=7,je(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(A.c)(Z(n.t0));case 13:case"end":return n.stop()}}),ee,null,[[0,9]])}function Oe(e){var t,n,r,c,a;return R.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,r=t.password,i.prev=1,i.next=4,H.signInWithEmailAndPassword(n,r);case 4:return c=i.sent,a=c.user,i.next=8,je(a);case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(A.c)(Z(i.t0));case 14:case"end":return i.stop()}}),te,null,[[1,10]])}function me(){var e;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,t){var n=H.onAuthStateChanged((function(t){n(),e(t)}),t)}));case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,je(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(A.c)(Z(t.t0));case 14:case"end":return t.stop()}}),ne,null,[[0,10]])}function fe(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.signOut();case 3:return e.next=5,Object(A.c)({type:p.SIGN_OUT_SUCCESS});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(A.c)((t=e.t0,{type:p.SIGN_OUT_FAILURE,payload:t}));case 11:case"end":return e.stop()}var t}),re,null,[[0,7]])}function he(e){var t,n,r,c,a,i;return R.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,n=t.email,r=t.password,c=t.displayName,s.prev=1,s.next=4,H.createUserWithEmailAndPassword(n,r);case 4:return a=s.sent,i=a.user,s.next=8,Object(A.c)(Q({user:i,additionalData:{displayName:c}}));case 8:s.next=14;break;case 10:return s.prev=10,s.t0=s.catch(1),s.next=14,Object(A.c)((o=s.t0,{type:p.SIGN_UP_FAILURE,payload:o}));case 14:case"end":return s.stop()}var o}),ce,null,[[1,10]])}function xe(e){var t,n,r;return R.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=t.user,r=t.additionalData,c.next=3,je(n,r);case 3:case"end":return c.stop()}}),ae)}function ve(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.d)(p.GOOGLE_SIGN_IN_START,pe);case 2:case"end":return e.stop()}}),ie)}function ge(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.d)(p.EMAIL_SIGN_IN_START,Oe);case 2:case"end":return e.stop()}}),se)}function Se(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.d)(p.CHECK_USER_SESSION,me);case 2:case"end":return e.stop()}}),oe)}function Ee(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.d)(p.SIGN_OUT_START,fe);case 2:case"end":return e.stop()}}),le)}function Ie(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.d)(p.SIGN_UP_START,he);case 2:case"end":return e.stop()}}),ue)}function _e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.d)(p.SIGN_UP_SUCCESS,xe);case 2:case"end":return e.stop()}}),de)}function Ne(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.a)([Object(A.b)(ve),Object(A.b)(ge),Object(A.b)(Se),Object(A.b)(Ee),Object(A.b)(Ie),Object(A.b)(_e)]);case 2:case"end":return e.stop()}}),be)}var ye=function(){return{type:f.TOGGLE_CART_HIDDEN}},Ce=function(e){return{type:f.ADD_ITEM,payload:e}},we=R.a.mark(ke),Te=R.a.mark(Re),Ue=R.a.mark(Ae);function ke(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.c)({type:f.CLEAR_CART});case 2:case"end":return e.stop()}}),we)}function Re(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.d)(p.SIGN_OUT_SUCCESS,ke);case 2:case"end":return e.stop()}}),Te)}function Ae(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.a)([Object(A.b)(Re)]);case 2:case"end":return e.stop()}}),Ue)}var Ge=R.a.mark(Le);function Le(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.a)([Object(A.b)(Y),Object(A.b)(Ne),Object(A.b)(Ae)]);case 2:case"end":return e.stop()}}),Ge)}var Pe=Object(U.a)(),Fe=[Pe];var He=Object(l.d)(T,l.a.apply(void 0,Fe));Pe.run(Le);var Me,De,qe,Ve,ze,Be=Object(u.b)(He),Ke=(n(81),n(14)),We=n(12),Xe=(n(82),n(25)),Je=Object(We.a)([function(e){return e.directory}],(function(e){return e.sections})),Ye=(n(83),n(2)),Ze=Object(Ke.g)((function(e){var t=e.title,n=e.imageUrl,r=e.size,c=e.history,a=e.linkUrl,i=e.match;return Object(Ye.jsxs)("div",{className:"".concat(r," menu-item"),onClick:function(){return c.push("".concat(i.url).concat(a))},children:[Object(Ye.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(Ye.jsxs)("div",{className:"content",children:[Object(Ye.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(Ye.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})})),Qe=(n(88),Object(We.b)({sections:Je})),$e=Object(s.b)(Qe)((function(e){var t=e.sections;return Object(Ye.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(Xe.a)(e,["id"]);return Object(Ye.jsx)(Ze,Object(j.a)({},n),t)}))})})),et=n(26),tt=n(27),nt=tt.a.div(Me||(Me=Object(et.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 20px;\n"]))),rt=function(){return Object(Ye.jsx)(nt,{children:Object(Ye.jsx)($e,{})})},ct=function(e){return e.shop},at=Object(We.a)([ct],(function(e){return e.collections})),it=Object(We.a)([at],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),st=Object(We.a)([ct],(function(e){return e.isFetching})),ot=Object(We.a)([ct],(function(e){return!!e.collections})),lt=tt.a.div(De||(De=Object(et.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),ut=tt.a.div(qe||(qe=Object(et.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]))),dt=function(e){return function(t){var n=t.isLoading,r=Object(Xe.a)(t,["isLoading"]);return n?Object(Ye.jsx)(lt,{children:Object(Ye.jsx)(ut,{})}):Object(Ye.jsx)(e,Object(j.a)({},r))}},bt=(n(90),n(91),n(92),function(e){var t=e.children,n=e.isGoogleSignIn,r=e.inverted,c=Object(Xe.a)(e,["children","isGoogleSignIn","inverted"]);return Object(Ye.jsx)("button",Object(j.a)(Object(j.a)({className:"".concat(r?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},c),{},{children:t}))}),jt=Object(s.b)(null,(function(e){return{addItem:function(t){return e(Ce(t))}}}))((function(e){var t=e.item,n=e.addItem,r=t.name,c=t.price,a=t.imageUrl;return Object(Ye.jsxs)("div",{className:"collection-item",children:[Object(Ye.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(a,")")}}),Object(Ye.jsxs)("div",{className:"collection-footer",children:[Object(Ye.jsx)("span",{className:"name",children:r}),Object(Ye.jsxs)("span",{className:"price",children:["\u20b9",c]})]}),Object(Ye.jsx)(bt,{onClick:function(){return n(t)},inverted:!0,children:"Add to cart"})]})})),pt=Object(Ke.g)((function(e){var t=e.title,n=e.items,r=e.history,c=e.match,a=e.routeName;return Object(Ye.jsxs)("div",{className:"collection-preview",children:[Object(Ye.jsx)("h1",{className:"title",onClick:function(){return r.push("".concat(c.path,"/").concat(a))},children:t.toUpperCase()}),Object(Ye.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(Ye.jsx)(jt,{item:e},e.id)}))})]})})),Ot=(n(93),Object(We.b)({collections:it})),mt=Object(s.b)(Ot)((function(e){var t=e.collections;return Object(Ye.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(Xe.a)(e,["id"]);return Object(Ye.jsx)(pt,Object(j.a)({},n),t)}))})})),ft=Object(We.b)({isLoading:st}),ht=Object(l.c)(Object(s.b)(ft),dt)(mt),xt=(n(94),Object(s.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(We.a)([at],(function(e){return e?e[n]:null})))(e)};var n}))((function(e){var t=e.collection,n=t.title,r=t.items;return Object(Ye.jsxs)("div",{className:"collection-page",children:[Object(Ye.jsx)("h2",{className:"title",children:n}),Object(Ye.jsx)("div",{className:"items",children:r.map((function(e){return Object(Ye.jsx)(jt,{item:e},e.id)}))})]})}))),vt=Object(We.b)({isLoading:function(e){return!ot(e)}}),gt=Object(l.c)(Object(s.b)(vt),dt)(xt),St=Object(s.b)(null,(function(e){return{fetchCollectionsStart:function(){return e(q())}}}))((function(e){var t=e.fetchCollectionsStart,n=e.match;return Object(r.useEffect)((function(){t()}),[t]),Object(Ye.jsxs)("div",{className:"shop-page",children:[Object(Ye.jsx)(Ke.b,{exact:!0,path:"".concat(n.path),component:ht}),Object(Ye.jsx)(Ke.b,{path:"".concat(n.path,"/:collectionId"),component:gt})]})})),Et=n(32),It=n(40),_t=(n(95),function(e){var t=e.handleChange,n=e.label,r=Object(Xe.a)(e,["handleChange","label"]);return Object(Ye.jsxs)("div",{className:"group",children:[Object(Ye.jsx)("input",Object(j.a)({className:"form-input",onChange:t},r)),n?Object(Ye.jsx)("label",{className:"".concat(r.value.length?"shrink":""," form-input-label"),children:n}):null]})}),Nt=(n(96),Object(s.b)(null,(function(e){return{googleSignInStart:function(){return e({type:p.GOOGLE_SIGN_IN_START})},emailSignInStart:function(t,n){return e({type:p.EMAIL_SIGN_IN_START,payload:{email:t,password:n}})}}}))((function(e){var t=e.emailSignInStart,n=e.googleSignInStart,c=Object(r.useState)({email:"",password:""}),a=Object(It.a)(c,2),i=a[0],s=a[1],o=i.email,l=i.password,u=function(){var e=Object(G.a)(R.a.mark((function e(n){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t(o,l);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,n=t.value,r=t.name;s(Object(j.a)(Object(j.a)({},i),{},Object(Et.a)({},r,n)))};return Object(Ye.jsxs)("div",{className:"sign-in",children:[Object(Ye.jsx)("h2",{children:"I already have an account"}),Object(Ye.jsx)("span",{children:"Sign in with your email and password"}),Object(Ye.jsxs)("form",{onSubmit:u,children:[Object(Ye.jsx)(_t,{name:"email",type:"email",value:o,handleChange:d,label:"Email",required:!0}),Object(Ye.jsx)(_t,{name:"password",type:"password",value:l,handleChange:d,label:"Password",required:!0}),Object(Ye.jsxs)("div",{className:"buttons",children:[Object(Ye.jsx)(bt,{type:"submit",children:"Sign In"}),Object(Ye.jsx)(bt,{type:"button",onClick:n,isGoogleSignIn:!0,children:"Sign in with Google"})]})]})]})}))),yt=(n(97),Object(s.b)(null,(function(e){return{signUpStart:function(t){return e(function(e){return{type:p.SIGN_UP_START,payload:e}}(t))}}}))((function(e){var t=e.signUpStart,n=Object(r.useState)({displayName:"",email:"",password:"",confirmPassword:""}),c=Object(It.a)(n,2),a=c[0],i=c[1],s=a.displayName,o=a.email,l=a.password,u=a.confirmPassword,d=function(){var e=Object(G.a)(R.a.mark((function e(n){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),l===u){e.next=4;break}return alert("passwords don't match"),e.abrupt("return");case 4:t({displayName:s,email:o,password:l});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,n=t.name,r=t.value;i(Object(j.a)(Object(j.a)({},a),{},Object(Et.a)({},n,r)))};return Object(Ye.jsxs)("div",{className:"sign-up",children:[Object(Ye.jsx)("h2",{className:"title",children:"I do not have a account"}),Object(Ye.jsx)("span",{children:"Sign up with your email and password"}),Object(Ye.jsxs)("form",{className:"sign-up-form",onSubmit:d,children:[Object(Ye.jsx)(_t,{type:"text",name:"displayName",value:s,onChange:b,label:"Display Name",required:!0}),Object(Ye.jsx)(_t,{type:"email",name:"email",value:o,onChange:b,label:"Email",required:!0}),Object(Ye.jsx)(_t,{type:"password",name:"password",value:l,onChange:b,label:"Password (atleast 6 characters)",required:!0}),Object(Ye.jsx)(_t,{type:"password",name:"confirmPassword",value:u,onChange:b,label:"Confirm Password",required:!0}),Object(Ye.jsx)(bt,{type:"submit",children:"SIGN UP"})]})]})}))),Ct=(n(98),function(){return Object(Ye.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(Ye.jsx)(Nt,{}),Object(Ye.jsx)(yt,{})]})}),wt=function(e){return e.cart},Tt=Object(We.a)([wt],(function(e){return e.cartItems})),Ut=Object(We.a)([wt],(function(e){return e.hidden})),kt=Object(We.a)([Tt],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),Rt=Object(We.a)([Tt],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),At=(n(99),Object(s.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:f.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(Ce(t))},removeItem:function(t){return e(function(e){return{type:f.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,r=e.addItem,c=e.removeItem,a=t.name,i=t.imageUrl,s=t.price,o=t.quantity;return Object(Ye.jsxs)("div",{className:"checkout-item",children:[Object(Ye.jsx)("div",{className:"image-container",children:Object(Ye.jsx)("img",{alt:"item",src:i})}),Object(Ye.jsx)("span",{className:"name",children:a}),Object(Ye.jsxs)("span",{className:"quantity",children:[Object(Ye.jsx)("div",{className:"arrow",onClick:function(){return c(t)},children:"\u276e"}),Object(Ye.jsxs)("span",{className:"value",children:[" ",o]}),Object(Ye.jsx)("div",{className:"arrow",onClick:function(){return r(t)},children:"\u276f"})]}),Object(Ye.jsxs)("span",{className:"price",children:["\u20b9",s]}),Object(Ye.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:"\u2718"})]})}))),Gt=n(62),Lt=n.n(Gt),Pt=n(63),Ft=n.n(Pt),Ht=function(e){var t=e.price,n=100*t;return Object(Ye.jsx)(Lt.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,currency:"INR",image:"http://svgshare.com/i/CUz.svg",description:"Your total is \u20b9".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){Ft()({url:"payment",method:"post",data:{amount:n,token:e}}).then((function(e){alert("succesful payment")})).catch((function(e){console.log("Payment Error: ",e),alert("There was an issue with your payment! Please make sure you use the provided credit card.")}))},stripeKey:"pk_test_51IluJMSJhOPR4NXZGEUVRstfXvMOxq6T0EEYsXiDwGOt2D1agD95dSiYx0ZIXNB5ilOFqRFwyBcjuEXUKnQqPcMI00Bm3D4UL1"})},Mt=(n(117),Object(We.b)({cartItems:Tt,total:Rt})),Dt=Object(s.b)(Mt)((function(e){var t=e.cartItems,n=e.total;return Object(Ye.jsxs)("div",{className:"checkout-page",children:[Object(Ye.jsxs)("div",{className:"checkout-header",children:[Object(Ye.jsx)("div",{className:"header-block",children:Object(Ye.jsx)("span",{children:"Product"})}),Object(Ye.jsx)("div",{className:"header-block",children:Object(Ye.jsx)("span",{children:"Description"})}),Object(Ye.jsx)("div",{className:"header-block",children:Object(Ye.jsx)("span",{children:"Quantity"})}),Object(Ye.jsx)("div",{className:"header-block",children:Object(Ye.jsx)("span",{children:"Price"})}),Object(Ye.jsx)("div",{className:"header-block",children:Object(Ye.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(Ye.jsx)(At,{cartItem:e},e.id)})),Object(Ye.jsxs)("div",{className:"total",children:["TOTAL: \u20b9",n]}),Object(Ye.jsxs)("div",{className:"test-warning",children:["*Please use the following test credit card for payment*",Object(Ye.jsx)("br",{}),"4242 4242 4242 4242 - Exp - Any future date - CVV: any 3 digits"]}),Object(Ye.jsx)(Ht,{price:n})]})}));function qt(){return(qt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Vt(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function zt(e,t){var n=e.title,c=e.titleId,a=Vt(e,["title","titleId"]);return r.createElement("svg",qt({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":c},a),void 0===n?r.createElement("title",{id:c},"Group"):n?r.createElement("title",{id:c},n):null,Ve||(Ve=r.createElement("desc",null,"Created with Sketch.")),ze||(ze=r.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var Bt,Kt,Wt,Xt,Jt,Yt,Zt,Qt,$t,en,tn,nn,rn,cn,an,sn=r.forwardRef(zt),on=(n.p,Object(We.a)([function(e){return e.user}],(function(e){return e.currentUser})));function ln(){return(ln=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function un(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function dn(e,t){var n=e.title,c=e.titleId,a=un(e,["title","titleId"]);return r.createElement("svg",ln({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,r.createElement("g",null,r.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Bt||(Bt=r.createElement("g",null)),Kt||(Kt=r.createElement("g",null)),Wt||(Wt=r.createElement("g",null)),Xt||(Xt=r.createElement("g",null)),Jt||(Jt=r.createElement("g",null)),Yt||(Yt=r.createElement("g",null)),Zt||(Zt=r.createElement("g",null)),Qt||(Qt=r.createElement("g",null)),$t||($t=r.createElement("g",null)),en||(en=r.createElement("g",null)),tn||(tn=r.createElement("g",null)),nn||(nn=r.createElement("g",null)),rn||(rn=r.createElement("g",null)),cn||(cn=r.createElement("g",null)),an||(an=r.createElement("g",null)))}var bn,jn,pn,On,mn=r.forwardRef(dn),fn=(n.p,n(118),Object(We.b)({itemCount:kt})),hn=Object(s.b)(fn,(function(e){return{toggleCartHidden:function(){return e(ye())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(Ye.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(Ye.jsx)(mn,{className:"shopping-icon"}),Object(Ye.jsx)("span",{className:"item-count",children:n})]})})),xn=(n(119),function(e){var t=e.item,n=t.imageUrl,r=t.price,c=t.name,a=t.quantity;return Object(Ye.jsxs)("div",{className:"cart-item",children:[Object(Ye.jsx)("div",{className:"image-wrapper",children:Object(Ye.jsx)("img",{src:n,alt:"item"})}),Object(Ye.jsxs)("div",{className:"item-details",children:[Object(Ye.jsx)("span",{className:"name",children:c}),Object(Ye.jsxs)("span",{className:"price",children:[a," x \u20b9",r]})]})]})}),vn=(n(120),Object(We.b)({cartItems:Tt})),gn=Object(Ke.g)(Object(s.b)(vn)((function(e){var t=e.cartItems,n=e.history,r=e.dispatch;return Object(Ye.jsxs)("div",{className:"cart-dropdown",children:[Object(Ye.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(Ye.jsx)(xn,{item:e},e.id)})):Object(Ye.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(Ye.jsx)(bt,{onClick:function(){n.push("/checkout"),r(ye())},children:"GO TO CHECKOUT"})]})}))),Sn=tt.a.div(bn||(bn=Object(et.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n"]))),En=Object(tt.a)(i.b)(jn||(jn=Object(et.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 15px;\n"]))),In=tt.a.div(pn||(pn=Object(et.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]))),_n=Object(tt.a)(i.b)(On||(On=Object(et.a)(["\n  padding: 10px 15px;\n  cursor: pointer;\n"]))),Nn=Object(We.b)({currentUser:on,hidden:Ut}),yn=Object(s.b)(Nn,(function(e){return{signOutStart:function(){return e({type:p.SIGN_OUT_START})}}}))((function(e){var t=e.currentUser,n=e.hidden,r=e.signOutStart;return Object(Ye.jsxs)(Sn,{children:[Object(Ye.jsx)(En,{to:"/",children:Object(Ye.jsx)(sn,{className:"logo"})}),Object(Ye.jsxs)(In,{children:[Object(Ye.jsx)(_n,{to:"/shop",children:"SHOP"}),Object(Ye.jsx)(_n,{to:"/shop",children:"CONTACT"}),t?Object(Ye.jsx)(_n,{as:"div",onClick:r,children:"SIGN OUT"}):Object(Ye.jsx)(_n,{to:"/signin",children:"SIGN IN"}),Object(Ye.jsx)(hn,{})]}),n?null:Object(Ye.jsx)(gn,{})]})})),Cn=Object(We.b)({currentUser:on}),wn=Object(s.b)(Cn,(function(e){return{checkUserSession:function(){return e({type:p.CHECK_USER_SESSION})}}}))((function(e){var t=e.checkUserSession,n=e.currentUser;return Object(r.useEffect)((function(){t()}),[t]),Object(Ye.jsxs)("div",{children:[Object(Ye.jsx)(yn,{}),Object(Ye.jsxs)(Ke.d,{children:[Object(Ye.jsx)(Ke.b,{exact:!0,path:"/",component:rt}),Object(Ye.jsx)(Ke.b,{path:"/shop",component:St}),Object(Ye.jsx)(Ke.b,{exact:!0,path:"/checkout",component:Dt}),Object(Ye.jsx)(Ke.b,{exact:!0,path:"/signin",render:function(){return n?Object(Ye.jsx)(Ke.a,{to:"/"}):Object(Ye.jsx)(Ct,{})}})]})]})}));a.a.render(Object(Ye.jsx)(s.a,{store:He,children:Object(Ye.jsx)(i.a,{children:Object(Ye.jsx)(o.a,{persistor:Be,children:Object(Ye.jsx)(wn,{})})})}),document.getElementById("root"))},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},88:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[121,1,2]]]);
//# sourceMappingURL=main.d9773a4c.chunk.js.map