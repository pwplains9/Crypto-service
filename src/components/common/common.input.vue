<script setup>
defineProps({
  label: String,
  modelValue: {
    type: [String, Number],
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: String,
  readonly: Boolean,
  disabled: Boolean,
})

const emits = defineEmits(['update:modelValue', 'enter'])
</script>

<template>
  <div class="input-wrapper">
    <p class="label" v-if="label">{{ label }}</p>
    <label class="input" :disabled="disabled || readonly">
      <slot name="prev" />
      <input
        @keyup.enter="emits('enter')"
        :placeholder="placeholder"
        :disabled="disabled || readonly"
        :type="type"
        class="input__self"
        :value="modelValue"
        @input="emits('update:modelValue', $event.target.value)" />
      <slot />
    </label>
  </div>
</template>

<style scoped lang="scss">
.label {
  @include tg-12-reg;
  margin-bottom: 0.4rem;
  opacity: 0.6;
}
.input {
  display: flex;
  align-items: center;
  @include tg-16-reg;
  background-color: var(--input-bg);
  border: 0.5px solid var(--input-border);
  border-radius: 12px;
  padding: 1.4rem 1.6rem;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: var(--primary-font-color);
  &:not([disabled='true']) {
    cursor: text;
  }
  &__self {
    color: var(--primary-font-color);
    &::placeholder {
      color: var(--primary-font-color);
      opacity: 0.6;
    }
    width: 100%;
  }
}
</style>
