(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a(37),n=a.n(i),r=(a(81),a(141)),s=a(136),o=a(65),l=a(23),j=a.n(l),d=a(20),b=a(27),u=a(16),O=a(134),h=a(138),x=a(140),v=a(139),p=a(135),f=a(137),m=a(60),S=a(58),T=a(61),g=a(63),y=a(62),A=a(59),C=a(35),E=a(3);var _=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)({}),r=Object(u.a)(n,2),s=r[0],o=r[1],l=Object(c.useState)(!1),_=Object(u.a)(l,2),N=_[0],D=_[1],L=Object(c.useState)(!1),P=Object(u.a)(L,2),w=P[0],R=P[1],k=Object(c.useState)("A valid value is required"),F=Object(u.a)(k,2),I=F[0],H=F[1],W=Object(c.useState)(!1),z=Object(u.a)(W,2),q=z[0],K=z[1],B=Object(c.useState)(!1),J=Object(u.a)(B,2),U=J[0],V=J[1],M=Object(c.useState)(!1),$=Object(u.a)(M,2),G=$[0],Z=$[1],Y=Object(c.useState)(!1),Q=Object(u.a)(Y,2),X=Q[0],ee=Q[1];return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(O.a,{onSubmit:function(e){(e.preventDefault(),D(!0),a)?(function(){var e=Object(b.a)(j.a.mark((function e(){var t,c,i,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"dev"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CLIENT_ID:"",REACT_APP_CLIENT_SECRET:""}).REACT_APP_mode){e.next=16;break}return console.log("Mode is : DEV"),"",t={Authorization:""},e.next=7,fetch("https://geocode.search.hereapi.com/v1/geocode?q=".concat(a),{headers:t});case 7:return c=e.sent,e.next=10,c.json();case 10:i=e.sent,o(Object(d.a)({},i)),D(!1),"[]"===JSON.stringify(i.items)&&(ee(!0),o({})),e.next=26;break;case 16:return console.log("not dev mode"),e.next=19,fetch("/addrgeocode?queryst=".concat(a));case 19:return n=e.sent,e.next=22,n.json();case 22:r=e.sent,o(Object(d.a)({},r)),D(!1),"[]"===JSON.stringify(r.items)&&(ee(!0),o({}));case 26:e.next=32;break;case 28:e.prev=28,e.t0=e.catch(0),Z(!0),D(!1);case 32:case"end":return e.stop()}}),e,null,[[0,28]])})));return function(){return e.apply(this,arguments)}}()(),i("")):(V(!0),D(!1))},children:[Object(E.jsx)(h.a,{type:"text",id:"location",labelText:"Location*",invalid:w,invalidText:I,helperText:"Input values only in alphabets - City/Town/Street.",placeholder:"Location",size:"lg",value:a,onChange:function(e){e.target.value.match(/^[a-zA-Z]+$/)?(R(!1),K(!1)):(R(!0),H("Only letters allowed. No special characters or numbers"),K(!0)),i(e.target.value)}}),Object(E.jsx)("div",{className:"ButtonArea",children:Object(E.jsx)(x.a,{type:"submit",disabled:q,children:" Get Area Co-ordinates "})})]}),U&&Object(E.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(E.jsx)("span",{children:"Location input is empty. Please fill a valid Location"}),timeout:3e3,onClose:function(){V(!1)},title:"Error Notification"}),G&&Object(E.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(E.jsx)("span",{children:"Server cannot be reached"}),timeout:3e3,onClose:function(){Z(!1)},title:"Error Notification"}),X&&Object(E.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(E.jsx)("span",{children:"No results available"}),timeout:3e3,onClose:function(){ee(!1)},title:"Error Notification"}),Object(E.jsx)(p.a,{active:N,description:"Active loading indicator",withOverlay:!0}),s.items&&Object(E.jsx)("div",{className:"TableDisplay",children:s.items&&Object(E.jsx)(f.a,{rows:s.items,headers:[{key:"name",header:"Name"},{key:"address",header:"Address"},{key:"location",header:"Location"}],children:function(e){e.rows;var t=e.headers,a=e.getHeaderProps;return Object(E.jsx)(m.a,{title:"Location Results",children:Object(E.jsxs)(S.a,{children:[Object(E.jsx)(T.a,{children:Object(E.jsx)(g.a,{children:t.map((function(e){return Object(E.jsx)(y.a,Object(d.a)(Object(d.a)({},a({header:e})),{},{children:e.header}))}))})}),Object(E.jsx)(A.a,{children:s.items&&s.items.map((function(e,t){return Object(E.jsxs)(g.a,{children:[Object(E.jsx)(C.a,{children:e.title}),Object(E.jsx)(C.a,{children:e.address.label}),Object(E.jsx)(C.a,{children:e.position.lat+","+e.position.lng})]},t)}))})]})})}})})]})};var N=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)(""),r=Object(u.a)(n,2),s=r[0],o=r[1],l=Object(c.useState)({}),_=Object(u.a)(l,2),N=_[0],D=_[1],L=Object(c.useState)(!1),P=Object(u.a)(L,2),w=P[0],R=P[1],k=Object(c.useState)("A valid value is required"),F=Object(u.a)(k,2),I=F[0],H=F[1],W=Object(c.useState)(!1),z=Object(u.a)(W,2),q=z[0],K=z[1],B=Object(c.useState)(!1),J=Object(u.a)(B,2),U=J[0],V=J[1],M=Object(c.useState)(!1),$=Object(u.a)(M,2),G=$[0],Z=$[1],Y=Object(c.useState)(!1),Q=Object(u.a)(Y,2),X=Q[0],ee=Q[1],te=Object(c.useState)(!1),ae=Object(u.a)(te,2),ce=ae[0],ie=ae[1],ne=Object(c.useState)(!1),re=Object(u.a)(ne,2),se=re[0],oe=re[1];return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(O.a,{onSubmit:function(e){if(e.preventDefault(),R(!0),a&&s){var t=a.concat(",").concat(s);(function(){var e=Object(b.a)(j.a.mark((function e(){var a,c,i,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"dev"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CLIENT_ID:"",REACT_APP_CLIENT_SECRET:""}).REACT_APP_mode){e.next=16;break}return console.log("Mode is : DEV"),"",a={Authorization:""},e.next=7,fetch("https://revgeocode.search.hereapi.com/v1/revgeocode?at=".concat(t),{headers:a});case 7:return c=e.sent,e.next=10,c.json();case 10:i=e.sent,D(Object(d.a)({},i)),R(!1),"[]"===JSON.stringify(i.items)&&(oe(!0),D({})),e.next=26;break;case 16:return console.log("not dev mode"),e.next=19,fetch("/revaddrgeocode?location=".concat(t));case 19:return n=e.sent,e.next=22,n.json();case 22:r=e.sent,D(Object(d.a)({},r)),R(!1),"[]"===JSON.stringify(r.items)&&(oe(!0),D({}));case 26:e.next=32;break;case 28:e.prev=28,e.t0=e.catch(0),ie(!0),R(!1);case 32:case"end":return e.stop()}}),e,null,[[0,28]])})));return function(){return e.apply(this,arguments)}})()(),i(""),o("")}else ee(!0),R(!1)},children:[Object(E.jsx)("div",{className:"TextArea",children:Object(E.jsx)(h.a,{id:"latitude",labelText:"Latitude*",invalid:U,invalidText:I,helperText:"Add valid co-ordinates.",placeholder:"Latitude",size:"lg",value:a,onChange:function(e){e.target.value.match(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?){2}$/)?(V(!1),K(!1)):(V(!0),H("Only valid co-ordinates allowed. No characters"),K(!0)),i(e.target.value)}})}),Object(E.jsx)("div",{className:"TextArea",children:Object(E.jsx)(h.a,{id:"longitude",labelText:"Longitude*",invalid:G,invalidText:I,helperText:"Add valid co-ordinates.",placeholder:"Longitude",size:"lg",value:s,onChange:function(e){e.target.value.match(/^\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?){2}$/)?(Z(!1),K(!1)):(Z(!0),H("Only valid co-ordinates allowed. No characters"),K(!0)),o(e.target.value)}})}),Object(E.jsx)("div",{className:"CButtonArea",children:Object(E.jsx)(x.a,{type:"submit",disabled:q,children:" Get Places Near You "})})]}),X&&Object(E.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(E.jsx)("span",{children:"Latitude, Longitude  values cannot be empty"}),timeout:3e3,onClose:function(){ee(!1)},title:"Error Notification"}),ce&&Object(E.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(E.jsx)("span",{children:"Server cannot be reached"}),timeout:3e3,onClose:function(){ie(!1)},title:"Error Notification"}),se&&Object(E.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(E.jsx)("span",{children:"No data results available"}),timeout:3e3,onClose:function(){oe(!1)},title:"Error Notification"}),Object(E.jsx)(p.a,{active:w,description:"Active loading indicator",withOverlay:!0}),N.items&&Object(E.jsx)("div",{className:"TableDisplay",children:N.items&&Object(E.jsx)(f.a,{rows:N.items,headers:[{key:"name",header:"Name"},{key:"address",header:"Address"},{key:"location",header:"Location"}],children:function(e){e.rows;var t=e.headers,a=e.getHeaderProps;return Object(E.jsx)(m.a,{title:"Location Results",children:Object(E.jsxs)(S.a,{children:[Object(E.jsx)(T.a,{children:Object(E.jsx)(g.a,{children:t.map((function(e){return Object(E.jsx)(y.a,Object(d.a)(Object(d.a)({},a({header:e})),{},{children:e.header}))}))})}),Object(E.jsx)(A.a,{children:N.items&&N.items.map((function(e,t){return Object(E.jsxs)(g.a,{children:[Object(E.jsx)(C.a,{children:e.title}),Object(E.jsx)(C.a,{children:e.address.label}),Object(E.jsx)(C.a,{children:e.position.lat+","+e.position.lng})]},t)}))})]})})}})})]})};var D=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)(""),r=Object(u.a)(n,2),s=r[0],o=r[1],l=Object(c.useState)({}),_=Object(u.a)(l,2),N=_[0],D=_[1],L=Object(c.useState)(!1),P=Object(u.a)(L,2),w=P[0],R=P[1],k=Object(c.useState)(!1),F=Object(u.a)(k,2),I=F[0],H=F[1],W=Object(c.useState)("A valid value is required"),z=Object(u.a)(W,2),q=z[0],K=z[1],B=Object(c.useState)(!1),J=Object(u.a)(B,2),U=J[0],V=J[1],M=Object(c.useState)("A valid value is required"),$=Object(u.a)(M,2),G=$[0],Z=$[1],Y=Object(c.useState)(!1),Q=Object(u.a)(Y,2),X=Q[0],ee=Q[1],te=Object(c.useState)(!1),ae=Object(u.a)(te,2),ce=ae[0],ie=ae[1],ne=Object(c.useState)(!1),re=Object(u.a)(ne,2),se=re[0],oe=re[1],le=Object(c.useState)(!1),je=Object(u.a)(le,2),de=je[0],be=je[1];return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(O.a,{onSubmit:function(e){if(e.preventDefault(),R(!0),a&&s){var t=a.concat("+").concat(s);(function(){var e=Object(b.a)(j.a.mark((function e(){var a,c,i,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"dev"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CLIENT_ID:"",REACT_APP_CLIENT_SECRET:""}).REACT_APP_mode){e.next=16;break}return console.log("Mode is : DEV"),"",a={Authorization:""},e.next=7,fetch("https://geocode.search.hereapi.com/v1/geocode?q=".concat(t),{headers:a});case 7:return c=e.sent,e.next=10,c.json();case 10:i=e.sent,D(Object(d.a)({},i)),R(!1),"[]"===JSON.stringify(i.items)&&(be(!0),D({})),e.next=26;break;case 16:return console.log("not dev mode"),e.next=19,fetch("/liststores?query=".concat(t));case 19:return n=e.sent,e.next=22,n.json();case 22:r=e.sent,D(Object(d.a)({},r)),R(!1),"[]"===JSON.stringify(r.items)&&(be(!0),D({}));case 26:e.next=32;break;case 28:e.prev=28,e.t0=e.catch(0),oe(!0),R(!1);case 32:case"end":return e.stop()}}),e,null,[[0,28]])})));return function(){return e.apply(this,arguments)}})()(),i(""),o("")}else ie(!0),R(!1)},children:[Object(E.jsxs)("div",{className:"TextArea",children:[Object(E.jsx)(h.a,{id:"location",labelText:"Location*",size:"lg",invalid:I,invalidText:q,helperText:"Input values only in alphabets - City/Town/Street.",placeholder:"Location",value:a,onChange:function(e){e.target.value.match(/^[a-zA-Z]+$/)?(H(!1),ee(!1)):(H(!0),K("Only letters allowed. No special characters or numbers"),ee(!0)),i(e.target.value)}})," ",Object(E.jsx)("br",{})]}),Object(E.jsx)("div",{className:"TextArea",children:Object(E.jsx)(h.a,{id:"area-query",labelText:"Area*",size:"lg",invalid:U,invalidText:G,helperText:"Input values only in alphabets - Public places/Hotels/Restaurants.",placeholder:"Query: Area/Address",value:s,onChange:function(e){e.target.value.match(/^[a-zA-Z]+$/)?(V(!1),ee(!1)):(V(!0),Z("Only letters allowed. No special characters or numbers"),ee(!0)),o(e.target.value)}})}),Object(E.jsx)("br",{}),Object(E.jsx)("div",{className:"CButtonArea",children:Object(E.jsx)(x.a,{type:"submit",disabled:X,children:" Get Places Near You "})})]}),ce&&Object(E.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(E.jsx)("span",{children:"Location and Area input is empty. Please fill a valid Location and area"}),timeout:3e3,onClose:function(){ie(!1)},title:"Error Notification"}),se&&Object(E.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(E.jsx)("span",{children:"Server cannot be reached"}),timeout:3e3,onClose:function(){oe(!1)},title:"Error Notification"}),de&&Object(E.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(E.jsx)("span",{children:"No data results available"}),timeout:3e3,onClose:function(){be(!1)},title:"Error Notification"}),Object(E.jsx)(p.a,{active:w,description:"Active loading indicator",withOverlay:!0}),N.items&&Object(E.jsx)("div",{className:"TableDisplay",children:N.items&&Object(E.jsx)(f.a,{rows:N.items,headers:[{key:"name",header:"Name"},{key:"address",header:"Address"},{key:"location",header:"Location"}],children:function(e){e.rows;var t=e.headers,a=e.getHeaderProps;return Object(E.jsx)(m.a,{title:"Search Results",children:Object(E.jsxs)(S.a,{children:[Object(E.jsx)(T.a,{children:Object(E.jsx)(g.a,{children:t.map((function(e){return Object(E.jsx)(y.a,Object(d.a)(Object(d.a)({},a({header:e})),{},{children:e.header}))}))})}),Object(E.jsx)(A.a,{children:N.items&&N.items.map((function(e,t){return Object(E.jsxs)(g.a,{children:[Object(E.jsx)(C.a,{children:e.title}),Object(E.jsx)(C.a,{children:e.address.label}),Object(E.jsx)(C.a,{children:e.position.lat+","+e.position.lng})]},t)}))})]})})}})})]})};var L=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)(""),r=Object(u.a)(n,2),s=r[0],o=r[1],l=Object(c.useState)(""),_=Object(u.a)(l,2),N=_[0],D=_[1],L=Object(c.useState)({}),P=Object(u.a)(L,2),w=P[0],R=P[1],k=Object(c.useState)(!1),F=Object(u.a)(k,2),I=F[0],H=F[1],W=Object(c.useState)(!1),z=Object(u.a)(W,2),q=z[0],K=z[1],B=Object(c.useState)(!1),J=Object(u.a)(B,2),U=J[0],V=J[1],M=Object(c.useState)(!1),$=Object(u.a)(M,2),G=$[0],Z=$[1],Y=Object(c.useState)("A valid value is required"),Q=Object(u.a)(Y,2),X=Q[0],ee=Q[1],te=Object(c.useState)("A valid value is required"),ae=Object(u.a)(te,2),ce=ae[0],ie=ae[1],ne=Object(c.useState)("A valid value is required"),re=Object(u.a)(ne,2),se=re[0],oe=re[1],le=Object(c.useState)(!1),je=Object(u.a)(le,2),de=je[0],be=je[1],ue=Object(c.useState)(!1),Oe=Object(u.a)(ue,2),he=Oe[0],xe=Oe[1],ve=Object(c.useState)(!1),pe=Object(u.a)(ve,2),fe=pe[0],me=pe[1],Se=Object(c.useState)(!1),Te=Object(u.a)(Se,2),ge=Te[0],ye=Te[1];return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(O.a,{onSubmit:function(e){if(e.preventDefault(),H(!0),a&&s&&N){var t=a.concat(",").concat(s);(function(){var e=Object(b.a)(j.a.mark((function e(){var a,c,i,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"dev"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CLIENT_ID:"",REACT_APP_CLIENT_SECRET:""}).REACT_APP_mode){e.next=16;break}return console.log("Mode is : DEV"),"",a={Authorization:""},e.next=7,fetch("https://discover.search.hereapi.com/v1/discover?q=".concat(N,"&at=").concat(t),{headers:a});case 7:return c=e.sent,e.next=10,c.json();case 10:i=e.sent,R(Object(d.a)({},i)),H(!1),"[]"===JSON.stringify(i.items)&&(ye(!0),R({})),e.next=26;break;case 16:return console.log("not dev mode"),e.next=19,fetch("/categorychain?location=".concat(t,"&query=").concat(N));case 19:return n=e.sent,e.next=22,n.json();case 22:r=e.sent,R(Object(d.a)({},r)),H(!1),"[]"===JSON.stringify(r.items)&&(ye(!0),R({}));case 26:e.next=32;break;case 28:e.prev=28,e.t0=e.catch(0),me(!0),H(!1);case 32:case"end":return e.stop()}}),e,null,[[0,28]])})));return function(){return e.apply(this,arguments)}})()(),i(""),o(""),D("")}else xe(!0),H(!1)},children:[Object(E.jsxs)("div",{className:"TextArea",children:[Object(E.jsx)(h.a,{id:"latitude",labelText:"Latitude*",size:"lg",invalid:q,invalidText:ce,helperText:"Add valid co-ordinates.",placeholder:"Latitude",value:a,onChange:function(e){e.target.value.match(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?){2}$/)?(K(!1),be(!1)):(K(!0),ie("Only valid co-ordinates allowed. No characters"),be(!0)),i(e.target.value)}}),Object(E.jsx)("br",{})]}),Object(E.jsxs)("div",{className:"TextArea",children:[Object(E.jsx)(h.a,{id:"longitude",labelText:"Longitude*",size:"lg",invalid:U,invalidText:se,helperText:"Add valid co-ordinates.",placeholder:"Longitude",value:s,onChange:function(e){e.target.value.match(/^\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?){2}$/)?(V(!1),be(!1)):(V(!0),oe("Only valid co-ordinates allowed. No characters"),be(!0)),o(e.target.value)}}),Object(E.jsx)("br",{})]}),Object(E.jsx)("div",{className:"TextArea",children:Object(E.jsx)(h.a,{id:"area-query",labelText:"Area*",size:"lg",invalid:G,invalidText:X,helperText:"Input values only in alphabets - Public places/Hotels/Restaurants.",placeholder:"Query: Area/Address",value:N,onChange:function(e){e.target.value.match(/^[a-zA-Z]+$/)?(Z(!1),be(!1)):(Z(!0),ee("Only letters allowed. No special characters or numbers"),be(!0)),D(e.target.value)}})}),Object(E.jsx)("br",{}),Object(E.jsx)("div",{className:"CButtonArea",children:Object(E.jsx)(x.a,{type:"submit",disabled:de,children:" Get Places Near You "})})]}),he&&Object(E.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(E.jsx)("span",{children:"Latitude, Longitude, Area values cannot be empty"}),timeout:3e3,onClose:function(){xe(!1)},title:"Error Notification"}),fe&&Object(E.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(E.jsx)("span",{children:"Server cannot be reached"}),timeout:3e3,onClose:function(){me(!1)},title:"Error Notification"}),ge&&Object(E.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(E.jsx)("span",{children:"No data results available"}),timeout:3e3,onClose:function(){ye(!1)},title:"Error Notification"}),Object(E.jsx)(p.a,{active:I,description:"Active loading indicator",withOverlay:!0}),w.items&&Object(E.jsx)("div",{className:"TableDisplay",children:w.items&&Object(E.jsx)(f.a,{rows:w.items,headers:[{key:"name",header:"Name"},{key:"address",header:"Address"},{key:"location",header:"Location"}],children:function(e){e.rows;var t=e.headers,a=e.getHeaderProps;return Object(E.jsx)(m.a,{title:"Search Results",children:Object(E.jsxs)(S.a,{children:[Object(E.jsx)(T.a,{children:Object(E.jsx)(g.a,{children:t.map((function(e){return Object(E.jsx)(y.a,Object(d.a)(Object(d.a)({},a({header:e})),{},{children:e.header}))}))})}),Object(E.jsx)(A.a,{children:w.items&&w.items.map((function(e,t){return Object(E.jsxs)(g.a,{children:[Object(E.jsx)(C.a,{children:e.title}),Object(E.jsx)(C.a,{children:e.address.label}),Object(E.jsx)(C.a,{children:e.position.lat+","+e.position.lng})]},t)}))})]})})}})})]})};var P=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)({}),r=Object(u.a)(n,2),s=r[0],o=r[1],l=Object(c.useState)(!1),_=Object(u.a)(l,2),N=_[0],D=_[1],L=Object(c.useState)("A valid value is required"),P=Object(u.a)(L,2),w=P[0],R=P[1],k=Object(c.useState)(!1),F=Object(u.a)(k,2),I=F[0],H=F[1],W=Object(c.useState)(!1),z=Object(u.a)(W,2),q=z[0],K=z[1],B=Object(c.useState)(!1),J=Object(u.a)(B,2),U=J[0],V=J[1],M=Object(c.useState)(!1),$=Object(u.a)(M,2),G=$[0],Z=$[1],Y=Object(c.useState)(!1),Q=Object(u.a)(Y,2),X=Q[0],ee=Q[1];return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(O.a,{onSubmit:function(e){(e.preventDefault(),K(!0),a)?(function(){var e=Object(b.a)(j.a.mark((function e(){var t,c,i,n,r,s,l,b,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"dev"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CLIENT_ID:"",REACT_APP_CLIENT_SECRET:""}).REACT_APP_mode){e.next=24;break}return console.log("Mode is : DEV"),"",t={Authorization:""},e.next=7,fetch("https://geocode.search.hereapi.com/v1/geocode?q=".concat(a),{headers:t});case 7:return c=e.sent,e.next=10,c.json();case 10:return i=e.sent,n=i.items[0].position.lat.toString(),r=i.items[0].position.lng.toString(),e.next=15,fetch("https://weather.cc.api.here.com/weather/1.0/report.json?product=forecast_7days_simple&latitude=".concat(n,"&longitude=").concat(r),{headers:t});case 15:return c=e.sent,e.next=18,c.json();case 18:i=e.sent,o(Object(d.a)({},i)),K(!1),"[]"===JSON.stringify(i.dailyForecasts)&&(ee(!0),o({})),e.next=42;break;case 24:return console.log("not dev mode"),e.next=27,fetch("/addrgeocode?queryst=".concat(a));case 27:return s=e.sent,e.next=30,s.json();case 30:return l=e.sent,b=l.items[0].position.lat.toString(),u=l.items[0].position.lng.toString(),e.next=35,fetch("/getweeklyforecast?lat=".concat(b,"&long=").concat(u));case 35:return s=e.sent,e.next=38,s.json();case 38:l=e.sent,o(Object(d.a)({},l)),K(!1),"[]"===JSON.stringify(l.dailyForecasts)&&(ee(!0),o({}));case 42:e.next=48;break;case 44:e.prev=44,e.t0=e.catch(0),Z(!0),K(!1);case 48:case"end":return e.stop()}}),e,null,[[0,44]])})));return function(){return e.apply(this,arguments)}}()(),i("")):(V(!0),K(!1))},children:[Object(E.jsx)(h.a,{id:"location",labelText:"Location*",size:"lg",invalid:N,invalidText:w,helperText:"Input values only in alphabets - City/Town/Street.",placeholder:"Location",value:a,onChange:function(e){e.target.value.match(/^[a-zA-Z]+$/)?(D(!1),H(!1)):(D(!0),R("Only letters allowed. No special characters or numbers"),H(!0)),i(e.target.value)}}),Object(E.jsx)("br",{}),Object(E.jsx)("div",{className:"ButtonArea",children:Object(E.jsx)(x.a,{type:"submit",disabled:I,children:" Get Weather Forecast "})})]}),U&&Object(E.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(E.jsx)("span",{children:"Location input is empty. Please fill a valid Location"}),timeout:3e3,onClose:function(){V(!1)},title:"Error Notification"}),G&&Object(E.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(E.jsx)("span",{children:"Server cannot be reached"}),timeout:3e3,onClose:function(){Z(!1)},title:"Error Notification"}),X&&Object(E.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(E.jsx)("span",{children:"No results available"}),timeout:3e3,onClose:function(){ee(!1)},title:"Error Notification"}),Object(E.jsx)(p.a,{active:q,description:"Active loading indicator",withOverlay:!0}),s.dailyForecasts&&Object(E.jsx)("div",{className:"TableDisplay",children:s.dailyForecasts&&Object(E.jsx)(f.a,{rows:s.dailyForecasts.forecastLocation.forecast,headers:[{key:"day",header:"Day"},{key:"description",header:"Description"},{key:"max temperature",header:"Max Temperature"},{key:"min temperature",header:"Min Temperature"},{key:"weathericon",header:""}],children:function(e){e.rows;var t=e.headers,a=e.getHeaderProps;return Object(E.jsx)(m.a,{title:"Weather Results",children:Object(E.jsxs)(S.a,{children:[Object(E.jsx)(T.a,{children:Object(E.jsx)(g.a,{children:t.map((function(e){return Object(E.jsx)(y.a,Object(d.a)(Object(d.a)({},a({header:e})),{},{children:e.header}))}))})}),Object(E.jsx)(A.a,{children:s.dailyForecasts&&s.dailyForecasts.forecastLocation.forecast.map((function(e,t){return Object(E.jsxs)(g.a,{children:[Object(E.jsx)(C.a,{children:e.weekday}),Object(E.jsx)(C.a,{children:e.description}),Object(E.jsx)(C.a,{children:e.highTemperature}),Object(E.jsx)(C.a,{children:e.lowTemperature}),Object(E.jsx)(C.a,{children:Object(E.jsx)("img",{src:e.iconLink,alt:"Logo"})})]},t)}))})]})})}})})]})};var w=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)(""),r=Object(u.a)(n,2),s=r[0],o=r[1],l=Object(c.useState)({}),_=Object(u.a)(l,2),N=_[0],D=_[1],L=Object(c.useState)(!1),P=Object(u.a)(L,2),w=P[0],R=P[1],k=Object(c.useState)(!1),F=Object(u.a)(k,2),I=F[0],H=F[1],W=Object(c.useState)(!1),z=Object(u.a)(W,2),q=z[0],K=z[1],B=Object(c.useState)("A valid value is required"),J=Object(u.a)(B,2),U=J[0],V=J[1],M=Object(c.useState)("A valid value is required"),$=Object(u.a)(M,2),G=$[0],Z=$[1],Y=Object(c.useState)(!1),Q=Object(u.a)(Y,2),X=Q[0],ee=Q[1],te=Object(c.useState)(!1),ae=Object(u.a)(te,2),ce=ae[0],ie=ae[1],ne=Object(c.useState)(!1),re=Object(u.a)(ne,2),se=re[0],oe=re[1],le=Object(c.useState)(!1),je=Object(u.a)(le,2),de=je[0],be=je[1];return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(O.a,{onSubmit:function(e){(e.preventDefault(),R(!0),a&&s)?(function(){var e=Object(b.a)(j.a.mark((function e(){var t,c,i,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"dev"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CLIENT_ID:"",REACT_APP_CLIENT_SECRET:""}).REACT_APP_mode){e.next=16;break}return console.log("Mode is : DEV"),"",t={Authorization:""},e.next=7,fetch("https://weather.cc.api.here.com/weather/1.0/report.json?product=forecast_7days_simple&latitude=".concat(a,"&longitude=").concat(s),{headers:t});case 7:return c=e.sent,e.next=10,c.json();case 10:i=e.sent,D(Object(d.a)({},i)),R(!1),"[]"===JSON.stringify(i.dailyForecasts)&&(be(!0),D({})),e.next=25;break;case 16:return e.next=18,fetch("/getweeklyforecast?lat=".concat(a,"&long=").concat(s));case 18:return n=e.sent,e.next=21,n.json();case 21:r=e.sent,D(Object(d.a)({},r)),R(!1),"[]"===JSON.stringify(r.dailyForecasts)&&(be(!0),D({}));case 25:e.next=31;break;case 27:e.prev=27,e.t0=e.catch(0),oe(!0),R(!1);case 31:case"end":return e.stop()}}),e,null,[[0,27]])})));return function(){return e.apply(this,arguments)}}()(),i(""),o("")):(ie(!0),R(!1))},children:[Object(E.jsxs)("div",{className:"TextArea",children:[Object(E.jsx)(h.a,{id:"latitude",labelText:"Latitude*",size:"lg",invalid:I,invalidText:U,helperText:"Add valid co-ordinates.",placeholder:"Latitude",value:a,onChange:function(e){e.target.value.match(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?){2}$/)?(H(!1),ee(!1)):(H(!0),V("Only valid co-ordinates allowed. No characters"),ee(!0)),i(e.target.value)}})," ",Object(E.jsx)("br",{})]}),Object(E.jsx)("div",{className:"TextArea",children:Object(E.jsx)(h.a,{id:"longitude",labelText:"Longitude*",size:"lg",invalid:q,invalidText:G,helperText:"Add valid co-ordinates.",placeholder:"Longitude",value:s,onChange:function(e){e.target.value.match(/^\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?){2}$/)?(K(!1),ee(!1)):(K(!0),Z("Only valid co-ordinates allowed. No characters"),ee(!0)),o(e.target.value)}})}),Object(E.jsx)("br",{}),Object(E.jsx)("div",{className:"CButtonArea",children:Object(E.jsx)(x.a,{type:"submit",disabled:X,children:" Get Weather Forecast "})})]}),ce&&Object(E.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(E.jsx)("span",{children:"Latitude, Longitude values cannot be empty"}),timeout:3e3,onClose:function(){ie(!1)},title:"Error Notification"}),se&&Object(E.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(E.jsx)("span",{children:"Server cannot be reached"}),timeout:3e3,onClose:function(){oe(!1)},title:"Error Notification"}),de&&Object(E.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(E.jsx)("span",{children:"No data results available"}),timeout:3e3,onClose:function(){be(!1)},title:"Error Notification"}),Object(E.jsx)(p.a,{active:w,description:"Active loading indicator",withOverlay:!0}),N.dailyForecasts&&Object(E.jsx)("div",{className:"TableDisplay",children:N.dailyForecasts&&Object(E.jsx)(f.a,{rows:N.dailyForecasts.forecastLocation.forecast,headers:[{key:"day",header:"Day"},{key:"description",header:"Description"},{key:"max temperature",header:"Max Temperature"},{key:"min temperature",header:"Min Temperature"},{key:"weathericon",header:""}],children:function(e){e.rows;var t=e.headers,a=e.getHeaderProps;return Object(E.jsx)(m.a,{title:"Weather Results",children:Object(E.jsxs)(S.a,{children:[Object(E.jsx)(T.a,{children:Object(E.jsx)(g.a,{children:t.map((function(e){return Object(E.jsx)(y.a,Object(d.a)(Object(d.a)({},a({header:e})),{},{children:e.header}))}))})}),Object(E.jsx)(A.a,{children:N.dailyForecasts&&N.dailyForecasts.forecastLocation.forecast.map((function(e,t){return Object(E.jsxs)(g.a,{children:[Object(E.jsx)(C.a,{children:e.weekday}),Object(E.jsx)(C.a,{children:e.description}),Object(E.jsx)(C.a,{children:e.highTemperature}),Object(E.jsx)(C.a,{children:e.lowTemperature}),Object(E.jsx)(C.a,{children:Object(E.jsx)("img",{src:e.iconLink,alt:"Logo"})})]},t)}))})]})})}})})]})};var R=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)(""),r=Object(u.a)(n,2),s=r[0],o=r[1],l=Object(c.useState)({}),_=Object(u.a)(l,2),N=_[0],D=_[1],L=Object(c.useState)(!1),P=Object(u.a)(L,2),w=P[0],R=P[1],k=Object(c.useState)("A valid value is required"),F=Object(u.a)(k,2),I=F[0],H=F[1],W=Object(c.useState)(!1),z=Object(u.a)(W,2),q=z[0],K=z[1],B=Object(c.useState)(!1),J=Object(u.a)(B,2),U=J[0],V=J[1],M=Object(c.useState)(!1),$=Object(u.a)(M,2),G=$[0],Z=$[1],Y=Object(c.useState)(!1),Q=Object(u.a)(Y,2),X=Q[0],ee=Q[1];return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(O.a,{onSubmit:function(e){(e.preventDefault(),V(!0),a)?(function(){var e=Object(b.a)(j.a.mark((function e(){var t,c,i,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"dev"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CLIENT_ID:"",REACT_APP_CLIENT_SECRET:""}).REACT_APP_mode){e.next=16;break}return console.log("Mode is : DEV"),"",t={Authorization:""},e.next=7,fetch("https://weather.cc.api.here.com/weather/1.0/report.json?product=alerts&name=".concat(a),{headers:t});case 7:return c=e.sent,e.next=10,c.json();case 10:i=e.sent,"[]"!==JSON.stringify(i.alerts.alerts)?o(i.alerts.alerts[0].description):o("No Severe Weather"),D(Object(d.a)({},i)),V(!1),e.next=26;break;case 16:return console.log("not dev mode"),e.next=19,fetch("/getalerts?city=".concat(a));case 19:return n=e.sent,e.next=22,n.json();case 22:r=e.sent,"[]"!==JSON.stringify(r.alerts.alerts)?o(r.alerts.alerts[0].description):o("No Severe Weather"),D(Object(d.a)({},r)),V(!1);case 26:e.next=32;break;case 28:e.prev=28,e.t0=e.catch(0),ee(!0),V(!1);case 32:case"end":return e.stop()}}),e,null,[[0,28]])})));return function(){return e.apply(this,arguments)}}()(),i("")):(Z(!0),V(!1))},children:[Object(E.jsx)(h.a,{id:"location",labelText:"Location*",size:"lg",invalid:w,invalidText:I,helperText:"Input values only in alphabets - City/Town/Street.",placeholder:"Location",value:a,onChange:function(e){e.target.value.match(/^[a-zA-Z]+$/)?(R(!1),K(!1)):(R(!0),H("Only letters allowed. No special characters or numbers"),K(!0)),i(e.target.value)}}),Object(E.jsx)("br",{}),Object(E.jsx)("div",{className:"ButtonArea",children:Object(E.jsx)(x.a,{type:"submit",disabled:q,children:" Get Extreme Weather Warning "})})]}),G&&Object(E.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(E.jsx)("span",{children:"Location input is empty. Please fill a valid Location"}),timeout:3e3,onClose:function(){Z(!1)},title:"Error Notification"}),X&&Object(E.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(E.jsx)("span",{children:"Server cannot be reached"}),timeout:3e3,onClose:function(){ee(!1)},title:"Error Notification"}),Object(E.jsx)(p.a,{active:U,description:"Active loading indicator",withOverlay:!0}),N.alerts&&Object(E.jsx)("div",{className:"TableDisplay",children:N.alerts&&Object(E.jsx)(f.a,{rows:N.alerts.alerts,headers:[{key:"country",header:"Country"},{key:"state",header:"State"},{key:"latitude",header:"Latitude"},{key:"longitude",header:"Longitude"},{key:"alert",header:"Alert"}],children:function(e){e.rows;var t=e.headers,a=e.getHeaderProps;return Object(E.jsx)(m.a,{title:"Alerts Result",children:Object(E.jsxs)(S.a,{children:[Object(E.jsx)(T.a,{children:Object(E.jsx)(g.a,{children:t.map((function(e){return Object(E.jsx)(y.a,Object(d.a)(Object(d.a)({},a({header:e})),{},{children:e.header}))}))})}),Object(E.jsx)(A.a,{children:N.alerts&&Object(E.jsxs)(g.a,{children:[Object(E.jsx)(C.a,{children:N.alerts.country}),Object(E.jsx)(C.a,{children:N.alerts.state}),Object(E.jsx)(C.a,{children:N.alerts.latitude}),Object(E.jsx)(C.a,{children:N.alerts.longitude}),Object(E.jsx)(C.a,{children:s})]})})]})})}})})]})};var k=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(o.Header,{"aria-label":"IBM",children:Object(E.jsx)(o.HeaderName,{href:"#",prefix:"",children:Object(E.jsx)("div",{Style:"white-space: nowrap;",children:"HERE Geocoding Sample Application"})})}),Object(E.jsx)("div",{className:"App",children:Object(E.jsxs)("div",{className:"AppContent",children:[Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),Object(E.jsx)("h2",{children:"Location Details"}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),Object(E.jsxs)(r.a,{type:"container",children:[Object(E.jsx)(s.a,{id:"tab-g1",label:"Get Co-ordinates",children:Object(E.jsx)("div",{className:"TabArea",children:Object(E.jsx)(_,{})})}),Object(E.jsx)(s.a,{id:"tab-g2",label:"Get Area",children:Object(E.jsx)("div",{className:"TabArea",children:Object(E.jsx)(N,{})})})]}),Object(E.jsx)("h2",{children:"Search Services"}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),Object(E.jsxs)(r.a,{type:"container",children:[Object(E.jsx)(s.a,{id:"tab-s1",label:"By Area",children:Object(E.jsx)("div",{className:"TabArea",children:Object(E.jsx)(D,{})})}),Object(E.jsx)(s.a,{id:"tab-s2",label:"By Co-ordinates",children:Object(E.jsx)("div",{className:"TabArea",children:Object(E.jsx)(L,{})})})]}),Object(E.jsx)("h2",{children:" Weather Services "}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),Object(E.jsxs)(r.a,{type:"container",children:[Object(E.jsx)(s.a,{id:"tab-w1",label:"By Area",children:Object(E.jsx)("div",{className:"TabArea",children:Object(E.jsx)(P,{})})}),Object(E.jsx)(s.a,{id:"tab-w2",label:"By Co-ordinates",children:Object(E.jsx)("div",{className:"TabArea",children:Object(E.jsx)(w,{})})})]}),Object(E.jsx)("h2",{children:" Extreme Weather Warnings "}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),Object(E.jsx)(R,{}),Object(E.jsx)("br",{})]})})]})};a(127),a(128);n.a.render(Object(E.jsx)(k,{}),document.getElementById("root"))},81:function(e,t,a){}},[[129,1,2]]]);
//# sourceMappingURL=main.5cf6b5d6.chunk.js.map