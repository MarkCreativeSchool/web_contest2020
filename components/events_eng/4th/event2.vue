<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>John Brown's raid on Harpers Ferry(1859)</b></h6>
      <hr>
      <p class="context">The raid on Harpers Ferry was an incident where John Brown’s army was sieged and forced to surrender by the federal army led by colonel Robert E. Lee when invading Maryland. John Brown was an abolitionist who protested for anti-slavery and caused this raid hoping the local slaves would join in the raid. However, this did not occur which left him and his army to take refuge in a sanctuary, where he was later on captured by the federal army.<br>Due to the Dred Scott v. Sandford, it was declared that all people of African descent, free or enslaved, were not United States citizens and therefore had no right to sue in federal court, which also signified that the US Congress has no authority to prohibit slavery in federal territory. As a result of this court, abolitionist activist John Brown caused the Harpers Ferry raid in 1859.</p>
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