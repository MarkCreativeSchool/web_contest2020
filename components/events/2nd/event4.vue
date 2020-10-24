<template>
  <div class="event">
    <div class="layer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>アメリカ独立宣言(1776年7月)</b></h6>
      <hr>
      <p class="context">トマス=ジェファソンが原案を起草しアメリカの自由・平等など基本的人権を認め、イギリスに対抗する革命権を認めることを宣言。
      <br>[理念]
      <br>1.基本的人権
      　<br>全ての人は平等で、生命や自由、幸福追求の権利をもつ
      <br>2.革命権
      　<br>シエフによる権利の不当な行使に対して人民が対抗する権利をもつ
      <br>3.人民主権
      　<br>国を統治する権力の源泉は国民にある
      <br>→しかし、人権は黒人に適用されず、奴隷制は残り続けた

      </p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event4.vue",
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
  font-size: 20px;
  font-weight: normal;
  left: 30px;
  text-align: left;
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