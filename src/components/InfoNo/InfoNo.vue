<script setup>
import {defineProps} from "vue";
const pop=defineProps({
  title:String
})

</script>
<template>
  <div class="bg-[var(--theme-com-item)] relative
  w-full h-full  rounded-lg filter blur-[0.8px]">
    <p class="text-[var(--theme-text)]
    flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 m-auto">
      {{pop.title}}
    </p>
  </div>
</template>