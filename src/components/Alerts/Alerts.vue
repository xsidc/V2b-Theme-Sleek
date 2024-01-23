<script setup>
import { defineProps,onMounted } from 'vue';
const pop=defineProps({
  title: String,
  conten: String,
  mess: Number,
  movetime:Number,
  move_vnode:Function,

})
onMounted(()=>{
  setTimeout(() => {

    if (pop.move_vnode) {
      pop.move_vnode()
    }
  }, pop.movetime);

})


</script>
<template>
  <div role="alert"
    class="cs animate__animated animate__shakeX rounded-xl  z-50 top-[5%] fixed right-0 left-0 m-auto inline-table  p-4 shadow-xl  bg-[var(--theme-com-item)]">
    <div class="flex items-start gap-4">
      <span class="text-green-600">
        <svg v-if="mess===200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <svg v-else t="1688549959035" class="icon w-[24px] h-[24px]" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2297" width="32" height="32"><path d="M331.274 684.336c8.978 8.977 23.545 8.977 32.523 0l148.966-148.991 148.992 148.991c8.978 8.977 23.521 8.977 32.5 0 8.978-8.979 9.001-23.522 0-32.501L545.287 502.844l148.969-148.969c8.978-8.976 8.978-23.522 0-32.5-8.979-8.978-23.522-9-32.5 0l-148.992 148.97L363.797 321.354c-8.979-8.957-23.501-8.957-32.479 0-8.978 8.978-8.978 23.545 0 32.521l148.946 148.969L331.274 651.835C322.316 660.813 322.316 675.357 331.274 684.336zM949.233 510.295c0-241.061-195.408-436.468-436.47-436.468-241.061 0-436.468 195.407-436.468 436.468s195.407 436.469 436.468 436.469c98.961 0 189.572-33.667 262.79-89.153 3.006-3.409 4.983-7.766 4.983-12.658 0-10.683-8.666-19.348-19.35-19.348-5.544 0-10.482 2.2-14.006 5.927l-0.246 0c-65.519 48.211-146.164 77.075-233.743 77.075-218.282 0-395.261-177.004-395.261-395.26 0-218.302 176.979-395.258 395.261-395.258 218.3 0 395.258 176.956 395.258 395.258 0 66.664-15.645 129.421-44.821 184.545l0 0.314c-0.54 1.842-1.123 3.636-1.123 5.61 0 10.684 8.664 19.349 19.347 19.349 8.328 0 15.286-5.343 18.001-12.704l0 0.136C930.941 650.533 949.233 582.568 949.233 510.295z" fill="#d81e06" p-id="2298" data-spm-anchor-id="a313x.7781069.0.i0" class=""></path></svg>
      </span>
    
      <div class="flex-1">
        <strong class="block font-medium text-[var(--theme-title)]">
          {{title}}
        </strong>

        <p class="mt-1 text-sm text-[var(--theme-text)]">
          {{ conten }}
        </p>
      </div>

    </div>
  </div>
</template>

<style scoped>
.cs{
  box-shadow: 0 0 2px white;
}
</style>