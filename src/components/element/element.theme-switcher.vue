<script setup>
import { IconSun, IconMoon } from '../icons'
import { setTheme } from '~/core/theme-controller'
import { ref } from 'vue'
const current_theme = ref()

const switch_theme = () => {
  current_theme.value = current_theme.value === 'dark' ? 'light' : 'dark'
  setTheme(current_theme.value)
}

const local_theme = localStorage.getItem('theme') ?? 'dark'
current_theme.value = local_theme
</script>

<template>
  <div
    class="switcher"
    @click="switch_theme"
    :class="{ 'switcher-light': current_theme === 'light' }">
    <div
      class="switcher__switch"
      :class="{ 'switcher__switch-night': current_theme === 'dark' }" />
    <icon-wrapper class="switcher__icon" width="20" height="20">
      <icon-sun />
    </icon-wrapper>
    <icon-wrapper
      class="switcher__icon switcher__icon-night"
      width="20"
      height="20">
      <icon-moon />
    </icon-wrapper>
  </div>
</template>

<style scoped lang="scss">
.switcher {
  cursor: pointer;
  backdrop-filter: $primary-blur;
  border-radius: 24px;
  background-color: var(--primary-background-color);
  padding: 0.4rem;
  width: 68px;
  position: relative;
  flex: none;

  &__switch {
    transition: $t transform;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background: $primary-gradient;
    border-radius: 16px;
    box-shadow: 0px 1px 0px #681a00, 0px 3px 5px rgba(0, 0, 0, 0.13),
      0px 4px 10px rgba(104, 26, 0, 0.38);
    &-night {
      transform: translateX(32px);
    }
  }
  &__icon {
    position: absolute;
    left: 8px;
    top: 8px;
    &-night {
      left: unset;
      right: 8px;
    }
  }
  &-light {
    .switcher__icon {
      color: #ffffff;
      &-night {
        color: var(--primary-font-color);
      }
    }
  }
}
</style>
