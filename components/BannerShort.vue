<template>
  <div
    class="lg:h-banner-350 md:h-banner-320 sm:h-banner-300 h-banner-250 bg-secondary w-full relative pt-12 sm:pt-0"
  >
    <img
      src="~/assets/banner.jpg"
      alt="banner"
      class="object-cover lg:h-banner-350 md:h-banner-320 sm:h-banner-300 h-banner-250 w-full"
    />
    <div class="center-text w-full">
      <h3 class="uppercase w-full text-primary text-sm">
        {{ subtitle }}
      </h3>
      <h2 class="uppercase w-full leading-none text-2xl sm:text-4xl font-bold">
        {{ title }}
      </h2>
    </div>
    <div class="absolute top-0 opacity-75 w-full h-full bg-secondary"></div>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String },
    subtitle: { type: String },
  },
}
</script>
<style scoped>
.center-text {
  text-align: center;
  color: white;
  position: absolute;
  max-width: 600px;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  z-index: 10;
}
</style>
