<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>七年戦争(1756年~1763年)</b></h6>
      <hr>
      <p class="context">オーストリアで起こった戦争であり、後にアメリカ・インド・アフリカなど世界を巻き込む戦争へと発展していった。七年戦争へと参戦することになったアメリカの中で、アメリカを舞台として起こった戦争をフレンチ・インディアン戦争(イギリス VS フランス)と呼ぶ。フレンチ・インディアン戦争で勝利したイギリスは、アメリカの植民地に対して過酷な重税をかけることになる。
      </p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event3.vue",
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
/*  height: 600px;*/
/*  overflow-y: auto;*/
/*  font-size: 30px;*/
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