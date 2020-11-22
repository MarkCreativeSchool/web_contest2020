<template>
  <div class="fullhead">
   <div class="toggle">
   <div class="up-jp">
   <!-- <img class="logo" src="~/assets/logo_new_jp.png"> -->
    <nuxt-link to="/"><img class="logo" src="~/assets/newlogo.png"></nuxt-link>

   <!-- </div>
    <div class="toggle">-->
    <div class="uppersub_jp">
        <nuxt-link to="" class="bar_jp"> 
        <span>トップ</span> 
        <ul class="sub_jp">
              <li><nuxt-link to="/" class="downsub">ホーム</nuxt-link></li>
              <li><nuxt-link to="/what" class="downsub">差別とは？</nuxt-link></li>
              <li><nuxt-link to="/survey" class="downsub">アンケート結果</nuxt-link></li>
            </ul>
        </nuxt-link>
        <nuxt-link to="/history" class="bar_jp">歴史</nuxt-link>
        <nuxt-link to="/currentproblems" class="bar_jp">現問題</nuxt-link>
        
        <nuxt-link to="" class="bar_jp"> 
        <span>現状</span>
        <ul class="sub_jp">
              <li><nuxt-link to="/current/statistics/work" class="downsub">雇用</nuxt-link></li>
              <li><nuxt-link to="/current/statistics/education" class="downsub">教育</nuxt-link></li>
              <li><nuxt-link to="/current/statistics/policebrutality" class="downsub">逮捕率など</nuxt-link></li>
              <li><nuxt-link to="/current/organization" class="downsub">組織</nuxt-link></li>
            </ul>
        </nuxt-link>

        <nuxt-link to="" class="bar_jp"> 
        <span>他の差別</span> 
        <ul class="sub_jp">
              <li><nuxt-link to="/otherdiscrimination/genderdiscrimination" class="downsub">性差別</nuxt-link></li>
              <li><nuxt-link to="/otherdiscrimination/asiandiscrimination" class="downsub">アジア人差別</nuxt-link></li>
              <li><nuxt-link to="/otherdiscrimination/sexualorientationdiscrimination" class="downsub">性的指向</nuxt-link></li>
              <li><nuxt-link to="/otherdiscrimination/religiousdiscrimination" class="downsub">宗教差別</nuxt-link></li>
              <li><nuxt-link to="/otherdiscrimination/littleknowndiscrimination" class="downsub">他</nuxt-link></li>
            </ul>
        </nuxt-link>
        
        <nuxt-link to="" class="bar_jp"> 
        <span>その他</span> 
        <ul class="sub_jp">
            <!--  <li><nuxt-link to="/others/why" class="subpage">何故？</nuxt-link></li>-->
              <li><nuxt-link to="/others/sitemap" class="downsub">サイトマップ</nuxt-link></li>
              <li><nuxt-link to="/others/profile" class="downsub" href="/others/profile">製作者紹介</nuxt-link></li>
              <li><nuxt-link to="/others/references" class="downsub">参考文献</nuxt-link></li>
            </ul>
        </nuxt-link>
        <!-- <nuxt-link to="/en/homeeng/" class="bar_jp">ENGLISH</nuxt-link> -->
        <a @click="toeng" class="bar_jp">英語</a>
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
    },
    toeng(){
      const path = this.$route.path
      console.log(path)
      const newPath = "/en" + path
      console.log(newPath)
      this.$router.push(newPath)
    }
  }
}


</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');

.fullhead{
  height: 30%;
  position: relative;
  z-index: 100;
  margin-bottom: 30px;
}

.up-jp{
    padding-top: 5px; 
    padding-bottom: 5px;
    /* background-image: linear-gradient(to bottom, #000000, #0f0f0f, #191919, #222222, #2b2b2b, #2b2b2b, #2b2b2b, #2b2b2b, #222222, #191919, #0f0f0f, #000000);  */
    background-color: black;
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
   padding-bottom: 25px;
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

.bar_jp{
  position: relative;
  color: white;
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

.bar_jp .sub_jp {
  z-index: 2000;
}

.bar_jp:hover .sub_jp {
  display: block;
}

.bar_jp .sub_jp li {
  padding-top: 0;
}

.bar_jp.active .sub_jp{
  display: block; 
  z-index: 2000;
}

.sub_jp{
  position: absolute;
  background-color: #000; 
  width: 100%; 
  position: absolute; 
  top: 100%; 
  left: 0; 
  z-index: 10; 
  display: none; 
}

/*.subpage{
  color: #ffffff; 
  font-family: "Rockwell"; 
  padding: 5px; 
}

.subpage:hover{
  color: #ffa000;
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
