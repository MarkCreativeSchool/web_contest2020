<template>
  <div class="full">
  <Header></Header>
   <div class="info">
     <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/">ホーム</nuxt-link></li>
         <li class="breadcrumb-item"> <nuxt-link to="">SDGsとの関連</nuxt-link></li>
     </ol>
    <br>
    <h3 class="start_what"><span class="under">SDGsとは？</span></h3>
    
    </div>
       <div class="nextback">
        <nuxt-link to="/survey"><img class="back" :src="`${prefix}/modoru2.png`"></nuxt-link>
        </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Mixin from "~/mixins/mixin";
import Header from "~/components/Header"
import Footer from "~/components/Footer"
export default {
  name: "Index",
  mixins: [ Mixin ],
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
  width: 50%;
  height: 500px;
  margin-top: 0px;
  margin-bottom: 30px;
}

</style>
