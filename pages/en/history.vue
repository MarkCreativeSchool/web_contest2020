<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
    
    <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/en/homeeng/">Home</nuxt-link></li>
         <li class="breadcrumb-item"> <nuxt-link to="/en/history">History</nuxt-link></li>
     </ol>
    <br>
         <h3 class="start_history"><span class="under">History</span></h3>
    <p class="two_history">Below, the timeline summarizes important events in US history, while also displaying how events relating to racism has occurred within these historical events.

   
    </p>
    <br>
      <div class="timeline">
        <div class="line">
          <div class="linebar line1" @click="onClick('line1')"><p class="line1-name">Chapter 1: The Discovery of the Continent / The Birth of 13 Colonies</p></div>
        </div>
        <div class="line">
          <div class="linebar line2" @click="onClick('line2')"><p class="line2-name">Chapter 2: Start of the Revolutionary War</p></div>
        </div>
        <div class="line">
          <div class="linebar line3" @click="onClick('line3')"><p class="line3-name">Chapter 3: History after the Revolutionary War</p></div>
        </div>
        <div class="line">
          <div class="linebar line4" @click="onClick('line4')"><p class="line4-name">Chapter 4: American Civil War</p></div>
        </div>
        <div class="line">
          <div class="linebar line5" @click="onClick('line5')"><p class="line5-name">Chapter 5: World War I</p></div>
        </div>
        <div class="line">
          <div class="linebar line6" @click="onClick('line6')"><p class="line6-name">Chapter 6: World War II</p></div>
        </div>
        <div class="line">
          <div class="linebar line7" @click="onClick('line7')"><p class="line7-name">Chapter 7: Cold War</p></div>
        </div>
        <div class="line">
          <div class="linebar line8" @click="onClick('line8')"><p class="line8-name">Chapter 8: 21st Century America</p></div>
        </div>
        <div class="line">
          <div class="linebar lastLine" @click="onClick('lastLine')"><p class="lastLine-name">The History of Racism</p></div>
        </div>
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
    <line8 v-if="locationName==='line8'" @onClose="locationName=null"></line8>


      <Footereng></Footereng>
  </div>
</template>

<script>
import Headereng from "~/components/Headereng"
import Footereng from "~/components/Footereng"
import line1 from "~/components/timeline_eng/line1"
import line2 from "~/components/timeline_eng/line2"
import line3 from "~/components/timeline_eng/line3"
import line4 from "~/components/timeline_eng/line4"
import line5 from "~/components/timeline_eng/line5"
import line6 from "~/components/timeline_eng/line6"
import line7 from "~/components/timeline_eng/line7"
import line8 from "~/components/timeline_eng/line8"

export default {
  name: "Index",
  components: { Headereng, Footereng, line1, line2, line3, line4, line5, line6, line7, line8},
  head() {
    return {
      title: "History-Introducing Racism for High School Students by High School Students-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "A comparison between the history of US and the history of discrimination against black people in the US is shown within the timeline." }
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

/*.two{
  font-family: "Noto Sans JP"; 
  width: 63%; 
  margin: 0 auto;
  margin-top: 10px; 
  font-size: 18px; 
}*/


.two_history{
  font-family: "Noto Sans JP"; 
  width: 67%; 
  margin: 0 auto;
  margin-top: 10px; 
  font-size: 18px; 
  text-indent: 1em;
}

.start_history{
    font-weight: bold;
    font-size: 30px;
    font-family: "Noto Sans JP"; 
    margin: 0 auto;
    width: 67%;
    color: black;
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
  width: 397px;
  font-size:12px;
}
.line2{
  position: absolute;
  left: 547px;
  width: 38px;
}
.line2 .line2-name{
  position: relative;
  top: 17px;
  width: 241px;
  font-size:12px;
}
.line3{
  position: absolute;
  left: 633px;
  width: 40px;
}
.line3 .line3-name{
  position: relative;
  top: 17px;
  width: 269px;
  font-size:12px;
}
.line4{
  position: absolute;
  left: 675px;
  width:30px;
}
.line4 .line4-name{
  position: relative;
  top: 17px;
  width: 174px;
  font-size:12px;
}
.line5{
  position: absolute;
  left: 781px;
  width: 20px;
}
.line5 .line5-name{
  position: relative;
  top: 17px;
  width: 134px;
  font-size:12px;
}
.line6{
  position: absolute;
  left: 835px;
  width: 20px;
}
.line6 .line6-name{
  position: relative;
  top: 17px;
  width: 138px;
  font-size:12px;
}
.line7{
  position: absolute;
  left: 875px;
  width: 35px;
}
.line7 .line7-name{
  position: relative;
  top: 17px;
  width: 110px;
  font-size:11px;
}
.line8{
  position:absolute;
  left: 800px;
  width: 80px;
}
.line8 .line8-name{
  position: relative;
  top: 17px;
  width: 190px;
  font-size:12px;
}
.lastLine{
  position: absolute;
  left: 20px;
  width: calc(100% - 40px);
}
.lastLine .lastLine-name{
  position: relative;
  bottom: 22px;
  left: 5px;
  width: 156px;
  font-size:15px;
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
.line1:hover{
  background-color:gold !important;
}
.line2:hover{
  background-color:gold !important;
}
.line3:hover{
  background-color:gold !important;
}
.line4:hover{
  background-color:gold !important;
}
.line5:hover{
  background-color:gold !important;
}
.line6:hover{
  background-color:gold !important;
}
.line7:hover{
  background-color:gold !important;
}
.line8:hover{
  background-color:gold !important;
}
.lastLine:hover{
  background-color:gold !important;
}


</style>
