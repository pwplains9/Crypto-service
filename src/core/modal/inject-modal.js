import { inject, watch } from 'vue'
export function injectModal(modalName = 'default') {
  const stateRef = inject(`state-${modalName}`)
  const setModalState = inject(`set-modal-state-${modalName}`)
  const modalMetadata = inject(`modal-metadata-${modalName}`)
  if (!setModalState)
    throw new Error(
      `Provide & Inject: not found 'setModalState' function - [${modalName}]`
    )
  return {
    state: stateRef,
    setState: setModalState,
    inject: modalName,
    metadata: modalMetadata,
  }
}

/**
 * @param {string} modal_name
 */
export function onModalMounted(modal_name, callback = () => {}) {
  const { state } = injectModal(modal_name)
  watch(state, (val) => {
    if (val) callback()
  })
}

/**
 * @param {string} modal_name
 */
export function onModalUnmounted(modal_name, callback = () => {}) {
  const { state } = injectModal(modal_name)
  watch(state, (val) => {
    if (!val) callback()
  })
}
