import { defineStore } from "pinia";
import { ref } from "vue";

export const useRegisterStore = defineStore("register", () => {
  const name = ref("");
  const email = ref("");
  const saveRecord = (nameForm, emailForm) => {
    name.value = nameForm;
    email.value = emailForm;
  };
  return { name, email, saveRecord };
});
