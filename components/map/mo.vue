<template>
  <div>
    <div class="layer" @click="onClose"></div>
    <div class="map-content">
      <h6 class="title">ミズリーリ州</h6>
      <hr>
      <p class="context"><b>マイケル・ブラウン射殺事件</b>
      <br>ミズーリ州ファーガソンで18歳の黒人の少年が警察官と口論になり射殺された。警察官は「不起訴」
      </p>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: "mo.vue",
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