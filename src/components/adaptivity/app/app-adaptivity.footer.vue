<script setup>
import {
  IconLogo,
  SocialFacebook,
  SocialTelegram,
  SocialTwitter,
  IconRoobinium,
} from '~/components/icons'
</script>

<template>
  <footer class="footer">
    <div class="footer__logo">
      <icon-wrapper width="74" height="20">
        <icon-logo />
      </icon-wrapper>
      <div class="socials">
        <a class="socials__item" href="#">
          <icon-wrapper width="24" height="24">
            <social-telegram />
          </icon-wrapper>
        </a>
        <a class="socials__item" href="#">
          <icon-wrapper width="24" height="24">
            <social-twitter />
          </icon-wrapper>
        </a>
        <a class="socials__item" href="#">
          <icon-wrapper width="24" height="24">
            <social-facebook />
          </icon-wrapper>
        </a>
      </div>
    </div>
    <div class="footer__copy">
      <p class="footer__copyright">All right reserved © Copyright 2022</p>
      <p class="footer__made">
        Made by <b>roobinium.io</b>
        <icon-wrapper width="16" height="16">
          <icon-roobinium />
        </icon-wrapper>
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  padding: 2rem;
  &__logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__made {
    @include tg-12-reg;
  }
  &__copy {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.6rem;
  }
  &__copyright {
    @include tg-12-reg;
    max-width: 120px;
  }
  &__made {
    display: flex;
    align-items: center;
    gap: 0 0.8rem;
  }
}
.socials {
  display: flex;
  align-items: center;
  gap: 0 1.6rem;
  &__item {
    padding: 0.2rem;
    background-color: var(--primary-background-color);
    border-radius: 50%;
  }
}
</style>
