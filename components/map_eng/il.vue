<template>
  <div>
    <div class="layer" v-if="true" @click="onClose" :class="{isRemove: isRemove===true}">
      <div class="image-wrapper">
        <img class="note" :src="`${prefix}/note.png`">
        <div class="note-content">Demo Attack in Mayor’s House</div>
        <div class="note-content-sub">
          <br>In Chicago, protesters gathered around the mayor’s house. During this protest, the protesters threw rocks, fireworks, frozen bottles, and other objects to attack officers, which led to 18 officers getting injured. 12 protesters were arrested from this demo. The Civilian Office of Police Accountability (COPA) confirmed that they are currently investigating the numerous complaints that have been sent regarding police misconduct. With this incident, it has been reported that the security level of Chicago increased.
        </div>
        <div class="year">(Illinois・2020)</div>
      </div>
      <div class="map-wrapper">
        <img class="map" :src="`${prefix}/note2.png`">
        <div class="map2-wrapper">
          <img class="map2" :src="`${prefix}/iri.png`">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from "~/mixins/mixin";
export default {
  name: "mn.vue",
  mixins: [ Mixin ],
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

.note-content{
  position: absolute;
  top: 10%;
  text-align: center;
  /* left: 13%; */
  width: 100%;
  /* margin: 0 auto; */
  font-size: 40px;
  font-weight: 700;
  color: black;
  /*background: linear-gradient(transparent 50%, #cd853f 50%);*/
}

.year{
  position: absolute;
  top: 20%;
  left: 65%;
  font-size: 28px;
  font-weight: 600;
  color: black;
}

.note-content-sub{
  position: absolute;
  top: 27%;
  left: 6%;
  margin: 0 auto;
  width: 90%;
  font-size: 22px;
  color: black;
}


</style>
