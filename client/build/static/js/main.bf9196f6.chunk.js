(this.webpackJsonpencapsulate=this.webpackJsonpencapsulate||[]).push([[0],{100:function(e,t,s){},101:function(e,t,s){},102:function(e,t,s){},103:function(e,t,s){},104:function(e,t,s){},105:function(e,t,s){},106:function(e,t,s){},107:function(e,t,s){},111:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),i=s(21),n=s.n(i);s(75);function l(){var e=document.querySelector(".menu"),t=document.querySelectorAll(".menu li");e.classList.toggle("nav-active"),t.forEach((function(e,t){e.style.animation?e.style.animation="":e.style.animation="navLinkFade 0.5s ease forwards ".concat(t/7+.25,"s"),console.log(e)}))}var o=s(59),r=s.n(o),d=s(58),j=s.n(d),b=s(24),x=s.n(b),h=s(60),p=s.n(h),O=s(1);function m(){return Object(O.jsxs)("nav",{className:"banner",children:[Object(O.jsx)("section",{className:"mini-nav",children:Object(O.jsx)("p",{className:"fallSale",children:"Fall Sale starts 9/17! Free Shipping to US Customers, INTL coming soon"})}),Object(O.jsxs)("div",{className:"navbar",children:[Object(O.jsxs)("ul",{className:"menu",children:[Object(O.jsx)("li",{children:Object(O.jsxs)("a",{id:"accessories",href:"/accessories",children:[Object(O.jsx)("span",{className:"left",children:Object(O.jsx)(j.a,{})})," accessories"]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("a",{id:"seasons",href:"/seasons",children:[Object(O.jsx)("span",{className:"left",children:Object(O.jsx)(r.a,{})})," seasons"]})})]}),Object(O.jsx)("a",{href:"/",className:"logo-text",children:"enCapsulate"}),Object(O.jsxs)("ul",{className:"menu",children:[Object(O.jsx)("li",{children:Object(O.jsxs)("a",{id:"bag",href:"/bag",children:[Object(O.jsx)("span",{className:"left",children:Object(O.jsx)(x.a,{})}),"bag(0)"]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("a",{id:"login",href:"/login",children:[Object(O.jsx)("span",{className:"left",children:Object(O.jsx)(p.a,{})}),"login"]})})]}),Object(O.jsxs)("div",{className:"collapse",onClick:l,children:[Object(O.jsx)("div",{className:"line1"}),Object(O.jsx)("div",{className:"line2"}),Object(O.jsx)("div",{className:"line3"})]})]})]})}var u=s(25),f=(s(110),s(45),s(61),s(42)),g=s.n(f);s(100);function v(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),s=t[0],c=t[1],i=Object(a.useState)(""),n=Object(u.a)(i,2),l=n[0],o=n[1],r=Object(a.useState)(""),d=Object(u.a)(r,2),j=d[0],b=d[1],x=Object(a.useState)(""),h=Object(u.a)(x,2),p=h[0],m=h[1];return Object(O.jsx)("div",{class:"login",children:Object(O.jsx)("div",{class:"row title",children:Object(O.jsxs)("form",{class:"col s12",onSubmit:function(e){e.preventDefault(),g.a.post("/api/users",{firstName:s,lastName:l,email:j,password:p}).catch((function(e){console.log(e)}))},children:[Object(O.jsxs)("div",{class:"row names",children:[Object(O.jsxs)("div",{class:"input-field col s3 push-s3",children:[Object(O.jsx)("input",{id:"first_name",type:"text",class:"validate",name:"firstName",value:s,onChange:function(e){c(e.target.value)}}),Object(O.jsx)("label",{for:"first_name",children:"First Name"})]}),Object(O.jsx)("div",{className:"row names",children:Object(O.jsxs)("div",{class:"input-field col s3 push-s3",children:[Object(O.jsx)("input",{id:"last_name",type:"text",class:"validate",name:"lastName",value:l,onChange:function(e){o(e.target.value)}}),Object(O.jsx)("label",{for:"last_name",children:"Last Name"})]})})]}),Object(O.jsx)("div",{class:"row email",children:Object(O.jsxs)("div",{class:"input-field col s6 push-s3",children:[Object(O.jsx)("input",{id:"emailSignUp",type:"email",class:"validate",name:"email",value:j,onChange:function(e){b(e.target.value)}}),Object(O.jsx)("label",{for:"email",children:"Email"})]})}),Object(O.jsx)("div",{class:"row password",children:Object(O.jsxs)("div",{class:"input-field col s6 push-s3",children:[Object(O.jsx)("input",{id:"passwordSignUp",type:"password",class:"validate",name:"password",value:p,onChange:function(e){m(e.target.value)}}),Object(O.jsx)("label",{for:"password",children:"Password"})]})}),Object(O.jsx)("div",{className:"title",children:Object(O.jsxs)("button",{class:"waves-effect waves-light btn",type:"submit",children:[Object(O.jsx)("i",{class:"material-icons right"}),"Sign Up"]})}),Object(O.jsx)("div",{class:"row email",children:Object(O.jsxs)("div",{class:"input-field col s6 push-s3",children:[Object(O.jsx)("input",{id:"emailLogin",type:"email",class:"validate"}),Object(O.jsx)("label",{for:"email",children:"Email"})]})}),Object(O.jsx)("div",{class:"row password",children:Object(O.jsxs)("div",{class:"input-field col s6 push-s3",children:[Object(O.jsx)("input",{id:"passwordLogin",type:"password",class:"validate"}),Object(O.jsx)("label",{for:"password",children:"Password"})]})}),Object(O.jsx)("div",{className:"title",children:Object(O.jsxs)("button",{class:"waves-effect waves-light btn",children:[Object(O.jsx)("i",{class:"material-icons right"}),"Log In"]})})]})})})}s(101);function y(){return Object(O.jsx)("div",{className:"title",children:Object(O.jsx)("form",{action:"/create-checkout-session",method:"POST",children:Object(O.jsxs)("button",{type:"submit",className:"waves-effect waves-light btn",children:[Object(O.jsx)("i",{className:"material-icons right"}),"Checkout"]})})})}s(102);function N(){return Object(O.jsx)("header",{})}var w=s(12),S=(s(103),s.p+"static/media/winter-capsule.f8a60318.jpg"),C=s.p+"static/media/fall-capsule.7ceff239.jpg",k=s.p+"static/media/spring-capsule.3e626aa4.jpg",F=s.p+"static/media/summer-capsule.908e89c9.jpg",z=s(132),B=s(114),R=s(135),W=(s(104),s(138)),I=s(133),A=s(134),L=Object(z.a)((function(){return{card:{borderRadius:"1rem",boxShadow:"none",position:"relative",width:200,height:360,"&:after":{content:'""',display:"block",position:"absolute",width:"100%",height:"64%",bottom:0,zIndex:0,background:"linear-gradient(to top, #000, rgba(0,0,0,0))"}},content:{position:"absolute",zIndex:1,bottom:0,width:"100%",color:"white"},media:{height:"100%",width:"auto"}}}));function T(e){var t=L();return Object(O.jsxs)(I.a,{className:t.card,children:[Object(O.jsx)(A.a,{className:t.media,image:e.name}),Object(O.jsx)(W.a,{py:3,px:2,className:t.content})]})}var E=s(137),U=s(136),M=s(116),P=s(37),$=s.n(P),_=s(36),q=s.n(_),D=[S,C,k,F],J=Object(z.a)((function(e){return{gridContainer:{display:"flex",alignSelf:"center",alignItems:"center",position:"relative",top:"230px",margin:0,padding:0},paper:{padding:e.spacing(15),display:"flex",top:"230px",height:"60vh",width:"88%",justifyContent:"center",alignItems:"center",alignSelf:"center",color:"#fff",backgroundColor:"#1c1c1c",opacity:"90%",borderRadius:"10px"},grid:{position:"relative",height:"60vh",display:"flex",justifyContent:"center",alignItems:"center"},photoTitle:{backgroundColor:"#fff",opacity:"85%",color:"#1c1c1c",position:"fixed",display:"flex",top:"125px",justifyContent:"center",padding:"10px",borderRadius:"8px",fontFamily:"Raleway",fontSize:"35px",fontWeight:"bold"},price:{position:"absolute",zIndex:500,display:"flex",bottom:"65px",fontFamily:"Raleway",fontWeight:"bold",color:"#fff",fontSize:"18px"},bagButton:{position:"absolute",zIndex:500,display:"flex",bottom:"18px",fontFamily:"Raleway",fontWeight:"bold",padding:"9.5px",borderRadius:"8px",left:"300px"},photoFooter:{backgroundColor:"#fff",opacity:"85%",color:"#1c1c1c",position:"fixed",display:"flex",bottom:"20px",justifyContent:"center",width:"300px",padding:"8px",borderRadius:"8px",fontFamily:"Raleway",fontSize:"16px",fontWeight:"bold"},addBag1:{position:"absolute",zIndex:500,display:"flex",bottom:"20px",fontFamily:"Raleway",fontWeight:"bold",padding:"2px",textAlign:"center",alignContent:"center",borderRadius:"8px",backgroundColor:"#fff",width:"128px",height:"36px",left:"60px"},addBag2:{position:"absolute",zIndex:500,display:"flex",bottom:"20px",fontFamily:"Raleway",fontWeight:"bold",padding:"2px",textAlign:"center",alignContent:"center",borderRadius:"8px",backgroundColor:"#fff",width:"128px",height:"36px",left:"60px"},addBag3:{position:"absolute",zIndex:500,display:"flex",bottom:"20px",fontFamily:"Raleway",fontWeight:"bold",padding:"2px",textAlign:"center",alignContent:"center",borderRadius:"8px",backgroundColor:"#fff",width:"128px",height:"36px",left:"60px"},addBag4:{position:"absolute",zIndex:500,display:"flex",bottom:"20px",fontFamily:"Raleway",fontWeight:"bold",padding:"2px",textAlign:"center",alignContent:"center",borderRadius:"8px",backgroundColor:"#fff",width:"128px",height:"36px",left:"60px"}}}));function H(){var e=J(),t=c.a.useState({Spring:0,Winter:0,Fall:0,Summer:0}),s=Object(u.a)(t,2),a=s[0],i=s[1];return Object(O.jsx)("div",{class:"body",children:Object(O.jsx)("section",{className:e.gridContainer,children:Object(O.jsxs)(R.a,{container:!0,spacing:0,children:[Object(O.jsxs)(R.a,{className:e.grid,item:!0,xs:3,sm:3,children:[Object(O.jsx)("div",{className:e.photoTitle,children:"winter"}),Object(O.jsx)("p",{className:e.price,children:"$199"}),Object(O.jsx)("button",{className:e.bagButton,children:"Add to Bag"}),Object(O.jsxs)("div",{className:e.addBag1,children:[Object(O.jsxs)(U.a,{color:"secondary",badgeContent:a.Winter,children:[Object(O.jsx)(x.a,{})," "]}),Object(O.jsxs)(E.a,{children:[Object(O.jsxs)(M.a,{onClick:function(){i(Object(w.a)(Object(w.a)({},a),{},{Winter:Math.max(a.Winter-1,0)}))},children:[" ",Object(O.jsx)(q.a,{fontSize:"small"})]}),Object(O.jsxs)(M.a,{onClick:function(){i(Object(w.a)(Object(w.a)({},a),{},{Winter:a.Winter+1}))},children:[" ",Object(O.jsx)($.a,{fontSize:"small"})]})]})]}),Object(O.jsx)(B.a,{className:e.paper,children:Object(O.jsx)(T,{name:D[0]})}),Object(O.jsx)("div",{className:e.photoFooter,children:" Designed for colder climates, this capsule includes the perfect winter wear that will also leave your wallet warm and fuzzy."})]}),Object(O.jsxs)(R.a,{className:e.grid,item:!0,xs:3,sm:3,children:[Object(O.jsx)("div",{className:e.photoTitle,children:"spring"}),Object(O.jsx)("p",{className:e.price,children:"$149"}),Object(O.jsx)("button",{className:e.bagButton,children:"Add to Bag"}),Object(O.jsx)("div",{className:e.addBag2,children:Object(O.jsxs)("div",{children:[Object(O.jsxs)(U.a,{color:"secondary",badgeContent:a.Spring,children:[Object(O.jsx)(x.a,{})," "]}),Object(O.jsxs)(E.a,{children:[Object(O.jsxs)(M.a,{onClick:function(){i(Object(w.a)(Object(w.a)({},a),{},{Spring:Math.max(a.Spring-1,0)}))},children:[" ",Object(O.jsx)(q.a,{fontSize:"small"})]}),Object(O.jsxs)(M.a,{onClick:function(){i(Object(w.a)(Object(w.a)({},a),{},{Spring:a.Spring+1}))},children:[" ",Object(O.jsx)($.a,{fontSize:"small"})]})]})]})}),Object(O.jsx)(B.a,{className:e.paper,children:Object(O.jsx)(T,{name:D[1]})}),Object(O.jsx)("div",{className:e.photoFooter,children:" Whether it's going to be a sunny or soaked season, hot or humid, our spring capsule will accompany you every step of the way."})]}),Object(O.jsxs)(R.a,{className:e.grid,item:!0,xs:3,sm:3,children:[Object(O.jsx)("div",{className:e.photoTitle,children:"summer"}),Object(O.jsx)("p",{className:e.price,children:"$179"}),Object(O.jsx)("button",{className:e.bagButton,children:"Add to Bag"}),Object(O.jsx)("div",{className:e.addBag3,children:Object(O.jsxs)("div",{children:[Object(O.jsxs)(U.a,{color:"secondary",badgeContent:a.Summer,children:[Object(O.jsx)(x.a,{})," "]}),Object(O.jsxs)(E.a,{children:[Object(O.jsxs)(M.a,{onClick:function(){i(Object(w.a)(Object(w.a)({},a),{},{Summer:Math.max(a.Summer-1,0)}))},children:[" ",Object(O.jsx)(q.a,{fontSize:"small"})]}),Object(O.jsxs)(M.a,{onClick:function(){i(Object(w.a)(Object(w.a)({},a),{},{Summer:a.Summer+1}))},children:[" ",Object(O.jsx)($.a,{fontSize:"small"})]})]})]})}),Object(O.jsx)(B.a,{className:e.paper,children:Object(O.jsx)(T,{name:D[2]})}),Object(O.jsx)("div",{className:e.photoFooter,children:" No need to sweat your style this summer, this collection is sure to beat the heat and fashion police. Limited quantity, order now!"})]}),Object(O.jsxs)(R.a,{className:e.grid,item:!0,xs:3,sm:3,children:[Object(O.jsx)("div",{className:e.photoTitle,children:"fall"}),Object(O.jsx)("p",{className:e.price,children:"$179"}),Object(O.jsx)("div",{className:e.addBag4,children:Object(O.jsxs)("div",{children:[Object(O.jsxs)(U.a,{color:"secondary",badgeContent:a.Fall,children:[Object(O.jsx)(x.a,{})," "]}),Object(O.jsxs)(E.a,{children:[Object(O.jsxs)(M.a,{onClick:function(){i(Object(w.a)(Object(w.a)({},a),{},{Fall:Math.max(a.Fall-1,0)}))},children:[" ",Object(O.jsx)(q.a,{fontSize:"small"})]}),Object(O.jsxs)(M.a,{onClick:function(){i(Object(w.a)(Object(w.a)({},a),{},{Fall:a.Fall+1}))},children:[" ",Object(O.jsx)($.a,{fontSize:"small"})]})]})]})}),Object(O.jsx)("button",{className:e.bagButton,children:"Add to Bag"}),Object(O.jsx)(B.a,{className:e.paper,children:Object(O.jsx)(T,{name:D[3]})}),Object(O.jsx)("div",{className:e.photoFooter,children:" We dare you not to fall in love with these fall favorites. Although paired perfectly with Pumpkin Spice Latte's, this capsule is anything but basic."})]})]})})})}s(105);function G(){return Object(O.jsxs)("div",{className:"h3",children:[Object(O.jsx)("h3",{children:"Ethically Sourced. Sustainable. Unisex."}),Object(O.jsx)("div",{className:"paragraph",children:Object(O.jsx)("p",{children:"These practices reflect our passion here at enCapsulate. We strongly believe in conservation and an all-embracing approach to clothing. Help us leave behind the world a better way."})})]})}s(106);function K(){return Object(O.jsx)("div",{className:"checkout",children:Object(O.jsx)("p",{children:"Successful Order"})})}s(107);function Q(){return Object(O.jsx)("div",{className:"grid-div",children:Object(O.jsx)(T,{})})}var V=s(62),X=s(7);function Y(){return Object(O.jsx)(V.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)(m,{}),Object(O.jsxs)(X.c,{children:[Object(O.jsxs)(X.a,{exact:!0,path:"/",children:[Object(O.jsx)(N,{}),Object(O.jsx)(G,{})]}),Object(O.jsx)(X.a,{exact:!0,path:"/seasons",children:Object(O.jsx)(H,{})}),Object(O.jsx)(X.a,{exact:!0,path:"/bag",children:Object(O.jsx)(y,{})}),Object(O.jsx)(X.a,{exact:!0,path:"/login",children:Object(O.jsx)(v,{})}),Object(O.jsx)(X.a,{exact:!0,path:"/checkout",children:Object(O.jsx)(K,{})}),Object(O.jsx)(X.a,{exact:!0,path:"/products",children:Object(O.jsx)(Q,{})})]})]})})}n.a.render(Object(O.jsx)(Y,{}),document.getElementById("root"))},75:function(e,t,s){}},[[111,1,2]]]);
//# sourceMappingURL=main.bf9196f6.chunk.js.map