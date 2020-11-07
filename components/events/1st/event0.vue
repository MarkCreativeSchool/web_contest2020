<template>
  <div class="event">
    <div class="layer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>新大陸の発見</b></h6>
      <hr>
      <p class="context">コロンブスを筆頭に新大陸の探検が始まり、西方に広がる海が発見された。その結果「今、自分たちのいる場所はインドではなく、道の大陸なのではないか」と思う人が出てくるようになった。南米大陸までの探検が続くと「新大陸」であることが確定した。新大陸いは多くの移民が集まり、植民地化していくことになる。
16世紀初め:アメリゴ・ベスプッチ(イタリアの探検家)にちなんで新大陸を「アメリカ」と表記するようになった。
      </p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event0.vue",
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
  top: auto;
  height: 600px;
  overflow-y: auto;
  font-size: 31px;
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