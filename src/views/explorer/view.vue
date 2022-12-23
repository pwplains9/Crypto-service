<script setup>
import { CommonInput, CommonButton } from '~/components/common'
import { IconSearch, IconArrowDown } from '~/components/icons'
import { useRoute, useRouter } from 'vue-router'
import { computed, ref } from 'vue'
const route = useRoute()
const router = useRouter()

const block_id = computed(() => route.params.id)
const title = computed(() =>
  block_id.value ? `Block #${block_id.value}` : 'Explorer'
)

const block_id_ref = ref('')

const search = () => {
  if (!block_id_ref.value) router.push({ name: 'ExplorerCommon' })
  else
    router.push({ name: 'ExplorerBlock', params: { id: block_id_ref.value } })
}
</script>

<template>
  <div class="explorer container">
    <div class="explorer__header">
      <router-link to="/explorer/common">
        <icon-wrapper
          v-if="block_id"
          class="explorer__icon"
          width="16"
          height="16">
          <icon-arrow-down />
        </icon-wrapper>
      </router-link>
      <h1 class="explorer__title">{{ title }}</h1>
    </div>
    <div class="explorer__find">
      <common-input
        v-model="block_id_ref"
        @enter="search"
        class="explorer__input"
        placeholder="Search by address, hash, block, coins">
        <template #prev>
          <icon-wrapper class="explorer__zoom" width="20" height="20">
            <icon-search />
          </icon-wrapper>
        </template>
      </common-input>
      <common-button class="explorer__btn" variant="white">
        Filter
      </common-button>
    </div>
    <router-view />
  </div>
</template>

<style scoped lang="scss">
.explorer {
  padding: 4rem 12rem;
  @include lg {
    padding: 6rem 2rem;
  }

  &__title {
    @include tg-32-medium;
  }
  &__find {
    display: flex;
    align-items: center;
    gap: 0 2.4rem;
    margin-top: 2.4rem;
    @include lg {
      flex-direction: column;
      gap: 1.2rem 0;
    }
  }
  &__zoom {
    margin-right: 0.8rem;
  }
  &__input {
    width: 100%;
  }
  &__btn {
    min-width: 160px;
    @include lg {
      min-width: unset;
      width: 100%;
    }
  }
  &__header {
    display: flex;
    align-items: center;
  }
  &__icon {
    margin-right: 1.6rem;
    transform: rotate(90deg);
  }
}
</style>
