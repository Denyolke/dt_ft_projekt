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
  }),

  actions: {
    loadResearchers() {
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
      }
    },

    saveToLocalStorage() {
      try {
        localStorage.setItem('researchers', JSON.stringify(this.researchers))
      } catch (error) {
        console.error('Error saving researchers:', error)
      }
    },
  },
})
