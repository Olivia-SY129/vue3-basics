<template>
  <div class="home">
    <HelloWorld msg="This is HelloWorld component" />
  </div>
  <h2>{{ count }}</h2>
  <h2>Local Count added {{ countPlusLocalState }}</h2>
  <div>
    <button @click="increase">sync +5</button>
    <button @click="incrementAsync">async +10</button>
  </div>
  <div>
    <input type="text" v-model="num" />
    <button @click="increaseBy">add</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapGetters, mapState } from "vuex";
import { COUNT_INCREMENT } from "@/store/type/mutation-type";
import { ASYNC_INCREMENT } from "@/store/type/action-type";
import { GET_COUNT } from "@/store/type/getters-type";
import { COUNT } from "@/store/type/state-type";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      num: 20,
      localCount: 4,
    };
  },
  computed: {
    ...mapState({
      count: (state) => state.count,
      countAlisas: COUNT,
      countPlusLocalState(state) {
        return state.count + +this.localCount;
      },
    }),
    ...mapGetters([GET_COUNT]),
  },
  methods: {
    increase() {
      this.$store.commit({
        type: COUNT_INCREMENT,
        amount: 5,
      });
    },
    increaseBy() {
      this.$store.commit({
        type: COUNT_INCREMENT,
        amount: +this.num,
      });
    },
    incrementAsync() {
      this.$store.dispatch({
        type: ASYNC_INCREMENT,
        amount: 10,
      });
    },
  },
};
</script>
