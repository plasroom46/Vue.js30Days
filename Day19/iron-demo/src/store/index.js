import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numbers: [1, 3, 5, 7, 9]
  },
  mutations: {
    // 1. state: 你可以自由取用或更動state的數值
    // 2. payload: 從actions傳來的參數
    ADD_NUMBER(state, payload) {
      state.numbers.push(payload)
    }
  },
  actions: {
    // 1. context 是一個物件，裡面可以讓你使用store中的commit、getter或是state屬性
    // 2.想傳入mutation的參數，沒有要傳入則可省略

    // 上下 2 種寫法相同
    // addNumber({commit},number) {
    //   commit("ADD_NUMBER", number)
    // }
    addNumber(context, number) {
      context.commit("ADD_NUMBER", number)
    }

  },
  modules: {},
  // 1. state為第一個參數

  // 上下 2 種寫法相同
  // getters: {
  //   sortedNumbers(state) {
  //     return state.numbers.sort((a, b) => a - b)
  //   },
  // },
  getters: {
    sortedNumbers: (state) => state.numbers.sort((a, b) => a - b)
  }
});