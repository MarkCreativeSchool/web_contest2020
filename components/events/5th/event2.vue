<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>ロンドン秘密条約調印(1915年4月)</b></h6>
          <p class="double-context">イギリス・フランス・ロシア・イタリア間でロンドン秘密条約が結ばれた。内容は、イタリアが連合国側にたって参戦する代わりに、「未回収のイタリア」・アドリア海沿岸地域の割譲、植民地の拡大を約束するというもの。</p>
        </div>
        <h6 class="xButton" @click="onClose">x</h6>
      </div>
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