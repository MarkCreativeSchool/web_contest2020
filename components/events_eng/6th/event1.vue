<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>Invasion of Poland (1939)</b></h6>
      <hr>
      <p class="context">Following the Invasion of Poland, France and Great Britain declared war on Germany, which caused the outbreak of World War 2. From late 1939 to early 1941, after a series of military acts and treaties, Germany put most of the European continent under uniform or control and formed an alliance with Italy as an Axis power. Meanwhile, in the regions of North and East Africa was a military drive, and with the defeat of France in the mid-1940s, the military conflict continued primarily as a battle between the Axis powers of Europe and Britain, followed by a lengthy Battle of the Atlantic. On June 22, 1941, the Axis powers of Europe began invading the Soviet Union, and marked the opening of World War 2.</p>
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