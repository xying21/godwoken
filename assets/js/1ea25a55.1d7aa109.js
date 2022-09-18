"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[9399],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=d(a),p=o,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||r;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7497:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(7462),o=(a(7294),a(3905));a(4996);const r={id:"faq",title:"FAQ"},s=void 0,i={unversionedId:"faq",id:"version-1.5/faq",title:"FAQ",description:"",source:"@site/versioned_docs/version-1.5/faq.md",sourceDirName:".",slug:"/faq",permalink:"/1.5/faq",draft:!1,tags:[],version:"1.5",frontMatter:{id:"faq",title:"FAQ"},sidebar:"sidebar2",previous:{title:"Other Tools",permalink:"/1.5/otherTools"},next:{title:"Reference and Useful Links",permalink:"/1.5/reference"}},l={},d=[{value:"Why is custodian cell needed in Godwoken?",id:"why-is-custodian-cell-needed-in-godwoken",level:3},{value:"What is an ETH Registry Address?",id:"what-is-an-eth-registry-address",level:3},{value:"What data is committed to layer-1 by Godwoken?",id:"what-data-is-committed-to-layer-1-by-godwoken",level:3},{value:"It is so easy to switch from Layer 1 to Layer 2. Why does it take so long in reverse?",id:"it-is-so-easy-to-switch-from-layer-1-to-layer-2-why-does-it-take-so-long-in-reverse",level:3},{value:"Why does it require an amount of 63 CKBs to an intermediate address to move funds back to Layer 1 when using Yokai?",id:"why-does-it-require-an-amount-of-63-ckbs-to-an-intermediate-address-to-move-funds-back-to-layer-1-when-using-yokai",level:3},{value:"How to get Layer 1 Block Number?",id:"how-to-get-layer-1-block-number",level:3},{value:"CKB transfer on Godwoken testnet via Metamask has failed. What is the solution?",id:"ckb-transfer-on-godwoken-testnet-via-metamask-has-failed-what-is-the-solution",level:3}],c={toc:d};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"why-is-custodian-cell-needed-in-godwoken"},"Why is custodian cell needed in Godwoken?"),(0,o.kt)("p",null,"In short, a ",(0,o.kt)("a",{parentName:"p",href:"/1.5/depAndWthd#custodian-cell"},"custodian cell")," is an asset held in trust by Godwoken. Custodian cell transfers ownership of the deposit cell to the rollup contract so that the rollup contract can use the amount to process withdrawal requests and conduct operations such as merging custodian cells of the same type on the CKB."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"what-is-an-eth-registry-address"},"What is an ETH Registry Address?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-scripts/blob/master/c/contracts/eth_addr_reg.c"},"ETH address registry")," is a new built-in contract introduced in Godwoken v1 which can be understood as a simple two-way mapping between ",(0,o.kt)("inlineCode",{parentName:"p"},"eth_address")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"gw_script_hash"),". It serves as the alias mechanism for Godwoken layer 2 account. Because there is no concept of Godwoken ID or script in the EVM environment\uff0cwith the ETH address registry, we could locate a Godwoken account by its ETH address. For more details, see ",(0,o.kt)("a",{parentName:"p",href:"/1.5/layer2Account"},"Layer 2 Account in Godwoken"),"."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"what-data-is-committed-to-layer-1-by-godwoken"},"What data is committed to layer-1 by Godwoken?"),(0,o.kt)("p",null,"The transactions, deposits and withdrawals are contained in the block ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/v1.5.0/crates/types/schemas/godwoken.mol#L97-L110"},"structure")," of a layer-2 block, which is committed to layer-1. We use the optimistic rollup mechanism, so we do not verify the signatures of transactions and withdrawals on-chain. For more details, check ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-scripts/blob/master/README.md"},"Godwoken-scripts"),"."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"it-is-so-easy-to-switch-from-layer-1-to-layer-2-why-does-it-take-so-long-in-reverse"},"It is so easy to switch from Layer 1 to Layer 2. Why does it take so long in reverse?"),(0,o.kt)("p",null,"Layer 2 can trust Layer 1 because Layer 1 is more secure. But Layer 1 needs more time to ensure everything is fine on Layer 2 especially for optimistic rollup (a popular Layer 2 solution). "),(0,o.kt)("p",null,"Every optimistic rollup L2 uses a challenge mechanism in its withdrawal process. In Godwoken v1, L1 puts the withdrawal into a challenge period (~7 days) after you initiated the withdrawal request, waiting for observers or challengers to report problems. The withdrawal can be approved only when no challenge is submitted. L1 guarantees that every withdrawal is intact and that the funds kept on L2 are safe in this way. Not only Godwoken, but other optimistic rollups like arbitrum and optimism also have such a challenge period, e.g., Arbitrum mandates a 7-day challenge period during a withdrawal."),(0,o.kt)("p",null,"We're actively exploring ways to improve the withdrawal experience and support fast withdrawal. Please stay tuned."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"why-does-it-require-an-amount-of-63-ckbs-to-an-intermediate-address-to-move-funds-back-to-layer-1-when-using-yokai"},"Why does it require an amount of 63 CKBs to an intermediate address to move funds back to Layer 1 when using Yokai?"),(0,o.kt)("p",null,"This is a constraint of the current release of Godwoken (L2). Godwoken uses a withdrawal recipient account (actually a cell in Nervos' term) on Nervos CKB (L1) to act as an identity authenticator. Godwoken authenticates the receiver's identity by using an account signature provided by the recipient and then sends corresponding withdrawal funds. The recipient account requires at least 63 CKBs to be stored on Nervos CKB (L1). Those 63 CKBs are still yours and can be claimed back if you don't need this account later. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nervos.org/docs/basics/concepts/economics"},"Actually, anything stored on Nervos CKB (L1) requires an amount of CKBs (1 CKB = 1 Byte) for its storage space. L1 storage is validated by global consensus, thus it's scarce and needs to be used carefully.")),(0,o.kt)("p",null,"This constraint is a temporary mechanism and will be removed in a future release. Godwoken is the world's first rollup running on a UTXO blockchain. The answer is not ready-made, and we have to explore different ways to find the best design. It's your feedback and patience that help us improve Godwoken and make it better in future iterations. Thank you."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"how-to-get-layer-1-block-number"},"How to get Layer 1 Block Number?"),(0,o.kt)("p",null,"Defi contracts often require interests to be calculated by block number. However, both v0 and v1 networks do not have a fixed layer2 block interval (it is affected by layer1 block interval)."),(0,o.kt)("p",null,"Arbitrum solved this issue by providing a syscall to get the layer1 block number. However, this does not work for Godwoken since the layer1 chain, CKB itself, does not have a fixed block interval (CKB block interval is adjusted by the uncle block rate at each epoch)."),(0,o.kt)("p",null,"We recommend developers use layer2 block timestamp as the trusted timestamp to calculate on-chain interests. More information is available in the following discussion thread: ",(0,o.kt)("a",{parentName:"p",href:"https://talk.nervos.org/t/how-to-get-layer-1-block-number-on-layer-2/6647"},"https://talk.nervos.org/t/how-to-get-layer-1-block-number-on-layer-2/6647")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"ckb-transfer-on-godwoken-testnet-via-metamask-has-failed-what-is-the-solution"},"CKB transfer on Godwoken testnet via Metamask has failed. What is the solution?"),(0,o.kt)("p",null,"In Godwoken, ",(0,o.kt)("inlineCode",{parentName:"p"},"transaction.to")," must be a contract address. In RPCs such as ",(0,o.kt)("inlineCode",{parentName:"p"},"eth_call"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"eth_estimateGas")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"eth_sendRawTransaction"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," parameter can only be a contract address, not an EOA address."),(0,o.kt)("p",null,"To transfer value from EOA to EOA, we recommend developers to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer function")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"pCKB_ERC20_Proxy")," contract which combines sUDT_ID=1. In Godwoken and Polyjuice, we use CKB as pCKB. More details can be found at ",(0,o.kt)("a",{parentName:"p",href:"/1.5/integration#pckb"},"pCKB")," and ",(0,o.kt)("a",{parentName:"p",href:"/1.5/integration#godwoken-web3-api-compatibility"},"Godwoken Web3 API Compatibility"),". The contract addresses are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"mainnet_v1 pCKB_ERC20_Proxy contract: 0x7538C85caE4E4673253fFd2568c1F1b48A71558a (pCKB)"),(0,o.kt)("li",{parentName:"ul"},"testnet_v1 pCKB_ERC20_Proxy contract: 0xE05d380839f32bC12Fb690aa6FE26B00Bd982613 (pCKB)")))}u.isMDXComponent=!0}}]);