(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(3),r=n(7),a=(n(0),n(219)),o={title:"Vim and Neovim",permalink:"wiki/Vim/",layout:"wiki"},c={unversionedId:"getting-started/editor/Vim",id:"getting-started/editor/Vim",isDocsHomePage:!1,title:"Vim and Neovim",description:"----",source:"@site/docs/getting-started/editor/Vim.md",slug:"/getting-started/editor/Vim",permalink:"/docs/getting-started/editor/Vim",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/editor/Vim.md",version:"current",lastUpdatedBy:"Petter K",lastUpdatedAt:1666719415,sidebar:"docs",previous:{title:"Atom",permalink:"/docs/getting-started/editor/Atom"},next:{title:"Emacs",permalink:"/docs/getting-started/editor/Emacs"}},l=[{value:"Vim-Tidal",id:"vim-tidal",children:[]},{value:"Vim: Tips and tricks",id:"vim-tips-and-tricks",children:[{value:"Undotree",id:"undotree",children:[]},{value:"Hacky custom completion",id:"hacky-custom-completion",children:[]}]}],s={toc:l};function d(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("hr",null),Object(a.b)("p",null,Object(a.b)("img",{alt:"vimicon",src:n(293).default})),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://www.vim.org"},"Vim")," is the ",Object(a.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Vim_(text_editor)"},"classic and ubiquitous")," text editor. This editor is famous for its minimalistic approach, flexibility, and for its unique approach to ",Object(a.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Vi#Interface"},"modal editing"),". Vim and ",Object(a.b)("a",{parentName:"p",href:"https://neovim.io/"},"Neovim")," are free, cross-platform and open-source. They can be extended through the help of plugins, and are generally more configurable than other text editors. Vim has a very long history and has the reputation of being very stable and fast."),Object(a.b)("p",null,"Vim is generally used by experienced users: developers, system administrators, tech enthusiasts. It has a steep learning curve, but fluency allows the user, after a while, to edit text at the speed of light and with great precision."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"vim-tidal"},"Vim-Tidal"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://camo.githubusercontent.com/d42afb94633db9b527910d87e2b3320f28c2221c1711043854976e3f8628104b/687474703a2f2f692e696d6775722e636f6d2f66724f4c4646492e676966",alt:"vimtidal"})),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/tidalcycles/vim-tidal"},"Vim-Tidal")," is the recommended plugin to interact with Tidal Cycles. It will work for both ",Object(a.b)("a",{parentName:"p",href:"https://www.vim.org/"},"Vim")," and ",Object(a.b)("a",{parentName:"p",href:"https://neovim.io/"},"Neovim"),", and will adapt to your setup. You can use Neovim's native ",Object(a.b)("inlineCode",{parentName:"p"},"terminal")," functionality, as well as ",Object(a.b)("inlineCode",{parentName:"p"},"tmux")," or other multiplexers. Check the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/tidalcycles/vim-tidal#readme"},"README")," file for more information about the installation process."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"vim-tips-and-tricks"},"Vim: Tips and tricks"),Object(a.b)("h3",{id:"undotree"},"Undotree"),Object(a.b)("p",null,Object(a.b)("img",{alt:"undotree",src:n(294).default})),Object(a.b)("p",null,"As suggested by ",Object(a.b)("inlineCode",{parentName:"p"},"@guiot")," on the ",Object(a.b)("a",{parentName:"p",href:"https://club.tidalcycles.org"},"Tidal Club")," Forum. You can keep track of your improvisations using the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mbbill/undotree"},"undotree")," plugin for Vim/Neovim. Using the undotree wisely is a great way to backtrack in time or to keep a ",Object(a.b)("inlineCode",{parentName:"p"},"plaintext")," trace of your improvisations. By default, ",Object(a.b)("inlineCode",{parentName:"p"},"undotree")," will record every little tiny changes in your text file. Activate the ",Object(a.b)("inlineCode",{parentName:"p"},"undotree")," for a file by entering the ",Object(a.b)("inlineCode",{parentName:"p"},":UndotreeToggle")," command."),Object(a.b)("h3",{id:"hacky-custom-completion"},"Hacky custom completion"),Object(a.b)("p",null,"You can create custom code completions by placing the following lines in your ",Object(a.b)("inlineCode",{parentName:"p"},".vimrc")," file. This function will working only if a ",Object(a.b)("inlineCode",{parentName:"p"},".tidal")," file is currently being edited with ",Object(a.b)("inlineCode",{parentName:"p"},"vim-tidal"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},'autocmd FileType tidal call s:tidal_abbr()\nfunction! s:tidal_abbr()\n    inoreabbr billybd "[t ~ ~ ~] [~ ~ ~ ~] [t ~ ~ ~] [~ ~ ~ ~]"\n    inoreabbr billysn "[~ ~ ~ ~] [t ~ ~ ~] [~ ~ ~ ~] [t ~ ~ ~]"\n    inoreabbr billych "[t ~ t ~] [t ~ t ~] [t ~ t ~] [t ~ t ~]"\n    inoreabbr bluemondaybd "[t ~ ~ ~] [~ ~ ~ ~] [t ~ ~ ~] [~ ~ ~ ~]"\n    inoreabbr bluemondaysn "[~ ~ ~ ~] [t ~ ~ ~] [~ ~ ~ ~] [t ~ ~ ~]"\n    inoreabbr bluemondaycp "[~ ~ ~ ~] [t ~ ~ ~] [~ ~ ~ ~] [t ~ ~ ~]"\n    inoreabbr bluemondayoh "[~ ~ t ~] [~ ~ t ~] [~ ~ t ~] [~ ~ t ~]"\n    ... etc ...\nendfunction\n')),Object(a.b)("p",null,"Simply write ",Object(a.b)("inlineCode",{parentName:"p"},"billybd")," or ",Object(a.b)("inlineCode",{parentName:"p"},"billysn")," to see the text being replaced by your pattern. Try to give these snippets very distinctive names so that they don't enter in conflict with language or library keywords."))}d.isMDXComponent=!0},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=i,m=p["".concat(o,".").concat(u)]||p[u]||b[u]||a;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},293:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/vimicon-a8a4f20a07ca905559cf1ee229d7a038.png"},294:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/undotree-e18be9d421420d37356f650ba5e39ca3.png"}}]);