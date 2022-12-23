<script setup>
defineProps({
  titles: {
    type: Array,
    required: true,
    default: () => [],
  },
  content: {
    type: Array,
    required: true,
    default: () => [],
  },
})
</script>

<template>
  <div class="table">
    <div class="table__cell" v-for="(row, index) of content" :key="index">
      <div class="field" v-for="(col, col_index) of row.cols" :key="col_index">
        <p class="field__name">
          {{ titles[col_index]?.value ?? '' }}
        </p>
        <p
          class="field__content"
          :style="col.styles ?? {}"
          v-if="!col.component">
          {{ col.value }}
        </p>
        <component
          v-else
          :is="col.component.component"
          v-bind="col.component.props" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.table {
  padding: 0 1.6rem;
  background-color: var(--primary-background-color);
  border-radius: 24px;
  backdrop-filter: $primary-blur;
  &__cell {
    padding: 1.6rem 0;
    &:not(:last-child) {
      border-bottom: 1px solid var(--input-border);
    }
  }
}

.field {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__name {
    @include tg-14-medium;
  }
  &__content {
    @include tg-14-reg;
  }
  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }
}
</style>
