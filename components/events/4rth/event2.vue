<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>ハーパーズ・フェリー襲撃事件(1859年)</b></h6>
          <p class="double-context">ロバート・E・リー率いる連合国軍がメリーランド州に侵攻した時、その一部のストーンウォール・ジャクソンの軍団がヴァージニア州ハーパーズ・フェリーが率いる合衆国軍を包囲して降伏させた事件。<br>
「ドレッド・スコット対サンフォード事件」によって「アメリカ人の子孫が奴隷であるかどうかにかかわらず、アメリカ合衆国の市民にはなれず、アメリカ合衆国議会は連邦の領土内で奴隷制を禁じる権限がない」という判決が下された。この判決が下された結果、奴隷制度廃止運動家のジョン・ブラウンは1859年にハーパーズ・フェリー襲撃事件を起こす。</p>
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