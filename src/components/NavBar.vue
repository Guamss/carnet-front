<script setup lang="ts">
import { useAuth } from '@/composables/useAuth.ts'
import { useRouter } from 'vue-router';
import { sendToast } from '@/composables/utils.ts'

const { isAuthenticated, logout } = useAuth()
const router = useRouter()

function handleLogout() {
  router.push("login");
  sendToast("Vous êtes maintenant déconnecté", "info")
  logout()
}
</script>

<template>
  <nav>
    <h1>Le Véritable Carnet</h1>
    <div>
      <RouterLink v-show="isAuthenticated" to="/">Accueil</RouterLink>
      <RouterLink v-show="!isAuthenticated" to="/login">Se connecter</RouterLink>
      <RouterLink v-show="isAuthenticated" to="/profil">Profil</RouterLink>
      <a v-on:click="handleLogout" href="#" v-show="isAuthenticated">Se déconnecter</a>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  gap: 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    > a {
      text-decoration: none;
      color: white;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
