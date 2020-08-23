<template>
  <div class="full">
   <div class="up">
   <h1> 高校生の高校生による高校生のための黒人差別問題</h1>
    </div>
    <div class="toggle">
        <a class="bar" href="/">トップ</a>
        <a class="bar">歴史</a>
        <a class="bar">現問題</a>
        <a class="bar">スポーツ</a>
        <a class="bar">組織</a>
        <a class="bar">他の差別</a>
        
        <a class="bar" :class="{ 'active': activeIndex === 1 }"> 
        <span @click="toggleDropDown(1)">その他</span> 
        <ul class="sub">
              <li><a class="subpage"　href="/others/why">何故？</a></li>
              <li><a class="subpage">サイトマップ</a></li>
              <li><a class="subpage">製作者紹介</a></li>
              <li><a class="subpage">参考文献</a></li>
            </ul>
        </a>
        <a class="bar">ENGLISH VERSION</a>
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
