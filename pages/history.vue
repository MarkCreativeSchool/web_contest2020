<template>
  <div class="full">
  <Header></Header>
    <div class="info1">
      
      <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/">ホーム</nuxt-link></li>
         <li class="breadcrumb-item"> <nuxt-link to="/history">歴史</nuxt-link></li>
     </ol>


      <h3 class="start1">ざっくり出来事（歴史）</h3>
      <p class="two">下にあるタイムラインは米国の歴史、また黒人差別に関する歴史が表記されています。</p>
      <br>
      <div class="timeline">
        <div class="line">
          <div class="linebar line1" @click="onClick('line1')"><p class="line1-name">第1章:大陸の発見 / 13の植民地(13 colonies)の誕生</p></div>
        </div>
        <div class="line">
          <div class="linebar line2" @click="onClick('line2')"><p class="line2-name">第2章:独立戦争の開幕</p></div>
        </div>
        <div class="line">
          <div class="linebar line3" @click="onClick('line3')"><p class="line3-name">第3章：独立戦争後のアメリカの歩み</p></div>
        </div>
        <div class="line">
          <div class="linebar line4" @click="onClick('line4')"><p class="line4-name">第4章:南北戦争</p></div>
        </div>
        <div class="line">
          <div class="linebar line5" @click="onClick('line5')"><p class="line5-name">第5章：第一次世界大戦の幕開け</p></div>
        </div>
        <div class="line">
          <div class="linebar line6" @click="onClick('line6')"><p class="line6-name">第6章：第二次世界大戦</p></div>
        </div>
        <div class="line">
          <div class="linebar line7" @click="onClick('line7')"><p class="line7-name">第7章：冷戦</p></div>
        </div>
        <div class="line">
          <div class="linebar line8" @click="onClick('line8')"></div>
        </div>
        <div class="line">
          <div class="linebar lastLine" @click="onClick('lastLine')"></div>
        </div>
<!--        <div class="line">-->
<!--          <div class="linebar line9" @click="onClick('line9')"></div>-->
<!--        </div>-->
        <div class="year-main">
          <h6>1600</h6>
          <h6>1700</h6>
          <h6>1800</h6>
          <h6>1900</h6>
          <h6>2000</h6>
        </div>
      </div>
   </div>
     <Footer></Footer>

    <line1 v-if="locationName==='line1'" @onClose="locationName=null"></line1>
    <line2 v-if="locationName==='line2'" @onClose="locationName=null"></line2>
    <line3 v-if="locationName==='line3'" @onClose="locationName=null"></line3>
    <line4 v-if="locationName==='line4'" @onClose="locationName=null"></line4>
    <line5 v-if="locationName==='line5'" @onClose="locationName=null"></line5>
    <line6 v-if="locationName==='line6'" @onClose="locationName=null"></line6>
    <line7 v-if="locationName==='line7'" @onClose="locationName=null"></line7>

  </div>
</template>

<script>
import Header from "~/components/Header"
import Footer from "~/components/Footer"
import line1 from "~/components/timeline/line1"
import line2 from "~/components/timeline/line2"
import line3 from "~/components/timeline/line3"
import line4 from "~/components/timeline/line4"
import line5 from "~/components/timeline/line5"
import line6 from "~/components/timeline/line6"
import line7 from "~/components/timeline/line7"

export default {
  name: "Index",
  components: { Header, Footer, line1, line2, line3, line4, line5, line6, line7, },

  head() {
    return {
      title: "歴史-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "米国の歴史、また黒人差別の歴史を表記しています。" }
      ]
    }
  },

  data(){
    return{
      locationName:null
    }
  },
  methods:{
    onClick(locationName){
      this.locationName=locationName
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');


.two{
  font-family: "Noto Sans JP"; 
  width: 63%; 
  margin: 0 auto;
  margin-top: 10px; 
  font-size: 18px; 
}

.start1{
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
.timeline{
  border: solid 5px black;
  height: 500px;
  width: 1000px;
  margin: 0 auto;
}
.line{
  position: relative;
  height: 55px;
}
.timeline .line .linebar{
  height: 20px;
  top: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
.line1{
  position: absolute;
  width: 177px;
  left: 370px;
}
.line1 .line1-name{
  position: relative;
  top: 17px;
  width: 1000px;
  font-size:15px;
}
.line2{
  position: absolute;
  left: 547px;
  width: 38px;
}
.line2 .line2-name{
  position: relative;
  top: 17px;
  width: 1000px;
  font-size:15px;
}
.line3{
  position: absolute;
  left: 633px;
  width: 40px;
}
.line3 .line3-name{
  position: relative;
  top: 17px;
  width: 1000px;
  font-size:15px;
}
.line4{
  position: absolute;
  left: 675px;
  width:30px;
}
.line4 .line4-name{
  position: relative;
  top: 17px;
  width: 1000px;
  font-size:15px;
}
.line5{
  position: absolute;
  left: 781px;
  width: 20px;
}
.line5 .line5-name{
  position: relative;
  top: 17px;
  width: 1000px;
  font-size:15px;
}
.line6{
  position: absolute;
  left: 835px;
  width: 20px;
}
.line6 .line6-name{
  position: relative;
  top: 17px;
  width: 1000px;
  font-size:15px;
}
.line7{
  position: absolute;
  left: 875px;
  width: 35px;
}
.line7 .line7-name{
  position: relative;
  top: 17px;
  width: 1000px;
  font-size:15px;
}
.line8{
  position:absolute;
  left: 800px;
  width: 80px;
}
.lastLine{
  position: absolute;
  left: 20px;
  width: calc(100% - 40px);
}
.year-main{
  display: flex;
  align-content: space-between;
  width: 100%;
  text-align: center;
}
.year-main h6{
  flex: 1;
  font-size: 17px;
  font-weight: bold;
}

.next{
    display: inline-block;
    float: right; 
    margin-left: auto;
    margin-right: 40px;
    width: 100px; 
}

.back{
    display: inline-block;
    margin-left: 40px;
    float: left; 
    margin-right: auto;
    width: 100px; 
}

.nextback{
    text-align: center; 
}


</style>
