<script setup lang="ts">
  import { useDark } from "@vueuse/core";
  import { gsap } from "gsap";
  import { onMounted, ref } from "vue";

 const desktop = ref();
  const isDark = useDark();
  onMounted(() => {
  gsap.fromTo("h1, p",{
  x: -300,
  opacity: 0,
  
}, {
  x:0,
  opacity: 1,
  stagger: 0.2,
}),
gsap.to("#image",{
  opacity: 1,
});
});
</script>

<template>
  <main>
    <div>

    <div class=" flex flex-col-reverse md:flex-row h-screen w-screen items-center mx-auto px-6 md:mt-10 space-y-0 md:space-y-5 dark:text-white font-Roboto">
      <!-- Left Side -->
      <div class=" flex flex-col items-center  space-y-4 md:space-y-4 md:w-2/3 h-screen md:my-auto md:mx-20 md:pt-44">
        <h1 class=" transition-all flex mx-auto text-center font-bold text-3xl md:text-6xl md:text-left">  <h1 class="text-curriculum-primary text-2xl sm:text-3xl md:text-4xl xl:text-6xl text-center font-bold md:text-left dark:text-violet-600">Desarrollador front-end</h1></h1>
        
        <p  class="mx-auto text-center text-sm sm:text-base md:text-lg xl:text-xl text-black font-bold md:text-left dark:text-gray-300 dark:font-bold">Mi enfoque combina diseño y funcionalidad para ofrecer soluciones de alta calidad que conectan con los usuarios. <a class="hidden lg:flex">Con experiencia en tecnologías web modernas y herramientas de desarrollo, creo sitios web y aplicaciones interactivas y atractivas.</a> </p>
      
      </div>
      <!-- Right Side -->
      <div class=" items-center flex flex-col md:my-auto md:pt-16 md:h-screen md:w-screen   transition-all z-40 ">
           <div>
            
            <img id="image" ref="desktop" src="/untitled.png" alt="No image found lol" class=" max-h-full m-auto pb-10  object-scale-down md:block transition-all z-30">
          
           </div>
    </div>
    </div>
  </div>
  </main>
</template>