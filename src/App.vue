<template>
  <HeaderView></HeaderView>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/myhome">MyHome</router-link> |
    <router-link to="/cats/list">CatsList</router-link>

  </nav>
  <router-view/>
</template>

<script lang="ts">
import HeaderView  from './components/common/HeaderView.vue'
export default {
  name: 'App',
  components: {
    HeaderView 
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
