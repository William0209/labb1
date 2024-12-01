<template>
  <div class="container">
    <h1 class="page-title">Recept</h1>
    <input v-model="searchQuery" placeholder="Sök recept..." class="search-input" />
    <p v-if="loading" class="loading-text">Laddar recept...</p>
    <p v-if="!loading && filteredRecipes.length === 0" class="no-data-text">
      Inga recept matchar din sökning.
    </p>
    <div class="recipes-container" v-else>
      <RecipeItem
        v-for="recipe in filteredRecipes"
        :key="recipe.title"
        :recipe="recipe"
        @add-to-favorites="addToFavorites"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, onMounted } from 'vue'
import RecipeItem from '@/components/RecipeItem.vue'
import { useFavoritesStore } from '@/stores/favorites'
import axios from 'axios'

interface Recipe {
  title: string
  ingredients: string
  servings: string
  instructions: string
}

export default {
  components: { RecipeItem },
  setup() {
    const recipes = ref<Recipe[]>([])
    const loading = ref(true)
    const searchQuery = ref('')
    const favoritesStore = useFavoritesStore()

    // Computed-egenskap för att filtrera recept baserat på sökfältet
    const filteredRecipes = computed(() =>
      recipes.value.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
      ),
    )

    const fetchRecipes = async () => {
      const options = {
        method: 'GET',
        url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
        params: { query: 'italian' },
        headers: {
          'x-rapidapi-key': '5eeeff857cmshcaa191ab7f1b995p1388a0jsn1f3e7395ef3b',
          'x-rapidapi-host': 'recipe-by-api-ninjas.p.rapidapi.com',
        },
      }

      try {
        const response = await axios.request(options)
        recipes.value = response.data
      } catch (error) {
        console.error('Kunde inte hämta recept:', error)
      } finally {
        loading.value = false
      }
    }

    const addToFavorites = (recipe: Recipe) => {
      favoritesStore.addFavorite(recipe)
    }

    onMounted(fetchRecipes)

    return { recipes, loading, searchQuery, filteredRecipes, addToFavorites }
  },
}
</script>

<style>
.container {
  margin-top: 2rem;
  margin-bottom: 6rem;
}

.page-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #007bff;
}

.search-input {
  width: 100%;
  max-width: 400px;
  margin: 0 auto 1.5rem auto;
  display: block;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.loading-text,
.no-data-text {
  text-align: center;
  font-size: 1.2rem;
  color: #555;
}

.recipes-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem 1rem;
  padding: 0 1rem;
}

@media (max-width: 768px) {
  .recipes-container {
    grid-template-columns: 1fr; /* Alla kort visas i en kolumn på små skärmar */
    gap: 1rem;
  }
}
</style>
