<template>
  <div class="full">
  <Header></Header>
   <div class="info">
     <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/">ホーム</nuxt-link></li>
         <li class="breadcrumb-item"> 現状</li>
         <li class="breadcrumb-item"> <nuxt-link to="/current/statistics/education">教育</nuxt-link></li>
     </ol>
    <h3 class="start">教育</h3>
    <p class="two">
        奴隷制度が存在してる時代では黒人の教育は禁じられていました。奴隷制度が廃止され、黒人の教育が許されました。しかし、その時は白人と黒人高校が別々に存在していました。1954年にブラウン判決が決定されて以降は黒人と白人の共学が許されました。しかし、当時は黒人の生徒率がたったの0.1%と確認されています。1994年に取られたデータによると公立学校生徒の比率は黒人は17％と確認され、1954年以降改善に向かっていることがわかります。
<br></br>
    </p>
    <img class="bargraph" src="~/assets/edugraph.png">
    <p class="two">
    しかし、それでも、教育の場面では格差があります。上の表は中東学校で人種により、各科目による単位取得率を表しています。青、全教科の数値をみてみると、白人の取得率の40%に比べ、黒人は約半分の20%ということがわかります。他にも、白人の理科の取得りつは黒人に比べ、2倍、また数学は2.8倍というのが2013年にUS Department of Educationが報告しています。他にも、U.S. Census Bureauによると、2019年学士号を取得している25歳を全体的でみてみると、白人の40.1% に比べ、黒人は26.1％だったと報告されています。2010年に記録されている19.8%からは上昇している物の（白人は33.2%）、白人の取得率の方が、未だに多いことがわかります。また、米国の人口の約14.6%しか黒人は絞めないこと（人口：約3億2900万人　黒人：3769万人）を考えるとどれだけ黒人と白人の教育の差がわかります。
<br></br>
この教育での格差は他の場面での格差にも影響があります。雇用差別ページで少し、教育の格差の影響により、給料の差が出るということを紹介しました。また、教育も様々な格差で差がでます。例として、貧困が影響します。このように、一つの場面で格差が起こるとなると、様々な場面に影響を与えることになります。この理由もまた、差別をなくすのが困難な理由の一つになっていきます。
<br></br>
    </p>
        

    </div> 
    <div class="nextback">
            <nuxt-link to="/current/statistics/work"><img class="back" src="~/assets/modoru2.png"></nuxt-link>
            <nuxt-link to="/current/statistics/policebrutality"><img class="next" src="~/assets/tugi.png"></nuxt-link>
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
      title: "教育-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "米国の教育の場での格差などを紹介、解説しています。" }
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


</style>
