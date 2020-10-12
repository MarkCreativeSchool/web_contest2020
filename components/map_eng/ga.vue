<template>
  <div>
    <div class="layer" @click="onClose"></div>
    <div class="map-content">
      <h6 class="title">Georgia</h6>
      <hr>
      <p class="context"><b>Shooting of Ahmaud Arbery</b>
      <br>Ahmaud Arbery (24 years old) was murdered by Gregory McMichael (64 years old) and Travis McMichael (34 years old) on February 23, 2020. According to the police, Gregory and Travis (parents and child) thought that Arbery had caused the robbery that occurred near their house, and was running away. With no evidence, they fatally shot Arbery. They were acquitted from their crime, which caused protests amongst the citizens.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ga.vue",
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