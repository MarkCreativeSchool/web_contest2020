<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
     <div class="test">
        <video id="video" width="1920" height="1080" loop autoplay muted>
          <source src="~/assets/douga.mp4" type="video/mp4" />
        </video>
      </div>
   
    <br> 
 <h2 class="biggertitle_en"><span class="under">About Discrimination</span></h2> 
 <div class="discrimination">
 <li>Current problems</li>
  <p class="introhome">Discrimination is a worldwide issue that has been around for centuries. <br> Discrimination can occur based on race, sexuality, and age, but there should <b>never</b> be racism.</p>
      <div class="buttons">
      <button class="introbutton"><nuxt-link to="/en/current/statistics/work" class="introlink">Work</nuxt-link></button>
      <button class="introbutton"><nuxt-link to="/en/current/statistics/education" class="introlink">Education</nuxt-link></button>
      <button class="introbutton"><nuxt-link to="/en/current/statistics/policebrutality" class="introlink">Police Brutality</nuxt-link></button>
      </div>
 </div>
     
      <div class="discrimination1">
      <li>History of Racism</li>
       <p class="introhome">To compare/contrast the events that occurred with the history of racism, we have made a timeline that you can browse to investigate further on how historic event had an impact on racism in the US.</p>
      <button class="introbutton"><nuxt-link to="/en/history" class="introlink">History>></nuxt-link></button>
      
      </div> 

   <br> 
  <h2 class="biggertitle_en"><span class="under">About this website</span></h2> 
  <br>

    <h4 class="hometitle">Why we decided to make this website</h4>
    <p class="three">Recently, due to the killing of George Floyd, discrimination against black lives has become a widely discussed topic once again. However, how much do we really understand about discrimination against black communities? Do we really understand this topic like we think we do? In fact, we were quite surprised to see how much we did not know/understand the topic of discrimination against black communities until we researched on this topic more heavily. 
      </p>
      <br>
      <h4 class="hometitle">Our friend's experience</h4>
      <p class="three">
      Have you ever been conscious regarding the topic of discrimination? In addition, have you ever been in a situation where you have been/felt as a subject of discrimination? As students that attend different schools, one being International, we believe that our knowledge and consciousness about discrimination are far more significant compared to others. One key factor that made us consider discussing/research discrimination is due to our friend feeling discriminated against due to her looks. Just by her appearance, she felt looks given by strangers. 
      </p>
      <br>
      <h4 class="hometitle">Why we focused on America</h4>
       <p class="three">
      As mentioned previously, George Floyd’s death that occurred in the US was widely discussed. This incident was the first reason why we focused on the topic of discrimination of black communities in America. Of course, there are several cases of discrimination against black communities in other countries, and different histories related to this topic. So, we thought that by creating a teaching material site on discrimination against black communities in America (which was our interest), it would interest viewers of the site to investigate further on discrimination within other countries. Therefore, we decided to focus just on discrimination within America. 
      </p>
      <br>
      <h4 class="hometitle">Why we chose racism against black people</h4>
       <p class="three">
      In our daily life, there are several situations and cases of discrimination around us that we do/do not realise. Discrimination against black communities that is widely talked about today is also discrimination. What we focused on is that while we are expected to understand current topics that are being discussed, not many seem to understand/digest the concept of discrimination against black communities although there has been several incidents relating racial injustice occurring recently. Furthermore, we realised that we are still lacking understanding of discrimination although it is a widely discussed topic. What we question/don’t know might apply to other people as well. With these reasons, we decided to create an informational site regarding discrimination against black communities for we wanted more people to get a clearer understanding regarding this topic. Therefore, we decided to focus on discrimination against black communities for these reasons: one, it is a topic widely discussed, and two, many people seem to lack understanding even though it is a problem being raised by many today.
      <br>
      </p>
       <p class="three">
      <b>As racism is a very sensitive and delicate topic, we are refraining to include most of our opinions to prevent bias within the website. Please understand. Thank you.</b>
       </p>

    </div> 
    <br>
     <div class="nextback">
          <!--  <nuxt-link to="/en/current/statistics/work"><img class="back" src="~/assets/back2.png"></nuxt-link>-->
            <nuxt-link to="/en/homeeng/whateng"><img class="next" src="~/assets/next.png"></nuxt-link>
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

<style>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');

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
  margin-right: 10px;
  border-color: #ffa000;
  border-radius: 5px;
  padding: 5px;
}

.introbutton:hover{
  background-color:#000000;
}

.introlink{
  color: #000000;
}

.introlink:hover{
  color: #ffa000;
  background-color: #000000;
}

.biggertitle_en{
  font-weight: bold;
  font-size: 30px;
  font-family: "Noto Sans JP"; 
  margin: 0 auto;
  width: 70%;
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
  font-family: "Noto Sans JP"; 
  margin: 0 auto;
   width: 53%; 
}

.three{
  font-family: "Noto Sans JP"; 
  width: 53%; 
  margin: 0 auto;
  margin-top: 10px; 
  font-size: 18px; 
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
  font-family: "Noto Sans JP"; 
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




</style>
