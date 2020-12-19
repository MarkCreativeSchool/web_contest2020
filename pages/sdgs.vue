<template>
  <div class="full">
  <Header></Header>
   <div class="info">
     <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/">ホーム</nuxt-link></li>
         <li class="breadcrumb-item"> <nuxt-link to="">SDGsとの関連</nuxt-link></li>
     </ol>
    <br>
    <h3 class="start_what"><span class="under">SDGsとは？</span></h3>
    <br>
    <h2 class="opening-title">SGDs(Sustainable Development Goals(持続可能な開発目標))</h2>
    <p class="contents">
        2001年に策定されたミレニアム開発目標(MDGs)の後継として、2015年9月に国連サミットで採択され、国連加盟193か国が2016年から2030年の15年間で達成するために掲げた国際社会の目標。17のゴールと169のターゲットから構成され、地球上の「誰一人取り残さない(leave no one behind)」ことを誓っている。SDGsは発展途上国のみならず、先進国地震が取り組むユニバーサルなものであり、日本としても積極的に取り組んでいる。
    </p>
    <div class="logograph">
        <img class="graphimage" :src="`${prefix}/sdgs.png`">
    </div>
    </div>
       <div class="nextback">
        <nuxt-link to="/survey"><img class="back" :src="`${prefix}/modoru2.png`"></nuxt-link>
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
      title: "差別とは？-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "差別とは何かが解説されています。" }
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

.two_what{
  font-family: "Noto Sans JP";
  width: 50%;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 18px;
  text-indent: 1em;
}

 .start_what{
    font-weight: bold;
    font-size: 30px;
    font-family: "Noto Sans JP";
    margin: 0 auto;
    width: 50%;
    color: black;
  }

.opening-title{
    margin: 0 auto;
    width: 50%;
    font-weight: 800;
    font-size: 20px;
}

.contents{
    width: 50%;
    margin: 0 auto;
    font-size: 15px;
    text-indent: 1em;
}

.drawing3{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  height: 370px;
  margin-top: 0px;
}

.drawing1{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 500px;
  margin-top: 0px;
  margin-bottom: 30px;
}

.logograph{
    text-align: center;
}

.graphimage{
    width: 35%;
    height: 2%;
    display: inline-block;
    margin: 0 auto;
}

</style>
