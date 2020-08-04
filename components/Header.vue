<template>
  <div class="h-20 absolute z-30 min-w-full">
    <nav
      class="justify-between px-10 items-center max-w-screen-xl mx-auto h-full hidden md:flex"
    >
      <img class="w-24 cursor-pointer" src="~/assets/logo.svg" alt="logo" />
      <ul class="flex">
        <nuxt-link to="/" class="item" exact>Inicio</nuxt-link>
        <div class="relative">
          <nuxt-link
            to="/servicios"
            class="item flex item-service"
            @mouseover.native="showSubmenu()"
            @mouseleave.native="hiddenSubmenu()"
          >
            <span>Servicios</span><span class="icon">&#8250;</span>
          </nuxt-link>
          <div
            v-if="toggle"
            class="submenu"
            @mouseover="stopTimeout()"
            @mouseleave="hiddenSubmenu()"
          >
            <span class="symbol absolute top-0 text-primary text-base"
              >&#10151;</span
            >
            <nuxt-link
              class="sub-item flex"
              v-for="(item, index) in services"
              :key="index"
              :to="`/servicios/${setSlug(item)}`"
            >
              {{ item }}
              <span class="text-primary ml-1">&#10095;</span></nuxt-link
            >
          </div>
        </div>
        <nuxt-link to="/nosotros" class="item">Nosotros</nuxt-link>
        <nuxt-link to="/contacto" class="item">Contacto</nuxt-link>
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
    this.slug = this.$route.params.slug
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
  data() {
    return {
      toggle: false,
      time: null,
      slug: null,
      services: [
        'Asesorias',
        'Limpieza y mantenimiento',
        'Remodelación y construcción',
        'Electricidad de medio y baja tensión',
        'Carpintería metálica',
        'Mantenimiento preventivo y correctivo aires acondicionados',
      ],
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
    showSubmenu() {
      this.toggle = true
      this.stopTimeout(this.time)
    },
    hiddenSubmenu() {
      this.time = setTimeout(() => {
        this.toggle = false
      }, 100)
    },
    stopTimeout() {
      window.clearTimeout(this.time)
    },
    setSlug(slug) {
      const a =
        'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
      const b =
        'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
      const p = new RegExp(a.split('').join('|'), 'g')

      return slug
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text

      // return slug.replace(/ /g, '_').toLowerCase()
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
.icon {
  /* font-size: 40px; */
  margin-left: 20px;
  transform: rotate(90deg);
}
.submenu {
  /* display: none; */
  @apply bg-white p-5 text-secondary flex-col rounded-md shadow-md border-0 border-t-4 border-primary h-auto -mt-2;
  position: absolute;
  left: -100px;
  right: -100px;
  z-index: 1;
  font-size: 11px;
}
.sub-item {
  @apply p-1 uppercase justify-between;
}
.sub-item:hover {
  @apply bg-red-400 rounded-md bg-gray-200;
}
.symbol {
  transform: rotate(-90deg);
  left: calc(50% - 7px);
  z-index: -10;
  margin-top: -15px;
}
/* .item:hover .submenu {
  background-color: red;
} */
.nuxt-link-active {
  @apply text-primary;
}
.nuxt-link-exact-active {
  @apply text-primary;
}
</style>
