<template>
  <h3>Computed Properties</h3>
  <input
    type="text"
    v-model="valor"
  />
  {{ valorCalculate }}
  <ResultSection
    v-if="showElement"
    :result="valorCalculate"
  ></ResultSection>
  <div v-else-if="isNaN(valor)">It must be a number to calculate</div>
  <div v-else>nothing is shown here</div>
</template>

<script setup>
import { ref, computed } from "vue";
import ResultSection from "../components/ResultSection.vue";
const valor = ref("");
const valorCalculate = computed(() => {
  return valor.value * 3;
});

const showElement = computed(() => {
  return valor.value > 10;
});
</script>

<style scoped></style>
