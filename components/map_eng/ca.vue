<template>
  <div>
    <div class="layer" @click="onClose"></div>
    <div class="map-content">
      <h6 class="title">California</h6>
      <hr>
      <p class="context"><b>Shooting of Oscar Grant</b>
      <br>On January 1, 2009, Oscar Grant, a 22 year old man, was murdered at a subway station. He was detained along with approximately 20 passengers that were involved in a fight in the train. Although he was not involved in the fight, he was near the location the fight took place and was captured. While trying to confront the officer, he was backed against the wall and was handcuffed, and later murdered.
      </p>
      <br>
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