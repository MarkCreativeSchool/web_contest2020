<template>
  <div class="event">
    <div class="layer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>タウンゼンド諸法(1767年)</b></h6>
      <hr>
      <p class="context">課税を目的とした5つの法令をまとめたもの。ガラスや鉛にも課税された。これに対し植民地側は本国製品輸入協定で対抗。またドーターズ＝オブ＝リヴァティーの女性達はアメリカ製品愛用運動に立ち上がった。このように、反対運動が激化し、1770年に撤廃されることになる。
      </p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event6.vue",
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
  font-size: 35px;
  height: 600px;
  overflow-y: auto;
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