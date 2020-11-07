<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    
    <h3 class="start">雇用差別</h3>
    <p class="two">
        1960〜1970年代以降米国に住んでる黒人の雇用環境が改善されてきた。1965年には黒人公職者が280人しかいなかったのに対し、1990年には7000人以上に急増しました。公職者のうち、黒人市長が特に増えていることが確認されている。1965年には3人いなかったのが1990には合計318人の黒人市長が当選した。更に、1990年には黒人女性が初めて大都市の市長に当選された。　
<br></br>
    </p>
    <img class="bargraph" src="~/assets/work.png">
    
<p class="two">
   しかし、今の時代でも黒人差別に対する仕事上の格差が米国には未だに問題となっています。左の表は米国での主要な人種及民主グループによる２０１８年度の失業率を表しています。白人の失業率の4.3%に比べ、黒人の失業率は約２倍の8.4%である。米国での失業率が白人は8.4%に対し黒人は19.5％（なので約2.3倍）と報告されていた1983年比べると、白人の失業率の低い事はほとんど変わっていな事がわかる。また、U.S Bureau of Labor Statistics によると労働者の週収の中央値が白人は$965（約101,612円）に比べ黒人の収入は$238（約25060円）低い$727（約76,551円）受け取ってることが報告されている。更に、米国での世帯収入の中央値は黒人の$45,438（約4,784,530円）に比べ、白人は$76,057（約8,008,649円）と報告されている（United States Census Bureauより）。このような格差は教育のレベルの差が影響しているとされています（教育での格差に繋がりが少しある）。このような格差が差別に繋がるきっかけになります。
<br></br>
加えて、収入の格差による他の場面での格差も報告されています。米国の貧困率は白人の7.3%に比べ黒人は18.8%と、約２倍の数字が確認されている（United States Census Bureauより）。更に、米国での自宅の所有率73.7%に比べ、黒人は44%と報告されてます（United States Census Bureauより）。理由の一つとして、黒人の収入の低さが報告されており、このような格差が他の場面でも影響されていることがわかる。
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
}　
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
.two{
  font-family: "Noto Sans JP"; 
  width: 73%; 
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

</style>
