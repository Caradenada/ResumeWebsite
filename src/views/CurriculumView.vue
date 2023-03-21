<script setup lang="ts">
import { useDark } from "@vueuse/core";
  import { gsap } from "gsap";
  import { ref, onMounted } from "vue";

  const left = ref();
  const right = ref();
  const isDark = useDark();


  onMounted(() => {
    gsap.fromTo(left.value,{
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
    <div>
      <div>

      </div>
      <div ref="left">

      </div>
    </div>
    <div class="md:hidden flex flex-col font-bold items-center mb-32 space-y-20  h-screen pt-20 ">

      <h1 class="flex max-w-md dark:text-white text-center font-Roboto text-black text-3xl md:text-left">DESCARGA MI <span class="text-curriculum-primary pl-1 text-center md:text-left dark:text-violet-600">CURRICULUM</span></h1>

      <button class=" border items-center flex font-bold rounded-full h-14 w-44 py-3 px-6 font-Roboto text-white bg-green-500 dark:bg-violet-600 shadow-2xl">
        
        <h1 class="flex ">DESCARGA</h1> 
        <div class="flex pl-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
</svg>

        </div>
      </button>
    </div>
  </main>
</template>
