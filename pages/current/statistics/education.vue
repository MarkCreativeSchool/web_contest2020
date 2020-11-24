<template>
  <div class="full">
  <Header></Header>
   <div class="info">
     <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/">ホーム</nuxt-link></li>
         <li class="breadcrumb-item"> 現状</li>
         <li class="breadcrumb-item"> <nuxt-link to="/current/statistics/education">教育</nuxt-link></li>
     </ol>
     <br>
    <h3 class="start_education"><span class="under">教育について</span></h3>
    <br>
    <p class="two_education">
      奴隷制度が存在している時代では黒人の教育は禁じられていました。その後、奴隷制度が廃止され、黒人の教育が許されるようになりました。しかし、白人と黒人とで学校が分けられていました。1954年にブラウン判決が採択され、白人と黒人の共学が実現しました。しかし、当時の黒人の生徒数は全体の0.1%ほどしかいませんでした。1994年にとられたデータによると公立学校の黒人生徒は全体の17%となり、1954年以降改善に向かっていることがわかります。
    </p>
    <br>
    <img class="bargraph" :src="`${prefix}/edugraph.png`">
    <p class="two_education">
    上のグラフは中等学校での科目及び人種による単位取得率を表したグラフです。全ての教科において白人よりも黒人の方が単位取得率が低いことがわかります。U.S. Census Bureauによると、2019年に学士号を取得している25歳全体での割合では、白人は40.1%、黒人は26.1%であったと報告されています。この結果からもわかるように、黒人と白人の間では教育の格差があるとわかりました。
    </p>
    <br>
    </div>
    <div class="nextback">
            <nuxt-link to="/current/statistics/work"><img class="back" :src="`${prefix}/modoru2.png`"></nuxt-link>
            <nuxt-link to="/current/statistics/policebrutality"><img class="next" :src="`${prefix}/tugi.png`"></nuxt-link>
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
      title: "教育-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "米国の教育の場での格差などを紹介、解説しています。" }
      ]
    }
  },
}　
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
.two_education{
  font-family: "Noto Sans JP";
  width: 47%;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 18px;
  text-indent: 1em;
}

/* .start{
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
} */

.start_education{
  font-weight: bold;
  font-size: 30px;
  font-family: "Noto Sans JP";
  margin: 0 auto;
  width: 50%;
  color: black;
}

.under{
  border-bottom: solid 10px #ffa000;
}

.activity{
    width: 80%;
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
.bargraph{
 display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}


</style>
