<script setup lang="ts">
import { authService } from '@/api/axios'
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
    <h2>{{ me }}</h2>
  </div>
</template>

<style scoped></style>
