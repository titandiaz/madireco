<template>
  <div class="w-full">
    contacto
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import Banner from '@/components/Banner.vue'

export default Vue.extend({
  // components: {
  //   Banner,
  // },
  asyncData({ route, store }) {
    store.commit('setPath', route.path)
  },
})
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
