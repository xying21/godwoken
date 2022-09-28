"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[6300],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));n(4996);const a={id:"releaseNote1.5",title:"Godwoken V1.5 Release Note"},l=void 0,i={unversionedId:"releaseNote1.5",id:"releaseNote1.5",title:"Godwoken V1.5 Release Note",description:"Godwoken is currently updated on a regular basis to provide new features and updates. The following release notes covers the most recent changes in Godwoken v1.5. You can check the full release notes in the Godwoken Changlog.",source:"@site/docs/releaseNote1.5.md",sourceDirName:".",slug:"/releaseNote1.5",permalink:"/next/releaseNote1.5",draft:!1,tags:[],version:"current",frontMatter:{id:"releaseNote1.5",title:"Godwoken V1.5 Release Note"}},s={},p=[{value:"Added",id:"added",level:4},{value:"Fixed",id:"fixed",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Godwoken is currently updated on a regular basis to provide new features and updates. The following release notes covers the most recent changes in Godwoken v1.5. You can check the full release notes in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/develop/CHANGELOG.md"},"Godwoken Changlog"),"."),(0,o.kt)("p",null,"The latest update to Godwoken v1.5 includes the following changes:"),(0,o.kt)("h4",{id:"added"},"Added"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"feat: Introduced max_cycles_limit of a Godwoken block in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/767"},"#767"),"\nThis PR aims to add a dynamic and configurable way to manage the number of block transactions. This PR added a new cycle limit ",(0,o.kt)("inlineCode",{parentName:"p"},"max_cycles_limit")," to the mem block. If there are not enough cycles available in the mem pool, the transaction will be packed into the next block. If a transaction has more cycles than ",(0,o.kt)("inlineCode",{parentName:"p"},"max_cycles_limit"),", it will be discarded.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add RPC ",(0,o.kt)("inlineCode",{parentName:"p"},"get_pending_tx_hashes")," in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/772"},"#772"),"\nThis PR added the new RPC ",(0,o.kt)("inlineCode",{parentName:"p"},"gw_get_pending_tx_hashes")," to fetch pending transaction hashes, so that developers can get the ",(0,o.kt)("inlineCode",{parentName:"p"},"mem_pool")," transactions of Godwoken."))),(0,o.kt)("h4",{id:"fixed"},"Fixed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"fix ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo test -p gw-tests")," in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/773"},"#773"),"\nThis PR fixed ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo test -p gw-tests")," using rand 0.8 directly instead of using rand 0.6 via secp256k1. Before, ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo test -p gw-tests")," failed to compile the ",(0,o.kt)("inlineCode",{parentName:"p"},"gw-tests")," separately because the ",(0,o.kt)("inlineCode",{parentName:"p"},"rand_os")," feature of rand 0.6 was unenabled.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"fix submit_withdrawal_request random failure in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/774"},"#774"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"fix(mempool): pool cycles not reset on next mem block for readonly node in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/781"},"#781")))))}d.isMDXComponent=!0}}]);