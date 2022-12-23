<script setup>
import { useAdaptivity } from '~/use/use.adaptivity'
import { computed, onMounted, onUnmounted, ref, toRefs } from 'vue'

const props = defineProps({
  desktopVersion: {
    type: Object,
    required: true,
  },
  mobileVersion: {
    type: Object,
    required: false,
  },
  props: {
    type: Object,
  },
  breakpoint: {
    type: Number,
    default: -1,
  },
  mobileProps: {
    type: Object,
  },
})

const { breakpoint } = toRefs(props)
const force_mobile = ref(false)
const adaptivity = useAdaptivity()
const is_adaptivity_version = computed(
  () => (!props.mobileVersion || !adaptivity) && !force_mobile.value
)
const computed_component = computed(() =>
  is_adaptivity_version.value ? props.desktopVersion : props.mobileVersion
)

// Debounce 200 ms (?)
const resize_handle = () => {
  if (breakpoint.value === -1) return
  const width = window.innerWidth
  force_mobile.value = width <= breakpoint.value
}

const computed_props = computed(() =>
  is_adaptivity_version.value ? props.props : props.mobileProps
)

onMounted(() => {
  window.addEventListener('resize', resize_handle)
})
onUnmounted(() => {
  window.removeEventListener('resize', resize_handle)
})
</script>

<template>
  <component :is="computed_component" v-bind="computed_props">
    <slot />
  </component>
</template>
