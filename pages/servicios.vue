<template>
  <div class="w-full">
    <BannerShort :title="'NUESTROS SERVICIOS'" :subtitle="'¿ QUE HACEMOS ?'" />
    <Services/>
  </div>
</template>

<script>
import BannerShort from '~/components/BannerShort'
import Services from '@/components/Services.vue'

export default {
  asyncData({ route, store }) {
    store.commit('setPath', route.path)
  },
    components: {
      BannerShort,
      Services
    },
  data() {
    return {
      // fullPath: null,
    }
  },
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
