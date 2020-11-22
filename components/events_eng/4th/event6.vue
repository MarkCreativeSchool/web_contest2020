<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>Emancipation Proclamation (1863)</b></h6>
          <p class="double-context">After the Union Army’s victory at the Battle of Antietam, Lincoln proclaimed the emancipation proclamation, which declared they would release all slaves that resided in regions where the federal states controlled after January 1st. With this proclamation, the Union Army succeeded in getting the international public support.
Furthermore, by the end of the Civil War, about 186,000 blacks participated in the Union Army as soldiers.
</p>
        </div>
        <div>
          <h6 class="double-title"><b>Battle of Chancellorsville (1863 Spring)</b></h6>
          <p class="double-context">The Battle of Chancellorsville occurred in Spotsylvania Courthouse in Virginia. The battle caused a great deal of damage to both the Union and the Federal forces but ended in a victory for the federal army. With this victory, Lee’s army (Federal), regained momentum, and planned another Northern invasion.</p>
        </div>
        <div>
          <h6 class="double-title"><b>Battle of Gettysburg (1863 July)</b></h6>
          <p class="double-context">The Federal forces that started the northern invasion faced the Union armed forces led by George Meade in Gettysburg, southern Pennsylvania. After a three-day long war, the Union army won. However, the remnants of the federal forces managed to flee to Virginia.</p>
        </div>
        <div>
          <h6 class="double-title"><b>Siege of Vicksburg (1863 May~June)</b></h6>
          <p class="double-context">US Union Army General Ulysses S. Grant wins the siege of Vicksburg in Warren County, Mississippi. In 1864, Lincoln appointed Grant as the commander-in-chief of the United States Union Armed Forces. Leaving the Western Front to William T. Sherman, Grant headed to Washington. Despite the numerous casualties that resulted in the series of "Battle of Spotsylvania Courthouse" and "Battle of Cold Harbor", Grant did not stop the battle, and over the next 9 months, " The siege of Richmond-Petersburg” occurred. Sherman, who was entrusted with the Western Front, occupied Atlanta by September. After that, they started to advance to the sea. </p>
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