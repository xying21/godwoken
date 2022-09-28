"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[786],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(o),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return o?r.createElement(h,i(i({ref:t},p),{},{components:o})):r.createElement(h,i({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},9905:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));o(4996);const a={id:"frameworks",title:"Frameworks"},i=void 0,l={unversionedId:"frameworks",id:"version-1.6(WIP)/frameworks",title:"Frameworks",description:"Godwoken",source:"@site/versioned_docs/version-1.6(WIP)/frameworks.md",sourceDirName:".",slug:"/frameworks",permalink:"/frameworks",draft:!1,tags:[],version:"1.6(WIP)",frontMatter:{id:"frameworks",title:"Frameworks"},sidebar:"sidebar2",previous:{title:"Godwoken Public Networks",permalink:"/connectionInfo"},next:{title:"Infrastructure",permalink:"/infrastructure"}},s={},c=[{value:"Godwoken",id:"godwoken",level:2},{value:"Godwoken Kicker",id:"godwoken-kicker",level:2},{value:"Polyjuice",id:"polyjuice",level:2},{value:"PW-SDK",id:"pw-sdk",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"godwoken"},"Godwoken"),(0,n.kt)("p",null,"Godwoken is a layer 2 rollup framework for use with the Nervos CKB layer 1 blockchain. When combined with the EVM-compatible Polyjuice framework, Solidity dApps can be run on Nervos' layer 2."),(0,n.kt)("p",null,"Godwoken is highly flexible and extensible, allowing it to support optimistic rollups, and potentially other rollup methods such as ZK-rollups in the future. Godwoken currently uses Proof of Authority based consensus, but will add Proof of Stake as an alternative in the near future."),(0,n.kt)("p",null,"Godwoken is designed to be used with a second framework which defines the programming model used within the layer 2 environment. Polyjuice is the first such implementation, which provides Ethereum EVM compatibility. Alternate implementations can be created to support compatibility with programming models from other blockchains, such as EOS, Stellar, and Libra."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken"},"Github")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/tree/master/docs"},"Documentation"))),(0,n.kt)("h2",{id:"godwoken-kicker"},(0,n.kt)("a",{parentName:"h2",href:"/godwokenkicker"},"Godwoken Kicker")),(0,n.kt)("p",null,"Godwoken Kicker is a tool which allows developers to quickly launch an instance of Godwoken-Polyjuice on a private Devnet. Since this runs on a brand new Devnet chain, there is no need to synchronize the Mainnet or Testnet."),(0,n.kt)("p",null,"This is useful to developers who need a quick solution to setup an Ethereum-compatible Nervos environment to test compatibility with existing Solidity dApps."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/RetricSu/godwoken-kicker"},"Github"))),(0,n.kt)("h2",{id:"polyjuice"},"Polyjuice"),(0,n.kt)("p",null,"Polyjuice is an Ethereum EVM-compatible execution environment, which allows Solidity based smart contracts to run on Nervos. The goal of the project is 100% compatibility, allowing all Ethereum contracts to run on Nervos without any modification."),(0,n.kt)("p",null,"Polyjuice is designed to be used with the Godwoken layer 2 rollup framework. This allows Polyjuice to completely move smart contract execution off of layer 1 to layer 2, providing scalability that goes far beyond what the Ethereum Mainnet is capable of today."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-polyjuice"},"Github"))),(0,n.kt)("h2",{id:"pw-sdk"},"PW-SDK"),(0,n.kt)("p",null,"PW-SDK is an interoperability dApp framework created by the ",(0,n.kt)("a",{parentName:"p",href:"https://lay2.tech"},"Lay2")," development team. PW-SDK consists of two primary components, PW-Core and PW-Lock."),(0,n.kt)("p",null,"PW-Core is a Typescript based framework to build transactions and interface with common dApp wallets from other blockchains, such as the extremely popular ",(0,n.kt)("a",{parentName:"p",href:"/wallets#metamask"},"MetaMask")," wallet. While originally built for the front-end, PW-SDK now also has backend development support."),(0,n.kt)("p",null,"PW-Lock is a generic multi-chain lock script (smart contract) that allows Nervos to support signatures from Bitcoin, Ethereum, EOS, Tron, as well as other blockchains. This allows Nervos to directly support interoperability with other blockchains by allowing their addresses to automatically map to Nervos CKB addresses."),(0,n.kt)("p",null,"PW-Core and PW-Lock successfully utilize the flexibility of Nervos' underlying platform, giving Nervos a distinct advantage over the competition when it comes to supporting interoperability. Users from other chains can begin interacting with Nervos dApps immediately, without needing to install any new software, and without needing to change their wallet configuration."),(0,n.kt)("p",null,"Lay2 are also the developers of the popular ",(0,n.kt)("a",{parentName:"p",href:"https://ckb.pw"},"Portal Wallet"),", a web based wallet for Nervos. This wallet relies on the MetaMask wallet browser extension for private key management."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/lay2dev/pw-core"},"Github")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.lay2.dev/pw-sdk/"},"Documentation"))))}u.isMDXComponent=!0}}]);