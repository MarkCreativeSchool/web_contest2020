<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
    
    <h3 class="start">Discrimination against Asians</h3>
    <p class="two">
        Asian discrimination is one form of discrimination due to color/race, mostly occurring in locations such as the US and Europe. Similar to discrimination against black communities, Asian communities are often attacked/insulted by their color, and also looked down upon. While not as known as discrimination against black communities, it is a major global issue that has been around for a long time. 
<br></br>
    </p>

    <h3 class="start">Current Incidents/News</h3>
       
            <div class="activity">
            <h6 class="program">Asian Discrimination due to COVID 19 (Worldwide)</h6>
            <hr>
            <p class="campaign"> Due to the rise and spread of the Coronavirus (COVID-19) these past few months, cases of xenophobia and racism have increased immensely since the pandemic spread against Asian Ethnic groups. Incidents of discrimination have been occurring in several countries outside of Asia such as the USA, Germany, Australia, and Egypt. Fears and insecurities non-Asians carry seems to be sparking criticisms of Asians for “bringing” and “spreading” the virus. Furthermore, they are claiming that Asians are the COVID-19. Several reports have been notified where Asians have been discriminated against in other countries outside of Asia including Europe, Africa, and North America. 
                                <br></br>Ex: The Asian Pacific Policy & Planning Council and Chinese for Affirmative Action reported that there have been 1,497 cases of discrimination during March 19~April 15 in the U.S. Based on the data collected, more than 60% of the reports were verbal bullying. Other actions reported included shunning, physical assault, workplace discrimination, and being prohibited/barred by some transportation systems such as trains and taxis. 
                                </p>
            <br></br>
            <h6 class="program">Racial bias against Asian Americans at Harvard University (US)</h6>
            <hr>
            <p class="campaign">In 2018, October, a federal judge dismissed the claim that Harvard University, an ivy league university in the US, had discriminated Asian-American applicants. The lawsuit claimed that Harvard had put a limit for the amount of people that would get accepted if they are Asian-Americans. The SFFA (Students for Fair Admissions) claimed that Harvard had put a limit of 20% for Asian-American applicants and accused them of going too far for the university’s effort to conduct racial balancing. Furthermore, Edward Blum of the SFFA group claimed that while the Asian-American applicants performed higher than the other applicants, they were not accepted based on subjective “personal” ratings. Harvard university denied these charges, claiming that their use of race in admissions was legal and that they did not conduct subjective personal ratings whilst accepting applicants. 
</p>
            <br></br>  
        </div>
        

    </div> 
    <div class="nextback">
            <nuxt-link to="/en/otherdiscrimination/genderdiscrimination"><img class="back" src="~/assets/back2.png"></nuxt-link>
            <nuxt-link to="/en/otherdiscrimination/sexualorientationdiscrimination"><img class="next" src="~/assets/next.png"></nuxt-link>
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

</style>
