<script setup lang="ts">
import { authService, userService } from '@/api/axios'
import ListCarnet from '@/components/ListCarnet.vue'
import type { Quote } from '@/models/carnet'
import type { User } from '@/models/user'
import { onMounted, ref } from 'vue'
const dialogRef = ref<HTMLDialogElement | null>(null)

const newQuote = ref<string>('')
const newAuthor = ref<string>('')
const newLabels = ref<Array<string>>([''])
const quotes = ref<Quote[]>([])
const users = ref<User[]>([])

onMounted(async () => {
  quotes.value = await userService.listAllQuotes(0)
  users.value = await userService.listAllUser()
})

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
      <h2>Nouveau carnet</h2>
      <div class="input">
        <label> Carnet : </label>
        <input v-model="newQuote" type="text" id="create-quote" required />
      </div>
      <div class="input">
        <label> Auteur : </label>
        <input v-model="newAuthor" type="text" id="create-author" required />
      </div>
      <div class="input">
        <label> Associer un label : </label>
        <input v-model="newLabels" type="text" id="create-label" required />
      </div>
      <div>
        <button id="cancel" @click="closeDialog">Annuler</button>
        <button type="submit" @submit="createQuote">Ajouter</button>
      </div>
    </form>
  </dialog>
  <div>
    <h2>Liste des carnets :</h2>
    <div class="filter-section">
      <label
        >Filtrer par nom :
        <select name="cars" id="cars">
          <option value="0">TOUS</option>
          <option v-for="user in users" :value="user.id">{{ user.username.toUpperCase() }}</option>
        </select>
      </label>
      <label
        >Filtrer par carnet :
        <input type="text" id="filter-labels" placeholder="Lapin contre crétin..." />
      </label>
      <label
        >Filtrer par tags :
        <input type="text" id="filter-labels" placeholder="C'est chaud" />
      </label>
      <button @click="showDialog">+ Crée un Carnet</button>
    </div>
    <div>
      <ListCarnet v-for="quote in quotes" :quote="quote" />
    </div>
  </div>
  <section></section>
</template>
<style scoped>
.filter-section {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 2rem;
}

dialog {
  > form {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: space-evenly;
  }

  h2 {
    text-align: center;
  }

  div.input {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: stretch;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    > button {
      width: 45%;
    }
  }
}

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
