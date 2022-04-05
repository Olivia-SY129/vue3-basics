import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      count: 0,
    };
  },
  getters: {
    getCount: (state) => {
      return state.count;
    },
  },
  mutations: {
    // 동기적
    increment(state, payload) {
      state.count += payload.amount;
    },
  },
  actions: {
    // 비동기적
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit({
          type: "increment",
          amount: 5,
        });
      }, 1000);
    },
  },
  modules: {},
});
