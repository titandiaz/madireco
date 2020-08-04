<template>
  <div class="w-full">
    <BannerShort :title="'CONTACTO'" :subtitle="'¿ DONDÉ ESTAMOS ?'" />
    <InfoContacto />
    <MapBox />
  </div>
</template>

<script>
import BannerShort from '~/components/BannerShort'
import InfoContacto from '~/components/InfoContacto'
import MapBox from '~/components/MapBox'
export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.css',
      },
    ],
  },
  mounted() {
    function topFunction() {
      document.body.scrollTop = 0 // For Safari
      document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    }
    topFunction()
  },
  components: { BannerShort, InfoContacto, MapBox },
}
</script>

<style scoped></style>
