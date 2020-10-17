<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    
    <h3 class="start"> 性的指向による差別</h3>
    <p class="two">
       性的指向の差別は、自分の性別によって行われる差別です。この差別行為はLGBTQ +コミュニティ（L =レズビアン、G =ゲイ、B =バイセクシュアル、T =トランスジェンダー、Q =クィア、+ =パンセクシュアル、アセクシュアル、オムニセクシャルなどのその他の性的アイデンティティ）を対象としています。差別の種類には、直接的および間接的な差別のほか、嫌がらせが含まれます。
    <br></br>
    <div class="logoimage">
    <img class="sexualorientation" src="~/assets/gendersign.png">
    <img class="sexualorientation" src="~/assets/heart.png">
    </div>
    </p>

    <h3 class="start">事件</h3>
       
         <div class="activity">
            <h6 class="program">オーランド銃乱射事件（アメリカ）</h6>
            <hr>
            <p class="campaign">２０１６年６月１２日に警備員のオマルマティーンさんが銃乱射事件を起こしました。49人が殺害され、53人が怪我を負いました。ナイトクラブに突入してから３時間後に警察に打たれ、亡くなりました。当時、米国史上最悪の銃乱射事件でした。ナイトクラブの主な客が同性愛者だとマティーンさんは理解しており、日頃同性愛者に対する嫌悪な言動が目立ってた為、親族はヘイトクライム*の可能性が高いと話していました。
（*ヘイトクライム...特定の個人や集団への偏見や憎悪で引き起こされる脅迫や犯罪行為のこと）</p>
            <br></br>
            <h6 class="program">一橋アウティング事件（日本）</h6>
            <hr>
            <p class="campaign">２０１５年４月に一橋大学院の男子生徒Aが男子生徒Bにラインで「Bのことが好きだ」と告白した。友達でいたいと男子生徒Bは当時言ってたが、その後、他の友達が入ってるグループで「生徒Aがゲイであることをもう隠せない」と言い、生徒Aが同性愛者だと生徒Bは許可なしで暴露（アウティングした）。その後、精神的に不安定になり生徒Aは８月に自殺した。その後、この事件で生徒などが集まり、一橋大の校門前で追悼集会が行われた。</p>
            <br></br>  
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
