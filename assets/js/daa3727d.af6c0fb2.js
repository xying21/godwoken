"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[9637],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905)),a=n(4996);const i={id:"evmTask5",title:"5. Port an Existing Ethereum dApp to Polyjuice"},s=void 0,l={unversionedId:"evmTask5",id:"version-1.3-rc1/evmTask5",title:"5. Port an Existing Ethereum dApp to Polyjuice",description:"",source:"@site/versioned_docs/version-1.3-rc1/evmTask5.md",sourceDirName:".",slug:"/evmTask5",permalink:"/1.3-rc1/evmTask5",draft:!1,tags:[],version:"1.3-rc1",frontMatter:{id:"evmTask5",title:"5. Port an Existing Ethereum dApp to Polyjuice"},sidebar:"sidebar2",previous:{title:"4. Use Force Bridge to Deposit Tokens from Ethereum",permalink:"/1.3-rc1/evmTask4"},next:{title:"6. Withdraw From Layer 2 Back to Layer 1",permalink:"/1.3-rc1/evmTask6"}},p={},u=[{value:"Task Instructions",id:"task-instructions",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Setup the Godwoken Testnet Network in MetaMask",id:"1-setup-the-godwoken-testnet-network-in-metamask",level:3},{value:"2. View the Ethereum Demo Application",id:"2-view-the-ethereum-demo-application",level:3},{value:"3. Change network in MetaMask to Godwoken",id:"3-change-network-in-metamask-to-godwoken",level:3},{value:"4. Set High Gas Limit",id:"4-set-high-gas-limit",level:3},{value:"Potential Errors and Solutions",id:"potential-errors-and-solutions",level:3}],c={toc:u};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, you will learn how to port an existing browser Ethereum application to run on Nervos' EVM compatible ",(0,o.kt)("a",{parentName:"p",href:"/1.3-rc1/structure#layer-1-layer-2"},"Layer 2"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/1.3-rc1/wallets#metamask"},"MetaMask")," is the primary method of interacting with dApps on Nervos. The overall user experience will be very similar to the existing Ethereum."),(0,o.kt)("h2",{id:"task-instructions"},"Task Instructions"),(0,o.kt)("p",null,"In this task, you will need to port over an existing Ethereum dApp to Nervos' Layer 2. Our examples will use the Simple Storage smart contract. Our general suggestion is that you take an existing Ethereum dApp that you are already familiar with, and then make the changes required to port it to Nervos."),(0,o.kt)("p",null,"In this guide, we assume you have an application that is using ",(0,o.kt)("strong",{parentName:"p"},"Ethers.js"),"."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Your MetaMask wallet should be installed and configured with the same Ethereum accounts from the previous tasks. Your MetaMask Ethereum account should still be funded on Layer 2 from the previous tasks."),(0,o.kt)("h3",{id:"1-setup-the-godwoken-testnet-network-in-metamask"},"1. Setup the Godwoken Testnet Network in MetaMask"),(0,o.kt)("p",null,'Your MetaMask wallet will need to be configured to communicate with the Godwoken Layer 2 network. To do this, you will need to configure a new custom RPC. From the network selection dropdown, select "Custom RPC".'),(0,o.kt)("img",{src:(0,a.Z)("img/evmTask5-1.png"),width:"40%"}),(0,o.kt)("p",null,"From there, you will be presented with a form to specify the network settings."),(0,o.kt)("img",{src:(0,a.Z)("img/evmTask5-2.png"),width:"40%"}),(0,o.kt)("p",null,"Enter the following details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Network Name: Godwoken Testnet\nRPC URL: https://godwoken-testnet-v1.ckbapp.dev\nChain ID: 71401\nCurrency Symbol: pCKB\nBlock Explorer URL: <Leave Empty>\n")),(0,o.kt)("p",null,"After MetaMask is configured, you may see a zero balance even after you have deposited funds into this Ethereum address on Layer 2. Don't be alarmed by this. Later on we will show you how to set up your application to call ",(0,o.kt)("inlineCode",{parentName:"p"},"provider.getBalance()")," with your Ethereum address to query your balance."),(0,o.kt)("h3",{id:"2-view-the-ethereum-demo-application"},"2. View the Ethereum Demo Application"),(0,o.kt)("p",null,"A simple Ethereum demo application has been built to read and write number values using Simple Storage. We will walk through this Ethereum application and demonstrate the changes needed to make this run on Nervos' Layer 2."),(0,o.kt)("p",null,"Follow our explanations so you become familiar with the process involved in porting an application."),(0,o.kt)("p",null,"First, we need to clone the repo. This contains the Ethereum version of the application before it has been updated to support Godwoken."),(0,o.kt)("p",null,"Create ",(0,o.kt)("inlineCode",{parentName:"p"},"~/projects")," directory if it doesn't exist."),(0,o.kt)("p",null,"Linux/macOS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir -p ~/projects\n")),(0,o.kt)("p",null,"Windows (PowerShell):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"New-Item -ItemType Directory -Force -Path ~/projects\n")),(0,o.kt)("p",null,"Enter the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/projects")," directory and clone the repository."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd ~/projects\ngit clone https://github.com/Kuzirashi/blockchain-workshop.git -b ethereum-simple blockchain-workshop-ethereum-simple\ncd blockchain-workshop-ethereum-simple\n")),(0,o.kt)("p",null,"Next, install the dependencies, build the smart contracts, and start the Hardhat node to run a local Ethereum development chain."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd ~/projects/blockchain-workshop-ethereum-simple\nyarn\nyarn build\nyarn start:ethereum\n")),(0,o.kt)("p",null,"Hardhat node should now be running and creating blocks."),(0,o.kt)("p",null,"Switch back to your web browser. Open MetaMask and switch your network to ",(0,o.kt)("inlineCode",{parentName:"p"},"Localhost 8545"),". It should switch and connect without giving an error now that Hardhat local network is running."),(0,o.kt)("img",{src:(0,a.Z)("img/evmTask5-3.png"),width:"40%"}),(0,o.kt)("p",null,"In a second terminal, start the UI server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd ~/projects/blockchain-workshop-ethereum-simple\nyarn ui\n")),(0,o.kt)("p",null,"The server should now be started, and you can open a browser tab to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," to view the dApp UI!"),(0,o.kt)("img",{src:(0,a.Z)("img/evmTask5-4.png"),width:"40%"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'If you are testing the application on Ethereum Hardhat and you see an error: "Trying to send a raw transaction with an invalid chainId. The expected chainId is ...", then you need to go to Network settings in MetaMask for localhost:8545 and update the chain id.')),(0,o.kt)("h3",{id:"3-change-network-in-metamask-to-godwoken"},"3. Change network in MetaMask to Godwoken"),(0,o.kt)("p",null,"To make this specific application work on the Godwoken network, you only have to change the network in MetaMask to Godwoken."),(0,o.kt)("p",null,"The application is using MetaMask provider, so it should automatically change to deploy contract and send transactions on the Godwoken network."),(0,o.kt)("img",{src:(0,a.Z)("img/evmTask5-5.png"),width:"40%"}),(0,o.kt)("h3",{id:"4-set-high-gas-limit"},"4. Set High Gas Limit"),(0,o.kt)("p",null,"Godwoken requires the gas limit to be set when sending transactions. This may not always be the case in the future, but it is a requirement for the current version on the Testnet. Make sure you set gas limit when sending transaction on Godwoken network, eg.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"async setStoredValue(value: number) {\n    return this.contract.set(value, {\n        gasLimit: 1000000\n    });\n}\n")),(0,o.kt)("h3",{id:"potential-errors-and-solutions"},"Potential Errors and Solutions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You might need to wait for MetaMask confirmation that your transaction has been included in a block before interacting with the contract. It can take about a minute."),(0,o.kt)("li",{parentName:"ul"},"If you get a CORS error in your web browser's console, try searching your code for a Godwoken RPC URL that is ",(0,o.kt)("strong",{parentName:"li"},"not")," using ",(0,o.kt)("inlineCode",{parentName:"li"},"https"),". Change any instances of ",(0,o.kt)("inlineCode",{parentName:"li"},"http://godwoken-testnet-v1.ckbapp.dev")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"https://godwoken-testnet-v1.ckbapp.dev"),"."),(0,o.kt)("li",{parentName:"ul"},"There are a number of small differences that can potentially impact your application and cause problems if you're unaware of them. A list of these differences can be found ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-polyjuice/blob/main/docs/EVM-compatible.md"},"here"),".")))}h.isMDXComponent=!0}}]);