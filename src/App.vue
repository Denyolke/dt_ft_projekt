<template>
  <div id="app">
    <!-- Navbar Component -->
    <Navbar />

    <!-- Main Content (Dynamic Routing) -->
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './components/NavbarComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
  },
})
</script>

<style>
/* Global styles can be added here if necessary */
</style>
