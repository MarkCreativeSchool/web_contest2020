<template>
  <div>
    <div class="layer" @click="onClose"></div>
    <div class="map-content">
      <h6 class="title">Illinois</h6>
      <hr>
      <p class="context"><b>Demo Attack in Mayor’s House</b>
      <br>In Chicago, protesters gathered around the mayor’s house. During this protest, the protesters threw rocks, fireworks, frozen bottles, and other objects to attack officers, which led to 18 officers getting injured. 12 protesters were arrested from this demo. The Civilian Office of Police Accountability (COPA) confirmed that they are currently investigating the numerous complaints that have been sent regarding police misconduct. With this incident, it has been reported that the security level of Chicago increased.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "il.vue",
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