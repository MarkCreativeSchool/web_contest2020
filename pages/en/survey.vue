<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
   <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/en">Home</nuxt-link></li>
         <li class="breadcrumb-item"> <nuxt-link to="/en/survey">Survey Results</nuxt-link></li>
     </ol>

     <br>
   <h3 class="start_survey"><span class="under">Survey</span></h3>
    <br>
     <h4 class="surveytitle"><mark>Nationality of Target</mark></h4>
    <p class="two_survey">
        We took a questionnaire about discrimination awareness at an international school (Grade 10~12) and a public high school in Japan (Grade 10~11). The difference in nationality between the schools are shown below.

        <div class="logograph">
       <figure>
        <img class="graphimage" src="/nationalityjap.png">
        <img class="graphimage" src="/nationalityinter.png">
        <figcaption>Left: Japanese High School Results Right: International School Results</figcaption>
        </figure>

        </div>
        <br><br>
        <h4 class="surveytitle"><mark>Level of Concern</mark></h4>

    <p class="two_survey">The variety of nationalities in international schools was shown to affect the awareness of the topic of discrimination when looking at the data collected for the other questions.
    <br>According to the results of the question that questioned their level of concern regarding racism, most of the international school students chose 4-5, and none of them chose 1. However, although few Japanese high school students answered 1, there were still people that chose 1 (no concern). In addition, when calculating the average of their level of concern, the international school students resulted to 4.02, Japanese high school students’ average was 3.45, 0.57 lower compared to international school students. From this questionnaire, it was found that Japanese high school students are less conscious of discrimination against black people compared to international school students.

    <div class="logograph">
    <figure>
        <img class="graphimage" src="/concernengjap.png">
        <img class="graphimage" src="/concernenginter.png">
        <figcaption>Left: Japanese High School Results Right: International School Results</figcaption>
        </figure>
    </div>
    <br><br>
    <h4 class="surveytitle"><mark>Results of whether they have witnessed racism</mark></h4>

     <p class="two_survey">We believe that some of the reasons for the low level of concern against racism amongst Japanese school students may be due to their experiences with discrimination. In fact, 28.5% of Japanese high schools answered that they had seen discrimination, while 73.6% of international school students answered that they had seen discrimination in real life.
    <div class="logograph">
    <figure>
        <img class="graphimage" src="/sawengjap.png">
        <img class="graphimage" src="/sawenginter.png">
        <figcaption>Left: Japanese High School Results Right: International School Results</figcaption>
        </figure>
    </div>
    <br><br>
    <h4 class="surveytitle"><mark>Results of whether they have been a victim of racism, where the racism took place</mark></h4>

    <p class="two_survey">In addition, about 58% of international school students said they had been discriminated against before. On the other hand, only 3.3% of Japanese high school students responded that they had. Moreover, when asked if they were discriminated against in Japan or abroad, most of the students in the Japanese high school answered that they were discriminated broad. On the contrary, most of the international school students were discriminated inside Japan. For this reason, it can be suggested that not only does Japanese high school students have less concern regarding discrimination due to less connections with discrimination. They also seem to regard discrimination as a problem that mostly occurs outside of Japan.
    <br><br>
    <div class="logograph">
    <figure>
        <img class="graphimage" src="/experiencengjap.png">
        <img class="graphimage" src="/yesengjap.png">
        <figcaption>Japanese High School Results</figcaption>
        </figure>
    </div>
    <div class="logograph">
    <figure>
        <img class="graphimage" src="/experienceenginter.png">
        <img class="graphimage" src="/yesenginter.png">
        <figcaption>International School Results</figcaption>
        </figure>
    </div>

      <p class="two_survey">
      <br>
      <br>However, although it is perceived that racism is not a problem in Japan by most Japanese high school students, as shown by the responses of international school students, most of the discrimination that international school students experienced were in Japan (75%). Therefore, understanding of discrimination becomes more important as we gain more knowledge about how discrimination affects other people lives. However, it is difficult to understand discrimination in Japan, where it is still not as known. <br><br>
    </p>

    </div>
    <div class="nextback">
        <nuxt-link to="/en/what"><img class="back" src="/back2.png"></nuxt-link>
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
      title: "Survey-Introducing Racism for High School Students by High School Students-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "We surveyed both a Japanese public high school and International school to compare the difference between their level concern regarding racism. The results are analysed with the graph results." }
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
.surveytitle{
  font-weight: bold;
  font-size: 24px;
  font-family: "Noto Sans JP";
  margin: 0 auto;
   width: 67%;
}

.two_survey{
  font-family: "Noto Sans JP";
  width: 63%;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 18px;
  text-indent: 1em;
}
 .start_survey{
    font-weight: bold;
    font-size: 30px;
    font-family: "Noto Sans JP";
    margin: 0 auto;
    width: 67%;
    color: black;
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



</style>
