<template>
  <div class="w-full">
    <ItemIcon class="-mt-16 relative" id="dos" />
    <Banner />
    <Services id="tres" />
    <Managment class="mt-40" id="uno" />
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import ItemIcon from '@/components/ItemIcon.vue'
import Managment from '@/components/Managment.vue'
import Services from '@/components/Services.vue'

export default {
  asyncData({ route, store }) {
    store.commit('setPath', route.path)
  },
  mounted() {
    if (window.location.href.includes('#')) {
      window.location = window.location.href
    }
  },
  data() {
    return {
      // fullPath: null,
    }
  },
  components: {
    Banner,
    ItemIcon,
    Managment,
    Services,
  },
  methods: {
    redirectHash(hash) {
      // window.location =
    },
  },
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
