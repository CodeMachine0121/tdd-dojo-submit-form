<script setup lang="ts">

import {computed, ref} from "vue";
import axios from "axios";

const formBody = ref({
  username: '',
  email: '',
  password: '',
  passwordRepeat: ''
});
const isPasswordSame = computed(()=>{
  return (formBody.value.password || formBody.value.passwordRepeat) ? (formBody.value.password === formBody.value.passwordRepeat) : false ;
})

const submitForm = () => {
  const {passwordRepeat, ...body} = formBody.value;
  axios.post("api/signup", body);
}


</script>

<template>
  <p>User Name</p>
  <input type="text" v-model="formBody.username" class="username-input">
  <p>Email</p>
  <input type="email" v-model="formBody.email" class="email-input">
  <p>Password</p>
  <input type="password" v-model="formBody.password" class="password-input">
  <p>Password Repeat</p>
  <input type="password" v-model="formBody.passwordRepeat" class="password-repeat-input">
  <button type="button"  @click="submitForm" :disabled="!isPasswordSame"  class="submit">Sign Up</button>

</template>

<style scoped>

</style>