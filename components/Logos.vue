<template>
  <div class="w-full mb-64 md:mb-40">
    <div class="max-w-screen-lg mx-auto">
      <h3 class="text-center text-secondary text-xl font-bold mb-10">
        Empresas que confían en nosotros
      </h3>
      <div class="w-full grid md:grid-cols-4 grid-cols-2 px-4 md:px-0 gap-3">
        <div class="border rounded-md h-24 p-2" v-for="item in 8" :key="item">
          <img :src="require(`~/assets/logos/logo_${item}.png`)" class="object-contain w-full h-full opacity-75" :alt="`logo ${item}`">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
