<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>エイブラハム・リンカーンが大統領に当選(1860年)</b></h6>
          <p class="double-context">奴隷制反対を声高に訴えた。この当選をきっかけに南北戦争に火種がつく。<br>
連合国側は、サウスカロライナ州チャールストンの、合衆国軍の支配下にあったサムター要塞に対して警告を出す。</p>
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