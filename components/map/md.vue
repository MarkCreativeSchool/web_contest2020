<template>
  <div>
    <div class="layer" v-if="true" @click="onClose"></div>
    <div class="map-content">
      <h6 class="title">メリーランド州</h6>
      <hr>
      <p class="context"><b>フレディ・グレイ死亡事件</b>
      <br>警察車両をみて逃走したフレディ・グレイは拘束された際、車両の後部座席で脊髄を骨折。搬送されたた後死亡が確認された。警察官6人が起訴され、第2級暴行罪や過失致死などの罪に問われていたが、これまでに裁判で3人が無罪判決を言い渡されていた。検察は、残る3人についても同じ結果になる可能性が高いとして起訴を取り下げた。
      </p>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: "md.vue",
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