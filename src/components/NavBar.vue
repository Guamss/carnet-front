<script setup lang="ts"></script>

<template>
  <nav>
    <h1>Le Véritable Carnet</h1>
    <div>
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/login">Se connecter</RouterLink>
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
