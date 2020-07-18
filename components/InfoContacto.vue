<template>
  <div class="w-full mb-10 mt-16">
    <div class="max-w-screen-lg mx-auto grid grid-cols-3 gap-3">
      <div
        class="rounded-md h-24 flex justify-center items-center"
        v-for="item in list"
        :key="item.title"
      >
        <img :src="item.icon" :alt="item.title" />
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
          info: '313 233 1132 <br> 311 220 1696',
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
