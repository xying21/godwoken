"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[4999],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var n=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),h=s(a),u=o,m=h["".concat(p,".").concat(u)]||h[u]||c[u]||r;return a?n.createElement(m,l(l({ref:e},d),{},{components:a})):n.createElement(m,l({ref:e},d))}));function u(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,l=new Array(r);l[0]=h;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9030:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));a(4996);const r={id:"deposit_withdrawal",title:"Deposit & Withdraw CKB on Godwoken"},l=void 0,i={unversionedId:"deposit_withdrawal",id:"deposit_withdrawal",title:"Deposit & Withdraw CKB on Godwoken",description:"For deposit and withdrawal operations on Godwoken, two options are available:",source:"@site/docs/bridge.md",sourceDirName:".",slug:"/deposit_withdrawal",permalink:"/next/deposit_withdrawal",draft:!1,tags:[],version:"current",frontMatter:{id:"deposit_withdrawal",title:"Deposit & Withdraw CKB on Godwoken"}},p={},s=[{value:"Using GW-tools to Deposit",id:"using-gw-tools-to-deposit",level:2},{value:"<code>gw-tool deposit</code> Subcommands",id:"gw-tool-deposit-subcommands",level:3},{value:"Using GW-tools to Withdraw",id:"using-gw-tools-to-withdraw",level:2},{value:"<code>gw-tool withdraw</code> Subcommands",id:"gw-tool-withdraw-subcommands",level:3},{value:"<strong>Unlocking</strong> the Funds to Complete Withdrawal Process",id:"unlocking-the-funds-to-complete-withdrawal-process",level:2},{value:"<code>account-cli unlock</code> Subcommands",id:"account-cli-unlock-subcommands",level:3},{value:"Code Example",id:"code-example",level:2}],d={toc:s};function c(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For deposit and withdrawal operations on Godwoken, two options are available:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Using a UI deposit or withdrawal provided by ",(0,o.kt)("a",{parentName:"li",href:"https://testnet.yokaiswap.com/bridge/deposit"},"yokaiswap")," to perform the relevant actions."),(0,o.kt)("li",{parentName:"ol"},"Using ",(0,o.kt)("inlineCode",{parentName:"li"},"gw-tools")," deposit or withdrawal to perform the relevant actions, and the unlocking operation so as to complete the withdrawal process.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"using-gw-tools-to-deposit"},"Using GW-tools to Deposit"),(0,o.kt)("p",null,"To ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit")," CKBs onto Layer 2, user need to execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"gw-tools")," deposit command in the command line. If the user applied the quick mode with godwoken-kicker, which already has a deposit function, the user can carry out the deposit operation directly on http://localhost:6100/ ."),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," to view the available commands, and replace the variables with the values matching one's own account and information. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cargo run --bin gw-tools -- deposit-ckb --help\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Click to view detailed output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gw-tools-deposit-ckb\nDeposit CKB to godwoken\n\nUSAGE:\n     gw-tools deposit-ckb [OPTIONS] --capacity <capacity> --config-path <config-path>  --privkey-path <privkey-path>  --scripts-deployment-path <scripts-deployment-path>\n\nFLAGS:\n     -h, --help             Prints help informaiton\n     -V, --version              Prints version information\n\nOPTIONS:\n     -c, --capacity <capacity>      CKB capacity to deposit\n         --ckb-rpc <ckb-rpc-url>        CKB jsonrpc rpc server URL [default: http://127.0.0.1:8114]\n\n     -o, --config-path <config-path>    The config.homl file path\n     -e, --eth-address <eth-address>    Target eth address, calculated by private key in default\n     -f, --fee <fee>            Transaction fee, default to 0.0001 CKB [default: 0.0001]\n     -g, --godwoken-rpc-url <godwoken-rpc-url>\n                        Godwoken jsonrpc rpc sever URL [default: http://127.0.0.1:8119]\n\n     -k, --privkey-path <privkey-path>  The private key file path\n         --scripts-deployment-path <scripts-deployment-path>    \n                        The scripts deployment results json file path\n\n"))),(0,o.kt)("p",null,"For more information on the CKB RPC, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb/wiki/Chains"},"CKB Wiki")),(0,o.kt)("h3",{id:"gw-tool-deposit-subcommands"},(0,o.kt)("code",null,"gw-tool deposit")," Subcommands"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"command"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"capacity"),(0,o.kt)("td",{parentName:"tr",align:null},"The amount of CKB to deposit (Unit is CKB).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ckb-rpc"),(0,o.kt)("td",{parentName:"tr",align:null},"CKB node URL, defaults to ",(0,o.kt)("a",{parentName:"td",href:"http://127.0.0.1:8114/"},"http://127.0.0.1:8114/"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"config-path"),(0,o.kt)("td",{parentName:"tr",align:null},"The config.toml file required for godwoken to run")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"eth-address"),(0,o.kt)("td",{parentName:"tr",align:null},"Target eth address to deposit")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"fee"),(0,o.kt)("td",{parentName:"tr",align:null},"The transaction fee, this is a CKB transaction and the default rate is 0.0001 CKB.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"godwoken-rpc-url"),(0,o.kt)("td",{parentName:"tr",align:null},"The RPC address of Godwoken, by default ",(0,o.kt)("a",{parentName:"td",href:"http://127.0.0.1:8119/"},"http://127.0.0.1:8119/"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"privkey-path"),(0,o.kt)("td",{parentName:"tr",align:null},"A file written with the private key (hex string) which is used to pay the deposit fee.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"scripts-deployment-path"),(0,o.kt)("td",{parentName:"tr",align:null},"The JSON file path of the ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken-public/blob/master/testnet/config/scripts-deploy-result.json"},"script's deployment results"),".")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"using-gw-tools-to-withdraw"},"Using GW-tools to Withdraw"),(0,o.kt)("p",null,"There are ",(0,o.kt)("strong",{parentName:"p"},"two steps")," to withdraw assets from layer 2 to layer 1 on Godwoken, the first step is to make a withdrawal request. In comparison to deposits, withdrawals require more time. When a withdrawal is made to layer 1, the withdrawal depends on layer 2, but layer 2 has a lower level of security and for this reason, more confirmations will be required to ensure that security remains reliable.  From the time the withdrawal is made, it takes approximately 5 days until the amount of funds is actually released at layer 1."),(0,o.kt)("p",null,"To ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw")," funds from layer 2 to layer 1, execute the following ",(0,o.kt)("inlineCode",{parentName:"p"},"gw-tools")," withdraw command, replace the variables with the values needed:"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," to view the available commands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cargo run --bin gw-tools -- withdraw --help\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Click to view detailed output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gw-tools-withdraw\nwithdraw CKB / sUDT from godwoken\n\nUSAGE:\n     gw-tools withdraw [OPTIONS] --capacity <capacity> --config-path <config-path> --owner-ckb-address <owner-ckb-address> --privkey-path <privkey-path>  --scripts-deployment-path <scripts-deployment-path>\n\nFLAGS:\n     -h, --help             Prints help informaiton\n     -V, --version              Prints version information\n\nOPTIONS:\n     -m, --amount <amount>       sUDT amount to withdrawal [default: 0]\n     -c, --capacity <capacity>      CKB capacity to withdrawal\n     -o, --config-path <config-path>    The config.homl file path\n     -g, --godwoken-rpc-url <godwoken-rpc-url>\n                        Godwoken jsonrpc rpc sever URL [default: http://127.0.0.1:8119]\n\n     -a, --owner-ckb-address <owner-ckb-address>    owner ckb address (to)\n     -k, --privkey-path <privkey-path>  The private key file path\n         --scripts-deployment-path <scripts-deployment-path>    \n                        The scripts deployment results json file path\n\n         -sudt-script-hash <sudt-script-hash>   l1 sudt script hash, default for withdrawal CKB [default: 0x0000000000000000000000000000000000000000000000000000000000000000]\n\n"))),(0,o.kt)("p",null,"For more information on ",(0,o.kt)("inlineCode",{parentName:"p"},"Godwoken RPC"),", refer to ",(0,o.kt)("a",{parentName:"p",href:"/#godwoken-public-networks"},"Godwoken Public Network"),"."),(0,o.kt)("h3",{id:"gw-tool-withdraw-subcommands"},(0,o.kt)("code",null,"gw-tool withdraw")," Subcommands"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"command"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"amount"),(0,o.kt)("td",{parentName:"tr",align:null},"The amount of sUDT")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"capacity"),(0,o.kt)("td",{parentName:"tr",align:null},"The amount of CKB to withdraw, the unit is CKB.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"config-path"),(0,o.kt)("td",{parentName:"tr",align:null},"The config.toml file required for godwoken to run.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"godwoken-rpc-url"),(0,o.kt)("td",{parentName:"tr",align:null},"The RPC address of Godwoken, by default ",(0,o.kt)("a",{parentName:"td",href:"http://127.0.0.1:8119/"},"http://127.0.0.1:8119/"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"owner-ckb-address"),(0,o.kt)("td",{parentName:"tr",align:null},"The CKB address of the recipient.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"privkey-path"),(0,o.kt)("td",{parentName:"tr",align:null},"A file written with the private key (hex string) which is used to pay the deposit fee.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"scripts-deployment-path"),(0,o.kt)("td",{parentName:"tr",align:null},"The JSON file path of the ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken-public/blob/master/testnet/config/scripts-deploy-result.json"},"script's deployment results"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sudt-script-hash"),(0,o.kt)("td",{parentName:"tr",align:null},"The script hash of sUDT on layer 1, defaults to 0x0000000000000000000000000000000000000000000000000000, indicating only CKB is redeemed (amount left unfilled or filled with 0).")))),(0,o.kt)("h2",{id:"unlocking-the-funds-to-complete-withdrawal-process"},(0,o.kt)("strong",{parentName:"h2"},"Unlocking")," the Funds to Complete Withdrawal Process"),(0,o.kt)("p",null,"Withdrawing funds from Godwoken is a ",(0,o.kt)("strong",{parentName:"p"},"two-step")," process. Step one initiates the withdrawal and step two releases the funds. Godwoken uses an optimistic rollup architecture that permits only one honest node in the network. All this provides a very secure foundation for Layer 2, but comes at the cost of a ",(0,o.kt)("strong",{parentName:"p"},"5-day")," 'challenge period' when exiting from Layer 2. This is a period where the Layer 2 network operator gets time to examine and flag up any potential problems with malicious transactions and roll back if necessary. The five-day challenge period will begin once the withdrawal process has commenced. The five-day time interval is a bit long but necessary. "),(0,o.kt)("p",null,"To ",(0,o.kt)("inlineCode",{parentName:"p"},"unlock")," the withdrawal cells to normal ckb cells and to perform common Layer2 actions, the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-examples/tree/develop/packages/tools"},(0,o.kt)("inlineCode",{parentName:"a"},"account-cli tool"))," will be applied. "),(0,o.kt)("p",null,"Execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"account-cli tool")," unlock command:"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," to view the available commands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# devnet\nexport LUMOS_CONFIG_FILE=./kicker-lumos-config.json node ./packages/tools/lib/account-cli.js unlock --help\n\n# testnet\nexport LUMOS_CONFIG_NAME="AGGRON4" node ./packages/tools/lib/account-cli.js unlock --help\n\n# mainnet\nexport LUMOS_CONFIG_NAME="LINA" node ./packages/tools/lib/account-cli.js unlock --help\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Click to view detailed output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'LUMOS_CONFIG_FILE=./kicker-lumos-config.json node ./packages/tools/lib/account-cli.js unlock --help\nUsage: account-cli unlock [options]\n\nunlock withdrawal CKB / sUDT from godwoken\n\nOptions:\n  -p, --private-key <privatekey>            private key to use\n  -s, --sudt-script-args <l1 sudt script args>      only for unlock sudt\n  -r, --rpc <rpc>           ckb rpc path (default: "http://127.0.0.1:8114")\n  -d, --indexer-path <path>             indexer path (default: "./indexer-data-path/<ckb genesis hash>")\n  -h, --help            display help for command\n'))),(0,o.kt)("p",null,"Note: The private key you pass to ",(0,o.kt)("inlineCode",{parentName:"p"},"unlock")," command needs to be the same as the one that corresponds with the Layer 1 address that was previously used with the ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit"),"."),(0,o.kt)("h3",{id:"account-cli-unlock-subcommands"},(0,o.kt)("code",null,"account-cli unlock")," Subcommands"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"command"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LUMOS_CONFIG_FILE"),(0,o.kt)("td",{parentName:"tr",align:null},"The environment variable, filled with the lumos config json file path, or simply the name if it is on the testnet / mainnet")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"private-key"),(0,o.kt)("td",{parentName:"tr",align:null},"The private key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sudt-script-args"),(0,o.kt)("td",{parentName:"tr",align:null},"Layer1 sudt script args, or sudt token")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"rpc"),(0,o.kt)("td",{parentName:"tr",align:null},"The rpc address of CKB, with a default value")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"indexer-path"),(0,o.kt)("td",{parentName:"tr",align:null},"The path of Lumos indexer, with a default value, no need to fill in generally")))),(0,o.kt)("p",null,"For more information on ",(0,o.kt)("inlineCode",{parentName:"p"},"Lumos"),", please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos"},"https://github.com/nervosnetwork/lumos")," . "),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)("p",null,"For developers who need additional code details, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/classicalliu/gw-demos"},"gw-demos")," for more detailed examples."))}c.isMDXComponent=!0}}]);