import { defineStore } from 'pinia'

interface Recipe {
  title: string
  ingredients: string
  servings: string
  instructions: string
}

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [] as Recipe[],
  }),
  actions: {
    addFavorite(recipe: Recipe) {
      if (!this.favorites.some((fav) => fav.title === recipe.title)) {
        this.favorites.push(recipe)
      }
    },
  },
})
