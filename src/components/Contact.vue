<template>
    <div class="container" id="Contact">
        <div></div>
        <div class="right">
            <div class="contain">
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
</template>
<script>
export default {
    name: 'Contact',
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: end;
}

.contain {
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

@media (min-width: 315px) and (max-width: 355px) {
  .container {
    display:grid;
    grid-template-rows: 1fr;
    grid-template-areas:
    "right"
    ;
    justify-content: center;
    margin-left: 350px;
  }
  .right{
    margin-left:46px;
  }
}
@media (min-width: 355px) and (max-width: 450px) {
  .container {
    display:grid;
    grid-template-rows: 1fr;
    grid-template-areas:
    "right"
    ;
    justify-content: center;
    margin-left: 330px;
  }
  .right{
    margin-left:40px;
  }
}
@media (min-width: 450px) and (max-width: 605px) {
  .container {
    display:grid;
    grid-template-rows: 1fr;
    grid-template-areas:
    "right"
    ;
    justify-content: center;
    margin-left: 330px;
  }
  .right{
    margin-left:40px;
  }
}
@media (min-width:605px) and (max-width: 700px) {
  .container{
    display: grid;
    grid-template-rows: 1fr;
    grid-template-areas:
    "right"
    ;
    justify-content: center;
    max-width: 120vh;
  }

  .right{
    margin: 0;
  }
}

@media (min-width:700px ) and (max-width: 1310px) {
  .container{
    display: grid;
    grid-template-rows: 1fr;
    grid-template-areas:
    "right"
    ;
    justify-content: center;
    margin-left: 150px;
    max-width: 150vh;
  }
  .right {
    margin-left: 46px;
  }
}


</style>