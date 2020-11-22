<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>Iraq War (2003)</b></h6>
      <hr>
      <p class="context">On 2003, March 20th, the US (led by President George Bush at the time) led coalition (including UK, Australia, and Portland) invaded Iraq which caused a military intervention.
With conditions to cease the 1991 Gulf War, the UN Security Council mandated Iraq to "destroy weapons of mass destruction." However, because Iraq did not support this suggestion, a military intervention to overthrow President Hussein, Iraq’s leader began. The Iraqi administration collapsed on April 9, 2003, when Baghdad crashed and President Hussein fled. Saddam Hussein was arrested on December 13th, 2003. As a result, terrorist activities became more active due to the deterioration of public security in Iraq. Until Barack Obama declared the end of battle and end of the Iraqi Free Front in 2001, December 15th, the coalition remained stationed in Iraq.
</p>
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