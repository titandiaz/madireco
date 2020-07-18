<template>
  <div
    class="lg:h-banner-600 md:h-banner-500 sm:h-banner-400 h-banner-400 bg-secondary w-full relative"
  >
    <img
      src="~/assets/banner.jpg"
      alt="banner"
      class="object-cover lg:h-banner-600 md:h-banner-500 sm:h-banner-400 h-banner-400 w-full"
    />
    <div class="absolute top-0 opacity-75 w-full h-full bg-secondary"></div>
    <div class="polygon"></div>
    <div class="info center-info sm:items-start items-center lg:px-0 px-4">
      <span class="uppercase text-white font-light text-sm"
        >Bienvenido a madireco</span
      >
      <h1
        class="text-2xl sm:text-4xl font-bold block text-center sm:text-left text-white max-w-lg leading-none sm:leading-10 mt-2"
        style="letter-spacing: 0.4px;"
      >
        La mejor opción para el
        <span class="text-primary">desarrollo de los recursos</span> de su
        empresa
      </h1>
      <Btn class="mt-5" :text="text" />
    </div>
  </div>
</template>

<script>
import Btn from '@/components/_components/Btn.vue'

export default {
  name: 'Banner',
  components: {
    Btn,
  },
  data() {
    return {
      text: 'Contactar ahora',
    }
  },
}
</script>

<style scoped>
.info {
  @apply flex absolute bottom-0 max-w-screen-lg w-full flex-col;
}
.center-info {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.polygon {
  @apply absolute bottom-0 bg-white w-full h-56;
  clip-path: polygon(100% 80%, 0% 100%, 100% 100%);
}
@media (min-width: 1280px) {
  img {
    object-position: 0 -150px;
  }
}
</style>
