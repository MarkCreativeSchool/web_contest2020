<template>
  <div class="full">
  <Header></Header>
    <div class="info">
      <h3 class="start">ざっくり出来事（歴史）</h3>
      <p class="two">下にあるタイムラインは米国の歴史、また黒人差別に関する歴史が表記されています。</p>
      <br>
      <div class="timeline">
        <div class="line">
          <div class="linebar line1" @click="onClick('line1')"></div>
        </div>
        <div class="line">
          <div class="linebar line2" @click="onClick('line2')"></div>
        </div>
        <div class="line">
          <div class="linebar line3" @click="onClick('line3')"></div>
        </div>
        <div class="line">
          <div class="linebar line4" @click="onClick('line4')"></div>
        </div>
        <div class="line">
          <div class="linebar line5" @click="onClick('line5')"></div>
        </div>
        <div class="line">
          <div class="linebar line6" @click="onClick('line6')"></div>
        </div>
        <div class="line">
          <div class="linebar line7" @click="onClick('line7')"></div>
        </div>
        <div class="line">
          <div class="linebar line8" @click="onClick('line8')"></div>
        </div>
        <div class="year">
          <h6>1600</h6>
          <h6>1700</h6>
          <h6>1800</h6>
          <h6>1900</h6>
          <h6>2000</h6>
        </div>
      </div>
   </div>
   <div class="nextback">
            <nuxt-link to="/"><img class="back" src="~/assets/modoru2.png"></nuxt-link>
            <nuxt-link to="/currentproblems"><img class="next" src="~/assets/tugi.png"></nuxt-link>
        </div>
     <Footer></Footer>
  </div>
</template>

<script>
import Header from "~/components/Header"
import Footer from "~/components/Footer"
export default {
  name: "Index",
  components: { Header, Footer },
  methods:{
    onClick(locationName){
      alert(locationName)
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
.two{
  font-family: "Noto Sans JP"; 
  width: 83%; 
  margin: 0 auto;
  padding-top: 20px; 
  font-size: 18px; 
}


.start{
  font-family: "Noto Sans JP"; 
  color: #ffffff;
  background-color: #000000;
  background-position: center center;
  width: 73%; 
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
  border-radius: 7px;
}
.line1{
  position: absolute;
  width: 177px;
  left: 370px;
}
.line2{
  position: absolute;
  left: 547px;
  width: 38px;
}
.line3{
  position: absolute;
  left: 633px;
  width: 40px;
}
.line4{
  position: absolute;
  left: 675px;
  width:30px;
}
.line5{
  position: absolute;
  left: 781px;
  width: 20px;
}
.line6{
  position: absolute;
  left: 835px;
  width: 20px;
}
.line7{
  position: absolute;
  left: 875px;
  width: 35px;
}
.line8{
  position: absolute;
  left: 20px;
  width: calc(100% - 40px);
}
.year{
  display: flex;
  align-content: space-between;
  width: 100%;
  text-align: center;
}
.year h6{
  flex: 1;
  font-size: 17px;
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
