"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[9246],{40457:(e,t,n)=>{var a=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l.default}});var l=a(n(96572))},49246:(e,t,n)=>{var a=n(95318),l=n(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(63038)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(a,u,o):a[u]=e[u]}a.default=e,n&&n.set(e,a);return a}(n(67294)),o=n(10002),i=a(n(23825)),c=a(n(55203)),f=a(n(40457)),d=a(n(77797)),p=n(70603),s=n(48720);function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var v=function(){var e=(0,u.useState)(!1),t=(0,r.default)(e,2),n=t[0],a=t[1],l=(0,u.useState)(!1),f=(0,r.default)(l,2),m=f[0],v=f[1],E=(0,u.useState)(!1),b=(0,r.default)(E,2),g=b[0],w=b[1],y=(0,u.useState)(!1),h=(0,r.default)(y,2),k=h[0],O=h[1],C=(0,u.useContext)(o.ActiveBreakpointContext),_=(0,u.useContext)(p.ApplicationIntlContext),j=(0,u.useContext)(s.ThemeContext);if(m)throw new Error("Testing ApplicationBase's error boundary...");var A=u.default.createElement("p",null,"Active Breakpoint:"," ",C),P=u.default.createElement("p",null,"Active Locale:"," ",_.locale),S=u.default.createElement("p",null,"Active Theme:"," ",j.name),T=u.default.createElement("p",null,"Render Error:"," ",u.default.createElement("button",{id:"error",type:"button",onClick:function(){v(!0)}},"Throw")),x=u.default.createElement(u.default.Fragment,null,u.default.createElement("p",null,"Show Loading Overlay:"," ",u.default.createElement("button",{id:"overlay",type:"button",onClick:function(){a(!0)}},"Show")),u.default.createElement(i.default,{isOpen:n,message:"Testing ApplicationBase's loading overlay"})),B=u.default.createElement(u.default.Fragment,null,u.default.createElement("p",null,"Show Status View:"," ",u.default.createElement("button",{id:"statusView",type:"button",onClick:function(){O(!0)}},"Show")),k&&u.default.createElement(c.default,{message:"Testing ApplicationBase's status view",variant:"no-matching-results"})),M=u.default.createElement(u.default.Fragment,null,u.default.createElement("p",null,"Prompt on window close:"," ",u.default.createElement("button",{id:"prompt",type:"button",onClick:function(){w(!g)}},"Enable navigation prompt")),g?u.default.createElement(d.default,{description:"Testing ApplicationBase's navigation prompt handling"}):void 0);return u.default.createElement("div",null,A,P,S,T,x,B,M)},E=function(){return u.default.createElement(f.default,null,u.default.createElement(v,null))};t.default=E}}]);