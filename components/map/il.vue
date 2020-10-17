<template>
  <div>
    <div class="layer" v-if="true" @click="onClose"></div>
    <div class="map-content">
      <h6 class="title">イリノイ州</h6>
      <hr>
      <p class="context"><b>市長宅デモ事件</b>
      <br>アメリカのシカゴでデモがありました。デモは市長の家の前で行われ、すぐに警察官が出動しましたが、火炎瓶や、凍ったボトル、石などを投げ、怪我人が出ました。およそ１８人の警察官が負傷したとのことです。また、12人が逮捕されました。抗議者に対し、民間警察説明責任局（COPA）は、警察の不正行為に関して送られた多数の苦情を現在調査中であることを明確にしました。この事件をきっかけに、シカゴでは警察の警備がさらに厳重にされたと報じられている。
      </p>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: "il.vue",
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