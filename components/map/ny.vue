<template>
  <div>
    <div class="layer" v-if="true" @click="onClose" :class="{isRemove: isRemove===true}">
      <div class="image-wrapper">
        <img class="note" src="~/assets/note.png">
        <div class="main-content">
          <div class="note-content">ショーン・ベル事件</div>
          <div class="year">(ニューヨーク州・2006年)</div>
          <div class="note-content-sub">
            <br>2006年11月25日に丸腰のショーンベルと言う黒人青年（23歳）が警官に50発の銃弾を浴びせ死亡させた事件。麻薬が関わっていると疑われていたビルを出たところで友達とともに打たれた。警官はこの際、凶器をもっていると思いこんでしまった。警官の判決は無罪。
          </div>
          <div class="note-content2">エリック・ガーナー窒息死事件</div>
          <div class="year2">(ニューヨーク州・2014年)</div>
          <div class="note-content-sub2">
            <br>ニューヨーク州で脱税を疑われた黒人が警察官に取り押さえられ窒息しさせられる。警察官は不起訴。
          </div>
        </div>
      </div>
      <div class="map-wrapper">
        <img class="map" src="~/assets/note2.png">
        <div class="map2-wrapper">
          <img class="map2" src="~/assets/nyu.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ny.vue",
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
  padding-left: 7%;
  left: 7%;
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
  padding-left: 40%;
  font-size: 30px;
  font-weight: 600;
  color: black;
}

.note-content-sub{
  padding-top: 0%;
  margin: 0 auto;
  width: 90%;
  font-size: 23px;
  color: black;
}
.note-content2{
  /* position: absolute; */
  padding-top: 3%;
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
  padding-left: 40%;
  font-size: 30px;
  font-weight: 600;
  color: black;
}

.note-content-sub2{
  /* position: absolute; */
  padding-top: 0%;
  margin: 0 auto;
  width: 90%;
  font-size: 23px;
  color: black;
}

</style>