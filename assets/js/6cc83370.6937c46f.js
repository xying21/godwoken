"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[3665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9256:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));n(4996);const o={id:"comparisonEVM",title:"Comparison with EVM"},i=void 0,l={unversionedId:"comparisonEVM",id:"version-0.10.4/comparisonEVM",title:"Comparison with EVM",description:"",source:"@site/versioned_docs/version-0.10.4/comparisonEVM.md",sourceDirName:".",slug:"/comparisonEVM",permalink:"/0.10.4/comparisonEVM",draft:!1,tags:[],version:"0.10.4",frontMatter:{id:"comparisonEVM",title:"Comparison with EVM"},sidebar:"sidebar2",previous:{title:"Decentralization Roadmap",permalink:"/0.10.4/decentralizationRoadmap"},next:{title:"Deployment",permalink:"/0.10.4/deployment"}},s={},c=[{value:"pETH",id:"peth",level:2},{value:"Account Abstraction",id:"account-abstraction",level:2},{value:"Different Address Types",id:"different-address-types",level:3},{value:"Transaction Structure",id:"transaction-structure",level:2},{value:"Behavioral Differences of Some Opcodes",id:"behavioral-differences-of-some-opcodes",level:2},{value:"Addition Features",id:"addition-features",level:2},{value:"<code>recover_account</code> Spec",id:"recover_account-spec",level:3},{value:"<code>balance_of_any_sudt</code> Spec",id:"balance_of_any_sudt-spec",level:3},{value:"<code>transfer_to_any_sudt</code> Spec",id:"transfer_to_any_sudt-spec",level:3},{value:"<code>eth_to_godwoken_addr</code> Spec",id:"eth_to_godwoken_addr-spec",level:3},{value:"Others",id:"others",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Godwoken targets 100% EVM compatibility, the plan is to back every smart contract that the latest Ethereum hard fork version supports. But there are certain things that are incompatible with EVM in the current version."),(0,r.kt)("h2",{id:"peth"},"pETH"),(0,r.kt)("p",null,"Godwoken introduced a new concept called pETH."),(0,r.kt)("p",null,"In Ethereum, the gas for each smart contract is derived by calculation, then calculating the transaction fee by multiplying the gas with a specified gas price. In Godwoken, however, pETH comes in as the unit for calculating transaction fees. In other words, the price of gas in Ethereum is ETH/gas ( denominated in wei, i. e. 1e-18 ether), while that of Godwoken is measured in pETH/gas.  When executing a transaction, Godwoken deducts the transaction fee by using tokens with the layer 2 sUDT type denoted by pETH. "),(0,r.kt)("h2",{id:"account-abstraction"},"Account Abstraction"),(0,r.kt)("p",null,"Godwoken only provides ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum.org/en/glossary/#contract-account"},"contract accounts"),", and the user accounts of Godwoken serve as ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum.org/en/glossary/#eoa"},"EoAs"),"."),(0,r.kt)("h3",{id:"different-address-types"},"Different Address Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All eth_address(EoA/contract) format are ",(0,r.kt)("inlineCode",{parentName:"li"},"short_godwoken_account_script_hash"),", which is the 20 bytes prefix of Godwoken account script hash."),(0,r.kt)("li",{parentName:"ul"},"Creating a contract account returns ",(0,r.kt)("inlineCode",{parentName:"li"},"short_godwoken_account_script_hash"))),(0,r.kt)("p",null,"When passing some parameters of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/v0.8.9/types.html#address"},"address-type")," to call smart-contract, the ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," conversion has to be done beforehand, and vice versa to return the ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," value. Polyjuice-Provider is designed to handle these conversion tasks. It conducts ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," type conversions based on the ABI of the contract."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Unfortunately, we are not yet able to display assets directly on metamask or other Ethereum wallets. We currently use a single web app to display users' assets. This wallet display issue will be resolved in future updates.")),(0,r.kt)("h2",{id:"transaction-structure"},"Transaction Structure"),(0,r.kt)("p",null,"A Polyjuice transaction is essentially a Godwoken transaction."),(0,r.kt)("p",null,"When sending an Ethereum transaction, the transaction gets converted to a Godwoken ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/9a3d92/crates/types/schemas/godwoken.mol#L56-L61"},"RawL2Transaction")," type, which is automatically processed by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/polyjuice-provider"},"Polyjuice-Provider"),"."),(0,r.kt)("h2",{id:"behavioral-differences-of-some-opcodes"},"Behavioral Differences of Some Opcodes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"EVM Opcode"),(0,r.kt)("th",{parentName:"tr",align:null},"Solidity Usage"),(0,r.kt)("th",{parentName:"tr",align:null},"Behavior in Polyjuice"),(0,r.kt)("th",{parentName:"tr",align:null},"Behavior in EVM"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"COINBASE"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block.coinbase")),(0,r.kt)("td",{parentName:"tr",align:null},"address of the block_producer"),(0,r.kt)("td",{parentName:"tr",align:null},"address of the current block's miner")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CHAINID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chain_id()")),(0,r.kt)("td",{parentName:"tr",align:null},"creator_account_id"),(0,r.kt)("td",{parentName:"tr",align:null},"Istanbul hardfork, EIP-1344: current network's chain id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GASLIMIT"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block.gaslimit")),(0,r.kt)("td",{parentName:"tr",align:null},"12,500,000"),(0,r.kt)("td",{parentName:"tr",align:null},"current block's gas limit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DIFFICULTY"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block.difficulty")),(0,r.kt)("td",{parentName:"tr",align:null},"2,500,000,000,000,000"),(0,r.kt)("td",{parentName:"tr",align:null},"current block's difficulty")))),(0,r.kt)("h2",{id:"addition-features"},"Addition Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"pre-compiled contract",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"recover_account")," for recover any supported signature"),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"balance_of_any_sudt")," for query the balance of any sudt_id account"),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"transfer_to_any_sudt")," for transfer value by sudt_id (Must collaborate with SudtErc20Proxy.sol contract)"),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"eth_to_godwoken_addr")," for convert ETH address to polyjuice contract address (godwoken short address)")))),(0,r.kt)("h3",{id:"recover_account-spec"},(0,r.kt)("inlineCode",{parentName:"h3"},"recover_account")," Spec"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  Recover an EoA account script hash by signature\n\n  input: (the input data is from abi.encode(mesage, signature, code_hash))\n  ======\n    input[ 0..32]  => message\n    input[32..64]  => offset of signature part\n    input[64..96]  => code_hash (EoA lock hash)\n    input[96..128] => length of signature data\n    input[128..]   => signature data\n\n  output (32 bytes):\n  =======\n    output[0..32] => account script hash\n")),(0,r.kt)("p",null,"See: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-polyjuice/blob/docs-evm-compatibility/polyjuice-tests/src/test_cases/evm-contracts/RecoverAccount.sol"},"Example")),(0,r.kt)("h3",{id:"balance_of_any_sudt-spec"},(0,r.kt)("inlineCode",{parentName:"h3"},"balance_of_any_sudt")," Spec"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  Query the balance of `account_id` of `sudt_id` token.\n\n   input:\n   ======\n     input[ 0..32] => sudt_id (big endian)\n     input[32..64] => address (short_address)\n\n   output:\n   =======\n     output[0..32] => amount\n")),(0,r.kt)("p",null,"See: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-polyjuice/blob/docs-evm-compatibility/solidity/erc20/SudtERC20Proxy.sol"},"Example")),(0,r.kt)("h3",{id:"transfer_to_any_sudt-spec"},(0,r.kt)("inlineCode",{parentName:"h3"},"transfer_to_any_sudt")," Spec"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  Transfer `sudt_id` token from `from_id` to `to_id` with `amount` balance.\n\n  NOTE: This pre-compiled contract need caller to check permission of `from_id`,\n  currently only `solidity/erc20/SudtERC20Proxy.sol` is allowed to call this contract.\n\n   input:\n   ======\n     input[ 0..32 ] => sudt_id (big endian)\n     input[32..64 ] => from_addr (short address)\n     input[64..96 ] => to_addr (short address)\n     input[96..128] => amount (big endian)\n\n   output: []\n")),(0,r.kt)("p",null,"See: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-polyjuice/blob/docs-evm-compatibility/solidity/erc20/SudtERC20Proxy.sol"},"Example")),(0,r.kt)("h3",{id:"eth_to_godwoken_addr-spec"},(0,r.kt)("inlineCode",{parentName:"h3"},"eth_to_godwoken_addr")," Spec"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," Calculate godwoken short address of an contract account by it's corresponding ETH address\n\n input:\n ======\n   input[12..32] => ETH address\n\n output:\n   output[12..32] => godwoken short address\n")),(0,r.kt)("p",null,"See: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-polyjuice/blob/docs-evm-compatibility/polyjuice-tests/src/test_cases/evm-contracts/EthToGodwokenAddr.sol"},"Example")),(0,r.kt)("h3",{id:"others"},"Others"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"transaction context",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"chain_id is ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/blob/5735d8f/docs/life_of_a_polyjuice_transaction.md#root-account--deployment"},"creator_account_id")),(0,r.kt)("li",{parentName:"ul"},"block gas limit is ",(0,r.kt)("inlineCode",{parentName:"li"},"12500000"),", and is not block level limit, every transaction can reach the limit"),(0,r.kt)("li",{parentName:"ul"},"block difficulty is always ",(0,r.kt)("inlineCode",{parentName:"li"},"2500000000000000")))),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"transfer value")," can not exceed uint128:MAX"),(0,r.kt)("li",{parentName:"ul"},"pre-compiled contract",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bn256_pairing")," is not supported yet\uff0cdue to too high cycle cost (WIP)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-polyjuice/blob/docs-evm-compatibility/docs/Addition-Features.md"},"addition pre-compiled contracts"))))))}p.isMDXComponent=!0}}]);