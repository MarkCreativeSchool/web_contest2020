<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>Kansas-Nebraska Act(1854)</b></h6>
      <hr>
      <p class="context">In 1854, the Kansas-Nebraska Act was passed that allowed the citizens of the two states to elect whether they allow slavery or not within their state. As a result, the Bleeding Kansas war occurred in the Kansas as well as the neighboring state Missouri, where pro-slavery and anti-slavery settlers collided.</p>
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