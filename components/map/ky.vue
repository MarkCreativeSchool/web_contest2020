<template>
  <div>
    <div class="layer" @click="onClose"></div>
    <div class="map-content">
      <h6 class="title">ケンタッキー州</h6>
      <hr>
      <p class="context"><b>ブリオナ・テイラー死亡事件</b>
      <br>ルイスヴィル在住のブリオナ・テイラーが薬物捜査のため彼女の自宅に誤って強制的に侵入した警官に射殺された事件。彼女の死後、ルイスヴィル市は無断の家宅捜査を禁止する“ブリオナ法”を成立させた。しかし、彼女の死に関わった3人の警官はいまだ解雇も、殺人で逮捕も起訴もされていない。この事件がきっかけて、ルイスヴィル市では、無断で家宅捜索を禁止する「ブリオナ法」を制定した。
      </p>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: "ky.vue",
  methods: {
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>
.layer{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 1000;
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