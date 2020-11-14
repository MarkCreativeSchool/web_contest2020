<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
    
    <h3 class="start">Gender Discrimination</h3>
    <p class="two">
       Gender discrimination is a form of discrimination where an inidividual is treated differently based on their gender, and not their ability. According to AAU, most states in the US offer unfair wages based on gender. Causes of gender discrimination include teachings within homes, religion, and the social structure of each country. Many of our global issues occurring today connects to gender discrimination. 
<img class="drawing4" src="~/assets/equality.jpg">
    </p>

    <h3 class="start">Current News/Incidents</h3>
        <div class="activity">
            <h6 class="program">Salt thrown at woman for going up on the stage of Sumo wrestling</h6>
            <hr>
            <p class="campaign">In 2018, April 4th, while the Mayor Ryozo Tatami of Maizuru City, Kyoto was giving an introductory speech at a Sumo Arena, he suddenly collapsed due to unconsciousness. At that moment, a woman who had a nursing qualification got up to the arena and started to conduct heart massage. Along with her, 2 other women went up to the arena to help her, when an announcement telling the women to get off the arena as soon as possible. This announcement was criticised heavily. In Sumo, it is a rule that women cannot go up on the arena, and the sumo association claimed this was the reason for the announcement, but was criticized, with people claiming that the announcement was out of place. Later on, Hokutoumi, Director of the Sumo association apologized saying that the announcement was inappropriate at that moment. Furthermore, it was found out later on that after the women finished urgent care on the mayor and got off the arena, they were thrown salt by the sumo referees. This caused an outrage on the internet, and again, the sumo association received criticism for their poor behavior. The director later on gave a comment regarding this problem, but was deemed that it lacked explanation and received criticism. </p>
            <br></br>
            <h6 class="program">2018 Grammy Gender Inequality (US)</h6>
            <hr>
            <p class="campaign">On 2018, January 29, the 2018 Grammy Awards ceremony was held. However, the Grammys were male-dominated this year, and lacked gender equality. ￥When Recording Academy President Neil Portnow was questioned about the imbalance of the nominees, he commented that women needed to ‘step up’ in order to be nominated and win awards. This comment received heavy criticism from the general public and musical artists. Halsey commented “ Female artists came HARD in 2017. But the nominees are selected by peers and their opinion of the music. Which means it’s a conversation about the standards of which the ENTIRE INDUSTRY expects women to uphold.” as well as the Annenberg Inclusion Initiative (initiative that aims for researched-based solutions to tackle inequality) commented “How do women "step up" in music when only 22% of artists, 12% of writers and 2% of producers are female?” and further stated “What is the composition of your membership and how are YOU stepping up to counter bias?” Later on, Neil Portnow apologized and claimed his comment was taken out of context. </p>
            <br></br>  
        </div>

    </div> 
    <div class="nextback">
           <!-- <nuxt-link to="/en/otherdiscrimination"><img class="back" src="~/assets/back2.png"></nuxt-link>-->
            <nuxt-link to="/en/otherdiscrimination/asiandiscrimination"><img class="next" src="~/assets/next.png"></nuxt-link>
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