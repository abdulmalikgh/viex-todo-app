import axios from 'axios';

const state = {
    todos: [ ]
};

const getters = {
allTodos: (state) => state.todos,
};

const actions = {
    fetchTodos({commit}) {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(
            (response)=>{
                commit('setTodos',response.data)
            }
        )
    }
};

const mutations = {
    setTodos: (state,todos) => {
        state.todos = todos;
    }
};

export default{
    state,
    getters,
    actions,
    mutations
}