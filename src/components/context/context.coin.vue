<script setup>
import {
  CryptoEthereum,
  CryptoBitcoin,
  CryptoCardano,
  CryptoHuobi,
  CryptoMetamask,
  CryptoPhantom,
  CryptoSolana,
  CryptoTether,
  CryptoUsdt,
} from '../icons'
import {CommonCheckbox} from '~/components/common'
import {ContextTemplate} from '.'
import {markRaw, ref} from 'vue'

const create_crypto = (id, name, icon) => {
  return {
    id,
    name,
    icon,
    state: false,
  }
}
const coins = ref([
  create_crypto('ethereum', 'Ethereum', markRaw(CryptoEthereum)),
  create_crypto('bitcoin', 'Bitcoin', markRaw(CryptoBitcoin)),
  create_crypto('cardano', 'Cardano', markRaw(CryptoCardano)),
  // create_crypto('huobi', 'Huobi', markRaw(CryptHuobi)),
  // create_crypto('metamask', 'Metamask', markRaw(CryptMetamask)),
  // create_crypto('phantom', 'Phantom', markRaw(CryptPhantom)),
  // create_crypto('solana', 'Solana', markRaw(CryptSolana)),
  // create_crypto('tether', 'Tether', markRaw(CryptTether)),
  // create_crypto('usdt', 'USDT', markRaw(CryptUsdt)),
])
</script>

<template>
  <context-template>
    <div
      :class="coin.state ? 'is-active field' : 'field'"
      v-for="coin of coins"
      :key="coin.id">
      <common-checkbox v-model="coin.state"/>
      <icon-wrapper width="16" height="16">
        <component :is="coin.icon"/>
      </icon-wrapper>
      <span>{{ coin.name }}</span>
    </div>
  </context-template>
</template>

<style scoped lang="scss">
.field {
  display: flex;
  align-items: center;
  gap: 0 0.8rem;
  padding: 1.5rem 1.5rem 0;
  user-select: none;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;

  span {
    opacity: 0.6;
  }

  &.is-active {
    span {
      opacity: 1;
    }
  }

  &:last-child {
    padding-bottom: 1.5rem;
  }
}
</style>
