// OK, here is the code snippet, after connecting to Metamask (or some other Web3 wallet):

// -----------
// const data = abs;

// const accounts = await globalThis.ethereum.request({
//     method: 'eth_requestAccounts'
// });

// const sign = await globalThis.ethereum.request({
//     method: 'personal_sign',
//     params: [${data}, accounts[0], 'Signature for Transaction'],
// });

//   console.log(sign)

// -----------------

// And here is the code snippet for browser javascript directly:

// ---------------

// const utils = require("ethereumjs-util")

// const message = "abc"
// const key = "0x6339f174f09040e15a5b85412b073648b7ecd4d8f9b8db3a85a7f30fab58d62a"
// let hash = utils.hashPersonalMessage(Buffer.from(message))
// let signature = utils.ecsign(hash, utils.toBuffer(key))
// console.log(utils.toRpcSig(signature.v, signature.r, signature.s))

// --------------------

// Obviously replace key with user's key above!

// The message format is given in the API docs.
