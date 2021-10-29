<template>
  <main class='mt-12'>
    <section class='flex items-center bg-gray-800 px-44'>
      <h1 class='text-9xl flex-wrap text-white font-serif align-middle'>
        BBKing SJX
      </h1>
      <img src='/background.png' alt='background_image'>
    </section>

    <section>
      <p id="random-quote" class='text-3xl text-center mt-7 mb-10'>
        &nbsp; 经典永流传 &nbsp;
      </p>
      <div class='flex items-center justify-center'>
        <div class='relative'>
          <img src='/avatar.png' alt='avatar of sjx'
               class='rounded-full w-36 h-36 border-green-600 border-4'>
          <!-- 做动画用的辅助标签 -->
          <div id='animate-assist-tag'
               class='absolute w-36 h-36 top-0 rounded-full bg-green-600'></div>
        </div>
        <div class='ml-14'>
          <div class='w-5 h-5 triangle inline-block border-gray-600 border-2'></div>
          <div class='inline-block -ml-4 p-5 border-gray-600 border-2 rounded-2xl shadow-xl'>
            <p>月薪过万不是刚刚站在社会底层？</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
#random-quote::before, #random-quote::after {
  content: "";
  font-size: 0;
  border-width: 7px 150px;
}

#random-quote::before {
  border-color: transparent rgb(52, 211, 153) rgb(52, 211, 153) transparent;
}
#random-quote::after {
  border-color: transparent transparent rgb(52, 211, 153) rgb(52, 211, 153);
}

@keyframes ripple {
  0%{
    transform: scale(1);
    opacity: 0.5;
  }
  100%{
    transform: scale(1.3);
    opacity: 0;
  }
}

#animate-assist-tag {
  animation: ripple 1.5s linear infinite;
  z-index: -1;
}

.triangle {
  clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
  transform: rotate(45deg);
  margin-right: -0.2px;

  background-color: white;
  z-index: 1;
}
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>
