"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[8084],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=o,m=d["".concat(p,".").concat(c)]||d[c]||h[c]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));n(4996);const a={id:"web3Change1.5",title:"Godwoken Web3 V1.5 Release Note"},i=void 0,l={unversionedId:"web3Change1.5",id:"web3Change1.5",title:"Godwoken Web3 V1.5 Release Note",description:"Godwoken Web3 is a Ethereum-compatibility RPC layer on Godwoken. Godwoken Web3 is being continually updated. The following content covers the most recent changes in Godwoken Web3 v1.5. For the full release notes refer to Godwoken Web3 Releases.",source:"@site/docs/web3Change1.5.md",sourceDirName:".",slug:"/web3Change1.5",permalink:"/next/web3Change1.5",draft:!1,tags:[],version:"current",frontMatter:{id:"web3Change1.5",title:"Godwoken Web3 V1.5 Release Note"}},p={},s=[{value:"Added",id:"added",level:4},{value:"Fixed",id:"fixed",level:4},{value:"Others",id:"others",level:4}],u={toc:s};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3"},"Godwoken Web3")," is a Ethereum-compatibility RPC layer on Godwoken. Godwoken Web3 is being continually updated. The following content covers the most recent changes in Godwoken Web3 v1.5. For the full release notes refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/releases"},"Godwoken Web3 Releases"),"."),(0,o.kt)("p",null,"The latest update to Godwoken Web3 v1.5 includes the following changes:"),(0,o.kt)("h4",{id:"added"},"Added"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"feat: Adapt for auto create undeposited account in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/430"},"#430"),"\nAdapted to the automatic creation of account for undeposited sender on Godwoken.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"feat: Delete dropped auto create account tx in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/445"},"#445"),"\nAllow checks for the existence of an automatically created tx when calling RPC ",(0,o.kt)("inlineCode",{parentName:"p"},"eth_getTransactionByHash"),", and will remove the dropped auto-create account tx.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"feat: add ",(0,o.kt)("inlineCode",{parentName:"p"},"poly_getEthTxHashByGwTxHash")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"poly_getGwTxHashByEthTxHash")," in #449\nAdded two new methods, ",(0,o.kt)("inlineCode",{parentName:"p"},"poly_getEthTxHashByGwTxHash")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"poly_getGwTxHashByEthTxHash"),", that allow the conversion between Godwoken transaction hash and Ethereum transaction hash.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"feat: Add gw_is_request_in_queue in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/pull/450"},"#450"),"\nThis RPC method returns if the request (transaction or withdrawal) is in the fee queue. The request goes through the fee queue before being pushed to the mempool. This method is only supported on full nodes."))),(0,o.kt)("h4",{id:"fixed"},"Fixed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fix some small bugs of filter methods (part 1) in #",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-web3/pull/427"},"427")),(0,o.kt)("li",{parentName:"ul"},"Fix and refactor eth filter methods (part 3) in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-web3/pull/429"},"#429")),(0,o.kt)("li",{parentName:"ul"},"Improves the performance of ",(0,o.kt)("inlineCode",{parentName:"li"},"eth_getFilterChanges")," by ",(0,o.kt)("inlineCode",{parentName:"li"},"BlockFilter"),". in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-web3/pull/428"},"#428")),(0,o.kt)("li",{parentName:"ul"},"fix: correct parameter type of SQL query of ",(0,o.kt)("inlineCode",{parentName:"li"},"eth_getBlockTransactionCountByHash")," in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-web3/pull/440"},"#440")),(0,o.kt)("li",{parentName:"ul"},"fix: Update revert error message and data in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-web3/pull/437"},"#437")),(0,o.kt)("li",{parentName:"ul"},"fix: to eoa err msg in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-web3/pull/441"},"#441")),(0,o.kt)("li",{parentName:"ul"},"fix: Add leading zeros for r & s when check auto create account tx ex\u2026 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-web3/pull/457"},"#457")),(0,o.kt)("li",{parentName:"ul"},"fix(indexer): r & s in rlp encode should be integer rather than bytes in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-web3/pull/458"},"#458"),"\nFix ",(0,o.kt)("inlineCode",{parentName:"li"},"eth_tx_hash")," calculation in indexer, where the ",(0,o.kt)("inlineCode",{parentName:"li"},"eth_tx_hash")," will be incorrect when r / s has leading zeros")),(0,o.kt)("h4",{id:"others"},"Others"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"chore(main): tune latest median tx to 50 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-web3/pull/434"},"#434")),(0,o.kt)("li",{parentName:"ul"},"chore: rm minSudtFee env in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-web3/pull/442"},"#442")),(0,o.kt)("li",{parentName:"ul"},"fix(ci): upgrade baseimage to 22.04 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-web3/pull/461"},"#461"))))}h.isMDXComponent=!0}}]);