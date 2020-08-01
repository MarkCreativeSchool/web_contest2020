<template>
  <div class="full">
   <div class="up">
   <h1> 高校生の高校生による高校生のための黒人差別問題</h1>
    </div>
    <div class="toggle">
        <a class="bar">トップ</a>
        <a class="bar">歴史</a>
        <a class="bar">現問題</a>
        <a class="bar">社会影響</a>
        <a class="bar">スポーツ</a>
        <a class="bar">組織</a>
        <a class="bar">他国での差別</a>
        <a class="bar">他の差別</a>
        <a class="bar">その他</a>
        <a class="bar">ENGLISH VERSION</a>
  </div> 
           
  </div>
</template>

<script>
export default {
    name: "Header",
}

</script>

<style>

.up{
    padding-top: 10px; 
    text-align: center; 
    background-color: #000000;
    color: #ffffff; 
}
h1{
    font-size: 50px; 
    font-family: "Rockwell"; 
    text-shadow: 1px 1px #f6d405;
}

.bar{
  float: left;
  color: #ffffff;
  text-align: center;
  padding: 17px 40px;
  text-decoration: none;
  font-size: 17px;
}

.bar:hover{
  color: #f6d405; 
}

.menu{
    width: 100%; 
}

.toggle{
background-color: #333;
  overflow: hidden;
}





</style>
