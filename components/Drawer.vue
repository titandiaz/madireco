<template>
  <div class="drawer">
    <div class="h-16 w-full flex justify-end items-center">
      <img
        class="w-6 mr-6"
        src="~/assets/close.svg"
        alt="icon-close"
        @click="hideMenu()"
      />
    </div>
    <nav>
      <ul
        class="flex flex-col text-gray-500 justify-center items-start ml-12 mt-12 leading-10 text-2xl"
      >
        <nuxt-link to="/" class="item" :class="path == '/' ? 'active' : ''"
          >Inicio</nuxt-link
        >
        <nuxt-link
          to="/servicios"
          class="item flex justify-between"
          :class="path == '/servicios' ? 'active' : ''"
        >
          <span>Servicios</span> <span class="icon">&#8250;</span>
        </nuxt-link>
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
  methods: {
    hideMenu() {
      this.$store.commit('setActiveDrawer', false)
    },
  },
}
</script>

<style scoped>
.item {
  @apply py-4 w-full pr-6;
}
.active {
  @apply text-primary;
}
.icon {
  font-size: 40px;
  margin-left: 20px;
  transform: rotate(90deg);
}
.drawer {
  background-color: hsla(205, 63%, 14%, 0.959);
  max-width: 320px;
  @apply h-full w-full fixed top-0 bottom-0 right-0 z-50;
}
</style>
