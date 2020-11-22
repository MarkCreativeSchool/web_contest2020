<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>ウィルソンの十四ヶ条(1918年1月)</b></h6>
          <p class="double-context">ブレスト=リトフスクで休戦協定に調印し、東部戦線では停戦が実現した。アメリカの28代大統領のウッドロウ・ウィルソン大統領は「平和についての布告」に対抗し、新たな戦争目的を表明する必要があると考え、十四ヶ条の原則を発表した。民族自決・国際連盟の設立・秘密外交の禁止などを主として原則が成り立っている。</p>
        </div>
        <div>
          <h6 class="double-title"><b>ブレスト=リトフスク条約(1918年3月)</b></h6>
          <p class="double-context">ブレスト=リトフスクで、ドイツ・オーストリア＝ハンガリー・ブルガリア・オスマン帝国の同盟側四国代表と、ソヴィエト=ロシアとの本格的な講和条約交渉が始まった。</p>
        </div>
        <div>
          <h6 class="double-title"><b>第一次世界大戦終結(1918年11月)</b></h6>
          <p class="double-context">パリ講和会議は1919年1月18日から始まり、6月28日にヴェルサイユ宮殿でヴェルサイユ条約が締結されて終わった。この会議には日本を含む連合国代表が参加したが、イギリス・フランス・アメリカの三国が主導権を握り、敗戦国ドイツなどは参加できず、また革命直後のロシア・ソヴィエト政府も参加できなかった。第一次世界大戦は連合国側の勝利として終わったが、全世界に大きな被害をもたらした。</p>
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