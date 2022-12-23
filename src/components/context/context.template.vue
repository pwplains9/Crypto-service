<template>
  <div class="template">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.template {
  background-color: rgba(#ffffff, 0.1);
  backdrop-filter: $primary-blur;
  border-radius: 12px;
  overflow: hidden;

  .dropdown__context & {
    background: var(--dropdown-contects);
    border: 1px solid var(--dropdown-contects-border);
    border-top: 0;
    border-radius: 0 0 12px 12px;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      margin: 0 auto;
      height: 1px;
      width: calc(100% - 3rem);
      background: var(--dropdown-contects-before);
    }
  }
}
</style>
