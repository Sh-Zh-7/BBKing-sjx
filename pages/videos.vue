<template>
  <figure>
    <Title title='鬼畜&二创合集' />
    <div class='flex justify-center items-center'>
      <button class='left-arrow' @click='handleClick'></button>
      <iframe src="//player.bilibili.com/player.html?aid=456915447&bvid=BV1i5411h7zn&cid=231186469&page=1"
              width='638' height='493'></iframe>
      <button class='right-arrow' @click='handleClick'></button>
    </div>
  </figure>
</template>

<style scoped>
.left-arrow, .right-arrow {
  width: 256px;
  height: 128px;
  background-image: url("assets/arrow.png");
  background-blend-mode: lighten;
  background-size: 256px 128px;
}
.left-arrow {
  margin-right: 0;
  transform: rotate(90deg);
}
.right-arrow {
  transform: rotate(-90deg);
}
</style>

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
