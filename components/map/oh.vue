<template>
  <div>
    <div class="layer" @click="onClose"></div>
    <div class="map-content">
      <h6 class="title">オハイオ州</h6>
      <hr>
      <p class="context"><b>ジョンクロフォードIII射殺事件</b>
      <br>ジョンクロフォードさんという22歳が警察官に射殺された事件についてです。Walmartというショッピングマーケットで窃盗の疑いだけだったのにもかかわらず警官が銃を発砲し結果ジョンクロフォードさんは亡くなってしまいました。
      </p>
      <hr>
      <p class="context"><b>タミル・ライス事件</b>
      <br>オハイオ州で模造銃を持っていた12歳の黒人の少年を警察官が発砲し死亡した事件。誰彼かまわず銃口をむけている」と通報があり、その結果警察官に撃たれて死亡してしまった。
      </p>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: "oh.vue",
  methods:{
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