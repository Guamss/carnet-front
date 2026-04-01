<script setup lang="ts">
import { authService } from '@/api/axios'
import ListCarnet from '@/components/ListCarnet.vue'
import { useAuth } from '@/composables/useAuth'
import type { User } from '@/models/user'
import { onMounted, ref, type Ref } from 'vue'
const { token } = useAuth()
const axiosClient = authService
const me: Ref<User | undefined> = ref(undefined)

//faut refacto ca c pas beau parceque y'aura de la redondance
// cmt on fait alors wallah ?
onMounted(async () => {
  if (token.value) {
    me.value = await axiosClient.getUserProfile(token.value)
  }
})
</script>

<template>
  <div>
    <h2>Les carnets que tu as dit :</h2>
  </div>
  <div v-if="me?.carnets">
    <ListCarnet :quotes="me.carnets"></ListCarnet>
  </div>
</template>

<style scoped>
main {
  > div {
    width: 100%;
    max-width: 1200px;
    margin: 1rem 0;

    &:first-child {
      display: flex;
      flex-direction: column;
      background-color: var(--color-bg-secondary);
      border: 1px solid var(--obsidian-700);
      border-radius: 12px;
      padding: 1.5rem;
    }
  }
}
</style>
