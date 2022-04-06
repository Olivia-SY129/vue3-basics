import { GET_NAME } from "../type/getters-type";
import { CHANGE_NAME } from "../type/mutation-type";
import { USERS } from "../type/state-type";

export default {
  state() {
    return {
      [USERS]: [
        {
          id: 0,
          name: "Hanna",
        },
        {
          id: 1,
          name: "Seungyeon",
        },
        {
          id: 2,
          name: "Heeyoung",
        },
      ],
    };
  },
  getters: {
    [GET_NAME]: (state) => (id) => {
      return state.users.find((user) => user.id === +id).name;
    },
  },
  mutations: {
    [CHANGE_NAME](state, { id, name }) {
      state.users.find((user) => user.id === +id).name = name;
    },
  },
};
