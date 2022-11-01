"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[3903],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),k=p(a),h=r,c=k["".concat(l,".").concat(h)]||k[h]||m[h]||n;return a?o.createElement(c,i(i({ref:t},d),{},{components:a})):o.createElement(c,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<n;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3662:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=a(7462),r=(a(7294),a(3905)),n=a(4996);const i={id:"fastWithdrawal",title:"Deposit & Fast Withdrawal to Godwoken v1"},s=void 0,l={unversionedId:"fastWithdrawal",id:"version-1.6(WIP)/fastWithdrawal",title:"Deposit & Fast Withdrawal to Godwoken v1",description:"This tutorial shows how to deposit and withdraw funds from old Godwoken - version 0 - to the new network - version 1. If you don't have any funds on old network you should skip this article.",source:"@site/versioned_docs/version-1.6(WIP)/fastWithdrawal.md",sourceDirName:".",slug:"/fastWithdrawal",permalink:"/fastWithdrawal",draft:!1,tags:[],version:"1.6(WIP)",frontMatter:{id:"fastWithdrawal",title:"Deposit & Fast Withdrawal to Godwoken v1"},sidebar:"sidebar2",previous:{title:"6. Withdraw From Layer 2 Back to Layer 1",permalink:"/evm_training/evmTask6"},next:{title:"Transfer pCKB on Godwoken v1",permalink:"/sendPCKB"}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deposit CKB from Nervos CKB to MetaMask",id:"deposit-ckb-from-nervos-ckb-to-metamask",level:2},{value:"Withdraw Assets from MetaMask to Nervos CKB",id:"withdraw-assets-from-metamask-to-nervos-ckb",level:2},{value:"Withdraw Assets from Godwoken V0 to Godwoken V1",id:"withdraw-assets-from-godwoken-v0-to-godwoken-v1",level:2}],m={toc:d};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This tutorial shows how to deposit and withdraw funds from old Godwoken - version 0 - to the new network - version 1. If you don't have any funds on old network you should skip this article."))),(0,r.kt)("p",null,"This guide will show you how to do Fast Withdrawal, which takes minutes instead of days and transfer funds from old Layer 2 EVM Godwoken network to the new Godwoken."),(0,r.kt)("p",null,"If you wish to withdraw funds from Godwoken V0 to Nervos Layer 1 then it will be a slower process (days) due to Optimistic Rollup security architecture. "),(0,r.kt)("p",null,"In order to follow this tutorial, you must have already downloaded a web3 wallet, such as ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask"),", and have enough CKB or supported sUDT tokens in the wallet."),(0,r.kt)("p",null,"For more information about the concepts of CKB, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nervos.org/docs/basics/introduction"},"Nervos CKB"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set up an account in MetaMask.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Connect ",(0,r.kt)("a",{parentName:"p",href:"https://testnet.bridge.godwoken.io/#/v1/"},"Godwoken Bridge")," with the MetaMask wallet and switch the network to ",(0,r.kt)("strong",{parentName:"p"},"Godwoken Testnet v1.1"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Acquire CKB for your layer 1 wallet from ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.nervos.org/"},"CKB Testnet Faucet"),". The ",(0,r.kt)("strong",{parentName:"p"},"L1 Wallet address")," can be found on the Deposit page of Godwoken Bridge."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note:")," A deposit or a withdrawal requires at least 400 CKB."))),(0,r.kt)("h2",{id:"deposit-ckb-from-nervos-ckb-to-metamask"},"Deposit CKB from Nervos CKB to MetaMask"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," The minimum amount of a deposit from Nervos CKB layer 1 to MetaMask is 400 CKB."),(0,r.kt)("p",null,"To deposit CKB from Nervos CKB to MetaMask:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If Godwoken Bridge is connected to Godwoken V0, select ",(0,r.kt)("strong",{parentName:"p"},"Godwoken V1")," from the drop-down menu on the top right of the page.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Deposit page, enter the amount for the deposit, then click ",(0,r.kt)("strong",{parentName:"p"},"Deposit"),"."),(0,r.kt)("img",{src:(0,n.Z)("img/depo2lyr2.png"),width:"40%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Press ",(0,r.kt)("strong",{parentName:"p"},"Sign")," to authorize the transaction on the MetaMask popup to complete the deposit. "),(0,r.kt)("img",{src:(0,n.Z)("img/depositsign.png"),width:"40%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Refresh the page after a few minutes to check the changes in layer 1 and layer 2 account balances. "))),(0,r.kt)("h2",{id:"withdraw-assets-from-metamask-to-nervos-ckb"},"Withdraw Assets from MetaMask to Nervos CKB"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," The minimum amount of a withdrawal from MetaMask to Nervos CKB layer 1 is 400 CKB."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If Godwoken Bridge is connected to Godwoken V0, select ",(0,r.kt)("strong",{parentName:"p"},"Godwoken V1")," from the drop-down menu on the top right of the page.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the amount for the withdrawal on the Withdrawal page, then click ",(0,r.kt)("strong",{parentName:"p"},"Request Withdrawal"),"."),(0,r.kt)("img",{src:(0,n.Z)("img/withdrawalrequest01.png"),width:"40%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Confirm")," to complete the transaction."),(0,r.kt)("img",{src:(0,n.Z)("img/withdrawalconfirm01.png"),width:"40%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign the withdrawal."),(0,r.kt)("img",{src:(0,n.Z)("img/withdrawalsign01.png"),width:"40%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After successfully withdrawing assets, check the wallet to see the balance."))),(0,r.kt)("h2",{id:"withdraw-assets-from-godwoken-v0-to-godwoken-v1"},"Withdraw Assets from Godwoken V0 to Godwoken V1"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," The minimum amount of a withdrawal from Godwoken v0 to v1 is 650 CKB."),(0,r.kt)("p",null,"To withdraw assets from Godwoken v0 to Godwoken v1:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Godwoken V0")," from the drop-down menu on the top right of the page.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Withdrawal page, choose ",(0,r.kt)("strong",{parentName:"p"},"GodWoken V1")," as the withdrawal destination. "),(0,r.kt)("img",{src:(0,n.Z)("img/V0-V1.png"),width:"40%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the amount for the withdrawal and click ",(0,r.kt)("strong",{parentName:"p"},"Request Withdrawal"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Confirm")," to complete the transaction."),(0,r.kt)("img",{src:(0,n.Z)("img/withdrawalconfirm02.png"),width:"40%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign the withdrawal."),(0,r.kt)("img",{src:(0,n.Z)("img/withdrawalsign02.png"),width:"40%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After successfully withdrawing assets, check the wallet to see the balance."),(0,r.kt)("img",{src:(0,n.Z)("img/withdrawBalance.png"),width:"40%"}))))}k.isMDXComponent=!0}}]);