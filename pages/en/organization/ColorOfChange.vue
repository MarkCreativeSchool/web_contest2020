<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
    
    <h3 class="start">Color Of Change</h3>
    <p class="two">
        US’s largest online racial justice organization. Has 1.7 million members. Found in 2005, Oakland, California. Founders: Van Jones, James Rucker
<br></br>Motto: “Changing the color of democracy”. 
<br></br>
    </p>

    <h3 class="start">Activities/Programs</h3>
       
        <div class="activity">
            <h6 class="program">Police violence is Gun violence. Demand #JusticeforJake and Invest In Our Communities Now.</h6>
            <hr>
            <p class="campaign">This campaign is demanding justice for Jacob Blake, who was shot 7 times in total in Wisconsin by the police. Due to his injuries, he is now paralyzed waist down. While recovering, his family and friends are demanding justice as well as other protesters. 
            => <a href="https://act.colorofchange.org/sign/police-violence-justice-for-jake?source=coc_main_website " target="_blank">Link</a></p>
            <br></br>
            <h6 class="program">ColorOfChange: #JusticeforBre: Police officers who killed Breonna Taylor must be FIRED.</h6>
            <hr>
            <p class="campaign">Breonna Taylor was shot on March 13, 2020 at her home by the police. Since then, demand for #JusticeforBre has spread. In June, Brett Hankison, the officer that shot her during her sleep was fired. However, Jonathan Mattingly and Myles Cosgrove, who were also officers that intruded her home and contributed to her death are still not dismissed at this point. This campaign demands #JusticeforBre while also demanding the dismissal of the other two officers (has changed through the months). 
             => <a href="https://act.colorofchange.org/sign/justiceforbre-breonna-taylor-officers-fired?source=coc_main_website  " target="_blank">Link </a></p>
            <br></br>
            <h6 class="program">Tell Twitter Black organizers should not become enemies of the state for protesting </h6>
            <hr>
            <p class="campaign">Currently, on twitter, black organizers and activists are being targeted. This is due to an artificial intelligence company called Dataminr, which compiles information such as names and locations of the activists/protesters. This campaign demands Twitter, a social media platform that supports the movement for Black lives to stop affiliating with Dataminr for the protester’s safety. 
   => <a href="https://act.colorofchange.org/sign/twittersurveillance?source=coc_main_website" target="_blank">Link</a></p>
   <br></br>
        </div>
        
       <div class="nextback">
            <nuxt-link to="/en/organization/BAJI"><img class="back" src="~/assets/back2.png"></nuxt-link>
            <nuxt-link to="/en/organization/M4BL"><img class="next" src="~/assets/next.png"></nuxt-link>
        </div>
       
    
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
