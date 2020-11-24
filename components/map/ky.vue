<template>
  <div>
    <div class="layer" v-if="true" @click="onClose" :class="{isRemove: isRemove===true}">
      <div class="image-wrapper">
        <img class="note" :src="`${prefix}/note.png`">
        <div class="note-content">ブリオナ・テイラー死亡事件</div>
        <div class="note-content-sub">
          <br>ルイスヴィル在住のブリオナ・テイラーが薬物捜査のため彼女の自宅に誤って強制的に侵入した警官に射殺された事件。彼女の死後、ルイスヴィル市は無断の家宅捜査を禁止する“ブリオナ法”を成立させた。しかし、彼女の死に関わった3人の警官はいまだ解雇も、殺人で逮捕も起訴もされていない。この事件がきっかけて、ルイスヴィル市では、無断で家宅捜索を禁止する「ブリオナ法」を制定した。
        </div>
        <div class="year">(ケンタッキー州・2020年)</div>
      </div>
      <div class="map-wrapper">
        <img class="map" :src="`${prefix}/note2.png`">
        <div class="map2-wrapper">
          <img class="map2" :src="`${prefix}/ken.png`">
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
  font-size: 37px;
  font-weight: 700;
  color: black;
  /*background: linear-gradient(transparent 50%, #cd853f 50%);*/
}

.year{
  position: absolute;
  top: 20%;
  left: 45%;
  font-size: 30px;
  font-weight: 600;
  color: black;
}

.note-content-sub{
  position: absolute;
  top: 27%;
  left: 6%;
  margin: 0 auto;
  width: 90%;
  font-size: 23px;
  color: black;
}


</style>
