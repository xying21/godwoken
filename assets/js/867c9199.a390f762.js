"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[5604],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(r),m=n,d=h["".concat(i,".").concat(m)]||h[m]||u[m]||o;return r?a.createElement(d,l(l({ref:t},c),{},{components:r})):a.createElement(d,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8303:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905)),o=r(4996);const l={id:"wallets",title:"Wallets"},s=void 0,i={unversionedId:"wallets",id:"version-1.4/wallets",title:"Wallets",description:"",source:"@site/versioned_docs/version-1.4/wallets.md",sourceDirName:".",slug:"/wallets",permalink:"/1.4/wallets",draft:!1,tags:[],version:"1.4",frontMatter:{id:"wallets",title:"Wallets"},sidebar:"sidebar2",previous:{title:"Tooling",permalink:"/1.4/tooling"},next:{title:"Tokens",permalink:"/1.4/tokens"}},p={},c=[{value:"MetaMask",id:"metamask",level:2},{value:"Neuron Wallet",id:"neuron-wallet",level:2},{value:"Portal Wallet",id:"portal-wallet",level:2}],u={toc:c};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"metamask"},"MetaMask"),(0,n.kt)("p",null,"MetaMask is a cryptocurrency wallet used to interact with dApps. MetaMask initially started as a wallet designed for Ethereum, but now has some support for other cryptocurrencies as well."),(0,n.kt)("p",null,"Nervos has opted to support MetaMask as one of the primary wallets of the Nervos ecosystem. This decision was made because of its proven track record, large pre-existing install-base, and its support of all major web browsers and mobile phones."),(0,n.kt)("p",null,"Two modes of operation are supported with MetaMask when interacting with the Nervos ecosystem."),(0,n.kt)("p",null,"When interacting with an Ethereum-compatible layer 2 chain using the Godwoken and Polyjuice frameworks, MetaMask should be configured to use the Godwoken RPC. This process is identical to other layer 2 chains, such as Polygon (Matic), and is used to interact with EVM-compatible Solidity-based dApps running on Nervos. Godwoken uses pCKB to calculate the gas fee by default, click to learn about ",(0,n.kt)("a",{parentName:"p",href:"/1.4/pCKB"},"pCKB"),"."),(0,n.kt)("p",null,"When interacting directly with Nervos' layer 1 CKB blockchain, no configuration changes are required. The flexibility of Nervos' layer 1 blockchain allows for full compatibility out-of-the-box. To facilitate this, the Nervos community-supported ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lay2dev/pw-core"},"PW-SDK")," framework is used."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://metamask.io/"},"Official Website")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/MetaMask"},"Github")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://metamask.io/download.html"},"Download"))),(0,n.kt)("img",{src:(0,o.Z)("img/wallets-metamask.png"),width:"40%"}),(0,n.kt)("h2",{id:"neuron-wallet"},"Neuron Wallet"),(0,n.kt)("p",null,"Neuron is an officially supported desktop wallet for the Nervos ecosystem. This wallet allows for common Nervos operations such as transferring CKBytes and tokens and interacting with the Nervos DAO. Additional support for NFT assets is currently in the experimental phase."),(0,n.kt)("p",null,"Neuron is created by ",(0,n.kt)("a",{parentName:"p",href:"https://nervina.cn/"},"Nervina Labs"),". Nervina is the development team for several products in the Nervos ecosystem, such as the ",(0,n.kt)("a",{parentName:"p",href:"https://nervosnetwork.github.io/keypering/"},"Keypering Wallet"),", the ",(0,n.kt)("a",{parentName:"p",href:"https://explorer.nervos.org/"},"Nervos Explorer"),", and several Nervos SDKs."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/neuron"},"Github")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/neuron/releases"},"Download")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.nervos.org/docs/basics/guides/neuron"},"Neuron Guide"))),(0,n.kt)("img",{src:(0,o.Z)("img/wallets-neuron.png"),width:"80%"}),(0,n.kt)("h2",{id:"portal-wallet"},"Portal Wallet"),(0,n.kt)("p",null,"Portal Wallet is a popular browser-based wallet for the Nervos ecosystem created by the ",(0,n.kt)("a",{parentName:"p",href:"https://lay2.tech/"},"Lay2")," development team. This wallet functions similar to a dApp, and allows for common Nervos operations such as transferring CKBytes and tokens and interacting with the Nervos DAO."),(0,n.kt)("p",null,"This wallet is user-friendly because it works entirely in a web browser and relies on the MetaMask extension for signing. MetaMask is currently the most widely used dApp interactive extension, meaning that in most cases the user does not need to install any additional software."),(0,n.kt)("p",null,"Lay2 are the developers of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lay2dev/pw-core"},"PW-SDK")," framework, which is used to power the Portal Wallet. This framework allows Portal Wallet to rely on the MetaMask wallet browser extension for private key management, without any configuration changes."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ckb.pw/"},"Official Website")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/lay2dev/PortalWallet"},"Github"))),(0,n.kt)("img",{src:(0,o.Z)("img/portal-wallet.png"),width:"60%"}))}h.isMDXComponent=!0}}]);