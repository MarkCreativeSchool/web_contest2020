<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/">ホーム</nuxt-link></li>
         <li class="breadcrumb-item"> 現状</li>
         <li class="breadcrumb-item"> <nuxt-link to="/current/statistics/policebrutality">逮捕率など</nuxt-link></li>
     </ol>
     <br>
    <h3 class="start_arrest"><span class="under">逮捕率・銃撃率について</span></h3>
    <br>
    <p class="two_arrest">
      Washington Postは警察による銃撃率が人種によって大きく異なることについて調査を行いました。2020年には、アフリカ系アメリカ人の銃撃率は全体の約26%で、白人は50%でした。一見、白人の方が銃撃率が高いように見えますが、人口を考慮した場合、アフリカ系アメリカ人はアメリカの人口の12~15%を占めており、残りは白人であるということを考えると射撃率の割合は釣り合いが取れていないことがわかります。下の表は、人種による100万人あたりの警察の銃撃率を表しているグラフです。銃撃率において黒人は全体の30%、白人は約12%であり、黒人と白人には18%の差があります。
    </p>
    <br>
    <img class="bargraph" src="~/assets/shooting.png">
    <p class="two_arrest">
      左下の表は、12歳以上の過去1年間のマリファナの使用率を表したグラフ、右下は10万人あたりのマリファナの所持逮捕率を表したグラフです。白人と黒人とでは、マリファナの使用率は殆ど差はりませんが、逮捕率には大きな差があります。
    </p>
    <div class="bardata">
      <img class="bargraph2" src="~/assets/use.png">
      <img class="bargraph2" src="~/assets/arrest.png">
    </div>
    <br>
    </div> 
    <div class="nextback">
            <nuxt-link to="/current/statistics/education"><img class="back" src="~/assets/modoru2.png"></nuxt-link>
            <nuxt-link to="/current/organization"><img class="next" src="~/assets/tugi.png"></nuxt-link>
        </div>
     <Footer></Footer>
  </div>
</template>

<script scoped>
import Header from "~/components/Header"
import Footer from "~/components/Footer"
export default {
  name: "Index",
  components: { Header, Footer },
  head() {
    return {
      title: "逮捕率など-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "米国で起きてる警察の黒人に対する不行為、差別意識などを紹介しています。" }
      ]
    }
  },
}　
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
.two_arrest{
  font-family: "Noto Sans JP"; 
  width: 47%; 
  margin: 0 auto;
  margin-top: 10px; 
  font-size: 18px; 
  text-indent: 1em;
}

.start_arrest{
  font-weight: bold;
  font-size: 30px;
  font-family: "Noto Sans JP"; 
  margin: 0 auto;
  width: 50%;
  color: black;
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

.under{
  border-bottom: solid 10px #ffa000;
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


.bargraph2{
    width: 370px; 
    height: 350px; 
    display: inline-block; 
    margin: 0 auto; 
}

.bardata{
    text-align: center; 
}

</style>
