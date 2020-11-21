<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>Coercive Acts(1774)</b></h6>
      <hr>
      <p class="context">In 1774, a series of laws called the Coercive (Intolerable) Act was passed on by the British Parliament to punish Massachusetts after the Boston Tea Party. As a response to Britain’s sanctions, Pennsylvania called for a continental congress that resolved to refuse trade with Britain. This caused even more conflict between Britain and the colonies. </p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event8.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>