<template>
  <NavBar />
  <router-view/>
  <HelloWorld />
  <About />
  <Footer />
</template>

<script>
import NavBar from './components/NavBar.vue'
import HelloWorld from './components/HelloWorld.vue'
import About from './components/About.vue'
import Footer from './components/Footer.vue'
export default ({
  components: { NavBar, HelloWorld, About, Footer, }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color: #B1DDF1;
  /* overflow-x: hidden; */
}

</style>
