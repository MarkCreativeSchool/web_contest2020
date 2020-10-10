<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    
    <h3 class="start">米国での黒人差別の現状</h3>
    <div class="activity">
            <h6 class="program">日常生活での差別</h6>
            <hr>
            <p class="campaign"></p>
            <br></br>
            <h6 class="program">雇用差別・仕事上での格差</h6>
            <hr>
            <p class="campaign"></p>
            <br></br>
            <h6 class="program">黒人に対する警察の残虐行為</h6>
            <hr>
            <p class="campaign"> </p>
            <br></br>
            <h6 class="program">コロナの上での格差</h6>
            <hr>
            <p class="campaign"> </p>
            <br></br>
            <h6 class="program">まとめ</h6>
            <hr>
            <p class="campaign"></p>
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
