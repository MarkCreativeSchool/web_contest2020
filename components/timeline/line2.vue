<template>
  <div>
    <div class="layer" @click="onClose"></div>
      <div class="test">
        <div class="title">第2章:独立戦争の開幕</div>
        <!--イベント-->
        <div class="event1" @click="onClick('event1')"></div>
        <div class="event2" @click="onClick('event2')"></div>
        <div class="event3" @click="onClick('event3')"></div>
        <div class="event4" @click="onClick('event4')"></div>

        <div class="linebar"></div>
        <div class="year">
          <h6>
            <div class="timelineFirst">1775</div>
          </h6>
          <h6>
            <div class="timelineLast">1783</div>
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
import event1 from "~/components/events/2nd/event1"
import event2 from "~/components/events/2nd/event2"
import event3 from "~/components/events/2nd/event3"
import event4 from "~/components/events/2nd/event4"

export default {
  name: "line2.vue",
  components:{event1, event2, event3, event4, },
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
.test{
  position: fixed;
  top: 50%;
  left: 50%;
  height: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  background: #ffffff;
  z-index: 1001;
  border-radius: 15px;
  border: solid 5px burlywood;
}
.test .title{
  position: relative;
  left: 20px;
}
.test .linebar{
  position: relative;
  /*top: calc(85% - 110px);*/
  bottom: calc(1% - 155px);
  width: 90%;
  margin: 0 auto;
  height: 20px;
  background: black;
  border-radius: 7px;
}
.test .event1{
  position:relative;
  top: calc(10% - 35px);
  left: 55px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
.test .event2 {
  position: relative;
  top: calc(10% - 30px);
  left: 57px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
.test .event3{
  position: relative;
  top: calc(10% - 25px);
  left: 65px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
.test .event4{
  position: relative;
  top: calc(10% - 20px);
  left: 75px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
.year{
  position: relative;
  display: flex;
  align-content: space-between;
  width: 100%;
  text-align: center;
  /*top: calc(83% - 95px);*/
  bottom: calc(1% - 160px);
  flex: 1;
  font-size: 17px;
  font-weight: bold;
}
.year h6 .timelineFirst{
  text-align: left;
  padding-left: 50px;
}
.year h6 .timelineLast{
  text-align: right;
  padding-right: 50px;
}
.layer{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  z-index: 1000;
}
</style>