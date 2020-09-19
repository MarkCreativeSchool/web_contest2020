<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    
    <h3 class="start">差別とは何か？</h3>
    <p class="two">個人の特性を無視し、所属している集団や社会的カテゴリーに基づいて、合理的に説明できないような異なった（不利益）取り扱いをすること。 差別には本来、明確に区分するという意味が含まれているが、ここで取り上げるのは、本来平等であるべきものを不平等に取り扱うという社会的差別である。 そのような社会的差別にしても、何を差別ととらえるのかについては万人が納得するような基準はない。 ＜本来平等であるべきもの＞という認識自体が、社会や時代とともに変化するからである。 つまり、人権意識の深まりとともに、今まで差別ととらえられなかったものが差別と認識されるようになる。

    </p>

    <h3 class="more">差別と区別</h3>
    <p class="two">
    <b>差別</b> <br></br>
「人や物の取り扱いに差をつけること」<br></br>
    <b>区別</b> <br></br>
「違いによって分けること」<br></br>
しかし、区別する側に差別的にとがあった場合、それは差別になる。また、区別された側が差別だと感じたら差別になり得る。

    </p>

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

</style>
