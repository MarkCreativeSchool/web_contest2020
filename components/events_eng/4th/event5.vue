<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>Seven Days Battles (1862 June~July)</b></h6>
          <p class="double-context">George B. McClellan, the Union (US) Supreme Commander, led the Potomac Army to Virginia and landed southeast of Richmond. However, the seven-day battle by the federal forces forced the Potomac army to retreat from Richmond though they were able to significantly damage the federal army.</p>
        </div>
        <div>
          <h6 class="double-title"><b>Second Battle of Bull Run (1862 August)</b></h6>
          <p class="double-context">The Second Battle of Bull Run (aka Battle of Second Manassas) occurred in 1862 August. The federal army led by Commander Lee split the army into two where one was led by Jackson and one by himself. The two armies collided with the Union Army led by Commander Pope. Lee's army made a concentrated attack on the left wing of the Union army, causing Pope’s army to retreat to Washington. The federal forces that won the battle began to plan a northern invasion with this victory. The invasion of Maryland begins.</p>
        </div>
        <div>
          <h6 class="double-title"><b>Battle of Antietam (1862 September)</b></h6>
          <p class="double-context">McClellan, who succeeded in rebuilding the Potomac Army (Union Army), confronted the Federal Army that invaded Maryland. After winning the battle, the Union forces prevented the Federal invasion of the north which caused the Federal forces to retreat to Virginia. However, despite the victory of the Union Army, McClellan, commander of the Union Armed Forces was dismissed and Ambrose E. Burnside was appointed.</p>
        </div>
        <div>
          <h6 class="double-title"><b>Battle of Fredericksburg (1862 December)</b></h6>
          <p class="double-context">In 1862 December, in Fredericksburg Virginia, the Union forces commenced against the federal army but ultimately lost. Due to this, Commander Burnside was dismissed and Joseph Hooker was appointed. </p>
        </div>
      </div>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event5.vue",
  methods: {
    onClose() {
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>