<script setup lang="ts">
import { useDark } from "@vueuse/core";
  import { gsap } from "gsap";
  import { onMounted,ref} from "vue";
  import axios from 'axios';
  let langEs = true;
  let langEn = false;
  const isDark = useDark();
  const download = ref();
 const downloadFileES = () => {
  let link = document.createElement('a');
link.setAttribute('type', 'hidden');
link.href = '/CV.pdf';
link.download = 'CV.pdf';
document.body.appendChild(link);
link.click();
link.remove();
}
const downloadFileEN = () => {
  let link = document.createElement('a');
link.setAttribute('type', 'hidden');
link.href = '/Resume.pdf';
link.download = 'Resume.pdf';
document.body.appendChild(link);
link.click();
link.remove();
}

  onMounted(() => {
  gsap.fromTo(download.value,{
  y: -300,
  opacity: 0,
  
}, {
  y:0,
  opacity: 1,
  stagger: 0.2,
});
gsap.fromTo("section",{
  y: -1000,
opacity:0,
}, {
  y:0,
  stagger: 0.3,
  opacity: 0.3,
});

});
</script>

<template>
  <main>
    <div class=" flex-row hidden md:flex ">
      
      <div ref="left" class="">
        <section class="flex relative h-screen w-screen dark:bg-black bg-white items-center justify-center" >
          <p class="text-center font-Roboto text-black font-bold text-9xl">Hola</p>
        </section>
      </div>
    </div>

    <!-- Mobile VIEW -->

    <div ref="download" class="md:hidden flex flex-col font-bold items-center mb-32 space-y-10 pt-10 ">
      
      <h1 class="flex max-w-md dark:text-white text-center font-Roboto text-black text-2xl md:text-left">DESCARGA MI <span class="text-curriculum-primary pl-1 text-center md:text-left dark:text-violet-600">CURRICULUM</span></h1>
     <div class="flex space-x-6">
      <button  @click="downloadFileES" class=" border hover:bg-green-400 transition-all items-center flex font-bold rounded-full h-14 w-44 py-3 px-6 font-Roboto text-white bg-green-500 dark:bg-violet-600 dark:hover:bg-violet-500 shadow-xl">
        
        <h1 class="flex ">DESCARGA</h1> 
        <div class="flex pl-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
</svg>

        </div>
      </button>
      <button  @click="downloadFileEN" class=" border hover:bg-green-400 transition-all items-center flex font-bold rounded-full h-14 w-44 py-3 px-6 font-Roboto text-white bg-green-500 dark:bg-violet-600 dark:hover:bg-violet-500 shadow-xl">
        
        <h1 class="flex ">DOWNLOAD</h1> 
        <div class="flex pl-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
</svg>

        </div>
      </button>
    </div>
      <img  class="w-1/2 h-1/2 border rounded shadow-xl" src="/Cv.jpg" alt="NotFund">
    </div>
  </main>
</template>
