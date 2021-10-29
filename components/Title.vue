<template>
  <p class='text-3xl text-center mt-7 mb-10'>
    &nbsp; {{ title }} &nbsp;
  </p>
</template>

<style scoped>
p::before, p::after {
  content: "";
  font-size: 0;
  border-width: 7px 150px;

  --theme-green: rgb(52, 211, 153);
}

p::before {
  border-color:
    transparent var(--theme-green)
    var(--theme-green) transparent;
}
p::after {
  border-color:
    transparent transparent
    var(--theme-green) var(--theme-green);
}
</style>

<script lang='ts'>
export default  {
  props: {
    title: {
      type: String,
      required: true,
    }
  }
}

</script>
