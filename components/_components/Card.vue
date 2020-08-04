<template>
  <div class="max-w-sm w-full rounded-lg overflow-hidden bg-white pb-4">
    <div class="">
      <img :src="imagen" class="object-cover h-56 w-full" alt="Card image" />
    </div>
    <div class="text-secondary px-5 py-4">
      <h4 class="font-bold text-center mb-2">{{ title }}</h4>
      <p class="text-center">{{ description }}</p>
    </div>
    <nuxt-link
      :to="`servicios/${setSlug(title)}`"
      class="text-center block text-primary text-xs"
      >LEER MÁS <span class="icon">&#8250;</span></nuxt-link
    >
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  props: {
    imagen: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    hash: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      options: {
        name: 'servicios',
        hash: this.hash,
      },
    }
  },
  methods: {
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
.icon {
  top: 2px;
  @apply text-2xl pl-1 relative;
}
</style>
