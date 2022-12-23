import { provide, ref } from 'vue'
export function provideModal(modalName = 'default') {
  const state = ref(false)
  const modal_metadata = ref({})
  const setState = (_state, { metadata } = {}) => {
    state.value = _state
    modal_metadata.value = { ...modal_metadata.value, ...metadata }
  }
  provide(`state-${modalName}`, state)
  provide(`set-modal-state-${modalName}`, setState)
  provide(`modal-metadata-${modalName}`, modal_metadata)
  return { state, setState }
}
