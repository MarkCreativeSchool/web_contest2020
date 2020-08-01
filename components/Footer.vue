<template>
  <div class="full">
    <ul class="down">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "Footer",
}

</script>

<style>



.down{
    list-style: none; 
    color: #fff; 
    text-align: center; 
    background-color: #000000; 
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10.5rem;
    padding-top: 30px; 
}

li{
    padding-top: 5px; 
}

</style>
