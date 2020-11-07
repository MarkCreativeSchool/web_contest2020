<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>終戦(1783年9月)</b></h6>
      <hr>
      <p class="context">1783年に締結したパリ条約によって、アメリカ独立戦争は終結した。この講和条約で、イギリスは13植民地を正式にアメリカ合衆国と認め、ミシシッピ以東のルイジアナをアメリカに割譲した。
      </p>
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