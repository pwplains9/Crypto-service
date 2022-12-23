<script setup>
defineProps({
  icon: Object,
  content: String,
})
</script>

<template>
  <div class="inlined">
    <icon-wrapper width="24" height="24">
      <component :is="icon" />
    </icon-wrapper>
    <p class="inlined__text">{{ content }}</p>
  </div>
</template>

<style scoped lang="scss">
.inlined {
  display: flex;
  align-items: center;
  gap: 0 1rem;
  &__text {
    font: inherit;
  }
}
</style>
