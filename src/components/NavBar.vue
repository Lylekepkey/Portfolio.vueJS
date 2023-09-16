<template>
  <header id="navbar1" :class="['navbar', { sticking: isSticky }]">
    <div class="wrapper">
      <div class="header">
        <img class="logo" src="https://i.postimg.cc/YS5gfXsv/1683206946785-thumbnail.jpg">
        <div class="text">
          <ul class="nav-list">
            <li><router-link :to="{path: '/Home'}"><a @click="">Home</a></router-link></li>
            <li><router-link :to="{path: '/Resume'}">Resume</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Vue from "vue";
import VueScrollTo from "vue-scrollto";
export default {
  data() {
        return {
            isSticky: false
        };
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll);
    },
   methods: {
    onScroll() {
        console.log('Scrolling');
        this.isSticky = window.scrollY > 0;
    },
    scrollToSection(sectionId){
        this.$scrollTo(sectionId, 500, {easing:"ease-in"});
    },
},
};

</script>

<style>
.navbar {
    --_bg: #d9d9d9;
    --_logo-width: 70px;
    --_nav-link-color: black;
    
    padding: 1rem;
    background-color: var(--_bg);
    position: sticky;
    top:0;
    z-index: 9999;
}

.navbar * {
    transition: 500ms;
}
.navbar.sticking {
    --_bg: black;
    --_logo-width:50px;
    --_nav-link-color: lightgrey;
}
.navbar a {
    color: var(--_nav-link-color);
}


.header {
    display: flex;
    justify-content: space-between;
}

.navbar a:hover,
.navbar a:focus {
    opacity: 0.8;
}
.logo {
    width: var(--_logo-width);
}

.nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap:clamp(0.5rem, 5vw, 2rem);
  }
  
  .wrapper {
    width: min(65rem , 100% - 2rem);
    margin-inline: auto;
  }
  
  .text {
  margin-top: auto;
  margin-bottom: auto;
}

@media (min-width: 315px) and (max-width: 350px) {
    .navbar {
        width: 745px !important;
    }
}
@media (min-width: 350px) and (max-width: 400px) {
    .navbar {
        width: 747px !important;
    }
}
@media (min-width: 400px) and (max-width: 450px) {
    .navbar {
        width: 750px !important;
    }
}
@media (min-width: 450px) and (max-width: 531px) {
    .navbar {
        width: 777px;
    }
}
@media (min-width: 531px) and (max-width: 605px) {
    .navbar {
        width: 815px;
    }
}
@media (min-width: 605px) and (max-width: 919px)  {
    .navbar {
        width: 950px;
    }
}
</style>
  