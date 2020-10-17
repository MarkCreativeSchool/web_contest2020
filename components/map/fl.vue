<template>
  <div>
    <div class="layer" v-if="true" @click="onClose"></div>
    <div class="map-content">
      <h6 class="title">フロリダ州</h6>
      <hr>
      <p class="context"><b>トレイボン・マーティン射殺事件</b>
      <br>フロリダ州でランニング中だった17歳の黒人がヒスパニック系自警団院に「怪しい」という理由だけで射殺された。しかし、この自警団員は「無罪」の判決を下された。
      </p>
      <hr>
      <p class="context"><b>女の子殺人事件</b>
      <br>6月に１９歳の女の子のOluwatoyin “Toyin” Salau さんが殺されたニュースが発覚した。6月6日にtwitterで性的暴行を受けた事を明かした。その後、その子が亡くなっていることがわかった。
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