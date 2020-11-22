<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>Montgomery bus boycott (1955)</b></h6>
      <hr>
      <p class="context">Public facilities such as waiting rooms, toilets, drinking fountains, and parks at stations are equipped with display boards that say "white people only" and "black people only," at the time, forbidding black people to use the same facilities as white people.
On December 1, 1955, a black woman named Rosa Parks took a bus on her way home from work and sat right behind a white-only seat. A white man boarded there, and the bus driver ordered Parks to give up his seat. Parks, who did not respond to the request, was arrested.
</p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event4.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>