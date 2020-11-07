<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
    
    <h3 class="start">Arrest/Shooting Rates and Racism</h3>
    <p class="two">
        It has been investigated that the fatal shooting rate by police is disportionate based on race. Though the percentage for the overall fatal shootings of Black Americans are approximately 26% (1345 out of 5109 people) in 2020, it is disproportionate whilst taking the population of Black Americans in regard. Black Americans take up approximately 12~15% of the American population, which indicates the disproportionate rate of shooting kills though 50% of those that were shot by the police were white. It is shown on the graph that 30% per million of Black Americans are shot, a significant amount compared to 12% per million for White Americans. This signifies that if the population were to be the same for both Black and White Americans, there will be a 18% difference in fatal police shootings. 

<br></br>
    </p>

    <img class="bargraph" src="~/assets/policegraph.png">
    <p class="two">
    Another investigation reports that though the marujuana usage between black and white people over 12 are nearly the same, white being 16.5% and blacks being 17.8%, it was reported that the arrest rates per 100k in the US is 3 times more for black people than it is for white people, shown and comprared in the two graphs above. This could suggest that the police have a tendency to discriminate against certain races among others, causing the disparity in the arrest rates even though the usage rate is nearly the same. 
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
  width: 73%; 
  margin: 0 auto;
  padding-top: 20px; 
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
    width: 95%;
    margin: 0 auto;
    font-size: 21px; 
    font-weight: bold; 
}


.campaign{
  width: 90%; 
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
