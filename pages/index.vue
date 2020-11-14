<template>
  <div class="full">
  <Header></Header>
    <div class="info">
      <p class="two">
      あなた自身が差別を意識したことはありますか？また、差別の対象となったことはありますか？ 私たちの通う学校には日本人以外にも様々な国の生徒が通っています。なので、差別問題に対する反対意識が他の学校と比べ大きいと思います。 私たちの友人が見た目で差別を受けて悩んでいた事が黒人差別という話題を選んだ一つの理由です。 差別という話題を選んだきっかけの一つとして、友人が見た目で差別を経験し、悩んでいることでした。見た目だけで友達は他人の視線を感じ、不快な思いをしたと語っていました。 私たちが実際に家でゲームをプレイしていた際に“Black Lives Matter”と書かれた通知がきました。私はこの“Black Lives Matter”という言葉に興味を持ち、ネットで調べた結果、様々なゲームの大元の会社で従業員の一人が、お客さんの肌の色の応じて接客の態度変えていたという黒人差別にあたる行為が問題視されていたようなのです。 また、学校の授業でも最近米国で起きている様々な出来事や事件で、私たちの黒人差別への興味や意識が高まったので、この話題を深く調べたいと思いました。
      <br></br>
      アメリカでジョージフロイドが警官に殺害された事件最近注目された事件の一つです。これをきっかけに、アメリカでの黒人差別という点に注目しました。また、他にも、ブリオナテイラーさんが殺された事件など、米国では他の国に比べ、黒人差別に関する事件が沢山あることに注目しました。これをきっかけにアメリカでの黒人差別の歴史や事件などに興味を持つことになりました。もちろん、米国以外にも黒人差別の歴史や事例はあります。それで、私たちが考えたのは、サイトを拝見してくれた人たちが米国での黒人差別をまず理解して興味を持つことで、他の国での黒人差別を調べるきっかけになれたらと考えました。この為、調べるのを一ヶ所に集中することを決断しました。
      <br></br>
      私たちの生活では気づかない内に様々な差別が起こっている場合が沢山あります。今話題されている黒人差別も差別の一つです。私たちが注目した点は話題になっているのに関わらず、身の回りの人たちは余り黒人差別のことを余り良く理解していない事です。また、黒人差別のことに関し、私たち自身も知らないことが沢山あります。私たちが疑問視していることが、他の人も疑問視しているかもしれない。この様な理由をきっかけに、黒人差別の教材を作成し、より多い人に理解して欲しいと思いました。この為、差別全体ではなく、黒人差別に注目しました。
      <br></br>
      <b>*私たちがこのサイトで取り上げている黒人差別問題は繊細な課題です。バイアスは断じて禁じるように気遣っています。その為、意見や個人の考えなどは控えています。ご了承ください。</b>
      </p>
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


.two{
  font-family: "Noto Sans JP"; 
  width: 68%; 
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
.drawing{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  height: 575px; 
  margin-top: 0px; 
}

.drawing1{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 83%;
  height: 500px; 
  margin-top: 0px; 
  margin-bottom: 30px;
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

</style>
