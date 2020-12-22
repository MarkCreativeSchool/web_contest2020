<script>
import { Line, Pie, Bar } from 'vue-chartjs'
 
export default {
  extends: Pie,
  data() {
    return {
      chartData: {
        labels: ['日本', '中国', '台湾・日本'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: [
                'rgba(255, 99, 132, 0.3)',
                'rgba(54, 162, 235, 0.3)',
                'rgba(75, 192, 192, 0.3)',
                ],
            data: [269, 2, 1],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  },
}
</script>