<template>
  <button
    v-ripple.mouseover.500="'rgba(255, 255, 255, 0.3)'"
    class="text-white bg-primary sm:font-bold sm:px-10 px-5 sm:py-3 py-2 rounded cursor-pointer focus:outline-none active:bg-orange-400 font-normal"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped></style>
