<script setup>
import { AppHeader, AppFooter } from '~/components/app'
import { provideModal } from '~/core/modal/provide-modal'
import { PlateTransactions } from '~/components/modal/plates'
import { ProviderAdaptivity } from '~/components/provider'
import {
  AppAdaptivityHeader,
  AppAdaptivityFooter,
} from '~/components/adaptivity'
import { BREAKPOINT_LG } from '~/utils/constants'
provideModal('transactions-modal')
</script>

<template>
  <div class="layout">
    <provider-adaptivity
      :desktop-version="AppHeader"
      :mobile-version="AppAdaptivityHeader"
      :breakpoint="BREAKPOINT_LG" />
    <slot />
    <provider-adaptivity
      :desktop-version="AppFooter"
      :mobile-version="AppAdaptivityFooter"
      :breakpoint="BREAKPOINT_LG" />
  </div>
  <teleport to=".app-modal-container">
    <plate-transactions />
  </teleport>
</template>

<style scoped lang="scss">
.layout {
  min-height: 100vh;
  min-width: 100vw;
  background: var(--primary-background-solid) var(--splash-screen-url);
  background-position: top center;
  background-repeat: no-repeat;
}
</style>
