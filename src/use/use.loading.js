import { ref } from 'vue'
export function useLoading(defaultState = false) {
  const loading = ref(defaultState)
  /**
   * @param {boolean} state
   */
  const setLoading = (state) => (loading.value = state)
  return { loading, setLoading }
}
