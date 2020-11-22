<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>Korean War (1950~1953 (the conflict still remains))</b></h6>
      <hr>
      <p class="context">The Republic of Korea and the Democratic Republic of Korea started a war on the Korean Peninsula. The war has become a quagmire, with a large number of deaths, devastation of the town, and many war orphans. On July 27, 1953, the North and South representatives and the Soviet and American representatives met and signed an armistice agreement, which has not yet reached a substantial end of the war.</p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event5.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>