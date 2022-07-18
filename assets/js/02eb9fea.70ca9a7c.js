"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[4109],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(n),u=o,k=h["".concat(s,".").concat(u)]||h[u]||d[u]||r;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));n(4996);const r={id:"depAndWthd",title:"Deposit and Withdrawal"},l=void 0,i={unversionedId:"depAndWthd",id:"version-1.3-rc1(WIP)/depAndWthd",title:"Deposit and Withdrawal",description:"",source:"@site/versioned_docs/version-1.3-rc1(WIP)/depAndWthd.md",sourceDirName:".",slug:"/depAndWthd",permalink:"/depAndWthd",draft:!1,tags:[],version:"1.3-rc1(WIP)",frontMatter:{id:"depAndWthd",title:"Deposit and Withdrawal"},sidebar:"sidebar2",previous:{title:"pCKB",permalink:"/pCKB"},next:{title:"Godwoken-Kicker",permalink:"/godwokenkicker"}},s={},c=[{value:"Deposit",id:"deposit",level:2},{value:"Custodian Cell",id:"custodian-cell",level:2},{value:"Withdrawal",id:"withdrawal",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Deposits and withdrawals comprise a special messaging mechanism between layer 1 (CKB) and layer 2 (Godwoken) that enables the exchange of assets through the transfer function. Users can deposit assets from layer 1 to layer 2, or withdraw assets from layer 2 to layer 1."),(0,o.kt)("h2",{id:"deposit"},"Deposit"),(0,o.kt)("p",null,"When a layer 1 transaction is sent, it creates a deposit request by generating a cell with a special lock, the deposit lock. The block producer will collect these cells and process the deposit requests in the blocks. It will unlock the deposit cells, move the assets under the custodian lock, update the layer 2 state and submit layer 1 transactions in the blocks. The block producer cannot take away these assets, because a layer 1 script verifies these transactions."),(0,o.kt)("p",null,"The deposit cell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"lock:\n  code_hash:   (the deposit lock's code hash),\n  hash_type:   Type,\n  args: (rollup_type_hash(32 bytes) | DepositLockArgs)\ncapacity: (the amount of CKB to be deposited),\ntype_:  (none or SUDT script)\ndata:   (none or SUDT amount)\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"lock")," field of the deposit cell uses the deposit lock. The first 32 bytes of ",(0,o.kt)("inlineCode",{parentName:"p"},"args")," is a unique value associated with the rollup instance. ",(0,o.kt)("inlineCode",{parentName:"p"},"DepositLockArgs")," indicates the layer 2 account to which the deposit will be made. ",(0,o.kt)("inlineCode",{parentName:"p"},"capacity")," is the total amount of CKB deposited. The ",(0,o.kt)("inlineCode",{parentName:"p"},"type_")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," fields comply with the CKB Simple UDT format. With these fields, users can deposit Simple UDT assets to layer 2."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"table DepositLockArgs {\n    // layer1 lock hash\n    owner_lock_hash: Byte32,\n    layer2_lock: Script,\n    cancel_timeout: Uint64,\n    registry_id: Uint32,\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DepositLockArgs")," represents the script and ",(0,o.kt)("inlineCode",{parentName:"p"},"registry_id")," of a layer 2 account, which currently supports only the ETH registry. Users can cancel a deposit after the expiration of ",(0,o.kt)("inlineCode",{parentName:"p"},"cancel_timeout"),", which the block producer can use to reject packed deposit cells containing invalid data."),(0,o.kt)("h2",{id:"custodian-cell"},"Custodian Cell"),(0,o.kt)("p",null,"When assets are deposited to layer 2, deposit cells are converted to custodian cells. The custodian lock protects custodian cells and restricts the transfer of assets so users can only make withdrawals."),(0,o.kt)("p",null,"The custodian cell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"lock:\n  code_hash:    (the custodian lock's code hash),\n  hash_type:    Type,\n  args: (rollup_type_hash(32 bytes) | CustodianLockArgs)\ncapacity:   (the amount of CKB to be deposited),\ntype_:  (none or SUDT script)\ndata:   (none or SUDT amount)\n")),(0,o.kt)("p",null,"The first 32 bytes of ",(0,o.kt)("inlineCode",{parentName:"p"},"args")," are unique values associated with the rollup instance. ",(0,o.kt)("inlineCode",{parentName:"p"},"CustodianLockArgs")," contains deposit information. ",(0,o.kt)("inlineCode",{parentName:"p"},"capacity")," is the amount of CKB to be deposited. The ",(0,o.kt)("inlineCode",{parentName:"p"},"type_")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," fields follow the CKB Simple UDT format."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"table CustodianLockArgs {\n    deposit_block_hash: Byte32,\n    deposit_block_number: Uint64,\n    deposit_lock_args: DepositLockArgs,\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CustodianLockArgs")," stores the entire deposit information. ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit_lock_args")," is the args from the original deposit cell. ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit_block_hash")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit_block_number")," denote the layer2 block that contains the deposit."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"capacity")," of a cell must cover the cost of the cell. The ",(0,o.kt)("inlineCode",{parentName:"p"},"capacity")," of the deposit cell must also cover its custodian cell, so the minimum deposit capacity that Godwoken allows is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deposit CKB: 298 CKB"),(0,o.kt)("li",{parentName:"ul"},"Deposit CKB and Simple UDT: 379 CKB")),(0,o.kt)("h2",{id:"withdrawal"},"Withdrawal"),(0,o.kt)("p",null,"Users sign and sent withdrawal requests to the block producer. The block producer will process these requests in the blocks, update the layer2 state, and convert custodian cells to withdrawal cells in layer1 block submission transactions."),(0,o.kt)("p",null,"The withdrawal cell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"lock:\n  code_hash:    (the withdrawal lock's code hash),\n  hash_type:    Type,\n  args: (rollup_type_hash(32 bytes) | WithdrawalLockArgs (n bytes) | len (4 bytes) | layer1 owner lock (n bytes))\ncapacity:   (the CKB amount to be withdrawn),\ntype_:  (none or SUDT script)\ndata:   (none or SUDT amount)\n")),(0,o.kt)("p",null,"Withdrawal lock guarantees the user can unlock this cell after ",(0,o.kt)("inlineCode",{parentName:"p"},"finality blocks"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"struct WithdrawalLockArgs {\n    withdrawal_block_hash: Byte32,\n    withdrawal_block_number: Uint64,\n    account_script_hash: Byte32,\n    // layer1 lock to withdraw after challenge period\n    owner_lock_hash: Byte32,\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"withdrawal_block_hash")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"withdrawal_block_number")," record the layer2 block containing the withdrawal. ",(0,o.kt)("inlineCode",{parentName:"p"},"account_script_hash")," denotes the layer2 account. ",(0,o.kt)("inlineCode",{parentName:"p"},"owner_lock_hash")," denotes the layer1 lock that is used to unlock the cell."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"capacity")," of a cell must cover the cost of the cell, so the minimum withdrawal capacity that Godwoken allows is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Withdrawal CKB: 266 CKB"),(0,o.kt)("li",{parentName:"ul"},"Withdrawal CKB and Simple UDT: 347 CKB")))}d.isMDXComponent=!0}}]);