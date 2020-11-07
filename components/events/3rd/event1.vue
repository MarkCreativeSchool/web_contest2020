<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>ルイジアナ買収(1803)</b></h6>
      <hr>
      <p class="context">アメリカ合衆国のジェファソン大統領が、フランスのナポレオンから、ミシシッピ側以西からロッキー山脈に及ぶ広大なルイジアナを買収。
      </p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event1.vue",
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
/*  top: calc(50% + 15px);*/
/*  left: 50%;*/
/*  height: 50%;*/
/*  transform: translate(-50%, -50%);*/
/*  width: 990px;*/
/*  background: #ffffff;*/
/*  z-index: 2001;*/
/*  border-radius: 15px;*/
/*  !*border: solid 5px burlywood;*!*/
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
/*  padding-left: 40px;*/
/*  font-size: 20px;*/
/*}*/
/*.event .border .context{*/
/*  position: fixed;*/
/*  top: auto;*/
/*  padding-left: 40px;*/
/*  font-size: 20px;*/
/*  height: 600px;*/
/*  overflow-y: auto;*/
/*  font-weight: normal;*/
/*  text-align: left;*/
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