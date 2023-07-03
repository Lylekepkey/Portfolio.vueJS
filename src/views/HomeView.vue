<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  name: 'NavBar',
  components: {
    NavBar
  }
}
</script>
