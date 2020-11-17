<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>ヴェルダン要塞攻防戦(1916年2月)</b></h6>
          <p class="double-context">西部戦線でフランス国内のヴェルダンを舞台に繰り広げられたドイツ軍とフランス軍の戦い。この戦いでは70万人以上の死傷者を出した。</p>
        </div>
        <div>
          <h6 class="double-title"><b>ソンムの戦い(1916年7月)</b></h6>
          <p class="double-context">第一次世界大戦における最大の会戦で、7月から3ヶ月近く続いたイギリス・フランス軍とドイツ軍の戦い。この戦いの舞台は、フランス北部ピカルディ地方を流れるソンム川。行き詰まりを見せた西部戦線において、連合国側のイギリス・フランス軍は同盟国側にドイツ軍
に対して大規模な反攻を企てた。両軍とも有用な戦果を挙げることなく、対峙したまま収束を迎えた。しかし、犠牲者の数は膨大で、イギリス・フランス軍がおよそ90万人の死傷者、ドイツ軍が60万人の死傷者を出した。
</p>
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