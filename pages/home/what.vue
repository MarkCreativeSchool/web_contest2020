<template>
  <div class="full">
  <Header></Header>
   <div class="info">
     <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/">ホーム</nuxt-link></li>
         <li class="breadcrumb-item"> <nuxt-link to="/home/what">差別とは？</nuxt-link></li>
     </ol>

    <h3 class="start_what"><span class="under">差別とは？</span></h3>
    <br>
    <img class="drawing1" src="~/assets/what.jpg">
    <p class="two_what">個人の特性を無視し、所属している集団や社会的カテゴリーに基づいて、<mark class="highlights"><b>合理的に説明できないような異なった（不利益）取り扱い</b></mark>をすること。 
    差別には本来、明確に区分するという意味が含まれているが、ここで取り上げるのは、<mark class="highlights"><b>本来平等であるべきものを不平等に取り扱うという社会的差別</b></mark>である。
     そのような社会的差別にしても、何を差別ととらえるのかについては万人が納得するような基準はない。 
     <mark class="highlights"><b>＜本来平等であるべきもの＞</b></mark>という認識自体が、社会や時代とともに変化するからである。 
     つまり、人権意識の深まりとともに、今まで差別ととらえられなかったものが差別と認識されるようになる。
  <br>
    </p>
    <img class="drawing3" src="~/assets/discrimination2.jpg">
 
    <h3 class="start_what"><span class="under">差別と区別</span></h3>
    <p class="two_what">
    <b><mark>差別</mark></b><br>
「人や物の取り扱いに差をつけること」<br><br><b>
<mark>区別</mark></b> <br>
「違いによって分けること」<br>
しかし、区別する側に差別的にとがあった場合、それは差別になる。また、区別された側が差別だと感じたら差別になり得る。

    </p>
<br>
    </div> 
       <div class="nextback">
         <nuxt-link to="/"><img class="back" src="~/assets/modoru2.png"></nuxt-link>
            <nuxt-link to="/home/survey"><img class="next" src="~/assets/tugi.png"></nuxt-link>
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
      title: "差別とは？-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "差別とは何かが解説されています。" }
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

.two_what{
  font-family: "Noto Sans JP"; 
  width: 50%; 
  margin: 0 auto;
  margin-top: 10px; 
  font-size: 18px; 
  text-indent: 1em;
}

 .start_what{
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

.drawing3{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  height: 370px; 
  margin-top: 0px; 
}

.drawing1{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  height: 500px; 
  margin-top: 0px; 
  margin-bottom: 30px;
}

</style>
