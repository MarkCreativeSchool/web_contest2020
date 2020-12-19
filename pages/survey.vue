<template>
  <div class="full">
  <Header></Header>
    <div class="info">
    <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/">ホーム</nuxt-link></li>
         <li class="breadcrumb-item"> <nuxt-link to="">アンケート結果</nuxt-link></li>
     </ol>

   <!--  <h3 class="start">アンケート</h3>-->
   <br>
   <h3 class="start_survey"><span class="under">アンケート</span></h3>
    <br>
     <h4 class="surveytitle"><mark>対象者の国籍</mark></h4>
      <p class="two_survey">
        私たちはインターナショナルスクール（高校１年生~高校３年生）と日本の県立高校（高校１年生~高校２年生）を対象に差別意識に関するアンケートを実施しました。2つの高校での国籍の違いは下のグラフのような結果になりました。

        <div class="logograph">
       <figure>
        <img class="graphimage" :src="`${prefix}/nationjap.png`">
        <img class="graphimage" :src="`${prefix}/nationinter.png`">
        <figcaption>左：日本の県立高校　右：インターナショナルスクール</figcaption>
        </figure>

        </div>
       <!-- <p class="two">後ほど、国籍の違いで黒人差別に対する意識の違いがどれだけ環境により違うことがわかりました。</p> -->
       <br>
    <h4 class="surveytitle"><mark>「差別」についてどれくらい関心があるか</mark></h4>
    <p class="two_survey"><br>アンケートの結果からわかるように、インターナショナルに所属している生徒の半分以上が高い関心を示していることがわかります。一方、日本の県立学校に通う生徒は、高い関心を示す人がいる一方で「全く興味がない」と答える人もいました。この結果より、インターナショナルに通う生徒の方が関心度が高いことがわかります。

    <div class="logograph">
    <figure>
        <img class="graphimage" :src="`${prefix}/concernjap.png`">
        <img class="graphimage" :src="`${prefix}/concerninter.png`">
        <figcaption>左：日本の県立高校　右：インターナショナルスクールの結果</figcaption>
        </figure>
    </div>
    <br>
    <h4 class="surveytitle"><mark>差別を受けている人や場面を見たことがあるかどうか</mark></h4>
     <p class="two_survey">日本の高校に通う生徒よりも、インターナショナルに通う生徒の方が差別に対する関心度が高い理由の一つとして、差別を受けている人や場面を実際に見たことがあるかどうかに影響されているのではないかと考えました。そこで、「今までに実際に人種差別を受けている人や場面を見たことがありますか？」という内容の質問をしました。その結果が下のグラフです。日本の高校に通う生徒の殆どが「ない」と答えたのに対して、インターナショナルスクールに通う生徒の殆どが「ある」と回答しました。

    <div class="logograph">
    <figure>
        <img class="graphimage" :src="`${prefix}/sawjap.png`">
        <img class="graphimage" :src="`${prefix}/sawinter.png`">
        <figcaption>左：日本の県立高校　右：インターナショナルスクールの結果</figcaption>
        </figure>
    </div>
    <br>
<h4 class="surveytitle"><mark>人種差別を受けたことがあるかどうか。また、それは国内か国外か</mark></h4>
    <p class="two_survey">上記のアンケート結果を受け、「実際に自分たちが差別を受けたことがあるか」という質問をしました。その結果が下のグラフです。日本の高校に通う生徒は9割以上が「ない」と答えたのに対して、インターナショナルスクールに通う生徒は約6割の人が「ある」と回答しました。さらに、その中でも「国内で差別を受けた」と回答した人が多くいることがわかります。このように、日本人にとっては差別を受けたという経験が少ないため、差別問題に対する関心が低く、一方、インターナショナルに通う生徒では、日本で差別を受けたことがある人が多いため、差別問題に対する関心度が高いのではないかと考えています。

    <div class="logograph">
    <figure>
        <img class="graphimage" :src="`${prefix}/experiencejap.png`">
        <img class="graphimage" :src="`${prefix}/yesjap.png`">
        <figcaption>日本の県立高校の結果</figcaption>
        </figure>
    </div>
    <div class="logograph">
    <figure>
        <img class="graphimage" :src="`${prefix}/experienceinter.png`">
        <img class="graphimage" :src="`${prefix}/yesinter.png`">
        <figcaption>インターナショナルスクールの結果</figcaption>
        </figure>
    </div>

    <br>
    <h4 class="surveytitle"><mark>考察・まとめ</mark></h4>

    <p class="two_survey">
日本に通う学生にとって「差別問題」は普段の生活ではあまり意識することはないのではないかと思います。しかし、アンケートの結果からも分かるように、差別問題では日本国内でも起こっている問題なのです。国内で起こっていることを知らなければ差別問題は解消されません。アメリカで起こった事件をきっかけに、世界では差別問題が再び目を向けられるようになりました。このサイトで、日本人にも差別問題を知るきっかけとなって欲しいと思います。
        <br>
      </p>
    </div>

        <div class="nextback">
         <nuxt-link to="/what"><img class="back" :src="`${prefix}/modoru2.png`"></nuxt-link>
         <nuxt-link to="/sdgs"><img class="next" :src="`${prefix}/tugi.png`"></nuxt-link>
        </div>

  <Footer></Footer>
  </div>
</template>

<script>
import Mixin from "~/mixins/mixin";
import Header from "~/components/Header"
import Footer from "~/components/Footer"
export default {
  name: "Index",
  mixins: [ Mixin ],
  components: { Header, Footer },

  head() {
    return {
      title: "アンケート-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "インターナショナルスクールと日本の高校の黒人差別に関する関心度などを測ったアンケート結果。" }
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



.two_survey{
  font-family: "Noto Sans JP";
  width: 63%;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 18px;
  text-indent: 1em;
}
 .start_survey{
    font-weight: bold;
    font-size: 30px;
    font-family: "Noto Sans JP";
    margin: 0 auto;
    width: 67%;
    color: black;
  }

.surveytitle{
  font-weight: bold;
  font-size: 24px;
  font-family: "Noto Sans JP";
  margin: 0 auto;
   width: 67%;
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
