<template>
  <div class="w-full min-h-screen h-full overflow-hidden md:overflow-auto">
    <BannerShort
      class="hidden md:block"
      :title="'NUESTROS SERVICIOS'"
      :subtitle="'¿ QUE HACEMOS ?'"
    />
    <dir class="pt-16 flex md:hidden"></dir>
    <Service class="mt-0 md:mt-24" :indexService="indexService" />
  </div>
</template>

<script>
import BannerShort from '~/components/BannerShort'
import Service from '~/components/Service'
export default {
  scrollToTop: true,
  async asyncData({ route, store }) {
    let indexService
    switch (route.params.slug) {
      case 'asesorias':
        indexService = 0
        break
      case 'limpieza-y-mantenimiento':
        indexService = 1
        break
      case 'remodelacion-y-construccion':
        indexService = 2
        break
      case 'electricidad-de-medio-y-baja-tension':
        indexService = 3
        break
      case 'carpinteria-metalica':
        indexService = 4
        break
      case 'mantenimiento-preventivo-y-correctivo-aires-acondicionados':
        indexService = 5
        break
    }
    return { indexService }
  },
  mounted() {
    function topFunction() {
      document.body.scrollTop = 0 // For Safari
      document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    }
    topFunction()
  },
  components: { BannerShort, Service },
}
</script>

<style></style>
