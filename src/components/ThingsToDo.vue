<template>
  <div>
    <h2>Things to Do</h2>
    <input
      type="text"
      v-model="newTasks"
      @keyup.enter="addTasks"
    />
    <ul>
      <li
        v-for="(task, index) in tasks"
        :key="index"
      >
        {{ task }}
        <button @click="deleteTask">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
const tasks = ref([]);
const newTasks = ref("");
const addTasks = () => {
  tasks.value.push(newTasks.value);
  newTasks.value = "";
};
const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};
</script>

<style scoped></style>
