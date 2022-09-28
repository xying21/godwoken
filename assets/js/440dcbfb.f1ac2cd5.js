"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[2610],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=c(n),p=r,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||o;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));n(4996);const o={id:"faq",title:"FAQ"},s=void 0,i={unversionedId:"faq",id:"version-1.6(WIP)/faq",title:"FAQ",description:"Why is custodian cell needed in Godwoken?",source:"@site/versioned_docs/version-1.6(WIP)/faq.md",sourceDirName:".",slug:"/faq",permalink:"/faq",draft:!1,tags:[],version:"1.6(WIP)",frontMatter:{id:"faq",title:"FAQ"},sidebar:"sidebar2",previous:{title:"Other Tools",permalink:"/otherTools"},next:{title:"Reference and Useful Links",permalink:"/reference"}},l={},c=[{value:"Why is custodian cell needed in Godwoken?",id:"why-is-custodian-cell-needed-in-godwoken",level:3},{value:"What is an ETH Registry Address?",id:"what-is-an-eth-registry-address",level:3},{value:"How to get Layer 1 Block Number?",id:"how-to-get-layer-1-block-number",level:3},{value:"What data is committed to layer-1 by Godwoken?",id:"what-data-is-committed-to-layer-1-by-godwoken",level:3},{value:"Time-lapse of switch from layer 2 to layer 1",id:"time-lapse-of-switch-from-layer-2-to-layer-1",level:3},{value:"Transferring funds to layer-1 must send tokens to the intermediate address",id:"transferring-funds-to-layer-1-must-send-tokens-to-the-intermediate-address",level:3},{value:"Getting the transaction completed faster",id:"getting-the-transaction-completed-faster",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"why-is-custodian-cell-needed-in-godwoken"},"Why is custodian cell needed in Godwoken?"),(0,r.kt)("p",null,"In short, a ",(0,r.kt)("a",{parentName:"p",href:"/depAndWthd#custodian-cell"},"custodian cell")," is an asset held in trust by Godwoken. Custodian cell transfers ownership of the deposit cell to the rollup contract so that the rollup contract can use the amount to process withdrawal requests and conduct operations such as merging custodian cells of the same type on the CKB."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"what-is-an-eth-registry-address"},"What is an ETH Registry Address?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-scripts/blob/master/c/contracts/eth_addr_reg.c"},"ETH address registry")," is a new built-in contract introduced in Godwoken v1 which can be understood as a simple two-way mapping between ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_address")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"gw_script_hash"),". It serves as the alias mechanism for Godwoken layer 2 account. Because there is no concept of Godwoken ID or script in the EVM environment\uff0cwith the ETH address registry, we could locate a Godwoken account by its ETH address. For more details, see ",(0,r.kt)("a",{parentName:"p",href:"/layer2Account"},"Layer 2 Account in Godwoken"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"how-to-get-layer-1-block-number"},"How to get Layer 1 Block Number?"),(0,r.kt)("p",null,"DeFi contracts often require interests to be calculated by block number. However, both v0 and v1 networks do not have a fixed layer2 block interval (it is affected by layer1 block interval)."),(0,r.kt)("p",null,"Arbitrum solved this issue by providing a syscall to get the layer1 block number. However, this does not work for Godwoken since the layer1 chain, CKB itself, does not have a fixed block interval (CKB block interval is adjusted by the uncle block rate at each epoch)."),(0,r.kt)("p",null,"We recommend developers use layer2 block timestamp as the trusted timestamp to calculate on-chain interests. More information is available in the following discussion thread: ",(0,r.kt)("a",{parentName:"p",href:"https://talk.nervos.org/t/how-to-get-layer-1-block-number-on-layer-2/6647"},"https://talk.nervos.org/t/how-to-get-layer-1-block-number-on-layer-2/6647")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"what-data-is-committed-to-layer-1-by-godwoken"},"What data is committed to layer-1 by Godwoken?"),(0,r.kt)("p",null,"The transactions, deposits and withdrawals are contained in the block ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/v1.5.0/crates/types/schemas/godwoken.mol#L97-L110"},"structure")," of a layer-2 block, which is committed to layer-1. We use the optimistic rollup mechanism, so we do not verify the signatures of transactions and withdrawals on-chain. For more details, check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-scripts/blob/master/README.md"},"Godwoken-scripts"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"time-lapse-of-switch-from-layer-2-to-layer-1"},"Time-lapse of switch from layer 2 to layer 1"),(0,r.kt)("p",null,"Q: It is so easy to switch from Layer 1 to Layer 2. Why does it take so long in reverse?"),(0,r.kt)("p",null,"A: Layer 2 can trust Layer 1 because Layer 1 is more secure. But Layer 1 needs more time to ensure everything is fine on Layer 2 especially for optimistic rollup (a popular Layer 2 solution). "),(0,r.kt)("p",null,"Every optimistic rollup L2 uses a challenge mechanism in its withdrawal process. In Godwoken v1, L1 puts the withdrawal into a challenge period (~7 days) after you initiated the withdrawal request, waiting for observers or challengers to report problems. The withdrawal can be approved only when no challenge is submitted. L1 guarantees that every withdrawal is intact and that the funds kept on L2 are safe in this way. Not only Godwoken, but other optimistic rollups like arbitrum and optimism also have such a challenge period, e.g., Arbitrum mandates a 7-day challenge period during a withdrawal."),(0,r.kt)("p",null,"We're actively exploring ways to improve the withdrawal experience and support fast withdrawal. Please stay tuned."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transferring-funds-to-layer-1-must-send-tokens-to-the-intermediate-address"},"Transferring funds to layer-1 must send tokens to the intermediate address"),(0,r.kt)("p",null,"Q: Why does it require an amount of 63 CKBs to an intermediate address to move funds back to Layer 1 when using Yokai? "),(0,r.kt)("p",null,"A: This is a constraint of the current release of Godwoken (L2). Godwoken uses a withdrawal recipient account (actually a cell in Nervos' term) on Nervos CKB (L1) to act as an identity authenticator. Godwoken authenticates the receiver's identity by using an account signature provided by the recipient and then sends corresponding withdrawal funds. The recipient account requires at least 63 CKBs to be stored on Nervos CKB (L1). Those 63 CKBs are still yours and can be claimed back if you don't need this account later. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nervos.org/docs/basics/concepts/economics"},"Actually, anything stored on Nervos CKB (L1) requires an amount of CKBs (1 CKB = 1 Byte) for its storage space. L1 storage is validated by global consensus, thus it's scarce and needs to be used carefully.")),(0,r.kt)("p",null,"This constraint is a temporary mechanism and will be removed in a future release. Godwoken is the world's first rollup running on a UTXO blockchain. The answer is not ready-made, and we have to explore different ways to find the best design. It's your feedback and patience that help us improve Godwoken and make it better in future iterations. Thank you."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getting-the-transaction-completed-faster"},"Getting the transaction completed faster"),(0,r.kt)("p",null,"Q: The average block confirmation interval on Godwoken is 30s or more, yet I would like to have my transactions completed more quickly, what should I do to make this happen?"),(0,r.kt)("p",null,"A: This can be done with the Godwoken instant finality feature. Instant finality is a feature of Godwoken aimed at return to users an Ethereum-like receipt of the transaction, giving users a faster way to verify the status of the transaction before it goes on-chain. "),(0,r.kt)("p",null,"To utilise this feature, simply send the transaction and obtain forthwith the ","[",(0,r.kt)("inlineCode",{parentName:"p"},"eth_getTransactionReceipt"),"]","(",(0,r.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#eth"},"https://ethereum.org/en/developers/docs/apis/json-rpc/#eth"),"_ gettransactionreceipt) transaction receipt will suffice."),(0,r.kt)("p",null,"Godwoken average block confirmation interval can be viewed at:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Avg. Block Time of Godwoken testnet_v1: ",(0,r.kt)("a",{parentName:"li",href:"https://v1.testnet.gwscan.com/"},"https://v1.testnet.gwscan.com/")),(0,r.kt)("li",{parentName:"ul"},"Avg. Block Time of Godwoken mainnet_v1: ",(0,r.kt)("a",{parentName:"li",href:"https://v1.gwscan.com/"},"https://v1.gwscan.com/"))))}u.isMDXComponent=!0}}]);