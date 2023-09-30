<template>
  <NavBar />
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import Testimonial from './components/Testimonial.vue'
import Progress from './components/ProgressBar.vue'
import Project from './components/Project.vue'
export default ({
  components: { NavBar, Contact,  Project, Progress, Testimonial, Footer, }
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
  overflow-X: hidden;
  padding: 0;
}
body {
  background-color: #B1DDF1;
  /* overflow-x: hidden; */
}

</style>
