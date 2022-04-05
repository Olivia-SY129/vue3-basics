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
    increment(state, payload) {
      state.count += payload.amount;
    },
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 1000);
    },
  },
  modules: {},
});
