<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>Barack Obama Becomes President(2009)</b></h6>
      <hr>
      <p class="context">Barack Obama (Democratic), became the 44th president in 2008, and was heavily medialized due to him being the first black president. Though black lives have been severely discriminated against, with Obama becoming president, more people have become more aware and accepting of different races within the US.</p>
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