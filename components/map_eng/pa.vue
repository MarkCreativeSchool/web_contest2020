<template>
  <div>
    <div class="layer" @click="onClose"></div>
    <div class="map-content">
      <h6 class="title">Pennsylvania</h6>
      <hr>
      <p class="context"><b>Shooting of Antwon Rose Jr.</b>
      <br>In 2018, June 19, Antwon Rose Jr. (17 years old) was shot after trying to escape from a false accusation made by an office (*needs source). He was riding in the passenger seat of the car that was apparently seen near a shooting that had just occurred that day, and was stopped by the police. The officer shot him 3 times and Antwon was declared dead. The officer was acquitted for all charges.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "pa.vue",
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