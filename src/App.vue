<template>
  <div id="app">
    <div class="container">
      <addTodo />
      <Todos />
    </div>  
  </div>
</template>

<script>
import Todos from './components/todos.vue';
import addTodo from './components/addTodo.vue';

export default {
  name: 'app',
  components: {
    Todos,
    addTodo
  }
}
</script>

<style>

 
</style>
