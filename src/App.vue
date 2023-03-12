<template>
  <div v-show="loaded" ref="loadingPage" class="flex h-screen">
    <div class="m-auto">
    <h1 ref="split" class="text-Roboto text-3xl ">A L M A D A || M A T I A S</h1>
  </div>
  </div>
  <div ref="mainPage" class="min-h-screen fixed bg-white dark:bg-gray-800 transition-all duration-1000 opacity-0">
    
    <div>
      <button class="fixed bottom-5 right-5 ">
      
        <div @click="toggleDark()"  >
          
          <svg v-if="!isDark" class="w-8 h-8 md:w-10 md:h-10 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 p-1 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
          <svg v-if="isDark" class="w-8 h-8 md:w-10 md:h-10 relative rounded-full transition duration-500 transform bg-blue-900 -translate-x-2 p-1 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
          
        </div>
     
      </button>
    </div>
  <header>
    <nav class="h-30 w-screen  space-x-8 pr-36 pt-8 flex justify-end sm:flex-row relative">  
      <div class="h-20 w-20 flex-1 pl-10 block">
        
        <img v-if="!isDark" src=" /Amicon.png " class="object-scale-down h-20  w-20 font-bold font-sans flex-1 pb-2 -mt-4 transition-all ">
        <img v-if="isDark" src=" /AmiconDarkMode.png " class="object-scale-down h-20  w-20 font-bold font-sans flex-1 pb-2 -mt-4 transition-all ">
      </div>

      <!-- Navigation bar -->

      <div class="">
        <Transition name="nav2" mode="out-in">
        <div v-show="showNavBar" ref="navBar" class="w-full block sm:flex sm:items-center sm:w-auto sm:flex-grow">
          <RouterLink class="px-3 font-Roboto font-bold dark:text-white text-black hover:text-lg hover:text-green-300 transition-all duration-500 dark:hover:text-violet-400 " to="/">Inicio</RouterLink>
          <RouterLink class="px-3 font-Roboto font-bold dark:text-white text-black hover:text-lg hover:text-green-300 transition-all duration-500 dark:hover:text-violet-400 " to="/about">Sobre Mi</RouterLink>
          <RouterLink class="px-3  font-Roboto font-bold dark:text-white text-black hover:text-lg hover:text-green-300 transition-all duration-500 dark:hover:text-violet-400 " to="/curriculum">Curriculum</RouterLink>
          <RouterLink class="px-3 py-3  font-Roboto font-bold dark:text-white text-black hover:text-lg hover:text-green-300 transition-all duration-500 dark:hover:text-violet-400 " to="/contact">Contacto</RouterLink>
        </div>
      </Transition>
      </div>

      <!-- Button -->

      <Transition name="fade" mode="out-in">
      <div class="absolute md:hidden top-9 right-9">

        <button @click="toggleShowNavBar" class="border rounded px-2.5 py-1 flex items-end dark:bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
 
      </div>
    </Transition>

    <!-- Navigation bar for mobile devices -->

    </nav>
    <Transition name="nav" mode="out-in">
    <div v-show="mobileNavBar" class="w-full items-center flex flex-col justify-center pb-5 overflow-y-hidden" >
          <RouterLink class="px-3 pb-3 font-Roboto font-bold dark:text-white text-black hover:text-lg hover:text-blue-300 transition-all duration-500 " to="/">Inicio</RouterLink>
          <RouterLink class="px-3 py-3 font-Roboto font-bold dark:text-white text-black hover:text-lg hover:text-blue-300 transition-all duration-500 " to="/about">Sobre Mi</RouterLink>
          <RouterLink class="px-3 py-3  font-Roboto font-bold dark:text-white text-black hover:text-lg hover:text-blue-300 transition-all duration-500 " to="/curriculum">Curriculum</RouterLink>
          <RouterLink class="px-3 py-3  font-Roboto font-bold dark:text-white text-black hover:text-lg hover:text-blue-300 transition-all duration-500 " to="/contact">Contacto</RouterLink>
        </div>
      </Transition>
  </header>

  <!-- Page content -->
  
  <RouterView v-slot="{Component}" class="overflow-hidden">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</div>
</template>
<script setup lang="ts">
// Imports

import { RouterLink, RouterView } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useDark, useToggle } from "@vueuse/core";
import { gsap } from "gsap";


// Script starts
// Variable definition
const navBar = ref();
const mainPage = ref();
const split = ref();
const loadingPage = ref();
let loaded = ref(true);
 let mobileNavBar = ref();
 let windowWidth = ref();
 let showNavBar = ref();
 const isDark = useDark();
 const toggleDark = useToggle(isDark);
//Methods



function delay(ms: number) {
    return new Promise<void>(function(resolve) {
       setTimeout(resolve, ms);
    });
};
const loadPage = () => {
    async function loading() {
    await delay(1500);
    gsap.to(loadingPage.value, {
    delay: 0.5,
    duration: 1,
    opacity: 0,
    });
    
    await delay(1000);
    gsap.to(mainPage.value, {
    duration: 0.3,
    opacity: 1,
    stagger: 0.2,
    });
    loaded.value = false;
    console.log('page Loaded')
  };
  loading();
};




onMounted(() => {
  gsap.from(split.value, {
    delay: 0.5,
    duration: 1,
  y:'+100',
  autoAlpha: 0,
  ease:"back.out(1.7)"
});


});


const checkScreen = () => {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value <= 768){
    showNavBar.value = false;
    return;
  }
  showNavBar.value = true;
  mobileNavBar.value = false;
};


const toggleShowNavBar = () => {
  mobileNavBar.value = !mobileNavBar.value;
  console.log('Click');
  console.log(mobileNavBar);
};

//Load events

window.addEventListener('resize',checkScreen);
window.addEventListener('load',checkScreen);
window.addEventListener('load',loadPage);
</script>

<style scoped>
/* Translate Animation */
.nav-enter-active,
.nav-leave-active,
.nav2-enter-active,
.nav2-leave-active {
  transition: 0.3s ease all;
}

.nav2-enter-from,
.nav2-leave-to{
  transform: translateX(500px);
}


.nav-enter-from,
.nav-leave-to{
  transform: translateY(-250px);
}

.nav-enter-to{
  transform: translateY(0);
}
.nav2-enter-to{
  transform: translateX(0);
}

/* Fade Animation */
.fade-enter-active,
.fade-leave-active,
.button-leave-active,
.button-enter-active {
  transition: opacity 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.fade-enter-from,
.fade-leave-to,
.button-enter-from,
.button-leave-to {
  opacity: 0; 
}
.fade-enter-to,
.button-enter-to{
  transition: opacity 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
}


</style>