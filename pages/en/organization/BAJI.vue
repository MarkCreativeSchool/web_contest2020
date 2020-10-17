<template>
  <div class="full">
  <Headereng></Headereng>
   <div class="info">

    <h3 class="start">Black Alliance for Just Immigration (BAJI)</h3>
    <p class="two">
        Founded in 2006, April. Educates black immigrants/African Americans to advocate for racial and social justice. There are organization committees in New York, Arizona, California, and Georgia. 
<br></br><b>Founders: </b>
<br></br><b>Kelvin Sauls: </b> A South African immigrant
<br></br><b>Phillip Lawson:</b>A long time Civil Rights leader/co-founder/co-chair of the California Interfaith Coalition for Immigrant Rights
<br></br>
<img class="baji" src="~/assets/baji.png">
<br></br>
    </p>

    <h3> class="start">Activities/Programs</h3>
        
        <div class="activity">
            <h6 class="program">BAJI Organizing Committees (BOCs)</h6>
            <hr>
            <p class="campaign">Leadership programs for directly affected people. </p>
            <br></br>
            <h6 class="program">The Black Immigration Network (BIN)</h6>
            <hr>
            <p class="campaign">A program for African American and black immigrant communities to understand one another. It allows engagement between black communities and their mission is to create strategies in order to advocate for racial justice. </p>
            <br></br>
            <h6 class="program">Technical Assistance and Training (TAT) Program</h6>
            <hr>
            <p class="campaign">Service in order to engage with African-American communities and organize programs that address stereotypes against black communities to create an understanding between communities and society. </p>
            <br></br>
            <h6 class="program">The Communications And Media Education on Race in America (CAMERA) Program</h6>
            <hr>
            <p class="campaign">Creates content, visuals, and educational materials to address issues regarding race, racism, and immigration. Also organizes tv programs, radio talks, articles, and media content. </p>
            <br></br>
            <h6 class="program">Advocacy STAND (Solidarity and Taking Action for New Directions) Program</h6>
            <hr>
            <p class="campaign">Program to spread the work of BAJI among other international organizations. </p>
            <br></br>
            <h6 class="program">The Faith Advocacy for Immigrants and Refugees (FAIR) Project</h6>
            <hr>
            <p class="campaign">Provides education regarding Black communities and issues to churches and faith-based organizations. This allows organizations to support fair immigration policies. </p>
            <br></br>
            <h6 class="program">African Diaspora Dialogues (ADD) and African American-Immigrant Dialogues (AAID)</h6>
            <hr>
            <p class="campaign">Program that brings African Americans together with diverse immigrant communities around similar issues. Both dialogues are geared toward bringing communities to the table to discuss their common interests, common experiences, and common public policy agendas.</p>
            <br></br>
            <h6 class="program">The State of Black Immigrants Research Institute</h6>
            <hr>
            <p class="campaign">Provides research, reports, fact sheets, and policy advisories for BAJI. It partners with universities in order to gain factual information, such as New York University School of Law, University of California Los Angeles Labor Center, and the University of Southern California, and individual scholars. It produces briefings for leaders and communities, advocacy tools, and education content for organizations. </p>
            <br></br>
            <h6 class="program">BAJI CLINIC (Cultural and Legal Immigration Navigation for Interdependent Communities)</h6>
            <hr>
            <p class="campaign">Provides Black immigrant community members have access to reputable and affordable immigration legal services and education</p>
            <br></br>
        </div>


    </div> 

    <div class="nextback">
            <nuxt-link to="/en/organization/BLM"><img class="back" src="~/assets/back2.png"></nuxt-link>
            <nuxt-link to="/en/organization/ColorOfChange"><img class="next" src="~/assets/next.png"></nuxt-link>
  </div>
    
     <Footer></Footer>
  </div>
</template>

<script>
import Headereng from "~/components/Headereng"
import Footer from "~/components/Footer"
export default {
  name: "Index",
  components: { Headereng, Footer },
}　
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
.two{
  font-family: "Noto Sans JP"; 
  width: 73%; 
  margin: 0 auto;
  padding-top: 20px; 
  font-size: 18px; 
  margin-bottom: 10px; 
}


.start{
  font-family: "Noto Sans JP"; 
  color: #ffffff;
  background-color: #000000;
  background-position: center center;
  width: 83%; 
  margin: 0 auto;
  font-size: 30px; 
  border-radius: 3px; 
  text-shadow: 0.5px 0.5px #f6d405;
  text-align: center; 
}

.activity{
    width: 80%;
    margin: 0 auto;
    margin-top: 30px; 
    font-family: "Noto Sans JP"; 
}

.program{
    width: 95%;
    margin: 0 auto;
    font-size: 21px; 
    font-weight: bold; 
}


.campaign{
  width: 90%; 
  margin: 0 auto;
  font-size: 15px; 
}

.baji{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  height: 370px; 
  margin-top: 0px; 
}

.next{
    display: inline-block;
    float: right; 
    margin-left: auto;
    margin-right: 40px;
    width: 100px; 
}

.back{
    display: inline-block;
    margin-left: 40px;
    float: left; 
    margin-right: auto;
    width: 100px; 
}

.nextback{
    text-align: center; 
}


</style>
