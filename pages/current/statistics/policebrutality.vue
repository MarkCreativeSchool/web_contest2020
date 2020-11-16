<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/">ホーム</nuxt-link></li>
         <li class="breadcrumb-item"> 現状</li>
         <li class="breadcrumb-item"> <nuxt-link to="/current/statistics/policebrutality">逮捕率など</nuxt-link></li>
     </ol>
    <h3 class="start">逮捕率、銃撃率など</h3>
    <p class="two">
        警察による致命的な銃撃率は人種に基づいて不釣り合いであることをWashington Post が調査しました。 2020年のアフリカ系アメリカ人の全体的な致命的な銃撃の割合は約26％（5109人中1345人）で射殺された人の50％は白人でした。しかし、アフリカ系アメリカ人の人口を考慮すると不均衡です。アフリカ系アメリカ人はアメリカの人口の約12〜15％を占めており、射殺の割合が不均衡であることを示しています。グラフには、黒人アメリカ人の100万人あたり30％が撃たれていることが示されています。これは、白人アメリカ人の100万人あたり12％と比較してかなりの格差です。これは、人口が黒人と白人の両方のアメリカ人で同じである場合、致命的な警察の銃撃に18％の違いがあることを意味します。
<br></br>
    </p>

    <img class="bargraph" src="~/assets/shooting.png">
    <p class="two">
    別の調査によると、12歳以上の黒人と白人のマルファナ使用量はほぼ同じで、白人は16.5％、黒人は17.8％ですが、米国の10万人あたりのマリファナ所持での逮捕率は黒人の3倍であると報告されています。これは、警察が特定の人種を差別する傾向があり、使用率がほぼ同じであっても逮捕率に差が生じていることを示唆している可能性があります。

    </p>
       <div class="bardata">
    <img class="bargraph2" src="~/assets/use.png">
    <img class="bargraph2" src="~/assets/arrest.png">
    </div>
    <br></br>

    </div> 
    <div class="nextback">
            <nuxt-link to="/current/statistics/education"><img class="back" src="~/assets/modoru2.png"></nuxt-link>
            <nuxt-link to="/current/organization"><img class="next" src="~/assets/tugi.png"></nuxt-link>
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
.two{
  font-family: "Noto Sans JP"; 
  width: 68%; 
  margin: 0 auto;
  padding-top: 20px; 
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
    width: 80%;
    margin: 0 auto;
    margin-top: 30px; 
    font-family: "Noto Sans JP"; 
}

.program{
    width: 95%;
    margin: 0 auto;
    font-size: 21px; 
    font-weight: bold; 
}


.campaign{
  width: 90%; 
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


.bargraph2{
    width: 325px; 
    height: 350px; 
    display: inline-block; 
    margin: 0 auto; 
}

.bardata{
    text-align: center; 
}

</style>
