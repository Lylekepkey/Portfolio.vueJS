<template>
    <div class="container">
        <div></div>
        <div class="right">
            <div class="lil-description">
                <div class="text2">
                    <h1>About Me.</h1>
                    <p>Web Designer</p>
                    <p class="">Hi! I'm <span class="bold">Lyle Kepkey</span>,
                        an aspired Front-end developer.Who doesn't like bootstrap, if you
                        have a problem with that fight me. I'm 5'8 but I feel like I am 6' tall.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'About',
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: end;
}
/* right */
.lil-description {
  background: #d9d9d9;
  border-radius: 68px;
  width: 605px;
  height: 600px;
  margin-right: 50px;
}

.text2{
  padding:50px;
  color: #000000;
  /* text-align: left; */
  font: 400 30px "Inter", sans-serif;
}
h1{
    font-size: 3rem;
    font-weight: 900;
}
p {
    padding-top: 3rem;
}
.bold {
    font-weight: bold;
}
@media (min-width: 315px) and (max-width: 355px) {
  .container {
    display:grid;
    grid-template-rows: 1fr;
    grid-template-areas:
    "lil-description"
    ;
    justify-content: center;
    margin-left: 350px;
  }
  .lil-description{
    margin-left:46px;
  }
}
@media (min-width: 355px) and (max-width: 450px) {
  .container {
    display:grid;
    grid-template-rows: 1fr;
    grid-template-areas:
    "lil-description"
    ;
    justify-content: center;
    margin-left: 330px;
  }
  .lil-description{
    margin-left:40px;
  }
}
@media (min-width: 450px) and (max-width: 605px) {
  .container {
    display:grid;
    grid-template-rows: 1fr;
    grid-template-areas:
    "lil-description"
    ;
    justify-content: center;
    margin-left: 330px;
  }
  .lil-description{
    margin-left:40px;
  }
}
@media (min-width:605px) and (max-width: 700px) {
  .container{
    display: grid;
    grid-template-rows: 1fr;
    grid-template-areas:
    "lil-description"
    ;
    justify-content: center;
    max-width: 120vh;
  }

  .lil-description{
    margin: 0;
  }
}

@media (min-width:700px ) and (max-width: 1310px) {
  .container{
    display: grid;
    grid-template-rows: 1fr;
    grid-template-areas:
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