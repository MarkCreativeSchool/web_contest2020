<template>
  <div>
    <div class="layer" @click="onClose"></div>
    <div class="map-content">
      <h6 class="title">Ohio</h6>
      <hr>
      <p class="context"><b>Shooting of John Crawford III</b>
      <br>In 2013, August 5, John Crawford III (22 years old) was shot by the police after attempting to steal at Walmart. The police officer,  Sean Williams was pressed with no charges.
      </p>
      <hr>
      <p class="context"><b>Shooting of Tamir Rice</b>
      <br>On November 22, 2014, a 12 year old boy named Tamir Rice was shot after he was mistakenly perceived by the police to have been holding a gun (in reality, it was a toy gun). The 3 officers have been pressed charges and fired, while the fourth office is still being investigated.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "oh.vue",
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