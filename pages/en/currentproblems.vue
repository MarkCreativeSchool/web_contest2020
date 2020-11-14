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
    <Headereng></Headereng>
     <div class="info">

      <h3 class="start">Current Issues</h3>
      <p class="two">We have compiled/summarized some issues/protests regarding racism against black people on the US map below. However, this is not the full list, and there are several problems, issues, and protests that are not mentioned below. 

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
import Headereng from "~/components/Headereng"
import Footer from "~/components/Footer"
import sample from "~/components/map/sample"
import or from "~/components/map_eng/or"
import ca from "~/components/map_eng/ca"
import fl from "~/components/map_eng/fl"
import ky from "~/components/map_eng/ky"
import ny from "~/components/map_eng/ny"
import mn from "~/components/map_eng/mn"
import il from "~/components/map_eng/il"
import ga from "~/components/map_eng/ga"
import mo from "~/components/map_eng/mo"
import oh from "~/components/map_eng/oh"
import pa from "~/components/map_eng/pa"
import md from "~/components/map_eng/md"

export default {
  name: "Index",
  components: { Headereng, Footer, sample, or, ca, fl, ky, ny, mn, il, ga, mo, oh, pa, md},
  head() {
    return {
      title: "Current Problems-Introducing Racism for High School Students by High School Students-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "An outline of events from 2006 to present are represented in the US map. By clicking on the yellow colored states, the event that occur will pop up. Furthemore, an explanation of how these events influence people's awareness of discrimination is written below." }
      ]
    }
  },
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
    /* text-shadow: 0.5px 0.5px #f6d405; */
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
    /* text-shadow: 0.5px 0.5px #f6d405; */
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
    /* background-color: #4CAF50; */
    opacity: 0;
    cursor: pointer;
    z-index: 10;
  }
  .or{
    top: 470px;
    left: 40px;
    width: 115px;
    height: 79px;
  }
  .ca{
    top: 545px;
    left: 35px;
    width: 77px;
    height: 215px;
    transform: rotate(-25deg)
  }
  .mn{
    top: 450px;
    left: 530px;
    width: 83px;
    height: 107px;
  }
  .mo{
    top: 650px;
    left: 539px;
    width: 91px;
    height: 80px;
  }
  .il{
    top: 580px;
    left: 633px;
    width: 50px;
    height: 107px;
  }
  .ky{
    top: 640px;
    left: 686px;
    width: 104px;
    height: 55px;
  }
  .oh{
    top: 550px;
    left: 746px;
    width: 63px;
    height: 64px;
  }
  .ny{
    top: 460px;
    left: 810px;
    width: 96px;
    height: 73px;
  }
  .ma{
    top: 450px;
    left: 934px;
    width: 44px;
    height: 15px;
  }
  .pa{
    top: 540px;
    left: 817px;
    width: 84px;
    height: 53px;
  }
  .md{
    top: 600px;
    left: 863px;
    width: 68px;
    height: 55px;
  }
  .ga{
    top: 765px;
    left: 733px;
    width: 81px;
    height: 86px;
  }
  .fl{
    top: 865px;
    left: 720px;
    width: 140px;
    height: 110px;
  }

</style>
