<template>
  <div class="addTodo">
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit.prevent="addTodo">
        <input type="text" v-model="title" placeholder="add todo">
        <input type="submit" value="submit"> 
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
 data() {
   return {
     title:''
   }
 },

 methods: {
  ...mapActions(['addTodo'])
 },
 addTodo() {
   this.addTodo(this.title);
 }
}
</script>

<style scoped>
  form{
    display: flex;
  }
  input[type='text'] {
    flex:10;
    padding:10px;
    border:1px solid #41b883;
    outline: 0;
  }
  input[type='submit'] {
    flex:2;
    background: #42b883;
    color:#fff;
    border:1px #42b883;
    cursor:pointer;
  }
</style>
