<script setup>
import { TableConstruct } from '.'
import { TableElementInline } from '.'
import { CryptoBitcoin, CryptoEthereum } from '~/components/icons'
import { ref, onMounted } from 'vue'
import {
  make_row,
  make_col,
  make_component_col,
  make_table,
} from '~/utils/table'
import { useLoading } from '~/use/use.loading'
import { transaction_history } from '~/api/validator'
import { useStore } from '~/stores/stores.main'

const { setLoading, loading } = useLoading(true)
const store = useStore()

const table = ref(
  make_table(
    [
      make_col('Date'),
      make_col('Token'),
      make_col('To'),
      make_col('From'),
      make_col('Value'),
    ],
    []
  )
)

onMounted(async () => {
  setLoading(true)
  const response = await transaction_history(store.public_address)
  console.log(response)
  setLoading(false)
})
// const row_btc = make_row(
//   [
//     make_col('21.09.2022'),
//     markRaw(
//       make_component_col(TableElementInline, {
//         icon: CryptoBitcoin,
//         content: 'Bitcoin',
//       })
//     ),
//     make_col('dx123fdsdfkljkj29c...'),
//     make_col('dx123fdsdfkljkj29c...'),
//     make_col('-12.6', { styles: { color: '#cd2323' } }),
//   ],
//   { metadata: { id: 1337 } }
// )
</script>

<template>
  <table-construct v-bind="table" />
</template>

<style scoped lang="scss"></style>
