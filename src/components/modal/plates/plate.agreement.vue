<script setup>
import { ModalTemplate } from '..'
import { CommonButton } from '~/components/common'
defineProps({
  name: String,
  title: String,
})
const emits = defineEmits(['status:no', 'status:yes'])
</script>

<template>
  <modal-template :inject="name">
    <div class="agreement">
      <h2 class="agreement__title">{{ title }}</h2>
      <div class="agreement__controls">
        <common-button
          class="agreement__btn"
          variant="white"
          @click="emits('status:no')">
          No
        </common-button>
        <common-button class="agreement__btn" @click="emits('status:no')">
          Yes
        </common-button>
      </div>
    </div>
  </modal-template>
</template>

<style scoped lang="scss">
.agreement {
  min-width: 420px;
  @include lg {
    min-width: unset;
  }
  &__title {
    @include tg-16-semi;
    text-align: center;
    width: 100%;
    max-width: 340px;
    margin: 0 auto;
    color: #ffffff;
  }
  &__controls {
    margin-top: 2.4rem;
    display: flex;
    align-items: center;
    gap: 0 1.2rem;
    @include lg {
      display: block;
    }
  }
  &__btn {
    width: 100%;
    @include lg {
      &:not(:last-child) {
        margin-bottom: 1.2rem;
      }
    }
  }
}
</style>
