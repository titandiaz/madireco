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
  asyncData({ route, store }) {
    store.commit('setPath', route.path)
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
