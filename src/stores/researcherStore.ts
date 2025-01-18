import { defineStore } from 'pinia'
import researchersData from '@/data/researchers.json'

interface Researcher {
  id: number
  firstName: string
  lastName: string
  likes: number
}

export const useResearcherStore = defineStore('researcher', {
  state: () => ({
    researchers: [] as Researcher[],
    filters: {
      keyword: '',
    },
  }),

  getters: {
    filteredResearchers: (state) => {
      if (!state.filters.keyword) return state.researchers

      const keyword = state.filters.keyword.toLowerCase()

      return state.researchers.filter(
        (researcher) =>
          researcher.firstName.toLowerCase().includes(keyword) ||
          researcher.lastName.toLowerCase().includes(keyword),
      )
    },

    topResearchers: (state) => {
      return state.researchers
        .slice()
        .sort((a, b) => b.likes - a.likes)
        .slice(0, 5)
    },
  },

  actions: {
    async loadResearchers() {
      try {
        const storedResearchers = localStorage.getItem('researchers')
        this.researchers = storedResearchers ? JSON.parse(storedResearchers) : researchersData
        this.saveToLocalStorage()
      } catch (error) {
        console.error('Error loading researchers:', error)
      }
    },

    incrementLikes(id: number) {
      const researcher = this.researchers.find((res) => res.id === id)
      if (researcher) {
        researcher.likes++
        this.saveToLocalStorage()
      } else {
        console.warn(`Researcher with ID ${id} not found.`)
      }
    },

    saveToLocalStorage() {
      try {
        localStorage.setItem('researchers', JSON.stringify(this.researchers))
      } catch (error) {
        console.error('Error saving researchers:', error)
      }
    },

    updateFilters(filters: Partial<{ keyword: string }>) {
      this.filters = { ...this.filters, ...filters }
    },

    deleteResearcher(id: number) {
      this.researchers = this.researchers.filter((researcher) => researcher.id !== id)
      this.saveToLocalStorage()
    },

    updateResearcher(updatedResearcher: Researcher) {
      const index = this.researchers.findIndex((res) => res.id === updatedResearcher.id)
      if (index !== -1) {
        this.researchers[index] = {
          ...this.researchers[index],
          ...updatedResearcher,
        }
        this.saveToLocalStorage()
      } else {
        console.warn(`Researcher with ID ${updatedResearcher.id} not found.`)
      }
    },
  },
})
