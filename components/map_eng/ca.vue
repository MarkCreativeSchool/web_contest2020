<template>
  <div>
    <div class="layer" v-if="true" @click="onClose" :class="{isRemove: isRemove===true}">
      <div class="image-wrapper">
        <img class="note" src="~/assets/note.png">
        <div class="note-content">Shooting of Oscar Grant</div>
        <div class="note-content-sub">
          <br>On January 1, 2009, Oscar Grant, a 22 year old man, was murdered at a subway station. He was detained along with approximately 20 passengers that were involved in a fight in the train. Although he was not involved in the fight, he was near the location the fight took place and was captured. While trying to confront the officer, he was backed against the wall and was handcuffed, and later murdered. 
        </div>
        <div class="year">(California・2009)</div>
      </div>
      <div class="map-wrapper">
        <img class="map" src="~/assets/note2.png">
        <div class="map2-wrapper">
          <img class="map2" src="~/assets/kari.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ca.vue",
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
  top: 4%;
  left: 10%;
  width: 700px;
  height: 550px;
  z-index: 1;
}

.map-wrapper{
  position: absolute;
  top: 10%;
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

.note-content{
  position: absolute;
  top: 10%;
  left: 10%;
  width: 90%;
  margin: 0 auto;
  font-size: 45px;
  font-weight: 700;
  color: black;
  /*background: linear-gradient(transparent 50%, #cd853f 50%);*/
}

.year{
  position: absolute;
  top: 23%;
  left: 60%;
  font-size: 25px;
  font-weight: 600;
  color: black;
}

.note-content-sub{
  position: absolute;
  top: 30%;
  left: 6%;
  margin: 0 auto;
  width: 90%;
  font-size: 22px;
  color: black;
}


</style>
