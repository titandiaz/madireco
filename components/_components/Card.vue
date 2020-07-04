<template>
  <div class="max-w-sm w-full rounded-lg overflow-hidden bg-white pb-4">
    <div class="">
      <img :src="imagen" class="object-cover h-56 w-full" alt="Card image" />
    </div>
    <div class="text-secondary px-5 py-4">
      <h4 class="font-bold text-center mb-2">{{ title }}</h4>
      <p class="text-center">{{ description }}</p>
    </div>
    <nuxt-link :to="options" class="text-center block text-primary text-xs"
      >LEER MÁS <span class="icon">&#8250;</span></nuxt-link
    >
  </div>
</template>

<script>
export default {
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
}
</script>
<style scoped>
.icon {
  top: 2px;
  @apply text-2xl pl-1 relative;
}
</style>
