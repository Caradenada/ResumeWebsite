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
    
  </main>
</template>
