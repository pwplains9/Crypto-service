<script setup>
import {
  IconLogo,
  SocialFacebook,
  SocialTelegram,
  SocialTwitter,
  IconRoobinium,
} from '../icons'
</script>

<template>
  <footer class="container footer">
    <icon-wrapper width="74" height="20">
      <icon-logo />
    </icon-wrapper>
    <div class="footer__socials">
      <a href="#" class="footer__social">
        <icon-wrapper width="16" height="16">
          <social-telegram />
        </icon-wrapper>
      </a>
      <a href="#" class="footer__social">
        <icon-wrapper width="16" height="16">
          <social-facebook />
        </icon-wrapper>
      </a>
      <a href="#" class="footer__social">
        <icon-wrapper width="16" height="16">
          <social-twitter />
        </icon-wrapper>
      </a>
    </div>
    <p class="footer__copyright">All right reserved © Copyright 2022</p>
    <div class="footer__roobinium">
      <p>Made by <span>roobinium.io</span></p>
      <icon-wrapper width="16" height="16">
        <icon-roobinium />
      </icon-wrapper>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  padding: 2.4rem 12rem 4.8rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @include tg-12-reg;
  &__socials {
    display: flex;
    align-items: center;
    gap: 0 1.6rem;
  }
  &__social {
    padding: 0.6rem;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.06);
  }
  &__roobinium {
    display: flex;
    align-items: center;
    gap: 0 0.8rem;
  }
}
</style>
