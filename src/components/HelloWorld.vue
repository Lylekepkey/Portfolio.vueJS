<template>
  <div class="container">
    <!-- Left cont -->
    <div class="fixed-temp">

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
        <a @click="scrollMeTo(contact)" >lylekepkey@gmail.com</a>
      </div>
      <div class="location">
        Cape Town, South Africa
      </div>
    </div>

    <div class="lil-description">
      <div class="text2">  
        <p>Hello There! <br>
        I'm Lyle an aspiring Front-end developer. <br>
        Right now I am in a love hate relationship with
        vue.js. Why you may ask? It's because vue isn't
        something I see myself using in the future😐 and I mean that 
        in everyway
        </p>
      </div>
      <div class="exp">
        <p>
          <a href="#">Experience</a>
        </p>
      </div>
      <div class="proj">
        <p>
          <a href="#">Projects completed and
           in the process of being completed</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  justify-content: space-between;
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
  width: 267px;
  height: 400px;
}
.fixed-temp {
  box-sizing: border-box;
  padding: 10px;
  background: #d9d9d9;
  border-radius: 68px;
  width: 605px;
  height: 800px;
}


/* Text-next to name */
.next-text {
  padding: 10px;
  /* background-color: white; */
  color: #000000;
  text-align: center;
  font: 400 20px "Inter", sans-serif;
}

.email {
  padding-top: 50px;
  color: #000000;
  text-align: center;
  font: 400 30px "Inter", sans-serif;
}

.location {
  padding-top: 50px;
  color: #000000;
  text-align: center;
  font: 400 30px "Inter", sans-serif;
}


/* right */
.lil-description {
  background: #d9d9d9;
  border-radius: 68px;
  width: 605px;
  height: 600px;
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
  text-align: center;
  font: 400 30px "Inter", sans-serif;
  width: 300px;
}


@media only screen and (max-width: 700px) {
  .container{
    display: grid;
    gap: 1rem;
    height: 100vh;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
    "fixed-temp"
    "lil-description"
    ;
  }
}

</style>
