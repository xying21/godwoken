"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[8531],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(y,l(l({ref:t},p),{},{components:r})):n.createElement(y,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6372:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));r(4996);const o={id:"evmTask2",title:"2. Deploy a Simple Ethereum Smart Contract on Polyjuice"},l=void 0,i={unversionedId:"evmTask2",id:"version-1.3-rc1/evmTask2",title:"2. Deploy a Simple Ethereum Smart Contract on Polyjuice",description:"",source:"@site/versioned_docs/version-1.3-rc1/evmTask2.md",sourceDirName:".",slug:"/evmTask2",permalink:"/1.3-rc1/evmTask2",draft:!1,tags:[],version:"1.3-rc1",frontMatter:{id:"evmTask2",title:"2. Deploy a Simple Ethereum Smart Contract on Polyjuice"},sidebar:"sidebar2",previous:{title:"1. Create account on the EVM Layer 2 Testnet",permalink:"/1.3-rc1/evmTask1"},next:{title:"3. Issue a Smart Contract Call to the Deployed Smart Contract",permalink:"/1.3-rc1/evmTask3"}},s={},c=[{value:"Task Instructions",id:"task-instructions",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Prepare Your Ethereum Private Key",id:"1-prepare-your-ethereum-private-key",level:3},{value:"2. Clone and Setup the Code Examples Repository",id:"2-clone-and-setup-the-code-examples-repository",level:3},{value:"3. Deploy a Smart Contract",id:"3-deploy-a-smart-contract",level:3},{value:"Example Smart Contract",id:"example-smart-contract",level:4},{value:"Deployment",id:"deployment",level:4}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Compiling and deploying a smart contract on Nervos' EVM compatible ",(0,a.kt)("a",{parentName:"p",href:"/1.3-rc1/structure#layer-1-layer-2"},"Layer 2")," is a process that has a lot of similarities to the process on Ethereum. There are only a few minor changes that need to be made."),(0,a.kt)("h2",{id:"task-instructions"},"Task Instructions"),(0,a.kt)("p",null,"In this task, you will take a very basic smart contract written in Ethereum's Solidity, compile it to EVM bytecode and deploy it to Godwoken on Layer 2."),(0,a.kt)("p",null,"The code that we will work with in this step will compile and deploy your smart contract. This uses the original version of Hardhat for Ethereum."),(0,a.kt)("p",null,"The instructions will provide a basic smart contract you can work with, but you should feel free to use any smart contract of your choosing."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before you begin this task, you must complete the ",(0,a.kt)("a",{parentName:"p",href:"/1.3-rc1/evmTask1"},"previous task")," to create a Godwoken account on the EVM Layer 2 Testnet. You will also need the private key and Testnet address from the previous task in order to proceed. If you have not completed it, please do so now."),(0,a.kt)("h3",{id:"1-prepare-your-ethereum-private-key"},"1. Prepare Your Ethereum Private Key"),(0,a.kt)("p",null,"You need to extract the private key for your ",(0,a.kt)("strong",{parentName:"p"},"Ethereum")," account. The tooling will use this private key to deploy your smart contract on Layer 2."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Never use a private key associated with a real account for any of these tasks. The following steps will show you how to extract your private key from MetaMask. But, you should never do this using a MetaMask installation that you use for real funds since this could potentially leak information that could compromise your account.")),(0,a.kt)("p",null,"If you need instructions on how to extract your private key from MetaMask, follow the steps in ",(0,a.kt)("a",{parentName:"p",href:"/1.3-rc1/evmTask5"},"this tutorial"),"."),(0,a.kt)("h3",{id:"2-clone-and-setup-the-code-examples-repository"},"2. Clone and Setup the Code Examples Repository"),(0,a.kt)("p",null,"In this step, you will clone the code examples repository. It contains the material required by this task and future tasks."),(0,a.kt)("p",null,"Create ",(0,a.kt)("inlineCode",{parentName:"p"},"~/projects")," directory if it doesn't exist."),(0,a.kt)("p",null,"Linux/macOS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir -p ~/projects\n")),(0,a.kt)("p",null,"Windows (PowerShell):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"New-Item -ItemType Directory -Force -Path ~/projects\n")),(0,a.kt)("p",null,"Enter the ",(0,a.kt)("inlineCode",{parentName:"p"},"~/projects")," directory and clone the repository."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd ~/projects\ngit clone https://github.com/nervosnetwork/layer2-evm-documentation.git\ncd layer2-evm-documentation\n")),(0,a.kt)("p",null,"Then we install all dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn install-all\n")),(0,a.kt)("h3",{id:"3-deploy-a-smart-contract"},"3. Deploy a Smart Contract"),(0,a.kt)("p",null,"Hardhat will handle the process of compilation and deployment of the smart contract."),(0,a.kt)("h4",{id:"example-smart-contract"},"Example Smart Contract"),(0,a.kt)("p",null,"Provided below is a simple smart contract example that you can use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma solidity >=0.8.0;\n\ncontract SimpleStorage {\n  uint storedData;\n\n  constructor() payable {\n    storedData = 123;\n  }\n\n  function set(uint x) public payable {\n    storedData = x;\n  }\n\n  function get() public view returns (uint) {\n    return storedData;\n  }\n}\n")),(0,a.kt)("h4",{id:"deployment"},"Deployment"),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<YOUR_PK>")," below with your Ethereum private key and run the Hardhat command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd ~/projects/layer2-evm-documentation/code-examples/2-deploy-contract/\nPRIVATE_KEY=<YOUR_PK> npx hardhat run scripts/deploy.js --network godwoken-testnet\n")),(0,a.kt)("p",null,"After running the command, the contract should deploy without any errors. You will be presented with an Ethereum contract address."),(0,a.kt)("p",null,"Example Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u279c PRIVATE_KEY=d9066ff9f753a1898709b568119055660a77d9aae4d7a4ad677b8fb3d2a571e5 npx hardhat run scripts/deploy.js --network godwoken-testnet\n\nDeploying contracts with the account: 0xD173313A51f8fc37BcF67569b463abd89d81844f\nAccount balance: 194999999999998673136\nContract address: 0xd4A8b3018f0c79f6BD3375C89a5Db47ca11A1C35\n")))}u.isMDXComponent=!0}}]);