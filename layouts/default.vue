<template>
  <div>
    <Header />
    <Nuxt />
    <CallToAction class="center-call-to-action" />
    <Footer />
    <Drawer v-if="isActiveDrawer" />
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallToAction from '@/components/CallToAction'
import Drawer from '@/components/Drawer'
export default {
  components: {
    Header,
    Footer,
    CallToAction,
    Drawer,
  },
  mounted() {
    this.dw_getWindowDims()
    window.addEventListener('resize', this.reportWindowSize)
  },
  data() {
    return {
      width: 1200,
    }
  },
  computed: {
    isActiveDrawer() {
      return this.$store.state.isActiveDrawer
    },
  },
  methods: {
    dw_getWindowDims() {
      const doc = document,
        w = window
      const docEl =
        doc.compatMode && doc.compatMode === 'CSS1Compat'
          ? doc.documentElement
          : doc.body

      let width = docEl.clientWidth
      // let height = docEl.clientHeight

      // mobile zoomed in?
      if (w.innerWidth && width > w.innerWidth) {
        width = w.innerWidth
        // height = w.innerHeight
      }
      this.width = width
      this.$store.commit('setWidth', width)
    },
    reportWindowSize() {
      this.$store.commit('setWidth', window.innerWidth)
      this.width = window.innerWidth
    },
  },
}
</script>
<style>
html {
  font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.center-call-to-action {
  position: absolute;
  width: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
</style>
