<template>
  <div class="w-full">
    <div
      class="w-full h-40 bg-primary-super-light flex justify-center items-center"
    >
      <div class="max-w-screen-lg w-full">
        <h2
          class="uppercase leading-none text-primary text-2xl sm:text-3xl font-bold"
        >
          ¿POR QUÉ ELEGIRNOS?
        </h2>
        <h3 class="uppercase text-primary mt-1">
          LA MEJOR ELECCIÓN
        </h3>
      </div>
    </div>
    <div
      class="w-full max-w-screen-lg mx-auto flex md:flex-row flex-col-reverse mt-12 text-secondary"
    >
      <div class="flex-1 pr-20 flex flex-col">
        <p>
          En nuestra empresa nos destacamos por ser
          <span class="font-bold">especialistas en solución</span>, donde en un
          solo proveedor pueden encontrar la solución a sus necesidades para sus
          empresas y hogares. Sus activos y proyectos estarán a cargo de
          ingenieros y técnicos capacitados y entrenados para brindar el mejor
          servicio al cliente y ejecución de actividades.
        </p>
        <div class="flex mt-10 items-center leading-6">
          <div
            class="bg-primary-super-light w-20 h-20 rounded-full flex justify-center items-center"
          >
            <img src="~/assets/nosotros/honesty.svg" alt="icono saludo" />
          </div>
          <div class="flex-1 ml-6 font-bold">
            Nos complacería mucho que depositaran la confianza en nuestro
            empresa.
          </div>
        </div>
      </div>
      <div class="flex-1 relative flex justify-end">
        <img
          src="~/assets/nosotros/imagen4.png"
          class="md:max-w-sm -mt-20 md:-mt-40 w-3/4"
          alt="obrero"
        />
        <div class="border-orange w-3/4"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.border-orange {
  @apply absolute top-0 left-0 border-primary border-4 max-w-sm -mt-20 -z-1 ml-10;
  height: 140%;
}
@screen md {
  .border-orange {
    @apply w-full;
  }
}
</style>
