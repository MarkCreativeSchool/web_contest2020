<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/">ホーム</nuxt-link></li>
         <li class="breadcrumb-item"> 現状</li>
         <li class="breadcrumb-item"> <nuxt-link to="/current/statistics/work">雇用</nuxt-link></li>
     </ol>
    <h3 class="start">雇用</h3>
    <p class="two">
        1960〜1970年代以降米国に住んでる黒人の<mark class="highlights"><b>雇用環境が改善されてきた</b></mark>。1965年には黒人公職者が<b>280人</b>しかいなかったのに対し、1990年には<b>7000人以上に急増した</b>。公職者のうち、黒人市長が特に増えていることが確認されている。1965年には3人いなかったのが1990には<b>合計318人の黒人市長が当選した</b>。更に、1990年には黒人女性が初めて大都市の市長に当選された。　
<br></br>
    </p>
    <img class="bargraph" src="~/assets/work.png">
    
<p class="two">
   しかし、今の時代でも黒人差別に対する仕事上の格差が米国には未だに問題となっています。左の表は米国での主要な人種及民主グループによる２０１８年度の失業率を表しています。白人の失業率の4.3%に比べ、<mark class="highlights"><b>黒人の失業率</b></mark>は<b>約２倍</b>の8.4%である。
   米国での失業率が白人は<b>8.4%</b>に対し黒人は<b>19.5％（なので約2.3倍）</b>
   と報告されていた1983年比べると、白人の失業率の低い事はほとんど変わっていな事がわかる。また、<b>U.S Bureau of Labor Statistics</b> によると
   <mark class="highlights"><b>労働者の週収の中央値</b></mark>が白人は<b>$965（約101,612円）</b>に比べ黒人の収入は<b>$238（約25060円）低い$727（約76,551円）</b>受け取ってることが報告されている。更に、
   <mark class="highlights"><b>米国での世帯収入の中央値</b></mark>は黒人の<b>$45,438（約4,784,530円）</b>に比べ、白人は<b>$76,057（約8,008,649円）</b>と報告されている（United States Census Bureauより）。このような格差は教育のレベルの差が影響しているとされています（教育での格差に繋がりが少しある）。
   <mark class="highlights"><b>このような格差が差別に繋がるきっかけになります</b></mark>。
<br></br>
加えて、<mark class="highlights"><b>収入の格差による他の場面での格差も報告されています</b></mark>。米国の貧困率は白人の<b>7.3%</b>に比べ黒人は<b>18.8%</b>と、約２倍の数字が確認されている（United States Census Bureauより）。更に、米国での<mark class="highlights"><b>自宅の所有率</b></mark><b>73.7%</b>に比べ、黒人は<b>44%</b>と報告されてます（United States Census Bureauより）。
理由の一つとして、<mark class="highlights"><b>黒人の収入の低さが報告されており</b></mark>、このような格差が他の場面でも影響されていることがわかる。
<br></br>
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

<style>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
.two{
  font-family: "Noto Sans JP"; 
  width: 63%; 
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


</style>
