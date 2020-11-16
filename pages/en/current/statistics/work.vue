<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
    <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/en/homeeng/">Home</nuxt-link></li>
         <li class="breadcrumb-item">Statistics</li>
         <li class="breadcrumb-item"> <nuxt-link to="/en/current/statistics/work">Education</nuxt-link></li>
     </ol>
    <h3 class="start">Work Discrimination</h3>
    <p class="two">
        The employment environment for black people living in the United States has improved since the 1960s and 1970s. Compared to 1965 where there were only 280 black public officials, it surged to more than 7,000 by 1990. It has also been confirmed that the number of black mayors among public officials has increased. In 1990, a total of 318 black mayors, compared to 3 in 1965. In addition, in 1990, a black woman was elected mayor of Washington City, making her the first black woman to be elected as mayor in a metropolis for the first time.
<br>
    </p>
 <img class="bargraph" src="~/assets/workgrapheng.png">
        <p class="two">
                However, even today, work disparities against black discrimination are still a problem in the United States. The table on the left shows the unemployment rate for 2018 by major racial and democratic groups in the United States. The unemployment rate for blacks is about double that of 4.3% for whites, compared to 4.3% for whites. Compared to 1983, when the unemployment rate in the United States was reported to be 8.4% for whites and 19.5% for blacks (so about 2.3 times), it can be seen that the low unemployment rate for whites is almost unchanged. Also, according to the US Bureau of Labor Statistics, the median weekly income of workers is $ 965 (about 101,612 yen) for whites, and $ 237 (about 76,551 yen) for blacks, which is lower than $ 238 (about 25060 yen). Has been done. In addition, the median household income in the United States is reported to be $ 76,057 for whites compared to $ 45,438 for blacks (according to the United States Census Bureau). It is said that such disparities are influenced by differences in the level of education (see the education page for details). Such disparities can lead to discrimination.
        </p>
    <p class="two">
    In addition, disparities in other situations due to income disparities have also been reported. The poverty rate in the United States is 18.8% for black people compared to 7.3% for whites, which is about twice as high (according to the United States Census Bureau). In addition, home ownership for blacks are reported to be 44% (according to the United States Census Bureau), compared to total average of 73.7%  in the United States as a whole. As one of the reasons, low incomes of black people have been reported, and it can be seen that such disparities are also affected in other situations.
    <br>
    </p>



    </div> 
    <div class="nextback">
          <!--<nuxt-link to="/en/current/statistics/education"><img class="back" src="~/assets/next.png"></nuxt-link>-->
            <nuxt-link to="/en/current/statistics/education"><img class="next" src="~/assets/next.png"></nuxt-link>
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
.two{
  font-family: "Noto Sans JP"; 
  width: 68%; 
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
