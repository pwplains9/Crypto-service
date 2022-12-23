<script setup>
import { IconLogo } from '../icons'
import { ElementThemeSwitcher } from '../element'
import { injectModal } from '~/core/modal/inject-modal'
import { storeToRefs } from 'pinia'
import { useStore } from '~/stores/stores.main'
const { setState: setStateAgreement } = injectModal('transactions-modal')

const store = useStore()
const { isAuthorized } = storeToRefs(store)

const disconnect = () => {
  store.$patch({ private_key: null, public_address: null })
}
</script>

<template>
  <header class="container header">
    <router-link to="/">
      <icon-wrapper class="header__logo" width="74" height="20">
        <icon-logo />
      </icon-wrapper>
    </router-link>
    <nav class="header__nav">
      <router-link class="header__link" to="/">
        <span>Home</span>
      </router-link>
      <button class="header__link" @click="setStateAgreement(true)">
        <span> Transactions </span>
      </button>
      <router-link class="header__link" to="/explorer">
        <span>Explorer</span>
      </router-link>
    </nav>
    <element-theme-switcher class="header__switcher" />
    <div class="language"></div>
    <button class="header__link" @click="disconnect" v-if="isAuthorized">
      Disconnect
    </button>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  //justify-content: space-between;
  padding: 1.6rem 12rem;
  padding-top: 2.6rem;
  &__logo {
    margin-right: 16.7rem;
  }
  &__nav {
    display: flex;
    align-items: center;
    gap: 0 8rem;
    @include tg-14-medium;
  }
  &__switcher {
    margin-left: 8rem;
  }

  &__link {
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: 0.02em;
  }

  @include lg {
    justify-content: space-between;
  }
}
.language {
  width: 13.1rem;
  margin: 0 8rem;
}
</style>
