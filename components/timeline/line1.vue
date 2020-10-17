<template>
  <div>
    <div class="layer" @click="onClose"></div>
    <div class="test">
      <div class="linebar"></div>
      <div class="year">
        <h6>1619</h6>
        <h6>1774</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "line1.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>
.test{
  position: fixed;
  top: 50%;
  left: 50%;
  height: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  background: #ffffff;
  z-index: 1001;
  border-radius: 15px;
  border: solid 5px burlywood;
}
.test .linebar{
  position: relative;
  top: calc(50% - 20px);
  width: 90%;
  margin: 0 auto;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
.year{
  display: flex;
  align-content: space-between;
  width: 100%;
  text-align: center;
}
.year h6{
  flex: 1;
  font-size:17px;
  font-weight: bold;
}
.layer{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  background-color: #41b883;
  opacity: 0.2;
  z-index: 1000;
}
</style>