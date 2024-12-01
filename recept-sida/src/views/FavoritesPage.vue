<template>
  <div class="fav-container">
    <h1 class="page-title">Favoriter</h1>
    <p v-if="favorites.length === 0" class="no-data-text">Inga favoritrecept än.</p>
    <div class="favorites-container" v-else>
      <div class="recipe-card" v-for="favorite in favorites" :key="favorite.title">
        <h3>{{ favorite.title }}</h3>
        <p><strong>Ingredienser:</strong> {{ favorite.ingredients.split('|').join(', ') }}</p>
        <p><strong>Portioner:</strong> {{ favorite.servings }}</p>
        <p><strong>Instruktioner:</strong> {{ favorite.instructions }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useFavoritesStore } from '@/stores/favorites'

export default {
  setup() {
    const favoritesStore = useFavoritesStore()
    return { favorites: favoritesStore.favorites }
  },
}
</script>

<style>
.fav-container {
  margin-top: 2rem;
  margin-bottom: 6rem;
}
.page-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #007bff;
}

.no-data-text {
  text-align: center;
  font-size: 1.2rem;
  color: #555;
}

.favorites-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem 1rem;
  padding: 0 1rem;
}

.recipe-card {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 1.5rem;
  background: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
