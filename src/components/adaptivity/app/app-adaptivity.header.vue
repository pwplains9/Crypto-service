<script setup>
import { ref, onMounted } from 'vue'
import { IconLogo, IconMenu } from '~/components/icons'
import { AppMenu } from '~/components/adaptivity'

import { useStore } from '~/stores/stores.main'
import { storeToRefs } from 'pinia'

const store = useStore()
const { isAuthorized } = storeToRefs(store)

const disconnect = () => {
  store.$patch({ private_key: null, public_address: null })
}

const menu_state = ref(false)
const blur_state = ref(false)

const scroll_handle = () => {
  blur_state.value = document.documentElement.scrollTop > 0
}

onMounted(() => {
  document.addEventListener('scroll', scroll_handle)
  return () => {
    document.removeEventListener('scroll', scroll_handle)
  }
})
</script>

<template>
  <header
    class="header"
    :class="{ 'header-blurred': blur_state && !menu_state }">
    <icon-wrapper width="74" height="20">
      <icon-logo />
    </icon-wrapper>
    <button class="header__disconnect" v-if="isAuthorized" @click="disconnect">
      Disconnect
    </button>
    <icon-wrapper @click="menu_state = !menu_state" width="24" height="16">
      <icon-menu />
    </icon-wrapper>
  </header>
  <transition name="menu">
    <app-menu v-if="menu_state" />
  </transition>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @include tg-14-semi;
  z-index: $z-level-3 + 1;
  width: 100%;
  left: 0;
  top: 0;
  transition: $t background-color, $t backdrop-filter;
  &-blurred {
    background-color: var(--header-background);
    backdrop-filter: $primary-blur;
  }

  &__disconnect {
    @include lg {
      margin-left: -1.7rem;
      font-size: 1.4rem;
      line-height: 2rem;
      letter-spacing: 0.02em;
    }
  }
}

.menu {
  &-enter-active,
  &-leave-active {
    transition: transform $t;
  }
  &-enter-from,
  &-leave-to {
    transform: translateX(100%);
  }
}
</style>
