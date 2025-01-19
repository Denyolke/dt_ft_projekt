<template>
  <div class="container py-5">
    <h1 class="text-center mb-4 p-5">Researchers</h1>
    <div v-if="researchers.length > 0">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Likes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="researcher in researchers" :key="researcher.id">
            <td>{{ researcher.id }}</td>
            <td>{{ researcher.firstName }}</td>
            <td>{{ researcher.lastName }}</td>
            <td>{{ researcher.likes }}</td>
            <td>
              <button
                class="btn btn-primary btn-sm"
                @click="incrementLikes(researcher.id)"
              >
                Like
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p class="text-center">No researchers available.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useResearcherStore } from '@/stores/researcherStore'

export default defineComponent({
  name: 'ResearcherTable',
  data() {
    return {
      researchers: [] as { id: number; firstName: string; lastName: string; likes: number }[],
    }
  },
  created() {
    const store = useResearcherStore()

    store.loadResearchers()
    this.researchers = store.researchers

    this.incrementLikes = store.incrementLikes
  },
  methods: {
    incrementLikes(id: number) {
    },
  },
})
</script>
