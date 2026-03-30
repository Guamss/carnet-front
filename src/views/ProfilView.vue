<script setup lang="ts">
import { authService } from '@/api/axios'
import Carnet from '@/components/Carnet.vue'
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
  <div v-show="me">
    <h2 id="welcome">Bonjour {{ me?.username }} !</h2>
    <main v-show="me?.carnets" class="carnets">
      <Carnet v-for="q in me?.carnets" :quote="q"></Carnet>
    </main>
  </div>
</template>

<style scoped>

#welcome {
  text-align: center;
}

.carnets {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}

</style>
