<template>
  <div>
    <header class='fixed w-full h-12 pt-3 -mt-12 bg-green-500'>
      <nav class='text-center'>
        <NuxtLink to='/'>
          <span class='px-5 text-lg font-medium text-white'>首页</span>
        </NuxtLink>
        <NuxtLink to='/'>
          <span class='px-5 text-lg font-medium text-white'>醒世恒言</span>
        </NuxtLink>
        <NuxtLink to='/'>
          <span class='px-5 text-lg font-medium text-white'>父亲们の爱</span>
        </NuxtLink>
        <NuxtLink to='/'>
          <span class='px-5 text-lg font-medium text-white'>其他</span>
        </NuxtLink>
      </nav>
    </header>
    <main class='mt-12'>
      <section class='flex items-center bg-gray-800 px-44'>
        <h1 class='text-9xl flex-wrap text-white font-serif align-middle'>BBKing SJX</h1>
        <img src='/background.png' alt='background_image'>
      </section>

      <section>
        <p id="random-quote" class='text-3xl text-center mt-7'>经典永流传</p>
        <div class='flex items-center justify-center'>
          <img src='/avatar.png' alt='avatar of sjx'
               class='rounded-full w-36 h-36 border-green-400 border-4 p-1.5'>
          <div class='ml-14'>
            <div class='w-5 h-5 triangle inline-block border-gray-600 border-2'></div>
            <div class='inline-block -ml-4 p-5 border-gray-600 border-2 rounded-2xl shadow-xl'>
              <p>月薪过万不是刚刚站在社会底层？</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class='w-full mt-10 bg-green-500'>
      <div class="text-center text-white py-3">Copyright © 2021 ShZh7</div>
    </footer>
  </div>
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

export default Vue.extend({})
</script>
