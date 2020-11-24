<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/">ホーム</nuxt-link></li>
         <li class="breadcrumb-item"> 他の差別</li>
         <li class="breadcrumb-item"> <nuxt-link to="/otherdiscrimination/religiousdiscrimination">宗教差別</nuxt-link></li>
     </ol>
     <br>
    <h3 class="start_religion"><span class="under">宗教差別</span></h3>
    <p class="two_religion">
       宗教差別は<mark class="highlights"><b>人を考えやその人の宗教をきっかけにその人に対し、嫌がらせなどをする事です</b></mark>。
       人の考えを馬鹿にしたり、また、学校や仕事場での嫌がらせなどが見られます。
       他にも、会話やサークルでの場で入れてもらえなかったりする事が多々あります。

    </p>
    <br>
    <h3 class="start_religion"><span class="under">宗教差別に関する最近のニュース</span></h3>
       <div class="activity">
            <h6 class="program_religion">2017年ポートランド列車殺傷事件（アメリカ）</h6>
            <hr>
            <br>
            <p class="campaign_religion">２０１７年５月２６日に<b>ジェレミー・クリスチャン</b>が<b>タリーシン・ムルジン・ナムカイ・メシェさんとリッキー・ジョン・ベストさん</b>を殺害し、<b>マイカ・デイビッド・コール・フレッチャーさん</b>に重傷を負わせた事件。
            3人の男は<mark class="highlights"><b>クリスチャン容疑者が二人の女性（16歳と17歳）に対し暴言を吐いていた</b></mark>ところを割って入った。
            明確ではないが、目撃者はクリスチャン容疑者が<b>「ムスリムはみんな死ね」</b>と怒鳴っていたという。
            さらに調査したところ、彼のソーシャルメディアページに反イスラム教の感情があった事が明らかになった。
            3人の男性は市長によって英雄と見なされました。
            また、元大統領候補のヒラリークリントンは、<b>「この人種差別的虐待に耐える必要はありません。それを止めるために命を与える必要はありません。」</b>とコメントした。</p>
            <br />
            <h6 class="program_religion">ウィルミントン公民プール事件</h6>
            <hr>
            <br>
            <p class="campaign_religion">2018年6月、若いイスラム教徒の生徒とその教師は、デラウェア州ウィルミントンにある公共プール出ていくよう求められました。
            プールのマネージャーは<b>生徒らを追い出す際彼らの衣服などを理由とし、警察まで呼ぼうとした</b>。
            ウィルミントンに本部を置くイスラム教徒の青少年センターが、教師と生徒に対する差別的な行動について、プールに対して訴訟を起こした。
            ウィルミントン市長のマイク市長は7月に謝罪を発表しましたが、多くの人がこの問題に十分に対処していないことで同市を批判した。
            2019年1月、この件に関して和解が発表された。和解について詳しくは、<a href="https://muslimadvocates.org/files/Darul-Amaanah-Filed-Settlement.pdf#page=14" target="_blank">こちら</a>をクリックしてください（正式な和解は英語で書かれています）。</p>
            <br />
        </div>
    </div>
    <div class="nextback">
            <nuxt-link to="/otherdiscrimination/sexualorientationdiscrimination"><img class="back" src="/modoru2.png"></nuxt-link>
            <nuxt-link to="/otherdiscrimination/littleknowndiscrimination"><img class="next" src="/tugi.png"></nuxt-link>
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
  head() {
    return {
      title: "宗教差別-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "宗教差別を紹介しています。また、過去に起こった事件などを取り上げています。" }
      ]
    }
  },
}　
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');

/*.two{
  font-family: "Noto Sans JP";
  width: 63%;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 18px;
}*/

/*.start{
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
}*/

.two_religion{
  font-family: "Noto Sans JP";
  width: 50%;
  margin: 0 auto;
  margin-top: 30px;
  font-size: 18px;
  text-indent: 1em;
}

.start_religion{
    font-weight: bold;
    font-size: 30px;
    font-family: "Noto Sans JP";
    margin: 0 auto;
    width: 50%;
    color: black;
  }

.activity{
    width: 75%;
    margin: 0 auto;
    margin-top: 30px;
    font-family: "Noto Sans JP";
}

.program_religion{
    width: 50%;
    margin: 0 auto;
    font-size: 21px;
    font-weight: bold;
}
.campaign_religion{
  width: 50%;
  margin: 0 auto;
  font-size: 15px;
}


.drawing3{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  height: 370px;
  margin-bottom: 20px;
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
