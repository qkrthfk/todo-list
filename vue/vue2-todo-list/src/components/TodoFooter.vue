<template>
  <div class="footer__container">
    <span class="clear__button" v-on:click="clearItem">Clear All</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations({
      clearItem: 'clearAllTodoItem'
    })
    // clearItem() {
    //   // this.$emit('clearItem');
    //   this.$store.commit('clearAllTodoItem');
    // }
  }
}
</script>

<style scoped>
  .footer__container {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: #ffffff;
    border-radius: 5px;
    margin: 10px auto;
 }

 .clear__button {
   color: #e20303;
   display: block;
 }
</style>