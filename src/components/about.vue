<template>
<v-app-bar color="white" >

<div style="display: flex; justify-content: center; align-items: center; width: 100%;">
    <h1>ABOUT US</h1>
</div>


</v-app-bar>
<v-card class="mx-auto" elevation="24">

<v-carousel hide-delimiters>
    <v-carousel-item src="../public/staff.jpg" cover> </v-carousel-item>
    <v-carousel-item src="../public/boardroom.jpg" cover> </v-carousel-item>
    <v-carousel-item src="../public/kit.jpg" cover> </v-carousel-item>
    <v-carousel-item src="../public/bar.jpg" cover> </v-carousel-item>
   
</v-carousel>

</v-card>
</template>

<script setup>
</script>

<style scoped>
h1 {
  color: #2c3e50; /* Change this to your desired color */
  margin: 0; /* Remove default margin for better centering */
}

</style>
