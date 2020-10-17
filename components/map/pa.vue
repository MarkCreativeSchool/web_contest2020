<template>
  <div>
    <div class="layer" v-if="true" @click="onClose"></div>
    <div class="map-content">
      <h6 class="title">ペンシルベニア州</h6>
      <hr>
      <p class="context"><b>アントワン・ローズ・ジュニア死亡事件</b>
      <br>優秀な学生だったアントワン・ローズ・ジュニアは、背後から頬と肘を撃たれ死亡した。その翌日、イースト・ピッツバーグ警察署にはたくさんの黒人の若者が押し寄せた。容疑者は銃のようなものを所持していたと主張している。
      </p>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: "pa.vue",
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