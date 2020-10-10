<template>
  <div class="full">
   <div class="up">
   <img class="logo" src="~/assets/Englishlogo.png">
   <img class="titleeng" src="~/assets/engtitle2.png">
    </div>
    <div class="toggle">
        <nuxt-link to="" class="bar" :class="{ 'active': activeIndex === 1 }"> 
        <span @click="toggleDropDown(1)">Top</span> 
        <ul class="sub">
              <li><nuxt-link to="/en/homeeng" class="subpage">Home</nuxt-link></li>
              <li><nuxt-link to="/en/homeeng/whateng" class="subpage">What?</nuxt-link></li>
              <li><nuxt-link to="/home/whatisblackdiscrimination" class="subpage">Current Statistics</nuxt-link></li>
            </ul>
        </nuxt-link>
        <nuxt-link to="/history" class="bar">History</nuxt-link>
        <nuxt-link to="/en/currentproblems" class="bar">Current Problems</nuxt-link>
        <nuxt-link to="/organization" class="bar">Organizations</nuxt-link>
        <nuxt-link to="/otherdiscrimination" class="bar">Other Discrimination</nuxt-link>
        
        <nuxt-link to="" class="bar" :class="{ 'active': activeIndex === 2 }"> 
        <span @click="toggleDropDown(2)">Others</span> 
        <ul class="sub">
              <li><nuxt-link to="/others/why" class="subpage">Why?</nuxt-link></li>
              <li><nuxt-link to="/others/sitemap" class="subpage">Site Map</nuxt-link></li>
              <li><nuxt-link to="/others/profile" class="subpage" href="/others/profile">Creator Introduction</nuxt-link></li>
              <li><nuxt-link to="/others/references" class="subpage">References</nuxt-link></li>
            </ul>
        </nuxt-link>
        <nuxt-link to="/" class="bar">日本語版サイト</nuxt-link>
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
    background-image: linear-gradient(to bottom, #000000, #0f0f0f, #191919, #222222, #2b2b2b, #2b2b2b, #2b2b2b, #2b2b2b, #222222, #191919, #0f0f0f, #000000);
    color: #ffffff; 
    box-shadow: $stripe;
    display: inline-block; 
    width: 100%;
    text-align: center; 
}

.logo{
  display: inline-block;
  width: 75px; 
  height: 75x;
  float: left; 
  margin-left: 20px; 
  margin-top: 5px; 
}

h1{
    font-size: 50px; 
    font-family: "Noto Sans JP"; 
    text-shadow: 1px 1px #f6d405;
    display: inline-block; 

}

.titleeng{
  display: inline-block;
  width: 89%;
  margin-top: 12px; 

}

.bar{
  color: #ffffff;
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

.bar:hover{
  color: #f6d405; 
}
.bar.active .sub{
  display: block; 
}

.menu{
    width: 100%; 
}

.toggle{
  background-image: linear-gradient(to top, #333333, #343434, #353535, #363636, #373737, #373737, #373737, #373737, #363636, #353535, #343434, #333333);
  display: flex; 
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
  color: #f6d405; 
  font-family: "Rockwell"; 
  padding: 5px; 
}


</style>
