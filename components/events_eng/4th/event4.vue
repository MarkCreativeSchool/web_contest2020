<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>Battle of Fort Sumter (1861 April)</b></h6>
          <p class="double-context">The Battle of Fort Sumter was an incident that ignited the American Civil War. Major Anderson, commander of Fort Sumter swore loyalty to the United States Union and refused to demand that the Confederates retreat from the fortress, leading the Confederates to fire and lead to the Civil War.</p>
        </div>
        <div>
          <h6 class="double-title"><b>First Battle of Bull Run (1861 July)</b></h6>
          <p class="double-context">The First Battle of Bull Run (aka Battle of Manassas) occurred in Manassas, Virginia, and was the first major land battle of the American Civil War. The Union army led by Thomas Jackson retreated after suffering defeat from the federal army.</p>
        </div>
      </div>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event4.vue",
  methods: {
    onClose() {
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>