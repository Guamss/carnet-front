<script setup lang="ts">
import NavBar from '@/components/navBar.vue'
</script>

<template>
  <h1>Le Véritable Carnet</h1>
  <NavBar/>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
