<script setup>
import {ElementContent} from '~/components/element'
import {CommonInput, CommonButton, CommonQrCode} from '~/components/common'
import {IconQr, IconCopy} from '~/components/icons'
import {onMounted, ref, reactive} from 'vue'

import {PlateAgreement} from '~/components/modal'
import {provideModal} from '~/core/modal/provide-modal'

import {useLoading} from '~/use/use.loading'
import {
  get_all_tokens,
  get_account_nonce,
  transfer_token,
} from '~/api/validator'
import {decode_value} from '~/core/json-rpc'
import {useStore} from '~/stores/stores.main'
import {utils} from 'ethers'
import {storeToRefs} from 'pinia'

const {setState} = provideModal('make-transaction-modal')

const store = useStore()
const {public_address} = storeToRefs(store)

const {loading, setLoading} = useLoading(true)

const form = reactive({
  to_address: '',
  amount: '',
})

const agree = () => {
  setState(false)
}

const disagree = () => {
  setState(false)
}

const selected_tab = ref('send')
const token_info = ref({name: '...'})

const approve_send = async (signature, nonce) => {
  const response = await transfer_token(
      token_info.value.name,
      utils.parseEther(form.amount),
      form.to_address,
      public_address.value,
      nonce,
      signature
  )
  console.log('response ->', response)
}

const sendTransfer = async () => {
  setState(true)
  const response = await get_account_nonce(token_info.value.owner)
  const {data, statusText} = response
  if (statusText === 'OK') {
    const {status, decoded} = decode_value(data)
    if (status) {
      const tx = {
        to: form.to_address,
        value: utils.parseEther(form.amount),
      }
      const [nonce_data] = decoded
      const signature = await store.wallet.signTransaction(tx)
      await approve_send(signature, nonce_data.nonce)
      console.log('signature:', signature)
      console.log(decoded)
    }
  }
  console.log(data)
}

const copyEl = ref()
const copy_address = () => {
  navigator.clipboard.writeText(public_address.value)
  copyEl.value = !copyEl.value
}

const share = () => {
  if (!navigator.share) {
    return
  }
  navigator.share({
    title: 'Orbital Wallet',
    text: 'My Orbital Wallet',
    url: public_address.value,
  })
}

onMounted(async () => {
  setLoading(true)
  try {
    const response = await get_all_tokens()
    const {data, statusText} = response
    if (statusText === 'OK') {
      const {status, decoded} = decode_value(data)
      if (status) {
        const [epic] = decoded
        token_info.value = epic
      } else {
        console.error('No Data Token')
      }
    }
  } finally {
    setLoading(false)
  }
})
</script>

<template>
  <element-content class="transfer">
    <div class="tabs">
      <button
          @click="selected_tab = 'send'"
          class="tabs__item"
          :class="{ 'tabs__item-active': selected_tab === 'send' }">
        Send
      </button>
      <button
          @click="selected_tab = 'receive'"
          class="tabs__item"
          :class="{ 'tabs__item-active': selected_tab === 'receive' }">
        Receive
      </button>
    </div>
    <common-input
        class="transfer__input transfer__input-24"
        v-model="token_info.name"
        readonly>
      <span v-if="loading">...</span>
      <span v-else>{{ token_info.decimals }}</span>
    </common-input>
    <transition mode="out-in" name="form">
      <div v-if="selected_tab === 'send'">
        <common-input
            v-model="form.to_address"
            class="transfer__input"
            label="To">
          <icon-wrapper @click="qrcode" width="20" height="20">
            <icon-qr/>
          </icon-wrapper>
        </common-input>
        <common-input
            v-model="form.amount"
            class="transfer__input"
            label="Amount">
          <span>MAX</span>
        </common-input>
        <common-input class="transfer__input" placeholder="Text" label="Memo"/>
        <common-button
            :loading="loading"
            variant="white"
            class="transfer__send"
            @click="sendTransfer">
          Send
        </common-button>
      </div>
      <div v-else>
        <common-qr-code
            :data="public_address"
            class="transfer__qr"
            size="165"/>
        <common-input
            readonly
            v-model="public_address"
            class="transfer__input"
            label="Public address">
          <icon-wrapper @click="copy_address" width="20" height="20" class="copy-button">
            <icon-copy/>
          </icon-wrapper>
          <div class="copy-popup" v-if="copyEl">
            <span>
                Address copied!
            </span>
          </div>
        </common-input>
        <common-button @click="share" variant="white" class="transfer__send">
          Share
        </common-button>
      </div>
    </transition>
    <teleport to=".app-modal-container">
      <plate-agreement
          title="Do you really want to make this transaction?"
          name="make-transaction-modal"
          @status:yes="agree"
          @status:no="disagree"/>
    </teleport>
  </element-content>
</template>

<style scoped lang="scss">
.transfer {
  position: relative;
  overflow: hidden;
  min-height: 520px;

  &__title {
    @include tg-60-medium;
    text-transform: uppercase;
  }

  &__subtitle {
    margin-top: 1.2rem;
    @include tg-16-reg-ibm;
  }

  &__input {
    position: relative;
    margin-top: 1.2rem;

    &-24 {
      margin-top: 2.4rem;
    }

    &-400 {
      margin-top: 4rem;
      max-width: 40rem;
    }

    @include lg {
      margin-top: 0.6rem;

      &-24 {
        margin-top: 2.2rem;
      }
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

    @include lg {
      margin-top: 4rem;
    }
  }

  &__forms {
    overflow: hidden;
    min-height: 524px;
  }

  &__qr {
    margin-top: 2.4rem;
    display: flex;
    justify-content: center;
  }

  @include lg {
    min-height: 100%;
    padding: 1.9rem 1.6rem 3.2rem;
  }
}

.tabs {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__item {
    @include tg-16-semi;
    width: 100%;
    transition: $t border-color, $t opacity;
    padding: 1.2rem 0;
    border-bottom: 2px solid var(--primary-background-color);
    opacity: 0.6;

    &-active {
      border-color: #5aa0a2;
      opacity: 1;
    }

    @include lg {
      padding: 1.2rem 0 1.05rem;
    }
  }
}

.form {
  &-enter-active,
  &-leave-active {
    transition: 0.3s ease transform, $t opacity;
  }

  &-enter-from,
  &-leave-to {
    transform: translateY(20%);
    opacity: 0;
  }
}

.transfer-block {
  width: 36.3%;
  padding: 2.1rem 2.4rem;
}

.copy-popup {
  position: absolute;
  right: 0.8rem;
  top: -1.1rem;
  padding: 1px;
  border-radius: 12px;
  background: linear-gradient(225deg, #3cb2a7 0%, #ee3632 100%);
  box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(11px);
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: 0.7px;

  span {
    padding: 1.1rem 1.9rem;
    border-radius: 12px;
    background: #535353;
    display: block;
  }
}

.copy-button {
  cursor: pointer;
}
</style>
