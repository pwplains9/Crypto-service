<script setup>
import {CommonInput, CommonButton} from '~/components/common'
import {BlockTransferForm} from '~/components/block'
import {useWallet} from '~/use/use.wallet'

const {connect, generate_new, private_key_model, validation_private_key} =
    useWallet()
</script>

<template>
  <div class="row align-items-center">
    <div class="col-lg-7 main__info">
      <h1 class="main__title">Welcome to orbital wallet</h1>
      <p class="main__subtitle">
        Your gateway to the epic Orbital blockchain network
      </p>
      <common-input
          v-model="private_key_model"
          class="main__input main__input-400"
          placeholder="Enter private key"/>
      <div class="main__controls">
        <common-button
            class="main__connect"
            :disabled="!validation_private_key"
            @click="connect"
        >Connect
        </common-button
        >
        <button class="main__generate" @click="generate_new">
          Generate New
        </button>
      </div>
    </div>
    <block-transfer-form class="transfer-block"/>
  </div>
</template>

<style scoped lang="scss">
.main {
  position: relative;

  &__title {
    @include tg-60-medium;
    text-transform: uppercase;
  }

  &__subtitle {
    margin-top: 1.2rem;
    @include tg-16-reg-ibm;
  }

  &__input {
    margin-top: 1.2rem;

    &-24 {
      margin-top: 2.4rem;
    }

    &-400 {
      margin-top: 4rem;
      max-width: 40rem;
    }
  }

  &__controls {
    display: flex;
    align-items: center;
    gap: 0 4rem;
    margin-top: 3.2rem;
  }

  &__generate {
    @include tg-14-semi;
  }

  &__connect {
    min-width: 240px;
  }

  &__send {
    margin-top: 3.2rem;
    width: 100%;

  }

  &__forms {
    overflow: hidden;
    min-height: 524px;
  }

  &__qr {
    margin: 0 auto;
    margin-top: 2.4rem;
  }
}
</style>
