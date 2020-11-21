<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>2-2: The 13 (Original) Colonies</b></h6>
      <hr>
      <p class="context">The colonization of the 13 colonies were mostly conducted by Britain and France. In the 13 colonies, the expansion of large-scale agriculture supported the colonies’ economy. However, in the 18th century, conflict intensified between Britain/France and the colonies. </p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event2.ue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>