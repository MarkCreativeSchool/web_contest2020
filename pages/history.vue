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
        <div class="line">3</div>
        <div class="line">4</div>
        <div class="line">5</div>
        <div class="line">6</div>
        <div class="line">7</div>
        <div class="line">8</div>
        <div class="line">9</div>
        <div class="line">10</div>
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
  width: 200px;
  height: 2px;
  top: 5px;
  background: blue;
}
.line1{
  position: absolute;
  left: 20px;
}

</style>
