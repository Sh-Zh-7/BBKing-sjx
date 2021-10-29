<template>
  <main>
    <img src='/avatar.png' alt='avatar of sjx'
         class='w-60 h-60 mx-auto mt-10 rounded-full border-green-600 border-4 p-2'>
    <blockquote class='text-center font-bold text-green-700 text-6xl mx-72 mt-12 leading-normal'>
      你有时候的想法，真不是碳基生物能想出来的
    </blockquote>
    <div class='mx-96 mt-16 flex justify-evenly'>
      <button class='py-4 px-7 border-2 bg-green-600 rounded-2xl text-2xl'>上一条</button>
      <button class='py-4 px-7 border-2 border-gray-600 rounded-2xl text-2xl'>下一条</button>
    </div>
  </main>
</template>

<style>
blockquote::before, blockquote::after {
  content: '';
  display: inline-block;
  background-image: url("../assets/quote.png");
  background-size: 64px 64px;
  width: 64px;
  height: 64px;
}
blockquote::after {
  transform: rotate(180deg);
}
</style>
