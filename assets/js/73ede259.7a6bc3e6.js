"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[5784],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),k=o,h=u["".concat(l,".").concat(k)]||u[k]||d[k]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));n(4996),n(9960);const r={id:"integration",title:"Integration Guide for Ethereum Developers"},i=void 0,s={unversionedId:"integration",id:"version-1.2-rc1(WIP)/integration",title:"Integration Guide for Ethereum Developers",description:"",source:"@site/versioned_docs/version-1.2-rc1(WIP)/integration.md",sourceDirName:".",slug:"/integration",permalink:"/integration",draft:!1,tags:[],version:"1.2-rc1(WIP)",frontMatter:{id:"integration",title:"Integration Guide for Ethereum Developers"},sidebar:"sidebar2",previous:{title:"Deploy a Local Network with Godwoken-Kicker",permalink:"/deployLocalNetwork"},next:{title:"Godwoken Bridge",permalink:"/godwokenbridge"}},l={},p=[{value:"Why Develop on Godwoken?",id:"why-develop-on-godwoken",level:2},{value:"Known Caveats",id:"known-caveats",level:2},{value:"Comparison with EVM",id:"comparison-with-evm",level:3},{value:"pCKB",id:"pckb",level:4},{value:"Account Abstraction",id:"account-abstraction",level:4},{value:"All Tokens Are ERC20 Tokens",id:"all-tokens-are-erc20-tokens",level:4},{value:"Transaction Structure",id:"transaction-structure",level:4},{value:"Behavioral Differences of Some Opcodes",id:"behavioral-differences-of-some-opcodes",level:4},{value:"Others",id:"others",level:4},{value:"Godwoken Web3 API Compatibility",id:"godwoken-web3-api-compatibility",level:3},{value:"<code>transaction.to</code> MUST be a Contract Address",id:"transactionto-must-be-a-contract-address",level:4},{value:"Signing Transaction Only Support EIP155",id:"signing-transaction-only-support-eip155",level:4},{value:"Zero Address",id:"zero-address",level:4},{value:"A Layer 2 Account is Mandatory",id:"a-layer-2-account-is-mandatory",level:3},{value:"Hands-On EVM Training",id:"hands-on-evm-training",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Tasks",id:"tasks",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This documentation can be used as an integration guide for wallets and exchanges, or as a reference for developing dApps on Godwoken. It explains the rationale for developing decentralized applications using Godwoken, the known caveats of version 1 and corresponding workarounds, as well as providing hands on training on integrating Ethereum dApps with CKB through Godwoken."),(0,o.kt)("p",null,"Prior knowledge of Ethereum is required for using this guide."),(0,o.kt)("h2",{id:"why-develop-on-godwoken"},"Why Develop on Godwoken?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Security")," - Nervos Network is a Proof-of-Work (PoW) layer 1 chain and Godwoken is an optimistic rollup layer 2 chain built on Nervos Network. The security model is quite different from other EVM-compatible PoS/DPoS/PoA chains or sidechains."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Low cost")," - A typical Godwoken transaction currently costs less than $0.0001."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ecosystem"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"With Force Bridge, assets from 3 chains (Nervos, Ethereum and BSC) are already available on Godwoken. The support for more chains (Cardano, BTC) is on the way."),(0,o.kt)("li",{parentName:"ul"},"The TVL of Godwoken is now nearly ",(0,o.kt)("a",{parentName:"li",href:"https://defillama.com/chains"},"100 million"),". A number of DeFi dApps (e.g. ",(0,o.kt)("a",{parentName:"li",href:"https://www.yokaiswap.com/"},"YokaiSwap"),") and wallets (e.g. ",(0,o.kt)("a",{parentName:"li",href:"https://www.safepal.io/download"},"SafePal"),") have already been integrated. "))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/nervosnetwork/blockchain-abstraction-and-interoperability-2-0-eea98d81b7b6"},(0,o.kt)("strong",{parentName:"a"},"Interoperability 2.0"))," - This may be the trump card of Godwoken. With the design abstractions of Nervos Network and Godwoken, it is possible to use any on-chain tool to port smart contracts to manipulate assets on the corresponding chain.")),(0,o.kt)("h2",{id:"known-caveats"},"Known Caveats"),(0,o.kt)("p",null,"Godwoken V1 is still under development and targets 100% EVM compatibility. Having the best compatibility is the objective of designing and building Godwoken:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The EVM being used in Godwoken must be 100% compatible with the latest forked version of Ethereum."),(0,o.kt)("li",{parentName:"ul"},"Godwoken must be 100% compatible with Ethereum over the Web3 interfaces by using ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-web3"},"Godwoken Web3"),".")),(0,o.kt)("p",null,"Given the wide architectural and design differences between Godwoken and Ethereum, several discrepancies inevitably exist."),(0,o.kt)("h3",{id:"comparison-with-evm"},"Comparison with EVM"),(0,o.kt)("p",null,"Godwoken targets 100% EVM compatibility and is designed to work with every smart contract that the latest Ethereum hard fork version supports. But, the current version is not yet fully compatible with EVM."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"EVM Revision")),(0,o.kt)("p",null,"The maximum EVM revision supported is\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"EVMC_BERLIN"),"."),(0,o.kt)("h4",{id:"pckb"},"pCKB"),(0,o.kt)("p",null,"Godwoken v1 introduced a new concept, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/develop/docs/life_of_a_polyjuice_transaction.md#pckb"},(0,o.kt)("strong",{parentName:"a"},"pCKB"))," which is a defined layer 2 sUDT token type when deploying a Godwoken chain."),(0,o.kt)("p",null,"pCKB serves a similar purpose for the Godwoken chain as ETH does for the Ethereum chain, in the sense that it is used for collecting transaction fees. In Ethereum, the gas for each smart contract is derived by calculation. And the transaction fee is then calculated by multiplying the gas with the specified gas price. In Godwoken, pCKB is the unit for calculating transaction fees. In other words, the gas price in Ethereum is calculated as ETH/gas (in wei, i.e. 10",(0,o.kt)("sup",null,"-18")," ETH), and the gas price in Godwoken is calculated as pCKB/gas. When Godwoken executes a transaction, it will deduct the transaction fee by using the layer 2 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0025-simple-udt/0025-simple-udt.md"},"sUDT")," type, which is represented by ",(0,o.kt)("strong",{parentName:"p"},"pCKB"),"."),(0,o.kt)("p",null,"Godwoken chain uses CKB as pCKB by default, while different Godwoken chains may use different token types as pCKB."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": With certain transactions being sent to the smart contract, the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," of the transaction is ",(0,o.kt)("inlineCode",{parentName:"p"},"pCKB"),"."),(0,o.kt)("h4",{id:"account-abstraction"},"Account Abstraction"),(0,o.kt)("p",null,"Polyjuice only provides\xa0",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/glossary/#contract-account"},"contract accounts"),". Godwoken's user accounts are leveraged as\xa0",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/glossary/#eoa"},"EOAs"),"."),(0,o.kt)("h4",{id:"all-tokens-are-erc20-tokens"},"All Tokens Are ERC20 Tokens"),(0,o.kt)("p",null,"Ethereum processes ERC20 tokens differently from native ETH tokens, which is the reason wETH was invented. However, Godwoken conceals this difference."),(0,o.kt)("p",null,"All tokens on Godwoken are represented as Layer 2 sUDT types, regardless of whether they are native CKB or any sUDT types. Polyjuice proceeds from this Layer 2 sUDT ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-polyjuice/blob/b9c3ad4/solidity/erc20/SudtERC20Proxy_UserDefinedDecimals.sol"},"contract")," and ensures that all tokens on Godwoken are ERC20 compliant, regardless of whether supported by native CKB or sUDT. That is to say, it is unnecessary to distinguish between native tokens and ERC20 tokens. All the differenct tokens must be handled with the same ERC20 interface."),(0,o.kt)("h4",{id:"transaction-structure"},"Transaction Structure"),(0,o.kt)("p",null,"A Polyjuice transaction is essentially a Godwoken transaction. When Ethereum transactions are sent, they are converted to the Godwoken ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/v1.0.0-rc1/crates/types/schemas/godwoken.mol#L69-L74"},"RawL2Transaction")," type when being sent, and are automatically processed by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/tree/v1.0.0-rc1"},"Godwoken Web3"),"."),(0,o.kt)("h4",{id:"behavioral-differences-of-some-opcodes"},"Behavioral Differences of Some Opcodes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"EVM Opcode"),(0,o.kt)("th",{parentName:"tr",align:null},"Solidity Usage"),(0,o.kt)("th",{parentName:"tr",align:null},"Behavior in Polyjuice"),(0,o.kt)("th",{parentName:"tr",align:null},"Behavior in EVM"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"COINBASE"),(0,o.kt)("td",{parentName:"tr",align:null},"block.coinbase"),(0,o.kt)("td",{parentName:"tr",align:null},"address of the block_producer"),(0,o.kt)("td",{parentName:"tr",align:null},"address of the current block miner")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GASLIMIT"),(0,o.kt)("td",{parentName:"tr",align:null},"block.gaslimit"),(0,o.kt)("td",{parentName:"tr",align:null},"12,500,000"),(0,o.kt)("td",{parentName:"tr",align:null},"current block\u2019s gas limit")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DIFFICULTY"),(0,o.kt)("td",{parentName:"tr",align:null},"block.difficulty"),(0,o.kt)("td",{parentName:"tr",align:null},"2,500,000,000,000,000"),(0,o.kt)("td",{parentName:"tr",align:null},"current block\u2019s difficulty")))),(0,o.kt)("h4",{id:"others"},"Others"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Transaction context"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chain_id"),"\xa0is defined in Godwoken\xa0",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/blob/a099f2010b212355f5504a8d464b6b70d29640a5/crates/types/schemas/godwoken.mol#L64"},"RollupConfig#chain_id"),"."),(0,o.kt)("li",{parentName:"ul"},"the block difficulty is always\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"2500000000000000"),"."),(0,o.kt)("li",{parentName:"ul"},"the gas limit  is 12500000 per block, but it is not a transaction-level limit. Any transaction can reach the gas limit."),(0,o.kt)("li",{parentName:"ul"},"the size limit for contract's return data is\xa0",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-scripts/blob/31293d1/c/gw_def.h#L21-L22"},"25600B"),"."),(0,o.kt)("li",{parentName:"ul"},"the size limit for contract's storage is\xa0",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-scripts/blob/31293d1/c/gw_def.h#L21-L22"},"25600B"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"transfer value"),"\xa0can not exceed uint128:MAX.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Pre-compiled contract"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bn256_pairing"),"\xa0is not yet supported because of the high cycle cost (WIP)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-polyjuice/blob/compatibility-breaking-changes/docs/Addition-Features.md"},"addition pre-compiled contracts"))))),(0,o.kt)("h3",{id:"godwoken-web3-api-compatibility"},"Godwoken Web3 API Compatibility"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3"},"Godwoken Web3 API")," is a Web3 RPC compatible layer developed on top of Godwoken."),(0,o.kt)("p",null,"For more information about the usage, see ",(0,o.kt)("a",{parentName:"p",href:"https://eth.wiki/json-rpc/API"},"Ethereum RPC")," docs."),(0,o.kt)("h4",{id:"transactionto-must-be-a-contract-address"},(0,o.kt)("inlineCode",{parentName:"h4"},"transaction.to")," MUST be a Contract Address"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," member of a Godwoken transaction must be a contract address. Direct transfer of the value (pCKB) from EOA to EOA is ",(0,o.kt)("strong",{parentName:"p"},"not")," supported."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," parameter of the following RPC methods must be a contract address, ",(0,o.kt)("strong",{parentName:"p"},"not")," an EOA address:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"eth_call")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"eth_estimateGas")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"eth_sendRawTransaction"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Recommend Workaround")),(0,o.kt)("p",null,"Use the transfer function of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-polyjuice/blob/3f1ad5b/solidity/erc20/README.md"},"CKB_ERC20_Proxy")," contract ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-polyjuice/blob/3f1ad5b322/solidity/erc20/SudtERC20Proxy_UserDefinedDecimals.sol#L154"},"combined")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudtId = 1")," (CKB a.k.a. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/develop/docs/life_of_a_polyjuice_transaction.md#pckb"},"pCKB"),") to transfer assets from EOA To EOA."),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"signing-transaction-only-support-eip155"},"Signing Transaction Only Support EIP155"),(0,o.kt)("p",null,"Currently, we only support the ",(0,o.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-155"},"EIP155")," signing scheme that incorporated ",(0,o.kt)("inlineCode",{parentName:"p"},"CHAIN_ID")," for simple replay attack protection. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result")),(0,o.kt)("p",null,"If you use an outdated Ethereum toolchain to send transactions, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"truffle-hdwallet-provider"),", you will experience failures."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Recommend Workaround")),(0,o.kt)("p",null,"Make sure to use the latest Ethereum toolchain, such as ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/"},"ether.js")," / ",(0,o.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/en/v1.7.3/"},"web3.js")," / ",(0,o.kt)("a",{parentName:"p",href:"https://trufflesuite.com/truffle/"},"truffle")," / ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trufflesuite/truffle-hdwallet-provider"},"@truffle/hdwallet-provider"),", etc."),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"zero-address"},"Zero Address"),(0,o.kt)("p",null,"Godwoken does not support the concept of ",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/ru/glossary/#zero-address"},"zero address")," (0x0000000000000000000000000000000000000000). This means that Polyjuice cannot support the zero address as well."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result")),(0,o.kt)("p",null,"Transactions with the zero address in the ",(0,o.kt)("inlineCode",{parentName:"p"},"from"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"to")," field are not supported."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Recommend Workaround")),(0,o.kt)("p",null,"To use the zero address as a black hole to burn ethers, you can use the transfer function of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-polyjuice/blob/3f1ad5b/solidity/erc20/README.md"},"CKB_ERC20_Proxy")," contract to send ethers to the zero address."),(0,o.kt)("p",null,"For more information on the compatibility changes of Godwoken Web3 API, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/tree/compatibility-breaking-changes"},"compatibility-breaking-changes"),"."),(0,o.kt)("h3",{id:"a-layer-2-account-is-mandatory"},"A Layer 2 Account is Mandatory"),(0,o.kt)("p",null,"It is mandatory to create an account on a Godwoken chain for using Godwoken and Polyjuice. "),(0,o.kt)("p",null,"There are two ways to create a layer 2 account:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make a deposit to Godwoken at layer 1;"),(0,o.kt)("li",{parentName:"ul"},"Call the Godwoken built-in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-scripts/blob/86b299f/c/contracts/meta_contract.c"},"meta_contract")," and create an account at layer 2.")),(0,o.kt)("h2",{id:"hands-on-evm-training"},"Hands-On EVM Training"),(0,o.kt)("p",null,"This section covers the step-by-step tasks of developing EVM dApps on the Nervos platform. Developers can gain direct experience and prepare themselves for deploying their own applications by practicing these tasks."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connect MetaMask with Godwoken Testnet. For more information about Godwoken testnet v1, see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-info/tree/main/testnet_v1"},"Testnet V1"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nervos.gitbook.io/layer-2-evm/task-setup-and-requirements"},"Task Setup and Requirements - Layer 2 EVM (gitbook.io)"))),(0,o.kt)("h3",{id:"tasks"},"Tasks"),(0,o.kt)("p",null,"The following tasks provide instructions on what must be done, guidance on all necessary tooling, and detailed information on relevant topics:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nervos.gitbook.io/layer-2-evm/tasks/1.create.godwoken.account"},"Create account on the EVM Layer 2 Testnet")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nervos.gitbook.io/layer-2-evm/tasks/2.deploy.eth.contract"},"Deploy a Simple Ethereum Smart Contract on Polyjuice")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nervos.gitbook.io/layer-2-evm/tasks/3.issue.contract.call"},"Issue a Smart Contract Call to the Deployed Smart Contract")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nervos.gitbook.io/layer-2-evm/tasks/4.issue.sudt.deposit"},"Issue an SUDT Token on Layer 1 and Deposit it to Layer 2")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nervos.gitbook.io/layer-2-evm/tasks/5.deploy.erc20.proxy.contract"},"Deploy the ERC20 Proxy Contract for the Deposited SUDT")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nervos.gitbook.io/layer-2-evm/tasks/6.use.force.bridge.to.deposit"},"Use Force Bridge to Deposit Tokens on Ethereum to Polyjuice")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nervos.gitbook.io/layer-2-evm/tasks/7.port.eth.dapp"},"Port an Existing Ethereum dApp to Polyjuice")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nervos.gitbook.io/layer-2-evm/tasks/8.modify.dapp.support.force.bridge"},"Modify the Ported dApp so it Supports Ethereum Assets via Force Bridge")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nervos.gitbook.io/layer-2-evm/tasks/9.withdraw"},"Withdraw From Layer 2 Back to Layer 1"))))}d.isMDXComponent=!0}}]);