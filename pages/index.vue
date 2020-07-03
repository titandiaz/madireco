<template>
  <div class="w-full">
    <Banner />
    <ItemIcon class="-mt-16 relative" />
    <Managment class="mt-40" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Banner from '@/components/Banner.vue'
import ItemIcon from '@/components/ItemIcon.vue'
import Managment from '@/components/Managment.vue'

export default Vue.extend({
  components: {
    Banner,
    ItemIcon,
    Managment,
  },
  asyncData({ route, store }) {
    store.commit('setPath', route.path)
  },
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
