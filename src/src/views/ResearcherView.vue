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
import { defineComponent, onMounted, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useResearcherStore } from '@/stores/researcherStore'

export default defineComponent({
  name: 'ResearcherView',
  setup() {
    const store = useResearcherStore()
    const { researchers } = storeToRefs(store)

    const researchersData = computed(() => researchers.value)

    onMounted(async () => {
      await store.loadResearchers()
    })

    const likeResearcher = async (id: number) => {
      await store.incrementLikes(id)
    }

    return {
      researchersData,
      likeResearcher,
    }
  },
})
</script>
