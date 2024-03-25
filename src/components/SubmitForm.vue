<script setup lang="ts">

import {computed, ref} from "vue";
import axios from "axios";

const usernameInput = ref('');
const emailInput = ref('');
const passwordInput = ref('');
const passwordRepeatInput = ref('');
const isPasswordSame = computed(()=>{
  return (passwordInput.value || passwordRepeatInput.value) ? (passwordInput.value === passwordRepeatInput.value) : false ;
})

const submitForm = () => {
  axios.post("api/signup", {
    username: usernameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    passwordRepeat: passwordRepeatInput.value
  });
}


</script>

<template>
  <p>User Name</p>
  <input type="text" v-model="usernameInput" class="username-input">
  <p>Email</p>
  <input type="email" v-model="emailInput" class="email-input">
  <p>Password</p>
  <input type="password" v-model="passwordInput" class="password-input">
  <p>Password Repeat</p>
  <input type="password" v-model="passwordRepeatInput" class="password-repeat-input">
  <button type="button"  @click="submitForm" :disabled="!isPasswordSame"  class="submit">Sign Up</button>

</template>

<style scoped>

</style>