import { createStore } from "vuex";
import { ASYNC_INCREMENT } from "./type/action-type";
import { DONE_TODOS_COUNT, GET_COUNT, GET_TODOS } from "./type/getters-type";
import { COUNT_INCREMENT } from "./type/mutation-type";
import { COUNT, TODOS } from "./type/state-type";

export default createStore({
  state() {
    return {
      [COUNT]: 0,
      [TODOS]: [
        {
          text: "vuex 모듈 실습",
          done: false,
        },
        {
          text: "vuex mapState 공부",
          done: true,
        },
        {
          text: "vue 라우팅",
          done: true,
        },
      ],
    };
  },
  getters: {
    [GET_COUNT]: (state) => {
      return state.count;
    },
    [DONE_TODOS_COUNT]: (state) => {
      return state.todos.filter((todo) => todo.done).length;
    },
    [GET_TODOS]: (state) => {
      return state.todos;
    },
  },
  mutations: {
    // 동기적
    [COUNT_INCREMENT](state, payload) {
      state.count += payload.amount;
    },
  },
  actions: {
    // 비동기적
    [ASYNC_INCREMENT]({ commit }, { amount }) {
      setTimeout(() => {
        commit({
          type: COUNT_INCREMENT,
          amount,
        });
      }, 1000);
    },
  },
  modules: {},
});
