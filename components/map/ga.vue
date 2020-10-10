<template>
  <div>
    <div class="layer" @click="onClose"></div>
    <div class="map-content">
      <h6 class="title">ジョージア州</h6>
      <hr>
      <p class="context"><b>アマード・アベリー死亡事件</b>
      <br>ジョギングしてた黒人男性のアマード・アベリーが白人親子に殺害される事件。しかし、事件後に親子は釈放されている。容疑者は、近所で発生した強盗事件の犯人だと思ったと主張している。
      </p>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: "ga.vue",
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