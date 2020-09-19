<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    

    <h3 class="start">Black Lives Matter</h3>
    
    
    <p class="two">
        ブラックライブスマターズは２０１３年7月13日に設立された組織的な社会運動。
<br></br>グローバル組織だが、本拠地・主要地はアメリカ合衆国
<br></br>ミッション：白人覇権を根絶し、黒人に対しての暴力行為を阻止する事。
<br></br>創立者：アリシア・ガーザ（ガルザ）、パトリッセ・カラーズ、オーパル・トメティ
<br></br>２０１２年に起きたトレイボンマーティンの死をきっかけにアリシア・ガーザ（ガルザ）さんがSNS（フェースブック）に#BlackLivesMatterと投稿した事が注目をあび、組織が創立された。
<br></br>サイトへのリンク＝＞<a href="https://blacklivesmatter.com/about/" target="_blank"> https://blacklivesmatter.com/about/ </a>
    <br></br>
    </p>

    <h3 class="start">活動・プログラム</h3>
        
         <div class="activity">
            <h6 class="program">２０１８年６月：サンディエゴボーダーでの抗議</h6>
            <hr>
            <p class="campaign">2018年6月にブラックライブスマターズの活動家がサンディエゴボーダーに集まり、大統領が出した移民政策に対する抗議をした。大統領はその頃、両親が米国とメキシコの国境で逮捕された場合、子供を両親から引き離すことを宣言する命令に最近署名しました。活動家は抗議するとともに、仕事を求めている移民と米国の亡命者のための人道的な扱いを要求した。</p>
            <br></br>
            <h6 class="program">２０１８年９月：ステフォンクラーク</h6>
            <hr>
            <p class="campaign">2018年9月は、3月22歳の男性であったステフォンクラークさんが殺害されてから6か月。グローバルネットワークの活動家は、175の棺を使用して死者を代表し、また被害者の死がどのようにその家族や黒人に影響するのかを主張しました。これは黒人コミュニティに対する警察の残虐行為の認識を高め、コミュニティ間の正義を求めているのを強調する為です。</p>
            <br></br>
            <h6 class="program">BLM’S #WhatMatters2020</h6>
            <hr>
            <p class="campaign"> BLM は2020年に#What Matters2020 という警察の残虐行為、人種的不正、医療へのアクセス、黒人コミュニティの投票権などに関するキャンペーンを作成しました。それは、黒人コミュニティに対する人種的不正の現在の問題を提起し、候補者がこれらの問題に対処し、人種的不正に抗議する集団的力を構築することを保証するため。詳しくはここから=> <a href="https://blacklivesmatter.com/what-matters-2020/" target="_blank">#WhatMatters2020</a></p>
            <br></br>      
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
  width: 73%; 
  margin: 0 auto;
  padding-top: 20px; 
  font-size: 18px; 
}


.start{
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


.activity{
    width: 80%;
    margin: 0 auto;
    margin-top: 30px; 
    font-family: "Noto Sans JP"; 
}

.program{
    width: 95%;
    margin: 0 auto;
    font-size: 21px; 
    font-weight: bold; 
}


.campaign{
  width: 90%; 
  margin: 0 auto;
  font-size: 15px; 
}

</style>
