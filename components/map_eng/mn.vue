<template>
  <div>
    <div class="layer" @click="onClose"></div>
    <div class="map-content">
      <h6 class="title">Minnesota</h6>
      <hr>
      <p class="context"><b>Philando Castile Death</b>
      <br>On July 6, 2016, Philando Castile was shot by the police after being stopped by the police. Castile was driving the car while he was stopped by the police due to his backlight being off. He followed the orders and told the police that he was armed, and was trained to do so in case the police attacked him. He then turned around to show his driver’s license in which the police officer mistakenly thought he was going to get out his gun and ultimately shot him.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "mn.vue",
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