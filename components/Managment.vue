<template>
  <section class="max-w-screen-lg mx-auto flex items-start pb-32">
    <div class="flex-1">
      <div class="header-text">
        <h2 class="font-bold leading-none text-3xl">FACILITY MANAGEMENT</h2>
        <p class="leading-6 mt-1 tracking-wide">GESTIÓN DE INSTALACIONES</p>
      </div>
      <div class="mr-24 text-secondary font-normal">
        <p class="mt-12">
          En <span class="font-bold">MADIRECO SERVICES SAS</span> damos soporte
          a una organización para la integración de procesos, donde se involucra
          un grupo interdisciplinario de trabajo para asegurar y gestionar el
          mejor funcionamiento de las instalaciones y sus activos.
        </p>
        <ul class="mt-12">
          <li class="my-3 flex" v-for="(item, index) in list" :key="index">
            <img :src="icon" alt="check" class="mr-6" />
            <span v-html="item"></span>
          </li>
        </ul>
      </div>
    </div>
    <div class="max-w-sm w-full relative flex justify-end">
      <img src="~/assets/Imagen 2.png" alt="obrero" class="size-image" />
      <div class="border-image"></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      list: [
        'Manejo eficiente de la <b>infraestructura.</b>',
        'Elaboración y ejecución de proyectos <b>sin intermediarios.</b>',
        'Contamos con <b>personal profesional e idóneo</b> para sis propósitos.',
        'Mejores resultados en <b>costo y beneficio</b> de su empresa.',
      ],
      icon: require('~/assets/check.svg'),
    }
  },
}
</script>

<style scoped>
.border-image {
  @apply w-full absolute border-4 border-primary-light -z-1;
  height: calc(100% - 30px);
  left: -15px;
  border-width: 5px;
}
.size-image {
  max-width: 360px;
  @apply w-full mt-10;
}
.header-text {
  @apply max-w-md h-32 flex bg-primary text-white flex-col justify-center relative;
}
.header-text::before {
  content: ' ';
  @apply w-32 h-full  bg-primary absolute;
  left: -8rem;
}
</style>
