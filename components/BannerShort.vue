<template>
  <div
    class="lg:h-banner-350 md:h-banner-320 sm:h-banner-300 h-banner-250 bg-secondary w-full relative"
  >
    <img
      src="~/assets/banner.jpg"
      alt="banner"
      class="object-cover lg:h-banner-350 md:h-banner-320 sm:h-banner-300 h-banner-250 w-full"
    />
    <div class="center-text">
      <h3 class="uppercase text-primary">
        ¿ Quiénes somos ?
      </h3>
      <h2 class="uppercase leading-none text-3xl font-bold">
        Sobre nosotros
      </h2>
    </div>
    <div class="absolute top-0 opacity-75 w-full h-full bg-secondary"></div>
  </div>
</template>
<style scoped>
.center-text {
  text-align: center;
  color: white;
  position: absolute;
  width: 600px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  z-index: 10;
}
</style>
