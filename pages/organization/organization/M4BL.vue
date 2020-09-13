<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    
    <h3 class="start">Black Lives Matter</h3>
    <p class="two">
        ２０１４年１２月に創立。廃止論者組織である。
<br></br>黒人コミュニティに暴力を与える刑務所や警察を廃止し、代わりに黒人コミュニティとその権利を保護する機関を設立するべきだと考える組織。
<br></br>リンク＝＞<a href="https://m4bl.org/about-us/" target="_blank">https://m4bl.org/about-us/</a>
    </p>

    <h3 class="start">活動・プログラム</h3>

    <div class="campaign">
    <article class="message">
            <div class="message-header">
               <p>Amnesty-for-protestors</p>
            </div>
            <div class="message-body">抗議者アムネスティのキャンペーンは、蜂起とデモで逮捕された黒人政治活動家に正義を要求することです。彼らはまた、警察のすべての主張に対する再調査と、警察の軍事化の中止を要求している。
            <br></br><a href="https://m4bl.org/amnesty-for-protestors/" target="_blank">リンク </a>
            </div>
        </article>
         <article class="message">
            <div class="message-header">
               <p> Freedom-summer</p>
            </div>
            <div class="message-body">ミシシッピ州を起源とする黒人有権者の抑圧と戦いるキャンペーンで、現在は米国中に広まっています。ノースカロライナ、フロリダ、ミシガン、ミシシッピなど八つの州がこのキャンペーンに参加しています。
             <br></br><a href="https://m4bl.org/freedom-summer/" target="_blank">リンク </a>
            </div>
        </article>
           </div> 
          </div>
           <div class="campaign">
         <article class="message">
            <div class="message-header">
               <p>Defund-the-police</p>
            </div>
            <div class="message-body"> このキャンペーンは、米国の残忍で軍事化されたポリシングに抗議しています。これは、ジョージフロイド、ブレナテイラー、トニーマクデードなどが最近亡くなったために広がっています。彼らの目的は、差別的ポリシングを廃止し、安全なコミュニティをビジョン化することです。
   <br></br><a href="https://m4bl.org/defund-the-police/" target="_blank"> リンク</a>
            </div>
        </article>
        <article class="message">
            <div class="message-header">
               <p>The Breathe Act</p>
            </div>
            <div class="message-body"> このキャンペーンは、警察によって引き起こされた黒人の数人の死を称え、すべてが自由に呼吸できる社会を実現するために作成されました。この行為は、黒人の生活を保護できず、より良い、より安全な環境のためのソリューションを構想/作成することに失敗した刑事法制度に反発します。
   <br></br><a href="https://breatheact.org/" target="_blank"> リンク</a>
            </div>
        </article>
     
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
  padding-top: 20px; 
  font-size: 18px; 
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

.more{
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
  margin-top: 45px; 
}

.message{
  width: 29%; 
  font-family: "Courier New", Courier, monospace;
  margin-left: 7px; 
  margin-right: 7px; 
  margin-top: 7px; 
  display: inline-block; 
  height: 300px; 
}

.message-header{
  background-color: black;
}

.campaign{
    margin-top:10px;
    display: block; 
  width: 100%; 
  text-align: center; 
}
</style>
