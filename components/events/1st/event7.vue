<template>
  <div class="event">
    <div class="layer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>ボストン茶会事件(1773年)</b></h6>
      <hr>
      <p class="context">1773年に茶法制定が制定される。茶法とはイギリスが植民地の茶市場を独占しようとするもの。茶法制定の結果、アメリカ植民地側は不満を持ち、ボストン港に入港したイギリス船から茶葉を海に投げ捨てるという事件が起こる。イギリスはボストン港を閉鎖し、マサチューセッツ植民地の自治を制限するなど厳しく対応した。
      </p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event7.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>
.event .border{
  position: fixed;
  top: 50%;
  left: 50%;
  height: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  background: #ffffff;
  z-index: 2001;
  border-radius: 15px;
  border: solid 5px burlywood;
}
.event .border .xButton{
  position: fixed;
  right: 20px;
  top: -5px;
  font-size: 40px;
  cursor: pointer;
  font-family: "Comic Sans MS";
  font-weight: bold;
}
.event .border .title{
  position: relative;
  top: 20px;
  font-size: 50px;
}
.event .border .context{
  position: fixed;
  top: auto;
  height: 600px;
  overflow-y: auto;
  font-size: 35px;
  font-weight: normal;
  text-align: center;
}
.event .layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2000;
  opacity: 0.2;
}
</style>