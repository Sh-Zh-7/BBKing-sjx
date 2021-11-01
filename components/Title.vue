<template>
  <p class='text-3xl md:text-4xl text-center font-serif mt-7 mb-10'>
    &nbsp; {{ title }} &nbsp;
  </p>
</template>

<script>
export default  {
  props: {
    title: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>
p::before, p::after {
  content: "";
  font-size: 0;
  border-width: 3px 50px;

  --theme-green: rgb(52, 211, 153);
}

@media (min-width: 1024px) {
  p::before, p::after {
    border-width: 7px 150px;
  }
}

@media (min-width: 768px) {
  p::before, p::after {
    border-width: 5px 100px;
  }
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

