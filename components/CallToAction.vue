<template>
  <div
    class="max-w-screen-lg mx-auto bg-primary text-white flex justify-between py-10 px-12 rounded-lg"
  >
    <div class="">
      <h3 class="uppercase">
        ¿ interesado en alguno de nuestros servicios ?
      </h3>
      <h2 class="uppercase leading-none font-bold" style="font-size: 1.6rem;">
        Siempre estamos listos para ayudarlo
      </h2>
    </div>
    <button
      v-ripple.mouseover.500="'rgba(0, 0, 0, 0.1)'"
      class="bg-white text-primary font-bold rounded-md px-12 focus:outline-none active:bg-orange-200"
    >
      Contactar ahora
    </button>
  </div>
</template>

<script>
export default {}
</script>
