<script setup lang="ts">
  import { useDark } from "@vueuse/core";
  import { gsap } from "gsap";
import { ref, onMounted } from "vue";


  const isDark = useDark();
onMounted(() => {
  gsap.fromTo("h1, p",{
  x: -300,
  opacity: 0,
  
}, {
  x:0,
  opacity: 1,
  stagger: 0.2,
});

});



</script>

<template>
  <main>
    
    <div class=" flex flex-col-reverse md:flex-row h-screen w-screen items-center mx-auto px-6 mt:5 md:mt-10 space-y-0 md:space-y-10 dark:text-white font-Roboto transition-all">
    
      <!-- Left Side -->
      
      <div  class="flex flex-col items-center mb-32 space-y-10 md:w-1/2 h-screen md:my-auto pt-14 md:pt-56 transition-all">
        <h1 class="max-w-md text-center font-bold text-4xl md:text-6xl   md:text-left text-curriculum-primary dark:text-violet-500"> Sobre Mi</h1>
        <div class="space-y-8" ref="text">
        <p class="max-w-sm text-center text-gray-500 md:text-left dark:text-gray-300 text-base dark:font-bold">
          Soy un desarrollador web enfocado a la parte del Front-end viviendo en Buenos Aires, Argentina.
        </p>
        <p class="max-w-sm text-center text-gray-500 md:text-left dark:text-gray-300 text-base dark:font-bold">
          
          Con 26 años he completado una tecnicatura en analisis, desarrollo y programacion de aplicaciones iniciandome asi en el mundo de la programacion.
          
        </p>
        <p class="max-w-sm text-center text-gray-500 md:text-left dark:text-gray-300 text-base dark:font-bold">
          Actualmente me encuentro terminando una licenciatura en gestion de la tecnologia en la universidad nacional de la matanza. 
        </p>
      </div>
      </div>
      
      <!-- Right Side -->
      <div class="md:flex hidden flex-col ml md:h-screen md:w-1/2 md:pl-10 md:pt-44">
        
        
      </div>
    </div>
  </main>
</template>
<style scoped>



</style>