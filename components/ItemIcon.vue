<template>
  <div class="grid grid-cols-3 gap-10 max-w-screen-lg mx-auto">
    <div v-for="item in items" :key="item.text" class="bg-white shadow-md">
      <div class="h-2 w-full" :class="item.color"></div>
      <div
        class="w-24 h-24 rounded-full mx-auto m-5 flex justify-center items-center"
        :class="item.color"
      >
        <img :src="item.icon" :alt="item.icon" class="w-12 h-12" />
      </div>
      <div
        class="text-center font-bold text-secondary text-lg leading-5 w-32 mx-auto mb-4 pb-5 pt-2"
      >
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: 'Ingeniería civil',
          icon: require('~/assets/helmet.svg'),
          color: 'bg-primary-light',
        },
        {
          text: 'Mantenimiento locativo',
          icon: require('~/assets/wrench.svg'),
          color: 'bg-primary',
        },
        {
          text: 'Sistema de aire acondicionado',
          icon: require('~/assets/air-conditioner.svg'),
          color: 'bg-secondary',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
