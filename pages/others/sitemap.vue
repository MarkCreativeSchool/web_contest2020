<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/">ホーム</nuxt-link></li>
         <li class="breadcrumb-item"> その他</li>
         <li class="breadcrumb-item"> <nuxt-link to="/others/sitemap">サイトマップ</nuxt-link></li>
     </ol>
     <br>
    <h3 class="start_sitemap"><span class="under">サイトマップ</span></h3>
    <br>
    <h6 class="title_sitemap">トップ</h6>
      <ul class="list_sitemap">
      <li><nuxt-link to="/">ホーム</nuxt-link></li>
      <li><nuxt-link to="/what">差別とは？</nuxt-link></li>
      <li><nuxt-link to="/survey">アンケート結果</nuxt-link></li>
      </ul>
      <br>
    <h6 class="title_sitemap"><nuxt-link to="/history">歴史</nuxt-link></h6>
    <br>
    <h6 class="title_sitemap"><nuxt-link to="/currentproblems">現問題</nuxt-link></h6>
    <br>
    <h6 class="title_sitemap">現状</h6>
    <ul class="list_sitemap">
      <li><nuxt-link to="/current/statistics/work">雇用</nuxt-link></li>
      <li><nuxt-link to="/current/statistics/education">教育</nuxt-link></li>
      <li><nuxt-link to="/current/statistics/policebrutality">逮捕率など</nuxt-link></li>
      <li><nuxt-link to="/current/organization">組織</nuxt-link></li>
      </ul>
      <br>
    <h6 class="title_sitemap">他の差別</h6>
    <ul class="list_sitemap">
      <li><nuxt-link to="/otherdiscrimination/genderdiscrimination">性差別</nuxt-link></li>
      <li><nuxt-link to="/otherdiscrimination/asiandiscrimination">アジア人差別</nuxt-link></li>
      <li><nuxt-link to="/otherdiscrimination/sexualorientationdiscrimination">性的指向</nuxt-link></li>
      <li><nuxt-link to="/otherdiscrimination/religiousdiscrimination">宗教差別</nuxt-link></li>
      <li><nuxt-link to="/otherdiscrimination/littleknowndiscrimination">他</nuxt-link></li>
      </ul>
      <br>
    <h6 class="title_sitemap">その他</h6>
    <ul class="list_sitemap">
      <li><nuxt-link to="/others/sitemap">サイトマップ</nuxt-link></li>
      <li><nuxt-link to="/others/profile">制作者紹介</nuxt-link></li>
      <li><nuxt-link to="/others/references">参考文献</nuxt-link></li>
      </ul>
<br><br>

    </div>
     <div class="nextback">
            <nuxt-link to="/others/profile"><img class="next" :src="`${prefix}/tugi.png`"></nuxt-link>
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
      title: "サイトマップ-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "このサイトのサイトマップが書かれています。" }
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
 .start_sitemap{
    font-weight: bold;
    font-size: 30px;
    font-family: "Noto Sans JP";
    margin: 0 auto;
    width: 50%;
    color: black;
  }

  .list_sitemap{
    font-weight: bold;
    font-size: 14px;
    font-family: "Noto Sans JP";
    margin: 0 auto;
    width: 45%;
    color: black;
    list-style-type: circle;
  }

  .title_sitemap{
    font-weight: bold;
    font-size: 20px;
    font-family: "Noto Sans JP";
    margin: 0 auto;
    width: 50%;
    color: black;
  }

  /*.two_sitemap{
  font-family: "Noto Sans JP";
  width: 50%;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 18px;
  text-indent: 1em;
}*/

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
