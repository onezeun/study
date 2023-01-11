<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div v-for="item in rooms" :key="item">
    <h4>{{item.name}}</h4>
    <p>{{item.price}} 만원</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      rooms: [
        {name : '역삼동원룸', price:'60'}, 
        {name : '천호동원룸', price:'50'},
        {name : '마포구원룸', price:'40'}]
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
