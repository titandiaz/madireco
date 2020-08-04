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
  scrollToTop: true,
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
  beforeDestroy() {
    window.removeEventListener('resize', this.reportWindowSize)
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
    redirectWhatsapp() {
      if (this.dataStore.tienda.whatsapp.length > 10) {
        let phone_number_whatsapp = this.dataStore.tienda.whatsapp
        if (phone_number_whatsapp.charAt(0) === '+') {
          phone_number_whatsapp = phone_number_whatsapp.slice(1)
        }
        if (this.mobileCheck()) {
          window.open(
            `https://wa.me/${phone_number_whatsapp}/?text=Hola%20vengo%20de%20tu%20tienda%20online%20y%20me%20gustaría%20recibir%20mas%20información`,
            '_blank'
          )
        } else {
          window.open(
            `https://web.whatsapp.com/send?phone=${phone_number_whatsapp}&text=Hola%20vengo%20de%20tu%20tienda%20online%20y%20me%20gustaría%20recibir%20mas%20información%20${window.location}`,
            '_blank'
          )
        }
      } else {
        if (this.mobileCheck()) {
          window.open(
            `https://wa.me/57${this.dataStore.tienda.whatsapp}/?text=Hola%20vengo%20de%20tu%20tienda%20online%20y%20me%20gustaría%20recibir%20mas%20información`,
            '_blank'
          )
        } else {
          window.open(
            `https://web.whatsapp.com/send?phone=57${this.dataStore.tienda.whatsapp}&text=Hola%20vengo%20de%20tu%20tienda%20online%20y%20me%20gustaría%20recibir%20mas%20información%20${window.location}`,
            '_blank'
          )
        }
      }
    },

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
.nuxt-link-active {
  @apply text-primary;
}
.nuxt-link-exact-active {
  @apply text-primary;
}
</style>
