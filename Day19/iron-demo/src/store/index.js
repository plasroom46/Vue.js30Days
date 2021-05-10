import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
      state: {
        numbers: [1, 3, 5, 7, 9]
      },
      mutations: {
        ADD_NUMBER(state, payload) {
          state.numbers.push(payload)
        }
      },
      actions: {
        // 上下 2 種寫法相同
        // addNumber({commit},number) {
        //   commit("ADD_NUMBER", number)
        // }
        addNumber(context, number) {
          context.commit("ADD_NUMBER", number)
        }

      },
      modules: {},
      // 上下 2 種寫法相同
      // getters: {
      //   sortedNumbers(state) {
      //     return state.numbers.sort((a, b) => a - b)
      //   },
      // },
      getters: {
        sortedNumbers: (state) => state.numbers.sort((a, b) => a - b)
      })