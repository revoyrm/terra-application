"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[5725],{40996:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=m(t(67294)),i=m(t(45697)),r=m(t(47166)),o=m(t(50026)),l=m(t(66983)),d=["children"];function m(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s.apply(this,arguments)}function u(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.default.bind(l.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},f={children:i.default.string},x=function(e){var n=e.children,t=u(e,d),i=a.default.useContext(o.default),l=(0,r.default)(c(["button",i.className]),t.className);return a.default.createElement("button",s({},t,{type:"button",className:l,onBlur:p,onMouseDown:h,"data-focus-styles-enabled":!0}),n)};x.propTypes=f;var y=x;n.default=y},59278:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=d(t(67294)),i=d(t(45697)),r=d(t(47166)),o=d(t(50026)),l=d(t(30866));function d(e){return e&&e.__esModule?e:{default:e}}var m=r.default.bind(l.default),s={ariaLevel:i.default.oneOf(["2","3","4","5","6"]),children:i.default.node,variant:i.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important"])},u=function(e){var n=e.ariaLevel,t=e.variant,i=e.children,r=a.default.useContext(o.default);return a.default.createElement("div",{className:m("notice",t,r.className)},a.default.createElement("div",{className:m("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:m("title"),"aria-level":n},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"error"}(t))),a.default.createElement("div",{className:m("children")},a.default.Children.map(i,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};u.propTypes=s,u.defaultProps={ariaLevel:"2",variant:"important"};var c=u;n.default=c},47306:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=s(t(67294)),i=s(t(45697)),r=s(t(94184)),o=s(t(47166)),l=s(t(50026)),d=s(t(42620)),m=["title"];function s(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},u.apply(this,arguments)}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=o.default.bind(d.default),h={title:i.default.string},f=function(e){var n=e.title,t=c(e,m),i=a.default.useContext(l.default),o=(0,r.default)(p(["placeholder",i.className]),t.className),d=p(["inner"]);return a.default.createElement("div",u({},t,{className:o}),a.default.createElement("div",{className:d},a.default.createElement("p",{className:p("title")},n)))};f.propTypes=h,f.defaultProps={title:""};var x=f;n.default=x},34261:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(n,"Placeholder",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(n,"Button",{enumerable:!0,get:function(){return r.default}});var a=o(t(59278)),i=o(t(47306)),r=o(t(40996));function o(e){return e&&e.__esModule?e:{default:e}}},50329:(e,n,t)=>{t.r(n),t.d(n,{default:()=>p});var a=t(87462),i=t(44925),r=(t(67294),t(81254)),o=t(34261),l=t(2010),d=["components"],m={};function s(e){var n=e.components,t=(0,i.Z)(e,d);return(0,r.mdx)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)(l.ZP,{mdxType:"PropsTable"},(0,r.mdx)(l.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(l.O,{mdxType:"PropNameCell"},"bannerAction"),(0,r.mdx)(l.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"shape: {\n  text: {\n    type: 'string',\n    description: 'The text to display in the banner button.',\n  },\n  onClick: {\n    type: 'func',\n    description: 'The Callback function triggered when the action button is clicked. No parameters are passed.',\n  },\n},\n"))),(0,r.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The text and corresponding callback to populate the action button of the banner."))),(0,r.mdx)(l.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(l.O,{mdxType:"PropNameCell"},"description"),(0,r.mdx)(l.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The message content to display in the banner."))),(0,r.mdx)(l.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(l.O,{mdxType:"PropNameCell"},"onRequestClose"),(0,r.mdx)(l.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Callback function triggered when the dismiss button is clicked. The presence of this prop will cause\nthe dismiss button to be included on the banner. No parameters are passed."))),(0,r.mdx)(l.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(l.O,{mdxType:"PropNameCell"},"variant"),(0,r.mdx)(l.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'hazard-high'\n  'hazard-medium'\n  'hazard-low'\n  'error'\n  'unsatisfied'\n  'unverified'\n  'custom'\n],\n"))),(0,r.mdx)(l.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The variant of notification banner to be rendered. This renders the banner with the corresponding header and icon to the\nvariant concept."))),(0,r.mdx)(l.X2,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(l.O,{mdxType:"PropNameCell"},"custom"),(0,r.mdx)(l.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"shape: {\n  signalWord: {\n    type: 'string',\n    description: 'The keyword used to represent & emphasis the intention of banner description that is being shown to the user.',\n  },\n  iconClassName: {\n    type: 'string',\n    description: 'The class name used to set the icon as the background image to be used as the icon in the banner.',\n  },\n},\n"))),(0,r.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The pieces to populate a banner when ",(0,r.mdx)("inlineCode",{parentName:"p"},'variant="custom"'),".")))))}s.isMDXComponent=!0;var u=["components"],c={};function p(e){var n=e.components,t=(0,i.Z)(e,u);return(0,r.mdx)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"notification-banner"},"Notification Banner"),(0,r.mdx)("p",null,"A Notification Banner should be rendered by a component that needs to render a notification with information that needs to be brought to the user's attention. This is a non-disruptive notification that does not require immediate input or attention by the user."),(0,r.mdx)("p",null,"When rendered, the Notification Banner registers itself with the framework so it is prioritized correctly when any other rendered notification banners before they are is displayed in a list above all other content."),(0,r.mdx)(o.Notice,{ariaLevel:"2",variant:"caution",mdxType:"Notice"},(0,r.mdx)("p",null,"NotificationBanners are only supported when rendered within the following components:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/terra-application/application/terra-application/components/workspace-content"},"WorkspaceContent")),(0,r.mdx)("li",{parentName:"ul"},"Modal components disclosed by the ",(0,r.mdx)("a",{parentName:"li",href:"/terra-application/application/terra-application/components/modal-manager"},"ModalManager")),(0,r.mdx)("li",{parentName:"ul"},"Panel components disclosed by the ",(0,r.mdx)("a",{parentName:"li",href:"/terra-application/application/terra-application/components/slide-panel-manager"},"SlidePanelManager"))),(0,r.mdx)("p",null,"Rendering a NotificationBanner outside these locations will result in an exception being thrown.")),(0,r.mdx)("h2",{id:"banner-variants"},"Banner Variants"),(0,r.mdx)("p",null,"The Notification Banner can be used to bring awareness to a user’s risk and non-risk situations that may occur within an application; there are multiple variants provided for common situations. "),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Notification Banners shown for risk situations are intended to notify the user of hazards, such as risks to patient safety or causing financial harm, and provide options to mitigate or remove the hazard. There are three variants of risk oriented notification banners, based on the severity: ",(0,r.mdx)("inlineCode",{parentName:"p"},"hazard-high"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"hazard-medium")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"hazard-low"),". These variants are rigid to provide consistent icon and signal word pairs to prevent accidental confusion by the user of the banner's severity.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Notification Banners used in non-risk situations are intended to inform a user of system activity or required actions considered to be non-hazards. Currently there are three pre-defined non-risk oriented notification banner variants: ",(0,r.mdx)("inlineCode",{parentName:"p"},"error"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"unsatisfied")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"unverified"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"The custom variant allows for less common standardized non-hazard situations, requiring an icon and signal word be provided in addition to the common props. By choosing to create a custom Notification Banner, you are responsible for providing an icon that is themed correctly for the terra-default-theme, orion-fusion-theme, and clinical-lowlight-theme. See Terra’s ",(0,r.mdx)("a",{parentName:"p",href:"/terra-application/guides/terra-application/theme-strategy"},"Theme Strategy Guide")," for more info."))),(0,r.mdx)("h2",{id:"banner-priority-order"},"Banner Priority Order"),(0,r.mdx)("p",null,"Notification Banners are prioritized by variant and in the following order:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"hazard-high")," - displays a critical notification for current emergencies or situations of high severity that need to be addressed promptly"),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"hazard-medium")," - recommended to show moderately urgent notifications that are cautionary in nature and forecast potential risk"),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"hazard-low")," - recommended to provide the user with guidance and/or advice for completing an action"),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"error")," - recommended to provide feedback of a negative system status such as failures or limitations of the system"),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"unsatisfied")," - recommended to show the user that an unsatisfied or incomplete action needs to be addressed"),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"unverified")," - recommended to provide feedback that information from outside systems has been included but has yet to be verified by the user"),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"custom")," - not recommended but can be used to create a custom signal word-icon banner to display information to the user")),(0,r.mdx)("h3",{id:"notification-banners-in-the-fusion-theme"},"Notification Banners in the Fusion Theme"),(0,r.mdx)("p",null,"When Notification Banners are rendered within an application that has the orion-fusion-theme applied, the banners will be prioritized in the following order:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"hazard-high")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"error")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"hazard-medium")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"unsatisfied")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"unverified")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"hazard-low")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"custom"))),(0,r.mdx)("p",null,"The expected banner's usage when in the orion-fusion-theme are consistent with the descriptions above, the order is just changed."),(0,r.mdx)("h2",{id:"props"},"Props"),(0,r.mdx)(s,{mdxType:"PropsTable"}),(0,r.mdx)("h2",{id:"testing"},"Testing"),(0,r.mdx)("p",null,"The Notification Banner has the following data attribute available for browser tests:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The data attribute, ",(0,r.mdx)("inlineCode",{parentName:"li"},"data-terra-application-notification-banner")," can be used to validate the expected banner exists")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"describe('Notification Banner', () => {\n  it('renders a notification banner', () => {\n    $('#triggerErrorNotificationBanner').click();\n    $('[data-terra-application-notification-banner=\"error]').waitForExist();\n    Terra.validates.element('shows error banner', { selector: '#root' });\n  });\n});\n")))}p.isMDXComponent=!0},66983:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});const a={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});const a={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",title:"Notice-module__title___6H5tc",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",accessory:"Notice-module__accessory___wkLOG",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm"}},42620:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});const a={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}}}]);