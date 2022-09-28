"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[4948],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),h=s(n),u=l,k=h["".concat(c,".").concat(u)]||h[u]||d[u]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=h;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));n(4996);const i={id:"gwScripts",title:"Scripts"},o=void 0,r={unversionedId:"gwScripts",id:"version-1.6(WIP)/gwScripts",title:"Scripts",description:"Godwoken scripts are written in Rust and C. Rust scripts run on the CKB to constrain the Rollup behavior, and C scripts run on Godwoken's nodes to provide layer-2 built-in contracts and programming interfaces.",source:"@site/versioned_docs/version-1.6(WIP)/gwScripts.md",sourceDirName:".",slug:"/gwScripts",permalink:"/gwScripts",draft:!1,tags:[],version:"1.6(WIP)",frontMatter:{id:"gwScripts",title:"Scripts"},sidebar:"sidebar2",previous:{title:"Godwoken Transaction",permalink:"/gwtxLife"},next:{title:"pCKB",permalink:"/pCKB"}},c={},s=[{value:"State Validator",id:"state-validator",level:3},{value:"Stake Lock",id:"stake-lock",level:3},{value:"Deposit Lock",id:"deposit-lock",level:3},{value:"Custodian Lock",id:"custodian-lock",level:3},{value:"Withdrawal Lock",id:"withdrawal-lock",level:3},{value:"Challenge Lock",id:"challenge-lock",level:3},{value:"Layer-2 Scripts",id:"layer-2-scripts",level:2},{value:"ETH Account Lock",id:"eth-account-lock",level:3},{value:"Meta Contract",id:"meta-contract",level:3},{value:"sUDT Contract",id:"sudt-contract",level:3},{value:"ETH Address Registry",id:"eth-address-registry",level:3},{value:"Polyjuice",id:"polyjuice",level:3}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Godwoken scripts are written in ",(0,l.kt)("em",{parentName:"p"},"Rust")," and ",(0,l.kt)("em",{parentName:"p"},"C"),". Rust scripts run on the CKB to constrain the Rollup behavior, and C scripts run on Godwoken's nodes to provide layer-2 built-in contracts and programming interfaces."),(0,l.kt)("p",null,"Rust scripts are built in the ",(0,l.kt)("inlineCode",{parentName:"p"},"contracts")," directory with the ",(0,l.kt)("inlineCode",{parentName:"p"},"capsule build")," command. C scripts are built in the ",(0,l.kt)("inlineCode",{parentName:"p"},"c")," directory with the ",(0,l.kt)("inlineCode",{parentName:"p"},"cd c && make")," command. All data structures use ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/molecule"},"molecule")," format for serialization, which is defined in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/develop/crates/types/schemas/godwoken.mol"},"godwoken.mol")," file. "),(0,l.kt)("p",null,"Further details about the Godwoken mechanism can be found at ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/develop/docs/life_of_a_godwoken_transaction.md"},"Life of a godwoken transaction")," and ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/develop/docs/life_of_a_polyjuice_transaction.md"},"Life of a polyjuice transaction"),"."),(0,l.kt)("h3",{id:"state-validator"},"State Validator"),(0,l.kt)("p",null,"State validator is the main script to verify the on-chain Rollup cell.\nThe Rollup cell is an identity cell on CKB which stores the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/develop/crates/types/schemas/godwoken.mol"},"GlobalState"),", a structure that represents the layer-2 state."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Rollup cell:\ndata: GlobalState,\ncapacity: <capacity>\nlock: <lock script>,\ntype: <state validator script>,\n")),(0,l.kt)("p",null,"To update the Rollup cell, we need to build a tx to consume the old cell and generate a new Rollup cell as the tx's output. We also need to provide a args in the tx's witness: ",(0,l.kt)("inlineCode",{parentName:"p"},"RollupAction"),", which is a structure that contains the layer-2 block and Merkle proof. The state validator will ensure the state transition of the Rollup cell is valid by verifying these proofs."),(0,l.kt)("p",null,"The rollup behaviors are defined as the enumerated type ",(0,l.kt)("inlineCode",{parentName:"p"},"RollupAction"),", which includes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"RollupSubmitBlock"),", which submits a layer-2 block."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The layer-2 transactions, deposits, and withdrawals are included in a layer-2 block structure. We won't verify the signatures of txs and withdrawals on-chain since we are using the optimistic mechanism."),(0,l.kt)("li",{parentName:"ul"},"Deposit cells are collected as inputs, and the action converts these deposit cells into custodian cells to complete the deposit."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"RollupEnterChallenge"),", which refers to a challenger submitting a challenging target(transaction or withdrawal) to halt the rollup.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"RollupCancelChallenge"),", an action that anyone can send to cancel a challenge. In this action, the challenging target(a tx or a withdrawal request) will run on the layer-1 chain to prove that the challenge in the previous step was wrong. After this action is implemented, the Rollup status will re-run.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"RollupRevert")," represents a challenge that is successfully initiated and not cancelled within the challenge time. This action reverts the layer-2 block state to the parent block of the challenged block, and the stake of the block producer will be penalized. Within this action, we only revert the layer-2 state, the reverting of layer-1 locked cells(deposit/custodian/withdrawal) is handled in the ",(0,l.kt)("inlineCode",{parentName:"p"},"RollupSubmitBlock")," action."))),(0,l.kt)("p",null,"Also, another important structure needed to be mentioned here is the ",(0,l.kt)("inlineCode",{parentName:"p"},"RollupConfig"),", where we define the consensus and initial Rollup settings in the cell."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"table RollupConfig {\n  l1_sudt_script_type_hash: Byte32,\n  custodian_script_type_hash: Byte32,\n  deposit_script_type_hash: Byte32,\n  withdrawal_script_type_hash: Byte32,\n  challenge_script_type_hash: Byte32,\n  stake_script_type_hash: Byte32,\n  l2_sudt_validator_script_type_hash: Byte32,\n  burn_lock_hash: Byte32,\n  required_staking_capacity: Uint64,\n  challenge_maturity_blocks: Uint64,\n  finality_blocks: Uint64,\n  reward_burn_rate: byte, // * reward_burn_rate / 100\n  chain_id: Uint64, // chain id\n  allowed_eoa_type_hashes: AllowedTypeHashVec, // list of script code_hash allowed an EOA(external owned account) to use\n  allowed_contract_type_hashes: AllowedTypeHashVec, // list of script code_hash allowed a contract account to use\n}\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"lock")," field of a Rollup cell has its own rules comparatively. We assumed in the initial design that everyone who stakes can submit to the Rollup. But during the preliminary phase, we want a more stable setup in which only the block producer can submit to the rollup."),(0,l.kt)("h3",{id:"stake-lock"},"Stake Lock"),(0,l.kt)("p",null,"A block producer has to provide a stake cell to perform the ",(0,l.kt)("inlineCode",{parentName:"p"},"RollupSubmitBlock")," action. ",(0,l.kt)("inlineCode",{parentName:"p"},"StakeLockArgs")," is the stake lock args. After submitting a layer-2 block, the ",(0,l.kt)("inlineCode",{parentName:"p"},"args.stake_block_number")," will be updated to the latest block number."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"struct StakeLockArgs {\n  owner_lock_hash: Byte32,\n  stake_block_number: Uint64,\n}\n")),(0,l.kt)("p",null,"There are two ways to unlock stake lock:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Unlocked by the submitter after the ",(0,l.kt)("inlineCode",{parentName:"li"},"args.stake_block_number")," block is finalized."),(0,l.kt)("li",{parentName:"ol"},"Unlocked by the challenger during the ",(0,l.kt)("inlineCode",{parentName:"li"},"RollupRevert")," action.")),(0,l.kt)("h3",{id:"deposit-lock"},"Deposit Lock"),(0,l.kt)("p",null,"A layer-1 user can join the Rollup by creating a deposit cell. Godwoken collects deposit cells from the layer-1 blockchain and puts them into the input of the tx which submits to a layer-2 block."),(0,l.kt)("p",null,"If the deposit is not processed by Godwoken, the sender can unlock a deposit cell after ",(0,l.kt)("inlineCode",{parentName:"p"},"cancel_timeout"),". "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"table DepositLockArgs {\n  // layer1 lock hash\n  owner_lock_hash: Byte32,\n  layer2_lock: Script,\n  cancel_timeout: Uint64,\n  registry_id: Uint32,\n}\n")),(0,l.kt)("h3",{id:"custodian-lock"},"Custodian Lock"),(0,l.kt)("p",null,"Our Rollup uses the custodian lock to hold the deposited assets. ",(0,l.kt)("inlineCode",{parentName:"p"},"CustodianLockArgs")," is the args of custodian lock, the field ",(0,l.kt)("inlineCode",{parentName:"p"},"deposit_block_number")," represents the block number that the deposit is processed. The ",(0,l.kt)("inlineCode",{parentName:"p"},"deposit_block_number")," also denotes whether the custodian lock is finalized or unfinalized."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"table CustodianLockArgs {\n    deposit_block_hash: Byte32,\n    deposit_block_number: Uint64,\n    // used for revert this cell to deposit request cell\n    // after finalize, this lock is meaningless\n    deposit_lock_args: DepositLockArgs,\n}\n\nstruct UnlockCustodianViaRevertWitness {\n    deposit_lock_hash: Byte32,\n}\n")),(0,l.kt)("p",null,"For unfinalized custodian cells, once the deposit block is reverted, these cells must also be reverted to the deposit cells.\nSince finalized custodian cells are finalized, we can free merge or split these cells."),(0,l.kt)("p",null,"When a withdrawal request is sent, Godwoken moves assets from finalized custodian cells to generate withdrawal cells."),(0,l.kt)("h3",{id:"withdrawal-lock"},"Withdrawal Lock"),(0,l.kt)("p",null,"Withdrawal cells are generated in the ",(0,l.kt)("inlineCode",{parentName:"p"},"RollupSubmitBlock")," action according to the ",(0,l.kt)("inlineCode",{parentName:"p"},"block.withdrawals")," field."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"struct WithdrawalLockArgs {\n    withdrawal_block_hash: Byte32,\n    withdrawal_block_number: Uint64,\n    account_script_hash: Byte32,\n    // layer1 lock to withdraw after challenge period\n    owner_lock_hash: Byte32,\n}\n\nunion UnlockWithdrawalWitness {\n    UnlockWithdrawalViaFinalize,\n    UnlockWithdrawalViaRevert,\n}\ntable UnlockWithdrawalViaFinalize {\n}\nstruct UnlockWithdrawalViaRevert {\n    custodian_lock_hash: Byte32,\n}\n")),(0,l.kt)("p",null,"The withdrawal lock has two unlock paths:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Unlock by withdrawer after the ",(0,l.kt)("inlineCode",{parentName:"li"},"WithdrawalLockArgs#withdrawal_block_number")," is finalized."),(0,l.kt)("li",{parentName:"ol"},"Unlock as a reverted cell in the ",(0,l.kt)("inlineCode",{parentName:"li"},"RollupSubmitBlock")," action, a corresponded custodian cell will be generated.")),(0,l.kt)("h3",{id:"challenge-lock"},"Challenge Lock"),(0,l.kt)("p",null,"When a Godwoken node finds an invalid state in the Rollup, it can send a ",(0,l.kt)("inlineCode",{parentName:"p"},"RollupEnterChallenge")," action to the Rollup cell and generates a challenging cell. A challenge cell must set a challenging target in its ",(0,l.kt)("inlineCode",{parentName:"p"},"ChallengeLockArgs")," lock args. The challenging target can be a layer-2 transaction or a withdrawal request."),(0,l.kt)("p",null,"If the challenging unit does not get cancelled when completed, the challenger can execute the ",(0,l.kt)("inlineCode",{parentName:"p"},"RollupRevert")," action on the Rollup cell and takes the stake cell sent by reverted block submitter as a reward."),(0,l.kt)("p",null,"If the challenging target is invalid, other nodes can cancel this challenge by executing the ",(0,l.kt)("inlineCode",{parentName:"p"},"RollupCancelChallenge")," action, and the challenging cell must be included in the tx.inputs."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The challenge lock verifies that the account script is in tx.inputs in order to verify the signature for a withdrawal target."),(0,l.kt)("li",{parentName:"ul"},"For a layer-2 transaction target, challenge lock reads the backend script code_hash from the state tree, then verifies if the backend validator script is in the tx.inputs.")),(0,l.kt)("h2",{id:"layer-2-scripts"},"Layer-2 Scripts"),(0,l.kt)("p",null,"The C scripts that located in the ",(0,l.kt)("inlineCode",{parentName:"p"},"c")," directory are Godwoken layer-2 scripts. The layer-2 script can be executed on CKB when a challenge occurs, which means that a layer-2 script is also a valid layer-1 script, only it follows the special interface convenience required by Godwoken."),(0,l.kt)("p",null,"Godwoken accounts consisted of the following fields: ",(0,l.kt)("inlineCode",{parentName:"p"},"(id: u32, nonce: u32, script: Script)"),". The ",(0,l.kt)("inlineCode",{parentName:"p"},"script")," field determines the script that the account used. "),(0,l.kt)("p",null,"Layer-2 scripts exist in two types: lock and contract. If an account ID appears in ",(0,l.kt)("inlineCode",{parentName:"p"},"l2tx.from_id"),", we will assume that the account's script is a lock, implying that the script follows the lock script interface convenience that can verify signatures(e.g., Ethereum EOA). If an account ID appears in ",(0,l.kt)("inlineCode",{parentName:"p"},"l2tx.to_id"),", we will assume that the account's script is a contract, which means we should execute the tx when it is sent to the account(like an Ethereum contract account)."),(0,l.kt)("p",null,"A layer-2 contract script is run both on and off-chain. The unified interface is defined in the ",(0,l.kt)("inlineCode",{parentName:"p"},"c/gw_def.h"),". The on-chain implementation is ",(0,l.kt)("inlineCode",{parentName:"p"},"validator_utils.h"),", and the off-chain implementation is ",(0,l.kt)("inlineCode",{parentName:"p"},"generator_utils.h"),"."),(0,l.kt)("h3",{id:"eth-account-lock"},"ETH Account Lock"),(0,l.kt)("p",null,"ETH Account Lock is a layer-2 lock script that verifies the layer-2 account signature."),(0,l.kt)("h3",{id:"meta-contract"},"Meta Contract"),(0,l.kt)("p",null,"Meta contract is a layer-2 contract script. A built-in layer-2 account allows creating another account by sending a tx to the account. Meta contract args is ",(0,l.kt)("inlineCode",{parentName:"p"},"MetaContractArgs"),", and the built-in contract id is ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,l.kt)("h3",{id:"sudt-contract"},"sUDT Contract"),(0,l.kt)("p",null,"sUDT contract is a layer-2 contract script that keeps a consistent mapping to the layer-1 sUDT. The layer-1 sUDT script hash is equal to ",(0,l.kt)("inlineCode",{parentName:"p"},"account.script.args"),". When the user deposits a new type of sUDT, Godwoken will create a new corresponding sUDT account. This contract args is ",(0,l.kt)("inlineCode",{parentName:"p"},"SUDTArgs"),", and the built-in CKB Simple UDT contract id is ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,l.kt)("h3",{id:"eth-address-registry"},"ETH Address Registry"),(0,l.kt)("p",null,"ETH address registry is a layer-2 contract that handles the mapping of Ethereum addresses to Godwoken accounts."),(0,l.kt)("p",null,"When a user deposits tokens to create a new account, a corresponding Ethereum address will be inserted into the contract. If the account is created through a Meta contract, the user must register the Ethereum address for the acount by calling the ETH address registry contract."),(0,l.kt)("p",null,"The built-in ETH address registry is allocated to id ",(0,l.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,l.kt)("h3",{id:"polyjuice"},(0,l.kt)("a",{parentName:"h3",href:"https://github.com/nervosnetwork/godwoken-polyjuice"},"Polyjuice")),(0,l.kt)("p",null,"Polyjuice is a backend of Godwoken for state computation. The C scripts are in the ",(0,l.kt)("inlineCode",{parentName:"p"},"c")," directory and are built using the command ",(0,l.kt)("inlineCode",{parentName:"p"},"make all-via-docker"),". All tests run with the command ",(0,l.kt)("inlineCode",{parentName:"p"},"bash devtools/ci/integration-test.sh"),"."),(0,l.kt)("p",null,"Polyjuice backend accepts an Ethrereum-like transaction and executes it in the EVM. The Ethereum ",(0,l.kt)("a",{parentName:"p",href:"https://eth.wiki/json-rpc/API#eth_sendtransaction"},"transaction structure")," is as follows:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"(from, to, gas, gasPrice, value, data)")),(0,l.kt)("p",null,"With polyjuice, ",(0,l.kt)("inlineCode",{parentName:"p"},"from")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"to")," are included in RawL2Transaction (",(0,l.kt)("inlineCode",{parentName:"p"},"from_id"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"to_id"),") directly. ",(0,l.kt)("inlineCode",{parentName:"p"},"call_kind"),"(CREATE/CALL), ",(0,l.kt)("inlineCode",{parentName:"p"},"gas"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"gasPrice"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," are included in ",(0,l.kt)("inlineCode",{parentName:"p"},"RawL2Transaction.args"),"."),(0,l.kt)("hr",null),(0,l.kt)("p",null,"For more information about Godwoken scripts, refer to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-scripts"},"godwoken-scripts"),"."))}d.isMDXComponent=!0}}]);