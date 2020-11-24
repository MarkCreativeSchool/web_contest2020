<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">
    <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/en">Home</nuxt-link></li>
         <li class="breadcrumb-item"> <nuxt-link to="/en/what">What?</nuxt-link></li>
     </ol>
   <br>
    <h3 class="start_what"><span class="under">What is discrimination?</span></h3>
    <br>
    <img class="drawing1" :src="`${prefix}/What.jpg`">
    <p class="two_what">Discrimination is the <mark class="highlights"><b>act of ignoring one’s individuality and grouping them into different categories</b></mark> <mark class="highlights"><b>while marginalizing individuals based on their group</b></mark>.
    While in reality, distinction should be done clearly, the problem that is being addressed these days are <mark class="highlights"><b>social discrimination, not distinction</b></mark>, which causes unequal treatment amongst people.
    Even within social discrimination though, there is<mark class="highlights"><b>no clear</b></mark> line on what is categorized as distinction and what is categorized as discrimination. <br><br>
    Furthermore, as equal opportunities for all has been emphasized in our current society, which increases our awareness of people and problems around us.
    Therefore, as our awareness increase, what we once did not consider as discrimination could be considered as discrimination now or in the future.
  <br>
    </p>
    <img class="drawing3" :src="`${prefix}/discrimination2.jpg`">

    <h3 class="start_what"><span class="under">Discrimination and Distinction</span></h3>
    <p class="two_what">
    <br>
    <mark class="highlights"><b>Discrimination</b></mark> <br>
Treating people differently based on a certain factor(s).<br><br>
    <mark class="highlights"><b>Distinction</b></mark> <br>
Categorising people into certain groups based on factors (e.g. Asian People are categorized as Asian based on their ethnicity). <br><br>

<b>However, in cases where distinction based on factors which cause/leads to mistreatment/unfair treatment, it is considered as discrimination. Moreover, if the side that is being group feels mistreated/marginalized, it is also considered as discrimination.</b><br><br>

    </p>

    </div>
    <div class="nextback">
        <nuxt-link to="/en/"><img class="back" :src="`${prefix}/back2.png`"></nuxt-link>
            <nuxt-link to="/en/survey"><img class="next" :src="`${prefix}/next.png`"></nuxt-link>
        </div>

      <Footereng></Footereng>
  </div>
</template>

<script>
import Mixin from "~/mixins/mixin";
import Headereng from "~/components/Headereng"
import Footereng from "~/components/Footereng"
export default {
  name: "Index",
  mixins: [ Mixin ],
  components: { Headereng, Footereng },
  head() {
    return {
      title: "What?-Introducing Racism for High School Students by High School Students-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "A description of what discrimination is is explained." }
      ]
    }
  },
}　
</script>

<style>

/*.two{
  font-family: "Noto Sans JP";
  width: 63%;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 18px;
}*/
.two_what{
  width: 50%;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 18px;
  text-indent: 1em;
}

 .start_what{
    font-weight: bold;
    font-size: 30px;
    margin: 0 auto;
    width: 50%;
    color: black;
  }

.drawing3{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  height: 370px;
  margin-top: 0px;
}

.drawing1{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 500px;
  margin-top: 0px;
  margin-bottom: 30px;
}

</style>
