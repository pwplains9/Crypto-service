<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as echarts from 'echarts'

const chart_ref = ref()

let base = +new Date(2022, 9, 3)
let oneDay = 24 * 3600 * 1000
let date = []
let data = [
  70.58268036253274, 62, 71, 75, 85, 86, 92, 99, 95, 87, 87, 83, 84, 84, 77, 75,
  78, 73, 75, 68, 62, 58, 63, 66, 62, 66, 65, 63, 63, 70, 65, 72, 72, 74, 80,
  72, 77, 69, 71, 76, 79, 72, 79, 89, 96, 99, 102, 94, 103, 97, 103, 99, 100,
  106, 99, 91, 91, 87, 83, 77,
]
for (let i = 1; i < 60; i++) {
  var now = new Date((base += oneDay))
  date.push(
    [now.getDate(), (now.getMonth() + 1 + '').padStart(2, '0')].join('.')
  )
}

const init_options = () => {
  return {
    title: {
      show: false,
    },
    tooltip: {
      show: false,
    },
    legend: {
      show: false,
    },
    grid: {
      left: '0',
      right: '0',
      bottom: '3%',
      top: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: date,
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      splitLine: {
        show: false,
      },
      show: true,
    },
    series: [
      {
        type: 'line',
        stack: 'total',
        showSymbol: false,
        smooth: true,
        itemStyle: {
          color: '#367879',
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#3CB2A7',
            },
            {
              offset: 1,
              color: '#EE3632',
            },
          ]),
          opacity: 1,
        },
        data,
      },
    ],
  }
}

const option = ref(init_options())

const chart_resize = () => {
  option.value = init_options()
}

onMounted(() => {
  window.addEventListener('resize', chart_resize)
})

onUnmounted(() => {
  window.removeEventListener('resize', chart_resize)
})
</script>

<template>
  <div class="chartlines-wrapper container">
    <v-chart
      ref="chart_ref"
      autoresize
      class="chartlines__self"
      :option="option" />
  </div>
</template>

<style scoped lang="scss">
.chartlines {
  &__self {
    margin-top: 12px;
    width: 100%;
    height: 220px;
  }
}
</style>
