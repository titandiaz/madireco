<template>
  <section class="max-w-screen-lg mx-auto mt-24 flex items-start pb-32">
    <div class="max-w-md w-full relative flex mr-16 ">
      <div class="relative w-4/5 top-0">
        <img src="~/assets/nosotros/imagen2.png" alt="obrero" class="" />
        <div class="border-image"></div>
      </div>
      <div class="imagen_2">
        <img src="~/assets/nosotros/imagen3.png" alt="obrero" class="rounded-lg" />
      </div>
    </div>
    <div class="flex-1">
      <h2 class="title">MARIDECO</h2>
      <div class="text-secondary font-normal">
        <p class="mt-12">
          Somos una empresa privada fundada en la ciudad de Villavicencio,
          prestadora de <span class="font-bold">Servicios de Ingeniería y Mantenimiento Industrial y
          Comercial.</span>
        </p>
        <p class="mt-6">
          En nuestra empresa contamos con personal técnico y
          profesional capacitado para satisfacer las necesidades de nuestros
          clientes, los cuales están participando activamente en las
          concepciones de sus proyectos, lo cual, sumado a nuestra experiencia,
          cumplimiento y excelente costo beneficio asegura su satisfacción.
        </p>
        <ul class="mt-12 flex">
          <li class="my-3 flex font-bold" v-for="(item, index) in list" :key="index">
            <img :src="require(`~/assets/nosotros/${item.icon}.svg`)" alt="check" class="mr-6" />
            <span>{{item.text}}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          text: 'Mayor experiencia',
          icon: 'experiencia'
        },
        {
          text: 'Excelente cumplimiento',
          icon: 'cumplimiento'
        },
        {
          text: 'Costo beneficio',
          icon: 'beneficio'
        },
      ],
      icon: require('~/assets/check.svg'),
    }
  },
}
</script>

<style scoped>
.border-image {
  @apply w-full absolute border-4 border-primary-light -z-1;
  height: 100%;
  width: 100%;
  left: 2rem;
  top: 2rem;
  border-width: 5px;
}
.imagen_2 {
  @apply absolute bg-white w-64 right-0 border-8 border-white rounded-lg;
  bottom: -30%;
}
.title {
  @apply font-bold leading-none text-3xl text-primary relative;
}
.title::before {
  content: '';
  @apply bg-primary absolute rounded-full;
  height: 4px;
  width: 100px;
  bottom: -20px;
}
</style>
