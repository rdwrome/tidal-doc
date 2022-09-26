(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),l=(n(0),n(218)),i={title:"Samplers",id:"samplers"},o={unversionedId:"reference/samplers",id:"reference/samplers",isDocsHomePage:!1,title:"Samplers",description:"This page presents many functions related to the use of samples inside TidalCycles.",source:"@site/docs/reference/samplers.md",slug:"/reference/samplers",permalink:"/docs/reference/samplers",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/samplers.md",version:"current",lastUpdatedBy:"Joan Queralt",lastUpdatedAt:1664218370,sidebar:"reference",previous:{title:"Transitions",permalink:"/docs/reference/transitions"},next:{title:"Sampling",permalink:"/docs/reference/sampling"}},p=[{value:"Basic sample manipulation",id:"basic-sample-manipulation",children:[{value:"begin",id:"begin",children:[]},{value:"end",id:"end",children:[]},{value:"gain",id:"gain",children:[]}]}],c={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This page presents many functions related to the use of samples inside TidalCycles."),Object(l.b)("p",null,"For specific information about functions used to slice and loop samples see ",Object(l.b)("a",{parentName:"p",href:"https://tidalcycles.org/docs/reference/sampling"},"Sampling"),"."),Object(l.b)("p",null,"Each function will be presented following the same model:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Type signature"),": how the function is declared on the ",Object(l.b)("strong",{parentName:"li"},"Haskell")," side."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Description"),": verbal description of the function."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Examples"),": a small list of examples that you can copy/paste in your editor.")),Object(l.b)("h2",{id:"basic-sample-manipulation"},"Basic sample manipulation"),Object(l.b)("h3",{id:"begin"},"begin"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},"Type: begin :: Pattern Double -> ControlPattern\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"begin")," receives a pattern of numbers from 0 to 1. It skips the beginning of each sample. The numbers indicate the proportion of the samples that needs to be skipped (",Object(l.b)("inlineCode",{parentName:"p"},"0")," would play the sample from the start, ",Object(l.b)("inlineCode",{parentName:"p"},"1")," would skip the whole sample, ",Object(l.b)("inlineCode",{parentName:"p"},"0.25")," would cut off the first quarter from each sample). For example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "bev" # begin 0.5 # legato 1\n')),Object(l.b)("p",null,"In the above example, the sample is started from the half of its total length."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "0 1 2" # s "ade" # begin "<0 0.25 0.5 0.75>" # legato 1\n')),Object(l.b)("p",null,"In this other example, the first ",Object(l.b)("inlineCode",{parentName:"p"},"3")," ",Object(l.b)("inlineCode",{parentName:"p"},"ade")," samples are playied on every cycle, but the start point from which they are playied changes on each cycle."),Object(l.b)("h3",{id:"end"},"end"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},"Type: end :: Pattern Double -> ControlPattern\n")),Object(l.b)("p",null,"The same as ",Object(l.b)("inlineCode",{parentName:"p"},"begin"),", but cuts off the end of samples, shortening them. For example, ",Object(l.b)("inlineCode",{parentName:"p"},"0.75")," will cut off the last quarter of each sample."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "bev" # begin 0.5 # end 0.65\n')),Object(l.b)("p",null,"This will play only a small part of the sample: from ",Object(l.b)("inlineCode",{parentName:"p"},"50%")," its length to ",Object(l.b)("inlineCode",{parentName:"p"},"65%")," its length."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "bev" >| begin 0.5 >| end "[0.65 0.55]"\n')),Object(l.b)("p",null,"The example above will play the sample two times for cycle, but the second time will play a shorter segment than the first time, creating some kind of canon effect."),Object(l.b)("h3",{id:"gain"},"gain"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},"Type: gain :: Pattern Double -> ControlPattern\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"gain")," is used to control the amplitude (volume) of the sound. Values less than ",Object(l.b)("inlineCode",{parentName:"p"},"1")," make the sound quieter. Values greater than ",Object(l.b)("inlineCode",{parentName:"p"},"1")," make the sound louder."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"gain")," uses a power function, so the volume change around ",Object(l.b)("inlineCode",{parentName:"p"},"1")," is subtle, but it gets more noticable as it increases or decreases. Typical values for ",Object(l.b)("inlineCode",{parentName:"p"},"gain")," are between ",Object(l.b)("inlineCode",{parentName:"p"},"0")," and ",Object(l.b)("inlineCode",{parentName:"p"},"1.5"),". For the linear equivalent, see ",Object(l.b)("inlineCode",{parentName:"p"},"amp"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "arpy" # gain 0.8\n')),Object(l.b)("p",null,"This plays the first ",Object(l.b)("inlineCode",{parentName:"p"},"arpy")," sample at a quieter level than the default."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "ab*16" # gain (range 0.8 1.3 $ sine)\n')),Object(l.b)("p",null,"This plays a hihat sound, ",Object(l.b)("inlineCode",{parentName:"p"},"16")," times per cycle, with a ",Object(l.b)("inlineCode",{parentName:"p"},"gain")," moving from ",Object(l.b)("inlineCode",{parentName:"p"},"0.8")," to ",Object(l.b)("inlineCode",{parentName:"p"},"1.3")," following a sine wave."))}s.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||l;return n?r.a.createElement(d,o(o({ref:t},c),{},{components:n})):r.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);