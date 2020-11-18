<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>マーシャル・プラン (1947~1948)</b></h6>
          <p class="double-context">アメリカは第二次世界大戦によって崩壊したイギリスやフランスを共産主義化の防波堤にさせるためにアメリカの経済力によって莫大な支援を送り始めた。マーシャル・プランによってアメリカは、イギリス・フランスなどの西ヨーロッパとの連携を強めようとした。</p>
        </div>
      </div>
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