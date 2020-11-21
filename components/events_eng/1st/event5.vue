<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>The Stamp Act(1765)</b></h6>
      <hr>
      <p class="context">Act that imposed that every printed document would be stamped with a British stamp that imposed tax on all the paper documents. Paper documents that were stamped included newspapers, pamphlets, and even playing cards. As a result, it caused discontent amongst the colonies. </p>
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