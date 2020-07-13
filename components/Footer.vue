<template>
  <div class="w-full bg-secondary text-white pb-20 pt-32">
    <div class="max-w-screen-lg mx-auto grid grid-cols-4 gap-6">
      <img src="~/assets/logo.svg" alt="" />
      <nav>
        <ul class="flex flex-col">
          <h3 class="title-item">Marideco</h3>
          <nuxt-link class="mb-3 font-thin" to="/nosotros">Nosotros</nuxt-link>
          <nuxt-link class="mb-3 font-thin" to="/servicios"
            >Servicios</nuxt-link
          >
          <nuxt-link class="mb-3 font-thin" to="/contacto">Contacto</nuxt-link>
        </ul>
      </nav>
      <ul>
        <h3 class="title-item">Información</h3>
        <p class="item-info"
          ><img src="~/assets/place.svg" alt="" /> Calle 5A Sur # 23 - 34
          Remansos de Rosa Blanca</p
        >
        <li class="item-info">
          <img src="~/assets/email.svg" alt="" /> gerencia@madireco.com
        </li>
        <li class="item-info">
          <img src="~/assets/phone.svg" alt="" />
          <span>
            <a href="tel:3132331132">313 233 1132</a> <br />
            <a href="tel:3112201696">311 220 1696</a>
          </span>
        </li>
      </ul>
      <div class="">
        <h3 class="title-item">Síguenos</h3>
        <ul class="flex">
          <nuxt-link to="#">
            <img
              src="~/assets/facebook.svg"
              class="w-10 cursor-pointer opacity-75"
              alt="iconn facebook"
            />
          </nuxt-link>
          <nuxt-link to="#">
            <img
              src="~/assets/twitter.svg"
              class="w-10 cursor-pointer opacity-75"
              alt="iconn facebook"
            />
          </nuxt-link>
          <nuxt-link to="#">
            <img
              src="~/assets/instagram.svg"
              class="w-10 cursor-pointer opacity-75"
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
.item-info {
  @apply flex mb-3 font-thin;
}
img {
  margin-right: 12px;
}
</style>
