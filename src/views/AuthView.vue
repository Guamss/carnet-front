<script setup lang="ts"></script>

<template>
  <main>
    <form>
      <h1>Connexion</h1>
      <label>Nom d'utilisateur</label>
      <input placeholder="Yves" type="text" required />
      <!-- <ul>
        <li style="color: red">{{}}</li>
      </ul> -->
      <label>Mot de passe</label>
      <input placeholder="*******" type="password" required />
      <!-- <ul>
        <li style="color: red">{{}}</li>
      </ul> -->
      <button type="button">Se connecter</button>
    </form>
  </main>
</template>

<style scoped>
form {
  max-width: 600px;
  min-height: 500px;
  background-color: var(--color-bg-secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px 50px 5px 50px;
  margin: 100px auto 0;
  gap: 1rem;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  padding-bottom: 40px;
  border-radius: 10px;

  > h1 {
    text-align: center;
  }

  > input {
    border-radius: 0.5rem;
  }

  > input,
  button {
    padding: 12px;
  }

  > button {
    color: var(--color-text-primary);
    margin-top: 2rem;
    font-size: 16px;
    background-color: var(--color-alternative);
    border: none;
    border-radius: 0.5em;
    transition: 0.5s;
  }

  > button:hover {
    background-color: var(--color-text-secondary);
    cursor: pointer;
  }
}
</style>
