(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{213:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(292)),i={title:"jumpIn",permalink:"wiki/jumpIn/",layout:"wiki",tags:["Transitions"]},c={unversionedId:"reference/transitions/jumpIn",id:"reference/transitions/jumpIn",isDocsHomePage:!1,title:"jumpIn",description:"jumpIn takes the identifier of the ControlPattern track and an integer",source:"@site/docs/reference/transitions/jumpIn.md",slug:"/reference/transitions/jumpIn",permalink:"/docs/reference/transitions/jumpIn",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/transitions/jumpIn.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1621614610,sidebar:"reference",previous:{title:"jump",permalink:"/docs/reference/transitions/jump"},next:{title:"jumpIn'",permalink:"/docs/reference/transitions/jumpIn'"}},p=[],u={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"jumpIn")," takes the identifier of the ControlPattern track and an integer\n",Object(o.b)("em",{parentName:"p"},"cycleCount"),". It will jump ",Object(o.b)("strong",{parentName:"p"},"unaligned")," into the given pattern after\n",Object(o.b)("em",{parentName:"p"},"cycleCount")," cycles have completed."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example:")," Say you have this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'d1 $ sound "hh*4"\nd2 $ sound "bd" --have a beat on the 1 for orientation\n')),Object(o.b)("p",null,"Then the subdivision on the hi-hat will increase 2 cycles after\nevaluation of the next line:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'jumpIn 1 2 $ sound "hh*8" --`1` because `d1` is defined `let d1 = p 1`\n')),Object(o.b)("p",null,"The transition will ",Object(o.b)("strong",{parentName:"p"},"not")," align with the beat on cycle boundary."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"See also:")," ",Object(o.b)("a",{parentName:"p",href:"jump",title:"wikilink"},"jump"),", ",Object(o.b)("a",{parentName:"p",href:"jumpIn'",title:"wikilink"},"jumpIn'"),",\n",Object(o.b)("a",{parentName:"p",href:"jumpMod",title:"wikilink"},"jumpMod")))}l.isMDXComponent=!0},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),b=r,f=s["".concat(i,".").concat(b)]||s[b]||m[b]||o;return n?a.a.createElement(f,c(c({ref:t},u),{},{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);