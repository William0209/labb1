<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Hem</router-link>
        <router-link to="/favorites">Favoriter</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
}
</script>

<style>
/* Global styling */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
  color: #333;
}

header {
  background-color: #007bff;
  padding: 1rem;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
}

nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

main {
  padding: 1rem;
}
</style>
