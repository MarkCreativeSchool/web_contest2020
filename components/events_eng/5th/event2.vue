<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>Treaty of London (1915 April)</b></h6>
      <hr>
      <p class="context">The Treaty of London was tied between Britain, France, Russia, and Italy in 1915.
The Treaty of London said that in exchange for Italy's participation in the Allied side, it promised to cleave the "uncollected Italy"-Adriatic coastal area and expand the colony.
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