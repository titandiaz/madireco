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
        <nuxt-link to="/" class="item" exact>Inicio</nuxt-link>
        <nuxt-link to="/servicios" class="item relative">
          <div class="flex justify-between">
            <span>Servicios</span> <span class="icon">&#8250;</span>
          </div>

          <div class="text-gray-500 ml-4 text-sm flex flex-col">
            <nuxt-link
              class="leading-4 py-2 flex"
              v-for="(item, index) in services"
              :key="index"
              @click.native="hideMenu"
              :to="`/servicios/${setSlug(item)}`"
              ><span class="mr-1">&#10070;</span>
              <span>{{ item }}</span></nuxt-link
            >
          </div>
        </nuxt-link>
        <nuxt-link to="/nosotros" class="item">Nosotros</nuxt-link>
        <nuxt-link to="/contacto" class="item">Contacto</nuxt-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  mounted() {
    this.slug = this.$route.params.slug
  },
  data() {
    return {
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
  methods: {
    hideMenu() {
      this.$store.commit('setActiveDrawer', false)
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
  @apply py-2 w-full pr-6;
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
.nuxt-link-active {
  @apply text-primary;
}
.nuxt-link-exact-active {
  @apply text-primary;
}
</style>
