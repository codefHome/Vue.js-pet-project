<template>
  <div>
 
    <LineChart :data="chartData" :options="chartOptions"></LineChart>
  </div>
</template>

<script lang="ts">

import { Line } from 'vue-chartjs'
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

Chart.register(CategoryScale);

export default {
  name: 'App',
  components: {
    LineChart: Line,

  },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Pageviews',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },

}
</script>
<style scoped>
</style>