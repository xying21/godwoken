"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[7661],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),p=o,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2313:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905)),a=r(4996);const s={id:"evmTask4",title:"4. Use Force Bridge to Deposit Tokens from Ethereum"},i=void 0,l={unversionedId:"evm_training/evmTask4",id:"version-1.5/evm_training/evmTask4",title:"4. Use Force Bridge to Deposit Tokens from Ethereum",description:"",source:"@site/versioned_docs/version-1.5/evm_training/evmTask4.md",sourceDirName:"evm_training",slug:"/evm_training/evmTask4",permalink:"/1.5/evm_training/evmTask4",draft:!1,tags:[],version:"1.5",frontMatter:{id:"evmTask4",title:"4. Use Force Bridge to Deposit Tokens from Ethereum"},sidebar:"sidebar2",previous:{title:"3. Issue a Smart Contract Call to the Deployed Smart Contract",permalink:"/1.5/evm_training/evmTask3"},next:{title:"5. Port an Existing Ethereum dApp to Polyjuice",permalink:"/1.5/evm_training/evmTask5"}},c={},u=[{value:"Task Instructions",id:"task-instructions",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Configure MetaMask to Use the Rinkeby Testnet",id:"1-configure-metamask-to-use-the-rinkeby-testnet",level:3},{value:"2. Calculate Your Layer 2 Deposit Receiver Address",id:"2-calculate-your-layer-2-deposit-receiver-address",level:3},{value:"3. Initiate a Force Bridge Transfer",id:"3-initiate-a-force-bridge-transfer",level:3},{value:"Check Your Layer 2 Balance",id:"check-your-layer-2-balance",level:3}],h={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Moving assets between blockchains is an extremely important part of building the cross-chain dApps of the future. Not only do developers need secure infrastructure to build on, but the experience for the end-user must be simple and straightforward."),(0,o.kt)("p",null,"Nervos' solutions to cross-chain interoperability are major steps towards these goals. At the base of this is Force Bridge, the decentralized cross-chain bridge which enables the transfer of assets between Nervos and other blockchains. You can learn more about the way a user from another blockchain will interact with Nervos in this document about the ",(0,o.kt)("a",{parentName:"p",href:"/1.5/structure#common-user-action-flow"},"Common User Action Flow"),"."),(0,o.kt)("p",null,"Force Bridge is currently deployed both to ",(0,o.kt)("a",{parentName:"p",href:"https://forcebridge.com"},"mainnet "),"and ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.forcebridge.com"},"testnet")," network. It supports moving tokens to and from the Ethereum Rinkeby testnet as well as Ethereum Mainnet. The Cardano bridge has also been announced and is in the late stages of development. More networks will continue to be added, continuously growing the available audience for any developers building on Nervos today."),(0,o.kt)("h2",{id:"task-instructions"},"Task Instructions"),(0,o.kt)("p",null,"In this task, you will use Force Bridge to transfer ETH from the Ethereum Rinkeby testnet to ckETH on Nervos Layer 2. ETH is a native asset on Ethereum and is represented as a wrapped token on Nervos using ckETH SUDT tokens. The ckETH SUDT token is a native asset on Nervos, which can be used both on Layer 1 and Layer 2, and is widely supported by all tooling within the Nervos ecosystem."),(0,o.kt)("p",null,"To do this, you will use MetaMask and Force Bridge to transfer ETH from the Rinkeby testnet directly to Nervos' Layer 2. Under the hood, the assets will flow from Ethereum to Force Bridge to Nervos Layer 1 to Nervos Layer 2, but from the end-user's perspective, this will all be done in a single step."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"This task requires the Code Examples repo (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/layer2-evm-documentation"},"layer2-evm-documentation"),") which was set up in ",(0,o.kt)("a",{parentName:"p",href:"/1.5/evm_training/evmTask2#2.-clone-and-setup-the-code-examples-repository"},"task 2"),". If you do not have this repo available for any reason, please set it up now."),(0,o.kt)("h3",{id:"1-configure-metamask-to-use-the-rinkeby-testnet"},"1. Configure MetaMask to Use the Rinkeby Testnet"),(0,o.kt)("p",null,'Open MetaMask and select the Ethereum account you want to use for the Force Bridge transfer. This should be the same Ethereum account you are using for Layer 2 on Nervos. Then select the "Rinkeby Test Network" from the Network dropdown.'),(0,o.kt)("img",{src:(0,a.Z)("img/evmTask4-1.png"),width:"40%"}),(0,o.kt)("p",null,"You will need to get some Testnet ETH from one of the Rinkeby faucets. You can use the ",(0,o.kt)("a",{parentName:"p",href:"https://rinkebyfaucet.com/"},"https://rinkebyfaucet.com/")," or ",(0,o.kt)("a",{parentName:"p",href:"https://app.mycrypto.com/faucet"},"MyCrypto Rinkeby Faucet")," to get a small amount of testnet funds."),(0,o.kt)("h3",{id:"2-calculate-your-layer-2-deposit-receiver-address"},"2. Calculate Your Layer 2 Deposit Receiver Address"),(0,o.kt)("p",null,"Nervos' unique architecture allows a single account to have multiple addresses to be created for different purposes. We will be using one of these addresses to streamline the process of moving tokens to Layer 2."),(0,o.kt)("p",null,"The process flow we mentioned earlier of Ethereum to Force Bridge to Nervos Layer 1 to Nervos Layer 2 is still going on, but the steps can be consolidated to a single action by the end-user. We will walk through the steps of the developer process, which starts with calculating the Layer 2 deposit receiver address for the user."),(0,o.kt)("p",null,"Open the example code from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/layer2-evm-documentation/blob/master/code-examples/bridge/index.js"},"code-examples/bridge/index.js")," in an editor of your choosing."),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<YOUR_ETHEREUM_ADDRESS>")," with the Ethereum address that you wish to receive your Layer 2 ckETH tokens."),(0,o.kt)("p",null,"After replacing all the values, use the following command in the console to execute the script."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd ~/projects/layer2-evm-documentation/code-examples/6-bridge\nyarn\nnode index.js\n")),(0,o.kt)("p",null,"You should see console output similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u279c node index.js \n\nUsing Ethereum address: 0xD173313A51f8fc37BcF67569b463abd89d81844f\nDeposit to Layer 2 address on Layer 1: \nckt1q3g8qjuyaj6vfvftg0r6evnqmhtfzuwzrdxqhg2l83rfklg58ah3suprt8487pe4tzfpadgd3sw806f0wcxglpjkhhjfjhexhztrutwc4yqqqqq5qqqqqdqqqqqf6qqqqzjsqqqqhy0z4ehvactg6n9kyh7pjuyd3lkwcmfjt3ymfpwe00tghn5s483xjqqqqqgqqqqqxqqqqqp3qqqqqp6jr5923enw73q7hscjqnvxhv3leqlfahzccxwmkxcwhejrxmkqqy6qqqqqwq34n6nlqu643ys7k5xcc8rhayhhvry0settmeyetunt39379hvdzue38fgl3lphhnm826d5vw4a38vps38czwsfqqqqqqxqqgqqqqqzy48xe\n")),(0,o.kt)("p",null,"The long address shown at the bottom of your output is your deposit receiver address. This is a Layer 1 address used to automatically transfer funds to Layer 2. We will use this with Force Bridge in the next step."),(0,o.kt)("h3",{id:"3-initiate-a-force-bridge-transfer"},"3. Initiate a Force Bridge Transfer"),(0,o.kt)("p",null,"Open the ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.forcebridge.com/bridge/Ethereum/Nervos?xchain-asset=0x0000000000000000000000000000000000000000"},"Force Bridge Testnet")," in a web browser. Make sure you have the Rinkeby network selected in MetaMask and your selected account has Rinkeby ETH."),(0,o.kt)("p",null,"You will be transferring from Ethereum to Nervos, and you will be transferring ETH to ckETH. Make sure these values are selected as seen in the screenshots below, if they are not already selected."),(0,o.kt)("img",{src:(0,a.Z)("img/evmTask4-2.png"),width:"40%"}),(0,o.kt)("img",{src:(0,a.Z)("img/evmTask4-3.png"),width:"40%"}),(0,o.kt)("p",null,"After you have selected the assets to transfer across the bridge, you can specify the amount in the top box. There will be a small transfer fee, which will be calculated automatically."),(0,o.kt)("p",null,'In the box marked "Recipient", you will specify the Nervos destination address for the funds. Input the deposit receiver address that was generated in the previous step.'),(0,o.kt)("p",null,"When you have finished inputting and reviewing your selections, click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Bridge")," button. You will be asked to sign the transaction using MetaMask as seen below."),(0,o.kt)("img",{src:(0,a.Z)("img/evmTask4-4.png"),width:"40%"}),(0,o.kt)("p",null,"When you confirm the signing of the transaction in the MetaMask, you will get a modal with a link to the Etherscan explorer, where you can optionally view the progress of mining your transaction on the Ethereum chain."),(0,o.kt)("img",{src:(0,a.Z)("img/evmTask4-5.png"),width:"40%"}),(0,o.kt)("p",null,"You will also see the transaction at the bottom of the page in the ",(0,o.kt)("strong",{parentName:"p"},"History")," section of the UI under the ",(0,o.kt)("strong",{parentName:"p"},"Pending"),' tab. It will first be in a "lock asset on Ethereum (x/12)" state, where X is the number of block confirmations on the Ethereum chain.'),(0,o.kt)("img",{src:(0,a.Z)("img/evmTask4-6.png"),width:"40%"}),(0,o.kt)("p",null,'When there are at least 12 block confirmations, your pending transaction will transition to the "lock asset on Ethereum (confirmed)" state.'),(0,o.kt)("img",{src:(0,a.Z)("img/evmTask4-7.png"),width:"40%"}),(0,o.kt)("p",null,'After all the required confirmations are received, the first part of the transfer is complete. Force Bridge has now received the funds, and the second part of the transfer is to send the SUDT tokens on Nervos\' Layer 1. Once this transaction has been submitted, the History status will move from the "Pending" to the "Succeed" tab.'),(0,o.kt)("img",{src:(0,a.Z)("img/evmTask4-8.png"),width:"40%"}),(0,o.kt)("p",null,"At this point, the SUDT tokens reside on Layer 1 and are awaiting collection by a Layer 2 validator node. Once a validator node picks them up, the SUDT tokens will be released on Layer 2 to the user's Ethereum account. This process is automatic but can take up to 10 minutes under normal conditions."),(0,o.kt)("h3",{id:"check-your-layer-2-balance"},"Check Your Layer 2 Balance"),(0,o.kt)("p",null,"If you would like to check your Layer 2 token balance, you can use ",(0,o.kt)("a",{parentName:"p",href:"/1.5/tokens"},'"Tokens" page')," to find ERC20 token addresses. You are encouraged to do so to verify that the tokens have arrived safely in your account."))}d.isMDXComponent=!0}}]);