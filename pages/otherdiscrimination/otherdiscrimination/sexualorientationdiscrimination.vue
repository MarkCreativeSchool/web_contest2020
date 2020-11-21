<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/">ホーム</nuxt-link></li>
         <li class="breadcrumb-item"> 他の差別</li>
         <li class="breadcrumb-item"> <nuxt-link to="/otherdiscrimination/otherdiscrimination/sexualorientationdiscrimination">性的指向</nuxt-link></li>
     </ol>
    <br>
    <h3 class="start_sexualorientation"><span class="under">性的指向差別</span></h3>
    <p class="two_sexualorientation">
       性的指向差別とは、<mark class="highlights"><b>自分の性別によって行われる差別です</b></mark>。この差別行為は<b>LGBTQ +コミュニティ（L =レズビアン、G =ゲイ、B =バイセクシュアル、T =トランスジェンダー、Q =クィア、+ =パンセクシュアル、アセクシュアル、オムニセクシャルなどのその他の性的アイデンティティ）</b>を対象としています。差別の種類には、直接的および間接的な差別のほか、嫌がらせが含まれます。
    <br><br>
    <div class="logoimage">
    <img class="sexualorientation" src="~/assets/gendersign.png">
    <img class="sexualorientation" src="~/assets/heart.png">
    </div>
    <br>

    <h3 class="start_sexualorientation"><span class="under">最近のニュース</span></h3>
       
         <div class="activity">
            <h6 class="program_sexualorientation">オーランド銃乱射事件（アメリカ）</h6>
            <hr>
            <br>
            <p class="campaign_sexualorientation">２０１６年６月１２日に警備員のオマルマティーンさんが銃乱射事件を起こしました。
            <b>49人</b>が殺害され、<b>53人</b>が怪我を負いました。
            ナイトクラブに突入してから３時間後に警察に打たれ、亡くなりました。
            当時、米国史上最悪の銃乱射事件でした。
            ナイトクラブの主な客が同性愛者だとマティーンさんは理解しており、日頃同性愛者に対する嫌悪な言動が目立ってた為、親族はヘイトクライム*の可能性が高いと話していました。<br>
<b>*ヘイトクライム...特定の個人や集団への偏見や憎悪で引き起こされる脅迫や犯罪行為のこと</b></p>
            <br>
            <h6 class="program_sexualorientation">一橋アウティング事件（日本）</h6>
            <hr>
            <br>
            <p class="campaign_sexualorientation">２０１５年４月に一橋大学院の男子生徒Aが男子生徒Bにラインで「Bのことが好きだ」と告白した。
            友達でいたいと男子生徒Bは当時言ってたが、その後、他の友達が入ってるグループで<b>「生徒Aがゲイであることをもう隠せない」</b>と言い、生徒Aが同性愛者だと生徒Bは許可なしで暴露<b>（アウティング)</b>をした。
            その後、精神的に不安定になり生徒Aは８月に自殺した。その後、この事件で生徒などが集まり、<mark class="highlights"><b>一橋大の校門前で追悼集会が行われた</b></mark>。</p>
            <br>
        </div>
    </div> 
    <div class="nextback">
            <nuxt-link to="/otherdiscrimination/otherdiscrimination/asiandiscrimination"><img class="back" src="~/assets/modoru2.png"></nuxt-link>
            <nuxt-link to="/otherdiscrimination/otherdiscrimination/religiousdiscrimination"><img class="next" src="~/assets/tugi.png"></nuxt-link>
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
      title: "性的指向-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "性的指向の差別を紹介しています。また、過去に起こった事件などを取り上げています。" }
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

.two_sexualorientation{
  font-family: "Noto Sans JP"; 
  width: 50%; 
  margin: 0 auto;
  margin-top: 10px; 
  font-size: 18px; 
  text-indent: 1em;
}

.start_sexualorientation{
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

.program_sexualorientation{
    width: 50%;
    margin: 0 auto;
    font-size: 21px; 
    font-weight: bold; 
}
.campaign_sexualorientation{
  width: 50%; 
  margin: 0 auto;
  font-size: 15px; 
}


.sexualorientation{
    width: 325px; 
    height: 350px; 
    display: inline-block; 
    margin: 0 auto; 
}

.logoimage{
    text-align: center; 
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
