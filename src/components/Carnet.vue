<script setup lang="ts">
import type { Quote } from '@/models/carnet'

const { quote } = defineProps<{ quote: Quote }>()
</script>

<template>
  <div class="carnet-card">
    <div class="card-body">
      <div class="quote-container">
        <span class="quote-mark">«</span>
        <h3 class="quote-text">{{ quote.text }}</h3>
        <span class="quote-mark">»</span>
      </div>

      <div class="replacement-clause">
        <span class="label">à la place de</span>
        <span class="placeholder-text">« {{ quote.instead_of }} »</span>
      </div>
    </div>

    <div class="card-footer">
      <div class="author">
        dit par <span class="author-name">{{ quote.said_by.toUpperCase() }}</span>
      </div>
      <div class="badge">{{ quote.label }}</div>
    </div>
  </div>
</template>

<style scoped>
.carnet-card {
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--obsidian-700);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.carnet-card:hover {
  border-color: var(--color-accent);
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(147, 51, 234, 0.15);
}

.quote-container {
  display: flex;
  gap: 8px;
  align-items: flex-start;
}

.quote-mark {
  color: var(--color-accent);
  font-size: 1.8rem;
  font-family: serif;
  line-height: 1;
  font-weight: bold;
}

.quote-text {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-primary);
  line-height: 1.4;
}

.replacement-clause {
  margin-top: 0.75rem;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--purple-400);
  font-weight: 700;
}

.placeholder-text {
  color: var(--color-text-secondary);
  font-style: italic;
  font-size: 1rem;
}

.card-footer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--obsidian-700);
}

.author {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}

.author-name {
  color: var(--text-white);
  font-weight: 600;
}

.badge {
  font-size: 11px;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 6px;
  background-color: #ff8080;
  color: #800000; 
  border: 2px solid var(#800000);
  text-transform: uppercase;
}
</style>