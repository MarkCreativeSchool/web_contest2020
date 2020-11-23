<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
    <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/en">Home</nuxt-link></li>
         <li class="breadcrumb-item">Others</li>
         <li class="breadcrumb-item"> <nuxt-link to="/en/others/sitemap">Sitemap</nuxt-link></li>
     </ol>
    
     <br>
    <h3 class="start_sitemap"><span class="under">Site Map</span></h3>
    <br>
    <h6 class="title_sitemap">Top</h6>
      <ul class="list_sitemap">
      <li><nuxt-link to="/en">Home</nuxt-link></li>
      <li><nuxt-link to="/en/what">What?</nuxt-link></li>
      <li><nuxt-link to="/en/survey">Survey Results</nuxt-link></li>
      </ul>
      <br>
    <h6 class="title_sitemap"><nuxt-link to="/en/history">History</nuxt-link></h6>
    <br>
    <h6 class="title_sitemap"><nuxt-link to="/en/currentproblems">Incidents</nuxt-link></h6>
    <br>
    <h6 class="title_sitemap">Statistics</h6>
    <ul class="list_sitemap">
      <li><nuxt-link to="/en/current/statistics/work">Work</nuxt-link></li>
      <li><nuxt-link to="/en/current/statistics/education">Education</nuxt-link></li>
      <li><nuxt-link to="/en/current/statistics/policebrutality">Police Brutality, etc.</nuxt-link></li>
      <li><nuxt-link to="/en/current/organization">Organizations</nuxt-link></li>
      </ul>
      <br>
    <h6 class="title_sitemap">Discrimination</h6>
    <ul class="list_sitemap">
      <li><nuxt-link to="/en/otherdiscrimination/genderdiscrimination">Gender</nuxt-link></li>
      <li><nuxt-link to="/en/otherdiscrimination/asiandiscrimination">Asian</nuxt-link></li>
      <li><nuxt-link to="/en/otherdiscrimination/sexualorientationdiscrimination">Sexual Orientation</nuxt-link></li>
      <li><nuxt-link to="/en/otherdiscrimination/religiousdiscrimination">Religious</nuxt-link></li>
      <li><nuxt-link to="/en/otherdiscrimination/littleknowndiscrimination">Others</nuxt-link></li>
      </ul>
      <br>
    <h6 class="title_sitemap">Others</h6>
    <ul class="list_sitemap">
      <li><nuxt-link to="/en/others/sitemap">Site Map</nuxt-link></li>
      <li><nuxt-link to="/en/others/profile">Profile</nuxt-link></li>
      <li><nuxt-link to="/en/others/references">References</nuxt-link></li>
      </ul>
<br><br>
    
</div>
<div class="nextback">
          <!--  <nuxt-link to="/en/others/sitemap"><img class="back" src="~/assets/back.png"></nuxt-link>-->
            <nuxt-link to="/en/others/profile"><img class="next" src="~/assets/next.png"></nuxt-link>
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
      title: "Profile-Introducing Racism for High School Students by High School Students-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "A description of the creaters are written." }
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

  .list_sitemap{
    font-weight: bold;
    font-size: 14px;
    font-family: "Noto Sans JP"; 
    margin: 0 auto;
    width: 45%;
    color: black;
    list-style-type: circle;
  }

  .title_sitemap{
    font-weight: bold;
    font-size: 20px;
    font-family: "Noto Sans JP"; 
    margin: 0 auto;
    width: 50%;
    color: black;
  }


 .start_sitemap{
    font-weight: bold;
    font-size: 30px;
    font-family: "Noto Sans JP"; 
    margin: 0 auto;
    width: 50%;
    color: black;
  }

  .two_sitemap{
  font-family: "Noto Sans JP"; 
  width: 50%; 
  margin: 0 auto;
  margin-top: 10px; 
  font-size: 18px; 
  text-indent: 1em;
}

.more{
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
  margin-top: 45px; 
}

.card{
  width: 24%;
  display: inline-block;
  margin: 20px; 
  padding: 1px; 
  border-radius: 3px; 
  background-color: #000000; 
}

.profile{
  display: block; 
  width: 100%; 
  text-align: center; 
}

.content{ 
  font-size: 14px; 
  color: #f6d405;
}

</style>
