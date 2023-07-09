<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'NavBar',
  components: {
    NavBar
  },
  name: 'HomeView',
  components: {
    HelloWorld
  },
  name: 'Footer',
  components: {
    Footer
  },
}
</script>

