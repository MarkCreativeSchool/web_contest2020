<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
    <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/en/homeeng/">Home</nuxt-link></li>
         <li class="breadcrumb-item">Statistics</li>
         <li class="breadcrumb-item"> <nuxt-link to="/en/current/statistics/work">Work</nuxt-link></li>
     </ol>
    <h3 class="start">Work Discrimination</h3>
    <p class="two">
        The <mark class="highlights"><b> employment environment for black people living in the United States has improved </b></mark> since the 1960s and 1970s. 
        Compared to 1965 where there were only <b>280</b> black public officials, it surged to more than <b>7,000</b> by 1990. 
        It has also been confirmed that the number of black mayors among public officials has increased. 
        In 1990, a total of <b>318 black mayors</b>, compared to<b> 3</b> in 1965. 
        In addition, in 1990, a black woman was elected mayor of Washington City, making her the first black woman to be elected as mayor in a metropolis for the first time.
<br>
    </p>
 <img class="bargraph" src="~/assets/workgrapheng.png">
        <p class="two">
                However, even today, work disparities against black discrimination are still a problem in the United States. 
                The table on the left shows the <b>unemployment rate </b>for 2018 by major racial and democratic groups in the United States.
                 The unemployment rate for blacks is about double that of <b>4.3%</b> for whites, compared to <b>8.4%</b> for the black population. 
                 Compared to 1983, when the unemployment rate in the United States was reported to be <b>8.4%</b> for white people and <b>19.5%</b> for black people (so about 2.3 times), it can be seen that the low unemployment rate for whites is almost unchanged. 
                 Also, according to the US Bureau of Labor Statistics, the <b>median weekly income of workers</b> is <b>$965 (about 101,612 yen) </b>for white people, and <b>$237 (about 76,551 yen) </b>for black people, which is $238 (about 25060 yen) lower compared to white people. 
                 In addition, the <b>median household income</b> in the United States is reported to be <b>$76,057 </b>for white people compared to <b>$45,438</b> for black people (according to the United States Census Bureau). 
                 It is said that such disparities are influenced by differences in the level of education (see the education page for details). <mark class="highlights"><b>Such disparities can lead to discrimination</b></mark>.
        </p>
    <p class="two">
    In addition, <mark class="highlights"><b>disparities in other situations due to income disparities have also been reported</b></mark>. 
    The poverty rate in the United States is <b>18.8%</b> for black people compared to <b>7.3%</b> for white people, which is about twice as high (according to the United States Census Bureau). 
    In addition, home ownership for blacks are reported to be <b>44%</b> (according to the United States Census Bureau), compared to total average of <b>73.7% </b> in the United States as a whole.
     As one of the reasons, <mark class="highlights"><b>low incomes of black people</b></mark> have been reported, and it can be seen that such disparities are also affected in other situations.
    <br>
    </p>



    </div> 
    <div class="nextback">
          <!--<nuxt-link to="/en/current/statistics/education"><img class="back" src="~/assets/next.png"></nuxt-link>-->
            <nuxt-link to="/en/current/statistics/education"><img class="next" src="~/assets/next.png"></nuxt-link>
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
      title: "Work-Introducing Racism for High School Students by High School Students-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "Disparities in the employment environment is explained." }
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


</style>
