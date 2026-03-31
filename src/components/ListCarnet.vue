<script setup lang="ts">
import type { Quote } from '@/models/carnet'

defineProps<{ quote: Quote }>()
</script>

<template>
  <article>
    <blockquote>
      <div class="quote-container">
        <span class="quote-mark" aria-hidden="true">«</span>
        <h3 class="quote-text">{{ quote.text }}</h3>
        <span class="quote-mark" aria-hidden="true">»</span>
      </div>

      <p class="replacement-clause">
        <span class="label">à la place de</span>
        <cite class="placeholder-text">« {{ quote.instead_of }} »</cite>
      </p>
    </blockquote>

    <footer>
      <p>
        dit par <span class="author-name">{{ quote.said_by.toUpperCase() }}</span>
      </p>
      <span class="badge">{{ quote.label }}</span>
    </footer>
  </article>
</template>

<style scoped>
article {
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--obsidian-700);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  justify-content: space-evenly;

  &:hover {
    border-color: var(--color-accent);
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 8px 25px rgba(147, 51, 234, 0.15);
  }
  > blockquote {
    margin: 0 1.5rem;
  }
  > footer {
    padding-bottom: 0;
  }
  .quote-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

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
  }

  .replacement-clause {
    display: flex;
    flex-direction: column;
    align-items: center;

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
  }

  > footer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    padding-top: 1rem;
    border-top: 1px solid var(--obsidian-700);

    > p {
      font-size: 0.9rem;
      color: var(--color-text-secondary);

      .author-name {
        color: var(--text-white);
        font-weight: 600;
      }
    }

    .badge {
      font-size: 11px;
      font-weight: 800;
      padding: 4px 10px;
      border-radius: 6px;
      background-color: var(--badge-background-color);
      color: var(--badge-color);
      border: 2px solid #800000;
      text-transform: uppercase;
    }
  }
}
</style>
