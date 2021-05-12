<template>
  <v-app>
    <v-main>
      <h1>COVID-19 Tracking Dashboard</h1>
      <LineChart />
    </v-main>
  </v-app>
</template>

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
