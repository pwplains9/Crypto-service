import { ethers, utils } from 'ethers'

export function toHexString(byteArray) {
  return Array.from(byteArray, function (byte) {
    return ('0' + (byte & 0xff).toString(16)).slice(-2)
  }).join('')
}

export function generate_wallet() {
  const private_key = toHexString(utils.randomBytes(32))
  const wallet = new ethers.Wallet(private_key)
  return {
    private_key,
    wallet,
  }
}
