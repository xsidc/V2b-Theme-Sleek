<script setup>
import {defineProps, watch} from 'vue';

const pop = defineProps({
  status: Boolean,
  title: String,
  remnode: Function
})


</script>

<template>
  <!--  加载动画-->
  <div class="cs bg-[rgba(0,0,0,0.5)] h-screen w-screen fixed left-0 right-0 top-0 bottom-0 m-auto z-50">

    <div class="absolute m-auto left-0 right-0 top-0 bottom-0">
      <div class="loader h-full flex justify-center items-center">
        <div class="loader__circle"></div>
        <div class="loader__circle"></div>
        <div class="loader__circle"></div>
        <div class="loader__circle"></div>
        <div class="loader__circle"></div>
      </div>

    </div>
  </div>

</template>

<style scoped>
.loader {
  position: relative;
  display: flex;
  gap: 0.3em;
}

.loader::before {
  content: "";
  position: absolute;

  width: 4em;
  height: 2em;
  filter: blur(45px);
  background-color: #e299ff;
  background-image: radial-gradient(at 52% 57%, hsla(11,83%,72%,1) 0px, transparent 50%),
  radial-gradient(at 37% 57%, hsla(175,78%,66%,1) 0px, transparent 50%);
}

.loader__circle {
  --size__loader: 0.6em;
  width: var(--size__loader);
  height: var(--size__loader);
  border-radius: 50%;
  animation: loader__circle__jumping 2s infinite;
  background-color: #b499ff;
}

.loader__circle:nth-child(2n) {
  animation-delay: 300ms;
  background-color: #e499ff;
}

.loader__circle:nth-child(3n) {
  animation-delay: 600ms;
}

@keyframes loader__circle__jumping {
  0%, 100% {
    transform: translateY(0px);
  }

  25% {
    transform: translateY(-15px) scale(0.5);
  }

  50% {
    transform: translateY(0px);
  }

  75% {
    transform: translateY(5px) scale(0.9);
  }
}
</style>
