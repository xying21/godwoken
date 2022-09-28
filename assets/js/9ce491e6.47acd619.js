"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[7087],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,m=d["".concat(p,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(m,i(i({ref:t},h),{},{components:n})):a.createElement(m,i({ref:t},h))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));n(4996);const o={id:"web3Change1.5",title:"Godwoken Web3 V1.5 Release Note"},i=void 0,l={unversionedId:"web3changelog/web3Change1.5",id:"version-1.5/web3changelog/web3Change1.5",title:"Godwoken Web3 V1.5 Release Note",description:"Godwoken Web3 is a Ethereum-compatibility RPC layer on Godwoken. Godwoken Web3 is being continually updated. The following content covers the most recent changes in Godwoken Web3 v1.5. For the full release notes refer to Godwoken Web3 Releases.",source:"@site/versioned_docs/version-1.5/web3changelog/web3Change1.5.md",sourceDirName:"web3changelog",slug:"/web3changelog/web3Change1.5",permalink:"/1.5/web3changelog/web3Change1.5",draft:!1,tags:[],version:"1.5",frontMatter:{id:"web3Change1.5",title:"Godwoken Web3 V1.5 Release Note"}},p={},s=[{value:"Added",id:"added",level:3},{value:"Fixed",id:"fixed",level:3},{value:"Others",id:"others",level:3}],h={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3"},"Godwoken Web3")," is a Ethereum-compatibility RPC layer on Godwoken. Godwoken Web3 is being continually updated. The following content covers the most recent changes in Godwoken Web3 v1.5. For the full release notes refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/releases"},"Godwoken Web3 Releases"),"."),(0,r.kt)("p",null,"The latest update to Godwoken Web3 v1.5 includes the following changes:"),(0,r.kt)("h3",{id:"added"},"Added"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"feat: Adapt for auto create undeposited account in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/430"},"#430")),(0,r.kt)("p",{parentName:"li"},"  Adapted to the automatic creation of account for undeposited sender on Godwoken.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"feat: Delete dropped auto create account tx in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/445"},"#445")),(0,r.kt)("p",{parentName:"li"},"  Allow checks for the existence of an automatically created tx when calling RPC ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_getTransactionByHash"),", and will remove the dropped auto-create account tx.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"feat: add ",(0,r.kt)("inlineCode",{parentName:"p"},"poly_getEthTxHashByGwTxHash")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"poly_getGwTxHashByEthTxHash")," in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/449"},"#449")),(0,r.kt)("p",{parentName:"li"},"  Added two new methods, ",(0,r.kt)("inlineCode",{parentName:"p"},"poly_getEthTxHashByGwTxHash")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"poly_getGwTxHashByEthTxHash"),", that allow the conversion between Godwoken transaction hash and Ethereum transaction hash.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"feat: Add gw_is_request_in_queue in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/450"},"#450")),(0,r.kt)("p",{parentName:"li"},"  This RPC method returns if the request (transaction or withdrawal) is in the fee queue. The request goes through the fee queue before being pushed to the mempool. This method is only supported on full nodes."))),(0,r.kt)("h3",{id:"fixed"},"Fixed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fix some small bugs of filter methods (part 1) in #",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/427"},"427"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fix and refactor eth filter methods (part 3) in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/429"},"#429"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Improves the performance of ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_getFilterChanges")," by ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockFilter"),". in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/428"},"#428"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"fix: correct parameter type of SQL query of ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_getBlockTransactionCountByHash")," in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/440"},"#440"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"fix: Update revert error message and data in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/437"},"#437"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"fix: to eoa err msg in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/441"},"#441"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"fix: Add leading zeros for r & s when check auto create account tx ex\u2026 in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/457"},"#457"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"fix(indexer): r & s in rlp encode should be integer rather than bytes in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/458"},"#458"),"\nFix ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_tx_hash")," calculation in indexer, where the ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_tx_hash")," will be incorrect when r / s has leading zeros")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"fix(ci): use ubuntu: focal to build web3-indexer in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/465"},"#465"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"fix: Update insufficient balance error message in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/473"},"#473")),(0,r.kt)("p",{parentName:"li"},"  This PR fixed an issue where ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/issues/468"},'"from id not found by from Address" when the transfer account balance is insufficient')," with:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  - Update error message if `balance < requiredBalance` when send transaction\n  - Remove `balance > 0` check in `eth_call` & `eth_estimateGas`\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add cli command to fix  ",(0,r.kt)("inlineCode",{parentName:"p"},"eth tx hash")," in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/475"},"#475")),(0,r.kt)("p",{parentName:"li"},"  This PR is to fix the wrong data from ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_tx_hash"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"eth-tx-hash")," data field in ",(0,r.kt)("inlineCode",{parentName:"p"},"web3-indexer-database"),"(PostgreSQL) could previously contain incorrect data. This problem was fixed in v1.5.1-rc1, so the data indexed by web3_version >= v1.5.1-rc1 is OK. Otherwise, you need to consider re-async database from scratch, or use the provided CLI tool to correct wrong data. See: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/blob/1.5-rc/packages/api-server/cli/README.md"},"https://github.com/nervosnetwork/godwoken-web3/blob/1.5-rc/packages/api-server/cli/README.md")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Use the provided CLI tool")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# Run `bash` in godwoken-web3 container\ncd /godwoken-web3\n\nyarn run cli list-wrong-eth-tx-hashes --help\nyarn run cli list-wrong-eth-tx-hashes\n\nyarn run cli fix-eth-tx-hash --help\nyarn run cli fix-eth-tx-hash\n")))),(0,r.kt)("h3",{id:"others"},"Others"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"chore(main): tune latest median tx to 50 in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-web3/pull/434"},"#434")),(0,r.kt)("li",{parentName:"ul"},"chore: rm minSudtFee env in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-web3/pull/442"},"#442")),(0,r.kt)("li",{parentName:"ul"},"fix(ci): upgrade baseimage to 22.04 in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-web3/pull/461"},"#461")),(0,r.kt)("li",{parentName:"ul"},"chore: install openssl in docker build  in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-web3/pull/470"},"#470"))))}c.isMDXComponent=!0}}]);