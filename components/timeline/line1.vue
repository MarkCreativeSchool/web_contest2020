<template>
  <div>
    <div class="layer" @click="onClose"></div>
    <div class="event-modal">
      <div class="event-title">第1章:大陸の発見 / 13の植民地(13 colonies)の誕生</div>
      <!--イベント-->
      <div class="event0" @click="onClick('event0')"><p class="line_sub_name">新大陸の発見</p></div>
      <div class="event1" @click="onClick('event1')"><p class="line_sub_name">2-1: 奴隷輸入</p></div>
      <div class="event2" @click="onClick('event2')"><p class="line_sub_name">2-2 : 13の植民地誕生</p></div>
      <div class="event3" @click="onClick('event3')"><p class="line_sub_name">七年戦争(1756年~1763年)</p></div>
      <div class="event4" @click="onClick('event4')"><p class="line_sub_name">砂糖法(1764年)</p></div>
      <div class="event5" @click="onClick('event5')"><p class="line_sub_name">印紙法(1765年)</p></div>
      <div class="event6" @click="onClick('event6')"><p class="line_sub_name">タウンゼンド諸法(1767年)</p></div>
      <div class="event7" @click="onClick('event7')"><p class="line_sub_name">ボストン茶会事件(1773年)</p></div>
      <div class="event8" @click="onClick('event8')"><p class="line_sub_name">強圧的諸条令(1774年)</p></div>


      <div class="linebar"></div>
      <div class="year">
        <h6>
          <div class="timelineFirst">1500</div>
        </h6>
        <h6>
          <div class="timelineLast">1774</div>
        </h6>
      </div>
    </div>
    <event0 v-if="locationName==='event0'" @onClose="locationName=null"></event0>
    <event1 v-if="locationName==='event1'" @onClose="locationName=null"></event1>
    <event2 v-if="locationName==='event2'" @onClose="locationName=null"></event2>
    <event3 v-if="locationName==='event3'" @onClose="locationName=null"></event3>
    <event4 v-if="locationName==='event4'" @onClose="locationName=null"></event4>
    <event5 v-if="locationName==='event5'" @onClose="locationName=null"></event5>
    <event6 v-if="locationName==='event6'" @onClose="locationName=null"></event6>
    <event7 v-if="locationName==='event7'" @onClose="locationName=null"></event7>
    <event8 v-if="locationName==='event8'" @onClose="locationName=null"></event8>
  </div>
</template>

<script>
import event0 from "~/components/events/1st/event0"
import event1 from "~/components/events/1st/event1"
import event2 from "~/components/events/1st/event2"
import event3 from "~/components/events/1st/event3"
import event4 from "~/components/events/1st/event4"
import event5 from "~/components/events/1st/event5"
import event6 from "~/components/events/1st/event6"
import event7 from "~/components/events/1st/event7"
import event8 from "~/components/events/1st/event8"

export default {
  name: "line1.vue",
  components: {event1, event2, event3, event4, event0,event5, event6, event7, event8, },
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
.event-modal .event0{
  position:relative;
  top: calc(10% - 35px);
  left: 65px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
.event-modal .event1{
  position:relative;
  top: calc(10% - 40px);
  left: 300px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
.event-modal .event2{
    position:relative;
  top: calc(10% - 25px);
  left: 700px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
.event-modal .event3{
  position:relative;
  top: calc(10% - 15px);
  left: 710px;
  width: 90px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
.event-modal .event4{
  position:relative;
  top: calc(10% - 10px);
  left: 798px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
.event-modal .event5{
  position:relative;
  top: calc(10% - 5px);
  left: 815px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
.event-modal .event6{
  position:relative;
  top: 10%;
  left: 830px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
.event-modal .event7{
  position:relative;
  top: calc(10% + 20px);
  left: 900px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
.event-modal .event8{
  position:relative;
  top: calc(10% + 40px);
  left: 920px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
</style>