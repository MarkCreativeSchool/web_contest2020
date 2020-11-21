<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
    <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/en/homeeng/">Home</nuxt-link></li>
         <li class="breadcrumb-item">Others</li>
         <li class="breadcrumb-item"> <nuxt-link to="/en/others/profile">Profile</nuxt-link></li>
     </ol>
    <br>
    <h3 class="start_profile"><span class="under">Profile</span></h3>
    <div class="profile">
     <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="~/assets/saryu.jpg" alt="Placeholder image">
          </figure>
        </div>

        <div class="content">
              <b>Saryu</b> <br></br>
              
      15 years old with but they say my mental age is 5... I love computers and games! I'm doing martial arts but I haven't moved recently and I'm dull. I am living a healthy life.
              <br></br>
         </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="~/assets/matoilogo.jpg" alt="Placeholder image">
          </figure>
        </div>

            <div class="content">
              <b>Ninjin</b> <br></br>
              A high school student who loves Doraemon. My nickname is "Ninjin (carrot)" but the vegtable.... not so much<br></br>
          <br>
            </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="~/assets/kanaprofile.jpg" alt="Placeholder image">
          </figure>
        </div>

            <div class="content">
             <b>Mikeke</b> <br></br>
              I love music. I especially am into Taylor Swift’s new album, Folklore. A potterhead, and I also enjoy the Marvel movies (MCU). I prefer cats over dogs. My replies are often slow when texting.  
            </div>
      </div>
      </div>
</div>
      <Footereng></Footereng>
  </div>
</template>

<script>
import Headereng from "~/components/Headereng"
import Footereng from "~/components/Footereng"
export default {
  name: "Index",
  components: { Headereng, Footereng },
  head() {
    return {
      title: "Profile-Introducing Racism for High School Students by High School Students-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "A description of the creaters are written." }
      ]
    }
  },
}　
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');

/*.two{
  font-family: "Noto Sans JP"; 
  width: 63%; 
  margin: 0 auto;
  margin-top: 10px; 
  font-size: 18px; 
}*/

.start_profile{
    font-weight: bold;
    font-size: 30px;
    font-family: "Noto Sans JP"; 
    margin: 0 auto;
    width: 80%;
    color: black;
  }


.more{
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
  margin-top: 45px; 
}

.card{
  width: 24%;
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
}

.content{ 
  font-size: 14px; 
  color: #f6d405;
}

</style>
