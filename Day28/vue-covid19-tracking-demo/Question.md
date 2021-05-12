# [解決axios跨域 CORS 問題](https://blog.csdn.net/lpwmm/article/details/104567138)
1. 在根目錄檔案"vue.config.js"新增以下內容
```javascript=
module.exports = {
    devServer: {
        proxy: 'https://api.xxx.com/v1'
    }
}
```
2. 在 App.vue新增以下內容
```javascript
<script>
import axios from "axios";
import LineChart from "./components/LineChart";

export default {
  name: "App",

  components: {
    LineChart,
  },
  data() {
    return {};
  },
  async created() {
    let { data } = await axios.get(
      'us/daily.json'
    )
    console.log(data)
  },
};
</script>
```

# [Chart.js 版本問題](https://stackoverflow.com/questions/66940954/why-does-nuxt-give-me-this-error-with-vue-chartjs)
使用以下版本
```cmd=
install chart.js@2.9.4
```