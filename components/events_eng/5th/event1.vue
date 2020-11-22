<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>Assassination of Archduke Franz Ferdinand (1914 June 28)</b></h6>
          <p class="double-context">Grand Prix Franz Ferdinand, a throne of the Austrian-Hungarian Empire who was visiting Sarajevo for reconnaissance was assassinated by Gabrio Prinzip, a Bosnian Serbian Yugoslav nationalist youth.</p>
        </div>
        <div>
          <h6 class="double-title"><b>July Crisis (1914 July 23)</b></h6>
          <p class="double-context">The Austrian-Hungarian empire issued a final notification to the Kingdom of Serbia, but the Hungarian empire was not satisfied with the response from the Kingdom of Serbia. Both countries developed into a temporary system with their relationship. Due to the alliance between the two countries, the July crisis developed into a problem involving all of Europe.</p>
        </div>
        <div>
          <h6 class="double-title"><b>1914 July 28</b></h6>
          <p class="double-context">Austria-Hungary bombards Belgrade, the capital of Serbia. As a result, the Russian Empire considers it necessary to support Serbia, and permits the mobilization of troops from the Russian Empire that led to the beginning of World War I. The total mobilization of Russia was announced on the evening of the 30th. Furthermore, the following day, on July 31, the Austrian-Hungarian Empire and Germany made similar announcements, and Germany requested Russia to cancel the military within 12 hours. However, Russia refused, and the German and Hungarian Empire declared war on Russia. France also announced mobilization to support Germany on August 2.</p>
        </div>
        <div>
          <h6 class="double-title"><b>1914 August</b></h6>
          <p class="double-context">Germany demands harmless transit rights in Belgium from France in August. However, the French refused which led to Germany invading Belgium on August 3rd, whilst also declaring war on France the same day. Due to this, the Belgium government ministers the London Treaty of 1839.<br>*The Treaty of London is a treaty that Belgium has developed tenacious international diplomacy against the Kingdom of Nederland, which does not recognize Belgium's independence.<br>As a result, Britain declared war on Germany on August 4, according to the treaty's arrangements.<br>Furthermore, on August 12, France and Britain declared war on the Ausrian-Hungarian empire. On August 23, due to Japan being part of the Allied forces, the war spread throughout Asia as well.</p>
        </div>
        <div>
          <h6 class="double-title"><b>Battle of Tannenberg (1914 August 26)</b></h6>
          <p class="double-context">The Battle of Tannenberg was the battle where the German troops, led by General Hindenburg exterminated the Russian troops.</p>
        </div>
        <div>
          <h6 class="double-title"><b>Siege of Tsingtao (1914 September 2)</b></h6>
          <p class="double-context">In 1914, Japanese troops began landing on the Shandong Peninsula.</p>
        </div>
        <div>
          <h6 class="double-title"><b>First Battle of the Marne (1914 September) </b></h6>
          <p class="double-context">The First Battle of the Marne was a battle in which the French and British troops stopped the German troops' attack on the Marne river on the side of Paris, and ended the short-term battle. The Western Front was stalled and Germany was forced into a two-sided operation.</p>
        </div>
        <div>
          <h6 class="double-title"><b>1914 November</b></h6>
          <p class="double-context">The Ottoman Empire participated in the alliance, and the front line was constructed in the Caucasus, Mesopotamia, and the peninsula. Furthermore, due to the battles that took place in the colonies of European countries, it led to African countries participation which led to a global war.</p>
        </div>
      </div>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event1.vue",
  methods: {
    onClose() {
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>