(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{167:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"metadata",(function(){return l})),n.d(e,"toc",(function(){return s})),n.d(e,"default",(function(){return d}));var i=n(3),a=n(7),r=(n(0),n(261)),o={title:"The Boot File",id:"boot-tidal"},l={unversionedId:"configuration/boot-tidal",id:"configuration/boot-tidal",isDocsHomePage:!1,title:"The Boot File",description:"Everytime you start Tidal, the software is reading from a configuration file usually named BootTidal.hs. Generally, this file will be attached to your text editor (check the plugin you are using). Save this file somewhere safe, you will have to tweak it sometimes: changing options, adding new functionality, etc...",source:"@site/docs/configuration/boottidal.md",slug:"/configuration/boot-tidal",permalink:"/docs/configuration/boot-tidal",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/configuration/boottidal.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1621614610,sidebar:"docs",previous:{title:"Multi-User Tidal",permalink:"/docs/configuration/multiuser-tidal"},next:{title:"MIDI",permalink:"/docs/configuration/MIDIOSC/midi"}},s=[{value:"Controlling Latency",id:"controlling-latency",children:[]},{value:"SuperDirt running in another host",id:"superdirt-running-in-another-host",children:[]}],c={toc:s};function d(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Everytime you start Tidal, the software is reading from a configuration file usually named ",Object(r.b)("inlineCode",{parentName:"p"},"BootTidal.hs"),". Generally, this file will be attached to your text editor (check the plugin you are using). Save this file somewhere safe, you will have to tweak it sometimes: changing options, adding new functionality, etc..."),Object(r.b)("p",null,"Some users went really far into customizing their setup: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/jarmitage/jarmlib"},"Jarmlib"),". You can take a look at their work to see how to extend your configuration file."),Object(r.b)("p",null,"As an example, here is the ",Object(r.b)("em",{parentName:"p"},"vanilla")," ",Object(r.b)("inlineCode",{parentName:"p"},"BootTidal.hs")," file used by the ",Object(r.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/tidalcycles/atom-tidalcycles/master/lib/BootTidal.hs"},"Atom Package for Tidal"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-c"},':set -XOverloadedStrings\n:set prompt ""\n\nimport Sound.Tidal.Context\nimport System.IO (hSetEncoding, stdout, utf8)\nhSetEncoding stdout utf8\n\n-- total latency = oLatency + cFrameTimespan\ntidal <- startTidal (superdirtTarget {oLatency = 0.1, oAddress = "127.0.0.1", oPort = 57120}) (defaultConfig {cFrameTimespan = 1/20})\n\n:{\nlet p = streamReplace tidal\n    hush = streamHush tidal\n    list = streamList tidal\n    mute = streamMute tidal\n    unmute = streamUnmute tidal\n    solo = streamSolo tidal\n    unsolo = streamUnsolo tidal\n    once = streamOnce tidal\n    first = streamFirst tidal\n    asap = once\n    nudgeAll = streamNudgeAll tidal\n    all = streamAll tidal\n    resetCycles = streamResetCycles tidal\n    setcps = asap . cps\n    xfade i = transition tidal True (Sound.Tidal.Transition.xfadeIn 4) i\n    xfadeIn i t = transition tidal True (Sound.Tidal.Transition.xfadeIn t) i\n    histpan i t = transition tidal True (Sound.Tidal.Transition.histpan t) i\n    wait i t = transition tidal True (Sound.Tidal.Transition.wait t) i\n    waitT i f t = transition tidal True (Sound.Tidal.Transition.waitT f t) i\n    jump i = transition tidal True (Sound.Tidal.Transition.jump) i\n    jumpIn i t = transition tidal True (Sound.Tidal.Transition.jumpIn t) i\n    jumpIn\' i t = transition tidal True (Sound.Tidal.Transition.jumpIn\' t) i\n    jumpMod i t = transition tidal True (Sound.Tidal.Transition.jumpMod t) i\n    mortal i lifespan release = transition tidal True (Sound.Tidal.Transition.mortal lifespan release) i\n    interpolate i = transition tidal True (Sound.Tidal.Transition.interpolate) i\n    interpolateIn i t = transition tidal True (Sound.Tidal.Transition.interpolateIn t) i\n    clutch i = transition tidal True (Sound.Tidal.Transition.clutch) i\n    clutchIn i t = transition tidal True (Sound.Tidal.Transition.clutchIn t) i\n    anticipate i = transition tidal True (Sound.Tidal.Transition.anticipate) i\n    anticipateIn i t = transition tidal True (Sound.Tidal.Transition.anticipateIn t) i\n    forId i t = transition tidal False (Sound.Tidal.Transition.mortalOverlay t) i\n    d1 = p 1 . (|< orbit 0)\n    d2 = p 2 . (|< orbit 1)\n    d3 = p 3 . (|< orbit 2)\n    d4 = p 4 . (|< orbit 3)\n    d5 = p 5 . (|< orbit 4)\n    d6 = p 6 . (|< orbit 5)\n    d7 = p 7 . (|< orbit 6)\n    d8 = p 8 . (|< orbit 7)\n    d9 = p 9 . (|< orbit 8)\n    d10 = p 10 . (|< orbit 9)\n    d11 = p 11 . (|< orbit 10)\n    d12 = p 12 . (|< orbit 11)\n    d13 = p 13\n    d14 = p 14\n    d15 = p 15\n    d16 = p 16\n:}\n\n:{\nlet setI = streamSetI tidal\n    setF = streamSetF tidal\n    setS = streamSetS tidal\n    setR = streamSetR tidal\n    setB = streamSetB tidal\n:}\n\n:set prompt "tidal> "\n:set prompt-cont ""\n\n')),Object(r.b)("h2",{id:"controlling-latency"},"Controlling Latency"),Object(r.b)("p",null,"There are two configuration values which control overall latency: ",Object(r.b)("inlineCode",{parentName:"p"},"frame timespan")," and ",Object(r.b)("inlineCode",{parentName:"p"},"latency"),". To find the maximum total latency, add them together. Here's an example configuration:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"tidal <- startTidal (superdirtTarget {oLatency = 0.02}) (defaultConfig {cFrameTimespan = 1/20})\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Frame timespan"),":  This is the duration of Tidal's calculation window in seconds. The default is ",Object(r.b)("inlineCode",{parentName:"p"},"0.05 seconds"),", in other words a calculation rate of 20 frames per second. If you find Tidal is using too much CPU, increasing the frame timespan will probably help. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Latency"),": If you get late messages in supercollider, you can increase the latency by increasing this from its default value (which at the time of writing is ",Object(r.b)("inlineCode",{parentName:"p"},"0.02"),")."))),Object(r.b)("h2",{id:"superdirt-running-in-another-host"},"SuperDirt running in another host"),Object(r.b)("p",null,"If you're running ",Object(r.b)("strong",{parentName:"p"},"SuperDirt")," in another host (perhaps, in a multi-user setup), you need to define this in a similar fashion as with the latency, except in this case the keyname is ",Object(r.b)("inlineCode",{parentName:"p"},"oAddress"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'tidal <- startTidal (superdirtTarget {oAddress = "192.168.0.23", oPort = 57120}) defaultConfig\n')),Object(r.b)("p",null,"In case you need to alter multiple settings for ",Object(r.b)("inlineCode",{parentName:"p"},"superdirtTarget"),", just separate them by a comma:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'{oAddress = "1.2.3.4", oLatency = 0.04}\n')),Object(r.b)("p",null,"Note that in ",Object(r.b)("strong",{parentName:"p"},"Emacs")," (and possibly other editor) configuration files, you'll need to escape the quotation marks."),Object(r.b)("p",null,"You will also need to configure ",Object(r.b)("strong",{parentName:"p"},"SuperDirt")," to accept messages coming from another host. For example, starting ",Object(r.b)("strong",{parentName:"p"},"Dirt")," like this will tell listen for OSC messages on all network interfaces:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'~dirt.start(57120, [0, 0], NetAddr("0.0.0.0"));\n')))}d.isMDXComponent=!0},261:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return b}));var i=n(0),a=n.n(i);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=a.a.createContext({}),d=function(t){var e=a.a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=d(t.components);return a.a.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},m=a.a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,o=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=d(n),m=i,b=u["".concat(o,".").concat(m)]||u[m]||p[m]||r;return n?a.a.createElement(b,l(l({ref:e},c),{},{components:n})):a.a.createElement(b,l({ref:e},c))}));function b(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);