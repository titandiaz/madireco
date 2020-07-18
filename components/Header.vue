<template>
  <div class="h-20 absolute z-30 min-w-full">
    <nav
      class="justify-between px-10 items-center max-w-screen-xl mx-auto h-full hidden md:flex"
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
    <div
      ref="header"
      class="h-16 w-full bg-white grid grid-cols-3 justify-end md:hidden shadow-lg"
    >
      <img
        class="col-start-2 col-end-3 h-full center py-1"
        src="~/assets/logo.png"
        alt="logo"
      />
      <img
        class="col-span-1 w-6 mr-6 self-center end"
        src="~/assets/menu.svg"
        alt="menu"
        @click="showMenu()"
      />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.onscroll = function () {
      myFunction()
    }

    const header = this.$refs.header
    let sticky = header.offsetTop

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky')
      } else {
        header.classList.remove('sticky')
      }
    }
  },
  computed: {
    path() {
      return this.$store.state.currentPath
    },
  },
  methods: {
    showMenu() {
      this.$store.commit('setActiveDrawer', true)
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
.end {
  justify-self: end;
}
.center {
  justify-self: center;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
