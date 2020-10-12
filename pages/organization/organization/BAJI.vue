<template>
  <div class="full">
  <Header></Header>
   <div class="info">

    <h3 class="start">Black Alliance for Just Immigration (BAJI)</h3>
    <p class="two">
        ２００６年４月に創立。人種的および社会的正義を擁護するように黒人移民/アフリカ系アメリカ人を教育する組織。黒人移民やアフリカ系アメリカ人にどう人種的不正を提唱するかを教える組織。ニューヨーク、アリゾナ、カリフォルニア、ジョージアに組織委員会があります。
<br></br><b>創立者：</b>
<br></br><b>ケルビンサールズ（Kelvin Sauls):</b> 南アフリカの移民
<br></br><b>フィリップローソン：</b>移民の権利のためのカリフォルニア宗教信仰連合の公民権指導者/共同創設者/共同議長
<br></br>
<img class="baji" src="~/assets/baji.png">
<br></br>
    </p>

    <h3 class="start">活動・プログラム</h3>
        
        <div class="activity">
            <h6 class="program">BAJI Organizing Committees (BOCs)</h6>
            <hr>
            <p class="campaign">接影響を受ける人々のためのリーダーシッププログラム。各市でリーダーの中核を集め、市内での社内政治教育やキャンペーンなどの活動を奨励している。</p>
            <br></br>
            <h6 class="program">The Black Immigration Network (BIN)</h6>
            <hr>
            <p class="campaign">アフリカ系アメリカ人と黒人移民コミュニティがお互いを理解するためのプログラム。黒人コミュニティとの関わりを可能にし、人種的正義を擁護するための戦略を考える事を目指している。</p>
            <br></br>
            <h6 class="program">Technical Assistance and Training (TAT) Program</h6>
            <hr>
            <p class="campaign">アフリカ系アメリカ人のコミュニティと関わり、コミュニティと社会の間の理解を生み出すために黒人コミュニティに対するステレオタイプに取り組むプログラム。</p>
            <br></br>
            <h6 class="program">The Communications And Media Education on Race in America (CAMERA) Program</h6>
            <hr>
            <p class="campaign">人種、人種差別、および移民に関する問題に対処するためのコンテンツ、ビジュアル、および教育資料を作成しているプログラム。テレビ番組、記事、やメディアコンテンツも企画している。</p>
            <br></br>
            <h6 class="program">Advocacy STAND (Solidarity and Taking Action for New Directions) Program</h6>
            <hr>
            <p class="campaign">BAJIの活動を他の国際機関に広めるプログラム。BAJI組織委員会は独自のキャンペーンとイニシアチブを立ち上げ、他の組織とも協力し公共政策に影響を与えてる</p>
            <br></br>
            <h6 class="program">The Faith Advocacy for Immigrants and Refugees (FAIR) Project</h6>
            <hr>
            <p class="campaign">教会や信仰に基づく組織に黒人コミュニティと問題に関する教育を提供している。これにより、組織は公正な移民ポリシーをサポートできる様になる。</p>
            <br></br>
            <h6 class="program">African Diaspora Dialogues (ADD) and African American-Immigrant Dialogues (AAID)</h6>
            <hr>
            <p class="campaign">アフリカ系アメリカ人を多様な移民コミュニティと一緒にするプログラム。どちらの対話も、コミュニティに共通の関心事、共通の経験、共通の公共政策の議題について話し合うためのテーブルを提供することを目的としている。</p>
            <br></br>
            <h6 class="program">The State of Black Immigrants Research Institute</h6>
            <hr>
            <p class="campaign">BAJIの調査、レポート、ファクトシート、およびポリシーアドバイザリを提供します。ニューヨーク大学法学部、カリフォルニア大学ロサンゼルスレイバーセンター、南カリフォルニア大学などの事実情報を入手するために、大学や個々の学者と提携している。リーダーやコミュニティ向けのブリーフィング、アドボカシーツール、組織向けの教育コンテンツを作成するプログラム。</p>
            <br></br>
            <h6 class="program">BAJI CLINIC (Cultural and Legal Immigration Navigation for Interdependent Communities)</h6>
            <hr>
            <p class="campaign">黒人移民コミュニティの人々が、評判がよくまた手頃な移民法務サービスと教育にアクセス出来る事を保証するプログラム。また、黒人移民が独自の状況をナビゲートするためのサポートをしている。</p>
            <br></br>
        </div>


    </div> 

    <div class="nextback">
            <nuxt-link to="/organization/organization/BLM"><img class="back" src="~/assets/modoru2.png"></nuxt-link>
            <nuxt-link to="/organization/organization/ColorOfChange"><img class="next" src="~/assets/tugi.png"></nuxt-link>
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
  margin-bottom: 10px; 
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

.baji{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  height: 370px; 
  margin-top: 0px; 
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
