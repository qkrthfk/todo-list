<template>
  <div>
    <transition-group name="list" tag="ul">
      <li class="shadow"
        v-for="(itemObj, index) in todoItems"
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
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  // props: ['propsdata'],
  computed: {
    // todoItems() {
    //   return this.$store.getters.getTodoItems;
    // }
    ...mapGetters({
      todoItems: 'getTodoItems'
    })
  },
  methods: {
    ...mapMutations({
      removeItem: 'removeTodoItem',
      toggleItem: 'toggleCompletedItem'
    }),
    // removeItem(index) {
    //   // this.$emit('removeItem', index);
    //   this.$store.commit('removeTodoItem', index);
    // },
    // toggleItem(index){
    //   // this.$emit('toggleItem', index);
    //   this.$store.commit('toggleCompletedItem', index);
    // }
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
  color:
   #b3adad;
}

/* 리스트아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}

.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

 </style>