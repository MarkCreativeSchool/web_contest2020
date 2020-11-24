<template>
  <div>
    <div class="layer" v-if="true" @click="onClose" :class="{isRemove: isRemove===true}">
      <div class="image-wrapper">
        <img class="note" :src="`${prefix}/note.png`">
        <div class="note-content">フレディ・グレイ死亡事件</div>
        <div class="note-content-sub">
          <br>警察車両をみて逃走したフレディ・グレイは拘束された際、車両の後部座席で脊髄を骨折。搬送されたた後死亡が確認された。警察官6人が起訴され、第2級暴行罪や過失致死などの罪に問われていたが、これまでに裁判で3人が無罪判決を言い渡されていた。検察は、残る3人についても同じ結果になる可能性が高いとして起訴を取り下げた。
        </div>
        <div class="year">(メリーランド州・2015年)</div>
      </div>
      <div class="map-wrapper">
        <img class="map" :src="`${prefix}/note2.png`">
        <div class="map2-wrapper">
          <img class="map2" :src="`${prefix}/meri.png`">
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
