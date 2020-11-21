<template>
  <div class="fullhead">
   <div class="toggle">
   <div class="up-jp">
   <!-- <img class="logo" src="~/assets/logo_new_jp.png"> -->

   <!-- </div>
    <div class="toggle">-->
    <div class="uppersub_jp">
        <nuxt-link to="" class="bar_jp" :class="{ 'active': activeIndex === 1 }"> 
        <span @click="toggleDropDown(1)">トップ</span> 
        <ul class="sub_jp">
              <li><nuxt-link to="/" class="subpage">ホーム</nuxt-link></li>
              <li><nuxt-link to="/home/what" class="subpage">差別とは？</nuxt-link></li>
              <li><nuxt-link to="/home/survey" class="subpage">アンケート結果</nuxt-link></li>
            </ul>
        </nuxt-link>
        <nuxt-link to="/history" class="bar_jp">歴史</nuxt-link>
        <nuxt-link to="/currentproblems" class="bar_jp">現問題</nuxt-link>
        
        <nuxt-link to="" class="bar_jp" :class="{ 'active': activeIndex === 2 }"> 
        <span @click="toggleDropDown(2)">現状</span> 
        <ul class="sub_jp">
              <li><nuxt-link to="/current/statistics/work" class="subpage">雇用</nuxt-link></li>
              <li><nuxt-link to="/current/statistics/education" class="subpage">教育</nuxt-link></li>
              <li><nuxt-link to="/current/statistics/policebrutality" class="subpage">逮捕率など</nuxt-link></li>
              <li><nuxt-link to="/current/organization" class="subpage">組織</nuxt-link></li>
            </ul>
        </nuxt-link>

        <nuxt-link to="" class="bar_jp" :class="{ 'active': activeIndex === 3 }"> 
        <span @click="toggleDropDown(3)">他の差別</span> 
        <ul class="sub_jp">
              <li><nuxt-link to="/otherdiscrimination/otherdiscrimination/genderdiscrimination" class="subpage">性差別</nuxt-link></li>
              <li><nuxt-link to="/otherdiscrimination/otherdiscrimination/asiandiscrimination" class="subpage">アジア人差別</nuxt-link></li>
              <li><nuxt-link to="/otherdiscrimination/otherdiscrimination/sexualorientationdiscrimination" class="subpage">性的指向</nuxt-link></li>
              <li><nuxt-link to="/otherdiscrimination/otherdiscrimination/religiousdiscrimination" class="subpage">宗教差別</nuxt-link></li>
              <li><nuxt-link to="/otherdiscrimination/otherdiscrimination/littleknowndiscrimination" class="subpage">他</nuxt-link></li>
            </ul>
        </nuxt-link>
        
        <nuxt-link to="" class="bar_jp" :class="{ 'active': activeIndex === 4 }"> 
        <span @click="toggleDropDown(4)">その他</span> 
        <ul class="sub_jp">
            <!--  <li><nuxt-link to="/others/why" class="subpage">何故？</nuxt-link></li>-->
              <li><nuxt-link to="/others/sitemap" class="subpage">サイトマップ</nuxt-link></li>
              <li><nuxt-link to="/others/profile" class="subpage" href="/others/profile">製作者紹介</nuxt-link></li>
              <li><nuxt-link to="/others/references" class="subpage">参考文献</nuxt-link></li>
            </ul>
        </nuxt-link>
        <nuxt-link to="/en/homeeng/" class="bar_jp">ENGLISH</nuxt-link>
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
  margin-bottom: 30px;
}

.up-jp{
    padding-top: 5px; 
    padding-bottom: 5px;
    /* background-image: linear-gradient(to bottom, #000000, #0f0f0f, #191919, #222222, #2b2b2b, #2b2b2b, #2b2b2b, #2b2b2b, #222222, #191919, #0f0f0f, #000000);  */
    background-color: white;
    /* background: rgba(255,255,255,0.5); */
    display: inline-block; 
    width: 100%;
    text-align: center;
    position: relative;
}

.toggle{
  display: inline-block; 
  width: 100%;
  margin-bottom: 0px;
}

.uppersub_jp{
  display:flex; 
  margin: 0 auto; 
  padding-top: 15px;
  width: 75%;
  float:right;
}


/* .logo{
  display: inline-block;
  width: 75px; 
  height: 75px;
  float: left; 
  margin-left: 20px; 
  margin-top: 5px; 
} */

.bar_jp{
  color: black;
  text-align: center;
  padding-left: 30px; 
  padding-right: 30px; 
  padding-top: 7px; 
  padding-bottom: 7px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 800;
  position: relative; 
  flex: 1; 
  font-family: "Noto Sans JP"; 
  margin: 0 auto;
}
.bar_jp:hover{
  color: #ffa000; 
}
.bar_jp.active .sub_jp{
  display: block; 
}

.sub_jp{
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
