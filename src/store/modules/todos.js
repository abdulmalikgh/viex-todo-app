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
    }
};

const mutations = {
    setTodos: (state,todos) => {
        state.todos = todos;
    },
    newTodo: (state, todo) => {
        state.todos.unshift(todo)
    }
};

export default{
    state,
    getters,
    actions,
    mutations
}