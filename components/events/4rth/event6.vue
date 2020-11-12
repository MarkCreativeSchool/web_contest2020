<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>七日間の戦い(1862年)</b></h6>
      <hr>
      <p class="context">合衆国軍の最高司令官となったジョージ・B・マクレランはポトマック軍を率いてヴァージニア州へ進み、リッチモンドの南東に上陸。しかし、連合国軍によって七日間の戦いによって、合衆国軍は連合国軍に大きな損害を与えることができたものの、ポトマック軍はリッチモンドを退却することになった。
      </p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event6.vue",
  methods: {
    onClose() {
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>