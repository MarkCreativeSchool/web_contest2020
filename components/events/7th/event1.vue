<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>核爆弾の開発(1944年)</b></h6>
          <p class="double-context">アメリカは1944年に原子爆弾を開発。翌年には広島・長崎に原子爆弾を投下。世界唯一の核保有国になったのですが、ソ連はそれに対抗して急速に核開発を進め1949年にはソ連も原子爆弾の実験に成功。その後アメリカとソ連は核開発競争を推し進め、1954年にはアメリカは原子爆弾よりも強力な水素爆弾を開発。ソ連もアメリカに対抗して、1961年に皇帝の爆弾ツァーリボンバを開発。実験を行いアメリカと張り合った。</p>
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