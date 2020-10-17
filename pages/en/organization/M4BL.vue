<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
    
    <h3 class="start">The Movement for Black Lives</h3>
    <div class="briefinfo">
    <p class="three">
        Founded in December 2014. 
<br></br>Are Abolitionists (abolitionism: movement to end slavery). Organization that believes that prisons and police that inflict violence amongst Black communities should be abolished and instead, form institutions that protect Black communities and their rights. 
<br></br>Link to Official Site<a href="https://m4bl.org/about-us/" target="_blank">https://m4bl.org/about-us/</a>
<br></br>
    </p>
    <img class="logom4bl" src="~/assets/m4bl.png">
  </div>
    <h3 class="start">Activities/Programs</h3>

    
    <div class="activity">
            <h6 class="program">Amnesty-for-protestors</h6>
            <hr>
            <p class="campaign">The campaign for Amnesty-for-Protestors is to demand justice for the political black activists that have been arrested in uprisings and demos. They also demand a reinvestigation for all the allegations of the police, as well as calling off of militarization of the police. 
            => <a href="https://m4bl.org/amnesty-for-protestors/" target="_blank">Link to campaign</a></p>
            <br></br>
            <h6 class="program">Freedom-summer</h6>
            <hr>
            <p class="campaign">This campaign fights Black voter suppression which originated from Mississippi but is currently spread throughout the US. States participating in this campaign include North Carolina, Florida, Michigan, Georgia, Kentucky, Mississippi, Texas, and Illinois. 
             => <a href="https://m4bl.org/freedom-summer/" target="_blank">Link to campaign</a></p>
            <br></br>
            <h6 class="program">Defund-the-police</h6>
            <hr>
            <p class="campaign">This campaign protests against the brutal and militarized policing the US has. This has spread due to the recent deaths of George Floyd, Breonna Taylor, Tony McDade, etc. Their aim is to abolish discriminatory policing and vision a safe community. 
   => <a href="https://m4bl.org/defund-the-police/" target="_blank">Link to campaign</a></p>
            <br></br>
            <h6 class="program">The Breathe Act</h6>
            <hr>
            <p class="campaign">This campaign was created to honor several deaths of black people caused by the police and to achieve a society where all can BREATHE free. This act uprises against the criminal-legal system which has failed to protect the lives of black people as well as envisioning/creating solutions for a better and safer environment. 
   => <a href="https://breatheact.org/" target="_blank"> Link to campaign</a></p>
        <br></br>
        </div>

</div>
<div class="nextback">
            <nuxt-link to="/en/organization/ColorOfChange"><img class="back" src="~/assets/back2.png"></nuxt-link>
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
.three{
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

.briefinfo{
    display: inline-block; 
}

.logom4bl{
    width: 40%; 
    margin: 0 auto; 
    display: block; 
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
