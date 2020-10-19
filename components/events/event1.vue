<template>
  <div class="event">
    <div class="layer" @click="onClose"></div>
    <div class="title">
      <h6>イベント1</h6>
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
.event .title{
  position: fixed;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  z-index: 2001;
  color: #fff;
}
.event .layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2000;
  background-color: orangered;
  opacity: 0.2;
}
</style>