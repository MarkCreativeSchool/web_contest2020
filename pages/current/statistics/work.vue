<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/">ホーム</nuxt-link></li>
         <li class="breadcrumb-item"> 現状</li>
         <li class="breadcrumb-item"> <nuxt-link to="/current/statistics/work">雇用</nuxt-link></li>
     </ol>
    <h3 class="start_work"><span class="under">雇用について</span></h3>
    <br>
    <p class="two">
      1960〜1970年代以降米国に住んでる黒人の雇用環境が改善されてきました。1965年には黒人公職者が280人しかいなかったのに対し、1990年には7000人以上に増加しました。公職者のうち、特に黒人市長が増加しているのがわかります。1965年には3人しかいなかった黒人市長ですが、1990年には合計318人の黒人市長が当選しています。更に、1990年には黒人女性が初めて大都市の市長に選ばれました。　
    <br>
    </p>
    <img class="bargraph" src="~/assets/work.png">
    <p class="two">
    しかし、現代でもアメリカでは黒人の雇用に対する格差が問題となっています。上の表はアメリカでの主要な人種及び民主グループによる2018年度の失業率を現しています。白人の失業率が4.3%なのに対し、黒人の失業率は約2倍の8.4%であることがわかります。失業率の差は以前から変わっていません。また、U.S Bureau of Labor Statisticsによると、労働者の週の収入の中央値が白人は$965（約101,612円）、黒人の収入は白人の収入に比べ$238（約25060円）低い$727（約76,551円）しか受け取っていないことがわかりました。さらに、アメリカでの世帯収入の中央値は白人が$76,057（約8,008,649円）、黒人が$45,438（約4,784,530円）であったと報告されています。このような格差が差別をより激化させているのではないでしょうか。
    加えて収入の格差による他の場面での格差も報告されています。アメリカでの貧困率において、白人は7.3%なのに対し黒人は18.8%と大きな差が開いています（United States Census Bureauより)。さらに、米国での自宅の所有率においても、白人は73.7%なのに対し黒人は44%と報告されています（United States Census Bureauより）。
    </p>


    </div> 
    <div class="nextback">
           <!-- <nuxt-link to="/otherdiscrimination/otherdiscrimination/genderdiscrimination"><img class="back" src="~/assets/modoru2.png"></nuxt-link>-->
            <nuxt-link to="/current/statistics/education"><img class="next" src="~/assets/tugi.png"></nuxt-link>
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
      title: "雇用-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "米国の仕事場で未だにある格差などを紹介、解説しています。" }
      ]
    }
  },
}　
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
.two{
  font-family: "Noto Sans JP"; 
  width: 47%; 
  margin: 0 auto;
  margin-top: 10px; 
  font-size: 18px; 
  text-indent: 1em;

}

.start_work{
  font-weight: bold;
  font-size: 30px;
  font-family: "Noto Sans JP"; 
  margin: 0 auto;
  width: 50%;
  color: black;
}
/* 
.start{
  font-family: "Noto Sans JP"; 
  color: black;
  background-color: #000000;
  background-position: center center;
  width: 50%; 
  left: 0%;
  font-size: 35px;
  font-weight: 800;
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

.highlights{
  background:#ffff66;
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

.under{
  border-bottom: solid 10px #ffa000;
}


</style>
