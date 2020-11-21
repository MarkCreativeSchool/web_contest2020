<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>Siege of Yorktown[Battle of Yorktown](1781 September~October)</b></h6>
      <hr>
      <p class="context">At Yorktown located on the East coast of Virginia (Britain’s final colonial base), the United States-French Allied forces sieged approximately 7000 British soldiers led by Charles Cornwallis and led them to surrender. With this battle, the colonial’s army confirmed victory, and the Revolutionary War concluded.</p>
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