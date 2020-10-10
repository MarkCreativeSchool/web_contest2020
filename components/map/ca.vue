<template>
  <div>
    <div class="layer" @click="onClose"></div>
    <div class="map-content">
      <h6 class="title">カルフォルニア</h6>
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