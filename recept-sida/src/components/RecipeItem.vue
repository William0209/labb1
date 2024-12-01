<template>
  <div class="recipe-card">
    <h3>{{ recipe.title }}</h3>
    <p><strong>Ingredienser:</strong> {{ formattedIngredients }}</p>
    <p><strong>Portioner:</strong> {{ recipe.servings }}</p>
    <p><strong>Instruktioner:</strong> {{ recipe.instructions }}</p>
    <button class="add-button" :class="{ added: isAdded }" @click="handleAddToFavorites">
      {{ isAdded ? 'Tillagd' : 'Lägg till i favoriter' }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from 'vue'

interface Recipe {
  title: string
  ingredients: string
  servings: string
  instructions: string
}

export default defineComponent({
  props: {
    recipe: {
      type: Object as PropType<Recipe>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const isAdded = ref(false)

    const handleAddToFavorites = () => {
      if (!isAdded.value) {
        emit('add-to-favorites', props.recipe)
        isAdded.value = true
      }
    }

    // Computed-egenskap för att formatera ingredienser
    const formattedIngredients = computed(() => props.recipe.ingredients.split('|').join(', '))

    return { isAdded, handleAddToFavorites, formattedIngredients }
  },
})
</script>

<style>
.recipe-card {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 350px; /* Säkerställer konsekvent höjd */
}

.recipe-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #007bff;
}

.recipe-card p {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #555;
  margin-bottom: 0.5rem;
}

.add-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background: #007bff;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;
}

.add-button:hover {
  background: #0056b3;
}

.add-button.added {
  background: #28a745;
  cursor: default;
}

@media (max-width: 768px) {
  .recipe-card {
    padding: 1rem;
    min-height: 300px; /* Anpassa höjden för mobil */
  }

  .add-button {
    font-size: 0.9rem; /* Mindre knapptext för mobil */
    padding: 0.4rem 0.8rem;
  }
}
</style>
