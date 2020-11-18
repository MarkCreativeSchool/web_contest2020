<template>
    <div>
      <div class="layer" @click="onClose"></div>
      <div class="event-modal">
        <div class="event-title">第8章：冷戦</div>
        <!--イベント-->
        <div class="event1" @click="onClick('event1')"></div>
        <div class="event2" @click="onClick('event2')"></div>
        <div class="event3" @click="onClick('event3')"></div>
        <div class="event4" @click="onClick('event4')"></div>
        <div class="event5" @click="onClick('event5')"></div>
        <div class="linebar"></div>
        <div class="year">
            <h6>
              <div class="timelineFirst">1945</div>
            </h6>
            <h6>
              <div class="timelineLast">1989</div>
            </h6>
        </div>
      </div>
      <event1 v-if="locationName==='event1'" @onClose="locationName=null"></event1>
      <event2 v-if="locationName==='event2'" @onClose="locationName=null"></event2>
      <event3 v-if="locationName==='event3'" @onClose="locationName=null"></event3>
      <event4 v-if="locationName==='event4'" @onClose="locationName=null"></event4>
      <event5 v-if="locationName==='event5'" @onClose="locationName=null"></event5>
    </div>
</template>

<script>

import event1 from "~/components/events/7th/event1"
import event2 from "~/components/events/7th/event2"
import event3 from "~/components/events/7th/event3"
import event4 from "~/components/events/7th/event4"
import event5 from "~/components/events/7th/event5"

export default {
  name: "line7.vue",
  components:{event1, event2, event3, event4, event5, },
  data(){
    return{
      locationName:null
    }
  },
  methods:{
    onClose(){
      this.$emit("onClose")
    },
    onClick(locationName2){
      this.locationName=locationName2
    }
  }
}
</script>

<style scoped>
.event-modal .event1{
  position:relative;
  top: calc(10% - 35px);
  left: 65px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
.event-modal .event2{
  position:relative;
  top: calc(10% - 25px);
  left: 150px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
.event-modal .event3{
  position:relative;
  top: calc(10% - 15px);
  left: 250px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
.event-modal .event4{
  position:relative;
  top: calc(10% - 5px);
  left: 400px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
.event-modal .event5{
  position:relative;
  top: calc(10% + 5px);
  left: 500px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
</style>