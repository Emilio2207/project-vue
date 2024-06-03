<template>
  <h1>Hello World!</h1>
  <p>{{ counter }}</p>
  <button @click="increase">Increase</button>
  <button @click="decrease">Decrease</button>
</template>

<script setup>
import { ref } from "vue";
const counter = ref(0);
const increase = () => {
  counter.value++;
};
const decrease = () => {
  counter.value--;
};
</script>

<style scoped>
p {
  color: red;
}
</style>
