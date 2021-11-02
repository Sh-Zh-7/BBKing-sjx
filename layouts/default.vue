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
import { deleteDB } from 'idb'
export default {
  components: { Copyright, Navigation },
  async beforeCreate() {
    if (process.client) {
      await deleteDB('sayings');
    }
  }
}
</script>
