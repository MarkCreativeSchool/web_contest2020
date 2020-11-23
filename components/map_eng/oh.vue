<template>
  <div>
    <div class="layer" v-if="true" @click="onClose" :class="{isRemove: isRemove===true}">
      <div class="image-wrapper">
        <img class="note" src="~/assets/note.png">
        <div class="main-content">
          <div class="note-content">Shooting of John Crawford III</div>
          <div class="year">(Ohio・2014)</div>
          <div class="note-content-sub">
            <br>In 2013, August 5, John Crawford III (22 years old) was shot by the police after attempting to steal at Walmart. The police officer,  Sean Williams was pressed with no charges.
          </div>
          <div class="note-content2">Shooting of Tamir Rice</div>
          <div class="year2">(Ohio・2014)</div>
          <div class="note-content-sub2">
            <br>On November 22, 2014, a 12 year old boy named Tamir Rice was shot after he was mistakenly perceived by the police to have been holding a gun (in reality, it was a toy gun). The 3 officers have been pressed charges and fired, while the fourth office is still being investigated.
          </div>
        </div>
      </div>
      <div class="map-wrapper">
        <img class="map" src="~/assets/note2.png">
        <div class="map2-wrapper">
          <img class="map2" src="~/assets/oha.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "oh.vue",
  data(){
    return{
      isRemove: false
    }
  },
  methods:{
    onClose(){
      // this.$emit("onClose")
      this.isRemove= true
      setTimeout(() => {
        this.$emit("onClose")
      }, 500)
    }
  }
}
</script>

<style scoped>
*{
  font-family: Rockwell, "Courier New", Courier, Georgia,
                 Times, "Times New Roman", serif;
}
@keyframes fadeIn{
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

@keyframes fadeOut{
  0% {
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
.layer{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
  background: rgba(0,0,0,0.9);
  z-index: 1000;
  animation-name: fadeIn;
  animation-duration: 0.5s;
  animation-timing-function: linear;
}

.layer.isRemove{
  animation-name: fadeOut;
  animation-duration: 0.5s;
  animation-timing-function: linear;
}


.image-wrapper{
  position: relative;
  top: 10%;
  left: 10%;
  width: 700px;
  height: 550px;
  z-index: 1;
}

.map-wrapper{
  position: absolute;
  top: 15%;
  right: 8%;
  width: 500px;
  height: 500px;
  z-index: 0;
  transform: rotate(10deg);
}

.map2-wrapper{
  position: absolute;
  top: 10%;
  right: 0%;
  width: 500px;
  height: 350px;
  transform: rotate(-10deg);
}

.image-wrapper img{
  width: 100%;
  height:100%;
  border-radius: 10px;
}

.map-wrapper img{
  width: 100%;
  height:100%;
}

.map2-wrapper img{
  width: 100%;
  height: 100%;
}

.main-content{
  position: absolute;
  height: 500px;
  width: 100%;
  top: 0;
  left: 0;
  overflow-y: scroll;
}

.note-content{
  /* position: absolute; */
  padding-top: 10%;
  padding-left: 10%;
  width: 90%;
  margin: 0 auto;
  font-size: 37px;
  font-weight: 700;
  color: black;
  /*background: linear-gradient(transparent 50%, #cd853f 50%);*/
}

.year{
  /* position: absolute; */
  padding-top: 0%;
  padding-left: 60%;
  font-size: 27px;
  font-weight: 600;
  color: black;
}

.note-content-sub{
  padding-top: 0%;
  margin: 0 auto;
  width: 90%;
  font-size: 20px;
  color: black;
}
.note-content2{
  /* position: absolute; */
  padding-top: 3%;
  padding-left: 15%;
  width: 90%;
  margin: 0 auto;
  font-size: 37px;
  font-weight: 700;
  color: black;
  /*background: linear-gradient(transparent 50%, #cd853f 50%);*/
}

.year2{
  /* position: absolute; */
  padding-top: 0%;
  padding-left: 60%;
  font-size: 27px;
  font-weight: 600;
  color: black;
}

.note-content-sub2{
  /* position: absolute; */
  padding-top: 0%;
  margin: 0 auto;
  width: 90%;
  font-size: 20px;
  color: black;
}
</style>