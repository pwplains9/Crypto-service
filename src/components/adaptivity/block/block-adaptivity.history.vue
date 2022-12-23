<script setup>
import { TableAdaptivityConstruct } from '~/components/adaptivity'
import { TableElementInline } from '~/components/table'
import { IconOptions, CryptoBitcoin, CryptoEthereum } from '~/components/icons'
import { ref, markRaw } from 'vue'
import { RED_COLOR, GREEN_COLOR } from '~/utils/constants'
import {
  make_row,
  make_col,
  make_table,
  make_component_col,
} from '~/utils/table'

const row_btc = make_row([
  make_col('21.09.2022'),
  markRaw(
    make_component_col(TableElementInline, {
      icon: CryptoBitcoin,
      content: 'Bitcoin',
    })
  ),
  make_col('dx123fdsdfkljkj29c...'),
  make_col('dx123fdsdfkljkj29c...'),
  make_col('-12.6', { styles: { color: RED_COLOR } }),
])

const row_eth = make_row([
  make_col('21.09.2022'),
  markRaw(
    make_component_col(TableElementInline, {
      icon: CryptoEthereum,
      content: 'Ethereum',
    })
  ),
  make_col('dx123fdsdfkljkj29c...'),
  make_col('dx123fdsdfkljkj29c...'),
  make_col('+12.6', { styles: { color: GREEN_COLOR } }),
])

const table = ref(
  make_table(
    [
      make_col('Date'),
      make_col('Token'),
      make_col('To'),
      make_col('From'),
      make_col('Value'),
    ],
    [row_btc, row_eth, row_eth, row_btc]
  )
)
</script>

<template>
  <div class="history">
    <div class="history__header">
      <h2 class="history__title">Transaction History</h2>
      <icon-wrapper width="24" height="24">
        <icon-options />
      </icon-wrapper>
    </div>
    <table-adaptivity-construct v-bind="table" />
  </div>
</template>

<style scoped lang="scss">
.history {
  margin-top: 4rem;
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.6rem;
  }
  &__title {
    @include tg-24-medium;
  }


}
</style>
