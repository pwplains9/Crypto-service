<script setup>
defineProps({
  name: String,
  value: String,
})
</script>

<template>
  <div class="field">
    <p class="field__name">{{ name }}</p>

    <p class="field__value">{{ value }}</p>
  </div>
</template>

<style scoped lang="scss">
.field {
  width: 100%;
  &__name {
    @include tg-16-semi;
  }
  &__value {
    @include tg-14-reg;
    opacity: 0.6;
    margin-top: 0.4rem;
  }
}
</style>
