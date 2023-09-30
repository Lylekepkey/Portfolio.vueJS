<template>
  <div class="container-1" id="HOME">
    <!-- Left cont -->
    <div :class="['fixed-temp', { sticking: isSticky }]">

        <!-- Top nav -->
      <div class="top-fixed-text">
          <div class="name">
            <h1>Lyle</h1>
          </div>
          <div class="next-text">
            <p>Front-end <br> Web Developer</p>
          </div>
      </div>

      <img class="image" src="https://i.postimg.cc/zvLRNh8n/C12-C2-Lyle-Kepky-1.jpg" />


      <div class="email">
        <a href="#footer" >lylekepkey@gmail.com</a>
      </div>
      <div class="location">
        Cape Town, South Africa
      </div>
      <div class="location">
        <a href="" target="_blank" download="Lyle Kepkey.pdf">Download CV</a>
      </div>
    </div>

    <div class="flex-right">
      <div class="lil-description">
        <div class="text2">  
          <p>Hello There! <br>
          I'm Lyle an aspiring Front-end developer. <br>
          I'm a curious and creative problem-solver, always eager to 
          learn and grow. I value collaboration and strive to make a positive impact.
          </p>
        </div>
        <div class="exp">
          <p>
            <a href="exp">Experience</a>
          </p>
        </div>
        <div class="proj">
          <div class="proj-inner">
            <p>
              <a href="#">Projects completed and
              in the process of being completed</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
<!-- About -->
  <div class="flex-right" style="margin-top: -40%;">
    <div class="container" id="ABOUT">
          <div></div>
          <div class="right">
              <div class="lil-description">
                  <div class="text2">
                      <h1>About Me.</h1>
                      <p>Web Designer</p>
                      <p class="">I'm an enthusiastic and adaptable individual with a passion for embracing new challenges.
                        I enjoy learning and believe in the power of collaboration to create meaningful experiences and 
                        positive change.
                      </p>
                  </div>
              </div>
          </div>
      </div>
    </div>
<!-- work/edu -->
<div class="container-2" id="exp">
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
<!-- Project -->
<div class="container-3" id="exp">
        <div class="contain-2">
    <div class="card-1" >
        <div class="card-border-1"></div>
        <div class="card-content-1" v-for="project of projects" :key="project.id" :project="project">
            <div id="text-card-1" >
            <h3>Project Links</h3>
            <a :href="project.netlify" target="_blank"><p>{{ project.name }}</p></a>
            <iframe :src="project.netlify" />
            </div>
        </div>
    </div>
</div>
</div>
<!-- Progress -->
<div class="container-4">
        <div class="lil-description-2">
            <div class="container-5">
                <div class="card-1">
                    <div class="percent" style="--clr:#04fc43;--num:85">
                        <div class=dot></div>
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div class="number">
                            <h2>
                                85<span>%</span>
                            </h2>
                            <p>HTML & CSS</p>
                        </div>
                    </div>
                </div>
                <div class="card-1">
                    <div class="percent" style="--clr:#04fc43;--num:60">
                        <div class=dot></div>
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div class="number">
                            <h2>
                                60<span>%</span>
                            </h2>
                            <p>JavaScript</p>
                        </div>
                    </div>
                </div>
                <div class="card-1">
                    <div class="percent" style="--clr:#04fc43;--num:11">
                        <div class=dot></div>
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div class="number">
                            <h2>
                                11<span>%</span>
                            </h2>
                            <p>MySQL</p>
                        </div>
                    </div>
                </div>
                <div class="card-1">
                    <div class="percent" style="--clr:#04fc43;--num:61">
                        <div class=dot></div>
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div class="number">
                            <h2>
                                61<span>%</span>
                            </h2>
                            <p>Python</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- testimonial -->
    <div class="container-8">
        <div class="lil-description-8">
        <section  id="testimonial">
                  <div class="m-5" style="text-align: center;">
                    <h2>Testimonial</h2>
                    <div class="cards-container-5 m-5" v-if="testimonials">
                      <div id="cards5"  >
      
                          <div class="card-5" v-for="testimonial in testimonials">
                              <div class="card-border-5"></div>
                              <div class="card-content-5">
                                <img :src="testimonial.image" style="width:200px">
                                <p>{{ testimonial.message }}</p>
                              </div>
                          </div>
                       </div>
                    </div>
                  </div>
            </section>
        </div>
    </div>
    <!-- Contact -->
    <div class="container-11" id="Contact">
        <div></div>
        <div class="right">
            <div class="contain-11">
                <form action="https://formspree.io/f/myyalyzb" method="POST">
                    <div class="inner">
                        <input name="name" type="text" class="feedback-input" placeholder="Name" />   
                        <input name="email" type="text" class="feedback-input" placeholder="Email" />
                        <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
                        <input type="submit" value="SUBMIT"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Contact END -->


    <!-- Footer -->
    <div class="end">
    <footer id="footer">
            <div class="container-12">
                <div class="text">
                    <p>L.K&copy;</p>                
                    <div class="icons">
                        <a href="https://www.linkedin.com/in/lyle-kepkey-17b830251/" target="blank"><img class="footer-img " src="https://i.postimg.cc/yN8qf0T5/linkedin.png" alt="LinkedIn"></a>
                        <a href="https://github.com/Lylekepkey" target="blank"><img class="footer-img " src="https://i.postimg.cc/3NK2pJhg/github.png" alt="GitHub"></a>
                        <a href=""><img class="footer-img " src="https://i.postimg.cc/SsrhQqGX/whatsapp.png" alt="WhatsApp"></a>
                        <a href=""><img class="footer-img " src="https://i.postimg.cc/8PsmbH99/email.png" alt="Email"></a>
                    </div>
                </div>
            </div>
        </footer>
    </div>


    <!-- Footer end -->

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
    projects() {
      return this.$store.state.projects;
    },
    testimonials() {
      return this.$store.state.testimonials;
    },
  },


  mounted() {
            this.$store.dispatch("fetchEducations");
            this.$store.dispatch("fetchExperiences");
            this.$store.dispatch("fetchProjects");
            this.$store.dispatch("fetchTestimonials");

          }
}

</script>

<style scoped>
a{
  text-decoration: none;
  color: #b47ab4;
}
.container-1 {
  margin-top: 90px;
  display: flex;
  justify-content: space-between;
  max-width:1350px;
  width: auto;
}

/* top text */
.top-fixed-text {
  display: flex;
  justify-content: center;
  width:550px;
  /* background-color:blue ; */
}

/* Name */
.name {
  margin-right: 150px;
  padding: 0 60px;
  color: #000000;
  font: 400 30px "Inter", sans-serif;
}

/* Image */
.image {
  border-radius: 68px;
  width: 237px;
  height: 350px;
}
.fixed-temp {
  position: fixed;
  padding: 10px;
  background: #d9d9d9;
  border-radius: 68px;
  width: 605px;
  height: 580px;
  margin-left: 50px;
  margin-top: 20px;
}


/* Text-next to name */
.next-text {
  padding:10px;
  /* background-color: white; */
  color: #000000;
  text-align: center;
  font: 400 20px "Inter", sans-serif;
}

.email {
  padding-top: 10px;
  color: #000000;
  text-align: center;
  font: 400 30px "Inter", sans-serif;
}

.location {
  padding-top: 10px;
  color: #000000;
  text-align: center;
  font: 400 30px "Inter", sans-serif;
}


/* right */
.flex-right{
  display: flex;
  width: 1350px;
  /* background-color: red; */
  justify-content: end;
}
.lil-description {
  background: #d9d9d9;
  border-radius: 68px;
  width: 605px;
  margin-top: 20px;
  height: 600px;
  margin-right: 50px;
}

.text2{
  padding:50px;
  color: #000000;
  text-align: left;
  font: 400 30px "Inter", sans-serif;
}

.exp {
  font: 400 30px "Inter", sans-serif;
}
.proj {
  padding-top: 20px;
  margin: 0px 0px 0px 130px;
  text-align: center;
  font: 400 30px "Inter", sans-serif;
  width: 320px;
  /* background-color: black; */
}


@media (min-width: 315px) and (max-width: 605px) {
  .container {
    display:grid;
    gap: 1rem;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
    "fixed-temp"
    "lil-description"
    ;
  }
  .lil-description{
    margin-left:46px;
    margin-top: 50px;
  }
}

@media (min-width:605px) and (max-width: 700px) {
  .container{
    display: grid;
    gap: 1rem;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
    "fixed-temp"
    "lil-description"
    ;
    justify-content: center;
    max-width: 120vh;
  }

  .fixed-temp{
    margin: 0;
  }

  .lil-description{
    margin: 0;
    margin-top: 50px;
  }
}

/*  About */


/* Work-Edu */
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

/* Project */
.container-3 {
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 50px;
}
.contain-2 {
  background: #d9d9d9;
  border-radius: 68px;
  width: 605px;
  height: 1200px;
  margin-right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* Progress */
.container-4 {
    margin-top:50px;
    display: flex;
    justify-content: end;
    overflow: hidden;
}
.lil-description-2 {
  background: #d9d9d9;
  border-radius: 68px;
  width: 605px;
  height: 600px;
  margin-right: 50px;
}


.container-5{
    position: relative;
    display: flex;
    flex-wrap:wrap;
    gap:20px;
    justify-content: center;
    align-items: center;
    
}

.container-5 .card-1 {
    display: flex;
    justify-content: center;
    margin-top: 45px;
    border-radius: 10px;
    position:relative;
    width: 220px;
    height: 200px;
    background-color: #c3c3c3;
}

.container-5 .card-1 .percent {
    position: relative;
    margin-top: 30px;
    width: 150px;
    height: 150px;
    overflow: hidden;
}
.container-5 .card-1 .percent svg {
    position: relative;
    width: 150px;
    height: 150px;
    transform: rotate(270deg);
}
.container-5 .card-1 .percent svg circle {
    width: 100%;
    height: 100%;
    fill: transparent;
    stroke-width: 2;
    stroke: #191919;
    transform: translate(5px, 5px);
}
.container-5 .card-1 .percent svg circle:nth-child(2) {
    stroke: var(--clr);
    stroke-dasharray: 440;
    stroke-dashoffset: calc(440 - (440 * var(--num)) / 100);
    opacity: 0;
    animation: fadeIn 1s linear forwards;
    animation-delay: 2.5s;
}
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

/* dot */
.dot {
    position: absolute;
    inset: 5px;
    z-index: 10;
    animation: animateDot 2s linear forwards; 
}

@keyframes animateDot {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(calc(3.6deg * var(--num)));
    }
}

.dot::before {
    content: '';
    position: absolute;
    top: -5px;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--clr);

    box-shadow: 0 0 10px var(--clr),
    0 0 30px var(--clr);
}
/* dot end */

.number{
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    opacity: 0;
    animation: fadeIn 1s linear forwards;
    animation-delay: 2.5s;
}
.number h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 700;
    font-size: 2.5em;
}
.number h2 span {
    font-weight: 300;
    font-size: 0.5em;
}
.number p {
    font-weight: 300;
    font-size: 0.75em;
    margin-top: 5px;
    color: rgba(255,255,255,0.75);
    letter-spacing: 2px;
}
/* Testimonial */

.container-8 {
  margin-top:50px;
  display: flex;
  justify-content: end;
}

/* TESTIMONIAL */
#testimonial{
    margin-top: 20px;
}
.cards-container-5 {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
}
#cards5 {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    max-width: 926px;
    width: 100%;
    justify-content: center;
}

.card-5 {
    background-color: rgb(255, 255, 255, 0.1);
    border-radius: 10px;
    height: 570px;
    width: 300px;
    margin: 8px;
}
.card-content-5 {
    padding-top: 10px;
    text-align: center;
}
.card-content-5 img {
    width: 170px;
}
.lil-description-8 {
  background: #d9d9d9;
  border-radius: 68px;
  width: 605px;
  margin-top: 20px;
  /* height: 600px; */
  margin-right: 50px;
}

/* Contact */
.container-11 {
  display: flex;
  justify-content: end;
  margin-top: 80px;
}

.contain-11 {
  background: #d9d9d9;
  border-radius: 68px;
  width: 605px;
  height: 600px;
  margin-right: 50px;
}


form { max-width:420px; margin:50px auto; }
.inner {
    padding-top: 90px;
}

.feedback-input {
  color:white;
  font-family: Helvetica, Arial, sans-serif;
  font-weight:500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  background-color: transparent;
  border:2px solid #CC6666;
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width:100%;
  box-sizing: border-box;
  outline:0;
}

.feedback-input:focus { border:2px solid #CC4949; }

textarea {
  height: 150px;
  line-height: 150%;
  resize:vertical;
}

[type="submit"] {
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  width: 100%;
  background:#CC6666;
  border-radius:5px;
  border:0;
  cursor:pointer;
  color:white;
  font-size:24px;
  padding-top:10px;
  padding-bottom:10px;
  transition: all 0.3s;
  margin-top:-4px;
  font-weight:700;
}
[type="submit"]:hover { background:#CC4949; }



/* Footer */
.footer-img {
 height: 40px;
 aspect-ratio: 5/4;
 object-fit: contain;
 margin-top: 10px;
}
.end{
    max-width: 1400px;
    display: flex;
    justify-content: end;
}

footer {
    width: 670px;
    background-color: hsl(0, 0%, 85%);
    border-radius: 50px 0px 0px 0px;
    margin-top: 50px;
    padding-top: 10px;
    padding-bottom: 20px;
}
.container-12{
    display:flex;
    justify-content: center;
}
.text {
    font-size: smaller;
}

/* END */

@media (min-width:700px ) and (max-width: 1310px) {
  .container{
    display: grid;
    gap:1rem;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
    "fixed-temp"
    "lil-description"
    ;
    justify-content: center;
    margin-left: 150px;
    max-width: 150vh;
  }
  .lil-description {
    margin-left: 46px;
  }
}
@media (min-width:1339px ) and (max-width:1400px) {
  .container{
    display: grid;
    gap:1rem;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
    "fixed-temp"
    "lil-description"
    ;
    justify-content: center;
    /* margin-left: 150px; */
    max-width: 200vh;
  }
  .lil-description {
    margin-left: 46px;
  }
}

</style>
