<template>
     <header id="navbar1" class="navbar">
        <div class="wrapper">
            <div class="header">
                <img class="logo" src="https://i.postimg.cc/YS5gfXsv/1683206946785-thumbnail.jpg">
                <ul class="nav-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Resume</a></li>
                </ul>
            </div>
        </div>
     </header> 
</template>


<script>

const navbar = document.querySelector(".navbar");
const onScroll = document.createElement("div");


onScroll.setAttribute("data-scroll-watcher", "");

const navObserver = new IntersectionObserver((entries) => {
    navbar.classList.toggle("sticking", !entries[0].isIntersecting);
    },
    {rootMargin: "50px 0px 0px 0px"}
);

navObserver.observe(onScroll); 

</script>

<style scoped>
.navbar {
    --_bg: black;
    --_logo-width: 90px;
    --_nav-link-color: lightgrey;
    
    padding: 1rem;
    background-color: var(--_bg);
    position: sticky;
    top:0;
}
.navbar,
.navbar * {
    transition: 500ms;
}
.navbar.sticking {
    --_bg:green;
    --_logo-width:90px;
    --_nav-link-color: black;
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

</style>