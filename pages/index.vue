<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    
    <h3 class="start">はじめに</h3>
    <p class="two">最近、ジョージフロイドが警官に窒息死された事件をきっかけに、黒人差別が注目される話題になりました。昔から世界的に問題となっている黒人差別。しかし、私たちは一体どこまで黒人差別の事を理解しているのでしょう？本当に私たちはこの問題を理解しているのか？実際、私たちはこの問題のことを調べた際、自分たちの黒人差別問題に対する理解がどれだけ少なかったかを知り、驚きました。
      <br></br>このwebpageを通し、私たち同様この課題に対する理解を深めてみませんか？問題は理解してこそ解決できるものだと私たちは考えます。次世代の若者として、私たちの周りで起こっている現在の問題を認識することは重要です。
    </p>
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
  width: 87%; 
  margin: 0 auto;
}

.start{
  font-family: "Noto Sans JP"; 
  color: #ffffff;
  background-color: #000000;
  background-position: center center;
  width: 90%; 
  margin: 0 auto;
  font-size: 30px; 
  border-radius: 3px; 
  text-shadow: 0.5px 0.5px #f6d405;
  text-align: center; 
}

</style>
