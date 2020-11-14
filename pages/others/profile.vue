<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    
    <h3 class="start">製作者紹介</h3>
    <div class="profile">
     <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="~/assets/saryu.jpg" alt="Placeholder image">
          </figure>
        </div>

        <div class="content">
              <b>サリュウ</b> <br></br>
              精神年齢5歳の自称15歳。パソコン、ゲームが大好きです！格闘技やってるけど最近動いてなくて体が鈍ってる。健康的な生活を送っています。
              
         </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="~/assets/matoilogo.jpg" alt="Placeholder image">
          </figure>
        </div>

            <div class="content">
              <b>にんじん</b> <br></br>
              ドラえもんが大好きな高校１年生。「にんじん」っていう名前だけど、食べる方はそこまで好きじゃない。<br></br>
            </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="~/assets/kanaprofile.jpg" alt="Placeholder image">
          </figure>
        </div>

            <div class="content">
             <b>ミケケ</b> <br></br>
              最近テイラースイフトが出したアルバム、フォークロアに大夢中。ポッターヘッドである。マーベル映画も好き。返信が遅い事が多い。グループチャットは読む派。
            </div>
      </div>
      </div>
</div>

<h3 class="start">活動記録</h3>

<div class="nextback">
            <nuxt-link to="/others/sitemap"><img class="back" src="~/assets/modoru2.png"></nuxt-link>
            <nuxt-link to="/others/references"><img class="next" src="~/assets/tugi.png"></nuxt-link>
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
      title: "製作者紹介-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "このサイトを作成した人を紹介しています。" }
      ]
    }
  },
}　
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
.two{
  font-family: "Noto Sans JP"; 
  width: 73%; 
  margin: 0 auto;
  padding-top: 20px; 
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

.more{
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
  margin-top: 45px; 
}

.card{
  width: 24%;
  display: inline-block;
  margin: 20px; 
  padding: 1px; 
  border-radius: 3px; 
  background-color: #000000; 
}

.profile{
  display: block; 
  width: 100%; 
  text-align: center; 
}

.content{ 
  font-size: 14px; 
  color: #f6d405;
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
