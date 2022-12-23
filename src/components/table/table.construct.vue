<script setup>
defineProps({
  titles: {
    type: Array,
    default: () => [],
  },
  content: {
    type: Array,
    default: () => [],
  },
})

const emits = defineEmits(['select-row'])
</script>

<template>
  <div class="table">
    <div class="table__head">
      <div class="table__row table__row-header">
        <div
          class="table__col"
          :style="col.styles"
          v-for="(col, index) of titles"
          :key="index">
          {{ col.value }}
        </div>
      </div>
    </div>
    <div class="table__body">
      <div
        class="table__row"
        v-for="(row, index) of content"
        :key="index"
        @click="emits('select-row', row, row.metadata)">
        <div
          class="table__col"
          :style="col.styles"
          v-for="(col, col_index) of row.cols"
          :key="col_index">
          <p class="table__content" v-if="!col.component">{{ col.value }}</p>
          <component
            v-else
            :is="col.component.component"
            v-bind="col.component.props"
            class="table__component" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.table {
  text-align: left;
  padding: 2rem;
  backdrop-filter: blur(12px);
  background: var(--table-background);
  border-radius: 24px;
  &__head {
    position: sticky;
    top: 0;
    @include tg-14-medium;
    z-index: 10;
    border-bottom: 1px solid rgba(#ffffff, 0.2);
    margin-bottom: 1.6rem;
  }
  &__row {
    display: flex;
    align-items: center;
    @include tg-16-reg;
    &-header {
      border-bottom: 1px solid rgba(var(--primary-font-color), 0.2);
      opacity: 0.6;
    }
  }
  &__content {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__col {
    color: var(--primary-font-color);
    padding: 1rem 0;
    flex-basis: 0;
    flex-grow: 1;
    color: inherit;
  }
  &__component {
    width: 100%;
  }
}
</style>
