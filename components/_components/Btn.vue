<template>
  <button
    class="text-white bg-primary px-10 py-3 rounded cursor-pointer focus:outline-none hover:bg-orange-400"
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
