<script setup lang="ts">
import { authService } from '@/api/axios'
import ListCarnet from '@/components/ListCarnet.vue'
import { useAuth } from '@/composables/useAuth'
import type { User } from '@/models/user'
import { onMounted, ref, type Ref } from 'vue'
const { token } = useAuth()
const axiosClient = authService
const me: Ref<User | undefined> = ref(undefined)

onMounted(async () => {
  if (token.value) {
    me.value = await axiosClient.getUserProfile(token.value)
  }
})
</script>

<template>
  <h2>Bonjour {{ me?.username }} !</h2>
  <p>Les carnets que tu as fait :</p>
  <div v-show="me?.carnets">
    <ListCarnet v-for="q in me?.carnets" :quote="q" :key="q.id"></ListCarnet>
  </div>
</template>

<style scoped>
main {
  > div {

    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 230px), 1fr));
    gap: 1.5rem;
    align-items: stretch;
  }
}
</style>
