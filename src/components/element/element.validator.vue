<script setup>
import { IconCopy } from '~/components/icons'
defineProps({
  logo: String,
  hash: String,
})
</script>

<template>
  <div class="validator">
    <img :src="logo" class="validator__logo" />
    <p class="validator__hash">
      {{ hash }}
    </p>
    <icon-wrapper width="16" height="16">
      <icon-copy />
    </icon-wrapper>
  </div>
</template>

<style scoped lang="scss">
.validator {
  display: flex;
  align-items: center;
  gap: 0 0.8rem;
  @include tg-14-semi;
}
</style>
