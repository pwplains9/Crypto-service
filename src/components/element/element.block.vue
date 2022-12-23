<script setup>
defineProps({
  title: String,
  withoutBorder: Boolean,
  display: {
    type: String,
    default: 'block',
    validator(val) {
      return ['block', 'flex'].includes(val)
    },
  },
})
</script>

<template>
  <div
    class="block"
    :class="[{ 'block-borderless': withoutBorder }, `block-${display}`]">
    <p class="block__title">
      {{ title }}
    </p>
    <div class="block__content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.block {
  user-select: none;
  padding: 1.6rem;
  border-radius: 24px;
  background-color: var(--primary-background-color);
  backdrop-filter: $primary-blur;
  width: 100%;

  &__content {
    padding: 1.6rem 0 0 0;
  }
  &__title {
    @include tg-16-semi;
    padding: 0 0 0.8rem 0;
    border-bottom: 1px solid var(--input-border);
  }

  &-borderless {
    .block__title {
      border-bottom: none;
      padding: 0;
    }
    .block__content {
      padding: 0;
    }
  }
  &-flex {
    .block__content {
      display: flex;
      @include lg {
        flex-direction: column;
        gap: 1.6rem 0;
      }
    }
  }
  &-block {
    .block__content {
      display: block;
    }
  }
}
</style>
