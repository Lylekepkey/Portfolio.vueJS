<template>
    <div class="container" id="exp">
        <div class="contain">
            <div id="cards" v-if="educations, experiences">
                <div class="card card1" v-for="education of educations">
                    <div class="card-border"></div>
                    <div class="card-content" >
                        <h3>{{ education.name }}</h3>
                        <p> 
                          {{ education.description }}
                        </p>
                    </div>
                </div>

                <div class="card card2" v-for="experience of experiences">
                    <div class="card-border"></div>
                    <div class="card-content">
                        <h3>{{ experience.title }}</h3>
                        <p>
                          {{ experience.description }}
                        </p>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>
<script>
export default {
  computed: {
    educations() {
      return this.$store.state.educations;
    },
    experiences() {
      return this.$store.state.experiences;
    },
  },
  mounted() {
    
    // document.getElementById("cards").onmousemove = e => {
        // for(const card of document.getElementsByClassName("card")) {
          // const rect = card.getBoundingClientRect(),
          // x = e.clientX - rect.left,
                // y = e.clientY - rect.top;
                // 
                // card.style.setProperty("--mouse-x", `${x}px`);
                // card.style.setProperty("--mouse-y", `${y}px`);
              // };
            // },
            this.$store.dispatch("fetchEducations");
            this.$store.dispatch("fetchExperiences");
          }
};


</script>

<style scoped>
.container-2 {
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 50px;
}
.contain {
  background: #d9d9d9;
  border-radius: 68px;
  width: 605px;
  height: 600px;
  margin-right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}


:root {
    --bg-color: rgb(20,20,20);
    --card-color: rgb(23,23,23);
} 

.cards-container {
    background-color: black;
    display: flex;
    height: 57vh;
    justify-content: center;
    margin: 0px;
    padding-top: 100px;
    overflow: hidden;
}
#cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
    max-width: 500px;
    width: calc(100% - 20px);
    /* background-color: black; */
}

#cards:hover > .card > .card-border {
    opacity: 1;
}

.card {
    background-color: rgb(255, 255, 255, 0.1);
    border-radius: 10px;
    /* color: rgb(204, 204, 255); */
    height: 260px;
    width: 300px;
    
}
.card::before,
.card > .card-border {
    background: radial-gradient(
        800px circle at var(--mouse-x) var(--mouse-y),
        rgba(255, 255, 255, 0.06),
        transparent 40%
    );
    border-radius: inherit;
    content: "";
    height: 100%;
    left: 0px;
    opacity: 0;
    position: absolute;
    top:0px;
    transition: opacity 400ms;
    width: 100%;
    z-index: 2;
}
.card::before {
    background: radial-gradient(
        800px circle at var(--mouse-x) var(--mouse-y),
        rgba(255, 255, 255, 0.06),
        transparent 40%
    );
    z-index: 3;
}
.card > .card-border {
    background: radial-gradient(
        400px circle at var(--mouse-x) var(--mouse-y),
        rgba(255, 255, 255, 0.3),
        transparent 40%
    );
    z-index: 1;
}

.card > .card-content {
    background-color: var(--card-color);
    border-radius: inherit;
    height: calc(100% - 2px);
    margin: 1px;
    width: calc(100% - 2px);
    z-index: 2;
  }
  .card-content {
    /* margin-top: auto;
    margin-bottom: auto; */
    text-align: center;
}

@media (min-width: 315px) and (max-width: 355px) {
  .container {
    display:grid;
    grid-template-rows: 1fr;
    grid-template-areas:
    "contain"
    ;
    justify-content: center;
    margin-left: 350px;
  }
  .contain{
    margin-left:46px;
  }
}
@media (min-width: 355px) and (max-width: 450px) {
  .container {
    display:grid;
    grid-template-rows: 1fr;
    grid-template-areas:
    "contain"
    ;
    justify-content: center;
    margin-left: 330px;
  }
  .contain{
    margin-left:40px;
  }
}
@media (min-width: 450px) and (max-width: 605px) {
  .container {
    display:grid;
    grid-template-rows: 1fr;
    grid-template-areas:
    "contain"
    ;
    justify-content: center;
    margin-left: 330px;
  }
  .contain{
    margin-left:40px;
  }
}
@media (min-width:605px) and (max-width: 700px) {
  .container{
    display: grid;
    grid-template-rows: 1fr;
    grid-template-areas:
    "contain"
    ;
    justify-content: center;
    max-width: 120vh;
  }

  .contain{
    margin: 0;
  }
}

@media (min-width:700px ) and (max-width: 1310px) {
  .container{
    display: grid;
    grid-template-rows: 1fr;
    grid-template-areas:
    "contain"
    ;
    justify-content: center;
    margin-left: 150px;
    max-width: 150vh;
  }
  .contain {
    margin-left: 46px;
  }
}


</style>