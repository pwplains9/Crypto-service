<script setup>
defineProps({
  name: String,
  value: String,
  valueVariant: {
    type: String,
    default: 'primary',
    validator(val) {
      return ['primary', 'gradient'].includes(val)
    },
  },
})
</script>

<template>
  <div class="field">
    <p class="field__name">
      {{ name }}
    </p>
    <p class="field__value" :class="`field__value-${valueVariant}`">
      {{ value }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.field {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__name {
    @include tg-16-reg;
    opacity: 0.6;
  }
  &__value {
    @include tg-16-semi;
    &-gradient {
      background: $primary-gradient;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
