<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
    
    <img class="drawing" src="~/assets/title.jpg">
    <h3 class="start">Introduction</h3>
    <p class="two">最近、ジョージフロイドが警官に窒息死された事件をきっかけに、黒人差別が注目される話題になりました。昔から世界的に問題となっている黒人差別。しかし、私たちは一体どこまで黒人差別の事を理解しているのでしょう？本当に私たちはこの問題を理解しているのか？実際、私たちはこの問題のことを調べた際、自分たちの黒人差別問題に対する理解がどれだけ少なかったかを知り、驚きました。
      <br></br>このwebpageを通し、私たち同様この課題に対する理解を深めてみませんか？問題は理解してこそ解決できるものだと私たちは考えます。次世代の若者として、私たちの周りで起こっている現在の問題を認識することは重要です。<br></br>
      <img class="drawing1" src="~/assets/What.jpg">
      <b>*私たちがこのサイトで取り上げている黒人差別問題は繊細な課題です。バイアスは断じて禁じるように気遣っています。その為、意見や個人の考えなどは控えています。ご了承ください。</b>
    </p>

    </div> 

  <Footer></Footer>
  </div>
</template>

<script>
import Headereng from "~/components/Headereng"
import Footer from "~/components/Footer"
export default {
  name: "Index",
  components: { Headereng, Footer },
}　
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
.two{
  font-family: "Noto Sans JP"; 
  width: 83%; 
  margin: 0 auto;
  margin-top: 10px; 
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
.drawing{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  height: 575px; 
  margin-top: 0px; 
}

.drawing1{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 83%;
  height: 500px; 
  margin-top: 0px; 
  margin-bottom: 30px;
}

</style>
