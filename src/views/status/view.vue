<script setup>
import { ElementBlock, ElementField } from '~/components/element'
const create_state = (name, state) => ({ name, state })
const states = [
  create_state('Network', true),
  create_state('Browser', true),
  create_state('Sluice', false),
]
</script>

<template>
  <div class="container status">
    <h1 class="status__title">Status</h1>
    <div class="status__states">
      <element-block
        without-border
        v-for="state of states"
        :key="state.name"
        :title="state.state ? 'Active' : 'Inactive'"
        :class="{
          'status-inactive': !state.state,
          'status-active': state.state,
        }">
        <p class="status__name">{{ state.name }}</p>
      </element-block>
      <element-block class="status__activity" title="99.9%" without-border>
        <p class="status__name">Activity</p>
      </element-block>
      <element-block
        class="status__release"
        without-border
        title="1 933 556 019,22 DEL">
        <p class="status__name">Release (total)</p>
      </element-block>
    </div>
    <element-block display="flex" class="status__coins" title="Coins">
      <element-field name="148 931 721,86 DEL" value="In free circulation" />
      <element-field name="1 784 642 368,23 DEL" value="Total delegated" />
      <element-field name="92" value="Total released" />
      <element-field
        name="14 529 935,9 DEL"
        value="Capitalization of the coin" />
    </element-block>
    <div class="status__group">
      <element-block display="flex" title="Blocks">
        <element-field name="11 314 636" value="Number of blocks" />
        <element-field name="5 500 ms" value="Generation speed" />
      </element-block>
      <element-block title="Transactions" display="flex">
        <element-field name="4 232" value="Transactions (24 hours)" />
        <element-field name="0" value="Transactions per second (24 h)" />
      </element-block>
    </div>
    <div class="status__group">
      <element-block display="flex" title="Validator">
        <element-field name="46" value="Active Validators" />
        <element-field name="10" value="Active Candidates" />
      </element-block>
      <element-block display="flex" title="Commission">
        <element-field name="0,71 DEL" value="Average" />
        <element-field name="1 691,22 DEL" value="Commission (24 hours)" />
      </element-block>
    </div>
  </div>
</template>

<style scoped lang="scss">
.status {
  // 100px -> footer
  // 88px -> header
  padding: 4rem 12rem;
  @include lg {
    padding: 10rem 2rem;
  }
  &__title {
    @include tg-32-medium;
  }
  &__states {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    @include lg {
      margin-top: 1.6rem;
      display: grid;
      grid-template-areas:
        'a b c'
        'd d d'
        'e e e';
    }
  }
  &__activity {
    @include lg {
      grid-area: d;
    }
  }
  &__release {
    @include lg {
      grid-area: e;
    }
  }
  &__coins {
    margin-top: 2.4rem;
  }
  &__group {
    margin-top: 2.4rem;
    display: flex;
    gap: 2.4rem;
    @include lg {
      flex-wrap: wrap;
    }
  }
  &__name {
    @include tg-14-reg;
    opacity: 0.6;
    margin-top: 0.4rem;
  }
  &-active {
    &:deep(.block__title) {
      color: $green;
    }
  }
  &-inactive {
    &:deep(.block__title) {
      color: $red;
    }
  }
}
</style>
