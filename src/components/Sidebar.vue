<template>
  <div class="sidebar">
    <h2>Side Bar</h2>
    <ul>
      <li><router-link to="/mycounter">Counter</router-link></li>
      <li><router-link to="/things-to-do">Things to Do</router-link></li>
      <li><router-link to="/register">Register</router-link></li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
