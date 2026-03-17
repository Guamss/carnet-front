<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth.ts'

const username = ref('')
const password = ref('')
const { login } = useAuth()

async function handleLogin() {
  try {
    await login ({
      username: username.value,
      password: password.value
    })
  } catch(error){
    console.log(error)
  }
}
</script>

<template>
  <form @submit.prevent="handleLogin">
    <p>Connexion</p>
    <label>Nom d'utilisateur</label>
    <input v-model="username" placeholder="Yves" type="text" required />
    <!-- <ul>
      <li style="color: red">{{}}</li>
    </ul> -->
    <label>Mot de passe</label>
    <input v-model="password" placeholder="*******" type="password" required />
    <!-- <ul>
      <li style="color: red">{{}}</li>
    </ul> -->
    <button type="submit" @click="handleLogin">Se connecter</button>
  </form>
</template>

<style scoped>
form {
  max-width: 600px;
  background-color: var(--color-bg-secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 50px;
  gap: 0.5rem;

  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  border: 1px solid var(--color-border);

  > p {
    font-size: 26px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
  }
}
</style>
