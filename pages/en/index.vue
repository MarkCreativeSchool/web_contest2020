<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
     <div class="test">
        <video id="video" width="1920" height="1080" loop autoplay muted>
          <source src="~/assets/douga.mp4" type="video/mp4" />
        </video>
        <div class="maku"><div class="aaa"></div></div>
      </div>
   
    <br> 
 <h2 class="biggertitle_en"><span class="under">About Discrimination</span></h2> 
 <br>
 <p class="three">
Discrimination is a problem all over the world. Don't you think it has nothing to do with us in Japan? In 2020, black discrimination incidents in the United States intensified the opposition movement again, and the world began to focus once more about discrimination. This site details the history of black racism in the United States, organizations campaigning against racism in the United States, and discrimination occurring around the world. This is your oppportunity to once again ask yourself, "what is discrimination" on this site.
  <div class="discrimination">
    <li>History of Racism</li>
    <p class="introhome">
You can browse the content in a timeline format so that you can see the history of discrimination by age group.</p>
    <button class="introbutton"><nuxt-link to="/en/history" class="introlink">History</nuxt-link></button>
  </div> 
  <div class="discrimination1">
    <li>Incidents</li>
    <p class="introhome">
This page summarizes the recent problems of black discrimination in the United States and you can learn about.</p>
    <button class="introbutton"><nuxt-link to="/en/history" class="introlink">Incidents</nuxt-link></button>
  </div> 
  <div class="discrimination2">
    <li>Current problems</li>
    <p class="introhome">
    How does the issue of discrimination affect our daily lives?</p>
    <div class="buttons">
      <button class="introbutton"><nuxt-link to="/en/current/statistics/work" class="introlink">Work</nuxt-link></button>
      <button class="introbutton"><nuxt-link to="/en/current/statistics/education" class="introlink">Education</nuxt-link></button>
      <button class="introbutton"><nuxt-link to="/en/current/statistics/policebrutality" class="introlink">Police Brutality</nuxt-link></button>
      <button class="introbutton"><nuxt-link to="/en/current/organization" class="introlink">Organizations</nuxt-link></button>
    </div>
  </div>
  <div class="discrimination3">
    <li>World Discrimination</li>
    <p class="introhome">
What kind of discrimination problem is occurring in the world?</p>
    <div class="buttons">
          <button class="introbutton"><nuxt-link to="/en/otherdiscrimination/genderdiscrimination" class="introlink">Gender</nuxt-link></button>
          <button class="introbutton"><nuxt-link to="/en/otherdiscrimination/asiandiscrimination" class="introlink">Asia</nuxt-link></button>
          <button class="introbutton"><nuxt-link to="/en/otherdiscrimination/sexualorientationdiscrimination" class="introlink">Sexual</nuxt-link></button>
          <button class="introbutton"><nuxt-link to="/en/otherdiscrimination/religiousdiscrimination" class="introlink">Religion</nuxt-link></button>
    </div>
  </div>
   <br> 
    </div> 
    <br>
     <div class="nextback">
          <!--  <nuxt-link to="/en/current/statistics/work"><img class="back" src="~/assets/back2.png"></nuxt-link>-->
            <nuxt-link to="/en/what"><img class="next" src="~/assets/next.png"></nuxt-link>
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
      title: "Home-Introducing Racism for High School Students by High School Students-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "A site regarding discrimination against black people in America based for high school students (especially Japanese). Since this is a very sensitive topic, we are refraining from voicing our opinion about this too much to prevent bias. Please understand. Thank you." }
      ]
    }
  },
}　
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Rockwell');

/*.two{
  font-family: "Noto Sans JP"; 
  width: 63%; 
  margin: 0 auto;
  margin-top: 10px; 
  font-size: 18px; 
}*/


.introbutton{
  background-color: #ffa000;
  color: #000000;
  font-size: 13px;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 5px;
  padding: 5px;
  width: 100px;
  border: none;
  box-shadow: 3px 3px 0px #cc8800;
}

.introbutton:hover{
  box-shadow: none;
  position: relative;
  top: 3px;
  left: 3px;
}

.introlink{
  color: #000000;
}

.introlink:hover{
  color: #000000;
}

.biggertitle_en{
  font-weight: bold;
  font-size: 30px;
  margin: 0 auto;
  width: 70%;
  color: black;
}

.discrimination{
  display: inline-block;
  list-style: none;
  vertical-align: center;
  margin: 40px;
  margin-left: 18%;
  background-color:  #f5f5f5;
  padding:  25px;             
  height:250px;
  width: 24%;
  position: relative;
  left: 5%;
  font-size: 25px;
  font-weight: 800;
}

.discrimination li{
  color: black;
}

.discrimination1{
  display: inline-block;
  list-style: none;
  vertical-align: center;
  margin: 40px;
  margin-right: 13%;
  background-color:  #f5f5f5;
  padding:  25px;             
  height:250px;
  width: 24%;
  position: relative;
  left: 5%;
  font-size: 25px;
  font-weight: 800;
}

.discrimination1 li{
  color: black;
}

.discrimination2{
  display: inline-block;
  list-style: none;
  vertical-align: center;
  margin: 40px;
  margin-left: 18%;
  background-color:  #f5f5f5;
  padding:  25px;             
  height:250px;
  width: 24%;
  position: relative;
  left: 5%;
  font-size: 25px;
  font-weight: 800;
}

.discrimination2 li{
  color: black;
}

.introhome{
  font-family: "Rockwell"; 
  font-size: 14px;
  font-weight: none;
  margin-top: 10px;
}


/*.biggertitle{
  font-weight: bold;
  font-size: 24px;
  font-family: "Noto Sans JP"; 
  margin: 0 auto;
   width: 68%; 
}*/

mark {
  display: inline-block;
  line-height: 0em;
  padding-bottom: 0.5em;
  background: #f6d405;
}

.hometitle{
  font-weight: bold;
  font-size: 24px;
  margin: 0 auto;
   width: 53%; 
}

.three{
  width: 53%; 
  margin: 0 auto;
  margin-top: 10px; 
  font-size: 18px; 
}

.start{
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
.drawing{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  height: 575px; 
  margin-top: 0px; 
}


.graphimage{
    width: 35%; 
    height: 2%; 
    display: inline-block; 
    margin: 0 auto; 
}

.logograph{
    text-align: center; 
}

figure {
  padding: 2px;
  margin: auto;
}

figcaption {
  text-align: center;
  font-weight: bold; 
  font-size: 12px; 
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

.test{
  position: relative;
  text-align: center;
  height: calc(100vh - 0px);
  overflow: hidden;
  margin-top: -100px;
} 




</style>
