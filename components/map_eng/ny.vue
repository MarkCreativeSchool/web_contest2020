<template>
  <div>
    <div class="layer" @click="onClose"></div>
    <div class="map-content">
      <h6 class="title">New York</h6>
      <hr>
      <p class="context"><b>Shooting of Sean Bell</b>
      <br>On November 25, 2006, a man named Sean Bell (23 years old), was shot by the police a total of 50 times. He was shot after being seen leaving a drug-plagued strip joint with his friends. The police shot due to the fact that they thought they would be armed, for the place itself was full of illegal actions. Although Sean Bell was shot 50 times as well as his friends were critically injured, the police were fired, but ended in being not guilty.
      </p>
      <hr>
      <p class="context"><b>Killing of Eric Garner</b>
      <br>In 2014, July 17, Eric Garner, was seized by the police after he was found to be illegally selling loose cigarettes. However, the officer did not end there, and instead, held Garner down in a chokehold, that led to his death. During this time, Garner repeated the phrase “I can’t breathe” 11 times, which is now being brought up once again with George Floyd’s death. Although the officer, Daniel Pantaleo was fired, he was acquitted from this crime.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ny.vue",
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