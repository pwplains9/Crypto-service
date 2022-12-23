<script setup>
import { CommonInput, CommonButton } from '~/components/common'
import { useWallet } from '~/use/use.wallet'
const { connect, generate_new, private_key_model, validation_private_key } =
  useWallet()
</script>

<template>
  <div class="main">
    <h1 class="main__title">Welcome to orbital wallet</h1>
    <p class="main__subtitle">
      Your gateway to the epic Orbital blockchain network
    </p>
    <common-input
      v-model="private_key_model"
      class="main__input main__input-400"
      placeholder="Enter private key" />
    <common-button
      :disabled="!validation_private_key"
      class="main__connect"
      @click="connect">
      Connect
    </common-button>
    <button class="main__generate" @click="generate_new">Generate New</button>
  </div>
</template>

<style scoped lang="scss">
.main {
  &__title {
    @include tg-44-medium;
    max-width: 32rem;
    text-transform: uppercase;

    @include lg {
      @include tg-44-medium;
      margin-top: 10.8rem;
      text-transform: uppercase;
    }
  }
  &__subtitle {
    margin-top: 2rem;
    @include tg-16-reg-ibm;
  }
  &__input {
    margin-top: 4rem;
  }
  &__connect {
    width: 100%;
    margin-top: 10.5rem;

    @include lg {
      margin-top: 12.5rem;
    }
  }
  &__generate {
    margin-top: 4rem;
    display: block;
    width: 100%;

    @include lg {
      font-size: 1.4rem;
      line-height: 2rem;
      font-weight: 600;
      letter-spacing: 0.02em;
    }
  }
}
</style>
