<template>
  <figure>
    <Title title='鬼畜合集' />
    <div class='flex flex-wrap md:flex-nowrap justify-center items-center mx-20 md:mx-36'>
      <iframe src="//player.bilibili.com/player.html?aid=456915447&bvid=BV1i5411h7zn&cid=231186469&page=1"></iframe>
      <button class='left-arrow md:order-first w-full mr-10 mt-12 md:mt-0' @click='handleClick'></button>
      <button class='right-arrow md:order-last w-full ml-10 mt-12 md:mt-0' @click='handleClick'></button>
    </div>
  </figure>
</template>

<script>
import Title from '../components/Title'
export default {
  components: { Title },
  methods: {
    handleClick() {
      alert("没数据了，请各位多多创作");
    }
  }
}
</script>

<style scoped>
iframe {
  height: 300px;
  flex-basis: 100%;
}

.left-arrow {
  background-image: url("assets/left-arrow.png");
}
.right-arrow {
  background-image: url("assets/right-arrow.png");
}

.left-arrow, .right-arrow {
  background-blend-mode: lighten;

  width: 64px;
  height: 55px;
  background-size: 64px 55px;
}

@media (min-width: 768px) {
  iframe {
    width: 638px;
    height: 493px;

    flex-basis: auto;
  }

  .left-arrow, .right-arrow {
    width: 64px;
    height: 256px;
    background-size: 64px 256px;
  }
}
</style>
