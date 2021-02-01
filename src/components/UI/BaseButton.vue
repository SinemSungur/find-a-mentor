<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
    },
    link: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
button,
a {
    text-decoration: none;
    padding: 0.75rem 1.75rem;
    border: 1px solid black;
}
.flat{
    background-color: transparent;
    color: turquoise;
    border: none;
}
.outline{
      background-color: transparent;
      border-color: pink;
      color: blueviolet; 
}
</style>