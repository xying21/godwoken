"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[2818],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(t),k=a,d=m["".concat(l,".").concat(k)]||m[k]||u[k]||o;return t?r.createElement(d,c(c({ref:n},p),{},{components:t})):r.createElement(d,c({ref:n},p))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},350:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));t(4996);const o={id:"commandUsage",title:"Godwoken-kicker Command Line"},c=void 0,i={unversionedId:"commandUsage",id:"commandUsage",title:"Godwoken-kicker Command Line",description:"",source:"@site/docs/commandUsage.md",sourceDirName:".",slug:"/commandUsage",permalink:"/next/commandUsage",draft:!1,tags:[],version:"current",frontMatter:{id:"commandUsage",title:"Godwoken-kicker Command Line"},sidebar:"sidebar2",previous:{title:"Light Godwoken Tutorial",permalink:"/next/liteGodwokenWithdraw"},next:{title:"Accounts",permalink:"/next/keyConcepts"}},l={},s=[],p={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Before running any Godwoken-kicker commands, it is useful to recap some conventions in all commands. Godwoken-kicker has a bunch of commands available for use, and the list of all possible commands can be viewed by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./kicker --help\n")),(0,a.kt)("p",null,"Deploy the local network and print service info:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./kicker start\n$ ./kicker info\n")),(0,a.kt)("p",null,"Deposit 1000 CKBs from layer1 to layer2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./kicker deposit 0x618cc3C660cEBFDbA8570CA739b1744AE3E2553a 1000\n$ ./kicker get-balance 0x618cc3C660cEBFDbA8570CA739b1744AE3E2553a\n")),(0,a.kt)("p",null,"Redeploy the local network:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./kicker stop\n$ sudo ./kicker clean\n$ ./kicker start\n")),(0,a.kt)("p",null,"Execute docker-compose commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./kicker -- exec ckb ls -l\n$ ./kicker -- top godwoken\n$ ./kicker -- kill godwoken\n$ ./kicker -- --help\n")),(0,a.kt)("p",null,"Available Commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./kicker --help\nUsage: ./kicker [OPTIONS] <SUBCOMMAND>\n\nOPTIONS:\n  --help          Print usage information\n  -- <args>...    Execute docker-compose command\n\nSUBCOMMANDS:\n  init                    Init running environment\n  start                   Start services and deploy local network\n  stop                    Stop services\n  info                    Print some useful info about the network and running services, such as Web3 RPC URL\n  clean                   Clean containers volumed data\n  ps [service]            List services\n  logs [service]          Tail target service's logs\n  enter <service>         Enter target service's container\n  manual-build            Manually build services artifacts\n  deposit <eth-address> <amount>  Deposit CKB to layer2\n  get-balance <eth-address>       Get layer2 balance\n")))}u.isMDXComponent=!0}}]);