<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
    

    <h3 class="start">Black Lives Matter</h3>
    
    
    <p class="paragraph">
        Founded in 2013 July 13. Was a response to the murder of Trayvon Martin
<br></br>Is a global organization: UK, US, and Canada. 
<br></br>Mission: Demolish/Eradicate white supremacy (白人覇権) and prevent violence amongst Black communities. 
<br></br>Original Organisers:  Alicia Garza, Patrisse Cullors, and Opal Tometi
<br></br>Created a movement called #BlackLives Matter due to Trayvon Martin’s murder in 2013. The organization itself was formed in 2014. Alicia Garza is an activist who was one of the people that posted #BlackLivesMattter on Facebook. 
<br></br>Link to official site<a href="https://blacklivesmatter.com/about/" target="_blank"> https://blacklivesmatter.com/about/ </a>
    <br></br>
    </p>
    <img class="logoblm" src="~/assets/blmlogo.jpg">

    <h3 class="start">Activities/Programs</h3>
        
         <div class="activity">
            <h6 class="program">2018 June: Action at the San Diego Border</h6>
            <hr>
            <p class="campaign">In June 2018, BLM global activists gathered at the San Diego Border to protest against the President’s administration’s immigration policies, which resulted in separation between parents and children. The president had just recently signed an order that declared children would be separated from their parents once their parents are arrested within the U.S-Mexican border. Activists furthermore demanded for humane treatment for the immigrants that are seeking for jobs, and asylum in the U.S. </p>
            <br></br>
            <h6 class="program">2018 September: Stephon Clark</h6>
            <hr>
            <p class="campaign">2018 September marked the 6-month anniversary of the murder of Stephon Clark who was a 22 year old man shot on March 18. Global network activists gathered and represented the fatalities using 175 caskets, whilst magnifying the impact of these fatalities bring upon the community. This raised awareness of the police brutality against black communities and called for justice amongst the community. Organizations including Women for Equality, Voices of the Youth, and NAACP joined this movement with the BLM activists. </p>
            <br></br>
            <h6 class="program">BLM’S #WhatMatters2020</h6>
            <hr>
            <p class="campaign"> BLM created a campaign called #WhatMatters2020 which addresses issues including police brutality, racial injustice, access to healthcare, and voting rights for black communities. It was created to raise the current issue of racial injustice against black communities and assure the candidates would address these issues as well as build collective power to protest against racial injustice. See more here⇒ <a href="https://blacklivesmatter.com/what-matters-2020/" target="_blank">#WhatMatters2020</a></p>
            <br></br>      
        </div>

        <div class="nextback">
            <nuxt-link to="/en/organization"><img class="back" src="~/assets/back2.png"></nuxt-link>
            <nuxt-link to="/en/organization/BAJI"><img class="next" src="~/assets/next.png"></nuxt-link>
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
.paragraph{
  font-family: "Noto Sans JP"; 
  width: 60%; 
  margin: 0 auto;
  padding-top: 20px; 
  font-size: 18px; 
  display: inline-block; 
  margin-left: 140px; 
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

.logoblm{
    height: 300px; 
    width: 20%; 
    display: inline-block;
    margin-right: 20px;  
    margin-bottom: 20px; 
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