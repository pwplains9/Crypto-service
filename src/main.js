import IconWrapper from '~/components/icon-wrapper.vue'
import App from './App.vue'
import vClickOutside from 'click-outside-vue3'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import ECharts from 'vue-echarts'
import { use } from 'echarts/core'
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
} from 'echarts/components'

use([
  CanvasRenderer,
  LineChart,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
])

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import { hook } from '~/core/middleware'
import { Autoplay, Navigation, EffectFade, Pagination } from 'swiper'
import Swiper from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
// import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import 'simplebar/dist/simplebar.min.css'

Swiper.use(Autoplay)
Swiper.use(Navigation)
Swiper.use(EffectFade)
Swiper.use(Pagination)

hook(router)

const pinia = createPinia()

const app = createApp(App)
app.use(router).use(pinia).use(vClickOutside)

app.component('icon-wrapper', IconWrapper)
app.component('v-chart', ECharts)

router.isReady().then(() => app.mount('#app'))
