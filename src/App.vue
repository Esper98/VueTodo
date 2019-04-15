<template>
  <div id="app">
    <router-link to="/">Index</router-link>
    <router-link to="/bar">Go to About</router-link>
    <router-view></router-view>
    <Todo/>
  </div>
</template>

<script>
import Todo from './components/Todo.vue'

export default {
  name: 'app',
  components: {
    Todo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
