"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[3999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),k=o,m=d["".concat(p,".").concat(k)]||d[k]||u[k]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));n(4996);const a={id:"releaseNote4",title:"Godwoken V1.4 Release Note"},l=void 0,i={unversionedId:"gwchangelog/releaseNote4",id:"version-1.4/gwchangelog/releaseNote4",title:"Godwoken V1.4 Release Note",description:"",source:"@site/versioned_docs/version-1.4/gwchangelog/releaseNote4.md",sourceDirName:"gwchangelog",slug:"/gwchangelog/releaseNote4",permalink:"/1.4/gwchangelog/releaseNote4",draft:!1,tags:[],version:"1.4",frontMatter:{id:"releaseNote4",title:"Godwoken V1.4 Release Note"},sidebar:"sidebar2",previous:{title:"Extract a Privkey from MetaMask Wallet",permalink:"/1.4/extractPrivkey"},next:{title:"Godwoken V1.3 Release Note",permalink:"/1.4/gwchangelog/releaseNote3"}},p={},c=[{value:"Added",id:"added",level:4},{value:"Fixed",id:"fixed",level:4},{value:"Others",id:"others",level:4}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Currently, Godwoken is updated on a regular basis to provide new features and updates. The following release notes covers the most recent changes in Godwoken v1.4. You can check the full release notes in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/develop/CHANGELOG.md"},"Godwoken Changlog"),"."),(0,o.kt)("p",null,"The latest update to Godwoken v1.4 includes the following changes:"),(0,o.kt)("h4",{id:"added"},"Added"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"automatically create account for undeposited sender in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/710"},"#710"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"export and import block commands in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/754"},"#754")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"export-block subcommand"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"godwoken export-block -c config.toml --output-path ./blocks_testnet_v1\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"import-block subcommand"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"godwoken import-block -c config.toml --source-path ./block_testnet_v1\n")))))),(0,o.kt)("h4",{id:"fixed"},"Fixed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"always refresh pending deposit cells in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/753"},"#753")),(0,o.kt)("li",{parentName:"ul"},"Add new argument finality-blocks to gw-tools stat-custodian-ckb \u2026 in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/757"},"#757")),(0,o.kt)("li",{parentName:"ul"},"block-producer exit during bad block challenge by in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/755"},"#755")),(0,o.kt)("li",{parentName:"ul"},"Update parse log in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/752"},"#752")),(0,o.kt)("li",{parentName:"ul"},"fix(rpc): calculate tx signature hash using packed bytes by in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/760"},"#760")),(0,o.kt)("li",{parentName:"ul"},"fix(withdrawal unlocker): unhandle tx status unknown and rejected by in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/763"},"#763")),(0,o.kt)("li",{parentName:"ul"},"fix(config): removed block producer wallet config requirement for readonly node in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/768"},"#768")),(0,o.kt)("li",{parentName:"ul"},"hotfix(rpc server): submit withdrawal missing data for submit_tx in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/770"},"#770"))),(0,o.kt)("h4",{id:"others"},"Others"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Redirect syscall debug logs by in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/758"},"#758"))))}u.isMDXComponent=!0}}]);