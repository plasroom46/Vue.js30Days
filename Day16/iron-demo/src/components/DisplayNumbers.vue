<template>
  <div>
    <h2>{{ numbers }}</h2>
  </div>
</template>

<script>
import { EventBus } from "../EventBus.js";
export default {
  data() {
    return {
      numbers: [1, 2, 3, 5, 7],
    };
  },
  methods: {
    handleAddNumber() {
      EventBus.$on("addNumber", (payload) => {
        this.numbers.push(payload);
      });
    },
  },
  created() {
    this.handleAddNumber(); // 在建立時就開始監聽
  },
};
</script>