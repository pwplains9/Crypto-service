import { useStore } from '~/stores/stores.main'
import { generate_wallet } from '~/core/eth'
import { ref, computed } from 'vue'
import { ethers } from 'ethers'

export function useWallet() {
  const store = useStore()
  const private_key_model = ref('')

  const generate_new = () => {
    const { wallet, private_key } = generate_wallet()
    store.$patch({ private_key, public_address: wallet.address, wallet })
    console.log('wallet', private_key, wallet.address)
  }

  const connect = () => {
    const wallet = new ethers.Wallet(private_key_model.value)
    const public_address = wallet.address
    store.$patch({
      private_key: private_key_model.value,
      public_address,
      wallet,
    })
  }

  const validation_private_key = computed(
    () => private_key_model.value.length === 64
  )

  return {
    generate_new,
    connect,
    private_key_model,
    validation_private_key,
  }
}
