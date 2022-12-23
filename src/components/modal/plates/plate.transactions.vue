<script setup>
import { ModalTemplate } from '..'
import { CommonButton } from '~/components/common'
import { TableTransactions } from '~/components/table'
import { injectModal } from '~/core/modal/inject-modal'
const { inject, setState } = injectModal('transactions-modal')
</script>

<template>
  <modal-template class="transaction" :inject="inject">
    <table-transactions />
    <common-button @click="setState(false)" class="transaction__close">
      Close
    </common-button>
  </modal-template>
</template>

<style scoped lang="scss">
.transaction {
  &:deep(.plate) {
    min-width: 1126px;
    padding: 0;
  }
  &__close {
    position: absolute;
    bottom: 2.4rem;
    left: 50%;
    transform: translateX(-50%);
    min-width: 200px;
    box-shadow: 0px 2px 16px rgba(255, 255, 255, 0.16);
  }
}
</style>
