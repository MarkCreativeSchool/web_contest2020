<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
    <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/en">Home</nuxt-link></li>
         <li class="breadcrumb-item">Other Discrimination</li>
         <li class="breadcrumb-item"> <nuxt-link to="/en/otherdiscrimination/sexualorientationdiscrimination">Sexual Orientation</nuxt-link></li>
     </ol>
     <br>
    <h3 class="start_sexualorientation"><span class="under">Sexual Orientation Discrimination</span></h3>
    <p class="two_sexualorientation">
       Sexual orientation discrimination is <mark class="highlights"><b>discrimination againt one’s sexuality</b></mark>. 
       This act of discrimination targets <b> LGBTQ+ communities (L=Lesbian, G=Gay, B=Bisexual, T=Transgender, Q=Queer, +=other sexual identities such as pansexual, asexual, and omnisexual)</b>. 
       Types of discrimination includes both direct and indirect discrimination as well as harassment.  
    <br />
    <div class="logoimage">
    <!-- <img class="sexualorientation" src="~/assets/gendersign.png">
    <img class="sexualorientation" src="~/assets/heart.png"> -->
    </div>

    <h3 class="start_sexualorientation"><span class="under">Current News</span></h3>
       
         <div class="activity">
            <h6 class="program_orientation">Orlando nightclub shooting (US)</h6>
            <hr>
            <p class="campaign_orientation">On June 12, 2016, Omar Martin, a security guard conducted a shooting at a gay nightclub. 
            He murdered <b>49</b> people in total and <b>53</b> others were injured. 
            3 hours after he was taken hostage, he was shot by the police. 
            This attack was the worst mass shooting in the US at that time. 
            The nightclub had several homosexual customers which Martin was aware of, and he often made it clear that he was homophobic. 
            His relatives claim that it could have been a hate crime. 
</p>
            <br />
            <h6 class="program_orientation">Incident of outing at Hitotsubashi University (Japan)</h6>
            <hr>
            <p class="campaign_orientation">In 2015, April, male student<i> A</i> from Hitotsubashi University confessed to male student <i>B</i> on messaging app, Line. 
            While student <i>B</i> told him that he wanted to remain friends with him, later on, he exposed that student <i>A</i> was homosexual in a group chat that involved around 10 people without his permission. 
            This act is called <b>outing</b>. After it was spread that student <i>A</i> was homosexual, he eventually got overwhelmed and committed suicide that year’s August. 
            After he committed suicide, <mark class="highlights"><b>students gathered in front of the university to hold a memorial rally</b></mark> in honor of student A. 
</p>
            <br /> 
        </div>
    </div> 
    <div class="nextback">
            <nuxt-link to="/en/otherdiscrimination/asiandiscrimination"><img class="back" src="~/assets/back2.png"></nuxt-link>
            <nuxt-link to="/en/otherdiscrimination/religiousdiscrimination"><img class="next" src="~/assets/next.png"></nuxt-link>
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
      title: "Sexual Orientation-Introducing Racism for High School Students by High School Students-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "A brief introduction of discrimination based on their sexual orientation and some events/incidents that have occurred are explained." }
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

.two_sexualorientation{
  font-family: "Noto Sans JP"; 
  width: 50%; 
  margin: 0 auto;
  margin-top: 30px; 
  margin-bottom: 30px;
  font-size: 18px; 
  text-indent: 1em;
}

.start_sexualorientation{
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


.program_orientation{
    width: 50%;
    margin: 0 auto;
    font-size: 21px; 
    font-weight: bold; 
}
.campaign_orientation{
  width: 50%; 
  margin: 0 auto;
  font-size: 15px; 
}

.sexualorientation{
    width: 325px; 
    height: 350px; 
    display: inline-block; 
    margin: 0 auto; 
}

.logoimage{
    text-align: center; 
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
