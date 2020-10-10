<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
    
    <h3 class="start">Other Discrimination</h3>
    <p class="differentdiscrimination">
    There are several forms of discrimination besides racism against black people that are happening. Below are some forms of discrimination that we would like to address, to increase awareness of discrimination issues occurring currently. To understand discrimination, it is important to understand other forms as well to recognize the different forms. 
     <br></br>
    </p>

    <div class="profile">
     <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="~/assets/gender.jpg" alt="Placeholder image">
          </figure>
        </div>

        <div class="content">
              <nuxt-link to="/otherdiscrimination/otherdiscrimination/genderdiscrimination" class="bar"><b>Gender Discrimination</b> </nuxt-link><br></br>
              
         </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="~/assets/asiandiscriminationimg.jpg" alt="Placeholder image">
          </figure>
        </div>

            <div class="content">
             <nuxt-link to="/otherdiscrimination/otherdiscrimination/asiandiscrimination" class="bar"><b>Asian Discrimination</b></nuxt-link> <br></br>
            </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="~/assets/orientationimg.jpg" alt="Placeholder image">
          </figure>
        </div>

        <div class="content">
            <nuxt-link to="/otherdiscrimination/otherdiscrimination/sexualorientationdiscrimination" class="bar">  <b>Sexual Orientation Discrimination</b> </nuxt-link><br></br>
              
         </div>
      </div>
      </div>
      
</div>


<div class="profile">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="~/assets/religion3.jpg" alt="Placeholder image">
          </figure>
        </div>

            <div class="content">
              <nuxt-link to="/otherdiscrimination/otherdiscrimination/religiousdiscrimination" class="bar"><b>Discrimination based on Religion</b> </nuxt-link><br></br>
            </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="~/assets/other2.jpg" alt="Placeholder image">
          </figure>
        </div>

            <div class="content">
            <nuxt-link to="/otherdiscrimination/otherdiscrimination/littleknowndiscrimination" class="bar"> <b>Others</b> </nuxt-link><br></br>
            </div>
      </div>
</div>
     <Footer></Footer>
  </div>
</template>

<script>
import Headereng from "~/components/Headereng"
import Footer from "~/components/Footer"
export default {
  name: "Index",
  components: { Headereng, Footer },
}　
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
.two{
  font-family: "Noto Sans JP"; 
  width: 87%; 
  margin: 0 auto;
  padding-top: 20px; 
}

.differentdiscrimination{
  font-family: "Noto Sans JP"; 
  width: 80%; 
  margin: 0 auto;
  text-align: center; 
  padding-top: 15px; 
}


.start{
  font-family: "Noto Sans JP"; 
  color: #ffffff;
  background-color: #000000;
  background-position: center center;
  width: 90%; 
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

.card-image{
  width: 100%;
}

</style>