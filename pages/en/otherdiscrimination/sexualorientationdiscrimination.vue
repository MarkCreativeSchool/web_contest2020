<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
    
    <h3 class="start">Sexual Orientation Discrimination</h3>
    <p class="two">
       Sexual orientation discrimination is discrimination that is done due to one’s sexuality. This act of discrimination targets  LGBTQ+ communities (L=Lesbian, G=Gay, B=Bisexual, T=Transgender, Q=Queer, +=other sexual identities such as pansexual, asexual, and omnisexual). Types of discrimination includes both direct and indirect discrimination as well as harassment.  
    <br></br>
    <div class="logoimage">
    <img class="sexualorientation" src="~/assets/gendersign.png">
    <img class="sexualorientation" src="~/assets/heart.png">
    </div>
    </p>

    <h3 class="start">Incidents</h3>
       
         <div class="activity">
            <h6 class="program">Orlando nightclub shooting (US)</h6>
            <hr>
            <p class="campaign">On June 12, 2016, Omar Martin, a security guard conducted a shooting at a gay nightclub. He murdered 49 people in total and 53 others were injured. 3 hours after he was taken hostage, he was shot by the police. This attack was the worst mass shooting in the US at that time. The nightclub had several homosexual customers which Martin was aware of, and he often made it clear that he was homophobic. His relatives claim that it could have been a hate crime. 
</p>
            <br></br>
            <h6 class="program">Incident of outing at Hitotsubashi University (Japan)</h6>
            <hr>
            <p class="campaign">In 2015, April, male student A from Hitotsubashi University confessed to male student B on messaging app, Line. While student B told him that he wanted to remain friends with him, later on, he exposed that student A was homosexual in a group chat that involved around 10 people without his permission. This act is called outing. After it was spread that student A was homosexual, he eventually got overwhelmed and committed suicide that year’s August. After he committed suicide,  students gathered in front of the gate of Hitotsubashi university to hold a memorial rally in honor of student A. 
</p>
            <br></br>  
        </div>
    </div> 
    <div class="nextback">
            <nuxt-link to="/otherdiscrimination/otherdiscrimination/asiandiscrimination"><img class="back" src="~/assets/back2.png"></nuxt-link>
            <nuxt-link to="/otherdiscrimination/otherdiscrimination/religiousdiscrimination"><img class="next" src="~/assets/next.png"></nuxt-link>
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
