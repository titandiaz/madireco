<template>
  <div class="w-full bg-secondary text-white pb-20 pt-56 md:pt-32">
    <div
      class="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-4 gap-6 text-center"
    >
      <img
        class="mx-auto md:mx-0"
        src="~/assets/logo.svg"
        alt="logo marideco"
      />
      <nav>
        <ul class="flex flex-col text-center md:text-left">
          <h3 class="title-item">Marideco</h3>
          <nuxt-link class="mb-3 font-thin" to="/nosotros">Nosotros</nuxt-link>
          <nuxt-link class="mb-3 font-thin" to="/servicios"
            >Servicios</nuxt-link
          >
          <nuxt-link class="mb-3 font-thin" to="/contacto">Contacto</nuxt-link>
        </ul>
      </nav>
      <ul class="flex flex-col items-center md:items-start justify-center">
        <h3 class="title-item text-center md:text-left">Información</h3>
        <p
          class="flex mb-3 font-thin flex-col md:flex-row text-left ml-0 md:-ml-8"
        >
          <img class="mr-0 md:mr-2" src="~/assets/place.svg" alt="" /><span
            >Calle 5A Sur # 23 - 34 Remansos de Rosa Blanca</span
          >
        </p>
        <li class="flex mb-3 font-thin flex-col md:flex-row ml-0 md:-ml-8">
          <img class="mr-0 md:mr-2" src="~/assets/email.svg" alt="" />
          gerencia@madireco.com
        </li>
        <li class="flex mb-3 font-thin flex-col md:flex-row ml-0 md:-ml-8">
          <img class="mr-0 md:mr-2" src="~/assets/phone.svg" alt="" />
          <span>
            <a href="tel:3132331132">313 233 1132</a> <br />
            <a href="tel:3112201696">311 220 1696</a>
          </span>
        </li>
      </ul>
      <div class="">
        <h3 class="title-item text-center md:text-left">Síguenos</h3>
        <ul class="flex justify-center md:justify-start">
          <nuxt-link to="#">
            <img
              src="~/assets/facebook.svg"
              class="w-10 cursor-pointer opacity-75 icon"
              alt="iconn facebook"
            />
          </nuxt-link>
          <nuxt-link to="#">
            <img
              src="~/assets/twitter.svg"
              class="w-10 cursor-pointer opacity-75 icon"
              alt="iconn facebook"
            />
          </nuxt-link>
          <nuxt-link to="#">
            <img
              src="~/assets/instagram.svg"
              class="w-10 cursor-pointer opacity-75 icon"
              alt="iconn facebook"
            />
          </nuxt-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.title-item {
  @apply pb-4 text-lg;
}
/* .item-info {
  @apply flex mb-3 font-thin;
} */
.icon {
  margin-right: 12px;
}
</style>
