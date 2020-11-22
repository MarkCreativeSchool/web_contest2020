<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>March on Washington for Jobs and Freedom (1963 August 28)</b></h6>
      <hr>
      <p class="context">On August 28, 1963, when the civil rights movement was at its peak, 250,000 people gathered in Washington, DC, under the slogan "Complete liberation by 1963!". Of the 250,000 people who participated in the march, 60,000 were white. At the end of the march, Rev. Wang's "I have a dream." speech was given.</p>
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