<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
    <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/en">Home</nuxt-link></li>
         <li class="breadcrumb-item">Other Discrimination</li>
         <li class="breadcrumb-item"> <nuxt-link to="/en/otherdiscrimination/asiandiscrimination">Asian Discrimination</nuxt-link></li>
     </ol>
    <br>
    <h3 class="start_asia"><span class="under">Asian Discrimination</span></h3>
    <p class="two_asia">
        Asian discrimination is one form of discrimination due to color/race, mostly occurring in locations such as the US and Europe. Similar to discrimination against black communities, Asian communities are often <mark class="highlights"><b>attacked/insulted by their color, and also looked down upon</b></mark>. While not as known as discrimination against black communities, it is a major global issue that has been around for a long time. 
<br />
<img class="drawings" src="~/assets/asia.jpg">
    </p>

    <h3 class="start_asia"><span class="under">Current News</span></h3>
       
            <div class="activity">
            <h6 class="program_asia">Asian Discrimination due to COVID 19 (Worldwide)</h6>
            <hr>
            <br>
            <p class="campaign_asia"> Due to the rise and spread of the Coronavirus (COVID-19) these past few months, cases of xenophobia and racism have increased immensely since the pandemic spread against Asian Ethnic groups. 
            Incidents of discrimination have been occurring in several countries outside of Asia such as the USA, Germany, Australia, and Egypt.
             Fears and insecurities non-Asians carry seems to be sparking criticisms of Asians for “bringing” and “spreading” the virus. 
             Furthermore, they are claiming that <mark class="highlights"><b>Asians are the COVID-19</b></mark>.
              Several reports have been notified where Asians have been discriminated against in other countries outside of Asia including Europe, Africa, and North America. 
                                <br />Ex: The Asian Pacific Policy & Planning Council and Chinese for Affirmative Action reported that there have been 1,497 cases of discrimination during March 19~April 15 in the U.S. Based on the data collected, more than 60% of the reports were verbal bullying. Other actions reported included shunning, physical assault, workplace discrimination, and being prohibited/barred by some transportation systems such as trains and taxis. 
                                </p>
            <br />
            <h6 class="program_asia">Racial bias against Asian Americans at Harvard University (US)</h6>
            <hr>
            <br>
            <p class="campaign_asia">In 2018, October, a federal judge dismissed the claim that Harvard University, an ivy league university in the US, had <mark class="highlights"><b>discriminated Asian-American applicants</b></mark>. 
            The lawsuit claimed that Harvard had put a limit for the amount of people that would get accepted if they are Asian-Americans. 
            The SFFA (Students for Fair Admissions) claimed that Harvard had put a limit of <b>20%</b> for Asian-American applicants and accused them of going too far for the university’s effort to conduct racial balancing. 
            Furthermore, Edward Blum of the SFFA group claimed that while the Asian-American applicants performed higher than the other applicants, <mark class="highlights"><b>they were not accepted based on subjective “personal” ratings</b></mark>.
             Harvard university denied these charges, claiming that their use of race in admissions was legal and that they did not conduct subjective personal ratings whilst accepting applicants. 
</p>
            <br /> 
        </div>
        

    </div> 
    <div class="nextback">
            <nuxt-link to="/en/otherdiscrimination/genderdiscrimination"><img class="back" src="~/assets/back2.png"></nuxt-link>
            <nuxt-link to="/en/otherdiscrimination/sexualorientationdiscrimination"><img class="next" src="~/assets/next.png"></nuxt-link>
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
      title: "Asian Discrimination-Introducing Racism for High School Students by High School Students-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "A brief introduction of discrimination against Asians and some events/incidents that have occurred are explained." }
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

.two_asia{
  font-family: "Noto Sans JP"; 
  width: 50%; 
  margin: 0 auto;
  margin-top: 10px; 
  font-size: 18px; 
  text-indent: 1em;
}

.start_asia{
    font-weight: bold;
    font-size: 30px;
    font-family: "Noto Sans JP"; 
    margin: 0 auto;
    width: 50%;
    color: black;
  }

.activity{
    width: 80%;
    margin: 0 auto;
    margin-top: 30px; 
    font-family: "Noto Sans JP"; 
}

.program_asia{
    width: 50%;
    margin: 0 auto;
    font-size: 21px; 
    font-weight: bold; 
}
.campaign_asia{
  width: 50%; 
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

.drawings{
    width: 300px; 
    display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>
