<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>七日間の戦い(1862年)</b></h6>
          <p class="double-context">合衆国軍の最高司令官となったジョージ・B・マクレランはポトマック軍を率いてヴァージニア州へ進み、リッチモンドの南東に上陸。しかし、連合国軍によって七日間の戦いによって、合衆国軍は連合国軍に大きな損害を与えることができたものの、ポトマック軍はリッチモンドを退却することになった。</p>
        </div>
        <div>
          <h6 class="double-title"><b>第二次ブルランの戦い(1862年)</b></h6>
          <p class="double-context">連合国軍のの司令官リーは軍を北進させ、連合国軍をリー軍とジャクソン軍に分割。ジャクソン軍(連合国)をヴァージニアのマナッサス付近にいたポープ軍(合衆国)と対峙させ、リー軍は合衆国軍の左翼に集中攻撃を仕掛け、ポープ軍をワシントンまで後退させた。この戦いで勝利を手にした連合国軍は北部侵攻を計画。メリーランドへの侵攻を始める。</p>
        </div>
        <div>
          <h6 class="double-title"><b>アンティータムの戦い(1862年)</b></h6>
          <p class="double-context">ポトマック軍(合衆国軍)の立て直しに成功したマクレランは、メリーランドに侵攻してきた連合国軍と対峙する。この戦いで勝利を手にした合衆国軍は連合国軍の北部侵攻を足止めし、連合国軍はヴァージニアに後退することになった。しかし、合衆国軍が勝利したにもかかわらず、合衆国軍の指揮官だったマクレランは解任され、アンブローズ・E・バーンサイドが任命された。</p>
        </div>
        <div>
          <h6 class="double-title"><b>フレデリックスバーグの戦い(1862年)</b></h6>
          <p class="double-context">フレデリックスバーグ付近で、合衆国軍が連合国軍に対して仕掛けた戦いであったが、連合国軍が勝利した。その結果、バーンサイドは指揮官を解任され、ジョセフ・フッカーが任命された。</p>
        </div>
      </div>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event6.vue",
  methods: {
    onClose() {
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>