<script setup>
import { IconCheck } from '~/components/icons'
defineProps({
  modelValue: Boolean,
})
</script>

<template>
  <label class="checkbox" :class="{ 'checkbox-active': modelValue }">
    <icon-wrapper class="checkbox__icon" width="10" height="7">
      <icon-check />
    </icon-wrapper>
    <input
      class="checkbox__self"
      type="checkbox"
      :checked="modelValue"
      :value="modelValue"
      @change="$emit('update:modelValue', !modelValue)" />
  </label>
</template>

<style scoped lang="scss">
.checkbox {
  position: relative;
  //background: var(--input-border);
  border: 1px solid var(--input-border);
  border-radius: 3px;
  cursor: pointer;
  height: 15px;
  width: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: '';
    transition: $t opacity;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: $primary-gradient;
    opacity: 0;
    border-radius: 3px;
  }
  &__icon {
    transition: $t opacity;
    color: white;
    opacity: 0;
    z-index: 12;
  }
  &__self {
    display: none;
  }
  &-active {
    &::before {
      opacity: 1;
    }
    .checkbox__icon {
      opacity: 1;
    }
  }
}
</style>
