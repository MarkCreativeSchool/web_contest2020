<template>
  <div class="full">
  <Header></Header>
    <div class="info">
      <div class="test">
        <video id="video" width="1920" height="1080" loop autoplay muted>
          <source src="~/assets/douga.mp4" type="video/mp4" />
        </video>
        <div class="maku"><div class="aaa"></div></div>
        
      </div>
    <br>
    <div>
     <h2 class="biggertitle_jp"><span class="under">このサイトついて</span></h2> 
      <div class="discrimination">
      <li>現状の差別問題</li>
      <p class="introhome">世界では、差別はあらゆる所に潜んでいます。<br>それは性別や年齢、出身国や民族など様々ですが、どの差別もあってはならない事です。</p>
      <div class="buttons">
      <button class="introbutton"><nuxt-link to="/current/statistics/work" class="introlink">雇用問題</nuxt-link></button>
      <button class="introbutton"><nuxt-link to="/current/statistics/education" class="introlink">教育問題</nuxt-link></button>
      <button class="introbutton"><nuxt-link to="/current/statistics/policebrutality" class="introlink">逮捕率など</nuxt-link></button>
      </div>
      </div>
      <div class="discrimination1">
      <li>黒人差別の歴史</li>
      <p class="introhome">差別の歴史を年代別に参照できるようにタイムライン形式で内容を参照することができます。<br><br></p>
      <button class="introbutton"><nuxt-link to="/history" class="introlink">差別の歴史を見る＞＞</nuxt-link></button>
      </div> 
    </div> 
    <div>
      <h2 class="biggertitle_jp"><span class="under">はじめに</span></h2>
      <br>
      <p class="three">世界中で問題となっている差別問題。日本にいる私たちには関係ないことだと思っていませんか？2020年、アメリカで起こった黒人差別事件をきっかけに、反対運動が再び激化し世界中が差別について目を向けるようになりました。このサイトでは、アメリカの黒人差別が始まった歴史や、黒人差別反対運動を行っている組織、そして、世界中で起こっている差別について詳しくまとめています。このサイトで「差別とは何か」をもう一度考えてみませんか？
      </p>
    </div>
    <br>
     <br>
     <!-- <h4 class="hometitle">サイトを作ろうとしたきっかけ</h4>
      <p class="three">最近、ジョージフロイドが警官に窒息死された事件をきっかけに、黒人差別が注目される話題になりました。昔から世界的に問題となっている黒人差別。しかし、私たちは一体どこまで黒人差別の事を理解しているのでしょう？本当に私たちはこの問題を理解しているのか？実際、私たちはこの問題のことを調べた際、自分たちの黒人差別問題に対する理解がどれだけ少なかったかを知り、驚きました。
     </p> -->
      <br>
     <!-- <h4 class="hometitle">友人の経験</h4>
       <p class="three">
      あなた自身が差別を意識したことはありますか？また、差別の対象となったことはありますか？ 私たちの通う学校には日本人以外にも様々な国の生徒が通っています。なので、差別問題に対する反対意識が他の学校と比べ大きいと思います。 私たちの友人が見た目で差別を受けて悩んでいた事が黒人差別という話題を選んだ一つの理由です。 差別という話題を選んだきっかけの一つとして、友人が見た目で差別を経験し、悩んでいることでした。見た目だけで友達は他人の視線を感じ、不快な思いをしたと語っていました。 私たちが実際に家でゲームをプレイしていた際に“Black Lives Matter”と書かれた通知がきました。私はこの“Black Lives Matter”という言葉に興味を持ち、ネットで調べた結果、様々なゲームの大元の会社で従業員の一人が、お客さんの肌の色の応じて接客の態度変えていたという黒人差別にあたる行為が問題視されていたようなのです。 また、学校の授業でも最近米国で起きている様々な出来事や事件で、私たちの黒人差別への興味や意識が高まったので、この話題を深く調べたいと思いました。
      <br>
      </p> -->
       <br>
      <!-- <h4 class="hometitle">何故アメリカを対象としたのか？</h4>
      <p class="three">
      アメリカでジョージフロイドが警官に殺害された事件最近注目された事件の一つです。これをきっかけに、アメリカでの黒人差別という点に注目しました。また、他にも、ブリオナテイラーさんが殺された事件など、米国では他の国に比べ、黒人差別に関する事件が沢山あることに注目しました。これをきっかけにアメリカでの黒人差別の歴史や事件などに興味を持つことになりました。もちろん、米国以外にも黒人差別の歴史や事例はあります。それで、私たちが考えたのは、サイトを拝見してくれた人たちが米国での黒人差別をまず理解して興味を持つことで、他の国での黒人差別を調べるきっかけになれたらと考えました。この為、調べるのを一ヶ所に集中することを決断しました。
      <br>
      </p> -->
       <br>
      <!-- <h4 class="hometitle">何故黒人差別にしたのか？</h4>
      <p class="three">
      私たちの生活では気づかない内に様々な差別が起こっている場合が沢山あります。今話題されている黒人差別も差別の一つです。私たちが注目した点は話題になっているのに関わらず、身の回りの人たちは余り黒人差別のことを余り良く理解していない事です。また、黒人差別のことに関し、私たち自身も知らないことが沢山あります。私たちが疑問視していることが、他の人も疑問視しているかもしれない。この様な理由をきっかけに、黒人差別の教材を作成し、より多い人に理解して欲しいと思いました。この為、差別全体ではなく、黒人差別に注目しました。
      <br>
      </p> -->
     <br>
      <!-- <p class="three">
      <b>*私たちがこのサイトで取り上げている黒人差別問題は繊細な課題です。バイアスは断じて禁じるように気遣っています。その為、意見や個人の考えなどは控えています。ご了承ください。</b>
      </p> -->
    </div> 
    <br>

    <div class="nextback">
            <nuxt-link to="/what"><img class="next" src="~/assets/tugi.png"></nuxt-link>
        </div>

  <Footer></Footer>
  </div>
</template>

<script>
import Header from "~/components/Header"
import Footer from "~/components/Footer"

// v.onplay = true;
// v.onplay();
export default {
  name: "Index",
  components: { Header, Footer },

  head() {
    return {
      title: "ホーム-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "黒人差別を高校生にのために解説、紹介sしてあるサイトです。繊細な問題の為、意見などは控えております。ご了承ください。" }
      ]
    }
  },
}　
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');

.introbutton{
  background-color: #ffa000;
  color: #000000;
  font-size: 13px;
  margin-top: 20px;
  margin-right: 10px;
  border-color: #ffa000;
  border-radius: 5px;
  padding: 5px;
}

.introbutton:hover{
  background-color:#000000;
}

.introlink{
  color: #000000;
}

.introlink:hover{
  color: #ffa000;
  background-color: #000000;
}

.test{
  position: relative;
  text-align: center;
  height: calc(100vh - 0px);
  overflow: hidden;
  
}

.introhome{
  font-family: "Noto Sans JP"; 
  font-size: 14px;
  font-weight: none;
}

.maku{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5)
}

.aaa{
  color: white;
  font-size: 15px;
  right: 0%;
  top: 100px;
  width: 25%;
}


/*.two{
  font-family: "Noto Sans JP"; 
  width: 63%; 
  margin: 0 auto;
  margin-top: 10px; 
  font-size: 18px; 
}*/

.three{
  font-family: "Noto Sans JP"; 
  width: 40%; 
  margin: 0 auto;
  margin-top: 15px; 
  font-size: 20px; 
  text-indent: 1em;
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

.biggertitle_jp{
  font-weight: bold;
  font-size: 30px;
  font-family: "Noto Sans JP"; 
  margin: 0 auto;
  width: 70%;
}

.discrimination{
  display: inline-block;
  list-style: none;
  vertical-align: center;
  margin: 40px;
  margin-left: 18%;
  background-color:  #f5f5f5;
  padding:  25px;             
  height:250px;
  width: 24%;
  position: relative;
  left: 5%;
  font-size: 25px;
  font-weight: 800;
}

.discrimination1{
  display: inline-block;
  list-style: none;
  vertical-align: center;
  margin: 40px;
  margin-right: 13%;
  background-color:  #f5f5f5;
  padding:  25px;             
  height:250px;
  width: 24%;
  position: relative;
  left: 5%;
  font-size: 25px;
  font-weight: 800;
}

.under {
  /* top: 10%;
  display: inline-block;
  line-height: 0em;
  padding-bottom: 1em;
  background: #ffa500; */
  border-bottom: solid 10px #ffa000;
}

.hometitle{
  font-weight: bold;
  font-size: 24px;
  font-family: "Noto Sans JP"; 
  margin: 0 auto;
  width: 53%; 

}
.graphimage{
    width: 35%; 
    height: 2%; 
    display: inline-block; 
    margin: 0 auto; 
}

.logograph{
    text-align: center; 
}

figure {
  padding: 2px;
  margin: auto;
}

figcaption {
  font-family: "Noto Sans JP"; 
  text-align: center;
  font-weight: bold; 
  font-size: 12px; 
}

.next{
    display: inline-block;
    float: right; 
    margin-left: auto;
    margin-right: 40px;
    width: 100px; 
}

</style>
