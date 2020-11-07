<template>
  <div>
    <div class="layer" v-if="true" @click="onClose" :class="{isRemove: isRemove===true}">
      <div class="image-wrapper">
        <img class="note" src="~/assets/note.png">
        <div class="note-content">マイケル・ブラウン射殺事件</div>
        <div class="note-content-sub">
          <br>正午過ぎ、マイケル・ブラウンは友人と一緒にコンビニエンスストアから帰宅する途中、一人の警察官と言い合いになった。ブラウンは激しく抵抗し、銃を奪おうとするなどして揉み合いとなり、警察官が制するよう命じると警察官へ向けて突進したため、警察は発砲し、ブラウンは現場で死亡した。警察官は不起訴となった。
        </div>
        <div class="year">(ミズーリ州・2014年)</div>
      </div>
      <div class="map-wrapper">
        <img class="map" src="~/assets/note2.png">
        <div class="map2-wrapper">
          <img class="map2" src="~/assets/mizu.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mn.vue",
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
  font-size: 50px;
  font-weight: 700;
  color: black;
  /*background: linear-gradient(transparent 50%, #cd853f 50%);*/
}

.year{
  position: absolute;
  top: 22%;
  left: 45%;
  font-size: 30px;
  font-weight: 600;
  color: black;
}

.note-content-sub{
  position: absolute;
  top: 31%;
  left: 6%;
  margin: 0 auto;
  width: 90%;
  font-size: 23px;
  color: black;
}


</style>
