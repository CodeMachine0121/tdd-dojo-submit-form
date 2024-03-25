<script setup lang="ts">

import {computed, ref} from "vue";

const passwordInput = ref('');
const passwordRepeatInput = ref('');
const isPasswordSame = computed(()=>{
  return (passwordInput.value || passwordRepeatInput.value) ? (passwordInput.value === passwordRepeatInput.value) : false ;
})

</script>

<template>
  <p>User Name</p>
  <input type="text" class="username-input">
  <p>Email</p>
  <input type="email" class="email-input">
  <p>Password</p>
  <input type="password" v-model="passwordInput" class="password-input">
  <p>Password Repeat</p>
  <input type="password" v-model="passwordRepeatInput" class="password-repeat-input">
  <button type="button"  :disabled="!isPasswordSame"  class="submit">Sign Up</button>

</template>

<style scoped>

</style>