<template>
  <div class="content">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.content {
  background-color: var(--primary-background-color);
  backdrop-filter: $primary-blur;
  border-radius: 24px;
  padding: 2rem;

  @include lg {
    border-radius: 16px;
    padding: 1.9rem 1.6rem;
  }
}
</style>
