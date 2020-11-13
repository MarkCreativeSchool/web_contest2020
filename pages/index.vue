<template>
  <div class="full">
  <Header></Header>
    <div class="info">
      <p class="two">最近、ジョージフロイドが警官に窒息死された事件をきっかけに、黒人差別が注目される話題になりました。昔から世界的に問題となっている黒人差別。しかし、私たちは一体どこまで黒人差別の事を理解しているのでしょう？本当に私たちはこの問題を理解しているのか？実際、私たちはこの問題のことを調べた際、自分たちの黒人差別問題に対する理解がどれだけ少なかったかを知り、驚きました。
        <br></br>
        この機会に、私たちはインターナショナルスクール（高1〜3）と日本の県立高校（高1〜2）で差別の意識に関するアンケートを取って見ました。国籍の違いはこのようになりました。

        <div class="logograph">
       <figure>
        <img class="graphimage" src="~/assets/nationjap.png">
        <img class="graphimage" src="~/assets/nationinter.png">
        <figcaption>左：日本の県立高校　左：インターナショナルスクールの結果</figcaption>
        </figure>

        </div>
    </p>
    <p class="two">後ほど、国籍の違いで黒人差別に対する意識の違いがどれだけ環境により違うことがわかりました。
    <br></br>アンケート結果によると黒人差別に対する関心度を聞いてみると、インター生の大半は4〜5を選び、1を選んだ生徒は一人もいませんでした。しかし、日本人学校は1と答えた人は少ない物の、回答した人はいました。また、関心度の平均を計算すると、インター生は4.02に対し、日本人学校生徒は0.57低い3.45でした。このアンケートにより、日本人の高校生の差別、黒人差別に対する意識はインター生に比べ、低いということがわかりました。
    
    <div class="logograph">
    <figure>
        <img class="graphimage" src="~/assets/concernjap.png">
        <img class="graphimage" src="~/assets/concerninter.png">
        <figcaption>左：日本の県立高校　左：インターナショナルスクールの結果</figcaption>
        </figure>
    </div>
    </p>

     <p class="two">関心度の低さの理由の一つとして考えられるのは実際生徒が差別を受けたことがある、また見たことがあるかに影響されてると私たちは思いました。実際、差別を見たことがあると回答した生徒は日本の高校が28.5%に対し、インター生は73.6%でした。
    
    <div class="logograph">
    <figure>
        <img class="graphimage" src="~/assets/sawjap.png">
        <img class="graphimage" src="~/assets/sawinter.png">
        <figcaption>左：日本の県立高校　左：インターナショナルスクールの結果</figcaption>
        </figure>
    </div>
    </p>

    <p class="two">また、インター生の約58％は差別を受けたことがあると回答しました。その反面、日本の県立学校ではたったの3.3%しか受けたことがあると回答し増田。しかも、差別を受けたのは国内か国外かという質問の回答は、日本人の大半は国外と回答した物の、インター生の大半は国内（日本）で受けたという結果が出ました。この為、インター生は差別とは日本国内でもある問題と意識している反面、日本の高校生に取っては、差別とは余り縁がない問題と考えられことがわかります。
    
    <div class="logograph">
    <figure>
        <img class="graphimage" src="~/assets/experiencejap.png">
        <img class="graphimage" src="~/assets/yesjap.png">
        <figcaption>日本の県立高校の結果</figcaption>
        </figure>
    </div>
    <div class="logograph">
    <figure>
        <img class="graphimage" src="~/assets/experienceinter.png">
        <img class="graphimage" src="~/assets/yesinter.png">
        <figcaption>インターナショナルスクールの結果</figcaption>
        </figure>
    </div>
    </p>

    <p class="two">
        <br>しかし、差別とは縁がない、程遠い問題と意識されているが、インター生のアンケート結果が見せるように、日本でもある問題です。また、しかし、差別という物を身近でまず見つけるのは難しいことです。その為、今問題になっている米国の黒人差別の教材により、差別の意識をより深く理解して欲しいと思っています。問題は理解しなければ解決できません。曖昧な理解では通用しない場合が多いです。今話題になってるからこそ知る機会にする事を願います。<br>
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
}　
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');


.two{
  font-family: "Noto Sans JP"; 
  width: 83%; 
  margin: 0 auto;
  margin-top: 10px; 
  font-size: 18px; 
}

.start{
  font-family: "Noto Sans JP"; 
  color: #ffffff;
  background-color: #000000;
  background-position: center center;
  width: 73%; 
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
