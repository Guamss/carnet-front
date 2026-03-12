<script setup lang="ts">
</script>

<template>
  <h1>Le Véritable Carnet</h1>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
