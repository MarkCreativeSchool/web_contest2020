<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    
    <h3 class="start">逮捕率、銃撃率など</h3>
    <p class="two">
        アジア人差別は人種差別の一種であり、ヨーロッパやアメリカなどを中心でみられる差別です。黒人差別同様、人種をきっかけに他人に屈辱されたり、見下されたる扱いを受けるなどのことが起きています。黒人差別よりは今現在メディアなどで取り上げられている差別ではないが、昔からある問題です。
<br></br>
    </p>
        

    </div> 
    <div class="nextback">
            <nuxt-link to="/current/statistics/education"><img class="back" src="~/assets/modoru2.png"></nuxt-link>
            <nuxt-link to="/current/organization"><img class="next" src="~/assets/tugi.png"></nuxt-link>
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
