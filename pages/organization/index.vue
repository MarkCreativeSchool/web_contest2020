<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    
    <h3 class="start">黒人差別に関する組織</h3>
    <div class="profile">
     <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
          </figure>
        </div>

        <div class="content">
              <b>Black Lives Matter (BLM)</b> <br></br>
              説明
              
         </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
          </figure>
        </div>

            <div class="content">
              <b>Black Alliance for Just Immigration</b> <br></br>
              説明
            </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
          </figure>
        </div>

            <div class="content">
             <b>Color Of Change</b> <br></br>
              説明
            </div>
      </div>



      </div>
</div>


<div class="profile">
     <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
          </figure>
        </div>

        <div class="content">
              <b>The Movement for Black Lives</b> <br></br>
              説明
              
         </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
          </figure>
        </div>

            <div class="content">
              <b>NAACP Legal Defense and Educational Fund, Inc.</b> <br></br>
              説明
            </div>
      </div>
      <h3 class="start">他</h3>
            <ul class="other" style="list-style: none;">
                <li>UndocuBlack Network ==> <a href="https://undocublack.org/" target="_blank">https://undocublack.org/</a></li>
                <li></li>
            </ul>

</div>
     <Footer></Footer>
  </div>
</template>

<script>
import Header from "~/components/Header"
import Footer from "~/components/Footer"
export default {
  name: "Index",
  components: { Header, Footer },
}　
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
.two{
  font-family: "Noto Sans JP"; 
  width: 87%; 
  margin: 0 auto;
  padding-top: 20px; 
}


.start{
  font-family: "Noto Sans JP"; 
  color: #ffffff;
  background-color: #000000;
  background-position: center center;
  width: 90%; 
  margin: 0 auto;
  font-size: 30px; 
  border-radius: 3px; 
  text-shadow: 0.5px 0.5px #f6d405;
  text-align: center; 
}

.more{
  font-family: "Noto Sans JP"; 
  color: #ffffff;
  background-color: #000000;
  background-position: center center;
  width: 90%; 
  margin: 0 auto;
  font-size: 30px; 
  border-radius: 3px; 
  text-shadow: 0.5px 0.5px #f6d405;
  text-align: center; 
  margin-top: 45px; 
}

.card{
  width: 25%;
  display: inline-block;
  margin: 20px; 
  padding: 1px; 
  border-radius: 3px; 
  background-color: #000000; 
}

.profile{
  display: block; 
  width: 100%; 
  text-align: center; 
}

.content{ 
  font-size: 14px; 
  color: #f6d405;
}

</style>