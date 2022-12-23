import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    /**
     * @type {string}
     */
    private_key: null,
    /**
     * @type {string}
     */
    public_address: null,
    /**
     * @type {import('ethers').Wallet}
     */
    wallet: null,
  }),
  getters: {
    isAuthorized: (state) =>
      state.private_key !== null &&
      state.public_address !== null &&
      state.wallet !== null,
  },
})
