<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>Battle of Fort Stedman(1865)</b></h6>
          <p class="double-context">The Federal forces led by commander Lee, who were tired in the siege of Richmond-Petersburg. However, on the Eastern front, showed the last resistance and settled in Fort Stedman and commenced the Battle of Fort Stedman. However, immediately after the counterattack, the victory was reversed to the US Union army. </p>
        </div>
        <div>
          <h6 class="double-title"><b>Battle of Appomattox Court House (1865 April)</b></h6>
          <p class="double-context">The federal army was defeated at Appomattox, Virginia in 1865, April, and the Northern Virginia army (federal) surrendered, which Commander Grant accepted. This war sealed the end of the American Civil War. </p>
        </div>
        <div>
          <h6 class="double-title"><b>Assassination of Abraham Lincoln (1865 April 15)</b></h6>
          <p class="double-context">In 1865, April 15, 16th U.S president Abraham Lincoln was assassinated by John Wilkes Booth, a Confederate sympathizer and actor. Lincoln was succeeded by Andrew Johnson. </p>
        </div>
      </div>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event7.vue",
  methods: {
    onClose() {
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>