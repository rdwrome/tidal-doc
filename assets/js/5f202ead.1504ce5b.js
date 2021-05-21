(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{155:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return o})),t.d(a,"toc",(function(){return c})),t.d(a,"default",(function(){return p}));var n=t(3),i=t(7),l=(t(0),t(261)),r={title:"Emacs",permalink:"wiki/Emacs/",layout:"wiki"},o={unversionedId:"getting-started/editor/Emacs",id:"getting-started/editor/Emacs",isDocsHomePage:!1,title:"Emacs",description:"------",source:"@site/docs/getting-started/editor/Emacs.md",slug:"/getting-started/editor/Emacs",permalink:"/docs/getting-started/editor/Emacs",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/editor/Emacs.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1621614610,sidebar:"docs",previous:{title:"Vim and Neovim",permalink:"/docs/getting-started/editor/Vim"},next:{title:"VS Code",permalink:"/docs/getting-started/editor/VS_Code"}},c=[{value:"Linux",id:"linux",children:[{value:"Install Emacs",id:"install-emacs",children:[]},{value:"Manual installation",id:"manual-installation",children:[]},{value:"Using Spacemacs",id:"using-spacemacs",children:[]},{value:"Using Doom Emacs",id:"using-doom-emacs",children:[]},{value:"Using the MELPA Package",id:"using-the-melpa-package",children:[]}]},{value:"MacOS",id:"macos",children:[{value:"Install Emacs",id:"install-emacs-1",children:[]},{value:"Configure Emacs",id:"configure-emacs",children:[]},{value:"Using Spacemacs",id:"using-spacemacs-1",children:[]},{value:"Using Doom Emacs",id:"using-doom-emacs-1",children:[]},{value:"Using the MELPA Package",id:"using-the-melpa-package-1",children:[]}]},{value:"Windows",id:"windows",children:[{value:"Installing Emacs",id:"installing-emacs",children:[]},{value:"Installing Haskell Mode",id:"installing-haskell-mode",children:[]},{value:"Install Tidal Mode",id:"install-tidal-mode",children:[]},{value:"Using the MELPA Package",id:"using-the-melpa-package-2",children:[]}]},{value:"Test Tidal with Emacs",id:"test-tidal-with-emacs",children:[]}],s={toc:c};function p(e){var a=e.components,r=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,r,{components:a,mdxType:"MDXLayout"}),Object(l.b)("hr",null),Object(l.b)("p",null,Object(l.b)("img",{alt:"emacsicon",src:t(318).default})),Object(l.b)("p",null,"Emacs is a classic programmer's editor with a long history. Emacs is so much more than just a text editor, but it has the reputation of being a little difficult to use at first. For a while, Emacs was the only editor that worked with Tidal, but if you are not feeling confident, use ",Object(l.b)("a",{parentName:"p",href:"https://atom.io"},"Atom")," (see the sidebar). Emacs has packages for ",Object(l.b)("a",{parentName:"p",href:"https://github.com/tidalcycles/Tidal/blob/main/tidal.el"},"Tidal ")," and ",Object(l.b)("a",{parentName:"p",href:"https://github.com/supercollider/scel"},"SuperCollider"),". Learning Emacs can be intimidating at first but it is also a very rewarding experience. Emacs is actually a whole computing environment, and you can do pretty much everything you can imagine with this software (send emails, read books, edit code, explore files on your computer, chat, etc...). The heart of Emacs is customization: there is a fully-fledged programming language (Emacs-Lisp) to do so."),Object(l.b)("p",null,"Depending on your OS, you might have to install it in very different ways. Check what is the recommanded distribution for your system. Once installed, be sure to check out one of the most popular configuration frameworks if you want to make things easier:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/hlissner/doom-emacs"},"Doom Emacs")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/syl20bnr/spacemacs"},"Spacemacs"))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"linux"},"Linux"),Object(l.b)("h3",{id:"install-emacs"},"Install Emacs"),Object(l.b)("h4",{id:"debian--ubuntu--mint"},"Debian / Ubuntu / Mint"),Object(l.b)("p",null,"You can install Emacs and its Haskell Mode using ",Object(l.b)("inlineCode",{parentName:"p"},"apt"),", the vanilla package manager:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"sudo\xa0apt-get\xa0install\xa0emacs24\xa0haskell-mode\n")),Object(l.b)("h4",{id:"arch--manjaro"},"Arch / Manjaro"),Object(l.b)("p",null,"You can install Emacs using the ",Object(l.b)("inlineCode",{parentName:"p"},"pacman")," package manager:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"sudo pacman \u2013S emacs\n")),Object(l.b)("h3",{id:"manual-installation"},"Manual installation"),Object(l.b)("h4",{id:"edit-your-emacs-file"},"Edit your .emacs file"),Object(l.b)("p",null,"To install the Emacs interface to Tidal, you\u2019ll need to edit a configuration file in your home folder called ",Object(l.b)("inlineCode",{parentName:"p"},".emacs"),". If it doesn\u2019t exist, create it. Then, add the following, replacing ",Object(l.b)("inlineCode",{parentName:"p"},"\\~/projects/tidal")," with the location of the ",Object(l.b)("inlineCode",{parentName:"p"},"tidal.el")," file:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-elisp"},"(add-to-list\xa0'load-path\xa0\"~/projects/tidal\")`\n(require\xa0'haskell-mode)`\n(require\xa0'tidal)`\n")),Object(l.b)("h4",{id:"download-tidalel"},"Download tidal.el"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"tidal.el")," file can be found here: ",Object(l.b)("a",{parentName:"p",href:"https://raw.github.com/tidalcycles/Tidal/master/tidal.el"},"tidal.el"),"."),Object(l.b)("h3",{id:"using-spacemacs"},"Using Spacemacs"),Object(l.b)("p",null,"If you are using the ",Object(l.b)("strong",{parentName:"p"},"Spacemacs")," custom distribution for ",Object(l.b)("strong",{parentName:"p"},"Emacs"),", you should be able to use a layer made for it by ",Object(l.b)("inlineCode",{parentName:"p"},"rbino"),". If you are using the develop branch, you just need to add ",Object(l.b)("inlineCode",{parentName:"p"},"tidalcycles")," to ",Object(l.b)("inlineCode",{parentName:"p"},"dotspacemacs-configuration-layers")," and it should work out of the box."),Object(l.b)("p",null,"Reload the configuration with ",Object(l.b)("inlineCode",{parentName:"p"},"SPC f e R")," or restart Spacemacs for the changes to take effect. "),Object(l.b)("p",null,"The Tidal mode will load automatically whenever you open a ",Object(l.b)("inlineCode",{parentName:"p"},".tidal")," file. Press ",Object(l.b)("inlineCode",{parentName:"p"},"Ctrl/Cmd+Return")," to evaluate a line. Explore the other shortcuts or map them to your liking."),Object(l.b)("h3",{id:"using-doom-emacs"},"Using Doom Emacs"),Object(l.b)("p",null,"The installation of ",Object(l.b)("inlineCode",{parentName:"p"},"tidal.el")," for Doom Emacs is currently undocumented. It is known to work pretty well. "),Object(l.b)("h3",{id:"using-the-melpa-package"},"Using the MELPA Package"),Object(l.b)("p",null,"A MELPA package is provided for Tidal Cycles integration within ",Object(l.b)("strong",{parentName:"p"},"Emacs"),".\nYou must first make sure you have MELPA installed on your machine (",Object(l.b)("a",{parentName:"p",href:"https://melpa.org/#/getting-started"},"instructions"),"; basically\nmodifying your ",Object(l.b)("inlineCode",{parentName:"p"},"init.el")," or ",Object(l.b)("inlineCode",{parentName:"p"},".emacs")," files with the first code snippet and\nthen executing ",Object(l.b)("inlineCode",{parentName:"p"},"M-x package-refresh-contents")," in Emacs."),Object(l.b)("p",null,"Here some ",Object(l.b)("a",{parentName:"p",href:"https://elpa.gnu.org/packages/gnu-elpa-keyring-update.html"},"keyring update")," information if it fails to verify signature after running the last command) then simply run:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-elisp"},"M-x package-install\n")),Object(l.b)("p",null,"followed by:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-elisp"},"tidal\n")),Object(l.b)("p",null,"This extension provides a major mode for ",Object(l.b)("inlineCode",{parentName:"p"},"*.tidal")," files. Once the package is installed, you can just open a Tidal script and press ",Object(l.b)("inlineCode",{parentName:"p"},"C-c C-s")," to start Tidal in Emacs, then ",Object(l.b)("inlineCode",{parentName:"p"},"C-return")," to run the statement under your cursor."),Object(l.b)("hr",null),Object(l.b)("h2",{id:"macos"},"MacOS"),Object(l.b)("h3",{id:"install-emacs-1"},"Install Emacs"),Object(l.b)("p",null,"Install Emacs using one of the distributions available for MacOS and make it appear in your applications folder:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"brew\xa0install\xa0emacs\xa0--cocoa\nbrew\xa0linkapps\n")),Object(l.b)("h3",{id:"configure-emacs"},"Configure Emacs"),Object(l.b)("p",null,"It is now time to configure Emacs. Do the following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"mkdir\xa0~/tidal\ncd\xa0~/tidal\ncurl\xa0-L\xa0https://raw.githubusercontent.com/yaxu/Tidal/master/tidal.el\xa0>\xa0tidal.el\n")),Object(l.b)("p",null,"Create a file in your home folder called ",Object(l.b)("inlineCode",{parentName:"p"},".emacs")," (unless it exists already). Open the file in a text editor and insert the following lines:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-elisp"},'(require \'package)\n(add-to-list \'package-archives \n   \'("marmalade" .\n     "http://marmalade-repo.org/packages/"))\n(package-initialize)\n(setq load-path (cons "~/tidal/" load-path))\n(require \'tidal)\n(setq tidal-interpreter "/usr/local/bin/ghci")\n')),Object(l.b)("p",null,"The above ensures that Emacs has access to the extensions in the\n",Object(l.b)("inlineCode",{parentName:"p"},"marmalade")," repository (in particular, Haskell-Mode), that the ",Object(l.b)("inlineCode",{parentName:"p"},"tidal.el"),"\nfile you downloaded earlier is is loaded, and that Tidal can find the\nHaskell interpreter."),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"If you have already installed Haskell using the Haskell Platform\ninstaller, make the following change to the above:"),Object(l.b)("pre",{parentName:"div"},Object(l.b)("code",{parentName:"pre",className:"language-elisp"},'(setq\xa0tidal-interpreter\xa0"/usr/bin/ghci")\n')))),Object(l.b)("p",null,"Now start ",Object(l.b)("strong",{parentName:"p"},"Emacs")," (or if it\u2019s already loaded, restart it to make sure\n",Object(l.b)("inlineCode",{parentName:"p"},".emacs")," is read), it should be in your Applications folder (if you start\nit from the terminal it\u2019ll probably load an old version). Once ",Object(l.b)("strong",{parentName:"p"},"Emacs")," has\nstarted, press ",Object(l.b)("inlineCode",{parentName:"p"},"alt-x")," (i.e. hold down alt while pressing x) and type:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-elisp"},"package-refresh-contents\n")),Object(l.b)("p",null,"Then do alt-x again and type:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-elisp"},"package-install\n")),Object(l.b)("p",null,"and then:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-elisp"},"haskell-mode\n")),Object(l.b)("h3",{id:"using-spacemacs-1"},"Using Spacemacs"),Object(l.b)("p",null,"If you are using the ",Object(l.b)("strong",{parentName:"p"},"Spacemacs")," custom distribution for ",Object(l.b)("strong",{parentName:"p"},"Emacs"),", you should be able to use a layer made for it by ",Object(l.b)("inlineCode",{parentName:"p"},"rbino"),". If you are using the develop branch, you just need to add ",Object(l.b)("inlineCode",{parentName:"p"},"tidalcycles")," to ",Object(l.b)("inlineCode",{parentName:"p"},"dotspacemacs-configuration-layers")," and it should work out of the box."),Object(l.b)("p",null,"Reload the configuration with ",Object(l.b)("inlineCode",{parentName:"p"},"SPC f e R")," or restart Spacemacs for the changes to take effect. "),Object(l.b)("p",null,"The Tidal mode will load automatically whenever you open a ",Object(l.b)("inlineCode",{parentName:"p"},".tidal")," file. Press ",Object(l.b)("inlineCode",{parentName:"p"},"Ctrl/Cmd+Return")," to evaluate a line. Explore the other shortcuts or map them to your liking."),Object(l.b)("h3",{id:"using-doom-emacs-1"},"Using Doom Emacs"),Object(l.b)("p",null,"The installation of ",Object(l.b)("inlineCode",{parentName:"p"},"tidal.el")," for Doom Emacs is currently undocumented. It is known to work pretty well. "),Object(l.b)("h3",{id:"using-the-melpa-package-1"},"Using the MELPA Package"),Object(l.b)("p",null,"A MELPA package is provided for Tidal Cycles integration within ",Object(l.b)("strong",{parentName:"p"},"Emacs"),".\nYou must first make sure you have MELPA installed on your machine (",Object(l.b)("a",{parentName:"p",href:"https://melpa.org/#/getting-started"},"instructions"),"; basically\nmodifying your ",Object(l.b)("inlineCode",{parentName:"p"},"init.el")," or ",Object(l.b)("inlineCode",{parentName:"p"},".emacs")," files with the first code snippet and\nthen executing ",Object(l.b)("inlineCode",{parentName:"p"},"M-x package-refresh-contents")," in Emacs."),Object(l.b)("p",null,"Here some ",Object(l.b)("a",{parentName:"p",href:"https://elpa.gnu.org/packages/gnu-elpa-keyring-update.html"},"keyring update")," information if it fails to verify signature after running the last command) then simply run:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-elisp"},"M-x package-install\n")),Object(l.b)("p",null,"followed by:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-elisp"},"tidal\n")),Object(l.b)("p",null,"This extension provides a major mode for ",Object(l.b)("inlineCode",{parentName:"p"},"*.tidal")," files. Once the package is installed, you can just open a Tidal script and press ",Object(l.b)("inlineCode",{parentName:"p"},"C-c C-s")," to start Tidal in Emacs, then ",Object(l.b)("inlineCode",{parentName:"p"},"C-return")," to run the statement under your cursor."),Object(l.b)("h2",{id:"windows"},"Windows"),Object(l.b)("h3",{id:"installing-emacs"},"Installing Emacs"),Object(l.b)("p",null,"Download ",Object(l.b)("a",{parentName:"p",href:"http://ftp.gnu.org/gnu/emacs/windows/"},"Emacs for Windows"),". Extract the ",Object(l.b)("inlineCode",{parentName:"p"},".zip")," file, then simply run Emacs from ",Object(l.b)("inlineCode",{parentName:"p"},"bin\\\\runemacs.exe"),". You will need to find or create the ",Object(l.b)("inlineCode",{parentName:"p"},".emacs")," file located in your home directory. This is the Emacs config file. Your exact location may vary depending on how Emacs is installed/run."),Object(l.b)("p",null,"If you run ",Object(l.b)("inlineCode",{parentName:"p"},"runemacs.exe")," by double-clicking on it, then your ",Object(l.b)("inlineCode",{parentName:"p"},".emacs")," file\nwill probably be located at ",Object(l.b)("inlineCode",{parentName:"p"},"C:\\\\Users\\\\(username)\\\\AppData\\\\Roaming\\\\"),".\nIf you put the ",Object(l.b)("inlineCode",{parentName:"p"},"runemacs.exe")," folder on your path and run it from a\ncommand prompt, then your ",Object(l.b)("inlineCode",{parentName:"p"},".emacs")," file will probably be located at\n",Object(l.b)("inlineCode",{parentName:"p"},"c:\\\\users\\\\\\(username)\\\\")," Be aware of how you started ",Object(l.b)("inlineCode",{parentName:"p"},"runemacs.exe"),", and\ncreate the ",Object(l.b)("inlineCode",{parentName:"p"},".emacs")," in the appropriate folder if it does not exist\nalready."),Object(l.b)("p",null,"Alternately, you can try to have Emacs create the ",Object(l.b)("inlineCode",{parentName:"p"},".emacs")," file for you\nautomatically by changing a config setting from one of the Emacs menus\nand saving your configuration."),Object(l.b)("h3",{id:"installing-haskell-mode"},"Installing Haskell Mode"),Object(l.b)("p",null,"Haskell-mode needs to be installed in Emacs. The easiest way to do this\nin Windows is add the Marmalade package manager. There are other ways to install haskell-mode (detailed ",Object(l.b)("a",{parentName:"p",href:"https://github.com/haskell/haskell-mode"},"here")," but Marmalade is probably easiest. Enable Marmalade by adding this to your .emacs file:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-elisp"},'(require \'package)\n(add-to-list \'package-archives\n            \'("marmalade" . "http://marmalade-repo.org/packages/"))\n(package-initialize)\n')),Object(l.b)("p",null,"Refresh the package index by typing ",Object(l.b)("inlineCode",{parentName:"p"},"M-x")," and then ",Object(l.b)("inlineCode",{parentName:"p"},"package-refresh-contents"),"."),Object(l.b)("p",null,"Install ",Object(l.b)("inlineCode",{parentName:"p"},"haskell-mode")," by doing ",Object(l.b)("inlineCode",{parentName:"p"},"M-x")," and then ",Object(l.b)("inlineCode",{parentName:"p"},"package-install"),", followed by ",Object(l.b)("inlineCode",{parentName:"p"},"haskell-mode"),"."),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"The ",Object(l.b)("inlineCode",{parentName:"p"},"M-x")," key combination is ",Object(l.b)("inlineCode",{parentName:"p"},"Alt-x")," in Windows."))),Object(l.b)("h3",{id:"install-tidal-mode"},"Install Tidal Mode"),Object(l.b)("p",null,"In ",Object(l.b)("inlineCode",{parentName:"p"},".emacs")," add the following lines to enable Tidal:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-elisp"},"(add-to-list\xa0'load-path\xa0\"c:/projects/tidal\")\n(require\xa0'haskell-mode)\n(require\xa0'tidal)\n")),Object(l.b)("p",null,"Replace ",Object(l.b)("inlineCode",{parentName:"p"},"c:/projects/tidal")," with the path to the folder that\ncontains ",Object(l.b)("inlineCode",{parentName:"p"},"tidal.el"),". This file can be obtained from the Tidal repository,\n",Object(l.b)("a",{parentName:"p",href:"https://github.com/yaxu/Tidal"},"here"),". The easiest way to use it is to\nclone the Tidal repository and modify the ",Object(l.b)("inlineCode",{parentName:"p"},".emacs")," file to use the path\nwhere you cloned it:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"git\xa0clone https://github.com/yaxu/Tidal c:\\tidal\n")),Object(l.b)("p",null,"If you do the same, your ",Object(l.b)("inlineCode",{parentName:"p"},".emacs")," configuration file should look like this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-elisp"},"(add-to-list\xa0'load-path\xa0\"c:/tidal\")\n(require\xa0'haskell-mode)\n(require\xa0'tidal)\n")),Object(l.b)("h3",{id:"using-the-melpa-package-2"},"Using the MELPA Package"),Object(l.b)("p",null,"Alternatively, A MELPA package is provided for Tidal Cycles integration within ",Object(l.b)("strong",{parentName:"p"},"Emacs"),". Please be sure to read everything in the Windows section without trying this.\nYou must first make sure you have MELPA installed on your machine (",Object(l.b)("a",{parentName:"p",href:"https://melpa.org/#/getting-started"},"instructions"),"; basically\nmodifying your ",Object(l.b)("inlineCode",{parentName:"p"},"init.el")," or ",Object(l.b)("inlineCode",{parentName:"p"},".emacs")," files with the first code snippet and\nthen executing ",Object(l.b)("inlineCode",{parentName:"p"},"M-x package-refresh-contents")," in Emacs."),Object(l.b)("p",null,"Here some ",Object(l.b)("a",{parentName:"p",href:"https://elpa.gnu.org/packages/gnu-elpa-keyring-update.html"},"keyring update")," information if it fails to verify signature after running the last command) then simply run:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-elisp"},"M-x package-install\n")),Object(l.b)("p",null,"followed by:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-elisp"},"tidal\n")),Object(l.b)("p",null,"This extension provides a major mode for ",Object(l.b)("inlineCode",{parentName:"p"},"*.tidal")," files. Once the package is installed, you can just open a Tidal script and press ",Object(l.b)("inlineCode",{parentName:"p"},"C-c C-s")," to start Tidal in Emacs, then ",Object(l.b)("inlineCode",{parentName:"p"},"C-return")," to run the statement under your cursor."),Object(l.b)("h2",{id:"test-tidal-with-emacs"},"Test Tidal with Emacs"),Object(l.b)("p",null,"You should now have installed the Tidal Mode for ",Object(l.b)("strong",{parentName:"p"},"Emacs"),". Open a new file, and give it a random name like ",Object(l.b)("inlineCode",{parentName:"p"},"helloworld.tidal"),". Once the file is opened, you still have to start ",Object(l.b)("strong",{parentName:"p"},"Tidal"),". Enter ",Object(l.b)("inlineCode",{parentName:"p"},"Ctrl-C")," and then ",Object(l.b)("inlineCode",{parentName:"p"},"Ctrl-S")," to start. Check if ",Object(l.b)("strong",{parentName:"p"},"Emacs")," and Tidal are working correctly by entering the following line and by pressing ",Object(l.b)("inlineCode",{parentName:"p"},"Ctrl+Enter")," to evaluate the single-line block:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1\xa0$\xa0brak\xa0$\xa0sound\xa0"bd\xa0sn/2"\n')),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},Object(l.b)("inlineCode",{parentName:"p"},"Ctrl+Enter"),": evaluate a single line."),Object(l.b)("p",{parentName:"div"},Object(l.b)("inlineCode",{parentName:"p"},"Ctrl+C Ctrl+E"),": evaluate multiple lines."),Object(l.b)("p",{parentName:"div"},"For more shortcuts, look inside the ",Object(l.b)("inlineCode",{parentName:"p"},"tidal.el")," file."))),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},Object(l.b)("strong",{parentName:"p"},"Advanced Users:")," please notice that the location of the ",Object(l.b)("inlineCode",{parentName:"p"},"BootTidal.hs")," file is defined in the ",Object(l.b)("inlineCode",{parentName:"p"},"tidal.el")," file to be:"),Object(l.b)("pre",{parentName:"div"},Object(l.b)("code",{parentName:"pre",className:"language-shell"},"ghc-pkg\xa0describe\xa0$(ghc-pkg\xa0latest\xa0tidal)\xa0|\xa0grep\xa0data-dir\xa0|\xa0cut\xa0-f2\xa0-d\xa0'\xa0'\n")),Object(l.b)("p",{parentName:"div"},"You might need to override this, e.g. with the following setting (replace the path with the actual location of the BootTidal.hs file)."),Object(l.b)("pre",{parentName:"div"},Object(l.b)("code",{parentName:"pre",className:"language-elisp"},'(setq\xa0tidal-boot-script-path\xa0"~/.cabal/share/x86_64-linux-ghc-8.6.5/tidal-1.4.8/BootTidal.hs")\n')),Object(l.b)("p",{parentName:"div"},"You only need to actually change this file if you want to tweak the\n",Object(l.b)("inlineCode",{parentName:"p"},"superdirtTarget"),", e. g. to use SuperCollider on a remote host."))))}p.isMDXComponent=!0},261:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return u}));var n=t(0),i=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var a=i.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=p(e.components);return i.a.createElement(s.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},m=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=n,u=d["".concat(r,".").concat(m)]||d[m]||b[m]||l;return t?i.a.createElement(u,o(o({ref:a},s),{},{components:t})):i.a.createElement(u,o({ref:a},s))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,r=new Array(l);r[0]=m;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var s=2;s<l;s++)r[s]=t[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},318:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/emacsicon-6f3af86569d1379147202a3664fbb5ec.png"}}]);