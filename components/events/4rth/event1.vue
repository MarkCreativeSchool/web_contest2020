<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>カンザス・ネブラスカ法(1854年)</b></h6>
          <p class="double-context">カンザス準州とネブラスカ準州を創設することを決定した法律であると同時に、両州を奴隷州とするのか自由州とするのかは住民たちの選択に任せるとした。その結果、カンザスに隣接するミズーリの街では北部の奴隷制反対派と南部の奴隷制賛成派が衝突し、それぞれ武装した異住民が押し寄せ、「血を流すカンザス」と呼ばれる一連の激しい衝突が起こる。</p>
        </div>
      </div>
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