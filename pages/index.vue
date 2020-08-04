<template>
  <div class="w-full">
    <Banner />
    <ItemIcon class="-mt-16 relative" />
    <Managment class="md:mt-40 mt-16" />
    <Services title="NUESTROS SERVICIOS" subtitle="LO QUE PODEMOS HACER" />
    <Logos class="pt-16" />
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import ItemIcon from '@/components/ItemIcon.vue'
import Managment from '@/components/Managment.vue'
import Services from '@/components/Services.vue'
import Logos from '~/components/Logos'

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
    Banner,
    ItemIcon,
    Managment,
    Services,
    Logos,
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
