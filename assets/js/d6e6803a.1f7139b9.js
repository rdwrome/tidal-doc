(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{235:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(261)),c={title:"bandq",permalink:"wiki/bandq/",layout:"wiki",tags:["Control Functions"]},i={unversionedId:"reference/control-functions/bandq",id:"reference/control-functions/bandq",isDocsHomePage:!1,title:"bandq",description:"Type:",source:"@site/docs/reference/control-functions/bandq.md",slug:"/reference/control-functions/bandq",permalink:"/docs/reference/control-functions/bandq",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/control-functions/bandq.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1621614610},p=[],u={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/wiki/Type_signature",title:"wikilink"},"Type"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"bandq :: Pattern Double -> ControlPattern\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"bandq")," turns a number pattern into a control pattern that sets the\nq-factor of the band-pass filter. Higher values (larger than 1) narrow\nthe band-pass. Has the shorthand ",Object(o.b)("inlineCode",{parentName:"p"},"bpq"),"."),Object(o.b)("p",null,"You can use ",Object(o.b)("a",{parentName:"p",href:"bpq",title:"wikilink"},"bpq")," as a shortcut for ",Object(o.b)("strong",{parentName:"p"},"bandq"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'d1 $ s "[drum cp]*2 [drum:1 hh*2]" # bandf "100 1000 2000" # bandq "<0.5 1 2>"\n')))}l.isMDXComponent=!0},261:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),b=l(n),f=r,d=b["".concat(c,".").concat(f)]||b[f]||s[f]||o;return n?a.a.createElement(d,i(i({ref:t},u),{},{components:n})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);