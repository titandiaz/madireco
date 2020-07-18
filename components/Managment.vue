<template>
  <section
    class="max-w-screen-lg w-full mx-auto flex items-start pb-12 md:pb-32"
  >
    <div class="md:flex-1">
      <div class="header-text md:max-w-md max-w-full">
        <h2
          class="font-bold leading-none text-2xl md:text-3xl md:text-left text-center"
        >
          FACILITY MANAGEMENT
        </h2>
        <p
          class="md:leading-6 mt-1 leading-none text-base md:text-lg tracking-wide md:text-left text-center"
        >
          GESTIÓN DE INSTALACIONES
        </p>
      </div>
      <div
        v-if="sizeWidth < 800"
        class="md:max-w-sm w-full max-w-full relative flex justify-center md:justify-end"
      >
        <img
          src="~/assets/Imagen 2.png"
          alt="obrero"
          class="size-image size-image-small"
        />
        <div class="border-image border-image-small"></div>
      </div>
      <div class="mr-0 md:mr-24 text-secondary font-normal px-4 lg:px-0">
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
    <div
      v-if="sizeWidth > 800"
      class="max-w-sm w-full relative flex justify-end"
    >
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
        'Contamos con <b>personal profesional e idóneo</b> para sus propósitos.',
        'Mejores resultados en <b>costo y beneficio</b> de su empresa.',
      ],
      icon: require('~/assets/check.svg'),
    }
  },
  computed: {
    sizeWidth() {
      return this.$store.state.sizeWidth
    },
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
.border-image-small {
  @apply w-full absolute border-4 border-primary-light -z-10;
  width: 260px;
  left: calc(44% - 130px);
  top: -10px;
}
.size-image {
  max-width: 360px;
  @apply w-full mt-10;
}
.size-image-small {
  max-width: 260px;
  @apply w-full -mt-6;
}
.header-text {
  @apply h-32 flex bg-primary text-white flex-col justify-center relative;
}
.header-text::before {
  content: ' ';
  @apply w-32 h-full  bg-primary absolute;
  left: -8rem;
}
</style>
