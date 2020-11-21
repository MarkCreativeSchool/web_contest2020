<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>Second Continental Congress(1775 May)</b></h6>
      <hr>
      <p class="context">In 1775 May, the Second Continental Congress was held in Philadelphia to unite the 13 colonies to win independence over Britain. They assigned George Washington as the commanding general for the revolutionary war. </p>
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