<template>
  <div class="w-full bg-gray-200 pt-16 pb-32">
    <div class="max-w-screen-lg mx-auto">
      <h2 class="text-center font-bold text-secondary text-3xl">
        NUESTROS SERVICIOS
      </h2>
      <p class="text-center text-secondary">LO QUE PODEMOS HACER</p>
      <div class="grid grid-cols-3 gap-6 mt-16">
        <Card
          v-for="(card, index) in cards"
          :key="`card_${index}`"
          :imagen="card.imagen"
          :description="card.description"
          :title="card.title"
          :hash="card.hash"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/_components/Card.vue'

export default {
  components: {
    Card,
  },
  data() {
    return {
      cards: [
        {
          hash: '#uno',
          title: 'Asesorias',
          imagen: require('~/assets/img/card-1.png'),
          description:
            'Asesoramos a todo tipo de establecimientos, en el cálculo, diseño e implementación de sus sistemas.',
        },
        {
          hash: '#dos',
          title: 'Limpieza y mantenimiento',
          imagen: require('~/assets/img/card-2.png'),
          description:
            'Planes de Mantenimiento locativos (fachadas, limpieza de canales, techos, cambio de tejas, reparar goteras …)',
        },
        {
          hash: '#tres',
          title: 'Remodelación y construcción',
          imagen: require('~/assets/img/card-3.png'),
          description:
            'Ofrecemos servicios de Obra Blanca (pintura, estuco, acabados, cielos rasos, Dry Wall, PVC, icopor…)',
        },
        {
          hash: '#uno',
          title: 'Aire Acondicionado y ventilación mecánica',
          imagen: require('~/assets/img/card-4.png'),
          description:
            'Ofrecemos siempre una buena solución a sus necesidades de ventilación.',
        },
        {
          hash: '#dos',
          title: 'Electricidad de medio y baja tención',
          imagen: require('~/assets/img/card-5.png'),
          description:
            'El proceso consiste en una inspección detalla de cada uno de los sistemas de aire (baja, media y alta presión)',
        },
        {
          hash: '#tres',
          title: 'Carpintería metálica',
          imagen: require('~/assets/img/card-6.png'),
          description:
            'Asesoramos a todo tipo de establecimientos, en el cálculo, diseño e implementación de sus sistemas.',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
