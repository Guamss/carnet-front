<script setup lang="ts">
import { authService } from '@/api/axios'
import ListCarnet from '@/components/ListCarnet.vue'
import { useAuth } from '@/composables/useAuth'
import type { User } from '@/models/user'
import { computed, onMounted, ref, type Ref } from 'vue'
const { token } = useAuth()
const axiosClient = authService
const me: Ref<User | undefined> = ref(undefined)

onMounted(async () => {
  if (token.value) {
    me.value = await axiosClient.getUserProfile(token.value)
  }
})
const emptySpace = computed(() => {
  const largeQuote = me?.value?.carnets.filter((carnet) => carnet.text.length < 15) || []
  return 3 - ((largeQuote.length % 3) % 3)
})
</script>

<template>
  <h2>Bonjour {{ me?.username }} !</h2>
  <p>Les carnets que tu as fait :</p>
  <div v-show="me?.carnets">
    <ListCarnet v-for="q in me?.carnets" :quote="q" :key="q.id"></ListCarnet>
    <div class="empty-article" v-for="e in emptySpace" :key="'empty-' + e" />
  </div>
</template>

<style scoped>
main {
  > div {
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    align-items: stretch;
    grid-auto-flow: dense;

    > .empty-article {
      background-color: var(--color-bg-deactivate);
      border: 1px solid var(--obsidian-700);
      border-radius: 12px;
    }
  }
  @media (max-width: 900px) {
    div {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 600px) {
    div {
      grid-template-columns: 1fr;
    }
  }
}
</style>
