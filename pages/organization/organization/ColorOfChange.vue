<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    
    <h3 class="start">Color Of Change</h3>
    <p class="two">
        アメリカ最大のオンライン人種的正義組織。会員数は170万人。２００５年、カリフォルニアオークランドで創立。
創立者はヴァンジョーンズ（Van Jones）とジェームズラッカー(James Rucker)。
<br></br>モットー：民主主義の色を変える
<br></br>
    </p>

    <h3 class="start">活動・プログラム</h3>
       
        <div class="activity">
            <h6 class="program">Police violence is Gun violence. Demand #JusticeforJake and Invest In Our Communities Now.(
警察の暴力は銃による暴力です。 #JusticeforJakeを要求し、今すぐコミュニティに投資してください)</h6>
            <hr>
            <p class="campaign">このキャンペーンは、警察によってウィスコンシン州で合計7回撃たれたジェイコブブレイクに正義を要求しています。彼の怪我のたせいで腰が麻痺してしまいました。回復中、彼の家族や友人や他の抗議者たちが正当な対応（警官の逮捕）を求めいている。
            => <a href="https://act.colorofchange.org/sign/police-violence-justice-for-jake?source=coc_main_website " target="_blank">リンク </a></p>
            <br></br>
            <h6 class="program">ColorOfChange: #JusticeforBre: Police officers who killed Breonna Taylor must be FIRED.(
ColorOfChange：#JusticeforBre：Breonna Taylorを殺した警察官は辞任させる必要があります）</h6>
            <hr>
            <p class="campaign">2020年3月、ブレナテイラーは自宅で警察に射殺されました。その後。6月、睡眠中に彼女を撃った警官ハンキソンが解雇された。しかし、彼女の死に貢献した警官らは、まだ解雇されていません。このキャンペーンは#Justice for Breを要求する一方で、他の2人の解任も要求しています。
             => <a href="https://act.colorofchange.org/sign/justiceforbre-breonna-taylor-officers-fired?source=coc_main_website  " target="_blank">リンク </a></p>
            <br></br>
            <h6 class="program">Tell Twitter Black organizers should not become enemies of the state for protesting (
Twitterの主催者は、抗議の対象となる国家の敵になってはならない）</h6>
            <hr>
            <p class="campaign">現在、ツイッターでは、黒の主催者や活動家が狙われている。これは、活動家/抗議者の名前や場所などの情報を収集するDataminrと呼ばれる人工知能会社によるものです。このキャンペーンは、抗議者の安全のためにDataminrとの提携をやめる様Twitterに要求しています。
   => <a href="https://act.colorofchange.org/sign/twittersurveillance?source=coc_main_website" target="_blank">リンク</a></p>
   <br></br>
        </div>
        
       <div class="nextback">
            <nuxt-link to="/organization/organization/BAJI"><img class="back" src="~/assets/modoru2.png"></nuxt-link>
            <nuxt-link to="/organization/organization/M4BL"><img class="next" src="~/assets/tugi.png"></nuxt-link>
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
