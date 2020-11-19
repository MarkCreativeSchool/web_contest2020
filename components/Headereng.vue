<template>
  <div class="fullhead">
   <div class="toggle">
   <div class="up">
   <img class="logo" src="~/assets/newlogoeng.png">
  
  
  <!--  </div>
    <div class="toggle">-->
    <div class="uppersub_eng">
        <nuxt-link to="" class="bar_en" :class="{ 'active': activeIndex === 1 }"> 
        <span @click="toggleDropDown(1)">Top</span> 
        <ul class="sub">
              <li><nuxt-link to="/en/homeeng" class="subpage">Home</nuxt-link></li>
              <li><nuxt-link to="/en/homeeng/whateng" class="subpage">What?</nuxt-link></li>
              <li><nuxt-link to="/en/homeeng/survey" class="subpage">Survey Results</nuxt-link></li>
            </ul>
        </nuxt-link>
        <nuxt-link to="/en/history" class="bar_en">History</nuxt-link>
        <nuxt-link to="/en/currentproblems" class="bar_en">Incidents</nuxt-link>
       <nuxt-link to="" class="bar_en" :class="{ 'active': activeIndex === 2 }"> 
        <span @click="toggleDropDown(2)">Statistics</span> 
        <ul class="sub">
              <li><nuxt-link to="/en/current/statistics/work" class="subpage">Work</nuxt-link></li>
              <li><nuxt-link to="/en/current/statistics/education" class="subpage">Education</nuxt-link></li>
              <li><nuxt-link to="/en/current/statistics/policebrutality" class="subpage">Police Brutality, etc.</nuxt-link></li>
              <li><nuxt-link to="/en/current/organization" class="subpage">Organization</nuxt-link></li>
            </ul>
        </nuxt-link>

        <nuxt-link to="" class="bar_en" :class="{ 'active': activeIndex === 3 }"> 
        <span @click="toggleDropDown(3)">Other</span> 
        <ul class="sub">
              <li><nuxt-link to="/en/otherdiscrimination/genderdiscrimination" class="subpage">Gender</nuxt-link></li>
              <li><nuxt-link to="/en/otherdiscrimination/asiandiscrimination" class="subpage">Asian</nuxt-link></li>
              <li><nuxt-link to="/en/otherdiscrimination/sexualorientationdiscrimination" class="subpage">Sexual Orientation</nuxt-link></li>
              <li><nuxt-link to="/en/otherdiscrimination/religiousdiscrimination" class="subpage">Religious</nuxt-link></li>
              <li><nuxt-link to="/en/otherdiscrimination/littleknowndiscrimination" class="subpage">Others</nuxt-link></li>
            </ul>
        </nuxt-link>
        
        <nuxt-link to="" class="bar_en" :class="{ 'active': activeIndex === 4 }"> 
        <span @click="toggleDropDown(4)">Others</span> 
        <ul class="sub">
            <!--  <li><nuxt-link to="/en/others/why" class="subpage">Why?</nuxt-link></li>-->
              <li><nuxt-link to="/en/others/sitemap" class="subpage">Site Map</nuxt-link></li>
              <li><nuxt-link to="/en/others/profile" class="subpage" href="/others/profile">Profile</nuxt-link></li>
              <li><nuxt-link to="/en/others/references" class="subpage">References</nuxt-link></li>
            </ul>
        </nuxt-link>
        <nuxt-link to="/" class="bar_en">日本語</nuxt-link>
   </div>
  </div> 
  </div>
           
  </div>
</template>

<script>
export default {
    name: "Headereng",
  data(){
    return {
      activeIndex: null, 
    }
  },
  methods: {
    toggleDropDown(num){
       if (this.activeIndex === num){
       this.activeIndex = null
       } else{
         this.activeIndex = num
       }
    }
  }
}


</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
.up{
    padding-top: 5px; 
    padding-bottom: 5px;
    /* background-image: linear-gradient(to bottom, #000000, #0f0f0f, #191919, #222222, #2b2b2b, #2b2b2b, #2b2b2b, #2b2b2b, #222222, #191919, #0f0f0f, #000000);  */
    background-color: white;
    color: #ffffff;
    display: inline-block; 
    width: 100%;
    text-align: center;
}

.fullhead{
  height: 30%;
  margin-bottom: 30px;
}

.logo{
  display: inline-block;
  width: 75px; 
  height: 75x;
  float: left; 
  margin-left: 20px; 
  margin-top: 5px; 
}



.toggle{
  display: inline-block; 
  width:100%;
  margin-bottom: 0px;
}

.bar_en{
  color: black;
  text-align: center;
  padding-left: 30px; 
  padding-right: 30px; 
  padding-top: 7px; 
  padding-bottom: 7px;
  text-decoration: none;
  font-size: 17px;
  position: relative; 
  flex: 1; 
  font-family: "Noto Sans JP"; 
}

.uppersub_eng{
  display:flex; 
  margin: 0 auto; 
  padding-top: 15px;
  width: 75%;
  float:right; 
}

.bar_en:hover{
  color: #ffa000; 
}
.bar_en.active .sub{
  display: block; 
}

.menu{
    width: 100%; 
}

.sub{
  background-color: #333; 
  width: 100%; 
  position: absolute; 
  top: 100%; 
  left: 0; 
  z-index: 10; 
  display: none; 
}

.subpage{
  color: #ffa000; 
  font-family: "Rockwell"; 
  padding: 5px; 
}


</style>
