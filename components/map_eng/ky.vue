<template>
  <div>
    <div class="layer" @click="onClose"></div>
    <div class="map-content">
      <h6 class="title">Kentucky</h6>
      <hr>
      <p class="context"><b>Shooting of Breonna Taylor</b>
      <br>On March 13, 2020, Breonna Taylor (26 years old) was fatally shot by the police after the police intruded her and her boyfriend’s house after being accused of drug possession. Breonna’s boyfriend thought this act was trespassing, and shot the police, and in response, the police shot Breonna. The trial ended with Breonna’s boyfriend (Kenneth Walker) being pressed charges of shooting, but the officer was acquitted from his crime.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ky.vue",
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