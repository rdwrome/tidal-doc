"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[74],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var r=n(3117),a=(n(7294),n(3905));const l={title:"Build Rhythms",id:"buildrhythms"},o=void 0,s={unversionedId:"patternlib/howtos/buildrhythms",id:"patternlib/howtos/buildrhythms",title:"Build Rhythms",description:"This page will teach you how to get started writing rhythms using different techniques. It is a good way to learn Tidal Cycles in a more intuitive way.",source:"@site/docs/patternlib/howtos/buildrhythms.md",sourceDirName:"patternlib/howtos",slug:"/patternlib/howtos/buildrhythms",permalink:"/docs/patternlib/howtos/buildrhythms",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/patternlib/howtos/buildrhythms.md",tags:[],version:"current",lastUpdatedAt:1714610046,formattedLastUpdatedAt:"May 2, 2024",frontMatter:{title:"Build Rhythms",id:"buildrhythms"},sidebar:"docs",previous:{title:"Build Arpeggios",permalink:"/docs/patternlib/howtos/buildarpeggios"},next:{title:"Play chords",permalink:"/docs/patternlib/howtos/playchords"}},p={},i=[{value:"From a simple to a complex rhythm",id:"from-a-simple-to-a-complex-rhythm",level:2},{value:"Another rhythmic construction",id:"another-rhythmic-construction",level:2}],u={toc:i};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page will teach you how to get started writing rhythms using different techniques. It is a good way to learn ",(0,a.kt)("strong",{parentName:"p"},"Tidal Cycles")," in a more intuitive way."),(0,a.kt)("h2",{id:"from-a-simple-to-a-complex-rhythm"},"From a simple to a complex rhythm"),(0,a.kt)("p",null,"Simple bass drum - snare:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd sn"\n')),(0,a.kt)("p",null,"Let's pick a different snare sample:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd sn:3"\n')),(0,a.kt)("p",null,"Now, we are going to change the rhythm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd*2 [~ sn:3]"\n')),(0,a.kt)("p",null,"And add some toms:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd*2 [[~ lt] sn:3] lt:1 [ht mt*2]"\n')),(0,a.kt)("p",null,"Start to transform, shift a quarter cycle every other cycle:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 2 (0.25 <~) $ sound "bd*2 [[~ lt] sn:3] lt:1 [ht mt*2]"\n')),(0,a.kt)("p",null,"Pattern the shift amount:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 2 ("<0.25 0.125 0.5>" <~) $ sound "bd*2 [[~ lt] sn:3] lt:1 [ht mt*2]"\n')),(0,a.kt)("p",null,"Add some patterned effects:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 2 ("<0.25 0.125 0.5>" <~) $ sound "bd*2 [[~ lt] sn:3] lt:1 [ht mt*2]"\n  # squiz "<1 2.5 2>"\n  # room (slow 4 $ range 0 0.2 saw)\n  # sz 0.5\n  # orbit 1\n')),(0,a.kt)("p",null,"More transformation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ jux\' [id,rev,(# speed 2)] $ every 2 ("<0.25 0.125 0.5>" <~) $ sound "bd*2 [[~ lt] sn:3] lt:1 [ht mt*2]"\n  # squiz "<1 2.5 2>"\n  # room (slow 4 $ range 0 0.2 saw)\n  # sz 0.5\n  # orbit 1\n')),(0,a.kt)("h2",{id:"another-rhythmic-construction"},"Another rhythmic construction"),(0,a.kt)("p",null,"Let's start with a sequence:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "0 0 [2 0] [2 3]" # sound "feel" # speed 1.5\n')),(0,a.kt)("p",null,"We add a bit of flavour:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed 1.5\n')),(0,a.kt)("p",null,"Swap the samples round every other cycle:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed 1.5\n')),(0,a.kt)("p",null,"Always worth trying a ",(0,a.kt)("inlineCode",{parentName:"p"},"jux rev"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ jux rev $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed 1.5\n')),(0,a.kt)("p",null,"Calm it down a bit by reducing the amount of panning:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ juxBy 0.4 rev $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed 1.5\n')),(0,a.kt)("p",null,"Vary the speed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ juxBy 0.4 rev $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed "1.75 2"\n')),(0,a.kt)("p",null,"Add an offset ",(0,a.kt)("inlineCode",{parentName:"p"},"vowel")," effect:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ off 0.25 (# vowel "<a o i>")\n  $ juxBy 0.4 rev $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed "1.75 2"\n')),(0,a.kt)("p",null,"Let's add another friend:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ off 0.25 (# vowel "<a o i>")\n  $ juxBy 0.4 rev $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed "1.75 2"\n\n\nd2 $ juxBy 0.5 rev $ chunk 4 ((+ speed (1 + sine)) . ply 8) $ note "3(3,8)" # sound "bass"\n  # speed "<2 4>"\n  # legato 1\n')))}d.isMDXComponent=!0}}]);