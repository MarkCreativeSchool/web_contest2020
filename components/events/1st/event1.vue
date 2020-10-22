<template>
  <div class="event">
    <div class="layer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>2-1: 奴隷輸入</b></h6>
      <hr>
      <p class="context">アフリカから黒人奴隷を載せた船が始めてイギリス領アメリカに到着。黒人奴隷たちは、過酷な労働を強いられた。その後、イギリスによる三角貿易によって黒人奴隷の輸入は広がっていった。
      </p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event1.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>
.event .border{
  position: fixed;
  top: 50%;
  left: 50%;
  height: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  background: #ffffff;
  z-index: 2001;
  border-radius: 15px;
  border: solid 5px burlywood;
}
.event .border .xButton{
  position: fixed;
  right: 20px;
  top: -5px;
  font-size: 40px;
  cursor: pointer;
  font-family: "Comic Sans MS";
  font-weight: bold;
}
.event .border .title{
  position: relative;
  top: 20px;
  font-size: 50px;
}
.event .border .context{
  position: fixed;
  top: 35%;
  font-size: 40px;
  font-weight: normal;
  text-align: center;
}
.event .layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2000;
  opacity: 0.2;
}
</style>