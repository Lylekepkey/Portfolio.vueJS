<template>
    <div class="container">
        <div class="lil-description">
        <section  id="testimonial">
                  <div class="m-5" style="text-align: center;">
                    <h2>Testimonial</h2>
                    <div class="cards-container-1 m-5">
                      <div id="cards1">
      
                          <div class="card-1">
                              <div class="card-border-1"></div>
                              <div class="card-content-1">
                                <img src="https://i.postimg.cc/hPK53cV1/C12-C2-Codi-Kader-1.jpg" style="width:200px">
                                <p>Lyle Kepkey, I love that man. He is so down to earth and kind. 
                                  He can put a smile on anyones face with just a few words.
                                  He is really passionate about web development and his craft. 
                                  Lyle is always willing to help with problems relating to any type 
                                  of work he can help with.
                                  He is definitely a great addition to any team or company.
                                  He works really well in a team and can bring a team alive and 
                                  help them in any way possible. However, if needed he works 
                                  really well alone as well.</p>
                              </div>
                          </div>
                        
                          <div class="card-1">
                              <div class="card-border-1"></div>
                              <div class="card-content-1">
                                <img src="https://i.postimg.cc/v82VCvV2/IMG-3453.jpg" style="width: 250px;">
                                <p>Lyle is a man of few words and more action. He does not 
                                  shy away from a challenge and he is very resourceful. When 
                                  you ask for his help, he is always there and will try to the 
                                  best of his ability. He is a good team player and takes pride 
                                  in his work. His commitment to meeting deadlines and delivering 
                                  quality work is outstanding. I would recommend Lyle for any web 
                                  development project.</p>
                              </div>
                          </div>
      
                          <div class="card-1">
                              <div class="card-border-1"></div>
                              <div class="card-content-1">
                                <img src="https://i.postimg.cc/QtkRHtpV/C12-Cheslyn-Herman-1.jpg" style="width:200px">
                                <p>I recently had the pleasure of working with an amazing front-end 
                                  developer, and I must say, he exceeded all of my expectations. From 
                                  the moment we started working together, it was clear that he was a 
                                  true expert in his field. His knowledge of HTML, CSS, and JavaScript 
                                  was impressive, and he was able to create beautiful, functional 
                                  websites with ease.</p>
                              </div>
                          </div>

                          <div class="card-1">
                              <div class="card-border-1"></div>
                              <div class="card-content-1">
                                <img src="https://i.postimg.cc/ZRhGb3v1/C12-Timothy-Barry-1.jpg" style="width:200px">
                                <p>I have had the pleasure of working with Lyle. 
                                  Lyle is a very self-sufficient guy, he likes to work 
                                  by himself but he also works well in a team. He is 
                                  overall a great guy and very kind. An excellent 
                                  guy to be around.</p>
                              </div>
                          </div>

                          <div class="card-1">
                            <div class="card-border-1"></div>
                            <div class="card-content-1">
                              <img src="https://i.postimg.cc/WbRk2150/meezaan.jpg" style="width:200px">
                              <p>Lyle is a bright and talented coder who has been steadily 
                                improving his skills. His quick ability to catch on to new 
                                coding concepts and apply them to his work has been 
                                impressive. As Lyle's team leader, I am impressed with 
                                his natural talent for coding and her quick ability to 
                                catch on to new concepts. He has been steadily improving 
                                her skills and is a valuable contributor to our team. His 
                                bright personality and dedication to her work make him an 
                                asset to our projects.</p>
                            </div>
                          </div>

                          <div class="card-1">
                              <div class="card-border-1"></div>
                              <div class="card-content-1">
                                <img src="https://i.postimg.cc/VNMyP4vq/C12-Tara-Snell-2.jpg" style="width:200px">
                                <p>Lyle is a confident person. He's willing to learn. Super helpful
                                    when it comes to things he knows well. What I appreciated 
                                    most about this developer was his attention to detail. 
                                    He had a keen eye for design, and he was able to bring my 
                                    vision to life in a way that I never could have imagined. 
                                    He was also incredibly thorough in his work, ensuring that
                                    every element of the website was perfect before we 
                                    launched it.</p>
                              </div>
                          </div>
                       </div>
                    </div>
                  </div>
            </section>
        </div>
    </div>
</template>

<script>

</script>
<style scoped>
.lil-description {
  background: #d9d9d9;
  border-radius: 68px;
  width: 605px;
  margin-right: 50px;
  margin-top: 20px;

}
.container1 {
    /* background-color: aqua; */
    /* height: 200vh; */
    /* margin-top: 50px; */
    height: 200dvh;
    text-align: center;
}
.container {
  margin-top:50px;
  display: flex;
  justify-content: end;
}

/* TESTIMONIAL */
#testimonial{
    margin-top: 20px;
}
.cards-container-1 {
    /* background-color: black; */
    display: flex;
    height: 100%;
    justify-content: center;
    /* margin-left: 50px;
    margin-right: 90px;
    padding-top: 100px; */
    /* overflow: hidden; */
    align-items: center;
}
#cards1 {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    max-width: 926px;
    width: 100%;
    justify-content: center;
}

.card-1 {
    background-color: rgb(255, 255, 255, 0.1);
    border-radius: 10px;
    /* color: rgb(204, 204, 255); */
    height: 570px;
    width: 300px;
    margin: 8px;
}
.card-content-1 {
    padding-top: 10px;
    text-align: center;
    /* background-color: black; */
}
.card-content-1 img {
    width: 170px;
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