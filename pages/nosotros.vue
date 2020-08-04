<template>
  <div class="w-full">
    <BannerShort :title="'SOBRE NOSOTROS'" :subtitle="'¿ QUIÉNES SOMOS ?'" />
    <Madireco />
    <whyChooseUs />
    <Logos class="mt-32" />
  </div>
</template>

<script>
import BannerShort from '~/components/BannerShort'
import Madireco from '~/components/Madireco'
import whyChooseUs from '~/components/whyChooseUs'
import Logos from '~/components/Logos'
export default {
  mounted() {
    function topFunction() {
      document.body.scrollTop = 0 // For Safari
      document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    }
    topFunction()
  },
  components: { BannerShort, Madireco, whyChooseUs, Logos },
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
