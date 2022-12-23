<script setup>
import { ref } from 'vue'
import { CommonButton, CommonDropdown } from '~/components/common'
import { ContextCoin, ContextDate } from '~/components/context'
import { TableTransactions } from '~/components/table'
const filter_active = ref(false)
</script>

<template>
  <div class="history">
    <div class="history__header">
      <h2 class="history__title">Transaction History</h2>
      <common-button
        @click="filter_active = true"
        class="history__filter"
        variant="white"
        v-if="!filter_active">
        <span>
          Filter
        </span>
      </common-button>
      <div class="history__controls" v-else>
        <button>Clear filters</button>
        <common-button
          @click="filter_active = false"
          class="history__filter"
          variant="white">
          <span>
            Close
          </span>
        </common-button>
      </div>
      <transition mode="out-in" name="popover">
        <div class="popover" v-if="filter_active">
          <div class="popover__content">
            <common-dropdown content="Coin">
              <context-coin />
            </common-dropdown>
            <common-dropdown class="popover__dropdown" content="Date">
              <context-date />
            </common-dropdown>
          </div>
        </div>
      </transition>
    </div>
    <table-transactions class="history__table" />
  </div>
</template>

<style scoped lang="scss">
.popover {
  position: absolute;
  top: 56px;
  right: 0;
  background-color: var(--secondary-background-color);
  z-index: 1;
  border-radius: 12px;
  padding: 1.6rem;
  min-width: 330px;
  &__dropdown {
    margin-top: 1.2rem;
  }
  &__content {
    position: relative;
  }
  &-enter-active,
  &-leave-active {
    transition: $t opacity, $t transform;
  }
  &-leave-to,
  &-enter-from {
    transform: translateY(20px);
    opacity: 0;
  }
}
.history {
  margin-top: 23rem;
  padding-bottom: 8rem;
  position: relative;
  &__controls {
    display: flex;
    align-items: center;
    gap: 0 2.4rem;
    position: relative;
  }
  &__title {
    //margin-top: 2.4rem;
    @include tg-32-medium;
  }
  &__table {
    margin-top: 2.4rem;
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__filter {
    padding: 1px;
    min-width: 160px;
    background: linear-gradient(225deg, #3cb2a7 0%, #ee3632 100%);

    span {
      display: block;
      border-radius: 92px;
      background: white;
      padding: 1.6rem;
    }
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 8rem;
    height: 90px;
    width: 100%;
    background: var(--fade-gradient);
  }

  @include lg {
    margin-top: 7.2rem;
  }
}
</style>
