<template>
  <div>
    <div class="layer" v-if="true" @click="onClose"></div>
    <div class="map-content">
      <h6 class="title">ニューヨーク州</h6>
      <hr>
      <p class="context"><b>ショーン・ベル事件</b>
      <br>２００６年11月25日に丸腰のショーンベルと言う黒人青年（23歳）が警官に50発の銃弾を浴びせ死亡させた事件。麻薬が関わっていると疑われていたビルを出たところで友達とともに打たれた。警官はこの際、凶器をもっていると思いこんでしまった。警官の判決は無罪。
      </p>
      <hr>
      <p class="context"><b>エリック・ガーナー窒息死事件</b>
      <br>ニューヨーク州で脱税を疑われた黒人が警察官に取り押さえられ窒息しさせられる。警察官は不起訴。
      </p>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: "ny.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>
@keyframes fadeIn{
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
.layer{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  z-index: 1000;
  animation-name: fadeIn;
  animation-duration: 0.5s;
  animation-timing-function: linear;
}
.map-content{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  background: #ffffff;
  z-index: 1001;
  border-radius: 15px;
  border: solid 5px burlywood;
}
.context{
  font-size: 30px;
}

.title{
  position: relative;
  top: 20px;
  font-size: 50px;
}
</style>