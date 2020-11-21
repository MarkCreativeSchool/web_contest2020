<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>Seven Years’ War(1756~1763)</b></h6>
      <hr>
      <p class="context">The Seven Years’ War first started in Austria, but was intensified after countries from Africa as well as America and India began to get involved within the war as well. Within America, there was a war called the French and Indian War, which was a war between France and Britain. Britain, which one the French and Indian War imposed heavy tax upon the colonies. </p>
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