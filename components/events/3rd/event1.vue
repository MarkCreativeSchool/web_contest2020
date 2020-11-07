<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>ルイジアナ買収(1803)</b></h6>
      <hr>
      <p class="context">アメリカ合衆国のジェファソン大統領が、フランスのナポレオンから、ミシシッピ側以西からロッキー山脈に及ぶ広大なルイジアナを買収。
      </p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event1.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>
</style>