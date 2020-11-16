<template>
  <div class="fullhead">
   <div class="toggle">
   <div class="up">
   <img class="logo" src="~/assets/newlogo.png">

   <!-- </div>
    <div class="toggle">-->

    <div class="uppersub">
        <nuxt-link to="" class="bar" :class="{ 'active': activeIndex === 1 }"> 
        <span @click="toggleDropDown(1)">トップ</span> 
        <ul class="sub">
              <li><nuxt-link to="/" class="subpage">ホーム</nuxt-link></li>
              <li><nuxt-link to="/home/what" class="subpage">差別とは？</nuxt-link></li>
              <li><nuxt-link to="/home/survey" class="subpage">アンケート結果</nuxt-link></li>
            </ul>
        </nuxt-link>
        <nuxt-link to="/history" class="bar">歴史</nuxt-link>
        <nuxt-link to="/currentproblems" class="bar">現問題</nuxt-link>
        
        <nuxt-link to="" class="bar" :class="{ 'active': activeIndex === 2 }"> 
        <span @click="toggleDropDown(2)">現状</span> 
        <ul class="sub">
              <li><nuxt-link to="/current/statistics/work" class="subpage">雇用</nuxt-link></li>
              <li><nuxt-link to="/current/statistics/education" class="subpage">教育</nuxt-link></li>
              <li><nuxt-link to="/current/statistics/policebrutality" class="subpage">逮捕率など</nuxt-link></li>
              <li><nuxt-link to="/current/organization" class="subpage">組織</nuxt-link></li>
            </ul>
        </nuxt-link>

        <nuxt-link to="" class="bar" :class="{ 'active': activeIndex === 3 }"> 
        <span @click="toggleDropDown(3)">他の差別</span> 
        <ul class="sub">
              <li><nuxt-link to="/otherdiscrimination/otherdiscrimination/genderdiscrimination" class="subpage">性差別</nuxt-link></li>
              <li><nuxt-link to="/otherdiscrimination/otherdiscrimination/asiandiscrimination" class="subpage">アジア人差別</nuxt-link></li>
              <li><nuxt-link to="/otherdiscrimination/otherdiscrimination/sexualorientationdiscrimination" class="subpage">性的指向</nuxt-link></li>
              <li><nuxt-link to="/otherdiscrimination/otherdiscrimination/religiousdiscrimination" class="subpage">宗教差別</nuxt-link></li>
              <li><nuxt-link to="/otherdiscrimination/otherdiscrimination/littleknowndiscrimination" class="subpage">他</nuxt-link></li>
            </ul>
        </nuxt-link>
        
        <nuxt-link to="" class="bar" :class="{ 'active': activeIndex === 4 }"> 
        <span @click="toggleDropDown(4)">その他</span> 
        <ul class="sub">
            <!--  <li><nuxt-link to="/others/why" class="subpage">何故？</nuxt-link></li>-->
              <li><nuxt-link to="/others/sitemap" class="subpage">サイトマップ</nuxt-link></li>
              <li><nuxt-link to="/others/profile" class="subpage" href="/others/profile">製作者紹介</nuxt-link></li>
              <li><nuxt-link to="/others/references" class="subpage">参考文献</nuxt-link></li>
            </ul>
        </nuxt-link>
        <nuxt-link to="/en/homeeng/" class="bar">ENGLISH</nuxt-link>
        </div>
  </div> 
  </div>
           
  </div>
</template>

<script>
export default {
    name: "Header",
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

.fullhead{
  height: 30%;
  margin-bottom: 100px;
}

.up{
    padding-top: 5px; 
    padding-bottom: 5px;
    background-image: linear-gradient(to bottom, #000000, #0f0f0f, #191919, #222222, #2b2b2b, #2b2b2b, #2b2b2b, #2b2b2b, #222222, #191919, #0f0f0f, #000000);
    color: #ffffff;
    display: inline-block; 
    width: 100%;
    text-align: center; 
}
.toggle{
  display: inline-block; 
  width:100%;
  margin-bottom: 0px;
}

.uppersub{
  display:flex; 
  margin: 0 auto; 
  padding-top: 15px;
  width: 75%;
  float:right; 
}


.logo{
  display: inline-block;
  width: 75px; 
  height: 75px;
  float: left; 
  margin-left: 20px; 
  margin-top: 5px; 
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
  margin: 0 auto;
}

.bar:hover{
  color: #f6d405; 
}
.bar.active .sub{
  display: block; 
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
