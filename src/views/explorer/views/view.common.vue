<script setup>
import { ElementBlock, ElementField } from '~/components/element'
import { ChartLine } from '~/components/chart'
</script>

<template>
  <div class="common">
    <element-block class="common__block" title="Network data">
      <div class="common__inline">
        <element-field name="1 929 507 989,31 DEL" value="Issue" />
        <element-field name="11 314 995" value="Height" />
        <element-field name="94" value="Coins" />
        <element-field name="1 797 745 643 DEL" value="Delegated" />
      </div>
      <div class="common__inline">
        <element-field name="971 087" value="Transactions" />
        <element-field name="155 041 972,094 DEL" value="Burned" />
        <element-field name="92" value="Delegated, %" />
        <element-field name="59" value="Validators" />
      </div>
    </element-block>
    <element-block class="common__block" title="Transaction history (14 days)">
      <chart-line />
    </element-block>
    <div class="common__inline common__inline-last">
      <element-block class="common__block" title="Blocks">
        <div class="common__inline">
          <element-field name="11 314 995" value="11 sec ago" />
          <element-field name="0 txns" value="in 4.52 sec" />
          <element-field name="392" value=" DEL" />
        </div>
        <div class="common__inline">
          <element-field name="11 314 995" value="11 sec ago" />
          <element-field name="0 txns" value="in 4.52 sec" />
          <element-field name="392" value=" DEL" />
        </div>
        <div class="common__inline">
          <element-field name="11 314 995" value="11 sec ago" />
          <element-field name="0 txns" value="in 4.52 sec" />
          <element-field name="392" value=" DEL" />
        </div>
        <div class="common__inline">
          <element-field name="11 314 995" value="11 sec ago" />
          <element-field name="0 txns" value="in 4.52 sec" />
          <element-field name="392" value=" DEL" />
        </div>
      </element-block>
      <element-block class="common__block" title="Transactions">
        <div class="common__inline">
          <element-field name="11 314 995" value="11 sec ago" />
          <element-field name="0 txns" value="in 4.52 sec" />
          <element-field name="392" value=" DEL" />
        </div>
        <div class="common__inline">
          <element-field name="11 314 995" value="11 sec ago" />
          <element-field name="0 txns" value="in 4.52 sec" />
          <element-field name="392" value=" DEL" />
        </div>
        <div class="common__inline">
          <element-field name="11 314 995" value="11 sec ago" />
          <element-field name="0 txns" value="in 4.52 sec" />
          <element-field name="392" value=" DEL" />
        </div>
        <div class="common__inline">
          <element-field name="11 314 995" value="11 sec ago" />
          <element-field name="0 txns" value="in 4.52 sec" />
          <element-field name="392" value=" DEL" />
        </div>
        <div class="common__inline">
          <element-field name="11 314 995" value="11 sec ago" />
          <element-field name="0 txns" value="in 4.52 sec" />
          <element-field name="392" value=" DEL" />
        </div>
      </element-block>
    </div>
  </div>
</template>

<style scoped lang="scss">
.common {
  &__block {
    margin-top: 2.4rem;
  }
  &__inline {
    display: flex;
    align-items: flex-start;
    width: 100%;
    &:not(:last-child) {
      margin-bottom: 2rem;
      @include lg {
        padding-bottom: 1.6rem;
        border-bottom: 1px solid var(--input-border);
      }
    }
    &-last {
      gap: 2.4rem;
    }
    @include lg {
      display: block;
      &:deep(.field) {
        &:not(:last-child) {
          margin-bottom: 1.2rem;
        }
      }
    }
  }
}
</style>
