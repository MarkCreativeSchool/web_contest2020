<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>第二回大陸会議(1775年5月)</b></h6>
      <hr>
      <p class="context">フィラデルフィアで開催された第二回大陸会議では、ワシントンを総司令官として、13の植民地の団結力を高め、イギリス本国と戦い独立を勝ち取ろうとした。
      </p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event2.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>
</style>