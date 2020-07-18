<template>
  <div class="w-full">
    <Banner />
    <ItemIcon class="-mt-16 relative" />
    <Managment class="md:mt-40 mt-16" />
    <Services />
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import ItemIcon from '@/components/ItemIcon.vue'
import Managment from '@/components/Managment.vue'
import Services from '@/components/Services.vue'

export default {
  components: {
    Banner,
    ItemIcon,
    Managment,
    Services,
  },
  asyncData({ route, store }) {
    store.commit('setPath', route.path)
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
