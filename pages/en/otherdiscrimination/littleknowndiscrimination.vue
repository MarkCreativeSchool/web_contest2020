<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
    <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/en/homeeng/">Home</nuxt-link></li>
         <li class="breadcrumb-item">Other Discrimination</li>
         <li class="breadcrumb-item"> <nuxt-link to="/en/otherdiscrimination/littleknowndiscrimination">Others</nuxt-link></li>
     </ol>
    <h3 class="start">Little Known Discrimination</h3>
    <p class="two">
        While major forms of discrimination are often brought up today, <mark class="highlights"><b>there are several forms of discrimination that is still unknown</b></mark>. Here are some examples of discrimination that is not noticed but should be. 
    <br></br>
    </p>

       <div class="activity">
            <h6 class="program">Discrimination based on educational status</h6>
            <hr>
            <p class="campaign">Discrimination based on one’s educational level (college graduate, high school graduate, and high school drop-out) and the mistreatment that occurs. </p>
            <br></br>
            <h6 class="program">Discrimination against pregnant women</h6>
            <hr>
            <p class="campaign">There are several cases where pregnant women face discrimination at work, as well as in the public, such as public transportation. </p>
            <br></br>  
            <h6 class="program">Age discrimination</h6>
            <hr>
            <p class="campaign">Discrimination against people with a certain age is also an issue that is being raised today. </p>
            <br></br>  
            <h6 class="program">Discrimination against handicapped people/people with disorders</h6>
            <hr>
            <p class="campaign">Discrimination people who have disorders (ADD, Dyslexia, Alzheimer's disease, etc) and/or handicapped (a part of their body is paralyzed, etc.). </p>
            <br></br>  
        </div>
        
    </div> 
    <div class="nextback">
            <nuxt-link to="/en/otherdiscrimination/religiousdiscrimination"><img class="back" src="~/assets/back2.png"></nuxt-link>
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
      title: "Little Known Discrimination-Introducing Racism for High School Students by High School Students-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "A brief introduction of discrimination against discrimination that is unknown to many" }
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

.activity{
    width: 80%;
    margin: 0 auto;
    margin-top: 30px; 
    font-family: "Noto Sans JP"; 
}


.program{
    width: 85%;
    margin: 0 auto;
    font-size: 21px; 
    font-weight: bold; 
}
.campaign{
  width: 80%; 
  margin: 0 auto;
  font-size: 15px; 
}

</style>