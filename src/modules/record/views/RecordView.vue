<template>
  <div>
    <h2>Registration Form</h2>
    <Form
      :validation-schema="schema"
      @submit="onSubmit"
    >
      <div class="form">
        <label for="name">Name:</label>
        <Field
          v-model="name"
          type="text"
          name="name"
          id="name"
          placeholder="enter your name"
        />
        <ErrorMessage name="name" />
      </div>
      <div class="form">
        <label for="email">Email:</label>
        <Field
          v-model="email"
          type="email"
          name="email"
          id="email"
          placeholder="enter your email"
        />
        <ErrorMessage name="email" />
      </div>
      <div class="form">
        <button type="submit">Register</button>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { schema } from "../schemas/validationSchema.js";
import { useRegisterStore } from "../stores/registerStore.js";
import { ref } from "vue";

const registerStore = useRegisterStore();

const name = ref("");
const email = ref("");

const onSubmit = () => {
  registerStore.saveRecord(name.value, email.value);
  console.log("Submitted Form");
};
</script>

<style scoped>
.form {
  margin-bottom: 10px;
}
</style>
