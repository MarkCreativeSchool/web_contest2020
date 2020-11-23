<template>
  <div class="fullhead">
   <div class="toggle" :class="{ isHome: isHome === true }">
   <div class="up">
   <nuxt-link to="/en" v-if="isHome"><img class="logo" src="~/assets/newlogoeng.png"></nuxt-link>
   <nuxt-link to="/en" v-else><img class="logo" src="~/assets/black_logo_en.png"></nuxt-link>
    <div class="uppersub_eng">
        <nuxt-link to="" class="bar_en" :class="{ isHome: isHome === true }"> 
        <span>Top</span> 
        <ul class="sub">
              <li><nuxt-link to="/en" class="downsub">Home</nuxt-link></li>
              <li><nuxt-link to="/en/what" class="downsub">What?</nuxt-link></li>
              <li><nuxt-link to="/en/survey" class="downsub">Survey Results</nuxt-link></li>
            </ul>
        </nuxt-link>
        <nuxt-link to="/en/history" class="bar_en" :class="{ isHome: isHome === true }">History</nuxt-link>
        <nuxt-link to="/en/currentproblems" class="bar_en" :class="{ isHome: isHome === true }">Incidents</nuxt-link>
       <nuxt-link to="" class="bar_en" :class="{ isHome: isHome === true }"> 
        <span>Statistics</span> 
        <ul class="sub">
              <li><nuxt-link to="/en/current/statistics/work" class="downsub">Work</nuxt-link></li>
              <li><nuxt-link to="/en/current/statistics/education" class="downsub">Education</nuxt-link></li>
              <li><nuxt-link to="/en/current/statistics/policebrutality" class="downsub">Police Brutality, etc.</nuxt-link></li>
              <li><nuxt-link to="/en/current/organization" class="downsub">Organization</nuxt-link></li>
            </ul>
        </nuxt-link>

        <nuxt-link to="" class="bar_en" :class="{ isHome: isHome === true }"> 
        <span>Discrimination</span> 
        <ul class="sub">
              <li><nuxt-link to="/en/otherdiscrimination/genderdiscrimination" class="downsub">Gender</nuxt-link></li>
              <li><nuxt-link to="/en/otherdiscrimination/asiandiscrimination" class="downsub">Asian</nuxt-link></li>
              <li><nuxt-link to="/en/otherdiscrimination/sexualorientationdiscrimination" class="downsub">Sexual Orientation</nuxt-link></li>
              <li><nuxt-link to="/en/otherdiscrimination/religiousdiscrimination" class="downsub">Religious</nuxt-link></li>
              <li><nuxt-link to="/en/otherdiscrimination/littleknowndiscrimination" class="downsub">Others</nuxt-link></li>
            </ul>
        </nuxt-link>
        
        <nuxt-link to="" class="bar_en" :class="{ isHome: isHome === true }"> 
        <span>Others</span> 
        <ul class="sub">
            <!--  <li><nuxt-link to="/en/others/why" class="subpage">Why?</nuxt-link></li>-->
              <li><nuxt-link to="/en/others/sitemap" class="downsub">Site Map</nuxt-link></li>
              <li><nuxt-link to="/en/others/profile" class="downsub" href="/others/profile">Profile</nuxt-link></li>
              <li><nuxt-link to="/en/others/references" class="downsub">References</nuxt-link></li>
            </ul>
        </nuxt-link>
        <!-- <nuxt-link to="/" class="bar_en">日本語</nuxt-link> -->
        <a @click="tojp" class="bar_en" :class="{ isHome: isHome === true }">日本語</a>
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
  computed: {
    isHome() {
      if (this.$route.path === "/en" || this.$route.path === "/en/index.html" || this.$route.path === "/en/") {
        return true
      } 
      return false
    }
  },
  methods: {
    toggleDropDown(num){
       if (this.activeIndex === num){
       this.activeIndex = null
       } else{
         this.activeIndex = num
       }
    },
    tojp(){
      console.log(this.$route)
      const path = this.$route.path
      const newPath = path.replace(/^\/en/, "")
      console.log(newPath)
      if (newPath === ""){
        this.$router.push("/")
      } else{
        this.$router.push(newPath)
      }
    }
  },
}


</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
.up{
    padding-top: 5px; 
    padding-bottom: 5px;
    /* background-image: linear-gradient(to bottom, #000000, #0f0f0f, #191919, #222222, #2b2b2b, #2b2b2b, #2b2b2b, #2b2b2b, #222222, #191919, #0f0f0f, #000000);  */
    /* background-color: black; */
    background: rgba(255,255,255,0);
    color: #ffffff;
    display: inline-block; 
    width: 100%;
    text-align: center;
}

.fullhead{
  height: 30%;
  margin-bottom: 40px;
  z-index: 100;
  position: relative;
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
  border-bottom: solid 1px #ddd;
}

.bar_en{
  color: black;
  text-align: center;
  padding-left: 10px; 
  padding-right: 10px; 
  padding-top: 7px; 
  padding-bottom: 7px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 800;
  position: relative; 
  flex: 1; 
  font-family: "Rockwell";
  margin: 0 auto;
}

.toggle.isHome{
  border-bottom: none;
}

.uppersub_eng{
  display:flex; 
  margin: 0 auto; 
  padding-top: 15px;
  padding-bottom: 25px;
  width: 55%;
  float:right; 
}

.bar_en.isHome{
  color: white;
}

.bar_en:hover{
  color: #ffa000; 
}

.bar_en .sub{
  z-index: 2000;
}
.bar_en:hover .sub{
  display: block; 
  z-index:2000;
}

.bar_en .sub li{
  padding-top: 0;
  font-size: 16px;
  border-bottom: solid 1px #222;
}

.bar_en .sub li:last-child{
  border-bottom: none;
}

.bar_en .sub li a{
  display: block;
  padding: 10px 10px 5px 10px;
}

.bar_en.active .sub{
  display: block; 
  z-index: 2000;
}

.menu{
    width: 100%; 
}

.sub{
  position: absolute;
  background-color: #444; 
  border: solid 1px #222;
  width: 160px; 
  position: absolute; 
  top: 100%; 
  left: -50%; 
  margin-left: 20px;
  z-index: 10; 
  display: none; 
}

/*.subpage{
  color: #ffa000; 
  font-family: "Rockwell"; 
  padding: 5px; 
}*/

.downsub{
color: #ffffff; 
  font-family: "Rockwell"; 
  padding: 5px; 
}

.downsub:hover{
  color: #ffa000;
}


</style>
