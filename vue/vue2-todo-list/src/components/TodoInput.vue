<template>
  <div class="input__container shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodoItem"/>
    <span class="button__container" v-on:click="addTodoItem">
      <i class="fas fa-plus add__button"></i>
    </span>

    <!-- Modal -->
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <i class="fas fa-times close_modal_button" @click="showModal = false"></i>
      </h3>
      <div slot="body">값을 입력해주세요</div>
    </modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
  components: {
    Modal
  },
  data() {
    return {
      newTodoItem: '',
      showModal: false,
    }
  },
  methods: {
    addTodoItem(){
      if(this.newTodoItem === '') {
        this.showModal = !this.showModal;
        return;
      }

      // this.$emit('addNewItem', this.newTodoItem);
      this.$store.commit('addNewTodoItem', this.newTodoItem);
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

  .close_modal_button {
    color: #42b983;
  }
</style>