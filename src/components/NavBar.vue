<script setup lang="ts">
import { useAuth } from '@/composables/useAuth.ts'
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toast-notification';

const { isAuthenticated, logout } = useAuth()
const toast = useToast()
const router = useRouter()


function handleLogout() {
  router.push('/');
  toast.info("Vous êtes maintenant déconnecté", {
    position: "top-right"
  })
  logout()
}
</script>

<script></script>

<template>
  <nav>
    <h1>Le Véritable Carnet</h1>
    <div>
      <RouterLink to="/">Accueil</RouterLink>
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
