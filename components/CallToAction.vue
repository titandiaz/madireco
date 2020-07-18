<template>
  <div class="px-4">
    <div
      class="max-w-screen-lg mx-auto bg-primary text-white flex justify-center md:justify-between py-16 md:py-10 px-12 items-center rounded-lg flex-col md:flex-row text-center md:text-left"
    >
      <div class="flex flex-col">
        <h3 class="uppercase leading-none md:mb-2">
          ¿ interesado en alguno de nuestros servicios ?
        </h3>
        <h2
          class="uppercase leading-8 md:leading-none font-bold mt-4 md:mt-0"
          style="font-size: 1.6rem;"
        >
          Siempre estamos listos para ayudarlo
        </h2>
      </div>
      <button
        v-ripple.mouseover.500="'rgba(0, 0, 0, 0.1)'"
        class="bg-white text-primary font-bold rounded-md px-12 py-4 mt-10 md:mt-0 focus:outline-none active:bg-orange-200"
      >
        Contactar ahora
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>
