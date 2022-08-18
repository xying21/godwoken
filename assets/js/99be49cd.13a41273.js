"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[463],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(r),p=a,f=d["".concat(l,".").concat(p)]||d[p]||u[p]||o;return r?n.createElement(f,i(i({ref:t},h),{},{components:r})):n.createElement(f,i({ref:t},h))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},935:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var n=r(7462),a=(r(7294),r(3905)),o=r(4996);const i={id:"structure",title:"Structure"},s=void 0,l={unversionedId:"structure",id:"version-1.4(WIP)/structure",title:"Structure",description:"",source:"@site/versioned_docs/version-1.4(WIP)/structure.md",sourceDirName:".",slug:"/structure",permalink:"/structure",draft:!1,tags:[],version:"1.4(WIP)",frontMatter:{id:"structure",title:"Structure"},sidebar:"sidebar2",previous:{title:"Standards",permalink:"/standards"},next:{title:"Tooling",permalink:"/tooling"}},c={},h=[{value:"Mainnet / Testnet / Devnet",id:"mainnet--testnet--devnet",level:3},{value:"Layer 1 / Layer 2",id:"layer-1--layer-2",level:3},{value:"Common User Action Flow",id:"common-user-action-flow",level:3}],u={toc:h};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"mainnet--testnet--devnet"},"Mainnet / Testnet / Devnet"),(0,a.kt)("p",null,"Nervos officially supports three different types of networks."),(0,a.kt)("p",null,'The Mainnet, also known as "Mirana", is the live production network for Nervos. This public network is fully decentralized and permissionless, and relies on a robust Proof of Work (PoW) based incentive system to protect all of the assets on the network.'),(0,a.kt)("p",null,'The Mainnet is the network people are referring to when they are talking about the "Nervos Blockchain" or when they casually refer to something being "on CKB". In casual conversation, Mainnet may also refer to any Layer 2 network that is also connected to the layer 1 Mainnet.'),(0,a.kt)("p",null,'The Testnet, also known as "Aggron", is the public sandbox network. The software used by this network is exactly the same as the Mainnet, but all tokens and assets on the Testnet have no value. This environment provides a safe place for developers to experiment in a realistic shared environment with other developers, without the associated cost or risk.'),(0,a.kt)("p",null,"New features are always tested on the Testnet prior to release on the Mainnet. For this reason, the Testnet may occasionally not have 100% reliability. The Testnet also uses Proof of Work, but because none of the tokens have value, there is only a minimal amount of security provided. Due to the nature of a Testnet, all data there should be viewed as imperminent."),(0,a.kt)("p",null,"CKBytes on the Testnet have no value, but are still needed for testing. Developers can get free CKBytes from the ",(0,a.kt)("a",{parentName:"p",href:"https://faucet.nervos.org"},"faucet"),"."),(0,a.kt)("p",null,"A Devnet is a private network for testing purposes. It is similar to the Aggron Testnet, except that it is not a publicly shared environment. Devnets normally reside entirely on the developer's computer, and are created on-demand as they are needed by the developer. Multiple Devnets can be created as needed, and they can each have slightly different configurations, and be paused or deleted as needed."),(0,a.kt)("p",null,"When a developer begins working on a new dApp, using a Devnet is recommended place to begin. A new network can be created instantly, without having to wait for the network to synchronize. A Devnet uses simulated mining, meaning it is centralized, but extremely efficient and low power to operate. There is no faucet on a Devnet. Instead, there is a well-known account that contains a very large amount of CKBytes which are created in the genesis block. A developer can use the provided private keys to access these CKBytes, which should be more than enough for any necessary testing."),(0,a.kt)("img",{src:(0,o.Z)("img/structure-1.png")}),(0,a.kt)("h3",{id:"layer-1--layer-2"},"Layer 1 / Layer 2"),(0,a.kt)("p",null,"Nervos uses a multi-layer architecture to address the blockchain challenges of security, scalability, and decentralization. Achieving high levels of all three on a single layer is difficult to impossible, and there are always tradeoffs. However, different layers can each address different concerns."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nervos' Layer 1 focuses on security and decentralization, providing trust to higher layers."),(0,a.kt)("li",{parentName:"ul"},"Nervos' Layer 2 focuses on scalability, providing nearly instantaneous transactions for millions of users.")),(0,a.kt)("p",null,"The two layers function together to achieve higher levels of decentralization, security, and scalability than would be possible on any single layer."),(0,a.kt)("p",null,"The Nervos blockchain represents layer 1 in this stack. Also known as the Common Knowledge Base, is the bottom-most layer in the Nervos ecosystem. It serves as a foundation to build on and provides trust to all layers built on top. It is designed to maximize decentralization while remaining minimal, flexible, and secure. Its main purpose is the reliable preservation of any data and assets stored within it."),(0,a.kt)("p",null,"Layer 2 is represented by multiple separate chains, each of which may have unique characteristics both in operation and governance. Layer 2 chains can take many forms, and do not have a rigid definition on Nervos."),(0,a.kt)("p",null,"A discrete Layer 2 chain could be used for a single project or a group of projects. The consensus could be Proof of Authority based, Proof of Stake based, or a different mechanism. Even the programming model used on the Layer 2 chain can be changed from the native Cell Model, to alternative models like EVM (for Ethereum Solidity compatibility) or EOS (for EOS compatibility)."),(0,a.kt)("p",null,"Most Layer 2 chains on Nervos will have certain common characteristics:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ability to transfer tokens and other assets to and from layer 1."),(0,a.kt)("li",{parentName:"ul"},"Process transactions in parallel to the layer 1 chain to achieve higher scalability."),(0,a.kt)("li",{parentName:"ul"},"Rely on layer 1 to settle consensus disputes and achieve higher levels of security than would otherwise be possible.")),(0,a.kt)("p",null,"Nervos' first Layer 2 offering will utilize the Godwoken and Polyjuice frameworks together to create an Ethereum-compatible EVM environment that is capable of supporting Solidity based dApps. This Layer 2 chain will be initially run by the Nervos Foundation during the initial launch phase, but will eventually convert into a decentralized chain which is operated by the community. All developers will be able to use this Layer 2 chain permissionlessly, using the same tooling that is used for development with Ethereum."),(0,a.kt)("img",{src:(0,o.Z)("img/structure-2.png")}),(0,a.kt)("h3",{id:"common-user-action-flow"},"Common User Action Flow"),(0,a.kt)("p",null,"The dApp universe is expanding rapidly, but the majority of users are still on Ethereum. Because of this, support for Ethereum users is of high priority for all dApp developers, and interoperability is essential for upcoming blockchains."),(0,a.kt)("p",null,"Recognizing this reality is one of the driving factors in Nervos' infrastructure design considerations. Nervos' interoperability is achieved with other blockchains by providing key pieces of infrastructure. One is ",(0,a.kt)("a",{parentName:"p",href:"/infrastructure#force-bridge"},"Force Bridge"),", which allows tokens and assets to transfer to and from other blockchains seamlessly. Another is ",(0,a.kt)("a",{parentName:"p",href:"/frameworks#pw-sdk"},"PW-SDK"),", an interoperability framework that allows users from different blockchains to immediately interact with Nervos Network using their existing dApp wallets."),(0,a.kt)("p",null,"An average Ethereum user will be able to transfer assets from other blockchains to Nervos using ",(0,a.kt)("a",{parentName:"p",href:"/infrastructure#force-bridge"},"Force Bridge"),". Once the bridge transfer is complete, tokens and assets that were transferred over the bridge will reside on Nervos' Layer 1 blockchain. From there they can navigate through the Nervos ecosystem, interacting with dApps on Layer 1, or Layer 2."),(0,a.kt)("img",{src:(0,o.Z)("img/common-user-flow.jpg")}),(0,a.kt)("p",null,"The image above shows how an Ethereum user would start from the Ethereum blockchain, and end up interacting with a Solidity smart contract that is running on Nervos. The steps are as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The user starts with assets, such as ETH, DAI, USDC, and USDT, in their MetaMask wallet."),(0,a.kt)("li",{parentName:"ol"},"The user opens Force Bridge in a web browser, and initiates an asset transfer to Nervos."),(0,a.kt)("li",{parentName:"ol"},"Force Bridge validates their deposit transaction, and issues a wrapped token, in the form of a ",(0,a.kt)("a",{parentName:"li",href:"/standards#sudt"},"SUDT")," on Layer 1."),(0,a.kt)("li",{parentName:"ol"},"The user would then use a dApp to deposit their SUDT assets from Layer 1 to the Layer 2 which has EVM compatibility provided by the ",(0,a.kt)("a",{parentName:"li",href:"/frameworks#godwoken"},"Godwoken")," and ",(0,a.kt)("a",{parentName:"li",href:"/frameworks#polyjuice"},"Polyjuice")," frameworks."),(0,a.kt)("li",{parentName:"ol"},"The user would then continue interacting with the dApp, and enjoy the benefits of Layer 2, such as extremely low fees and high transaction speed.")),(0,a.kt)("p",null,"This process can be further streamlined. Developers will have the option of integrating directly with Force Bridge and can combine steps 2-4 into a single action which is done without leaving the dApp. The user will only need to use their existing MetaMask wallet throughout the entire process. They may not even be aware they have left Ethereum and are now using Nervos!"))}d.isMDXComponent=!0}}]);