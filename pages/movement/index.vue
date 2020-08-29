<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    
    <h3 class="start">反対運動</h3>
    <div class="profile">
     <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
          </figure>
        </div>

        <div class="content">
              <strong>ブラック・ライヴズ・マター・プラザ</strong> <br></br>
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
              <strong>Protests embrace ‘Black Lives Matter’ movement.</strong> <br></br>
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
             <strong>Protest in Philadelphia</strong> <br></br>
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
              <strong>Tear gas</strong> <br></br>
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
              <strong>Chicago Illinois</strong> <br></br>
              説明
            </div>
      </div>
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