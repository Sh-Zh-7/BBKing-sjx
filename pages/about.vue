<template>
  <main>
    <Title title='我，作者，打钱！' />
    <p class='text-center mb-8'>别的话我就不多说了嗷，喜欢这个网站就请作者喝☕️</p>
    <div class='flex justify-center'>
      <img src='../static/alipay.jpeg' alt='支付宝付款' class='h-96 pr-20'>
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
