(function(e){function n(n){for(var c,a,o=n[0],i=n[1],d=n[2],s=0,h=[];s<o.length;s++)a=o[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&h.push(r[a][0]),r[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);l&&l(n);while(h.length)h.shift()();return u.push.apply(u,d||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,a=1;a<t.length;a++){var o=t[a];0!==r[o]&&(c=!1)}c&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},a={app:0},r={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1c4cc165":"9e4cd5e2","chunk-98dca7f0":"97df6ce4","chunk-833f1fe0":"1fe1ea00","chunk-c76440ec":"8ce76929","chunk-3e03cde1":"4b129f62","chunk-d1edbda0":"3b84ebf7","chunk-101da986":"b95078dd","chunk-176071aa":"6e5c6c28","chunk-28d2fbd5":"e07c2d74","chunk-395b2452":"777f7c06","chunk-a5070c0c":"afcab23a","chunk-b9d1c2ee":"190c1348","chunk-2d0d645d":"45ea7a5b","chunk-2d0f0db0":"37ccf9ce","chunk-606cd07a":"f6f0d31c","chunk-2d216758":"7bf9952c","chunk-0c89993c":"a73b6439"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-1c4cc165":1,"chunk-98dca7f0":1,"chunk-833f1fe0":1,"chunk-c76440ec":1,"chunk-3e03cde1":1,"chunk-d1edbda0":1,"chunk-101da986":1,"chunk-176071aa":1,"chunk-28d2fbd5":1,"chunk-395b2452":1,"chunk-a5070c0c":1,"chunk-b9d1c2ee":1,"chunk-606cd07a":1,"chunk-0c89993c":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-1c4cc165":"0df12065","chunk-98dca7f0":"107fa9d8","chunk-833f1fe0":"7e839fef","chunk-c76440ec":"4d1a1c86","chunk-3e03cde1":"ae5b255c","chunk-d1edbda0":"5aac873b","chunk-101da986":"2bd01c54","chunk-176071aa":"b6f88978","chunk-28d2fbd5":"6ecfc552","chunk-395b2452":"35613466","chunk-a5070c0c":"6ecfc552","chunk-b9d1c2ee":"18b54bae","chunk-2d0d645d":"31d6cfe0","chunk-2d0f0db0":"31d6cfe0","chunk-606cd07a":"21fb7b4d","chunk-2d216758":"31d6cfe0","chunk-0c89993c":"92e48120"}[e]+".css",r=i.p+c,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var d=u[o],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===c||s===r))return n()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){d=h[o],s=d.getAttribute("data-href");if(s===c||s===r)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete a[e],l.parentNode.removeChild(l),t(u)},l.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(l)})).then((function(){a[e]=0})));var c=r[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise((function(n,t){c=r[e]=[n,t]}));n.push(c[2]=u);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=o(e);var h=new Error;d=function(n){s.onerror=s.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",h.name="ChunkLoadError",h.type=c,h.request=a,t[1](h)}r[e]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/premedicaladmission/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=n,d=d.slice();for(var h=0;h<d.length;h++)n(d[h]);var l=s;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"4ee7":function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return o})),t.d(n,"d",(function(){return i}));var c=t("260b"),a=(t("ea7b"),t("e71f"),t("588e"),t("000b"),{apiKey:"AIzaSyDS64pgWD6iVAVAnfw3geS3OTtsyfhUR_8",authDomain:"premedical-94a70.firebaseapp.com",projectId:"premedical-94a70",storageBucket:"premedical-94a70.appspot.com",messagingSenderId:"332627267166",appId:"1:332627267166:web:4c54749fa0f30e5e0deecf",measurementId:"G-YTGDSGMMSH"}),r=(c["a"].initializeApp(a),c["a"].auth()),u=c["a"].firestore(),o=c["a"].analytics(),i=c["a"].auth.FacebookAuthProvider()},"56d7":function(e,n,t){"use strict";t.r(n);var c=t("5530"),a=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("2b0e")),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",["Login"!==this.$route.name&&"Navigation"!==this.$route.name?t("v-app-bar",{staticClass:"appbar",attrs:{app:"",dark:""}},[t("v-btn",{staticClass:"mr-2",attrs:{tile:"",fab:""},on:{click:function(n){return e.$router.go(-1)}}},[t("v-icon",[e._v("mdi-arrow-left")])],1),t("div",{attrs:{app:""}},[t("router-link",{staticClass:"homelink",attrs:{to:"/"}},[t("h3",{staticClass:"cursive"},[e._v(" Pre "),t("span",{staticClass:"red--text"},[e._v("Medical")]),e._v(" Admission Course "),t("v-chip",{staticClass:"hidden-md-and-down",attrs:{color:"#e40059",text:""}},[e._v("Roll: "+e._s(e.roll))])],1)])],1)],1):e._e(),t("v-main",{staticClass:"grey lighten-3",attrs:{id:"scroll_hide"}},[t("router-view")],1)],1)},u=[],o=(t("ac1f"),t("5319"),{name:"App",components:{},data:function(){return{show:!1,value:1}},methods:{logout:function(){var e=this;this.$swal({icon:"warning",title:"Are you sure want to logout?",buttons:[!0,"Yes"],dangerMode:!0}).then((function(n){n&&(e.$router.push("/login"),e.$store.dispatch("logOut"))}))},navigateTocurrentPath:function(){var e=localStorage.getItem("path");e&&(localStorage.removeItem("path"),this.$router.replace(e))}},created:function(){this.navigateTocurrentPath()},computed:{roll:function(){return this.$store.state.user.roll?this.$store.state.user.roll:""}}}),i=o,d=(t("9a3b"),t("2877")),s=t("6544"),h=t.n(s),l=t("7496"),f=t("40dc"),p=t("8336"),m=t("cc20"),b=t("132d"),k=t("f6c4"),g=Object(d["a"])(i,r,u,!1,null,"38445890",null),v=g.exports;h()(g,{VApp:l["a"],VAppBar:f["a"],VBtn:p["a"],VChip:m["a"],VIcon:b["a"],VMain:k["a"]});t("45fc"),t("d3b7");var S=t("8c4f"),y=t("4ee7");a["a"].use(S["a"]);var E=[{path:"/",name:"Navigation",component:function(){return Promise.all([t.e("chunk-d1edbda0"),t.e("chunk-0c89993c")]).then(t.bind(null,"74ae"))},meta:{requiresAuth:!0}},{path:"/liveclasses",name:"Routine",component:function(){return Promise.all([t.e("chunk-1c4cc165"),t.e("chunk-c76440ec"),t.e("chunk-d1edbda0"),t.e("chunk-98dca7f0"),t.e("chunk-101da986")]).then(t.bind(null,"8eb4"))},meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:function(){return Promise.all([t.e("chunk-1c4cc165"),t.e("chunk-98dca7f0"),t.e("chunk-833f1fe0")]).then(t.bind(null,"5326"))}},{path:"/fblogin",name:"FBLogin",component:function(){return Promise.all([t.e("chunk-c76440ec"),t.e("chunk-2d216758")]).then(t.bind(null,"c30b"))}},{path:"/privacy",name:"Privacy",component:function(){return t.e("chunk-2d0d645d").then(t.bind(null,"729e"))}},{path:"/terms",name:"Terms",component:function(){return t.e("chunk-2d0f0db0").then(t.bind(null,"9dc2"))}},{path:"/profile",name:"Profile",component:function(){return t.e("chunk-606cd07a").then(t.bind(null,"c66d"))},meta:{requiresAuth:!0}},{path:"/qna",name:"Qna",component:function(){return Promise.all([t.e("chunk-1c4cc165"),t.e("chunk-c76440ec"),t.e("chunk-d1edbda0"),t.e("chunk-98dca7f0"),t.e("chunk-b9d1c2ee")]).then(t.bind(null,"b5ae"))},meta:{requiresAuth:!0}},{path:"/exam",name:"Exam",component:function(){return Promise.all([t.e("chunk-1c4cc165"),t.e("chunk-c76440ec"),t.e("chunk-d1edbda0"),t.e("chunk-98dca7f0"),t.e("chunk-176071aa")]).then(t.bind(null,"864d"))},meta:{requiresAuth:!0}},{path:"/biocast",name:"BioCast",component:function(){return Promise.all([t.e("chunk-1c4cc165"),t.e("chunk-c76440ec"),t.e("chunk-d1edbda0"),t.e("chunk-98dca7f0"),t.e("chunk-28d2fbd5")]).then(t.bind(null,"bf4a"))},meta:{requiresAuth:!0}},{path:"/markedpdf",name:"MarkedPdf",component:function(){return Promise.all([t.e("chunk-1c4cc165"),t.e("chunk-c76440ec"),t.e("chunk-d1edbda0"),t.e("chunk-98dca7f0"),t.e("chunk-a5070c0c")]).then(t.bind(null,"150b"))},meta:{requiresAuth:!0}},{path:"/exam/mcq/:id",name:"MCQExam",component:function(){return Promise.all([t.e("chunk-1c4cc165"),t.e("chunk-c76440ec"),t.e("chunk-3e03cde1")]).then(t.bind(null,"177b"))},meta:{requiresAuth:!0}},{path:"/ranking/:id",name:"Ranking",component:function(){return Promise.all([t.e("chunk-1c4cc165"),t.e("chunk-c76440ec"),t.e("chunk-d1edbda0"),t.e("chunk-98dca7f0"),t.e("chunk-395b2452")]).then(t.bind(null,"01dc"))},meta:{requiresAuth:!0}}],A=new S["a"]({mode:"history",base:"/premedicaladmission/",routes:E});A.beforeEach((function(e,n,t){var c=e.matched.some((function(e){return e.meta.requiresAuth})),a=y["b"].currentUser;c?a?t():t({path:"/login",query:{redirect:e.fullPath}}):t()}));var _=A,w=t("2f62");a["a"].use(w["a"]);var T=new w["a"].Store({state:{user:{roll:null},error:"",loading:!1},mutations:{SET_USER:function(e,n){e.user=n},SET_ERROR:function(e,n){e.error=n},SET_LOADING:function(e,n){e.loading=n},SET_INITIALSTATE:function(e,n){e.initialState=n}},actions:{userLogin:function(e,n){var t=e.commit;t("SET_ERROR",""),t("SET_LOADING",!0),y["b"].signInWithEmailAndPassword(n.cred,n.password).then((function(){var e=y["b"].currentUser;y["c"].collection("users").doc(e.uid).onSnapshot((function(e){return t("SET_USER",Object(c["a"])({id:e.id},e.data()))})),_.push("/"),t("SET_LOADING",!1)})).catch((function(e){t("SET_ERROR",e),t("SET_LOADING",!1)}))},logOut:function(e){var n=e.commit;n("SET_LOADING",!0),y["b"].signOut().then((function(){n("SET_USER",null),n("SET_LOADING",!1)}))}},getters:{loginstatus:function(e){return null!==e.user&&void 0!==e.user},getUser:function(e){return e.user}}}),P=t("f309");a["a"].use(P["a"]);var O,I=new P["a"]({}),C=(t("f95d"),t("2ead")),R=t.n(C),L=t("14ba"),j=t.n(L),q=(t("a753"),t("3b2f")),x=t.n(q),N=(t("be0f"),t("2ef0")),D=t.n(N),M=t("9955"),$=t.n(M);a["a"].use(R.a),a["a"].use(j.a),a["a"].use(x.a),window.katex=x.a,a["a"].use($.a,{lodash:D.a}),a["a"].config.productionTip=!1,y["a"].logEvent("users_entered"),y["b"].onAuthStateChanged((function(e){e&&(y["a"].setUserId(e.uid),y["a"].logEvent("users_loggedin"),y["c"].collection("users").doc(e.uid).onSnapshot((function(e){return T.commit("SET_USER",Object(c["a"])({id:e.id},e.data()))}))),O||(O=new a["a"]({router:_,store:T,vuetify:I,render:function(e){return e(v)}}).$mount("#app"))}))},"9a3b":function(e,n,t){"use strict";t("cfe7")},cfe7:function(e,n,t){},f95d:function(e,n,t){}});