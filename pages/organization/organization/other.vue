<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    
    <h3 class="start">他にもある組織</h3>

    
    <div class="activity">
            <h6 class="program">UndocuBlack Network</h6>
            <hr>
            <p class="campaign"></p>
            <br></br>
            <h6 class="program">NAACP Legal Defense and Educational Fund, Inc.</h6>
            <hr>
            <p class="campaign">1940年創立。現在、シェリリンイフィルが今組織を率いていて、サーグッドマーシャルによって設立された非営利組織。人種的正義、平等、そして包摂的な社会を実現する事を目標としている組織です。本社はニューヨークにあります。公民権擁護コミュニティのための詳細な調査レポート、ブログ投稿、情報チラシを提供しています。リンク＝＞<a href="https://www.naacpldf.org/" target="_blank">https://www.naacpldf.org/ </a></p>
            <br></br>
            <h6 class="program">Defund-the-police</h6>
            <hr>
            <p class="campaign"></p>
            <br></br>
            <h6 class="program">The Breathe Act</h6>
            <hr>
            <p class="campaign"> </p>
        <br></br>
        </div>

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
</style>
