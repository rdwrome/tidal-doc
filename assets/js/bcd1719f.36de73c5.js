"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(h,c(c({ref:t},p),{},{components:n})):a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:r,c[1]=o;for(var s=2;s<l;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(3117),r=(n(7294),n(3905));const l={title:"Cycles",id:"cycles"},c=void 0,o={unversionedId:"reference/cycles",id:"reference/cycles",title:"Cycles",description:"Tidal Cycles is not using BPM (beats per minute) but a specific measurement called CPS: cycles per second. For Tidal, time is cyclical and not linear. It means that when a cycle ends, a new one will follow. Time is counted in smaller and smaller decrements of cycles per second (e.g. 1/3 of a cycle).",source:"@site/docs/reference/cycles.md",sourceDirName:"reference",slug:"/reference/cycles",permalink:"/docs/reference/cycles",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/cycles.md",tags:[],version:"current",lastUpdatedAt:1709097322,formattedLastUpdatedAt:"Feb 28, 2024",frontMatter:{title:"Cycles",id:"cycles"},sidebar:"reference",next:{title:"Patterns",permalink:"/docs/reference/patterns"}},i={},s=[{value:"Dividing the cycle",id:"dividing-the-cycle",level:2},{value:"Visualizing cycles",id:"visualizing-cycles",level:2},{value:"Convert between BPM and CPS",id:"convert-between-bpm-and-cps",level:2},{value:"Pop-up window",id:"pop-up-window",level:2}],p={toc:s};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tidal Cycles")," is not using ",(0,r.kt)("strong",{parentName:"p"},"BPM")," (",(0,r.kt)("em",{parentName:"p"},"beats per minute"),") but a specific measurement called ",(0,r.kt)("strong",{parentName:"p"},"CPS"),": ",(0,r.kt)("em",{parentName:"p"},"cycles per second"),". For Tidal, time is ",(0,r.kt)("em",{parentName:"p"},"cyclical")," and not ",(0,r.kt)("em",{parentName:"p"},"linear"),". It means that when a cycle ends, a new one will follow. Time is counted in smaller and smaller decrements of ",(0,r.kt)("em",{parentName:"p"},"cycles per second")," (e.g. 1/3 of a cycle). "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"cycle",src:n(2894).Z,width:"829",height:"247"})),(0,r.kt)("p",null,"This rather original way of dealing with time can be quite surprising for a musician, because both traditional european notation and modern sequencers are generally linear and deal with the beginning of time and the ending of time. Tidal can ",(0,r.kt)("strong",{parentName:"p"},"backtrack")," or ",(0,r.kt)("strong",{parentName:"p"},"fastforward")," in time because you can actually predict what will happen in ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," cycles or what happened ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," cycles ago (well, kinda..)."),(0,r.kt)("h2",{id:"dividing-the-cycle"},"Dividing the cycle"),(0,r.kt)("p",null,"Don't focus on the syntax so far! Enter the following pattern in your text editor and evaluate it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'d1 $\xa0s "bd hh bd hh"\n')),(0,r.kt)("p",null,"You just divided a cycle in four equal parts, one for each of the sounds you just triggered. However:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'d1 $\xa0s "bd hh hh"\n')),(0,r.kt)("p",null,"Now, the cycle is being divided in three equal parts, you might have noticed that it slowed down a little. "),(0,r.kt)("p",null,"You can superpose patterns that will divide the ",(0,r.kt)("inlineCode",{parentName:"p"},"cycle")," in different subdivisions. It means that Tidal is a rather good tool to explore polyrhythmy and rhythmic intricacies: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'d1 $\xa0s "bd hh hh"\n\nd2 $\xa0s "hh:2 ~ hh:3 cp"\n')),(0,r.kt)("h2",{id:"visualizing-cycles"},"Visualizing cycles"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://camo.githubusercontent.com/f47944025244466fd0a024edfe4bd41da8a6ec4f1f9595185be879d780accd5c/68747470733a2f2f692e696d6775722e636f6d2f4d50627048306e2e6a7067",alt:"patternimage"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tidal")," can help you to visualize the output of a given pattern textually or graphically. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tidalcycles/tidal-vis"},"tidal-vis")," can go even further by turning textual patterns into their visual counterpart. Enter the following pattern: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'"1 2 3"\n')),(0,r.kt)("p",null,"You should see this result in the logs (the ",(0,r.kt)("inlineCode",{parentName:"p"},"ghci")," window): "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'(0>\u2153)|"1"\n(\u2153>\u2154)|"2"\n(\u2154>1)|"3"\n')),(0,r.kt)("p",null,"You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"drawLine")," function to visualize the output of a pattern in the log console. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'drawLine "a b*2 d"\n')),(0,r.kt)("p",null,"You might get something that looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"[11 cycles]\n|a-bbd-|a-bbd-|a-bbd-|a-bbd-|a-bbd-|a-bbd-|a-bbd-|a-bbd-|a-bbd-|a-bbd-|a-bbd-\n")),(0,r.kt)("h2",{id:"convert-between-bpm-and-cps"},"Convert between BPM and CPS"),(0,r.kt)("p",null,"Sometimes, you will need to convert between BPMs and CPS (e.g. synchronization with another musician or machine). The ",(0,r.kt)("inlineCode",{parentName:"p"},"setcps")," function is used to change the number of ",(0,r.kt)("em",{parentName:"p"},"cycles per second"),". The default number of cycles per second is 0.5625. "),(0,r.kt)("p",null,"These two values are equivalent:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setcps 0.5625"),": Cycles per second, as a decimal."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setcps (135/60/4)"),": Cycles per second, as a fraction.")),(0,r.kt)("p",null,"Representing cycles per second using fractions has the advantage of being more human-readable and more closely aligned with how tempo is commonly represented in music as beats per minute (or bpm). Techno has a range of 120-140 bpm. House has a range of 115-130 bpm. And so on. If we wanted to set the tempo of our Tidal song to fast house, we would do the following: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"-- Set cps to be a fast house beat\nsetcps (130/60/4)\n")),(0,r.kt)("p",null,"Regarding the example above, the first part of the fraction ",(0,r.kt)("inlineCode",{parentName:"p"},"130/60"),", says there will be 130 beats per minute. 130 is the number of beats and 60 is the length of the minute (60 seconds). The second part of the fraction ",(0,r.kt)("inlineCode",{parentName:"p"},"/4")," says that for every cycle in tidal there will be 4 beats. You can adjust this value to change how quickly your cycles run. "),(0,r.kt)("h2",{id:"pop-up-window"},"Pop-up window"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("strong",{parentName:"p"},"SuperCollider")," GUI libraries to create a small window showing the current state of the ",(0,r.kt)("strong",{parentName:"p"},"Tidal")," Clock. ",(0,r.kt)("inlineCode",{parentName:"p"},"pulu")," scripted the following solution:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'// start superdirt first\n(\nvar clockMods, clockBeats, screenW, screenH, clockW, clockH, clockX, clockY, resizable, border;\nclockMods = [4,6];\nclockBeats = 4;\nscreenW = 1440;\nscreenH = 900;\nclockW = 120;\nclockH = 22;\nclockX = screenW - clockW;\nclockY = screenH - 1;\nresizable = false;\nborder = false;\n\n~clockText = StaticText()\n.string_("[clock]")\n.font_(Font.defaultMonoFace)\n.align_(\\center)\n.stringColor_(Color(1,1,1))\n.minHeight_(20);\n\n~updateClock = { |cycle|\n    var text, beat;\n    text = clockMods.collect { |m| "" ++ (cycle.floor.asInteger.mod(m) + 1) ++ "/" ++ m; }.join(" ");\n    beat = (cycle.mod(1)*clockBeats).round.asInteger + 1;\n    text = text ++ " " ++ clockBeats.collect { |i| if(i < beat, ".", " "); }.join;\n    ~clockText.string_(text);\n};\n\n~clockWindow = Window("clock", Rect(clockX, clockY, clockW, clockH), resizable, border)\n.background_(Color(0.3,0.3,0.3))\n.layout_(\n    HLayout(\n        ~clockText\n    ).margins_(0!4)\n);\n\n~clockWindow.alwaysOnTop_(true);\n~clockWindow.visible_(true);\n\nSynthDef(\\tick, { |cycle|\n    SendReply.kr(Impulse.kr(0), "/tick", [cycle]);\n    FreeSelf.kr(Impulse.kr(0));\n}).add;\n\nOSCdef(\\tick, { |msg|\n    var cycle;\n    #cycle = msg[3..];\n    Routine {\n        { ~updateClock.(cycle); }.defer;\n    }.play(SystemClock);\n}, "/tick");\n)\n')),(0,r.kt)("p",null,"After evaluating this script (in your ",(0,r.kt)("inlineCode",{parentName:"p"},"BootTidal.hs")," or after booting ",(0,r.kt)("strong",{parentName:"p"},"SuperDirt"),"), play the following pattern:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'p "tick" $ "0*4" # s "tick"\n')))}d.isMDXComponent=!0},2894:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cycle_representation-24efe2cc73b0b5e0ca32a158eed95162.png"}}]);