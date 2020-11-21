<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>Declaration for Independence(1776 July)</b></h6>
      <hr>
      <p class="context">On July 4th, 1776, the 13 colonies declared independence over Britain. On the same day, Thomas Jefferson’s draft of the Virginia’s Declaration of Rights was used as the opening paragraphs of the Declaration of Independence, which recognized human rights such as freedom and equality.
      <br>Philosophy of the Declaration of Rights
        <br>1.Basic Human Rights
        <br>a. All people are equal, and have the right to declare happiness and freedom for themselves.
        <br>2.Rights of revolution
        <br>a.People have the right to oppose improper actions that violate their rights.
        <br>3.Democracy
        <br>a.The citizens are the people to govern the country.
        <br>=> However, these rights were not given to black people, and slavery continued to exist even after the Declration of Rights.
      </p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event4.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>