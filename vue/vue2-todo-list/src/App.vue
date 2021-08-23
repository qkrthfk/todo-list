<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- <TodoInput v-on:addNewItem="addNewTodoItem"></TodoInput>
    <TodoList 
      v-bind:propsdata="todoItems"
      v-on:removeItem="removeTodoItem"
      v-on:toggleItem="toggleCompletedItem">
    </TodoList>
    <TodoFooter
      v-on:clearItem="clearAllTodoItem"></TodoFooter> -->
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
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
    // ES6의 특징 - 객체의 속성명과 값이 같을 경우 생략 가능  
    // TodoHeader : TodoHeader,
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
    // store.js로 로직 이동
  },
  methods: {
    // store.js mutations로 이동
    
    // ES5
    // addNewTodoItem : function() {}
    // ES6 - Enhanced Literal Object 특징으로 function 생략이 가능
    /*
    addNewTodoItem(newTodoItem){
      const obj = { completed: false, item: newTodoItem };
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
    */
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
