<template lang="">
  <div class="user">
    <h1>This is User Page</h1>
    <h2>{{ userId }}</h2>
    <h2>{{ getName(userId) }}</h2>
    <input type="text" v-model="nameInput" />
    <button @click="changeName">modify</button>
  </div>
</template>
<script>
import { CHANGE_NAME } from "@/store/type/mutation-type";
import { mapGetters, mapState } from "vuex";
import { USERS } from "@/store/type/state-type";
import { GET_NAME } from "@/store/type/getters-type";
export default {
  data() {
    return {
      userId: "",
      nameInput: "",
    };
  },
  created() {
    this.userId = this.$route.params.id;
  },
  computed: {
    ...mapState([USERS]),
    ...mapGetters([GET_NAME]),
  },
  methods: {
    changeName() {
      this.$store.commit({
        type: CHANGE_NAME,
        name: this.nameInput,
        id: this.userId,
      });
    },
  },
};
</script>
