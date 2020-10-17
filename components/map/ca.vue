
<template>
    <div>
      <div class="layer" v-if="true" @click="onClose"></div>
      <div class="map-content">
        <h6 class="title">カリフォルニア州</h6>
        <hr>
        <p class="context"><b>オスカー・グラント事件</b>
        <br>サンフランシスコとベイエリアの各地をつなぐ公営高速鉄道システムの駅内で喧嘩をしていたと通報を受けた鉄道警察官らに電車から降ろされ、押さえつけられた状態で撃たれ死亡した事件。
        </p>
      </div>
    </div>
</template>

<script>
export default {
  name: "ca.vue",
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
  width: 1000px;
  transform: translate(-50%, -50%);
  background: #ffffff;
  z-index: 1001;
  border-radius: 8px;
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

