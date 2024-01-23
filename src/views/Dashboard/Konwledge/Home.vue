<script setup>
import {ref, onMounted, computed, watch} from "vue";
import {Language, Language_data} from "@/api/v1/data.js";
import {Open_Md} from "@/views/Dashboard/Konwledge/index.js";


const data=ref([])

onMounted(() => {
  Language().then(res => {
    data.value = res.data.data
  })
})


</script>
<template>


  <template v-if="data!==null">


    <div class="text-[var(--theme-title)] h-full overflow-y-scroll">
      <h1 class="text-2xl mb-5">
        使用文档
      </h1>
      
      <div class="grid sm:grid-cols-2 gap-5">
        <div class="p-10 mt-5 rounded-2xl bg-[var(--theme-com)] shadow-lg shadow-[var(--theme-shadow-bg)]" 
            v-for="item in Object.keys(data)"
        >
         <p class="w-full p-2 text-center text-xl">{{item}}</p>
          <div class="grid mt-2 lg:grid-cols-3 gap-5 grid-cols-2">
            <div v-for="i in data[item]"
                 @click="Open_Md(i.id)"
            class="p-5 bg-[var(--theme-com-item)] rounded-2xl">
              {{i.title}}
            </div>
          </div>
          
        </div>
      </div>
    </div>

  </template>


</template>


<style scoped>

</style>