<script setup lang="ts">
import { ref } from 'vue'
const dialogRef = ref<HTMLDialogElement | null>(null)

const newQuote = ref<string>('')
const newAuthor = ref<string>('')
const newLabels = ref<Array<string>>([''])

const showDialog = () => {
  dialogRef.value?.showModal()
}
const closeDialog = () => {
  dialogRef.value?.close()
}

function createQuote() {
  console.log(newQuote.value, newAuthor.value, newLabels.value)
}
</script>

<template>
  <dialog ref="dialogRef">
    <form @submit.prevent="createQuote">
      <p>Nouveau carnet</p>
      <label>
        Carnet :
        <input v-model="newQuote" type="text" id="create-quote" required />
      </label>
      <label>
        Auteur :
        <input v-model="newAuthor" type="text" id="create-author" required />
      </label>
      <label>
        Associer un label :
        <input v-model="newLabels" type="text" id="create-label" required />
      </label>
      <button type="submit" @submit="createQuote">Ajouter</button>
      <button @click="closeDialog">Fermer</button>
    </form>
  </dialog>
  <div>
    <h2>Liste des carnets :</h2>
    <button @click="showDialog">+ Crée un Carnet</button>
    <div>
      <label
        >Filtrer par nom :
        <input type="text" id="filter-quote" placeholder="abc.." />
      </label>
      <label
        >Filtrer par tags :
        <input type="text" id="filter-labels" />
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
    width: 100%;
    max-width: 1200px;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    background-color: var(--color-bg-secondary);
    border: 1px solid var(--obsidian-700);
    border-radius: 12px;
    padding: 1.5rem;

    > div {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
    }
  }
}
</style>
