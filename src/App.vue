
<template>
<div>
  <nav-bar></nav-bar>
  <transition name="route" mode="out-in">
    <router-view>
    </router-view>
  </transition>
</div>
</template>

<script>
import navBar from './components/nav-bar.vue'
export default {
  components:{
    navBar,
  },
  created(){
    this.$store.dispatch('tryLogin')
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


.route-enter-from{
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to{
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active{
  transition: all 0.3s ease-out
}

.route-leave-active{
  transition: all 0.3s ease-in
}

.route-enter-to,
.route-leave-from{
  opacity: 1;
  transform: translateY(0);
}

</style>
