<template>
  <div class="about">
    <h1>about page</h1>
  </div>
  <div>
    <h2>Todo List</h2>
    <div v-for="todo in getTodos" :key="todo.text">
      <li v-if="!todo.done">
        {{ todo.text }}
      </li>
    </div>
    <h3 class="done">Done</h3>
    <div v-for="todo in getTodos" :key="todo.text">
      <li v-if="todo.done">
        {{ todo.text }}
      </li>
    </div>
    <h4>done count: {{ doneTodosCount }}</h4>
  </div>
</template>
<script>
import { DONE_TODOS_COUNT, GET_TODOS } from "@/store/type/getters-type";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters([DONE_TODOS_COUNT, GET_TODOS]),
  },
};
</script>

<style>
div {
  padding: 0;
}
h2 {
  margin: 10px;
}
h3.done {
  margin-bottom: 5px;
}
li {
  padding: 0.3em;
}
</style>
