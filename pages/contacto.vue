<template>
  <div class="w-full">
    contacto
  </div>
</template>

<script>
export default {
  asyncData({ route, store }) {
    store.commit('setPath', route.path)
  },
}
</script>

<style scoped></style>
