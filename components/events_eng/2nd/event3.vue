<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>Common Sense by Thomas Paine(1776 January)</b></h6>
      <hr>
      <p class="context">Thomas Paine stated that it is common sense to seek independence from Britain, which is violating people’s freedom and rights. This sparked a major driving force amongst citizens to reach independence.</p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event3.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>