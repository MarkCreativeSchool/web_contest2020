<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
    <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/en">Home</nuxt-link></li>
         <li class="breadcrumb-item">Other Discrimination</li>
         <li class="breadcrumb-item"> <nuxt-link to="/en/otherdiscrimination/genderdiscrimination">Gender Discrimination</nuxt-link></li>
     </ol>
    <br>
     <h3 class="start_gender"><span class="under">Gender Discrimination</span></h3>
    <p class="two_gender">
       Gender discrimination is a form of discrimination where an inidividual is <mark class="highlights"><b>treated differently based on their gender, and not their ability</b></mark>.
        According to AAU, most states in the US offer unfair wages based on gender. 
        Causes of gender discrimination include teachings within homes, religion, and the social structure of each country. 
        <mark class="highlights"><b>Many of our global issues occurring today connects to gender discrimination. </b></mark>
<!-- <img class="drawing4" src="~/assets/equality.jpg"> -->
    </p>
     <h3 class="start_gender"><span class="under">Current News</span></h3>
        <div class="activity">
            <h6 class="program_gender">Salt thrown at woman for going up on the stage of Sumo wrestling</h6>
            <hr>
            <br>
            <p class="campaign_gender">In 2018, April 4th, while the Mayor Ryozo Tatami of Maizuru City, Kyoto was giving an introductory speech at a Sumo Arena, he suddenly collapsed due to unconsciousness. 
            At that moment, a woman who had a nursing qualification got up to the arena and started to conduct heart massage. 
            Along with her, 2 other women went up to the arena to help her, when an announcement telling the women to get off the arena as soon as possible. 
            This announcement was criticised heavily. 
            In Sumo, it is a rule that <b>women cannot go up on the arena</b>, and the sumo association claimed this was the reason for the announcement, but was criticized, with people claiming that the announcement was out of place.
             Later on, Hokutoumi, Director of the Sumo association apologized saying that the announcement was inappropriate at that moment. 
             Furthermore, it was found out later on that after the women finished urgent care on the mayor and got off the arena, <mark class="highlights"><b>she was thrown salt by the sumo referees</b></mark>.
              This caused an outrage on the internet, and again, the sumo association received criticism for their poor behavior. The director later on gave a comment regarding this problem, but was deemed that it lacked explanation and received criticism. </p>
            <br>
            <h6 class="program_gender">2018 Grammy Gender Inequality (US)</h6>
            <hr>
            <br>
            <p class="campaign_gender">On 2018, January 29, the 2018 Grammy Awards ceremony was held. However, the Grammys were male-dominated this year, and <mark class="highlights"><b>lacked gender equality</b></mark>.
             When Recording Academy President Neil Portnow was questioned about the imbalance of the nominees, he commented that women needed to <b>‘step up’</b> in order to be nominated and win awards. 
             This comment received heavy criticism from the general public and musical artists. 
             Halsey, a famous singer commented <b>“Female artists came HARD in 2017. But the nominees are selected by peers and their opinion of the music. Which means it’s a conversation about the standards of which the ENTIRE INDUSTRY expects women to uphold.”</b> as well as the Annenberg Inclusion Initiative (initiative that aims for researched-based solutions to tackle inequality) commented <b>“How do women "step up" in music when only 22% of artists, 12% of writers and 2% of producers are female?” </b>and further stated <b>“What is the composition of your membership and how are YOU stepping up to counter bias?”</b>
              Later on, Neil Portnow apologized and claimed his comment was taken out of context. </p>
            <br>
        </div>

    </div> 
    <div class="nextback">
           <!-- <nuxt-link to="/en/otherdiscrimination"><img class="back" src="~/assets/back2.png"></nuxt-link>-->
            <nuxt-link to="/en/otherdiscrimination/asiandiscrimination"><img class="next" src="~/assets/next.png"></nuxt-link>
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
      title: "Gender Discrimination-Introducing Racism for High School Students by High School Students-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "A brief introduction of gender discrimination and some events/incidents that have occurred are explained." }
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


.two_gender{
  font-family: "Noto Sans JP"; 
  width: 50%; 
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px; 
  font-size: 18px; 
  text-indent: 1em;
}

.start_gender{
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


.program_gender{
    width: 50%;
    margin: 0 auto;
    font-size: 21px; 
    font-weight: bold; 
}
.campaign_gender{
  width: 50%; 
  margin: 0 auto;
  font-size: 15px; 
}

.drawing4{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 55%;
  height: 370px; 
  margin-bottom: 20px; 
  margin-top: 0px; 
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