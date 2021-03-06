<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
    <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/en">Home</nuxt-link></li>
         <li class="breadcrumb-item">Statistics</li>
         <li class="breadcrumb-item"> <nuxt-link to="/en/current/statistics/education">Education</nuxt-link></li>
     </ol>
    <br>
    <h3 class="start_education"><span class="under">Education</span></h3>
    <p class="two_education">
        In the days of slavery, education for black people was forbidden.
        When slavery was abolished, education was allowed for black people in the 1800s.
        However, at that time, <mark class="highlights"><b>schools existed separately for different races</b></mark>.
        However, the Brown v. Board of Education decided in 1954 that co-education between blacks and whites would be allowed.
        However, even then, the black students rate was recorded to be only 0.1% of the whole school student ratio.
        Over the years, there has been significant improvement in these numbers.
        According to the data taken in 1994, <mark class="highlights"><b>the ratio of black students in public schools was 17% </b></mark>, indicating that it has been improving since 1954.
    </p>
    <img class="bargraph" :src="`${prefix}/edugrapheng.png`">
    <p class="two_education">
    However, there are still disparities amongst black people within education.
    The graph represents the credit acquisition rate for each subject in middle schools according to race.
     Looking at the figures for blue (representing all subjects), we can see that the acquisition rate for white people is <b>40%</b>, while that for blacks is about half, <b>20%</b>.
     In addition, the US Department of Education reported in 2013 that non-Hispanic whites earned <b>twice</b> as much science credit,  and <b>2.8 times</b> as many math credit compared to black students.
     Furthermore, according to the U.S. Census Bureau, the overall view of 25-year-olds with a bachelor's degree in 2019 was reported to be <b>26.1% </b>for blacks compared to<b> 40.1%</b> for whites.
     Although it has risen from the <b>19.8% </b>recorded in 2010 (for whites, it was 33.2%), it can be seen that the <mark class="highlights"><b>acquisition rate of credits is still higher for white students</b></mark>.
      Also, we are able to understand that disparity is even worse considering that only <b>14.6%</b> of the US population (population: about 329 million, blacks: 37.69 million) is black people.
<br>
<br>
Disparities in education also affect disparities in other situations.
On the employment discrimination page, I briefly mentioned that there is a difference in salary due to the influence of educational disparity.
Education disparity is also affected by other disparities, such as high poverty rates for black people.
From this, we can understand that <mark class="highlights"><b>when there is a difference in one factor, it will affect various factors as well </b></mark>. This reason is also one of the reasons why discrimination is difficult to eliminate.
<br>
    </p>


    </div>
    <div class="nextback">
            <nuxt-link to="/en/current/statistics/work"><img class="back" :src="`${prefix}/back2.png`"></nuxt-link>
            <nuxt-link to="/en/current/statistics/policebrutality"><img class="next" :src="`${prefix}/next.png`"></nuxt-link>
        </div>
      <Footereng></Footereng>
  </div>
</template>

<script>
import Mixin from "~/mixins/mixin";
import Headereng from "~/components/Headereng"
import Footereng from "~/components/Footereng"
export default {
  name: "Index",
  mixins: [ Mixin ],
  components: { Headereng, Footereng },
  head() {
    return {
      title: "Education-Introducing Racism for High School Students by High School Students-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "Disparities in education within America is explained." }
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

.start_education{
  font-weight: bold;
  font-size: 30px;
  font-family: "Noto Sans JP";
  margin: 0 auto;
  width: 50%;
  color: black;
}

.two_education{
  font-family: "Noto Sans JP";
  width: 47%;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 18px;
  text-indent: 1em;
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

</style>
