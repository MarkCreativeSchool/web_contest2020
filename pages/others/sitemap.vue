<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    
    <h3 class="start">サイトマップ</h3>
    <p class="two">個人の特性を無視し、所属している集団や社会的カテゴリーに基づいて、合理的に説明できないような異なった（不利益）取り扱いをすること。 差別には本来、明確に区分するという意味が含まれているが、ここで取り上げるのは、本来平等であるべきものを不平等に取り扱うという社会的差別である。 そのような社会的差別にしても、何を差別ととらえるのかについては万人が納得するような基準はない。 ＜本来平等であるべきもの＞という認識自体が、社会や時代とともに変化するからである。 つまり、人権意識の深まりとともに、今まで差別ととらえられなかったものが差別と認識されるようになる。

    </p>


    </div> 
     <div class="nextback">
            <nuxt-link to="/other/why"><img class="back" src="~/assets/modoru2.png"></nuxt-link>
            <nuxt-link to="/others/profile"><img class="next" src="~/assets/tugi.png"></nuxt-link>
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
      title: "サイトマップ-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "このサイトのサイトマップが書かれています。" }
      ]
    }
  },
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
