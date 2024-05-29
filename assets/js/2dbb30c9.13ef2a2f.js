"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7326],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=i.createContext({}),p=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=n,m=u["".concat(o,".").concat(h)]||u[h]||d[h]||r;return a?i.createElement(m,l(l({ref:t},c),{},{components:a})):i.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1952:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=a(3117),n=(a(7294),a(3905));const r={title:"Tidal Visualization with Didactic Pattern Visualizer",date:new Date("2023-07-01T00:00:00.000Z")},l=void 0,s={permalink:"/blog/blog_topic_visualizer",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/blog/blog/blog_topic_visualizer.md",source:"@site/blog/blog_topic_visualizer.md",title:"Tidal Visualization with Didactic Pattern Visualizer",description:"| Developer | Iv\xe1n Abreu |",date:"2023-07-01T00:00:00.000Z",formattedDate:"July 1, 2023",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{title:"Tidal Visualization with Didactic Pattern Visualizer",date:"2023-07-01T00:00:00.000Z"},prevItem:{title:"Tidal Music - Xuixo EP by Relyt R",permalink:"/blog/blog_topic_relyt_r_xuixo"},nextItem:{title:"Tidal Profile - Helen Papaioannou",permalink:"/blog/tidal_profile_HelenPapaioannou"}},o={authorsImageUrls:[]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:3},{value:"OSC targets",id:"osc-targets",level:3},{value:"Examples",id:"examples",level:2},{value:"Usage",id:"usage",level:2},{value:"Creative Example - composed live code with visualization",id:"creative-example---composed-live-code-with-visualization",level:2},{value:"Description",id:"description",level:3},{value:"Examples - Erratic Rhythms",id:"examples---erratic-rhythms",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Developer"),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"th",href:"https://ivanabreu.net/"},"Iv\xe1n Abreu")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Source code"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/ivan-abreu/didacticpatternvisualizer/tree/main"},"GitHub"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Visualizing Application"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://processing.org/"},"Processing"))))),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,'Didactic Pattern Visualizer (DPV) is an easy way to visualize sound patterns from Tidal Cycles. It was created by the artist and creative technologist Iv\xe1n Abreu "...to study the potential and complexity of the syntax of the pattern system for sequencing Tidal Cycles sounds." It utilizes the open source visualization program ',(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://processing.org/"},"Processing"))," to provide a scrolling grid where colored shapes appear in rhythm reflecting the flow of Tidal events (notes). The GitHub materials also includes Tidal Cycles examples using DPV by the musician and digital Artist ",(0,n.kt)("a",{parentName:"p",href:"http://www.malitzincortes.net/"},"CNDSD"),"."),(0,n.kt)("p",null,"To use DPV (summary):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Install and configure the Processing application to receive OSC messages from Tidal"),(0,n.kt)("li",{parentName:"ul"},"Load the OSC and Tidal configurations each time you use it (or load it with your BootTidal.hs)"),(0,n.kt)("li",{parentName:"ul"},"Set the scrolling grid parameters for your Tidal session"),(0,n.kt)("li",{parentName:"ul"},"Add a connection parameter to each pattern you want to visualize")),(0,n.kt)("h3",{id:"installation"},"Installation"),(0,n.kt)("p",null,"The GitHub source includes a detailed ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ivan-abreu/didacticpatternvisualizer/blob/main/installation.md"},"installation/configuration guide"),". The main step is to install the Processing application and add the oscP5 library file. You also need to download the Processing runtime pde files that make up the DPV codebase."),(0,n.kt)("h3",{id:"osc-targets"},"OSC targets"),(0,n.kt)("p",null,"DPV leverages the ability of Tidal to send OSC messages to multiple targets (which is covered in the Tidal ",(0,n.kt)("a",{parentName:"p",href:"https://tidalcycles.org/docs/configuration/MIDIOSC/osc#multiple-targets-and-messages"},"OSC docs"),".) DPV listens to OSC messages on port 1818. With the dual targets, every Tidal channel that has the ",(0,n.kt)("em",{parentName:"p"},'"connectionN"')," parameter set will display the visual representation of notes."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ivan-abreu/didacticpatternvisualizer/tree/main#readme"},"Readme")," page includes an good set of examples  that include Tidal code along with mp4 files that play the audio with visualizations. There is also musical examples and code provided by the digital artist ",(0,n.kt)("a",{parentName:"p",href:"https://vimeo.com/cndsd"},"CNDSD")," - well know for expanding boundaries in live coding and interdisciplinary art forms.   "),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"In the ReadMe, Iv\xe1n notes that there are multiple ways to use DPV:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"As a tool for composing - for the visual feedback of ordering and sound intentions."),(0,n.kt)("li",{parentName:"ul"},"During live performance, to help unfold the musical structure and then emphasize and direct attention to rhythmic interactions of multiple sound layers.")),(0,n.kt)("h2",{id:"creative-example---composed-live-code-with-visualization"},"Creative Example - composed live code with visualization"),(0,n.kt)("p",null,"The example below shows how I used DPV to support composing prepared code with rhythmic patterns that use cross-rhythms, polymeter, and irregular beat patterns. I found it to be really helpful to see exactly what is happening within the cycles and observing how the note placements change as I make small adjustments to pattern values."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Screen recording of the full session: ",(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/QgCi6n5ZPRI"},"Erratic Rhythms with visualization")),(0,n.kt)("li",{parentName:"ul"},"Tidal code: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/HighHarmonics2/livecoding/tree/main/tidal/erraticRhythms"},"GitHub - Erratic Rhythms"))),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Erratic Rhythms"),' has 4 separate parts, each with its own distinct rhythmic character. The patterns were created so that each part stands out without "lining up" on the beats. The piece evolves so that the parts are played in different groups of 2 and 3 parts sounding together. Each part has a different timbre, using synthesizers available in SuperDirt (superhex, psin, supergong, soskick).'),(0,n.kt)("p",null,"The organizing idea is to have fully independent parts - each with a distinctive character - that still work well together. To ensure part independence, I keep the rhythmic values of each part sounding in different parts of the beat. That is where the visualization and DPV really helped. During the stage of code preparation, I would experiment with different pattern values and closely watch the visualizations to see where the rhythms land, and then make adjustments to find the right values. During a performance session, I improvise on the prepared code options and use the visualization to give me a sense of how everything fits together and what I should do next."),(0,n.kt)("h2",{id:"examples---erratic-rhythms"},"Examples - Erratic Rhythms"),(0,n.kt)("p",null,"1 ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/QgCi6n5ZPRI&t=65s"},"play")," "),(0,n.kt)("img",{src:a(5867).Z,alt:"Erratic rhythms - visualize ex 1",width:"600"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"d1 (lower part): 8 beat pattern on the beat with regular subdivisions"),(0,n.kt)("li",{parentName:"ul"},"d2 (upper part): 9 note pattern using a polymetric subdivision value of ",(0,n.kt)("inlineCode",{parentName:"li"},"%5.2")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"nudge 0.2"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ freq "[70 ~ 800] [<500 ~ > < ~ ~ <300*2 300*3> > [1170 ~ 900]]" # sound "superhex"\n  # connectionN 4 # sizeMin 12 # sizeMax 80 # figure "rect" # color "0519f5" -- DVP OSC values\n\nd2 $ freq "{100 200 400 800 900 1100 1300 1500 1600}%<5.2>" # sound "psin"  #nudge 0.2\n  # connectionN 3 # sizeMin 12 # sizeMax 60 # color "8905f5"\n')),(0,n.kt)("p",null,"2 ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/QgCi6n5ZPRI&t=172s"},"play"),"  "),(0,n.kt)("img",{src:a(7216).Z,alt:"Erratic rhythms - visualize ex 2",width:"600"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"d2 (lower): 9 note pattern, with polymetric subdivision value of ",(0,n.kt)("inlineCode",{parentName:"li"},"%7.4")),(0,n.kt)("li",{parentName:"ul"},"d3 (middle): )17 note pattern with different metric divisor values ",(0,n.kt)("inlineCode",{parentName:"li"},"[supergong!17]/<3.4 5.2 1.2>"),"\npattern speed changes with each cycle"),(0,n.kt)("li",{parentName:"ul"},"d4 (upper): 3 notes against 5 beats with notes offset with rests")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-haskell"},'d2 $ freq "{100 200 400 800 900 1100 1300 1500 1600}%<7.4>" # sound "psin"\n\nd3 $ mask ("1 0 1") $ s "[supergong!17]/<3.4 5.2 1.2>" #nudge 0.2\n  # connectionN 2 # sizeMin 10 # sizeMax 20 # figure "circle" # color "2df505"\n\nd4 $ freq "~ 400 ~ 800 [~ <1300 1600> ~ ~]" # s "soskick"\n  # connectionN 1 # sizeMin 12 # sizeMax 80 # figure "circle" # color "f58711"\n')),(0,n.kt)("p",null,"3 ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/QgCi6n5ZPRI&t=194s"},"play"),"  "),(0,n.kt)("img",{src:a(4668).Z,alt:"Erratic rhythms - visualize ex 3",width:"600"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"d2: 9 note pattern with polymetric subdivision of 16"),(0,n.kt)("li",{parentName:"ul"},"d3: 17 note pattern with alternating polymetric subdivisions ",(0,n.kt)("inlineCode",{parentName:"li"},"%<1 1.4 0.8>"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-haskell"},'d2 $ freq "{1100 200 400 800 900 1100 1300 1500 1600}%16"  # sound "psin"\n\nd3 $ mask ("1 1 1 0 1") $ sound "[supergong!17]/<1 1.4 0.8>" #nudge 0.2\n   #connectionN 2 #sizeMin 10 #sizeMax 20 #figure "circle" #color "2df505"\n')),(0,n.kt)("p",null,"4 ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/QgCi6n5ZPRI&t=265s"},"play"),"  "),(0,n.kt)("img",{src:a(4668).Z,alt:"Erratic rhythms - visualize ex 3",width:"600"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-haskell"},'d2 $ jux (rev) $ freq "{100 200 400 800 900 100 1300 1500 1600 1800 2100 2400 ~}%11"  # sound "psin"\n  # connectionN 3 # sizeMin 12 # sizeMax 60 # color "8905f5" # nudge 0.2\n\nd3 $ jux (rev) $ sound "[supergong!17]/<0.6 1>" # nudge 0.3\n  # connectionN 2 # sizeMin 10 # sizeMax 20 # figure "circle" # color "2df505"\n\nd4 $ fast 0.5 $ every 2 (degradeBy "<0.2 0.5 0.8>") $ freq ("~ 400 ~ 800 [~ <1300 1600> ~!2]" |* 0.5) # s "soskick"\n    # connectionN 1 # sizeMin 12 # sizeMax 80 # figure "circle" # color "f58711"\n')),(0,n.kt)("p",null,"So that's it! "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Full performance: ",(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/QgCi6n5ZPRI"},"Erratic Rhythms - with visualization")),(0,n.kt)("li",{parentName:"ul"},"Tidal code: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/HighHarmonics2/livecoding/tree/main/tidal/erraticRhythms"},"GitHub - Erratic Rhythms"))),(0,n.kt)("p",null,"Check out Iv\xe1n's ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ivan-abreu/didacticpatternvisualizer/tree/main"},"Didactic Pattern Visualizer")),(0,n.kt)("p",null,"HighHarmonics"))}u.isMDXComponent=!0},5867:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/hh-visualizer1-5b38fff885bc875a3ff7ab55278f760f.jpg"},7216:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/hh-visualizer2-3ae44c16990b3cedb415c45fe095ee1d.jpg"},4668:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/hh-visualizer3-c99bc802ec0a82b183d3dedfe01c0cc5.jpg"}}]);