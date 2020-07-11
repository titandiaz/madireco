<template>
  <div class="w-full">
    <BannerShort />
    <Madireco />
  </div>
</template>

<script>
import BannerShort from '~/components/BannerShort'
import Madireco from '~/components/Madireco'
export default {
  asyncData({ route, store }) {
    store.commit('setPath', route.path)
  },
  components: { BannerShort, Madireco },
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
