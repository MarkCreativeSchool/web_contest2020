<template>
  <div class="fullhead">
   <div class="toggle" :class="{ isHome: isHome === true }">
   <div class="up-jp">
    <nuxt-link to="/" v-if="isHome"><img class="logo" :src="`${prefix}/newlogo.png`"></nuxt-link>
    <nuxt-link to="/" v-else><img class="logo" :src="`${prefix}/black_logo.png`"></nuxt-link>

   <!-- </div>
    <div class="toggle">-->
    <div class="uppersub_jp">
        <nuxt-link to="" class="bar_jp" :class="{ isHome: isHome === true }">
        <span>トップ</span>
        <ul class="sub_jp">
              <li><nuxt-link to="/" class="downsub">ホーム</nuxt-link></li>
              <li><nuxt-link to="/what" class="downsub">差別とは？</nuxt-link></li>
              <li><nuxt-link to="/survey" class="downsub">アンケート結果</nuxt-link></li>
              <li><nuxt-link to="/sdgs" class="downsub">SDGSとの関係</nuxt-link></li>
            </ul>
        </nuxt-link>
        <nuxt-link to="/history" class="bar_jp" :class="{ isHome: isHome === true }">歴史</nuxt-link>
        <nuxt-link to="/currentproblems" class="bar_jp" :class="{ isHome: isHome === true }">現問題</nuxt-link>

        <nuxt-link to="" class="bar_jp" :class="{ isHome: isHome === true }">
        <span>現状</span>
        <ul class="sub_jp" >
              <li><nuxt-link to="/current/statistics/work" class="downsub">雇用</nuxt-link></li>
              <li><nuxt-link to="/current/statistics/education" class="downsub">教育</nuxt-link></li>
              <li><nuxt-link to="/current/statistics/policebrutality" class="downsub">逮捕率など</nuxt-link></li>
              <li><nuxt-link to="/current/organization" class="downsub">組織</nuxt-link></li>
            </ul>
        </nuxt-link>

        <nuxt-link to="" class="bar_jp" :class="{ isHome: isHome === true }">
        <span>他の差別</span>
        <ul class="sub_jp">
              <li><nuxt-link to="/otherdiscrimination/genderdiscrimination" class="downsub">性差別</nuxt-link></li>
              <li><nuxt-link to="/otherdiscrimination/asiandiscrimination" class="downsub">アジア人差別</nuxt-link></li>
              <li><nuxt-link to="/otherdiscrimination/sexualorientationdiscrimination" class="downsub">性的指向</nuxt-link></li>
              <li><nuxt-link to="/otherdiscrimination/religiousdiscrimination" class="downsub">宗教差別</nuxt-link></li>
              <li><nuxt-link to="/otherdiscrimination/littleknowndiscrimination" class="downsub">他</nuxt-link></li>
            </ul>
        </nuxt-link>

        <nuxt-link to="" class="bar_jp" :class="{ isHome: isHome === true }">
        <span>その他</span>
        <ul class="sub_jp">
            <!--  <li><nuxt-link to="/others/why" class="subpage">何故？</nuxt-link></li>-->
              <li><nuxt-link to="/others/sitemap" class="downsub">サイトマップ</nuxt-link></li>
              <li><nuxt-link to="/others/profile" class="downsub" href="/others/profile">製作者紹介</nuxt-link></li>
              <li><nuxt-link to="/others/references" class="downsub">参考文献</nuxt-link></li>
            </ul>
        </nuxt-link>
        <a @click="toeng" class="bar_jp" :class="{ isHome: isHome === true }">English</a>
        </div>
  </div>
  </div>

  </div>
</template>

<script>
import Mixin from "../mixins/mixin";
export default {
    name: "Header",
  mixins: [ Mixin ],
  data(){
    return {
      activeIndex: null,
      // prefix: "",
    }
  },
  computed: {
    isHome() {
      if (this.$route.path === "/" || this.$route.path === "/index.html") {
        return true
      }
      return false
    },
  },
  mounted() {
      // this.prefix = "/_nuxt"
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
  margin-bottom: 40px;
}

.up-jp{
    padding-top: 5px;
    padding-bottom: 5px;
    /* background-image: linear-gradient(to bottom, #000000, #0f0f0f, #191919, #222222, #2b2b2b, #2b2b2b, #2b2b2b, #2b2b2b, #222222, #191919, #0f0f0f, #000000);  */
    /* background-color: white; */
    background: rgba(255,255,255,0);
    display: inline-block;
    width: 100%;
    text-align: center;
    position: relative;
}

.toggle{
  display: inline-block;
  width: 100%;
  margin-bottom: 0px;
  border-bottom: solid 1px #ddd;
}

.toggle.isHome{
  border-bottom: none;
}

.uppersub_jp{
  display:flex;
  margin: 0 auto;
  padding-top: 15px;
   padding-bottom: 25px;
  width: 50%;
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
  color: black;
  text-align: center;
  padding-left:10px;
  padding-right: 10px;
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

.bar_jp.isHome{
  color:white;
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
  font-size: 16px;
  border-bottom: solid 1px #222;
}

.bar_jp .sub_jp li:last-child{
  border-bottom: none;
}

.bar_jp .sub_jp li a{
  display: block;
  padding: 10px 10px 5px 10px;
}

.bar_jp.active .sub_jp{
  display: block;
  z-index: 2000;
}

.sub_jp{
  position: absolute;
  background-color: #444;
  border: solid 1px #222;
  width: 160px;
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -80px;
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
