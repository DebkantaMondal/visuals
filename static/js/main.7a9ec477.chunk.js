(this.webpackJsonpmainsite=this.webpackJsonpmainsite||[]).push([[0],{114:function(e,t,c){},115:function(e,t,c){},123:function(e,t,c){},124:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(25),i=c.n(n),r=(c(92),c(27)),l=c.n(r),o=c(38),j=c(3),d=(c(94),c(43),c(39)),b=c.n(d),h=c(20),u=c(8),O=c(24),x=c(62),p=(c(114),c(115),c(28)),m=c(66),g=c(56),f=(c(80),c(0));var v=function(e){var t=e.features,c=e.data;return Object(f.jsx)("div",{children:Object(f.jsx)(m.a,{fade:!0,pause:!1,variant:"primary",children:t.map((function(e,t){return Object(f.jsxs)(m.a.Item,{interval:2e3,children:[Object(f.jsx)(g.LazyLoadImage,{className:"d-block w-100",style:{width:"100%",height:"20rem",borderRadius:"15px"},src:"https://raw.githubusercontent.com/DebkantaMondal/blog-photo/main/"+c[e].photo,alt:"First slide",effect:"blur",width:"100%"}),Object(f.jsxs)(m.a.Caption,{children:[Object(f.jsx)("h3",{children:c[e].title}),Object(f.jsx)("p",{children:"This is My Photo Appreciation Blogs"})]})]},t)}))})})};function y(e){var t=e.features,c=e.data;return Object(f.jsx)("div",{children:Object(f.jsx)(p.a,{className:"mainCard",children:Object(f.jsx)(v,{features:t,data:c})})})}var k=c(127),w=c(128),N=c(129),S=c(130),_=c(131),B=c(132),T=c(133),F=c(134),M=c(135),D=c(136),C=c(137),I=c(138),P=c(139),A=c(140),E=c(141),R=c(142);var L=function(){var e=Object(u.f)(),t="https://debkantamondal.me/visuals/#";return Object(f.jsxs)("div",{children:[Object(f.jsx)(k.a,{url:t+e.pathname,quote:"Your Friend share you Blog No : Hello From Debkanta! This is My Photo Appreciation Blog. Read and Share More....",hashtag:"#debkanta_mondal_photo_blog",children:Object(f.jsx)(w.a,{size:36})}),Object(f.jsx)(N.a,{url:t+e.pathname,quote:"Hello From Debkanta! This is My Photo Appreciation Blog. Read and Share More....",hashtag:"#debkanta_mondal_photo_blog",children:Object(f.jsx)(S.a,{size:36})}),Object(f.jsx)(_.a,{url:t+e.pathname,quote:"Hello From Debkanta! This is My Photo Appreciation Blog. Read and Share More....",hashtag:"#debkanta_mondal_photo_blog",children:Object(f.jsx)(B.a,{size:36})}),Object(f.jsx)(T.a,{url:t+e.pathname,quote:"Hello From Debkanta! This is My Photo Appreciation Blog. Read and Share More....",hashtag:"#debkanta_mondal_photo_blog",children:Object(f.jsx)(F.a,{size:36})}),Object(f.jsx)(M.a,{url:t+e.pathname,quote:"Hello From Debkanta! This is My Photo Appreciation Blog. Read and Share More....",hashtag:"#debkanta_mondal_photo_blog",children:Object(f.jsx)(D.a,{size:36})}),Object(f.jsx)(C.a,{url:t+e.pathname,quote:"Hello From Debkanta! This is My Photo Appreciation Blog. Read and Share More....",hashtag:"#debkanta_mondal_photo_blog",children:Object(f.jsx)(I.a,{size:36})}),Object(f.jsx)(P.a,{url:t+e.pathname,quote:"Hello From Debkanta! This is My Photo Appreciation Blog. Read and Share More....",hashtag:"#debkanta_mondal_photo_blog",children:Object(f.jsx)(A.a,{size:36})}),Object(f.jsx)(E.a,{url:t+e.pathname,quote:"Hello From Debkanta! This is My Photo Appreciation Blog. Read and Share More....",hashtag:"#debkanta_mondal_photo_blog",children:Object(f.jsx)(R.a,{size:36})})]})};var q=function(e){var t=Object(a.useState)(!1),c=Object(j.a)(t,2),s=c[0],n=c[1],i=function(){return n(!1)},r=function(){return n(!0)},l=e.posts,o=e.mediaLink,d=Object.keys(l).slice(Object.keys(l).length-2,Object.keys(l).length);return"Null"===l?Object(f.jsx)("div",{className:"load",children:Object(f.jsxs)("div",{className:"lds-roller",children:[Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{})]})}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(y,{features:d,data:l}),Object(f.jsx)("center",{children:Object(f.jsx)("p",{className:"blogNo"})}),Object(f.jsxs)("p",{className:"recentBlogTitle",children:["Recent Blogs (",e.no,")"]}),Object(f.jsx)("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap",flexDirection:"row"},children:Object.keys(l).reverse().map((function(e,t){return Object(f.jsxs)("div",{className:"movie_card",id:"bright",children:[Object(f.jsxs)("div",{className:"info_section",children:[Object(f.jsxs)("div",{className:"movie_header",children:[Object(f.jsx)(h.b,{to:"/blog/"+l[e]._id+"/show",style:{textDecoration:"none"},children:Object(f.jsx)("img",{className:"locandina",src:o+l[e].photo,alt:"blog-post"})}),Object(f.jsx)(h.b,{to:"/blog/"+l[e]._id+"/show",style:{textDecoration:"none"},children:Object(f.jsx)("h3",{children:l[e].title})}),Object(f.jsx)("h5",{children:"( "+new Date(l[e].updatedAt).toLocaleDateString()+" )"}),Object(f.jsx)("span",{className:"minutes",children:0===l[e].desc.split(" ").length?"calculating...":l[e].desc.split(" ").length+" words"}),Object(f.jsx)("p",{className:"type",children:"Photo Appreciation"})]}),Object(f.jsx)(h.b,{to:"/blog/"+l[e]._id+"/show",style:{textDecoration:"none"},children:Object(f.jsx)("div",{className:"movie_desc",children:Object(f.jsx)("p",{className:"text",children:l[e].desc})})}),Object(f.jsx)("div",{className:"movie_social",children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)("i",{className:"material-icons",onClick:r,children:"share"})}),Object(f.jsxs)("li",{children:[Object(f.jsx)("i",{style:{color:"red"},className:"material-icons",children:"\ue87d"})," ",Object(f.jsx)("span",{className:"like",style:{color:"#111"},children:Object(f.jsx)("b",{children:l[e].likes.length+" likes"})})]})]})}),Object(f.jsxs)(O.a,{show:s,onHide:i,children:[Object(f.jsx)(O.a.Header,{closeButton:!0,children:Object(f.jsx)(O.a.Title,{children:"Share Through"})}),Object(f.jsx)(O.a.Body,{children:Object(f.jsx)(L,{})}),Object(f.jsx)(O.a.Footer,{children:Object(f.jsx)(x.a,{variant:"secondary",onClick:i,children:"Close"})})]})]}),Object(f.jsx)("div",{className:"blur_back",style:{backgroundImage:"url(".concat(o+l[e].photo,")")}})]},t)}))})]})};var z=function(){return Object(f.jsx)("div",{style:{marginTop:"4.4rem"},children:"About"})},H=c(42),U=c(63),Y=c(50);var W=function(){var e=Object(a.useState)("transparent"),t=Object(j.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)("1"),i=Object(j.a)(n,2),r=i[0],l=i[1],o=Object(a.useState)("rgb(77, 69, 194)"),d=Object(j.a)(o,2),b=d[0],u=d[1];return Object(a.useState)((function(){document.addEventListener("scroll",(function(){var e=window.scrollY<100?"transparent":"#eee",t=(window.scrollY,"rgb(77, 69, 194)"),c=window.scrollY<100?"1.2":"0.9";s(e),u(t),l(c)}))}),[]),Object(f.jsx)("div",{className:"top",children:Object(f.jsx)(H.a,{expand:"lg",variant:"light",id:"navbar_top",className:"navbar",fixed:"top",style:{background:c,opacity:r},children:Object(f.jsxs)(U.a,{children:[Object(f.jsx)(H.a.Brand,{style:{color:b},className:"logo",children:Object(f.jsx)("b",{children:"Visuals | Photo Blog"})}),Object(f.jsx)(H.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(f.jsxs)(H.a.Collapse,{id:"basic-navbar-nav",children:[Object(f.jsx)(Y.a,{className:"me-auto",children:Object(f.jsx)("span",{style:{color:b},children:Object(f.jsx)(h.b,{to:"/",className:"link",children:Object(f.jsx)("b",{children:"HOME"})})})}),Object(f.jsx)(Y.a,{className:"me-auto",children:Object(f.jsx)("span",{style:{color:b},children:Object(f.jsx)(h.b,{to:"/about",className:"link",children:Object(f.jsx)("b",{children:"ABOUT"})})})}),Object(f.jsx)(Y.a,{className:"me-auto",children:Object(f.jsx)("span",{style:{color:b},children:Object(f.jsx)(h.b,{to:"/faq",className:"link",children:Object(f.jsx)("b",{children:"FAQs"})})})}),Object(f.jsx)(Y.a,{className:"me-auto",children:Object(f.jsx)("span",{style:{color:b},children:Object(f.jsx)(h.b,{to:"/viewer/login",className:"link",children:Object(f.jsx)("b",{children:"LOGIN"})})})}),Object(f.jsx)(Y.a,{className:"me-auto",children:Object(f.jsx)("span",{style:{color:b},children:Object(f.jsx)(h.b,{to:"/viewer/register",className:"link",children:Object(f.jsx)("b",{children:"SIGN UP"})})})})]})]})})})},V=c(87);var G=function(){var e=Object(u.g)().id,t=Object(a.useState)(!1),c=Object(j.a)(t,2),s=c[0],n=c[1],i=function(){return n(!1)},r=Object(a.useState)({}),d=Object(j.a)(r,2),h=d[0],m=d[1],v=Object(a.useState)("https://raw.githubusercontent.com/DebkantaMondal/blog-photo/main/undefined"),y=Object(j.a)(v,2),k=y[0],w=y[1],N=Object(a.useState)([]),S=Object(j.a)(N,2),_=S[0],B=S[1],T=Object(a.useState)("none"),F=Object(j.a)(T,2),M=F[0],D=F[1],C=Object(a.useState)(""),I=Object(j.a)(C,2),P=I[0],A=I[1],E=Object(a.useState)("68%"),R=Object(j.a)(E,2),q=R[0],z=R[1],H=Object(a.useState)("30%"),U=Object(j.a)(H,2),Y=U[0],W=U[1];Object(a.useEffect)((function(){var t=function(){var t=Object(o.a)(l.a.mark((function t(){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("".concat("http://ec2-16-170-223-156.eu-north-1.compute.amazonaws.com/api","/posts/").concat(e));case 2:c=t.sent,m(c.data),w("".concat("https://raw.githubusercontent.com/DebkantaMondal/blog-photo/main","/").concat(h.photo)),K(c.data.desc.split(" ").length),ee(c.data.title.split(" ").length),se(((c.data.desc.split(" ").length+c.data.title.split(" ").length)/250).toFixed(4)),B(c.data.desc.split(":"));case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t(),document.addEventListener("scroll",(function(){var e=window.scrollY<200?"none":"block",t=window.scrollY>950?"0%":"68%",c=window.scrollY>950?"100%":"30%";z(t),W(c),A("sticky"),D(e)}))}),[e,h.photo]);var G=Object(a.useState)(0),Q=Object(j.a)(G,2),J=Q[0],K=Q[1],X=Object(a.useState)(0),Z=Object(j.a)(X,2),$=Z[0],ee=Z[1],te=Object(a.useState)(0),ce=Object(j.a)(te,2),ae=ce[0],se=ce[1],ne=Object(a.useState)(""),ie=Object(j.a)(ne,2),re=ie[0],le=ie[1];return"https://raw.githubusercontent.com/DebkantaMondal/blog-photo/main/undefined"===k?Object(f.jsx)("div",{className:"load",style:{marginTop:"4.5rem"},children:Object(f.jsxs)("div",{class:"lds-roller",children:[Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{})]})}):Object(f.jsx)("div",{children:Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(p.a,{style:{border:"0px"},children:[Object(f.jsx)(g.LazyLoadImage,{variant:"top",src:k,style:{width:"100%",height:"450px",marginTop:"4.4rem"},effect:"blur",alt:"banner"}),Object(f.jsxs)(p.a.Footer,{className:"singleInfo",children:["Words in Title : ",0===$?"calculating...":$,"   | Words in Blog : ",0===J?"calculating...":J,"    | Approx. Reading Time : ",0===ae?"calculating...":ae+" mnts","   | Help Tools :  "," ",Object(f.jsx)("button",{className:"button btn-2",onClick:function(){document.getElementById("title").style.fontSize="x-large",document.getElementById("desc").style.fontSize="x-large",document.getElementById("title").style.fontWeight="bold"},children:"Font Increase"})," ",Object(f.jsx)("button",{className:"button btn-2",onClick:function(){document.getElementById("title").style.fontSize="medium",document.getElementById("desc").style.fontSize="medium",document.getElementById("title").style.fontWeight="bold"},children:"Font Decrease"})," ",Object(f.jsx)("button",{className:"button btn-2",onClick:function(){document.getElementById("title").style.fontSize="large",document.getElementById("title").style.fontWeight="bold",document.getElementById("desc").style.fontSize="large",document.getElementById("desc").style.lineHeight="normal"},children:"Font Default"})," ",Object(f.jsx)("button",{className:"button btn-2",onClick:function(){document.getElementById("desc").style.lineHeight=3},children:"Line Spacing"})]}),Object(f.jsx)(p.a.Footer,{className:"text-muted",style:{display:"flex",justifyContent:"center",color:"#182330",fontWeight:"bolder"},children:Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{style:{marginRight:"2rem",cursor:"pointer"},onClick:function(){return n(!0)},children:[Object(f.jsx)("i",{className:"material-icons",children:"share"})," ","Share"]}),Object(f.jsxs)(O.a,{show:s,onHide:i,children:[Object(f.jsx)(O.a.Header,{closeButton:!0,children:Object(f.jsx)(O.a.Title,{children:"Share Through"})}),Object(f.jsx)(O.a.Body,{children:Object(f.jsx)(L,{})}),Object(f.jsx)(O.a.Footer,{children:Object(f.jsx)(x.a,{variant:"secondary",onClick:i,children:"Close"})})]}),Object(f.jsxs)("span",{style:{marginRight:"2rem"},children:[Object(f.jsx)("i",{className:"material-icons",children:"\ue87d"})," ","Like Me"]}),Object(f.jsxs)("span",{style:{marginRight:"2rem"},children:[Object(f.jsx)("i",{onClick:function(){le(""===re?"Save To Bookmark Feature is Not Activated Yet...It is Activate Very Soon....":"")},className:"material-icons",children:"bookmarks"})," ","Read Later"]})]})}),Object(f.jsx)(p.a.Footer,{className:"text-muted",style:{display:"visible"},children:""===re?Object(f.jsx)("span",{}):Object(f.jsx)(V.a,{className:"alert alert-danger",children:Object(f.jsx)("center",{children:re})})}),Object(f.jsxs)(p.a.Body,{style:{color:"#182330"},children:[Object(f.jsx)(p.a.Title,{id:"title",className:"singleTitle",children:Object(f.jsx)("h3",{children:Object(f.jsx)("center",{children:h.title})})}),Object(f.jsx)(p.a.Text,{id:"desc",children:_.map((function(e,t){return t%2===0?Object(f.jsx)("p",{children:Object(f.jsx)("b",{children:e+" :"})}):Object(f.jsx)("p",{children:e})}))}),Object(f.jsx)("img",{src:k,className:"shortImage",style:{width:Y,marginLeft:q,display:M,position:P},alt:"blog"})]}),Object(f.jsx)("div",{style:{color:"#182330",fontWeight:"bolder"},children:Object(f.jsx)(p.a.Footer,{className:"text-muted",children:Object(f.jsx)("center",{children:"Blog Author : "+h.username+"    |     Last Updated At : "+new Date(h.updatedAt).toDateString()})})})]})})})};var Q=function(){return Object(f.jsx)("div",{children:"FAQs"})},J=(c(123),function(e){for(var t=e.postsPerPage,c=e.totalPosts,a=e.paginate,s=[],n=1;n<=Math.ceil(c/t);n++)s.push(n);return Object(f.jsx)("nav",{children:Object(f.jsx)("center",{style:{display:"flex",justifyContent:"center"},children:Object(f.jsx)("ul",{className:"pagination",children:s.map((function(e){return Object(f.jsx)("li",{className:"page-item",children:Object(f.jsx)("span",{onClick:function(){return a(e)},className:"page-link",children:e})},e)}))})})})});var K=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(H.a,{className:"footer",children:Object(f.jsxs)(U.a,{className:"foot",children:[Object(f.jsx)("div",{children:Object(f.jsxs)("ul",{className:"footDisplay",children:[Object(f.jsx)("li",{children:"About Us"}),Object(f.jsx)("li",{children:"Privacy Policy"}),Object(f.jsx)("li",{children:"Terms & Services"}),Object(f.jsx)("li",{children:"Contact Us"}),Object(f.jsx)("li",{children:"FAQs"})]})}),Object(f.jsx)("div",{children:Object(f.jsx)("ul",{className:"footDisplaycopyright",children:Object(f.jsxs)("li",{children:["Copyright@2021 Visuals",Object(f.jsx)("br",{})," by Debkanta Mondal , All Copyrights Reserved"]})})}),Object(f.jsx)("div",{children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{className:"icon fa fa-facebook"}),Object(f.jsx)("li",{className:"icon fa fa-twitter"}),Object(f.jsx)("li",{className:"icon fa fa-youtube"})]})})]})})})};c(83);function X(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),i=Object(j.a)(n,2),r=i[0],d=i[1],h=Object(a.useState)(""),u=Object(j.a)(h,2),O=u[0],x=u[1],p=Object(a.useState)(""),m=Object(j.a)(p,2),g=m[0],v=m[1],y=Object(a.useState)(""),k=Object(j.a)(y,2),w=k[0],N=k[1],S=Object(a.useState)(""),_=Object(j.a)(S,2),B=_[0],T=_[1],F=Object(a.useState)(!0),M=Object(j.a)(F,2),D=M[0],C=M[1],I=Object(a.useState)(!1),P=Object(j.a)(I,2),A=P[0],E=P[1],R=Object(a.useState)(!1),L=Object(j.a)(R,2),q=L[0],z=L[1];Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===c){e.next=5;break}return e.next=3,b.a.post("https://my-blog-backend-deb.herokuapp.com/api/viewer/authenticate/usernameValidate",{username:c}).then((function(e){N(e.data),"Username already taken"===w?C(!1):(E(!1),C(!0))}));case 3:e.next=6;break;case 5:N("");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),z(""!==g&&g===O);var t=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!D){e.next=9;break}if(!q){e.next=6;break}return e.next=4,b.a.post("https://my-blog-backend-deb.herokuapp.com/api/viewer/authenticate/register",{username:c,email:r,password:O}).then((function(e){T(e?"R":"Error in Registration")})).catch((function(e){T("Same Email Used Detected. Try with New . Sign Up Error")}));case 4:e.next=7;break;case 6:T("Password Not Matched");case 7:e.next=10;break;case 9:T("This Username is already taken For Signup. Try again");case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();A&&t()}),[c,D,w,A,q,g,O,r]);return Object(f.jsx)("div",{style:{marginTop:"4.4rem"},children:Object(f.jsx)("div",{class:"form_wrapper",children:Object(f.jsxs)("div",{class:"form_container",children:[Object(f.jsx)("div",{class:"title_container",children:Object(f.jsx)("h2",{children:"Sign Up with Visuals"})}),Object(f.jsx)("div",{class:"row clearfix",children:Object(f.jsxs)("div",{class:"",children:[Object(f.jsx)("p",{children:"R"===B?Object(f.jsx)("span",{style:{color:"green"},children:"You're Successfully Registered."}):Object(f.jsx)("span",{style:{color:"red"},children:B})}),Object(f.jsxs)("form",{onSubmit:function(e){return function(e,t){e.preventDefault(),E(t)}(e,!0)},children:[Object(f.jsxs)("div",{class:"input_field",children:[" ",Object(f.jsx)("span",{children:Object(f.jsx)("i",{"aria-hidden":"true",class:"fa fa-user"})}),Object(f.jsx)("input",{type:"text",name:"username",value:c,placeholder:"Username",onChange:function(e){return s(e.target.value)},required:!0}),Object(f.jsx)("br",{}),Object(f.jsx)("p",{children:"Username already taken"===w?Object(f.jsx)("span",{style:{color:"red"},children:w}):Object(f.jsx)("span",{style:{color:"green"},children:w})})]}),Object(f.jsxs)("div",{class:"input_field",children:[" ",Object(f.jsx)("span",{children:Object(f.jsx)("i",{"aria-hidden":"true",class:"fa fa-envelope"})}),Object(f.jsx)("input",{type:"email",name:"email",value:r,onChange:function(e){return d(e.target.value)},placeholder:"Email",required:!0})]}),Object(f.jsxs)("div",{class:"input_field",children:[" ",Object(f.jsx)("span",{children:Object(f.jsx)("i",{"aria-hidden":"true",class:"fa fa-lock"})}),Object(f.jsx)("input",{type:"password",name:"password",value:O,onChange:function(e){return x(e.target.value)},placeholder:"Password",required:!0})]}),Object(f.jsxs)("div",{class:"input_field",children:[" ",Object(f.jsx)("span",{children:Object(f.jsx)("i",{"aria-hidden":"true",class:"fa fa-lock"})}),Object(f.jsx)("input",{type:"password",name:"password",value:g,onChange:function(e){return v(e.target.value)},placeholder:"Re-type Password",required:!0}),Object(f.jsx)("p",{children:""===g?"":g===O?Object(f.jsx)("span",{style:{color:"green"},children:"Matched"}):Object(f.jsx)("span",{style:{color:"red"},children:"Not Matched"})})]}),Object(f.jsxs)("div",{class:"input_field checkbox_option",children:[Object(f.jsx)("input",{type:"checkbox",id:"cb1",required:!0}),Object(f.jsx)("label",{for:"cb1",children:"I agree with terms and conditions"})]}),Object(f.jsxs)("div",{class:"input_field checkbox_option",children:[Object(f.jsx)("input",{type:"checkbox",id:"cb2",required:!0}),Object(f.jsx)("label",{for:"cb2",children:"I want to receive the newsletter"})]}),Object(f.jsx)("input",{class:"button",type:"submit",value:"SIGN UP"})]})]})})]})})})}function Z(){return Object(f.jsx)("div",{style:{marginTop:"4.4rem"},children:Object(f.jsx)("div",{class:"form_wrapper",children:Object(f.jsxs)("div",{class:"form_container",children:[Object(f.jsx)("div",{class:"title_container",children:Object(f.jsx)("h2",{children:"Login with Visuals"})}),Object(f.jsx)("div",{class:"row clearfix",children:Object(f.jsx)("div",{class:"",children:Object(f.jsxs)("form",{children:[Object(f.jsxs)("div",{class:"input_field",children:[" ",Object(f.jsx)("span",{children:Object(f.jsx)("i",{"aria-hidden":"true",class:"fa fa-user"})}),Object(f.jsx)("input",{type:"text",name:"username",placeholder:"Username",required:!0})]}),Object(f.jsxs)("div",{class:"input_field",children:[" ",Object(f.jsx)("span",{children:Object(f.jsx)("i",{"aria-hidden":"true",class:"fa fa-lock"})}),Object(f.jsx)("input",{type:"password",name:"password",placeholder:"Password",required:!0})]}),Object(f.jsx)("input",{class:"button",type:"submit",value:"LOGIN"})]})})})]})})})}var $=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(1),i=Object(j.a)(n,2),r=i[0],d=i[1],O=Object(a.useState)(12),x=Object(j.a)(O,1)[0],p=Object(a.useState)(0),m=Object(j.a)(p,2),g=m[0],v=m[1],y="".concat("https://raw.githubusercontent.com/DebkantaMondal/blog-photo/main","/");Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat("http://ec2-16-170-223-156.eu-north-1.compute.amazonaws.com/api","/posts"));case 2:t=e.sent,s(t.data),v(t.data.length);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var k=void 0===c?"Null":c,w=r*x,N=w-x,S=0===k.length?"Null":k.slice(N,w);return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)(h.a,{basename:"/",children:[Object(f.jsx)(W,{}),Object(f.jsxs)(u.c,{children:[Object(f.jsxs)(u.a,{path:"/",exact:!0,children:[Object(f.jsx)(q,{posts:S,mediaLink:y,no:g}),Object(f.jsx)(J,{postsPerPage:x,totalPosts:k.length,paginate:function(e){return d(e)}})]}),Object(f.jsx)(u.a,{path:"/about",children:Object(f.jsx)(z,{})}),Object(f.jsx)(u.a,{path:"/faq",children:Object(f.jsx)(Q,{})}),Object(f.jsx)(u.a,{path:"/blog/:id/show",exact:!0,children:Object(f.jsx)(G,{})}),Object(f.jsx)(u.a,{path:"/viewer/register",children:Object(f.jsx)(X,{})}),Object(f.jsx)(u.a,{path:"/viewer/login",children:Object(f.jsx)(Z,{})})]})]}),Object(f.jsx)(K,{})]})},ee=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,143)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)($,{})}),document.getElementById("root")),ee()},43:function(e,t,c){},83:function(e,t,c){},92:function(e,t,c){}},[[124,1,2]]]);
//# sourceMappingURL=main.7a9ec477.chunk.js.map