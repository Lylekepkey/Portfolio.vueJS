<template>
  <div class="container" id="HOME">
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
</template>

<script>
export default {
  name: 'HelloWorld',
};

function downloadFile() {
  window.open()
};


</script>

<style scoped>
a{
  text-decoration: none;
  color: #b47ab4;
}
.container {
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
  position: sticky;
  padding: 10px;
  background: #d9d9d9;
  border-radius: 68px;
  width: 605px;
  height: 600px;
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

</style>
