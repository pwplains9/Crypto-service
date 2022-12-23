<script setup>
defineProps({
  variant: {
    type: String,
    default: 'gradient',
    validator(val) {
      return ['gradient', 'white'].includes(val)
    },
  },
})
</script>

<template>
  <button class="button" :class="`button-${variant}`">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  padding: 1.6rem;
  @include tg-14-semi;
  border-radius: 92px;
  transition: $t opacity;
  &-gradient {
    background: $primary-gradient;
    color: #ffffff;
  }
  &-white {
    background-color: #ffffff;
    color: var(--secondary-font-color);
    // todo
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  @include state('loading') {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
