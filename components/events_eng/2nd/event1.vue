<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>Battles of Lexington and Concord(1775 April)</b></h6>
      <hr>
      <p class="context">In 1775 April, an armed conflict occurred within Massachusetts between British and American soldiers (Battles of Lexington and Concord), occurred. The British army aimed to seize munition supplies from the colonies. Although the British army succeeded in seizing the supplies, while returning, they ran into the army of the colonial side, and 244 British soldiers were killed/injured.</p>
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