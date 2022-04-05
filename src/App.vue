<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'user', params: { id: '4545' } }"
      >User</router-link
    >
  </nav>
  <router-view />
  <h2>{{ count }}</h2>
  <button @click="increase">sync +5</button>
  <button @click="incrementAsync">async +10</button>
</template>
<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increase() {
      this.$store.commit({
        type: "increment",
        amount: 5,
      });
    },
    incrementAsync() {
      this.$store.dispatch({
        type: "incrementAsync",
        amount: 10,
      });
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
