<template>
  <main>
    <section class='flex flex-col lg:flex-row items-center bg-gray-800 px-10 md:px-32 background'>
      <h1 class='text-8xl pt-10 md:text-9xl flex-wrap text-white font-serif text-center'>
        BBKing SJX
      </h1>
      <img class='pb-8 lg:pb-0' src='/man.png' alt='background_image'>
    </section>

    <section class='mt-10 md:mt-16 pb-10'>
      <Title title='经典永流传' />
      <div class='flex items-center justify-center pt-6'>
        <div class='relative'>
          <img src='/avatar.png' alt='avatar of sjx'
               class='rounded-full w-28 h-28 md:w-36 md:h-36 border-green-600 border-4'>
          <!-- 做动画用的辅助标签 -->
          <div id='animate-assist-tag'
               class='absolute w-28 h-28 md:w-36 md:h-36 top-0 rounded-full bg-green-600'></div>
        </div>
        <div class='ml-5 md:ml-14'>
          <div class='w-5 h-5 triangle inline-block border-gray-600 border-2'></div>
          <div class='inline-block -ml-4 p-5 border-gray-600 border-2 rounded-2xl shadow-xl'>
            <p>月薪过万不是刚刚站在社会底层？</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Vue from 'vue'
import Title from '~/components/Title.vue'

export default Vue.extend({
  components: { Title }
})
</script>

<style>
.background {
  background-image: url("/background.jpeg");
  background-size: contain;
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

