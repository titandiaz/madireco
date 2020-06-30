<template>
  <div
    class="lg:h-banner-600 md:h-banner-500 sm:h-banner-400 h-banner-300 bg-secondary w-full relative"
  >
    <img
      src="~/assets/banner.jpg"
      alt="banner"
      class="object-cover lg:h-banner-600 md:h-banner-500 sm:h-banner-400 h-banner-300 w-full"
    />
    <div class="absolute top-0 opacity-75 w-full h-full bg-secondary z-0"></div>
    <div class="info center-info">
      <span class="uppercase text-white font-light text-sm"
        >Bienvenido a madireco</span
      >
      <h1 class="text-4xl font-bold block text-white max-w-md leading-10 mt-2">
        La mejor opción para el
        <span class="text-primary">desarrollo de los recursos</span> de su
        empresa
      </h1>
      <Btn class="mt-5" :text="text" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Btn from '@/components/_components/Btn.vue'

export default Vue.extend({
  name: 'Banner',
  components: {
    Btn,
  },
  data() {
    return {
      text: 'Contactar ahora',
    }
  },
})
</script>

<style scoped>
.info {
  @apply info flex z-10 absolute bottom-0 max-w-screen-lg w-full flex-col items-start;
}
.center-info {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
@media (min-width: 1280px) {
  img {
    object-position: 0 -150px;
  }
}
</style>
