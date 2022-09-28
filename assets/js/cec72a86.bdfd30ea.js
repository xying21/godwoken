"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[7221],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},241:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));n(4996),n(9960);const r={id:"integration",title:"Integration Guide for Ethereum Developers"},i=void 0,s={unversionedId:"integration",id:"version-1.5/integration",title:"Integration Guide for Ethereum Developers",description:"This documentation can be used as an integration guide for wallets and exchanges or as a reference for developing dApps on Godwoken. It explains the rationale for developing decentralized applications using Godwoken, the known caveats of version 1 and corresponding workarounds, as well as providing hands-on training on integrating Ethereum dApps with CKB through Godwoken.",source:"@site/versioned_docs/version-1.5/integration.md",sourceDirName:".",slug:"/integration",permalink:"/1.5/integration",draft:!1,tags:[],version:"1.5",frontMatter:{id:"integration",title:"Integration Guide for Ethereum Developers"},sidebar:"sidebar2",previous:{title:"Godwoken-Kicker",permalink:"/1.5/godwokenkicker"},next:{title:"Deploy a Local Network with Godwoken-Kicker",permalink:"/1.5/deployLocalNetwork"}},l={},c=[{value:"Why Develop on Godwoken?",id:"why-develop-on-godwoken",level:2},{value:"Known Caveats",id:"known-caveats",level:2},{value:"Comparison with EVM",id:"comparison-with-evm",level:2},{value:"pCKB",id:"pckb",level:3},{value:"Account Abstraction",id:"account-abstraction",level:3},{value:"sUDT-ERC20 proxy contract",id:"sudt-erc20-proxy-contract",level:3},{value:"Bridged sUDT Token List",id:"bridged-sudt-token-list",level:3},{value:"Transaction Structure",id:"transaction-structure",level:3},{value:"Behavioral Differences of Some Opcodes",id:"behavioral-differences-of-some-opcodes",level:3},{value:"Restriction of Memory Usage",id:"restriction-of-memory-usage",level:3},{value:"Others",id:"others",level:3},{value:"Godwoken Web3 Compatibility",id:"godwoken-web3-compatibility",level:2},{value:"ETH Compatibility",id:"eth-compatibility",level:3},{value:"A Layer 2 Account is Mandatory",id:"a-layer-2-account-is-mandatory",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This documentation can be used as an integration guide for wallets and exchanges or as a reference for developing dApps on Godwoken. It explains the rationale for developing decentralized applications using Godwoken, the known caveats of version 1 and corresponding workarounds, as well as providing hands-on training on integrating Ethereum dApps with CKB through Godwoken."),(0,o.kt)("p",null,"Prior knowledge of Ethereum is required for using this guide. "),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you want to obtain direct experience and prepare yourself for deploying applications, you can check out the ",(0,o.kt)("a",{parentName:"p",href:"/1.5/evm_training/evmIntro"},"Layer 2 EVM Training")," section for a hands-on trial of developing your own EVM dapps on the Nervos platform."))),(0,o.kt)("h2",{id:"why-develop-on-godwoken"},"Why Develop on Godwoken?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Security")," - Nervos Network is a Proof-of-Work (PoW) layer 1 chain, and Godwoken is an optimistic rollup layer 2 chain built on Nervos Network. The security model is quite different from other EVM-compatible PoS/DPoS/PoA chains or sidechains.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Low-cost")," - A typical Godwoken transaction currently costs less than $0.01.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Ecosystem")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"With Force Bridge, assets from 3 chains (Nervos, Ethereum and BSC) are already available on Godwoken. The support for more chains (Cardano, BTC) is on the way."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://medium.com/nervosnetwork/blockchain-abstraction-and-interoperability-2-0-eea98d81b7b6"},(0,o.kt)("strong",{parentName:"a"},"Interoperability 2.0"))," - This may be the trump card of Godwoken. With the design abstractions of Nervos Network and Godwoken, it is possible to use any on-chain tool to port smart contracts to manipulate assets on the corresponding chain."))),(0,o.kt)("h2",{id:"known-caveats"},"Known Caveats"),(0,o.kt)("p",null,"Godwoken V1 is still under development and targets 100% EVM compatibility. Having the best compatibility is the objective of designing and building Godwoken:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The EVM being used in Godwoken must be 100% compatible with the latest forked version of Ethereum."),(0,o.kt)("li",{parentName:"ul"},"Godwoken must be 100% compatible with Ethereum over the Web3 interfaces by using ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-web3"},"Godwoken Web3"),".")),(0,o.kt)("p",null,"Several discrepancies inevitably exist due to the wide architectural and design differences between Godwoken and Ethereum."),(0,o.kt)("h2",{id:"comparison-with-evm"},"Comparison with EVM"),(0,o.kt)("p",null,"Godwoken targets 100% EVM compatibility and is designed to work with every smart contract that the latest Ethereum hard fork version supports. But, the current version is not yet fully compatible with EVM."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"EVM Revision")),(0,o.kt)("p",null,"The maximum EVM revision supported is\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"EVMC_BERLIN"),"."),(0,o.kt)("h3",{id:"pckb"},"pCKB"),(0,o.kt)("p",null,"Godwoken v1 introduced a new concept, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/develop/docs/life_of_a_polyjuice_transaction.md#pckb"},(0,o.kt)("strong",{parentName:"a"},"pCKB"))," which is a defined layer-2 sUDT token type when deploying a Godwoken chain."),(0,o.kt)("p",null,"pCKB serves a similar purpose for the Godwoken chain as ETH does for the Ethereum chain, in the sense that it is used for collecting transaction fees. In Ethereum, the gas for each smart contract is derived by calculation. And the transaction fee is then calculated by multiplying the gas by the specified gas price. In Godwoken, pCKB is the unit for calculating transaction fees. In other words, the gas price in Ethereum is calculated as ETH/gas (in wei, i.e., 10",(0,o.kt)("sup",null,"-18")," ETH), and the gas price in Godwoken is calculated as pCKB/gas. When Godwoken executes a transaction, it will deduct the transaction fee by using layer-2 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0025-simple-udt/0025-simple-udt.md"},"sUDT")," type, which is represented by ",(0,o.kt)("strong",{parentName:"p"},"pCKB"),"."),(0,o.kt)("p",null,"Godwoken chain uses CKB as pCKB by default, while different Godwoken chains may use different token types as pCKB."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": With certain transactions being sent to the smart contract, the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," of the transaction is ",(0,o.kt)("inlineCode",{parentName:"p"},"pCKB"),"."),(0,o.kt)("h3",{id:"account-abstraction"},"Account Abstraction"),(0,o.kt)("p",null,"Polyjuice only provides\xa0",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/glossary/#contract-account"},"contract accounts"),". Godwoken's user accounts are leveraged as\xa0",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/glossary/#eoa"},"EOAs"),"."),(0,o.kt)("h3",{id:"sudt-erc20-proxy-contract"},"sUDT-ERC20 proxy contract"),(0,o.kt)("p",null,"All tokens on Godwoken are represented as Layer-2 sUDT types, regardless of whether they are native CKB or any sUDT types. With the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-polyjuice/blob/docs/solidity/erc20/README.md"},"sUDT-ERC2 Procy Contract"),", Polyjuice ensures that all layer-2 tokens on Godwoken are ERC20 standard compliant. The contract enables the EVM code to interact with the ERC20 standard interface, making it possible to manipulate sUDT tokens on Godwoken as if they were ERC20 tokens."),(0,o.kt)("p",null,"That is to say, it is unnecessary to distinguish between native tokens and ERC20 tokens. All the different tokens must be handled with the same ERC20 interface. All the bridged sUDT tokens you will deal with have the same ERC20 interface."),(0,o.kt)("h3",{id:"bridged-sudt-token-list"},"Bridged sUDT Token List"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"mainnet_v1: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-info/blob/main/mainnet_v1/bridged-token-list.json"},"https://github.com/nervosnetwork/godwoken-info/blob/main/mainnet_v1/bridged-token-list.json"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"testnet_v1: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-info/blob/main/testnet_v1_1/bridged-token-list.json"},"https://github.com/nervosnetwork/godwoken-info/blob/main/testnet_v1_1/bridged-token-list.json")))),(0,o.kt)("h3",{id:"transaction-structure"},"Transaction Structure"),(0,o.kt)("p",null,"A Polyjuice transaction is essentially a Godwoken transaction. When Ethereum transactions are sent, they are converted to the Godwoken ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/v1.5.0/crates/types/schemas/godwoken.mol#L69-L76"},"RawL2Transaction")," type when being sent and are automatically processed by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/tree/v1.6.4"},"Godwoken Web3"),"."),(0,o.kt)("h3",{id:"behavioral-differences-of-some-opcodes"},"Behavioral Differences of Some Opcodes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"EVM Opcode"),(0,o.kt)("th",{parentName:"tr",align:null},"Solidity Usage"),(0,o.kt)("th",{parentName:"tr",align:null},"Behavior in Polyjuice"),(0,o.kt)("th",{parentName:"tr",align:null},"Behavior in EVM"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"COINBASE"),(0,o.kt)("td",{parentName:"tr",align:null},"block.coinbase"),(0,o.kt)("td",{parentName:"tr",align:null},"address of the block_producer"),(0,o.kt)("td",{parentName:"tr",align:null},"address of the current block miner")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GASLIMIT"),(0,o.kt)("td",{parentName:"tr",align:null},"block.gaslimit"),(0,o.kt)("td",{parentName:"tr",align:null},"12,500,000"),(0,o.kt)("td",{parentName:"tr",align:null},"current block\u2019s gas limit")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DIFFICULTY"),(0,o.kt)("td",{parentName:"tr",align:null},"block.difficulty"),(0,o.kt)("td",{parentName:"tr",align:null},"2,500,000,000,000,000"),(0,o.kt)("td",{parentName:"tr",align:null},"current block\u2019s difficulty")))),(0,o.kt)("h3",{id:"restriction-of-memory-usage"},"Restriction of Memory Usage"),(0,o.kt)("p",null,"Polyjuice runs EVM on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0003-ckb-vm/0003-ckb-vm.md#risc-v-runtime-model"},"ckb-vm"),". EVM has no limit on memory usage, yet EVM has a limit of 1024 on stack depth. But, ckb-vm can currently use a maximum of 4MB of memory, of which 3MB is for heap space and 1MB is for stack space. For more information, refer ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/riscv-newlib/blob/00c6ae3c481bc62b4ac016b3e86c508cdf2e68d2/libgloss/riscv/sys_sbrk.c#L38-L56"},"here"),". "),(0,o.kt)("h3",{id:"others"},"Others"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Transaction context"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chain_id")," is defined in Godwoken ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/blob/v1.5.0/crates/types/schemas/godwoken.mol#L64"},"RollupConfig#chain_id"),"."),(0,o.kt)("li",{parentName:"ul"},"the block difficulty is always\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"2500000000000000"),"."),(0,o.kt)("li",{parentName:"ul"},"the gas limit is 12500000 per block, but it is not a transaction-level limit. Any transaction can reach the gas limit."),(0,o.kt)("li",{parentName:"ul"},"the size limit for contract's return data is ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-scripts/blob/31293d1/c/gw_def.h#L21-L22"},(0,o.kt)("inlineCode",{parentName:"a"},"25KB")),"."),(0,o.kt)("li",{parentName:"ul"},"the size limit for contract's storage is ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-scripts/blob/31293d1/c/gw_def.h#L21-L22"},(0,o.kt)("inlineCode",{parentName:"a"},"25KB")),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"transaction.to")," MUST be a Contract Address.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"transfer value"),"\xa0can not exceed ",(0,o.kt)("inlineCode",{parentName:"p"},"uint128:MAX"),", because the type of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0025-simple-udt/0025-simple-udt.md#sudt-cell"},"sUDT.amount")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"uint128"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Pre-compiled contract"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bn256_pairing"),"\xa0is not yet supported because of the high cycle cost (WIP)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-polyjuice/blob/compatibility-breaking-changes/docs/Addition-Features.md"},"addition pre-compiled contracts"))))),(0,o.kt)("h2",{id:"godwoken-web3-compatibility"},"Godwoken Web3 Compatibility"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3"},"Godwoken Web3")," is a Web3 RPC compatible layer developed on top of Godwoken. Direct transfer of values (pCKB) from EOA to EOA will be supported from this release onwards."),(0,o.kt)("h3",{id:"eth-compatibility"},"ETH Compatibility"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Zero Address")),(0,o.kt)("p",null,"Godwoken does not support the concept of ",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/ru/glossary/#zero-address"},"zero address")," (0x0000000000000000000000000000000000000000). This means that Polyjuice cannot support the zero address as well."),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"Result")),(0,o.kt)("p",null,"   Transactions with the zero address in the ",(0,o.kt)("inlineCode",{parentName:"p"},"from"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"to")," field are not supported."),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"Recommend Workaround")),(0,o.kt)("p",null,"   To use the zero address as a black hole to burn ethers, you can use the transfer function of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-polyjuice/blob/3f1ad5b/solidity/erc20/README.md"},"CKB_ERC20_Proxy")," contract to send ethers to the zero address."),(0,o.kt)("p",null,"For more information on the compatibility changes of Godwoken Web3 API, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/blob/main/docs/apis.md"},"APIs"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Gas Limit")," "),(0,o.kt)("p",null,"Godwoken applies the ",(0,o.kt)("a",{parentName:"p",href:"https://docs-xi-two.vercel.app/docs/rfcs/0014-vm-cycle-limits/0014-vm-cycle-limits"},"Cycle Limit")," to limit transaction execution resources in CKB-VM. By setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"RPC_GAS_LIMIT")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"50000000")," to maximise the compatibility with Ethereum toolchain, but the real gas limit that users can utilize relies on this Cycle Limit. "),(0,o.kt)("h3",{id:"a-layer-2-account-is-mandatory"},"A Layer 2 Account is Mandatory"),(0,o.kt)("p",null,"It is mandatory to create an account on a Godwoken chain for using Godwoken and Polyjuice. "),(0,o.kt)("p",null,"There are two ways to create a layer 2 account:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deposit to Godwoken at layer 1;"),(0,o.kt)("li",{parentName:"ul"},"Call the Godwoken built-in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-scripts/blob/86b299f/c/contracts/meta_contract.c"},"meta_contract")," and create an account at layer 2.")))}d.isMDXComponent=!0}}]);