<template>
  <h3>Computed Properties</h3>
  <input
    type="text"
    v-model="valor"
  />
  {{ valorCalculate }}
  <ResultSection :result="valorCalculate" />
</template>

<script setup>
import { ref, computed } from "vue";
import ResultSection from "../components/ResultSection.vue";
const valor = ref("");
const valorCalculate = computed(() => {
  return valor.value * 3;
});
</script>

<style scoped></style>
