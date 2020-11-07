<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>ハイチ独立の影響(1804年)</b></h6>
      <hr>
      <p class="context">ナポレオンはハイチを砂糖生産に特化させ、そこで必要な穀物をルイジアナを補完するという、メキシコ湾をまたいだ植民地帝国建設を計画していたが、1798年にハイチ独立運動が激化し、計画は破錠した。ナポレオンは、ハイチ独立運動の激化中にルイジアナを手放すことを決めた。(1804年にハイチの黒人革命は成功し、黒人最初の共和国が誕生した。)
      </p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event2.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>
/*.event .border{*/
/*  position: fixed;*/
/*  top: 50%;*/
/*  left: 50%;*/
/*  height: 50%;*/
/*  transform: translate(-50%, -50%);*/
/*  width: 1000px;*/
/*  background: #ffffff;*/
/*  z-index: 2001;*/
/*  border-radius: 15px;*/
/*  border: solid 5px burlywood;*/
/*}*/
/*.event .border .xButton{*/
/*  position: fixed;*/
/*  right: 20px;*/
/*  top: -5px;*/
/*  font-size: 40px;*/
/*  cursor: pointer;*/
/*  font-family: "Comic Sans MS";*/
/*  font-weight: bold;*/
/*}*/
/*.event .border .title{*/
/*  position: relative;*/
/*  top: 20px;*/
/*  font-size: 50px;*/
/*}*/
/*.event .border .context{*/
/*  position: fixed;*/
/*  top: auto;*/
/*  font-size: 20px;*/
/*  height: 600px;*/
/*  overflow-y: auto;*/
/*  font-weight: normal;*/
/*  text-align: center;*/
/*}*/
/*.event .layer {*/
/*  position: fixed;*/
/*  top: 0;*/
/*  left: 0;*/
/*  width: 100%;*/
/*  height: 100vh;*/
/*  z-index: 2000;*/
/*  opacity: 0.2;*/
/*}*/
</style>