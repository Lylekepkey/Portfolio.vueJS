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
  height:5000px;
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
}
.name {
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
}
.fixed-temp {
  background: #d9d9d9;
  border-radius: 68px;
  width: 605px;
  height: 800px;
  position: relative;
}


/* Text-next to name */
.next-text {
  padding: 10px;
  /* background-color: white; */
}
.next-text {
  color: #000000;
  text-align: center;
  font: 400 20px "Inter", sans-serif;
  position: relative;
}

.email {
  padding-top: 50px;
}
.email {
  color: #000000;
  text-align: center;
  font: 400 30px "Inter", sans-serif;
  position: relative;
}

.location {
  padding-top: 50px;
}
.location {
  color: #000000;
  text-align: center;
  font: 400 30px "Inter", sans-serif;
  position: relative;
}
</style>
