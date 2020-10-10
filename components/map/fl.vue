<template>
  <div>
    <div class="layer" @click="onClose"></div>
    <div class="map-content">
      <h6 class="title">フロリダ</h6>
      <hr>
      <p class="context"><b>トレイボン・マーティン射殺事件</b>
      <br>フロリダ州でランニング中だった17歳の黒人がヒスパニック系自警団院に「怪しい」という理由だけで射殺された。しかし、この自警団員は「無罪」の判決を下された。
      </p>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: "fl.vue",
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