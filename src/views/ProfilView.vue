<script setup lang="ts">
import { authService } from '@/api/axios';
import { useAuth } from '@/composables/useAuth';
import { onMounted, ref } from 'vue';
const {token} = useAuth();
const axiosClient = authService;
const me = ref();

onMounted(() => {
  if (token.value) {
    me.value = axiosClient.getUserProfile(token.value)
  }
})
</script>

<template>
  <h2>{{ me.value.data }}</h2>
</template>

<style scoped></style>
