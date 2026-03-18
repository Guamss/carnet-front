<script setup lang="ts">
import { ref } from 'vue'
const dialogRef = ref<HTMLDialogElement | null>(null)

const showDialog = () => {
  dialogRef.value?.showModal()
}
const closeDialog = () => {
  dialogRef.value?.close()
}
</script>

<template>
  <h2>Liste des carnets :</h2>
  <dialog ref="dialogRef">
    <form>
      <p>test</p>
    </form>
    <button @click="closeDialog">Fermer</button>
  </dialog>
  <div>
    <button @click="showDialog">+ Crée un Carnet</button>
  <form>
    <label>Filtrer par nom :</label>
    <label>Filtrer par tags :</label>
    <input type="text" placeholder="abc.." required />
  </form>
  </div>
  <section>
  <!-- TODO Boite -->
  </section>
</template>

<style scoped></style>
