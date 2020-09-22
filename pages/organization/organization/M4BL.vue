<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    
    <h3 class="start">The Movement for Black Lives</h3>
    <p class="two">
        ２０１４年１２月に創立。廃止論者組織である。
<br></br>黒人コミュニティに暴力を与える刑務所や警察を廃止し、代わりに黒人コミュニティとその権利を保護する機関を設立するべきだと考える組織。
<br></br>リンク＝＞<a href="https://m4bl.org/about-us/" target="_blank">https://m4bl.org/about-us/</a>
<br></br>
    </p>

    <h3 class="start">活動・プログラム</h3>

    
    <div class="activity">
            <h6 class="program">Amnesty-for-protestors</h6>
            <hr>
            <p class="campaign">抗議者アムネスティのキャンペーンは、蜂起とデモで逮捕された黒人政治活動家に正義を要求することです。彼らはまた、警察のすべての主張に対する再調査と、警察の軍事化の中止を要求している。
            => <a href="https://m4bl.org/amnesty-for-protestors/" target="_blank">リンク </a></p>
            <br></br>
            <h6 class="program">Freedom-summer</h6>
            <hr>
            <p class="campaign">ミシシッピ州を起源とする黒人有権者の抑圧と戦いるキャンペーンで、現在は米国中に広まっています。ノースカロライナ、フロリダ、ミシガン、ミシシッピなど八つの州がこのキャンペーンに参加しています。
             => <a href="https://m4bl.org/freedom-summer/" target="_blank">リンク </a></p>
            <br></br>
            <h6 class="program">Defund-the-police</h6>
            <hr>
            <p class="campaign">このキャンペーンは、米国の残忍で軍事化されたポリシングに抗議しています。これは、ジョージフロイド、ブレナテイラー、トニーマクデードなどが最近亡くなったために広がっています。彼らの目的は、差別的ポリシングを廃止し、安全なコミュニティをビジョン化することです。
   => <a href="https://m4bl.org/defund-the-police/" target="_blank"> リンク</a></p>
            <br></br>
            <h6 class="program">The Breathe Act</h6>
            <hr>
            <p class="campaign"> このキャンペーンは、警察によって引き起こされた黒人の数人の死を称え、すべてが自由に呼吸できる社会を実現するために作成されました。この行為は、黒人の生活を保護できず、より良い、より安全な環境のためのソリューションを構想/作成することに失敗した刑事法制度に反発します。
   => <a href="https://breatheact.org/" target="_blank"> リンク</a></p>
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
