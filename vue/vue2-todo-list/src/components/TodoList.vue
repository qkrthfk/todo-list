<template>
  <div>
    <ul>
      <li class="shadow"
        v-for="(itemObj, index) in propsdata"
        v-bind:key="index">
        <i 
          class="fas fa-check check__button"
          :class="{'check__completed-button': itemObj.completed}"
          v-on:click="toggleItem(index)"></i>
          <span :class="{'completed': itemObj.completed}">
            {{ itemObj.item }}
          </span>
          <span class="remove__button" v-on:click="removeItem(index)">
            <i class="fas fa-trash-alt"></i>
          </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  methods: {
    removeItem(index) {
      this.$emit('removeItem', index);
    },
    toggleItem(index){
      this.$emit('toggleItem', index);
    }
  }
}
</script>

<style scoped>

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: #ffffff;
  border-radius: 5px;
}

.remove__button {
  margin-left: auto;
  color: #de4343;
}

.check__button {
  line-height: 55px;
  color: #62acde;
  margin-right:10px;
}

.check__completed-button {
  color: #b3adad;
}

.completed {
  text-decoration: line-through;
  color: #b3adad;
}
</style>