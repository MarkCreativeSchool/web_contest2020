<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>北大西洋条約機構[NATO](1949年 4月)</b></h6>
          <p class="double-context">ソ連に対しての軍事同盟を結成しソ連に対抗しようとする。一方のソ連もアメリカに対抗するために東ヨーロッパの共産主義国の支援をする経済協力体制であるCOMECONを設立。さらにワルシャワ条約機構を作り共産主義国中心にアメリカに対抗した。</p>
        </div>
      </div>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event4.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>