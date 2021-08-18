<template>
  <div class="input__container shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodoItem"/>
    <span class="button__container" v-on:click="addTodoItem">
      <i class="fas fa-plus add__button"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: '',
    }
  },
  methods: {
    addTodoItem(){
      if(this.newTodoItem === '') return;
      this.$emit('addNewItem', this.newTodoItem);
      this.clearInput();
    },
    clearInput() {
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped>
  inupt:focus {
    outline: none;
  }
  
  .input__container {
    background: #ffffff;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }

  .input__container input {
    width: 80%;
    font-size: 0.9rem;
  }

  .button__container {
    float: right;
    display: block;
    background: linear-gradient(to right, #6478FB, #8763FB);
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }

  .add__button {
    color: #ffffff;
    vertical-align: middle;
  }
</style>