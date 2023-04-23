<template>
<!-- can you do a background with blurred circles moving in loop with tailwind? -->
 


  <div v-show="loaded" ref="loadingPage" class="flex absolute inset-0 h-screen overflow-hidden">
    <div class="m-auto overflow-hidden">
    <h1 ref="split" class="text-Roboto text-xl md:text-3xl ">A L M A D A || M A T I A S</h1>
  </div>
  </div>

  <div ref="mainPage" class="h-screen  bg-gray-300 dark:bg-background-primary transition-all duration-1000 opacity-0 z-30">
<div class="-z-50">
    <div class="overflow-hidden absolute h-screen w-screen">
    <svg v-if="isDark" class=" blur-md h-screen w-screen transition-all duration-1000" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'><rect fill='#000000' width='2000' height='1500'/><defs><radialGradient id='a' gradientUnits='objectBoundingBox'><stop  offset='0' stop-color='#111D69'/><stop  offset='1' stop-color='#000000'/></radialGradient><linearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'><stop  offset='0' stop-color='#090f35'/><stop  offset='1' stop-color='#000000'/></linearGradient><path id='s' fill='url(#b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/><g id='g'><use href='#s' transform='scale(0.12) rotate(60)'/><use href='#s' transform='scale(0.2) rotate(10)'/><use href='#s' transform='scale(0.25) rotate(40)'/><use href='#s' transform='scale(0.3) rotate(-20)'/><use href='#s' transform='scale(0.4) rotate(-30)'/><use href='#s' transform='scale(0.5) rotate(20)'/><use href='#s' transform='scale(0.6) rotate(60)'/><use href='#s' transform='scale(0.7) rotate(10)'/><use href='#s' transform='scale(0.835) rotate(-40)'/><use href='#s' transform='scale(0.9) rotate(40)'/><use href='#s' transform='scale(1.05) rotate(25)'/><use href='#s' transform='scale(1.2) rotate(8)'/><use href='#s' transform='scale(1.333) rotate(-60)'/><use href='#s' transform='scale(1.45) rotate(-30)'/><use href='#s' transform='scale(1.6) rotate(10)'/></g></defs><g  transform=''><g  transform=''><circle fill='url(#a)' r='3000'/><g opacity='0.5'><circle fill='url(#a)' r='2000'/><circle fill='url(#a)' r='1800'/><circle fill='url(#a)' r='1700'/><circle fill='url(#a)' r='1651'/><circle fill='url(#a)' r='1450'/><circle fill='url(#a)' r='1250'/><circle fill='url(#a)' r='1175'/><circle fill='url(#a)' r='900'/><circle fill='url(#a)' r='750'/><circle fill='url(#a)' r='500'/><circle fill='url(#a)' r='380'/><circle fill='url(#a)' r='250'/></g><g  transform=''><use href='#g' transform='rotate(10)'/><use href='#g' transform='rotate(120)'/><use href='#g' transform='rotate(240)'/></g><circle fill-opacity='0' fill='url(#a)' r='3000'/></g></g></svg>
  </div>
  <div class="overflow-hidden absolute h-screen w-screen">
    <svg v-if="!isDark" class="blur-sm h-screen w-screen transition-all duration-1000" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'><rect fill='#C5C5C5' width='2000' height='1500'/><defs><radialGradient id='a' gradientUnits='objectBoundingBox'><stop  offset='0' stop-color='#FFFFFF'/><stop  offset='1' stop-color='#C5C5C5'/></radialGradient><linearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'><stop  offset='0' stop-color='#e2e2e2'/><stop  offset='1' stop-color='#C5C5C5'/></linearGradient><path id='s' fill='url(#b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/><g id='g'><use href='#s' transform='scale(0.12) rotate(60)'/><use href='#s' transform='scale(0.2) rotate(10)'/><use href='#s' transform='scale(0.25) rotate(40)'/><use href='#s' transform='scale(0.3) rotate(-20)'/><use href='#s' transform='scale(0.4) rotate(-30)'/><use href='#s' transform='scale(0.5) rotate(20)'/><use href='#s' transform='scale(0.6) rotate(60)'/><use href='#s' transform='scale(0.7) rotate(10)'/><use href='#s' transform='scale(0.835) rotate(-40)'/><use href='#s' transform='scale(0.9) rotate(40)'/><use href='#s' transform='scale(1.05) rotate(25)'/><use href='#s' transform='scale(1.2) rotate(8)'/><use href='#s' transform='scale(1.333) rotate(-60)'/><use href='#s' transform='scale(1.45) rotate(-30)'/><use href='#s' transform='scale(1.6) rotate(10)'/></g></defs><g  transform=''><g  transform=''><circle fill='url(#a)' r='3000'/><g opacity='0.5'><circle fill='url(#a)' r='2000'/><circle fill='url(#a)' r='1800'/><circle fill='url(#a)' r='1700'/><circle fill='url(#a)' r='1651'/><circle fill='url(#a)' r='1450'/><circle fill='url(#a)' r='1250'/><circle fill='url(#a)' r='1175'/><circle fill='url(#a)' r='900'/><circle fill='url(#a)' r='750'/><circle fill='url(#a)' r='500'/><circle fill='url(#a)' r='380'/><circle fill='url(#a)' r='250'/></g><g  transform=''><use href='#g' transform='rotate(10)'/><use href='#g' transform='rotate(120)'/><use href='#g' transform='rotate(240)'/></g><circle fill-opacity='0.2' fill='url(#a)' r='3000'/></g></g></svg>
  </div>
</div>
  <div>
      <button class="z-50 fixed bottom-5 right-5 ">
      
        <div @click="toggleDark()"  >
          
          <svg v-if="!isDark" class="w-8 h-8 md:w-12 md:h-12 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 p-1 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
          <svg v-if="isDark" class="w-8 h-8 md:w-12 md:h-12 relative rounded-full transition duration-500 transform bg-blue-900 -translate-x-2 p-1 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
          
        </div>
     
      </button>
    </div>
  <header class="">
    <nav class="h-30 w-screen  space-x-8 pr-36 pt-8 flex justify-end sm:flex-row relative">  
      <div class="h-20 w-20 mt-4 md:mt-0 ml-10 flex-1">
        <RouterLink to="/">
        <img v-if="!isDark" src=" /Amicon.png " class=" md:ml-20 object-scale-down h-12 md:h-24 w-12 md:w-20 font-bold font-sans flex-1 pb-2 -mt-4 transition-all ">
        <img v-if="isDark" src=" /AmiconDarkMode.png " class=" md:ml-20 object-scale-down h-12 md:h-24 w-12 md:w-20 font-bold font-sans flex-1 pb-2 -mt-4 transition-all ">
        </RouterLink>
      </div>

      <!-- Navigation bar -->

      <div class="">
        <Transition name="nav2" mode="out-in">
        <div v-show="showNavBar" ref="navBar" class="w-full block sm:flex sm:items-center sm:w-auto sm:flex-grow">
          <RouterLink class="px-3 md:text-xl xl:text-2xl font-Roboto font-bold dark:text-white text-black lg:hover:text-2xl xl:hover:text-3xl hover:text-green-300 transition-all duration-500 dark:hover:text-violet-400 " to="/">Inicio</RouterLink>
          <RouterLink class="px-3 md:text-xl xl:text-2xl font-Roboto font-bold dark:text-white text-black lg:hover:text-2xl xl:hover:text-3xl hover:text-green-300 transition-all duration-500 dark:hover:text-violet-400 " to="/about">Sobre Mi</RouterLink>
          <RouterLink class="px-3 md:text-xl xl:text-2xl font-Roboto font-bold dark:text-white text-black lg:hover:text-2xl xl:hover:text-3xl hover:text-green-300 transition-all duration-500 dark:hover:text-violet-400 " to="/curriculum">Curriculum</RouterLink>
          <RouterLink class="px-3 py-3 md:text-xl xl:text-2xl font-Roboto font-bold dark:text-white text-black lg:hover:text-2xl xl:hover:text-3xl hover:text-green-300 transition-all duration-500 dark:hover:text-violet-400 " to="/contact">Contacto</RouterLink>
        </div>
      </Transition>
      </div>

      <!-- Button -->

      <Transition name="fade" mode="out-in">
      <div class="absolute md:hidden top-8 right-9">

        <button @click="toggleShowNavBar" class="border rounded px-2 py-1 flex items-end dark:bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
 
      </div>
    </Transition>

    <!-- Navigation bar for mobile devices -->

    </nav>
    <Transition name="nav" mode="out-in">
      
    <div v-show="mobileNavBar" class="w-full relative items-center flex flex-col justify-center -mt-2 pb-1 overflow-y-hidden" >
          <RouterLink class="md:px-3 py-1 md:pb-3 font-Roboto font-bold dark:text-white text-black hover:text-lg hover:text-green-300 dark:hover:text-violet-400 transition-all duration-500 " to="/">Inicio</RouterLink>
          <RouterLink class="md:px-3 py-1 md:py-3 font-Roboto font-bold dark:text-white text-black hover:text-lg hover:text-green-300 dark:hover:text-violet-400 transition-all duration-500 " to="/about">Sobre Mi</RouterLink>
          <RouterLink class="md:px-3 py-1 md:py-3  font-Roboto font-bold dark:text-white text-black hover:text-lg hover:text-green-300 dark:hover:text-violet-400 transition-all duration-500 " to="/curriculum">Curriculum</RouterLink>
          <RouterLink class="md:px-3 py-1 md:py-3  font-Roboto font-bold dark:text-white text-black hover:text-lg hover:text-green-300 dark:hover:text-violet-400 transition-all duration-500 " to="/contact">Contacto</RouterLink>
        </div>
    
      </Transition>
  </header>

  <!-- Page content -->
  
  <RouterView v-slot="{Component}" class="overflow-hidden transition-all flex flex-1">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</div>


</template>
<script type="module" setup lang="ts">
// Imports
import { RouterLink, RouterView } from 'vue-router';
import { ref, onMounted, render } from 'vue';
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
    console.log("Bienvenido a mi pagina ( ͡~ ͜ʖ ͡°)")
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