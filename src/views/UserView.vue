<template lang="">
  <div class="user">
    <h1>This is User Page</h1>
    <h2>{{ userName }}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "UserView",
      userName: "",
    };
  },
  created() {
    this.userName = this.$route.params.id;
  },
};
</script>
