<template>
  <button
    v-ripple.mouseover.500="'rgba(255, 255, 255, 0.3)'"
    class="text-white bg-primary font-bold px-10 py-3 rounded cursor-pointer focus:outline-none active:bg-orange-400"
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
