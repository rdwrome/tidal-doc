"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5314],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=d(n),u=a,g=f["".concat(s,".").concat(u)]||f[u]||p[u]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(3117),a=(n(7294),n(3905));const o={title:"Adding Global Effects",id:"adding_global_effects"},i=void 0,l={unversionedId:"configuration/adding_global_effects",id:"configuration/adding_global_effects",title:"Adding Global Effects",description:"This help file is based on a file found in the SuperDirt GitHub repository. Report to the original version to get more information or add your improved workflow to this page to help other users.",source:"@site/docs/configuration/adding_global_effects.md",sourceDirName:"configuration",slug:"/configuration/adding_global_effects",permalink:"/docs/configuration/adding_global_effects",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/configuration/adding_global_effects.md",tags:[],version:"current",lastUpdatedAt:1709097322,formattedLastUpdatedAt:"Feb 28, 2024",frontMatter:{title:"Adding Global Effects",id:"adding_global_effects"},sidebar:"docs",previous:{title:"Adding Effects",permalink:"/docs/configuration/adding_effects"},next:{title:"Adding Synthesizers",permalink:"/docs/configuration/adding_synthesizers"}},s={},d=[{value:"Low-pass Filter",id:"low-pass-filter",level:2},{value:"Building a SynthDef",id:"building-a-synthdef",level:3},{value:"Adding on the orbits",id:"adding-on-the-orbits",level:3},{value:"Tidal Side",id:"tidal-side",level:3}],c={toc:d};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This help file is based on a file found in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/musikinformatik/SuperDirt/blob/develop/hacks/adding-effects.scd"},"SuperDirt GitHub")," repository. Report to the original version to get more information or add your improved workflow to this page to help other users."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Make sure you've started ",(0,a.kt)("strong",{parentName:"p"},"SuperCollider")," and that ",(0,a.kt)("strong",{parentName:"p"},"SuperDirt")," is currently running. To start it, you can type ",(0,a.kt)("inlineCode",{parentName:"p"},"SuperDirt.start")," in the interactive text editor.")),(0,a.kt)("p",null,"We want to add a new global effect on each ",(0,a.kt)("inlineCode",{parentName:"p"},"orbit"),'. A global effect is definitely not the same thing as an "effect". Global effects will always be there on the signal chain, waiting for you to tweak their parameters. Effects, on the contrary, can be used and called specifically for a pattern only. They are instantiated on demand.'),(0,a.kt)("p",null,"We can take a look at all the global effects declared on each orbit using this command in ",(0,a.kt)("strong",{parentName:"p"},"SuperCollider"),": "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// these are the global effects on each orbit\n~dirt.orbits.do { |x| x.globalEffects.postln }\n")),(0,a.kt)("h2",{id:"low-pass-filter"},"Low-pass Filter"),(0,a.kt)("p",null,"We are going to add a global low-pass filter on every ",(0,a.kt)("inlineCode",{parentName:"p"},"orbit"),". First we need to generate a ",(0,a.kt)("inlineCode",{parentName:"p"},"SynthDef")," for it:"),(0,a.kt)("h3",{id:"building-a-synthdef"},"Building a SynthDef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'(\nvar numChannels = ~dirt.numChannels;\n(1..SuperDirt.maxSampleNumChannels).do { |numChannels|\n    SynthDef("dirt_global_lpf" ++ numChannels, { |dryBus, effectBus, gate = 1, cutoffFreq = 440|\n        var signal = In.ar(dryBus, numChannels);\n\n        var rq;\n        signal = signal.asArray.collect { |sig|\n            rq = 1/LFNoise2.kr(0.1).exprange(10, 20);\n            RLPF.ar(sig, cutoffFreq, rq).tanh;\n        };\n        signal = signal * EnvGen.kr(Env.asr, gate, doneAction:2);\n        DirtPause.ar(signal.sum, graceTime:4);\n\n        Out.ar(effectBus, signal)\n    }, [\\ir, \\ir]).add;\n};\n)\n')),(0,a.kt)("h3",{id:"adding-on-the-orbits"},"Adding on the orbits"),(0,a.kt)("p",null,"We need to add this ",(0,a.kt)("inlineCode",{parentName:"p"},"SynthDef")," on each ",(0,a.kt)("strong",{parentName:"p"},"SuperDirt")," orbit:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'(\n~dirt.orbits.do { |x|\n    x.globalEffects = x.globalEffects\n        .addFirst(GlobalDirtEffect(\\dirt_global_lpf, [\\cutoffFreq]))\n\n    x.initNodeTree;\n};\n)\n\n~dirt.orbits.do { |x| x.globalEffects.postln; " ----------".postln; }\n')),(0,a.kt)("h3",{id:"tidal-side"},"Tidal Side"),(0,a.kt)("p",null,"Add the following line to your ",(0,a.kt)("strong",{parentName:"p"},"Tidal")," Boot file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'let cutoffFreq = pF "cutoffFreq"\n')),(0,a.kt)("p",null,"You can now have fun playing with your new effect:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'cps (40/120)\nd1 $ sound "[sn [sn sn]][sn [sn sn*3]][sn [sn*5 sn]][bd bd]" # cutoffFreq "220 880"\n')))}f.isMDXComponent=!0}}]);