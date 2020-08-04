<template>
  <div class="w-full">
    <BannerShort :title="'NUESTROS SERVICIOS'" :subtitle="'¿ QUE HACEMOS ?'" />
    <Services />
  </div>
</template>

<script>
import BannerShort from '~/components/BannerShort'
import Services from '@/components/Services.vue'

export default {
  scrollToTop: true,
  mounted() {
    function topFunction() {
      document.body.scrollTop = 0 // For Safari
      document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    }
    topFunction()
  },
  components: {
    BannerShort,
    Services,
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
