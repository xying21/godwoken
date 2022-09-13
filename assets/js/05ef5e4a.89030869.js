"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[1584],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(r),m=n,f=h["".concat(l,".").concat(m)]||h[m]||u[m]||a;return r?o.createElement(f,i(i({ref:t},p),{},{components:r})):o.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3859:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));r(4996);const a={id:"evmIntro",title:"Nervos' Layer 2 EVM Training"},i=void 0,s={unversionedId:"evm_training/evmIntro",id:"version-1.4/evm_training/evmIntro",title:"Nervos' Layer 2 EVM Training",description:"",source:"@site/versioned_docs/version-1.4/evm_training/evmIntro.md",sourceDirName:"evm_training",slug:"/evm_training/evmIntro",permalink:"/1.4/evm_training/evmIntro",draft:!1,tags:[],version:"1.4",frontMatter:{id:"evmIntro",title:"Nervos' Layer 2 EVM Training"},sidebar:"sidebar2",previous:{title:"Deploy a Local Network with Godwoken-Kicker",permalink:"/1.4/deployLocalNetwork"},next:{title:"Setup and Requirements",permalink:"/1.4/evm_training/evmPrep"}},l={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Welcome to the Nervos' Layer 2 EVM (Ethereum Virtual Machine) Training! Here you will get an introduction to the Nervos ecosystem, learn about the various important concepts, and gain hands-on experience with the platform in preparation for deploying real-world applications."),(0,n.kt)("p",null,"To accomplish these goals, we have put together a set of tasks to guide you through the learning process. Each task will tell you what needs to be accomplished, and direct you to all the necessary tooling and informative materials you will need to do the job."),(0,n.kt)("p",null,"Nervos has the ability to support compatibility with multiple different kinds of smart contract platforms, but this first set of tasks  is explicitly geared towards the Ethereum ecosystem. Nervos is a ",(0,n.kt)("a",{parentName:"p",href:"/1.4/structure#layer-1-layer-2"},"multi-layer blockchain")," platform, and support for smart contract languages like Solidity is handled by an Ethereum EVM compatible ",(0,n.kt)("a",{parentName:"p",href:"/1.4/structure#layer-1-layer-2"},"Layer 2"),". If you're coming from a background in Ethereum, or you have worked with the Solidity smart contract programming language in the past, you should feel right at home once you pickup the basics of how the tooling works on Nervos."),(0,n.kt)("p",null,"One of Nervos' cornerstone features is interoperability with other blockchain platforms. This is the ability for tokens and assets from other blockchains to be transferred to and from Nervos, as well as between the different layers that comprise the Nervos ecosystem. Any dApp that is developed on Nervos will immediately benefit from the infrastructure that has been put in place to interact with other blockchain platforms. This gives developers a seamless way to access a global network of users across all major blockchain platforms without having to modify their dApp for each new blockchain platform they want to support."),(0,n.kt)("p",null,"All of this is made possible by the extreme flexibility of the underlying Nervos platform, which gives developers a superior level of control that cannot be found anywhere else. Nervos is so flexible that third-party wallets, such as the popular ",(0,n.kt)("a",{parentName:"p",href:"/1.4/wallets#metamask"},"MetaMask wallet"),", can be used to interact with Nervos without requiring the user to install any additional software. The process is so seamless that users from other blockchains might not even realize they are using Nervos!"),(0,n.kt)("p",null,"The Nervos ecosystem is still growing, and several pieces of infrastructure are currently in active development. Not everything is ready to be used today. In our tasks, we will guide you through the pieces that are available for testing now and will be ready for a production environment soon. This will give you the opportunity to get a head start on familiarizing yourself with how EVM dApps are built on Nervos. Once the infrastructure is ready, you'll be first in line to release your dApp to the users of Nervos and to the users of any blockchain platform connected to Nervos."),(0,n.kt)("p",null,"If you get stuck on any of the tasks, feel free to send out a message on ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/nervos"},"Nervos' Discord server")," (look for #dev-chat channel). We'll be available to help you work through any problems you may have. Good luck!"))}u.isMDXComponent=!0}}]);