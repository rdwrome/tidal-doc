(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),i=(n(0),n(261)),a={title:"VS Code",permalink:"wiki/VS_Code/",layout:"wiki"},c={unversionedId:"getting-started/editor/VS_Code",id:"getting-started/editor/VS_Code",isDocsHomePage:!1,title:"VS Code",description:"-----",source:"@site/docs/getting-started/editor/VS_Code.md",slug:"/getting-started/editor/VS_Code",permalink:"/docs/getting-started/editor/VS_Code",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/editor/VS_Code.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1621614610,sidebar:"docs",previous:{title:"Emacs",permalink:"/docs/getting-started/editor/Emacs"},next:{title:"Sublime Text",permalink:"/docs/getting-started/editor/Sublime_Text"}},l=[{value:"Install VSCode",id:"install-vscode",children:[]},{value:"Tidal Cycles Extension",id:"tidal-cycles-extension",children:[{value:"Special features",id:"special-features",children:[]},{value:"Configuration",id:"configuration",children:[]}]}],s={toc:l};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("img",{alt:"vscodeicon",src:n(320).default})),Object(i.b)("p",null,"VSCode is a general purpose text/code editor published by Microsoft, with some open-source components. Tidal Cycles code can be written in the ",Object(i.b)("strong",{parentName:"p"},"VS Code")," editor through an extension. VSCode is currently the most popular code editor on the market based on some metrics. It is highly configurable, and can run on every major OS. It is highly configurable, with thousands of plugins to support new programming languages, frameworks, edition modes, etc..."),Object(i.b)("h2",{id:"install-vscode"},"Install VSCode"),Object(i.b)("p",null,"Installing VSCode on your computer should be straigthforward. Head to the ",Object(i.b)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"official website")," and download the version corresponding to your operating system. Done. "),Object(i.b)("h2",{id:"tidal-cycles-extension"},"Tidal Cycles Extension"),Object(i.b)("p",null,"There is ",Object(i.b)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=tidalcycles.vscode-tidalcycles"},"Tidal Cycles Extension")," for ",Object(i.b)("strong",{parentName:"p"},"VSCode"),". You can also check out the main ",Object(i.b)("a",{parentName:"p",href:"https://github.com/kindohm/vscode-tidalcycles"},"repository")," if you want to report an issue or contribute to the development of this extension."),Object(i.b)("p",null,"The installation process is simple:"),Object(i.b)("p",null,"1) open VSCode, click on the ",Object(i.b)("inlineCode",{parentName:"p"},"Extensions")," panel on the left side."),Object(i.b)("p",null,"2) search for ",Object(i.b)("inlineCode",{parentName:"p"},"tidal")," and click ",Object(i.b)("inlineCode",{parentName:"p"},"install"),"."),Object(i.b)("h3",{id:"special-features"},"Special features"),Object(i.b)("p",null,"The VSCode Tidal Cycles extension features something that is not present in other text editor extensions: an audio file browser. Click on the Tidal Cycles logo that appeared on the left pane right after the install to see all the samples currently available for Tidal and preview/insert them directly in your code."),Object(i.b)("h3",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Be sure to check out the plugin ",Object(i.b)("inlineCode",{parentName:"p"},"README")," and configuration pane to learn more about customization/configuration."))}d.isMDXComponent=!0},261:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,f=u["".concat(a,".").concat(b)]||u[b]||p[b]||i;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},320:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/vscodeicon-42dc264fde2adb74cc197fe6d02b183c.png"}}]);