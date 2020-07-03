<template>
  <div class="w-full">
    contacto
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  asyncData({ route, store }) {
    store.commit('setPath', route.path)
  },
})
</script>

<style scoped></style>
