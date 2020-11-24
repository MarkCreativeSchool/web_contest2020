<template>
  <div>
    <div class="layer" v-if="true" @click="onClose" :class="{isRemove: isRemove===true}">
      <div class="image-wrapper">
        <img class="note" :src="`${prefix}/note.png`">
        <div class="main-content">
          <div class="note-content">Shooting of Sean Bell</div>
          <div class="year">(NewYork・2006)</div>
          <div class="note-content-sub">
            <br>On November 25, 2006, a man named Sean Bell (23 years old), was shot by the police a total of 50 times. He was shot after being seen leaving a drug-plagued strip joint with his friends. The police shot due to the fact that they thought they would be armed, for the place itself was full of illegal actions. Although Sean Bell was shot 50 times as well as his friends were critically injured, the police were fired, but ended in being not guilty.
          </div>
          <div class="note-content2">Killing of Eric Garner</div>
          <div class="year2">(NewYork・2014)</div>
          <div class="note-content-sub2">
            <br>In 2014, July 17, Eric Garner, was seized by the police after he was found to be illegally selling loose cigarettes. However, the officer did not end there, and instead, held Garner down in a chokehold, that led to his death. During this time, Garner repeated the phrase “I can’t breathe” 11 times, which is now being brought up once again with George Floyd’s death. Although the officer, Daniel Pantaleo was fired, he was acquitted from this crime.
          </div>
        </div>
      </div>
      <div class="map-wrapper">
        <img class="map" :src="`${prefix}/note2.png`">
        <div class="map2-wrapper">
          <img class="map2" :src="`${prefix}/nyu.png`">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from "~/mixins/mixin";
export default {
  name: "ny.vue",
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
  padding-left: 60%;
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
  padding-left: 10%;
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
