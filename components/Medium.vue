<template>
    <iframe v-if='medium.type === "video"'
            :src='medium.url' :style='medium.style? medium.style : ""'></iframe>
    <img v-else-if='medium.type === "image"'
         :src='medium.url' alt='SJX的鬼畜图片' :style='medium.style? medium.style : ""'>
</template>

<script>
export default {
  props: ['medium']
}
</script>
