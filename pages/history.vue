<template>
  <div class="full">
  <Header></Header>
    <div class="info">
      <h3 class="start">ざっくり出来事（歴史）</h3>
      <p class="two">下にあるタイムラインは米国の歴史、また黒人差別に関する歴史が表記されています。</p>
      <div class="timeline">
        <div class="line">
          <div class="linebar line1"></div>
        </div>
        <div class="line">
          <div class="linebar line2"></div>
        </div>
        <div class="line">
          <div class="linebar line3"></div>
        </div>
        <div class="line">
          <div class="linebar line4"></div>
        </div>
        <div class="line">
          <div class="linebar line5"></div>
        </div>
        <div class="line">
          <div class="linebar line6"></div>
        </div>
        <div class="line">
          <div class="linebar line7"></div>
        </div>
        <div class="line">
          <div class="linebar line8"></div>
        </div>
        <div class="line">
          <div class="linebar line9"></div>
        </div>
        <div class="line">
          <div class="linebar line10"></div>
        </div>
        <div class="year">
          <h6>1400</h6>
          <h6>1500</h6>
          <h6>1600</h6>
          <h6>1700</h6>
          <h6>1800</h6>
          <h6>1900</h6>
          <h6>2000</h6>
        </div>
      </div>
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
  width: 1000px;
  margin: 0 auto;
}
.line{
  position: relative;
  height: 20px;
}
.timeline .line .linebar{
  height: 5px;
  top: 3px;
  background: black;
}
.line1{
  position: absolute;
  left: 20px;
}
.line2{
  position: absolute;
  left: 60px;
}
.line3{
  position: absolute;
  left: 100px;
}
.line4{
  position: absolute;
  left: 140px
}
.line5{
  position: absolute;
  left: 160px
}
.line6{
  position: absolute;
  left: 180px
}
.line7{
  position: absolute;
  left: 200px;
}
.line8{
  position: absolute;
  left: 220px;
}
.line9{
  position: absolute;
  left: 250px;
}
.line10{
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
</style>
