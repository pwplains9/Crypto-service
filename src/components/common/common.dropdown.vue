<script setup>
import { ref } from 'vue'
import { IconArrowDown } from '~/components/icons'
defineProps({
  content: String,
})
const state = ref(false)
</script>

<template>
  <div class="dropdown" v-click-outside="() => (state = false)">
    <div @click="state = !state" :class="state ? 'is-active dropdown__display': 'dropdown__display'">
      <slot name="display">
        <span class="dropdown__text">
          {{ content }}
        </span>
        <icon-wrapper width="12" height="12">
          <icon-arrow-down />
        </icon-wrapper>
      </slot>
    </div>
    <transition name="context">
      <div class="dropdown__context" v-if="state">
        <slot />
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.dropdown {
  position: relative;
  &__display {
    user-select: none;
    cursor: pointer;
    background: var(--input-bg);
    border: 0.5px solid var(--input-border);
    border-radius: 12px;
    padding: 1.4rem 1.6rem;
    @include tg-16-reg;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--primary-font-color);

    &.is-active {
      background: var(--dropdown-contects);
      border: 1px solid var(--dropdown-contects-border);
      border-radius: 12px 12px 0 0;

      svg {
        transform: rotate(180deg);
      }
    }
  }
  &__context {
    position: absolute;
    margin-top: -1px;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
}

.context {
  &-enter-active,
  &-leave-active {
    transition: $t transform, $t opacity;
  }
  &-enter-from,
  &-leave-to {
    //transform: translateY(20px);
    opacity: 0;
  }
}
</style>
