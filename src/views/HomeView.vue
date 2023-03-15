<script setup lang="ts">
  import { useDark } from "@vueuse/core";
  import { gsap } from "gsap";
  import { onMounted } from "vue";


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
    <div class=" flex flex-col-reverse md:flex-row h-screen w-screen items-center mx-auto px-6 mt:5 md:mt-10 space-y-0 md:space-y-10 dark:text-white font-Roboto">
      <!-- Left Side -->
      <div class="flex flex-col items-center mb-32 space-y-4 md:space-y-12 md:w-1/2 h-screen md:my-auto pt-10 md:pt-56">
        <h1 class="flex max-w-md text-center font-bold text-3xl md:text-6xl md:text-left">  <h1 class="text-curriculum-primary text-3xl md:text-6xl text-center md:text-left dark:text-violet-600">Almada Matias</h1></h1>
        
        <p class="max-w-sm text-center md:text-xl xs:text-xl text-gray-500 md:text-left dark:text-gray-300 dark:font-bold">Desarrollador Front-end</p>
      </div>
      <!-- Right Side -->
      <div class="flex  md:h-screen   md:m-auto">
           
    </div>
    </div>
  </main>
</template>