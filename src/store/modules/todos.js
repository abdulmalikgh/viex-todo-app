import axios from 'axios';

const state = {
    todos: [ ]
};

const getters = {
allTodos: (state) => state.todos,
};

const actions = {
    fetchTodos({ commit }) {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(
            (response)=>{
                commit('setTodos',response.data)
            }
        )
    },
    addTodo({ commit }, title) {
        axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false}).then( response => {
          commit('newTodo',response.data)
        })
    },
    deleteTodo({commit}, id){
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
         commit('removeTodo', id);
    }
};

const mutations = {
    setTodos: (state,todos) => {
        state.todos = todos;
    },
    newTodo: (state, todo) => {
        state.todos.unshift(todo)
    },
    removeTodo: (state,id)=>{
      state.todo = state.todos.filter(todo => {
          todo.id !== id;
      })
    }
};

export default{
    state,
    getters,
    actions,
    mutations
}