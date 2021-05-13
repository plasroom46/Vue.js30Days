<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,

  // 加入基本的資料驗證
  props: {
    label: {
      type: String,
    },
    chartData: {
      type: Array,
    },
    options: {
      type: Object,
    },
    chartColorOptions: {
      type: Object,
    },
  },
  mounted() {
    // 從傳入的資料中取出數字與日期，並將其反轉(因為我們拿到的是最新到最舊的資料)
    const dates = this.chartData.map((d) => d.date).reverse();
    const totals = this.chartData.map((d) => d.total).reverse();

    this.renderChart(
      {
        labels: dates,
        datasets: [
          {
            label: this.label,
            data: totals,
            ...this.chartColorOptions,
          },
        ],
      },
      this.options
    );
  },
};
</script>