<template>
    <div>
        <h3>Todos</h3>
        <div class="todos">
            <div class="todo" v-for="todo in allTodos" :key="todo">
              {{todo.title}}
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters } from 'vuex';
export default {
    name: "Todos",
    computed:mapGetters(['allTodos'])
}
</script>

<style scoped>
.todo {
    border:1px solid #ccc;
    background: #41b883;
    padding:1rem;
    border-radius: 5px;
    text-align:center;
    position:relative;
    cursor: pointer;
}
</style>