<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>朝鮮戦争(1950年~)</b></h6>
          <p class="double-context">大韓民国と朝鮮民主主義共和国が朝鮮半島で戦争を起こす。大量の死者を出し、町は荒廃し、多くの戦争孤児を出すなど、戦争は泥沼化してしまった。1953年7月27日に、南北の代表とソ連およびアメリカの代表が会合を行い、休戦協定を結んだが、実質的な終戦には未だ至っていない。</p>
        </div>
      </div>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event5.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>