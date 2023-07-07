<template>
<div class="about">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
</div>
</template>

<script>
// @ is an alias to /src
import About from '@/components/About.vue';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
name: 'About',
components: {
    About
},
name: 'NavBar',
components: {
    NavBar
},
name: 'Footer',
components: {
    Footer
},
}
</script>