<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>Yalta Conference(1945)</b></h6>
          <p class="double-context">The United States, Great Britain, and the Soviet Union held a conference at Yalta in the Soviet territory to decide what the world should be after World War II. Divide and rule of Germany and Austria and territorial decisions of German-dominated countries were carried out between the United States, Great Britain and the Soviet Union. In the Yalta Conference, the Soviet Union put Poland, Romania, Bulgaria, Hungary, etc., which are the eastern countries of Europe, under the influence of the Soviet Union, and Germany was divided and occupied by four countries: the United States, the United Kingdom, France, and the Soviet Union. Franklin Roosevelt, then President of the United States, accepted most of the Soviet Union's demands. However, immediately after the division decision was made, President Roosevelt passed away. Truman, who succeeded him, joined forces with Britain, France, etc. to oppose the Soviet Union following the birth of communist countries in Eastern Europe one after another. </p>
        </div>
        <div>
          <h6 class="double-title"><b>Separatist Movement(1945)</b></h6>
          <p class="double-context">During the year of the Cold war, what was originally one country separated into a socialist and capitalist country. Separist countries included Germany, Korea, and Vietnam
The Soviet occupied territories in East Germany, and the US, British, and French occupied territories in West Germany. In addition, Berlin, which was the capital, was also divided into West Germany and East Germany by the "Berlin Wall", and West Berlin was isolated to East Germany as an excursion of West Germany. In Korea, the Soviet Union occupied the north side and the United States occupied the south side. In 1948, the Democratic People's Republic of Korea (North Korea) became independent on the north side, and the Republic of Korea (South Korea) became independent on the south side. In Vietnam, the Declaration of Independence was issued in 1945 in opposition to the fact that it was a French colony, but France rebelled against this. After the First Indochina War, the socialist Republic of Vietnam was born on the north side, and the capitalist Republic of South Vietnam was born on the south side.
</p>
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