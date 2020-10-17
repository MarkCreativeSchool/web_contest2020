<template>
  <div>
    <div class="layer" v-if="true" @click="onClose"></div>
    <div class="map-content">
      <h6 class="title">オレゴン州</h6>
      <hr>
      <p class="context"><b>催涙ガス</b>
      <br>六月二十六日にアメリカのポートランドで他の反対運動と比べ非常的に暴力的な黒人差別反対運動がありました。抗議者側は警察の管区に火をつけました。警察側はこの事に対し、催涙ガスを使い抗議者を解散させました。これによって、視聴はポートランドでの催涙ガスの使用を禁じました。また、警察側もセキュリティレベルを上げることを決定しました。
      </p>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: "or.vue",
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