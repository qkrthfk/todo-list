import Vue from 'vue';
import Vuex from 'vuex';

// use : vue의 플러그인 기능
Vue.use(Vuex);

const storage = {
  fetch() {
    const itemArr = [];
    if(localStorage.length < 0) return;

    for(let i = 0; i < localStorage.length; i++) {
      if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
        const itemObj = JSON.parse(localStorage.getItem(localStorage.key(i)));
        itemArr.push(itemObj);
      }
    }

    return itemArr;
  }
}

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  getters: {
    getTodoItems(state) {
      return state.todoItems;
    }
  },
  mutations: { // state 값을 변경할 수 있는 유일한 방법, commit으로 동작
    addNewTodoItem(state, item) {
      const obj = { completed: false, item: item };
      localStorage.setItem(item, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeTodoItem(state, index) {
      localStorage.removeItem(state.todoItems[index].item);
      state.todoItems.splice(index, 1);
    },
    toggleCompletedItem(state, index){
      state.todoItems[index].completed = !state.todoItems[index].completed;
      
      localStorage.removeItem(state.todoItems[index].item);
      localStorage.setItem(state.todoItems[index].item, JSON.stringify(state.todoItems[index]));
    },
    clearAllTodoItem(state) {
      localStorage.clear();
      state.todoItems = [];
    }
  }
});