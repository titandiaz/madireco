<template>
  <div class="w-full mb-10 mt-16">
    <div class="md:max-w-screen-lg w-8/12 md:w-full mx-auto grid md:grid-cols-3 grid-cols-1 gap-3">
      <div
        class="rounded-md h-24 flex md:justify-center items-center"
        v-for="item in list"
        :key="item.title"
      >
        <img class="w-12 md:w-auto" :src="item.icon" :alt="item.title" />
        <div class="text-secondary ml-6 leading-5">
          <h3 class="font-bold">{{ item.title }}</h3>
          <p v-html="item.info"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          icon: require('~/assets/contacto/place.svg'),
          title: 'Ubicación ',
          info: 'Calle 5A Sur # 23 - 34 <br> Remansos de Rosa Blanca',
        },
        {
          icon: require('~/assets/contacto/phone.svg'),
          title: 'Teléfonos',
          info: '<a href="tel:3132331132">313 233 1132</a> <br /><a href="tel:3112201696">311 220 1696</a>',
        },
        {
          icon: require('~/assets/contacto/email.svg'),
          title: 'Correo',
          info: 'gerencia@madireco.com',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
