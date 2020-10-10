<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
    
    <h3 class="start">What is discrimination?</h3>
    <p class="two">Discrimination is the act of ignoring one’s individuality and grouping them into different categories while marginalising individuals based on their group. While in reality, distinction should be done clearly, the problem that is being addressed these days are social discrimination, not distinction, which causes unequal treatment amongst people. Even within social discrimination though, there is no clear line on what is categorised as distinction and what is categorised as discrimination. Furthermore, currently, equal opportunities has become a topic that is being spoken about, which increases our awareness of people and problems around us. Therefore, as our awareness increases, what we once did not consider as discrimination could be considered as discrimination now or in the future. 
  <br></br>
    </p>
    <img class="drawing3" src="~/assets/discrimination2.jpg">
 
    <h3 class="start">Difference between discrimination and Distinction</h3>
    <p class="two">
    <b>Discrimination</b> <br></br>
Treating people differently based on a certain factor(s)<br></br>
    <b>Distinction</b> <br></br>
Categorising people into certain groups based on factors (ex. Asian People are categorized as Asian based on their ethnicity.) <br></br>
However, in cases where the side that is distincting people based on factors which cause mistreatement/unfair treatment, that leads to discrimination. Moreover, if the side that is being group feels mistreated/marginalised, it is also considered as discrimination.

    </p>

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

.drawing3{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  height: 370px; 
  margin-top: 0px; 
}

</style>
