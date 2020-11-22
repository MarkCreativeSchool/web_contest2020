<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
    <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/en">Home</nuxt-link></li>
         <li class="breadcrumb-item">Other Discrimination</li>
         <li class="breadcrumb-item"> <nuxt-link to="/en/otherdiscrimination/religiousdiscrimination">Religious</nuxt-link></li>
     </ol>
    <br>
    <h3 class="start_religion"><span class="under">Religious Discrimination</span></h3>
    <p class="two_religion">
       <mark class="highlights"><b>Treating a person/group of people based on their beliefs and religion</b></mark> is called religious discrimination. 
       Forms of discrimination seen includes harrassment of one’s religion, practices, and beliefs as well as mistreatment in work/educational situations. 
       It also includes exclusion, where a person/group is excluded from a discussion/circle because of their beliefs. 

    </p>
    <img class="drawing3" src="~/assets/religiousdiscrimination.jpg">

    <h3 class="start_religion"><span class="under">Current News</span></h3>
       <div class="activity">
            <h6 class="program_religion">Portland Train Attack (US)</h6>
            <hr>
            <p class="campaign_religion">In 2017 May 26th, <b>Jeremy Joseph Christian</b> fatally stabbed <b>Taliesin Myrddin Namkai-Meche</b> and <b>Ricky John Best</b> as well as severely injuring <b>Micah David-Cole Fletcher</b> in Portland Oregon. 
            <mark class="highlights"><b>The three men intervened in a verbal tirade between 2 teenage girls</b></mark> in which one was wearing a hijab.
             Although unsure, witnesses said that Christian claimed that <b>“all Muslims should die"</b> during this verbal tirade. 
             Upon further investigation, it was found out that he had anti-Muslim sentiments on his social media page and was clear that he was not fond of Muslims. 
             The three men were deemed heroes by the Mayor. 
             Hilary Clinton, former presidential candidate commented <b>"No one should have to endure this racist abuse. No one should have to give their life to stop it."</b></p>
            <br />
            <h6 class="program_religion">Pool Incident at Wilmington Delaware (US)</h6>
            <hr>
            <p class="campaign_religion">In 2018 June, a young Muslim students along with their teacher were asked to leave a public pool in Wilmington, Delaware. 
            The pool manager even went far to <b>calling the police when asking them to leave because of their clothing</b>. 
            A Wilmington-based Muslim youth center filed a lawsuit against the pool for their discriminating behavior against the teacher and her students. 
            Although Mayor Mike Purzycki, D-Wilmington issued an apology in July, many criticized the city for not addressing this issue enough. 
            In January 2019, a settlement was announced regarding this case. 
            To learn more about the settlement given by the city, click <a href="https://muslimadvocates.org/files/Darul-Amaanah-Filed-Settlement.pdf#page=14" target="_blank">here</a>.</p>
            <br /> 
        </div>
    </div> 
    <div class="nextback">
            <nuxt-link to="/en/otherdiscrimination/sexualorientationdiscrimination"><img class="back" src="~/assets/back2.png"></nuxt-link>
            <nuxt-link to="/en/otherdiscrimination/littleknowndiscrimination"><img class="next" src="~/assets/next.png"></nuxt-link>
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
      title: "Religious Discrimination-Introducing Racism for High School Students by High School Students-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "A brief introduction of discrimination based on religion and some events/incidents that have occurred are explained." }
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

.two_religion{
  font-family: "Noto Sans JP"; 
  width: 50%; 
  margin: 0 auto;
  margin-top: 10px; 
  font-size: 18px; 
  text-indent: 1em;
}

.start_religion{
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


.program_religion{
    width: 50%;
    margin: 0 auto;
    font-size: 21px; 
    font-weight: bold; 
}
.campaign_religion{
  width: 50%; 
  margin: 0 auto;
  font-size: 15px; 
}

.drawing3{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
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
