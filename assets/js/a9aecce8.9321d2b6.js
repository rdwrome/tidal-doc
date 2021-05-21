(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{207:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),s=(a(0),a(261)),l={title:"What is a pattern",permalink:"wiki/What_is_a_pattern?/",layout:"wiki",tags:["Reference|Pattern"]},o={unversionedId:"advanced/understanding-innards/What_is_a_pattern",id:"advanced/understanding-innards/What_is_a_pattern",isDocsHomePage:!1,title:"What is a pattern",description:"In Tidal, what is a pattern? There are a lot of ways of",source:"@site/docs/advanced/understanding-innards/What_is_a_pattern.md",slug:"/advanced/understanding-innards/What_is_a_pattern",permalink:"/docs/advanced/understanding-innards/What_is_a_pattern",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/advanced/understanding-innards/What_is_a_pattern.md",version:"current",lastUpdatedBy:"Koji Ishimoto",lastUpdatedAt:1615136026,sidebar:"advanced",next:{title:"Type signatures",permalink:"/docs/advanced/understanding-innards/Type_signatures"}},i=[],c={toc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"In Tidal, what ",Object(s.b)("em",{parentName:"p"},"is")," a pattern? There are a lot of ways of\nanswering this question. A technical definition is that under the hood,\na pattern is a function from time to events. You give a pattern a start\nand end time, and it gives you back the events that are active (in part\nor in whole) during that timespan. An event is itself a value with a\nstart and end time."),Object(s.b)("p",null,"This is mostly hidden when it comes to using Tidal to make music, but\nlets have a closer look at the innards of a really simple pattern:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'"1 2 3"\n')),Object(s.b)("p",null,"The above might look like a string, but Tidal quietly parses it into a\npattern for you (using a hidden function called parseBP_E). We can ask\nthat pattern for values by casting the string pattern to a Tidal pattern\nby appending"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},":: Pattern String\n")),Object(s.b)("p",null,"to the pattern string. You're kind of telling Tidal to treat this string\nas a pattern and show you what it sees:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'"1 2 3" :: Pattern String\n')),Object(s.b)("p",null,"If you run the above, you should see the contents of the first cycle in\nthe output buffer:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'(0>\u2153)|"1"\n(\u2153>\u2154)|"2"\n(\u2154>1)|"3"\n')),Object(s.b)("p",null,"From that we can see the first event"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"1\n")),Object(s.b)("p",null,"is active for the first third of the cycle, and so on."),Object(s.b)("p",null,"So a pattern is a function from a timespan (also known as an ",Object(s.b)("em",{parentName:"p"},"arc"),"), to\nvalues with each have a beginning and end. A function like"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"rev\n")),Object(s.b)("p",null,", is therefore a combinator, which takes such a function as input, and\ngives a new function as output (with input and output timing\nmanipulations baked-in, in order to reverse the pattern)."),Object(s.b)("h1",{id:"the-pattern-types"},"The Pattern types"),Object(s.b)("p",null,"That's the basics, lets have a look at some code. The core\nrepresentation for patterns is in the\n",Object(s.b)("a",{parentName:"p",href:"https://github.com/tidalcycles/Tidal/blob/master/src/Sound/Tidal/Pattern.hs"},"Sound.Tidal.Pattern"),"\nmodule. The core representation is in the ten or so lines at the top.\nLets step through it. Some Haskell knowledge will be helpful here, but\nyou will hopefully get the gist even without software development\nexperience."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"-- | Time is rational\ntype Time = Rational\n")),Object(s.b)("p",null,"The above states that time is rational. This means that rather than\nrepresenting time as integers (whole numbers), or as floating point\nnumbers, Tidal represents time as a ratio of ",Object(s.b)("em",{parentName:"p"},"two")," integers. This means\nthat for example a third can be represented precisely, as one over\nthree. Music is of course full of such ratios, and not representing them\nas such can cause a great deal of problems.. Basically, this means that\nif you add three one-thirds together, you'll get a whole. Seems obvious\nbut not all systems do this!"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"-- | A time arc (start and end)\ntype Arc = (Time, Time)\n")),Object(s.b)("p",null,"This is the representation of an arc, or timespan. We like to call this\na time arc rather than a time span, because in Tidal the notion of time\nis cyclic. Here the two time values are simply the beginning and end of\nan arc."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"-- | The second arc (the part) should be equal to or fit inside the\n-- first one (the whole that it's a part of).\ntype Part = (Arc, Arc)\n")),Object(s.b)("p",null,"Tidal often needs to represent ",Object(s.b)("em",{parentName:"p"},"part")," of an arc. It does so with two\narcs, the first representing the whole of the part, and the second the\npart itself. Often both arcs will be the same, which simply means that\nwe have a whole that has a single part."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"-- | An event is a value that's active during a timespan\ntype Event a = (Part, a)\n")),Object(s.b)("p",null,"An ",Object(s.b)("em",{parentName:"p"},"event")," then, consists of a part, and a value of type"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"a\n")),Object(s.b)("p",null,". This"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"a\n")),Object(s.b)("p",null,"can stand for ",Object(s.b)("em",{parentName:"p"},"any")," type (but you can only have events of the same type\nin any one pattern). For example you can have a pattern of words, of\nnumbers, of colours or even of other patterns.."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"data State = State {arc :: Arc,\n                    controls :: ControlMap\n                   }\n")),Object(s.b)("p",null,"Since version 1.0.0, Tidal patterns can also respond to changing state\nas well as progressing time. So the above represents the entire input to\na Tidal pattern, the current timespan, and the current state of external\ncontrollers (whether MIDI controllers, or other software). What is\ninteresting is that the current time (the"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"arc\n")),Object(s.b)("p",null,"isn't a point in time, but an arc, or timespan. This aligns with the\nidea of the psychological 'specious present' having a duration."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"-- | A function that represents events taking place over time\ntype Query a = (State -> [Event a])\n")),Object(s.b)("p",null,"Here is that function from time to events we were talking about earlier.\nWe simplified a bit - it's a function from a timespan plus some\nadditional state, to events. Notice the"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"a\n")),Object(s.b)("p",null,"is carried from the type of the events to the type of the query. This\nagain shows how a particular pattern can only represent events of the\nsame type."),Object(s.b)("p",null,"Notice also that a list of events is returned (denoted by the square\nbrackets). This simply means that tidal supports polyphony - many events\ncan take place at the same time. Remember though that each event has its\nown arc; two events might be returned for the same timespan, but they\nmay well not start and end at the same time, and might not overlap at\nall."),Object(s.b)("p",null,"It may also be that the arc of an event might extend outside the arc in\nthe query state. This is one case where we get part of an arc back - the\npart will be the intersection of the arc of the query and that of the\nevent."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"-- | Also known as Continuous vs Discrete/Amorphous vs Pulsating etc.\ndata Nature = Analog | Digital\n            deriving Eq\n")),Object(s.b)("p",null,"An important feature of Tidal is that you can accurately compose\nanalogue (continuous) and digital (discrete) patterns together. For\nexample it can be nice to multiply a discrete pattern of notes by a\ncontinuously varying sinewave. It's a bit of a myth that computers can\nonly represent digital structures, but when it comes to combining\nanalogue and digital patterns together, it's useful to be able to know\nwhich is which, hence the above datatype for doing that."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"-- | A datatype that's basically a query, plus a hint about whether its events\n-- are Analogue or Digital by nature\ndata Pattern a = Pattern {nature :: Nature, query :: Query a}\n")),Object(s.b)("p",null,"Here finally we arrive at the"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"Pattern\n")),Object(s.b)("p",null,"datatype, which simply consists of an either digital or analogue nature,\nplus a query for calculating events for a particular timespan."),Object(s.b)("p",null,"The only thing we haven't done is define what the"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"ControlMap\n")),Object(s.b)("p",null,"type is that we saw earlier. As well as being used to represent\ncontroller state, it's part of the definition of one more type, the"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"ControlPattern\n")),Object(s.b)("p",null,", here we go:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"data Value = VS { svalue :: String }\n           | VF { fvalue :: Double }\n           | VI { ivalue :: Int }\n           deriving (Eq,Ord,Typeable,Data)\n\n\x3c!--T:32--\x3e\ntype ControlMap = Map.Map String Value\ntype ControlPattern = Pattern ControlMap\n")),Object(s.b)("p",null,"A"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"ControlMap\n")),Object(s.b)("p",null,"is simply a dictionary (or map) for storing some values by name (using a\nstring). As well as using it for external control values within the"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"State\n")),Object(s.b)("p",null,"datatype, we also use it to make"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"ControlPattern\n")),Object(s.b)("p",null,"s","."," They are simply patterns of controlmaps, and are used for\nrepresenting patterns of synthesiser messages. So for example the"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"speed\n")),Object(s.b)("p",null,"function in"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'sound "bd sn" # speed "2 3"\n')),Object(s.b)("p",null,") turns a pattern of numbers into a pattern of controlmaps, the"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"sound\n")),Object(s.b)("p",null,"turns a pattern of words into a pattern of controlmaps, and the"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"#\n")),Object(s.b)("p",null,"composes them together into a new pattern of controlmaps. Feel free to\ncomment on the discussion page if something is unclear!"))}p.isMDXComponent=!0},261:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),h=n,d=u["".concat(l,".").concat(h)]||u[h]||b[h]||s;return a?r.a.createElement(d,o(o({ref:t},c),{},{components:a})):r.a.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<s;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);