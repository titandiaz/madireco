<template>
  <div class="w-full mb-56 md:mb-40 p-4 md:p-0">
    <div id="map" class="map-box"></div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
export default {
  mounted() {
    mapboxgl.accessToken =
      'pk.eyJ1IjoidGl0YW5kaWF6IiwiYSI6ImNrY21sc3QwbTAyaWoyc25zMXE3cWNjZjIifQ.zlygK5-GolnUx5KXqQNILg'
    this.map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-73.6194502, 4.1162699], // starting position
      zoom: 14, // starting zoom
    })
    this.createMarket(-73.6194502, 4.1162699)
    this.map.addControl(new mapboxgl.FullscreenControl())
  },
  data() {
    return {
      map: null,
      marker: null,
    }
  },
  methods: {
    createMarket(lng, lat) {
      this.marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(this.map)
    },
  },
}
</script>

<style scoped>
.map-box {
  @apply max-w-screen-lg w-full mx-auto rounded-md;
  height: 480px;
}
</style>
