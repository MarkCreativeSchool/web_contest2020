<template>
  <div>
    <div class="layer" @click="onClose"></div>
    <div class="map-content">
      <h6 class="title">Oregon</h6>
      <hr>
      <p class="context"><b>Tear Gas</b>
      <br>On June 26th, the protesters pulled down the barricades, and caused a fire in the police buildings. In response, the police used tear gas in order to disperse the protesters. The mayor later on banned the use of CR Tear gas in portland. Furthermore, the police made a decision to increase the level of security in Portland.
      </p>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: "or.vue",
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