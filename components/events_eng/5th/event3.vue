<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>Battle of Verdun (1916 February)</b></h6>
          <p class="double-context">The Battle of Verdun was a battle between the German army and the French army that took place on Verdun in France on the Western Front. The battle caused more than 700,000 casualties.</p>
        </div>
        <div>
          <h6 class="double-title"><b>Battle of the Somme (1916 July)</b></h6>
          <p class="double-context">The Battle of Somme is the biggest battle in World War 1. This was a battle between the British/French and German troops that lasted nearly three months from July. It took place in Somme River, which flows through the Picardy region in Northern France. On the Western Front, which was in a deadlock, the British and French troops on the Allied side attempted a large-scale counterattack against Germans. Both troops faced each other, with no win/loss. However, the number of casualties was enormous, with the British and French troops causing approximately 900,000 casualties and the German troops causing 600,000 casualties.</p>
        </div>
      </div>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event3.vue",
  methods: {
    onClose() {
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>