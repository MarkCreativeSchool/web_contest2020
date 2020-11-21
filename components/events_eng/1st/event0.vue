<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>The Discovery of the Continent</b></h6>
      <hr>
      <p class="context">Beginning with Columbus, the expedition to find a new continent began, and a sea spread towards the west was found. As a result, it raised an idea that the continent that they landed on was not India, but a different, new-found continent. As they investigated further to the South American continent, they determined that this continent was the “New World.” In the New World, colonization began as immigrants gathered together.
Early 16th Century: The New World was first addressed as “America”, originating from the name of Amerigo Vespucci, an Italian explorer.
      </p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event0.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>