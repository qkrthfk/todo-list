<template>
  <div class="footer__container">
    <span class="clear__button" v-on:click="clearItem">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearItem() {
      this.$emit('clearItem');
    }
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