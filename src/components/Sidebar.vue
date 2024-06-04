<template>
  <div class="sidebar">
    <h2>Welcome</h2>
    <h3>Name: {{ registerStore.name }}</h3>
    <h3>Email: {{ registerStore.email }}</h3>
    <ul>
      <li><router-link to="/mycounter">Counter</router-link></li>
      <li><router-link to="/things-to-do">Things to Do</router-link></li>
      <li><router-link to="/register">Register</router-link></li>
      <li><router-link to="/calculate">Calculate</router-link></li>
    </ul>
  </div>
</template>

<script setup>
import { useRegisterStore } from "@/modules/record/stores/registerStore.js";

const registerStore = useRegisterStore();
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
