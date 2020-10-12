<template>
  <div>
    <div class="layer" @click="onClose"></div>
    <div class="map-content">
      <h6 class="title">Missouri</h6>
      <hr>
      <p class="context"><b>Shooting of Michael Brown</b>
      <br>In 2014, August 9th, an 18 year boy named Michael Brown was shot by the police 6 times after he had a quarrel with the police officer due to allegations of him being a suspect of robbery. The police officer however, has been declared acquitted.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "mo.vue",
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