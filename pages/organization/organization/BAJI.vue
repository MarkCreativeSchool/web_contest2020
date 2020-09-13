<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    
    <img class="drawing" src="https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">

    <h3 class="start">Black Alliance for Just Immigration (BAJI)</h3>
    <p class="two">
        ２００６年４月に創立。人種的および社会的正義を擁護するように黒人移民/アフリカ系アメリカ人を教育する組織。黒人移民やアフリカ系アメリカ人にどう人種的不正を提唱するかを教える組織。ニューヨーク、アリゾナ、カリフォルニア、ジョージアに組織委員会があります。
<br></br><b>創立者：</b>
<br></br><b>ケルビンサールズ（Kelvin Sauls):</b> 南アフリカの移民
<br></br><b>フィリップローソン：</b>移民の権利のためのカリフォルニア宗教信仰連合の公民権指導者/共同創設者/共同議長

    </p>

    <h3 class="start">活動・プログラム</h3>
        
        <div class="campaign">
       <article class="message">
            <div class="message-header">
               <p>BAJI Organizing Committees (BOCs)</p>
            </div>
            <div class="message-body">接影響を受ける人々のためのリーダーシッププログラム。各市でリーダーの中核を集め、市内での社内政治教育やキャンペーンなどの活動を奨励している。
            </div>
        </article>
         <article class="message">
            <div class="message-header">
               <p> The Black Immigration Network (BIN)</p>
            </div>
            <div class="message-body">アフリカ系アメリカ人と黒人移民コミュニティがお互いを理解するためのプログラム。黒人コミュニティとの関わりを可能にし、人種的正義を擁護するための戦略を考える事を目指している。
            </div>
        </article>
         <article class="message">
            <div class="message-header">
               <p>Technical Assistance & Training Program</p>
            </div>
            <div class="message-body"> アフリカ系アメリカ人のコミュニティと関わり、コミュニティと社会の間の理解を生み出すために黒人コミュニティに対するステレオタイプに取り組むプログラム。
            </div>
        </article>
       
       </div>
        
         <div class="campaign">
       <article class="message">
            <div class="message-header">
               <p>The Communications And Media Education on Race in America (CAMERA) Program</p>
            </div>
            <div class="message-body">人種、人種差別、および移民に関する問題に対処するためのコンテンツ、ビジュアル、および教育資料を作成しているプログラム。テレビ番組、記事、やメディアコンテンツも企画している。
            </div>
        </article>
         <article class="message">
            <div class="message-header">
               <p> Advocacy STAND (Solidarity and Taking Action for New Directions) Program</p>
            </div>
            <div class="message-body">BAJIの活動を他の国際機関に広めるプログラム。BAJI組織委員会は独自のキャンペーンとイニシアチブを立ち上げ、他の組織とも協力し公共政策に影響を与えてる。
            </div>
        </article>
         <article class="message">
            <div class="message-header">
               <p>The Faith Advocacy for Immigrants and Refugees (FAIR) Project</p>
            </div>
            <div class="message-body"> 教会や信仰に基づく組織に黒人コミュニティと問題に関する教育を提供している。これにより、組織は公正な移民ポリシーをサポートできる様になる。
            </div>
        </article>
       
       </div>

        <div class="campaign">
       <article class="message">
            <div class="message-header">
               <p>African Diaspora Dialogues (ADD) and African American-Immigrant Dialogues (AAID)</p>
            </div>
            <div class="message-body">アフリカ系アメリカ人を多様な移民コミュニティと一緒にするプログラム。どちらの対話も、コミュニティに共通の関心事、共通の経験、共通の公共政策の議題について話し合うためのテーブルを提供することを目的としている。
            </div>
        </article>
         <article class="message">
            <div class="message-header">
               <p> The State of Black Immigrants Research Institute-A Research Institute and Initiative for BAJI</p>
            </div>
            <div class="message-body">BAJIのレポート、やファクトシートなどを提供している。ニューヨーク大学法学部などから情報を入手するために、大学や学者などと提携している。リーダーやコミュニティ向けのブリーフィングや組織向けの教育コンテンツを作成している。
            </div>
        </article>
         <article class="message">
            <div class="message-header">
               <p>BAJI CLINIC (Cultural and Legal Immigration Navigation for Interdependent Communities)</p>
            </div>
            <div class="message-body"> 黒人移民コミュニティの人々が、評判がよくまた手頃な移民法務サービスと教育にアクセス出来る事を保証するプログラム。また、黒人移民が独自の状況をナビゲートするためのサポートをしている。
            </div>
        </article>
       
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
.drawing{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 350px; 
  margin-bottom: 75px; 
}
.message{
  width: 23%; 
  font-family: "Courier New", Courier, monospace;
  margin-left: 7px; 
  margin-right: 7px; 
  margin-top: 7px; 
  display: inline-block; 
  height: 400px; 
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
