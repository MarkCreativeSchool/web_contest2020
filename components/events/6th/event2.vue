<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>太平洋戦争の勃発(1941年)</b></h6>
          <p class="double-context">1941年12月、日本がアメリカ合衆国および太平洋にあるヨーロッパ植民地の島々に対し奇襲攻撃を仕掛けた。これを受けたアメリカは直ちに日本に宣戦布告。イギリスが、これに対し賛同すると、ヨーロッパの枢軸国は日本との同盟関係に従って直ちにアメリカに対し宣戦ふおっくし、太平洋戦争が開戦する。</p>
        </div>
      </div>
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