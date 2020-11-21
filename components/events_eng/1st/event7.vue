<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>Boston Tea Party (1773)</b></h6>
      <hr>
      <p class="context">In 1773, the Tea Act of 1773 was passed by the Parliament. The Tea Act was an act by Britain to monopoly the tea market within the colonies. It allowed the British East India Company to sell tea duty-free (meaning the product is exempted from paying taxes) but still tax the product once it reached the colonial parties. The Tea Act resulted in discontent amongst the colonies, which caused an incident where they threw tea leaves into the harbor. Britain’s strict response was to close Boston Harbor and limit autonomy within Massachusetts </p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event7.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>