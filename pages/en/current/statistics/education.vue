<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
    
    <h3 class="start">Education</h3>
    <p class="two">
        In the days of slavery, education for black people was forbidden. When slavery was abolished, education was allowed for black people in the 1800s. However, at that time, schools existed separately for different races. However, the Brown v. Board of Education decided in 1954 that co-education between blacks and whites would be allowed. However, even then, the black students rate was recorded to be only 0.1% of the whole school student ratio. Over the years, there has been significant improvement in these numbers. According to the data taken in 1994, the ratio of black students in public schools was 17%, indicating that it has been improving since 1954.
    </p>
    <img class="bargraph" src="~/assets/edugrapheng.png">
    <p class="two">
    However, there are still disparities amongst black people within education. The graph on the left represents the credit acquisition rate for each subject in middle schools according to race. Looking at the figures for blue (representing all subjects), we can see that the acquisition rate for white people is 40%, while that for blacks is about half, 20%. In addition, the US Department of Education reported in 2013 that non-Hispanic whites earned twice as much science credit,  and 2.8 times as many math credit compared to black students. In addition, according to the U.S. Census Bureau, the overall view of 25-year-olds with a bachelor's degree in 2019 was reported to be 26.1% for blacks compared to 40.1% for whites. Although it has risen from the 19.8% recorded in 2010 (for whites, it was 33.2%), it can be seen that the acquisition rate of credits is still higher for white students. Also, we are able to understand that disparity is even worse considering that only 14.6% of the US population (population: about 329 million, blacks: 37.69 million) is black people. 
<br>
Disparities in education also affect disparities in other situations. On the employment discrimination page, I briefly mentioned that there is a difference in salary due to the influence of educational disparity. Education disparity is also affected by other disparities, such as high poverty rates for black people. From this, we can understand that when there is a difference in one factor (education, job, etc.), it will affect various factors as well. This reason is also one of the reasons why discrimination is difficult to eliminate. 
<br>
    </p>
        

    </div> 
    <div class="nextback">
            <nuxt-link to="/en/current/statistics/work"><img class="back" src="~/assets/back2.png"></nuxt-link>
            <nuxt-link to="/en/current/statistics/policebrutality"><img class="next" src="~/assets/next.png"></nuxt-link>
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

</style>
