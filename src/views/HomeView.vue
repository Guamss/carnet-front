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
    <div>
      <label
        >Filtrer par nom :
        <input type="text" id="quote" placeholder="abc.." />
      </label>
      <label
        >Filtrer par tags :
        <input type="text" id="labels" />
      </label>
    </div>
  </div>
  <section>
    <!-- TODO Boite -->
  </section>
</template>
<style scoped>
main {

  > div {
    display: flex;
    flex-direction: column;

    > div {
      display: flex;
      gap:1.5rem;
    }
  }
}
</style>
