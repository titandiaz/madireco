<template>
  <div class="w-full bg-secondary text-white py-20">
    <div class="max-w-screen-lg mx-auto grid grid-cols-4 gap-12">
      <img src="~/assets/logo.svg" alt="" />
      <nav>
        <ul class="flex flex-col">
          <h3 class="title-item">Marideco</h3>
          <nuxt-link to="/nosotros">Nosotros</nuxt-link>
          <nuxt-link to="/servicios">Servicios</nuxt-link>
          <nuxt-link to="/contacto">Contacto</nuxt-link>
        </ul>
      </nav>
      <ul>
        <h3 class="title-item">Información</h3>
        <li>Calle 5A Sur # 23 - 34 Remansos de Rosa Blanca</li>
        <li>gerencia@madireco.com</li>
        <li>
          <a href="tel:3132331132">313 233 1132</a> -
          <a href="tel:3112201696">311 220 1696</a>
        </li>
      </ul>
      <div class="">
        <h3 class="title-item">Síguenos</h3>
        <ul>
          <li>f</li>
          <li>t</li>
          <li>i</li>
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
  @apply font-bold pb-4;
}
</style>
