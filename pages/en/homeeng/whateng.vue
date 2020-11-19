<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
    <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/en/homeeng/">Home</nuxt-link></li>
         <li class="breadcrumb-item"> <nuxt-link to="/en/homeeng/whateng">What?</nuxt-link></li>
     </ol>
    <h3 class="start">What is discrimination?</h3>
    <img class="drawing1" src="~/assets/what.jpg">
    <p class="two">Discrimination is the <mark class="highlights"><b>act of ignoring one’s individuality and grouping them into different categories</b></mark> <mark class="highlights"><b>while marginalising individuals based on their group</b></mark>. 
    While in reality, distinction should be done clearly, the problem that is being addressed these days are <mark class="highlights"><b>social discrimination, not distinction</b></mark>, which causes unequal treatment amongst people. 
    Even within social discrimination though, there is <mark class="highlights"><b>no clear</b></mark> line on what is categorised as distinction and what is categorised as discrimination. 
    Furthermore, currently, equal opportunities has become a topic that is being spoken about, which increases our awareness of people and problems around us. 
    Therefore, as our awareness increases, what we once did not consider as discrimination could be considered as discrimination now or in the future. 
  <br></br>
    </p>
    <img class="drawing3" src="~/assets/discrimination2.jpg">
 
    <h3 class="start">Difference between discrimination and Distinction</h3>
    <p class="two">
    <br>
    <mark class="highlights"><b>Discrimination</b></mark> <br>
Treating people differently based on a certain factor(s)<br><br>
    <mark class="highlights"><b>Distinction</b></mark> <br>
Categorising people into certain groups based on factors (ex. Asian People are categorized as Asian based on their ethnicity.) <br><br>

<b>However, in cases where the side that is distincting people based on factors which cause mistreatement/unfair treatment, that leads to discrimination. Moreover, if the side that is being group feels mistreated/marginalised, it is also considered as discrimination.</b><br><br>

    </p>

    </div> 
    <div class="nextback">
        <nuxt-link to="/en/homeeng/"><img class="back" src="~/assets/back2.png"></nuxt-link>
            <nuxt-link to="/en/homeeng/survey"><img class="next" src="~/assets/next.png"></nuxt-link>
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
      title: "What?-Introducing Racism for High School Students by High School Students-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "A description of what discrimination is is explained." }
      ]
    }
  },
}　
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
.two{
  font-family: "Noto Sans JP"; 
  width: 63%; 
  margin: 0 auto;
  margin-top: 10px; 
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

.drawing3{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  height: 370px; 
  margin-top: 0px; 
}

.drawing1{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 73%;
  height: 500px; 
  margin-top: 0px; 
  margin-bottom: 30px;
}

</style>
