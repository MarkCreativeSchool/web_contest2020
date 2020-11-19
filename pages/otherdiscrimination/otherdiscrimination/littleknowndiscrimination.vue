<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/">ホーム</nuxt-link></li>
         <li class="breadcrumb-item"> 他の差別</li>
         <li class="breadcrumb-item"> <nuxt-link to="/otherdiscrimination/otherdiscrimination/littleknowndiscrimination">他</nuxt-link></li>
     </ol>　

    <h3 class="start">余り知らない差別とは？</h3>
    <p class="two">
        黒人差別や性的差別など、一度は聞いたことがある差別は様々あります。その中、<mark class="highlights"><b>余り気づかない差別などもたくさんあります</b></mark>。下には余り知らない、また気づかない差別の簡潔な説明をリスト上表記されています。ぜひ他の差別の事を知るきっかけにしてください！
    <br></br>
    </p>

       <div class="activity">
            <h6 class="program">学歴差別</h6>
            <hr>
            <p class="campaign">人の学歴によって差別される事（高卒、大学卒、中卒など）。</p>
            <br></br>
            <h6 class="program">妊婦に対する差別。</h6>
            <hr>
            <p class="campaign">妊娠している女性に対する嫌がらせや批判する事。</p>
            <br></br>  
            <h6 class="program">年齢差別</h6>
            <hr>
            <p class="campaign">人の年齢で差別をする事（例：高齢者に対する仕事場での差別）。</p>
            <br></br>  
            <h6 class="program">障害者差別</h6>
            <hr>
            <p class="campaign">生まれつきからある病気（失読症など)や、病気を抱えている人（白血病など）、障害者（身体の部分が麻痺している）人に対する嫌がらせなどをする事。</p>
            <br></br>  
        </div>
        
    </div> 
    <div class="nextback">
            <nuxt-link to="/otherdiscrimination/otherdiscrimination/religiousdiscrimination"><img class="back" src="~/assets/modoru2.png"></nuxt-link>
            <!--<nuxt-link to="/others/why"><img class="next" src="~/assets/tugi.png"></nuxt-link>-->
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
      title: "他-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "あまり知られてない、気づかれない差別をリスト上で紹介しています。" }
      ]
    }
  },
}　
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
.two{
  font-family: "Noto Sans JP"; 
  width: 63%; 
  margin: 0 auto;
  margin-top: 10px; 
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
    width: 75%;
    margin: 0 auto;
    margin-top: 30px; 
    font-family: "Noto Sans JP"; 
}

.program{
    width: 85%;
    margin: 0 auto;
    font-size: 21px; 
    font-weight: bold; 
}
.campaign{
  width: 80%; 
  margin: 0 auto;
  font-size: 15px; 
}



</style>
