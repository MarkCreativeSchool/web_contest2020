<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    
    <h3 class="start">黒人差別に関する組織</h3>
    <div class="profile">
     <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="~/assets/blm.jpg" alt="Placeholder image">
          </figure>
        </div>

        <div class="content">
             <nuxt-link to="/organization/organization/BLM" class="bar"><b>Black Lives Matter (BLM)</b></nuxt-link> <br><br>
              
         </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="~/assets/baji.jpg" alt="Placeholder image">
          </figure>
        </div>

            <div class="content">
              <nuxt-link to="/organization/organization/BAJI" class="bar"><b>Black Alliance for Just Immigration</b> </nuxt-link><br><br>
            </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="~/assets/colorofchange.jpg" alt="Placeholder image">
          </figure>
        </div>

            <div class="content">
            <nuxt-link to="/organization/organization/ColorOfChange" class="bar"> <b>Color Of Change</b> </nuxt-link><br><br>
            </div>
      </div>
      </div>

<div class="profile">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="~/assets/m4bl.jpg" alt="Placeholder image">
          </figure>
        </div>

            <div class="content">
              <nuxt-link to="/organization/organization/M4BL" class="bar"><b>The Movement for Black Lives</b> </nuxt-link><br>
            </div>
      </div>

</div>

<div class="nextback">
            <nuxt-link to="/"><img class="back" src="~/assets/modoru2.png"></nuxt-link>
            <nuxt-link to="/organization/organization/BLM"><img class="next" src="~/assets/tugi.png"></nuxt-link>
  </div>

</div>
     <Footer></Footer>
  </div>
</template>

<script>
import Header from "~/components/Header"
import Footer from "~/components/Footer"
export default {
  name: "Index",
  components: { Header, Footer },
}　
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
.two{
  font-family: "Noto Sans JP"; 
  width: 73%; 
  margin: 0 auto;
  padding-top: 20px; 
}


.start{
  font-family: "Noto Sans JP"; 
  color: #ffffff;
  background-color: #000000;
  background-position: center center;
  width: 83%; 
  margin: 0 auto;
  font-size: 30px; 
  border-radius: 3px; 
  text-shadow: 0.5px 0.5px #f6d405;
  text-align: center; 
}


.card{
  width: 25%;
  display: inline-block;
  margin: 20px; 
  padding: 1px; 
  border-radius: 3px; 
  background-color: #000000; 
}

.profile{
  display: block; 
  width: 100%; 
  text-align: center; 
  margin: 0, auto; 
}

.content{ 
  font-size: 14px; 
  color: #f6d405;
}

.bar{
  color: #ffffff;
  text-align: center;
  padding-left: 30px; 
  padding-right: 30px; 
  padding-top: 7px; 
  padding-bottom: 7px;
  text-decoration: none;
  font-size: 17px;
  position: relative; 
  flex: 1; 
  font-family: "Noto Sans JP"; 
}

.bar:hover{
  color: #f6d405; 
}
.bar.active .sub{
  display: block; 
}

.next{
    display: inline-block;
    float: right; 
    margin-left: auto;
    margin-right: 40px;
    width: 100px; 
}

.back{
    display: inline-block;
    margin-left: 40px;
    float: left; 
    margin-right: auto;
    width: 100px; 
}

.nextback{
    text-align: center; 
}


</style>