<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
    <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/en/homeeng/">Home</nuxt-link></li>
         <li class="breadcrumb-item">Statistics</li>
         <li class="breadcrumb-item"> <nuxt-link to="/en/current/statistics/education">Arrest/Shooting Rates and Racism</nuxt-link></li>
     </ol>
    <h3 class="start">Arrest/Shooting Rates and Racism</h3>
    <p class="two">
        It has been investigated that the fatal shooting rate by police is disportionate based on race. 
        Though the percentage for the overall fatal shootings of Black Americans are approximately <b>26% (1345 out of 5109 people)</b> in 2020, <mark class="highlights"><b>it is disproportionate whilst taking the population of Black Americans in regard </b></mark>.
         Black Americans take up approximately <b>12~15%</b> of the American population, which indicates the disproportionate rate of shooting kills though <b>50%</b> of those that were shot by the police were white. 
         It is shown on the graph that <b>30%</b> per million of Black Americans are shot, a significant amount compared to <b>12%</b> per million for White Americans.
         This signifies that if the population were to be the same for both Black and White Americans, there will be a <b>18%</b> difference in fatal police shootings. 

<br></br>
    </p>

    <img class="bargraph" src="~/assets/policegraph.png">
    <p class="two">
    Another investigation reports that though the marujuana usage between black and white people over 12 are nearly the same, white being <b>16.5% </b>and blacks being <b>17.8%</b>, it was reported that <mark class="highlights"><b>the arrest rates per 100k in the US is 3 times more for black people than it is for white people</b></mark>, shown and comprared in the two graphs above. 
    This could suggest that the police have a tendency to discriminate against certain races among others, causing the disparity in the arrest rates even though the usage rate is nearly the same. 
    </p>
  <div class="bardata">
    <img class="bargraph2" src="~/assets/usage.png">
    <img class="bargraph2" src="~/assets/arrestrate.png">
    </div>
    <br></br>

        

    </div> 
    <div class="nextback">
            <nuxt-link to="/en/current/statistics/education"><img class="back" src="~/assets/back2.png"></nuxt-link>
            <nuxt-link to="/en/current/organization"><img class="next" src="~/assets/next.png"></nuxt-link>
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
      title: "Police Brutality-Introducing Racism for High School Students by High School Students-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "A description of police misconduct against black people within America is explained." }
      ]
    }
  },
}　
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
.two{
  font-family: "Noto Sans JP"; 
  width: 63%; 
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

.activity{
    width: 80%;
    margin: 0 auto;
    margin-top: 30px; 
    font-family: "Noto Sans JP"; 
}
.program{
    width: 85%;
    margin: 0 auto;
    font-size: 21px; 
    font-weight: bold; 
}
.campaign{
  width: 80%; 
  margin: 0 auto;
  font-size: 15px; 
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

.bargraph{
 display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.bargraph2{
    width: 325px; 
    height: 350px; 
    display: inline-block; 
    margin: 0 auto; 
}

.bardata{
    text-align: center; 
}


</style>
