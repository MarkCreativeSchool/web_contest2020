<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>ハイチ独立の影響(1804年)</b></h6>
      <hr>
      <p class="context">ナポレオンはハイチを砂糖生産に特化させ、そこで必要な穀物をルイジアナを補完するという、メキシコ湾をまたいだ植民地帝国建設を計画していたが、1798年にハイチ独立運動が激化し、計画は破錠した。ナポレオンは、ハイチ独立運動の激化中にルイジアナを手放すことを決めた。(1804年にハイチの黒人革命は成功し、黒人最初の共和国が誕生した。)
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