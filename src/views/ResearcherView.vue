<template>
  <div class="container py-5" style="font-family: 'Segoe UI', Tahoma, Verdana, sans-serif">
    <h1 class="text-center mb-4 p-5">Our Researchers</h1>

    <div v-if="researchersData.length > 0">
      <table class="table table-striped table-light">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Likes Received</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="researcher in researchersData" :key="researcher.id">
            <td>{{ researcher.id }}</td>
            <td>{{ researcher.firstName }}</td>
            <td>{{ researcher.lastName }}</td>
            <td>{{ researcher.likes }}</td>
            <td>
              <button class="btn btn-primary btn-sm" @click="likeResearcher(researcher.id)">
                Like
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else>
      <p class="text-center">Loading researchers...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useResearcherStore } from '@/stores/researcherStore'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'ResearcherView',
  data() {
    return {
      researchersData: [] as { id: number; firstName: string; lastName: string; likes: number }[],
    }
  },
  created() {
    this.loadResearchers()
  },
  computed: {
    store() {
      return useResearcherStore()
    },
  },
  methods: {
    loadResearchers() {
      const { researchers } = storeToRefs(this.store)
      this.store.loadResearchers()
      this.researchersData = researchers.value
    },
    likeResearcher(id: number) {
      this.store.incrementLikes(id)
      this.researchersData = storeToRefs(this.store).researchers.value
    },
  },
})
</script>
