<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>Vietnam War (1955~1975)</b></h6>
      <hr>
      <p class="context">The Vietnam war is often called "war without declaration of war”. At this time, Vietnam was separated into North and South territories. The civil war that took place in Vietnam was mainly a battle between the "North Vietnam Army" and the "South Vietnam Army / US Army". When North Vietnam caused the Gulf of Tonkin Incident in 1964, the United States began to intervene in the Vietnam War and entered a state of war with North Vietnam. The United States bombed North Vietnam, but struggled against guerrillas in North Vietnam. Eventually the United States withdrew from North Vietnam, whilst ending with a victory for North Vietnam in 1975.</p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event6.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>