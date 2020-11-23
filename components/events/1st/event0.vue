<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>新大陸の発見</b></h6>
      <hr>
      <p class="context">コロンブスを筆頭に新大陸の探検が始まり、西方に広がる海が発見された。その結果「今、自分たちのいる場所はインドではなく、別の大陸なのではないか」と思う人が出てくるようになった。南米大陸までの探検が続くと「新大陸」であることが確定した。新大陸は多くの移民が集まり、植民地化していくことになる。
16世紀初め:アメリゴ・ベスプッチ(イタリアの探検家)にちなんで新大陸を「アメリカ」と表記するようになった。
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