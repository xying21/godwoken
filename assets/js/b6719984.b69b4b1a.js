"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[7605],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));n(4996);const r={id:"releaseNote1.2",title:"Godwoken V1.2 Release Note"},i=void 0,l={unversionedId:"gwchangelog/releaseNote1.2",id:"version-1.6(WIP)/gwchangelog/releaseNote1.2",title:"Godwoken V1.2 Release Note",description:"The following release notes cover the most recent and major changes in Godwoken v1.2. You can also see all release notes in the Godwoken Changlog.",source:"@site/versioned_docs/version-1.6(WIP)/gwchangelog/releaseNote1.2.md",sourceDirName:"gwchangelog",slug:"/gwchangelog/releaseNote1.2",permalink:"/gwchangelog/releaseNote1.2",draft:!1,tags:[],version:"1.6(WIP)",frontMatter:{id:"releaseNote1.2",title:"Godwoken V1.2 Release Note"}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following release notes cover the most recent and major changes in Godwoken v1.2. You can also see all release notes in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/develop/CHANGELOG.md"},"Godwoken Changlog"),". "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Godwoken v1 is not an upgrade on the existing chain but is being deployed as a new vhain with tools to help users and developers migrate to the new chain.  Developers can use Godwoken v1 to switch networks to Godwoken in the same way as they use other EVM-compatible chains.")),(0,o.kt)("p",null,"The changes to Godwoken v1.2 include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Refresh readonly mem-pool when receives new mem-block.\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/721"},"#721")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Fixed the inconsistent state of the ReadOnly node by ceasing the reset in the MemPool#reset function."),(0,o.kt)("li",{parentName:"ul"},"ReadOnly node will clean up the mem-pool state when a new mem-block is received from the fullnode."),(0,o.kt)("li",{parentName:"ul"},"Fixed filter_withdrawals to prevent removing subsequent withdrawals from the same sender."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Fixed the rejection of transactions that have less gas than intrinsic gas\uff0cand added intrinsic gas check feature to Godwoken.\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/725"},"#725"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Support packaging failed transactions into layer2 block.\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/684"},"#684")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Fixed some issues caused by the behaviour of packaging only successful transactions."),(0,o.kt)("li",{parentName:"ul"},"Introduced a backward compatibility approach to solve some compatibility issues. If a transaction failed (returned a non-zero exit code), the written state of the transaction gets reverted, the sender's nonce increases by 1 , and the transaction fee gets paid to the block producer."),(0,o.kt)("li",{parentName:"ul"},"Charges PolyjuiceTx the CKB amount of gas_used * gas_price. A charge of args.fee would be made for other transactions."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Support upgrade backend executable binaries.\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/713"},"#713")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Defined ",(0,o.kt)("inlineCode",{parentName:"p"},"backend_switch")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," instead of defining ",(0,o.kt)("inlineCode",{parentName:"p"},"backends"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct BackendSwitchConfig {\n    pub switch_height: u64, # means at which height the new version of backend is used.\n    pub backends: Vec<BackendConfig>,\n}\n"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Support for the new options in the config file: ",(0,o.kt)("inlineCode",{parentName:"p"},"max_txs"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"max_deposits")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"max_withdrawals"),". These options regulate the max number of each items in a block.\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/714"},"#714"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added the return of committed info on the withdrawal query RPC. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/706"},"#706")))))}u.isMDXComponent=!0}}]);