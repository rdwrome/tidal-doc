(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{231:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),c=(t(0),t(261)),a={title:"hresonance",permalink:"wiki/hresonance/",layout:"wiki",tags:["Control Functions"]},i={unversionedId:"reference/control-functions/hresonance",id:"reference/control-functions/hresonance",isDocsHomePage:!1,title:"hresonance",description:"Type:",source:"@site/docs/reference/control-functions/hresonance.md",slug:"/reference/control-functions/hresonance",permalink:"/docs/reference/control-functions/hresonance",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/control-functions/hresonance.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1621614610},p=[],l={toc:p};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/wiki/Type_signature",title:"wikilink"},"Type"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"hresonance :: Pattern Double -> ControlPattern\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"hresonance")," turns a number pattern into a control pattern that sets\nthe resonance of a high pass filter. Values range from 0 to 1."),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"hpq",title:"wikilink"},"hpq")," is a shortcut for ",Object(c.b)("strong",{parentName:"p"},"hresonance"),"."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'d1 $ s "drum*8" # hpf "1000" # hresonance "0 0.2 0.4 0.6"\n')))}u.isMDXComponent=!0},261:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(t),b=r,m=s["".concat(a,".").concat(b)]||s[b]||f[b]||c;return t?o.a.createElement(m,i(i({ref:n},l),{},{components:t})):o.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=b;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<c;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);