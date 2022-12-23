<script setup>
import { nextTick, onMounted, ref } from 'vue'
import QRCodeStyling from 'qr-code-styling'

const props = defineProps({
  data: {
    type: String,
    default: 'ORBITAL',
  },
  size: {
    type: Number,
    default: 128,
  },
})

const gradient = {
  type: 'linear',
  rotation: 220,
  colorStops: [
    { offset: 0, color: '#3CB2A7' },
    { offset: 1, color: '#EE3632' },
  ],
}

const qr = ref()
const qr_code = new QRCodeStyling({
  data: props.data,
  width: props.size,
  height: props.size,
  type: 'svg',
  qrOptions: {
    typeNumber: 0,
    mode: 'Byte',
    errorCorrectionLevel: 'Q',
  },
  imageOptions: {
    hideBackgroundDots: true,
    imageSize: 0.5,
    crossOrigin: 'anonymous',
  },
  dotsOptions: {
    type: 'extra-rounded',
    color: 'currentColor',
  },
  backgroundOptions: {
    color: 'transparent',
  },
  cornersSquareOptions: {
    type: 'extra-rounded',
  },
})

onMounted(async () => {
  await nextTick()
  qr_code.append(qr.value)
})
</script>

<template>
  <div class="qr-code" ref="qr"></div>
</template>
