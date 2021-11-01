<template>
  <main>
    <Title title='打钱！' />
    <p class='text-center mb-8 px-10 text-center'>别的话我就不多说了嗷，喜欢这个网站就请作者喝☕️</p>
    <div class='flex flex-col items-center md:justify-center md:flex-row'>
      <img src='../static/alipay.jpeg' alt='支付宝付款' class='h-96 mb-10 md:mb-0 md:mr-20'>
      <img src='../static/wechat_pay.png' alt='微信付款' class='h-96'>
    </div>
  </main>
</template>
<script>
import Title from '../components/Title'
export default {
  components: { Title }
}
</script>
