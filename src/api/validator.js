import axios from 'axios'

export const VALIDATOR_URL = 'http://88.150.156.196:26657'

export function get_all_tokens() {
  return axios.get(
    `${VALIDATOR_URL}/abci_query?data=\"{\\\"selector\\\":{\\\"documentType\\\":\\\"token\\\"}}\"`
  )
}

export function get_account_nonce(address) {
  return axios.get(
    `${VALIDATOR_URL}/abci_query?data=\"{\\\"selector\\\":{\\\"documentType\\\":\\\"address\\\",\\\"_id\\\":\\\"address-${address}\\\"}}\"`
  )
}

export function transfer_token(name, amount, to, from, nonce, signature) {
  return axios.get(
    `${VALIDATOR_URL}/broadcast_tx_commit?tx=\"{\\\"data\\\":{\\\"amount\\\":\\\"${amount}\\\",\\\"name\\\":\\\"${name}\\\",\\\"to\\\":\\\"${to}\\\"},\\\"from\\\":\\\"${from}\\\",\\\"nonce\\\":${nonce},\\\"operation\\\":\\\"transferToken\\\",\\\"signature\\\":\\\"${signature}\\\"}\"`
  )
}

export function transaction_history(address) {
  return axios.get(
    `${VALIDATOR_URL}/tx_search?query=\"transaction.participant='${address}'\"`
  )
}
