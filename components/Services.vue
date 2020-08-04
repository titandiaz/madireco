<template>
  <div ref="services" class="w-full bg-gray-200 pt-16 pb-56 md:pb-32">
    <div class="max-w-screen-lg mx-auto">
      <h2
        class="text-center font-bold text-secondary md:text-3xl text-2xl leading-none"
      >
        {{ title }}
      </h2>
      <p
        class="text-center md:leading-6 text-base md:text-lg text-secondary leading-none"
      >
        {{ subtitle }}
      </p>
      <div
        class="center grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16 px-4 lg:px-0"
      >
        <Card
          class="card"
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
import gsap from 'gsap'
import Card from '~/components/_components/Card.vue'

export default {
  scrollToTop: true,
  components: {
    Card,
  },
  mounted() {
    const observer = new IntersectionObserver(this.callback, this.options)
    observer.observe(this.$refs.services)
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      bool: true,
      count: 100,
      options: {
        // root: '',
        // rootMargin: '',
        // threshold: ''
      },
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
          hash: '#cuatro',
          title: 'Electricidad de medio y baja tensión',
          imagen: require('~/assets/img/card-5.png'),
          description:
            'El proceso consiste en una inspección detalla de cada uno de los sistemas de aire (baja, media y alta presión)',
        },
        {
          hash: '#cinco',
          title: 'Carpintería metálica',
          imagen: require('~/assets/img/card-6.png'),
          description:
            'Asesoramos a todo tipo de establecimientos, en el cálculo, diseño e implementación de sus sistemas.',
        },
        {
          hash: '#seis',
          title: 'Mantenimiento preventivo y correctivo aires acondicionados',
          imagen: require('~/assets/img/card-4.png'),
          description:
            'Ofrecemos siempre una buena solución a sus necesidades de ventilación.',
        },
      ],
    }
  },
  methods: {
    callback(entries, observer) {
      if (entries[0].isIntersecting == true && this.bool) {
        this.bool = false
        this.count += 1
        gsap
          .from('.card', {
            duration: 0.9,
            opacity: 0,
            scale: 0,
            y: 200,
            ease: 'power1',
            stagger: 0.1,
          })
          .then(() => {
            this.bool = true
          })
          .catch((e) => console.log(e))
      }
    },
  },
}
</script>

<style scoped>
.center {
  justify-items: center;
}
</style>
