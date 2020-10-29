<template>
  <div>
    <div class="parent">
      <div class="box or" @click="onClick('or')">or</div>
      <div class="box ca" @click="onClick('ca')">ca</div>
      <div class="box mn" @click="onClick('mn')">mn</div>
      <div class="box mo" @click="onClick('mo')">mo</div>
      <div class="box il" @click="onClick('il')">il</div>
      <div class="box ky" @click="onClick('ky')">ky</div>
      <div class="box oh" @click="onClick('oh')">oh</div>
      <div class="box ny" @click="onClick('ny')">ny</div>
      <div class="box ma" @click="onClick('ma')">ma</div>
      <div class="box pa" @click="onClick('pa')">pa</div>
      <div class="box md" @click="onClick('md')">md</div>
      <div class="box ga" @click="onClick('ga')">ga</div>
      <div class="box fl" @click="onClick('fl')">fl</div>
      <div class="space"></div>
    </div>
    <div class="full">
    <Header></Header>
     <div class="info">

      <h3 class="start">現問題・抗議活動・出来事</h3>
      <p class="two">下にある地図は２００６年から現在まで米国で起こった様々の黒人差別問題を紹介しています。

      </p>

      <img class="map" src="~/assets/usmap.png">
      </div>

       <Footer></Footer>
    </div>
    <sample v-if="locationName==='sample'" @onClose="locationName=null"></sample>
    <or v-if="locationName==='or'" @onClose="locationName=null"></or>
    <ca v-if="locationName==='ca'" @onClose="locationName=null"></ca>
    <fl v-if="locationName==='fl'" @onClose="locationName=null"></fl>
    <ky v-if="locationName==='ky'" @onClose="locationName=null"></ky>
    <ny v-if="locationName==='ny'" @onClose="locationName=null"></ny>
    <mn v-if="locationName==='mn'" @onClose="locationName=null"></mn>
    <il v-if="locationName==='il'" @onClose="locationName=null"></il>
    <ga v-if="locationName==='ga'" @onClose="locationName=null"></ga>
    <mo v-if="locationName==='mo'" @onClose="locationName=null"></mo>
    <oh v-if="locationName==='oh'" @onClose="locationName=null"></oh>
    <pa v-if="locationName==='pa'" @onClose="locationName=null"></pa>
    <md v-if="locationName==='md'" @onClose="locationName=null"></md>
  </div>
</template>

<script>
import Header from "~/components/Header"
import Footer from "~/components/Footer"
import sample from "~/components/map/sample"
import or from "~/components/map/or"
import ca from "~/components/map/ca"
import fl from "~/components/map/fl"
import ky from "~/components/map/ky"
import ny from "~/components/map/ny"
import mn from "~/components/map/mn"
import il from "~/components/map/il"
import ga from "~/components/map/ga"
import mo from "~/components/map/mo"
import oh from "~/components/map/oh"
import pa from "~/components/map/pa"
import md from "~/components/map/md"

export default {
  name: "Index",
  components: { Header, Footer, sample, or, ca, fl, ky, ny, mn, il, ga, mo, oh, pa, md},
  data(){
    return{
      locationName:null
    }
  },
  methods:{
    onClick(locationName){
      this.locationName=locationName
    }
  }
}　
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
  .two{
    font-family: "Noto Sans JP";
    width: 83%;
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
    width: 73%;
    margin: 0 auto;
    font-size: 30px;
    border-radius: 3px;
    text-shadow: 0.5px 0.5px #f6d405;
    text-align: center;
    margin-top: 45px;
  }

  .map{
    margin-left: auto;
    margin-right: auto;
    width: 1000px;
    display: block;
  }
  .parent{
    position: relative;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
  .box{
    position:absolute;
    background-color: #4CAF50;
    opacity: 0.2;
    cursor: pointer;
    z-index: 10;
  }
  .or{
    top: 442px;
    left: 40px;
    width: 115px;
    height: 79px;
  }
  .ca{
    top: 526px;
    left: 49px;
    width: 77px;
    height: 215px;
    transform: rotate(-25deg)
  }
  .mn{
    top: 415px;
    left: 530px;
    width: 83px;
    height: 107px;
  }
  .mo{
    top: 621px;
    left: 539px;
    width: 91px;
    height: 80px;
  }
  .il{
    top: 558px;
    left: 633px;
    width: 50px;
    height: 107px;
  }
  .ky{
    top: 617px;
    left: 686px;
    width: 104px;
    height: 55px;
  }
  .oh{
    top: 523px;
    left: 746px;
    width: 63px;
    height: 64px;
  }
  .ny{
    top: 427px;
    left: 810px;
    width: 96px;
    height: 73px;
  }
  .ma{
    top: 424px;
    left: 934px;
    width: 44px;
    height: 15px;
  }
  .pa{
    top: 512px;
    left: 817px;
    width: 84px;
    height: 53px;
  }
  .md{
    top: 585px;
    left: 863px;
    width: 68px;
    height: 55px;
  }
  .ga{
    top: 740px;
    left: 733px;
    width: 81px;
    height: 86px;
  }
  .fl{
    top: 837px;
    left: 720px;
    width: 140px;
    height: 110px;
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
