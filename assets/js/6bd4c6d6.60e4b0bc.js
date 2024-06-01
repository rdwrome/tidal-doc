"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2178],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),g=i,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(3117),i=(n(7294),n(3905));const o={title:"DAW",id:"connecting_to_a_daw"},a=void 0,l={unversionedId:"configuration/MIDIOSC/connecting_to_a_daw",id:"configuration/MIDIOSC/connecting_to_a_daw",title:"DAW",description:"This page is incomplete. You can help by extending it.",source:"@site/docs/configuration/MIDIOSC/connecting_daw.md",sourceDirName:"configuration/MIDIOSC",slug:"/configuration/MIDIOSC/connecting_to_a_daw",permalink:"/docs/configuration/MIDIOSC/connecting_to_a_daw",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/configuration/MIDIOSC/connecting_daw.md",tags:[],version:"current",lastUpdatedAt:1717241936,formattedLastUpdatedAt:"Jun 1, 2024",frontMatter:{title:"DAW",id:"connecting_to_a_daw"},sidebar:"docs",previous:{title:"OSC",permalink:"/docs/configuration/MIDIOSC/osc"},next:{title:"Control Voltage/CV",permalink:"/docs/configuration/MIDIOSC/control-voltage"}},c={},s=[{value:"Ableton",id:"ableton",level:2},{value:"Bitwig",id:"bitwig",level:2},{value:"Renoise",id:"renoise",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This page is incomplete. You can help by extending it.")),(0,i.kt)("p",null,"Many people are connecting ",(0,i.kt)("strong",{parentName:"p"},"Tidal")," to a ",(0,i.kt)("strong",{parentName:"p"},"DAW")," (",(0,i.kt)("em",{parentName:"p"},"digital audio workstation"),") like the free/open source Ardour software, and proprietary Ableton, Bitwig, Renoise, Reaper, and so on. There are many reasons to do so: using external instruments, sound post-treatment, mixing, etc... For this reason, there are many guides you can find here and there detailing how to connect Tidal with specific DAWs."),(0,i.kt)("h2",{id:"ableton"},"Ableton"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://club.tidalcycles.org/t/using-tidal-with-ableton-live/3135"},"Using Tidal with Ableton")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://club.tidalcycles.org/t/routing-tidal-audio-to-ableton/437"},"Routing Tidal audio to Ableton"))),(0,i.kt)("h2",{id:"bitwig"},"Bitwig"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://club.tidalcycles.org/t/live-stream-8-tidalcycles-x-daws-with-jack-armitage/1495/3"},"Tidal x DAWs (Jack Armitage)"))),(0,i.kt)("h2",{id:"renoise"},"Renoise"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://club.tidalcycles.org/t/tidal-renoise-3-redirt/2400"},"Tidal + Renoise = <3 (redirt)"))))}p.isMDXComponent=!0}}]);