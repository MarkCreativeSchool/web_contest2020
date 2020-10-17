<template>
  <div>
    <div class="layer" v-if="true" @click="onClose"></div>
    <div class="map-content">
      <h6 class="title">ミネソタ州</h6>
      <hr>
      <p class="context"><b>フィランド・カスティール死亡事件</b>
      <br>自動車の後部のライトが壊れていたため、警官に呼び止められ撃たれて死亡した事件。警察の命令に従い車を停めたカスティールさんは、自分は銃を隠し持つ許可を受けており今も銃を携帯していると警官に告げた。その上で、免許証を取ろうと手を伸ばしたところで、警官に撃たれた。
      </p>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: "mn.vue",
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