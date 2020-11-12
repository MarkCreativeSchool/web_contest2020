<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>サムター要塞攻撃事件(1861年4月)</b></h6>
      <hr>
      <p class="context">南北戦争開戦のきっかけとなった事件。サムター要塞の司令官だったアンダーソン少佐は合衆国に忠誠を誓い、連合国軍が要塞を撤退するよう要求したのを拒否したため、連合国軍が砲撃を開始し、南北戦争へとつながった。
      </p>
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