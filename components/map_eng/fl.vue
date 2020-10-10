<template>
  <div>
    <div class="layer" @click="onClose"></div>
    <div class="map-content">
      <h6 class="title">Florida</h6>
      <hr>
      <p class="context"><b>Shooting of Trayvon Martin</b>
      <br>On February 26, 2012, an African-American boy who was 17 year old at the time was shot by a Hispanic neighborhood watch captain because he thought he was “suspicious.” However, this lawsuit ended with the watch captain (George Zimmerman) being declared as “not guilty/innocent”. This event started the “Blacks lives Matter” movement, which will be explained more in the organizations page.
      </p>
      <hr>
      <p class="context"><b>Death of Oluwatoyin Salau</b>
      <br>2020 June (Florida): In June women named Oluwatoyin “Toyin” Salau who was 19 years old who passed away. There is some news that she was murdered but the policies are not sure what happened to her. On June 6th it was revealed that she was sextually assaulted.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "fl.vue",
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