<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>Development of Nuclear Weapons(1944年)</b></h6>
      <hr>
      <p class="context">Following the development of nuclear bombs in 1944 in the US, the development of nuclear weapons sped up rapidly. The Soviet Union rapidly proceeded with nuclear development in response to the US, and in 1949, the Soviet Union also succeeded in testing an atomic bomb. Since then, the United States and the Soviet Union promoted nuclear development competition, and led to the creation of the Thermonuclear weapon in the US in 1954. The Soviet Union also developed the emperor's bomb Tsar Bomba in 1961 against the United States.</p>
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