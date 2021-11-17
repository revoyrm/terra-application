"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[472],{92793:(e,a,n)=>{n.r(a),n.d(a,{default:()=>c});var t=n(87462),d=n(44925),l=(n(67294),n(81254)),m=n(66722),i=n(2010),r=["components"],p={};function o(e){var a=e.components,n=(0,d.Z)(e,r);return(0,l.mdx)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)(i.ZP,{mdxType:"PropsTable"},(0,l.mdx)(i.X2,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(i.O,{mdxType:"PropNameCell"},"primaryNavigationItems"),(0,l.mdx)(i.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  shape: {\n    path: {\n      type: 'string',\n      required: true,\n      description: 'The url path to the primary navigation item.',\n    },\n    text: {\n      type: 'string',\n      required: true,\n      description: 'The text for the title of the primary navigation item.',\n    },\n    contentExtension: {\n      type: 'string',\n      required: true,\n      description: 'The extension to search for when generating pages for this primary navigation item.',\n    },\n    additionalContent: {\n      arrayOf: [{\n        shape: {\n          title: {\n            type: 'string',\n            required: true,\n            description: 'The page title for the content.',\n          },\n          filePath: {\n            type: 'string',\n            required: true,\n            description: 'The file path to use to import the content.',\n          },\n        },\n      }],\n    },\n  },\n}],\n"))),(0,l.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"[{\n  path: '/home',\n  text: 'Home',\n  contentExtension: 'home',\n  additionalContent: [\n    {\n      title: 'Home',\n      filePath: 'full/path/to/package/README.md',\n    },\n  ],\n}, {\n  path: '/components',\n  text: 'Components',\n  contentExtension: 'doc',\n}, {\n  path: '/tests',\n  text: 'Tests',\n  contentExtension: 'test',\n}]\n"))),(0,l.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"An array describing the primary navigation items for the site."),(0,l.mdx)("p",null,"Each navigation item must include a path, text and the content extension to include."),(0,l.mdx)("p",null,"Optionally additional content may be included if it wouldn't be found by the extension search. Additional content must have a title and path and can only be displayed as a first level item in secondary navigation."))),(0,l.mdx)(i.X2,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(i.O,{mdxType:"PropNameCell"},"additionalSearchDirectories"),(0,l.mdx)(i.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'string',\n}],\n"))),(0,l.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,l.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Additional directories to search for each primary navigation item extension. Can be any folder. Commonly used to pull documentation from packages contained in node_modules."))),(0,l.mdx)(i.X2,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(i.O,{mdxType:"PropNameCell"},"sideEffectImportFilePaths"),(0,l.mdx)(i.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'string',\n}],\n"))),(0,l.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,l.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Side effect files to import. This can be used for setting up mock testing data."))),(0,l.mdx)(i.X2,{key:"ROW4",mdxType:"Row"},(0,l.mdx)(i.O,{mdxType:"PropNameCell"},"polyFillSideEffectImportFilePath"),(0,l.mdx)(i.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"'@cerner/terra-polyfill'\n"))),(0,l.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"A Polyfill file to be imported as a side effect. If no polyfills are desired, set to 'none'."))),(0,l.mdx)(i.X2,{key:"ROW5",mdxType:"Row"},(0,l.mdx)(i.O,{mdxType:"PropNameCell"},"titleConfig"),(0,l.mdx)(i.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"shape: {\n  title: {\n    type: 'string',\n    required: true,\n    description: 'Title to be displayed or set as the aria-label if a title element is passed.',\n  },\n  subline: {\n    type: 'string',\n    description: 'Sub text to be display below the main title text.',\n  },\n  headline: {\n    type: 'string',\n    description: 'Super text to be display above the main title text.',\n  },\n},\n"))),(0,l.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"{\n  title: 'package title',\n}\n"))),(0,l.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"A configuration object that defines the strings rendered within the ApplicationNavigation header."))),(0,l.mdx)(i.X2,{key:"ROW6",mdxType:"Row"},(0,l.mdx)(i.O,{mdxType:"PropNameCell"},"defaultTheme"),(0,l.mdx)(i.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"'terra-default-theme'\n"))),(0,l.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"By default the site is set to this theme."))),(0,l.mdx)(i.X2,{key:"ROW7",mdxType:"Row"},(0,l.mdx)(i.O,{mdxType:"PropNameCell"},"defaultLocale"),(0,l.mdx)(i.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"'en'\n"))),(0,l.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The sites default locale."))),(0,l.mdx)(i.X2,{key:"ROW8",mdxType:"Row"},(0,l.mdx)(i.O,{mdxType:"PropNameCell"},"defaultDirection"),(0,l.mdx)(i.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"'ltr'\n"))),(0,l.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The Sites default direction."))),(0,l.mdx)(i.X2,{key:"ROW9",mdxType:"Row"},(0,l.mdx)(i.O,{mdxType:"PropNameCell"},"faviconFilePath"),(0,l.mdx)(i.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"'terra favicon path'\n"))),(0,l.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The favicon for the site."))),(0,l.mdx)(i.X2,{key:"ROW10",mdxType:"Row"},(0,l.mdx)(i.O,{mdxType:"PropNameCell"},"extensionItems"),(0,l.mdx)(i.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  shape: {\n    key: {\n      type: 'string',\n      description: 'A key rendered to be used as a unique react key as well as returned with the onSelectExtensionItem.',\n    },\n    text: {\n      type: 'string',\n      description: 'The text to either be set as an aria-label or display text.',\n    },\n    iconPath: {\n      type: 'elementType',\n      description: 'The Filepath to a React element representing the themable icon for the extension.',\n    },\n    modal: {\n      type: 'elementType',\n      description: 'The modal to launch from the extension.',\n    },\n  },\n}],\n"))),(0,l.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,l.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"A configuration object with information specifying the creation of the Extension buttons rendered within the ApplicationNavigation header."))),(0,l.mdx)(i.X2,{key:"ROW11",mdxType:"Row"},(0,l.mdx)(i.O,{mdxType:"PropNameCell"},"headHtml"),(0,l.mdx)(i.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'string',\n}],\n"))),(0,l.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,l.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Html strings to include in the head."))),(0,l.mdx)(i.X2,{key:"ROW12",mdxType:"Row"},(0,l.mdx)(i.O,{mdxType:"PropNameCell"},"pathPrefix"),(0,l.mdx)(i.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The pathPrefix is placed in front of the generated site's URL to allow for multiple dev sites to be generated and displayed from the same webpack config."),(0,l.mdx)("p",null,"Required when there are more that one dev site plugins defined for a site."))),(0,l.mdx)(i.X2,{key:"ROW13",mdxType:"Row"},(0,l.mdx)(i.O,{mdxType:"PropNameCell"},"sourceFolder"),(0,l.mdx)(i.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"'src'\n"))),(0,l.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The dev directory housing non-transpiled code. Used to swap with the ",(0,l.mdx)("inlineCode",{parentName:"p"},"distributionFolder")," when running webpack in dev mode, to enable hot reloading."))),(0,l.mdx)(i.X2,{key:"ROW14",mdxType:"Row"},(0,l.mdx)(i.O,{mdxType:"PropNameCell"},"distributionFolder"),(0,l.mdx)(i.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"'lib'\n"))),(0,l.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The dev directory housing non-transpiled code."))),(0,l.mdx)(i.X2,{key:"ROW15",mdxType:"Row"},(0,l.mdx)(i.O,{mdxType:"PropNameCell"},"excludeChunks"),(0,l.mdx)(i.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'string',\n}],\n"))),(0,l.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Allows you to skip adding some webpack chunks to the html template.")))))}o.isMDXComponent=!0;var s=["components"],x={};function c(e){var a=e.components,n=(0,d.Z)(e,s);return(0,l.mdx)("wrapper",(0,t.Z)({},x,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)(m.C,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"configuration"},"Configuration"),(0,l.mdx)("p",null,"Terra dev site can be configured in a number of ways. Whenever possible, we will use configuration files already in use for the terra-ecosystem to eliminate duplicate config."),(0,l.mdx)("h2",{id:"theme-config"},"Theme config"),(0,l.mdx)("p",null,"Terra dev site is a great place to test and develop a themed component. To configure theme switching in terra dev site, add a ",(0,l.mdx)("inlineCode",{parentName:"p"},"terra-theme.config.js")," file to your root directory specifying the default theme, if any, and any additional scoped themes."),(0,l.mdx)("h3",{id:"terra-themeconfigjs"},(0,l.mdx)("inlineCode",{parentName:"h3"},"terra-theme.config.js")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  theme: 'terra-dark-theme', // The default theme to be enabled on page load.\n  scoped: ['orion-fusion-theme', 'clinical-lowlight-theme'], // An array of scoped themes. Note: Scoped themes do not work in IE 10.\n};\n")),(0,l.mdx)("h2",{id:"locale-config"},"Locale config"),(0,l.mdx)("p",null,"TerraDevSite also offers locale switching. To enable locale switching add a ",(0,l.mdx)("inlineCode",{parentName:"p"},"terraI18n.config.js")," file to your root directory specifying the locales available to terra dev site."),(0,l.mdx)("h3",{id:"terrai18nconfigjs"},(0,l.mdx)("inlineCode",{parentName:"h3"},"terraI18n.config.js")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  locales: ['en', 'en-US'],\n};\n")),(0,l.mdx)("h2",{id:"webpack-plugin-config"},"Webpack Plugin config"),(0,l.mdx)("p",null,"The following table describes the TerraDevSite webpack plugin options."),(0,l.mdx)(o,{mdxType:"ConfigPropsTable"}))}c.isMDXComponent=!0},66722:(e,a,n)=>{n.d(a,{C:()=>l});var t=n(67294),d=n(96862),l=function(e){var a=e.url;return t.createElement(d.Z,{src:"https://github.com/cerner/terra-application/tree/main/packages/terra-dev-site",name:"@cerner/terra-dev-site",version:"7.4.0",url:a})}},96862:(e,a,n)=>{var t=n(95318);a.Z=void 0;var d=t(n(67294)),l=t(n(45697)),m=t(n(47166)),i=t(n(55138)),r=m.default.bind(i.default),p={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},o=function(e){var a=e.src,n=e.name,t=e.url,l=e.version,m=d.default.createElement("a",{className:r("badge"),href:t||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},d.default.createElement("span",{className:r("badge-name")},t?"package":"npm"),d.default.createElement("span",{className:r("badge-version")},"v".concat(l))),i=a?d.default.createElement("a",{className:r("badge"),href:a},d.default.createElement("span",{className:r("badge-name")},"github"),d.default.createElement("span",{className:r("badge-version")},"source")):void 0;return d.default.createElement("div",{className:r("badge-container")},m,i)};o.propTypes=p;var s=o;a.Z=s},55138:(e,a,n)=>{n.r(a),n.d(a,{default:()=>t});const t={badge:"Badges-module__badge___mqZdQ","badge-container":"Badges-module__badge-container___Fuva8","badge-name":"Badges-module__badge-name___o7WE3","badge-version":"Badges-module__badge-version___4AQGw"}}}]);