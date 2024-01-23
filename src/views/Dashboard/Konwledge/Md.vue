<script setup>
import {ref, defineProps, onMounted} from "vue";
import {Language_data} from "@/api/v1/data.js";
import {marked} from 'marked';

  const pop=defineProps({
    id:Number,
    move_node:Function
  })
  onMounted(()=>{
    Language_data(pop.id).then(res=>{
      text.value=marked(res.data.data.body)
    })
  })
  const text=ref(``)
</script>
<template>
  <!--      子内容-->
  <div class=" top-0 bg-[rgba(0,0,0,0.5)] w-full h-full absolute">
    <div class="flex h-full w-full justify-center items-center">
      <div class="max-w-96 relative z-20 p-10 text-[var(--theme-title)] sm:max-w-[50vw] max-h-96 sm:max-h-[60vh] rounded-2xl overflow-y-scroll bg-[var(--theme-com)]">
        <div v-html="text"></div>
      </div>
      <div class="absolute top-0 w-full h-full z-10" @click="pop.move_node()"></div>
    </div>
    
  </div>

</template>