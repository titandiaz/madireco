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
  asyncData({ route, store }) {
    store.commit('setPath', route.path)
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.css',
      },
    ],
  },
  components: { BannerShort, InfoContacto, MapBox },
}
</script>

<style scoped></style>
