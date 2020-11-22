<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>The Outbreak of the Pacific War (1941)</b></h6>
      <hr>
      <p class="context">In December 1941, Japan launched a surprise attack on the islands of the European colonies in the United States and the Pacific Ocean. With this, United States immediately declared war on Japan. Britain agreed to the declaration of war against Japan, and the Axis powers of Europe immediately declared war on the United States in accordance with the alliance with Japan, and the Pacific War began.</p>
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