<script setup>
import { ElementThemeSwitcher } from '~/components/element'
import {
  SocialFacebook,
  SocialTelegram,
  SocialTwitter,
} from '~/components/icons'
</script>

<template>
  <div class="menu">
    <nav class="menu__nav">
      <a href="#" class="menu__link"> Home </a>
      <button href="#" class="menu__link">Transactions</button>
    </nav>
    <element-theme-switcher class="menu__switcher" />
    <div class="socials">
      <a class="socials__item" href="#">
        <icon-wrapper width="16" height="16">
          <social-telegram />
        </icon-wrapper>
      </a>
      <a class="socials__item" href="#">
        <icon-wrapper width="16" height="16">
          <social-twitter />
        </icon-wrapper>
      </a>
      <a class="socials__item" href="#">
        <icon-wrapper width="16" height="16">
          <social-facebook />
        </icon-wrapper>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--primary-background-color);
  backdrop-filter: $primary-blur;
  z-index: $z-level-3;
  &__switcher {
    margin: 0 auto;
    margin-top: 12rem;
  }
  &__nav {
    margin-top: 20rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
  &__link {
    @include tg-24-medium;
    &:not(:first-child) {
      margin-top: 4.8rem;
    }
  }
}

.socials {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 1.6rem;
  margin-top: 8rem;
  &__item {
    padding: 0.6rem;
    background-color: var(--primary-background-color);
    border-radius: 50%;
  }
}
</style>
