(this.webpackJsonpdicegame=this.webpackJsonpdicegame||[]).push([[0],[,,,,,,,,,,,,function(e,c,a){},,function(e,c,a){},function(e,c,a){},function(e,c,a){},function(e,c,a){"use strict";a.r(c);var t=a(7),i=a.n(t),s=a(6),n=a(3),d=a(1),r=a.p+"static/media/logo.bd05682d.png",o=(a(12),a(0));var l=function(e){var c=e.children,a=e.onClick,t=e.color,i=void 0===t?"blue":t,s=e.className,n=void 0===s?"":s,d="Button ".concat(i," ").concat(n);return Object(o.jsx)("button",{className:d,onClick:a,children:c})},b=a.p+"static/media/dice-blue-1.acc61633.svg",j=a.p+"static/media/dice-blue-2.a9253142.svg",m=a.p+"static/media/dice-blue-3.5e73657c.svg",u=a.p+"static/media/dice-blue-4.3868e428.svg",p=a.p+"static/media/dice-blue-5.c6f0695c.svg",h=a.p+"static/media/dice-blue-6.befa9f1b.svg",v=a.p+"static/media/dice-red-1.3e1f8e72.svg",O=a.p+"static/media/dice-red-2.3f46b921.svg",g=a.p+"static/media/dice-red-3.04def020.svg",x=a.p+"static/media/dice-red-4.a61797f4.svg",f=a.p+"static/media/dice-red-5.a674e6f2.svg",N=a.p+"static/media/dice-red-6.8622ba61.svg",B={width:"100%",maxWidth:"100px",maxHeight:"100px"},A={blue:[b,j,m,u,p,h],red:[v,O,g,x,f,N]};var k=function(e){var c=e.color,a=void 0===c?"blue":c,t=e.num,i=void 0===t?1:t,s=A[a][i-1],n="".concat(a," ").concat(i);return Object(o.jsx)("img",{style:B,src:s,alt:n})};a(14);var w=function(e){var c=e.className,a=e.name,t=e.color,i=e.gameHistory,s=i[i.length-1]||1,n=i.reduce((function(e,c){return e+c}),0),d="Board ".concat(c," App-board");return Object(o.jsxs)("div",{className:d,children:[Object(o.jsx)("h2",{className:"Board-heading",children:a}),Object(o.jsx)(k,{className:"Dice",color:t,num:s}),Object(o.jsx)("h2",{className:"Board-heading",children:"\ucd1d\uc810"}),Object(o.jsx)("p",{children:n}),Object(o.jsx)("h2",{className:"Board-heading",children:"\uae30\ub85d"}),Object(o.jsx)("p",{children:i.join(", ")})]})};a(15);function y(e){return Math.ceil(Math.random()*e)}var C=function(){var e=Object(d.useState)([]),c=Object(n.a)(e,2),a=c[0],t=c[1],i=Object(d.useState)([]),b=Object(n.a)(i,2),j=b[0],m=b[1],u=Object(d.useState)(""),p=Object(n.a)(u,2),h=p[0],v=p[1],O=Object(d.useState)(""),g=Object(n.a)(O,2),x=g[0],f=g[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{className:"App-logo",src:r,alt:"\uc8fc\uc0ac\uc704 \uac8c\uc784 \ub85c\uace0"}),Object(o.jsx)("h1",{className:"App-title",children:"\uc8fc\uc0ac\uc704 \uac8c\uc784"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{className:"App-button",color:"blue",onClick:function(){var e=y(6),c=y(6);t([].concat(Object(s.a)(a),[e])),m([].concat(Object(s.a)(j),[c])),v(e>c?"Board-winner":""),f(c>e?"Board-winner":"")},children:"\ub358\uc9c0\uae30"}),Object(o.jsx)(l,{className:"App-button",color:"red",onClick:function(){t([]),m([]),v(""),f("")},children:"\ucc98\uc74c\ubd80\ud130"})]}),Object(o.jsxs)("div",{className:"App-boards",children:[Object(o.jsx)(w,{className:h,name:"\ub098",color:"blue",gameHistory:a}),Object(o.jsx)(w,{className:x,name:"\uc0c1\ub300",color:"red",gameHistory:j})]})]})};a(16);i.a.render(Object(o.jsx)(C,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.2fd5a7ac.chunk.js.map