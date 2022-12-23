<script setup>
import {
  BlockMainForm,
  BlockHistory,
  BlockTransferForm,
} from '~/components/block'
import { ProviderAdaptivity } from '~/components/provider'
import {
  AdaptivityNil,
  BlockAdaptivityMainSection,
  BlockAdaptivityHistory,
} from '~/components/adaptivity'
import { BREAKPOINT_LG } from '~/utils/constants'
import { useStore } from '~/stores/stores.main'
import { storeToRefs } from 'pinia'

const store = useStore()
const { isAuthorized } = storeToRefs(store)
</script>

<template>
  <div class="container home">
    <provider-adaptivity
      :desktop-version="BlockMainForm"
      :mobile-version="
        isAuthorized ? BlockTransferForm : BlockAdaptivityMainSection
      "
      :breakpoint="BREAKPOINT_LG" />
    <provider-adaptivity
      :desktop-version="BlockHistory"
      :mobile-version="isAuthorized ? BlockAdaptivityHistory : AdaptivityNil"
      :breakpoint="BREAKPOINT_LG" />
  </div>
</template>

<style scoped lang="scss">
.home {
  padding: 6.4rem 12rem;
  position: relative;
  @include lg {
    padding: 10rem 2rem 4rem 2rem;
  }
}
</style>
