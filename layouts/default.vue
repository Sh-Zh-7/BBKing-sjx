<template>
  <div>
    <Navigation />
    <Nuxt />
    <Copyright />
  </div>
</template>
<script>
import Navigation from '../components/Navigation'
import Copyright from '../components/Copyright'
export default {
  components: { Copyright, Navigation }
}
</script>
