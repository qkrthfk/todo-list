<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addNewItem="addNewTodoItem"></TodoInput>
    <TodoList 
      v-bind:propsdata="todoItems"
      v-on:removeItem="removeTodoItem"
      v-on:toggleItem="toggleCompletedItem">
    </TodoList>
    <TodoFooter
      v-on:clearItem="clearAllTodoItem"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  data() {
    return {
      todoItems: [],
    }
  },
  created() {
    if(localStorage.length < 0) return;

    for(let i = 0; i < localStorage.length; i++) {
      if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
        const itemObj = JSON.parse(localStorage.getItem(localStorage.key(i)));
        this.todoItems.push(itemObj);
      }
    }
  },
  methods: {
    addNewTodoItem(newTodoItem){
      let obj = { completed: false, item: newTodoItem };
      localStorage.setItem(newTodoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeTodoItem(index) {
      localStorage.removeItem(this.todoItems[index].item);
      this.todoItems.splice(index, 1);
    },
    toggleCompletedItem(index){
      this.todoItems[index].completed = !this.todoItems[index].completed;
      
      localStorage.removeItem(this.todoItems[index].item);
      localStorage.setItem(this.todoItems[index].item, JSON.stringify(this.todoItems[index]));
    },
    clearAllTodoItem() {
      localStorage.clear();
      this.todoItems = [];
    }
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border: none;
  outline: none;
}

button {
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}
</style>
