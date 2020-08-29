<template>
  <div class="full">
   <div class="up">
   <h1> 高校生の高校生による高校生のための黒人差別問題</h1>
    </div>
    <div class="toggle">
        <nuxt-link to="" class="bar" :class="{ 'active': activeIndex === 1 }"> 
        <span @click="toggleDropDown(1)">トップ</span> 
        <ul class="sub">
              <li><nuxt-link to="/" class="subpage">ホーム</nuxt-link></li>
              <li><nuxt-link to="/home/what" class="subpage">差別とは？</nuxt-link></li>
              <li><nuxt-link to="" class="subpage">黒人差別とは？</nuxt-link></li>
            </ul>
        </nuxt-link>
        <nuxt-link to="" class="bar">歴史</nuxt-link>
        <nuxt-link to="" class="bar">現問題</nuxt-link>
        <nuxt-link to="" class="bar">スポーツ</nuxt-link>
        <nuxt-link to="/movement" class="bar">反対運動</nuxt-link>
        <nuxt-link to="/organization" class="bar">組織</nuxt-link>
        <nuxt-link to="/otherdiscrimination" class="bar">他の差別</nuxt-link>
        
        <nuxt-link to="" class="bar" :class="{ 'active': activeIndex === 2 }"> 
        <span @click="toggleDropDown(2)">その他</span> 
        <ul class="sub">
              <li><nuxt-link to="/others/why" class="subpage">何故？</nuxt-link></li>
              <li><nuxt-link to="" class="subpage">サイトマップ</nuxt-link></li>
              <li><nuxt-link to="/others/profile" class="subpage" href="/others/profile">製作者紹介</nuxt-link></li>
              <li><nuxt-link to="" class="subpage">参考文献</nuxt-link></li>
            </ul>
        </nuxt-link>
        <nuxt-link to="" class="bar">ENGLISH VERSION</nuxt-link>
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
.up{
    padding-top: 5px; 
    padding-bottom: 5px;
    text-align: center; 
    background-color: #000000;
    color: #ffffff; 
}
h1{
    font-size: 50px; 
    font-family: "Noto Sans JP"; 
    text-shadow: 1px 1px #f6d405;
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
  background-color: #333;
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
