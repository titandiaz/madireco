<template>
  <div>
    <Header />
    <Nuxt />
    <CallToAction class="center-call-to-action" />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallToAction from '@/components/CallToAction'
export default {
  components: {
    Header,
    Footer,
    CallToAction,
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
