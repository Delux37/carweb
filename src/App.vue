
<template>
  <router-view></router-view>
</template>

<script>
export default {
  created(){
    this.$store.dispatch('tryLogin')
    console.log("trie to login")
  }
}
</script>

<style>
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 1px;
  background-color: #dfe6e9;
}
</style>
