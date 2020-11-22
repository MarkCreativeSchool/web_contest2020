<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>September 11 attacks (2001 September 11) </b></h6>
      <hr>
      <p class="context">On 2001, September 11, 2 civilian aircraft were hijacked and crashed into the World Trade Center Twin tower and caused the building to collapse. Furthermore, another aircraft that was hijacked crashed into the Pentagon, the center of American defense and caused several deaths and injuries.</p>
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