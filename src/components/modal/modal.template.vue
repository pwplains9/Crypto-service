<script setup>
import { computed, ref, nextTick } from 'vue'
import { onModalMounted, injectModal } from '~/core/modal/inject-modal'
const props = defineProps({
  inject: {
    type: String,
    default: 'default',
  },
  transitionType: {
    type: String,
    default: 'fade',
    validator(val) {
      return ['fade'].includes(val)
    },
  },
  silenceOutsideClick: {
    type: Boolean,
    default: false,
  },
  maskModifiers: {
    type: Array,
    default: () => ['dark', 'centered', 'blur'],
  },
})
const { state, setState } = injectModal(props.inject)
const maskRef = ref()

const computed_modifiers = computed(() => {
  return props.maskModifiers.map((modifier) => `mask-${modifier}`)
})

const close = () => {
  const all_modals = document.querySelector('.app-modal-container')
  const current_modal = all_modals.lastElementChild
  const current_modal_closing =
    current_modal.getAttribute('inject-name') === props.inject
  const modal_count = all_modals.children.length
  if (current_modal_closing) {
    if (modal_count > 1) {
      const prev_prev_modal = all_modals.children.item(modal_count - 2)
      prev_prev_modal.focus()
    }
    setState(false)
  }
}

onModalMounted(props.inject, async () => {
  await nextTick()
  maskRef.value?.focus()
})
</script>

<template>
  <transition :name="`modal-${transitionType}`">
    <div
      class="mask"
      tabindex="0"
      :inject-name="inject"
      :class="computed_modifiers"
      v-if="state"
      @keydown.esc="close"
      ref="maskRef">
      <div
        class="plate"
        v-click-outside="() => (silenceOutsideClick ? '' : setState(false))">
        <slot />
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.plate {
  position: relative;
  background: var(--primary-background-color);
  border-radius: 24px;
  padding: 2.4rem;
  @include lg {
    padding: 2rem;
  }
}

.mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
  overflow-y: auto;
  @include lg {
    padding: 0 1.2rem;
  }
  &-dark {
    background-color: rgba(0, 0, 0, 0.3);
  }
  &-blur {
    backdrop-filter: blur(12px);
  }
  &-centered {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.modal-fade {
  &-enter-active,
  &-leave-active {
    transition: $t transform, $t opacity;
  }
  &-leave-to,
  &-enter-from {
    opacity: 0;
    transform: translateY(20px);
  }
}
</style>
