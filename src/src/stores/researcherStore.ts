import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Researcher {
  id: number
  firstName: string
  lastName: string
  likes: number
}

export const useResearcherStore = defineStore('researcher', () => {
  const researchers = ref<Researcher[]>([])

  const loadResearchers = async () => {
    try {
      const storedResearchers = localStorage.getItem('researchers')
      if (storedResearchers) {
        researchers.value = JSON.parse(storedResearchers)
      } else {
        researchers.value = [
          { id: 1, firstName: 'John', lastName: 'Doe', likes: 0 },
          { id: 2, firstName: 'Jane', lastName: 'Smith', likes: 0 },
          { id: 3, firstName: 'Alice', lastName: 'Brown', likes: 0 },
          { id: 4, firstName: 'Bob', lastName: 'Johnson', likes: 0 },
          { id: 5, firstName: 'Charlie', lastName: 'Lee', likes: 0 },
          { id: 6, firstName: 'Diana', lastName: 'White', likes: 0 },
          { id: 7, firstName: 'Ethan', lastName: 'Green', likes: 0 },
          { id: 8, firstName: 'Fiona', lastName: 'Black', likes: 0 },
          { id: 9, firstName: 'George', lastName: 'Adams', likes: 0 },
          { id: 10, firstName: 'Hannah', lastName: 'Clark', likes: 0 },
        ]
        saveResearchers()
      }
    } catch (error) {
      console.error('Error loading researchers:', error)
    }
  }

  const incrementLikes = async (id: number) => {
    try {
      const researcher = researchers.value.find((res) => res.id === id)
      if (researcher) {
        researcher.likes++
        saveResearchers()
      }
    } catch (error) {
      console.error('Error incrementing likes:', error)
    }
  }

  const saveResearchers = () => {
    try {
      localStorage.setItem('researchers', JSON.stringify(researchers.value))
    } catch (error) {
      console.error('Error saving researchers:', error)
    }
  }

  return {
    researchers,
    loadResearchers,
    incrementLikes,
    saveResearchers,
  }
})
