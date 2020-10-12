<template>
  <div>
    <div class="layer" @click="onClose"></div>
    <div class="map-content">
      <h6 class="title">Maryland</h6>
      <hr>
      <p class="context"><b>Death of Freddie Gray</b>
      <br>In 2015, April 12, Freddie Gray was arrested due to possessing a knife. He was captured by 6 police officers, who held him to the police van while he was protesting. This caused injuries within the spinal cord, and caused Gray to slip into a coma. 3 days after the arrest, Freddie Gray was declared dead. Although the officers were pressed charges for conducted violence and death, the result of the trial ended with the officers declared as “not guilty”.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "md.vue",
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