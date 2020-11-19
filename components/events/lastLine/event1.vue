<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>奴隷貿易(1619年)</b></h6>
          <p class="double-context">ヴァージニアジェームズタウンに20人のアフリカ黒人が売り渡された。アメリカ市場最初のアフリカ黒人の輸入と言われている。18世紀には黒人貿易が盛んになり、多くの黒人が生まれ故郷に運びこまれた。</p>
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