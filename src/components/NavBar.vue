<template>
  <header id="navbar1" class="navbar">
    <div class="wrapper">
      <div class="header">
        <img class="logo" src="https://i.postimg.cc/YS5gfXsv/1683206946785-thumbnail.jpg">
        <div class="text">
          <ul class="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Resume</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      const navbar = document.querySelector(".navbar");
      const navbarRect = navbar.getBoundingClientRect();
      const isIntersecting = navbarRect.top <= 0;
      navbar.classList.toggle("sticking", isIntersecting);
    },
  },
};
</script>

<style>
.navbar {
    --_bg: #d9d9d9;
    --_logo-width: 90px;
    --_nav-link-color: black;
    
    padding: 1rem;
    background-color: var(--_bg);
    position: sticky;
    top:0;
    padding-top: 20px;
}

.navbar * {
    transition: 500ms;
}
.navbar.sticking {
    --_bg: black;
    --_logo-width:90px;
    --_nav-link-color: lightgrey;
}
.navbar a {
    color: var(--_nav-link-color);
}

#navbar1 {
    margin-bottom: 30px;
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
  margin-top: 20px;
}

@media only screen and (max-width: 605px) {
    .navbar {
        width: 700px;
    }
}
@media (min-width: 700px) and (max-width: 919px)  {
    .navbar {
        width: 920px;
    }
}
</style>
  