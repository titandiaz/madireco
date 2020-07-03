<template>
  <div class="h-20 absolute z-10 min-w-full">
    <nav
      class="flex justify-between px-10 items-center max-w-screen-xl mx-auto h-full"
    >
      <img class="w-24 cursor-pointer" src="~/assets/logo.svg" alt="logo" />
      <ul class="flex">
        <nuxt-link to="/" class="item" :class="path == '/' ? 'active' : ''"
          >Inicio</nuxt-link
        >
        <nuxt-link
          to="/servicios"
          class="item"
          :class="path == '/servicios' ? 'active' : ''"
          >Servicios</nuxt-link
        >
        <nuxt-link
          to="/nosotros"
          class="item"
          :class="path == '/nosotros' ? 'active' : ''"
          >Nosotros</nuxt-link
        >
        <nuxt-link
          to="contacto"
          class="item"
          :class="path == '/contacto' ? 'active' : ''"
          >Contacto</nuxt-link
        >
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    path() {
      return this.$store.state.currentPath
    },
  },
}
</script>

<style scoped>
.item {
  @apply p-4 cursor-pointer text-white uppercase relative;
}
.item:hover {
  @apply text-primary;
}
.active::before {
  content: '';
  @apply w-full bg-primary left-0 absolute;
  height: 1px;
  bottom: 6px;
}
.active {
  @apply text-primary;
}
</style>
